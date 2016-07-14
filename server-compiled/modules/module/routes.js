"use strict";

var _module = require("../module");

module.exports = function(a) {
    a.route("/data/module").get(_module.read), a.route("/data/module/list").get(_module.list), 
    a.route("/data/module/init").get(_module.init), a.route("/data/module/count").get(_module.count);
};