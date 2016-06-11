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
 * SCORESHEET.CREATE
 * - Create a new score sheet.
 */
exports.create = function(req, res) {
    logger.filename(__filename);

    if (!req.user) { return res.sendStatus(403); }
    
    // init score sheet
    var scoresheet = new ScoreSheet({
        user: (req.user.admin && req.body.user) ? req.body.user : req.user._id,
        studentWorkId: req.body.studentWorkId,
        rubric: req.body.rubric,
        score: req.body.score
    });
    
    // save score sheet
    scoresheet.save(function(err) {
        if (err) {
            error.log(new Error(err));
            return res.status(500).send({error: err});
        }
        
        
        
        // done
        return res.status(200).send(scoresheet);
    });
};