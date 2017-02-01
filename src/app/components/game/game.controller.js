(function() {
    'use strict';
    angular
        .module('mangledWords')
        .controller('GameController', GameController);

    GameController.$inject = ['$interval'];
    /** @ngInject */
    function GameController($interval) {
        var words = [
            "pizza",
            "dog",
            "house",
            "hello",
            "name",
            "computer"
        ];
        var vm = this;
        vm.startNewGame = startNewGame;
        vm.submitWord = submitWord;

        function startNewGame(){
            
        }

        function submitWord(){
            
        }
    }
})();
