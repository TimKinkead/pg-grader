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
 * GRADER.CREATE
 * - Create a new grader. (aka user)
 */
exports.create = function(req, res) {
    logger.filename(__filename);
    
    if (!req.user || !req.user.admin) { return res.sendStatus(403); }
    
    // init grader
    var grader = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: (req.body.email) ? req.body.email.toLowerCase() : null
    });
    
    // get unique id
    User.uniqueId(function(err, id) {
        if (err) {
            error.log(new Error(err));
            return res.status(500).send({error: err});
        }

        grader.id = id;

        // save grader
        grader.save(function(err) {
            if (err) {
                error.log(new Error(err));
                return res.status(500).send({error: err});
            }

            // done
            return res.status(200).send(grader);
        });
    });
};