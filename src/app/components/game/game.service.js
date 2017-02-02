(function() {
    'use strict';
    angular
        .module('mangledWords')
        .factory('gameService', gameService);
    
    /** @ngInject */
    gameService.$inject = ['httpService', 'URL'];

    function gameService(httpService, URL) {
        var service = {
            getWords: getWords
        };
        return service;

        function getWords(){
            return httpService.get(URL.BASE+URL.WORDS)
                .then( function(response){
                    console.log(response);
                    // Fisher-Yates shuffle
                    var n = response.length;
                    var i;
                    while (n > 0) {
                        i = Math.floor(Math.random() * n);
                        n--;
                        var tmp = response[n];
                        response[n] = response[i];
                        response[i] = tmp;
                    }
                    return response;
                }, function(error){
                    console.log("Error status: " + error);
                    return undefined;
                });
        };
        
    }
})();