/**
* @desc table row directive for the highscore page
* @example <span game-timer></span>
*/
(function(){
'use strict';
    angular
        .module('mangledWords')
        .directive('gameTimer', gameTimer);

        gameTimer.$inject = ['TIMER'];
        function gameTimer(TIMER) {
            return {
                link: function(scope, element) {
                    var time;
                    time = TIMER;
                    scope.$watch('game.gameStarted', function (val) {
                        if (val) {
                            var timer = setInterval(function() {
                                if (time > 0 ) {
                                    time--;
                                    element.text(time);
                                } else {
                                    time = TIMER;
                                    element.text(time);
                                    clearInterval(timer);
                                }
                            }, 1000);
                        } else {
                            element.text(time);
                        }
                    });
                }
            };
        }
})();