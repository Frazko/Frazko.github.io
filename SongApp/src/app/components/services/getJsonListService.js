(function() {
    'use strict';

    angular
        .module('songApp')
        .factory('getJsonListService', getJsonListService);

    /** @ngInject */
    function getJsonListService($state, $q, $http) {
        getJsonListService.$inject = ['$state', '$q', '$http'];
        console.log('Reading json file!!');
        var defer = false;
        var _data = "";
        
        function _loadData() {
            if (!defer) {
                defer = $q.defer();
                $http.get('http://localhost:3000/songs').success(function(data) {
                    _data = data;
                    //console.log(' -- LOADING FILE FOR DATA !!' + JSON.stringify(data));
                    defer.resolve(data);
                });
            }
            return defer.promise;
        }




        var service = {
            getData: _loadData
        };


        return service;



    }

})();
