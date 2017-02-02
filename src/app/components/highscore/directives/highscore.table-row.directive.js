/**
* @desc table row directive for the highscore page
* @example <div table-row></div>
*/
(function(){
    'use strict';
    angular
        .module('mangledWords')
        .directive('tableRow', tableRow);
        //Directive for a single row of the highscore
        function tableRow() {
            var directive = {
                templateUrl: 'app/components/highscore/directives/highscore.table-row.html',
                restrict: 'A',
                replace: true
            };
            return directive;
        }
})();