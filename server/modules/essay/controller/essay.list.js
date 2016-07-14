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

	if (!req.user) { return res.sendStatus(403); }

	// build query
	var query;
	if (req.user.admin) {
		query = (req.query.module) ? {module: req.query.module} : {};
	} else {
		if (!req.user.group || !req.user.group.modules) {
			var err = '!req.user.group || !req.user.group.modules';
			error.log(new Error(err));
			return res.status(500).send({error: err});
		}
		query = {module: {$in: req.user.group.modules}};
	}

	// get essays
	Essay.find(query)
		//.sort('id')
		//.skip(req.query.skip ? Number(req.query.skip) : null)
		//.limit(req.query.limit ? Number(req.query.limit) : null)
		.populate('module', '_id id name')
		.populate('scoresheets', '_id user score masterScore')
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