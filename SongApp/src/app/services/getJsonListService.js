(function() {
    'use strict';

    angular
        .module('songApp')
        .factory('getJsonListService', getJsonListService);


    /** @ngInject */
    function getJsonListService() {

        getJsonListService.$inject = ['$state', '$q', '$timeout', '$http', '$rootScope'];

        console.log('Reading json file!!');
        var defer = false;

        function _loadData() {
            if (!defer) {
                defer = $q.defer();
                $http.get('http://localhost:3000/home').success(function(data) {
                    _data = data;
                    console.log(' -- LOADING FILE FOR DATA !!' + JSON.stringify(data));
                    defer.resolve(data);
                });
            }
            return defer.promise;
        }


        function _getDetailData(detailType, detailIndex) {
            if (!defer) {
                console.log(' !defer ');
                //$state.go("category");
            } else {
                console.log(' ' + JSON.stringify(defer.promise));
                console.log('  -  ');
                console.log(' -- >>>>>>> !!' + JSON.stringify(defer.promise.value[detailType]));
            }
        }


        var service = {
            getData: _loadData,
            getDetail: _getDetailData
        };


        return service;



    }

})();
