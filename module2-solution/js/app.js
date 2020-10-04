(function () {
  'use strict';
  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var to_buy = this;
    to_buy.items = ShoppingListCheckOffService.get_to_buy_items();
    to_buy.removeItem = function (itemIndex) {
      ShoppingListCheckOffService.removeItem(itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var already_bought = this;
    already_bought.items = ShoppingListCheckOffService.get_bought_items();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    // List of shopping items
    var to_buy_items = [
      {name: "cookies", quantity: 10},
      {name: "candies", quantity: 20},
      {name: "yogurts", quantity: 30},
      {name: "brocoli", quantity: 40},
      {name: "fruits", quantity: 50},
    ];
    var bought_items = [];
    service.removeItem = function (itemIndex) {
      var item = to_buy_items[itemIndex];
      bought_items.push(item);
      to_buy_items.splice(itemIndex, 1);
    };
    service.get_to_buy_items = function () {
      return to_buy_items;
    };
    service.get_bought_items = function () {
      return bought_items;
    };
  }

})();