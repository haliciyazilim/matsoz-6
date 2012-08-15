
/*Styles*/
// Your styles go here

/*Styles*/

var Animation = function(){};Animation();
var Interaction = function(){};Interaction();

Animation.images = [{
	id: "car",
	src: '/assets/animations/cizgi_grafigi/car.jpg'
},
{
	id: "kadran",
	src: '/assets/animations/cizgi_grafigi/kadran.png'
},
{
	id: "akrep",
	src: '/assets/animations/cizgi_grafigi/akrep.png'
},
{
	id: "yelkovan",
	src: '/assets/animations/cizgi_grafigi/yelkovan.png'
}
];

Animation.init = function(container) {
	paperAddOns();
	
	xLabels = ["0", "1", "2", "3", "4"];
	// Create the chart
	var chart = {
		xAxisName: "Zaman",
		xAxisUnit: "Saat",
		yAxisName: "Yol (km)",
		xLabels: xLabels,
		yAxisLimits: [0, 40],
		yAxisStep: 10,
		data: []
	};
	
	var graph = new Path.LineGraph(new Point(520, 35), 180, 120, chart);
	
	// Title of the chart
	$(container).append('<div id="graph_title2"></div>');
	$('#graph_title2').css("color", "#262626")
					.css("text-align", "left")
					.css("position", "absolute")
					.css("left", "576px")
					.css("top", "16px")
					.css("width", "180")
					.css("height", "100")
					.css("font-size", "16px");

	$('#graph_title2').append('<div><b>Grafik: </b>Otomobilin zamana göre aldığı yol</div>');
	
	var animationHelper = new AnimationHelper({
		line1End: graph.getXYCoordinate(0,0),
		line2End: graph.getXYCoordinate(2,2),
		line3End: graph.getXYCoordinate(3,2),
	})
	
	var line1, line2, line3;
	
	animationHelper.animate({
		style: {
			line1End: graph.getXYCoordinate(2,2),
		},
		duration: 4000,
		delay: 2000,
		update: function() {
			if (line1) {
				line1.remove();
			}
			
			line1 = new Path.Line(graph.getXYCoordinate(0,0), this.line1End);
			line1.strokeColor = '#262626';
			line1.strokeWidth = 2;
		}
	});
	
	animationHelper.animate({
		style: {
			line2End: graph.getXYCoordinate(3,2),
		},
		duration: 2000,
		delay: 6000,
		update: function() {
			if (line2) {
				line2.remove();
			}
			
			line2 = new Path.Line(graph.getXYCoordinate(2,2), this.line2End);
			line2.strokeColor = '#262626';
			line2.strokeWidth = 2;
		}
	});
	
	animationHelper.animate({
		style: {
			line3End: graph.getXYCoordinate(4,3),
		},
		duration: 2000,
		delay: 8000,
		update: function() {
			if (line3) {
				line3.remove();
			}
			
			line3 = new Path.Line(graph.getXYCoordinate(3,2), this.line3End);
			line3.strokeColor = '#262626';
			line3.strokeWidth = 2;
		}
	});
	
	// Car
	var xStart = 20;
	var xEnd = 360;
	
	// var carStart = new Point(70, 140);
	// var carEnd = new Point(340, 140);
	
	var carHelper = new AnimationHelper({
		x: xStart
	})
	
	$(container).append('<img src="/assets/animations/cizgi_grafigi/car.jpg" id="car_image"></img>');
	$("#car_image").css("position", "absolute")
				   .css("left", xStart+"px")
				   .css("top", "140px")
				   .css("z-index", "1");
	
	carHelper.animate({
		style: {
			x: (xEnd - xStart)*2/3 + xStart
		},
		duration: 4000,
		delay: 2000,
		update: function() {
			$("#car_image").css("left", this.x+"px");
		}
	})
	
	carHelper.animate({
		style: {
			x: xEnd
		},
		duration: 2000,
		delay: 8000,
		update: function() {
			$("#car_image").css("left", this.x+"px");
		}
	})
	
	// var car = new Raster("car");
	// car.position = carStart;
	// car.animate({
	// 	style: {
	// 		position: new Point((carEnd.x - carStart.x)/3*2 + carStart.x, carStart.y)
	// 	},
	// 	duration: 2000,
	// 	delay: 1000
	// });
	// 
	// car.animate({
	// 	style: {
	// 		position: carEnd
	// 	},
	// 	duration: 1000,
	// 	delay: 4000
	// });
	
	// Clock
	kadran = new Raster("kadran");
	kadran.position = new Point(192,48);
	
	yelkovan = new Raster("yelkovan");
	yelkovan.position = new Point(192,48);
	
	akrep = new Raster("akrep");
	akrep.position = new Point(192,48);
	
	clockHelper = new AnimationHelper({
		yelkovanAngle: 0,
		akrepAngle: 0
	})
	
	akrep.lastTransformation = akrep.matrix;
	yelkovan.lastTransformation = yelkovan.matrix;
	
	clockHelper.animate({
		style: {
			yelkovanAngle: 360*4,
			akrepAngle: 120
		},
		delay: 2000,
		duration: 8000,
		update: function() {
			var matrix = new Matrix();
			matrix.rotate(this.akrepAngle, 192, 48);
			matrix.concatenate(akrep.lastTransformation);
			
			akrep.setMatrix(matrix);
			
			matrix = new Matrix();
			matrix.rotate(this.yelkovanAngle, 192, 48);
			matrix.concatenate(yelkovan.lastTransformation);
			
			yelkovan.setMatrix(matrix);
		},
		callback: Main.animationFinished
	})
}

