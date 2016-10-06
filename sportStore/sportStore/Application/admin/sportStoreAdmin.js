var sportStoreAdmin = angular.module("sportStoreAdmin", ["ngRoute", "ngResource"]);

sportStoreAdmin.config(function ($routeProvider) {

    $routeProvider.when("/login", {

        templateUrl: "views/adminLogin.html",
        controller: "authCtrl"

    })
    .when("/main", {

        templateUrl: "views/adminMain.html",
        controller: "mainCtrl"
    })

    .otherwise({ redirectTo: "/login" });
});