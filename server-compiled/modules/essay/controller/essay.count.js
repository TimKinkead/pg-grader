"use strict";

var mongoose = require("mongoose"), Essay = mongoose.model("Essay"), error = require("../../error"), logger = require("../../logger");

exports.count = function(a, b) {
    logger.filename(__filename);
    var c = {};
    a.query.module && (c.module = a.query.module), Essay.count(c).exec(function(a, c) {
        return a ? (a = new Error(a), error.log(a), b.status(500).send(a)) : b.status(200).send(c ? c.toString() : "0");
    });
};