(function() {
    'use strict';

    angular
        .module('songApp')
        .directive('songAppNavbar', songAppNavbar);

    /** @ngInject */
    function songAppNavbar() {
        var directive = {
            restrict: 'E',
            templateUrl: 'app/components/views/navbar.html',
            controller: NavbarController,
            controllerAs: 'nb',
            bindToController: true
        };

        return directive;

        /** @ngInject */
        function NavbarController() {

            /*
            no actions for nav bar yet
             */

        }
    }

})();
