"use strict";

//----------------------------------------------------------------------------------------------------------------------
// Dependencies

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

//----------------------------------------------------------------------------------------------------------------------
// Schema

var GroupSchema = new Schema({

    //_id: {type: ObjectId} // automatically created for each document

	// unique id
	id: {
		type: String,
		required: true,
		unique: true
	},
	
    // group name
    name: {
        type: String,
        required: true
    },
    
    // subject
    subject: {
        type: String
    },
    
    // facilitator
    facilitator: {
        type: String
    },
    
    // modules
    modules: [{
        type: Schema.ObjectId,
		ref: 'Module'
    }],

    // timestamps
    modified: {
        type: Date,
        "default": Date.now
    },
    created: {
        type: Date,
        "default": Date.now
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

mongoose.model('Group', GroupSchema);
