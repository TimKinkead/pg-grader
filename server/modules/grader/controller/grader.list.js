'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
    User = mongoose.model('User');

//----------------------------------------------------------------------------------------------------------------------
// Controllers

var error = require('../../error'),
    logger = require('../../logger');

//----------------------------------------------------------------------------------------------------------------------
// Methods

//----------------------------------------------------------------------------------------------------------------------
// Main

/**
 * GRADER.LIST
 * - List a user's graders. (or all graders if admin)
 */
exports.list = function(req, res) {
    logger.filename(__filename);

    if (!req.user || (!req.user.admin && !req.user.facilitator)) { return res.sendStatus(403); }
    if (req.user.facilitator && !req.user.group) { return res.sendStatus(500); }
    
    var query = (req.user.admin) ? {} : {'group.modules': {$in: req.user.group.modules}};
    
    // get graders
    User.find(query)
        .select('_id id name email admin facilitator group scoresheets checkScores')
        .exec(function(err, userDocs) {
            if (err) {
                error.log(new Error(err));
                return res.status(500).send({error: err});
            }
            
            // done
            return res.status(200).send(userDocs || []);
        });
};