(function() {
    'use strict';

    angular
        .module('mangledWords')
        .config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
      /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main',{
                url: '/main',
                templateUrl: 'app/components/main/main.html'
                // controller: 'MainController',
                // controllerAs: 'main'
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

    getWords.$inject = ['gameService'];
    function getWords(gameService){
        return gameService.getWords();
    }

    getPlayers.$inject = ['highscoreService'];
    function getPlayers(highscoreService){
        return highscoreService.getPlayers();
    }

})();
