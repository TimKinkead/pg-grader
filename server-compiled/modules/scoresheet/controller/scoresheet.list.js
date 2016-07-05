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
 * SCORESHEET.LIST
 * - List a user's score sheets. (or all score sheets if admin)
 */
exports.list = function (req, res) {
    logger.filename(__filename);

    if (!req.user) {
        return res.sendStatus(403);
    }

    // get score sheets
    var query = req.user.admin ? {} : { user: req.user._id };
    ScoreSheet.find(query).select().populate('user', '_id id name').populate('essay', 'id link').populate('rubric', 'name').exec(function (err, scoresheetDocs) {
        if (err) {
            error.log(new Error(err));
            return res.status(500).send({ error: err });
        }

        // done
        return res.status(200).send(scoresheetDocs || []);
    });
};
