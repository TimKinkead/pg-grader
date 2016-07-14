"use strict";

var mongoose = require("mongoose"), User = mongoose.model("User"), error = require("../../error"), logger = require("../../logger");

exports.create = function(a, b) {
    if (logger.filename(__filename), !a.user || !a.user.admin) return b.sendStatus(403);
    var c = new User({
        firstName: a.body.firstName,
        lastName: a.body.lastName,
        email: a.body.email ? a.body.email.toLowerCase() : null
    });
    User.uniqueId(function(a, d) {
        return a ? (error.log(new Error(a)), b.status(500).send({
            error: a
        })) : (c.id = d, void c.save(function(a) {
            return a ? (error.log(new Error(a)), b.status(500).send({
                error: a
            })) : b.status(200).send(c);
        }));
    });
};