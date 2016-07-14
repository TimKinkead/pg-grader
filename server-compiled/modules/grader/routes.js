"use strict";

var grader = require("../grader");

module.exports = function(a) {
    a.route("/data/grader").post(grader.create).get(grader.read).put(grader.update)["delete"](grader["delete"]), 
    a.route("/data/grader/list").get(grader.list);
};