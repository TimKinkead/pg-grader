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
 * GROUP.LIST
 * - List all groups.
 */
exports.list = function(req, res) {
	logger.filename(__filename);

	// get groups
	Group.find()
		.populate('modules', '_id id name grade subject')
		.exec(function(err, groupDocs) {
			if (err) { 
				err = new Error(err);
				error.log(err); 
				return res.status(500).send(err);
			}
			
			// return groups
			return res.status(200).send(groupDocs);
		});
};