"use strict";

var mongoose = require("mongoose"), Schema = mongoose.Schema, ScoreSheetSchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: "User",
        required: !0
    },
    essay: {
        type: Schema.ObjectId,
        ref: "Essay",
        required: !0
    },
    rubric: {
        type: Schema.ObjectId,
        ref: "Rubric",
        required: !0
    },
    score: {
        type: Object,
        required: !0
    },
    masterScore: {
        type: Boolean
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

mongoose.model("ScoreSheet", ScoreSheetSchema);