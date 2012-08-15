function __Styles(){
	answerColor = "#069";
}

var Animation = {
	init:function(container){
			Animation.container = container;
			
			// arrow
			var arr = new Group(); 
			var arrow = new Path.OneSidedArrow(new Point(10, 90), new Point(500, 90), 10, 30);
			var arrow2 = new Path.OneSidedArrow(new Point(500, 90), new Point(501, 90), 10, 30);
			arrow.rotate(180);
			arr.addChild(arrow);
			arr.addChild(arrow2);
			
			// big dots
			var dotGroup = new Group();
			var firstDot = new Path.Circle(new Point(61, 90), 5)
			firstDot.fillColor = "black";
			var secondDot = new Path.Circle(new Point(196, 90), 5)
			secondDot.fillColor = "black";
			var thirdDot = new Path.Circle(new Point(331, 90), 5)
			thirdDot.fillColor = "black";
			var fourthDot = new Path.Circle(new Point(466, 90), 5)
			fourthDot.fillColor = "black";
			dotGroup.addChild(firstDot);
			dotGroup.addChild(secondDot);
			dotGroup.addChild(thirdDot);
			dotGroup.addChild(fourthDot);
			
			// small dots
			var dotGroup2 = new Group();
			
			for(i = 0; i < 27; i++) {
				
				var dott = new Path.Circle(new Point(76+(i*15), 90), 3);
				dott.fillColor = "black";
				dotGroup2.addChild(dott);
			}
			
			var redDot = new Path.Circle(new Point(391,90), 4);
			redDot.fillColor = "red";
			
			// rects
			var firstRect = new Group();
			var secondRect = new Group();
			
			var one = new Path.Rectangle(new Point(60.5, 15.5), new Size(135, 15));
			one.fillColor = "#88ACE0";
			one.strokeColor = "black";
			
			var two = new Path.Rectangle(new Point(195.5, 15.5), new Size(135, 15));
			two.fillColor = "#88ACE0";
			two.strokeColor = "black";
			
			var firstPiece = new Path.Rectangle(new Point(330.5, 15.5), new Size(15,15));
			firstPiece.fillColor = "#88ACE0";
			firstPiece.strokeColor = "black";
			
			var secondPiece = new Path.Rectangle(new Point(345.5, 15.5), new Size(15,15));
			secondPiece.fillColor = "#88ACE0";
			secondPiece.strokeColor = "black";
			
			var thirdPiece = new Path.Rectangle(new Point(360.5, 15.5), new Size(15,15));
			thirdPiece.fillColor = "#88ACE0";
			thirdPiece.strokeColor = "black";
			
			var fourthPiece = new Path.Rectangle(new Point(375.5, 15.5), new Size(15,15));
			fourthPiece.fillColor = "#88ACE0";
			fourthPiece.strokeColor = "black";
			
			firstRect.addChild(one);
			firstRect.addChild(two);
			firstRect.addChild(firstPiece);
			firstRect.addChild(secondPiece);
			firstRect.addChild(thirdPiece);
			firstRect.addChild(fourthPiece);
			
			for(i = 0; i < 22; i++) {
				var exRect = new Path.Rectangle(new Point(60.5 + (15 * i), 150.5), new Size(15, 15));
				exRect.fillColor = "#88ACE0";
				exRect.strokeColor = "black";
				secondRect.addChild(exRect);
			}
			
			// division
			
			var linesGroup = new Group();
			var vertLine = new Path.Line(new Point(680.5, 120.5), new Point(680.5, 160.5));
			vertLine.strokeColor = "black";
			var horiLine = new Path.Line(new Point(680.5, 140.5), new Point(702.5, 140.5));
			horiLine.strokeColor = "black";
			var horiLine2 = new Path.Line(new Point(648.5, 160.5), new Point(680.5, 160.5));
			horiLine2.strokeColor = "black";
			var minusLine = new Path.Line(new Point(648.5, 154.5), new Point(654.5, 154.5));
			minusLine.strokeColor = "black";
			linesGroup.addChild(vertLine);
			linesGroup.addChild(horiLine);
			linesGroup.addChild(horiLine2);
			linesGroup.addChild(minusLine);
			linesGroup.position = new Point(674.5, 136.5);
			
			// html elements
			
			// firstF
			$(container).append('<div id="firstF"></div>');
			$('#firstF').css("position", "absolute")
						.css("top", "16px")
						.css("left", "20px")
						.css("width", "46px")
						.css("height", "41px")
						.css("font-size", 18)
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","18px")
						
			$('#firstF').append('<div id="whh">2</div>');
			$('#whh').css("height", "41px")
					.css("text-align", "center")
					.css("width","24px")
					.css("float", "left")
					.css("line-height","41px")
		
			
			$('#firstF').append('<fiv id="nomm">4</fiv>');
			$('#nomm').css("text-align", "center")
						.css("width","22px")
						.css("float", "left")
						.css("height", "20px")
				
			$('#firstF').append('<div id="exLine"></div>');
			$('#exLine').css("width", "22px")
						.css("height", "1px")
						.css("border-top", "2px solid")
						.css("padding", 0)
						.css("float", "left")
			
			$('#firstF').append('<div id="denomm">9</div>');
			$('#denomm').css("text-align", "center")
						.css("width","22px")
						.css("float", "left")
						.css("height", "20px")
			
			// secondF
			$(container).append('<div id="secondF"></div>');
			$('#secondF').css("position", "absolute")
						.css("top", "152px")
						.css("left", "38px")
						.css("width", "26px")
						.css("height", "41px")
						.css("font-size", 18)
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","18px")
			
				
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
						
			// 0, 1, 2, 3
			
			$(container).append('<div id="whs"></div>');
			$('#whs').css("position", "absolute")
						.css("top", "76px")
						.css("left", "60px")
						.css("font-size", 18)
						.css("width", "440px")
						.css("height", "26px");
			
			$('#whs').append('<p id="zzero">0</p>');
			$('#zzero').css("position", "absolute")
						.css("top", "0px")
						.css("left", "10px")
						.css("color", "grey");
						
			$('#whs').append('<p id="oone">1</p>');
			$('#oone').css("position", "absolute")
						.css("top", "0px")
						.css("left", "144px")
						.css("color", "grey");
						
			$('#whs').append('<p id="ttwo">2</p>');
			$('#ttwo').css("position", "absolute")
						.css("top", "0px")
						.css("left", "280px")
						.css("color", "grey");
			
			$('#whs').append('<p id="tthree">3</p>');
			$('#tthree').css("position", "absolute")
						.css("top", "0px")
						.css("left", "415px")
						.css("color", "grey");
			
			// 0/9, 9/9, 18/9, 22/9s
			$(container).append('<div id="fracss"></div>');
			$('#fracss').css("position", "absolute")
						.css("top", "112px")
						.css("left", "50px")
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
						.css("color", "grey");
		
			
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
						.css("color", "grey");
		
			
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
						.css("color", "grey");
			
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
						.css("color", "grey");
				
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
			
			// firstF2
					
			$(container).append('<div id="first2F"></div>');
			$('#first2F').css("position", "absolute")
						.css("top", "60px")
						.css("left", "592px")
						.css("width", "46px")
						.css("height", "41px")
						.css("font-size", 18)
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","18px")
						
			$('#first2F').append('<p id="whh2">2</p>');
			$('#whh2').css("height", "41px")
					.css("text-align", "center")
					.css("width","24px")
					.css("float", "left")
					.css("line-height","41px")
				
			$('#first2F').append('<p id="nomm3">4</p>');
			$('#nomm3').css("text-align", "center")
						.css("width","22px")
						.css("float", "left")
						.css("height", "20px")
			
			$('#first2F').append('<div id="exLine3"></div>');
			$('#exLine3').css("width", "22px")
						.css("height", "1px")
						.css("border-top", "2px solid")
						.css("padding", 0)
						.css("float", "left")
		
			
			$('#first2F').append('<p id="denomm3">9</p>');
			$('#denomm3').css("text-align", "center")
						.css("width","22px")
						.css("float", "left")
						.css("height", "20px")
						
			$(container).append('<p id="eqqq" >=</p>');
			$('#eqqq').css("position", "absolute")
						.css("left", "660px")
						.css("top", "70px")
						.css("font-size", 18);
						
			// second2F
			$(container).append('<div id="second2F"></div>');
			$('#second2F').css("position", "absolute")
						.css("top", "60px")
						.css("left", "694px")
						.css("width", "26px")
						.css("height", "41px")
						.css("font-size", 18)
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","18px")
		
			
			$('#second2F').append('<p id="nomm4">22</p>');
			$('#nomm4').css("text-align", "center")
						.css("height", "20px")
				
			$('#second2F').append('<div id="exLine4"></div>');
			$('#exLine4').css("height", "1px")
						.css("border-top", "2px solid")
						.css("padding", 0)
			
			$('#second2F').append('<p id="denomm4">9</p>');
			$('#denomm4').css("text-align", "center")
						.css("height", "20px")
						
			// firstEq
					
			$(container).append('<div id="firstEq"></div>');
			$('#firstEq').css("position", "absolute")
						.css("top", "130px")
						.css("left", "524px")
						.css("width", "140px")
						.css("height", "40px")
						.css("font-size", 18);
			
			$('#firstEq').append('<p id="nomm5">(2 x 9)</p>');
			$('#nomm5').css("position", "absolute")
						.css("top", "0px")
						.css("left", "-12px")
						.css("font-size", 18);
						
			$('#firstEq').append('<p id="nomm55">+ 4 =</p>');
			$('#nomm55').css("position", "absolute")
						.css("top", "0px")
						.css("left", "44px")
						.css("font-size", 18);
			
			$('#firstEq').append('<div id="firstEqF"></div>');
			$('#firstEqF').css("position", "absolute")
						.css("top", "-2px")
						.css("left", "90px")
						.css("width", "26px")
						.css("height", "41px")
						.css("font-size", 18)
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","18px")
						
			$('#firstEqF').append('<div id="nomm555">22</div>');
			$('#nomm555').css("text-align", "center")
						.css("height", "20px")
			
			$('#firstEqF').append('<div id="exLine5"></div>');
			$('#exLine5').css("height", "1px")
						.css("border-top", "2px solid")
						.css("padding", 0)
			
			$('#firstEqF').append('<div id="denomm5">9</div>');
			$('#denomm5').css("text-align", "center")
						.css("height", "20px")
						
			// secondEq		
			$(container).append('<div id="secondEq"></div>');
			$('#secondEq').css("position", "absolute")
						.css("top", "127px")
						.css("left", "654px")
						.css("width", "72px")
						.css("height", "62px")
						.css("font-size", 18);
			
			$('#secondEq').append('<p id="num1">22</p>');
			$('#num1').css("position", "absolute")
						.css("top", "3px")
						.css("left", "15px")
						.css("font-size", 18);
						
			$('#secondEq').append('<p id="num2">9</p>');
			$('#num2').css("position", "absolute")
						.css("top", "2px")
						.css("left", "46px")
						.css("font-size", 18);
			
			$('#secondEq').append('<p id="num3">2</p>');
			$('#num3').css("position", "absolute")
						.css("top", "24px")
						.css("left", "46px")
						.css("font-size", 18);
			
			$('#secondEq').append('<p id="num4">18</p>');
			$('#num4').css("position", "absolute")
						.css("top", "23px")
						.css("left", "15px")
						.css("font-size", 18),
			
			$('#secondEq').append('<p id="num5">4</p>');
			$('#num5').css("position", "absolute")
						.css("top", "44px")
						.css("left", "20px")
						.css("font-size", 18);
			
			// first3F
			$(container).append('<div id="first3F"></div>');
			$('#first3F').css("position", "absolute")
						.css("top", "128px")
						.css("left", "728px")
						.css("width", "46px")
						.css("height", "41px")
						.css("font-size", 18)
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","18px")
						
			$('#first3F').append('<p id="whh33">2</p>');
			$('#whh33').css("height", "41px")
					.css("text-align", "center")
					.css("width","24px")
					.css("float", "left")
					.css("line-height","41px")
				
			$('#first3F').append('<p id="nomm33">4</p>');
			$('#nomm33').css("text-align", "center")
						.css("width","22px")
						.css("float", "left")
						.css("height", "20px")
			
			$('#first3F').append('<div id="exLine33"></div>');
			$('#exLine33').css("width", "22px")
						.css("height", "1px")
						.css("border-top", "2px solid")
						.css("padding", 0)
						.css("float", "left")
		
			
			$('#first3F').append('<p id="denomm33">9</p>');
			$('#denomm33').css("text-align", "center")
						.css("width","22px")
						.css("float", "left")
						.css("height", "20px")
			
			
			arr.opacity = 0;
			firstRect.opacity = 0;
			secondRect.opacity = 0;
			dotGroup.children[0].opacity = 0;
			dotGroup.children[1].opacity = 0;
			dotGroup.children[2].opacity = 0;
			dotGroup.children[3].opacity = 0;
			for(i = 0; i < 27; i++) {
				dotGroup2.children[i].opacity = 0;
			}
			redDot.opacity = 0;
			vertLine.opacity = 0;
			horiLine.opacity = 0;
			horiLine2.opacity = 0;
			minusLine.opacity = 0;
			
			exampleHelper = {
				firstFOpacity: 0,
				secondFOpacity: 0,
				first2FOpacity: 0,
				first3FOpacity: 0,
				second2FOpacity: 0,
				second2FColor: 0,
				first2FColor: 0,
				zzeroOpacity: 0,
				ooneOpacity: 0,
				ttwoOpacity: 0,
				tthreeOpacity: 0,
				zerooOpacity: 0,
				oneeOpacity: 0,
				twooOpacity: 0,
				lasttOpacity: 0,
				lasttColor: 0,
				eqqqOpacity: 0,
				nomm5Opacity: 0,
				nomm55Opacity: 0,
				nomm555Opacity: 0,
				denomm5Opacity: 0,
				num1Opacity: 0,
				num2Opacity: 0,
				num3Opacity: 0,
				num4Opacity: 0,
				num5Opacity: 0
			};
			
			exampleHelper.animate = Item.prototype.animate;
			
			Animation.onFrame = function(event){
				$('#firstF').css("opacity", exampleHelper.firstFOpacity);
				$('#secondF').css("opacity", exampleHelper.secondFOpacity);
				$('#zzero').css("opacity", exampleHelper.zzeroOpacity);
				$('#oone').css("opacity", exampleHelper.ooneOpacity);
				$('#ttwo').css("opacity", exampleHelper.ttwoOpacity);
				$('#tthree').css("opacity", exampleHelper.tthreeOpacity);
				$('#zeroo').css("opacity", exampleHelper.zerooOpacity);
				$('#onee').css("opacity", exampleHelper.oneeOpacity);
				$('#twoo').css("opacity", exampleHelper.twooOpacity);
				$('#lastt').css("opacity", exampleHelper.lasttOpacity);
				$('#lastt').css("color", exampleHelper.lasttColor);
				$('#first2F').css("opacity", exampleHelper.first2FOpacity);
				$('#first3F').css("opacity", exampleHelper.first3FOpacity);
				$('#second2F').css("opacity", exampleHelper.second2FOpacity);
				$('#second2F').css("color", exampleHelper.second2FColor);
				$('#eqqq').css("opacity", exampleHelper.eqqqOpacity);
				$('#nomm5').css("opacity", exampleHelper.nomm5Opacity);
				$('#nomm55').css("opacity", exampleHelper.nomm55Opacity);
				$('#nomm555').css("opacity", exampleHelper.nomm555Opacity);
				$('#denomm5').css("opacity", exampleHelper.denomm5Opacity);
				$('#exLine5').css("opacity", exampleHelper.denomm5Opacity);
				$('#num1').css("opacity", exampleHelper.num1Opacity);
				$('#num2').css("opacity", exampleHelper.num2Opacity);
				$('#num3').css("opacity", exampleHelper.num3Opacity);
				$('#num4').css("opacity", exampleHelper.num4Opacity);
				$('#num5').css("opacity", exampleHelper.num5Opacity);
				$('#first2F').css("color", exampleHelper.first2FColor);
			}
			
			
			
			arr.animate({
				style: {
					opacity: 1
				},
				duration: 1000,
				delay: 1000,
				animationType: 'easeInEaseOut'
			});
			
			dotGroup.children[0].animate({
				style: {
					opacity: 1
				},
				duration: 500,
				delay: 2000,
				animationType: 'easeInEaseOut'
			});
			
			dotGroup.children[1].animate({
				style: {
					opacity: 1
				},
				duration: 500,
				delay: 2500,
				animationType: 'easeInEaseOut'
			});
			
			dotGroup.children[2].animate({
				style: {
					opacity: 1
				},
				duration: 500,
				delay: 3000,
				animationType: 'easeInEaseOut'
			});
			
			dotGroup.children[3].animate({
				style: {
					opacity: 1
				},
				duration: 500,
				delay: 3500,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					zzeroOpacity: 1
				},
				duration: 500,
				delay: 2000,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					ooneOpacity: 1
				},
				duration: 500,
				delay: 2500,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					ttwoOpacity: 1
				},
				duration: 500,
				delay: 3000,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					tthreeOpacity: 1
				},
				duration: 500,
				delay: 3500,
				animationType: 'easeInEaseOut'
			});
			
			for(i = 0; i < 27; i++) {
				dotGroup2.children[i].animate({ 
					style: {
						opacity: 1
					},
					duration: 200,
					delay: 4000+(200*i),
					animationType: 'easeInEaseOut'
				});
			}
			
			exampleHelper.animate({
				style: {
					zerooOpacity: 1
				},
				duration: 200,
				delay: 3800,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					oneeOpacity: 1
				},
				duration: 200,
				delay: 5600,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					twooOpacity: 1
				},
				duration: 200,
				delay: 7400,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					lasttOpacity: 1
				},
				duration: 200,
				delay: 8200,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					firstFOpacity: 1
				},
				duration: 1000,
				delay: 9000,
				animationType: 'easeInEaseOut'
			});
			
			firstRect.animate({
				style: {
					opacity: 1
				},
				duration: 1000,
				delay: 10000,
				animationType: 'easeInEaseOut'
			});
			
			redDot.animate({
				style: {
					opacity: 1
				},
				duration: 250,
				delay: 11000,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					secondFOpacity: 1
				},
				duration: 1000,
				delay: 11500,
				animationType: 'easeInEaseOut'
			});
			
			secondRect.animate({
				style: {
					opacity: 1
				},
				duration: 1000,
				delay: 12500,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					lasttColor: "red"
				},
				duration: 250,
				delay: 13500,
				animationType: 'easeInEaseOut'
			});
		
			exampleHelper.animate({
				style: {
					first2FOpacity : 1
				},
				duration: 500,
				delay: 14000,
				animationType: 'easeInEaseOut'
			});
		
			exampleHelper.animate({
				style: {
					eqqqOpacity : 1
				},
				duration: 500,
				delay: 14750,
				animationType: 'easeInEaseOut'
			});
		
			exampleHelper.animate({
				style: {
					second2FOpacity : 1
				},
				duration: 500,
				delay: 15500,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					nomm5Opacity : 1
				},
				duration: 500,
				delay: 16500,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					nomm55Opacity : 1
				},
				duration: 500,
				delay: 17500,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					nomm555Opacity : 1
				},
				duration: 500,
				delay: 18500,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					denomm5Opacity : 1
				},
				duration: 500,
				delay: 19500,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					second2FColor: "red"
				},
				duration: 500,
				delay: 20000,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					num1Opacity : 1
				},
				duration: 500,
				delay: 21000,
				animationType: 'easeInEaseOut'
			});
			
			vertLine.animate({
				style: {
					opacity : 1
				},
				duration: 500,
				delay: 21500,
				animationType: 'easeInEaseOut'
			});
			horiLine.animate({
				style: {
					opacity : 1
				},
				duration: 500,
				delay: 21750,
				animationType: 'easeInEaseOut'
			});
			
			
			
			exampleHelper.animate({
				style: {
					num2Opacity : 1
				},
				duration: 500,
				delay: 22500,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					num3Opacity : 1
				},
				duration: 500,
				delay: 23000,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					num4Opacity : 1
				},
				duration: 500,
				delay: 23500,
				animationType: 'easeInEaseOut'
			});
			
			horiLine2.animate({
				style: {
					opacity : 1
				},
				duration: 500,
				delay: 24000,
				animationType: 'easeInEaseOut'
			});
			
			minusLine.animate({
				style: {
					opacity : 1
				},
				duration: 500,
				delay: 24250,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					num5Opacity : 1
				},
				duration: 500,
				delay: 25000,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					first3FOpacity: 1,
				},
				duration: 1000,
				delay: 25500,
				animationType: 'easeInEaseOut'
			});
			
			exampleHelper.animate({
				style: {
					first2FColor: "#88ACE0"
				},
				duration: 500,
				delay: 26500,
				animationType: 'easeInEaseOut',
                callback: function(){
                    Main.animationFinished();
                }
			});
		}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yanda gelecek olan bileşik kesri tam sayılı kesre, tam sayılı kesri bleşik kesre çeviriniz ve kontrol ediniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			
			Interaction.appendStatus({
				bottom:'50px',
				right:'170px'
			});
			Interaction.appendButton({
				bottom:'40px',
				right:'40px'
			})
			
			Interaction.setRandomGenerator(2);
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){
			Interaction.randomNumber = randomNumber;
			
			
			if($('#questionDiv'))
				$('#questionDiv').remove();
			if($('#answer'))
				$('#answer').remove();
			Interaction.flushInputs();
			if(randomNumber == 0){
				
				Interaction.nom = Math.floor(Math.random() * 50) + 3;
				
				do
					Interaction.denom = Math.floor(Math.random() * 50) + 2
					while(Interaction.denom >= Interaction.nom || (Interaction.nom % Interaction.denom == 0))
				
				$(Interaction.container).append('<div id="questionDiv"></div>');
				$('#questionDiv').css("position", "absolute")
								.css("left", "80px")
								.css("top", "70px")
								.css("width", "150")
								.css("height", "76")
								.css("padding", 0)
				
				$('#questionDiv').append('<div id="firstFrac"></div>')
				$('#firstFrac').css("position", "absolute")
								.css("left", "0px")
								.css("top", "9px")
								.css("width", "35px")
								.css("height", "61px")
								.css("font-size", 26)
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","30px")
								
				
				$('#firstFrac').append('<div id="nom" ></div>');
				$('#nom').css("height", "30px")
						.css("text-align", "center")
				$('#nom').html(Interaction.nom);
						
				$('#firstFrac').append('<div id="line1"></div>');
				$('#line1').css("height", "1px")
						.css("padding", 0)
						.css("border-top", "2px solid")
						
				$('#firstFrac').append('<div id="denom" ></div>');
				$('#denom').css("text-align", "center")
						   .css("height", "30px")
				$('#denom').html(Interaction.denom);
				
				$('#questionDiv').append('<p id="equal1" >=</p>');
				$('#equal1').css("position", "absolute")
						.css("left", "44px")
						.css("top", "26px")
						.css("font-size", 26)
				$('#questionDiv').append('<div id="line2"></div>');
				$('#line2').css("position","absolute")
						.css("left", "102px")
						.css("top", "37px")
						.css("width", "36px")
						.css("height", "1px")
						.css("padding", 0)
						.css("border-top", "2px solid")
				
				// input1
				Interaction.appendInput({
					width: '30px',
					height: '32px',
					textAlign: 'center',
					position: 'absolute',
					left: '64px',
					top: "22px",
					fontSize: '22px', 
				});
				
				// input2
				Interaction.appendInput({
					width: '30px',
					height: '32px',
					textAlign: 'center',
					position: 'absolute',
					left: '104px',
					top: "2px",
					fontSize: '20px', 
				});
				
				// input3
				Interaction.appendInput({
					width: '30px',
					height: '32px',
					textAlign: 'center',
					position: 'absolute',
					left: '104px',
					top: "44px",
					fontSize: '20px', 
				});
				
				$(Interaction.inputs[0]).attr('maxlength', '2')
				$(Interaction.inputs[1]).attr('maxlength', '2')
				$(Interaction.inputs[2]).attr('maxlength', '2')
				
				$('#questionDiv').append(Interaction.inputs[0])
								.append(Interaction.inputs[1])
								.append(Interaction.inputs[2])
				
			}
			else{
				
				Interaction.nom = Math.floor(Math.random() * 50) + 3;
				
				do
					Interaction.denom = Math.floor(Math.random() * 50) + 2
					while(Interaction.denom >= Interaction.nom || (Interaction.nom % Interaction.denom == 0))
				
				Interaction.wh = Math.floor(Interaction.nom/Interaction.denom)
				Interaction.nom2 = Interaction.nom % Interaction.denom;
				Interaction.denom2 = Interaction.denom;
				
				$(Interaction.container).append('<div id="questionDiv"></div>');
				$('#questionDiv').css("position", "absolute")
								.css("left", "170px")
								.css("top", "34px")
								.css("width", "128")
								.css("height", "76");
				
				$('#questionDiv').append('<div id="firstFrac"></div>')
				$('#firstFrac').css("position", "absolute")
								.css("left", "-6px")
								.css("top", "9px")
								.css("width", "73px")
								.css("height", "61px")
								.css("font-size", 26)
								.css("padding", 0)
								.css("margin", 0)
								.css("line-height","30px")
				
				$('#firstFrac').append('<div id="wh" ></div>');
				$('#wh').css("height", "61px")
						.css("text-align", "center")
						.css("width","38")
						.css("float", "left")
						.css("line-height", "61px")
				$('#wh').html(Interaction.wh);
				
				
				$('#firstFrac').append('<div id="nom" ></div>');
				$('#nom').css("text-align", "center")
						.css("width","30")
						.css("float", "left")
						.css("height", "30px")
				$('#nom').html(Interaction.nom2);
				
				
				
				$('#firstFrac').append('<div id="line1"></div>');
				$('#line1').css("width", "35px")
						.css("height", "1px")
						.css("padding", 0)
						.css("border-top", "2px solid")
						.css("float", "left")
				
				$('#firstFrac').append('<div id="denom" ></div>');
				$('#denom').css("text-align", "center")
							.css("width","30")
							.css("float", "left")
							.css("height", "30px")
				$('#denom').html(Interaction.denom2);
		
				
				$('#questionDiv').append('<p id="equal1" >=</p>');
				$('#equal1').css("position", "absolute")
						.css("left", "74px")
						.css("top", "26px")
						.css("font-size", 26);
			
				$('#questionDiv').append('<div id="line2"></div>');
				$('#line2').css("position","absolute")
						.css("left", "96px")
						.css("top", "38px")
						.css("width", "36px")
						.css("height", "1px")
						.css("padding", 0)
						.css("border-top", "2px solid")
				
				
				// input2
				Interaction.appendInput({
					width: '30px',
					height: '32px',
					textAlign: 'center',
					position: 'absolute',
					left: '98px',
					top: "2px",
					fontSize: '20px', 
				});
				
				// input3
				Interaction.appendInput({
					width: '30px',
					height: '32px',
					textAlign: 'center',
					position: 'absolute',
					left: '98px',
					top: "44px",
					fontSize: '20px', 
				});
				
				$(Interaction.inputs[0]).attr('maxlength', '2')
				$(Interaction.inputs[1]).attr('maxlength', '2')
				
				$('#questionDiv').append(Interaction.inputs[0])
								.append(Interaction.inputs[1])
				
			}
			
			$(Interaction.container).append('<div id="answer"></div>');
			$('#answer').css("position", "absolute")
							.css("left", "128px")
							.css("top", "144px")
							.css("width", "280px")
							.css("height", "96px")
							.css("font-size", 20)
							.css("color", answerColor)
							.css("padding", 0)
						//	.css("border", "solid")
			
			$('#answer').append('<div id="divison123"></div>')
			$('#divison123').css("position", "absolute")
							.css("top", "-60px")
							.css("left", "240px")
							.css("width", "62px")
							.css("height", "76px")
							.css("font-size", 22)
							.css("padding", 0)
	
		},
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
		
		},
	isAnswerCorrect : function(values){
			if(Interaction.randomNumber == 0){
				var ans1 = Math.floor(Interaction.nom/Interaction.denom);
				var ans2 = Interaction.nom % Interaction.denom;
				var ans3 = Interaction.denom;
				if(values[0] == ans1 && (values[1] * ans3 == values[2] * ans2))
					return true;
				else
					return false;
			}
			else{
				if(values[0] * Interaction.denom == values[1] * Interaction.nom)
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
			if(Interaction.randomNumber == 0){
				Interaction.inputs[0].value = Math.floor(Interaction.nom/Interaction.denom);
				Interaction.inputs[1].value = Interaction.nom % Interaction.denom;
				Interaction.inputs[2].value = Interaction.denom;
				
				Interaction.pause = 1;
				Animation.division = new LongDivision(Interaction.nom, Interaction.denom,$('#divison123'));
				setTimeout(
					'Animation.division.nextStep(1000);'
					,1000);
				setTimeout(
					'Animation.division.nextStep(1000);'
					,2000);
				setTimeout(
					'Interaction.pause = 0;'
					,3000);
			}
			else{
				var answerStr = "Cevap: ("+Interaction.wh+" x "+Interaction.denom+") + "+Interaction.nom+" = ";
					$('#answer').html('<p id="ans">'+answerStr+'</p>');
					$('#ans').css("position", "absolute")
								.css("top", "2px")
								.css("right", "70px")							
								.css("text-align", "right")
					$('#answer').append('<div id="ansLine"></div>')
					$('#ansLine').css("position", "absolute")
								.css("top", "20px")
								.css("right", "38px")
								.css("width", "24px")
								.css("height", "1px")
								.css("padding", 0)
								.css("border-top", "2px solid");
					$('#answer').append('<p id="ansNom"></div>')
					$('#ansNom').css("position", "absolute")
									.css("top", "0px")
									.css("left", "219px")
									.css("text-align", "center")
									.css("width", "20px")
					$('#ansNom').html(Interaction.nom);
					$('#answer').append('<p id="ansDenom"></div>')
					$('#ansDenom').css("position", "absolute")
									.css("top", "24px")
									.css("left", "219px")
									.css("text-align", "center")
									.css("width", "20px")
					$('#ansDenom').html(Interaction.denom);
					
					Interaction.inputs[0].value = Interaction.nom;
					Interaction.inputs[1].value = Interaction.denom;
					Interaction.inputs[0].style.color = "green";
					Interaction.inputs[1].style.color = "green";
			}
		
		}
}