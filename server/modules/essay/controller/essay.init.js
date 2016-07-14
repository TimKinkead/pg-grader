'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
	Essay = mongoose.model('Essay'),
	Module = mongoose.model('Module'),

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

	// get modules
	Module.find()
		.select('_id id')
		.exec(function(err, moduleDocs) {
			if (err) {
				error.log(new Error(err));
				return res.status(500).send(err);
			}

			// construct modules id map
			var modulesById = {};
			moduleDocs.forEach(function(module) {
				if (module && module.id) {
					modulesById[module.id] = module;
					modulesById[module.id].count = 0;
				}
			});

			// upsert essays
			essays.forEach(function(essay, index) {

				if (essay && essay.module) {
					
					// construct link
					essay.link = 'https://s3-us-west-2.amazonaws.com/pg-scoresheet/student-work/'+modulesById[essay.module].id+'/'+essay.filename;

					// only 5 essays for each module if running in development
					if (process.env.NODE_ENV === 'development' &&
						modulesById[essay.module] && modulesById[essay.module].count >= 5) {
						return;
					}
					modulesById[essay.module].count++;

					// grab module id
					essay.module = modulesById[essay.module]._id;
				}

				// look for existing essay
				Essay.findOne({id: essay.id})
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
			});

			// done
			return res.status(200).send('Initializing Essays');
		});
};