sportStoreAdmin.constant("authUrl", "http://localhost:5500/users/login");
sportStoreAdmin.constant("orderUrl", "http://localhost:5500/orders");

sportStoreAdmin.controller("authCtrl",function ($scope, $http, $location, authUrl) {

    $scope.authenticate = function (user, pass) {

        var authDetails = { //create a structure array for Deployd

            username: user,
            password: pass,
            withCredentials: true
        };
    
        $http.post(authUrl, authDetails).success(function (data) {

            $location.path("/main");

        }).error(function (err) {

            $scope.authenticationError = err;
        })
    };
});

sportStoreAdmin.controller("mainCtrl", function ($scope) {

    $scope.screens = ["Products", "Orders"]; // buttons
    $scope.current = $scope.screens[0]; // current button clicked is on position zero (product)

    $scope.setScreen = function (index) {
        $scope.current =  $scope.screens[index];
    };

    $scope.getScreen = function()   {
        return $scope.current == "Products" ? "/admin/views/adminProducts.html" : "/admin/views/adminOrders.html";
    };
});

sportStoreAdmin.controller("ordersCtrl", function ($scope, $http, orderUrl) {

    $http.get(orderUrl).success(function (data) {

        $scope.orders = data;

    }).error(function (err) {

        //errors

    });

    $scope.showDetails = false;

    $scope.getValue = function (order) {

        var totalValue = 0;

        for (var i = 0, len = order.products.length; i < len; i++) {

            totalValue += ( order.products[i].count * order.products[i].price );
        };
        return totalValue;

    };

    $scope.getDetails = function (order) {

        $scope.showDetails = true;

        $scope.productDetails = order.products;
    };

    $scope.hideDetail = function () {

        $scope.showDetails = false;

    }

});