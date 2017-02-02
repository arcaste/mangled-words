(function() {
    'use strict';
    angular
        .module('mangledWords')
        .controller('GameModalController', GameModalController)
        .factory('gameModalService', gameModalService);

    gameModalService.$inject=['$uibModal'];

    //Service used to launch a new modal
    function gameModalService($uibModal) {
        var service = {
            open: open
        };
        return service;

        function open(score) {
            return $uibModal.open({
                controller: 'GameModalController',
                controllerAs: 'modal',
                templateUrl : 'app/components/game/modals/game.modal.html',
                size: 'mg',
                backdrop: 'static',
                resolve: {
                   score: score
                }
            });
        }
    }

    GameModalController.$inject = ['$uibModalInstance', 'score', 'gameService'];
    //In the modal controller we delegate the persitance of a new player to the game service
    function GameModalController($uibModalInstance, score, gameService) {
        var vm = this;
        vm.cancel = $uibModalInstance.dismiss;
        vm.confirm = confirm;
        vm.name = '';
        vm.score = score;
        
        function confirm(){
            var params = {
                name: vm.name,
                score: vm.score
            }
            return gameService.savePlayer(params).then(function(){
                $uibModalInstance.close();
            });
        }
    }
})();