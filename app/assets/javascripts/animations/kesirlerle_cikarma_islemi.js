var Animation = {
	init:function(container){
		var fillColor = "#FFDEAD"
		var rect4 = new Path.SegmentedRectangle(560.5, 10.5, 20, 80, 1, 1, 1, fillColor);
		rect4.opacity = 0;
		var rect5 = new Path.SegmentedRectangle(500.5, 10.5, 60, 80, 1, 1, 1, fillColor)
		rect5.opacity = 0;
		var rect1 = new Path.SegmentedRectangle(60.5, 10.5, 160, 80, 2, 1, 1, fillColor);
		rect1.opacity = 0;
		var rect2 = new Path.SegmentedRectangle(280.5, 10.5, 160, 80, 8, 1, 1, fillColor);
		rect2.opacity = 0;
		var rect3 = new Path.SegmentedRectangle(500.5, 10.5, 160, 80, 8, 1, 0, fillColor);
		rect3.opacity = 0;

		var arrow = new Path.OneSidedArrow(new Point(450, 50), new Point(490, 50), 10, 30);
		arrow.opacity = 0;
		
		var dashedLinesGroup = new Group();
		for(i = 0; i < 7; i++){
			var dashedLine = new Path.Line(new Point(80.5+(i*20),10.5), new Point(80.5+(i*20),90.5))
			dashedLine.strokeColor = "black";
			dashedLine.dashArray = [3, 2];
			dashedLinesGroup.addChild(dashedLine);
		}
		dashedLinesGroup.opacity = 0;
			
		var pluss = new PointText(new Point(253, 64));
		pluss.justification = "center";
		pluss.fillColor = "black";
		pluss.fontSize = 26;
		pluss.content = "-";
		pluss.opacity = 0;
		
		var arr = new Group(); 
		var arroww = new Path.OneSidedArrow(new Point(220, 164), new Point(700, 164), 10, 30);
		var arroww2 = new Path.OneSidedArrow(new Point(700, 164), new Point(701, 164), 10, 30);
		arroww.rotate(180);
		arr.addChild(arroww);
		arr.addChild(arroww2);
		arr.opacity = 0;
		
		var bigDots = new Group();
		var bigDot1 = new Path.Circle(new Point(260.5, 164.5), 5);
		bigDot1.strokeColor = "black";
		bigDot1.fillColor = "black";
		var bigDot2 = new Path.Circle(new Point(660.5, 164.5), 5);
		bigDot2.strokeColor = "black";
		bigDot2.fillColor = "black";
		bigDots.addChild(bigDot1);
		bigDots.addChild(bigDot2);
		bigDots.opacity = 0;
		
		var smallDots = new Group();
		for(i = 0; i < 7; i++){
			var smallDot = new Path.Circle(new Point(310.5+(50*i), 164.5), 3);
			smallDot.strokeColor = "black";
			smallDot.fillColor = "black";
			smallDots.addChild(smallDot);
		}
		smallDots.opacity = 0;
		
		var arcGroup = new Group();
		var arc = new Path.Arc(new Point(450, 140), new Point(435, 134), new Point(420, 140));
		arc.strokeColor = "black";
		var linee1 = new Path.Line(new Point(420,140), new Point(422,132));
		linee1.strokeColor = "black";
		var linee2 = new Path.Line(new Point(420,140), new Point(426,142));
		linee2.strokeColor = "black";
		arcGroup.addChild(arc);
		arcGroup.addChild(linee1);
		arcGroup.addChild(linee2);
		arcGroup.opacity = 0;
		
		$(container).append('<div id="frac22"><div id="nom22">1</div><div id="line22"></div><div id="denom22">2</div></div>')
		
		$('#frac22').css("position", "absolute")
					.css("top", "108px")
					.css("left", "148px")
					.css("width", "16px")
					.css("height", "33px")
					.css("padding", 0)
					.css("margin", 0)
					.css("line-height","16px")
		
		$('#line22').css("height", "1px")
					.css("border-top", "1px solid")
					.css("padding", 0)
				
		$('#nom22').css("text-align", "center")
					.css("height", "16px")
				
		$('#denom22').css("text-align", "center")
					.css("height", "16px")
		
		$('#frac22').css("opacity", 0);
		$('#frac22').delay(2000).animate({opacity: 1}, 1000)
					.delay(1000).animate({opacity: 0}, 1000)
		
		$(container).append('<div id="frac33"><p id="nom33">1 x 4</p><div id="line33"></div><p id="denom33">2 x 4</p></div>')
		
		$('#frac33').css("position", "absolute")
					.css("top", "108px")
					.css("left", "138px")
					.css("width", "36px")
					.css("height", "33px")
					.css("padding", 0)
					.css("margin", 0)
					.css("color", "red")
					.css("line-height","16px")
		
		$('#line33').css("height", "1px")
				.css("border-top", "1px solid")
				.css("padding", 0)
				
		$('#nom33').css("text-align", "center")
				.css("height", "16px")
			
		$('#denom33').css("text-align", "center")
				.css("height", "16px")
		
		$('#frac33').css("opacity", 0);
		$('#frac33').delay(4000).animate({opacity: 1}, 1000)
					.delay(1000).animate({opacity: 0}, 1000)

		
		$(container).append('<div id="frac44"><div id="nom44">4</div><div id="line44"></div><div id="denom44">8</div></div>')
		
		$('#frac44').css("position", "absolute")
					.css("top", "108px")
					.css("left", "148px")
					.css("width", "16px")
					.css("height", "33px")
					.css("padding", 0)
					.css("margin", 0)
					.css("line-height","16px")
		
		$('#line44').css("height", "1px")
				.css("border-top", "1px solid")
				.css("padding", 0)
			
		$('#nom44').css("text-align", "center")
				.css("height", "16px")
			
		$('#denom44').css("text-align", "center")
				.css("height", "16px")
			
		$('#frac44').css("opacity", 0);
		$('#frac44').delay(6000).animate({opacity: 1}, 1000)
		
		$(container).append('<div id="frac55"><div id="nom55">1</div><div id="line55"></div><div id="denom55">8</div></div>')
		
		$('#frac55').css("position", "absolute")
					.css("top", "108px")
					.css("left", "368px")
					.css("width", "16px")
					.css("height", "33px")
					.css("padding", 0)
					.css("margin", 0)
					.css("line-height","16px")
		
		$('#line55').css("height", "1px")
				.css("border-top", "1px solid")
				.css("padding", 0)
				
		$('#nom55').css("text-align", "center")
				.css("height", "16px")
			
		$('#denom55').css("text-align", "center")
				.css("height", "16px")
			
		$('#frac55').css("opacity", 0)
		$('#frac55').delay(2000).animate({opacity: 1}, 1000)
		
		$(container).append('<div id="frac66"><div id="nom66">4</div><div id="line66"></div><div id="denom66">8</div></div><div id="pls">-</div><div id="frac666"><div id="nom666">1</div><div id="line666"></div><div id="denom666">8</div></div><div id="eqq">=</div><div id="frac6666"><div id="nom6666">3</div><div id="line6666"></div><div id="denom6666">8</div></div>')
		
		$('#frac66').css("position", "absolute")
					.css("top", "108px")
					.css("left", "558px")
					.css("width", "16px")
					.css("height", "33px")
					.css("padding", 0)
					.css("margin", 0)
					.css("line-height","16px")
		
		$('#line66').css("height", "1px")
				.css("border-top", "1px solid")
				.css("padding", 0)
		$('#nom66').css("text-align", "center")
				.css("height", "16px")
		$('#denom66').css("text-align", "center")
				.css("height", "16px")
		
		$('#pls')
			.css({
				position: "absolute",
				left: "579px",
				top:"116px",	
			});
		
		$('#frac666').css("position", "absolute")
					.css("top", "108px")
					.css("left", "590px")
					.css("width", "16px")
					.css("height", "33px")
					.css("padding", 0)
					.css("margin", 0)
					.css("line-height","16px")
			
		$('#line666').css("height", "1px")
				.css("border-top", "1px solid")
				.css("padding", 0)
		$('#nom666').css("text-align", "center")
				.css("height", "16px")
		$('#denom666').css("text-align", "center")
				.css("height", "16px")
		
		$('#eqq')
			.css({
				position: "absolute",
				left: "610px",
				top:"117px",	
			});
		
		$('#frac6666').css("position", "absolute")
					.css("top", "108px")
					.css("left", "622px")
					.css("width", "16px")
					.css("height", "33px")
					.css("padding", 0)
					.css("margin", 0)
					.css("line-height","16px")
		$('#line6666').css("height", "1px")
				.css("border-top", "1px solid")
				.css("padding", 0)
		$('#nom6666').css("text-align", "center")
				.css("height", "16px")
		$('#denom6666').css("text-align", "center")
				.css("height", "16px")
		
		$('#frac66').css("opacity", 0).delay(11000).animate({opacity: 1}, 1000)
		$('#pls').css("opacity", 0).delay(11000).animate({opacity: 1}, 1000)
		$('#frac666').css("opacity", 0).delay(11000).animate({opacity: 1}, 1000)
		$('#eqq').css("opacity", 0).delay(11000).animate({opacity: 1}, 1000)
		$('#frac6666').css("opacity", 0).delay(13000).animate({opacity: 1}, 500)
		
		$(container).append('<p id="zerro">0</p>')
		$('#zerro').css({
			position: "absolute",
			left: "269px",
			top: "150px",
			fontSize: 24,
		//	fontWeight: "bold"
		});
		$('#zerro').css("opacity", 0).delay(16000).animate({opacity: 1}, 1000)
		
		$(container).append('<p id="onne">1</p>')
		$('#onne').css({
			position: "absolute",
			left: "667px",
			top: "150px",
			fontSize: 24,
		//	fontWeight: "bold"
		});
		$('#onne').css("opacity", 0).delay(16000).animate({opacity: 1}, 1000)
		
		$(container).append('<div id="frac222"><div id="nom222">1</div><div id="line222"></div><div id="denom222">2</div></div>')
		
		$('#frac222').css("position", "absolute")
					.css("top", "143px")
					.css("left", "468px")
					.css("width", "16px")
					.css("height", "33px")
					.css("padding", 0)
					.css("margin", 0)
					.css("line-height","16px")
		
		$('#line222').css("height", "1px")
				.css("border-top", "1px solid")
				.css("padding", 0)
		$('#nom222').css("text-align", "center")
				.css("height", "16px")
		$('#denom222').css("text-align", "center")
				.css("height", "16px")
		
		$('#frac222').css("opacity", 0);
		$('#frac222').delay(18000).animate({opacity: 1}, 1000)
					 .delay(2000).animate({opacity: 0}, 1000)
		
		$(container).append('<div id="frac333"><div id="nom333">4</div><div id="line333"></div><div id="denom333">8</div></div>')
		
		$('#frac333').css("position", "absolute")
					.css("top", "143px")
					.css("left", "468px")
					.css("width", "16px")
					.css("height", "33px")
					.css("padding", 0)
					.css("margin", 0)
					.css("color", "red")
					.css("line-height","16px")
		
		$('#line333').css("height", "1px")
				.css("border-top", "1px solid")
				.css("padding", 0)
				
		$('#nom333').css("text-align", "center")
				.css("height", "16px")
				
		$('#denom333').css("text-align", "center")
				.css("height", "16px")
		
		$('#frac333').css("opacity", 0);
		$('#frac333').delay(21000).animate({opacity: 1}, 1000)
					 .delay(2000).animate({opacity: 0}, 0)
		
		$(container).append('<div id="frac3333"><div id="nom3333">4</div><div id="line3333"></div><div id="denom3333">8</div></div>')
		
		$('#frac3333').css("position", "absolute")
					.css("top", "143px")
					.css("left", "468px")
					.css("width", "16px")
					.css("height", "33px")
					.css("padding", 0)
					.css("margin", 0)
					.css("line-height","16px")
		
		$('#line3333').css("height", "1px")
				.css("border-top", "1px solid")
				.css("padding", 0)
				
		$('#nom3333').css("text-align", "center")
				.css("height", "16px")
				
		$('#denom3333').css("text-align", "center")
				.css("height", "16px")
		
		$('#frac3333').css("opacity", 0);
		$('#frac3333').delay(24000).animate({opacity: 1}, 0)
		
		
		$(container).append('<div id="frac444"><div id="nom444">3</div><div id="line444"></div><div id="denom444">8</div></div>')
		
		$('#frac444').css("position", "absolute")
					.css("top", "143px")
					.css("left", "418px")
					.css("width", "16px")
					.css("height", "33px")
					.css("padding", 0)
					.css("margin", 0)
					.css("line-height","16px")
		
		$('#line444').css("height", "1px")
				.css("border-top", "1px solid")
				.css("padding", 0)
				
		$('#nom444').css("text-align", "center")
				.css("height", "16px")
				
		$('#denom444').css("text-align", "center")
				.css("height", "16px")
				
		$('#frac444').css("opacity", 0);
		$('#frac444').delay(23000).animate({opacity: 1}, 1000)
		
		$(container).append('<div id="frac555"><div id="nom555">1</div><div id="line555"></div><div id="denom555">8</div></div>')
		
		$('#frac555').css("position", "absolute")
					.css("top", "113px")
					.css("left", "443px")
					.css("width", "16px")
					.css("height", "33px")
					.css("padding", 0)
					.css("margin", 0)
					.css("line-height","16px")
		
		$('#line555').css("height", "1px")
				.css("border-top", "1px solid")
				.css("padding", 0)
				
		$('#nom555').css("text-align", "center")
				.css("height", "16px")
				
		$('#denom555').css("text-align", "center")
				.css("height", "16px")
			
		$('#frac555').css("opacity", 0)
		$('#frac555').delay(19100).animate({opacity: 1}, 1000)
		
		
		
		rect1.animate({
			style:{
				opacity: 1,
			},
			duration: 1000,
			delay: 1000,
			animationType: 'easeOut'
		});
		
		rect2.animate({
			style:{
				opacity: 1,
			},
			duration: 1000,
			delay: 1000,
			animationType: 'easeOut'
		});
		
		dashedLinesGroup.animate({
			style: {
				opacity:1
			},
			duration: 1000,
			delay: 6000,
			animationType: 'easeInEaseOut'
		});
		
		pluss.animate({
			style:{
				opacity:1
			},
			duration: 1000,
			delay: 8000,
			animationType: 'easeInEaseOut'
		});
		
		arrow.animate({
			style:{
				opacity: 1
			},
			duration: 1000,
			delay: 8000,
			animationType: 'easeInEaseOut'
		
		});
		
		rect3.animate({
			style:{
				opacity: 1
			},
			duration: 1000,
			delay: 9000,
			animationType: 'easeInEaseOut'
		});
		
		rect4.animate({
			style:{
				opacity: 1,
			},
			duration: 1000,
			delay: 10000,
			animationType: 'easeInEaseOut'
		});
		
		rect4.animate({
			style:{
				opacity: 0,
			},
			duration: 1000,
			delay: 12000,
			animationType: 'easeInEaseOut'
		});
		
		
		rect5.animate({
			style:{
				opacity: 1,
			},
			duration: 1000,
			delay: 10000,
			animationType: 'easeInEaseOut'
		});
		
		arr.animate({
			style:{
				opacity: 1,
			},
			duration:1000,
			delay:14000,
			animationType: 'easeInEaseOut'
		});
		
		bigDots.animate({
			style:{
				opacity: 1,
			},
			duration:1000,
			delay:15000,
			animationType: 'easeInEaseOut'
		});
		
		smallDots.animate({
			style:{
				opacity: 1,
			},
			duration:1000,
			delay:17000,
			animationType: 'easeInEaseOut'
		});
		
		arcGroup.animate({
			style:{
				opacity: 1,
			},
			duration: 1000,
			delay:19000,
			animationType: 'easeInEaseOut'
		});
		Main.animationFinished(25000);
	}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki çıkarma işlemini yapınız ve kontrol ediniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			
			
			Interaction.appendStatus({
				bottom:'50px',
				right:'160px'
			});
			Interaction.appendButton({
				bottom:'40px',
				right:'40px'
			});
			
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){
			if(Interaction.questionDiv)
				$(Interaction.questionDiv).remove();
			Interaction.flushInputs();
			Interaction.appendInput({
				width: '30px',
				height: '32px',
				textAlign: 'center',
				position: 'absolute',
				left: '152px',
				top: "22px",
				fontSize: '20px', 
			});
			
			Interaction.appendInput({
				width: '30px',
				height: '32px',
				textAlign: 'center',
				position: 'absolute',
				left: '152px',
				top: "66px",
				fontSize: '20px', 
			});
			
			$(Interaction.inputs[0]).attr('maxlength', '2')
			$(Interaction.inputs[1]).attr('maxlength', '2')
			
			
			Interaction.inputs[0].style.color = "black";
			Interaction.inputs[1].style.color = "black";
			Interaction.questionDiv = document.createElement('div')
			Interaction.questionDiv.id = 'questionDiv';
			$(Interaction.container).append(Interaction.questionDiv);
			$(Interaction.questionDiv)
				.html('<div id="firstNum"></div><p id="plus">-</p><div id="fracc2"><div id="nom2"></div><div id="line2"></div><div id="denom2"></div></div><p id="eq">=</p><div id="line3">')
				.append(Interaction.inputs[0])
				.append(Interaction.inputs[1])
				.css({
					width: '200px',
					height: '120px',
					position:'absolute',
					left: '160px',
					top: '40px',
					fontSize: '24px',
					textAlign: 'left',
				});
				
			$('#plus')
				.css({
					position: "absolute",
					left: "66px",
					top:"46px",	
				});
				
			$('#fracc2').css("position", "absolute")
					.css("top", "34px")
					.css("left", "85px")
					.css("width", "30px")
					.css("height", "51px")
					.css("padding", 0)
					.css("margin", 0)
					.css("line-height","25px")
					
			$('#line2').css("height", "1px")
				.css("border-top", "2px solid")
				.css("padding", 0)
				
			$('#nom2').css("text-align", "center")
				.css("height", "25px")
				
			$('#denom2').css("text-align", "center")
				.css("height", "25px")
				
			$('#eq')
				.css({
					position: "absolute",
					left: "126px",
					top:"49px",	
				});
				
			$('#line3')
				.css({
					padding: 0,
					borderTop: "2px solid",
					width: "36px",
					height: "1px",
					position: "absolute",
					left: "150px",
					top: "60px",
				});
			
			Interaction.randomize = Math.floor(Math.random() * 3);	 // operation type
			Interaction.randomize2 = Math.floor(Math.random() * 2);	// fraction type
			Interaction.randomize3 = Math.floor(Math.random() * 2);	// denominator relationship
			Interaction.randomize4 = Math.floor(Math.random() * 2 )   // small fraction
			var a, b, c, d, wh;
	//		if(0){
			if(Interaction.randomize % 3 == 0){ // two fraction
				$('#firstNum').html('<div id="nom1"></div><div id="line1"></div><div id="denom1"></div>')
				
				$('#firstNum').css("position", "absolute")
					.css("top", "34px")
					.css("left", "24px")
					.css("width", "30px")
					.css("height", "51px")
					.css("padding", 0)
					.css("margin", 0)
					.css("line-height","25px")
				
				$('#line1').css("height", "1px")
				.css("border-top", "2px solid")
				.css("padding", 0)
				
				$('#nom1').css("text-align", "center")
				.css("height", "25px")
				
				$('#denom1').css("text-align", "center")
				.css("height", "25px")
				
					if(Interaction.randomize2 % 2 == 0){ // simple fraction
						if(Interaction.randomize3 % 2 == 0){ // equal denominators
							a = Math.floor(Math.random() * 10) + 3;
							Interaction.denom1 = a;
							Interaction.denom2 = a;
							do
								b = Math.floor(Math.random() * 11) + 1;
								while(b >= a)
							do
								c = Math.floor(Math.random() * 11) + 1;
								while(c >= a || c == b)
							
							Interaction.nom1 = Math.max(b,c);
							Interaction.nom2 = Math.min(b,c);
						}
						else{ // not-equal denominators ( x-2x or 2x-x)
							a = Math.floor(Math.random() * 6) + 2
							b = a * 2;
							do
								c = Math.floor(Math.random() * 5) + 1;
								while(c >= a)
							if(Interaction.randomize4 % 2 == 0){
							do
								d = Math.floor(Math.random() * 13) + 1;
								while(d >= b || d >= 2*c)
							}
							else{
							do
								d = Math.floor(Math.random() * 9) + 1;
								while(d >= b || d <= 2*c)
							}
							
							if(Interaction.randomize4 % 2 == 0){
								Interaction.denom1 = a;
								Interaction.denom2 = b;
								Interaction.nom1 = c;
								Interaction.nom2 = d;
							}
							else{
								Interaction.denom1 = b;
								Interaction.denom2 = a;
								Interaction.nom1 = d;
								Interaction.nom2 = c;
							}		
						}
					}
					else{ // compound fraction
						if(Interaction.randomize3 % 2 == 0){ // equal denominators
							a = Math.floor(Math.random() * 6) + 2
							Interaction.denom1 = a;
							Interaction.denom2 = a;
							do
								b = Math.floor(Math.random() * 12) + 4;
								while(b <= a || b % a == 0)
							do
								c = Math.floor(Math.random() * 12) + 4;
								while(c <= a || c % a == 0 || c == b)
							
							Interaction.nom1 = Math.max(b,c);
							Interaction.nom2 = Math.min(b,c);
						}
						else{ // not-equal denominators ( x-2x or 2x-x)
							a = Math.floor(Math.random() * 4) + 2;
							b = a * 2;
							do
								c = Math.floor(Math.random() * 5) + 3;
								while(c <= a || c % a == 0)
							if(Interaction.randomize4 % 2 == 0){
								do
									d = Math.floor(Math.random() * 12) + 5;
									while(d <= b || d % b == 0 || d >= 2*c)
							}
							else{
								do
									d = Math.floor(Math.random() * 12) + 5;
									while(d <= b || d % b == 0 || d <= 2*c)
							}
							
							if(Interaction.randomize4 % 2 == 0){
								Interaction.denom1 = a;
								Interaction.denom2 = b;
								Interaction.nom1 = c;
								Interaction.nom2 = d;
							}
							else{
								Interaction.denom1 = b;
								Interaction.denom2 = a;
								Interaction.nom1 = d;
								Interaction.nom2 = c;
							}		
						}
					}
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					Interaction.nom2D = $('#nom2').get(0);
					Interaction.denom2D = $('#denom2').get(0);
					
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
					$(Interaction.nom2D).html(Interaction.nom2);
					$(Interaction.denom2D).html(Interaction.denom2);	
			}
	//		else if(1){
			else if(Interaction.randomize % 3 == 1){ // two fraction -> one of them with wh
				$('#firstNum').html('<div id="wh1"></div><div id="nom1"></div><div id="line1"></div><div id="denom1"></div>')
				
				$('#firstNum').css("position", "absolute")
					.css("top", "34px")
					.css("left", "-6px")
					.css("width", "60px")
					.css("height", "51px")
					.css("padding", 0)
					.css("margin", 0)
					.css("line-height","25px")
				
				$('#wh1').css("height", "51px")
						.css("text-align", "center")
						.css("width","30px")
						.css("float", "left")
						.css("line-height","51px")
						
				$('#line1').css("width", "30px")
							.css("height", "1px")
							.css("border-top", "2px solid")
							.css("padding", 0)
							.css("float", "left")
							
				$('#nom1').css("text-align", "center")
							.css("width","30px")
							.css("float", "left")
							.css("height", "25px")
							
				$('#denom1').css("text-align", "center")
							.css("width","30px")
							.css("float", "left")
							.css("height", "25px")
				
				if(Interaction.randomize2 % 2 == 0){ // simple fraction
		//		if(0){
						if(Interaction.randomize3 % 2 == 0){ // equal denominators
							wh2 = Math.floor(Math.random() * 4) + 1
							a = Math.floor(Math.random() * 10) + 3;
							Interaction.denom1 = a;
							Interaction.denom2 = a;
							Interaction.wh = wh2;
							do
								b = Math.floor(Math.random() * 11) + 1;
								while(b >= a)
							do
								c = Math.floor(Math.random() * 11) + 1;
								while(c >= a )
							
							Interaction.nom1 = b;
							Interaction.nom2 = c;
						}
						else{ // not-equal denominators ( x-2x or 2x-x)
							wh2 = Math.floor(Math.random() * 4) + 1
							a = Math.floor(Math.random() * 6) + 2
							b = a * 2;
							do
								c = Math.floor(Math.random() * 4) + 1;
								while(c >= a)
							do
								d = Math.floor(Math.random() * 7) + 3;
								while(d >= b)
							
							Interaction.denom1 = a;
							Interaction.denom2 = b;
							Interaction.nom1 = c;
							Interaction.nom2 = d;
							Interaction.wh = wh2;
							
						}
					}
					else{ // compound fraction
						if(Interaction.randomize3 % 2 == 0){ // equal denominators
							wh2 = Math.floor(Math.random() * 4) + 1
							a = Math.floor(Math.random() * 6) + 3
							Interaction.denom1 = a;
							Interaction.denom2 = a;
							Interaction.wh = wh2;
							do
								b = Math.floor(Math.random() * 6) + 2;
								while(b >= a )
							do
								c = Math.floor(Math.random() * 12) + 4;
								while(c <= a || c % a == 0 || c >= ((wh2 * a) + b))
							
							Interaction.nom1 = b;
							Interaction.nom2 = c;
						}
						else{ // not-equal denominators ( x-2x or 2x-x)
							wh2 = Math.floor(Math.random() * 4) + 1
							a = Math.floor(Math.random() * 4) + 2;
							Interaction.wh = wh2;
							b = a * 2;
							do
								c = Math.floor(Math.random() * 4) + 1;
								while(c >= a)
							do
								d = Math.floor(Math.random() * 7) + 5;
								while(d <= b || d % b == 0 || d >= ((wh2 * 2 * a) + c))
							
							
							Interaction.denom1 = a;
							Interaction.denom2 = b;
							Interaction.nom1 = c;
							Interaction.nom2 = d;		
						}
					}
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					Interaction.nom2D = $('#nom2').get(0);
					Interaction.denom2D = $('#denom2').get(0);
					Interaction.whD = $('#wh1').get(0);
					
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
					$(Interaction.nom2D).html(Interaction.nom2);
					$(Interaction.denom2D).html(Interaction.denom2);
					$(Interaction.whD).html(Interaction.wh);
			}
			else{ // one natural number and one fraction
				$('#firstNum').html('<p id="wh1"></p>')
				
				$('#firstNum').css("position", "absolute")
					.css("top", "35px")
					.css("left", "32px")
					.css("width", "30px")
					.css("height", "51px")
					.css("padding", 0)
					.css("margin", 0)
					.css("line-height","25px")
				
				$('#wh1').css("height", "51px")
						.css("text-align", "center")
						.css("width","30px")
						.css("float", "left")
						.css("line-height","51px")
				
				wh2 = Math.floor(Math.random() * 4) + 1;
				Interaction.wh = wh2;
				if(Interaction.randomize2 % 2 == 0){ // simple fraction
					a = Math.floor(Math.random() * 9) + 2
					do
						b = Math.floor(Math.random() * 9) + 1;
						while(b >= a)
					Interaction.nom2 = b;
					Interaction.denom2 = a;
				}
				else{ // compound fraction
					a = Math.floor(Math.random() * 6) + 2;
					do
						b = Math.floor(Math.random() * 12) + 3;
						while(b <= a || b % a == 0 || b / a >= 5)
					Interaction.nom2 = b;
					Interaction.denom2 = a;
					do
						wh2 = Math.floor(Math.random() * 4 + 2);
						while(wh2 * a < b)
					Interaction.wh = wh2;
				}
				
				Interaction.nom2D = $('#nom2').get(0);
				Interaction.denom2D = $('#denom2').get(0);
				Interaction.whD = $('#wh1').get(0);
				
				$(Interaction.nom2D).html(Interaction.nom2);
				$(Interaction.denom2D).html(Interaction.denom2);
				$(Interaction.whD).html(Interaction.wh);
			}
		},
	isAnswerCorrect : function(values){
			if(Interaction.randomize % 3 == 0){
				Interaction.maxDenom = Math.max(Interaction.denom1, Interaction.denom2);
				Interaction.answer1 = Interaction.nom1 * (Interaction.maxDenom/Interaction.denom1) - Interaction.nom2 * (Interaction.maxDenom/Interaction.denom2);
				Interaction.answer2 = Interaction.maxDenom;
				if(values[0] * Interaction.answer2 == values[1] * Interaction.answer1)
					return true;
				else
					return false;
			}
			else if(Interaction.randomize % 3 == 1){
				Interaction.maxDenom = Math.max(Interaction.denom1, Interaction.denom2);
				Interaction.answer1 = ((Interaction.maxDenom * Interaction.wh)+(Interaction.nom1 * (Interaction.maxDenom/Interaction.denom1)) - Interaction.nom2 * (Interaction.maxDenom/Interaction.denom2));
				Interaction.answer2 = Interaction.maxDenom;
				if(values[0] * Interaction.answer2 == values[1] * Interaction.answer1)
					return true;
				else
					return false;
			}
			else{
				Interaction.answer1 = (Interaction.wh * Interaction.denom2) - Interaction.nom2;
				Interaction.answer2 = Interaction.denom2;
				if(values[0] * Interaction.answer2 == values[1] * Interaction.answer1)
					return true;
				else
					return false;
			}
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
			Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);
			Interaction.inputs[0].value = Interaction.answer1;
			Interaction.inputs[1].value = Interaction.answer2;
			Interaction.inputs[0].style.color = "green";
			Interaction.inputs[1].style.color = "green";
		},
}