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
 * SCORESHEET.DELETE
 * - Delete a score sheet.
 */
exports.delete = function (req, res) {
    logger.filename(__filename);

    if (!req.user) {
        return res.status(403).send({ error: '!req.user' });
    }
    if (!req.body.scoresheet) {
        return res.status(400).send({ error: '!req.body.scoresheet' });
    }

    // delete score sheet
    var query = req.user.admin ? { _id: req.body.scoresheet } : { _id: req.body.scoresheet, user: req.user._id };
    ScoreSheet.remove(query, function (err) {
        if (err) {
            error.log(new Error(err));
            return res.status(500).send({ error: err });
        }

        // done
        return res.sendStatus(200);
    });
};
