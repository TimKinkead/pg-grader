"use strict";

var mongoose = require("mongoose"), Schema = mongoose.Schema, EssaySchema = new Schema({
    id: {
        type: String,
        required: !0,
        unique: !0
    },
    googleDriveId: {
        type: String,
        required: !0,
        unique: !0
    },
    module: {
        type: Schema.ObjectId,
        ref: "Module"
    },
    filename: {
        type: String,
        required: !0,
        unique: !0
    },
    link: {
        type: String,
        unique: !0
    },
    masterScore: {
        type: Boolean
    },
    gradeAll: {
        type: Boolean
    },
    gradeQuota: {
        type: Number,
        "default": 1
    },
    graders: [ {
        type: Schema.ObjectId,
        ref: "User"
    } ],
    gradedBy: [ {
        type: Schema.ObjectId,
        ref: "User"
    } ],
    scoresheets: [ {
        type: Schema.ObjectId,
        ref: "ScoreSheet"
    } ],
    skip: [ {
        user: {
            type: Schema.ObjectId,
            ref: "User"
        },
        reason: {
            type: String
        }
    } ],
    modified: {
        type: Date,
        "default": Date.now
    },
    created: {
        type: Date,
        "default": Date.now
    }
});

mongoose.model("Essay", EssaySchema);