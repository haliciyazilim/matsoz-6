function __Styles(){
	
	placeHolderColor = "#bfe8ef";
    fractionsColor="#e6c181";
    sortableCursorType="pointer";
}

var Animation = {
	init:function(container){
			Animation.container = container;
			
			// animation delays
			var fractionStart = 1000;
			var rectStart = 2500;
			var rectFlyStart = 4500;
			var arrowStart = 8500;
			var rectSecondFlyStart = 9500;
			var eqStart = 12000;
			var secondEqStart = 14000;
			var lastEqStart = 16000;
			
			// animation durations
			var basicFadeInDuration = 1000;
			var flyDuration = 2000;
			var secondFlyDuration = 1500;
			var imagesFadeInDuration = 100;
			
			var fillColor = "#FFDEAD"
			var rectGroup = new Group();
			var rect1 = new Path.SegmentedRectangle(182.5, 10.5, 20, 80, 1, 8, 5, fillColor);
			rect1.rotate(180);
		//	rect1.opacity = 0;
			var rect2 = new Path.SegmentedRectangle(282.5, 10.5, 20, 80, 1, 4, 1, fillColor)
			rect2.rotate(180);
		//	rect2.opacity = 0;
			var rect3 = new Path.SegmentedRectangle(382.5, 10.5, 20, 80, 1, 8, 6, fillColor)
			rect3.rotate(180);
			var rect4 = new Path.SegmentedRectangle(482.5, 10.5, 20, 80, 1, 8, 3, fillColor)
			rect4.rotate(180);
			var rect5 = new Path.SegmentedRectangle(582.5, 10.5, 20, 80, 1, 2, 1, fillColor)
			rect5.rotate(180);
			rectGroup.addChild(rect1);
			rectGroup.addChild(rect2);
			rectGroup.addChild(rect3);
			rectGroup.addChild(rect4);
			rectGroup.addChild(rect5);
			rectGroup.opacity = 0;
			Math.round()
			// initial positions
			var pos1 = rect1.position;
			var pos2 = rect2.position;
			var pos3 = rect3.position;
			var pos4 = rect4.position;
			var pos5 = rect5.position;
			
			Animation.numericalAxis = new Group();
			var arr = new Group();
			var arrow = new Path.OneSidedArrow(new Point(111, 134), new Point(671, 134), 10, 30)
			var arrow2 = new Path.OneSidedArrow(new Point(671, 134), new Point(672, 134), 10, 30);
			arrow.rotate(180);
			arr.addChild(arrow);
			arr.addChild(arrow2);
		//	arr.opacity = 0;
			
			var bigDots = new Group();
			var bigDot1 = new Path.Circle(new Point(151, 134), 5);
			bigDot1.fillColor = "black";
			var bigDot2 = new Path.Circle(new Point(631, 134), 5);
			bigDot2.fillColor = "black";
			bigDots.addChild(bigDot1);
			bigDots.addChild(bigDot2);
			
			var pieceLength = 480/8;
			
			Interaction.smallDots = new Group();
			for(var i = 0; i < 7; i++){
				var smallDot = new Path.Circle(new Point(151+pieceLength*(i+1), 134), 3)
				smallDot.fillColor = "black";
				Interaction.smallDots.addChild(smallDot);
			}
			
			var dashedLinesGroup1 = new Group();
			for(var i = 0; i < 4; i++){
				var dashLine = new Path.Line(new Point(263.5, 24.5+(i * 20)), new Point(283.5, 24.5+(i * 20)));
				dashLine.strokeColor = "red";
				dashLine.dashArray = [3,2];
				dashedLinesGroup1.addChild(dashLine);
			}
			dashedLinesGroup1.opacity = 0;
			
			var dashedLinesGroup2 = new Group();
			for(var i = 0; i < 7; i++){
				if(i == 3)
					continue;
				else{
					var dashedLine = new Path.Line(new Point(383.5, 24.5+(i * 10)), new Point(403.5, 24.5+(i * 10)));
					dashedLine.strokeColor = "red";
					dashedLine.dashArray = [3,2];
					dashedLinesGroup2.addChild(dashedLine);
				}
			}
			dashedLinesGroup2.opacity = 0;
			
			Animation.numericalAxis.addChild(arr);
			Animation.numericalAxis.addChild(bigDots);
			Animation.numericalAxis.addChild(Interaction.smallDots);
			Animation.numericalAxis.opacity = 0;
			
			Animation.pointDiv = document.createElement('div');
			Animation.pointDiv.id = 'AnimPointDiv'
			$(Animation.container).append(Animation.pointDiv)
			$(Animation.pointDiv).html('<div id="fpp"></div> <div id="spp"></div>')
			$(Animation.pointDiv).css("position", "absolute")
						.css("top", "120px")
						.css("left", "146px")
						.css("width", "480px")
						.css("height", "20px")
						.css("font-size", 22)
						.css("opacity", 0)
			
			$('#fpp').css("position", "absolute")
					.css("top", "0px")
					.css("left", "14px")
					.css("width", "20px")
					.css("height", "20px")
					.html(0);
			$('#spp').css("position", "absolute")
					.css("top", "0px")
					.css("left", "492px")
					.css("width", "20px")
					.css("height", "20px")
					.html(1);
			$('#AnimPointDiv').delay(arrowStart).animate({opacity: 1}, basicFadeInDuration, 'easeInOutQuad')
			
			$(container).append('<div id="frac22"><div id="nom22">5</div><div id="line22"></div><div id="denom22">8</div></div>')
		
			$('#frac22').css("position", "absolute")
						.css("top", "108px")
						.css("left", "198px")
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","16px")
						.css("opacity", 0)
			
			$('#line22').css("height", "1px")
						.css("border-top", "1px solid")
						.css("padding", 0)
					
			$('#nom22').css("text-align", "center")
						.css("height", "16px")
					
			$('#denom22').css("text-align", "center")
						.css("height", "16px")
			
			$('#frac22').delay(fractionStart).animate({opacity: 1}, basicFadeInDuration, 'easeInOutQuad')
						.delay(2600).animate({left:"498px"}, flyDuration, 'easeInOutQuad')
						.delay(2900).animate({left:"458px", top:"111px"}, secondFlyDuration, 'easeInOutQuad')
			
			$(container).append('<div id="frac33"><div id="nom33">1</div><div id="line33"></div><div id="denom33">4</div></div>')
		
			$('#frac33').css("position", "absolute")
						.css("top", "108px")
						.css("left", "298px")
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","16px")
						.css("opacity", 0)
			
			$('#line33').css("height", "1px")
						.css("border-top", "1px solid")
						.css("padding", 0)
					
			$('#nom33').css("text-align", "center")
						.css("height", "16px")
					
			$('#denom33').css("text-align", "center")
						.css("height", "16px")
			
			$('#frac33').delay(fractionStart).animate({opacity: 1}, basicFadeInDuration, 'easeInOutQuad')
						.delay(2500).animate({left:"198px"}, flyDuration, 'easeInOutQuad')
						.delay(3000).animate({left:"278px", top:"111px"}, secondFlyDuration, 'easeInOutQuad')
			
			$(container).append('<div id="frac44"><div id="nom44">6</div><div id="line44"></div><div id="denom44">8</div></div>')
		
			$('#frac44').css("position", "absolute")
						.css("top", "108px")
						.css("left", "398px")
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","16px")
						.css("opacity", 0)
			
			$('#line44').css("height", "1px")
						.css("border-top", "1px solid")
						.css("padding", 0)
					
			$('#nom44').css("text-align", "center")
						.css("height", "16px")
					
			$('#denom44').css("text-align", "center")
						.css("height", "16px")
			
			$('#frac44').delay(fractionStart).animate({opacity: 1}, basicFadeInDuration, 'easeInOutQuad')
						.delay(2900).animate({left:"598px"}, flyDuration, 'easeInOutQuad')
						.delay(2600).animate({left:"518px", top:"111px"}, secondFlyDuration, 'easeInOutQuad')
			
			$(container).append('<div id="frac55"><div id="nom55">3</div><div id="line55"></div><div id="denom55">8</div></div>')
		
			$('#frac55').css("position", "absolute")
						.css("top", "108px")
						.css("left", "498px")
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","16px")
						.css("opacity", 0)
			
			$('#line55').css("height", "1px")
						.css("border-top", "1px solid")
						.css("padding", 0)
					
			$('#nom55').css("text-align", "center")
						.css("height", "16px")
					
			$('#denom55').css("text-align", "center")
						.css("height", "16px")
			
			$('#frac55').delay(fractionStart).animate({opacity: 1}, basicFadeInDuration, 'easeInOutQuad')
						.delay(2700).animate({left:"298px"}, flyDuration, 'easeInOutQuad')
						.delay(2800).animate({left:"338px", top:"111px"}, secondFlyDuration, 'easeInOutQuad')
			
			$(container).append('<div id="frac66"><div id="nom66">1</div><div id="line66"></div><div id="denom66">2</div></div>')
		
			$('#frac66').css("position", "absolute")
						.css("top", "108px")
						.css("left", "598px")
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","16px")
						.css("opacity", 0)
			
			$('#line66').css("height", "1px")
						.css("border-top", "1px solid")
						.css("padding", 0)
					
			$('#nom66').css("text-align", "center")
						.css("height", "16px")
					
			$('#denom66').css("text-align", "center")
						.css("height", "16px")
			
			$('#frac66').delay(fractionStart).animate({opacity: 1}, basicFadeInDuration, 'easeInOutQuad')
						.delay(2800).animate({left:"398px"}, flyDuration, 'easeInOutQuad')
						.delay(2700).animate({left:"398px", top:"111px"}, secondFlyDuration, 'easeInOutQuad')
			
			$(container).append('<div id="frac77"><div id="nom77">1</div><div id="line77"></div><div id="denom77">2</div></div>')
		
			$('#frac77').css("position", "absolute")
						.css("top", "154px")
						.css("left", "397px")
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","16px")
						.css("opacity", 0)
			
			$('#line77').css("height", "1px")
						.css("border-top", "1px solid")
						.css("padding", 0)
					
			$('#nom77').css("text-align", "center")
						.css("height", "16px")
					
			$('#denom77').css("text-align", "center")
						.css("height", "16px")
			
			$('#frac77').delay(eqStart).animate({opacity: 1}, basicFadeInDuration, 'easeInOutQuad')
						.delay(500).animate({opacity: 0}, basicFadeInDuration, 'easeInOutQuad')
			
			$(container).append('<div id="frac777"><div id="nom777">1 x 4</div><div id="line777"></div><div id="denom777">2 x 4</div></div>')
		
			$('#frac777').css("position", "absolute")
						.css("top", "154px")
						.css("left", "387px")
						.css("width", "36px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("color", "red")
						.css("line-height","16px")
						.css("opacity", 0)
			
			$('#line777').css("height", "1px")
					.css("border-top", "1px solid")
					.css("padding", 0)
					
			$('#nom777').css("text-align", "center")
					.css("height", "16px")
					
			$('#denom777').css("text-align", "center")
					.css("height", "16px")
			
			$('#frac777').delay(secondEqStart).animate({opacity: 1}, basicFadeInDuration, 'easeInOutQuad')
						 .delay(1000).animate({opacity: 0}, basicFadeInDuration, 'easeInOutQuad')
			
			
			$(container).append('<div id="frac7777"><div id="nom7777">4</div><div id="line7777"></div><div id="denom7777">8</div></div>')
		
			$('#frac7777').css("position", "absolute")
						.css("top", "154px")
						.css("left", "397px")
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","16px")
						.css("opacity", 0)
			
			$('#line7777').css("height", "1px")
						.css("border-top", "1px solid")
						.css("padding", 0)
					
			$('#nom7777').css("text-align", "center")
						.css("height", "16px")
					
			$('#denom7777').css("text-align", "center")
						.css("height", "16px")
			
			$('#frac7777').delay(lastEqStart).animate({opacity: 1}, basicFadeInDuration, 'easeInOutQuad')
				//		 .delay(500).animate({opacity: 0}, basicFadeInDuration, 'easeInOutQuad')
			
			$(container).append('<div id="frac88"><div id="nom88">1</div><div id="line88"></div><div id="denom88">4</div></div>')
		
			$('#frac88').css("position", "absolute")
						.css("top", "154px")
						.css("left", "277px")
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","16px")
						.css("opacity", 0)
			
			$('#line88').css("height", "1px")
						.css("border-top", "1px solid")
						.css("padding", 0)
					
			$('#nom88').css("text-align", "center")
						.css("height", "16px")
					
			$('#denom88').css("text-align", "center")
						.css("height", "16px")
			
			$('#frac88').delay(eqStart).animate({opacity: 1}, basicFadeInDuration, 'easeInOutQuad')
						.delay(1000).animate({opacity: 0}, basicFadeInDuration, 'easeInOutQuad')
			
			$(container).append('<div id="frac888"><div id="nom888">1 x 2</div><div id="line888"></div><div id="denom888">4 x 2</div></div>')
		
			$('#frac888').css("position", "absolute")
						.css("top", "154px")
						.css("left", "267px")
						.css("width", "36px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("color", "red")
						.css("line-height","16px")
						.css("opacity", 0)
			
			$('#line888').css("height", "1px")
					.css("border-top", "1px solid")
					.css("padding", 0)
					
			$('#nom888').css("text-align", "center")
					.css("height", "16px")
					
			$('#denom888').css("text-align", "center")
					.css("height", "16px")
			
			$('#frac888').delay(secondEqStart).animate({opacity: 1}, basicFadeInDuration, 'easeInOutQuad')
						 .delay(1000).animate({opacity: 0}, basicFadeInDuration, 'easeInOutQuad')
			
			$(container).append('<div id="frac8888"><div id="nom8888">2</div><div id="line8888"></div><div id="denom8888">8</div></div>')
		
			$('#frac8888').css("position", "absolute")
						.css("top", "154px")
						.css("left", "277px")
						.css("width", "16px")
						.css("height", "33px")
						.css("padding", 0)
						.css("margin", 0)
						.css("line-height","16px")
						.css("opacity", 0)
			
			$('#line8888').css("height", "1px")
						.css("border-top", "1px solid")
						.css("padding", 0)
					
			$('#nom8888').css("text-align", "center")
						.css("height", "16px")
					
			$('#denom8888').css("text-align", "center")
						.css("height", "16px")
			
			$('#frac8888').delay(lastEqStart).animate({opacity: 1}, basicFadeInDuration, 'easeInOutQuad', function(){
                dashedLinesGroup1.strokeColor = "black";
                dashedLinesGroup2.strokeColor = "black";
        })
					//	 .delay(500).animate({opacity: 0}, basicFadeInDuration, 'easeInOutQuad')
			
			$(container).append('<img id="lessThan11" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png"/>');
			$('#lessThan11').css("position", "absolute")
							.css("top", "54px")
							.css("left", "244px")
							.css("opacity", 0)
			$('#lessThan11').delay(rectFlyStart+2500).animate({opacity: 1}, imagesFadeInDuration, 'easeInOutQuad')
                            .delay(2400).animate({top: '112px', left: '300px'}, secondFlyDuration, 'easeInOutQuad')
			
			$(container).append('<img id="lessThan22" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png"/>');
			$('#lessThan22').css("position", "absolute")
							.css("top", "54px")
							.css("left", "344px")
							.css("opacity", 0)
			$('#lessThan22').delay(rectFlyStart+2500).animate({opacity: 1}, imagesFadeInDuration, 'easeInOutQuad')
                            .delay(2400).animate({top: '112px', left: '360px'}, secondFlyDuration, 'easeInOutQuad')

			$(container).append('<img id="lessThan33" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png"/>');
			$('#lessThan33').css("position", "absolute")
							.css("top", "54px")
							.css("left", "444px")
							.css("opacity", 0)
			$('#lessThan33').delay(rectFlyStart+2500).animate({opacity: 1}, imagesFadeInDuration, 'easeInOutQuad')
                            .delay(2400).animate({top: '112px', left: '420px'}, secondFlyDuration, 'easeInOutQuad')

			$(container).append('<img id="lessThan44" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png"/>');
			$('#lessThan44').css("position", "absolute")
							.css("top", "54px")
							.css("left", "544px")
							.css("opacity", 0)
			$('#lessThan44').delay(rectFlyStart+2500).animate({opacity: 1}, imagesFadeInDuration, 'easeInOutQuad')
                            .delay(2400).animate({top: '112px', left: '480px'}, secondFlyDuration, 'easeInOutQuad')

			rectGroup.animate({
				style:{
					opacity: 1
				},
				duration: basicFadeInDuration,
				delay: rectStart,
				animationType: 'easeInOutQuad'
			});
			
			rect2.animate({
				style:{
					position: new Point(pos1.x, pos1.y)
				},
				duration: flyDuration,
				delay: rectFlyStart,
				animationType: 'easeInOutQuad'
			});
			
			rect1.animate({
				style:{
					position: new Point(pos4.x, pos4.y)
				},
				duration: flyDuration,
				delay: rectFlyStart+100,
				animationType: 'easeInOutQuad'
			});
			
			rect4.animate({
				style:{
					position: new Point(pos2.x, pos2.y)
				},
				duration: flyDuration,
				delay: rectFlyStart+200,
				animationType: 'easeInOutQuad'
			});
			
			rect5.animate({
				style:{
					position: new Point(pos3.x, pos3.y)
				},
				duration: flyDuration,
				delay: rectFlyStart+300,
				animationType: 'easeInOutQuad'
			});
			
			rect3.animate({
				style:{
					position: new Point(pos5.x, pos5.y)
				},
				duration: flyDuration,
				delay: rectFlyStart+400,
				animationType: 'easeInOutQuad'
			});
			
			Animation.numericalAxis.animate({
				style:{
					opacity: 1
				},
				duration: basicFadeInDuration,
				delay: arrowStart,
				animationType: 'easeInOutQuad'
			});
			
			rect1.animate({
				style:{
					position: new Point(pos3.x+60, pos3.y+3)
				},
				duration: secondFlyDuration,
				delay: rectSecondFlyStart,
				animationType: 'easeInOutQuad'
			});
			
			rect2.animate({
				style:{
					position: new Point(pos3.x-120, pos3.y+3)
				},
				duration: secondFlyDuration,
				delay: rectSecondFlyStart,
				animationType: 'easeInOutQuad'
			});
			
			rect3.animate({
				style:{
					position: new Point(pos3.x+120, pos3.y+3)
				},
				duration: secondFlyDuration,
				delay: rectSecondFlyStart,
				animationType: 'easeInOutQuad'
			});
			
			rect4.animate({
				style:{
					position: new Point(pos3.x-60, pos3.y+3)
				},
				duration: secondFlyDuration,
				delay: rectSecondFlyStart,
				animationType: 'easeInOutQuad'
			});
			
			rect5.animate({
				style:{
					position: new Point(pos3.x, pos3.y+3)
				},
				duration: secondFlyDuration,
				delay: rectSecondFlyStart,
				animationType: 'easeInOutQuad'
			});
			
			dashedLinesGroup1.animate({
				style:{
					opacity: 1,
				},
				duration: basicFadeInDuration,
				delay: secondEqStart,
				animationType: 'easeInOutQuad'
			});
			
			dashedLinesGroup2.animate({
				style:{
					opacity: 1,
				},
				duration: basicFadeInDuration,
				delay: secondEqStart,
				animationType: 'easeInOutQuad'
			});
			
			Main.animationFinished(17000);
		
		}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			};

            Interaction.sortingDiv = document.createElement('div');
            Interaction.sortingDiv.id = 'sortingDiv';
            $(Interaction.container).append(Interaction.sortingDiv);
            $(Interaction.sortingDiv).css({
                width: '80px',
                height: '40px',
                position: 'absolute',
                left: '240px',
                top: '10px',
                padding: 0,
                margin:0,
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
			});
			
			Interaction.setRandomGenerator(3);
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){

            if(Interaction.dropped)
                $(Interaction.dropped).remove();

            if(Interaction.activeStr)
                Interaction.activeStr = null;

            if($(Interaction.clone2)){
                $(Interaction.clone2).remove();
                Interaction.clone2 = null;

            $('#sortingDiv img').draggable("enable");
            if(Interaction.oldActiveStr){
                $("."+Interaction.oldActiveStr).css("opacity" , 0)
            }

            if(Interaction.oldStr)
                $("#"+Interaction.oldStr).css("opacity", 1)

            if(Interaction.answerId)
                $("#"+Interaction.answerId.replace("Hover", "")).css("opacity", 1)

            if(Interaction.sortingUl)
                $(Interaction.sortingUl).sortable({disabled: false});

            if(Interaction.pointDiv)
                $(Interaction.pointDiv).remove();

            if(Interaction.ansF){
                for(i = 0; i < Interaction.ansF.length; i++){
                    $(Interaction.ansF[i]).remove();
                }
            }

            if(Interaction.lline){
                Interaction.lline.remove();
            }

            if(Interaction.numericalAxis)
                Interaction.numericalAxis.remove();

            if(Interaction.questionDiv)
                $(Interaction.questionDiv).remove();

            Interaction.rand = randomNumber;
            Interaction.qType = Math.floor(Math.random() * 2);



			if(Interaction.rand == 0){ // sorting with 3 fractions
				Interaction.numOfFracs = 3;
				// creating question divs and fractions to be sorted in it
				Interaction.questionDiv = document.createElement('div');
				Interaction.questionDiv.id = 'questionDiv';
				$(Interaction.container).append(Interaction.questionDiv);
				$(Interaction.questionDiv).css({
						position: 'absolute',
						top: '65px',
						left: '84px',
						width: '400px',
						height: '100px',
                        listStyleType: 'none',
					});
						
				Interaction.sortingUl = document.createElement('ul');
				Interaction.sortingUl.id = 'sortingUl';
				$(Interaction.questionDiv).append(Interaction.sortingUl);
				$(Interaction.sortingUl).html('<li id="firstFrac"><div id="firstFracDiv"></div></li><div id="dropDiv1"  class="dropDivs"/><li id="secondFrac"><div id="secondFracDiv"></div></li><div id="dropDiv2" class="dropDivs"/><li id="thirdFrac"><div id="thirdFracDiv"></div></li>');
				$(Interaction.sortingUl).css({
						width: '400px',
						height: '100px'
					});

				$(Interaction.sortingUl).sortable({
						items: 'li:not(div)',
						placeholder: 'placeHolder',
						tolerance: 'pointer',
						cursor: sortableCursorType,
                        axis: 'x',
					});
						
				$('#dropDiv1').css({
						width: '54px',
                        height: '54px',
                        position:'absolute',
						left: '114px',
						top: '0px',
                        padding: 0,
                        margin: 0,
					});


						
				$('#dropDiv2').css({
                        width: '54px',
                        height: '54px',
						position:'absolute',
						left: '220px',
						top: '0px',
                        padding: 0,
                        margin: 0,
					});
							
				$(Interaction.container).append("<style> #sortingUl li {float:left; width:36px; height:51px; margin-left:70px; font-size:22px;}</style>");
				$(Interaction.container).append("<style> #questionDiv #sortingUl .placeHolder { width: 36px; height:51px}</style>");
						
				$('#firstFracDiv').html('<div id="nom1">5</div><div id="line1"></div><div id="denom1">10</div>');
				$('#firstFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px");
						
				$('#line1').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
										
				$('#nom1').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom1').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#secondFracDiv').html('<div id="nom2">7</div><div id="line2"></div><div id="denom2">10</div>');
				$('#secondFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px");
				
				$('#line2').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom2').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom2').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
						
				$('#thirdFracDiv').html('<div id="nom3">3</div><div id="line3"></div><div id="denom3">5</div>');
				$('#thirdFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px");
				
				$('#line3').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom3').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom3').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
			}
			else if(Interaction.rand == 1){ // sorting with 4 fractions
				
				Interaction.numOfFracs = 4;
				
				Interaction.questionDiv = document.createElement('div');
				Interaction.questionDiv.id = 'questionDiv';
				$(Interaction.container).append(Interaction.questionDiv);
				$(Interaction.questionDiv).css({
						position: 'absolute',
						top: '65px',
						left: '50px',
						width: '500px',
						height: '100px',
                        listStyleType: 'none',
					});
				
				Interaction.sortingUl = document.createElement('ul');
				Interaction.sortingUl.id = 'sortingUl';
				$(Interaction.questionDiv).append(Interaction.sortingUl);
				$(Interaction.sortingUl).html('<li id="firstFrac"><div id="firstFracDiv"></div></li><div id="dropDiv1" class="dropDivs"/><li id="secondFrac"><div id="secondFracDiv"></div></li><div id="dropDiv2" class="dropDivs"/><li id="thirdFrac"><div id="thirdFracDiv"></div></li><div id="dropDiv3" class="dropDivs" /><li id="fourthFrac"><div id="fourthFracDiv"></div></li>');
				$(Interaction.sortingUl).css({
						width: '500px',
						height: '100px',
					});
				
				$(Interaction.sortingUl).sortable({
						items: 'li:not(div)',
						placeholder: 'placeHolder',
						tolerance: 'pointer',
						cursor: sortableCursorType,
                        axis: 'x',
					});
				
				$('#dropDiv1').css({
                        width: '54px',
                        height: '54px',
                        position:'absolute',
                        left: '114px',
                        top: '0px',
                        padding: 0,
                        margin: 0,
					});
				
				$('#dropDiv2').css({
                        width: '54px',
                        height: '54px',
                        position:'absolute',
                        left: '220px',
                        top: '0px',
                        padding: 0,
                        margin: 0,
					});
				$('#dropDiv3').css({
                        width: '54px',
                        height: '54px',
                        position:'absolute',
                        left: '326px',
                        top: '0px',
                        padding: 0,
                        margin: 0,
					});
					
				$(Interaction.container).append("<style> #sortingUl li {float:left; width:36px; height:51px; margin-left:70px; font-size:22px;}</style>");
				$(Interaction.container).append("<style> #questionDiv #sortingUl .placeHolder { width: 36px; height:51px}</style>");
				
				$('#firstFracDiv').html('<div id="nom1">5</div><div id="line1"></div><div id="denom1">10</div>');
				$('#firstFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px");
				$('#line1').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom1').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom1').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#secondFracDiv').html('<div id="nom2">7</div><div id="line2"></div><div id="denom2">10</div>');
				$('#secondFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px");
				
				$('#line2').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom2').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom2').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#thirdFracDiv').html('<div id="nom3">3</div><div id="line3"></div><div id="denom3">5</div>');
				$('#thirdFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px");
				$('#line3').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom3').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom3').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#fourthFracDiv').html('<div id="nom4">8</div><div id="line4"></div><div id="denom4">10</div>');
				$('#fourthFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px");
				
				$('#line4').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom4').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom4').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				if(Interaction.qType == 0){ // sorting in descending order
					Main.setObjective('Yanda verilen kesirleri büyükten küçüğe sıralayınız.')
					$('#lessThan1').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png');
					$('#lessThan2').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png');
					$('#lessThan3').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png');
				}
				else{ // sorting in ascending order
					Main.setObjective('Yanda verilen kesirleri küçükten büyüğe sıralayınız.')
					$('#lessThan1').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png');
					$('#lessThan2').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png');
					$('#lessThan3').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png');
				}
			}
			else{ // sorting with 5 fractions
				Interaction.numOfFracs = 5;
				Interaction.questionDiv = document.createElement('div');
				Interaction.questionDiv.id = 'questionDiv';
				$(Interaction.container).append(Interaction.questionDiv);
				$(Interaction.questionDiv).css({
						position: 'absolute',
						top: '65px',
						left: '5px',
						width: '600px',
						height: '100px',
                        listStyleType: 'none',
					});
				
				Interaction.sortingUl = document.createElement('ul');
				Interaction.sortingUl.id = 'sortingUl';
				$(Interaction.questionDiv).append(Interaction.sortingUl);
				$(Interaction.sortingUl).html('<li id="firstFrac"><div id="firstFracDiv"></div></li><div id="dropDiv1" class="dropDivs" /><li id="secondFrac"><div id="secondFracDiv"></div></li><div id="dropDiv2" class="dropDivs" /><li id="thirdFrac"><div id="thirdFracDiv"></div></li><div id="dropDiv3" class="dropDivs" /><li id="fourthFrac"><div id="fourthFracDiv"></div></li><div id="dropDiv4" class="dropDivs" /><li id="fifthFrac"><div id="fifthFracDiv"></div></li>');
				$(Interaction.sortingUl).css({
						width: '600px',
						height: '100px',
					});
				
				$(Interaction.sortingUl).sortable({
						items: 'li:not(div)',
						placeholder: 'placeHolder',
						tolerance: 'pointer',
						cursor: sortableCursorType,
                        axis: 'x',
					});
				
				$('#dropDiv1').css({
                        width: '54px',
                        height: '54px',
                        position:'absolute',
                        left: '114px',
                        top: '0px',
                        padding: 0,
                        margin: 0,
					});
				
				$('#dropDiv2').css({
                        width: '54px',
                        height: '54px',
                        position:'absolute',
                        left: '220px',
                        top: '0px',
                        padding: 0,
                        margin: 0,
					});
				$('#dropDiv3').css({
                        width: '54px',
                        height: '54px',
                        position:'absolute',
                        left: '326px',
                        top: '0px',
                        padding: 0,
                        margin: 0,
					});
				$('#dropDiv4').css({
                        width: '54px',
                        height: '54px',
                        position:'absolute',
                        left: '432px',
                        top: '0px',
                        padding: 0,
                        margin: 0,
					});
					
				$(Interaction.container).append("<style> #sortingUl li {float:left; width:36px; height:51px; margin-left:70px; font-size:22px;}</style>");
				$(Interaction.container).append("<style> #questionDiv #sortingUl .placeHolder { width: 36px; height:51px}</style>");
       //         $(Interaction.container).append("<style> #sortingUl div {background:"+fractionsColor+"}</style>");

				$('#firstFracDiv').html('<div id="nom1">5</div><div id="line1"></div><div id="denom1">10</div>');
				$('#firstFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px");
				
				$('#line1').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom1').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom1').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#secondFracDiv').html('<div id="nom2">7</div><div id="line2"></div><div id="denom2">10</div>');
				$('#secondFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px");
				
				$('#line2').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom2').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom2').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#thirdFracDiv').html('<div id="nom3">3</div><div id="line3"></div><div id="denom3">5</div>');
				$('#thirdFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px");
				$('#line3').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom3').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom3').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#fourthFracDiv').html('<div id="nom4">8</div><div id="line4"></div><div id="denom4">10</div>');
				$('#fourthFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px");
				
				$('#line4').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom4').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom4').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#fifthFracDiv').html('<div id="nom5">9</div><div id="line5"></div><div id="denom5">10</div>');
				$('#fifthFracDiv').css("width", "36px")
							.css("height", "51px")
							.css("padding", 0)
							.css("margin", 0)
							.css("line-height","25px");
				
				$('#line5').css("height", "1px")
							.css("width", "32px")
							.css("border-top", "2px solid")
							.css("padding", 0)
								
				$('#nom5').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				
				$('#denom5').css("text-align", "center")
							.css("width", "30px")
							.css("height", "25px")
				if(Interaction.qType == 0){ // sorting in descending order
                    $('#lessThan1').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png');
					$('#lessThan2').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png');
					$('#lessThan3').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png');
					$('#lessThan4').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png');
					
				}
				else{ // sorting in ascending order
					$('#lessThan1').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png');
					$('#lessThan2').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png');
					$('#lessThan3').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png');
					$('#lessThan4').attr('src', '/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png');
				}
			}
			
			Interaction.getFractionsToBeSorted(Interaction.numOfFracs);
			Interaction.nomD = $('#nom1').get(0);
			Interaction.denomD = $('#denom1').get(0);
			Interaction.nom2D = $('#nom2').get(0);
			Interaction.denom2D = $('#denom2').get(0);
			Interaction.nom3D = $('#nom3').get(0);
			Interaction.denom3D = $('#denom3').get(0);
			
			$(Interaction.nomD).html(Interaction.nom[0]);
			$(Interaction.denomD).html(Interaction.denom[0]);
			$(Interaction.nom2D).html(Interaction.nom[1]);
			$(Interaction.denom2D).html(Interaction.denom[1]);
			$(Interaction.nom3D).html(Interaction.nom[2]);
			$(Interaction.denom3D).html(Interaction.denom[2]);
			if(Interaction.numOfFracs == 4){
				Interaction.nom4D = $('#nom4').get(0);
				Interaction.denom4D = $('#denom4').get(0);
				$(Interaction.nom4D).html(Interaction.nom[3]);
				$(Interaction.denom4D).html(Interaction.denom[3]);
			}
			else if(Interaction.numOfFracs == 5){
				Interaction.nom4D = $('#nom4').get(0);
				Interaction.denom4D = $('#denom4').get(0);
				Interaction.nom5D = $('#nom5').get(0);
				Interaction.denom5D = $('#denom5').get(0);
				$(Interaction.nom4D).html(Interaction.nom[3]);
				$(Interaction.denom4D).html(Interaction.denom[3]);
				$(Interaction.nom5D).html(Interaction.nom[4]);
				$(Interaction.denom5D).html(Interaction.denom[4]);
			}
			
			Interaction.fracIds = [];
			Interaction.fracIds[0] = "firstFrac";
			Interaction.fracIds[1] = "secondFrac";
			Interaction.fracIds[2] = "thirdFrac";
			if(Interaction.numOfFracs == 4){
				Interaction.fracIds[3] = "fourthFrac";
            }
			else if(Interaction.numOfFracs == 5){
				Interaction.fracIds[3] = "fourthFrac";
				Interaction.fracIds[4] = "fifthFrac";
			}

            $('.dropDivs').droppable({
                accept: '.drg',
                tolerance: 'pointer',
                drop: function(event, ui){
                    if(Interaction.oldActiveStr){
                        $("."+Interaction.oldActiveStr).css("opacity", 0)
                        $("#"+Interaction.oldActiveStr.replace("Active", "Hover")).draggable({disabled: false})
                        $("#"+Interaction.oldStr).css("opacity", 1)

                    }
                    Interaction.activeStr = $(ui.draggable).get(0).id;
                    $("#"+Interaction.activeStr).draggable({disabled: true});
                    var oldStr = Interaction.activeStr.replace("Hover", "");
                    Interaction.activeStr = Interaction.activeStr.replace("Hover", "Active");
                    $("."+Interaction.activeStr).css("opacity", 1);
                    Interaction.oldActiveStr = Interaction.activeStr;
                    Interaction.oldStr = oldStr;

                }
            });

            $('.dropDivs').append('<div class="targetContainer"><img src="/assets/animations/kesirleri_karsilastirma/oran_hedef.png" class="target" /></div>')

            $('.targetContainer').css("position", "relative")
                .css("height", "54px")
                .css("width", "54px")
                .css("float", "left")
            $('.target').css("position", "absolute")
                .css("top", "0px")
                .css("left", "0px")

            $('.dropDivs').append('<img class="lessThanActive" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png" /><img class="greaterThanActive" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" />')

            $('.lessThanActive').css("position", "absolute")
                .css("top", "11px")
                .css("left", "11px")
                .css("opacity", 0)

            $('.greaterThanActive').css("position", "absolute")
                .css("top", "11px")
                .css("left", "11px")
                .css("opacity", 0)

            if(Interaction.qType == 0){
                Main.setObjective('Yandaki kesirleri büyükten küçüğe sıralayınız. Bunun için kesirleri sağa ya da sola kaydırıp diğer kesirlerle yerlerini değiştirebilirsiniz. Daha sonra aralarına küçük (<) ya da büyük (>) işaretlerinden birini sürükleyerek sıralamayı tamamlayabilirsiniz.');
            }
            else{
                Main.setObjective('Yandaki kesirleri küçükten büyüğe sıralayınız. Bunun için kesirleri sağa ya da sola kaydırıp diğer kesirlerle yerlerini değiştirebilirsiniz. Daha sonra aralarına küçük (<) ya da büyük (>) işaretlerinden birini sürükleyerek sıralamayı tamamlayabilirsiniz.');
            }
            }

		},
		
	
	/*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled */
	
	preCheck : function(){
            Interaction.dropped = Interaction.activeStr;
            if(Interaction.dropped == null || Interaction.dropped == undefined){
                Interaction.setStatus('Lütfen işaretlerden birini kutucuğa sürükleyiniz.', 'alert')
                return false;
            }
		
		},
	isAnswerCorrect : function(value){
			Interaction.userAnswerArr = [];
			if(Interaction.qType == 1){
				Interaction.frac = [];
				Interaction.sortedFrac = [];
                Interaction.answerIdStr = "lessThanActive";
                                
				
				Interaction.answerIdsArray = [];
				for(var i = 0; i < Interaction.numOfFracs; i++){
					Interaction.frac[i] = Interaction.nom[i]/Interaction.denom[i];
				}
				for(var i = 0; i < Interaction.numOfFracs; i++){
					Interaction.sortedFrac[i] = Interaction.frac[i];
				}
				Interaction.sortedFrac.sort(function(a,b){return a-b});
				for(var i = 0; i < Interaction.numOfFracs; i++){
					Interaction.answerIdsArray[Interaction.sortedFrac.indexOf(Interaction.frac[i])] = Interaction.fracIds[i];
				}
				
			}
			else{
				Interaction.frac = [];
				Interaction.sortedFrac = [];
                Interaction.answerIdStr = "greaterThanActive"
				
				Interaction.answerIdsArray = [];
				for(var i = 0; i < Interaction.numOfFracs; i++){
					Interaction.frac[i] = Interaction.nom[i]/Interaction.denom[i];
				}
				for(var i = 0; i < Interaction.numOfFracs; i++){
					Interaction.sortedFrac[i] = Interaction.frac[i];
				}
				Interaction.sortedFrac.sort(function(a,b){return b-a});
				for(var i = 0; i < Interaction.numOfFracs; i++){
					Interaction.answerIdsArray[Interaction.sortedFrac.indexOf(Interaction.frac[i])] = Interaction.fracIds[i];
				}
			}
			
			for(i = 0; i < Interaction.numOfFracs; i++){
				Interaction.userAnswerArr[i] = $(Interaction.sortingUl).find('li')[i].id;
			}
			var trueNum;
			for(i = 0, trueNum = 0; i < Interaction.numOfFracs; i++){
				if(Interaction.userAnswerArr[i] == Interaction.answerIdsArray[i])
					trueNum += 1;
			}
			if(trueNum == Interaction.numOfFracs && Interaction.dropped == Interaction.answerIdStr){
                $('#sortingDiv img').draggable("disable");
				return true;
            }
			else
				return false;
		
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
			Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);

            if(Interaction.dropped != Interaction.answerIdStr){
                Interaction.pause();
                Interaction.clone2 = [];
                $("."+Interaction.oldActiveStr).css("opacity", 0);
                Interaction.answerId = Interaction.answerIdStr.replace("Active", "Hover");
                $("#"+Interaction.oldActiveStr.replace("Active", "")).css("opacity", 1)
                $("#"+Interaction.answerId.replace("Hover", "")).css("opacity", 0)

                for(var i = 0; i < Interaction.numOfFracs - 1; i++){
                    Interaction.clone2[i] = $("#"+Interaction.answerId).clone();
                    Interaction.clone2[i].attr('class', 'flying');
                    Interaction.clone2[i].attr('id', i)

                    var ansTop = $(Interaction.sortingDiv).position().top;
                    var ansLeft = $(Interaction.sortingDiv).position().left;
                    if(Interaction.qType == 0)
                        ansLeft += 40;


                    var c = $(Interaction.questionDiv).position().top;
                    var d = $(Interaction.questionDiv).position().left;
                    var flyTop = parseInt($('.dropDivs')[i].style.top) + 11 + c;
                    var flyLeft = parseInt($('.dropDivs')[i].style.left) + 11 + d;

                    $(Interaction.clone2[i]).css("position", "absolute")
                        .css("top", ansTop)
                        .css("left", ansLeft)
                        .css("opacity", 0)

                    $(Interaction.container).append(Interaction.clone2[i]);
                    $(Interaction.clone2[i]).delay(0).animate(
                        {opacity:200, top:flyTop, left:flyLeft},
                        1500,
                        'easeInOutQuad',
                        function(){
                            $(this).remove();
                            $("."+Interaction.answerIdStr).css("opacity", 1);
                            Interaction.resume(500);
                        }
                    );
                }

                $('#sortingDiv img').draggable("disable");

                Interaction.oldActiveStr = Interaction.answerIdStr;

            }

			for(var i = 0; i < Interaction.numOfFracs; i++){
				if(Interaction.userAnswerArr[i] == Interaction.answerIdsArray[i])
					$("#"+Interaction.userAnswerArr[i]).css("color", "green");
				else
					$("#"+Interaction.userAnswerArr[i]).css("color", "red");
			}
			Interaction.nom2 = [];
			Interaction.denom2 = [];
			$(Interaction.sortingUl).sortable({disabled: true});
		
			if(Interaction.numOfFracs == 5)
				Interaction.lcm = Util.lcm(Interaction.denom[0], Util.lcm(Interaction.denom[1],Interaction.denom[2],Interaction.denom[3],Interaction.denom[4]));
			else
				Interaction.lcm = Util.lcm(Interaction.denom[0],Interaction.denom[1],Interaction.denom[2],Interaction.denom[3]) 
			
			for(var i = 0; i < Interaction.numOfFracs; i++){
				Interaction.nom2[i] = Interaction.nom[i]*(Interaction.lcm/Interaction.denom[i]);
				Interaction.denom2[i] = Interaction.lcm;
			}
			
			Interaction.GetNumericalAxis(Interaction.lcm);
		},
	
	GetNumericalAxis : function(piece){
		Interaction.numericalAxis = new Group();
		var arr = new Group();
		var arrow = new Path.OneSidedArrow(new Point(20, 170), new Point(560, 170), 10, 30)
		var arrow2 = new Path.OneSidedArrow(new Point(560, 170), new Point(561, 170), 10, 30);
		arrow.rotate(180);
		arr.addChild(arrow);
		arr.addChild(arrow2);
		
		var bigDots = new Group();
		var bigDot1 = new Path.Circle(new Point(50, 170), 5);
		bigDot1.fillColor = "black";
		var bigDot2 = new Path.Circle(new Point(530, 170), 5);
		bigDot2.fillColor = "black";
		bigDots.addChild(bigDot1);
		bigDots.addChild(bigDot2);
		
		var pieceLength = 480/piece;
		
		Interaction.smallDots = new Group();
		for(var i = 0; i < piece-1; i++){
			var smallDot = new Path.Circle(new Point(50+pieceLength*(i+1), 170), 3)
			smallDot.fillColor = "black";
			Interaction.smallDots.addChild(smallDot);
		}
		
		Interaction.numericalAxis.addChild(arr);
		Interaction.numericalAxis.addChild(bigDots);
		Interaction.numericalAxis.addChild(Interaction.smallDots);
		
		var posX, posY;
		Interaction.index = [];
		Interaction.index2 = [];
		Interaction.lline = new Group();
		Interaction.nom22 = [];
		Interaction.posX2 = [];
		Interaction.posY2 = [];
		for(var i = 0; i < Interaction.numOfFracs; i++)
			Interaction.nom22[i] = Interaction.nom2[i];
		Interaction.nom22.sort(function(a,b){return a-b})
		Interaction.ansF = [];
		for(var i = 0; i < Interaction.numOfFracs; i++){
			Interaction.index[i] = Interaction.nom22[i] - 1;
			Interaction.index2[i] = Interaction.nom2[i] - 1;
			posX = Interaction.smallDots.children[Interaction.index[i]].position.x;
			posY = Interaction.smallDots.children[Interaction.index[i]].position.y;
			Interaction.posX2[i] = Interaction.smallDots.children[Interaction.index2[i]].position.x-8;
			Interaction.posY2[i] = Interaction.smallDots.children[Interaction.index2[i]].position.y+8;
			
			Interaction.smallDots.children[Interaction.index[i]].opacity = 0;
			
			var lline = new Path.Line(new Point(posX, posY-6), new Point(posX, posY+6))
			
			lline.strokeColor = "#0066FF";
			lline.strokeWidth = 2;
			Interaction.lline.addChild(lline);
			
			Interaction.ansF[i] = document.createElement('div');
			Interaction.ansF[i].id = 'ansF'+i
			$(Interaction.container).append(Interaction.ansF[i]);
			$(Interaction.ansF[i]).html('<div id="nomm'+i+'"></div><div id="linee'+i+'"></div><div id="denomm'+i+'"></div>');
			$(Interaction.ansF[i]).css("position","absolute")
					.css("top", Interaction.posY2[i])
					.css("left", Interaction.posX2[i])
					.css("width", "16px")
					.css("height", "33px")
					.css("padding", 0)
					.css("margin", 0)
					.css("color", "#0066FF")
					.css("font-size", "12px")
					.css("font-weight", "bold")
					.css("line-height", "16px")
			
			$('#linee'+i).css("height", "1px")
						.css("border-top", "1px solid")
						.css("padding", 0)
			
			$('#nomm'+i).css("text-align", "center")
						.css("height", "16px")
						.html(Interaction.nom[i])
			
			$('#denomm'+i).css("text-align", "center")
						.css("height", "16px")
						.html(Interaction.denom[i])
		}
		Interaction.ansF.sort(function(a,b){
			if($(a).offset().left < $(b).offset().left)
				return -1;
			else if($(a).offset().left > $(b).offset().left)
				return 1;
			else
				return 0;
		})
		for(var i = 0; i < Interaction.ansF.length; i++){
			if(i % 2 == 1){
				var newTop = $(Interaction.ansF[i]).position().top -50;
				$(Interaction.ansF[i]).css("top", newTop);
			}
		}
		
		Interaction.pointDiv = document.createElement('div');
		Interaction.pointDiv.id = 'pointDiv'
		$(Interaction.container).append(Interaction.pointDiv)
		$(Interaction.pointDiv).html('<div id="fp"></div> <div id="sp"></div>')
		$(Interaction.pointDiv).css("position", "absolute")
					.css("top", "130px")
					.css("left", "30px")
					.css("width", "480px")
					.css("height", "20px")
					.css("font-size", 22)
		
		$('#fp').css("position", "absolute")
				.css("top", "0px")
				.css("left", "14px")
				.css("width", "20px")
				.css("height", "20px")
				.html(0);
		$('#sp').css("position", "absolute")
				.css("top", "0px")
				.css("left", "492px")
				.css("width", "20px")
				.css("height", "20px")
				.html(1);
	},
	
	getFractionsToBeSorted: function(numOfFracs){
		Interaction.nom = [];
		Interaction.denom = [];
		
		Interaction.baseDenom = Util.randomInteger(4, 8);

		var noOfBaseDenoms = 0;

		for(var i = 0; i < numOfFracs; i++){
			var factor;
			
			if (noOfBaseDenoms == numOfFracs - Interaction.baseDenom) {
				factor = Util.randomInteger(2, Math.ceil(16/Interaction.baseDenom))
			} else {
				factor = Util.randomInteger(1, Math.ceil(16/Interaction.baseDenom))
			}
			
			if (factor == 1) {
				noOfBaseDenoms++;
			}

			Interaction.denom[i] = Interaction.baseDenom * factor;
			var excludingArr = [];
			for(var j = 0; j < i; j++){
				excludingArr[j] = Interaction.nom[j] * (Interaction.denom[i]/Interaction.denom[j]);
			}
			Interaction.nom[i] = Util.randomInteger(1, Interaction.denom[i], excludingArr);
			// fraction simplification
			var simplifiedFraction = [];
			simplifiedFraction = Util.reduceFractions(Interaction.nom[i], Interaction.denom[i]);
			Interaction.nom[i] = simplifiedFraction[0];
			Interaction.denom[i] = simplifiedFraction[1];
		}
	}
}