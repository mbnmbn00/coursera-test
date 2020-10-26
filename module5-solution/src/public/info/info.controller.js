(function () {
  "use strict";
  
  angular.module('public')
  .controller('InfoController', InfoController);
  
  InfoController.$inject = ['SignUpService', 'ApiPath'];
  function InfoController(SignUpService, ApiPath) {
    var $ctrl = this;
    $ctrl.userInfo = SignUpService.getUserInfo();
    $ctrl.result = SignUpService.getResult();
    $ctrl.basePath = ApiPath;
  }
})();