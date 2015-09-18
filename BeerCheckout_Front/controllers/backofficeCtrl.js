/**
 * Created by Anthony on 18/09/2015.
 */
myApp.controller('backofficeCtrl', function ($scope,$location,$http,$rootScope) {
    $scope.dataLoading=false;

    $scope.productToAdd = new Product();

    $scope.addProduct = function(){
        $scope.dataLoading = true;

        $http.post('http://127.0.0.1:8080/product', $scope.productToAdd).
            success(function(data, status, headers, config) {
                // this refers to the scope
                if(data!=null){
                    console.log(data);
                }else{
                    $scope.dataLoading = false;
                }

            }).
            error(function(data, status, headers, config) {
                console.log(data);
            });
    };
});