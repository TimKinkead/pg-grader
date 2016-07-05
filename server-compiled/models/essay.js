"use strict";

var mongoose = require("mongoose"), Schema = mongoose.Schema, EssaySchema = new Schema({
    id: {
        type: String,
        required: !0,
        unique: !0
    },
    name: {
        type: String,
        required: !0,
        unique: !0
    },
    module: {
        type: String,
        required: !0
    },
    prompt: {
        type: String,
        required: !0
    },
    rubric: {
        type: Schema.ObjectId,
        ref: "Rubric",
        required: !0
    },
    link: {
        type: String,
        required: !0,
        unique: !0
    },
    graders: [ {
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

EssaySchema.pre("validate", function(a) {
    this.name && (this.id = this.name.slice(0, this.name.indexOf(".docx"))), this.module && this.name && (this.link = "https://s3-us-west-2.amazonaws.com/pg-scoresheet/student+work/" + this.module + "/" + this.name), 
    a();
}), mongoose.model("Essay", EssaySchema);