"use strict";

exports.getData = function(a, b) {
    if (!a) return null;
    switch (b) {
      case "settings":
        return {
            _id: a._id,
            id: a.id,
            firstName: a.firstName,
            lastName: a.lastName,
            email: a.email,
            group: a.group,
            admin: a.admin,
            facilitator: a.facilitator,
            googleDriveAccessToken: !!a.googleDriveAccessToken
        };

      default:
        return {
            _id: a._id,
            id: a.id,
            name: a.name,
            initials: a.initials,
            group: a.group,
            admin: a.admin,
            facilitator: a.facilitator,
            rubricSide: a.rubricSide,
            rubricElements: a.rubricElements,
            scoresheets: a.scoresheets,
            checkScores: a.checkScores,
            consensusScores: a.consensusScores,
            googleDriveAccessToken: !!a.googleDriveAccessToken
        };
    }
};