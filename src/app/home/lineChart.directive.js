'use strict';
/*eslint angular/di: [2,"array"]*/


angular.module('myApp.home')

.directive("lineChart", ["$window", function($window) {
    return {
        restrict: "A",
        template: "<svg></svg>",
        controllerAs: "vm",
        link: function(scope, elem, attrs) {
            var dataToPlot = getDescendantProp(scope.vm, attrs.chartData);
            //var pathClass = "path";
            var xAxis, yAxis, x0, y0;
            var d3 = $window.d3;
            var rawSvg = elem.find("svg")[0];
            var svg = d3.select(rawSvg);
            var legend;
            var width = ($window.innerWidth - 240) / 2; //200 size of lateral bar;
            var height = ($window.innerHeight - 83) / 2; //121 size of header bar;
            var padding = {
                'vertical': 50,
                'horizontal': 50,
                'top': 100,
                'bottom': 50,
                'left': 50,
                'right': 30
            };
            var years;
            var valueline;
            // var colorChart = ["#E57E25", "#F29C1F", "#14A085", "#71C285", "#3498db"];
            var color = d3.scale.ordinal()
                .range(["#E57E25", "#F29C1F", "#14A085", "#71C285", "#3498db", "#d0743c", "#ff8c00"]);
            var tip = d3.tip() //Cree le tip pour afficher les donnée on-hover
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .html(function(d) {
                    return "<strong>" + d.x + "(" + d.year + "):</strong> <span style='color:red'>" + d.y + "</span>";
                });
            var focus = '';

            /*svg.attr("width", width) //defini le svg
            .attr("height", height);*/
            svg.attr("width", width)
                .attr("height", height)
                .append("g")
                .attr("transform", "translate(" + padding.left + "," + padding.top + ")");

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

            function setChartParameters() {


                years = dataToPlot.map(function(elem) {
                    return (elem.year);
                });
                // Set the ranges
                x0 = d3.scale.ordinal()
                    .rangePoints([padding.left, width - (padding.left + padding.right)], .1);
                x0.domain(dataToPlot[0].data.map(function(d) {
                    return d.x;
                }));

                y0 = d3.scale.linear().range([height - padding.bottom, padding.bottom]);
                /*   y0.domain([0, d3.max(dataToPlot[0].data, function(d) {
                       return +d.y;
                   })]);*/

                y0.domain([0, d3.max(dataToPlot, function(d) {
                    return (d3.max(d.data, function(d) {
                        /*  if (focus != d.year && focus) {
                              return (0);
                          }*/
                        return (+d.y);
                    }));
                })]);

                // Define the axes
                xAxis = d3.svg.axis().scale(x0)
                    .orient("bottom");

                yAxis = d3.svg.axis().scale(y0)
                    .orient("left").ticks(5).tickFormat(d3.format(".2s"));


                // Define the lines
                valueline = d3.svg.line()
                    .x(function(d) {
                        return x0(d.x);
                    })
                    .y(function(d) {
                        return y0(d.y);
                    }).interpolate("linear");
            }

            function updateLegend() {
                legend.selectAll("rect")
                    .attr("stroke", function(d) {
                        if (focus == d)
                            return ("red");
                        return ("none");
                    }).attr("opacity", function(d) {
                        if (focus == d)
                            return 1
                        return .4
                    });
                legend.selectAll("text").attr("opacity", function(d) {
                    if (focus == d)
                        return 1
                    return .4
                });
            }

            function resize() {
                // need to update all the svg chart properties
                width = ($window.innerWidth - 240) / 2; //200 size of lateral bar;
                height = ($window.innerHeight - 83) / 2; //121 size of header bar;
                svg.attr("width", width) //defini le svg
                    .attr("height", height);
                svg.selectAll('*').remove();

                drawLineChart(0);
            }

            function updateAxis() {
                svg.selectAll('g.axis').remove();
                svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + (height - padding.bottom) + ")")
                    .call(xAxis);

                svg.append("g")
                    .attr("class", "y axis")
                    .attr("transform", "translate(" + padding.left + ",0)")
                    .call(yAxis)
                    .append("text")
                    .attr("dy", ".71em")
                    .style("text-anchor", "end")
                    .text("DH");
            }
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
            }

            function updateBars(trans) {
                setChartParameters();
                updateAxis();
                var state = svg.selectAll("g");
                state.selectAll(".line").transition().duration(trans != undefined ? trans : 1500)
                    .attr('opacity', function(d) {
                        if (focus != d.year && focus)
                            return (0);
                        return (1);
                    })
            }



            function drawLineChart() {
                if (!dataToPlot) {
                    displayImage("/assets/images/svg/graphic.svg", "No data available")
                } else {
                    setChartParameters();
                    updateAxis();


                    // Add the valueline path.
                    /*    svg.append("path")
                            .attr("class", "line")
                            .attr("d", valueline(dataToPlot[0].data));*/


                    var year = svg.selectAll(".year")
                        .data(dataToPlot)
                        .enter().append("g")
                        .attr("class", "year");
                    year.append("path")
                        .attr("class", "line")
                        .attr("d", function(d) {
                            return valueline(d.data)
                        })
                        .style("stroke", function(d) {
                            return color(d.year);
                        });

                    svg.call(tip); //Place le tip

                    // Add the scatterplot
                    year.selectAll("g").data(function(d) {
                            return d.data;
                        }).enter()
                        .append("circle")
                        .attr("r", 3.5)
                        .attr("cx", function(d) {
                            return x0(d.x);
                        })
                        .attr("cy", function(d) {
                            return y0(d.y);
                        }).on('mouseover', function(d) { //Comportement du tip
                            tip.show(d);
                        })
                        .on('mouseout', function() { //Comportement du tip
                            tip.hide();
                        });


                    legend = svg.selectAll(".legend")
                        .data(years.slice().reverse())
                        .enter().append("g")
                        .attr("class", "legend")
                        .attr("transform", function(d, i) {
                            return "translate(" + -(padding.right / 2) + "," + i * 20 + ")";
                        }).style("cursor", "pointer");

                    legend.append("text")
                        .attr("x", width - 24)
                        .attr("y", 9)
                        .attr("dy", ".35em")
                        .style("text-anchor", "end")
                        .text(function(d) {
                            return d;
                        });
                    legend.append("rect")
                        .attr("x", width - 18)
                        .attr("width", 18)
                        .attr("height", 18)
                        .style("fill", color)
                        .style("stroke-width", 1)
                        .on("click", function(d) {
                            if (focus == d)
                                focus = "";
                            else
                                focus = d;
                            updateBars();
                            updateLegend();
                        });
                }
            }
            drawLineChart();
            scope.$watch("vm." + attrs.chartData, function() {
                dataToPlot = getDescendantProp(scope.vm, attrs.chartData);
                svg.selectAll('*').remove();
                if (!scope.vm.loading) {
                    drawLineChart();
                } else {
                    displayImage("/assets/images/svg/loading.svg", "Please wait ...");
                }
            });

            if ($window.addEventListener) { // most non-IE browsers and IE9
                $window.addEventListener("resize", resize, false);
            } else if ($window.attachEvent) { // Internet Explorer 5 or above
                $window.attachEvent("onresize", resize);
            }
        }
    }
}]);