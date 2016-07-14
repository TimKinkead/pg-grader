"use strict";

var mongoose = require("mongoose"), ScoreSheet = mongoose.model("ScoreSheet"), Essay = mongoose.model("Essay"), error = require("../../error"), logger = require("../../logger");

exports.listConsensus = function(a, b) {
    if (logger.filename(__filename), !a.user) return b.sendStatus(403);
    var c = {
        "scoresheets.1": {
            $exists: !0
        }
    };
    a.user.admin || (c.graders = a.user._id), Essay.find(c).select("_id").exec(function(a, c) {
        if (a) return error.log(new Error(a)), b.status(500).send({
            error: a
        });
        if (!c || !c.length) return b.status(200).send([]);
        var d = [];
        return c.forEach(function(a) {
            a._id && d.push(a._id);
        }), d.length ? void ScoreSheet.find({
            essay: {
                $in: d
            }
        }).sort({
            essay: 1
        }).populate("user", "_id id name").populate("essay", "id link").populate("rubric", "name").exec(function(a, c) {
            return a ? (error.log(new Error(a)), b.status(500).send({
                error: a
            })) : b.status(200).send(c || []);
        }) : b.status(200).send([]);
    });
};