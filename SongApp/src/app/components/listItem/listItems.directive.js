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
            templateUrl: 'app/components/views/listItems.html',
            controller: listItemsController,
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function listItemsController($rootScope, $scope, getJsonListService) {
            listItemsController.$inject = ['$rootScope', '$scope', 'getJsonListService'];
            console.log('listItemsController!!!');



        }
    }

})();
