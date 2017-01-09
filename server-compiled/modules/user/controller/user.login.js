"use strict";

var passport = require("passport"), _ = require("lodash"), jwt = require("jsonwebtoken"), error = require("../../error"), logger = require("../../logger"), userUtil = _.extend({}, require("./util/user.get.data")), auth = require("../../../../auth.js");

exports.login = function(a, b, c) {
    if (logger.filename(__filename), !a.body.email || !a.body.password) return b.status(400).send({
        message: "Please provide your email address and password."
    });
    a.body.email.toLowerCase(), a.body.password;
    logger.dash("checking password"), passport.authenticate("local", function(c, d, e) {
        return c ? (error.log(c), b.status(500).send(c)) : d ? e ? (logger.dash("logging in user"), 
        void a.login(d, function(a) {
            if (a) return error.log(new Error(a)), b.status(500).send(a);
            var c = userUtil.getData(d._doc, "default");
            jwt.sign({
                userId: d._id
            }, auth.tokenSecret, {
                expiresIn: 604800
            }, function(a, d) {
                return a && error.log(new Error(a)), d && (c.token = d), b.status(200).send(c);
            });
        })) : b.status(401).send({
            message: "!validPassword"
        }) : b.status(401).send({
            message: "!user"
        });
    })(a, b, c);
};