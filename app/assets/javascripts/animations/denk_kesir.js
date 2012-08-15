
var animationFillColor = "#aaa";
var animationStrokeColor = "#333";
var animationStrokeWidth = 2;

var fillColor = "#bfe8ef";
var strokeColor = "#255b63";
var strokeWidth = 2;

var Animation = function(){};Animation();
var Interaction =function(){};Interaction();

var createFraction = function (container, name, x, y, nominator, denominator, lineWidth) {
	if (lineWidth == null || lineWidth == undefined) {
		lineWidth = 20;
	}
	
	$(container).append('<div id="'+name+'"></div>').css("font-size", 16);
	$('#'+name).css("position", "absolute")
				.css("left", x+"px")
				.css("top", y+"px");
	
	$('#'+name).append('<div class="fractionLine"></div>');
	$('#'+name+' .fractionLine').css("position","absolute")
								.css("left", (26-lineWidth/2) + "px")
								.css("top", "16px")
								.css("width", lineWidth+"px")
								.css("height", "1px")
								.css("padding", 0)
								.css("border-top", "2px solid");
	
	$('#'+name).append('<p class="fractionNominator">'+nominator+'</p>');
	$('#'+name+' .fractionNominator').css("position", "absolute")
									.css("text-align", "center")
									.css("top", "0px")
									.css("left", "7px")
									.css("width", "40px");
	
	$('#'+name).append('<p class="fractionDenominator">'+denominator+'</p>');
	$('#'+name+' .fractionDenominator').css("position", "absolute")
										.css("text-align", "center")
										.css("top", "20px")
										.css("left", "7px")
										.css("width", "40px");
				
	return $('#'+name);
}

