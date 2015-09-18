/**
 * Created by Anthony on 18/09/2015.
 */
var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/', {
            templateUrl: 'partials/main.html',
            controller: 'mainCtrl'
        })
        .when('/backoffice', {
            templateUrl: 'partials/backoffice.html',
            controller: 'backofficeCtrl',
            publicAccess: true
        })
        .otherwise({
            redirectTo: '/'
        });
}]);

myApp.run( function($rootScope, $location) {

    // register listener to watch route changes
    $rootScope.$on( "$routeChangeStart", function(event, next, current) {
        /*if ( $rootScope.loggedUser == null ) {
            // no logged user, we should be going to #login
            if ( next.templateUrl == "partials/login.html" || next.templateUrl == "partials/register.html") {
                // already going to #login, no redirect needed
            } else {
                // not going to #login, we should redirect now
                $location.path( "/login" );
            }
        }*/
    });
})