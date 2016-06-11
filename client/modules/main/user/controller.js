'use strict';

angular.module('app').controller('UserController', [
    '$scope',
    '$http',
    '$resource',
    '$state',
    '$location',
    'CurrentUser',
    function($scope, $http, $resource, $state, $location, CurrentUser) {
        
        var user = $scope.user = {},
            status = $scope.status = {},

            emailRegex = $scope.emailRegex = /.*\@.*\..*/,
            passwordRegex = $scope.passwordRegex = /.{6}/;

        /*
        $scope.$on('$stateChangeStart',
            function(event, toState, toParams, fromState, fromParams){
                console.log(toState);
                console.log(toParams);
            }
        );
        */


        $scope.closeErrorMessage = function() {
            status.errorMessage = null;
        };

        $scope.closeSuccessMessage = function() {
            status.successMessage = null;
        };

        function errorMessage(data) {
            if (data && data.message) {status.message = data.message;}
            status.processing = false;
        }

        function successMessage(message) {
            status.successMessage = message;
            setTimeout(function() {status.successMessage = null;}, 1000);
        }

        // -- AUTHENTICATION --

        /*function errorLoggingIn(data) {
            if (data && data.message) {status.message = data.message;}
            status.processing = false;
        }*/

        function loggedIn(data) {
            if (data && data._id) {
                CurrentUser.data = angular.extend(CurrentUser.data, data);
                $state.go('dashboard');
            } else {
                errorMessage({message: 'We had trouble logging you in. Please try again.'});
            }
        }
        
        // -- SIGN UP --

        // go to sign up state
        $scope.goToSignUp = function() {
            status.errorMessage = null;
            status.clicked = false;
            $state.go('user.signup');
        };
        
        // show password as password vs text
        $scope.toggleShowPassword = function() {
            status.showPassword = !status.showPassword;
        };
        
        // click sign up button
        $scope.click = function() {
            status.clicked = true;
            return true;
        };
        
        // sign up a new user
        $scope.signUp = function() {
            status.errorMessage = null;
            status.processing = true;
            $http.post('/data/user/sign-up', user)
                .success(function(newUserData) {
                    status.processing = false;
                    CurrentUser.data = angular.extend(CurrentUser.data, newUserData);
                    $state.go('welcome');
                })
                .error(function(err) {
                    status.processing = false;
                    status.errorMessage = (err && err.message) ? err.message : 'We had trouble signing you up. Please try again.';
                });
        };
        
        // -- LOGIN --
        
        // go to login state
        $scope.goToLogin = function() {
            status.errorMessage = null;
            status.clicked = false;
            $state.go('user.login');
        };
        
        // login an existing user
        $scope.login = function() {
            status.errorMessage = null;
            status.processing = true;
            $http.post('/data/user/login', user)
                .success(function(userData) {
                    status.processing = false;
                    CurrentUser.data = angular.extend(CurrentUser.data, userData);
                    $state.go('welcome');
                })
                .error(function(err) {
                    status.processing = false;
                    status.errorMessage = (err && err.message) ? err.message : 'We had trouble logging you in. Please try again.';
                });
        };
        
        // -- FORGOT PASSWORD --

        // go to forgot password state
        $scope.goToForgotPassword = function() {
            status.errorMessage = null;
            status.clicked = false;
            $state.go('user.forgotpassword');
        }; 
        
        // send password reset link
        $scope.sendPasswordResetLink = function() {
            status.successMessage = null;
            status.errorMessage = null;
            status.processing = true;
            $http.post('/data/user/forgot-password', user)
                .success(function() {
                    status.processing = false;
                    status.successMessage = 'Reset link sent. Check your email.';
                    console.log(status);
                })
                .error(function(err) {
                    status.processing = false;
                    status.errorMessage = (err && err.message) ? err.message : 'We had trouble sending you a password reset email. Please try again.';
                });
        };

        // -- RESET PASSWORD --

        if ($state.is('user.resetpassword')) {
            var urlQueryParams = $location.search();
            user.email = urlQueryParams.email;
            user.passwordResetCode = urlQueryParams.code;
            $location.search('email', null);
            $location.search('code', null);
            if (!user.email || !user.passwordResetCode) {
                status.errorMessage = 'Reset link error. Please try clicking the link again.';
            }
        }

        // reset password
        $scope.resetPassword = function() {
            status.processing = true;
            $http.post('/data/user/reset-password', user)
                .success(function() {
                    status.processing = false;
                    status.successMessage = 'login';
                })
                .error(function(err) {
                    status.processing = false;
                    status.errorMessage = (err && err.message) ? err.message : 'We had trouble resetting your password. Please try again.';
                });
        };

        // -- SETTINGS --

        var fullUser;
        if ($state.is('user.settings')) {
            status.errorMessage = null;
            status.processing = true;
            user = $scope.user = $resource('data/user/settings').get(
                function() {
                    status.processing = false;
                    fullUser = angular.copy(user);
                },
                function(err) {
                    status.processing = false;
                    status.errorMessage = 'We had trouble retrieving your settings information. Please try again.';
                    console.log(err);
                }
            );
        }

        // display edit mode
        var showEdit = $scope.showEdit = function (field, cancel) {
            $scope['edit' + field] = cancel ? false : true;
        };

        // update settings
        $scope.update = function(field) {

            function updated() {
                showEdit(field, true);
                if (field === 'Email') {
                    fullUser.email = user.email;
                    CurrentUser.data.username = user.email.slice(0, user.email.indexOf('@'));
                    successMessage('Email address updated!');
                } else if (field === 'Password') {
                    successMessage('Password changed!');
                }
                status.processing = false;
            }

            var params = {};
            switch (field) {
                case 'Email':
                    if (!user.email || user.email === fullUser.email) {
                        user.email = fullUser.email;
                        showEdit('Email', true);
                        return;
                    }
                    params.email = user.email;
                    break;
                case 'Password':
                    if (!user.password && !user.newPassword) {
                        showEdit('Password', true);
                        return;
                    } else if (!user.password) {
                        status.message = 'Please provide your current password.';
                        return;
                    } else if (!user.newPassword) {
                        status.message = 'Please provide a new password.';
                        return;
                    }
                    params.password = user.password;
                    params.newPassword = user.newPassword;
            }

            status.processing = true;
            $http
                .put('/data/user/settings', params)
                .success(updated)
                .error(errorMessage);
        };
    }
]);