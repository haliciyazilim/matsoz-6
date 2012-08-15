
var Interaction = function(){};Interaction();
var Animation = function(){};Animation();

Interaction.getFramework = function() {
	return 'paper';
}

Interaction.images = [{
	id: "fullImage",
	src: '/assets/animations/kare/kare01.png'
},
{
	id: "cornerA",
	src: '/assets/animations/kare/soru_KARE_kose_a.png'
},
{
	id: "cornerB",
	src: '/assets/animations/kare/soru_KARE_kose_b.png'
},
{
	id: "cornerC",
	src: '/assets/animations/kare/soru_KARE_kose_c.png'
},
{
	id: "cornerD",
	src: '/assets/animations/kare/soru_KARE_kose_d.png'
}]

Interaction.init = function(container) {
	paperAddOns();
	
	Main.setObjective('Karenin iç açıları toplamı 360° dir. Bunu görmek için "Oynat" düğmesine basınız.')
	
	// Images
	var fullImage = new Raster('fullImage');

	var cornerA = new Raster('cornerA');
	var cornerB = new Raster('cornerB');
	var cornerC = new Raster('cornerC');
	var cornerD = new Raster('cornerD');

	var cornerGroup = new Group();	
	cornerGroup.addChild(cornerA);
	cornerGroup.addChild(cornerB);
	cornerGroup.addChild(cornerC);
	cornerGroup.addChild(cornerD);
	
	var arrow;
	var angleText;
		
	var initializeAnimation = function () {
		AnimationManager.clearAnimations();
		fullImage.position = new Point(250,150);
		fullImage.opacity = 1;
	
		cornerA.position = new Point(206.5,194);
		cornerB.position = new Point(293.5,194);
		cornerC.position = new Point(293.5,107);
		cornerD.position = new Point(206.5,107);

		cornerGroup.opacity = 0;	
		
		if (arrow) {
			arrow.remove();
		}
		
		if (angleText) {
			angleText.remove();
		}
	};

	var runAnimation = function() {
		fullImage.animate({
			style: {
				opacity: 0
			},
			duration: 1000,
			delay: 3000
		})	
	
		cornerGroup.animate({
			style: {
				opacity: 1
			},
			duration: 1000,
			delay: 1000
		})
	
		duration = 1000;
		delay = 5000;
		delta = 63;

		cornerA.animate({
			style: {
				position: new Point(206.5 + delta, 194 - delta)
			},
			duration: duration,
			delay: delay,
			animationType: 'easeInEaseOut'
		})
	
		cornerB.animate({
			style: {
				position: new Point(293.5 - delta, 194 - delta)
			},
			duration: duration - 150*2,
			delay: delay+100,
			animationType: 'easeInEaseOut'
		})
	
		cornerC.animate({
			style: {
				position: new Point(293.5 - delta, 107 + delta)
			},
			duration: duration + 100*2,
			delay: delay + 200,
			animationType: 'easeInEaseOut'
		})
	
		cornerD.animate({
			style: {
				position: new Point(206.5 + delta, 107 + delta)
			},
			duration: duration,
			delay: delay + 250,
			animationType: 'easeInEaseOut'
		})
	
		arrowHelper = {endAngle: -Math.PI/3 + 0.4,
			 			opacity: 0,
						angle: 0};
		arrowHelper.animate = Item.prototype.animate;
		
		Interaction.onFrame = function(event) {
			if (arrow) {
				arrow.remove();
			}
			arrow = new Path.OneSidedRoundArrow(new Point(250,150), 75, -Math.PI/3 + 0.4, arrowHelper.endAngle, {arrowEnd: true});
			arrow.opacity = arrowHelper.opacity;
			arrow.strokeColor = 'black';
			arrow.strokeWidth = 2.5;
			if (angleText) {
				angleText.remove();
			}
		
			angleText = new PointText(new Point(312, 96));
			angleText.justification = 'left';
			angleText.fillColor = 'black';
			angleText.content = Math.floor(arrowHelper.angle) + "°";
			angleText.characterStyle = {
				fontSize: 16,
			}
			angleText.opacity = arrowHelper.opacity;

		}
	
		arrowHelper.animate({
			style: {
				endAngle: Math.PI*2 -Math.PI/3 + 0.33,
				angle: 360
			},
			duration: 2000,
			delay: 7000,
			animationType: 'easeInEaseOut',
			callback: function() {
				$('#replayButton').css('visibility', 'visible');
				$('#replayButton').fadeTo('fast', 1, function() {
					  
				});
			}
		});
	
		arrowHelper.animate({
			style: {
				opacity: 1
			},
			duration: 1000,
			delay: 7000,
			animationType: 'easeInEaseOut'
		});
	};

	initializeAnimation();
//	runAnimation();
		
	// Create the control button
	$(container).append('<input id="replayButton" type="button" class="play_button" />');
	$('#replayButton').css("position", "absolute")
					  .css("bottom", "10px")
					  .css("right", "10px");
	$('#replayButton').click(function () {
		initializeAnimation();
		runAnimation();
		$('#replayButton').fadeTo('fast', 0, function() {
			$('#replayButton').css('visibility', 'hidden');
		});
	});
}

