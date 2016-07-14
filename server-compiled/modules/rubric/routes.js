"use strict";

var rubric = require("../rubric");

module.exports = function(a) {
    a.route("/data/rubric/list").get(rubric.list), a.route("/data/rubric/init").get(rubric.init), 
    a.route("/data/rubric/count").get(rubric.count);
};