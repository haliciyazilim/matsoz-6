function __Styles(){
    animationTextStyle = {
        fontSize:16,
        fillColor:new RgbColor(1,1,1,0.9),
        font:"cursive"
    }
	interactionTextStyle = {
		fontSize:16,
		fillColor:new RgbColor(0,0,0)
	}
    if(navigator.appName == "Microsoft Internet Explorer"){
		animationTextStyle.font = "arial";
	}
}

var Animation = {
	images:[
		{
			id:'board',
			src:'/assets/animations/board_black.jpg'
		}
	],

	init:function(container){
            Animation.container = container;
			var referencePoint = new Point(250,40);
            var p1 = referencePoint.add(0,0);
			var p2 = referencePoint.add(0,50);
			var p3 = referencePoint.add(0,100);
			var w=$(container).width(), h=$(container).height();
			var board = new Raster('board');
			board.position = new Point(w*0.5,h*0.5+2);
            SingleLineMultiply({
                position:p1,
                delay:100,
                factor1:5273,
                factor2:7,
                zero:"0",
                textStyle:animationTextStyle
            });
            SingleLineMultiply({
                position:p2,
                delay:5100,
                factor1:8324,
                factor2:2,
                zero:"00",
                textStyle:animationTextStyle
            });
            SingleLineMultiply({
                position:p3,
                delay:10100,
                factor1:4921,
                factor2:5,
                zero:"000",
                textStyle:animationTextStyle,
                callback:Main.animationFinished
            });
//            Main.animationFinished(13000); 
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
				position:'relative',
				width:'120px',
				top:'-2px',
				fontSize:'20px',
				height:'35px'
			});
			$(Interaction.input).attr('maxlength','8')
			var div = document.createElement('div');
			$(container).append(div);
			$(div)
				.css({
					position:'absolute',
					top:100,
					right:200,
					lineHeight:'40px',
					fontSize:'20px',
					width:'300px',
					height:'50px',
					letterSpacing:'1px',
					textAlign:'right'
				})
				.html('<span id="factor1"></span>&nbsp;x&nbsp;<span id="factor2"></span>&nbsp;=&nbsp;')
				.append(Interaction.input);
			Interaction.questionDiv = div;
			Interaction.factor1Span = $('span#factor1',div).get(0);
			Interaction.factor2Span = $('span#factor2',div).get(0);
			Interaction.appendButton({
				bottom:'40px',
				right:'40px'
			});
			Interaction.appendStatus({
				bottom:'50px',
				right:'170px'
			})
			
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){
            Main.interactionProject.activeLayer.removeChildren();
			if(Interaction.solutionDiv)
				$(Interaction.solutionDiv).remove();
			Interaction.factor1 = Math.floor(Math.random()*10000);
			Interaction.factor2 = Math.pow(10,Math.floor(Math.random()*3+1))*Math.floor(Math.random()*9+1); 
			/*<[[TEST*/
                Interaction.factor1 = 3923;
                Interaction.factor2 = 7000; 
			/*TEST]]>*/
            $(Interaction.factor1Span).html(Util.format(Interaction.factor1));
			$(Interaction.factor2Span).html(Util.format(Interaction.factor2));
		},
	isAnswerCorrect : function(value){
			if(value == Interaction.factor1 * Interaction.factor2)
				return true;
			else 
				return false;
		},
	onCorrectAnswer : function(){
			
		},
	onWrongAnswer : function(){
			
		},
	onFail : function(){
			Interaction.pause = true;
			Interaction.setStatus('Yanlış cevap, doğrusu  ' + Util.format(Interaction.factor1 * Interaction.factor2) + '  olacaktı',false);
			Interaction.solutionDiv = $(Interaction.questionDiv).clone().insertAfter(Interaction.questionDiv);
            var zeros = $('#factor2',Interaction.questionDiv).html();
			zeros = zeros.substring(1,zeros.length); 
			//zeros = zeros.substring(1,zeros.length); 
            console.log((""+Interaction.factor2).substring(0,1),zeros);
            
            SingleLineMultiply({
                position:new Point(160,200),
                delay:10,
                factor1:Interaction.factor1,
                factor2:(""+Interaction.factor2).substring(0,1),
                zero:zeros,
                textStyle:interactionTextStyle,
                callback:function(){
                    Interaction.pause = false;
                }
            });
		}
}

