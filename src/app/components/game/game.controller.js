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
        vm.inputChanged = inputChanged;
        vm.startNewGame = startNewGame;
        vm.submitWord = submitWord;

        vm.countdown;
        vm.gameStarted = false;
        vm.index = 0;
        vm.input = '';
        vm.inputTmp = '';
        vm.maxScore = 0;
        vm.mangledWord = shuffleWord(words[vm.index]);
        vm.originalWord = words[vm.index];
        vm.penality = 0;
        vm.showDangerAlert = false;
        vm.showSuccessAlert = false;
        vm.time = 40;
        vm.title = "Game";
        vm.subTitle = "Check your score or if you haven't play yet... give it a try!";
        vm.wrongAnswer = false;

        function startNewGame(){
            vm.gameStarted = true;
            vm.title = "Game Started!";
            vm.subTitle = "Good luck...";
            vm.countdown = $interval(function() {
                if (vm.time > 0 ) {
                    vm.time--;
                } else {
                    vm.gameStarted = false;
                    $interval.cancel(vm.countdown);
                }
            }, 1000);
        }

        function inputChanged(){
            if(vm.showSuccessAlert){
                vm.showSuccessAlert=false;
            } else if (vm.showDangerAlert){
                vm.showDangerAlert=false;
            };
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
        }

        function submitWord(){
            if(vm.input === vm.originalWord.toUpperCase()){
                vm.showSuccessAlert = true;
                increaseMaxScore();
                vm.index++;
                vm.penality = 0;
                if(words.length !== vm.index){
                    vm.mangledWord = shuffleWord(words[vm.index]);
                    vm.originalWord = words[vm.index];
                }
            } else {
                vm.showDangerAlert = true;
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
                for(var i = 0; i < word.length - 2; i++){
                    var j = Math.floor((Math.random() * (word.length-1)) + i);
                    var tmp = array[i];
                    array[i] = array[j];
                    array[j] = tmp;
                }
            } while(array.join("") === word);
            return array.join("");
        }
    }
})();
