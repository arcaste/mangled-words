(function() {
  'use strict';

  angular
    .module('mangledWords')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
