myApp.controller("cartSummaryController", function ($scope, cartFactory) {

    $scope.cartData = cartFactory.getProducts();

    $scope.total = function () {

        $scope.totalCart = 0;

        for (var i = 0, len = $scope.cartData.length; i < len; i++) {

            $scope.totalCart += ($scope.cartData[i].price * $scope.cartData[i].count);
        }

        return $scope.totalCart;
    }

    $scope.remove = function (id) {

        cartFactory.removeProduct(id);
    };

});