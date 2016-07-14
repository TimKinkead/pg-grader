'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
    ScoreSheet = mongoose.model('ScoreSheet'),
    User = mongoose.model('User'),
    Essay = mongoose.model('Essay');

//----------------------------------------------------------------------------------------------------------------------
// Controllers

var error = require('../../error'),
    logger = require('../../logger');

//----------------------------------------------------------------------------------------------------------------------
// Methods

//----------------------------------------------------------------------------------------------------------------------
// Main

/**
 * SCORESHEET.SAVE
 * - Save a new score sheet or update existing.
 */
exports.save = function(req, res) {
    logger.filename(__filename);

    if (!req.user) { return res.sendStatus(403); }
    if (!req.body.essay || !req.body.rubric || !req.body.score) { return res.sendStatus(400); }

    var newScoreSheet,
        checkScore,
        consensusScore,
        masterScore = (req.user.admin) ? req.body.masterScore : null,
        params = {
            user: req.user._id,
            essay: req.body.essay,
            rubric: req.body.rubric,
            score: req.body.score,
            masterScore: masterScore
        };

    // look for existing score sheet
    ScoreSheet.findOne({
        user: params.user,
        essay: params.essay
    })
        .exec(function(err, scoresheetDoc) {
            if (err) {
                error.log(new Error(err));
                return res.status(500).send({error: err});
            }

            // new or existing
            if (!scoresheetDoc) {
                newScoreSheet = true;
                scoresheetDoc = new ScoreSheet(params);
            } else {
                scoresheetDoc.rubric = params.rubric;
                scoresheetDoc.score = params.score;
            }

            // save score sheet
            scoresheetDoc.save(function(err) {
                if (err) {
                    error.log(new Error(err));
                    return res.status(500).send({error: err});
                }

                // find/update essay
                var update = (masterScore) ?
                {
                    $set: {
                        masterScore: true,
                        gradeAll: true,
                        modified: new Date()
                    },
                    $addToSet: {
                        scoresheets: scoresheetDoc._id
                    },
                    $pull: {
                        graders: req.user._id
                    }
                } :
                {
                    $set: {
                        modified: new Date()
                    },
                    $addToSet: {
                        scoresheets: scoresheetDoc._id,
                        gradedBy: req.user._id
                    },
                    $pull: {
                        skip: {user: req.user._id},
                        graders: req.user._id
                    }
                };
                Essay.findOneAndUpdate(
                    {_id: params.essay},
                    update,
                    function(err, essayDoc) {
                        if (err) {
                            error.log(new Error(err));
                            return res.status(500).send({error: err});
                        }
                        if (!essayDoc) {
                            error.log(new Error('!essayDoc'));
                            return res.status(500).send({error: '!essayDoc'});
                        }

                        // check if master scored essay
                        if (essayDoc.masterScore) {
                            checkScore = true;
                        }

                        // check if consensus score
                        if (!essayDoc.masterScore && essayDoc.scoresheets && essayDoc.scoresheets.length) {
                            consensusScore = true;
                            for (var i=0, x=essayDoc.scoresheets.length; i<x; i++) {
                                if (essayDoc.scoresheets[i] && essayDoc.scoresheets[i].toString() === scoresheetDoc._id.toString()) {
                                    consensusScore = false;
                                    break;
                                }
                            }
                        }

                        // build user update
                        var update = {$unset: {currentEssay: true}};
                        if (req.user.lastRubric && req.user.lastRubric.toString() !== params.rubric.toString()) {
                            update.$set = {lastRubric: params.rubric};
                        }
                        if (newScoreSheet) {
                            update.$inc = {scoresheets: 1};
                        }
                        if (checkScore) {
                            if (!update.$inc) { update.$inc = {}; }
                            update.$inc.checkScores = 1;
                        }
                        if (consensusScore) {
                            if (!update.$inc) { update.$inc = {}; }
                            update.$inc.consensusScores = 1;
                        }

                        // update user
                        User.update(
                            {_id: req.user._id},
                            update,
                            function(err) {
                                if (err) { error.log(new Error(err)); }

                                // done
                                return res.status(200).send(scoresheetDoc);
                            }
                        );
                    }
                );
            });
        });
};