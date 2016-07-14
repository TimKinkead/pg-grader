'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
	ScoreSheet = mongoose.model('ScoreSheet'),

//----------------------------------------------------------------------------------------------------------------------
// Controllers
	
	error = require('../../error'),
	logger = require('../../logger');

//----------------------------------------------------------------------------------------------------------------------
// Main

/**
 * SCORESHEET.COUNT
 * - Count all scoresheets.
 */
exports.count = function(req, res) {
	logger.filename(__filename);

	// count scoresheets
	ScoreSheet.count()
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