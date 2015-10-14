(function() {
    'use strict';

    angular
        .module('songApp')
        .directive('toggleButtons', toggleButtons);

    /** @ngInject */
    function toggleButtons() {
        return {
            restrict: 'E',
            scope: {
                model: '=',
                options: '='
            },
            controller: function($scope) {
                $scope.activate = function(option) {
                    $scope.model = option;
                };
            },
            template: "<div class='toogleBtns'><div class='toggleBtn dtLeft' ng-class='{selected: options[0] == model}' ng-click='activate(options[0])'><span>{{options[0]}} </span></div><div class='toggleBtn dtRight' ng-class='{selected: options[1] == model}' ng-click='activate(options[1])'><span>{{options[1]}} </span> </div></div>"
        };
    }


})();
