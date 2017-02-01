(function() {
    'use strict';
    angular
        .module('mangledWords')
        .factory('highscoreService', highscoreService);
    
    /** @ngInject */
    function highscoreService() {
        var service = {
            get: get
        };

        function get(){
            var players = [
                {rank: 1,score:100,name:"first"},
                {rank: 2,score:55,name:"second"}
            ]
            return players;
        };
        
        return service;
    }
})();