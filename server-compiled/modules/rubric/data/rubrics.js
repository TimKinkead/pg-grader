'use strict';

/**
 * Configuration file for the rubrics collection.
 */

module.exports = [

// -----------------------------------------------------------------------------------------------------------------
// Argumentation, Grades 6-8
{
	name: 'Argumentation, Grades 6-8',
	headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
	fields: [{
		name: 'Controlling Idea',
		details: [{ score: 1, text: 'Attempts to address prompt. Makes an unclear or unfocused claim.' }, { score: 1.5 }, { score: 2, text: 'Addresses prompt. Makes a general claim with an uneven focus.' }, { score: 2.5 }, { score: 3, text: 'Addresses prompt. Establishes and maintains a clear claim.' }, { score: 3.5 }, { score: 4, text: 'Addresses prompt. Establishes and maintains a clear, specific, and credible claim.' }]
	}, {
		name: 'Selection & Citation of Evidence',
		details: [{ score: 1, text: 'Includes minimal details from sources. Sources are used without citation.' }, { score: 1.5 }, { score: 2, text: 'Includes details, examples, and/or quotations from sources that are relevant to the claim. Inconsistently cites sources.' }, { score: 2.5 }, { score: 3, text: 'Includes details, examples, and/or quotations from sources that are relevant to the claim and supporting ideas. Consistently cites sources with minor formatting errors.' }, { score: 3.5 }, { score: 4, text: 'Includes well-chosen details, examples, and/or quotations from sources that support the claim and supporting ideas. Consistently cites sources using appropriate format.' }]
	}, {
		name: 'Development / Explanation of Sources',
		details: [{ score: 1, text: 'Explanation of source material is irrelevant, incomplete, or inaccurate.' }, { score: 1.5 }, { score: 2, text: 'Explanation of source material is minimal or contains minor errors.' }, { score: 2.5 }, { score: 3, text: 'Accurately explains source material and how it supports the argument.' }, { score: 3.5 }, { score: 4, text: 'Thoroughly and accurately explains source material, using reasoning to support and develop the argument.' }]
	}, {
		name: 'Organization',
		details: [{ score: 1, text: 'Lacks an evident structure. Makes unclear connections among claim, reasons, and evidence.' }, { score: 1.5 }, { score: 2, text: 'Groups ideas and uses some transitions to connect ideas, with minor lapses in coherence or organization.' }, { score: 2.5 }, { score: 3, text: 'Groups and sequences ideas to develop the controlling idea. Uses transitions to clarify the relationships among claim(s), reasons, and evidence.' }, { score: 3.5 }, { score: 4, text: 'Groups and sequences ideas logically to develop the controlling idea and create cohesion. Uses varied transitions to clarify the relationships among claim(s), reasons, and evidence.' }]
	}, {
		name: 'Conventions',
		details: [{ score: 1, text: 'Major errors in standard English conventions interfere with the clarity of the writing.\n\nLanguage or tone is inappropriate.' }, { score: 1.5 }, { score: 2, text: 'Errors in standard English conventions sometimes interfere with the clarity of the writing.\n\nUses language and tone that are sometimes inappropriate for the audience and purpose.' }, { score: 2.5 }, { score: 3, text: 'Consistently applies standard English conventions; minor errors, while noticeable, do not interfere with the clarity of the writing.\n\nUses language and tone appropriate to the audience and purpose.' }, { score: 3.5 }, { score: 4, text: 'Consistently applies standard English conventions, with few errors. Demonstrates varied syntax and precise word choice.\n\nConsistently uses language and tone appropriate to the audience and purpose.' }]
	}, {
		name: 'Additional Task Demands',
		optional: true,
		details: [{ score: 1, text: 'Does not address additional task demands.' }, { score: 1.5 }, { score: 2, text: 'Addresses additional task demands superficially.' }, { score: 2.5 }, { score: 3, text: 'Addresses additional task demands adequately to support the argument.' }, { score: 3.5 }, { score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the argument.' }]
	}, {
		name: 'Disciplinary Content Understanding',
		optional: true,
		details: [{ score: 1, text: '' }, { score: 1.5 }, { score: 2, text: '' }, { score: 2.5 }, { score: 3, text: '' }, { score: 3.5 }, { score: 4, text: '' }]
	}]
},

// -----------------------------------------------------------------------------------------------------------------
// Argumentation, Grades 9-12
{
	name: 'Argumentation, Grades 9-12',
	headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
	fields: [{
		name: 'Controlling Idea',
		details: [{ score: 1, text: 'Addresses prompt.\n\nMakes a general claim with an unclear focus.' }, { score: 1.5 }, { score: 2, text: 'Addresses prompt.\n\nEstablishes a clear claim with an uneven focus.' }, { score: 2.5 }, { score: 3, text: 'Addresses prompt.\n\nEstablishes and maintains a clear, specific, and credible claim.' }, { score: 3.5 }, { score: 4, text: 'Addresses prompt.\n\nEstablishes and maintains a precise, substantive claim. Acknowledges limitations and/or the complexity of the issue or topic.' }]
	}, {
		name: 'Selection & Citation of Evidence',
		details: [{ score: 1, text: 'Includes minimal details from sources.\n\nSources are used without citation.' }, { score: 1.5 }, { score: 2, text: 'Includes details, examples, and/or quotations from sources that are relevant to the claim.\n\nInconsistently cites sources.' }, { score: 2.5 }, { score: 3, text: 'Includes details, examples, and/or quotations from sources that support the claim and supporting ideas.\n\nConsistently cites sources with minor formatting errors.' }, { score: 3.5 }, { score: 4, text: 'Includes well-chosen details, examples, and/or quotations from sources that fully support the claim and supporting ideas.\n\nConsistently cites sources using appropriate format.' }]
	}, {
		name: 'Development / Explanation of Sources',
		details: [{ score: 1, text: 'Explanation of source material is irrelevant, incomplete, or inaccurate.' }, { score: 1.5 }, { score: 2, text: 'Explains source material to support the argument, with some incomplete reasoning or explanations.' }, { score: 2.5 }, { score: 3, text: 'Accurately explains source material and how it supportsthe argument.' }, { score: 3.5 }, { score: 4, text: 'Thoroughly and accurately explains source material, using logical reasoning to support and develop the argument.' }]
	}, {
		name: 'Organization',
		details: [{ score: 1, text: 'Lacks an evident structure. Makes unclear connections among claims, reasons, and/or evidence.' }, { score: 1.5 }, { score: 2, text: 'Groups ideas and uses transitions to develop the argument, with minor lapses in coherence or organization.' }, { score: 2.5 }, { score: 3, text: 'Groups and sequences ideas to develop a cohesive argument. Uses transitions to clarify the relationships among claim(s), reasons, and evidence.' }, { score: 3.5 }, { score: 4, text: 'Groups and sequences ideas in a logical progression in which ideas build to create a unified whole. Uses varied transitions to clarify the precise relationships among claim(s), reasons, and evidence.' }]
	}, {
		name: 'Conventions',
		details: [{ score: 1, text: 'Major errors in standard English conventions interfere with the clarity of the writing.\n\nLanguage or tone is inappropriate.' }, { score: 1.5 }, { score: 2, text: 'Errors in standard English conventions sometimes interfere with the clarity of the writing.\n\nUses language and tone that are sometimes inappropriate for the audience and purpose.' }, { score: 2.5 }, { score: 3, text: 'Consistently applies standard English conventions; minor errors, while noticeable, do not interfere with the clarity of the writing.\n\nUses language and tone appropriate to the audience and purpose.' }, { score: 3.5 }, { score: 4, text: 'Consistently applies standard English conventions, with few errors. Demonstrates varied syntax and precise word choice.\n\nConsistently uses language and tone appropriate to the audience and purpose.' }]
	}, {
		name: 'Additional Task Demands',
		optional: true,
		details: [{ score: 1, text: 'Does not address additional task demands.' }, { score: 1.5 }, { score: 2, text: 'Addresses additional task demands superficially.' }, { score: 2.5 }, { score: 3, text: 'Addresses additional task demands adequately to support the argument.' }, { score: 3.5 }, { score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the argument.' }]
	}, {
		name: 'Disciplinary Content Understanding',
		optional: true,
		details: [{ score: 1, text: '' }, { score: 1.5 }, { score: 2, text: '' }, { score: 2.5 }, { score: 3, text: '' }, { score: 3.5 }, { score: 4, text: '' }]
	}]
},

// -----------------------------------------------------------------------------------------------------------------
// Informational/Explanatory, Grades 6-8
{
	name: 'Informational/Explanatory, Grades 6-8',
	headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
	fields: [{
		name: 'Controlling Idea',
		details: [{ score: 1, text: 'Attempts to address prompt.\n\nPresents an unclear or unfocused controlling idea.' }, { score: 1.5 }, { score: 2, text: 'Addresses prompt.\n\nPresents a general controlling idea with an uneven focus.' }, { score: 2.5 }, { score: 3, text: 'Addresses prompt.\n\nPresents and maintains a clear controlling idea.' }, { score: 3.5 }, { score: 4, text: 'Addresses prompt.\n\nPresents and maintains a clear and specific controlling idea that takes into account the complexity of the topic.' }]
	}, {
		name: 'Selection & Citation of Evidence',
		details: [{ score: 1, text: 'Includes minimal details from sources.\n\nSources are used without citation.' }, { score: 1.5 }, { score: 2, text: 'Includes details, examples, and/or quotations from sources that are relevant to the controlling idea.\n\nInconsistently cites sources.' }, { score: 2.5 }, { score: 3, text: 'Includes details, examples, and/or quotations from sources that are relevant to the controlling and supporting ideas.\n\nConsistently cites sources with minor formatting errors.' }, { score: 3.5 }, { score: 4, text: 'Includes well-chosen details, examples, and/or quotations from sources that support the controlling and supporting ideas.\n\nConsistently cites sources using appropriate format.' }]
	}, {
		name: 'Development / Explanation of Sources',
		details: [{ score: 1, text: 'Explanation of source material is irrelevant, incomplete, or inaccurate.' }, { score: 1.5 }, { score: 2, text: 'Explanation of source material is minimal or contains minor errors.' }, { score: 2.5 }, { score: 3, text: 'Accurately explains source material and how it supports the controlling idea.' }, { score: 3.5 }, { score: 4, text: 'Thoroughly and accurately explains source material, using reasoning to support and develop the controlling idea.' }]
	}, {
		name: 'Organization',
		details: [{ score: 1, text: 'Lacks an evident structure. Makes unclear connections among ideas, concepts, and information.' }, { score: 1.5 }, { score: 2, text: 'Groups ideas and uses some transitions to connect ideas, with minor lapses in coherence or organization.' }, { score: 2.5 }, { score: 3, text: 'Groups and sequences ideas to develop the controlling idea. Uses transitions to clarify the relationships among ideas, concepts, and information.' }, { score: 3.5 }, { score: 4, text: 'Groups and sequences ideas logically to develop the controlling idea and create cohesion. Uses varied transitions to clarify the relationships among ideas, concepts, and information.' }]
	}, {
		name: 'Conventions',
		details: [{ score: 1, text: 'Major errors in standard English conventions interfere with the clarity of the writing.\n\nLanguage or tone is inappropriate.' }, { score: 1.5 }, { score: 2, text: 'Errors in standard English conventions sometimes interfere with the clarity of the writing.\n\nUses language and tone that are sometimes inappropriate to the audience and purpose.' }, { score: 2.5 }, { score: 3, text: 'Consistently applies standard English conventions; minor errors, while noticeable, do not interfere with the clarity of the writing.\n\nUses language and tone appropriate to the audience and purpose.' }, { score: 3.5 }, { score: 4, text: 'Consistently applies standard English conventions, with few errors. Demonstrates varied syntax and precise word choice.\n\nConsistently uses language and tone appropriate to the audience and purpose.' }]
	}, {
		name: 'Additional Task Demands',
		optional: true,
		details: [{ score: 1, text: 'Does not address additional task demands.' }, { score: 1.5 }, { score: 2, text: 'Addresses additional task demands superficially.' }, { score: 2.5 }, { score: 3, text: 'Addresses additional task demands adequately to support the explanation.' }, { score: 3.5 }, { score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the explanation.' }]
	}, {
		name: 'Disciplinary Content Understanding',
		optional: true,
		details: [{ score: 1, text: '' }, { score: 1.5 }, { score: 2, text: '' }, { score: 2.5 }, { score: 3, text: '' }, { score: 3.5 }, { score: 4, text: '' }]
	}]
},

// -----------------------------------------------------------------------------------------------------------------
// Informational/Explanatory, Grades 9-12
{
	name: 'Informational/Explanatory, Grades 9-12',
	headers: ['emerging', 'approaches expectations', 'meets expectations', 'advanced'],
	fields: [{
		name: 'Controlling Idea',
		details: [{ score: 1, text: 'Addresses prompt.\n\nPresents a general or unclear controlling idea.' }, { score: 1.5 }, { score: 2, text: 'Addresses prompt.\n\nPresents a clear controlling idea with an uneven focus.' }, { score: 2.5 }, { score: 3, text: 'Addresses prompt.\n\nPresents and maintains a clear, specific controlling idea that takes into account the complexity of the topic.' }, { score: 3.5 }, { score: 4, text: 'Addresses prompt.\n\nPresents and maintains a precise, substantive controlling idea that takes into account the complexity of the topic and, where appropriate, acknowledges gaps in evidence or information.' }]
	}, {
		name: 'Selection & Citation of Evidence',
		details: [{ score: 1, text: 'Includes minimal details from sources.\n\nSources are used without citation.' }, { score: 1.5 }, { score: 2, text: 'Includes details, examples, and/or quotations from sources that are relevant to the controlling idea.\n\nInconsistently cites sources.' }, { score: 2.5 }, { score: 3, text: 'Includes details, examples, and/or quotations from sources that support the controlling and supporting ideas.\n\nConsistently cites sources with minor formatting errors.' }, { score: 3.5 }, { score: 4, text: 'Includes well-chosen details, examples, and/or quotations from sources that fully support the controlling and supporting ideas.\n\nConsistently cites sources using appropriate format.' }]
	}, {
		name: 'Development / Explanation of Sources',
		details: [{ score: 1, text: 'Explanation of source material is irrelevant, incomplete, or inaccurate.' }, { score: 1.5 }, { score: 2, text: 'Explains source material to support the controlling idea, with some incomplete reasoning or explanations.' }, { score: 2.5 }, { score: 3, text: 'Accurately explains source material and how it supports the controlling idea.' }, { score: 3.5 }, { score: 4, text: 'Thoroughly and accurately explains source material to support and develop the controlling idea.' }]
	}, {
		name: 'Organization',
		details: [{ score: 1, text: 'Lacks an evident structure. Makes unclear connections among ideas, concepts, and information.' }, { score: 1.5 }, { score: 2, text: 'Groups ideas and uses transitions to develop the controlling idea, with minor lapses in coherence or organization.' }, { score: 2.5 }, { score: 3, text: 'Groups and sequences ideas to develop a cohesive explanation. Uses transitions to clarify the relationships among complex ideas, concepts, and information.' }, { score: 3.5 }, { score: 4, text: 'Groups and sequences ideas in a logical progression in which ideas build to create a unified whole. Uses varied transitions to clarify the precise relationships among complex ideas, concepts, and information.' }]
	}, {
		name: 'Conventions',
		details: [{ score: 1, text: 'Major errors in standard English conventions interfere with the clarity of the writing.\n\nLanguage or tone is inappropriate.' }, { score: 1.5 }, { score: 2, text: 'Errors in standard English conventions sometimes interfere with the clarity of the writing.\n\nUses language and tone that are sometimes inappropriate for the audience and purpose.' }, { score: 2.5 }, { score: 3, text: 'Consistently applies standard English conventions; minor errors, while noticeable, do not interfere with the clarity of the writing.\n\nUses language and tone appropriate to the audience and purpose.' }, { score: 3.5 }, { score: 4, text: 'Consistently applies standard English conventions, with few errors. Demonstrates varied syntax and precise word choice.\n\nConsistently uses language and tone appropriate to the audience and purpose.' }]
	}, {
		name: 'Additional Task Demands',
		optional: true,
		details: [{ score: 1, text: 'Does not address additional task demands.' }, { score: 1.5 }, { score: 2, text: 'Addresses additional task demands superficially.' }, { score: 2.5 }, { score: 3, text: 'Addresses additional task demands adequately to support the explanation.' }, { score: 3.5 }, { score: 4, text: 'Addresses additional task demands effectively to strengthen the clarity and development of the explanation.' }]
	}, {
		name: 'Disciplinary Content Understanding',
		optional: true,
		details: [{ score: 1, text: '' }, { score: 1.5 }, { score: 2, text: '' }, { score: 2.5 }, { score: 3, text: '' }, { score: 3.5 }, { score: 4, text: '' }]
	}]
}];
