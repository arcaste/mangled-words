(function() {
    'use strict';

    angular
        .module('mangledWords')
        .config(routerConfig);

    routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
      /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('game', {
                url: '/game',
                templateUrl: 'app/components/game/game.html',
                controller: 'GameController',
                controllerAs: 'game'
            }).state('highscore', {
                url: '/highscore',
                templateUrl: 'app/components/highscore/highscore.html',
                controller: 'HighScoreController',
                controllerAs: 'hs',
                resolve: {
                    players: getPlayers
                }
            });

        $urlRouterProvider.otherwise('/game');
    }

    getPlayers.$inject = ['highscoreService'];
    function getPlayers(highscoreService){
        return highscoreService.get();
    }

})();
