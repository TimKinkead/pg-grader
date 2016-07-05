"use strict";

var mongoose = require("mongoose"), Essay = mongoose.model("Essay"), error = require("../../error"), logger = require("../../logger");

exports.read = function(a, b) {
    return logger.filename(__filename), a.query.essay ? void Essay.findById(a.query.essay).populate("rubric", "_id name fields").exec(function(a, c) {
        return a ? (a = new Error(a), error.log(a), b.status(500).send(a)) : b.status(200).send(c);
    }) : b.status(400).send({
        message: "!req.query.essay"
    });
};