'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Models

var mongoose = require('mongoose'),
	ScoreSheet = mongoose.model('ScoreSheet'),
	Rubric = mongoose.model('Rubric');

//----------------------------------------------------------------------------------------------------------------------
// Controllers

var error = require('../../error'),
	logger = require('../../logger');

//----------------------------------------------------------------------------------------------------------------------
// Methods

function csvEscape(str) {
	return '"' + String(str || '').replace(/\"/g, '""') + '"';
}

function twoCharNo(no) {
	var str = no.toString();
	while (str.length < 2) {
		str = '0'+str;
	}
	return str;
}

//----------------------------------------------------------------------------------------------------------------------
// Main

/**
 * SCORESHEET.DOWNLOAD
 * - Download scoresheet data as csv/tsv file.
 */
exports.download = function(req, res) {
	logger.filename(__filename);

	// variables
	var query,
		headers = ['grader', 'essay', 'link', 'rubric'],
		scoreFields = [],
		streamStarted = false,
		delimiter,
		newline,
		filename,
		extension,
		contentType,
		today = new Date();

	// start stream
	function startStream() {
		filename = 'Graded-Work_'+ 
			today.getFullYear()+'-'+twoCharNo((today.getMonth()+1))+'-'+twoCharNo(today.getDate())+'_'+
			twoCharNo(today.getHours())+twoCharNo(today.getMinutes())+twoCharNo(today.getSeconds());
		res.setHeader('Content-disposition', 'attachment; filename=\"'+filename+extension+'\"');
		res.contentType(contentType);
		streamStarted = true;
	}
	
	// convert scoresheet to csv/tsv
	function convertScoresheet(scoresheet) {
		var data = [],
			user = scoresheet.user || {},
			essay = scoresheet.essay || {},
			rubric = scoresheet.rubric || {},
			score = scoresheet.score || {};
		// headers
		data.push(user.name || ''); 	// grader
		data.push(essay.id || ''); 		// essay
		data.push(essay.link || '');	// link
		data.push(rubric.name || '');	// rubric
		// score fields
		scoreFields.forEach(function(field) {
			data.push(score[field] || '');
		});
		// done
		return data;
	}

	// check delimiter
	switch (req.query.delimiter) {
		case 'tab':
			delimiter = '\t';
			newline = '\n';
			extension = '.tsv';
			contentType = 'text/tab-separated-values';
			break;
		default: 
			delimiter = ',';
			newline = '\n';
			extension = '.csv';
			contentType = 'text/csv';
	}
	
	// build query
	query = {};

	// get headers
	Rubric.find()
		.select('fields')
		.exec(function(err, rubricDocs) {
			if (err) {
				error.log(new Error(err));
				return res.status(500).send({message: 'Graded Work Download Error!', error: err});
			}

			// grab score fields
			rubricDocs.forEach(function(rubric) {
				rubric.fields.forEach(function(field) {
					if (field.name && scoreFields.indexOf(field.name) < 0) {
						scoreFields.push(field.name);
					}
				});
			});

			// stream score sheets
			ScoreSheet.find(query)
				.sort({essay: 1})
				.select('_id user essay rubric score')
				.populate('user', '_id id name')
				.populate('essay', '_id id link')
				.populate('rubric', '_id name')
				.stream()
				.on('data', function(scoresheetDoc) {
					if (!streamStarted) {
						startStream();
						res.write(headers.concat(scoreFields).map(csvEscape).join(delimiter) + newline);
					}
					res.write(convertScoresheet(scoresheetDoc).map(csvEscape).join(delimiter) + newline);
				})
				.on('close', function() {
					res.end();
				})
				.on('error', function(err) {
					error.log(new Error(err));
					return res.status(500).send({
						message: 'Graded Work Download Error!',
						error: err
					});
				});
		});

};