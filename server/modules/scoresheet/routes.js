'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Controllers

var scoresheet = require('../scoresheet');

//----------------------------------------------------------------------------------------------------------------------
// Routes

module.exports = function(app) {

    // CRUD for a scoresheet
    app.route('/data/scoresheet')
        .post(scoresheet.create)
        .get(scoresheet.read)
        .put(scoresheet.update)
        .delete(scoresheet.delete);
    
    // list score sheets
    app.route('/data/scoresheet/list')
        .get(scoresheet.list);
    
};