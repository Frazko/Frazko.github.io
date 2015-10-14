(function() {
    'use strict';

    angular
        .module('songApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController() {
        getJsonListService.$inject = ['getJsonListService'];


        getJsonListService.getData().then(function(data) {
            $scope.data = data;
            console.log('>> algo !! ' + data);
            fillData();
        });




        //console.log('categoryId :: ' + $stateParams.categoryId);

        function fillData() {
            console.log('MainController:: fillData :: ');

        }












        activate();

        function activate() {
            console.log('MainController::Activate!!!');

        }

    }
})();
