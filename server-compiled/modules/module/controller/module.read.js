"use strict";

var mongoose = require("mongoose"), Module = mongoose.model("Module"), error = require("../../error"), logger = require("../../logger");

exports.read = function(a, b) {
    return logger.filename(__filename), a.query.module ? void Module.findById(a.query.module).populate("rubric", "_id name fields").exec(function(a, c) {
        return a ? (a = new Error(a), error.log(a), b.status(500).send(a)) : b.status(200).send(c);
    }) : b.status(400).send({
        message: "!req.query.module"
    });
};