Interaction.getFramework = function() {
	return 'paper';
}

Interaction.init = function(container) {
	interactionInit(container);
}

interactionInit = function(container) {
	// Variables
	var correctCircle;

	paperAddOns();
		
	// Create the random data
	var data = [];
	
	for (i = 0; i < 6; i++) {
		data.push(Math.floor(Math.random() * 4) + 91);
	}
	
	xLabels = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
	// Create the chart
	var chart = {
		xAxisName: "Zaman",
		xAxisUnit: "Gün",
		yAxisName: "Satış Fiyatı",
		yAxisUnit: "TL",
		xLabels: xLabels,
		yAxisLimits: [90, 94],
		xGridLabelStyle: {
			justification: 'right',
			fillColor: 'black',
			fontSize: 8,
			rotation: -90
		},
		data: data
	};
	
	var graph = new Path.LineGraph(new Point(80, 70), 180, 160, chart);
	//graph.scale(Main.scale, new Point(0,0));
	
	// Title of the chart
	$(container).append('<div id="graph_title"></div>');
	$('#graph_title').css("line-height", "24px")
					.css("color", "#262626")
					.css("position", "absolute")
					.css("left", "126px")
					.css("top", "36px")
					.css("width", "330")
					.css("height", "100")
					.css("font-size", "16px");

	$('#graph_title').append('<div><b>Grafik: </b>Altın satış fiyatı</div>');

	
	
	// Select random question
	randomDay = Math.floor(Math.random() * 6);
	correctAnswer = data[randomDay];
	
	Main.setObjective("Yandaki grafiğe göre altın satış fiyatı "+xLabels[randomDay]+" günü kaç lira olmuştur?");
	
	
	// Status
	$(container).append('<div id="status" class="status_field"></div>');
	$('#status').css("position", "absolute")
	        	.css("top", "180px")
	        	.css("left", "340px")
	        	.css("text-align", "center");
	       
	// Restart
	restart = function() {
		if (correctCircle) {
			correctCircle.remove();
		}
		$('#graph_title').remove();
		$('#textInput').remove();
		$('#submitButton').remove();
		$('#status').remove();
		graph.remove();
		interactionInit(container);		
	}
	
	
	// Submit
	noOfWrongAnswers = 0;
	
	submit = function () {
		val = $('#textInput').val();
		
		if (!Util.isInteger(val)) {
			$('#status').html('<span class="status_alert">Lütfen kutucuğa bir tamsayı giriniz</span>');
			return;
		}
		
		if (val == correctAnswer) {
			if (correctCircle) {
				correctCircle.remove();
			}
			correctCircle = new Path.Circle(graph.getXYCoordinate(randomDay, data[randomDay] - 90), 6);
			correctCircle.fillColor = 'red';
			
			$('#status').html('<span class="status_true">Tebrikler!</span>');
			$('#submitButton').get(0).className = "next_button";
			$('#submitButton').unbind("click");
			$('#submitButton').click(restart);
			submit = restart;
			
			$("#textInput").get(0).onkeydown = function(event){
				if(event.keyCode != 13) {
					return false;
				}
			}
		} else {
			if (noOfWrongAnswers == 0) {
				$('#status').html('<span class="status_false">Tekrar Deneyiniz!</span>');
				$('#textInput').val('');
				noOfWrongAnswers = 1;
			} else {
				if (correctCircle) {
					correctCircle.remove();
				}
				correctCircle = new Path.Circle(graph.getXYCoordinate(randomDay, data[randomDay] - 90), 6);
				correctCircle.fillColor = 'red';
				$('#status').html('<span class="status_false">Olmadı!</span>');
				$('#textInput').val(correctAnswer);
				$('#submitButton').get(0).className = "next_button";
				$('#submitButton').unbind("click");
				$('#submitButton').click(restart);
				submit = restart;
				
				$("#textInput").get(0).onkeydown = function(event){
					if(event.keyCode != 13) {
						return false;
					}
				}
			}
		}
	};
	
	// Create the control button
	$(container).append('<input id="submitButton" type="button" />');
	$('#submitButton').css("position", "absolute")
					  .css("top", "130px")
					  .css("left", "406px");
	$('#submitButton').addClass('control_button');
	$('#submitButton').click(submit);
	
	// Create the input field
	$(container).append('<input id="textInput" type="textbox" />');
	$('#textInput').css("position", "absolute")
				   .css("top", "80px")
				   .css("left", "416px");
	$('#textInput').addClass('number_input_field');
	$("#textInput").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
}

