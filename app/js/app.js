'use strict';


// Declare app level module which depends on filters, and services
var jerrensWeekendApp = angular.module('jerrensWeekend', [
  'ngRoute',
  'jerrensWeekend.filters',
  'jerrensWeekend.services',
  'jerrensWeekend.directives',
  'jerrensWeekend.controllers'
]);

jerrensWeekendApp.config(['$routeProvider', 
    function($routeProvider) {
      $routeProvider.when('/', {templateUrl: 'templates/welcome.html', controller: 'WelcomeCtrl'});
      $routeProvider.when('/vote', {templateUrl: 'templates/vote.html', controller: 'VoteCtrl'});
      $routeProvider.when('/record', {templateUrl: 'templates/record.html', controller: 'RecordCtrl'});
      $routeProvider.when('/vote-results', {templateUrl: 'templates/vote-results.html', controller: 'ResultsCtrl'});
      $routeProvider.otherwise({redirectTo: '/'});
}]);

jerrensWeekendApp.config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);
