'use strict';

/**
 * Configuration file for the essays collection.
 */
module.exports = (function() {

	var essays = [],
		modules = [
		{
			name: 'BPA_MODULE',
			abbv: 'BPA',
			ext: '.docx',
			count: 41,
			prompt: 'This is the prompt for the BPA module.',
			rubric: 'Argumentation, Grades 6-8'
		},
		{
			name: 'FRACKING_MODULE',
			abbv: 'FRK',
			ext: '.docx',
			count: 212,
			prompt: 'This is the prompt for the fracking module.',
			rubric: 'Argumentation, Grades 9-12'
		},
		{
			name: 'NATIVE_AM MODULE',
			abbv: 'NAT',
			ext: '.docx',
			count: 88,
			prompt: 'This is the prompt for the native american module.',
			rubric: 'Informational/Explanatory, Grades 6-8'
		},
		{
			name: 'NUCLEAR_MODULE',
			abbv: 'NUC',
			ext: '.docx',
			count: 187,
			prompt: 'This is the prompt for the nuclear module.',
			rubric: 'Informational/Explanatory, Grades 9-12'
			
		},
		{
			name: 'WATER_MODULE',
			abbv: 'WAT',
			count: 136,
			ext: '.docx',
			prompt: 'This is the prompt for the water module.',
			rubric: 'Argumentation, Grades 6-8'
		}
	];
	
	function numberTo3DigitString(no) {
		var str = no.toString();
		while (str.length < 3) {
			str = '0'+str;
		}
		return str;
	}

	modules.forEach(function(module) {
		for (var i=1; i<=module.count; i++) {
			essays.push({
				name: module.abbv+'-'+numberTo3DigitString(i)+module.ext,
				module: module.name,
				prompt: module.prompt,
				rubric: module.rubric
			});
		}
	});

	return essays;
})();