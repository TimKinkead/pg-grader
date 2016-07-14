"use strict";

var mongoose = require("mongoose"), Essay = mongoose.model("Essay"), error = require("../../error"), logger = require("../../logger");

exports.list = function(a, b) {
    if (logger.filename(__filename), !a.user) return b.sendStatus(403);
    var c;
    if (a.user.admin) c = a.query.module ? {
        module: a.query.module
    } : {}; else {
        if (!a.user.group || !a.user.group.modules) {
            var d = "!req.user.group || !req.user.group.modules";
            return error.log(new Error(d)), b.status(500).send({
                error: d
            });
        }
        c = {
            module: {
                $in: a.user.group.modules
            }
        };
    }
    Essay.find(c).populate("module", "_id id name").populate("scoresheets", "_id user score masterScore").exec(function(a, c) {
        return a ? (a = new Error(a), error.log(a), b.status(500).send(a)) : b.status(200).send(c);
    });
};