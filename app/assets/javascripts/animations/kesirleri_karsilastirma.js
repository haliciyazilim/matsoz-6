var Animation = {
	init:function(container){
			Animation.container = container;
			
			// animation delays
			var animStart = 2000;
			var rectFlyStart = animStart+2000;
			var numericalAxisStart = animStart+4000;
			var dotGroupStart = animStart+6000;
			var dotGroup2Start = animStart+9000;
			var redDotStart = animStart+15000;
			var eqStart = animStart+16000;
			
			// animation durations
			var basicFadeInDuration = 1000;
			var flyDuration = 1500;
			var bigDotFadeInDuration = 500;
			var smallDotFadeInDuration = 200;
			
			// paper elements
			var fillColor = "#FFDEAD";
			var firstRect = new Path.SegmentedRectangle(80.5, 65.5, 270, 15, 2, 1, 2, fillColor);
			firstRect.opacity = 0;
			var secondRect = new Path.SegmentedRectangle(80.5, 105.5, 330, 15, 22, 1, 22, fillColor);
			secondRect.opacity = 0;
			
			// arrow
			var arr = new Group(); 
			var arrow = new Path.OneSidedArrow(new Point(40, 85), new Point(530, 85), 10, 30);
			var arrow2 = new Path.OneSidedArrow(new Point(530, 85), new Point(531, 85), 10, 30);
			arrow.rotate(180);
			arr.addChild(arrow);
			arr.addChild(arrow2);
			arr.opacity = 0;
			
			// big dots
			var dotGroup = new Group();
			var firstDot = new Path.Circle(new Point(82, 85), 5)
			firstDot.fillColor = "black";
			var secondDot = new Path.Circle(new Point(217, 85), 5)
			secondDot.fillColor = "black";
			var thirdDot = new Path.Circle(new Point(352, 85), 5)
			thirdDot.fillColor = "black";
			var fourthDot = new Path.Circle(new Point(487, 85), 5)
			fourthDot.fillColor = "black";
			dotGroup.addChild(firstDot);
			dotGroup.addChild(secondDot);
			dotGroup.addChild(thirdDot);
			dotGroup.addChild(fourthDot);
			
		//	dotGroup.opacity = 0;
			
			// small dots
			var dotGroup2 = new Group();
			
			for(i = 0; i < 27; i++) {
				
				var dott = new Path.Circle(new Point(97+(i*15), 85), 3);
				dott.fillColor = "black";
				dotGroup2.addChild(dott);
			}
			
		//	dotGroup2.opacity = 0;
			
			var redDot = new Path.Circle(new Point(413,85), 4);
			redDot.fillColor = "red";
			redDot.opacity = 0;
			
			var redDot2 = new Path.Circle(new Point(352, 85), 6);
			redDot2.fillColor = "red";
			redDot2.opacity = 0;
			
			for(i = 0; i < 4; i++) {
				dotGroup.children[i].opacity = 0;
			}
			for(i = 0; i < 27; i++) {
				dotGroup2.children[i].opacity = 0;
			}
			// html elements
			
			$(container).append('<div id="firstF"></div>')
			$('#firstF').css("position", "absolute")
						.css("top", "80px")
						.css("left", "64px")
						.css("font-size", 18)
						.css("padding", 0)
						.css("margin", 0)
						.css("opacity", 0)
			$('#firstF').append('<div id="ww">2</div>');
			$('#ww').css("text-align", "center")
			
			$('#firstF').delay(animStart).animate({opacity: 1}, basicFadeInDuration, 'easeInOutQuad')
						.delay(1000).animate({left: '64px', top:'26px'}, flyDuration, 'easeInOutQuad')			
			// secondF
			$(container).append('<div id="secondF"></div>');
			$('#secondF').css("position", "absolute")
						.css("top", "108px")
						.css("left", "50px")
						.css("width", "26px")
						.css("height", "41px")
						.css("font-size", 18)
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","18px")
						.css("opacity", 0)
			
				
			$('#secondF').append('<div id="nomm2">22</div>');
			$('#nomm2').css("text-align", "center")
						.css("height", "20px")
			
			$('#secondF').append('<div id="exLine2"></div>');
			$('#exLine2').css("height", "1px")
						.css("border-top", "2px solid")
						.css("padding", 0)
		
			
			$('#secondF').append('<div id="denomm2">9</div>');
			$('#denomm2').css("text-align", "center")
						.css("height", "20px")
			
			$('#secondF').delay(animStart).animate({opacity: 1}, basicFadeInDuration, 'easeInOutQuad')
						.delay(1000).animate({left: '50px', top:'150px'}, flyDuration, 'easeInOutQuad')
			
			// 0, 1, 2, 3
	
			$(container).append('<div id="whs"></div>');
			$('#whs').css("position", "absolute")
						.css("top", "70px")
						.css("left", "81px")
						.css("font-size", 18)
						.css("width", "440px")
						.css("height", "26px");
			
			$('#whs').append('<p id="zzero">0</p>');
			$('#zzero').css("position", "absolute")
						.css("top", "0px")
						.css("left", "10px")
						.css("color", "grey")
						.css("opacity", 0)
						.delay(dotGroupStart).animate({opacity: 1}, bigDotFadeInDuration)
						
			$('#whs').append('<p id="oone">1</p>');
			$('#oone').css("position", "absolute")
						.css("top", "0px")
						.css("left", "144px")
						.css("color", "grey")
						.css("opacity", 0)
						.delay(dotGroupStart+bigDotFadeInDuration).animate({opacity: 1}, bigDotFadeInDuration)
						
			$('#whs').append('<p id="ttwo">2</p>');
			$('#ttwo').css("position", "absolute")
						.css("top", "0px")
						.css("left", "280px")
						.css("color", "grey")
						.css("opacity", 0)
						.delay(dotGroupStart+2*bigDotFadeInDuration).animate({opacity: 1}, bigDotFadeInDuration)
			
			setTimeout(
								'$("#ttwo").css("color", "red");'
								,redDotStart);
			
			$('#whs').append('<p id="tthree">3</p>');
			$('#tthree').css("position", "absolute")
						.css("top", "0px")
						.css("left", "415px")
						.css("color", "grey")
						.css("opacity", 0)
						.delay(dotGroupStart+3*bigDotFadeInDuration).animate({opacity: 1}, bigDotFadeInDuration)
			
			// 0/9, 9/9, 18/9, 22/9s
			$(container).append('<div id="fracss"></div>');
			$('#fracss').css("position", "absolute")
						.css("top", "107px")
						.css("left", "70px")
						.css("width", "440px")
						.css("height", "30px");
			
			// 0/9
			$('#fracss').append('<div id="zeroo"></div>');
			$('#zeroo').css("position", "absolute")
						.css("top", "2px")
						.css("left", "16px")
						.css("width", "20px")
						.css("height", "41px")
						.css("font-size", 18)
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","18px")
						.css("color", "grey")
						.css("opacity", 0)
						.delay(dotGroup2Start-smallDotFadeInDuration).animate({opacity: 1}, smallDotFadeInDuration)
		
			
			$('#zeroo').append('<div id="zNom">0</div>');
			$('#zNom').css("text-align", "center")
						.css("height", "20px")
			
				
			$('#zeroo').append('<div id="zLine"></div>');
			$('#zLine').css("height", "1px")
						.css("padding", 0)
						.css("border-top", "2px solid");
			
			$('#zeroo').append('<div id="zDenom">9</div>');
			$('#zDenom').css("text-align", "center")
						.css("height", "20px")
						
			// 9/9
			$('#fracss').append('<div id="onee"></div>');
			$('#onee').css("position", "absolute")
						.css("top", "2px")
						.css("left", "151px")
						.css("width", "20px")
						.css("height", "41px")
						.css("font-size", 18)
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","18px")
						.css("color", "grey")
						.css("opacity", 0)
						.delay(dotGroup2Start+8*smallDotFadeInDuration).animate({opacity: 1}, smallDotFadeInDuration)
		
			
			$('#onee').append('<p id="oNom">9</p>');
			$('#oNom').css("text-align", "center")
						.css("height", "20px")
				
			$('#onee').append('<div id="oLine"></div>');
			$('#oLine').css("height", "1px")
						.css("padding", 0)
						.css("border-top", "2px solid");
			
			$('#onee').append('<p id="oDenom">9</p>');
			$('#oDenom').css("text-align", "center")
						.css("height", "20px")
						
			// 18/9
			$('#fracss').append('<div id="twoo"></div>');
			$('#twoo').css("position", "absolute")
						.css("top", "2px")
						.css("left", "286px")
						.css("width", "20px")
						.css("height", "41px")
						.css("font-size", 18)
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","18px")
						.css("color", "grey")
						.css("opacity", 0)
						.delay(dotGroup2Start+17*smallDotFadeInDuration).animate({opacity: 1}, smallDotFadeInDuration)
			
			$('#twoo').append('<p id="tNom">18</p>');
			$('#tNom').css("text-align", "center")
						.css("height", "20px")
			
			$('#twoo').append('<div id="tLine"></div>');
			$('#tLine').css("height", "1px")
						.css("padding", 0)
						.css("border-top", "2px solid");
		
			
			$('#twoo').append('<p id="tDenom">9</p>');
			$('#tDenom').css("text-align", "center")
						.css("height", "20px")
			
			// 22/9
			$('#fracss').append('<div id="lastt"></div>');
			$('#lastt').css("position", "absolute")
						.css("top", "2px")
						.css("left", "346px")
						.css("width", "20px")
						.css("height", "41px")
						.css("font-size", 18)
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","18px")
						.css("color", "grey")
						.css("opacity", 0)
						.delay(dotGroup2Start+22*smallDotFadeInDuration).animate({opacity: 1}, smallDotFadeInDuration)
			setTimeout(
								'$("#lastt").css("color", "red");'
								,redDotStart);
				
			$('#lastt').append('<p id="lNom">22</p>');
			$('#lNom').css("text-align", "center")
						.css("height", "20px")
			
			$('#lastt').append('<div id="lLine"></div>');
			$('#lLine').css("height", "1px")
						.css("padding", 0)
						.css("border-top", "2px solid");
		
			
			$('#lastt').append('<p id="lDenom">9</p>');
			$('#lDenom').css("text-align", "center")
						.css("height", "20px")
			
			
			$(container).append('<div id="first2F"></div>');
			$('#first2F').css("position", "absolute")
						.css("top", "80px")
						.css("left", "598px")
						.css("width", "46px")
						.css("height", "41px")
						.css("font-size", 22)
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","18px")
						.css("opacity", 0)
						.delay(eqStart).animate({opacity: 1}, basicFadeInDuration)
						
			$('#first2F').append('<div id="whh2">2</div>');
			$('#whh2').css("height", "41px")
					.css("text-align", "center")
					.css("width","24px")
					.css("float", "right")
					.css("line-height","41px")
			
			$(container).append('<p id="eqqq" ><</p>');
			$('#eqqq').css("position", "absolute")
						.css("left", "660px")
						.css("top", "90px")
						.css("font-size", 22)
						.css("opacity", 0)
						.delay(eqStart+1000).animate({opacity: 1}, basicFadeInDuration)
						
			// second2F
			$(container).append('<div id="second2F"></div>');
			$('#second2F').css("position", "absolute")
						.css("top", "74px")
						.css("left", "694px")
						.css("width", "26px")
						.css("height", "51px")
						.css("font-size", 22)
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","23px")
						.css("opacity", 0)
						.delay(eqStart).animate({opacity: 1}, basicFadeInDuration)
		
			
			$('#second2F').append('<p id="nomm4">22</p>');
			$('#nomm4').css("text-align", "center")
						.css("height", "25px")
				
			$('#second2F').append('<div id="exLine4"></div>');
			$('#exLine4').css("height", "1px")
						.css("border-top", "2px solid")
						.css("padding", 0)
			
			$('#second2F').append('<p id="denomm4">9</p>');
			$('#denomm4').css("text-align", "center")
						.css("height", "25px")
			
			
			firstRect.animate({
				style:{
					opacity: 1,
				},
				duration: basicFadeInDuration,
				delay: animStart,
				animationType: 'easeInOutQuad',
			});
			
			secondRect.animate({
				style:{
					opacity: 1,
				},
				duration: basicFadeInDuration,
				delay: animStart,
				animationType: 'easeInOutQuad',
			});
			
			firstRect.animate({
				style:{
					position: new Point(215.5, 20),
				},
				duration: flyDuration,
				delay: rectFlyStart,
				animationType: 'easeInOutQuad',
			});
			
			secondRect.animate({
				style:{
					position: new Point(245.5, 155),
				},
				duration: flyDuration,
				delay: rectFlyStart,
				animationType: 'easeInOutQuad',
			});
			
			arr.animate({
				style:{
					opacity: 1,
				},
				duration: basicFadeInDuration,
				delay: numericalAxisStart,
				animationType: 'easeInEaseOut',
			});
			
			dotGroup.children[0].animate({
				style: {
					opacity: 1
				},
				duration: bigDotFadeInDuration,
				delay: dotGroupStart,
				animationType: 'easeInEaseOut'
			});
	
			dotGroup.children[1].animate({
				style: {
					opacity: 1
				},
				duration: bigDotFadeInDuration,
				delay: dotGroupStart+bigDotFadeInDuration,
				animationType: 'easeInEaseOut'
			});
			
			dotGroup.children[2].animate({
				style: {
					opacity: 1
				},
				duration: bigDotFadeInDuration,
				delay: dotGroupStart+2*bigDotFadeInDuration,
				animationType: 'easeInEaseOut'
			});
			
			dotGroup.children[3].animate({
				style: {
					opacity: 1
				},
				duration: bigDotFadeInDuration,
				delay: dotGroupStart+3*bigDotFadeInDuration,
				animationType: 'easeInEaseOut'
			});
			
			for(i = 0; i < 27; i++) {
				dotGroup2.children[i].animate({ 
					style:{
						opacity: 1
					},
					duration: smallDotFadeInDuration,
					delay: dotGroup2Start+(smallDotFadeInDuration*i),
					animationType: 'easeInEaseOut'
				});
			}
			
			redDot.animate({
				style: {
					opacity: 1
				},
				duration: 0,
				delay: redDotStart,
				animationType: 'easeInEaseOut'
			});
			redDot2.animate({
				style: {
					opacity: 1
				},
				duration: 0,
				delay: redDotStart,
				animationType: 'easeInEaseOut',
			});
			Main.animationFinished(20000);
			
				
		}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yanda verilen doğal sayı ile kesri karşılaştırınız. Aralarına küçük, büyük ya da eşit işaretlerini sürükleyerek yerleştiriniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			
			Interaction.sortingDiv = document.createElement('div');
			Interaction.sortingDiv.id = 'sortingDiv';
			$(container).append(Interaction.sortingDiv);
			$(Interaction.sortingDiv).css({
							width: '150px',
							height: '50px',
							position: 'absolute',
							left: '180px',
							top: '10px',
							padding: 0,
							margin:0
						});	
			$(Interaction.sortingDiv).append('<div id="lessThanDiv"><img src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_base.png"/><img id="lessThan" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_fg.png" /><img id="lessThanHover" class="drg" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_hover.png" /></div>');
			
			$('#lessThanDiv').css("position", "relative")
							.css("height", "40px")
							.css("width", "40px")
							.css("float", "left")
							.css("line-height", "32px")
							.css("cursor","pointer");
			
			$('#lessThan').css("position", "absolute")
							.css("top", "0px")
							.css("left", "0px")
							
			$('#lessThanHover').css("position", "absolute")
								.css("top", "0px")
								.css("left", "0px")
								.css("opacity", 0)
			
			$(Interaction.sortingDiv).append('<div id="equalToDiv"><img src="/assets/animations/kesirleri_karsilastirma/oran_esittir_base.png"/><img id="equalTo" src="/assets/animations/kesirleri_karsilastirma/oran_esittir_fg.png" /><img id="equalToHover" class="drg" src="/assets/animations/kesirleri_karsilastirma/oran_esittir_hover.png" /></div>');
			
			$('#equalToDiv').css("position", "relative")
							.css("height", "40px")
							.css("width", "40px")
							.css("float", "left")
							.css("line-height", "32px")
							.css("cursor","pointer");
			
			$('#equalTo').css("position", "absolute")
							.css("top", "0px")
							.css("left", "0px")
			
			$('#equalToHover').css("position", "absolute")
								.css("top", "0px")
								.css("left", "0px")
								.css("opacity", 0)
							
			$(Interaction.sortingDiv).append('<div id="greaterThanDiv"><img src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_base.png"/><img id="greaterThan" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_fg.png" /><img id="greaterThanHover" class="drg" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_hover.png" /></div>'); 
			
			$('#greaterThanDiv').css("position", "relative")
							.css("height", "40px")
							.css("width", "40px")
							.css("float", "left")
							.css("line-height", "32px")
							.css("cursor","pointer");
			
			$('#greaterThan').css("position", "absolute")
							.css("top", "0px")
							.css("left", "0px")
			
			$('#greaterThanHover').css("position", "absolute")
								.css("top", "0px")
								.css("left", "0px")
								.css("opacity", 0)												
			
			$('#sortingDiv .drg').draggable({
				revert: "invalid",
				helper: "clone",
				cursor: "pointer",
				stack: "#sortingDiv .drg",
				disabled: "false",
				start: function(event, ui){
					Interaction.setStatus('');
					$($(ui.helper.get(0)).siblings(this)[1]).css("opacity", 0)
					$(ui.helper.get(0)).css("opacity", 1)
				},
				stop: function(event, ui){
					$(ui.helper.get(0)).css("opacity", 0)
					if(this.id != Interaction.oldStr+"Hover"){
						$($(ui.helper.get(0)).siblings(this)[1]).css("opacity", 1)
					}
				}
			});
			
			
			
			Interaction.questionDiv = document.createElement('div');
			Interaction.questionDiv.id = 'questionDiv'
			$(container).append(Interaction.questionDiv);
			$(Interaction.questionDiv)
				.css({
					position:'absolute',
					left:'136px',
					top:'70px',
					width:'200px',
					height:'90px',
					padding:0,
					margin:0,
			//		border: 'solid'
				});
			Interaction.firstFracDiv = document.createElement('div');
			Interaction.firstFracDiv.id = 'firstFracDiv'
			$(Interaction.questionDiv).append(Interaction.firstFracDiv);
			$(Interaction.firstFracDiv).css({
					width:'66px',
					height:'60px',
					float:'left',
					fontSize:'24px',
				//	border:'solid'
				});
			Interaction.secondFracDiv = document.createElement('div');
			Interaction.secondFracDiv.id = 'secondFracDiv'
			$(Interaction.questionDiv).append(Interaction.secondFracDiv);
			$(Interaction.secondFracDiv).css({
					width:'70px',
					height:'60px',
					float:'right',
					fontSize:'24px',
				//	border:'solid'
				});
			
			Interaction.dropDiv = document.createElement('div');
			Interaction.dropDiv.id = 'dropDiv';
			$(container).append(Interaction.dropDiv);
			$(Interaction.dropDiv).css({
							width: '54px',
							height: '54px',
							position: 'absolute',
							left: '211px',
							top: '68px',
							padding: 0,
							margin: 0,
						});
			$(Interaction.dropDiv).append('<div id="targetContainer"><img src="/assets/animations/kesirleri_karsilastirma/oran_hedef.png" id="target" /></div>')
			
			$('#targetContainer').css("position", "relative")
								.css("height", "54px")
								.css("width", "54px")
								.css("float", "left")
			$('#target').css("position", "absolute")
						.css("top", "0px")
						.css("left", "0px")
			$(Interaction.dropDiv).droppable({
						accept: '.drg',
						tolerance: 'pointer',
						drop: function(event, ui){
							if(Interaction.oldActiveStr){
								$("#"+Interaction.oldActiveStr).css("opacity", 0)
								$("#"+Interaction.oldActiveStr.replace("Active", "Hover")).draggable({disabled: false})
								$("#"+Interaction.oldStr).css("opacity", 1)
								
							}
							Interaction.activeStr = $(ui.draggable).get(0).id;
							$("#"+Interaction.activeStr).draggable({disabled: true});
							var oldStr = Interaction.activeStr.replace("Hover", "");
							Interaction.activeStr = Interaction.activeStr.replace("Hover", "Active");
							$("#"+Interaction.activeStr).css("opacity", 1);
							Interaction.oldActiveStr = Interaction.activeStr;
							Interaction.oldStr = oldStr;
							
						}
					});
			
			$(Interaction.dropDiv).append('<img id="lessThanActive" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png" /><img id="equalToActive" src="/assets/animations/kesirleri_karsilastirma/oran_esittir_active.png" /><img id="greaterThanActive" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" />')
			
			$('#lessThanActive').css("position", "absolute")
								.css("top", "11px")
								.css("left", "11px")
								.css("opacity", 0)
			
			$('#equalToActive').css("position", "absolute")
								.css("top", "11px")
								.css("left", "11px")
								.css("opacity", 0)
			
			$('#greaterThanActive').css("position", "absolute")
								.css("top", "11px")
								.css("left", "11px")
								.css("opacity", 0)
			
			Interaction.appendStatus({
				bottom:'26px',
				right:'160px',
				height:'40px',
				width:'300px',
				textAlign:'center',
			});
			Interaction.appendButton({
				bottom:'30px',
				right:'40px'
			})
			
			Interaction.firstFracD = $(Interaction.firstFracDiv).get(0);
			Interaction.secondFracD = $(Interaction.secondFracDiv).get(0);
			Interaction.answerD = $(Interaction.answerDiv).get(0);
			Interaction.setRandomGenerator(3);
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){
			if(Interaction.numericalAxis)
				Interaction.numericalAxis.remove();
			if($('#pointDiv'))
				$('#pointDiv').remove();
			
			if($(Interaction.clone2)){
				$(Interaction.clone2).remove();
				Interaction.clone2 = null;
			}
			if($(Interaction.dropped)){
				$(Interaction.dropped).remove();
				Interaction.dropped = null;
			}
			$('#sortingDiv img').draggable("enable");
			if(Interaction.oldActiveStr){
				$("#"+Interaction.oldActiveStr).css("opacity" , 0)
			}
			
			if(Interaction.oldStr)
				$("#"+Interaction.oldStr).css("opacity", 1)
			
			if(Interaction.answerId)
				$("#"+Interaction.answerId.replace("Hover", "")).css("opacity", 1)
			
			if(Interaction.ansF)
				$(Interaction.ansF).remove();
			
			$(Interaction.firstFracDiv).html('');
			$(Interaction.secondFracDiv).html('');
			
			Interaction.activeStr = null;
			
			var randomize = Math.floor(Math.random() * 2);
			Interaction.randomNumber = randomNumber;
			Interaction.randomize = randomize;
			
			if(randomNumber == 0){ // simple fraction and natural number sorting
				if(randomize == 0){
					$(Interaction.questionDiv).css("left", "140px")
					var fracDiv = document.createElement('div');
					fracDiv.id = 'fracDiv';
					$(Interaction.firstFracDiv).append(fracDiv);
					$(fracDiv).html('<div id="nom1"></div><div id="line1"></div><div id="denom1"></div>');
					$(fracDiv).css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
								.css("float", "right")
					
					$('#line1').css("height", "1px")
								.css("width", "30px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
					
					$('#denom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
					
					var numDiv = document.createElement('div');
					numDiv.id = 'numDiv;'
					$(Interaction.secondFracDiv).append(numDiv);
					$(numDiv).html('<div id="wh1"></div>')
					$(numDiv).css("width", "30px")
						.css("height", "51px")
						.css("padding", 0)
						.css("margin", 0)
						.css("float", "left")
						.css("line-height","51px")
					
					$('#wh1').css("height", "51px")
							.css("text-align", "center")
							.css("width","38px")
							.css("float", "left")
							.css("line-height","51px")
					
					Interaction.nom1 = Math.floor(Math.random() * 9) + 1;
					do{
						Interaction.denom1 = Math.floor(Math.random() * 9) + 2;
					}
					while(Interaction.denom1 <= Interaction.nom1)
					
					Interaction.wh1 = Math.floor(Math.random() * 4);
					
					Interaction.frac = Interaction.nom1/Interaction.denom1;
					
					Interaction.whD = $('#wh1').get(0);
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);					
					$(Interaction.whD).html(Interaction.wh1);
				}
				else{
					$(Interaction.questionDiv).css("left", "130px")
					var fracDiv = document.createElement('div');
					fracDiv.id = 'fracDiv';
					$(Interaction.secondFracDiv).append(fracDiv);
					$(fracDiv).html('<div id="nom1"></div><div id="line1"></div><div id="denom1"></div>');
					$(fracDiv).css("width", "48px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
								.css("float", "left")
					
					$('#line1').css("height", "1px")
								.css("border-top", "2px solid")
								.css("padding", 0)
								.css("width", "30px")
								.css("float", "right")
									
					$('#nom1').css("text-align", "center")
								.css("height", "25px")
								.css("width", "30px")
								.css("float", "right")
								
					$('#denom1').css("text-align", "center")
								.css("height", "25px")
								.css("width", "30px")
								.css("float", "right")

					var numDiv = document.createElement('div');
					numDiv.id = 'numDiv;'
					$(Interaction.firstFracDiv).append(numDiv);
					$(numDiv).html('<div id="wh1"></div>')
					$(numDiv).css("width", "30px")
						.css("height", "51px")
						.css("padding", 0)
						.css("margin", 0)
						.css("float", "right")
						.css("line-height","51px")
					
					$('#wh1').css("height", "51px")
							.css("text-align", "center")
							.css("width","16px")
							.css("float", "right")
							.css("line-height","51px")
					
										
					Interaction.nom1 = Math.floor(Math.random() * 9) + 1;
					do
						Interaction.denom1 = Math.floor(Math.random() * 9) + 2;
						while(Interaction.denom1 <= Interaction.nom1)
					
					Interaction.wh1 = Math.floor(Math.random() * 4);
					
					Interaction.frac = Interaction.nom1/Interaction.denom1;
					
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					Interaction.whD = $('#wh1').get(0);
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
					$(Interaction.whD).html(Interaction.wh1);
				}
			}
			
			else if(randomNumber == 1){ // compound fraction and natural number sorting
				if(randomize == 0){
					$(Interaction.questionDiv).css("left", "140px")
					var fracDiv = document.createElement('div');
					fracDiv.id = 'fracDiv';
					$(Interaction.firstFracDiv).append(fracDiv);
					$(fracDiv).html('<div id="nom1"></div><div id="line1"></div><div id="denom1"></div>');
					$(fracDiv).css("width", "36px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
								.css("float", "right")
					
					$('#line1').css("height", "1px")
								.css("width", "30px")
								.css("border-top", "2px solid")
								.css("padding", 0)
									
					$('#nom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
					
					$('#denom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
					
					var numDiv = document.createElement('div');
					numDiv.id = 'numDiv;'
					$(Interaction.secondFracDiv).append(numDiv);
					$(numDiv).html('<div id="wh1"></div>')
					$(numDiv).css("width", "30px")
						.css("height", "51px")
						.css("padding", 0)
						.css("margin", 0)
						.css("float", "left")
						.css("line-height","51px")
					
					$('#wh1').css("height", "51px")
							.css("text-align", "center")
							.css("width","38px")
							.css("float", "left")
							.css("line-height","51px")
					do{
						Interaction.nom1 = Math.floor(Math.random() * 21) + 2;
						do
							Interaction.denom1 = Math.floor(Math.random() * 9) + 2;
							while(Interaction.denom1 > Interaction.nom1)
						
						Interaction.wh1 = Math.floor(Math.random() * 10);
					}
					while(Math.abs(Interaction.wh1 - (Interaction.nom1/Interaction.denom1)) > 3)
					
					Interaction.frac = Interaction.nom1 / Interaction.denom1;
					
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
					Interaction.whD = $('#wh1').get(0);
					$(Interaction.whD).html(Interaction.wh1);					
				}
				else{
					$(Interaction.questionDiv).css("left", "130px")
					var fracDiv = document.createElement('div');
					fracDiv.id = 'fracDiv';
					$(Interaction.secondFracDiv).append(fracDiv);
					$(fracDiv).html('<div id="nom1"></div><div id="line1"></div><div id="denom1"></div>');
					$(fracDiv).css("width", "48px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
								.css("float", "left")
					
					$('#line1').css("height", "1px")
								.css("border-top", "2px solid")
								.css("padding", 0)
								.css("width", "30px")
								.css("float", "right")
									
					$('#nom1').css("text-align", "center")
								.css("height", "25px")
								.css("width", "30px")
								.css("float", "right")
								
					$('#denom1').css("text-align", "center")
								.css("height", "25px")
								.css("width", "30px")
								.css("float", "right")

					var numDiv = document.createElement('div');
					numDiv.id = 'numDiv;'
					$(Interaction.firstFracDiv).append(numDiv);
					$(numDiv).html('<div id="wh1"></div>')
					$(numDiv).css("width", "30px")
						.css("height", "51px")
						.css("padding", 0)
						.css("margin", 0)
						.css("float", "right")
						.css("line-height","51px")
					
					$('#wh1').css("height", "51px")
							.css("text-align", "center")
							.css("width","16px")
							.css("float", "right")
							.css("line-height","51px")
					do{
						Interaction.nom1 = Math.floor(Math.random() * 21) + 2;
						do
							Interaction.denom1 = Math.floor(Math.random() * 9) + 2;
							while(Interaction.denom1 > Interaction.nom1)
						
						Interaction.wh1 = Math.floor(Math.random() * 10);
					}
					while(Math.abs(Interaction.wh1 - (Interaction.nom1/Interaction.denom1)) > 3)
					
					Interaction.frac = Interaction.nom1 / Interaction.denom1;
					
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
					Interaction.whD = $('#wh1').get(0);
					$(Interaction.whD).html(Interaction.wh1);
				}
			}			
			else{ // fraction with wh and natural number sorting
				if(randomize == 0){
				//	$(Interaction.questionDiv).css("left", "150px")
					var fracDiv = document.createElement('div');
					fracDiv.id = 'fracDiv';
					$(Interaction.firstFracDiv).append(fracDiv);
					$(fracDiv).html('<div id="wh2"></div><div id="nom1"></div><div id="line1"></div><div id="denom1"></div>');
					$(fracDiv).css("width", "72px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
								.css("float", "right")
					
					$('#wh2').css("width", "30px")
							.css("float", "left")
							.css("line-height", "51px")
							.css("text-align", "center")
							.css("height", "51px")
							
					
					$('#line1').css("height", "1px")
								.css("width", "30px")
								.css("border-top", "2px solid")
								.css("padding", 0)
								.css("float", "left")
									
					$('#nom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
								.css("float", "left")
					
					$('#denom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
								.css("float", "left")

					var numDiv = document.createElement('div');
					numDiv.id = 'numDiv;'
					$(Interaction.secondFracDiv).append(numDiv);
					$(numDiv).html('<div id="wh1"></div>')
					$(numDiv).css("width", "30px")
						.css("height", "51px")
						.css("padding", 0)
						.css("margin", 0)
						.css("float", "left")
						.css("line-height","51px")
					
					$('#wh1').css("height", "51px")
							.css("text-align", "center")
							.css("width","38px")
							.css("float", "left")
							.css("line-height","51px")
					
					do{
						Interaction.wh2 = Math.floor(Math.random() * 5) + 1
						Interaction.nom1 = Math.floor(Math.random() * 9) + 1;
						do
							Interaction.denom1 = Math.floor(Math.random() * 9) + 2;
							while(Interaction.denom1 <= Interaction.nom1)
				
						Interaction.wh1 = Math.floor(Math.random() * 8);
					}
					while(Math.abs(Interaction.wh1 - (Interaction.wh2+(Interaction.nom1/Interaction.denom1))) > 3)
					Interaction.frac = Interaction.wh2 + (Interaction.nom1/Interaction.denom1);
					
					
					Interaction.whD = $('#wh1').get(0);
					$(Interaction.whD).html(Interaction.wh1);
					
					Interaction.wh2D = $('#wh2').get(0);
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
					$(Interaction.wh2D).html(Interaction.wh2);
										
				}
				else{
				//	$(Interaction.questionDiv).css("left", "120px")
					var fracDiv = document.createElement('div');
					fracDiv.id = 'fracDiv';
					$(Interaction.secondFracDiv).append(fracDiv);
					$(fracDiv).html('<div id="wh2"></div><div id="nom1"></div><div id="line1"></div><div id="denom1"></div>');
					$(fracDiv).css("width", "72px")
								.css("height", "51px")
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","25px")
								.css("float", "left")
					
					$('#wh2').css("width", "30px")
							.css("float", "left")
							.css("line-height", "51px")
							.css("text-align", "center")
							.css("height", "51px")
							
					
					$('#line1').css("height", "1px")
								.css("width", "30px")
								.css("border-top", "2px solid")
								.css("padding", 0)
								.css("float", "left")
									
					$('#nom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
								.css("float", "left")
					
					$('#denom1').css("text-align", "center")
								.css("width", "30px")
								.css("height", "25px")
								.css("float", "left")
					
					var numDiv = document.createElement('div');
					numDiv.id = 'numDiv;'
					$(Interaction.firstFracDiv).append(numDiv);
					$(numDiv).html('<div id="wh1"></div>')
					$(numDiv).css("width", "30px")
						.css("height", "51px")
						.css("padding", 0)
						.css("margin", 0)
						.css("float", "right")
						.css("line-height","51px")
					
					$('#wh1').css("height", "51px")
							.css("text-align", "center")
							.css("width","16px")
							.css("float", "right")
							.css("line-height","51px")
					
					do{
						Interaction.wh2 = Math.floor(Math.random() * 5) + 1
						Interaction.nom1 = Math.floor(Math.random() * 9) + 1;
						do
							Interaction.denom1 = Math.floor(Math.random() * 9) + 2;
							while(Interaction.denom1 <= Interaction.nom1)
				
						Interaction.wh1 = Math.floor(Math.random() * 8);
					}
					while(Math.abs(Interaction.wh1 - (Interaction.wh2+(Interaction.nom1/Interaction.denom1))) > 3)
					Interaction.frac = Interaction.wh2 + (Interaction.nom1/Interaction.denom1);
					
					
					Interaction.whD = $('#wh1').get(0);
					$(Interaction.whD).html(Interaction.wh1);
					
					Interaction.wh2D = $('#wh2').get(0);
					Interaction.nomD = $('#nom1').get(0);
					Interaction.denomD = $('#denom1').get(0);
					
					$(Interaction.nomD).html(Interaction.nom1);
					$(Interaction.denomD).html(Interaction.denom1);
					$(Interaction.wh2D).html(Interaction.wh2);	
				}
			}
	
		},
	preCheck : function(){
			Interaction.dropped = Interaction.activeStr;
			if(Interaction.dropped == null || Interaction.dropped == undefined){
				Interaction.setStatus('Lütfen işaretlerden birini kutucuğa sürükleyiniz.', 'alert')
				return false;
			}
		},
	isAnswerCorrect : function(value){
			if(Interaction.randomNumber == 0){
				if(Interaction.randomize == 0){
					if(Interaction.wh1 > 0)
						Interaction.answerIdStr = "lessThanActive";
					else
						Interaction.answerIdStr = "greaterThanActive";
				}
				else{
					if(Interaction.wh1 > 0)
						Interaction.answerIdStr = "greaterThanActive";
					else
						Interaction.answerIdStr = "lessThanActive";
				}
				
				if(Interaction.dropped == Interaction.answerIdStr){
						$('#sortingDiv img').draggable("disable");
						return true;
					}
				else
					return false;
			}
			else if(Interaction.randomNumber == 1){
				if(Interaction.randomize == 0){
					if(Interaction.nom1/Interaction.denom1 > Interaction.wh1)
						Interaction.answerIdStr = "greaterThanActive";
					else if(Interaction.nom1 / Interaction.denom1 == Interaction.wh1)
						Interaction.answerIdStr = "equalToActive";
					else
						Interaction.answerIdStr = "lessThanActive";
				}
				else{
					if(Interaction.nom1/Interaction.denom1 > Interaction.wh1)
						Interaction.answerIdStr = "lessThanActive";
					else if(Interaction.nom1 / Interaction.denom1 == Interaction.wh1)
						Interaction.answerIdStr = "equalToActive";
					else
						Interaction.answerIdStr = "greaterThanActive";
				}
				
				if(Interaction.dropped == Interaction.answerIdStr){
						$('#sortingDiv img').draggable("disable");
						return true;
					}
				else
					return false;
			}
			else{
				if(Interaction.randomize == 0){
					if(Interaction.wh2 < Interaction.wh1)
						Interaction.answerIdStr = "lessThanActive";
					else
						Interaction.answerIdStr = "greaterThanActive";
				}
				else{
					if(Interaction.wh2 < Interaction.wh1)
						Interaction.answerIdStr = "greaterThanActive";
					else
						Interaction.answerIdStr = "lessThanActive";
				}
				if(Interaction.dropped == Interaction.answerIdStr){
						$('#sortingDiv img').draggable("disable");
						return true;
					}
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
			$("#"+Interaction.oldActiveStr).css("opacity", 0);
			Interaction.answerId = Interaction.answerIdStr.replace("Active", "Hover");
			$("#"+Interaction.oldActiveStr.replace("Active", "")).css("opacity", 1)
			$("#"+Interaction.answerId.replace("Hover", "")).css("opacity", 0)
			Interaction.clone2 = $("#"+Interaction.answerId).clone();
			Interaction.clone2.attr('id', 'flying');

			$(Interaction.container).append(Interaction.clone2);
			$(Interaction.clone2).insertAfter($(Interaction.dropDiv));
			
			//var ansTop = $("#"+Interaction.answerId).offset().top - 417;
//			var ansLeft = $("#"+Interaction.answerId).offset().left - 950;
			var ansTop = $(Interaction.sortingDiv).position().top;
			var ansLeft = $(Interaction.sortingDiv).position().left;
			if(Interaction.answerId == "equalToHover")
				ansLeft += 40;
			else if(Interaction.answerId == "greaterThanHover")
				ansLeft += 80;
			var flyTop = $(Interaction.dropDiv).position().top + 11;
			var flyLeft = $(Interaction.dropDiv).position().left + 11;
	
			$(Interaction.clone2).css("position", "absolute")
					.css("top",ansTop)
					.css("left", ansLeft)
					.css("opacity", 0)

			$(Interaction.clone2).delay(0).animate(
				{opacity:2, top: flyTop, left:flyLeft}, 
				1000,
				'easeInOutQuad',
				function(){
					$(Interaction.clone2).css("opacity", 0);
					$("#"+Interaction.answerIdStr).css("opacity", 1)
				}
			);
			$('#sortingDiv img').draggable("disable");
			Interaction.oldActiveStr = Interaction.answerIdStr;
			
			var decide = (((Interaction.frac + Interaction.wh1)/2) - 1.5);
			var startP, endP;
			if(decide <= 0)
				startP = 0;
			else{
				if(Interaction.wh1 > Interaction.frac)
					startP = Math.round(decide);
				else
					startP = Math.round(decide);
			}
			
			endP = startP + 3;
			
			Interaction.GetNumericalAxis(startP, endP, Interaction.denom1);
		},
		
	GetNumericalAxis : function(startPoint, endPoint, piece){
		
		Interaction.pause = 1;
		
		setTimeout(
				'Interaction.pause = 0;'
				,1500);
		
		Interaction.numericalAxis = new Group();
		
		// numericalAxis
		var arr = new Group();
		var arrow = new Path.OneSidedArrow(new Point(40, 180), new Point(540, 180), 10, 30)
		var arrow2 = new Path.OneSidedArrow(new Point(540, 180), new Point(541, 180), 10, 30);
		arrow.rotate(180);
		arr.addChild(arrow);
		arr.addChild(arrow2);
		
		var iter = endPoint - startPoint;
		var pieceLength = 420/iter;
		
		// bigDots
		var bigDots = new Group();
		for(i = 0; i < iter + 1; i++){
			var dot = new Path.Circle(new Point(80+(pieceLength*i), 180), 5);
			dot.fillColor = "black";
			bigDots.addChild(dot);
		}
		
		var smallDots = new Group();
		for(i = 0; i < iter; i++){
			for(j = 1; j < piece; j++){
				var dot2 = new Path.Circle(new Point(80+(pieceLength*i)+Math.floor(j*(pieceLength/piece)), 180), 3);
				dot2.fillColor = "black";
				smallDots.addChild(dot2);
			}
		}
		
		Interaction.numericalAxis.addChild(arr);
		Interaction.numericalAxis.addChild(bigDots);
		Interaction.numericalAxis.addChild(smallDots);
		
		var pointDiv = document.createElement('div');
		pointDiv.id = 'pointDiv'
		$(Interaction.container).append(pointDiv)
		$(pointDiv).html('<div id="fp"></div> <div id="sp"></div> <div id="tp"></div> <div id="lp"></div>')
		$(pointDiv).css("position", "absolute")
					.css("top", "150px")
					.css("left", "59px")
					.css("width", "480px")
					.css("height", "20px")
					.css("font-size", 22)
		
		$('#fp').css("position", "absolute")
				.css("top", "0px")
				.css("left", "14px")
				.css("width", "20px")
				.css("height", "20px")
				.html(startPoint);
		$('#sp').css("position", "absolute")
				.css("top", "0px")
				.css("left", "154px")
				.css("width", "20px")
				.css("height", "20px")
				.html(startPoint+1);
		$('#tp').css("position", "absolute")
				.css("top", "0px")
				.css("left", "294px")
				.css("width", "20px")
				.css("height", "20px")
				.html(startPoint+2);
		$('#lp').css("position", "absolute")
				.css("top", "0px")
				.css("left", "434px")
				.css("width", "20px")
				.css("height", "20px")
				.html(startPoint+3);
		var l;
		for(l = 0; l < 4; l++){
			if(startPoint+l == Interaction.wh1)
				break;
		}
		switch(l){
			case 0:
				$('#fp').css("color", "red")
				bigDots.children[l].fillColor = "red";
				break;
			case 1:
				$('#sp').css("color", "red")
				bigDots.children[l].fillColor = "red";
				break;
			case 2:
				$('#tp').css("color", "red")
				bigDots.children[l].fillColor = "red";
				break;
			case 3:
				$('#lp').css("color", "red")
				bigDots.children[l].fillColor = "red";
				break;
		}
		
		var index;
		var a = Math.floor(Interaction.nom1/Interaction.denom1);
		var b = Interaction.nom1 % Interaction.denom1;
		var centerX, centerY;
		var o;
		if(Math.floor(Interaction.frac) == Interaction.frac){
			var k;
			for(k = 0; k < 4; k++){
				if(startPoint+k == Interaction.frac)
					break;
			}
			o = k;
			switch(k){
				case 0:
					Interaction.centerX = bigDots.children[k].position.x;
					Interaction.centerY = bigDots.children[k].position.y;
					bigDots.children[k].remove();
					Interaction.lline = new Path.Line(new Point(Interaction.centerX, Interaction.centerY-6), new Point(Interaction.centerX, Interaction.centerY+6))
					Interaction.lline.strokeColor = "#0066FF"
					Interaction.lline.strokeWidth = 5;
					Interaction.numericalAxis.addChild(Interaction.lline);
					break;
				case 1:
					Interaction.centerX = bigDots.children[k].position.x;
					Interaction.centerY = bigDots.children[k].position.y;
					bigDots.children[k].remove();
					Interaction.lline = new Path.Line(new Point(Interaction.centerX, Interaction.centerY-6), new Point(Interaction.centerX, Interaction.centerY+6))
					Interaction.lline.strokeColor = "#0066FF"
					Interaction.lline.strokeWidth = 5;
					Interaction.numericalAxis.addChild(Interaction.lline);
					break;
				case 2:
					Interaction.centerX = bigDots.children[k].position.x;
					Interaction.centerY = bigDots.children[k].position.y;
					bigDots.children[k].remove();
					Interaction.lline = new Path.Line(new Point(Interaction.centerX, Interaction.centerY-6), new Point(Interaction.centerX, Interaction.centerY+6))
					Interaction.lline.strokeColor = "#0066FF"
					Interaction.lline.strokeWidth = 5;
					Interaction.numericalAxis.addChild(Interaction.lline);
					break;
				case 3:
					Interaction.centerX = bigDots.children[k].position.x;
					Interaction.centerY = bigDots.children[k].position.y;
					bigDots.children[k].remove();
					Interaction.lline = new Path.Line(new Point(Interaction.centerX, Interaction.centerY-6), new Point(Interaction.centerX, Interaction.centerY+6))
					Interaction.lline.strokeColor = "#0066FF"
					Interaction.lline.strokeWidth = 5;
					Interaction.numericalAxis.addChild(Interaction.lline);
					break;
			}
			
		}
		else{		
			if(Interaction.randomNumber == 0)
				index = Interaction.nom1 - 1
			else if(Interaction.randomNumber == 1)
				index = ((a - startPoint) * (Interaction.denom1 - 1)) + (b - 1);
			else
				index = ((Interaction.wh2 - startPoint) * (Interaction.denom1-1)) + (Interaction.nom1 - 1)
			
			Interaction.centerX = smallDots.children[index].position.x;
			Interaction.centerY = smallDots.children[index].position.y;
			
			smallDots.children[index].remove();
			
			Interaction.lline = new Path.Line(new Point(Interaction.centerX, Interaction.centerY-6), new Point(Interaction.centerX, Interaction.centerY+6))
			Interaction.lline.strokeColor = "#0066FF"
			
			Interaction.lline.strokeWidth = 3;
			Interaction.numericalAxis.addChild(Interaction.lline);	
			
		}
			if(Interaction.randomNumber == 0){
				if(Math.floor(Interaction.frac) == Interaction.frac){
					Interaction.ttop = Interaction.lline.position.y + 8;
					Interaction.lleft = Interaction.lline.position.x - 9;
				}
				else{
					Interaction.ttop = Interaction.centerY + 8;
					Interaction.lleft = Interaction.centerX - 9;
				}
				
				Interaction.ansF = document.createElement('div');
				Interaction.ansF.id = 'ansF'
				$(Interaction.container).append(Interaction.ansF);
				$(Interaction.ansF).html('<div id="nomm"></div><div id="linee"></div><div id="denomm"></div>');
				$(Interaction.ansF).css("position","absolute")
						.css("top", Interaction.ttop)
						.css("left", Interaction.lleft)
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("color", "#0066FF")
						.css("font-size", "12px")
						.css("font-weight", "bold")
						.css("line-height", "16px")
				
				$('#linee').css("height", "1px")
							.css("border-top", "1px solid")
							.css("padding", 0)
				
				$('#nomm').css("text-align", "center")
							.css("height", "16px")
							.html(Interaction.nom1)
				
				$('#denomm').css("text-align", "center")
							.css("height", "16px")
							.html(Interaction.denom1)
						
			}
			else if(Interaction.randomNumber == 1){
				if(Math.floor(Interaction.frac) == Interaction.frac){
					Interaction.ttop = Interaction.lline.position.y + 8;
					Interaction.lleft = Interaction.lline.position.x - 8;
				}
				else{
					Interaction.ttop = Interaction.centerY + 8;
					Interaction.lleft = Interaction.centerX - 9;
				}
				
				Interaction.ansF = document.createElement('div');
				Interaction.ansF.id = 'ansF'
				$(Interaction.container).append(Interaction.ansF);
				$(Interaction.ansF).html('<div id="nomm"></div><div id="linee"></div><div id="denomm"></div>');
				$(Interaction.ansF).css("position","absolute")
								.css("top", Interaction.ttop)
								.css("left", Interaction.lleft)
								.css("width", "16px")
								.css("height", "33px")
								.css("padding", 0)
								.css("margin", 0)
								.css("color", "#0066FF")
								.css("font-size", "12px")
								.css("font-weight", "bold")
								.css("line-height", "16px")
				
				$('#linee').css("height", "1px")
							.css("border-top", "1px solid")
							.css("padding", 0)
				
				$('#nomm').css("text-align", "center")
							.css("height", "16px")
							.html(Interaction.nom1)
				
				$('#denomm').css("text-align", "center")
							.css("height", "16px")
							.html(Interaction.denom1)
				
			}
			else{
				Interaction.ttop = Interaction.centerY + 8;
				Interaction.lleft = Interaction.centerX - 20;
				
				Interaction.ansF = document.createElement('div');
				Interaction.ansF.id = 'ansF'
				$(Interaction.container).append(Interaction.ansF);				
				$(Interaction.ansF).html('<div id="whh"></div><div id="nomm"></div><div id="linee"></div><div id="denomm"></div>');
				$(Interaction.ansF).css("position","absolute")
						.css("top", Interaction.ttop)
						.css("left", Interaction.lleft)
						.css("width", "32px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("color", "#0066FF")
						.css("font-size", "12px")
						.css("font-weight", "bold")
						.css("line-height", "16px")
				
				$('#whh').css("height", "33px")
							.css("width", "16px")
							.css("text-align", "center")
							.css("float", "left")
							.css("line-height", "33px")
							.html(Interaction.wh2)
				
				$('#linee').css("height", "1px")
							.css("width", "16px")
							.css("border-top", "1px solid")
							.css("padding", 0)
							.css("float", "left")
				
				$('#nomm').css("text-align", "center")
							.css("width", "16px")
							.css("height", "16px")
							.css("float", "left")
							.html(Interaction.nom1)
				
				$('#denomm').css("text-align", "center")
							.css("height", "16px")
							.css("width", "16px")
							.css("float", "left")
							.html(Interaction.denom1)
			}
		
	}
}