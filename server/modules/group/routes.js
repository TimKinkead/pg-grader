'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Controllers

var group = require('../group');

//----------------------------------------------------------------------------------------------------------------------
// Routes

module.exports = function(app) {

    // get group
    app.route('/data/group')
        .get(group.read);

    // list groups
    app.route('/data/group/list')
        .get(group.list);

    // initialize groups
    app.route('/data/group/init')
        .get(group.init);

    // count groups
    app.route('/data/group/count')
        .get(group.count);
};
