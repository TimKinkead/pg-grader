'use strict';

/**
 * angular controller for graded work
 */
angular.module('app').controller('UploadController', [
    '$scope',
    '$rootScope',
    '$resource',
    '$http',
    '$timeout',
    '$uibModal',
    '$state',
    '$stateParams',
    '$window',
    'CurrentUser',
    function ($scope, $rootScope, $resource, $http, $timeout, $modal, $state, $stateParams, $window, CurrentUser) {

        // variables
        var user = $scope.user = CurrentUser.data,

            status = $scope.status = {},
            params = $scope.params = {},

            errorMessages = $scope.errorMessages = [],
            successMessages = $scope.successMessages = [],

            modules = $scope.modules = [],
            essayQtyByModuleId = $scope.essayQtyByModuleId = {},
            
            tableFields = $scope.tableFields = [
                'no',
                'module name',
                'google drive folder id',
                'number of essays',
                'sync'
            ];

        // -------------------------------------------------------------------------------------------------------------
        // Success/Error Messages

        // close error message
        $scope.closeErrorMessage = function (errorIndex) {
            errorMessages.splice(errorIndex, 1);
        };

        // close success message
        $scope.closeSuccessMessage = function (successIndex) {
            successMessages.splice(successIndex, 1);
        };

        // -------------------------------------------------------------------------------------------------------------
        // Upload

        $scope.connectGoogleDrive = function() {
            window.location.assign('/data/user/google-drive/connect');
        };
        
        $scope.listGoogleDriveFiles = function() {
            
            $resource('/data/user/google-drive/files').query(
                {},
                function(files) {
                    
                },
                function(err) {
                    
                }
            );
            
        };
        
        function setModuleFolderId(module, folderId) {
            status['processingFolderId'+module._id] = true;
            $http.put('data/module', {_id: module._id, googleDriveFolderId: folderId})
                .success(function() {
                    module.googleDriveFolderId = folderId;
                    status['processingFolderId'+module._id] = false;
                })
                .error(function(err) {
                    console.log(err);
                    status['processingFolderId'+module._id] = false;
                });
        }

        $scope.selectFolder = function(module) {
            if (!module) {return;}

            var modalInstance = $modal.open({
                templateUrl: 'modules/main/upload/modal-select-folder/view.html',
                controller: 'UploadSelectFolderModalController',
                size: 'lg',
                resolve: {
                    module: function() {
                        return module;
                    }
                }
            });
            modalInstance.result.then(
                function(folderId) { 
                    console.log('close');
                    setModuleFolderId(module, folderId);
                },
                function(msg) { 
                    console.log('dismiss'); 
                }
            );
        };

        // -------------------------------------------------------------------------------------------------------------
        // Modules

        // essay qty by module id
        function countEssays(moduleId, clbk) {
            $http.get('data/essay/count?module='+moduleId)
                .success(function(qty) {
                    essayQtyByModuleId[moduleId] = qty;
                    if (clbk) { return clbk(); }
                })
                .error(function(err) {
                    console.log(err);
                });
        }

        // count essays
        function countEssaysForEachModule() {
            for (var i=0; i<modules.length; i++) {
                countEssays(modules[i]._id);
            }
        }

        // get modules
        status.processingModules = true;
        modules = $scope.modules = $resource('data/module/list').query(
            {},
            function() {
                status.processingModules = false;
                countEssaysForEachModule();
            },
            function(err) {
                status.processingModules = false;
            }
        );
        
        // sync essays
        $scope.syncEssays = function(module) {
            status['syncingEssays'+module._id] = true;
            $http.get('data/essay/sync', {params: {module: module._id}})
                .success(function() {
                    countEssays(module._id, function() {
                        status['syncingEssays'+module._id] = false;
                        console.log(essayQtyByModuleId);
                    });
                })
                .error(function(err) {
                    console.log(err);
                    if (err === '!files || !files.length') {
                        errorMessages.push('No files found! Please check the folder id and/or refresh your token, then try again.');
                    }
                    status['syncingEssays'+module._id] = false;
                });
        };
        
    }
]);
