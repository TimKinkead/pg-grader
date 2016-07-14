'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Controllers

var _module = require('../module');

//----------------------------------------------------------------------------------------------------------------------
// Routes

module.exports = function(app) {

    // get module
    app.route('/data/module')
        .get(_module.read);
    
    // list modules
    app.route('/data/module/list')
        .get(_module.list);
    
    // initialize modules
    app.route('/data/module/init')
        .get(_module.init);

    // count modules
    app.route('/data/module/count')
        .get(_module.count);
    
};