Animation.init = function(container) {	
	var pie1, pie2, pie3, pie4, pie5;
	var pieGroup1 = new Group();
	
	var pie6, pie7, pie8, pie9, pie10;
	var pieGroup2 = new Group();

	pie1 = new Path.SegmentedCircle(new Point(0, 0), 30, 1, 2, animationFillColor, true);
	pie1.strokeColor = animationStrokeColor;
	pie1.strokeWidth = animationStrokeWidth;
	pie1.opacity = 0;
	pieGroup1.addChild(pie1);
	
	pie2 = new Path.SegmentedCircle(new Point(0, 0), 30, 1, 2, animationFillColor, true);
	pie2.strokeColor = animationStrokeColor;
	pie2.strokeWidth = strokeWidth;
	pie2.opacity = 0;
	pieGroup1.addChild(pie2);
	
	pie3 = new Path.SegmentedCircle(new Point(120, 0), 30, 2, 4, animationFillColor, true);
	pie3.strokeColor = animationStrokeColor;
	pie3.strokeWidth = strokeWidth;
	pie3.opacity = 0;
	pieGroup1.addChild(pie3);
	
	pie4 = new Path.SegmentedCircle(new Point(120, 0), 30, 2, 4, animationFillColor, true);
	pie4.strokeColor = animationStrokeColor;
	pie4.strokeWidth = animationStrokeWidth;
	pie4.opacity = 0;
	pieGroup1.addChild(pie4);
	
	pie5 = new Path.SegmentedCircle(new Point(240, 0), 30, 4, 8, animationFillColor, true);
	pie5.strokeColor = animationStrokeColor;
	pie5.strokeWidth = animationStrokeWidth;
	pie5.opacity = 0;
	pieGroup1.addChild(pie5);

	
	pieGroup1.position = new Point(160,40);


	createFraction(container, "fraction1", 28, 100, 1, 2);
	
	createFraction(container, "fraction2", 126, 100, "1 x 2", "2 x 2", 42);	
	createFraction(container, "fraction3", 178, 100, "2", "4");
	$("#fraction3").append('<p class="equalSign">=</p>');
	$('#fraction3 .equalSign').css("position", "relative")
								.css("top", "9px");
								
								
	createFraction(container, "fraction4", 244, 100, "2 x 2", "4 x 2", 42);	
	createFraction(container, "fraction5", 296, 100, "4", "8");
	$("#fraction5").append('<p class="equalSign">=</p>');
	$('#fraction5 .equalSign').css("position", "relative")
								.css("top", "9px");
	
	
	
	createFraction(container, "fraction6", 106, 152, "1", "2");
	createFraction(container, "fraction7", 148, 152, "2", "4");
	$("#fraction7").append('<p class="equalSign">=</p>');
	$('#fraction7 .equalSign').css("position", "relative")
								.css("top", "9px");
	createFraction(container, "fraction8", 190, 152, "4", "8");
	$("#fraction8").append('<p class="equalSign">=</p>');
	$('#fraction8 .equalSign').css("position", "relative")
								.css("top", "9px");

	
	
	
	pie6 = new Path.SegmentedCircle(new Point(0, 0), 30, 4, 8, animationFillColor, true);
	pie6.strokeColor = animationStrokeColor;
	pie6.strokeWidth = animationStrokeWidth;
	pie6.opacity = 0;
	pieGroup2.addChild(pie6);
	
	pie7 = new Path.SegmentedCircle(new Point(0, 0), 30, 2, 4, animationFillColor, true);
	pie7.strokeColor = animationStrokeColor;
	pie7.strokeWidth = animationStrokeWidth;
	pie7.opacity = 0;
	pieGroup2.addChild(pie7);
	
	pie8 = new Path.SegmentedCircle(new Point(0, 0), 30, 4, 8, animationFillColor, true);
	pie8.strokeColor = animationStrokeColor;
	pie8.strokeWidth = animationStrokeWidth;
	pie8.opacity = 0;
	pieGroup2.addChild(pie8);
	
	pie9 = new Path.SegmentedCircle(new Point(120, 0), 30, 1, 2, animationFillColor, true);
	pie9.strokeColor = animationStrokeColor;
	pie9.strokeWidth = animationStrokeWidth;
	pie9.opacity = 0;
	pieGroup2.addChild(pie9);
	
	pie10 = new Path.SegmentedCircle(new Point(120, 0), 30, 2, 4, animationFillColor, true);
	pie10.strokeColor = animationStrokeColor;
	pie10.strokeWidth = animationStrokeWidth;
	pie10.opacity = 0;
	pieGroup2.addChild(pie10);
	
	pieGroup2.position = new Point(537,40);
	
	
	var offset = 437;
	createFraction(container, "fraction9", 28 + offset, 100, 4, 8);
	
	createFraction(container, "fraction10", 126 + offset, 100, "4 ÷ 2", "4 ÷ 2", 42);	
	createFraction(container, "fraction11", 178 + offset, 100, "2", "4");
	$("#fraction11").append('<p class="equalSign">=</p>');
	$('#fraction11 .equalSign').css("position", "relative")
								.css("top", "9px");
								
								
	createFraction(container, "fraction12", 244 + offset, 100, "2 ÷ 2", "4 ÷ 2", 42);	
	createFraction(container, "fraction13", 296 + offset, 100, "1", "2");
	$("#fraction13").append('<p class="equalSign">=</p>');
	$('#fraction13 .equalSign').css("position", "relative")
								.css("top", "9px");
								
								
								
	
	createFraction(container, "fraction14", 106 + offset, 152, "4", "8");
	createFraction(container, "fraction15", 148 + offset, 152, "2", "4");
	$("#fraction15").append('<p class="equalSign">=</p>');
	$('#fraction15 .equalSign').css("position", "relative")
								.css("top", "9px");
	createFraction(container, "fraction16", 190 + offset, 152, "1", "2");
	$("#fraction16").append('<p class="equalSign">=</p>');
	$('#fraction16 .equalSign').css("position", "relative")
								.css("top", "9px");
								
								
								
	var animationHelper = new AnimationHelper({
		fraction1Opacity: 0,
		fraction2Opacity: 0,
		fraction3Opacity: 0,
		fraction4Opacity: 0,
		fraction5Opacity: 0,
		fraction6Opacity: 0,
		fraction7Opacity: 0,
		fraction8Opacity: 0,
		
		fraction9Opacity: 0,
		fraction10Opacity: 0,
		fraction11Opacity: 0,
		fraction12Opacity: 0,
		fraction13Opacity: 0,
		fraction14Opacity: 0,
		fraction15Opacity: 0,
		fraction16Opacity: 0,
	})
								
	Animation.onFrame = function(event){
		$('#fraction1').css("opacity", animationHelper.fraction1Opacity);
		$('#fraction2').css("opacity", animationHelper.fraction2Opacity);
		$('#fraction3').css("opacity", animationHelper.fraction3Opacity);
		$('#fraction4').css("opacity", animationHelper.fraction4Opacity);
		$('#fraction5').css("opacity", animationHelper.fraction5Opacity);
		$('#fraction6').css("opacity", animationHelper.fraction6Opacity);
		$('#fraction7').css("opacity", animationHelper.fraction7Opacity);
		$('#fraction8').css("opacity", animationHelper.fraction8Opacity);
		
		$('#fraction9').css("opacity", animationHelper.fraction9Opacity);
		$('#fraction10').css("opacity", animationHelper.fraction10Opacity);
		$('#fraction11').css("opacity", animationHelper.fraction11Opacity);
		$('#fraction12').css("opacity", animationHelper.fraction12Opacity);
		$('#fraction13').css("opacity", animationHelper.fraction13Opacity);
		$('#fraction14').css("opacity", animationHelper.fraction14Opacity);
		$('#fraction15').css("opacity", animationHelper.fraction15Opacity);
		$('#fraction16').css("opacity", animationHelper.fraction16Opacity);
	}
	
	var duration = 1000;
	var delay = 0;
	var totalDelay = 0;
	
	pie1.animate({
		style: {
			opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
		
	animationHelper.animate({
		style: {
			fraction1Opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut',
	});
	
	pie2.animate({
		style: {
			opacity: 1
		},
		duration: duration,
		delay: totalDelay,
		animationType: 'easeInEaseOut'
	});
	
	pie2.animate({
		style: {
			position: new Point(pieGroup1.position.x, pieGroup1.position.y)
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
	
	pie3.animate({
		style: {
			opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut',
	});
	
	pie2.animate({
		style: {
			opacity: 0
		},
		duration: duration,
		delay: totalDelay + duration,
		animationType: 'easeInEaseOut'
	});
	
	animationHelper.animate({
		style: {
			fraction2Opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
	
	animationHelper.animate({
		style: {
			fraction3Opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
	
	pie4.animate({
		style: {
			opacity: 1
		},
		duration: duration,
		delay: totalDelay,
		animationType: 'easeInEaseOut',
	});

	pie4.animate({
		style: {
			position: new Point(pieGroup1.position.x + 120, pieGroup1.position.y)
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
	
	pie5.animate({
		style: {
			opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut',
	});
	
	pie4.animate({
		style: {
			opacity: 0
		},
		duration: duration,
		delay: totalDelay + duration,
		animationType: 'easeInEaseOut'
	});
	
	animationHelper.animate({
		style: {
			fraction4Opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
	
	animationHelper.animate({
		style: {
			fraction5Opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
	
	animationHelper.animate({
		style: {
			fraction6Opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
	
	animationHelper.animate({
		style: {
			fraction7Opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
	
	animationHelper.animate({
		style: {
			fraction8Opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
	
	
	totalDelay += duration;
	
	
	pie6.animate({
		style: {
			opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
		
	animationHelper.animate({
		style: {
			fraction9Opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut',
	});
	
	pie7.animate({
		style: {
			opacity: 1
		},
		duration: duration,
		delay: totalDelay,
		animationType: 'easeInEaseOut'
	});
	
	pie8.animate({
		style: {
			opacity: 1
		},
		duration: duration,
		delay: totalDelay,
		animationType: 'easeInEaseOut'
	});
	
	pie7.animate({
		style: {
			position: new Point(pieGroup2.position.x + 60, pieGroup2.position.y)
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
	
	pie8.animate({
		style: {
			position: new Point(pieGroup2.position.x + 60, pieGroup2.position.y)
		},
		duration: duration,
		delay: totalDelay,
		animationType: 'easeInEaseOut'
	});
	
	pie8.animate({
		style: {
			opacity: 0
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut',
	});
	
	animationHelper.animate({
		style: {
			fraction10Opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
	
	animationHelper.animate({
		style: {
			fraction11Opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
	
	pie9.animate({
		style: {
			opacity: 1
		},
		duration: duration,
		delay: totalDelay,
		animationType: 'easeInEaseOut',
	});
	
	pie10.animate({
		style: {
			opacity: 1
		},
		duration: duration,
		delay: totalDelay,
		animationType: 'easeInEaseOut',
	});

	pie9.animate({
		style: {
			position: new Point(pieGroup2.position.x + 180, pieGroup2.position.y)
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
	
	pie10.animate({
		style: {
			position: new Point(pieGroup2.position.x + 180, pieGroup2.position.y)
		},
		duration: duration,
		delay: totalDelay,
		animationType: 'easeInEaseOut'
	});
	
	pie10.animate({
		style: {
			opacity: 0
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut',
	});
	
	animationHelper.animate({
		style: {
			fraction12Opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
	
	animationHelper.animate({
		style: {
			fraction13Opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
	
	animationHelper.animate({
		style: {
			fraction14Opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
	
	animationHelper.animate({
		style: {
			fraction15Opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut'
	});
	
	animationHelper.animate({
		style: {
			fraction16Opacity: 1
		},
		duration: duration,
		delay: totalDelay += duration + delay,
		animationType: 'easeInEaseOut',
		callback: Main.animationFinished
	});
}

Interaction.getFramework = function () {
	return 'paper';
}

Interaction.init = function(container){
	Main.setObjective("Yanda verilen kesre denk kesir oluşturmak\niçin boşluğa uygun sayıyı yazınız. Daha sonra\n“Kontrol” düğmesine basınız.");
	//animationInit(Raphael("animation_container"));
	interactionInit(container);
};

function interactionInit(container) {
	var smallFractionDenominator = Math.floor(Math.random() * 4) + 2;
	var smallFractionNominator = Math.floor(Math.random() * (smallFractionDenominator-1)) + 1;
	
	var factor = Math.floor(Math.random() * 2) + 2;
	
	var firstFractionNominator, firstFractionDenominator;
	var secondFractionNominator, secondFractionDenominator;
	
	if (Math.floor(Math.random() * 2) == 0) {
		firstFractionNominator = smallFractionNominator;
		firstFractionDenominator = smallFractionDenominator;
		secondFractionNominator = smallFractionNominator * factor;
		secondFractionDenominator = smallFractionDenominator * factor;
	} else {
		secondFractionNominator = smallFractionNominator;
		secondFractionDenominator = smallFractionDenominator;
		firstFractionNominator = smallFractionNominator * factor;
		firstFractionDenominator = smallFractionDenominator * factor;
	}
	
	// firstF
	$(container).append('<div id="firstF"></div>');
	$('#firstF').css("position", "absolute")
				.css("top", "185px")
				.css("left", "114px")
				.css("width", "40px")
				.css("height", "40px");
	
	$('#firstF').append('<div id="exLine"></div>');
	$('#exLine').css("position","absolute")
				.css("left", "12px")
				.css("top", "26px")
				.css("width", "30px")
				.css("height", "1px")
				.css("padding", 0)
				.css("border-top", "2px solid");
	
	$('#firstF').append('<p id="nomm">'+firstFractionNominator+'</p>');
	$('#nomm').css("position", "absolute")
				.css("text-align", "center")
				.css("top", "0px")
				.css("left", "10px")
				.css("width", "34px")
				.css("font-size", 24);
	
	$('#firstF').append('<p id="denomm">'+firstFractionDenominator+'</p>');
	$('#denomm').css("position", "absolute")
				.css("text-align", "center")
				.css("top", "30px")
				.css("left", "10px")
				.css("width", "34px")
				.css("font-size", 24);
	
	
	
	missing = Math.floor(Math.random()*2);
	
	if (missing == 0) {
		$(container).append('<div id="secondF"></div>');
		$('#secondF').css("position", "absolute")
					.css("top", "185px")
					.css("left", "364px")
					.css("width", "40px")
					.css("height", "40px");
					
		$('#secondF').append('<div id="exLine2"></div>');
		$('#exLine2').css("position","absolute")
					.css("left", "12px")
					.css("top", "26px")
					.css("width", "30px")
					.css("height", "1px")
					.css("padding", 0)
					.css("border-top", "2px solid");

		$('#secondF').append('<p id="denomm2">'+secondFractionDenominator+'</p>');
		$('#denomm2').css("position", "absolute")
					.css("text-align", "center")
					.css("top", "30px")
					.css("left", "10px")
					.css("width", "34px")
					.css("font-size", 24);
	} else {
		$(container).append('<div id="secondF"></div>');
		$('#secondF').css("position", "absolute")
					.css("top", "185px")
					.css("left", "364px")
					.css("width", "40px")
					.css("height", "40px");
			
		$('#secondF').append('<div id="exLine2"></div>');
		$('#exLine2').css("position","absolute")
					.css("left", "12px")
					.css("top", "26px")
					.css("width", "30px")
					.css("height", "1px")
					.css("padding", 0)
					.css("border-top", "2px solid");

		$('#secondF').append('<p id="nomm2">'+secondFractionNominator+'</p>');
		$('#nomm2').css("position", "absolute")
					.css("text-align", "center")
					.css("top", "0px")
					.css("left", "10px")
					.css("width", "34px")
					.css("font-size", 24);
	}
	
	var shapeType = Math.floor(Math.random() * 3);	

	var pie1, pie2;
	
	switch (shapeType) {
		case 0:
			pie1 = new Path.SegmentedRectangle(82, 30, 120, 120, smallFractionDenominator, firstFractionDenominator/smallFractionDenominator, firstFractionNominator, fillColor, true);
			pie1.strokeColor = strokeColor;
			pie1.strokeWidth = 2;
			
			pie2 = new Path.SegmentedRectangle(332, 30, 120, 120, smallFractionDenominator, secondFractionDenominator/smallFractionDenominator, secondFractionNominator, fillColor, true);
			pie2.strokeColor = strokeColor;
			pie2.strokeWidth = 2;
			break;
			
		case 1:
			pie1 = new Path.SegmentedCircle(new Point(142, 90), 70, firstFractionNominator, firstFractionDenominator, fillColor, true);
			pie1.strokeColor = strokeColor;
			pie1.strokeWidth = 2;
			
			pie2 = new Path.SegmentedCircle(new Point(392, 90), 70, secondFractionNominator, secondFractionDenominator, fillColor, true);
			pie2.strokeColor = strokeColor;
			pie2.strokeWidth = 2;
			break;
		
		case 2:
			pie1 = new Path.SegmentedRectangle(52, 60, 180, 60, smallFractionDenominator, firstFractionDenominator/smallFractionDenominator, firstFractionNominator, fillColor, true);
			pie1.strokeColor = strokeColor;
			pie1.strokeWidth = 2;
			
			pie2 = new Path.SegmentedRectangle(302, 60, 180, 60, smallFractionDenominator, secondFractionDenominator/smallFractionDenominator, secondFractionNominator, fillColor, true);
			pie2.strokeColor = strokeColor;
			pie2.strokeWidth = 2;
			break;
	}
	
	$(container).append('<div id="statuss"></div>');
	$('#statuss').css("position", "absolute")
					.css("left", "160px")
					.css("top", "260px")
					.css("width", "200px")
					.css("height", "20px")
					.css("text-align", "center");
	
	
	pie2.opacity = 0;
	
	$(container).append('<input id="textInput" type="text" class="inp" pattern="[0-9]*" maxlength="2" />');
	$('#textInput').css("position", "absolute")
					.css("left", "374px")
					.css("width", "32")
					.css("height", "30")
					.css("box-sizing","border-box")
					.css("padding", "0")
					.css("font-size", 18)
					.css("text-align", "center");
	

	if (missing == 0) {
		$('#textInput').css("top", "175px");
	} else {
		$('#textInput').css("top", "215px");
	}
	
	$('#textInput').addClass('input');

							
	$(container).append('<input id="submitButton" type="button" class="control_button" />');
	$('#submitButton').css("position", "absolute")
						.css("right", "10px")
						.css("bottom", "10px");
	
	var tryCount = 0;
	
	submit = function(){
		if (tryCount == -1) {
			pie1.remove();
			pie2.remove();
			
			$('#statuss').remove();				
			$('#textInput').remove();
			$('#submitButton').remove();
			
			$('#firstF').remove();
			$('#secondF').remove();
			
			interactionInit(container);
			
			return;
		}
		
	    var val = $('#textInput').val();
		var intRegex = /^\d+$/;
	    if(!intRegex.test(val)) {
			$('#statuss').get(0).className = "status_alert";
			$('#statuss').html("Lütfen kutucuklara sayı giriniz.");
			return;
		}
		
		var correct;
		
		if (missing == 0) {
			correct = firstFractionDenominator/firstFractionNominator == secondFractionDenominator/parseInt($('#textInput').val());
		} else {
			correct = firstFractionDenominator/firstFractionNominator == parseInt($('#textInput').val())/secondFractionNominator;
		}
		
		if (correct) {
			$('#statuss').get(0).className = "status_true";
			$('#statuss').html("Tebrikler!");
			pie2.animate({
				style: {
					opacity: 1
				},
				duration: 500,
				animationType: 'easeInEaseOut'
			});
			
			$('#submitButton').get(0).className = "next_button";
			tryCount = -1;
			
			$("#textInput").get(0).onkeydown = function(event){
				if(event.keyCode != 13) {
					return false;
				}
			}
		} else {
			tryCount++;
			
			if (tryCount < 2) {
				$('#textInput').val("");
				$('#statuss').get(0).className = "status_false";
				$('#statuss').html("Tekrar deneyiniz.");
			} else {
				if (missing == 0) {
					$('#textInput').val(secondFractionNominator);
				} else {
					$('#textInput').val(secondFractionDenominator);
				}
				
				pie2.animate({
					style: {
						opacity: 1
					},
					duration: 500,
					animationType: 'easeInEaseOut'
				});
				
				$('#statuss').get(0).className = "status_false";
				$('#statuss').html("Olmadı! Doğru cevap yukarıda gösterilmiştir.");
				
				$('#submitButton').get(0).className = "next_button";
				tryCount = -1;
				
				$("#textInput").get(0).onkeydown = function(event){
					if(event.keyCode != 13) {
						return false;
					}
				}
			}
		}
	};
	
	
	$('#submitButton').click(submit);
	
	$("#textInput").keypress(function(event) {
		if(event.keyCode == 13) {
			submit();
		}
	});
		
}
