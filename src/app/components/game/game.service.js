(function() {
    'use strict';
    angular
        .module('mangledWords')
        .factory('gameService', gameService);
    
    gameService.$inject = ['httpService', 'URL'];
    //In the game service we perform the database interaction for the game component
    function gameService(httpService, URL) {
        var service = {
            getWords: getWords,
            savePlayer: savePlayer
        };
        return service;

        function getWords(){
            return httpService.get(URL.BASE+URL.WORDS)
                .then( function(response){
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
                    console.log(response);
                    return response;
                }, function(error){
                    console.log("Error status: " + error);
                    return undefined;
                });
        }

        function savePlayer(params){
            return httpService.post(URL.BASE+URL.PLAYERS, params)
                .then( function(response){
                    console.log(response);
                    return response;
                }, function(error){
                    console.log("Error status: " + error);
                    return undefined;
                });
        }
    }
})();