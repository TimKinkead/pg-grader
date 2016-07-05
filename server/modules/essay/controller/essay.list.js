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
 * ESSAY.LIST
 * - List all essays.
 */
exports.list = function(req, res) {
	logger.filename(__filename);

	// get essays
	Essay.find()
		.exec(function(err, essayDocs) {
			if (err) { 
				err = new Error(err);
				error.log(err); 
				return res.status(500).send(err);
			}
			
			// return essays
			return res.status(200).send(essayDocs);
		});
};