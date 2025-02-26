'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Dependencies

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

//----------------------------------------------------------------------------------------------------------------------
// Schema

var ScoreSheetSchema = new Schema({

    //_id: {type: ObjectId} // automatically created for each document

    // user/grader
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },

    // essay
    essay: {
        type: Schema.ObjectId,
        ref: 'Essay',
        required: true
    },

    // rubric
    rubric: {
        type: Schema.ObjectId,
        ref: 'Rubric',
        required: true
    },
    
    // score
    score: {
        type: Object,
        required: true
    },
    
    // master score
    masterScore: {
        type: Boolean
    },

    // timestamp - when scoreSheet was updated
    modified: {
        type: Date,
        default: Date.now
    },
    
    // timestamp - when scoreSheet was created
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

mongoose.model('ScoreSheet', ScoreSheetSchema);
