'use strict';

/**
 * Configuration file for the rubrics collection.
 */
module.exports = [

	// -----------------------------------------------------------------------------------------------------------------
	// BPA
	{
		id: 'LDC_Arg_9-12_BPA',
		name: 'Argumentation, Grades 9-12 (BPA)',
		link: 'https://s3-us-west-2.amazonaws.com/pg-scoresheet/rubrics/LDC_Arg_9-12_BPA.docx',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Controlling Idea',
				details: [
					{score: 1, text: 'Addresses prompt.\nMakes a general claim with an unclear focus.'},
					{score: 1.5},
					{score: 2, text: 'Addresses prompt.\nEstablishes a clear claim with an uneven focus.'},
					{score: 2.5},
					{score: 3, text: 'Addresses prompt.\nEstablishes and maintains a clear, specific, and credible claim.'},
					{score: 3.5},
					{score: 4, text: 'Addresses prompt.\nEstablishes and maintains a precise, substantive claim. Acknowledges limitations and/or the complexity of the issue or topic.'}
				]
			},
			{
				name: 'Selection & Citation of Evidence',
				details: [
					{score: 1, text: 'Includes minimal details from sources.\nSources are used without citation.'},
					{score: 1.5},
					{score: 2, text: 'Includes details, examples, and/or quotations from sources that are relevant to the claim.\nInconsistently cites sources.'},
					{score: 2.5},
					{score: 3, text: 'Includes details, examples, and/or quotations from sources that support the claim and supporting ideas.\nConsistently cites sources with minor formatting errors.'},
					{score: 3.5},
					{score: 4, text: 'Includes well-chosen details, examples, and/or quotations from sources that fully support the claim and supporting ideas.\nConsistently cites sources using appropriate format.'}
				]
			},
			{
				name: 'Development / Explanation of Sources',
				details: [
					{score: 1, text: 'Explanation of source material is irrelevant, incomplete, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Explains source material to support the argument, with some incomplete reasoning or explanations.'},
					{score: 2.5},
					{score: 3, text: 'Accurately explains source material and how it supports the argument.'},
					{score: 3.5},
					{score: 4, text: 'Thoroughly and accurately explains source material, using logical reasoning to support and develop the argument.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Lacks an evident structure. Makes unclear connections among claims, reasons, and/or evidence.'},
					{score: 1.5},
					{score: 2, text: 'Groups ideas and uses transitions to develop the argument, with minor lapses in coherence or organization.'},
					{score: 2.5},
					{score: 3, text: 'Groups and sequences ideas to develop a cohesive argument. Uses transitions to clarify the relationships among claim(s), reasons, and evidence.'},
					{score: 3.5},
					{score: 4, text: 'Groups and sequences ideas in a logical progression in which ideas build to create a unified whole. Uses varied transitions to clarify the precise relationships among claim(s), reasons, and evidence.'}
				]
			},
			{
				name: 'Conventions',
				details: [
					{score: 1, text: 'Major errors in standard English conventions interfere with the clarity of the writing.\nLanguage or tone is inappropriate.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions sometimes interfere with the clarity of the writing.\nUses language and tone that are sometimes inappropriate for the audience and purpose.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions; minor errors, while noticeable, do not interfere with the clarity of the writing.\nUses language and tone appropriate to the audience and purpose.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions, with few errors. Demonstrates varied syntax and precise word choice.\nConsistently uses language and tone appropriate to the audience and purpose.'}
				]
			},
			{
				name: 'Additional Task Demands',
				note: 'Be sure to acknowledge competing views.',
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially.'},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the argument.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the argument.'}
				]
			},
			{
				name: 'Disciplinary Content Understanding',
				note: 'Colorado Science Standards. 1.4. Atoms bond in different ways to form molecules and compounds that have definite properties (content listed in module)',
				details: [
					{score: 1, text: 'Includes disciplinary content in explanations, but understanding of content is weak; content is irrelevant, inappropriate, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Briefly notes disciplinary content relevant to the prompt; shows basic or uneven understanding of content with minor errors in explanation.'},
					{score: 2.5},
					{score: 3, text: 'Accurately presents disciplinary content relevant to the prompt with sufficient explanations that demonstrate understanding.'},
					{score: 3.5},
					{score: 4, text: 'Integrates relevant and accurate disciplinary content with thorough explanations that demonstrate in-depth understanding.'}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Cold War (Red Scare)
	{
		id: 'LDC_Arg_9-12_Red-Scare',
		name: 'Argumentation, Grades 9-12 (Red Scare)',
		link: 'https://s3-us-west-2.amazonaws.com/pg-scoresheet/rubrics/LDC_Arg_9-12_Red-Scare.docx',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Controlling Idea',
				details: [
					{score: 1, text: 'Addresses prompt.\nMakes a general claim with an unclear focus.'},
					{score: 1.5},
					{score: 2, text: 'Addresses prompt.\nEstablishes a clear claim with an uneven focus.'},
					{score: 2.5},
					{score: 3, text: 'Addresses prompt.\nEstablishes and maintains a clear, specific, and credible claim.'},
					{score: 3.5},
					{score: 4, text: 'Addresses prompt.\nEstablishes and maintains a precise, substantive claim. Acknowledges limitations and/or the complexity of the issue or topic.'}
				]
			},
			{
				name: 'Selection & Citation of Evidence',
				details: [
					{score: 1, text: 'Includes minimal details from sources.\nSources are used without citation.'},
					{score: 1.5},
					{score: 2, text: 'Includes details, examples, and/or quotations from sources that are relevant to the claim.\nInconsistently cites sources.'},
					{score: 2.5},
					{score: 3, text: 'Includes details, examples, and/or quotations from sources that support the claim and supporting ideas.\nConsistently cites sources with minor formatting errors.'},
					{score: 3.5},
					{score: 4, text: 'Includes well-chosen details, examples, and/or quotations from sources that fully support the claim and supporting ideas.\nConsistently cites sources using appropriate format.'}
				]
			},
			{
				name: 'Development / Explanation of Sources',
				details: [
					{score: 1, text: 'Explanation of source material is irrelevant, incomplete, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Explains source material to support the argument, with some incomplete reasoning or explanations.'},
					{score: 2.5},
					{score: 3, text: 'Accurately explains source material and how it supports the argument.'},
					{score: 3.5},
					{score: 4, text: 'Thoroughly and accurately explains source material, using logical reasoning to support and develop the argument.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Lacks an evident structure. Makes unclear connections among claims, reasons, and/or evidence.'},
					{score: 1.5},
					{score: 2, text: 'Groups ideas and uses transitions to develop the argument, with minor lapses in coherence or organization.'},
					{score: 2.5},
					{score: 3, text: 'Groups and sequences ideas to develop a cohesive argument. Uses transitions to clarify the relationships among claim(s), reasons, and evidence.'},
					{score: 3.5},
					{score: 4, text: 'Groups and sequences ideas in a logical progression in which ideas build to create a unified whole. Uses varied transitions to clarify the precise relationships among claim(s), reasons, and evidence.'}
				]
			},
			{
				name: 'Conventions',
				details: [
					{score: 1, text: 'Major errors in standard English conventions interfere with the clarity of the writing.\nLanguage or tone is inappropriate.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions sometimes interfere with the clarity of the writing.\nUses language and tone that are sometimes inappropriate for the audience and purpose.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions; minor errors, while noticeable, do not interfere with the clarity of the writing.\nUses language and tone appropriate to the audience and purpose.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions, with few errors. Demonstrates varied syntax and precise word choice.\nConsistently uses language and tone appropriate to the audience and purpose.'}
				]
			},
			{
				name: 'Additional Task Demands',
				note: 'Be sure to acknowledge competing views.',
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially.'},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the argument.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the argument.'}
				]
			},
			{
				name: 'Contextualizing',
				details: [
					{score: 1, text: 'Includes minimal background information relevant to the topic.'},
					{score: 1.5},
					{score: 2, text: 'Makes a connection to a relevant context -- political, social or economic circumstances of the time or place, or prior historical events, ideas, or conditions.'},
					{score: 2.5},
					{score: 3, text: 'Explains connections to relevant contexts -- political, social or economic circumstances of the time and place, and/or prior historical events, ideas, or conditions.'},
					{score: 3.5},
					{score: 4, text: 'Clearly explains and integrates connections to relevant and significant contexts -- political, social or economic circumstances of the time and place and/or prior historical events, ideas, or conditions -- in ways that strengthen or deepen the explanation or argument.'}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Cuban Missile Crisis
	{
		id: 'LDC_Arg_9-12_Cuban-Missile-Crisis',
		name: 'Argumentation, Grades 9-12 (Cuban Missile Crisis)',
		link: 'https://s3-us-west-2.amazonaws.com/pg-scoresheet/rubrics/LDC_Arg_9-12_Cuban-Missile-Crisis.docx',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Controlling Idea',
				details: [
					{score: 1, text: 'Addresses prompt.\nMakes a general claim with an unclear focus.'},
					{score: 1.5},
					{score: 2, text: 'Addresses prompt.\nEstablishes a clear claim with an uneven focus.'},
					{score: 2.5},
					{score: 3, text: 'Addresses prompt.\nEstablishes and maintains a clear, specific, and credible claim.'},
					{score: 3.5},
					{score: 4, text: 'Addresses prompt.\nEstablishes and maintains a precise, substantive claim. Acknowledges limitations and/or the complexity of the issue or topic.'}
				]
			},
			{
				name: 'Selection & Citation of Evidence',
				details: [
					{score: 1, text: 'Includes minimal details from sources.\nSources are used without citation.'},
					{score: 1.5},
					{score: 2, text: 'Includes details, examples, and/or quotations from sources that are relevant to the claim.\nInconsistently cites sources.'},
					{score: 2.5},
					{score: 3, text: 'Includes details, examples, and/or quotations from sources that support the claim and supporting ideas.\nConsistently cites sources with minor formatting errors.'},
					{score: 3.5},
					{score: 4, text: 'Includes well-chosen details, examples, and/or quotations from sources that fully support the claim and supporting ideas.\nConsistently cites sources using appropriate format.'}
				]
			},
			{
				name: 'Development / Explanation of Sources',
				details: [
					{score: 1, text: 'Explanation of source material is irrelevant, incomplete, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Explains source material to support the argument, with some incomplete reasoning or explanations.'},
					{score: 2.5},
					{score: 3, text: 'Accurately explains source material and how it supports the argument.'},
					{score: 3.5},
					{score: 4, text: 'Thoroughly and accurately explains source material, using logical reasoning to support and develop the argument.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Lacks an evident structure. Makes unclear connections among claims, reasons, and/or evidence.'},
					{score: 1.5},
					{score: 2, text: 'Groups ideas and uses transitions to develop the argument, with minor lapses in coherence or organization.'},
					{score: 2.5},
					{score: 3, text: 'Groups and sequences ideas to develop a cohesive argument. Uses transitions to clarify the relationships among claim(s), reasons, and evidence.'},
					{score: 3.5},
					{score: 4, text: 'Groups and sequences ideas in a logical progression in which ideas build to create a unified whole. Uses varied transitions to clarify the precise relationships among claim(s), reasons, and evidence.'}
				]
			},
			{
				name: 'Conventions',
				details: [
					{score: 1, text: 'Major errors in standard English conventions interfere with the clarity of the writing.\nLanguage or tone is inappropriate.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions sometimes interfere with the clarity of the writing.\nUses language and tone that are sometimes inappropriate for the audience and purpose.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions; minor errors, while noticeable, do not interfere with the clarity of the writing.\nUses language and tone appropriate to the audience and purpose.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions, with few errors. Demonstrates varied syntax and precise word choice.\nConsistently uses language and tone appropriate to the audience and purpose.'}
				]
			},
			{
				name: 'Additional Task Demands',
				note: 'Be sure to acknowledge competing views.',
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially.'},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the argument.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the argument.'}
				]
			},
			{
				name: 'Disciplinary Content Understanding',
				note: 'History GLE 2, Ev. Outcome F: Investigate causes and effects of significant events in United States history. Topics to include but not limited to WWI, Great Depression, Cold War.',
				details: [
					{score: 1, text: 'Includes disciplinary content in explanations, but understanding of content is weak; content is irrelevant, inappropriate, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Briefly notes disciplinary content relevant to the prompt; shows basic or uneven understanding of content with minor errors in explanation.'},
					{score: 2.5},
					{score: 3, text: 'Accurately presents disciplinary content relevant to the prompt with sufficient explanations that demonstrate understanding.'},
					{score: 3.5},
					{score: 4, text: 'Integrates relevant and accurate disciplinary content with thorough explanations that demonstrate in-depth understanding.'}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Fracking
	{
		id: 'LDC_Arg_6-8_Fracking',
		name: 'Argumentation, Grades 6-8 (Fracking)',
		link: 'https://s3-us-west-2.amazonaws.com/pg-scoresheet/rubrics/LDC_Arg_6-8_Fracking.docx',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Controlling Idea',
				details: [
					{score: 1, text: 'Attempts to address prompt. Makes an unclear or unfocused claim.'},
					{score: 1.5},
					{score: 2, text: 'Addresses prompt. Makes a general claim with an uneven focus.'},
					{score: 2.5},
					{score: 3, text: 'Addresses prompt. Establishes and maintains a clear claim.'},
					{score: 3.5},
					{score: 4, text: 'Addresses prompt. Establishes and maintains a clear, specific, and credible claim.'}
				]
			},
			{
				name: 'Selection & Citation of Evidence',
				details: [
					{score: 1, text: 'Includes minimal details from sources.\nSources are used without citation.'},
					{score: 1.5},
					{score: 2, text: 'Includes details, examples, and/or quotations from sources that are relevant to the claim.\nInconsistently cites sources.'},
					{score: 2.5},
					{score: 3, text: 'Includes details, examples, and/or quotations from sources that support the claim and supporting ideas.\nConsistently cites sources with minor formatting errors.'},
					{score: 3.5},
					{score: 4, text: 'Includes well-chosen details, examples, and/or quotations from sources that fully support the claim and supporting ideas.\nConsistently cites sources using appropriate format.'}
				]
			},
			{
				name: 'Development / Explanation of Sources',
				details: [
					{score: 1, text: 'Explanation of source material is irrelevant, incomplete, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Explanation of source material is minimal or contains minor errors.'},
					{score: 2.5},
					{score: 3, text: 'Accurately explains source material and how it supports the argument.'},
					{score: 3.5},
					{score: 4, text: 'Thoroughly and accurately explains source material, using logical reasoning to support and develop the argument.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Lacks an evident structure. Makes unclear connections among claims, reasons, and/or evidence.'},
					{score: 1.5},
					{score: 2, text: 'Groups ideas and uses transitions to develop the argument, with minor lapses in coherence or organization.'},
					{score: 2.5},
					{score: 3, text: 'Groups and sequences ideas to develop the controlling idea. Uses transitions to clarify the relationships among claim(s), reasons, and evidence.'},
					{score: 3.5},
					{score: 4, text: 'Groups and sequences ideas logically to develop the controlling idea and create cohesion. Uses varied transitions to clarify the relationships among claim(s),  reasons, and evidence.'}
				]
			},
			{
				name: 'Conventions',
				details: [
					{score: 1, text: 'Major errors in standard English conventions interfere with the clarity of the writing.\nLanguage or tone is inappropriate.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions sometimes interfere with the clarity of the writing.\nUses language and tone that are sometimes inappropriate for the audience and purpose.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions; minor errors, while noticeable, do not interfere with the clarity of the writing.\nUses language and tone appropriate to the audience and purpose.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions, with few errors. Demonstrates varied syntax and precise word choice.\nConsistently uses language and tone appropriate to the audience and purpose.'}
				]
			},
			{
				name: 'Disciplinary Content Understanding',
				note: 'MS-ETS1.CC.1.1.All human activity draws on natural resources and has both short and long-term consequences, positive as well as negative, for the health of people and the natural environment. (MS-ETS1- 1)',
				details: [
					{score: 1, text: 'Includes disciplinary content in explanations, but understanding of content is weak; content is irrelevant, inappropriate, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Briefly notes disciplinary content relevant to the prompt; shows basic or uneven understanding of content with minor errors in explanation.'},
					{score: 2.5},
					{score: 3, text: 'Accurately presents disciplinary content relevant to the prompt with sufficient explanations that demonstrate understanding.'},
					{score: 3.5},
					{score: 4, text: 'Integrates relevant and accurate disciplinary content with thorough explanations that demonstrate in-depth understanding.'}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// No Guitar Blues (Growing Up is Hard to Do)
	{
		id: 'LDC_Inf_6-8_Growing-Up-is-Hard',
		name: 'Informational/Explanatory, Grades 6-8 (Growing Up is Hard to Do)',
		link: 'https://s3-us-west-2.amazonaws.com/pg-scoresheet/rubrics/LDC_Inf_6-8_Growing-Up-is-Hard.docx',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Controlling Idea',
				details: [
					{score: 1, text: 'Attempts to address prompt.\nMakes an unclear or unfocused claim.'},
					{score: 1.5},
					{score: 2, text: 'Addresses prompt.\nMakes a general claim with an uneven focus.'},
					{score: 2.5},
					{score: 3, text: 'Addresses prompt.\nEstablishes and maintains a clear claim.'},
					{score: 3.5},
					{score: 4, text: 'Addresses prompt.\nEstablishes and maintains a clear, specific, and credible claim.'}
				]
			},
			{
				name: 'Selection & Citation of Evidence',
				details: [
					{score: 1, text: 'Includes minimal details from sources.\nSources are used without citation.'},
					{score: 1.5},
					{score: 2, text: 'Includes details, examples, and/or quotations from sources that are relevant to the claim.\nInconsistently cites sources.'},
					{score: 2.5},
					{score: 3, text: 'Includes details, examples, and/or quotations from sources that support the claim and supporting ideas.\nConsistently cites sources with minor formatting errors.'},
					{score: 3.5},
					{score: 4, text: 'Includes well-chosen details, examples, and/or quotations from sources that fully support the claim and supporting ideas.\nConsistently cites sources using appropriate format.'}
				]
			},
			{
				name: 'Development / Explanation of Sources',
				details: [
					{score: 1, text: 'Explanation of source material is irrelevant, incomplete, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Explanation of source material is minimal or contains minor errors.'},
					{score: 2.5},
					{score: 3, text: 'Accurately explains source material and how it supports the argument.'},
					{score: 3.5},
					{score: 4, text: 'Thoroughly and accurately explains source material, using logical reasoning to support and develop the argument.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Lacks an evident structure. Makes unclear connections among claims, reasons, and/or evidence.'},
					{score: 1.5},
					{score: 2, text: 'Groups ideas and uses transitions to develop the argument, with minor lapses in coherence or organization.'},
					{score: 2.5},
					{score: 3, text: 'Groups and sequences ideas to develop the controlling idea. Uses transitions to clarify the relationships among claim(s), reasons, and evidence.'},
					{score: 3.5},
					{score: 4, text: 'Groups and sequences ideas logically to develop the controlling idea and create cohesion. Uses varied transitions to clarify the relationships among claim(s),  reasons, and evidence.'}
				]
			},
			{
				name: 'Conventions',
				details: [
					{score: 1, text: 'Major errors in standard English conventions interfere with the clarity of the writing.\nLanguage or tone is inappropriate.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions sometimes interfere with the clarity of the writing.\nUses language and tone that are sometimes inappropriate for the audience and purpose.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions; minor errors, while noticeable, do not interfere with the clarity of the writing.\nUses language and tone appropriate to the audience and purpose.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions, with few errors. Demonstrates varied syntax and precise word choice.\nConsistently uses language and tone appropriate to the audience and purpose.'}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Nuclear Power
	{
		id: 'LDC_Arg_9-12_Nuclear-Power',
		name: 'Argumentation, Grades 9-12 (Nuclear Power)',
		link: 'https://s3-us-west-2.amazonaws.com/pg-scoresheet/rubrics/LDC_Arg_9-12_Nuclear-Power.docx',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Controlling Idea',
				details: [
					{score: 1, text: 'Addresses prompt.\nMakes a general claim with an unclear focus.'},
					{score: 1.5},
					{score: 2, text: 'Addresses prompt.\nEstablishes a clear claim with an uneven focus.'},
					{score: 2.5},
					{score: 3, text: 'Addresses prompt.\nEstablishes and maintains a clear, specific, and credible claim.'},
					{score: 3.5},
					{score: 4, text: 'Addresses prompt.\nEstablishes and maintains a precise, substantive claim. Acknowledges limitations and/or the complexity of the issue or topic.'}
				]
			},
			{
				name: 'Selection & Citation of Evidence',
				details: [
					{score: 1, text: 'Includes minimal details from sources.\nSources are used without citation.'},
					{score: 1.5},
					{score: 2, text: 'Includes details, examples, and/or quotations from sources that are relevant to the claim.\nInconsistently cites sources.'},
					{score: 2.5},
					{score: 3, text: 'Includes details, examples, and/or quotations from sources that support the claim and supporting ideas.\nConsistently cites sources with minor formatting errors.'},
					{score: 3.5},
					{score: 4, text: 'Includes well-chosen details, examples, and/or quotations from sources that fully support the claim and supporting ideas.\nConsistently cites sources using appropriate format.'}
				]
			},
			{
				name: 'Development / Explanation of Sources',
				details: [
					{score: 1, text: 'Explanation of source material is irrelevant, incomplete, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Explains source material to support the argument, with some incomplete reasoning or explanations.'},
					{score: 2.5},
					{score: 3, text: 'Accurately explains source material and how it supports the argument.'},
					{score: 3.5},
					{score: 4, text: 'Thoroughly and accurately explains source material, using logical reasoning to support and develop the argument.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Lacks an evident structure. Makes unclear connections among claims, reasons, and/or evidence.'},
					{score: 1.5},
					{score: 2, text: 'Groups ideas and uses transitions to develop the argument, with minor lapses in coherence or organization.'},
					{score: 2.5},
					{score: 3, text: 'Groups and sequences ideas to develop a cohesive argument. Uses transitions to clarify the relationships among claim(s), reasons, and evidence.'},
					{score: 3.5},
					{score: 4, text: 'Groups and sequences ideas in a logical progression in which ideas build to create a unified whole. Uses varied transitions to clarify the precise relationships among claim(s), reasons, and evidence.'}
				]
			},
			{
				name: 'Conventions',
				details: [
					{score: 1, text: 'Major errors in standard English conventions interfere with the clarity of the writing.\nLanguage or tone is inappropriate.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions sometimes interfere with the clarity of the writing.\nUses language and tone that are sometimes inappropriate for the audience and purpose.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions; minor errors, while noticeable, do not interfere with the clarity of the writing.\nUses language and tone appropriate to the audience and purpose.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions, with few errors. Demonstrates varied syntax and precise word choice.\nConsistently uses language and tone appropriate to the audience and purpose.'}
				]
			},
			{
				name: 'Additional Task Demands',
				note: 'Be sure to acknowledge competing views.',
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially.'},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the argument.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the argument.'}
				]
			},
			{
				name: 'Disciplinary Content Understanding',
				note: 'NGSS PS1.C:1. Nuclear processes, including fusion, fission, and radioactive decays of unstable nuclei, involve release or absorption of energy. (HS-PS1- 8)',
				details: [
					{score: 1, text: 'Includes disciplinary content in explanations, but understanding of content is weak; content is irrelevant, inappropriate, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Briefly notes disciplinary content relevant to the prompt; shows basic or uneven understanding of content with minor errors in explanation.'},
					{score: 2.5},
					{score: 3, text: 'Accurately presents disciplinary content relevant to the prompt with sufficient explanations that demonstrate understanding.'},
					{score: 3.5},
					{score: 4, text: 'Integrates relevant and accurate disciplinary content with thorough explanations that demonstrate in-depth understanding.'}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Period is Pissed
	{
		id: 'LDC_Arg_9-12_Period-is-Pissed',
		name: 'Argumentation, Grades 9-12 (Period is Pissed)',
		link: 'https://s3-us-west-2.amazonaws.com/pg-scoresheet/rubrics/LDC_Arg_9-12_Period-is-Pissed.docx',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Controlling Idea',
				details: [
					{score: 1, text: 'Addresses prompt.\nMakes a general claim with an unclear focus.'},
					{score: 1.5},
					{score: 2, text: 'Addresses prompt.\nEstablishes a clear claim with an uneven focus.'},
					{score: 2.5},
					{score: 3, text: 'Addresses prompt.\nEstablishes and maintains a clear, specific, and credible claim.'},
					{score: 3.5},
					{score: 4, text: 'Addresses prompt.\nEstablishes and maintains a precise, substantive claim. Acknowledges limitations and/or the complexity of the issue or topic.'}
				]
			},
			{
				name: 'Selection & Citation of Evidence',
				details: [
					{score: 1, text: 'Includes minimal details from sources.\nSources are used without citation.'},
					{score: 1.5},
					{score: 2, text: 'Includes details, examples, and/or quotations from sources that are relevant to the claim.\nInconsistently cites sources.'},
					{score: 2.5},
					{score: 3, text: 'Includes details, examples, and/or quotations from sources that support the claim and supporting ideas.\nConsistently cites sources with minor formatting errors.'},
					{score: 3.5},
					{score: 4, text: 'Includes well-chosen details, examples, and/or quotations from sources that fully support the claim and supporting ideas.\nConsistently cites sources using appropriate format.'}
				]
			},
			{
				name: 'Development / Explanation of Sources',
				details: [
					{score: 1, text: 'Explanation of source material is irrelevant, incomplete, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Explains source material to support the argument, with some incomplete reasoning or explanations.'},
					{score: 2.5},
					{score: 3, text: 'Accurately explains source material and how it supports the argument.'},
					{score: 3.5},
					{score: 4, text: 'Thoroughly and accurately explains source material, using logical reasoning to support and develop the argument.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Lacks an evident structure. Makes unclear connections among claims, reasons, and/or evidence.'},
					{score: 1.5},
					{score: 2, text: 'Groups ideas and uses transitions to develop the argument, with minor lapses in coherence or organization.'},
					{score: 2.5},
					{score: 3, text: 'Groups and sequences ideas to develop a cohesive argument. Uses transitions to clarify the relationships among claim(s), reasons, and evidence.'},
					{score: 3.5},
					{score: 4, text: 'Groups and sequences ideas in a logical progression in which ideas build to create a unified whole. Uses varied transitions to clarify the precise relationships among claim(s), reasons, and evidence.'}
				]
			},
			{
				name: 'Conventions',
				details: [
					{score: 1, text: 'Major errors in standard English conventions interfere with the clarity of the writing.\nLanguage or tone is inappropriate.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions sometimes interfere with the clarity of the writing.\nUses language and tone that are sometimes inappropriate for the audience and purpose.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions; minor errors, while noticeable, do not interfere with the clarity of the writing.\nUses language and tone appropriate to the audience and purpose.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions, with few errors. Demonstrates varied syntax and precise word choice.\nConsistently uses language and tone appropriate to the audience and purpose.'}
				]
			},
			{
				name: 'Additional Task Demands',
				note: 'Be sure to acknowledge and refute competing views.',
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially.'},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the argument.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the argument.'}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// UN (Children's Rights)
	{
		id: 'LDC_Arg_6-8_UN-Childrens-Rights',
		name: 'Argumentation, Grades 6-8 (UN Children\'s Rights)',
		link: 'https://s3-us-west-2.amazonaws.com/pg-scoresheet/rubrics/LDC_Arg_6-8_UN-Childrens-Rights.docx',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Controlling Idea',
				details: [
					{score: 1, text: 'Attempts to address prompt. Makes an unclear or unfocused claim.'},
					{score: 1.5},
					{score: 2, text: 'Addresses prompt. Makes a general claim with an uneven focus.'},
					{score: 2.5},
					{score: 3, text: 'Addresses prompt. Establishes and maintains a clear claim.'},
					{score: 3.5},
					{score: 4, text: 'Addresses prompt. Establishes and maintains a clear, specific, and credible claim.'}
				]
			},
			{
				name: 'Selection & Citation of Evidence',
				details: [
					{score: 1, text: 'Includes minimal details from sources.\nSources are used without citation.'},
					{score: 1.5},
					{score: 2, text: 'Includes details, examples, and/or quotations from sources that are relevant to the claim.\nInconsistently cites sources.'},
					{score: 2.5},
					{score: 3, text: 'Includes details, examples, and/or quotations from sources that support the claim and supporting ideas.\nConsistently cites sources with minor formatting errors.'},
					{score: 3.5},
					{score: 4, text: 'Includes well-chosen details, examples, and/or quotations from sources that fully support the claim and supporting ideas.\nConsistently cites sources using appropriate format.'}
				]
			},
			{
				name: 'Development / Explanation of Sources',
				details: [
					{score: 1, text: 'Explanation of source material is irrelevant, incomplete, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Explanation of source material is minimal or contains minor errors.'},
					{score: 2.5},
					{score: 3, text: 'Accurately explains source material and how it supports the argument.'},
					{score: 3.5},
					{score: 4, text: 'Thoroughly and accurately explains source material, using logical reasoning to support and develop the argument.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Lacks an evident structure. Makes unclear connections among claims, reasons, and/or evidence.'},
					{score: 1.5},
					{score: 2, text: 'Groups ideas and uses transitions to develop the argument, with minor lapses in coherence or organization.'},
					{score: 2.5},
					{score: 3, text: 'Groups and sequences ideas to develop the controlling idea. Uses transitions to clarify the relationships among claim(s), reasons, and evidence.'},
					{score: 3.5},
					{score: 4, text: 'Groups and sequences ideas logically to develop the controlling idea and create cohesion. Uses varied transitions to clarify the relationships among claim(s),  reasons, and evidence.'}
				]
			},
			{
				name: 'Conventions',
				details: [
					{score: 1, text: 'Major errors in standard English conventions interfere with the clarity of the writing.\nLanguage or tone is inappropriate.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions sometimes interfere with the clarity of the writing.\nUses language and tone that are sometimes inappropriate for the audience and purpose.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions; minor errors, while noticeable, do not interfere with the clarity of the writing.\nUses language and tone appropriate to the audience and purpose.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions, with few errors. Demonstrates varied syntax and precise word choice.\nConsistently uses language and tone appropriate to the audience and purpose.'}
				]
			},
			{
				name: 'Additional Task Demands',
				note: 'Be sure to acknowledge competing views. What conclusions can you draw about the root causes(s) of children being denied access to education?',
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially.'},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the argument.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the argument.'}
				]
			},
			{
				name: 'Corroborating Sources',
				details: [
					{score: 1, text: 'Relies primarily on one source to support ideas or claims.'},
					{score: 1.5},
					{score: 2, text: 'Uses multiple sources to support specific ideas or claims, without explicitly comparing or integrating sources or evidence.'},
					{score: 2.5},
					{score: 3, text: 'Makes explicit connections between sources by comparing or contrasting information, perspectives, and/or origins to support specific ideas or claims.'},
					{score: 3.5},
					{score: 4, text: 'Makes significant and nuanced connections between sources by comparing and contrasting information, perspectives, and/or origins to strengthen, refine, or explain limitations of specific ideas or claims.'}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Water in Colorado
	{
		id: 'LDC_Arg_6-8_Water-In-Colorado',
		name: 'Argumentation, Grades 6-8 (Water in Colorado)',
		link: 'https://s3-us-west-2.amazonaws.com/pg-scoresheet/rubrics/LDC_Arg_6-8_Water-In-Colorado.docx',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Controlling Idea',
				details: [
					{score: 1, text: 'Attempts to address prompt. Makes an unclear or unfocused claim.'},
					{score: 1.5},
					{score: 2, text: 'Addresses prompt. Makes a general claim with an uneven focus.'},
					{score: 2.5},
					{score: 3, text: 'Addresses prompt. Establishes and maintains a clear claim.'},
					{score: 3.5},
					{score: 4, text: 'Addresses prompt. Establishes and maintains a clear, specific, and credible claim.'}
				]
			},
			{
				name: 'Selection & Citation of Evidence',
				details: [
					{score: 1, text: 'Includes minimal details from sources.\nSources are used without citation.'},
					{score: 1.5},
					{score: 2, text: 'Includes details, examples, and/or quotations from sources that are relevant to the claim.\nInconsistently cites sources.'},
					{score: 2.5},
					{score: 3, text: 'Includes details, examples, and/or quotations from sources that support the claim and supporting ideas.\nConsistently cites sources with minor formatting errors.'},
					{score: 3.5},
					{score: 4, text: 'Includes well-chosen details, examples, and/or quotations from sources that fully support the claim and supporting ideas.\nConsistently cites sources using appropriate format.'}
				]
			},
			{
				name: 'Development / Explanation of Sources',
				details: [
					{score: 1, text: 'Explanation of source material is irrelevant, incomplete, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Explanation of source material is minimal or contains minor errors.'},
					{score: 2.5},
					{score: 3, text: 'Accurately explains source material and how it supports the argument.'},
					{score: 3.5},
					{score: 4, text: 'Thoroughly and accurately explains source material, using logical reasoning to support and develop the argument.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Lacks an evident structure. Makes unclear connections among claims, reasons, and/or evidence.'},
					{score: 1.5},
					{score: 2, text: 'Groups ideas and uses transitions to develop the argument, with minor lapses in coherence or organization.'},
					{score: 2.5},
					{score: 3, text: 'Groups and sequences ideas to develop the controlling idea. Uses transitions to clarify the relationships among claim(s), reasons, and evidence.'},
					{score: 3.5},
					{score: 4, text: 'Groups and sequences ideas logically to develop the controlling idea and create cohesion. Uses varied transitions to clarify the relationships among claim(s),  reasons, and evidence.'}
				]
			},
			{
				name: 'Conventions',
				details: [
					{score: 1, text: 'Major errors in standard English conventions interfere with the clarity of the writing.\nLanguage or tone is inappropriate.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions sometimes interfere with the clarity of the writing.\nUses language and tone that are sometimes inappropriate for the audience and purpose.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions; minor errors, while noticeable, do not interfere with the clarity of the writing.\nUses language and tone appropriate to the audience and purpose.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions, with few errors. Demonstrates varied syntax and precise word choice.\nConsistently uses language and tone appropriate to the audience and purpose.'}
				]
			},
			{
				name: 'Disciplinary Content Understanding',
				note: 'MS-ETS1.CC.1.1.All human activity draws on natural resources and has both short and long-term consequences, positive as well as negative, for the health of people and the natural environment. (MS-ETS1- 1)',
				details: [
					{score: 1, text: 'Includes disciplinary content in explanations, but understanding of content is weak; content is irrelevant, inappropriate, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Briefly notes disciplinary content relevant to the prompt; shows basic or uneven understanding of content with minor errors in explanation.'},
					{score: 2.5},
					{score: 3, text: 'Accurately presents disciplinary content relevant to the prompt with sufficient explanations that demonstrate understanding.'},
					{score: 3.5},
					{score: 4, text: 'Integrates relevant and accurate disciplinary content with thorough explanations that demonstrate in-depth understanding.'}
				]
			}
		]
	}

	// -----------------------------------------------------------------------------------------------------------------
	// Argumentation, Grades 6-8
	/*{
		name: 'Argumentation, Grades 6-8',
		headers: [
			'emerging',
			'approaches expectations',
			'meets expectations',
			'advanced'
		],
		fields: [
			{
				name: 'Controlling Idea',
				details: [
					{score: 1, text: 'Attempts to address prompt. Makes an unclear or unfocused claim.'},
					{score: 1.5},
					{score: 2, text: 'Addresses prompt. Makes a general claim with an uneven focus.'},
					{score: 2.5},
					{score: 3, text: 'Addresses prompt. Establishes and maintains a clear claim.'},
					{score: 3.5},
					{score: 4, text: 'Addresses prompt. Establishes and maintains a clear, specific, and credible claim.'}
				]
			},
			{
				name: 'Selection & Citation of Evidence',
				details: [
					{score: 1, text: 'Includes minimal details from sources. Sources are used without citation.'},
					{score: 1.5},
					{score: 2, text: 'Includes details, examples, and/or quotations from sources that are relevant to the claim. Inconsistently cites sources.'},
					{score: 2.5},
					{score: 3, text: 'Includes details, examples, and/or quotations from sources that are relevant to the claim and supporting ideas. Consistently cites sources with minor formatting errors.'},
					{score: 3.5},
					{score: 4, text: 'Includes well-chosen details, examples, and/or quotations from sources that support the claim and supporting ideas. Consistently cites sources using appropriate format.'}
				]
			},
			{
				name: 'Development / Explanation of Sources',
				details: [
					{score: 1, text: 'Explanation of source material is irrelevant, incomplete, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Explanation of source material is minimal or contains minor errors.'},
					{score: 2.5},
					{score: 3, text: 'Accurately explains source material and how it supports the argument.'},
					{score: 3.5},
					{score: 4, text: 'Thoroughly and accurately explains source material, using reasoning to support and develop the argument.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Lacks an evident structure. Makes unclear connections among claim, reasons, and evidence.'},
					{score: 1.5},
					{score: 2, text: 'Groups ideas and uses some transitions to connect ideas, with minor lapses in coherence or organization.'},
					{score: 2.5},
					{score: 3, text: 'Groups and sequences ideas to develop the controlling idea. Uses transitions to clarify the relationships among claim(s), reasons, and evidence.'},
					{score: 3.5},
					{score: 4, text: 'Groups and sequences ideas logically to develop the controlling idea and create cohesion. Uses varied transitions to clarify the relationships among claim(s), reasons, and evidence.'}
				]
			},
			{
				name: 'Conventions',
				details: [
					{score: 1, text: 'Major errors in standard English conventions interfere with the clarity of the writing.\nLanguage or tone is inappropriate.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions sometimes interfere with the clarity of the writing.\nUses language and tone that are sometimes inappropriate for the audience and purpose.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions; minor errors, while noticeable, do not interfere with the clarity of the writing.\nUses language and tone appropriate to the audience and purpose.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions, with few errors. Demonstrates varied syntax and precise word choice.\nConsistently uses language and tone appropriate to the audience and purpose.'}
				]
			},
			{
				name: 'Additional Task Demands',
				optional: true,
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially.'},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the argument.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the argument.'}
				]
			},
			{
				name: 'Disciplinary Content Understanding',
				optional: true,
				details: [
					{score: 1, text: ''},
					{score: 1.5},
					{score: 2, text: ''},
					{score: 2.5},
					{score: 3, text: ''},
					{score: 3.5},
					{score: 4, text: ''}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Argumentation, Grades 9-12
	{
		name: 'Argumentation, Grades 9-12',
		headers: [
			'emerging',
			'approaches expectations',
			'meets expectations',
			'advanced'
		],
		fields: [
			{
				name: 'Controlling Idea',
				details: [
					{score: 1, text: 'Addresses prompt.\nMakes a general claim with an unclear focus.'},
					{score: 1.5},
					{score: 2, text: 'Addresses prompt.\nEstablishes a clear claim with an uneven focus.'},
					{score: 2.5},
					{score: 3, text: 'Addresses prompt.\nEstablishes and maintains a clear, specific, and credible claim.'},
					{score: 3.5},
					{score: 4, text: 'Addresses prompt.\nEstablishes and maintains a precise, substantive claim. Acknowledges limitations and/or the complexity of the issue or topic.'}
				]
			},
			{
				name: 'Selection & Citation of Evidence',
				details: [
					{score: 1, text: 'Includes minimal details from sources.\nSources are used without citation.'},
					{score: 1.5},
					{score: 2, text: 'Includes details, examples, and/or quotations from sources that are relevant to the claim.\nInconsistently cites sources.'},
					{score: 2.5},
					{score: 3, text: 'Includes details, examples, and/or quotations from sources that support the claim and supporting ideas.\nConsistently cites sources with minor formatting errors.'},
					{score: 3.5},
					{score: 4, text: 'Includes well-chosen details, examples, and/or quotations from sources that fully support the claim and supporting ideas.\nConsistently cites sources using appropriate format.'}
				]
			},
			{
				name: 'Development / Explanation of Sources',
				details: [
					{score: 1, text: 'Explanation of source material is irrelevant, incomplete, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Explains source material to support the argument, with some incomplete reasoning or explanations.'},
					{score: 2.5},
					{score: 3, text: 'Accurately explains source material and how it supportsthe argument.'},
					{score: 3.5},
					{score: 4, text: 'Thoroughly and accurately explains source material, using logical reasoning to support and develop the argument.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Lacks an evident structure. Makes unclear connections among claims, reasons, and/or evidence.'},
					{score: 1.5},
					{score: 2, text: 'Groups ideas and uses transitions to develop the argument, with minor lapses in coherence or organization.'},
					{score: 2.5},
					{score: 3, text: 'Groups and sequences ideas to develop a cohesive argument. Uses transitions to clarify the relationships among claim(s), reasons, and evidence.'},
					{score: 3.5},
					{score: 4, text: 'Groups and sequences ideas in a logical progression in which ideas build to create a unified whole. Uses varied transitions to clarify the precise relationships among claim(s), reasons, and evidence.'}
				]
			},
			{
				name: 'Conventions',
				details: [
					{score: 1, text: 'Major errors in standard English conventions interfere with the clarity of the writing.\nLanguage or tone is inappropriate.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions sometimes interfere with the clarity of the writing.\nUses language and tone that are sometimes inappropriate for the audience and purpose.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions; minor errors, while noticeable, do not interfere with the clarity of the writing.\nUses language and tone appropriate to the audience and purpose.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions, with few errors. Demonstrates varied syntax and precise word choice.\nConsistently uses language and tone appropriate to the audience and purpose.'}
				]
			},
			{
				name: 'Additional Task Demands',
				optional: true,
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially.'},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the argument.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the argument.'}
				]
			},
			{
				name: 'Disciplinary Content Understanding',
				optional: true,
				details: [
					{score: 1, text: ''},
					{score: 1.5},
					{score: 2, text: ''},
					{score: 2.5},
					{score: 3, text: ''},
					{score: 3.5},
					{score: 4, text: ''}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Informational/Explanatory, Grades 6-8
	{
		name: 'Informational/Explanatory, Grades 6-8',
		headers: [
			'emerging',
			'approaches expectations',
			'meets expectations',
			'advanced'
		],
		fields: [
			{
				name: 'Controlling Idea',
				details: [
					{score: 1, text: 'Attempts to address prompt.\nPresents an unclear or unfocused controlling idea.'},
					{score: 1.5},
					{score: 2, text: 'Addresses prompt.\nPresents a general controlling idea with an uneven focus.'},
					{score: 2.5},
					{score: 3, text: 'Addresses prompt.\nPresents and maintains a clear controlling idea.'},
					{score: 3.5},
					{score: 4, text: 'Addresses prompt.\nPresents and maintains a clear and specific controlling idea that takes into account the complexity of the topic.'}
				]
			},
			{
				name: 'Selection & Citation of Evidence',
				details: [
					{score: 1, text: 'Includes minimal details from sources.\nSources are used without citation.'},
					{score: 1.5},
					{score: 2, text: 'Includes details, examples, and/or quotations from sources that are relevant to the controlling idea.\nInconsistently cites sources.'},
					{score: 2.5},
					{score: 3, text: 'Includes details, examples, and/or quotations from sources that are relevant to the controlling and supporting ideas.\nConsistently cites sources with minor formatting errors.'},
					{score: 3.5},
					{score: 4, text: 'Includes well-chosen details, examples, and/or quotations from sources that support the controlling and supporting ideas.\nConsistently cites sources using appropriate format.'}
				]
			},
			{
				name: 'Development / Explanation of Sources',
				details: [
					{score: 1, text: 'Explanation of source material is irrelevant, incomplete, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Explanation of source material is minimal or contains minor errors.'},
					{score: 2.5},
					{score: 3, text: 'Accurately explains source material and how it supports the controlling idea.'},
					{score: 3.5},
					{score: 4, text: 'Thoroughly and accurately explains source material, using reasoning to support and develop the controlling idea.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Lacks an evident structure. Makes unclear connections among ideas, concepts, and information.'},
					{score: 1.5},
					{score: 2, text: 'Groups ideas and uses some transitions to connect ideas, with minor lapses in coherence or organization.'},
					{score: 2.5},
					{score: 3, text: 'Groups and sequences ideas to develop the controlling idea. Uses transitions to clarify the relationships among ideas, concepts, and information.'},
					{score: 3.5},
					{score: 4, text: 'Groups and sequences ideas logically to develop the controlling idea and create cohesion. Uses varied transitions to clarify the relationships among ideas, concepts, and information.'}
				]
			},
			{
				name: 'Conventions',
				details: [
					{score: 1, text: 'Major errors in standard English conventions interfere with the clarity of the writing.\nLanguage or tone is inappropriate.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions sometimes interfere with the clarity of the writing.\nUses language and tone that are sometimes inappropriate to the audience and purpose.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions; minor errors, while noticeable, do not interfere with the clarity of the writing.\nUses language and tone appropriate to the audience and purpose.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions, with few errors. Demonstrates varied syntax and precise word choice.\nConsistently uses language and tone appropriate to the audience and purpose.'}
				]
			},
			{
				name: 'Additional Task Demands',
				optional: true,
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially.'},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the explanation.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the explanation.'}
				]
			},
			{
				name: 'Disciplinary Content Understanding',
				optional: true,
				details: [
					{score: 1, text: ''},
					{score: 1.5},
					{score: 2, text: ''},
					{score: 2.5},
					{score: 3, text: ''},
					{score: 3.5},
					{score: 4, text: ''}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Informational/Explanatory, Grades 9-12
	{
		name: 'Informational/Explanatory, Grades 9-12',
		headers: [
			'emerging',
			'approaches expectations',
			'meets expectations',
			'advanced'
		],
		fields: [
			{
				name: 'Controlling Idea',
				details: [
					{score: 1, text: 'Addresses prompt.\nPresents a general or unclear controlling idea.'},
					{score: 1.5},
					{score: 2, text: 'Addresses prompt.\nPresents a clear controlling idea with an uneven focus.'},
					{score: 2.5},
					{score: 3, text: 'Addresses prompt.\nPresents and maintains a clear, specific controlling idea that takes into account the complexity of the topic.'},
					{score: 3.5},
					{score: 4, text: 'Addresses prompt.\nPresents and maintains a precise, substantive controlling idea that takes into account the complexity of the topic and, where appropriate, acknowledges gaps in evidence or information.'}
				]
			},
			{
				name: 'Selection & Citation of Evidence',
				details: [
					{score: 1, text: 'Includes minimal details from sources.\nSources are used without citation.'},
					{score: 1.5},
					{score: 2, text: 'Includes details, examples, and/or quotations from sources that are relevant to the controlling idea.\nInconsistently cites sources.'},
					{score: 2.5},
					{score: 3, text: 'Includes details, examples, and/or quotations from sources that support the controlling and supporting ideas.\nConsistently cites sources with minor formatting errors.'},
					{score: 3.5},
					{score: 4, text: 'Includes well-chosen details, examples, and/or quotations from sources that fully support the controlling and supporting ideas.\nConsistently cites sources using appropriate format.'}
				]
			},
			{
				name: 'Development / Explanation of Sources',
				details: [
					{score: 1, text: 'Explanation of source material is irrelevant, incomplete, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Explains source material to support the controlling idea, with some incomplete reasoning or explanations.'},
					{score: 2.5},
					{score: 3, text: 'Accurately explains source material and how it supports the controlling idea.'},
					{score: 3.5},
					{score: 4, text: 'Thoroughly and accurately explains source material to support and develop the controlling idea.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Lacks an evident structure. Makes unclear connections among ideas, concepts, and information.'},
					{score: 1.5},
					{score: 2, text: 'Groups ideas and uses transitions to develop the controlling idea, with minor lapses in coherence or organization.'},
					{score: 2.5},
					{score: 3, text: 'Groups and sequences ideas to develop a cohesive explanation. Uses transitions to clarify the relationships among complex ideas, concepts, and information.'},
					{score: 3.5},
					{score: 4, text: 'Groups and sequences ideas in a logical progression in which ideas build to create a unified whole. Uses varied transitions to clarify the precise relationships among complex ideas, concepts, and information.'}
				]
			},
			{
				name: 'Conventions',
				details: [
					{score: 1, text: 'Major errors in standard English conventions interfere with the clarity of the writing.\nLanguage or tone is inappropriate.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions sometimes interfere with the clarity of the writing.\nUses language and tone that are sometimes inappropriate for the audience and purpose.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions; minor errors, while noticeable, do not interfere with the clarity of the writing.\nUses language and tone appropriate to the audience and purpose.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions, with few errors. Demonstrates varied syntax and precise word choice.\nConsistently uses language and tone appropriate to the audience and purpose.'}
				]
			},
			{
				name: 'Additional Task Demands',
				optional: true,
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially.'},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the explanation.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the explanation.'}
				]
			},
			{
				name: 'Disciplinary Content Understanding',
				optional: true,
				details: [
					{score: 1, text: ''},
					{score: 1.5},
					{score: 2, text: ''},
					{score: 2.5},
					{score: 3, text: ''},
					{score: 3.5},
					{score: 4, text: ''}
				]
			}
		]
	}*/

];