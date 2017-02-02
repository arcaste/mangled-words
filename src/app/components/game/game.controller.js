(function() {
    'use strict';
    angular
        .module('mangledWords')
        .controller('GameController', GameController);

    GameController.$inject = ['$timeout', 'gameModalService', 'words', 'TIMER'];
    /** @ngInject */
    function GameController($timeout, gameModalService, words, TIMER) {
        var vm = this;
        vm.inputChanged = inputChanged;
        vm.startNewGame = startNewGame;
        vm.submitWord = submitWord;
        vm.gameStarted = false;
        vm.index = 0;
        vm.input = '';
        vm.inputTmp = '';
        vm.maxScore = 0;
        vm.mangledWord = '....';
        vm.originalWord = '';
        vm.penality = 0;
        vm.dangerAlert = false;
        vm.successAlert = false;
        vm.triggerTimer=false;
        vm.title = "Game";
        vm.subTitle = "Check your score or if you haven't play yet... give it a try!";
        vm.wrongAnswer = false;

        function resetGame(){
            vm.gameStarted = false;
            vm.dangerAlert = false;
            vm.successAlert = false;
            vm.index = 0;
            vm.input = '';
            vm.inputTmp = '';
            vm.mangledWord = '....';
            vm.originalWord = '';
            // Fisher-Yates shuffle
            var n = words.length;
            var i;
            while (n > 0) {
                i = Math.floor(Math.random() * n);
                n--;
                var tmp = words[n];
                words[n] = words[i];
                words[i] = tmp;
            }
            
        }

        function startNewGame(){
            vm.gameStarted = true;
            vm.maxScore = 0;
            vm.penality = 0;
            // vm.time = 10;
            vm.mangledWord = shuffleWord(words[vm.index]);
            vm.originalWord = words[vm.index];
            vm.title = "Game Started!";
            vm.subTitle = "Good luck...";
            $timeout(function() {
                resetGame();
                gameModalService.open(vm.maxScore);
            }, TIMER * 1000);
        }

        function inputChanged(){
            if(vm.successAlert){
                vm.successAlert=false;
            } else if (vm.dangerAlert){
                vm.dangerAlert=false;
            }
            //for those who cheats 
            if(vm.input.length < vm.inputTmp.length){
                increasePenality(vm.inputTmp.length-vm.input.length);
            }
            //remove all occurrence of whitespaces
            vm.input = vm.input.replace(/ /g, '');
            if(vm.input.match(/^[A-zÀ-ÿ]+$/)){
                vm.input = vm.input.toUpperCase();  
            } else {
                vm.input = vm.input.slice(0,-1);  
            }
            vm.inputTmp = vm.input;
            if(vm.input.length === vm.originalWord.length){
                submitWord();
            }
        }

        function submitWord(){
            if(vm.input === vm.originalWord.toUpperCase()){
                vm.successAlert = true;
                increaseMaxScore();
                vm.index++;
                vm.penality = 0;
                if(words.length !== vm.index){
                    vm.mangledWord = shuffleWord(words[vm.index]);
                    vm.originalWord = words[vm.index];
                }
            } else {
                vm.dangerAlert = true;
                increasePenality(vm.input.length);
            }
            vm.input = '';
            vm.inputTmp = '';
        }

        function increasePenality(amount){
            vm.penality+=amount;
            if(vm.penality > vm.originalWord.length){
                vm.penality = vm.originalWord.length;
            }
        }

        function increaseMaxScore(){
            var tmp = Math.floor(Math.pow(1.95,vm.originalWord.length/3)) - vm.penality;
            if(tmp > 0){
                vm.maxScore += tmp;
            }
        }

        // Fisher-Yates shuffle
        function shuffleWord(word){
            do{
                var array = word.split("");
                var n = array.length;
                var i;
                while (n > 0) {
                    i = Math.floor(Math.random() * n);
                    n--;
                    var tmp = array[n];
                    array[n] = array[i];
                    array[i] = tmp;
                }
            } while(array.join("") === word);
            return array.join("");
        }
    }
})();
