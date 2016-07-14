'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Controllers

var rubric = require('../rubric');

//----------------------------------------------------------------------------------------------------------------------
// Routes

module.exports = function(app) {

    // list rubrics
    app.route('/data/rubric/list')
        .get(rubric.list);
    
    // initialize rubrics
    app.route('/data/rubric/init')
        .get(rubric.init);

    // count rubrics
    app.route('/data/rubric/count')
        .get(rubric.count);
    
};
