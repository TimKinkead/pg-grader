"use strict";

function updateUser(a, b) {
    return a ? b && b._id && b.module ? void User.update({
        _id: a
    }, {
        $set: {
            lastModule: b.module,
            currentEssay: b._id
        }
    }, function(a) {
        a && error.log(new Error(a));
    }) : void error.log(new Error("!essay || !essay._id || !essay.module")) : void error.log(new Error("!userId"));
}

var mongoose = require("mongoose"), Essay = mongoose.model("Essay"), Rubric = mongoose.model("Rubric"), User = mongoose.model("User"), error = require("../../error"), logger = require("../../logger");

exports.next = function(a, b) {
    function c(c) {
        return logger.dash("done"), a.user.lastModule && a.user.lastModule.toString() !== c.module.toString() && (c.newModule = !0), 
        updateUser(a.user._id, c), b.status(200).send(c);
    }
    function d() {
        logger.dash("getAnyEssay"), Essay.findOneAndUpdate({
            module: {
                $in: a.user.group.modules
            },
            $or: [ {
                "graders.0": {
                    $exists: !1
                },
                "gradedBy.0": {
                    $exists: !1
                }
            }, {
                gradeAll: !0,
                gradedBy: {
                    $ne: a.user._id
                }
            } ],
            "skip.user": {
                $ne: a.user._id
            },
            "skip.4": {
                $exists: !1
            }
        }, {
            $addToSet: {
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
        logger.dash("getNextEssay"), Essay.findOneAndUpdate({
            module: a.user.lastModule,
            $or: [ {
                "graders.0": {
                    $exists: !1
                },
                "gradedBy.0": {
                    $exists: !1
                }
            }, {
                gradeAll: !0,
                gradedBy: {
                    $ne: a.user._id
                }
            } ],
            "skip.user": {
                $ne: a.user._id
            },
            "skip.4": {
                $exists: !1
            }
        }, {
            $addToSet: {
                graders: a.user._id
            }
        }).lean().exec(function(a, e) {
            return a ? (error.log(new Error(a)), b.status(500).send({
                message: "We had trouble retrieving the essay. Please try again."
            })) : e ? void c(e) : void d();
        });
    }
    function f() {
        logger.dash("getInProgressEssay"), Essay.findOneAndUpdate({
            module: {
                $in: a.user.group.modules
            },
            graders: a.user._id,
            gradedBy: {
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
            })) : d ? void c(d) : void e();
        });
    }
    function g() {
        logger.dash("getCheckEssay"), Essay.findOneAndUpdate({
            masterScore: !0,
            module: {
                $in: a.user.group.modules
            },
            gradedBy: {
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
            })) : d ? void c(d) : void f();
        });
    }
    function h() {
        logger.dash("getCurrentEssay"), Essay.findOneAndUpdate({
            _id: a.user.currentEssay
        }, {
            $addToSet: {
                graders: a.user._id
            }
        }).lean().exec(function(a, d) {
            return a ? (error.log(new Error(a)), b.status(500).send({
                message: "We had trouble retrieving the essay. Please try again."
            })) : d ? void c(d) : void (l ? g() : f());
        });
    }
    function i() {
        logger.dash("getFirstEssay"), Essay.findOneAndUpdate({
            masterScore: {
                $ne: !0
            },
            module: a.user.group.modules[0],
            "graders.0": {
                $exists: !1
            },
            "gradedBy.0": {
                $exists: !1
            },
            "skip.4": {
                $exists: !1
            }
        }, {
            $addToSet: {
                graders: a.user._id
            }
        }).lean().exec(function(a, d) {
            return a ? (error.log(new Error(a)), b.status(500).send({
                message: "We had trouble retrieving the essay. Please try again."
            })) : d ? void c(d) : (error.log(new Error("!essayDoc")), b.status(500).send({
                message: "We had trouble retrieving the essay. Please try again."
            }));
        });
    }
    if (logger.filename(__filename), !a.user) return b.sendStatus(403);
    if (!a.user.group) return error.log(new Error("!req.user.group")), b.status(500).send({
        error: "!req.user.group"
    });
    if (!a.user.group.modules) return error.log(new Error("!req.user.group.modules")), 
    b.status(500).send({
        error: "!req.user.group.modules"
    });
    var j = !a.user.scoresheets && !a.user.currentEssay, k = 5, l = (a.user.scoresheets >= k && (!a.user.consensusScores || a.user.consensusScores / a.user.scoresheets <= 1 / k), 
    [ 1, 3, 7, 11 ].indexOf(a.user.scoresheets) > -1 || a.user.scoresheets > 20 && a.user.scoresheets % 10 === 0);
    a.user.currentEssay ? h() : j ? i() : l ? g() : f();
};