"use strict";

var mongoose = require("mongoose"), Group = mongoose.model("Group"), error = require("../../error"), logger = require("../../logger");

exports.read = function(a, b) {
    return logger.filename(__filename), a.query.group ? void Group.findById(a.query.group).exec(function(a, c) {
        return a ? (a = new Error(a), error.log(a), b.status(500).send(a)) : b.status(200).send(c);
    }) : b.status(400).send({
        message: "!req.query.group"
    });
};