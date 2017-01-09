'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Dependencies

var passport = require('passport');

//----------------------------------------------------------------------------------------------------------------------
// Controllers

var logger = require('../../../logger');

//----------------------------------------------------------------------------------------------------------------------
// Methods

/**
 * USER.GOOGLE-DRIVE.AUTHORIZATION
 * - Redirect to Google Drive for app authorization.
 * - Google Drive redirects to callbackURL after authorization.
 */
exports.googleDriveAuthorization = function(req, res, next) {
	logger.filename(__filename);

	// passport authentication for google drive
	// - redirects to google drive for authorization
	// - appends 2nd arg to 'GoogleDriveStrategy' defined in 'server/config/passport/strategies/google-drive.js'
	passport.authenticate(
		'google-drive',
		{callbackURL: req.protocol+'://'+req.get('host')+req.path+'/clbk'}
	)(req, res, next);
};
