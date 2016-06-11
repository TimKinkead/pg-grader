'use strict';

/**
 * angular controller for graders
 */
angular.module('app').controller('GradersController', [
    '$scope',
    '$resource',
    '$http',
    '$timeout',
    '$uibModal',
    function ($scope, $resource, $http, $timeout, $modal) {

        // variables
        var status = $scope.status = {},
            params = $scope.params = {},
            
            errorMessages = $scope.errorMessages = [],
            successMessages = $scope.successMessages = [],
            
            fields = $scope.fields = ['no', 'joined', 'id', 'name', 'email', 'admin'];
        
        // -------------------------------------------------------------------------------------------------------------
        // Success/Error Messages
        
        // close error message
        $scope.closeErrorMessage = function(errorIndex) {
            errorMessages.splice(errorIndex, 1);
        };

        // close success message
        $scope.closeSuccessMessage = function(successIndex) {
            successMessages.splice(successIndex, 1);
        };

        // -------------------------------------------------------------------------------------------------------------
        // Graders
        
        // get graders
        status.processing = true;
        var graders = $scope.graders = $resource('data/grader/list').query(
            {},
            function() {
                status.processing = false;
            },
            function(err) {
                status.processing = false;
                errorMessages.push((err && err.message) ? err.message : 'Error! Could not list graders. Please try refreshing the page.');
            }
        );
        
        // create new grader
        $scope.newGrader = function(grader) {
            var modalInstance = $modal.open({
                templateUrl: 'modules/main/graders/create/view.html',
                controller: 'GradersCreateController',
                backdrop: 'static'
            });
            modalInstance.result.then(
                function(grader) { // close
                    graders.push(grader);
                },
                function(msg) { // dismiss
                    console.log(msg || 'dismiss');
                }
            );
        };
        
        // edit existing grader
        $scope.editGrader = function(grader) {
            console.log('edit grader');  
        };
        
    }
]);