paperAddOns = function () {
	Path.OneSidedRoundArrow = function(center, radius, startAngle, endAngle, options) {
		if (!options) {
			options = {};
		}
		
		if (!options.arrowHeadSize) {
			options.arrowHeadSize = 10;
		}
		if(!options.angle) {
			options.angle = 30;
		}
		
		var group = new Group();


		var point1 = new Point(center.x + Math.cos(startAngle) * radius,
							   center.y + Math.sin(startAngle) * radius);
							
		var point2 = new Point(center.x + Math.cos((startAngle+endAngle)/2) * radius,
							   center.y + Math.sin((startAngle+endAngle)/2) * radius);
							
		var point3 = new Point(center.x + Math.cos(endAngle) * radius,
							   center.y + Math.sin(endAngle) * radius);
							
							
		var path = new Path.Arc(point1, point2, point3);
		
		if (options.arrowEnd) {
			if (!options.arrowEndSize) {
				options.arrowEndSize = 3;
			}
			var circle = new Path.Circle(point1, options.arrowEndSize);
			group.addChild(circle);
			circle.fillColor = 'black';
		}
		
		var arrowHeadSize = options.arrowHeadSize;
		
		var _a = -90+Util.radianToDegree(Util.findAngle(center.x, center.y, point3.x, point3.y));
		
		var a1 = Util.degreeToRadians(180 + _a + options.angle);
		var a2 = Util.degreeToRadians(180 + _a - options.angle);
		var path2 = new Path.Line(
							point3,
							new Point( 
									point3.x + arrowHeadSize*Math.cos(a1),
									point3.y - arrowHeadSize*Math.sin(a1)
								) 
							);
		var path3 = new Path.Line(
							point3,
							new Point( 
									point3.x + arrowHeadSize*Math.cos(a2) , 
									point3.y - arrowHeadSize*Math.sin(a2) 
								) 
							);
		var pt = new Path();
		pt.add(point3);
		pt.add(new Point( 
						point3.x + arrowHeadSize*Math.cos(a1),
						point3.y - arrowHeadSize*Math.sin(a1)
					));
		pt.add(new Point( 
						point3.x + arrowHeadSize*Math.cos(a2) , 
						point3.y - arrowHeadSize*Math.sin(a2) 
					) );
		pt.closed = true;
		path.strokeColor = 'black';
		pt.style = {
			strokeColor: 'black',
			fillColor : 'black'
		};
		path2.strokeColor = 'black';
		path3.strokeColor = 'black';
		
		group.addChild(path);
		group.addChild(pt);
		group.addChild(path2);
				group.addChild(path3);
		return group;
	}
}

Animation.images = [{
	id: "kare01",
	src: '/assets/animations/kare/kare_ornek_01.png'
},
{
	id: "kare02",
	src: '/assets/animations/kare/kare_ornek_02.png'
},
{
	id: "kare03",
	src: '/assets/animations/kare/kare_ornek_03.png'
},
{
	id: "kare03",
	src: '/assets/animations/kare/kare_ornek_03.png'
},
{
	id: "kare04",
	src: '/assets/animations/kare/kare_ornek_04.png'
},
{
	id: "kare05",
	src: '/assets/animations/kare/kare_ornek_05.png'
},
{
	id: "kare06",
	src: '/assets/animations/kare/kare_ornek_06.png'
},
{
	id: "kare07",
	src: '/assets/animations/kare/kare_ornek_07.png'
},
{
	id: "kare08",
	src: '/assets/animations/kare/kare_ornek_08.png'
},
{
	id: "kare09",
	src: '/assets/animations/kare/kare_ornek_09.png'
}]

