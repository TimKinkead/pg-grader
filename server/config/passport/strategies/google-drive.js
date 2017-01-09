'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Dependencies

var passport = require('passport'),
	GoogleDriveStrategy = require('passport-google-drive').Strategy;

//----------------------------------------------------------------------------------------------------------------------
// Variables

var auth = require('../../../../auth.js');

//----------------------------------------------------------------------------------------------------------------------
// Main

/**
 * Google Drive Passport Strategy
 * - Connect Google Drive Account.
 */
module.exports = function() {

	var clientID = (process.env.SERVER === 'local') ? auth.googleClientIdDev : auth.googleClientId,
		clientSecret = (process.env.SERVER === 'local') ? auth.googleClientSecretDev : auth.googleClientSecret,
		scope = [
			'https://www.googleapis.com/auth/drive.readonly',
			'https://www.googleapis.com/auth/drive.file'
		];

	passport.use(
		'google-drive',
		new GoogleDriveStrategy({
			clientID: clientID,
			clientSecret: clientSecret,
			scope: scope
			// callbackURL defined in user.google-drive.authorization.js
		},
		function(accessToken, refreshToken, profile, clbk) {
			return clbk({accessToken: accessToken, refreshToken: refreshToken, profile: profile});
		}
	));
};