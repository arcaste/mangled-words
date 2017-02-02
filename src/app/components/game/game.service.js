(function() {
    'use strict';
    angular
        .module('mangledWords')
        .factory('gameService', gameService);
    
    /** @ngInject */
    gameService.$inject = ['httpService'];

    function gameService(httpService) {
        var service = {
            getWords: getWords
        };
        return service;

        function getWords(){
            return httpService.get()
                .then( function(response){
                    console.log(response);
                    var words = [
                        "pizza",
                        "dog",
                        "house",
                        "hello",
                        "name",
                        "computer"
                    ];
                    return words;
                }, function(error){
                    console.log("Error status: " + error);
                    return undefined;
                });
        };
        
    }
})();