'use strict';

/* Filters */

var jerrensWeekendFilters = angular.module('jerrensWeekend.filters', []);

jerrensWeekendFilters.filter('interpolate', ['version', function(version) {
    return function(text) {
      return String(text).replace(/\%VERSION\%/mg, version);
    };
  }]);
