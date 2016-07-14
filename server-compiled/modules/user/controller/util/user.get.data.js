'use strict';

exports.getData = function (user, type) {
    if (!user) {
        return null;
    }

    switch (type) {

        case 'settings':
            return {
                _id: user._id,
                id: user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                group: user.group,
                admin: user.admin,
                facilitator: user.facilitator
            };

        default:
            return {
                _id: user._id,
                id: user.id,
                name: user.name,
                initials: user.initials,
                group: user.group,
                admin: user.admin,
                facilitator: user.facilitator,
                rubricSide: user.rubricSide,
                rubricElements: user.rubricElements,
                scoresheets: user.scoresheets,
                checkScores: user.checkScores,
                consensusScores: user.consensusScores
            };
    }
};
