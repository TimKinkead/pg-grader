"use strict";

var mongoose = require("mongoose"), Group = mongoose.model("Group"), error = require("../../error"), logger = require("../../logger");

exports.list = function(a, b) {
    logger.filename(__filename), Group.find().populate("modules", "_id id name grade subject").exec(function(a, c) {
        return a ? (a = new Error(a), error.log(a), b.status(500).send(a)) : b.status(200).send(c);
    });
};