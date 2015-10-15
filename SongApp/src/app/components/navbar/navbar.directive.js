(function() {
    'use strict';

    angular
        .module('songApp')
        .directive('songAppNavbar', songAppNavbar);

    /** @ngInject */
    function songAppNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/navbar/navbar.html',
            controller: NavbarController,
            controllerAs: 'nb',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController() {


        }
    }

})();
