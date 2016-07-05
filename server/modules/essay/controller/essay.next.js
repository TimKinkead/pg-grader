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
	User.update(
		{_id: userId},
		{
			$set: {
				lastPrompt: essay.prompt,
				lastRubric: essay.rubric,
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

	var consensusFrequency = 5, // 10 = 10%
		performConsensusScore = (req.user.scoresheets >= consensusFrequency && (!req.user.consensusScores || req.user.consensusScores/req.user.scoresheets <= 1/consensusFrequency));

	console.log('performConsensusScore', performConsensusScore);

	if (!req.user) { return res.sendStatus(403); }

	function done(essay, consensusScore) {
		if (req.user.lastPrompt && req.user.lastPrompt !== essay.prompt) {
			essay.newPrompt = true;
		}
		if (req.user.lastRubric && req.user.lastRubric.toString() !== essay.rubric.toString()) {
			essay.newRubric = true;
		}
		if (consensusScore) {
			essay.consensusScore = true;
		}
		updateUser(req.user._id, essay);
		return res.status(200).send(essay);
	}

	// get any essay (first one -or- no more with lastRubric/lastPrompt)
	function getAnyEssay() {
		logger.log('getAnyEssay');
		Essay.findOneAndUpdate(
			{
				'graders.0': {$exists: false},
				'scoresheets.0': {$exists: false},
				'skip.user': {$ne: req.user._id},
				'skip.1': {$exists: false}
			},
			{$push: {graders: req.user._id}}
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
	function getAnyConsensusEssay() {
		logger.log('getAnyConsensusEssay');
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
				done(essayDoc, true);
			});
	}

	// get next essay (with same rubric & prompt)
	function getNextEssay() {
		logger.log('getNextEssay');
		Essay.findOneAndUpdate(
			{
				prompt: req.user.lastPrompt,
				'graders.0': {$exists: false},
				'scoresheets.0': {$exists: false},
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
					if (performConsensusScore) {
						getAnyConsensusEssay();
					} else {
						getAnyEssay();
					}
					return;
				}
				done(essayDoc);
			});
	}

	// get essay for consensus scoring (same rubric & prompt)
	function getConsensusEssay() {
		logger.log('getConsensusEssay');
		Essay.findOneAndUpdate(
			{
				prompt: req.user.lastPrompt,
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
				done(essayDoc, true);
			});
	}

	function getCurrentEssay() {
		logger.log('getCurrentEssay');
		Essay.findOneAndUpdate(
			{
				_id: req.user.currentEssay,
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
					if (performConsensusScore) {
						getConsensusEssay();
					} else {
						getNextEssay();
					}
					return;
				}
				done(essayDoc);
			});
	}
	
	// start
	if (req.user.currentEssay) {
		getCurrentEssay();
	} else if (performConsensusScore) {
		getConsensusEssay();
	} else if (req.user.lastRubric && req.user.lastPrompt) {
		getNextEssay();
	} else {
		getAnyEssay();
	}
};