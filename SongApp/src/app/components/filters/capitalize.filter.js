(function() {
    'use strict';

    angular
        .module('songApp')
        .filter('capitalize', capitalize);

    /*
    Capitalize Filter... for song names
     */
    function capitalize() {
        return function(input) {
            return (!!input) ? input.replace(/([^\W_]+[^\s-]*) */g, function(txt) {
                return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
            }) : '';
        };


    }
})();
