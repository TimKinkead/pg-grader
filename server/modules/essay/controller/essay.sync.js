'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
	Essay = mongoose.model('Essay'),
	Module = mongoose.model('Module'),

//----------------------------------------------------------------------------------------------------------------------
// Dependencies
	
	_ = require('lodash'),
	google = require('googleapis'),

//----------------------------------------------------------------------------------------------------------------------
// Controllers
	
	error = require('../../error'),
	logger = require('../../logger');

//----------------------------------------------------------------------------------------------------------------------
// Methods

function getGoogleDrive(accessToken, refreshToken) {

	// oauth setup
	var OAuth2 = google.auth.OAuth2,
		OAuth2Client = new OAuth2();

	// set credentials
	OAuth2Client.setCredentials({access_token: accessToken, refresh_token: refreshToken});

	// initialize/return google drive
	return google.drive({version: 'v3', auth: OAuth2Client});
}

// not using this
function syncFileText(accessToken, fileId, fileModifiedTime, clbk) {

	var drive = getGoogleDrive(accessToken),
		buffers = [],
		downloadType = 'text/plain';

	// download file text
	drive.files.export(
		{
			fileId: fileId,
			mimeType: downloadType
		}
	)
		.on('error', function(err) {
			return clbk(err);
		})
		.on('data', function(data) {
			buffers.push(data);
		})
		.on('end', function() {

			// join data & convert to string
			var buffer = Buffer.concat(buffers),
				text = buffer.toString();

			// update essay
			Essay.update(
				{googleDriveId: fileId},
				{$set: {
					text: text,
					textModifiedTime: fileModifiedTime
				}},
				function(err) {
					if (err) {
						return clbk(err);
					}

					// done
					return clbk(null, text);
				}
			);
		});
}

function getFilesFromGoogleDrive(accessToken, refreshToken, folderId, clbk) {

	var files = [],
		queryParams = {
			q: '"'+folderId+'" in parents'
			//fields: 'files(kind, id, name, mimeType, modifiedTime), nextPageToken'
		};

	// google drive setup
	var drive = getGoogleDrive(accessToken);

	// get files
	function getFiles() {
		//logger.bold('Get Files | queryParams = '+JSON.stringify(queryParams));
		drive.files.list(
			queryParams,
			function(err, filesData) {
				if (err) {
					error.log(new Error(err));
					return clbk(files);
				} else if (!filesData) {
					error.log(new Error('!filesData'));
					return clbk(files);
				}

				// check files
				if (filesData.files) {
					files = files.concat(filesData.files);
					//logger.dash(filesData.files.length+' files');
					//logger.log(filesData.files[0]);
				}

				// check next page token
				if (filesData.nextPageToken) {
					//logger.log(filesData.nextPageToken === queryParams.pageToken);
					queryParams.pageToken = filesData.nextPageToken;
					getFiles();
					return;
				}

				// done
				return clbk(files);
			}
		);
	}

	// start
	getFiles();
}

