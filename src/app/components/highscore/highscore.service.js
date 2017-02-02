(function() {
    'use strict';
    angular
        .module('mangledWords')
        .factory('highscoreService', highscoreService);
    
    highscoreService.$inject = ['httpService', 'URL', '_'];
    //In the highscore service we perform the persistance call for the highscore component
    function highscoreService(httpService, URL, _) {
        var service = {
            getPlayers: getPlayers
        };
        return service;

        function getPlayers(){
            return httpService.get(URL.BASE+URL.PLAYERS)
                .then( function(response){
                    response = _.sortBy(response, 'score').reverse();
                    return response;
                }, function(error){
                    console.log("Error status: " + error);
                    return undefined;
                });
        }
    }
})();