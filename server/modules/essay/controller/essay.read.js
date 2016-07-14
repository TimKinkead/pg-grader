'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
	Essay = mongoose.model('Essay'),
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
				lastModule: essay.module._id,
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

function updateEssay(essayId, userId) {
	Essay.update(
		{_id: essayId},
		{$addToSet: {graders: userId}},
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
 * ESSAY.READ
 * - Read an essay.
 */
exports.read = function(req, res) {
	logger.filename(__filename);

	if (!req.query.essay) {
		return res.status(400).send({message: '!req.query.essay'});
	}
	
	// get essay for grading
	if (req.query.grading) {
		Essay.findById(req.query.essay)
			.populate('module', '_id id name abbv grade subject prompt promptExtra rubric')
			.populate('scoresheets', '_id user masterScore')
			.exec(function(err, essayDoc) {
				if (err) {
					err = new Error(err);
					error.log(err);
					return res.status(500).send(err);
				}
				
				updateUser(req.user._id, essayDoc);
				updateEssay(essayDoc._id, req.user._id);
				
				return res.status(200).send(essayDoc);
			});
	}
	
	// get full essay for view details / score comparison
	else if (req.query.full) {
		Essay.findById(req.query.essay)
			.populate('module', '_id id name abbv grade subject prompt promptExtra rubric')
			.populate('graders', '_id name')
			.populate('gradedBy', '_id name')
			.populate('scoresheets', '_id user rubric score masterScore')
			.populate('skip.user', '_id name')
			.exec(function(err, essayDoc) {
				if (err) {
					err = new Error(err);
					error.log(err);
					return res.status(500).send(err);
				}

				// return essay
				return res.status(200).send(essayDoc);
			});
	}
	
	// get essay
	else {
		Essay.findById(req.query.essay)
			.populate('module', '_id id name abbv grade subject prompt promptExtra rubric')
			.exec(function(err, essayDoc) {
				if (err) {
					err = new Error(err);
					error.log(err);
					return res.status(500).send(err);
				}

				// return essay
				return res.status(200).send(essayDoc);
			});	
	}
};