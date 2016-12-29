'use strict';

/**
 * Configuration file for the rubrics collection.
 */
module.exports = [

	// RUBRIC DATA COPIED FROM GOOGLE SPREADSHEET ON 12/29/2016 AT 11:00AM

	// -----------------------------------------------------------------------------------------------------------------
	// Informational/Explanatory Task - Grades 9-12

	{
		id: 'LDC_Inf-Exp_9-12',
		name: 'Informational/Explanatory Task - Grades 9-12',
		link: 'https://docs.google.com/spreadsheets/d/1Z-VNlzkUAZuVW-lpxDpubS2LEtiPUvBmMiPozlPjGwk/edit#gid=16587852',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Controlling Idea',
				details: [
					{score: 1, text: 'Presents a general or unclear controlling idea.'},
					{score: 1.5},
					{score: 2, text: 'Presents a clear controlling idea that addresses the prompt, with an uneven focus.'},
					{score: 2.5},
					{score: 3, text: 'Presents and maintains a clear, specific controlling idea that addresses all aspects of the prompt and takes into account the complexity of the topic.'},
					{score: 3.5},
					{score: 4, text: 'Presents and maintains a precise, substantive controlling idea that addresses all aspects of the prompt, takes into account the complexity of the topic and, where appropriate, acknowledges gaps in evidence or information.'}
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
					{score: 1, text: 'Explanation of ideas and source material is irrelevant, incomplete, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Explains ideas and source material to support the controlling idea, with some incomplete reasoning or explanations.'},
					{score: 2.5},
					{score: 3, text: 'Accurately explains ideas and source material and how they support the controlling idea.'},
					{score: 3.5},
					{score: 4, text: 'Thoroughly and accurately explains ideas and source material to support and develop the controlling idea.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Lacks an evident structure. Makes unclear connections among ideas, concepts, and information.'},
					{score: 1.5},
					{score: 2, text: 'Groups ideas and uses transitions to develop the controlling idea, with some lapses in coherence or organization.'},
					{score: 2.5},
					{score: 3, text: 'Groups and sequences ideas to develop a cohesive explanation. Uses transitions to clarify the relationships among complex ideas, concepts, and information.'},
					{score: 3.5},
					{score: 4, text: 'Groups and sequences ideas in a logical progression in which ideas build to create a unified whole. Uses varied transitions to clarify the precise relationships among complex ideas, concepts, and information.'}
				]
			},
			{
				name: 'Conventions',
				details: [
					{score: 1, text: 'Major errors in standard English conventions interfere with the clarity of the writing.\bLanguage or tone is inappropriate.'},
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
				note: 'When applicable.',
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
				//note: '',
				details: [
					{score: 1, text: 'Uses inaccurate or irrelevant evidence (data or scientific knowledge) to explain how the design addresses the problem/constraints OR identifies an impractical redesign without explanation or supporting evidence.'},
					{score: 1.5},
					{score: 2, text: 'Uses minimal relevant evidence (data or scientific knowledge) to explain how the design addresses the problem/constraints OR identifies a potential redesign with limited explanation and supporting evidence.'},
					{score: 2.5},
					{score: 3, text: 'Uses relevant and adequate amounts of evidence (data or scientific knowledge) to explain how the design addresses the problem/constraints AND uses the evidence to explain an appropriate redesign of the original model or prototype.'},
					{score: 3.5},
					{score: 4, text: 'Uses detailed and multiple sources of evidence (data or scientific knowledge) to evaluate how well the design addresses the problem as well as constraints AND provides a detailed rationale with supporting data for the appropriate redesign of the original model or prototype.'}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Argumentation Task - Grades 9-12

	{
		id: 'LDC_Arg_9-12',
		name: 'Argumentation Task - Grades 9-12',
		link: 'https://docs.google.com/spreadsheets/d/1Z-VNlzkUAZuVW-lpxDpubS2LEtiPUvBmMiPozlPjGwk/edit#gid=799555170',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Controlling Idea',
				details: [
					{score: 1, text: 'Makes a general claim with an unclear focus. '},
					{score: 1.5},
					{score: 2, text: 'Establishes a clear claim that addresses the prompt, with an uneven focus. '},
					{score: 2.5},
					{score: 3, text: 'Establishes and maintains a clear, specific, and credible claim that addresses all aspects of the prompt.'},
					{score: 3.5},
					{score: 4, text: 'Establishes and maintains a precise, substantive claim that addresses all aspects of the prompt. Acknowledges limitations and/or the complexity of the issue or topic. '}
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
					{score: 1, text: 'Explanation of ideas and source material is irrelevant, incomplete, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Explains ideas and source material to support the argument, with some incomplete reasoning or explanations. '},
					{score: 2.5},
					{score: 3, text: 'Accurately explains ideas and source material and how they support the argument. '},
					{score: 3.5},
					{score: 4, text: 'Thoroughly and accurately explains ideas and source material, using logical reasoning to support and develop the argument. '}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Lacks an evident structure. Makes unclear connections among claims, reasons, and/or evidence. '},
					{score: 1.5},
					{score: 2, text: 'Groups ideas and uses transitions to develop the argument, with some lapses in coherence or organization.'},
					{score: 2.5},
					{score: 3, text: 'Groups and sequences ideas to develop a cohesive argument. Uses transitions to clarify the relationships among claim(s), reasons, and evidence. '},
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
				note: 'When applicable.',
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
	// Informational/Explanatory Task - Grades 6-8

	{
		id: 'LDC_Inf-Exp_6-8',
		name: 'Informational/Explanatory Task - Grades 6-8',
		link: 'https://docs.google.com/spreadsheets/d/1Z-VNlzkUAZuVW-lpxDpubS2LEtiPUvBmMiPozlPjGwk/edit#gid=0',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Controlling Idea',
				details: [
					{score: 1, text: 'Presents an unclear or unfocused controlling idea.'},
					{score: 1.5},
					{score: 2, text: 'Presents a general controlling idea that addresses the prompt, with an uneven focus. '},
					{score: 2.5},
					{score: 3, text: 'Presents and maintains a clear controlling idea that addresses all aspects of the prompt.'},
					{score: 3.5},
					{score: 4, text: 'Presents and maintains a clear and specific controlling idea that addresses all aspects of the prompt and takes into account the complexity of the topic.'}
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
					{score: 1, text: 'Explanation of ideas and source material is irrelevant, incomplete, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Explanation of ideas and source material is minimal or contains minor errors. '},
					{score: 2.5},
					{score: 3, text: 'Accurately explains ideas and source material and how they support the controlling idea. '},
					{score: 3.5},
					{score: 4, text: 'Thoroughly and accurately explains ideas and source material, using reasoning to support and develop the controlling idea.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Lacks an evident structure. Makes unclear connections among ideas, concepts, and information.'},
					{score: 1.5},
					{score: 2, text: 'Groups ideas and uses some transitions to connect ideas, with some lapses in coherence or organization.'},
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
				note: 'When applicable.',
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially.'},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the explanation.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the explanation.'}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Argumentation Task - Grades 6-8

	{
		id: 'LDC_Arg_6-8',
		name: 'Argumentation Task - Grades 6-8',
		link: 'https://docs.google.com/spreadsheets/d/1Z-VNlzkUAZuVW-lpxDpubS2LEtiPUvBmMiPozlPjGwk/edit#gid=1312958870',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Controlling Idea',
				details: [
					{score: 1, text: 'Makes an unclear or unfocused claim. '},
					{score: 1.5},
					{score: 2, text: 'Makes a general claim that addresses the prompt, with an uneven focus.'},
					{score: 2.5},
					{score: 3, text: 'Establishes and maintains a clear claim that addresses all aspects of the prompt.'},
					{score: 3.5},
					{score: 4, text: 'Establishes and maintains a clear, specific, and credible claim that addresses all aspects of the prompt.'}
				]
			},
			{
				name: 'Selection & Citation of Evidence',
				details: [
					{score: 1, text: 'Includes minimal details from sources.  Sources are used without citation.'},
					{score: 1.5},
					{score: 2, text: 'Includes details, examples, and/or quotations from sources that are relevant to the claim. Inconsistently cites sources.'},
					{score: 2.5},
					{score: 3, text: 'Includes details, examples, and/or quotations from sources that are relevant to the claim and supporting ideas.\nConsistently cites sources with minor formatting errors.'},
					{score: 3.5},
					{score: 4, text: 'Includes well-chosen details, examples, and/or quotations from sources that support the claim and supporting ideas.  Consistently cites sources using appropriate format.'}
				]
			},
			{
				name: 'Development / Explanation of Sources',
				details: [
					{score: 1, text: 'Explanation of ideas and source material is irrelevant, incomplete, or inaccurate.'},
					{score: 1.5},
					{score: 2, text: 'Explanation of ideas and source material is minimal or contains minor errors.'},
					{score: 2.5},
					{score: 3, text: 'Accurately explains ideas and source material and how they support the argument.'},
					{score: 3.5},
					{score: 4, text: 'Thoroughly and accurately explains ideas and source material, using reasoning to support and develop the argument.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Lacks an evident structure. Makes unclear connections among claim, reasons, and evidence.'},
					{score: 1.5},
					{score: 2, text: 'Groups ideas and uses some transitions to connect ideas, with some lapses in coherence or organization.'},
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
				note: 'When applicable.',
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially. '},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the argument.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the argument. '}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Informational/Explanatory Task - Grades 4-5

	{
		id: 'LDC_Inf-Exp_4-5',
		name: 'Informational/Explanatory Task - Grades 4-5',
		link: 'https://docs.google.com/spreadsheets/d/1Z-VNlzkUAZuVW-lpxDpubS2LEtiPUvBmMiPozlPjGwk/edit#gid=409660819',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Topic / Main Idea',
				details: [
					{score: 1, text: 'Introduces the topic and an unclear main idea.'},
					{score: 1.5},
					{score: 2, text: 'Introduces the topic and a clear main idea with an inconsistent focus on the main idea.'},
					{score: 2.5},
					{score: 3, text: 'Introduces the topic and a clear main idea with a consistent focus on the main idea.'},
					{score: 3.5},
					{score: 4, text: 'Introduces the topic and a clear and specific main idea with a consistent focus on the main idea.'}
				]
			},
			{
				name: 'Use of Sources',
				details: [
					{score: 1, text: 'Includes few relevant details from sources.'},
					{score: 1.5},
					{score: 2, text: 'Summarizes, paraphrases, or quotes relevant details from sources with minor inaccurate or incomplete elements.\nIncludes a list of sources.'},
					{score: 2.5},
					{score: 3, text: 'Summarizes, paraphrases, or quotes relevant details from sources.\nIncludes a list of sources.'},
					{score: 3.5},
					{score: 4, text: 'Summarizes, paraphrases, or quotes well-chosen details from sources.\nIncludes a complete list of sources.'}
				]
			},
			{
				name: 'Development',
				details: [
					{score: 1, text: 'Includes minimal facts, definitions, details, and/or quotations related to the main idea, or that are loosely related to the main idea.'},
					{score: 1.5},
					{score: 2, text: 'Includes relevant facts, definitions, concrete details, and/or quotations (as well as illustrations or multimedia when appropriate).'},
					{score: 2.5},
					{score: 3, text: 'Includes relevant facts, definitions, concrete details, and/or quotations (as well as illustrations or multimedia when appropriate) that help develop the main idea.'},
					{score: 3.5},
					{score: 4, text: 'Explains facts, definitions, concrete details, and/or quotations (as well as illustrations or multimedia when appropriate) that develop the main idea.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Sequence of sentences or sections lacks a logical order or an evident beginning, middle, and end.'},
					{score: 1.5},
					{score: 2, text: 'Sequences sentences and groups related information in paragraphs or sections, with a clear beginning, middle and end.\nUses transitions (e.g., another, for example, also, because) to connect information.'},
					{score: 2.5},
					{score: 3, text: 'Sequences sentences and groups related information logically in paragraphs or sections that introduce and develop the main idea, and provide a conclusion.\nUses transitions (e.g., another, for example, also, because, in contrast, especially) to connect or compare information.'},
					{score: 3.5},
					{score: 4, text: 'Sequences sentences and groups related information logically in paragraphs or sections that introduce and develop the main idea, and provide a unifying conclusion.\nConsistently and precisely uses transitions (e.g., another, for example, also, because, in contrast, especially) to connect or compare information.'}
				]
			},
			{
				name: 'Conventions',
				details: [
					{score: 1, text: 'Major errors in standard English conventions appropriate to the grade level interfere with the clarity of the writing.\nLanguage use is inappropriate.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions appropriate to the grade level sometimes interfere with the clarity of the writing.\nUses language and domain-specific vocabulary with minor errors.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions appropriate to the grade level. Minor errors, while noticeable, do not interfere with the clarity of the writing.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions appropriate to the grade level, with few errors. Attempts to use untaught conventions, appropriate to grade level.'}
				]
			},
			{
				name: 'Additional Task Demands',
				note: 'When applicable.',
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially.'},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the explanation.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the explanation.'}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Opinion Task - Grades 4-5

	{
		id: 'LDC_Opi_4-5',
		name: 'Opinion Task - Grades 4-5',
		link: 'https://docs.google.com/spreadsheets/d/1Z-VNlzkUAZuVW-lpxDpubS2LEtiPUvBmMiPozlPjGwk/edit#gid=125909517',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Topic / Opinion',
				details: [
					{score: 1, text: 'Introduces the topic and an unclear opinion.'},
					{score: 1.5},
					{score: 2, text: 'Introduces the topic and a clear opinion on the topic with an inconsistent focus on the opinion.'},
					{score: 2.5},
					{score: 3, text: 'Introduces the topic and a clear opinion on the topic with a consistent focus on the opinion.'},
					{score: 3.5},
					{score: 4, text: 'Introduces the topic and a clear and specific opinion with a consistent focus on the opinion.'}
				]
			},
			{
				name: 'Use of Sources',
				details: [
					{score: 1, text: 'Includes few relevant details from sources.'},
					{score: 1.5},
					{score: 2, text: '"Summarizes, paraphrases, or quotes relevant details from sources with minor inaccurate or incomplete elements.\nIncludes a list of sources.'},
					{score: 2.5},
					{score: 3, text: '"Summarizes, paraphrases, or quotes relevant details from sources.\nIncludes a list of sources.'},
					{score: 3.5},
					{score: 4, text: '"Summarizes, paraphrases, or quotes well-chosen details from sources.\nIncludes a complete list of sources.'}
				]
			},
			{
				name: 'Development',
				details: [
					{score: 1, text: 'Includes reasons with minimal facts and details.'},
					{score: 1.5},
					{score: 2, text: 'Includes reasons and some related facts and details.'},
					{score: 2.5},
					{score: 3, text: 'Includes reasons with relevant facts and details that support the opinion.'},
					{score: 3.5},
					{score: 4, text: 'Explains reasons, facts and details that support the opinion.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Sequence of sentences or sections lacks a logical order or an evident beginning, middle, and end.'},
					{score: 1.5},
					{score: 2, text: 'Sequences sentences and groups related information in paragraphs or sections, with a clear beginning, middle and end.\nUses linking words/phrases (e.g., for instance, in order to, in addition) to connect opinion and reasons.'},
					{score: 2.5},
					{score: 3, text: 'Sequences sentences and groups related information logically in paragraphs or sections that introduce the topic, state an opinion, supply logically ordered reasons, and provide a conclusion.\nUses linking words/phrases (e.g., consequently, specifically) to connect opinion and reasons.'},
					{score: 3.5},
					{score: 4, text: 'Sequences sentences and groups related information logically in paragraphs or sections that introduce the topic, state an opinion, supply logically ordered reasons, and provide a unifying conclusion.Consistently and precisely uses linking words/phrases (e.g., consequently, specifically) to connect opinion and reasons.'}
				]
			},
			{
				name: 'Conventions',
				details: [
					{score: 1, text: 'Major errors in standard English conventions appropriate to the grade level interfere with the clarity of the writing.\nLanguage use is inappropriate.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions appropriate to the grade level sometimes interfere with the clarity of the writing.\nUses language and domain-specific vocabulary with minor errors.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions appropriate to the grade level. Minor errors, while noticeable, do not interfere with the clarity of the writing.\nUses language and domain-specific vocabulary precisely.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions appropriate to the grade level, with few errors. Attempts to use untaught conventions, appropriate to grade level.\nUses varied language and domain-specific vocabulary precisely.'}
				]
			},
			{
				name: 'Additional Task Demands',
				note: 'When applicable.',
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially. '},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the opinion.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the opinion. '}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Informational/Explanatory Task - Grade 3

	{
		id: 'LDC_Inf-Exp_3',
		name: 'Informational/Explanatory Task - Grade 3',
		link: 'https://docs.google.com/spreadsheets/d/1Z-VNlzkUAZuVW-lpxDpubS2LEtiPUvBmMiPozlPjGwk/edit#gid=353430038',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Topic / Main Idea',
				details: [
					{score: 1, text: 'Response is off-topic or	topic/main idea is unclear.'},
					{score: 1.5},
					{score: 2, text: 'Introduces the topic and a general main idea, with an inconsistent focus on the main idea.'},
					{score: 2.5},
					{score: 3, text: 'Introduces the topic and a clear main idea, maintaining a focus on the main idea.'},
					{score: 3.5},
					{score: 4, text: 'Introduces the topic and a specific main idea, maintaining a consistent focus on the main idea.'}
				]
			},
			{
				name: 'Use of Sources',
				details: [
					{score: 1, text: 'Includes no details from sources related to the topic or prompt.'},
					{score: 1.5},
					{score: 2, text: 'Includes few details from sources related to the topic or prompt.'},
					{score: 2.5},
					{score: 3, text: 'Includes details from sources related to the topic and prompt.'},
					{score: 3.5},
					{score: 4, text: 'Includes well-chosen details from sources related to the topic and prompt.'}
				]
			},
			{
				name: 'Development',
				details: [
					{score: 1, text: 'Includes facts, definitions and/or details loosely related to the topic.'},
					{score: 1.5},
					{score: 2, text: 'Includes facts, definitions, and/or details (as well as illustrations, if appropriate) related to the topic with minor inaccurate or incomplete elements.'},
					{score: 2.5},
					{score: 3, text: 'Includes relevant facts, definitions, and/or details (as well as illustrations, if appropriate) that help develop the topic.'},
					{score: 3.5},
					{score: 4, text: 'Explains relevant facts, definitions, quotations, and/or details (as well as illustrations, if appropriate) that develop the main idea.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Sentences are out of logical order or lack an evident structure.'},
					{score: 1.5},
					{score: 2, text: 'Sequences sentences to introduce the topic, develop points, and provide a concluding statement or section.'},
					{score: 2.5},
					{score: 3, text: 'Sequences sentences and groups related information to introduce the topic, develop points, and provide a concluding statement or section.\nUses linking words/ phrases (e.g., also, another, and, more, but) to connect ideas.'},
					{score: 3.5},
					{score: 4, text: 'Sequences sentences and groups related information in paragraphs or sections that introduce the topic, develop points, and provide a concluding statement or section.\nConsistently uses linking words/phrases (e.g., also, another, and, more, but) to connect ideas.'}
				]
			},
			{
				name: 'Conventions (General)',
				details: [
					{score: 1, text: 'Major errors in standard English conventions appropriate to the grade level interfere with the clarity of the writing.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions appropriate to the grade level sometimes interfere with the clarity of the writing.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions appropriate to the grade level. Minor errors, while noticeable, do not interfere with the clarity of the writing.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions appropriate to the grade level, with few errors. Attempts to use untaught conventions, appropriate to grade level.'}
				]
			},
			{
				name: 'Conventions (Grade 3 Examples)',
				details: [
					{score: 1, text: 'Uses simplistic word choice (e.g., plural and grade-level words) with some errors.\nUses capital letters inconsistently.\nUses commas, apostrophes rarely.'},
					{score: 1.5},
					{score: 2, text: 'Uses simple sentences and simple word choice. (e.g., plural and grade-level words)\nCapitalizes first word in a sentence, “I,” and some proper nouns consistently.\nUses commas, apostrophes, possessive nouns and contractions inconsistently.'},
					{score: 2.5},
					{score: 3, text: 'Uses simple and compound sentences with some errors.\nUses grade-level appropriate vocabulary words.\nCapitalizes proper nouns, titles and sentences appropriately.\nUses commas, apostrophes, possessive nouns, and contractions.'},
					{score: 3.5},
					{score: 4, text: '"Uses simple and compound sentences.\nUses grade-level and above-grade-level vocabulary words to enhance writing.\nUses capital letters and apostrophes, possessive nouns, contractions consistently.\nAttempts to use quotations or plural possessive.'}
				]
			},
			{
				name: 'Additional Task Demands',
				note: 'When applicable.',
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially.'},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the explanation.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the explanation.'}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Opinion Task - Grade 3

	{
		id: 'LDC_Opi_3',
		name: 'Opinion Task - Grade 3',
		link: 'https://docs.google.com/spreadsheets/d/1Z-VNlzkUAZuVW-lpxDpubS2LEtiPUvBmMiPozlPjGwk/edit#gid=1447437108',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Topic / Opinion',
				details: [
					{score: 1, text: 'Response is off-topic or opinion is unclear.'},
					{score: 1.5},
					{score: 2, text: 'Introduces the topic and a clear opinion, with an inconsistent focus on the opinion.'},
					{score: 2.5},
					{score: 3, text: 'Introduces the topic and a clear opinion, maintaining a focus on the opinion'},
					{score: 3.5},
					{score: 4, text: 'Introduces the topic and a clear opinion, maintaining a consistent focus on the opinion.'}
				]
			},
			{
				name: 'Use of Sources',
				details: [
					{score: 1, text: 'Includes no details from sources related to the topic or prompt.'},
					{score: 1.5},
					{score: 2, text: 'Includes few details from sources related to the topic or prompt.'},
					{score: 2.5},
					{score: 3, text: 'Includes details from sources related to the topic and prompt.'},
					{score: 3.5},
					{score: 4, text: 'Includes well-chosen details from sources related to the topic and prompt.'}
				]
			},
			{
				name: 'Development',
				details: [
					{score: 1, text: 'Repeats opinion with no reasons.'},
					{score: 1.5},
					{score: 2, text: 'Includes minimal reasons related to the opinion, or not all reasons are relevant or supportive.'},
					{score: 2.5},
					{score: 3, text: 'Includes relevant reasons that support the opinion.'},
					{score: 3.5},
					{score: 4, text: 'Explains relevant reasons and details that support the opinion.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Sentences are out of logical order or lack an evident structure.'},
					{score: 1.5},
					{score: 2, text: 'Sequences sentences to state an opinion, supply reasons for the opinion, and provide a concluding statement.\nUses simple linking words/phrases (e.g., because, and, also) to connect opinion and reasons.'},
					{score: 2.5},
					{score: 3, text: 'Sequences sentences to introduce the topic, state an opinion, supply reasons for the opinion, and provide a concluding statement or section.\nUses linking words/phrases (e.g., because, therefore, since, for example) to connect opinion and reasons.'},
					{score: 3.5},
					{score: 4, text: 'Sequences sentences and organizes writing in paragraphs or sections that introduce the topic, state an opinion, supply reasons for the opinion, and provide a concluding statement or section.\nConsistently uses linking words/phrases (e.g., because, therefore, since, for example) to connect opinion and reasons.'}
				]
			},
			{
				name: 'Conventions (General)',
				details: [
					{score: 1, text: 'Major errors in standard English conventions appropriate to the grade level interfere with the clarity of the writing.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions appropriate to the grade level sometimes interfere with the clarity of the writing.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions appropriate to the grade level. Minor errors, while noticeable, do not interfere with the clarity of the writing.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions appropriate to the grade level, with few errors. Attempts to use untaught conventions, appropriate to grade level.'}
				]
			},
			{
				name: 'Conventions (Grade 3 Examples)',
				details: [
					{score: 1, text: 'Uses simplistic word choice (e.g., plural and grade-level words) with some errors.\nUses capital letters inconsistently.\nUses commas, apostrophes rarely.'},
					{score: 1.5},
					{score: 2, text: 'Uses simple sentences and simple word choice. (e.g., plural and grade-level words)\nCapitalizes first word in a sentence, “I,” and some proper nouns consistently.\nUses commas, apostrophes, possessive nouns and contractions inconsistently.'},
					{score: 2.5},
					{score: 3, text: 'Uses simple and compound sentences with some errors.\nUses grade-level appropriate vocabulary words.\nCapitalizes proper nouns, titles and sentences appropriately.\nUses commas, apostrophes, possessive nouns, and contractions.'},
					{score: 3.5},
					{score: 4, text: 'Uses simple and compound sentences.\nUses grade-level and above-grade-level vocabulary words to enhance writing.\nUses capital letters and apostrophes, possessive nouns, contractions consistently.\nAttempts to use quotations or plural possessive.'}
				]
			},
			{
				name: 'Additional Task Demands',
				note: 'When applicable.',
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially. '},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the opinion.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the opinion. '}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Informational/Explanatory Task - Grade 2

	{
		id: 'LDC_Inf-Exp_2',
		name: 'Informational/Explanatory Task - Grade 2',
		link: 'https://docs.google.com/spreadsheets/d/1Z-VNlzkUAZuVW-lpxDpubS2LEtiPUvBmMiPozlPjGwk/edit#gid=892881694',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Topic / Main Idea',
				details: [
					{score: 1, text: 'Response is off-topic or topic/main idea is unclear.'},
					{score: 1.5},
					{score: 2, text: 'Introduces the topic and a general main idea, with an inconsistent focus on the main idea.'},
					{score: 2.5},
					{score: 3, text: 'Introduces the topic and a clear main idea, maintaining a focus on the main idea.'},
					{score: 3.5},
					{score: 4, text: 'Introduces the topic and a specific main idea, maintaining a consistent focus on the main idea.'}
				]
			},
			{
				name: 'Use of Sources',
				details: [
					{score: 1, text: 'Includes no details from sources related to the topic or prompt.'},
					{score: 1.5},
					{score: 2, text: 'Includes few details from sources related to the topic or prompt.'},
					{score: 2.5},
					{score: 3, text: 'Includes details from sources related to the topic and prompt.'},
					{score: 3.5},
					{score: 4, text: 'Includes well-chosen details from sources related to the topic and prompt.'}
				]
			},
			{
				name: 'Development',
				details: [
					{score: 1, text: 'Includes facts, definitions and/or details loosely related to the topic.'},
					{score: 1.5},
					{score: 2, text: 'Includes facts, definitions, and/or details (as well as illustrations, if appropriate) related to the topic with minor inaccurate or incomplete elements.'},
					{score: 2.5},
					{score: 3, text: 'Includes relevant facts, definitions, and/or details (as well as illustrations, if appropriate) that help develop the topic.'},
					{score: 3.5},
					{score: 4, text: 'Explains relevant facts, definitions, quotations, and/or details (as well as illustrations, if appropriate) that develop the main idea.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Sentences are out of logical order or lack an evident structure.'},
					{score: 1.5},
					{score: 2, text: 'Sequences sentences to introduce the topic, develop points, and provide a concluding statement or section.'},
					{score: 2.5},
					{score: 3, text: 'Sequences sentences and groups related information to introduce the topic, develop points, and provide a concluding statement or section.\nUses linking words/ phrases (e.g., also, another, and, more, but) to connect ideas.'},
					{score: 3.5},
					{score: 4, text: 'Sequences sentences and groups related information in paragraphs or sections that introduce the topic, develop points, and provide a concluding statement or section.\nConsistently uses linking words/phrases (e.g., also, another, and, more, but) to connect ideas.'}
				]
			},
			{
				name: 'Conventions (General)',
				details: [
					{score: 1, text: 'Major errors in standard English conventions appropriate to the grade level interfere with the clarity of the writing.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions appropriate to the grade level sometimes interfere with the clarity of the writing.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions appropriate to the grade level. Minor errors, while noticeable, do not interfere with the clarity of the writing.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions appropriate to the grade level, with few errors. Attempts to use untaught conventions, appropriate to grade level.'}
				]
			},
			{
				name: 'Conventions (Grade 2 Examples)',
				details: [
					{score: 1, text: 'Spells many words incorrectly and phonetically.\nUses capital letters inconsistently.\nUses commas, apostrophes, and end punctuation rarely.'},
					{score: 1.5},
					{score: 2, text: 'Spells some frequent-use words (e.g., plural nouns) incorrectly and phonetically.\nCapitalizes first word in a sentence, “I,” proper nouns inconsistently.\nUses commas, apostrophes, and end punctuation inconsistently.'},
					{score: 2.5},
					{score: 3, text: 'Spells most regular frequent-use words correctly. (e.g., plural nouns)\nCapitalizes first word in a sentence, “I,” and some proper nouns consistently.\nUses commas, apostrophes, and end punctuation consistently.'},
					{score: 3.5},
					{score: 4, text: 'Spells most regular frequent-use words correctly and spells irregular frequent-use words conventionally.\nCapitalizes correctly and consistently with no errors: first word in a sentence, “I,” proper nouns.\nUses commas, apostrophes, and end punctuation consistently.'}
				]
			},
			{
				name: 'Additional Task Demands',
				note: 'When applicable.',
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially.'},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the explanation.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the explanation.'}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Opinion Task - Grade 2

	{
		id: 'LDC_Opi_2',
		name: 'Opinion Task - Grade 2',
		link: 'https://docs.google.com/spreadsheets/d/1Z-VNlzkUAZuVW-lpxDpubS2LEtiPUvBmMiPozlPjGwk/edit#gid=862194259',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Topic / Opinion',
				details: [
					{score: 1, text: 'Response is off-topic or opinion is unclear.'},
					{score: 1.5},
					{score: 2, text: 'Introduces the topic and a clear opinion, with an inconsistent focus on the opinion.'},
					{score: 2.5},
					{score: 3, text: 'Introduces the topic and a clear opinion, maintaining a focus on the opinion.'},
					{score: 3.5},
					{score: 4, text: 'Introduces the topic and a clear opinion, maintaining a consistent focus on the opinion.'}
				]
			},
			{
				name: 'Use of Sources',
				details: [
					{score: 1, text: 'Includes no details from sources related to the topic or prompt.'},
					{score: 1.5},
					{score: 2, text: 'Includes few details from sources related to the topic or prompt.'},
					{score: 2.5},
					{score: 3, text: 'Includes details from sources related to the topic and prompt.'},
					{score: 3.5},
					{score: 4, text: 'Includes well-chosen details from sources related to the topic and prompt.'}
				]
			},
			{
				name: 'Development',
				details: [
					{score: 1, text: 'Repeats opinion with no reasons.'},
					{score: 1.5},
					{score: 2, text: 'Includes minimal reasons related to the opinion, or not all reasons are relevant or supportive.'},
					{score: 2.5},
					{score: 3, text: 'Includes relevant reasons that support the opinion.'},
					{score: 3.5},
					{score: 4, text: 'Explains relevant reasons and details that support the opinion.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Sentences are out of logical order or lack an evident structure.'},
					{score: 1.5},
					{score: 2, text: 'Sequences sentences to state an opinion, supply reasons for the opinion, and provide a concluding statement.\nUses simple linking words/phrases (e.g., because, and, also) to connect opinion and reasons.'},
					{score: 2.5},
					{score: 3, text: 'Sequences sentences to introduce the topic, state an opinion, supply reasons for the opinion, and provide a concluding statement or section.\nUses linking words/phrases (e.g., because, therefore, since, for example) to connect opinion and reasons.'},
					{score: 3.5},
					{score: 4, text: 'Sequences sentences and organizes writing in paragraphs or sections that introduce the topic, state an opinion, supply reasons for the opinion, and provide a concluding statement or section.\nConsistently uses linking words/phrases (e.g., because, therefore, since, for example) to connect opinion and reasons.'}
				]
			},
			{
				name: 'Conventions (General)',
				details: [
					{score: 1, text: 'Major errors in standard English conventions appropriate to the grade level interfere with the clarity of the writing.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions appropriate to the grade level sometimes interfere with the clarity of the writing.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions appropriate to the grade level. Minor errors, while noticeable, do not interfere with the clarity of the writing.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions appropriate to the grade level, with few errors. Attempts to use untaught conventions, appropriate to grade level.'}
				]
			},
			{
				name: 'Conventions (Grade 2 Examples)',
				details: [
					{score: 1, text: 'Spells many words incorrectly and phonetically.\nUses capital letters inconsistently.\nUses commas, apostrophes, and end punctuation rarely.'},
					{score: 1.5},
					{score: 2, text: 'Spells some frequent-use words (e.g., plural nouns) incorrectly and phonetically.\nCapitalizes first word in a sentence, “I,” proper nouns inconsistently.\nUses commas, apostrophes, and end punctuation inconsistently.'},
					{score: 2.5},
					{score: 3, text: 'Spells most regular frequent-use words correctly. (e.g., plural nouns)\nCapitalizes first word in a sentence, “I,” and some proper nouns consistently.\nUses commas, apostrophes, and end punctuation consistently.'},
					{score: 3.5},
					{score: 4, text: 'Spells most regular frequent-use words correctly and spells irregular frequent-use words conventionally.\nCapitalizes correctly and consistently with no errors: first word in a sentence, “I,” proper nouns.\nUses commas, apostrophes, and end punctuation consistently.'}
				]
			},
			{
				name: 'Additional Task Demands',
				note: 'When applicable.',
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially. '},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the opinion.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the opinion. '}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Informational/Explanatory Task - Grade 1

	{
		id: 'LDC_Inf-Exp_1',
		name: 'Informational/Explanatory Task - Grade 1',
		link: 'https://docs.google.com/spreadsheets/d/1Z-VNlzkUAZuVW-lpxDpubS2LEtiPUvBmMiPozlPjGwk/edit#gid=1455753249',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Topic / Main Idea',
				details: [
					{score: 1, text: 'Response does not address the prompt, does not name a topic, or is mostly off-topic.'},
					{score: 1.5},
					{score: 2, text: 'Names a topic; response is loosely related to the prompt and the topic, or is partially off-topic.'},
					{score: 2.5},
					{score: 3, text: 'Names a topic; response addresses the prompt and is related to the topic.'},
					{score: 3.5},
					{score: 4, text: 'Names a clear topic; response addresses the prompt and stays focused on the topic.'}
				]
			},
			{
				name: 'Use of Sources',
				details: [
					{score: 1, text: 'Includes no information from sources.'},
					{score: 1.5},
					{score: 2, text: 'Includes information from sources loosely related to topic.'},
					{score: 2.5},
					{score: 3, text: 'Includes information from sources related to the topic.'},
					{score: 3.5},
					{score: 4, text: 'Includes detailed information from sources related to the topic.'}
				]
			},
			{
				name: 'Development',
				details: [
					{score: 1, text: 'Lists no facts or facts unrelated to the topic.'},
					{score: 1.5},
					{score: 2, text: 'Lists facts loosely related to the topic.'},
					{score: 2.5},
					{score: 3, text: 'Lists facts related to the topic.'},
					{score: 3.5},
					{score: 4, text: 'Lists and elaborates on some facts related to the topic.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Sentences have no evident relationship with each other.'},
					{score: 1.5},
					{score: 2, text: 'Sentences are related to each other.'},
					{score: 2.5},
					{score: 3, text: 'Sentences are related to each other; provides a sense of closure.'},
					{score: 3.5},
					{score: 4, text: 'Sequences sentences with a beginning, middle, and end; provides a sense of closure.'}
				]
			},
			{
				name: 'Conventions (General)',
				details: [
					{score: 1, text: 'Major errors in standard English conventions appropriate to the grade level interfere with the clarity of the writing.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions appropriate to the grade level sometimes interfere with the clarity of the writing.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions appropriate to the grade level. Minor errors, while noticeable, do not interfere with the clarity of the writing.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions appropriate to the grade level, with few errors. Attempts to use untaught conventions, appropriate to grade level.'}
				]
			},
			{
				name: 'Conventions (Grade 1 Examples)',
				details: [
					{score: 1, text: 'Most words spelled phonetically.\nUse of capital letters inconsistent.\nAppropriate spacing between words.\nLittle to no use of punctuation.'},
					{score: 1.5},
					{score: 2, text: 'Most frequent-use words spelled correctly.\nSome words spelled phonetically.\nEnd punctuation used inconsistently.\nFirst word in each sentence capitalized.\nPronoun “I” capitalized.'},
					{score: 2.5},
					{score: 3, text: 'Conventional spelling of frequent-use words.\nPhonetic spelling of new words.\nConsistent use of end punctuation.\nConsistent spacing of words and sentences.\nDates and names capitalized.\nUse of commas in dates and series of words.'},
					{score: 3.5},
					{score: 4, text: 'Holidays, product names and geographic names capitalized.\nUse of apostrophe to form contractions.\nConventional spelling of new words.'}
				]
			},
			{
				name: 'Additional Task Demands',
				note: 'When applicable.',
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially.'},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the explanation.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the explanation.'}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Opinion Task - Grade 1

	{
		id: 'LDC_Opi_1',
		name: 'Opinion Task - Grade 1',
		link: 'https://docs.google.com/spreadsheets/d/1Z-VNlzkUAZuVW-lpxDpubS2LEtiPUvBmMiPozlPjGwk/edit#gid=1918190867',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Topic / Opinion',
				details: [
					{score: 1, text: 'States an unclear opinion or an opinion that is off-topic.'},
					{score: 1.5},
					{score: 2, text: 'States an opinion that is loosely related to the prompt or the topic, or is partially off-topic.'},
					{score: 2.5},
					{score: 3, text: 'States an opinion that addresses the prompt and is related to the topic.'},
					{score: 3.5},
					{score: 4, text: 'States a clear opinion that addresses the prompt and stays focused on the topic.'}
				]
			},
			{
				name: 'Use of Sources',
				details: [
					{score: 1, text: 'Includes no information from sources.'},
					{score: 1.5},
					{score: 2, text: 'Includes information from sources loosely related to topic.'},
					{score: 2.5},
					{score: 3, text: 'Includes information from sources related to the topic.'},
					{score: 3.5},
					{score: 4, text: 'Includes detailed information from sources related to the topic.'}
				]
			},
			{
				name: 'Development',
				details: [
					{score: 1, text: 'Repeats the opinion with no reasons.'},
					{score: 1.5},
					{score: 2, text: 'Lists a reason that is loosely related to the opinion.'},
					{score: 2.5},
					{score: 3, text: 'Lists a reason that supports the opinion.'},
					{score: 3.5},
					{score: 4, text: 'Lists and elaborates on a reason that supports the opinion.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Sentences have no evident relationship with each other.'},
					{score: 1.5},
					{score: 2, text: 'Sentences are related to each other.'},
					{score: 2.5},
					{score: 3, text: 'Sentences are related to each other; provides a sense of closure.'},
					{score: 3.5},
					{score: 4, text: 'Sequences sentences with a beginning, middle, and end; provides a sense of closure.'}
				]
			},
			{
				name: 'Conventions (General)',
				details: [
					{score: 1, text: 'Major errors in standard English conventions appropriate to the grade level interfere with the clarity of the writing.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions appropriate to the grade level sometimes interfere with the clarity of the writing.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions appropriate to the grade level. Minor errors, while noticeable, do not interfere with the clarity of the writing.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions appropriate to the grade level, with few errors. Attempts to use untaught conventions, appropriate to grade level.'}
				]
			},
			{
				name: 'Conventions (Grade 1 Examples)',
				details: [
					{score: 1, text: 'Most words spelled phonetically.\nUse of capital letters inconsistent.\nAppropriate spacing between words.\nLittle to no use of punctuation.'},
					{score: 1.5},
					{score: 2, text: 'Most frequent-use words spelled correctly.\nSome words spelled phonetically.\nEnd punctuation used inconsistently.\nFirst word in each sentence capitalized.\nPronoun “I” capitalized.'},
					{score: 2.5},
					{score: 3, text: 'Conventional spelling of frequent-use words.\nPhonetic spelling of new words.\nConsistent use of end punctuation.\nConsistent spacing of words and sentences.\nDates and names capitalized.\nUse of commas in dates and series of words.'},
					{score: 3.5},
					{score: 4, text: 'Holidays, product names and geographic names capitalized.\nUse of apostrophe to form contractions.\nConventional spelling of new words.'}
				]
			},
			{
				name: 'Additional Task Demands',
				note: 'When applicable.',
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially. '},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the opinion.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the opinion.'}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Informational/Explanatory Task - Kindergarten

	{
		id: 'LDC_Inf-Exp_K',
		name: 'Informational/Explanatory Task - Kindergarten',
		link: 'https://docs.google.com/spreadsheets/d/1Z-VNlzkUAZuVW-lpxDpubS2LEtiPUvBmMiPozlPjGwk/edit#gid=1778330188',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Topic / Main Idea',
				details: [
					{score: 1, text: 'Topic is not named; response (drawing, dictating, and/or writing) is unrelated to the prompt.'},
					{score: 1.5},
					{score: 2, text: 'Names a topic; response (drawing, dictating, and/or writing) is loosely related to named topic and/or prompt.'},
					{score: 2.5},
					{score: 3, text: 'Names a topic; response (drawing, dictating, and/or writing) is generally related to named topic and/or prompt.'},
					{score: 3.5},
					{score: 4, text: 'Names a topic; response (drawing, dictating, and/or writing) clearly addresses the named topic and the prompt.'}
				]
			},
			{
				name: 'Use of Sources',
				details: [
					{score: 1, text: 'Even with prompting and guidance, does not recall information from sources.'},
					{score: 1.5},
					{score: 2, text: 'With prompting and guidance, recalls loosely related information from sources.'},
					{score: 2.5},
					{score: 3, text: 'With prompting and guidance, recalls relevant information from sources.'},
					{score: 3.5},
					{score: 4, text: 'With minimal guidance, recalls relevant information from sources.'}
				]
			},
			{
				name: 'Development',
				details: [
					{score: 1, text: 'Response (drawing, dictating, and/or writing) includes no details related to the topic.'},
					{score: 1.5},
					{score: 2, text: 'Response (drawing, dictating, and/or writing) includes details loosely related to the topic.'},
					{score: 2.5},
					{score: 3, text: 'Response (drawing, dictating, and/or writing) includes details generally related to the topic.'},
					{score: 3.5},
					{score: 4, text: 'Response (drawing, dictating, and/or writing) includes relevant details.'}
				]
			},
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Parts of the response (drawing, dictating, and/or writing) are unconnected.'},
					{score: 1.5},
					{score: 2, text: 'Parts of the response (drawing, dictating, and/or writing) are loosely connected.'},
					{score: 2.5},
					{score: 3, text: 'Parts of the response (drawing, dictating, and/or writing) are generally connected.'},
					{score: 3.5},
					{score: 4, text: 'All parts of the response (drawing, dictating, and/or writing) are clearly connected.'}
				]
			},
			{
				name: 'Conventions (General)',
				details: [
					{score: 1, text: 'Major errors in standard English conventions appropriate to the grade level interfere with the clarity of the writing.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions appropriate to the grade level sometimes interfere with the clarity of the writing.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions appropriate to the grade level. Minor errors, while noticeable, do not interfere with the clarity of the writing.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions appropriate to the grade level, with few errors. Attempts to use untaught conventions, appropriate to grade level.'}
				]
			},
			{
				name: 'Conventions (Kindergarten Examples)',
				details: [
					{score: 1, text: 'Many unrecognizable letters and words.\nLittle to no spacing between words.\nLittle to no use of capital letters.\nResponse shows little to no progression (top/bottom, left/right).'},
					{score: 1.5},
					{score: 2, text: 'Most words spelled phonetically.\nInconsistent use of capital letters.\nAppropriate spacing between words.\nLittle to no use of punctuation.\nResponse shows a general progression (top/bottom, left/right).'},
					{score: 2.5},
					{score: 3, text: 'Most frequent-use words spelled correctly.\nSome words spelled phonetically.\nInconsistent use of end punctuation.\nFirst word in each sentence capitalized.\nPronoun “I” capitalized.\nResponse shows a progression (top/bottom, left/right).'},
					{score: 3.5},
					{score: 4, text: 'Conventional spelling of frequent-use words.\nPhonetic spelling of new words.\nConsistent use of end punctuation.\nConsistent spacing of words and sentences.\nAttempts to use commas and pronouns.\nResponse shows a clear progression. (top/bottom, left/right)'}
				]
			},
			{
				name: 'Additional Task Demands',
				note: 'When applicable.',
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially.'},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the explanation.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the explanation.'}
				]
			}
		]
	},

	// -----------------------------------------------------------------------------------------------------------------
	// Opinion Task - Kindergarten

	{
		id: 'LDC_Opi_K',
		name: 'Opinion Task - Kindergarten',
		link: 'https://docs.google.com/spreadsheets/d/1Z-VNlzkUAZuVW-lpxDpubS2LEtiPUvBmMiPozlPjGwk/edit#gid=502616277',
		headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
		fields: [
			{
				name: 'Topic / Opinion',
				details: [
					{score: 1, text: 'States an unclear opinion or an opinion that is unrelated to the prompt.'},
					{score: 1.5},
					{score: 2, text: 'States an opinion (through drawing, dictating, and/or writing) that is loosely related to the prompt and/or topic, or is partially off-topic.'},
					{score: 2.5},
					{score: 3, text: 'States an opinion (through drawing, dictating, and/or writing) that is generally related to the prompt and/or topic.'},
					{score: 3.5},
					{score: 4, text: 'States an opinion (through drawing, dictating, and/or writing) that is relevant to the prompt and the topic.'}
				]
			},
			{
				name: 'Use of Sources',
				details: [
					{score: 1, text: 'Even with prompting and guidance, does not recall information from sources.'},
					{score: 1.5},
					{score: 2, text: 'With prompting and guidance, recalls loosely related information from sources.'},
					{score: 2.5},
					{score: 3, text: 'With prompting and guidance, recalls relevant information from sources.'},
					{score: 3.5},
					{score: 4, text: 'With minimal guidance, recalls relevant information from sources.'}
				]
			},
			/*{
				name: 'Development',
				details: [
					{score: 1, text: 'Parts of the response (drawing, dictating, and/or writing) are unconnected.'},
					{score: 1.5},
					{score: 2, text: ''},
					{score: 2.5},
					{score: 3, text: ''},
					{score: 3.5},
					{score: 4, text: ''}
				]
			},*/
			{
				name: 'Organization',
				details: [
					{score: 1, text: 'Parts of the response (drawing, dictating, and/or writing) are unconnected.'},
					{score: 1.5},
					{score: 2, text: 'Parts of the response (drawing, dictating, and/or writing) are loosely connected.'},
					{score: 2.5},
					{score: 3, text: 'Parts of the response (drawing, dictating, and/or writing) are generally connected.'},
					{score: 3.5},
					{score: 4, text: 'All parts of the response (drawing, dictating, and/or writing) are clearly connected.'}
				]
			},
			{
				name: 'Conventions (General)',
				details: [
					{score: 1, text: 'Major errors in standard English conventions appropriate to the grade level interfere with the clarity of the writing.'},
					{score: 1.5},
					{score: 2, text: 'Errors in standard English conventions appropriate to the grade level sometimes interfere with the clarity of the writing.'},
					{score: 2.5},
					{score: 3, text: 'Consistently applies standard English conventions appropriate to the grade level. Minor errors, while noticeable, do not interfere with the clarity of the writing.'},
					{score: 3.5},
					{score: 4, text: 'Consistently applies standard English conventions appropriate to the grade level, with few errors. Attempts to use untaught conventions, appropriate to grade level.'}
				]
			},
			{
				name: 'Conventions (Kindergarten Examples)',
				details: [
					{score: 1, text: 'Many unrecognizable letters and words.\nLittle to no spacing between words.\nLittle to no use of capital letters.\nResponse shows little to no progression. (top/bottom, left/right)'},
					{score: 1.5},
					{score: 2, text: 'Most words spelled phonetically.\nInconsistent use of capital letters.\nAppropriate spacing between words.\nLittle to no use of punctuation.\nResponse shows a general progression. (top/bottom, left/right)'},
					{score: 2.5},
					{score: 3, text: 'Most frequent-use words spelled correctly.\nSome words spelled phonetically.\nInconsistent use of end punctuation.\nFirst word in each sentence capitalized.\nPronoun “I” capitalized.\nResponse shows a progression. (top/bottom, left/right)'},
					{score: 3.5},
					{score: 4, text: 'Conventional spelling of frequent-use words.\nPhonetic spelling of new words.\nConsistent use of end punctuation.\nConsistent spacing of words and sentences.\nAttempts to use commas and pronouns.\nResponse shows a clear progression. (top/bottom, left/right)'}
				]
			},
			{
				name: 'Additional Task Demands',
				note: 'When applicable.',
				details: [
					{score: 1, text: 'Does not address additional task demands.'},
					{score: 1.5},
					{score: 2, text: 'Addresses additional task demands superficially. '},
					{score: 2.5},
					{score: 3, text: 'Addresses additional task demands adequately to support the opinion.'},
					{score: 3.5},
					{score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the opinion. '}
				]
			}
		]
	}

];