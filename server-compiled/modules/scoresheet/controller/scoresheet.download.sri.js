"use strict";

function csvEscape(a) {
    return '"' + String(a || "").replace(/\"/g, '""') + '"';
}

function writeTexts(a, b, c) {
    var d = a + ".texts.tsv", e = [ "DocId", "Link" ], f = !1, g = fs.createWriteStream("temp/graded-work/" + d);
    g.on("finish", function() {
        return c(d);
    }), ScoreSheet.find({
        essay: {
            $in: b
        }
    }).select("_id essay").populate("essay", "_id id link").sort({
        "essay.id": 1
    }).stream().on("data", function(a) {
        f || (g.write(e.map(csvEscape).join("\t") + "\n"), f = !0);
        var b = a.essay || {}, c = [ b.id, b.link ];
        g.write(c.map(csvEscape).join("\t") + "\n");
    }).on("close", function() {
        g.end();
    }).on("error", function(a) {
        error.log(new Error(a));
    });
}

function writeScores(a, b, c, d) {
    var e = a + ".scores.tsv", f = [ "DocId" ].concat(c), g = !1, h = fs.createWriteStream("temp/graded-work/" + e);
    h.on("finish", function() {
        return d(e);
    }), ScoreSheet.find({
        essay: {
            $in: b
        }
    }).select("_id essay score").populate("essay", "_id id link").sort({
        "essay.id": 1
    }).stream().on("data", function(a) {
        g || (h.write(f.map(csvEscape).join("\t") + "\n"), g = !0);
        var b = a.essay || {}, d = a.score || {}, e = [ b.id ];
        c.forEach(function(a) {
            e.push(d[a] || "");
        }), h.write(e.map(csvEscape).join("\t") + "\n");
    }).on("close", function() {
        h.end();
    }).on("error", function(a) {
        error.log(new Error(a));
    });
}

function writeSpecs(a, b) {
    var c = a + ".scores.specs.tsv", d = fs.createWriteStream("temp/graded-work/" + c), e = [ [ "ScoreProperty", "Score" ], [ "MinScore", "1" ], [ "MaxScore", "4" ], [ "ScoreInterval", "0.5" ] ];
    d.on("finish", function() {
        return b(c);
    }), e.forEach(function(a) {
        d.write(a.map(csvEscape).join("\t") + "\n");
    }), d.end();
}

var fs = require("fs"), fse = require("fs-extra"), archiver = require("archiver"), mongoose = require("mongoose"), ScoreSheet = mongoose.model("ScoreSheet"), Essay = mongoose.model("Essay"), Module = mongoose.model("Module"), Rubric = mongoose.model("Rubric"), error = require("../../error"), logger = require("../../logger");

exports.downloadSRI = function(a, b) {
    function c() {
        logger.dash("zipAndReturn"), b.setHeader("Content-disposition", 'attachment; filename="graded-work.zip"'), 
        b.contentType("application/zip");
        var a = archiver("zip");
        a.pipe(b), l.forEach(function(b) {
            a.file("./temp/graded-work/" + b, {
                name: b.toLowerCase()
            });
        }), a.finalize();
    }
    function d() {
        i -= 1, 0 === i && c();
    }
    function e() {
        logger.dash("writeFiles"), Essay.aggregate([ {
            $group: {
                _id: "$module",
                essayIds: {
                    $push: "$_id"
                }
            }
        } ], function(a, c) {
            return a ? (error.log(new Error(a)), b.status(500).send({
                error: a
            })) : c ? c.length ? (i = 3 * c.length, void c.forEach(function(a, b) {
                if (a && a._id && a.essayIds && a.essayIds.length) {
                    var c = j[a._id] ? j[a._id].id : "unknown_module_" + b;
                    c.toLowerCase(), writeTexts(c, a.essayIds, function(a) {
                        l.push(a), d();
                    }), writeScores(c, a.essayIds, k, function(a) {
                        l.push(a), d();
                    }), writeSpecs(c, function(a) {
                        l.push(a), d();
                    });
                } else d(), d(), d();
            })) : (error.log(new Error("!results.length")), b.status(500).send({
                error: "!results.length"
            })) : (error.log(new Error("!results")), b.status(500).send({
                error: "!results"
            }));
        });
    }
    function f() {
        logger.dash("getScoreFields"), Rubric.find().select("fields").exec(function(a, c) {
            return a ? (error.log(new Error(a)), b.status(500).send({
                error: a
            })) : (c.forEach(function(a) {
                a.fields.forEach(function(a) {
                    a && a.name && k.indexOf(a.name) < 0 && k.push(a.name);
                });
            }), void e());
        });
    }
    function g() {
        logger.dash("constructModulesMap"), Module.find().exec(function(a, c) {
            return a ? (error.log(new Error(a)), b.status(500).send({
                error: a
            })) : (c.forEach(function(a) {
                a && a._id && (j[a._id] = a);
            }), void f());
        });
    }
    function h() {
        function a() {
            fs.mkdir("./temp/graded-work", function(a) {
                return a ? (error.log(new Error(a)), b.status(500).send({
                    error: a
                })) : void g();
            });
        }
        logger.dash("checkDirectories"), fs.stat("./temp", function(c, d) {
            return "ENOENT" === c ? void fs.mkdir("./temp", function(c) {
                return c ? (error.log(new Error(c)), b.status(500).send({
                    error: c
                })) : void a();
            }) : void fs.stat("./temp/graded-work", function(c, d) {
                return c ? void a() : void fse.remove("./temp/graded-work", function(c) {
                    return c ? (error.log(new Error(c)), b.status(500).send({
                        error: c
                    })) : void a();
                });
            });
        });
    }
    logger.filename(__filename);
    var i, j = {}, k = [], l = [];
    h();
};