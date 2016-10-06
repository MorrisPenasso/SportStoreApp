var cart = angular.module("cart", []);

cart.factory("cartFactory", function () {

    var cartData = [];

    return {

        addProduct: function (id, name, price) {

            var addedToExistingItem = false;
            for (var i = 0, len = cartData.length; i < len; i++) {
                if (cartData[i].id == id) {
                    cartData[i].count + 1;
                    addedToExistingItem = true;
                    break;
                }
            }
            cartData.push({
                count: 1, id: id, price: price, name: name
            });
        },

        removeProduct: function (id) {
            for (var i = 0, len = cartData.length; i < len; i++) {
                if (cartData[i].id == id) {
                    cartData.splice(i, 1);
                    break;
                }
            }
        },

        getProducts: function () {

            return cartData;
        }
    }
});

cart.directive("cartSummary", function (cartFactory) {

    return {

        restrict: "E",
        templateUrl: "components/cart/cartSummary.html",
        controller: function ($scope) {

            var cartData = cartFactory.getProducts();

            $scope.total = function () {
                var total = 0;
                for (var i = 0, len = cartData.length; i < len; i++) {
                    total += (cartData[i].price * cartData[i].count);
                }
                return total;
            }

            $scope.itemCount = function () {

                var total = 0;
                for (var i = 0, len = cartData.length; i < len; i++) {

                    total += cartData[i].count;
                }
                return total;
            }
        }
    };
});
