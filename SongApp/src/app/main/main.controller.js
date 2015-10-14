(function() {
    'use strict';

    angular
        .module('songApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($rootScope, $scope) {
        MainController.$inject = ['$rootScope', '$scope'];
        console.log('MainController!!!');


        $scope.searchTerm={};
        $scope.searchTerm.query="";




    }
})();
