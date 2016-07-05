"use strict";

var mongoose = require("mongoose"), Essay = mongoose.model("Essay"), Rubric = mongoose.model("Rubric"), _ = require("lodash"), error = require("../../error"), logger = require("../../logger");

exports.init = function(a, b) {
    logger.filename(__filename);
    var c = require("../data/essays.js"), d = 0;
    Rubric.find().select("_id name").exec(function(a, e) {
        if (a) return error.log(new Error(a)), b.status(500).send(a);
        var f = {};
        return e.forEach(function(a) {
            a && a.name && (f[a.name] = a, f[a.name].count = 0);
        }), c.forEach(function(a, b) {
            if (a && a.rubric && f[a.rubric]) {
                if ("development" === process.env.NODE_ENV && f[a.rubric].count >= 7) return;
                f[a.rubric].count++, a.rubric = f[a.rubric]._id, Essay.findOne({
                    name: a.name
                }).exec(function(e, f) {
                    return e ? void error.log(new Error(e)) : (f ? (f = _.extend(f, a), f.modified = new Date()) : f = new Essay(a), 
                    void f.save(function(a) {
                        return a ? void error.log(new Error(a)) : (d++, void ("development" === process.env.NODE_ENV ? logger.arrow("essay " + d + " saved") : logger.arrow("essay " + (b + 1) + "/" + c.length + " saved")));
                    }));
                });
            }
        }), b.status(200).send("Initializing Essays");
    });
};