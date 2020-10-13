(function () {
  'use strict';
  angular.module('NarrowItDownApp', [])
  .controller('NarrowItDownController', NarrowItDownController)
  .service('MenuSearchService', MenuSearchService)
  .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
  .directive('foundItems', foundItemsDirective);

  function foundItemsDirective() {
    var ddo = {
      templateUrl: 'foundItems.html',
      scope: {
        found: '<',
        onRemove: '&'
      }
    };
    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];
  function NarrowItDownController(MenuSearchService) {
    var controller = this;
    controller.searchTerm = "";
    controller.getMatchedMenuItems = function () {
      var promise = MenuSearchService.getMatchedMenuItems(controller.searchTerm);
      promise.then(function (response) {
        controller.found = response;
      })
    };
    controller.removeItem = function (itemIndex) {
      controller.found.splice(itemIndex, 1);
    };
  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];
  function MenuSearchService($http, ApiBasePath) {
    var service = this;
    service.getMatchedMenuItems = function (searchTerm) {
      return $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (result) {
        var foundItems = [];
        for (var i = 0; i < result.data.menu_items.length; i++) {
          var description = result.data.menu_items[i].description; 
          if (description.toLowerCase().indexOf(searchTerm) !== -1) {
            foundItems.push(result.data.menu_items[i])
          }
        }
        console.log(foundItems);
        return foundItems;
      })
    };
  }
})();