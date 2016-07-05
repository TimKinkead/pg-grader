"use strict";

module.exports = function() {
    function a(a) {
        for (var b = a.toString(); b.length < 3; ) b = "0" + b;
        return b;
    }
    var b = [], c = [ {
        name: "BPA_MODULE",
        abbv: "BPA",
        ext: ".docx",
        count: 41,
        prompt: "This is the prompt for the BPA module.",
        rubric: "Argumentation, Grades 6-8"
    }, {
        name: "FRACKING_MODULE",
        abbv: "FRK",
        ext: ".docx",
        count: 212,
        prompt: "This is the prompt for the fracking module.",
        rubric: "Argumentation, Grades 9-12"
    }, {
        name: "NATIVE_AM MODULE",
        abbv: "NAT",
        ext: ".docx",
        count: 88,
        prompt: "This is the prompt for the native american module.",
        rubric: "Informational/Explanatory, Grades 6-8"
    }, {
        name: "NUCLEAR_MODULE",
        abbv: "NUC",
        ext: ".docx",
        count: 187,
        prompt: "This is the prompt for the nuclear module.",
        rubric: "Informational/Explanatory, Grades 9-12"
    }, {
        name: "WATER_MODULE",
        abbv: "WAT",
        count: 136,
        ext: ".docx",
        prompt: "This is the prompt for the water module.",
        rubric: "Argumentation, Grades 6-8"
    } ];
    return c.forEach(function(c) {
        for (var d = 1; d <= c.count; d++) b.push({
            name: c.abbv + "-" + a(d) + c.ext,
            module: c.name,
            prompt: c.prompt,
            rubric: c.rubric
        });
    }), b;
}();