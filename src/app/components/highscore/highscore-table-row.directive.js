/**
* @desc table row directive for the highscore page
* @example <div table-row></div>
*/
(function(){
    'use strict';
    angular
        .module('mangledWords')
        .directive('tableRow', tableRow);

        function tableRow() {
            var directive = {
                templateUrl: 'app/components/highscore/highscore-table-row.html',
                restrict: 'A',
                replace: true
            };
            return directive;
        }
})();