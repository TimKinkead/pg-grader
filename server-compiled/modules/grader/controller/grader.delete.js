'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    ScoreSheet = mongoose.model('ScoreSheet');

//----------------------------------------------------------------------------------------------------------------------
// Controllers

var error = require('../../error'),
    logger = require('../../logger');

//----------------------------------------------------------------------------------------------------------------------
// Methods

//----------------------------------------------------------------------------------------------------------------------
// Main

/**
 * GRADER.DELETE
 * - Delete a grader
 */
exports.delete = function (req, res) {
    logger.filename(__filename);

    if (!req.user || !req.user.admin) {
        return res.sendStatus(403);
    }
    if (!req.body.grader) {
        return res.status(400).send({ error: '!req.body.grader' });
    }

    // count grader's score sheets
    ScoreSheet.count({ user: req.body.grader }).exec(function (err, qty) {
        if (err) {
            error.log(new Error(err));
            return res.status(500).send({ error: err });
        }

        // check qty
        if (qty) {
            return res.status(403).send({ message: 'You cannot delete this grader because they have score sheets.' });
        }

        // delete grader
        User.remove({ _id: req.body.grader }, function (err) {
            if (err) {
                error.log(new Error(err));
                return res.status(500).send({ error: err });
            }

            // done
            return res.sendStatus(200);
        });
    });
};
