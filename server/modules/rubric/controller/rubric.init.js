'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
	Rubric = mongoose.model('Rubric'),

//----------------------------------------------------------------------------------------------------------------------
// Dependencies
	
	_ = require('lodash'),

//----------------------------------------------------------------------------------------------------------------------
// Controllers
	
	error = require('../../error'),
	logger = require('../../logger');

//----------------------------------------------------------------------------------------------------------------------
// Main

/**
 * RUBRIC.INIT
 * - Initialize rubrics by adding/updating mongodb rubrics collection.
 */
exports.init = function(req, res) {
	logger.filename(__filename);

	// rubric config
	var rubrics = require('../data/rubrics.js');

	// upsert rubrics
	rubrics.forEach(function(rubric, index) {

		// look for existing rubric
		Rubric.findOne({id: rubric.id})
			.exec(function(err, rubricDoc) {
				if (err) { error.log(new Error(err)); return; }
				
				if (rubricDoc) {
					rubricDoc = _.extend(rubricDoc, rubric);
					rubricDoc.modified = new Date();
				} else {
					rubricDoc = new Rubric(rubric);
				}
				
				// save rubric
				rubricDoc.save(function(err) {
					if (err) { error.log(new Error(err)); return; }
					
					logger.arrow('rubric '+(index+1)+'/'+rubrics.length+' saved');
				});
			});
	});

	// done
	return res.status(200).send('Initializing Rubrics');
};