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
      scope: {
          creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController() {
    }
  }

})();
