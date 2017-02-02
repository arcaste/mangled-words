(function() {
    'use strict';
    angular
        .module('mangledWords')
        .factory('highscoreService', highscoreService);
    
    /** @ngInject */
    highscoreService.$inject = ['httpService', 'URL', '_'];

    function highscoreService(httpService, URL, _) {
        var service = {
            getPlayers: getPlayers
        };
        return service;

        function getPlayers(){
            return httpService.get(URL.BASE+URL.PLAYERS)
                .then( function(response){
                    console.log(response);
                    response = _.sortBy(response, 'score').reverse();
                    console.log(response);
                    return response;
                }, function(error){
                    console.log("Error status: " + error);
                    return undefined;
                });
        }
    }
})();