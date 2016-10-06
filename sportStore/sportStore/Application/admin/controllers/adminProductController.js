sportStoreAdmin.constant("productsUrl","http://localhost:5500/products/");

sportStoreAdmin.config(function ($httpProvider) {
    $httpProvider.defaults.withCredentials = true;

});

sportStoreAdmin.controller("productCtrl", function ($scope, $resource, productsUrl) {

    $scope.getProducts = $resource(productsUrl + ":id", { id: "@id" });

    $scope.listProduct = function() {

        $scope.products = $scope.getProducts.query();
        
    };
    
    $scope.editData = function (data) {

        $scope.dataEdited = data;

        $scope.showEditing = true;
    };

    $scope.saveProduct = function (dataSave) {

        dataSave.$save();
        $scope.dataEdited = null;

        $scope.showEditing = false;
    };

    $scope.deleteData = function (data) {

        data.$delete().then(function () {

            $scope.products.splice($scope.products.indexOf(data, 1));
        })
    };

    $scope.listProduct();

});