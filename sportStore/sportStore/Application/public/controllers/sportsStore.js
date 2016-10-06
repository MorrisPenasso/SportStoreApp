var myApp = angular.module("sportsStore", ["customFilters","cart", "ngRoute"]);

myApp.config(function ($routeProvider) {

    $routeProvider.when("/home", {

        templateUrl: "views/productList.html"
    })
        .when("/checkout", {

            templateUrl: "views/checkout.html"
        })
        .when("/placeorder", {

            templateUrl: "views/placeOrder.html",
            controller: "placeOrderCtrl"
        })
        .when("/complete", {

            templateUrl: "views/thankYou.html",
            controller: "placeOrderCtrl"
        })
        .otherwise({ redirectTo: "/home" });
});

myApp.constant("dataUrl", "http://localhost:5500/products");

myApp.controller("sportsStoreCtrl", function ($scope, $http, dataUrl, cartFactory) {

    $scope.data = {};   //list of products

    $http.get(dataUrl).success(function (data) {    // get products data into deployed server

        $scope.data.products = data;    // if call has been successfull, i insert data products into data.products into scope

    })
    .error(function (error) {

        $scope.data.error = error;
    });
});