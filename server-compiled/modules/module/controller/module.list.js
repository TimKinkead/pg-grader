"use strict";

var mongoose = require("mongoose"), Module = mongoose.model("Module"), error = require("../../error"), logger = require("../../logger");

exports.list = function(a, b) {
    logger.filename(__filename);
    var c;
    c = a.user.admin ? {} : a.user.group && a.user.group.modules ? {
        _id: {
            $in: a.user.group.modules
        }
    } : {}, Module.find(c).sort("name").exec(function(a, c) {
        return a ? (a = new Error(a), error.log(a), b.status(500).send(a)) : b.status(200).send(c);
    });
};