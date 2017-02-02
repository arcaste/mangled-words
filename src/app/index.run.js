(function() {
    'use strict';
    angular
        .module('mangledWords')
        .run(runBlock);

    function runBlock($log) {
        $log.debug('runBlock end');
    }
})();
