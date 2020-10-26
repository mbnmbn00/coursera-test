(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);

SignUpService.$inject = ['$http', 'ApiPath'];
function SignUpService($http, ApiPath) {
  var service = this;
  service.checkShortName = function (shortName) {
    return $http.get(ApiPath + '/menu_items/' + shortName + '.json').then(
      function (response) {
      return response.data
    },
    function (data) {
      return false
    });
  };
  var userInfo = {};
  var result = {}
  service.getUserInfo = function () {
    return userInfo;
  };
  service.setUserInfo = function(inputInfo) {
    userInfo = inputInfo;
  };
  service.setResult = function(inputResult) {
    result = inputResult;
  };
  service.getResult = function() {
    return result;
  };
}
})();
