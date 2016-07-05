"use strict";

var mongoose = require("mongoose"), User = mongoose.model("User"), ScoreSheet = mongoose.model("ScoreSheet"), error = require("../../error"), logger = require("../../logger");

exports["delete"] = function(a, b) {
    return logger.filename(__filename), a.user && a.user.admin ? a.body.grader ? void ScoreSheet.count({
        user: a.body.grader
    }).exec(function(c, d) {
        return c ? (error.log(new Error(c)), b.status(500).send({
            error: c
        })) : d ? b.status(403).send({
            message: "You cannot delete this grader because they have score sheets."
        }) : void User.remove({
            _id: a.body.grader
        }, function(a) {
            return a ? (error.log(new Error(a)), b.status(500).send({
                error: a
            })) : b.sendStatus(200);
        });
    }) : b.status(400).send({
        error: "!req.body.grader"
    }) : b.sendStatus(403);
};