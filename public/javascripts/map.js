"use strict";

var Map = (function(){
	var svg = {},
		datum = [];

	function init(el, data) {
		if (el) {
			svg = d3.select("#"+el);
			datum = data;
			//bindToEl(svg, data);
			mergeData(svg);
		} else {
			console.log("please supply an element to bind");
		}
	}

	function mergeData(svgEl) {
		d3.json("/javascripts/financialRecords.json", function(data) {
			for (var state in data) {
				if (data.hasOwnProperty(state) && (typeof data[state] == "object")) {
				 	var result = datum.filter(function(datum) {
				        return datum.n.toLowerCase() == state.toLowerCase();
				    });
			    	for (var record in data[state]) {
			    		result[0][record] = data[state][record];
			 		}
				 } 
			}
			bindToEl(svgEl, datum);
		});
	}

	function bindToEl(svg, data) {
	  svg.selectAll("path")
	  	.data(data)
	  	.enter()
	  	.append("path")
	  	.attr("class", function(d) {
	  		return d.n;
	  	})
	  	.attr("d", function(d) {
	  		return d.d;
	  	});

	  	svg.selectAll("text")
	  	.data(data)
	  	.enter()
	  	.append("text")
	  	.text(function(d) {
	  		return d.a;
	  	});
	}

	return {
		"init": init
	}
}());

Map.init("map-container", mapdata);