var Animation = {
	init:function(container){		
			var rect1 = new Path.SegmentedRectangle(180.5,10.5,90,90, 1, 3, 1, new RgbColor(1, 0, 0, 0.45));
			var rect2 = new Path.SegmentedRectangle(480.5,10.5,90,90, 2, 1, 1, new RgbColor(0.2, 0.6, 1));
			// "#4682B4"
			rect1.insertAbove(rect2);
			var firstFracGroup = new Group();
			var firstNom = new PointText(new Point(224, 120));
			firstNom.justification = "center";
			firstNom.fillColor = "black";
			firstNom.content = "1";
			firstNom.fontSize = 16;
			var firstDenom = new PointText(new Point(225, 146));
			firstDenom.justification = "center";
			firstDenom.fillColor = "black";
			firstDenom.content = "3";
			firstDenom.fontSize = 16;
			var firstLine = new Path.Line(new Point(218, 126), new Point(232, 126));
			firstLine.strokeColor = "black";
			firstLine.strokeWidth = 2;
			firstFracGroup.addChild(firstNom);
			firstFracGroup.addChild(firstDenom);
			firstFracGroup.addChild(firstLine);
			
			var secondFracGroup = firstFracGroup.clone();
			secondFracGroup.position = new Point(418, 64);
			secondFracGroup.children[1].content = "2";
			
			var execGroup = new Group();
			var equal = new PointText(new Point(400, 152));
			equal.justification = "center";
			equal.fillColor = "black";
			equal.content = "=";
			equal.fontSize = 16;
			var cros = new PointText(new Point(356, 150));
			cros.justification = "center";
			cros.fillColor = "black";
			cros.content = "x";
			cros.fontSize = 16;
			execGroup.addChild(firstFracGroup.clone());
			execGroup.addChild(secondFracGroup.clone());
			execGroup.addChild(equal);
			execGroup.addChild(cros);
			execGroup.children[0].position = new Point(226, 82)
			execGroup.children[1].position = new Point(116.5, 81.5)
			
			for(i = 0; i < 3; i++){
				execGroup.children[0].children[i].opacity = 0;
				execGroup.children[1].children[i].opacity = 0;
			}
			execGroup.children[2].opacity = 0;
			execGroup.children[3].opacity = 0;
			
			var thirdFracGroup = firstFracGroup.clone();
			thirdFracGroup.position = new Point(312, 82);
			thirdFracGroup.children[1].content = "6";
			for(i = 0; i < 3; i++)
				thirdFracGroup.children[i].opacity = 0;
			
			rect1.animate({
				style: {
					position: new Point(378.5, 55.5),
				},
				duration:2000,
				delay:2500,
				animationType: 'easeInEaseOut'
			});
			
			rect2.animate({
				style: {
					position: new Point(378.5, 55.5),
				},
				duration:2000,
				delay:2500,
				animationType: 'easeInEaseOut',
				callback:function(){
					
				}
			});
			firstFracGroup.children[1].animate({
				style:{
					opacity: 0,
				},
				duration: 1000,
				delay:2500,
				animationType: 'easeInEaseOut'
			});
			firstFracGroup.children[0].animate({
				style:{
					opacity: 0,
				},
				duration: 1000,
				delay:2500,
				animationType: 'easeInEaseOut'
			});
			firstFracGroup.children[2].animate({
				style:{
					opacity: 0,
				},
				duration: 1000,
				delay:2500,
				animationType: 'easeInEaseOut'
			});
			secondFracGroup.children[0].animate({
				style:{
					opacity: 0,
				},
				duration: 1000,
				delay:2500,
				animationType: 'easeInEaseOut'
			});
			secondFracGroup.children[1].animate({
				style:{
					opacity: 0,
				},
				duration: 1000,
				delay:2500,
				animationType: 'easeInEaseOut'
			});
			secondFracGroup.children[2].animate({
				style:{
					opacity: 0,
				},
				duration: 1000,
				delay:2500,
				animationType: 'easeInEaseOut'
			});
			for(i = 0; i < 3; i++){
				execGroup.children[0].children[i].animate({
					style:{
						opacity: 1,
					},
					duration:1000,
					delay:3500,
					animationType: 'easeInEaseOut'
				});
				execGroup.children[1].children[i].animate({
					style:{
						opacity: 1,
					},
					duration:1000,
					delay:3500,
					animationType: 'easeInEaseOut'
				});
			}
			execGroup.children[2].animate({
				style:{
					opacity: 1,
				},
				duration:1000,
				delay:3500,
				animationType: 'easeInEaseOut'
			});
			execGroup.children[3].animate({
				style:{
					opacity: 1,
				},
				duration:1000,
				delay:3500,
				animationType: 'easeInEaseOut'
			});
			for(i = 0; i < 3; i++){
				thirdFracGroup.children[i].animate({
					style:{
						opacity:1
					},
					duration:1000,
					delay:4500,
					animationType: 'easeInEaseOut',
				});
			}
			Main.animationFinished(6000);
			
		}
}
var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki çarpma işlemini yapınız ve kontrol ediniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			
			Interaction.appendInput({
				width: '36px',
				height: '32px',
				textAlign: 'center',
				position: 'absolute',
				left: '150px',
				top: "22px",
				fontSize: '20px', 
			});
			
			Interaction.appendInput({
				width: '36px',
				height: '32px',
				textAlign: 'center',
				position: 'absolute',
				left: '150px',
				top: "66px",
				fontSize: '20px', 
			});
			
			$(Interaction.inputs[0]).attr('maxlength', '2')
			$(Interaction.inputs[1]).attr('maxlength', '3')
			
			var questionDiv = document.createElement('div')
			questionDiv.id = 'questionDiv';
			$(container).append(questionDiv);
			$(questionDiv)
				.html('<div id="firstFracc"><div id="nom1"></div><div id="line1"></div><div id="denom1"></div></div><p id="cross">x</p><div id="secondFracc"><div id="nom2"></div><div id="line2"></div><div id="denom2"></div></div><p id="eq">=</p><div id="line3"></div>')
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
			$('#firstFracc').css("position", "absolute")
					.css("top", "36px")
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
				
			$('#cross')
				.css({
					position: "absolute",
					left: "65px",
					top:"48px",	
				});
			
			$('#secondFracc').css("position", "absolute")
					.css("top", "36px")
					.css("left", "86px")
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
					left: "124px",
					top:"50px",	
				});
			$('#line3')
				.css({
					padding: 0,
					borderTop: "2px solid",
					width: "42px",
					height: "1px",
					position: "absolute",
					left: "148px",
					top: "60px",
				});			
			Interaction.appendStatus({
				bottom:'50px',
				right:'160px'
			});
			Interaction.appendButton({
				bottom:'40px',
				right:'40px'
			})
			
			Interaction.nomD = $('#nom1').get(0);
			Interaction.denomD = $('#denom1').get(0);
			Interaction.nom2D = $('#nom2').get(0);
			Interaction.denom2D = $('#denom2').get(0);
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){
			
			Interaction.inputs[0].style.color = "black";
			Interaction.inputs[1].style.color = "black";
			
			Interaction.denom1 = Math.floor(Math.random() * 9) + 2;
			Interaction.denom2 = Math.floor(Math.random() * 9) + 2;
			do
				Interaction.nom1 = Math.floor(Math.random() * 9) + 1;
				while(Interaction.nom1 >= Interaction.denom1)
			do
				Interaction.nom2 = Math.floor(Math.random() * 9) + 1
				while(Interaction.nom2 >= Interaction.denom2)
			
			Interaction.answer = this.nom1 * this.nom2 / (this.denom1 * this.denom2);
			
			$(Interaction.nomD).html(Interaction.nom1);
			$(Interaction.denomD).html(Interaction.denom1);
			$(Interaction.nom2D).html(Interaction.nom2);
			$(Interaction.denom2D).html(Interaction.denom2);	
		},
	isAnswerCorrect : function(values){
			if(values[0] / values[1] == Interaction.answer)
				return true;
			else
				return false;	
		},
	onCorrectAnswer : function(){	
		},
	onWrongAnswer : function(){		
		},
	onFail : function(){
			Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);
			Interaction.inputs[0].value = Interaction.nom1 * Interaction.nom2;
			Interaction.inputs[1].value = Interaction.denom1 * Interaction.denom2;
			Interaction.inputs[0].style.color = "green";
			Interaction.inputs[1].style.color = "green";	
		}
}