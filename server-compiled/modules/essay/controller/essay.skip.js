"use strict";

var mongoose = require("mongoose"), Essay = mongoose.model("Essay"), User = mongoose.model("User"), error = require("../../error"), logger = require("../../logger");

exports.skip = function(a, b) {
    return logger.filename(__filename), a.user ? a.body.essay ? a.body.reason ? void Essay.update({
        _id: a.body.essay
    }, {
        $push: {
            skip: {
                user: a.user._id,
                reason: a.body.reason
            }
        },
        $pull: {
            graders: a.user._id
        }
    }, function(c) {
        return c ? (error.log(new Error(c)), b.status(500).send(c)) : void User.update({
            _id: a.user._id
        }, {
            $unset: {
                currentEssay: !0
            }
        }, function(a) {
            return a ? (error.log(new Error(a)), b.status(500).send(a)) : b.sendStatus(200);
        });
    }) : b.status(400).send({
        message: "!req.body.reason"
    }) : b.status(400).send({
        message: "!req.body.essay"
    }) : b.status(400).send({
        message: "!req.user"
    });
};