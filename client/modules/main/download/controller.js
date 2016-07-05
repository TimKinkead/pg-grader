'use strict';

angular.module('app').controller('DownloadController', [
    '$scope',
    '$uibModal',
    function ($scope, $modal) {
        
        $scope.downloadGradedWork = function() {
            var modalInstance = $modal.open({
                templateUrl: 'modules/main/download/modal/view.html',
                controller: 'DownloadModalController'
            });
            modalInstance.result.then(
                function() { console.log('close'); },
                function() { console.log('dismiss'); }
            );
        };
        
    }
]);
