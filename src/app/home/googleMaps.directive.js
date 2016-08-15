'use strict';
/*eslint angular/di: [2,"array"]*/


angular.module('myApp.home')

.directive("googleMaps", ["$window", "$document", function($window, $document) {
    return {
        restrict: "E",
        controllerAs: "vm",
        template: "<div id='map'></div>",
        link: function(scope, elem, attrs) {
            var location = getDescendantProp(scope.vm, attrs.loc);
            //var pathClass = "path";
            /*var padding = {
                'vertical': 50,
                'horizontal': 50,
                'top': 100,
                'bottom': 50,
                'left': 50,
                'right': 30
            };*/

            function getDescendantProp(obj, desc) {
                /*
                 ** fonction recherchant dans obj les attributs donnés en string. 
                 ** ex : obj = { 
                 **            'b': {
                 **                  'c' : 'bonjour',
                 **                 }
                 **          }
                 **       desc = "b.c"
                 ** >> getDescendantProp(obj, desc)
                 ** >> bonjour
                 */
                var arr = desc.split(".");
                while (arr.length && (obj = obj[arr.shift()]));
                return obj;
            }
/*
            function displayImage(imgPath, message) {
                
                svg.append('image')
                    .attr('xlink:href', imgPath)
                    .attr('class', 'pico')
                    .attr('height', '100')
                    .attr('width', '100')
                    .attr('x', "50%")
                    .attr('y', "50%")
                    .attr('transform', "translate(-50,-50)");
                svg.append("text")
                    .attr("text-anchor", "middle") // this makes it easy to centre the text as the transform is applied to the anchor
                    .attr("transform", "translate(" + (width / 2) + "," + (padding.bottom) + ")") // centre below axis
                    .text(attrs.title);
                svg.append("text")
                    .attr("text-anchor", "middle") // this makes it easy to centre the text as the transform is applied to the anchor
                    .attr("transform", "translate(" + (width / 2) + "," + (height + padding.bottom) + ")") // centre below axis
                    .text(message);
            };*/

            function initMap() {
                var geocoder;
                var map;
                geocoder = new google.maps.Geocoder();
                var latlng = new google.maps.LatLng(-34.397, 150.644);

                var mapOptions = {
                    zoom: 8,
                    center: latlng,
                    disableDefaultUI: true,
                    scrollwheel: false,
                    navigationControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    draggable: false
                };

                function resizeMap() {

                    var width = ($window.innerWidth - 240) / 2; //200 size of lateral bar;
                    var height = ($window.innerHeight - 83) / 2; //121 size of header bar;

                    $document.getElementById('map').width(width);
                    $document.getElementById('map').height(height);
                }
                resizeMap()
                map = new google.maps.Map($document.getElementById('map'), mapOptions);
                geocoder.geocode({
                    'address': location
                }, function(results, status) {
                    if (status == 'OK') {
                        map.setCenter(results[0].geometry.location);
                        new google.maps.Marker({
                            map: map,
                            position: results[0].geometry.location
                        });
                    } else {
                        alert('Geocode was not successful for the following reason: ' + status);
                    }
                });
                google.maps.event.addDomListener(window, "resize", function() {

                    var center = map.getCenter();

                    resizeMap();

                    google.maps.event.trigger(map, "resize");
                    map.setCenter(center);

                });
            }
            scope.$watch("vm." + attrs.loc, function() {
                location = getDescendantProp(scope.vm, attrs.loc);
                if (!scope.vm.loading && location) {
                    initMap();
                } 
            });
        }
    }
}]);