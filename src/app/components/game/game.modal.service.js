(function() {
    'use strict';
    angular
        .module('mangledWords')
        .controller('GameModalController', GameModalController)
        .factory('gameModalService', gameModalService);

    /** @ngInject */
    gameModalService.$inject=['$uibModal'];

    function gameModalService($uibModal) {
        var service = {
            open: open
        };
        return service;

        function open(score) {
            return $uibModal.open({
                controller: 'GameModalController',
                controllerAs: 'modal',
                templateUrl : 'app/components/game/game.modal.html',
                size: 'mg',
                resolve: {
                   score: score
                }
            });
        }
    }

    GameModalController.$inject = ['$uibModalInstance', 'score', 'httpService', 'URL'];
    function GameModalController($uibModalInstance, score, httpService, URL) {
        var vm = this;
        vm.cancel = $uibModalInstance.dismiss;
        vm.confirm = confirm;
        vm.name = '';
        vm.score = score;
        
        function confirm(){
            console.log(vm.name+" "+vm.score);
            var params = {
                name: vm.name,
                score: vm.score,
            }
            httpService.post(URL.BASE+URL.PLAYERS+URL.TOKEN, params)
                .then( function(response){
                    console.log(response);
                    $uibModalInstance.close();
                }, function(error){
                    console.log("Error status: " + error);
                    $uibModalInstance.close();
                });
        }
    }
})();