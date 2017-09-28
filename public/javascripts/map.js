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
				    data[state]["path"] = result[0].d;
				 } 
			}
			console.log(data);
			bindToEl(svgEl, data);
		});
	}

	function bindToEl(svg, data) {
	  svg.selectAll("path")
	  	.data(data)
	  	.enter()
	  	.append("path")
	  	.attr("class", function(d) {
	  		return d.State;
	  	})
	  	.attr("d", function(d) {
	  		return d.path;
	  	});
	}

	return {
		"init": init
	}
}());

Map.init("map-container", mapdata);