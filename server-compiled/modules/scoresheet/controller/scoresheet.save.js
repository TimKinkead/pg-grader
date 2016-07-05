"use strict";

var mongoose = require("mongoose"), ScoreSheet = mongoose.model("ScoreSheet"), User = mongoose.model("User"), Essay = mongoose.model("Essay"), error = require("../../error"), logger = require("../../logger");

exports.save = function(a, b) {
    if (logger.filename(__filename), !a.user) return b.sendStatus(403);
    if (!a.body.essay || !a.body.rubric || !a.body.score) return b.sendStatus(400);
    var c, d, e = {
        user: a.user._id,
        essay: a.body.essay,
        rubric: a.body.rubric,
        score: a.body.score
    };
    ScoreSheet.findOne({
        user: e.user,
        essay: e.essay
    }).exec(function(f, g) {
        return f ? (error.log(new Error(f)), b.status(500).send({
            error: f
        })) : (g ? (g.rubric = e.rubric, g.score = e.score) : (c = !0, g = new ScoreSheet(e)), 
        void g.save(function(f) {
            return f ? (error.log(new Error(f)), b.status(500).send({
                error: f
            })) : void Essay.findOneAndUpdate({
                _id: e.essay
            }, {
                $addToSet: {
                    scoresheets: g._id
                },
                $pull: {
                    skip: {
                        user: a.user._id
                    }
                }
            }, function(f, h) {
                if (f) return error.log(new Error(f)), b.status(500).send({
                    error: f
                });
                if (!h) return error.log(new Error("!essayDoc")), b.status(500).send({
                    error: "!essayDoc"
                });
                if (h.scoresheets && h.scoresheets.length) {
                    d = !0;
                    for (var i = 0, j = h.scoresheets.length; j > i; i++) if (h.scoresheets[i] && h.scoresheets[i].toString() === g._id.toString()) {
                        d = !1;
                        break;
                    }
                }
                var k = {
                    $unset: {
                        currentEssay: !0
                    }
                };
                a.user.lastRubric && a.user.lastRubric.toString() !== e.rubric.toString() && (k.$set = {
                    lastRubric: e.rubric
                }), c && (k.$inc = {
                    scoresheets: 1
                }), d && (k.$inc || (k.$inc = {}), k.$inc.consensusScores = 1), User.update({
                    _id: a.user._id
                }, k, function(a) {
                    return a && error.log(new Error(a)), b.status(200).send(g);
                });
            });
        }));
    });
};