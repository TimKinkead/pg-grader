'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Dependencies

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

//----------------------------------------------------------------------------------------------------------------------
// Schema

var RubricSchema = new Schema({

    //_id: {type: ObjectId} // automatically created for each document

    // unique id
    id: {
        type: String,
        required: true,
        unique: true
    },
    
    // unique rubric name
    name: {
        type: String,
        required: true,
        unique: true
    },

    // link
    link: {
        type: String
    },

    // table headers
    headers: [{
        type: String
    }],

    fields: [{
        _id: false,
        name: {type: String},
        note: {type: String},
        optional: {type: Boolean},
        details: [{
            _id: false,
            score: {type: Number},
            text: {type: String}
        }]
    }],

    // timestamp - when rubric was updated
    modified: {
        type: Date,
        default: Date.now
    },
    
    // timestamp - when rubric was created
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

mongoose.model('Rubric', RubricSchema);
