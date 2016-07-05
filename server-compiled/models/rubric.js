"use strict";

var mongoose = require("mongoose"), Schema = mongoose.Schema, RubricSchema = new Schema({
    name: {
        type: String,
        required: !0,
        unique: !0
    },
    headers: [ {
        type: String
    } ],
    fields: [ {
        _id: !1,
        name: {
            type: String
        },
        optional: {
            type: Boolean
        },
        details: [ {
            _id: !1,
            score: {
                type: Number
            },
            text: {
                type: String
            }
        } ]
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

mongoose.model("Rubric", RubricSchema);