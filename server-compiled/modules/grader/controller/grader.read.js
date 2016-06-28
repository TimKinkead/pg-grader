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
 * GRADER.READ
 * - Read a grader.
 */
exports.read = function (req, res) {
    logger.filename(__filename);

    if (!req.user || !req.user.admin) {
        return res.sendStatus(403);
    }
    if (!req.query.grader) {
        return res.status(400).send({ error: '!req.query.grader' });
    }

    // get grader
    User.find({ _id: req.query.grader }).exec(function (err, userDoc) {
        if (err) {
            error.log(new Error(err));
            return res.status(500).send({ error: err });
        }
        if (!userDoc) {
            return res.status(404).send({ message: '!grader' });
        }

        // done
        return res.status(200).send(userDoc);
    });
};
