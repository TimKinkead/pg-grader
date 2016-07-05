'use strict';

/**
 * angular controller for download modal
 */
angular.module('app').controller('DownloadModalController', [
    '$scope',
    '$uibModalInstance',
    function ($scope, $modalInstance) {

        // close modal
        $scope.cancel = function() {
            $modalInstance.dismiss();
        };

    }
]);
