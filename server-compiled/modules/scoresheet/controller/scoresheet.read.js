"use strict";

var mongoose = require("mongoose"), ScoreSheet = mongoose.model("ScoreSheet"), error = require("../../error"), logger = require("../../logger");

exports.read = function(a, b) {
    return logger.filename(__filename), a.user ? a.query.scoresheet ? void ScoreSheet.findById(a.query.scoresheet).populate("user", "_id name").populate("essay", "_id id name module prompt link").populate("rubric", "_id name headers fields").exec(function(a, c) {
        return a ? (error.log(new Error(a)), b.status(500).send({
            error: a
        })) : c ? b.status(200).send(c) : b.status(404).send({
            message: "!scoresheet"
        });
    }) : b.status(400).send({
        error: "!req.query.scoresheet"
    }) : b.status(403).send({
        error: "!req.user"
    });
};