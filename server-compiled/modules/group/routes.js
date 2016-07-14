"use strict";

var group = require("../group");

module.exports = function(a) {
    a.route("/data/group").get(group.read), a.route("/data/group/list").get(group.list), 
    a.route("/data/group/init").get(group.init), a.route("/data/group/count").get(group.count);
};