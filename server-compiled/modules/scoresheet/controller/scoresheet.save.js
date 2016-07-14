"use strict";

var mongoose = require("mongoose"), ScoreSheet = mongoose.model("ScoreSheet"), User = mongoose.model("User"), Essay = mongoose.model("Essay"), error = require("../../error"), logger = require("../../logger");

exports.save = function(a, b) {
    if (logger.filename(__filename), !a.user) return b.sendStatus(403);
    if (!a.body.essay || !a.body.rubric || !a.body.score) return b.sendStatus(400);
    var c, d, e, f = a.user.admin ? a.body.masterScore : null, g = {
        user: a.user._id,
        essay: a.body.essay,
        rubric: a.body.rubric,
        score: a.body.score,
        masterScore: f
    };
    ScoreSheet.findOne({
        user: g.user,
        essay: g.essay
    }).exec(function(h, i) {
        return h ? (error.log(new Error(h)), b.status(500).send({
            error: h
        })) : (i ? (i.rubric = g.rubric, i.score = g.score) : (c = !0, i = new ScoreSheet(g)), 
        void i.save(function(h) {
            if (h) return error.log(new Error(h)), b.status(500).send({
                error: h
            });
            var j = f ? {
                $set: {
                    masterScore: !0,
                    gradeAll: !0,
                    modified: new Date()
                },
                $addToSet: {
                    scoresheets: i._id
                },
                $pull: {
                    graders: a.user._id
                }
            } : {
                $set: {
                    modified: new Date()
                },
                $addToSet: {
                    scoresheets: i._id,
                    gradedBy: a.user._id
                },
                $pull: {
                    skip: {
                        user: a.user._id
                    },
                    graders: a.user._id
                }
            };
            Essay.findOneAndUpdate({
                _id: g.essay
            }, j, function(f, h) {
                if (f) return error.log(new Error(f)), b.status(500).send({
                    error: f
                });
                if (!h) return error.log(new Error("!essayDoc")), b.status(500).send({
                    error: "!essayDoc"
                });
                if (h.masterScore && (d = !0), !h.masterScore && h.scoresheets && h.scoresheets.length) {
                    e = !0;
                    for (var j = 0, k = h.scoresheets.length; j < k; j++) if (h.scoresheets[j] && h.scoresheets[j].toString() === i._id.toString()) {
                        e = !1;
                        break;
                    }
                }
                var l = {
                    $unset: {
                        currentEssay: !0
                    }
                };
                a.user.lastRubric && a.user.lastRubric.toString() !== g.rubric.toString() && (l.$set = {
                    lastRubric: g.rubric
                }), c && (l.$inc = {
                    scoresheets: 1
                }), d && (l.$inc || (l.$inc = {}), l.$inc.checkScores = 1), e && (l.$inc || (l.$inc = {}), 
                l.$inc.consensusScores = 1), User.update({
                    _id: a.user._id
                }, l, function(a) {
                    return a && error.log(new Error(a)), b.status(200).send(i);
                });
            });
        }));
    });
};