
var chart1; // globally available
var chart2;

$(document).ready(function() {
	//var colors = ['#33aa33', '#55aa55', '#ffaa33', '#ff3333', '#777777'];
	var colors = ['#33aa33', '#cccc33', '#ff7733', '#ff3333', '#666677'];
	chart1 = new Highcharts.Chart({
		chart: {
			renderTo: 'pie_chart',
			type: 'pie',
			plotBackgroundColor: '#eff4f9',
			plotBorderWidth: null,
			plotShadow: false
		},
		//colors: ['#058DC7', '#50B432', '#ED561B', '#DDDF00', '#24CBE5', '#64E572', '#FF9655', '#FFF263', '#6AF9C4'],
		colors: colors,
		title: {
			text: 'Current State'
		},
		subtitle: {
			text: lastStat['date_str']
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.point.name +'</b>: '+ this.y;
			}
		},
		plotOptions: {
			pie: {
				dataLabels: {
					enabled: true,
					color: '#000000',
					connectorColor: '#000000',
					formatter: function() {
						return '<b>'+ this.point.name +'</b>: '+ this.y;
					}
				}
			}
		},
		series: [{
			type: 'pie',
			name: 'Browser share',
			data: [
				['Accepted',		lastStat['accepted']],
				['Delivered',		lastStat['delivered']],
				['Finished',		lastStat['finished']],
				['Active',			lastStat['started'] + lastStat['rejected']],
				['Not Yet Started',	lastStat['unscheduled']]
			]
		}]
	});
	
	var categories = [];
	var accepted = [];
	var delivered = [];
	var finished = [];
	var active = [];
	var unscheduled = [];
	
	for (var i = 0; i < stats.length; i++) {
		console.log(stat);
		var stat = stats[i];
		
		categories.push(stat['date_str']);
		accepted.push(stat['accepted']);
		delivered.push(stat['delivered']);
		finished.push(stat['finished']);
		active.push(stat['started'] + stat['rejected']);
		unscheduled.push(stat['unscheduled']);
	}

	chart2 = new Highcharts.Chart({
	    chart: {
	        renderTo: 'stacked_area',
	        type: 'area'
	    },
		colors: colors,
	    title: {
	        text: 'Stats History'
	    },
	    // subtitle: {
	    //     text: 'Source: Wikipedia.org'
	    // },
	    xAxis: {
//	        categories: ['Aug 01', 'Aug 02'],
			categories: categories,
//	        tickmarkPlacement: 'on',
//	        title: {
//	            enabled: false
//	        }
	    },
	    yAxis: {
	        title: {
	            text: 'Number'
	        },
	        // labels: {
	        //     formatter: function() {
	        //         return this.value / 1000;
	        //     }
	        // }
	    },
	    tooltip: {
	        formatter: function() {
	            return ''+
	                this.series.name +': '+ Highcharts.numberFormat(this.y, 0, ',');
	        }
	    },
	    plotOptions: {
	        area: {
	            stacking: 'normal',
	            lineColor: '#666666',
	            lineWidth: 1,
	            marker: {
	                lineWidth: 1,
	                lineColor: '#666666'
	            }
	        }
	    },
	    series: [{
	        name: 'Accepted',
	        data: accepted
	    }, {
	        name: 'Delivered',
	        data: delivered
	    }, {
	        name: 'Finished',
	        data: finished
	    }, {
	        name: 'Active',
	        data: active
	    }, {
	        name: 'Not Yet Started',
	        data: unscheduled
	    }]
	});	
});

