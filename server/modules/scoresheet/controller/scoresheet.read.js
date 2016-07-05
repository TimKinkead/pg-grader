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
 * SCORESHEET.READ
 * - Read a score sheet.
 */
exports.read = function(req, res) {
    logger.filename(__filename);

    if (!req.user) { return res.status(403).send({error: '!req.user'}); }
    if (!req.query.scoresheet) { return res.status(400).send({error: '!req.query.scoresheet'}); }
    
    // get score sheet
    ScoreSheet.findById(req.query.scoresheet)
        .populate('user', '_id name')
        .populate('essay', '_id id name module prompt link')
        .populate('rubric', '_id name headers fields')
        .exec(function(err, scoresheetDoc) {
            if (err) {
                error.log(new Error(err));
                return res.status(500).send({error: err});
            }
            if (!scoresheetDoc) {
                return res.status(404).send({message: '!scoresheet'});
            }
            
            // done
            return res.status(200).send(scoresheetDoc);
        });
};