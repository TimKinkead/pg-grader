"use strict";

var mongoose = require("mongoose"), User = mongoose.model("User"), error = require("../../error"), logger = require("../../logger");

exports.list = function(a, b) {
    return logger.filename(__filename), a.user && a.user.admin ? void User.find().select("_id id name email admin created").exec(function(a, c) {
        return a ? (error.log(new Error(a)), b.status(500).send({
            error: a
        })) : b.status(200).send(c || []);
    }) : b.sendStatus(403);
};