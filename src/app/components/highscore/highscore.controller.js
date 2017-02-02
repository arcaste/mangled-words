(function() {
    'use strict';
    angular
        .module('mangledWords')
        .controller('HighScoreController', HighScoreController);

    HighScoreController.$inject = ['players'];

    function HighScoreController(players) {
        var vm = this;
        vm.players = players;
    }
})();