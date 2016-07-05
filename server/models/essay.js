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

    // document name (ex: BPA-001.docx)
    name: {
        type: String,
        required: true,
        unique: true
    },

    // module name (ex: BPA_MODULE)
    module: {
        type: String,
        required: true
    },

    // prompt
    prompt: {
        type: String,
        required: true
    },

    // rubric
    rubric: {
        type: Schema.ObjectId,
        ref: 'Rubric',
        required: true
    },

    // link (ex: https://s3-us-west-2.amazonaws.com/pg-scoresheet/student+work/BPA_MODULE/BPA-001.docx)
    link: {
        type: String,
        required: true,
        unique: true
    },

    // graders
    graders: [{
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

EssaySchema.pre('validate', function(next) {
    if (this.name) {
        this.id = this.name.slice(0, this.name.indexOf('.docx'));
    }
    if (this.module && this.name) {
        this.link = 'https://s3-us-west-2.amazonaws.com/pg-scoresheet/student+work/'+this.module+'/'+this.name;
    }
    next();
});

//----------------------------------------------------------------------------------------------------------------------
// Initialize Model

mongoose.model('Essay', EssaySchema);
