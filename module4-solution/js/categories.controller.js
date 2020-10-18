(function () {
  'use strict';
  
  angular.module('data')
  .controller('categoriesController', categoriesController);
  
  categoriesController.$inject = ['MenuDataService'];
  function categoriesController(MenuDataService) {
    var mainList = this;
    mainList.items = [];
  
    mainList.$onInit = function () {
      MenuDataService.getAllCategories()
      .then(function (result) {
        mainList.items = result.data;
      });
    };
  }
  
  })();