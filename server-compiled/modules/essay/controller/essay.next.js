"use strict";

function updateUser(a, b) {
    User.update({
        _id: a
    }, {
        $set: {
            lastPrompt: b.prompt,
            lastRubric: b.rubric,
            currentEssay: b._id
        }
    }, function(a) {
        a && error.log(new Error(a));
    });
}

var mongoose = require("mongoose"), Essay = mongoose.model("Essay"), Rubric = mongoose.model("Rubric"), User = mongoose.model("User"), error = require("../../error"), logger = require("../../logger");

exports.next = function(a, b) {
    function c(c, d) {
        return a.user.lastPrompt && a.user.lastPrompt !== c.prompt && (c.newPrompt = !0), 
        a.user.lastRubric && a.user.lastRubric.toString() !== c.rubric.toString() && (c.newRubric = !0), 
        d && (c.consensusScore = !0), updateUser(a.user._id, c), b.status(200).send(c);
    }
    function d() {
        logger.log("getAnyEssay"), Essay.findOneAndUpdate({
            "graders.0": {
                $exists: !1
            },
            "scoresheets.0": {
                $exists: !1
            },
            "skip.user": {
                $ne: a.user._id
            },
            "skip.1": {
                $exists: !1
            }
        }, {
            $push: {
                graders: a.user._id
            }
        }).lean().exec(function(a, d) {
            return a ? (error.log(new Error(a)), b.status(500).send({
                message: "We had trouble retrieving the essay. Please try again."
            })) : d ? void c(d) : b.status(200).send({
                message: "all essays graded"
            });
        });
    }
    function e() {
        logger.log("getAnyConsensusEssay"), Essay.findOneAndUpdate({
            "scoresheets.0": {
                $exists: !0
            },
            "scoresheets.1": {
                $exists: !1
            },
            graders: {
                $ne: a.user._id
            },
            "skip.user": {
                $ne: a.user._id
            }
        }, {
            $addToSet: {
                graders: a.user._id
            }
        }).lean().exec(function(a, e) {
            return a ? (error.log(new Error(a)), b.status(500).send({
                message: "We had trouble retrieving the essay. Please try again."
            })) : e ? void c(e, !0) : void d();
        });
    }
    function f() {
        logger.log("getNextEssay"), Essay.findOneAndUpdate({
            prompt: a.user.lastPrompt,
            "graders.0": {
                $exists: !1
            },
            "scoresheets.0": {
                $exists: !1
            },
            "skip.user": {
                $ne: a.user._id
            }
        }, {
            $addToSet: {
                graders: a.user._id
            }
        }).lean().exec(function(a, f) {
            return a ? (error.log(new Error(a)), b.status(500).send({
                message: "We had trouble retrieving the essay. Please try again."
            })) : f ? void c(f) : void (j ? e() : d());
        });
    }
    function g() {
        logger.log("getConsensusEssay"), Essay.findOneAndUpdate({
            prompt: a.user.lastPrompt,
            "scoresheets.0": {
                $exists: !0
            },
            "scoresheets.1": {
                $exists: !1
            },
            graders: {
                $ne: a.user._id
            },
            "skip.user": {
                $ne: a.user._id
            }
        }, {
            $addToSet: {
                graders: a.user._id
            }
        }).lean().exec(function(a, d) {
            return a ? (error.log(new Error(a)), b.status(500).send({
                message: "We had trouble retrieving the essay. Please try again."
            })) : d ? void c(d, !0) : void f();
        });
    }
    function h() {
        logger.log("getCurrentEssay"), Essay.findOneAndUpdate({
            _id: a.user.currentEssay,
            "skip.user": {
                $ne: a.user._id
            }
        }, {
            $addToSet: {
                graders: a.user._id
            }
        }).lean().exec(function(a, d) {
            return a ? (error.log(new Error(a)), b.status(500).send({
                message: "We had trouble retrieving the essay. Please try again."
            })) : d ? void c(d) : void (j ? g() : f());
        });
    }
    logger.filename(__filename);
    var i = 5, j = a.user.scoresheets >= i && (!a.user.consensusScores || a.user.consensusScores / a.user.scoresheets <= 1 / i);
    return console.log("performConsensusScore", j), a.user ? void (a.user.currentEssay ? h() : j ? g() : a.user.lastRubric && a.user.lastPrompt ? f() : d()) : b.sendStatus(403);
};