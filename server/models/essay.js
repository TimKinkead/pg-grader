'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Dependencies

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

//----------------------------------------------------------------------------------------------------------------------
// Schema

var EssaySchema = new Schema({

    //_id: {type: ObjectId} // automatically created for each document

    // unique id (ex: BPA-001)
    id: {
        type: String,
        required: true,
        unique: true
    },

    // module
    module: {
        type: Schema.ObjectId,
        ref: 'Module'
    },

    /*
    // prompt
    prompt: {
        type: String,
        required: true
    },
    
    // prompt bullets
    promptBullets: [{
        type: String
    }],

    // rubric
    rubric: {
        type: Schema.ObjectId,
        ref: 'Rubric',
        required: true
    },
    */

    // document name (ex: BPA-001.docx)
    filename: {
        type: String,
        required: true,
        unique: true
    },

    // link (ex: https://s3-us-west-2.amazonaws.com/pg-scoresheet/student+work/BPA_MODULE/BPA-001.docx)
    link: {
        type: String,
        required: true,
        unique: true
    },

    /*
    // grade (ex: 9-12)
    grade: {
        type: String
    },

    // subject (ex: HS Science)
    subject: {
        type: String
    },
    */

    // master score (master score)
    masterScore: {
        type: Boolean
    },

    // all graders should grade this essay
    gradeAll: {
        type: Boolean
    },

    // how many graders should grade this essay
    gradeQuota: {
        type: Number,
        default: 1
    },

    // graders (in progress)
    graders: [{
        type: Schema.ObjectId,
        ref: 'User'
    }],
    
    // graded by (saved score sheet)
    gradedBy: [{
        type: Schema.ObjectId,
        ref: 'User'
    }],

    // scoresheets
    scoresheets: [{
        type: Schema.ObjectId,
        ref: 'ScoreSheet'
    }],

    // skip
    skip: [{
        user: {
            type: Schema.ObjectId,
            ref: 'User'
        },
        reason: {
            type: String
        }
    }],
    
    // timestamp - when essay was updated
    modified: {
        type: Date,
        default: Date.now
    },
    
    // timestamp - when essay was created
	created: {
		type: Date,
		default: Date.now
	}
});

//----------------------------------------------------------------------------------------------------------------------
// Virtual Fields

//----------------------------------------------------------------------------------------------------------------------
// Instance Methods

//----------------------------------------------------------------------------------------------------------------------
// Static Methods

//----------------------------------------------------------------------------------------------------------------------
// Pre & Post Methods

//----------------------------------------------------------------------------------------------------------------------
// Initialize Model

mongoose.model('Essay', EssaySchema);
