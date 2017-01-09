"use strict";

var mongoose = require("mongoose"), Module = mongoose.model("Module"), Rubric = mongoose.model("Rubric"), _ = require("lodash"), error = require("../../error"), logger = require("../../logger");

exports.init = function(a, b) {
    logger.filename(__filename);
    var c = require("../data/modules.js"), d = 0;
    Rubric.find().select("_id id").exec(function(a, e) {
        if (a) return error.log(new Error(a)), b.status(500).send(a);
        var f = {};
        return e.forEach(function(a) {
            a && a.id && (f[a.id] = a, f[a.id].count = 0);
        }), c.forEach(function(a, b) {
            a && a.rubric && f[a.rubric] && (a.rubric = f[a.rubric]._id, Module.findOne({
                id: a.id
            }).exec(function(b, c) {
                return b ? void error.log(new Error(b)) : (c ? (c = _.extend(c, a), c.modified = new Date()) : c = new Module(a), 
                void c.save(function(a) {
                    return a ? void error.log(new Error(a)) : (d++, void logger.arrow(d + ' - "' + c.id + '" module saved'));
                }));
            }));
        }), b.status(200).send("Initializing Modules");
    });
};