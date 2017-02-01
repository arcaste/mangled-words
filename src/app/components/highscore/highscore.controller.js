(function() {
    'use strict';
    angular
        .module('mangledWords')
        .controller('HighScoreController', HighScoreController);

    HighScoreController.$inject = ['players'];

    /** @ngInject */
    function HighScoreController(players) {
        console.log(players);
        var vm = this;
        vm.players = players;
    }
})();