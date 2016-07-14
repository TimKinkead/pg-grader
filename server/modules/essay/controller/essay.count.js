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
 * ESSAY.COUNT
 * - Count all essays.
 */
exports.count = function(req, res) {
	logger.filename(__filename);

	// count essays
	Essay.count()
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