'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Mongoose Models

var mongoose = require('mongoose'),
    ScoreSheet = mongoose.model('ScoreSheet'),
    Essay = mongoose.model('Essay');

//----------------------------------------------------------------------------------------------------------------------
// Controllers

var error = require('../../error'),
    logger = require('../../logger');

//----------------------------------------------------------------------------------------------------------------------
// Methods

//----------------------------------------------------------------------------------------------------------------------
// Main

/**
 * SCORESHEET.LIST.CONSENSUS
 * - List a user's consensus scores. (or all consensus scores if admin)
 */
exports.listConsensus = function(req, res) {
    logger.filename(__filename);

    if (!req.user) { return res.sendStatus(403); }
    
    // get essays
    var query = {'scoresheets.1': {$exists: true}};
    if (!req.user.admin) { query.graders = req.user._id; }
    Essay.find(query)
        .select('_id')
        .exec(function(err, essayDocs) {
            if (err) {
                error.log(new Error(err));
                return res.status(500).send({error: err});
            }
            if (!essayDocs || !essayDocs.length) {
                return res.status(200).send([]);
            }
            
            // grab essay ids
            var essayIds = [];
            essayDocs.forEach(function(essay) {
                if (essay._id) { essayIds.push(essay._id); } 
            });
            if (!essayIds.length) {
                return res.status(200).send([]);
            }
            
            // get score sheets
            ScoreSheet.find({essay: {$in: essayIds}})
                .sort({essay: 1})
                .populate('user', '_id id name')
                .populate('essay', 'id link')
                .populate('rubric', 'name')
                .exec(function(err, scoresheetDocs) {
                    if (err) {
                        error.log(new Error(err));
                        return res.status(500).send({error: err});
                    }

                    // done
                    return res.status(200).send(scoresheetDocs || []);
                });
            
            
        });
};