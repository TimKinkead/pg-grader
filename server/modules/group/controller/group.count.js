'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
	Group = mongoose.model('Group'),

//----------------------------------------------------------------------------------------------------------------------
// Controllers
	
	error = require('../../error'),
	logger = require('../../logger');

//----------------------------------------------------------------------------------------------------------------------
// Main

/**
 * GROUP.COUNT
 * - Count all groups.
 */
exports.count = function(req, res) {
	logger.filename(__filename);

	// count groups
	Group.count()
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