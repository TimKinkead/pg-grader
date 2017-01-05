'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
	Module = mongoose.model('Module'),

//----------------------------------------------------------------------------------------------------------------------
// Controllers
	
	error = require('../../error'),
	logger = require('../../logger');

//----------------------------------------------------------------------------------------------------------------------
// Main

/**
 * MODULE.LIST
 * - List all modules.
 */
exports.list = function(req, res) {
	logger.filename(__filename);

	// build query
	var query;
	if (req.user.admin) {
		query = {};
	} else if (req.user.group && req.user.group.modules) {
		query = {_id: {$in: req.user.group.modules}};
	} else {
		query = {};
	}

	// get modules
	Module.find(query)
		.sort('name')
		.exec(function(err, moduleDocs) {
			if (err) { 
				err = new Error(err);
				error.log(err); 
				return res.status(500).send(err);
			}
			
			// return modules
			return res.status(200).send(moduleDocs);
		});
};