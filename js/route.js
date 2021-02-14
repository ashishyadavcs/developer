
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
  .when('/top300-most-important-javascript-interview-questions', {
    templateUrl: 'top300-most-important-javascript-interview-questions',
   })
    .when('/techskills', {
    templateUrl: 'techskills.html',
    
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
   .when('/ashishkumar', {
    templateUrl: 'ashishkumar.html',
    
   })
   .when('/hireme', {
    templateUrl: 'hireme.html',
    
   })
   .when('/website-designer-in-delhi', {
    templateUrl: 'website-designer-in-delhi.html',
    
   })
.otherwise({
 redirectTo: '/'
}); 
}]); 
