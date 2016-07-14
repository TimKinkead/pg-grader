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
 * GROUP.READ
 * - Read an group.
 */
exports.read = function(req, res) {
	logger.filename(__filename);

	if (!req.query.group) {
		return res.status(400).send({message: '!req.query.group'});
	}
	
	// get groups
	Group.findById(req.query.group)
		.exec(function(err, groupDoc) {
			if (err) { 
				err = new Error(err);
				error.log(err); 
				return res.status(500).send(err);
			}
			
			// return group
			return res.status(200).send(groupDoc);
		});
};