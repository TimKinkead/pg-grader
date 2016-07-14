"use strict";

var mongoose = require("mongoose"), Group = mongoose.model("Group"), Module = mongoose.model("Module"), _ = require("lodash"), error = require("../../error"), logger = require("../../logger");

exports.init = function(a, b) {
    logger.filename(__filename);
    var c = require("../data/groups.js"), d = 0;
    Module.find().select("_id id").exec(function(a, e) {
        if (a) return error.log(new Error(a)), b.status(500).send(a);
        var f = {};
        return e.forEach(function(a) {
            a && a.id && (f[a.id] = a);
        }), console.log(JSON.stringify(f, null, 4)), c.forEach(function(a) {
            if (a && a.modules && a.modules.length) {
                console.log("group modules = " + JSON.stringify(a.modules));
                var b = [];
                a.modules.forEach(function(a) {
                    f[a] && b.push(f[a]._id);
                }), a.modules = b;
            }
            Group.findOne({
                id: a.id
            }).exec(function(b, c) {
                return b ? void error.log(new Error(b)) : (c ? (c = _.extend(c, a), c.modified = new Date()) : c = new Group(a), 
                void c.save(function(a) {
                    return a ? void error.log(new Error(a)) : (d++, void logger.arrow(d + ' - "' + c.id + '" group saved'));
                }));
            });
        }), b.status(200).send("Initializing Groups");
    });
};