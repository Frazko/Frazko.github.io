(function() {
    'use strict';

    angular
        .module('songApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($rootScope, $scope, JsonService, $filter) {
        MainController.$inject = ['$rootScope', '$scope', 'JsonService', '$filter'];
        //console.log('MainController!!!');

        $scope.inputTerm = "";
        $scope.filterTerm = "";
        $scope.searchError = false;
        $scope.searchActivated = false;

        $scope.songs = null;
        $scope.isLoadingData = false;

        $scope.searchSong = function() {
            if ($scope.searchValidation()) {return;}

            /*Could have loaded the json just the first time and then search in the $scope.songs, 
            //but for test instructions it`s like this
            //if ($scope.songs === null) {*/
            $scope.isLoadingData = true;
            $scope.searchActivated=true;
            JsonService.get()
                .$promise.then(function(data) {
                    $scope.songs = $filter('filter')(data, $scope.inputTerm);
                    $scope.isLoadingData = false;
                });
            //}
            $scope.filterTerm = $scope.inputTerm;
        };


        /*
        Striped Rows
         */
        $scope.getStripedRows = function(id) {
            if (id % 2 === 0) {
                return 'at50';
            } else {
                return 'at30';
            }
        };


        /*
        Validation for search input
         */

        $scope.searchValidation = function() {
            //console.log('searchValidation: '+$scope.inputTerm);
            //// Or $scope.inputTerm.length > 3 
            if ($scope.inputTerm === undefined || $scope.inputTerm === "") {
                $scope.searchError = true;
            } else {
                $scope.searchError = false;
            }
            return $scope.searchError;
        };


        /*
        convert spotify URI to web URL
         */
        $scope.getHttpURL = function(uri) {
            var res = '';
            var str = uri;
            if (str.indexOf('album') !== -1) {
                res = str.replace("spotify:album:", "https://open.spotify.com/album/");
            } else if (str.indexOf('track') !== -1) {
                res = str.replace("spotify:track:", "https://open.spotify.com/track/");
            }
            return res;
        };

    }
})();
