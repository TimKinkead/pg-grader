"use strict";

var mongoose = require("mongoose"), User = mongoose.model("User"), error = require("../../error"), logger = require("../../logger");

exports.list = function(a, b) {
    if (logger.filename(__filename), !a.user || !a.user.admin && !a.user.facilitator) return b.sendStatus(403);
    if (a.user.facilitator && !a.user.group) return b.sendStatus(500);
    var c = a.user.admin ? {} : {
        "group.modules": {
            $in: a.user.group.modules
        }
    };
    User.find(c).select("_id id name email scoresheets checkScores admin facilitator").exec(function(a, c) {
        return a ? (error.log(new Error(a)), b.status(500).send({
            error: a
        })) : b.status(200).send(c || []);
    });
};