(function() {
    'use strict';
    angular
        .module('mangledWords')
        .config(config);

    function config($logProvider) {
        $logProvider.debugEnabled(false);
    }
})();
