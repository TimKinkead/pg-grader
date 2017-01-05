'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Controllers

var user = require('../user');

//----------------------------------------------------------------------------------------------------------------------
// Routes

module.exports = function(app) {

    // -- USER DATA --
    
    // get current user data
    app.route('/data/user')
        .get(user.read);

    // list all users
    app.route('/data/user/list')
        .get(user.list);
    
    // -- SIGN UP/IN/OUT --

    // sign up
    app.route('/data/user/sign-up')
        .post(user.signUp);

    // sign in
    app.route('/data/user/login')
        .post(user.login);

    // sign out
    app.route('/data/user/logout')
        .get(user.logout);

    // -- PASSWORD --

    // forgot password
    app.route('/data/user/forgot-password')
        .post(user.forgotPassword);

    // reset password
    app.route('/data/user/reset-password')
        .post(user.resetPassword);
    
    // -- SETTINGS --

    // get & update settings
    app.route('/data/user/settings')
        .get(user.readSettings)
        .put(user.updateSettings);

    // -- OTHER --

    // count users
    app.route('/data/user/count')
        .get(user.count);

    // -- GOOGLE DRIVE --

    // connect google drive account
    app.route('/data/user/google-drive/connect')
        .get(user.googleDriveAuthorization);

    // connect google drive account callback
    app.route('/data/user/google-drive/connect/clbk')
        .get(user.googleDriveConnect);

    // list google drive files
    app.route('/data/user/google-drive/files')
        .get(user.googleDriveFiles);
    
};