'use strict';


angular.module('myApp.home')

.directive("barChart", ["$window","$timeout", function($window, $timeout) {
    return {
        restrict: "A",
        template: "<svg></svg>",
        controllerAs: "vm",
        link: function(scope, elem, attrs) {
            var dataToPlot = getDescendantProp(scope.vm, attrs.chartData);
            console.log(dataToPlot);
            //var pathClass = "path";
            var xScale, yScale, xAxis, yAxis;
            var d3 = $window.d3;
            var rawSvg = elem.find("svg")[0];
            console.log(rawSvg);
            var svg = d3.select(rawSvg);
            var width = 600;
            var height = 300;
            var padding = {
                'vertical': 100,
                'horizontal': 100,
                'top': 100,
                'bottom': 50,
            };
            var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);
    
            var colorChart = ["#E57E25", "#F29C1F", "#14A085", "#71C285", "#3498db"];

            var tip = d3.tip() //Cree le tip pour afficher les donnée on-hover
                .attr('class', 'd3-tip')
                .offset([-10, 0])
                .html(function(d) {
                    return "<strong>" + d.x + ":</strong> <span style='color:red'>" + d.y + "</span>";
                });

            svg.attr("width", width) //defini le svg
                .attr("height", height);

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
            };

            function setChartParameters() {

                xScale = d3.scale.ordinal().rangeRoundBands([padding.horizontal, width - padding.horizontal], 0.1).domain(dataToPlot.map(function(d) {
                    return d.x;
                })); //Defini echelle axe X

                yScale = d3.scale.linear().range([height - padding.bottom, padding.top]).domain([0, d3.max(dataToPlot, function(d) {
                    return d.y;
                })]); //Defini echelle axe Y

                xAxis = d3.svg.axis() //Defini axe X
                    .scale(xScale)
                    .tickSize(5)
                    .tickSubdivide(true);

                yAxis = d3.svg.axis() //Defini axe Y
                    .scale(yScale)
                    .ticks(3)
                    .tickFormat(d3.format("s")) //Ajoute suffixe K (10^3) M (10^6) etc ...
                    .tickSize(5)
                    .orient('left')
                    .tickSubdivide(true);
            }


            function selectColor(i) {
                return d3.rgb(colorChart[i]); //Choisi la couleur de la barre selon la list colorChart
            }

            function resize() {
                // need to update all the svg chart properties
                width = ($window.innerWidth - 230) / 2; //200 size of lateral bar;
                console.log($window);
                console.log(width);
                console.log("resizing :" + attrs.title);
                height = ($window.innerHeight - 145) / 2; //121 size of header bar;
                svg.attr("width", width) //defini le svg
                    .attr("height", height);
                svg.selectAll('*').remove();

                drawBarChart(0);
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
                    .attr("transform", "translate(" + (width / 2) + "," + (height - padding.bottom) + ")") // centre below axis
                    .text(message);
            }

            function updateAxis() {

                setChartParameters();
                svg.selectAll('.axis').remove();
                var xa = svg.append('svg:g')
                        .attr('class', 'x axis')
                        .attr('transform', 'translate(0,' + (height - padding.bottom) + ')')
                        .call(xAxis)
                        .attr('fill', "#556080")
                        .selectAll("text")
                        .style("text-anchor", "end")
                        .attr("dx", "-.8em")
                        .attr("dy", ".15em")
                        .attr("transform", "rotate(-65)"); //Place l'axe X plus les labels tourné a 65deg
                    xa.select("path").attr("marker-end", "url(#arrowhead)");


                    var ya = svg.append('svg:g')
                        .attr('class', 'y axis')
                        .attr('transform', 'translate(' + padding.horizontal + ',0)')
                        .call(yAxis)
                        .attr('fill', "#556080") //Place l'axe Y et les labels

                    ya.select("path").attr("marker-end", "url(#arrowhead)");
            }

            function drawBars(trans){
                        svg.selectAll('.bar') //Dessine les barre
                        .data(dataToPlot)
                        .enter()
                        .append('rect')
                        .classed("bar",true)
                        .attr("height", 0)
                        .attr("y", height - padding.bottom)
                        .style("fill", function(d, i) {
                            return selectColor(i)
                        })
                        .attr('x', function(d) { // sets the x position of the bar
                            return xScale(d.x);
                        })
                        .attr('width', xScale.rangeBand())
                        .on('mouseover', function(d) { //Comportement du tip
                            tip.show(d);
                            console.log(d);
                        })
                        .on('mouseout', function(d) { //Comportement du tip
                            d3.select(this)
                                .style("fill", function(d) {
                                    return selectColor(dataToPlot.indexOf(d))
                                });
                            console.log(d);
                            tip.hide(d);
                        })
                        .on('click', function(d) {
                            console.log(d);
                            if (attrs.enablezoom === undefined || attrs.enablezoom === true)
                            {
                                scope.vm.popupChart = scope.vm.zoomOnData(d.x);
                                console.log(scope.vm.popupChart);
                                scope.vm.popupActive = true;
                            }
                        });
                         // sets the width of bar
                        svg.selectAll('rect.bar').transition().duration(trans != undefined ? trans : 1500)
                        .attr('height', function(d) { // sets the height of bar
                            return ((height - padding.bottom) - yScale(d.y));
                        })
                        .attr('y', function(d) { // sets the y position of the bar
                            return yScale(d.y);
                        });

                    svg.call(tip); //Place le tip
            }

            function drawBarChart(trans) {
                if (!dataToPlot) {
                    displayImage("/assets/images/svg/graphic.svg", "No data available")
                } else {
                    //Dessine le graphique
                    setChartParameters();
                    console.log(attrs);
                    if (attrs.enablenav === undefined || attrs.enablenav === true )
                    {
                        var button1 = svg.append('rect')
                                        .attr('width', 20)
                                        .attr('height', 20)
                                        .on("click", function()
                                        {
                                            dataToPlot = scope.vm.example;
                                            setChartParameters();
                                            updateAxis();
                                            drawBars();
                                        });
                        var button2 = svg.append('rect')
                                        .attr('width', 20)
                                        .attr('height', 20)
                                        .attr('x', 25)
                                        .on("click", function()
                                        {
                                            dataToPlot = scope.vm.example2;
                                            setChartParameters();
                                            updateAxis();
                                            drawBars();
                                        });
                        var button3 = svg.append('rect')
                                        .attr('width', 20)
                                        .attr('height', 20)
                                        .attr('x', 50)
                                        .on("click", function()
                                        {
                                            dataToPlot = scope.vm.example3;
                                            setChartParameters();
                                            updateAxis();
                                            drawBars();
                                        });
                        var button4 = svg.append('rect')
                                        .attr('width', 20)
                                        .attr('height', 20)
                                        .attr('x', 75)
                                        .on("click", function()
                                        {
                                            dataToPlot = scope.vm.example4;
                                            setChartParameters();
                                            updateAxis();
                                            drawBars();
                                        });
                    }

                    updateAxis();
                    // now add titles to the axes
                    svg.append("text")
                        .attr("text-anchor", "middle") // this makes it easy to centre the text as the transform is applied to the anchor
                        .attr("transform", "translate(" + padding.horizontal / 2 + "," + (height / 2) + ")rotate(-90)") // text is drawn off the screen top left, move down and out and rotate
                        .text("(DH)");

                    svg.append("text")
                        .attr("transform", "translate(" + (width / 2) + "," + (padding.bottom) + ")")
                    	.attr("text-anchor", "middle")
                        //.attr("text-anchor", "middle") // this makes it easy to centre the text as the transform is applied to the anchor
                        .text(attrs.title);

                        //.attr("text-anchor", "middle") // this makes it easy to centre the text as the transform is applied to the anchor
                    /*title.append("circle")
											.attr("r", 10)
											.cz
                	 .style("fill", "red");*/
                     drawBars(trans);
                }
            }

            if (window.addEventListener) { // most non-IE browsers and IE9
                window.addEventListener("resize", resize, false);
            } else if (window.attachEvent) { // Internet Explorer 5 or above
                window.attachEvent("onresize", resize);
            }
            scope.$watch("vm.loading", function(value) {
                dataToPlot = getDescendantProp(scope.vm, attrs.chartData);
                svg.selectAll('*').remove();
                if (!scope.vm.loading) {
                    drawBarChart();
                } else {
                    displayImage("/assets/images/svg/loading.svg", "Please wait ...");
                }
            });
        }
    };
}]);



