"use strict";

var scoresheet = require("../scoresheet");

module.exports = function(a) {
    a.route("/data/scoresheet").post(scoresheet.save).get(scoresheet.read)["delete"](scoresheet["delete"]), 
    a.route("/data/scoresheet/list").get(scoresheet.list), a.route("/data/scoresheet/list-consensus").get(scoresheet.listConsensus), 
    a.route("/data/scoresheet/download").get(scoresheet.download), a.route("/data/scoresheet/download/sri").get(scoresheet.downloadSRI), 
    a.route("/data/scoresheet/count").get(scoresheet.count);
};