(function() {
    'use strict';
    angular
        .module('mangledWords')
        .factory('highscoreService', highscoreService);
    
    /** @ngInject */
    highscoreService.$inject = ['httpService'];

    function highscoreService(httpService) {
        var service = {
            getPlayers: getPlayers
        };
        return service;

        function getPlayers(){
            return httpService.get()
                .then( function(response){
                    console.log(response);
                    var players = [
                        {rank: 1,score:100,name:"first"},
                        {rank: 2,score:55,name:"second"}
                    ]
                    return players;
                }, function(error){
                    console.log("Error status: " + error);
                    return undefined;
                });
        }
    }
})();