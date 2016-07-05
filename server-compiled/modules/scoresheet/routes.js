"use strict";

var scoresheet = require("../scoresheet");

module.exports = function(a) {
    a.route("/data/scoresheet").post(scoresheet.save).get(scoresheet.read)["delete"](scoresheet["delete"]), 
    a.route("/data/scoresheet/list").get(scoresheet.list), a.route("/data/scoresheet/list-consensus").get(scoresheet.listConsensus);
};