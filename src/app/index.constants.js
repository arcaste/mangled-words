(function() {
    'use strict';
    angular
        .module('mangledWords')
        .constant('TIMER', 40)
        .constant('URL', {
            BASE: 'https://mangledwords-e183b.firebaseio.com/',
            PLAYERS: 'players.json',
            WORDS: 'words.json'
        })
        .constant('_', window._);
})();
