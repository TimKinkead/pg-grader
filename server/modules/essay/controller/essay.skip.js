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
// Main

/**
 * ESSAY.SKIP
 * - Skip an essay.
 */
exports.skip = function(req, res) {
	logger.filename(__filename);

	if (!req.user) {
		return res.status(400).send({message: '!req.user'});
	} else if (!req.body.essay) {
		return res.status(400).send({message: '!req.body.essay'});
	} else if (!req.body.reason) {
		return res.status(400).send({message: '!req.body.reason'});
	}
	
	// update essay
	Essay.update(
		{
			_id: req.body.essay,
			'skip.user': {$ne: req.user._id}
		},
		{
			$push: {skip: {user: req.user._id, reason: req.body.reason}},
			$pull: {graders: req.user._id}
		},
		function(err) {
			if (err) {
				error.log(new Error(err));
				return res.status(500).send(err);
			}
			
			// update user
			User.update(
				{_id: req.user._id},
				{$unset: {currentEssay: true}},
				function(err) {
					if (err) {
						error.log(new Error(err));
						return res.status(500).send(err);
					}

					// return success
					return res.sendStatus(200);
				}
			);
		}
	);
};