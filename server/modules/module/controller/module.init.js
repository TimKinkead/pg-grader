'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
	Module = mongoose.model('Module'),
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
 * MODULE.INIT
 * - Initialize modules by adding/updating mongodb modules collection.
 */
exports.init = function(req, res) {
	logger.filename(__filename);

	// module config
	var modules = require('../data/modules.js'),
		savedModules = 0;

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

			// upsert modules
			modules.forEach(function(module, index) {

				if (module && module.rubric && rubricByName[module.rubric]) {

					// grab rubric id
					module.rubric = rubricByName[module.rubric]._id;

					// look for existing module
					Module.findOne({id: module.id})
						.exec(function(err, moduleDoc) {
							if (err) { error.log(new Error(err)); return; }

							if (moduleDoc) {
								moduleDoc = _.extend(moduleDoc, module);
								moduleDoc.modified = new Date();
							} else {
								moduleDoc = new Module(module);
							}

							// save module
							moduleDoc.save(function(err) {
								if (err) { error.log(new Error(err)); return; }

								savedModules++;
								logger.arrow(savedModules+' - "'+moduleDoc.id+'" module saved');
							});
						});

				}
			});

			// done
			return res.status(200).send('Initializing Modules');
		});
};