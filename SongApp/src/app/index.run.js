(function() {
  'use strict';

  angular
    .module('songApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock() {
  	$(document).ready(function() {  
      //console.log('Document Ready.');
      //console.log('NiceScroll Launch.');
        $(".playListGrid").niceScroll();
    });
  }

})();
