'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Controllers

var scoresheet = require('../scoresheet');

//----------------------------------------------------------------------------------------------------------------------
// Routes

module.exports = function(app) {

    // CRUD for a scoresheet
    app.route('/data/scoresheet')
        .post(scoresheet.save) // create & updated
        .get(scoresheet.read)
        .delete(scoresheet.delete);
    
    // list score sheets
    app.route('/data/scoresheet/list')
        .get(scoresheet.list);

    // list consensus score sheets
    app.route('/data/scoresheet/list-consensus')
        .get(scoresheet.listConsensus);

};