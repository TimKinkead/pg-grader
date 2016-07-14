"use strict";

var mongoose = require("mongoose"), Schema = mongoose.Schema, ModuleSchema = new Schema({
    id: {
        type: String,
        required: !0,
        unique: !0
    },
    name: {
        type: String,
        required: !0
    },
    abbv: {
        type: String,
        required: !0
    },
    grade: {
        type: String
    },
    subject: {
        type: String
    },
    prompt: {
        type: String
    },
    promptExtra: [ {
        type: String
    } ],
    rubric: {
        type: Schema.ObjectId,
        ref: "Rubric",
        required: !0
    },
    modified: {
        type: Date,
        "default": Date.now
    },
    created: {
        type: Date,
        "default": Date.now
    }
});

mongoose.model("Module", ModuleSchema);