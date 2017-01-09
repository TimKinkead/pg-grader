'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Dependencies

var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

//----------------------------------------------------------------------------------------------------------------------
// Schema

var ModuleSchema = new Schema({

    //_id: {type: ObjectId} // automatically created for each document

	googleDriveFolderId: {
		type: String
	},
	
	// unique id
	id: {
		type: String,
		required: true,
		unique: true
	},
	
	// name
	name: {
		type: String,
		required: true
	},
	
	// abbreviation
	abbv: {
		type: String,
		required: true
	},
	
	// grade range
	grade: {
		type: String
	},
	
	// subject
	subject: {
		type: String
	},
	
	// link (ldc core tools)
	link: {
		type: String
	},
	
	prompt: {
		type: String
	},
	
	promptExtra: [{
		type: String
	}],
	
	// rubric
	rubric: {
		type: Schema.ObjectId,
		ref: 'Rubric',
		required: true
	},

    // timestamp - when module was updated
    modified: {
        type: Date,
        default: Date.now
    },
    
    // timestamp - when module was created
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

mongoose.model('Module', ModuleSchema);
