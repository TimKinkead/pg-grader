"use strict";

var essay = require("../essay");

module.exports = function(a) {
    a.route("/data/essay").get(essay.read), a.route("/data/essay/next").get(essay.next), 
    a.route("/data/essay/skip").put(essay.skip), a.route("/data/essay/list").get(essay.list), 
    a.route("/data/essay/list-skipped").get(essay.listSkipped), a.route("/data/essay/init").get(essay.init);
};