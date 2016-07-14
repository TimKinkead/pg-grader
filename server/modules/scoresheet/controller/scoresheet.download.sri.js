'use strict';

//----------------------------------------------------------------------------------------------------------------------
// Dependencies

var fs = require('fs'),
	fse = require('fs-extra'),
	archiver = require('archiver');

//----------------------------------------------------------------------------------------------------------------------
// Models

var mongoose = require('mongoose'),
	ScoreSheet = mongoose.model('ScoreSheet'),
	Essay = mongoose.model('Essay'),
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

function writeTexts(module, essayIds, clbk) {
	var filename = module+'.texts.tsv',
		headers = ['DocId', 'Link'],
		streamStarted = false,
		writeStream = fs.createWriteStream('temp/graded-work/'+filename);

	writeStream.on('finish', function() {
		return clbk(filename);
	});

	// stream score sheets
	ScoreSheet.find({essay: {$in: essayIds}})
		.select('_id essay')
		.populate('essay', '_id id link')
		.sort({'essay.id': 1})
		.stream()
		.on('data', function(scoresheetDoc) {
			if (!streamStarted) {
				writeStream.write(headers.map(csvEscape).join('\t')+'\n');
				streamStarted = true;
			}
			var essay = scoresheetDoc.essay || {},
				data = [essay.id, essay.link];
			writeStream.write(data.map(csvEscape).join('\t')+'\n');
		})
		.on('close', function() {
			writeStream.end();
		})
		.on('error', function(err) {
			error.log(new Error(err));
		});
}

function writeScores(module, essayIds, scoreFields, clbk) {
	var filename = module+'.scores.tsv',
		headers = ['DocId'].concat(scoreFields),
		streamStarted = false,
		writeStream = fs.createWriteStream('temp/graded-work/'+filename);

	writeStream.on('finish', function() {
		return clbk(filename);
	});

	// stream score sheets
	ScoreSheet.find({essay: {$in: essayIds}})
		.select('_id essay score')
		.populate('essay', '_id id link')
		.sort({'essay.id': 1})
		.stream()
		.on('data', function(scoresheetDoc) {
			if (!streamStarted) {
				writeStream.write(headers.map(csvEscape).join('\t')+'\n');
				streamStarted = true;
			}
			var essay = scoresheetDoc.essay || {},
				score = scoresheetDoc.score || {},
				data = [essay.id];
			scoreFields.forEach(function(field) {
				data.push(score[field] || '');
			});
			writeStream.write(data.map(csvEscape).join('\t')+'\n');
		})
		.on('close', function() {
			writeStream.end();
		})
		.on('error', function(err) {
			error.log(new Error(err));
		});
}

function writeSpecs(module, clbk) {
	var filename = module+'.scores.specs.tsv',
		writeStream = fs.createWriteStream('temp/graded-work/'+filename),
		data = [
			['ScoreProperty', 'Score'],
			['MinScore', '1'],
			['MaxScore', '4'],
			['ScoreInterval', '0.5']
		];

	writeStream.on('finish', function() {
		return clbk(filename);
	});

	data.forEach(function(item) {
		writeStream.write(item.map(csvEscape).join('\t')+'\n');
	});

	writeStream.end();
}

//----------------------------------------------------------------------------------------------------------------------
// Main

/**
 * SCORESHEET.DOWNLOAD.SRI
 * - Download scoresheet data in SRI format.
 */
exports.downloadSRI = function(req, res) {
	logger.filename(__filename);
	
	// variables
	var cnt,
		scoreFields = [],
		files = [];

	function zipAndReturn() {
		logger.dash('zipAndReturn');

		res.setHeader('Content-disposition', 'attachment; filename=\"graded-work.zip\"');
		res.contentType('application/zip');

		var zip = archiver('zip');

		zip.pipe(res);

		files.forEach(function(filename) {
			zip.file('./temp/graded-work/'+filename, {name: filename.toLowerCase()});
		});

		zip.finalize();
	}

	function checkDone() {
		cnt -= 1;
		if (cnt === 0) {
			zipAndReturn();
		}
	}

	function writeFiles() {
		logger.dash('writeFiles');

		// group essays by module
		Essay.aggregate(
			[
				{$group: {_id: '$module', essayIds: {$push: '$_id'}}}
			],
			function(err, results) {
				if (err) {
					error.log(new Error(err));
					return res.status(500).send({error: err});
				}
				if (!results) {
					error.log(new Error('!results'));
					return res.status(500).send({error: '!results'});
				}
				if (!results.length) {
					error.log(new Error('!results.length'));
					return res.status(500).send({error: '!results.length'});
				}

				// create 3 files for each module
				cnt = results.length * 3;
				results.forEach(function(result) {
					if (result && result._id && result.essayIds && result.essayIds.length) {

						// create <module>.texts.tsv
						writeTexts(result._id, result.essayIds, function(filename) {
							files.push(filename);
							checkDone();
						});

						// create <module>.scores.tsv
						writeScores(result._id, result.essayIds, scoreFields, function(filename) {
							files.push(filename);
							checkDone();
						});

						// create <module>.scores.specs.tsv
						writeSpecs(result._id, function(filename) {
							files.push(filename);
							checkDone();
						});
					}
				});
			}
		);
	}

	function getScoreFields() {
		logger.dash('getScoreFields');

		Rubric.find()
			.select('fields')
			.exec(function(err, rubricDocs) {
				if (err) {
					error.log(new Error(err));
					return res.status(500).send({error: err});
				}

				// grab score fields
				rubricDocs.forEach(function (rubric) {
					rubric.fields.forEach(function (field) {
						if (field.name && scoreFields.indexOf(field.name) < 0) {
							scoreFields.push(field.name);
						}
					});
				});

				writeFiles();
			});
	}

	function checkDirectories() {
		logger.dash('checkDirectories');

		function createGradedWorkDir() {
			fs.mkdir('./temp/graded-work', function(err) {
				if (err) {
					error.log(new Error(err));
					return res.status(500).send({error: err});
				}
				getScoreFields();
			});
		}

		// check for 'temp' directory
		fs.stat('./temp', function(err, stat) {

			// no 'temp' directory
			if (err === 'ENOENT') {
				fs.mkdir('./temp', function(err) {
					if (err) {
						error.log(new Error(err));
						return res.status(500).send({error: err});
					}
					createGradedWorkDir();
				});
				return;
			}

			// check for '/temp/graded-work' directory
			fs.stat('./temp/graded-work', function(err, stat) {

				// 'graded-work' directory exists
				if (!err) {
					fse.remove('./temp/graded-work', function(err) {
						if (err) {
							error.log(new Error(err));
							return res.status(500).send({error: err});
						}
						createGradedWorkDir();
					});
					return;
				}

				// create 'graded-work' directory
				createGradedWorkDir();
			});
		});
	}

	// start
	checkDirectories();
};