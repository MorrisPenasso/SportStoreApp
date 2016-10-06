myApp.constant("productListActiveClass", "btn-primary")
     .constant("productListPageCount", 3)   // maximum number of products showed intothe product list
     .controller("productListCtrl", function ($scope, $filter, productListActiveClass, productListPageCount, cartFactory) {

         var selectedCategory = null;   //Category button selected
         $scope.selectedPage = 1;  //first page of product list
         $scope.pageSize = productListPageCount;    //max number of products for page

    $scope.selectCategory = function (newCategory) {

        selectedCategory = newCategory; //When i clicked a new category button, i insert these into variable
        $scope.selectedPage = 1;    //when i clicked a category button, will be showed the first page
    };

    $scope.selectPage = function (newPage) {

        $scope.selectedPage = newPage;  // the old page will be substituted when i clicked a new page
    };


    $scope.categoryFilterFn = function (product) {

        //All products will be filtered by button category that i clicked
        return selectedCategory == null || product.category == selectedCategory;
    };


    $scope.getCategoryClass = function (category) {

        // if the category that i clicked is equals to category that i passed in, the button will have the bootstrap class
        return selectedCategory == category ? productListActiveClass : ""; 
    };


    $scope.getPageClass = function (page) {
        // if the page that i clicked is equals to page that i passed in, the button will have the bootstrap class
        return $scope.selectedPage == page ? productListActiveClass : "";
    };

    $scope.addProductToCart = function (product) {

        cartFactory.addProduct(product.id, product.name, product.price);

    };
});