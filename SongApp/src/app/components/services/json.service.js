(function() {
    'use strict';

    angular
        .module('songApp')
        .factory('JsonService', ['$resource', JsonService]);

    /** @ngInject */
    function JsonService($resource) {

        return $resource('http://localhost:3000/songs', {}, {
            get: {
                isArray: true
            }
        });
        /*return $resource('db/songs.json', {}, {
            get: {
                isArray: false,
                cache :false
            }
        });*/

    }

})();
