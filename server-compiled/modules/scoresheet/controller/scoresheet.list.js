"use strict";

var mongoose = require("mongoose"), ScoreSheet = mongoose.model("ScoreSheet"), error = require("../../error"), logger = require("../../logger");

exports.list = function(a, b) {
    if (logger.filename(__filename), !a.user) return b.sendStatus(403);
    var c = a.user.admin ? {} : {
        user: a.user._id
    };
    ScoreSheet.find(c).select().populate("user", "_id id name").populate("essay", "id link").populate("rubric", "name").exec(function(a, c) {
        return a ? (error.log(new Error(a)), b.status(500).send({
            error: a
        })) : b.status(200).send(c || []);
    });
};