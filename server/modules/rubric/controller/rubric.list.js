'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
	Rubric = mongoose.model('Rubric'),

//----------------------------------------------------------------------------------------------------------------------
// Controllers
	
	error = require('../../error'),
	logger = require('../../logger');

//----------------------------------------------------------------------------------------------------------------------
// Main

/**
 * RUBRIC.LIST
 * - List all rubrics.
 */
exports.list = function(req, res) {
	logger.filename(__filename);

	// get rubrics
	Rubric.find()
		.exec(function(err, rubricDocs) {
			if (err) { 
				err = new Error(err);
				error.log(err); 
				return res.status(500).send(err);
			}
			
			// return rubrics
			return res.status(200).send(rubricDocs);
		});
};