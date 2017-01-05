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
 * MODULE.UPDATE
 * - Update a module.
 */
exports.update = function(req, res) {
	logger.filename(__filename);

	// check module _id
	if (!req.body._id) {
		return res.status(400).send({message: '!req.body._id'});
	}
	
	// variables
	var query = {_id: req.body._id},
		update = {$set: {}},
		updateFields = [
			'googleDriveFolderId'
		];
	
	// construct update variable
	for (var key in req.body) {
		if (req.body.hasOwnProperty(key) && updateFields.indexOf(key) > -1) {
			update.$set[key] = req.body[key];
		}
	}
	
	// update module
	Module.update(query, update, function(err) {
		if (err) { 
			err = new Error(err);
			error.log(err); 
			return res.status(500).send(err);
		}
		
		// return module
		return res.sendStatus(200);
	});
};