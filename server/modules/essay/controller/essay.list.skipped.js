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
 * ESSAY.LIST.SKIPPED
 * - List skipped essays.
 */
exports.listSkipped = function(req, res) {
	logger.filename(__filename);

	if (!req.user) { return res.sendStatus(403); }
	
	var query = (req.user.admin) ? {'skip.0': {$exists: true}} : {'skip.user': req.user._id};
	
	// get essays
	Essay.find(query)
		.populate('skip.user', '_id name')
		.lean()
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