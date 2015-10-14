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
            templateUrl: 'app/components/listItem/listItems.html',
            controller: listItemsController,
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function listItemsController($rootScope, $scope, getJsonListService) {
            listItemsController.$inject = ['$rootScope', '$scope', 'getJsonListService'];
            console.log('listItemsController!!!');


            $scope.songs = [];

            getJsonListService.getData().then(function(data) {
                $scope.songs = data;
                console.log('>> listItemsController !! ' + $scope.songs);
            });


        }
    }

})();
