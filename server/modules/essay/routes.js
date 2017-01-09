'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Controllers

var essay = require('../essay');

//----------------------------------------------------------------------------------------------------------------------
// Routes

module.exports = function(app) {

    // get essay
    app.route('/data/essay')
        .get(essay.read);

    // get next essay
    app.route('/data/essay/next')
        .get(essay.next);

    // skip essay
    app.route('/data/essay/skip')
        .put(essay.skip);
    
    // list essays
    app.route('/data/essay/list')
        .get(essay.list);

    // list skipped essays
    app.route('/data/essay/list-skipped')
        .get(essay.listSkipped);
    
    // initialize essays
    app.route('/data/essay/init')
        .get(essay.init);

    // count essays
    app.route('/data/essay/count')
        .get(essay.count);
    
    // sync essays with google drive for a module
    app.route('/data/essay/sync')
        .get(essay.sync);

};
