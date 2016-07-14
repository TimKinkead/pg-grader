"use strict";

var mongoose = require("mongoose"), Essay = mongoose.model("Essay"), error = require("../../error"), logger = require("../../logger");

exports.listSkipped = function(a, b) {
    if (logger.filename(__filename), !a.user) return b.sendStatus(403);
    var c = a.user.admin ? {
        "skip.0": {
            $exists: !0
        }
    } : {
        "skip.user": a.user._id
    };
    Essay.find(c).populate("skip.user", "_id name").lean().exec(function(a, c) {
        return a ? (a = new Error(a), error.log(a), b.status(500).send(a)) : b.status(200).send(c);
    });
};