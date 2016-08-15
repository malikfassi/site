/*eslint angular/di: [2,"array"]*/


angular.module('myApp.home')
    .factory('dataFactory', ['$http', function($http) {

     var urlBase = 'http://10.10.2.164:8080/ca?';
     var dataFactory = {};

     dataFactory.getData = function getData() {
         var request = new XMLHttpRequest();
         request.open('GET', 'app/data/data.json', false);
         request.send(null);
         return [request.status, request.response, {}];
     }
    
    dataFactory.getDataIFU = function (data) {
        return $http({
            url: urlBase,
            method: "GET",
            params: data
        });
    };
    return dataFactory;
}]);