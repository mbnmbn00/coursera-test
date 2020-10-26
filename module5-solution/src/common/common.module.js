(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://morning-falls-21321.herokuapp.com')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
