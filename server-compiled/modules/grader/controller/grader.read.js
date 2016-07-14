"use strict";

var mongoose = require("mongoose"), User = mongoose.model("User"), error = require("../../error"), logger = require("../../logger");

exports.read = function(a, b) {
    return logger.filename(__filename), a.user && a.user.admin ? a.query.grader ? void User.find({
        _id: a.query.grader
    }).exec(function(a, c) {
        return a ? (error.log(new Error(a)), b.status(500).send({
            error: a
        })) : c ? b.status(200).send(c) : b.status(404).send({
            message: "!grader"
        });
    }) : b.status(400).send({
        error: "!req.query.grader"
    }) : b.sendStatus(403);
};