function upsertEssays(moduleId, files, clbk) {

	// https://developers.google.com/drive/v3/web/mime-types
	var supportedMimeTypes = [
		'application/vnd.google-apps.document',
		'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
	];

	// check if done
	var cnt = files.length;
	function checkDone() {
		cnt -= 1;
		if (cnt <= 0) {
			return clbk();
		}
	}

	// upsert single essay
	function upsertEssay(essay, fileModifiedTime) {

		// variables
		var updateEssayText = false;

		// look for existing essay
		Essay.findOne({googleDriveId: essay.googleDriveId})
			.exec(function(err, essayDoc) {
				if (err) {
					error.log(new Error(err));
					checkDone();
					return;
				}

				if (essayDoc) {
					essayDoc = _.extend(essayDoc, essay);
					essayDoc.modified = new Date();
				} else {
					essayDoc = new Essay(essay);
				}

				// save essay
				essayDoc.save(function(err) {
					if (err) {
						error.log(new Error(err));
					}

					// update essay text
					/*if (!essayDoc.text || !fileModifiedTime || essayDoc.textModifiedTime < fileModifiedTime) {
						syncFileText(accessToken, essayDoc.googleDriveId, fileModifiedTime, function(err, text) {
							if (err) {
								logger.arrow('error syncing '+essayDoc.id);
								error.log(err);
							} else {
								logger.arrow('text sync\'d for '+essayDoc.id);
							}
						});
					}*/

					// done
					checkDone();
				});
			});
	}

	// upsert essays
	for (var i=0; i<files.length; i++) {
		var file = files[i];

		// check file
		if (!file || !file.kind || file.kind !== 'drive#file' || !file.mimeType ||
			supportedMimeTypes.indexOf(file.mimeType) < 0) {
			checkDone();
			return;
		}

		// initialize essay
		var essayObj = {
			id: (file.name.lastIndexOf('.') > -1) ? file.name.slice(0, file.name.lastIndexOf('.')) : file.name,
			googleDriveId: file.id,
			module: moduleId,
			filename: file.name,
			link: 'https://drive.google.com/open?id='+file.id
		};

		// grab modified time
		var fileModifiedTime = (file.modifiedTime) ? Date(file.modifiedTime) : null;

		// upsert essay
		upsertEssay(essayObj, fileModifiedTime);
	}
}

function deleteEssays(module, files, clbk) {

	var googleDriveIds = [];

	// grab google drive ids
	for (var i=0; i<files.length; i++) {
		var file = files[i];
		if (file && file.id) {
			googleDriveIds.push(file.id);
		}
	}

	// delete essays in module that don't have specified drive id
	Essay.remove(
		{
			module: module,
			googleDriveId: {$nin: googleDriveIds}
		},
		function(err) {
			if (err) {
				return clbk(err);
			}

			return clbk();
		}
	);
}

//----------------------------------------------------------------------------------------------------------------------
// Main

/**
 * ESSAY.SYNC
 * - Sync essays with google drive folder for a specific module.
 */
exports.sync = function(req, res) {
	logger.filename(__filename);

	// check params
	if (!req.user.googleDriveAccessToken) {
		return res.status(403).send('!req.user.googleDriveAccessToken');
	} else if (!req.query.module) {
		return res.status(400).send('!req.query.module');
	}

	// get module
	Module.findById(req.query.module)
		.exec(function(err, moduleDoc) {
			if (err) {
				error.log(new Error(err));
				return res.status(500).send(err);
			} else if (!moduleDoc) {
				error.log(new Error('!moduleDoc'));
				return res.status(500).send(err);
			} else if (!moduleDoc._id) {
				error.log(new Error('!moduleDoc._id'));
				return res.status(500).send(err);
			}

			// check google drive folder id
			if (!moduleDoc.googleDriveFolderId) {
				error.log(new Error('!moduleDoc.googleDriveFolderId'));
				return res.status(500).send(err);
			}

			// get files from google drive
			logger.dash('getting files from google drive');
			var accessToken = req.user.googleDriveAccessToken,
				refreshToken = req.user.googleDriveRefreshToken,
				folderId = moduleDoc.googleDriveFolderId;
			getFilesFromGoogleDrive(accessToken, refreshToken, folderId, function(files) {
				if (!files || !files.length) {
					return res.status(500).send('!files || !files.length');
				}
				logger.arrow(files.length+' files');

				// upsert essays
				logger.dash('upserting essays');
				upsertEssays(moduleDoc._id, files, function() {
					logger.arrow('done upserting essays');

					// delete essays
					logger.dash('deleting essays');
					deleteEssays(moduleDoc._id, files, function(err) {
						if (err) {
							error.log(err);
							return res.status(500).send('error deleting essays');
						}
						logger.arrow('done deleting essays');

						return res.sendStatus(200);
					});
				});
			});
		});
};