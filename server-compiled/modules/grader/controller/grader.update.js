"use strict";

var mongoose = require("mongoose"), User = mongoose.model("User"), error = require("../../error"), logger = require("../../logger");

exports.update = function(a, b) {
    if (logger.filename(__filename), !a.user || !a.user.admin) return b.sendStatus(403);
    if (!a.body.grader) return b.status(400).send({
        error: "!req.body.grader"
    });
    var c = {
        $set: {
            modified: new Date()
        }
    }, d = [];
    for (var e in a.body) a.body.hasOwnProperty(e) && d.indexOf(e) > -1 && (c.$set[e] = a.body[e]);
    User.update({
        _id: a.body.grader
    }, c, function(a) {
        return a ? (error.log(new Error(a)), b.status(500).send({
            error: a
        })) : b.sendStatus(200);
    });
};