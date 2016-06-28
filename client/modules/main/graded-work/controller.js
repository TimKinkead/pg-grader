'use strict';

/**
 * angular controller for graded work
 */
angular.module('app').controller('GradedWorkController', [
    '$scope',
    '$resource',
    '$http',
    '$timeout',
    '$uibModal',
    'CurrentUser',
    function ($scope, $resource, $http, $timeout, $modal, CurrentUser) {

        // variables
        var status = $scope.status = {},
            params = $scope.params = {},
            
            errorMessages = $scope.errorMessages = [],
            successMessages = $scope.successMessages = [],
            
            fields = $scope.fields = ['no', 'date', 'grader id', 'grader name', 'student work id', 'rubric', 'average score'];

        // -------------------------------------------------------------------------------------------------------------
        // User

        // get user
        $scope.user = CurrentUser.data;
        
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
        // Score Sheets
        
        // get score sheets
        status.processing = true;
        var scoresheets = $scope.scoresheets = $resource('data/scoresheet/list').query(
            {},
            function() {
                status.processingTopics = false;
            },
            function(err) {
                status.processingTopics = false;
                errorMessages.push((err && err.message) ? err.message : 
                'Error! We had trouble listing the graded work. Please try refreshing the page.');
            }
        );
        
        // create new score sheet
        $scope.newScoreSheet = function() {
            var modalInstance = $modal.open({
                templateUrl: 'modules/main/graded-work/create/view.html',
                controller: 'GradedWorkCreateController',
                backdrop: 'static',
                size: 'xl'
            });
            modalInstance.result.then(
                function(scoresheet) { // close
                    scoresheets.push(scoresheet);
                },
                function(msg) { // dismiss
                    console.log(msg || 'dismiss');
                }
            );
        };

        // edit existing score sheet
        $scope.editScoreSheet = function(scoresheet, index) {
            var modalInstance = $modal.open({
                templateUrl: 'modules/main/graded-work/edit/view.html',
                controller: 'GradedWorkEditController',
                backdrop: 'static',
                size: 'xl',
                resolve: {
                    scoresheet: function() {
                        return scoresheet;
                    }
                }
            });
            modalInstance.result.then(
                function(scoresheet) { // close
                    scoresheets[index] = scoresheet;
                },
                function(msg) { //dismiss
                    console.log(msg || 'dismiss');
                }
            );
        };
        
        // -------------------------------------------------------------------------------------------------------------
        // Watch Parameter Changes

        $scope.$watch('params.param', function(nV, oV) {
            if (nV !== oV) { console.log(nV); }
        });
    }
]);
