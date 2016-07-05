"use strict";

var mongoose = require("mongoose"), ScoreSheet = mongoose.model("ScoreSheet"), error = require("../../error"), logger = require("../../logger");

exports["delete"] = function(a, b) {
    if (logger.filename(__filename), !a.user) return b.status(403).send({
        error: "!req.user"
    });
    if (!a.user.admin) return b.status(403).send({
        error: "!req.user.admin"
    });
    if (!a.body.scoresheet) return b.status(400).send({
        error: "!req.body.scoresheet"
    });
    var c = a.user.admin ? {
        _id: a.body.scoresheet
    } : {
        _id: a.body.scoresheet,
        user: a.user._id
    };
    ScoreSheet.remove(c, function(a) {
        return a ? (error.log(new Error(a)), b.status(500).send({
            error: a
        })) : b.sendStatus(200);
    });
};