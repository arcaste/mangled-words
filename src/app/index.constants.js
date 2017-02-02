(function() {
  'use strict';

  angular
    .module('mangledWords')
    .constant('TIMER', 40)
    .constant('URL', {
        BASE: 'https://mangledwords-e183b.firebaseio.com/',
        PLAYERS: 'players.json',
        WORDS: 'words.json',
        TOKEN: '?auth=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE0ODYwNTc1MTgsImV4cCI6MTQ4NjA2MTExOCwiYWRtaW4iOnRydWUsInYiOjB9.ICOijr_VVhBydLrKjxn-YSsWuAo9GnT90UvZuEsiHxE'
    })
    .constant('_', window._)
    .constant('moment', moment);

})();
