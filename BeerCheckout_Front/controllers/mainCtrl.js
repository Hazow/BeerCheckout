/**
 * Created by Anthony on 18/09/2015.
 */
myApp.controller('mainCtrl', function ($scope,$location,$http,$rootScope) {

    $scope.products=null;


    $http.get('http://127.0.0.1:8080/product').
        success(function(data, status, headers, config) {
            console.log(data);
            $scope.products=data;
        }).
        error(function(data, status, headers, config) {
            console.log(data);
            $scope.products=null;
        });



});