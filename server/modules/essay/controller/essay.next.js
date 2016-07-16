'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
	Essay = mongoose.model('Essay'),
	Rubric = mongoose.model('Rubric'),
	User = mongoose.model('User'),

//----------------------------------------------------------------------------------------------------------------------
// Controllers
	
	error = require('../../error'),
	logger = require('../../logger');

//----------------------------------------------------------------------------------------------------------------------
// Methods

function updateUser(userId, essay) {
	if (!userId) {
		error.log(new Error('!userId'));
		return;
	}
	if (!essay || !essay._id || !essay.module) {
		error.log(new Error('!essay || !essay._id || !essay.module'));
		return;
	}
	User.update(
		{_id: userId},
		{
			$set: {
				lastModule: essay.module,
				currentEssay: essay._id
			}
		},
		function(err) {
			if (err) {
				error.log(new Error(err));
			}
		}
	);
}

//----------------------------------------------------------------------------------------------------------------------
// Main

/**
 * ESSAY.NEXT
 * - Get next essay to be graded.
 */
exports.next = function(req, res) {
	logger.filename(__filename);
	
	// check user
	if (!req.user) {
		return res.sendStatus(403);
	}
	if (!req.user.group) {
		error.log(new Error('!req.user.group'));
		return res.status(500).send({error: '!req.user.group'});
	}
	if (!req.user.group.modules || !req.user.group.modules.length) {
		error.log(new Error('!req.user.group.modules'));
		return res.status(500).send({error: '!req.user.group.modules'});
	}

	//  variables
	var moduleId = (req.user.lastModule) ? req.user.lastModule : req.user.group.modules[0],
		nextModule,
		currentEssay,
		firstEssay,
		randomEssay,
		checkEssay,
		gradeAllEssay;

	// error message
	function errorMessage(err) {
		if (err) { error.log(new Error(err)); }
		return res.status(500).send({
			message: 'We had trouble retrieving the essay. Please try again.',
			error: err
		});
	}

	// done
	function done(essay) {
		logger.dash('done');
		if (!essay) {
			errorMessage(new Error('!essay'));
			return;
		}
		if (req.user.lastModule && req.user.lastModule.toString() !== essay.module.toString()) {
			essay.newModule = true;
		}
		updateUser(req.user._id, essay);
		return res.status(200).send(essay);
	}

	// -- ANY ESSAY --

	// get any essay
	function getAnyEssay() {
		logger.dash('getAnyEssay');
		Essay.findOneAndUpdate(
			{
				module: {$in: req.user.group.modules},
				gradedBy: {$ne: req.user._id},
				'skip.user': {$ne: req.user._id}
			},
			{$addToSet: {graders: req.user._id}}
		)
			.lean()
			.exec(function(err, essayDoc) {
				if (err) {
					error.log(new Error(err));
					return;
				}
				if (!essayDoc) {
					return res.status(200).send({message: 'all essays graded'});
				}
				done(essayDoc);
			});
	}

	// -- NEXT ESSAY --

	// get any next essay
	function getAnyNextEssay() {
		logger.dash('getAnyNextEssay');
		Essay.findOneAndUpdate(
			{
				module: moduleId,
				'gradedBy.0': {$exists: false},
				'skip.user': {$ne: req.user._id},
				'skip.4': {$exists: false}
			},
			{$addToSet: {graders: req.user._id}}
		)
			.lean()
			.exec(function(err, essayDoc) {
				if (err) {
					errorMessage(new Error(err));
					return;
				}
				if (!essayDoc) {
					nextModule();
					return;
				}
				done(essayDoc);
			});
	}

	// get next essay
	function getNextEssay() {
		logger.dash('getNextEssay');
		Essay.findOneAndUpdate(
			{
				module: moduleId,
				$or: [
					{
						'graders.0': {$exists: false},
						'gradedBy.0': {$exists: false}
					},
					{
						gradeAll: true,
						gradedBy: {$ne: req.user._id}
					}
				],
				'skip.user': {$ne: req.user._id},
				'skip.4': {$exists: false}
			},
			{$addToSet: {graders: req.user._id}}
		)
			.lean()
			.exec(function(err, essayDoc) {
				if (err) { 
					errorMessage(new Error(err)); 
					return;
				}
				if (!essayDoc) {
					getAnyNextEssay();
					return;
				}
				done(essayDoc);
			});
	}

	// -- IN PROGRESS ESSAY --

	function getInProgressEssay() {
		logger.dash('getInProgressEssay');
		Essay.findOneAndUpdate(
			{
				graders: req.user._id,
				'skip.user': {$ne: req.user._id}
			},
			{$addToSet: {graders: req.user._id}}
		)
			.lean()
			.exec(function(err, essayDoc) {
				if (err) {
					errorMessage(new Error(err));
					return;
				}
				if (!essayDoc) {
					getNextEssay();
					return;
				}
				done(essayDoc);
			});
	}

	// -- GRADE ALL ESSAY --

	function getGradeAllEssay() {
		logger.dash('getGradeAllEssay');
		Essay.findOneAndUpdate(
			{
				module: moduleId,
				masterScore: {$ne: true},
				gradeAll: true,
				gradedBy: {$ne: req.user._id},
				'skip.user': {$ne: req.user._id}
			},
			{$addToSet: {graders: req.user._id}}
		)
			.lean()
			.exec(function(err, essayDoc) {
				if (err) {
					errorMessage(new Error(err));
					return;
				}
				if (!essayDoc) {
					getInProgressEssay();
					return;
				}
				done(essayDoc);
			});
	}

	// -- CHECK ESSAY --

	function getCheckEssay() {
		logger.dash('getCheckEssay');
		Essay.findOneAndUpdate(
			{
				module: moduleId,
				masterScore: true,
				gradedBy: {$ne: req.user._id},
				'skip.user': {$ne: req.user._id}
			},
			{$addToSet: {graders: req.user._id}}
		)
			.lean()
			.exec(function(err, essayDoc) {
				if (err) {
					errorMessage(new Error(err));
					return;
				}
				if (!essayDoc) {
					getInProgressEssay();
					return;
				}
				done(essayDoc);
			});
	}

	// -- RANDOM ESSAY --

	function getAnyRandomEssay() {
		logger.dash('getAnyRandomEssay');
		Essay.findOneAndUpdate(
			{
				module: moduleId,
				masterScore: {$ne: true},
				gradeAll: {$ne: true},
				'skip.user': {$ne: req.user._id}
			},
			{$addToSet: {graders: req.user._id}}
		)
			.lean()
			.exec(function(err, essayDoc) {
				if (err) {
					errorMessage(new Error(err));
					return;
				}
				if (!essayDoc) {
					getInProgressEssay();
					return;
				}
				done(essayDoc);
			});
	}

	function getRandomEssay() {
		logger.dash('getRandomEssay');
		Essay.findOneAndUpdate(
			{
				module: moduleId,
				masterScore: {$ne: true},
				gradeAll: {$ne: true},
				'graders.0': {$exists: false},
				'gradedBy.0': {$exists: false},
				'skip.user': {$ne: req.user._id},
				'skip.4': {$exists: false}
			},
			{$addToSet: {graders: req.user._id}}
		)
			.lean()
			.exec(function(err, essayDoc) {
				if (err) {
					errorMessage(new Error(err));
					return;
				}
				if (!essayDoc) {
					getAnyRandomEssay();
					return;
				}
				done(essayDoc);
			});
	}

	// -- FIRST ESSAY --

	function getAnyFirstEssay() {
		logger.dash('getAnyFirstEssay');
		Essay.findOneAndUpdate(
			{
				module: moduleId,
				masterScore: {$ne: true}
			},
			{$addToSet: {graders: req.user._id}}
		)
			.lean()
			.exec(function(err, essayDoc) {
				if (err) {
					errorMessage(new Error(err));
					return;
				}
				if (!essayDoc) {
					errorMessage(new Error('!essayDoc'));
					return;
				}
				done(essayDoc);
			});
	}

	function getFirstEssay() {
		logger.dash('getFirstEssay');
		Essay.findOneAndUpdate(
			{
				module: moduleId,
				masterScore: {$ne: true},
				gradeAll: {$ne: true},
				'graders.0': {$exists: false},
				'gradedBy.0': {$exists: false},
				'skip.4': {$exists: false}
			},
			{$addToSet: {graders: req.user._id}}
		)
			.lean()
			.exec(function(err, essayDoc) {
				if (err) {
					errorMessage(new Error(err));
					return;
				}
				if (!essayDoc) {
					getAnyFirstEssay();
					return;
				}
				done(essayDoc);
			});
	}

	// -- CURRENT ESSAY --

	function getCurrentEssay() {
		logger.dash('getCurrentEssay');
		Essay.findOneAndUpdate(
			{_id: currentEssay},
			{$addToSet: {graders: req.user._id}}
		)
			.lean()
			.exec(function(err, essayDoc) {
				if (err) {
					errorMessage(new Error(err));
					return;
				}
				if (!essayDoc) {
					if (randomEssay) {
						getRandomEssay();
					} else if (checkEssay) {
						getCheckEssay();
					} else if (gradeAllEssay) {
						getGradeAllEssay();
					} else {
						getInProgressEssay();
					}
					return;
				}
				done(essayDoc);
			});
	}

	function getEssay() {
		if (currentEssay) {
			getCurrentEssay();
		} else if (firstEssay) {
			getFirstEssay();
		} else if (randomEssay) {
			getRandomEssay();
		} else if (checkEssay) {
			getCheckEssay();
		} else if (gradeAllEssay) {
			getGradeAllEssay();
		} else {
			getInProgressEssay();
		}
	}

	function checkEssayType() {
		currentEssay = req.user.currentEssay;
		firstEssay = Boolean(!req.user.scoresheets || !req.user.scoresheetsByModule || !req.user.scoresheetsByModule[moduleId]);
		var essayNo = (req.user.scoresheetsByModule && req.user.scoresheetsByModule[moduleId]) ?
			req.user.scoresheetsByModule[moduleId] : req.user.scoresheets;
		if ([1, 3, 5, 6, 7, 9, 10, 11].indexOf(essayNo+1) > -1) {
			randomEssay = true;
		} else if (!req.user.facilitator && [2, 4, 8, 12].indexOf(essayNo+1) > -1) {
			checkEssay = true;
		} else if ([13, 14, 15].indexOf(essayNo+1) > -1) {
			gradeAllEssay = true;
		}
		getEssay();
	}

	// go to next module
	nextModule = function() {
		var moduleIndex = req.user.group.modules.indexOf(moduleId);
		if (req.user.group.modules[moduleIndex+1]) {
			moduleId = req.user.group.modules[moduleIndex+1];
			checkEssayType();
		} else {
			getAnyEssay();
		}
	};
	
	// start
	checkEssayType();
};