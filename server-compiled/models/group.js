"use strict";

var mongoose = require("mongoose"), Schema = mongoose.Schema, GroupSchema = new Schema({
    id: {
        type: String,
        required: !0,
        unique: !0
    },
    name: {
        type: String,
        required: !0
    },
    subject: {
        type: String
    },
    facilitator: {
        type: String
    },
    modules: [ {
        type: Schema.ObjectId,
        ref: "Module"
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

mongoose.model("Group", GroupSchema);