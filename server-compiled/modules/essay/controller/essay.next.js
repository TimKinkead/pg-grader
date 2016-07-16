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
    function c(a) {
        return a && error.log(new Error(a)), b.status(500).send({
            message: "We had trouble retrieving the essay. Please try again.",
            error: a
        });
    }
    function d(d) {
        return logger.dash("done"), d ? (a.user.lastModule && a.user.lastModule.toString() !== d.module.toString() && (d.newModule = !0), 
        updateUser(a.user._id, d), b.status(200).send(d)) : void c(new Error("!essay"));
    }
    function e() {
        logger.dash("getAnyEssay"), Essay.findOneAndUpdate({
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
        }).lean().exec(function(a, c) {
            return a ? void error.log(new Error(a)) : c ? void d(c) : b.status(200).send({
                message: "all essays graded"
            });
        });
    }
    function f() {
        logger.dash("getAnyNextEssay"), Essay.findOneAndUpdate({
            module: x,
            "gradedBy.0": {
                $exists: !1
            },
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
        }).lean().exec(function(a, b) {
            return a ? void c(new Error(a)) : b ? void d(b) : void r();
        });
    }
    function g() {
        logger.dash("getNextEssay"), Essay.findOneAndUpdate({
            module: x,
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
        }).lean().exec(function(a, b) {
            return a ? void c(new Error(a)) : b ? void d(b) : void f();
        });
    }
    function h() {
        logger.dash("getInProgressEssay"), Essay.findOneAndUpdate({
            graders: a.user._id,
            "skip.user": {
                $ne: a.user._id
            }
        }, {
            $addToSet: {
                graders: a.user._id
            }
        }).lean().exec(function(a, b) {
            return a ? void c(new Error(a)) : b ? void d(b) : void g();
        });
    }
    function i() {
        logger.dash("getGradeAllEssay"), Essay.findOneAndUpdate({
            module: x,
            masterScore: {
                $ne: !0
            },
            gradeAll: !0,
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
        }).lean().exec(function(a, b) {
            return a ? void c(new Error(a)) : b ? void d(b) : void h();
        });
    }
    function j() {
        logger.dash("getCheckEssay"), Essay.findOneAndUpdate({
            module: x,
            masterScore: !0,
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
        }).lean().exec(function(a, b) {
            return a ? void c(new Error(a)) : b ? void d(b) : void h();
        });
    }
    function k() {
        logger.dash("getAnyRandomEssay"), Essay.findOneAndUpdate({
            module: x,
            masterScore: {
                $ne: !0
            },
            gradeAll: {
                $ne: !0
            },
            "skip.user": {
                $ne: a.user._id
            }
        }, {
            $addToSet: {
                graders: a.user._id
            }
        }).lean().exec(function(a, b) {
            return a ? void c(new Error(a)) : b ? void d(b) : void h();
        });
    }
    function l() {
        logger.dash("getRandomEssay"), Essay.findOneAndUpdate({
            module: x,
            masterScore: {
                $ne: !0
            },
            gradeAll: {
                $ne: !0
            },
            "graders.0": {
                $exists: !1
            },
            "gradedBy.0": {
                $exists: !1
            },
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
        }).lean().exec(function(a, b) {
            return a ? void c(new Error(a)) : b ? void d(b) : void k();
        });
    }
    function m() {
        logger.dash("getAnyFirstEssay"), Essay.findOneAndUpdate({
            module: x,
            masterScore: {
                $ne: !0
            }
        }, {
            $addToSet: {
                graders: a.user._id
            }
        }).lean().exec(function(a, b) {
            return a ? void c(new Error(a)) : b ? void d(b) : void c(new Error("!essayDoc"));
        });
    }
    function n() {
        logger.dash("getFirstEssay"), Essay.findOneAndUpdate({
            module: x,
            masterScore: {
                $ne: !0
            },
            gradeAll: {
                $ne: !0
            },
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
        }).lean().exec(function(a, b) {
            return a ? void c(new Error(a)) : b ? void d(b) : void m();
        });
    }
    function o() {
        logger.dash("getCurrentEssay"), Essay.findOneAndUpdate({
            _id: s
        }, {
            $addToSet: {
                graders: a.user._id
            }
        }).lean().exec(function(a, b) {
            return a ? void c(new Error(a)) : b ? void d(b) : void (u ? l() : v ? j() : w ? i() : h());
        });
    }
    function p() {
        s ? o() : t ? n() : u ? l() : v ? j() : w ? i() : h();
    }
    function q() {
        s = a.user.currentEssay, t = Boolean(!a.user.scoresheets || !a.user.scoresheetsByModule || !a.user.scoresheetsByModule[x]);
        var b = a.user.scoresheetsByModule && a.user.scoresheetsByModule[x] ? a.user.scoresheetsByModule[x] : a.user.scoresheets;
        [ 1, 3, 5, 6, 7, 9, 10, 11 ].indexOf(b + 1) > -1 ? u = !0 : !a.user.facilitator && [ 2, 4, 8, 12 ].indexOf(b + 1) > -1 ? v = !0 : [ 13, 14, 15 ].indexOf(b + 1) > -1 && (w = !0), 
        p();
    }
    if (logger.filename(__filename), !a.user) return b.sendStatus(403);
    if (!a.user.group) return error.log(new Error("!req.user.group")), b.status(500).send({
        error: "!req.user.group"
    });
    if (!a.user.group.modules || !a.user.group.modules.length) return error.log(new Error("!req.user.group.modules")), 
    b.status(500).send({
        error: "!req.user.group.modules"
    });
    var r, s, t, u, v, w, x = a.user.lastModule ? a.user.lastModule : a.user.group.modules[0];
    r = function() {
        var b = a.user.group.modules.indexOf(x);
        a.user.group.modules[b + 1] ? (x = a.user.group.modules[b + 1], q()) : e();
    }, q();
};