paperAddOns = function () {
	
	
	Path.LineGraph = function(point, width, height, chart) {
		var group = new Group();
		
		var gridStartOffset = 0;
	
		var numOfXPoints = chart.xLabels.length;
		var xStep = (width - 20) / (numOfXPoints - 1)
		var xStart = point.x + gridStartOffset;

		var yMax, yMin, yStep, yStart, numOfYPoints;
		
		if (chart.yAxisLimits == null) {
			yMax = Math.max.apply(null, chart.data);
			yMin = Math.min.apply(null, chart.data);
		} else {
			yMax = chart.yAxisLimits[1];
			yMin = chart.yAxisLimits[0];
		}

		var yAxisStep = chart.yAxisStep ? chart.yAxisStep : 1;
		var numOfYPoints = Math.floor((yMax - yMin)/yAxisStep) + 1;
		var yStep = -(height - 20) / ((yMax - yMin)/yAxisStep);
		var yStart = point.y + height - gridStartOffset;

		var defaultGridLabelStyle = {
			justification: 'right',
			fillColor: 'black'
		}
		
		var xGridLabelStyle = chart.xGridLabelStyle ? chart.xGridLabelStyle : defaultGridLabelStyle;
		var yGridLabelStyle = chart.yGridLabelStyle ? chart.yGridLabelStyle : defaultGridLabelStyle;
		
		// Grid Lines
		for (index = 0; index < numOfXPoints; index++) {
			gridLine = new Path.Line(new Point(xStep * index + xStart, yStart + gridStartOffset), new Point(xStep * index + xStart, yStep * (numOfYPoints - 1) + yStart - 10));
			gridLine.strokeWidth = 1;
			gridLine.strokeColor = 'gray';
			group.addChild(gridLine);
		}
		
		for (index = 0; index < numOfYPoints; index++) {
			gridLine = new Path.Line(new Point(xStart - gridStartOffset, index * yStep + yStart), new Point(xStep * (numOfXPoints-1) + xStart + 10, index * yStep + yStart));
			gridLine.strokeWidth = 1;
			gridLine.strokeColor = 'gray';
			group.addChild(gridLine);
		}
		
		// Grid Labels
		for (index = 0; index < numOfXPoints; index++) {
			var xOffset = -3;
			var yOffset = 15;
			
			if (xGridLabelStyle.rotation == 90) {
				xOffset = 2.5;
				yOffset = 5.5;
			}
			
			var text = new PointText(new Point(xStart + index*xStep + xOffset, yStart + yOffset + gridStartOffset));
			text.set_style(xGridLabelStyle);
			text.content = chart.xLabels[index];
			if (xGridLabelStyle.rotation) {
			 	text.rotate(xGridLabelStyle.rotation);
			}
			group.addChild(text);
		}
		
		for (index = 0; index < numOfYPoints; index++) {
			var text = new PointText(new Point(xStart - 10 - gridStartOffset, yStart + index*yStep + 1));
			text.set_style(yGridLabelStyle);
			text.content = (yMax - yMin) / (numOfYPoints-1) * index + yMin;
			group.addChild(text);
		}
		
		// Axes
		origin = new Point(point.add([0, height]));
		
		xAxis = new Path.OneSidedArrow(origin, origin.add([width + 10 + gridStartOffset, 0]),15, 30);
		xAxis.strokeWidth = 4;
		
		yAxis = new Path.OneSidedArrow(origin, origin.add([0, -height - 10 - gridStartOffset]),15, 30);
		yAxis.strokeWidth = 4;
		
		group.addChild(xAxis);
		group.addChild(yAxis);
		
		// Axis Labels
		var text = new PointText(new Point(xStart + xStep * (numOfXPoints-1) + 36, yStart+gridStartOffset - 4));
		text.justification = 'left';
		text.fillColor = 'black';
		text.content = chart.xAxisName;
		group.addChild(text);
		
		if (chart.xAxisUnit) {
			var text = new PointText(new Point(xStart + xStep * (numOfXPoints-1) + 36, yStart+gridStartOffset+12));
			text.justification = 'left';
			text.fillColor = 'black';
			text.content = '(' + chart.xAxisUnit + ')';
			group.addChild(text);
		}
		
		var offset = 16;
		if (chart.yAxisUnit) {
			offset = 0;
		}
		
		var text = new PointText(new Point(xStart - gridStartOffset, yStart + yStep * (numOfYPoints-1) - 52 + offset));
		text.justification = 'center';
		text.fillColor = 'black';
		text.content = chart.yAxisName;
		group.addChild(text);
		
		if (chart.yAxisUnit) {
			var text = new PointText(new Point(xStart - gridStartOffset, yStart + yStep * (numOfYPoints-1) - 36));
			text.justification = 'center';
			text.fillColor = 'black';
			text.content = '(' + chart.yAxisUnit + ')';
			group.addChild(text);
		}
		
		// Data Lines
		index = 0;
		
		var path = new Path();
		path.moveTo(new Point((xStep * index + xStart), ((chart.data[index] - yMin) * yStep + yStart)));
		for (index = 1; index < chart.data.length; index++) {
			path.lineTo(new Point((xStep * index + xStart), ((chart.data[index] - yMin) * yStep + yStart)));
		}
		path.strokeWidth = 2;
		path.strokeColor = 'black';
		
		group.addChild(path);
		
		group.getXYCoordinate = function(x, y) {
			return new Point((xStep * x + xStart), yStep * y + yStart);
		}
		
		return group;
	};
};
