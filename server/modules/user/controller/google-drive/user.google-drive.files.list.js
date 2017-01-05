'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Dependencies

var google = require('googleapis');

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
	User = mongoose.model('User'),

//----------------------------------------------------------------------------------------------------------------------
// Controllers

	error = require('../../../error'),
	logger = require('../../../logger');

//----------------------------------------------------------------------------------------------------------------------
// Main

/**
 * USER.GOOGLE-DRIVE.FILES
 * - List google drive files
 */
exports.googleDriveFiles = function(req, res) {
	logger.filename(__filename);

	if (!req.user || !req.user.googleDriveAccessToken) {
		return res.status(500);
	}

	var OAuth2 = google.auth.OAuth2,
		OAuth2Client = new OAuth2();

	OAuth2Client.setCredentials({access_token: req.user.googleDriveAccessToken});

	var drive = google.drive({version: 'v3', auth: OAuth2Client});
	drive.files.list(
		{q: '"0B_jghulb7VOCOWVVMzBNbzRxSDA" in parents'},
		function(err, filesList) {
			logger.bold(filesList);
			return res.status(200).send(filesList);
		}
	);

	/*// temp
	drive.files.get(
		{fileId: '0B_jghulb7VOCaXFZR2RnUUlJcFE'},
		function(err, filesList) {
			logger.bold(filesList);
		}
	);*/
};