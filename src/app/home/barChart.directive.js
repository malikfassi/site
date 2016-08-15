'use strict';
/*eslint angular/di: [2,"array"]*/


angular.module('myApp.home')

.directive("barChart", ["$window", function($window) {
    return {
        restrict: "A",
        template: "<svg></svg>",
        controllerAs: "vm",
        link: function(scope, elem, attrs) {
            var dataToPlot = getDescendantProp(scope.vm, attrs.chartData);
            //var pathClass = "path";
            var xAxis, yAxis;
            var d3 = $window.d3;
            var rawSvg = elem.find("svg")[0];
            var svg = d3.select(rawSvg);
            var legend;
            var width = ($window.innerWidth - 245) / 2; //200 size of lateral bar;
            var height = ($window.innerHeight - 83) / 2; //121 size of header bar;
            var padding = {
                'vertical': 50,
                'horizontal': 50,
                'top': 100,
                'bottom': 50,
                'left': 50,
                'right': 30
            };
            var data, years, x0, x1, y;

            //make it a list if you want to focus on multiple data series
            var focus = ""; 

            // var colorChart = ["#E57E25", "#F29C1F", "#14A085", "#71C285", "#3498db"];
            var color = d3.scale.ordinal()
                .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);


            //Definition du ToolTip
            var tip = d3.tip() //Cree le tip pour afficher les donnée on-hover
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .html(function(d) {
                    return "<strong>" + d.name + "(" + d.year + "):</strong> <span style='color:red'>" + d.value + "</span>";
                });
            //définition de la taille du svg 
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

            function objPropInArray(arr, prop) {
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i]['name'] == prop)
                        return i;
                }
                return -1;
            }

            function factorizeData() {

            /**make data more digest for the bar chart.
             ** (rotation of matrix)
             ** instead of
             ** data = {"years": 2008,
             **         "data" : [{'name': 'ded', 'value': 48000}] };
             ** you get :   
             **    data = {
             **        "ded" : [{'year': 2008, value: 48000}];
             **     } 
            **/
                var output = [];
                var index;
                dataToPlot.forEach(function(elem) {
                    elem.data.forEach(function(data) {
                        index = objPropInArray(output, data.x);
                        if (index == -1)
                            output.push({
                                'name': data.x,
                                data: []
                            });
                        output.forEach(function(finalData) {
                            if (finalData.name == data.x)
                                finalData.data.push({
                                    'year': elem.year,
                                    'value': data.y,
                                    'name': data.x
                                });
                        });
                    });

                });
                return output;
            }

            function setChartParameters() {

                //define range coordinate of the groups
                x0 = d3.scale.ordinal()
                    .rangeRoundBands([padding.left, width - (padding.left + padding.right)], .1);
                //define range coordinate of data inside groups
                x1 = d3.scale.ordinal();
                //define range coordinate of y axis
                y = d3.scale.linear()
                    .range([height, padding.top]);
                years = dataToPlot.map(function(elem) {
                    return (elem.year);
                });
                //make data more digets
                data = factorizeData();
                //define domain of data (min and max displayed)
                x0.domain(data.map(function(d) {
                    return d.name;
                }));
                x1.domain(years.filter(function(d) {
                    if (!focus)
                        return true;
                    return (focus == d)
                })).rangeRoundBands([0, x0.rangeBand()]);
                y.domain([0, d3.max(data, function(d) {
                    return (d3.max(d.data, function(d) {
                        if (focus != d.year && focus) {
                            return (0);
                        }
                        return (d.value);
                    }));
                })]);
                //define axis
                xAxis = d3.svg.axis()
                    .scale(x0)
                    .orient("bottom");
                yAxis = d3.svg.axis()
                    .scale(y)
                    .orient("left")
                    .ticks(5)
                    .tickFormat(d3.format(".2s"));
            }

            function updateBars(trans) {
                setChartParameters();
                updateAxis();
                var state = svg.selectAll(".state");
                state.selectAll("rect").transition().duration(trans != undefined ? trans : 1500)
                    .attr("x", function(d) {
                        if (focus != d.year && focus) {
                            return (0);
                        }
                        //on rejouate une barre au nouvel emplacement
                        return x1(d.year);
                    })
                    .attr("width",
                        function(d) {
                            if (focus != d.year && focus)
                                return (0)
                            return x1.rangeBand()
                        })
                    .attr('opacity', function(d) {
                        if (focus != d.year && focus)
                            return (0);
                        return (1);
                    })
                    .attr("height", function(d) {
                        return (height) - y(d.value);
                    })
                    .attr('y', function(d) { // sets the y position of the bar
                        return y(d.value);
                    });
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

            function resize() {
                // need to update all the svg chart properties
                width = ($window.innerWidth - 245) / 2; //200 size of lateral bar;
                height = ($window.innerHeight - 83) / 2; //121 size of header bar;
                svg.attr("width", width) //defini le svg
                    .attr("height", height);
                svg.selectAll('*').remove();

                drawBarChart(0);
            }

            function updateAxis() {
                svg.selectAll('g.axis').remove();
                svg.append("g")
                    .attr("class", "x axis")
                    .attr("transform", "translate(0," + (height - padding.bottom) + ")")
                    .call(xAxis);

                svg.append("g")
                    .attr("class", "y axis")
                    .attr("transform", "translate(" + padding.left + "," + -padding.bottom + ")")
                    .call(yAxis)
                    .append("text")
                    .attr("dy", ".71em")
                    .style("text-anchor", "end")
                    .text("DH");
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

            function displayLegend() {
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

            function drawBarChart(trans) {
                if (!dataToPlot) {
                    displayImage("/assets/images/svg/graphic.svg", "No data available")
                } else {
                    setChartParameters();
                    updateAxis();


                    var state = svg.selectAll(".state")
                        .data(data)
                        .enter().append("g")
                        .attr("class", "state")
                        .attr("transform", function(d) {
                            return "translate(" + x0(d.name) + "," + (-padding.bottom) + ")";
                        });
                    svg.append("text")
                        .attr("text-anchor", "middle") // this makes it easy to centre the text as the transform is applied to the anchor
                        .attr("transform", "translate(" + (width / 2) + "," + 20 + ")") // centre below axis
                        .text(attrs.title);
                    svg.call(tip); //Place le tip
                    state.selectAll("rect")
                        .data(function(d) {
                            if (focus == d.year) {
                                return d.data.filter(function(d) {
                                    return (focus == d.year)
                                });
                            }
                            return d.data;
                        })
                        .enter().append("rect")
                        .attr("width", x1.rangeBand())
                        .attr("x", function(d) {
                            return x1(d.year);
                        })
                        .attr("height", 0)
                        .attr("y", height)
                        .style("fill", function(d) {
                            if (focus == d.year || !focus)
                                return color(d.year);
                        })
                        .on('mouseover', function(d) { //Comportement du tip
                            tip.show(d);
                        })
                        .on('mouseout', function() { //Comportement du tip
                            tip.hide();
                        });

                    state.selectAll("rect").transition().duration(trans != undefined ? trans : 1500).attr("height", function(d) {
                        return (height) - y(d.value);
                    }).attr('y', function(d) { // sets the y position of the bar
                        return y(d.value);
                    });
                    displayLegend();
                    updateLegend();
                }
            }
            drawBarChart();
            scope.$watch("vm."+attrs.chartData, function() {
                dataToPlot = getDescendantProp(scope.vm, attrs.chartData);
                svg.selectAll('*').remove();
                if (!scope.vm.loading || dataToPlot != undefined) {
                    drawBarChart();
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