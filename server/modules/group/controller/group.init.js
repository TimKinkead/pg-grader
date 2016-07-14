'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
	Group = mongoose.model('Group'),
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
 * GROUP.INIT
 * - Initialize groups by adding/updating mongodb groups collection.
 */
exports.init = function(req, res) {
	logger.filename(__filename);

	// group config
	var groups = require('../data/groups.js'),
		savedGroups = 0;

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
				}
			});
			console.log(JSON.stringify(modulesById, null, 4));

			// upsert groups
			groups.forEach(function(group) {

				// grab module _ids
				if (group && group.modules && group.modules.length) {
					console.log('group modules = '+JSON.stringify(group.modules));
					var newModules = [];
					group.modules.forEach(function (moduleId) {
						if (modulesById[moduleId]) {
							newModules.push(modulesById[moduleId]._id);
						}
					});
					group.modules = newModules;
				}

				// look for existing group
				Group.findOne({id: group.id})
					.exec(function(err, groupDoc) {
						if (err) { error.log(new Error(err)); return; }

						if (groupDoc) {
							groupDoc = _.extend(groupDoc, group);
							groupDoc.modified = new Date();
						} else {
							groupDoc = new Group(group);
						}

						// save group
						groupDoc.save(function(err) {
							if (err) { error.log(new Error(err)); return; }

							savedGroups++;
							logger.arrow(savedGroups+' - "'+groupDoc.id+'" group saved');
						});
					});
			});

			// done
			return res.status(200).send('Initializing Groups');
		});
};