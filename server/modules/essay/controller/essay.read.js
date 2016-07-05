'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
	Essay = mongoose.model('Essay'),

//----------------------------------------------------------------------------------------------------------------------
// Controllers
	
	error = require('../../error'),
	logger = require('../../logger');

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
	
	// get essays
	Essay.findById(req.query.essay)
		.populate('rubric', '_id name fields')
		.exec(function(err, essayDoc) {
			if (err) { 
				err = new Error(err);
				error.log(err); 
				return res.status(500).send(err);
			}
			
			// return essay
			return res.status(200).send(essayDoc);
		});
};