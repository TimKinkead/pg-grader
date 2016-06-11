'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Dependencies

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

//----------------------------------------------------------------------------------------------------------------------
// Schema

var ScoreSheetSchema = new Schema({

    //_id: {type: ObjectId} // automatically created for each document

    // unique scoreSheet name
    user: {
        type: Schema.ObjectId,
        ref: 'User',
        required: true
    },

    // student work id
    studentWorkId: {
        type: String,
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
