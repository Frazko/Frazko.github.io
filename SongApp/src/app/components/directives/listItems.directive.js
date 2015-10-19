(function() {
    'use strict';

    angular
        .module('songApp')
        .directive('listItems', listItems);

    /** @ngInject */
    function listItems() {
        var directive = {
            restrict: 'E',
            transclude: true,
            templateUrl: 'app/components/views/listItems.html'
        };

        return directive;
    }

})();
