(function () {
  'use strict';
  
  angular.module('data')
  .controller('itemController', itemController);
  
  itemController.$inject = ['$stateParams', 'MenuDataService'];
  function itemController($stateParams, MenuDataService) {
    console.log($stateParams)
    var item = this;
    item.items = [];
    item.$onInit = function () {
      item.category = $stateParams.category
      MenuDataService.getItemsForCategory(item.category)
      .then(function (result) {
        item.items = result.data;
      });
    };
  }
  
})();