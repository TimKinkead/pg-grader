"use strict";

var mongoose = require("mongoose"), Rubric = mongoose.model("Rubric"), _ = require("lodash"), error = require("../../error"), logger = require("../../logger");

exports.init = function(a, b) {
    logger.filename(__filename);
    var c = require("../data/rubrics.js");
    return c.forEach(function(a, b) {
        Rubric.findOne({
            name: a.name
        }).exec(function(d, e) {
            return d ? void error.log(new Error(d)) : (e ? (e = _.extend(e, a), e.modified = new Date()) : e = new Rubric(a), 
            void e.save(function(a) {
                return a ? void error.log(new Error(a)) : void logger.arrow("rubric " + (b + 1) + "/" + c.length + " saved");
            }));
        });
    }), b.status(200).send("Initializing Rubrics");
};