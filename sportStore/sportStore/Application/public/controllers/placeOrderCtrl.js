myApp.constant("orderUrl", "http://localhost:5500/orders");

myApp.controller("placeOrderCtrl", function ($scope, $http, $location, cartFactory, orderUrl) {
    
    $scope.sendOrder = function (shippingDetails) {

        var order = angular.copy(shippingDetails);

        order.products = cartFactory.getProducts();

        $http.post(orderUrl, order).success(function(data)  {

            $scope.data.orderId = data.id;
            order.products.length = 0;
        })
        .error(function(error)   {
            
            $scope.data.orderError = error;

        }).finally(function()   {
        
            $location.path("/complete")
        });
    };


});