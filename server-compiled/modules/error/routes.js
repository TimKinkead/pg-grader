"use strict";

var error = require("../error");

module.exports = function(a) {
    a.route("/data/error").post(error.save);
};