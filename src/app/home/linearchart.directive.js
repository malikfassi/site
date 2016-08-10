'use strict';

angular.module('myApp.home')



.directive("linearChart", function($window) {
	return{
		restrict: "EA",
		template: "<svg width='300' height='200'></svg>",
		link: function(scope, elem, attrs){


			var dataToPlot=scope[attrs.chartData];
			var padding = 20;
			var pathClass = "path";
			var xScale, yScale, xAxisGen, yAxisGen, lineFun;

			var d3 = $window.d3;
			var rawSvg = elem.find("svg")[0];
			var svg = d3.select(rawSvg);
			var focus = svg.append("g") 
				.style("display", "none");
			var bisectDate = d3.bisector(function(d) { return d.y; }).left; // **

			function setChartParameters(){
				xScale = d3.scale.linear()
				.domain([dataToPlot[0].x, dataToPlot[dataToPlot.length - 1].x])
				.range([padding, rawSvg.clientWidth - padding]);

				yScale = d3.scale.linear()
				.domain([0, d3.max(dataToPlot, function (d) {
					return d.y;
				})])
				.range([rawSvg.clientHeight - padding, 0]);

				xAxisGen = d3.svg.axis()
				.scale(xScale)
				.orient("bottom")
				.ticks(dataToPlot.length - 1);

				yAxisGen = d3.svg.axis()
				.scale(yScale)
				.orient("left")
				.ticks(5);

				lineFun = d3.svg.line()
				.x(function (d) {
					return xScale(d.x);
				})
				.y(function (d) {
					return yScale(d.y);
				})
				.interpolate("basis");
			}

			function drawLineChart() {

				setChartParameters();

				svg.append("svg:g")
				.attr("class", "x axis")
				.attr("transform", "translate(0,180)")
				.call(xAxisGen);

				svg.append("svg:g")
				.attr("class", "y axis")
				.attr("transform", "translate(20,0)")
				.call(yAxisGen);

				svg.append("svg:path")
				.attr({
					d: lineFun(dataToPlot),
					"stroke": "blue",
					"stroke-width": 2,
					"fill": "none",
					"class": pathClass
				});


				focus.append("circle")
				.attr("class", "y")
				.style("fill", "none")
				.style("stroke", "blue")
				.attr("r", 4);



				svg.append("rect")
				.attr("width", 300)
				.attr("height", 200)
				.style("fill", "none")
				.style("pointer-events", "all")
				.on("mouseover", function() { focus.style("display", null); })
				.on("mouseout", function() { focus.style("display", "none"); })
				.on("mousemove", mousemove);


				function mousemove() {
					var x0 = xScale.invert(d3.mouse(this)[0]),
					i = bisectDate(dataToPlot, x0, 1),
					d0 = dataToPlot[i - 1],
					d1 = dataToPlot[i],
					d = x0 - d0.x > d1.x - x0 ? d1 : d0;



					focus.select("circle.y")
					.attr("transform",
						"translate(" + xScale(d.date) + "," +
							yScale(d.close) + ")");
				}
			}

			drawLineChart();

		}
	};
});