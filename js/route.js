
angular.module('myapp', ['ngRoute']).config(['$routeProvider',function($routeProvider)
{
$routeProvider
.when('/', {
 templateUrl: 'home.html',
 
})
.when('/services', {
    templateUrl: 'services.html',
   
   })
   .when('/portfolio', {
    templateUrl: 'portfolio.html',
    
   })
   .when('/payment-terms', {
    templateUrl: 'payment-terms.html',
    
   })
   .when('/contact-us', {
    templateUrl: 'contact-us.html',
   })
   .when('/aboutme', {
    templateUrl: 'aboutme.html',
    
   })
   .when('/hireme', {
    templateUrl: 'hireme.html',
    
   })
.otherwise({
 redirectTo: '/'
}); 
}]); 
