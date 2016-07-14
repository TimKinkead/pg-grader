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
	if (!req.user.group.modules) {
		error.log(new Error('!req.user.group.modules'));
		return res.status(500).send({error: '!req.user.group.modules'});
	}

	var firstEssay = (!req.user.scoresheets && !req.user.currentEssay),
		consensusFrequency = 5, // 10 = 10%
		performConsensusScore = (req.user.scoresheets >= consensusFrequency && (!req.user.consensusScores || req.user.consensusScores/req.user.scoresheets <= 1/consensusFrequency)),
		performCheckScore = ([1, 3, 7, 11].indexOf(req.user.scoresheets) > -1 || (req.user.scoresheets > 20 && req.user.scoresheets % 10 === 0));

	function done(essay) {
		logger.dash('done');
		if (req.user.lastModule && req.user.lastModule.toString() !== essay.module.toString()) {
			essay.newModule = true;
		}
		updateUser(req.user._id, essay);
		return res.status(200).send(essay);
	}

	// get any essay (first one -or- no more with lastRubric/lastPrompt)
	function getAnyEssay() {
		logger.dash('getAnyEssay');
		Essay.findOneAndUpdate(
			{
				module: {$in: req.user.group.modules},
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
					error.log(new Error(err));
					return res.status(500).send({message: 'We had trouble retrieving the essay. Please try again.'});
				}
				if (!essayDoc) {
					return res.status(200).send({message: 'all essays graded'});
				}
				done(essayDoc);
			});
	}

	// get any essay for consensus scoring
	/*function getAnyConsensusEssay() {
		logger.dash('getAnyConsensusEssay');
		Essay.findOneAndUpdate(
			{
				'scoresheets.0': {$exists: true},
				'scoresheets.1': {$exists: false},
				graders: {$ne: req.user._id},
				'skip.user': {$ne: req.user._id}
			},
			{$addToSet: {graders: req.user._id}}
		)
			.lean()
			.exec(function(err, essayDoc) {
				if (err) {
					error.log(new Error(err));
					return res.status(500).send({message: 'We had trouble retrieving the essay. Please try again.'});
				}
				if (!essayDoc) {
					getAnyEssay();
					return;
				}
				essayDoc.consensusScore = true;
				done(essayDoc);
			});
	}*/

	// get next essay (with same rubric & prompt)
	function getNextEssay() {
		logger.dash('getNextEssay');
		Essay.findOneAndUpdate(
			{
				module: req.user.lastModule,
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
					error.log(new Error(err)); 
					return res.status(500).send({message: 'We had trouble retrieving the essay. Please try again.'});
				}
				if (!essayDoc) {
					getAnyEssay();
					return;
				}
				done(essayDoc);
			});
	}

	// get essay for consensus scoring (same rubric & prompt)
	/*function getConsensusEssay() {
		logger.dash('getConsensusEssay');
		Essay.findOneAndUpdate(
			{
				module: req.user.lastModule,
				'scoresheets.0': {$exists: true},
				'scoresheets.1': {$exists: false},
				graders: {$ne: req.user._id},
				'skip.user': {$ne: req.user._id}
			},
			{$addToSet: {graders: req.user._id}}
		)
			.lean()
			.exec(function(err, essayDoc) {
				if (err) {
					error.log(new Error(err));
					return res.status(500).send({message: 'We had trouble retrieving the essay. Please try again.'});
				}
				if (!essayDoc) {
					getNextEssay();
					return;
				}
				essayDoc.consensusScore = true;
				done(essayDoc);
			});
	}*/

	function getInProgressEssay() {
		logger.dash('getInProgressEssay');
		Essay.findOneAndUpdate(
			{
				module: {$in: req.user.group.modules},
				graders: req.user._id,
				gradedBy: {$ne: req.user._id},
				'skip.user': {$ne: req.user._id}
			},
			{$addToSet: {graders: req.user._id}}
		)
			.lean()
			.exec(function(err, essayDoc) {
				if (err) {
					error.log(new Error(err));
					return res.status(500).send({message: 'We had trouble retrieving the essay. Please try again.'});
				}
				if (!essayDoc) {
					getNextEssay();
					return;
				}
				done(essayDoc);
			});
	}

	function getCheckEssay() {
		logger.dash('getCheckEssay');
		Essay.findOneAndUpdate(
			{
				masterScore: true,
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
					return res.status(500).send({message: 'We had trouble retrieving the essay. Please try again.'});
				}
				if (!essayDoc) {
					getInProgressEssay();
					return;
				}
				done(essayDoc);
			});
	}
	
	function getCurrentEssay() {
		logger.dash('getCurrentEssay');
		Essay.findOneAndUpdate(
			{_id: req.user.currentEssay},
			{$addToSet: {graders: req.user._id}}
		)
			.lean()
			.exec(function(err, essayDoc) {
				if (err) {
					error.log(new Error(err));
					return res.status(500).send({message: 'We had trouble retrieving the essay. Please try again.'});
				}
				if (!essayDoc) {
					if (performCheckScore) {
						getCheckEssay();
					} else {
						getInProgressEssay();
					}
					return;
				}
				done(essayDoc);
			});
	}

	function getFirstEssay() {
		logger.dash('getFirstEssay');
		Essay.findOneAndUpdate(
			{
				masterScore: {$ne: true},
				module: req.user.group.modules[0],
				'graders.0': {$exists: false},
				'gradedBy.0': {$exists: false},
				'skip.4': {$exists: false}
			},
			{$addToSet: {graders: req.user._id}}
		)
			.lean()
			.exec(function(err, essayDoc) {
				if (err) {
					error.log(new Error(err));
					return res.status(500).send({message: 'We had trouble retrieving the essay. Please try again.'});
				}
				if (!essayDoc) {
					error.log(new Error('!essayDoc'));
					return res.status(500).send({message: 'We had trouble retrieving the essay. Please try again.'});
				}
				done(essayDoc);
			});
	}
	
	// start
	if (req.user.currentEssay) {
		getCurrentEssay();
	} else if (firstEssay) {
		getFirstEssay();
	} else if (performCheckScore) {
		getCheckEssay();
	} else {
		getInProgressEssay();
	}
	/*
	} else if (performConsensusScore) {
		getConsensusEssay();
	} else if (req.user.lastModule) {
		getNextEssay();
	} else {
		getAnyEssay();
	}
	*/
};