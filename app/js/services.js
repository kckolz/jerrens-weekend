'use strict';

/* Services */
var jerrensWeekendServices = angular.module('jerrensWeekend.services', []);
  
jerrensWeekendServices.factory('VoteService', ['$http', function($http){

    var name = null;

    return{
        submitVote: function(vote, callback) {
            $http.post('http://localhost:8080/submitVote', vote).success(function(data) {
                callback(data);
            }).error(function(data, status) {
                if(status === 401) {
                    callback("You already voted")
                }
                else {
                    callback(data);
                }
            });
        },

        canVote: function(submittedName, callback) {
            $http.get('http://localhost:8080/canVote',  {params: {name: submittedName}}).success(function(data) {
                name = submittedName;
                callback(true);
            })
        },

        getName: function() {
            return name;
        }
    };
}]);

jerrensWeekendServices.factory('RecordService', ['$http', function($http){

    var name = null;

    return{
        submitRecord: function(record, callback) {
            $http.post('http://localhost:8080/submitRecord', record).success(function(data) {
                callback(data);
            });
        },

        getName: function() {
            return name;
        },
        setName: function(newName) {
            name = newName;
        }
    };
}]);