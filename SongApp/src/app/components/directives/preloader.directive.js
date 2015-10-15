(function() {
    'use strict';

    angular
        .module('songApp')
        .directive('preloader', preloader);

    /** @ngInject */
    function preloader() {
        return {
            restrict: 'E',
            transclude: true,
            templateUrl: "app/components/views/preloaderView.html"
        };
    }


})();
