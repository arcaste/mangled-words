(function() {
    'use strict';
    angular
        .module('mangledWords')
        .controller('GameController', GameController);

    GameController.$inject = ['$timeout', 'gameModalService', 'words', 'TIMER'];

    function GameController($timeout, gameModalService, words, TIMER) {
        var vm = this;
        var index = 0;
        var inputTmp = '';
        var originalWord = '';
        var penality = 0;
        
        vm.inputChanged = inputChanged;
        vm.startNewGame = startNewGame;
        
        vm.dangerAlert = false;
        vm.gameStarted = false;
        vm.input = '';
        vm.maxScore = 0;
        vm.mangledWord = '....';
        vm.successAlert = false;

        function inputChanged(){
            //Swap the alert messages
            if(vm.successAlert){
                vm.successAlert=false;
            } else if (vm.dangerAlert){
                vm.dangerAlert=false;
            }

            //Penality points for erasing characters
            if(vm.input.length < inputTmp.length){
                //Ammount of penality is equal to the number of deleted char
                penality += (inputTmp.length - vm.input.length);
                //Avoiding score less than 0
                if(penality > originalWord.length){
                    penality = originalWord.length;
                }
                inputTmp = vm.input;
                return;
            }

            //Remove all whitespaces
            vm.input = vm.input.replace(/ /g, '');
            //Check if the last char is a correct one
            if(vm.input.match(/^[A-zÀ-ÿ]+$/)){
                vm.input = vm.input.toUpperCase();  
            } else {
                vm.input = vm.input.slice(0,-1);  
            }

            inputTmp = vm.input;
            
            //If the input word has the same length of the original one but is not correct
            //we add penality point as the length of the word, popping out the alerts and reset the input 
            if(vm.input.length === originalWord.length){
                if(vm.input === originalWord.toUpperCase()){
                    vm.successAlert = true;
                    //Compute score
                    var tmp = Math.floor(Math.pow(1.95, originalWord.length/3)) - penality;
                    if(tmp > 0){
                        vm.maxScore += tmp;
                    }
                    //Get new word
                    index++;
                    penality = 0;
                    if(words.length !== index){
                        vm.mangledWord = shuffleWord(words[index]);
                        originalWord = words[index];
                    }
                } else {
                    vm.dangerAlert = true;
                    penality+=vm.input.length;
                    if(penality > originalWord.length){
                        penality = originalWord.length;
                    }
                }
                vm.input = '';
                inputTmp = '';
            }
        }

        function resetGame(){
            index = 0;
            inputTmp = '';
            originalWord = '';
            vm.dangerAlert = false;
            vm.gameStarted = false;
            vm.input = '';
            vm.mangledWord = '....';
            vm.successAlert = false;
            // Shuffle the word array for a new game
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

        function startNewGame(){
            originalWord = words[index];
            vm.gameStarted = true;
            vm.mangledWord = shuffleWord(words[index]);
            vm.maxScore = 0;
            vm.penality = 0;
            $timeout(function() {
                resetGame();
                gameModalService.open(vm.maxScore);
            }, TIMER * 1000);
        }
    }
})();
