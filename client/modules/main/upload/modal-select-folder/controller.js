'use strict';

/**
 * angular controller for upload select folder modal
 */
angular.module('app').controller('UploadSelectFolderModalController', [
    '$scope',
    '$uibModalInstance',
    '$resource',
    '$state',
    'CurrentUser',
    'module',
    function ($scope, $modalInstance, $resource, $state, CurrentUser, moduleData) {

        // variables
        var user = $scope.user = CurrentUser.data,
            module = $scope.module = moduleData,

            status = $scope.status = {},
            params = $scope.params = {};

        // close modal
        $scope.cancel = function() {
            $modalInstance.dismiss();
        };

        // save
        $scope.save = function() {
            if (!params.googleDriveFolderId) {return;}
            $modalInstance.close(params.googleDriveFolderId);
        };

    }
]);
