(function() {
  'use strict';

  angular
    .module('songApp')
    .run(runBlock);

  /** @ngInject */
  function runBlock() {



  	$(document).ready(function() {  
        $(".playListGrid").niceScroll({})
    });

  }

})();
