'use strict';

/*eslint angular/di: [2,"array"]*/


angular.module('myApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: '/app/home/home.html',
    controller: 'HOMEController',
    controllerAs:'vm'
  });
}]);
