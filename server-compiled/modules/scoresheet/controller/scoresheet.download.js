"use strict";

function csvEscape(a) {
    return '"' + String(a || "").replace(/\"/g, '""') + '"';
}

function twoCharNo(a) {
    for (var b = a.toString(); b.length < 2; ) b = "0" + b;
    return b;
}

var mongoose = require("mongoose"), ScoreSheet = mongoose.model("ScoreSheet"), Rubric = mongoose.model("Rubric"), error = require("../../error"), logger = require("../../logger");

exports.download = function(a, b) {
    function c() {
        h = "Graded-Work_" + n.getFullYear() + "-" + twoCharNo(n.getMonth() + 1) + "-" + twoCharNo(n.getDate()) + "_" + twoCharNo(n.getHours()) + twoCharNo(n.getMinutes()) + twoCharNo(n.getSeconds()), 
        b.setHeader("Content-disposition", 'attachment; filename="' + h + i + '"'), b.contentType(j), 
        m = !0;
    }
    function d(a) {
        var b = [], c = a.user || {}, d = a.essay || {}, e = a.rubric || {}, f = a.score || {};
        return b.push(c.name || ""), b.push(d.id || ""), b.push(d.link || ""), b.push(e.name || ""), 
        l.forEach(function(a) {
            b.push(f[a] || "");
        }), b;
    }
    logger.filename(__filename);
    var e, f, g, h, i, j, k = [ "grader", "essay", "link", "rubric" ], l = [], m = !1, n = new Date();
    switch (a.query.delimiter) {
      case "tab":
        f = "\t", g = "\n", i = ".tsv", j = "text/tab-separated-values";
        break;

      default:
        f = ",", g = "\n", i = ".csv", j = "text/csv";
    }
    e = {}, Rubric.find().select("fields").exec(function(a, h) {
        return a ? (error.log(new Error(a)), b.status(500).send({
            message: "Graded Work Download Error!",
            error: a
        })) : (h.forEach(function(a) {
            a.fields.forEach(function(a) {
                a.name && l.indexOf(a.name) < 0 && l.push(a.name);
            });
        }), void ScoreSheet.find(e).sort({
            essay: 1
        }).select("_id user essay rubric score").populate("user", "_id id name").populate("essay", "_id id link").populate("rubric", "_id name").stream().on("data", function(a) {
            m || (c(), b.write(k.concat(l).map(csvEscape).join(f) + g)), b.write(d(a).map(csvEscape).join(f) + g);
        }).on("close", function() {
            b.end();
        }).on("error", function(a) {
            return error.log(new Error(a)), b.status(500).send({
                message: "Graded Work Download Error!",
                error: a
            });
        }));
    });
};