Animation.init = function (container) {
	var imageGroup = new Group();
	
	var kare01 = new Raster("kare01");
	var kare02 = new Raster("kare02");
	var kare03 = new Raster("kare03");
	var kare04 = new Raster("kare04");
	var kare05 = new Raster("kare05");
	var kare06 = new Raster("kare06");
	var kare07 = new Raster("kare07");
	var kare08 = new Raster("kare08");
	var kare09 = new Raster("kare09");
	
	imageGroup.addChild(kare01);
	imageGroup.addChild(kare02);
	imageGroup.addChild(kare03);
	imageGroup.addChild(kare04);
	imageGroup.addChild(kare05);
	imageGroup.addChild(kare06);
	imageGroup.addChild(kare07);
	imageGroup.addChild(kare08);
	imageGroup.addChild(kare09);
	
	kare01.opacity = 0;
	kare02.opacity = 0;
	kare03.opacity = 0;
	kare04.opacity = 0;
	kare05.opacity = 0;
	kare06.opacity = 0;
	kare07.opacity = 0;
	kare08.opacity = 0;
	kare09.opacity = 0;
	
	imageGroup.position = new Point(200, 84);
	
	$(container).append('<div id="textHolder"></div>');
	$('#textHolder').css("line-height", "24px")
					.css("color", "#262626")
					.css("position", "absolute")
					.css("left", "400px")
					.css("top", "38px")
					.css("width", "330")
					.css("height", "100");

	$('#textHolder').append('<div id="text01">Bütün açıları diktir.</div>');
	$('#textHolder').append('<div id="text02">Bütün kenar uzunlukları eşittir.</div>');
	$('#textHolder').append('<div id="text03">Karşılıklı kenarları paraleldir.</div>');
	$('#textHolder').append('<div id="text04">Köşegen uzunlukları eşittir.</div>');
	$('#textHolder').append('<div id="text05">Köşegenleri birbirini dik olarak ortalar.</div>');

	$('#text01').css('opacity', 0);
	$('#text02').css('opacity', 0);
	$('#text03').css('opacity', 0);
	$('#text04').css('opacity', 0);
	$('#text05').css('opacity', 0);

	textHelper = {
		text01Opacity: 0,
		text02Opacity: 0,
		text03Opacity: 0,
		text04Opacity: 0,
		text05Opacity: 0
	};
	
	Animation.onFrame = function(event){
		$('#text01').css('opacity', textHelper.text01Opacity);
		$('#text02').css('opacity', textHelper.text02Opacity);
		$('#text03').css('opacity', textHelper.text03Opacity);
		$('#text04').css('opacity', textHelper.text04Opacity);
		$('#text05').css('opacity', textHelper.text05Opacity);
	}

	
	textHelper.animate = Item.prototype.animate;


	kare01.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 0,
		animationType: 'easeInEaseOut'
	});
	
	///
	
	kare03.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 1500,
		animationType: 'easeInEaseOut',
		callback: function () {
			kare01.remove();
		}
	});
	
	///
	
	textHelper.animate({
		style: {
			text01Opacity: 1
		},
		duration: 1000,
		delay: 3000,
		animationType: 'easeInEaseOut',
	});
	
	kare04.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 3000,
		animationType: 'easeInEaseOut',
		callback: function () {
			kare03.remove();
		}
	});

	///
	
	textHelper.animate({
		style: {
			text02Opacity: 1
		},
		duration: 1000,
		delay: 5000,
		animationType: 'easeInEaseOut',
	});
	
	kare05.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 5000,
		animationType: 'easeInEaseOut',
		callback: function () {
			kare04.remove();
		}
	});
	
	///
	
	textHelper.animate({
		style: {
			text03Opacity: 1
		},
		duration: 1000,
		delay: 7000,
		animationType: 'easeInEaseOut',
	});
	
	kare06.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 7000,
		animationType: 'easeInEaseOut',
		callback: function () {
			kare05.remove();
		}
	});
	
	kare07.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 9000,
		animationType: 'easeInEaseOut',
		callback: function () {
			kare06.remove();
		}
	});
	
	///
	
	textHelper.animate({
		style: {
			text04Opacity: 1
		},
		duration: 1000,
		delay: 11000,
		animationType: 'easeInEaseOut',
	});
	
	kare08.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 11000,
		animationType: 'easeInEaseOut',
		callback: function () {
			kare07.remove();
		}
	});
	
	///
	
	textHelper.animate({
		style: {
			text05Opacity: 1
		},
		duration: 1000,
		delay: 13000,
		animationType: 'easeInEaseOut',
		callback: Main.animationFinished
	});
	
	kare09.animate({
		style: {
			opacity: 1
		},
		duration: 1000,
		delay: 13000,
		animationType: 'easeInEaseOut',
		callback: function () {
			kare08.remove();
		}
	});
}
