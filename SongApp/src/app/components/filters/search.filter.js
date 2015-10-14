(function() {
    'use strict';

    angular
        .module('songApp')
        .filter('search', searchFilter);

    function searchFilter() {
        return function(arr, searchString) {
            if (!searchString) {
                return arr;
            }
            var result = [];
            searchString = searchString.toLowerCase();
            angular.forEach(arr, function(item) {
                if (item.songname.toLowerCase().indexOf(searchString) !== -1 || item.artistname.toLowerCase().indexOf(searchString) !== -1 || item.albumname.toLowerCase().indexOf(searchString) !== -1 ) {
                    result.push(item);
                }
            });
            return result;


        };
    }
})();
