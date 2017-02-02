(function() {
    'use strict';
    angular
        .module('mangledWords')
        .factory('httpService', httpService);
    
    /** @ngInject */
    httpService.$inject=['$http', '$q'];
    function httpService($http, $q) {
        var url = "https://jsonplaceholder.typicode.com/posts";
        var service = {
            get: getMethod,
            post: postMethod
        };
        return service;

        function getMethod(){
            var deferred = $q.defer();
            $http.get(url).then(function(response) {
                return deferred.resolve(response.data);
            }, function(error) {
                return deferred.reject(error.status);
            });
            return deferred.promise;
        };
        function postMethod(data){
            var deferred = $q.defer();
            $http.post(url, data).then(function(response) {
                return deferred.resolve(response.data);
            }, function(error) {
                return deferred.reject(error.status);
            });
            return deferred.promise;
        };
    }
})();