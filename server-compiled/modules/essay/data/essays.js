"use strict";

module.exports = function() {
    function a(a) {
        for (var b = a.toString(); b.length < 3; ) b = "0" + b;
        return b;
    }
    var b = [], c = [ {
        module: "BPA",
        count: 41,
        prefix: "BPA",
        ext: ".docx"
    }, {
        module: "COLD_WAR_RED_SCARE",
        count: 60,
        prefix: "CW",
        ext: ".docx"
    }, {
        module: "CUBAN_MISSILE_CRISIS",
        count: 11,
        prefix: "CMC",
        ext: ".docx"
    }, {
        module: "FRACKING",
        count: 212,
        prefix: "FRK",
        ext: ".docx",
        extensions: {
            ".pptx": [ 41, 44, 66, 75, 78, 81, 87, 96, 98, 101, 107, 118, 120, 124, 126, 130, 134, 142, 144, 145, 148, 150, 152, 155, 157, 159, 164, 166, 168, 170, 180, 182, 186, 188, 190, 191, 194, 198, 200 ]
        }
    }, {
        module: "NO_GUITAR_BLUES",
        count: 53,
        prefix: "NGB",
        ext: ".docx"
    }, {
        module: "NUCLEAR_POWER",
        count: 186,
        prefix: "NUC",
        ext: ".docx"
    }, {
        module: "PERIOD_IS_PISSED",
        count: 199,
        prefix: "PIP",
        ext: ".docx"
    }, {
        module: "UN",
        count: 128,
        prefix: "UN",
        ext: ".docx"
    }, {
        module: "WATER_IN_COLORADO",
        count: 136,
        prefix: "WAT",
        ext: ".docx"
    } ];
    return c.forEach(function(c) {
        for (var d = 1; d <= c.count; d++) {
            var e = c.ext;
            if (c.extensions) a: for (var f in c.extensions) if (c.extensions.hasOwnProperty(f) && c.extensions[f].length) for (var g = 0; g < c.extensions[f].length; g++) if (d === c.extensions[f][g]) {
                e = f;
                break a;
            }
            b.push({
                id: c.prefix + "-" + a(d),
                module: c.module,
                filename: c.prefix + "-" + a(d) + e
            });
        }
    }), b;
}();