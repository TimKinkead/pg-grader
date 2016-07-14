"use strict";

var mongoose = require("mongoose"), Essay = mongoose.model("Essay"), Module = mongoose.model("Module"), _ = require("lodash"), error = require("../../error"), logger = require("../../logger");

exports.init = function(a, b) {
    logger.filename(__filename);
    var c = require("../data/essays.js"), d = 0;
    Module.find().select("_id id").exec(function(a, e) {
        if (a) return error.log(new Error(a)), b.status(500).send(a);
        var f = {};
        return e.forEach(function(a) {
            a && a.id && (f[a.id] = a, f[a.id].count = 0);
        }), c.forEach(function(a, b) {
            if (a && a.module && f[a.module]) {
                if (a.link = "https://s3-us-west-2.amazonaws.com/pg-scoresheet/student-work/" + f[a.module].id + "/" + a.filename, 
                "development" === process.env.NODE_ENV && f[a.module] && f[a.module].count >= 5) return;
                f[a.module].count++, a.module = f[a.module]._id;
            }
            Essay.findOne({
                id: a.id
            }).exec(function(e, f) {
                return e ? void error.log(new Error(e)) : (f ? (f = _.extend(f, a), f.modified = new Date()) : f = new Essay(a), 
                void f.save(function(a) {
                    return a ? void error.log(new Error(a)) : (d++, void ("development" === process.env.NODE_ENV ? logger.arrow("essay " + d + " saved") : logger.arrow("essay " + (b + 1) + "/" + c.length + " saved")));
                }));
            });
        }), b.status(200).send("Initializing Essays");
    });
};