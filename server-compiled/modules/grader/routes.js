'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Controllers

var grader = require('../grader');

//----------------------------------------------------------------------------------------------------------------------
// Routes

module.exports = function (app) {

    // CRUD for a grader
    app.route('/data/grader').post(grader.create).get(grader.read).put(grader.update).delete(grader.delete);

    // list score sheets
    app.route('/data/grader/list').get(grader.list);
};
