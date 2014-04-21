'use strict';

/* Controllers */

var jerrensWeekendControllers = angular.module('jerrensWeekend.controllers', []);


jerrensWeekendControllers.controller('VoteCtrl', ['$scope', 'VoteService', '$location',
    function($scope, VoteService, $location) {

        $scope.vote = {};

        if(!VoteService.getName()) {
            $location.path('/welcome');
        } else {
            $scope.vote.name = VoteService.getName();
        }

        $scope.submitVote = function() {
            VoteService.submitVote($scope.vote, function(data) {
                $location.path('/vote-results');
            });
        }
    }
]);

jerrensWeekendControllers.controller('RecordCtrl', ['$scope', 'RecordService', '$location',
    function($scope, RecordService, $location) {

        $scope.record = {};

        if(!RecordService.getName()) {
            $location.path('/welcome');
        } else {
            $scope.record.name = RecordService.getName();
        }

        $scope.submitRecord = function() {
            RecordService.submitRecord($scope.record, function(data) {
                console.log(data);
            });
        }
    }
]);

jerrensWeekendControllers.controller('WelcomeCtrl', ['$scope', 'RecordService', '$location', 'VoteService',
    function($scope, RecordService, $location, VoteService) {

        $scope.name = "";
        $scope.hasVoted = false;

        $scope.canVote = function() {
            VoteService.canVote($scope.name, function(data) {
                if(data === true) {
                    $location.path('/vote');
                } else {
                    $scope.hasVoted = true;
                }
            });
        }

        $scope.goToRecord = function() {
            RecordService.setName($scope.name);
            $location.path('/record');
        }
    }
]);

jerrensWeekendControllers.controller('ResultsCtrl', ['$scope', 'VoteService', '$location',
    function($scope, VoteService, $location) {

    }
]);