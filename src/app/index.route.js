(function() {
    'use strict';
    angular
        .module('mangledWords')
        .config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main',{
                url: '/main',
                templateUrl: 'app/components/main/main.html'
            })
            .state('game', {
                url: '/game',
                templateUrl: 'app/components/game/game.html',
                controller: 'GameController',
                controllerAs: 'game',
                resolve: {
                    words: getWords
                }
            }).state('highscore', {
                url: '/highscore',
                templateUrl: 'app/components/highscore/highscore.html',
                controller: 'HighScoreController',
                controllerAs: 'hs',
                resolve: {
                    players: getPlayers
                }
            });
        $urlRouterProvider.otherwise('/main');
    }
    //We inject the values retieved from the database to the controller
    getWords.$inject = ['gameService'];
    function getWords(gameService){
        return gameService.getWords();
    }
    //We inject the values retieved from the database to the controller
    getPlayers.$inject = ['highscoreService'];
    function getPlayers(highscoreService){
        return highscoreService.getPlayers();
    }
})();
