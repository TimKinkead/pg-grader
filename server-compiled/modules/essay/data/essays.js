"use strict";

module.exports = function() {
    function a(a) {
        for (var b = a.toString(); b.length < 3; ) b = "0" + b;
        return b;
    }
    var b = [], c = [ {
        module: "BPA_PLASTIC",
        count: 41,
        prefix: "BPA",
        fileType: "docx",
        masterScores: [],
        gradeAll: [ 5, 10, 15, 20 ]
    }, {
        module: "COLD_WAR_RED_SCARE",
        count: 60,
        prefix: "CW",
        fileType: "docx",
        masterScores: [],
        gradeAll: []
    }, {
        module: "CUBAN_MISSILE_CRISIS",
        count: 13,
        prefix: "CMC",
        fileType: "docx",
        masterScores: [ 1, 4, 12, 13 ],
        gradeAll: []
    }, {
        module: "FRACKING",
        count: 212,
        prefix: "FRK",
        fileType: "docx",
        fileTypes: {
            pptx: [ 41, 44, 66, 75, 78, 81, 87, 96, 98, 101, 107, 118, 120, 124, 126, 130, 134, 142, 144, 145, 148, 150, 152, 155, 157, 159, 164, 166, 168, 170, 180, 182, 186, 188, 190, 191, 194, 198, 200 ]
        },
        masterScores: [],
        gradeAll: [ 21, 29, 37, 45, 53, 61, 69, 77, 85, 93, 101, 109, 117, 125, 133, 141, 149, 157, 165, 173, 181, 189, 197, 205 ]
    }, {
        module: "NO_GUITAR_BLUES",
        count: 108,
        prefix: "NGB",
        fileType: "docx",
        masterScores: [ 12, 57, 19 ],
        gradeAll: []
    }, {
        module: "NUCLEAR_POWER",
        count: 187,
        prefix: "NUC",
        fileType: "docx",
        masterScores: [ 25, 39, 44, 88 ],
        gradeAll: [ 124, 128, 132, 136, 140, 144, 148, 152, 156, 160, 164, 168, 172, 176, 180, 184 ]
    }, {
        module: "PERIOD_IS_PISSED",
        count: 199,
        prefix: "PIP",
        fileType: "docx",
        masterScores: [ 1, 33, 96, 129 ],
        gradeAll: [ 168, 170, 172, 174, 176, 178, 180, 182, 184, 186, 188, 190, 192, 194, 196, 198 ]
    }, {
        module: "UN_EDUCATION",
        start: 8,
        count: 128,
        prefix: "UN",
        fileType: "docx",
        masterScores: [ 8, 41, 83, 100 ],
        gradeAll: [ 13, 18, 23, 28, 33, 38, 43, 48, 53 ]
    }, {
        module: "WATER_IN_COLORADO",
        count: 137,
        prefix: "WAT",
        fileType: "docx",
        masterScores: [ 21, 42, 72, 137 ],
        gradeAll: [ 7, 14, 22, 28, 35, 43, 49, 56, 63, 70 ]
    } ];
    return c.forEach(function(c) {
        for (var d = c.start ? c.start : 1; d <= c.count; d++) {
            var e = a(d), f = c.fileType, g = !!(c.masterScores && c.masterScores.length && c.masterScores.indexOf(d) > -1) || null, h = !!(g || c.gradeAll && c.gradeAll.length && c.gradeAll.indexOf(d) > -1) || null;
            if (c.fileTypes) a: for (var i in c.fileTypes) if (c.fileTypes.hasOwnProperty(i) && c.fileTypes[i].length) for (var j = 0; j < c.fileTypes[i].length; j++) if (d === c.fileTypes[i][j]) {
                f = i;
                break a;
            }
            b.push({
                id: c.prefix + "-" + e,
                module: c.module,
                filename: c.prefix + "-" + e + "." + f,
                masterScore: g,
                gradeAll: h
            });
        }
    }), b;
}();