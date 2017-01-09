'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Dependencies

var passport = require('passport');

//----------------------------------------------------------------------------------------------------------------------
// Controllers

var error = require('../../../error'),
	logger = require('../../../logger');

//----------------------------------------------------------------------------------------------------------------------
// Methods

/**
 * USER.GOOGLE-DRIVE.CONNECT
 * - Passport authentication after Google Drive app authorization and redirect back to site.
 * - Save google drive access token to user doc.
 */
exports.googleDriveConnect = function(req, res, next) {
	logger.filename(__filename);

	function errorMessage(message) {
		return res.redirect(
			req.protocol+'://'+req.get('host')+'/upload'+
			'?header=Google Drive Connection Error!'+
			'&message=We had trouble connecting your Facebook account. Please try again.'
		);
	}

	if (!req.user) {return errorMessage();}

	// passport authentication
	// - callbackURL must match the callbackURL in './user.google-drive.authorization'
	passport.authenticate(
		'google-drive',
		{callbackURL: req.protocol+'://'+req.get('host')+req.path},
		function(googleDriveData) {
			if (!googleDriveData || !googleDriveData.accessToken) {return errorMessage();}

			// save google drive access token to user doc
			req.user.googleDriveAccessToken = googleDriveData.accessToken;
			if (googleDriveData.refreshToken) {
				req.user.googleDriveRefreshToken = googleDriveData.refreshToken;
			}
			req.user.save(function(err) {
				if (err) {error.log(new Error(err)); return errorMessage();}

				// done
				return res.redirect(
					req.protocol+'://'+req.get('host')+'/upload'+
					'?header=Google Drive Connected!'+
					'&message=Your Google Drive account has been connected.'
				);
			});
		}
	)(req, res, next);
};
