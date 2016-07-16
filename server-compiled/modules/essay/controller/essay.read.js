"use strict";

function updateUser(a, b) {
    User.update({
        _id: a
    }, {
        $set: {
            lastModule: b.module._id,
            currentEssay: b._id
        }
    }, function(a) {
        a && error.log(new Error(a));
    });
}

function updateEssay(a, b) {
    Essay.update({
        _id: a
    }, {
        $addToSet: {
            graders: b
        }
    }, function(a) {
        a && error.log(new Error(a));
    });
}

var mongoose = require("mongoose"), Essay = mongoose.model("Essay"), User = mongoose.model("User"), error = require("../../error"), logger = require("../../logger");

exports.read = function(a, b) {
    return logger.filename(__filename), a.query.essay ? void (a.query.grading ? Essay.findById(a.query.essay).populate("module", "_id id name abbv grade subject prompt promptExtra rubric").populate("scoresheets", "_id user masterScore").exec(function(c, d) {
        if (c) return c = new Error(c), error.log(c), b.status(500).send(c);
        var e = !0;
        return a.user.admin ? e = !1 : a.user.facilitator && d.masterScore ? e = !1 : d.scoresheets.forEach(function(b) {
            b.user && b.user.toString() === a.user._id.toString() && (e = !1);
        }), e && (updateUser(a.user._id, d), updateEssay(d._id, a.user._id)), b.status(200).send(d);
    }) : a.query.full ? Essay.findById(a.query.essay).populate("module", "_id id name abbv grade subject prompt promptExtra rubric").populate("graders", "_id name").populate("gradedBy", "_id name").populate("scoresheets", "_id user rubric score masterScore").populate("skip.user", "_id name").exec(function(a, c) {
        return a ? (a = new Error(a), error.log(a), b.status(500).send(a)) : b.status(200).send(c);
    }) : Essay.findById(a.query.essay).populate("module", "_id id name abbv grade subject prompt promptExtra rubric").exec(function(a, c) {
        return a ? (a = new Error(a), error.log(a), b.status(500).send(a)) : b.status(200).send(c);
    })) : b.status(400).send({
        message: "!req.query.essay"
    });
};