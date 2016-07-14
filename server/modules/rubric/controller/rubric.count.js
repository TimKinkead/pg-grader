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
 * RUBRIC.COUNT
 * - Count all rubrics.
 */
exports.count = function(req, res) {
	logger.filename(__filename);

	// count rubrics
	Rubric.count()
		.exec(function(err, qty) {
			if (err) { 
				err = new Error(err);
				error.log(err); 
				return res.status(500).send(err);
			}
			
			// return qty
			return res.status(200).send(qty ? qty.toString() : '');
		});
};