"use strict";

var _ = require("lodash"), jwt = require("jsonwebtoken"), mongoose = require("mongoose"), User = mongoose.model("User"), error = require("../../error"), logger = require("../../logger"), userUtil = _.extend({}, require("./util/user.get.data")), auth = require("../../../../auth.js");

exports.signUp = function(a, b) {
    if (logger.filename(__filename), !a.body.firstName || !a.body.lastName) return b.status(400).send({
        message: "Please provide your first and last name."
    });
    if (!a.body.email || !a.body.password) return b.status(400).send({
        message: "Please provide your email address and a password."
    });
    var c = new User({
        firstName: a.body.firstName,
        lastName: a.body.lastName,
        email: a.body.email.toLowerCase(),
        password: a.body.password,
        group: a.body.group,
        facilitator: a.body.facilitator,
        admin: a.body.admin
    });
    logger.dash("checking email"), User.checkNewEmail(c.email, function(d, e) {
        return d ? (error.log(d), b.status(500).send({
            error: d
        })) : e ? (logger.dash("getting id"), void User.uniqueId(function(d, e) {
            return d ? (error.log(d), b.status(500).send({
                error: d
            })) : e ? (c.id = e, logger.dash("saving user"), logger.bold(JSON.stringify(c, null, 4)), 
            void c.save(function(d) {
                return d ? (error.log(new Error(d)), b.status(500).send({
                    error: d
                })) : (logger.dash("logging in user"), void a.login(c, function(a) {
                    if (a) return error.log(new Error(a)), b.status(500).send({
                        message: "!login"
                    });
                    const d = userUtil.getData(c._doc, "default");
                    jwt.sign({
                        userId: c._id
                    }, auth.tokenSecret, {
                        expiresIn: 604800
                    }, function(a, c) {
                        return a && error.log(new Error(a)), c && (d.token = c), b.status(200).send(d);
                    });
                }));
            })) : (error.log(new Error("!id")), b.status(500).send({
                message: "!id"
            }));
        })) : b.status(500).send({
            message: "!newEmail"
        });
    });
};