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
 * GRADER.UPDATE
 * - Update a grader.
 */
exports.update = function(req, res) {
    logger.filename(__filename);

    if (!req.user || !req.user.admin) { return res.sendStatus(403); }
    if (!req.body.grader) { return res.status(400).send({error: '!req.body.grader'}); }
    
    // build update
    var update = {$set: {modified: new Date()}},
        updateFields = [];
    for (var key in req.body) {
        if (req.body.hasOwnProperty(key) && updateFields.indexOf(key) > -1) {
            update.$set[key] = req.body[key];
        }
    }
    
    // update grader
    User.update(
        {_id: req.body.grader},
        update,
        function(err) {
            if (err) {
                error.log(new Error(err));
                return res.status(500).send({error: err});
            }
            
            // done
            return res.sendStatus(200);
        }
    );
};