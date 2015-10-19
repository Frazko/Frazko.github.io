(function() {
    'use strict';

    angular
        .module('songApp')
        .directive('keyEnter', keyButtons);

    /** @ngInject */
    function keyButtons() {
        return function($scope, element, attrs) {
            element.bind("keydown keypress", function(event) {
                var key = 'which' in event ? event.which : event.keyCode;

                /*
                Looking for ENTER keyH
                 */
                if (key === 13) {
                    $scope.$apply(function() {
                        $scope.$eval(attrs.keyEnter);
                    });

                    event.preventDefault();
                }
            });
        };
    }



})();
