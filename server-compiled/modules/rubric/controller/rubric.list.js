"use strict";

var mongoose = require("mongoose"), Rubric = mongoose.model("Rubric"), error = require("../../error"), logger = require("../../logger");

exports.list = function(a, b) {
    logger.filename(__filename), Rubric.find().exec(function(a, c) {
        return a ? (a = new Error(a), error.log(a), b.status(500).send(a)) : b.status(200).send(c);
    });
};