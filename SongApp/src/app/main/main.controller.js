(function() {
    'use strict';

    angular
        .module('songApp')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($rootScope, $scope, $resource) {
        MainController.$inject = ['$rootScope', '$scope', '$resource'];
        console.log('MainController!!!');

        $scope.inputTerm = "";
        $scope.filterTerm = "";

        $scope.songs = null;


        $scope.isLoadingData = false;




        $scope.searchSong = function() {
            if ($scope.songs === null) {

                $scope.isLoadingData = true;

                console.log('searchSong');

                var resource = $resource('http://localhost:3000/songs', {}, {
                    get: {
                        isArray: true
                    }
                });

                resource.get()
                    .$promise.then(function(data) {
                        console.log('Loading json...' + data);
                        $scope.songs = data;
                        $scope.isLoadingData = false;
                    });

            }

            $scope.filterTerm = $scope.inputTerm;

        };


        /*

        $scope.searchSong = function() {
            console.log('searchSong');

            console.log('$scope.songs: ' + $scope.songs);

            if ($scope.songs === null) {
                console.log('Loading json...');
                getJsonListService.getData().then(function(data) {
                    $scope.songs = data;
                    console.log('>> MainController !! ' + $scope.songs);
                });
            }

            $scope.filterTerm = $scope.inputTerm;
        };
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
