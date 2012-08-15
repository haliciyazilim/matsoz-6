// JavaScript Document

// styles
var textStyle = {fontSize:16,strokeColor:'#fff',strokeWidth:0,fillColor:'#fff'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};
var inputBoxAnswerColor = "green";
var inputBoxColor = "black";


var Animation = {
	init:function(container){
//		<img src="/assets/animations/minus_sign.png" />
		var animDiv = document.createElement('animDiv');
		var marblesDiv = document.createElement('marbleDiv');
		$(container).append(animDiv);
		$(animDiv)
			.html('<div id="ques12"><div id="nom2">1</div><div id="line2"></div><div id="denom2">4</div></div><p id="a2">\'i</p><p id="ques22">3</p><p id="b2">tane olan bilyelerin tamamı kaç bilyedir?</p>')
			.css({
				width: '400px',
				height: '120px',
				position:'absolute',
				left: '30px',
				top: '6px',
				fontSize: '16px',
				textAlign: 'left',
				opacity: 0
			})
			.delay(1000)
			.animate({opacity:1}, 1000)
			$('#ques12').css("position", "absolute")
					.css("top", "16px")
					.css("left", "16px")
					.css("width", "20px")
					.css("height", "41px")
					.css("padding", 0)
					.css("margin", 0)
					.css("line-height","18px")
	
			$('#ques22')
				.css({
					height: "60px",
					position: "absolute",
					left: "60px",
					top: "18px",
					textAlign: "left"
				});
			$('#nom2').css("text-align", "center")
				.css("height", "20px")
				
			$('#denom2').css("text-align", "center")
				.css("height", "20px")
		
			$('#a2')
				.css({
					position: "absolute",
					left: "44px",
					top:"18px",
				});
			$('#b2')
				.css({
					position: "absolute",
					left: "74px",
					top:"18px",
				});
			$('#line2').css("height", "1px")
				.css("border-top", "1px solid")
				.css("padding", 0)
			
			$(container).append(marblesDiv);
			$(marblesDiv)
				.html('<div id="aD"><img id="marble" src="/assets/animations/kesri_verilen_butunu_bulma/marble.png" /><img id="marble2" src="/assets/animations/kesri_verilen_butunu_bulma/marble.png" /><img id="marble3" src="/assets/animations/kesri_verilen_butunu_bulma/marble.png" /><img id="marble4" src="/assets/animations/kesri_verilen_butunu_bulma/marble.png" /></div>')
				.css({
					width: "400px",
					height: "60px",
					position: "absolute",
					left: "80px",
					top: "52px",
				})
			$('#marble').css({
					position: "absolute",
					top: "0px",
					left:"0px",
					width: "100px",
					height: "100px",
					opacity: 0,
			}).delay(2000).animate({opacity:1}, 1000)
			$('#marble2').css({
					position: "absolute",
					top: "0px",
					left:"110px",
					width: "100px",
					height: "100px",
					opacity: 0,
			}).delay(6000).animate({opacity:1}, 1000)
			$('#marble3').css({
					position: "absolute",
					top: "0px",
					left:"220px",
					width: "100px",
					height: "100px",
					opacity: 0,
			}).delay(6000).animate({opacity:1}, 1000)
			$('#marble4').css({
					position: "absolute",
					top: "0px",
					left:"330px",
					width: "100px",
					height: "100px",
					opacity: 0,
			}).delay(6000).animate({opacity:1}, 1000)
			
			var rectGroup = new Group();
			var rect1 = new Path.Rectangle(new Point(60.5, 36.5), new Size(110,110));
			rect1.strokeColor = "#a9a9a9";
			rect1.opacity = 0;
			var rect2 = new Path.Rectangle(new Point(170.5, 36.5), new Size(110,110));
			rect2.strokeColor = "#a9a9a9";
			rect2.opacity = 0;
			var rect3 = new Path.Rectangle(new Point(280.5, 36.5), new Size(110,110));
			rect3.strokeColor = "#a9a9a9";
			rect3.opacity = 0;
			var rect4 = new Path.Rectangle(new Point(390.5, 36.5), new Size(110,110));
			rect4.strokeColor = "#a9a9a9";
			rect4.opacity = 0;
			
			var text1 = new PointText(new Point(110, 170));
			text1.content = "3";
			text1.fillColor = "black";
			text1.fontSize = 14;
			text1.opacity = 0;
			var text2 = new PointText(new Point(220, 170));
			text2.content = "3";
			text2.fillColor = "black";
			text2.fontSize = 14;
			var text3 = new PointText(new Point(330, 170));
			text3.content = "3";
			text3.fillColor = "black";
			text3.fontSize = 14;
			var text4 = new PointText(new Point(440, 170));
			text4.content = "3";
			text4.fillColor = "black";
			text4.fontSize = 14;
			var textGroup = new Group();
		//	textGroup.addChild(text1);
			textGroup.addChild(text2);
			textGroup.addChild(text3);
			textGroup.addChild(text4);
			for(i = 0; i < 3; i++)
				textGroup.children[i].opacity = 0;
			
			var solnText1 = new PointText(new Point(560, 120));
			solnText1.content = "3 + 3 + 3 + 3 = 12";
			solnText1.fillColor = "black";
			solnText1.fontSize = 14;
			solnText1.opacity = 0;
			var solnText2 = new PointText(new Point(626, 150));
			solnText2.content = "3 x 4 = 12";
			solnText2.fillColor = "black";
			solnText2.fontSize = 14;
			solnText2.opacity = 0;
			
			text1.animate({
				style:{
					opacity:1
				},
				duration: 500,
				delay: 4000,
				animationType: 'easeInEaseOut'
			});
			
			rect1.animate({
				style:{
					opacity:1
				},
				duration:1000,
				delay: 3000,
				animationType: 'easeInEaseOut'
			});
			rect2.animate({
				style:{
					opacity:1
				},
				duration:500,
				delay: 5000,
				animationType: 'easeInEaseOut'
			});
			rect3.animate({
				style:{
					opacity:1
				},
				duration:500,
				delay: 5000,
				animationType: 'easeInEaseOut'
			});
			rect4.animate({
				style:{
					opacity:1
				},
				duration:500,
				delay: 5000,
				animationType: 'easeInEaseOut'
			});
			for(i = 0; i < 3; i++){
				textGroup.children[i].animate({
					style:{
						opacity:1
					},
					duration:1000,
					delay: 6000,
					animationType: 'easeInEaseOut'
				});
			}
			
			solnText1.animate({
				style:{
					opacity:1
				},
				duration: 1000,
				delay: 7500,
				animationType: 'easeInEaseOut'
			});
			
			solnText2.animate({
				style:{
					opacity:1
				},
				duration: 1000,
				delay: 9000,
				animationType: 'easeInEaseOut'
			});
			
			Main.animationFinished(11000);

		}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yanda kesri verilen bütünü bulunuz ve kontrol ediniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}

		//	Interaction.flushInputs();
			Interaction.appendInput({
				width: '30px',
				height: '32px',
				textAlign: 'center',
				position: 'absolute',
				left: '320px',
				top: "14px",
				fontSize: '22px', 
			});
			
			$(Interaction.inputs[0]).attr('maxlength', '2')
			Interaction.inputs[0].style.color = "black";
			var questionDiv = document.createElement('questionDiv')
			$(container).append(questionDiv);
			$(questionDiv)
				.html('<div id="ques1"><div id="nom"></div><div id="line"></div><div id="denom"></div></div><p id="a"></p><p id="ques2"></p><p id="b">olan kesrin tamamı</p><p id="c">olur</p>')
				.append(Interaction.inputs[0])
				.css({
					width: '400px',
					height: '120px',
					position:'absolute',
					left: '60px',
					top: '30px',
					fontSize: '24px',
					textAlign: 'left'
				});
			$('#ques1').css("position", "absolute")
					.css("top", "16px")
					.css("left", "16px")
					.css("width", "25px")
					.css("height", "51px")
					.css("padding", 0)
					.css("margin", 0)
					.css("line-height","25px")
			$('#ques2')
				.css({
					width: "30px",
					height: "30px",
					position: "absolute",
					left: "74px",
					top: "18px",
					textAlign: "center",
				});
			$('#nom').css("text-align", "center")
				.css("height", "25px")
			$('#denom').css("text-align", "center")
				.css("height", "25px")
			$('#a')
				.css({
					position: "absolute",
					left: "50px",
					top:"18px",
					textAlign: "center",
					width: "20px"
				});
			$('#b')
				.css({
					position: "absolute",
					left: "106px",
					top:"18px",
				});
			$('#c')
				.css({
					position: "absolute",
					left: "368px",
					top:"18px",
				});
			$('#line').css("height", "1px")
				.css("border-top", "2px solid")
				.css("padding", 0)

			
			Interaction.appendStatus({
				bottom:'50px',
				right:'160px'
			});
			Interaction.appendButton({
				bottom:'40px',
				right:'40px'
			})
			Interaction.questionDiv = questionDiv;
			Interaction.nomD = $('#nom').get(0);
			Interaction.denomD = $('#denom').get(0);
			Interaction.ques2Div = $('#ques2').get(0);
			Interaction.aDiv = $('#a').get(0);
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){	
			if(Interaction.solutionDiv)
				$(Interaction.solutionDiv).remove();
			Interaction.inputs[0].style.color = "black";				
			Interaction.denom = Math.floor(Math.random() * 4) + 2;
			Interaction.num = Math.floor(Math.random() * 9) + 2;
			do
				Interaction.nom = Math.floor(Math.random() * 3) + 1;
				while((Interaction.denom * Interaction.num) % Interaction.nom != 0 || Interaction.nom >= Interaction.denom)
		//	Interaction.nom = 2;
			if(Interaction.nom == 1)
				$(Interaction.aDiv).html("'i")
			else if(Interaction.nom == 2)
				$(Interaction.aDiv).html("'si")
			else if(Interaction.nom == 3)
				$(Interaction.aDiv).html("'ü")
			$(Interaction.nomD).html(Interaction.nom);
			$(Interaction.denomD).html(Interaction.denom);
			$(Interaction.ques2Div).html(Interaction.num);
		},
	isAnswerCorrect : function(values){
		console.log(Interaction.denom)
		console.log(Interaction.nom)
		console.log(Interaction.num)
	//	console.log(values[0]);
	//	console.log(values[1]);
			if(values == Interaction.denom*Interaction.num/Interaction.nom)
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
			Interaction.solutionDiv = $(Interaction.questionDiv).clone().insertAfter(Interaction.questionDiv);
			Interaction.inputs[0].style.color = "red";
			var answerStr, answerStr1, answerStr2, answerStr3;
			var anss = this.denom*this.num/this.nom
			if(this.nom == 1){
				answerStr = "Cevap: "+this.denom+" x "+this.num+" = "+this.denom*this.num;
				$(Interaction.solutionDiv)
					.html(answerStr)
					.css({
						position:"absolute",
						left: "80px",
						top: "140px",
						color: "#069",
						textAlign: "center"
				});
			}
			else{
				answerStr1 = "Cevap: ";
				answerStr2 = this.denom+" x "+this.num;
				answerStr3 = this.nom;
				answerStr4 = " = "+anss;
				$(Interaction.solutionDiv)
				.css({
						position:"absolute",
						left: "180px",
						top: "130px",
						color: "#069",
					//	textAlign: "center"
				});
				$(Interaction.solutionDiv).html('');
				$(Interaction.solutionDiv).append('<div id="answerStr1">'+answerStr1+'</div>')
				$(Interaction.solutionDiv).append('<div id="answerStr2">'+answerStr2+'</div>')
				$(Interaction.solutionDiv).append('<div id=anssLinee></div>')
				$(Interaction.solutionDiv).append('<div id="answerStr3">'+answerStr3+'</div>')
				$(Interaction.solutionDiv).append('<div id="answerStr4">'+answerStr4+'</div>')
				
				
				$('#answerStr1')
				.css({
					position:'absolute',
					top:'10px',
					left:'2px',
				//	border:'solid'
				});
				
				$('#answerStr2')
				.css({
					position:'absolute',
					top:'2px',
					left:'78px',
					width:'80px',
				//	border:'solid',
					textAlign: 'center'
				});
				
				$('#anssLinee')
				.css({
					position: 'absolute',
					top: '24px',
					left: '86px',
					width: '64px',
					height: '1px',
					borderTop: '2px solid',
					padding: 0
				});
				$('#answerStr3')
				.css({
					position:'absolute',
					top: '28px',
					left: '108px',
			//		border: 'solid',
					textAlign: 'center',
					width: '20px'
					
				});
				$('#answerStr4')
				.css({
					position: 'absolute',
					top: '14px',
					left: '160px'
				});
				
				
								
			}

		},
}