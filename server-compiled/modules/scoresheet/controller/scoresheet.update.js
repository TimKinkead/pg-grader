'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
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
 * SCORESHEET.UPDATE
 * - Update a score sheet.
 */
exports.update = function (req, res) {
    logger.filename(__filename);

    if (!req.user) {
        return res.status(403).send({ error: '!req.user' });
    }
    if (!req.body.scoresheet) {
        return res.status(400).send({ error: '!req.body.scoresheet' });
    }

    // build update
    var update = { $set: { modified: new Date() } },
        updateFields = [];
    for (var key in req.body) {
        if (req.body.hasOwnProperty(key) && updateFields.indexOf(key) > -1) {
            update.$set[key] = req.body[key];
        }
    }

    // update score sheet
    ScoreSheet.update({ _id: req.body.scoresheet }, update, function (err) {
        if (err) {
            error.log(new Error(err));
            return res.status(500).send({ error: err });
        }

        // done
        return res.sendStatus(200);
    });
};
