'use strict';

/* Directives */
var jerrensWeekendDirectives = angular.module('jerrensWeekend.directives', []);

jerrensWeekendDirectives.directive('submitVote', function() {
    return {
        restrict: 'A',
        scope: true,
        link: function(scope, element, attrs) {
            element.bind('click', function() {
                $('.submit-vote.modal')
                  .modal('setting', {
                    onApprove : function() {
                      scope.submitVote();
                    }
                  })
                  .modal('show')
                ;
            });
        }
    }
});

jerrensWeekendDirectives.directive('checkbox', function () {
    return {
        restrict: "C",
        link: function (scope, elm, attr) {
            $(elm).checkbox();
        }
    };
});

jerrensWeekendDirectives.directive('sidebar', function(){
    return{
        restrict: "C",
        link: function(scope, elm, attr){
            $(elm).sidebar();
        }
    }
});

jerrensWeekendDirectives.directive('transition', function(){
    return{
        restrict: "C",
        link: function(scope, elm, attr){
            $(elm).transition('scale in');
        }
    }
});