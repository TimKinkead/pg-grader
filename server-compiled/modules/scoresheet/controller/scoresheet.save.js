"use strict";

var mongoose = require("mongoose"), ScoreSheet = mongoose.model("ScoreSheet"), User = mongoose.model("User"), Essay = mongoose.model("Essay"), error = require("../../error"), logger = require("../../logger");

exports.save = function(a, b) {
    if (logger.filename(__filename), !a.user) return b.sendStatus(403);
    if (!a.body.essay || !a.body.rubric || !a.body.score) return b.sendStatus(400);
    var c, d, e, f = a.user.admin || a.user.facilitator ? a.body.masterScore : null, g = (a.user.admin, 
    {
        user: a.user.admin && a.body.user ? a.body.user : a.user._id,
        essay: a.body.essay,
        rubric: a.body.rubric,
        score: a.body.score,
        masterScore: f
    }), h = f ? {
        masterScore: !0,
        essay: g.essay
    } : {
        user: g.user,
        essay: g.essay
    };
    ScoreSheet.findOne(h).exec(function(a, h) {
        return a ? (error.log(new Error(a)), b.status(500).send({
            error: a
        })) : (h ? (h.rubric = g.rubric, h.score = g.score, f && (h.masterScore = g.masterScore, 
        h.user.toString() !== g.user.toString() && (h.user = g.user))) : (c = !0, h = new ScoreSheet(g)), 
        void h.save(function(a) {
            if (a) return error.log(new Error(a)), b.status(500).send({
                error: a
            });
            var i = f ? {
                $set: {
                    masterScore: !0,
                    gradeAll: !0,
                    modified: new Date()
                },
                $addToSet: {
                    scoresheets: h._id
                },
                $pull: {
                    graders: g.user
                }
            } : {
                $set: {
                    modified: new Date()
                },
                $addToSet: {
                    scoresheets: h._id,
                    gradedBy: g.user
                },
                $pull: {
                    skip: {
                        user: g.user
                    },
                    graders: g.user
                }
            };
            Essay.findOneAndUpdate({
                _id: g.essay
            }, i, function(a, f) {
                if (a) return error.log(new Error(a)), b.status(500).send({
                    error: a
                });
                if (!f) return error.log(new Error("!essayDoc")), b.status(500).send({
                    error: "!essayDoc"
                });
                if (f.masterScore && (d = !0), !f.masterScore && f.scoresheets && f.scoresheets.length) {
                    e = !0;
                    for (var i = 0, j = f.scoresheets.length; i < j; i++) if (f.scoresheets[i] && f.scoresheets[i].toString() === h._id.toString()) {
                        e = !1;
                        break;
                    }
                }
                var k = {
                    $unset: {
                        currentEssay: !0
                    }
                };
                c && (k.$inc = {
                    scoresheets: 1
                }, k.$inc["scoresheetsByModule." + f.module] = 1), d && (k.$inc || (k.$inc = {}), 
                k.$inc.checkScores = 1), e && (k.$inc || (k.$inc = {}), k.$inc.consensusScores = 1), 
                User.update({
                    _id: g.user
                }, k, function(a) {
                    return a && error.log(new Error(a)), b.status(200).send(h);
                });
            });
        }));
    });
};