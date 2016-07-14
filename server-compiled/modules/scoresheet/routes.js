'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Controllers

var scoresheet = require('../scoresheet');

//----------------------------------------------------------------------------------------------------------------------
// Routes

module.exports = function (app) {

    // CRUD for a scoresheet
    app.route('/data/scoresheet').post(scoresheet.save) // create & updated
    .get(scoresheet.read).delete(scoresheet.delete);

    // list score sheets
    app.route('/data/scoresheet/list').get(scoresheet.list);

    // list consensus score sheets
    app.route('/data/scoresheet/list-consensus').get(scoresheet.listConsensus);

    // download score sheets (csv/tsv)
    app.route('/data/scoresheet/download').get(scoresheet.download);

    // download score sheets (SRI format)
    app.route('/data/scoresheet/download/sri').get(scoresheet.downloadSRI);

    // count scoresheets
    app.route('/data/scoresheet/count').get(scoresheet.count);
};
