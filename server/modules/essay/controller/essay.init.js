'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
	Essay = mongoose.model('Essay'),
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
 * ESSAY.INIT
 * - Initialize essays by adding/updating mongodb essays collection.
 */
exports.init = function(req, res) {
	logger.filename(__filename);

	// essay config
	var essays = require('../data/essays.js'),
		savedEssays = 0;

	// get rubrics
	Rubric.find()
		.select('_id name')
		.exec(function(err, rubricDocs) {
			if (err) {
				error.log(new Error(err));
				return res.status(500).send(err);
			}

			// construct rubrics name/_id map
			var rubricByName = {};
			rubricDocs.forEach(function(rubric) {
				if (rubric && rubric.name) {
					rubricByName[rubric.name] = rubric;
					rubricByName[rubric.name].count = 0;
				}
			});

			// upsert essays
			essays.forEach(function(essay, index) {

				if (essay && essay.rubric && rubricByName[essay.rubric]) {

					// only 5 essays for each rubric if running in development
					if (process.env.NODE_ENV === 'development' && rubricByName[essay.rubric].count >= 7) { return; }
					rubricByName[essay.rubric].count++;

					// grab rubric id
					essay.rubric = rubricByName[essay.rubric]._id;

					// look for existing essay
					Essay.findOne({name: essay.name})
						.exec(function(err, essayDoc) {
							if (err) { error.log(new Error(err)); return; }

							if (essayDoc) {
								essayDoc = _.extend(essayDoc, essay);
								essayDoc.modified = new Date();
							} else {
								essayDoc = new Essay(essay);
							}

							// save essay
							essayDoc.save(function(err) {
								if (err) { error.log(new Error(err)); return; }

								savedEssays++;
								if (process.env.NODE_ENV === 'development') {
									logger.arrow('essay '+savedEssays+' saved');
								} else {
									logger.arrow('essay '+(index+1)+'/'+essays.length+' saved');
								}
							});
						});

				}
			});

			// done
			return res.status(200).send('Initializing Essays');
		});
};