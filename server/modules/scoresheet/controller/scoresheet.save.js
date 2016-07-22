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
        masterScore = (req.user.admin || req.user.facilitator) ? req.body.masterScore : null,
        adminScore = (req.user.admin),
        params = {
            user: (req.user.admin && req.body.user) ? req.body.user : req.user._id,
            essay: req.body.essay,
            rubric: req.body.rubric,
            score: req.body.score,
            masterScore: masterScore
        },
        query = (masterScore) ? 
        {
            masterScore: true,
            essay: params.essay
        } : 
        {
            user: params.user,
            essay: params.essay
        };

    //console.log('req.user._id', req.user._id);
    //console.log('req.user.admin', 'req.user.admin');
    //console.log('req.body.user', req.body.user);
    //console.log(JSON.stringify(params));
    
    // look for existing score sheet
    ScoreSheet.findOne(query)
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
                if (masterScore) {
                    scoresheetDoc.masterScore = params.masterScore;
                    if (scoresheetDoc.user.toString() !== params.user.toString()) {
                        scoresheetDoc.user = params.user;
                    }
                }
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
                        graders: params.user
                    }
                } :
                {
                    $set: {
                        modified: new Date()
                    },
                    $addToSet: {
                        scoresheets: scoresheetDoc._id,
                        gradedBy: params.user
                    },
                    $pull: {
                        skip: {user: params.user},
                        graders: params.user
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
                        if (newScoreSheet) {
                            update.$inc = {scoresheets: 1};
                            update.$inc['scoresheetsByModule.'+essayDoc.module] = 1;
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
                            {_id: params.user},
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