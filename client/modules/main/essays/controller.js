'use strict';

/**
 * angular controller for graded work
 */
angular.module('app').controller('EssaysController', [
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
            
            status = $scope.status = {
                essayFilterBy: (user.admin || user.facilitator) ? 'all essays' : 'my essays',
                moduleFilterBy: null
            },
            params = $scope.params = {},

            errorMessages = $scope.errorMessages = [],
            successMessages = $scope.successMessages = [],
            
            essayFilterOptions = $scope.essayFilterOptions = (user.admin || user.facilitator) ?
                ['all essays', 'master scores', 'graded essays', 'ungraded essays', 'my essays'] :
                ['my essays', 'all essays'],
            
            essayRefreshTime = ($window.location.host.indexOf('localhost') > -1) ? 10000 : 30000,

            essays = $scope.essays = [],
            modules = $scope.modules = [],
            
            fields = $scope.fields = (user.admin || user.facilitator) ?
                ['no', 'id', 'module', 'master score', 'being graded by', 'skipped by', 'graded by', 'grade quota', 'grade'] :
                ['no', 'id', 'module', 'master score', 'grading in progress', 'skipped by you', 'graded by you', 'graded', 'grade'];
        
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
        // Essays

        function getEssayFlags(essay) {
            var flags = {
                beingGradedBy: 0,
                beingGradedByYou: false,
                skippedBy: 0,
                skippedByYou: false,
                wasGradedBy: 0,
                wasGradedByYou: false,
                yourScoreSheet: null,
                masterScoreSheet: null
            };
            if (essay.graders && essay.graders.length) {
                essay.graders.forEach(function(grader) {
                    flags.beingGradedBy++;
                    if (grader.toString() === user._id.toString()) {
                        flags.beingGradedByYou = true;
                    }
                });
            }
            if (essay.skip && essay.skip.length) {
                essay.skip.forEach(function(skipObj) {
                    flags.skippedBy++;
                    if (skipObj.user && skipObj.user.toString() === user._id.toString()) {
                        flags.skippedByYou = true;
                    }
                });
            }
            if (essay.scoresheets && essay.scoresheets.length) {
                essay.scoresheets.forEach(function(scoresheet) {
                    if (!scoresheet.masterScore) {
                        flags.wasGradedBy++;
                    } else {
                        flags.masterScoreSheet = scoresheet;
                    }
                    if (scoresheet.user && scoresheet.user.toString() === user._id.toString()) {
                        flags.wasGradedByYou = true;
                        flags.yourScoreSheet = scoresheet;
                    }
                });
            }
            return flags;
        }

        function showHideEssay(essay) {
            var visible;
            switch (status.essayFilterBy) {
                case 'all essays':
                    visible = true;
                    break;
                case 'master scores':
                    visible = Boolean(essay.masterScoreSheet);
                    break;
                case 'graded essays':
                    visible = Boolean(essay.wasGradedBy);
                    break;
                case 'ungraded essays':
                    visible = Boolean(!essay.wasGradedBy);
                    break;
                case 'my essays':
                    visible = Boolean(essay.wasGradedByYou || essay.beingGradedByYou);
                    break;
                default:
                    visible = true;
            }
            if (status.moduleFilterBy) {
                if (essay.module._id !== status.moduleFilterBy) {
                    visible = false;
                }
            }
            return visible;
        }

        // refresh essay info
        var refreshEssays = function() {
            console.log('refreshEssays');
            if ($state.current.name !== 'essays') { return; }
            $http.get('data/essay/list', {})
                .success(function(newEssays) {
                    var newFlagsByEssayId = {};
                    newEssays.forEach(function(newEssay) {
                        newFlagsByEssayId[newEssay._id] = getEssayFlags(newEssay);
                    });
                    essays.forEach(function(essay) {
                        var newFlags = newFlagsByEssayId[essay._id];
                        if (newFlags) {
                            essay = angular.extend(essay, newFlags);
                        }
                    });
                    setTimeout(refreshEssays, essayRefreshTime);
                })
                .error(function(err) {
                    console.log(err);
                });
        };
        
        // get essays
        status.processingEssays = true;
        essays = $scope.essays = $resource('data/essay/list').query(
            {},
            function() {
                status.processingEssays = false;
                essays.forEach(function(essay) {
                    essay = angular.extend(essay, getEssayFlags(essay));
                    essay.visible = showHideEssay(essay);
                });
                setTimeout(refreshEssays, essayRefreshTime);
            },
            function(err) {
                status.processingEssays = false;
                errorMessages.push((err && err.message) ? err.message : 
                'Error! We had trouble listing the essays. Please try refreshing the page.');
            }
        );

        // -------------------------------------------------------------------------------------------------------------
        // Modules
        
        // get modules
        status.processingModules = true;
        modules = $scope.modules = $resource('data/module/list').query(
            {},
            function() {
                status.processingModules = false;
            },
            function(err) {
                status.processingModules = false;
            }
        );
        
        // -------------------------------------------------------------------------------------------------------------
        // View Details Modal

        $scope.viewDetails = function(essayId) {
            var modalInstance = $modal.open({
                templateUrl: 'modules/main/essays/modal-detail/view.html',
                controller: 'EssayDetailModalController',
                size: 'xl',
                resolve: {
                    essayId: function() {
                        return essayId;
                    }
                }
            });
            modalInstance.result.then(
                function() { console.log('close'); },
                function(msg) { console.log('dismiss'); }
            );
        };

        // -------------------------------------------------------------------------------------------------------------
        // Master Score Comparison Modal

        var checkMasterScore = $scope.checkMasterScore = function(essayId) {
            var modalInstance = $modal.open({
                templateUrl: 'modules/main/essays/modal-check/view.html',
                controller: 'MasterScoreModalController',
                size: 'xl',
                resolve: {
                    essayId: function() {
                        return essayId;
                    }
                }
            });
            modalInstance.result.then(
                function() { console.log('close'); },
                function(msg) { console.log('dismiss'); }
            );
        };

        // -------------------------------------------------------------------------------------------------------------
        // Styling

        $scope.gradeButtonNgClass = function(essay) {
            var ngClassObj = {};
            if (essay.beingGradedByYou) {
                ngClassObj['btn-danger'] = true;
            } else if (essay.wasGradedByYou) {
                ngClassObj['btn-info'] = true;
            } else if (
                (!essay.gradeAll && !essay.beingGradedBy && !essay.wasGradedBy && !essay.skippedByYou) ||
                (essay.gradeAll && !essay.wasGradedByYou && !essay.skippedByYou)
            ) {
                ngClassObj['btn-success'] = true;
            }
            return ngClassObj;
        };

        $scope.gradeButtonText = function(essay) {
            if (essay.beingGradedByYou && essay.wasGradedByYou) {
                return 'finish editing';
            } else if (essay.beingGradedByYou) {
                return 'finish grading';
            } else if (essay.wasGradedByYou) {
                return 'edit score';
            } else {
                return 'grade now';
            }
        };

        // -------------------------------------------------------------------------------------------------------------
        // Url Query Params

        if ($stateParams['all-essays-graded']) {
            status.allEssaysGraded = true;
            $stateParams['all-essays-graded'] = null;
            $state.go($state.$current, $stateParams, {notify: false, reload: false});
        }

        if ($stateParams['modal-check']) {
            if ($stateParams.essay) {
                checkMasterScore($stateParams.essay);
            }
            $stateParams['modal-check'] = null;
            $stateParams.essay = null;
            $state.go($state.$current, $stateParams, {notify: false, reload: false});
        }

        // -------------------------------------------------------------------------------------------------------------
        // Events

        /* Not necessary
        $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {
            console.log(toState);
            if (toState.name === 'essays') {
                setTimeout(refreshEssays, 10000);
            }
        });
        */

        // -------------------------------------------------------------------------------------------------------------
        // Watch Parameter Changes

        $scope.$watch('status.essayFilterBy', function(nV, oV) {
            if (nV !== oV) {
                status.processingEssays = true;
                essays.forEach(function(essay) {
                    essay.visible = showHideEssay(essay);
                });
                status.processingEssays = false;
            }
        });

        $scope.$watch('status.moduleFilterBy', function(nV, oV) {
            if (nV !== oV) {
                status.processingEssays = true;
                essays.forEach(function(essay) {
                    essay.visible = showHideEssay(essay);
                });
                status.processingEssays = false;
            }
        });
    }
]);
