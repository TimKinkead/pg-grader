'use strict';

var file = require('./server/modules/file');

var config = {};

// project info
config.project = {
    id: 'score-sheet',
    name: 'Score Sheet',
    description: 'A Preva Group Project',
    keywords: 'score sheet, preva group',
    owner: 'Preva Group',
    domain: 'scoresheet.prevagroup.com',
    subDomain: 'scoresheet',
    rootDomain: 'prevagroup.com'
};

// email addresses
config.email = {
    error: {
        address: 'dsoike@prevagroup.com',
        name: 'Preva Group Errors'
    },
    help: {
        address: 'dsoike@prevagroup.com',
        name: 'Preva Group Help'
    },
    server: {
        address: 'server@prevagroup.com',
        name: 'Preva Group Server'
    },
    support: {
        address: 'support@prevagroup.com',
        name: 'Preva Group Support'
    }
};

// lib files
// - used by grunt
config.libFiles = [
    'lib/angular/angular.min.js',
    'lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
    'lib/angular-resource/angular-resource.min.js',
    'lib/angular-sanitize/angular-sanitize.min.js',
    'lib/angular-ui-router/release/angular-ui-router.min.js'
];

// app files
// - used by grunt
config.appFiles = (function() {
    return file.globber(
        [
            'client/modules/core/app.js',
            'client/modules/core/routes.js',
            'client/modules/core/**/*.js',
            'client/modules/parts/**/*.js',
            'client/modules/main/**/*.js'
        ],
        'client/'
    );
})();

// js files
// - used by server when rendering index.html in development
config.jsFiles = (function() {
    return config.libFiles.concat(config.appFiles);
})();

module.exports = config;