'use strict';

/**
 * Configuration file for the essays collection.
 */

module.exports = (function() {

	var essays = [],
		config = [
		{
			module: 'BPA', 		// module 'id'
			count: 41,			// number of essays
			prefix: 'BPA',		// filename prefix (ex: BPA-001)
			ext: '.docx'		// file type extension (ex BPA-001.docx)
		},
		{
			module: 'COLD_WAR_RED_SCARE',
			count: 60,
			prefix: 'CW',
			ext: '.docx'
		},
		{
			module: 'CUBAN_MISSILE_CRISIS',
			count: 11,
			prefix: 'CMC',
			ext: '.docx'
		},
		{
			module: 'FRACKING',
			count: 212,
			prefix: 'FRK',
			ext: '.docx',
			extensions: {
				'.pptx': [
					41, 44, 66, 75, 78, 81, 87, 96, 98, 101, 107, 118, 120, 124, 126, 130, 134, 142, 144, 145, 148, 150, 152, 155, 157, 159, 164, 166, 168, 170,
					180, 182, 186, 188, 190, 191, 194, 198, 200
				]
			}
		},
		{
			module: 'NO_GUITAR_BLUES',
			count: 53,
			prefix: 'NGB',
			ext: '.docx'
		},
		{
			module: 'NUCLEAR_POWER',
			count: 186,
			prefix: 'NUC',
			ext: '.docx'
		},
		{
			module: 'PERIOD_IS_PISSED',
			count: 199,
			prefix: 'PIP',
			ext: '.docx'
		},
		{
			module: 'UN',
			count: 128,
			prefix: 'UN',
			ext: '.docx'
		},
		{
			module: 'WATER_IN_COLORADO',
			count: 136,
			prefix: 'WAT',
			ext: '.docx'
		}
	];

	/*
	var modules = [
			{
				id: 'BPA',
				name: 'Plastics and You (BPA)',
				abbv: 'BPA',
				ext: '.docx',
				count: 41,
				grade: '9-12',
				subject: 'HS Science',
				rubric: 'Argumentation, Grades 9-12 (BPA)',
				prompt: 'After reading informational texts and scientific research on the breakdown of chemical bonds and the use of BPAs in food and drink containers, ' +
					'write a scientific article for a health magazine in which you discuss the chemical composition, bonding, and breakdown of polycarbonate plastics ' +
					'and evaluate the extent to which the US should regulate the use of BPA in plastics, based on available research. ' +
					'Support your position with evidence from the text/s.',
				promptBullets: [
					'Be sure to acknowledge competing views.'
				]
			},
			{
				id: 'COLD_WAR_RED_SCARE',
				name: 'Cold War (Red Scare)',
				abbv: 'CW',
				ext: '.docx',
				count: 60,
				grade: '9-12',
				subject: 'HS SS',
				rubric: 'Argumentation, Grades 9-12 (Red Scare)',
				prompt: 'What were the most important causes of the Red Scare after WWII? ' +
					'After reading the primary sources write an essay in which you address the question and argue the role of Senator Joseph McCarthy in this event. ' +
					'Support your discussion with evidence from the text(s).',
				promptBullets: [
					'Be sure to acknowledge competing views.'
				]
			},
			{
				id: 'CUBAN_MISSILE_CRISIS',
				name: 'Cuban Missile Crisis',
				abbv: 'CMC',
				ext: '.docx',
				count: 11,
				grade: '9-12',
				subject: 'HS SS',
				rubric: 'Argumentation, Grades 9-12 (Cuban Missile Crisis)',
				prompt: 'After reading primary and secondary sources on the Bay of Pigs invasion and the Cuban Missile Crisis, write an article for a historical journal ' +
					'in which you argue whether the United States or the Soviet Union was more responsible for escalating the Cold War during these confrontations. ' +
					'Support your position with evidence from the text/s.',
				promptBullets: [
					'Be sure to acknowledge competing views.'
				]
			},
			{
				id: 'FRACKING',
				name: 'Fracking',
				abbv: 'FRK',
				ext: '.docx',
				extensions: {
					'.pptx': [
						41, 44, 66, 75, 78, 81, 87, 96, 98, 101, 107, 118, 120, 124, 126, 130, 134, 142, 144, 145, 148, 150, 152, 155, 157, 159, 164, 166, 168, 170,
						180, 182, 186, 188, 190, 191, 194, 198, 200
					]
				},
				count: 212,
				grade: '6-8',
				subject: 'MS Science',
				rubric: 'Argumentation, Grades 6-8 (Fracking)',
				prompt: 'After reading informational text/s and viewing videos on hydraulic fracturing, write an essay in which you discuss the positive and negative impacts ' +
					'that humans have on their environment when using this method of extracting natural gas and evaluate whether Colorado should continue using this method. ' +
					'Support your position with evidence from the text/s.'
			},
			{
				id: 'NO_GUITAR_BLUES',
				name: 'Growing Up is Hard to Do',
				abbv: 'NGB',
				ext: '.docx',
				count: 53,
				grade: '6-8',
				subject: 'MS ELA',
				rubric: 'Informational/Explanatory, Grades 6-8 (Growing Up is Hard to Do)',
				prompt: 'How does author Gary Soto\'s work develop the theme of growing up? After reading a selected short story by Gary Soto, ' +
					'write an essay that addresses the question and analyzes how the author uses story elements to reveal the theme, ' +
					'providing examples to clarify your analysis.'
			},
			{
				id: 'NUCLEAR_POWER',
				name: 'Nuclear Power',
				abbv: 'NUC',
				ext: '.docx',
				count: 186,
				grade: '9-12',
				subject: 'HS Science',
				rubric: 'Argumentation, Grades 9-12 (Nuclear Power)',
				prompt: 'What are the positive and negative scientific and societal impacts of nuclear power? ' +
					'After reading informational text/s and viewing videos on nuclear power, ' +
					'write an essay in which you discuss the advantages and disadvantages of nuclear power and evaluate whether or not the United States ' +
					'should continue to pursue nuclear power as a domestic energy source. ' +
					'Support your position with evidence from the text/s.',
				promptBullets: [
					'Be sure to acknowledge competing views.'
				]
			},
			{
				id: 'PERIOD_IS_PISSED',
				name: 'Period is Pissed',
				abbv: 'PIP',
				ext: '.docx',
				count: 199,
				grade: '9-12',
				subject: 'HS ELA',
				rubric: 'Argumentation, Grades 9-12 (Period is Pissed)',
				prompt: 'Has Social Media helped or hurt our communication? After reading various articles, reports, and info-graphics, write an Opinion-Editorial ' +
					'in which you address the question and argue whether social media is beneficial or detrimental to our language and communication. ' +
					'Support your position with evidence from the text(s).',
				promptBullets: [
					'Be sure to acknowledge and refute competing views.'
				]
			},
			{
				id: 'UN',
				name: 'UN Children\'s Rights',
				abbv: 'UN',
				ext: '.docx',
				count: 128,
				grade: '6-8',
				subject: 'MS SS',
				rubric: 'Argumentation, Grades 6-8 (UN Children\'s Rights)',
				prompt: 'After reading excerpts from the United Nations’ Education-for-All goals and examining the global community’s progress ' +
					'with the United Nations education initiatives, write a report to the UN General Assembly in which you argue how successful or unsuccessful ' +
					'the international community has been at advancing the educational rights of children. ' +
					'Support your position with evidence from the text/s.',
				promptBullets: [
					'Be sure to acknowledge competing views.',
					'What conclusions can you draw about the root cause(s) of children being denied access to education?'
				]
			},
			{
				name: 'WATER_IN_COLORADO',
				abbv: 'WAT',
				count: 136,
				ext: '.docx',
				grade: '6-8',
				subject: 'MS Science',
				rubric: 'Argumentation, Grades 6-8 (Water in Colorado)',
				prompt: 'After reading informational texts and scientific research, and viewing videos on water as a resource, ' +
					'write a letter to your local state representative in which you identify a problem concerning the availability of water in Colorado and propose a solution. ' +
					'Support your position with evidence from the text/s.'
			}
		];
	*/
	
	function numberTo3DigitString(no) {
		var str = no.toString();
		while (str.length < 3) {
			str = '0'+str;
		}
		return str;
	}

	config.forEach(function(cfg) {
		for (var i=1; i<=cfg.count; i++) {
			var ext = cfg.ext;
			if (cfg.extensions) {
				loop: {
					for (var key in cfg.extensions) {
						if (cfg.extensions.hasOwnProperty(key) && cfg.extensions[key].length) {
							for (var j=0; j<cfg.extensions[key].length; j++) {
								if (i === cfg.extensions[key][j]) {
									ext = key;
									break loop;
								}
							}
						}
					}
				}
			}
			essays.push({
				id: cfg.prefix+'-'+numberTo3DigitString(i),
				module: cfg.module,
				filename: cfg.prefix+'-'+numberTo3DigitString(i)+ext
			});
		}
	});

	return essays;
})();