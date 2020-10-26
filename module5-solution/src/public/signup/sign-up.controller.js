(function () {
  "use strict";
  
  angular.module('public')
  .controller('SignUpController', SignUpController);
  
  SignUpController.$inject = ['SignUpService'];
  function SignUpController(SignUpService) {
    var $ctrl = this;
    $ctrl.validate = function() {
      SignUpService.checkShortName($ctrl.user.favorite).then(function(result) {
        $ctrl.result = result
        if (result) {
          SignUpService.setUserInfo($ctrl.user)
          SignUpService.setResult($ctrl.result)
        }
      })
    }
  }
})();