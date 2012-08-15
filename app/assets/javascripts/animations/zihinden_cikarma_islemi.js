function __Styles(){
    animationDivCss = {
					width:120,
					position:'absolute',
					top:'50px',
					left:'300px',
					fontSize:'24px',
					textAlign:'right',
					lineHeight:'30px',
					fontWeight:'700',
					color:'#fff',
					fontFamily:"cursive",
					opacity:0.9
				}
    if(navigator.appName == "Microsoft Internet Explorer"){
		animationDivCss.fontFamily = "arial";
	}
}
var Animation = {
	images:[
		{
			id:'board',
			src:'/assets/animations/board_green.jpg'
		}
	],
	init:function(container){
			
			var w=Math.floor($(container).width()), h=Math.floor($(container).height());
			var board = new Raster('board');
			board.position = new Point(Math.floor(w*0.5),Math.floor(h*0.5)+2)
			
			
			
			var div = document.createElement('div');
			
			$(container).append(div);
			$(div)
				.html('<div id="addend1">5673</div><div id="addend2">4<span id="zeros">000</span></div><div id="line"><span>-</span></div><br/>')
				.append('<div id="result">1<span id=lastDigits>673</span></div>')
				.css(animationDivCss);
			$('#line',div).css({
				height:'2px',
				borderBottom:'2px solid #fff',
				position:'relative',
				top:'5px',
				left:'15px'
			});
			$('#line span',div).css({
				position:'absolute',
				top:'-25px',	
				left:'10px',
				color:'#fff'
			});
			
			$('#result',div).css({
					position:'relative',
					top:'-20px',
					opacity:0
				}).delay(500)
				.animate({opacity:1},1000);
			
			$('#result #lastDigits')
				.css({opacity:0,position:'relative',top:'-82px'})
				.delay(2500)
				.animate({opacity:1,top:'0px'},1000)

			$('#zeros',div)
				.css({color:'#fff'})
				.delay(1500)
				.animate(
					{opacity:0},
					1000,
					function(){
						$('#zeros',div)
							.delay(1000)
							.animate({opacity:1},1000,Main.animationFinished);
					}
				);
                   
		}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Dört basamaklı doğal sayılarla 10’un, 100’ün ve 1000’in en çok dokuz katı olan doğal sayıların çıkarma işlemi.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			
			Interaction.appendInput({
				width:'100px',
				position:'relative',
				left:'10px',
				paddingRight:'10px',
				textAlign:'right',
				fontSize:'24px',
				top:'-10px'
			});
			$(Interaction.input).attr('maxlength','7')
			var div = document.createElement('div');
			$(container).append(div);
			$(div)
				.html('<div id="addend1"></div><div id="addend2"></div><div id="line"><img src="/assets/animations/minus_sign.png" /></div><br/>')
				.append(Interaction.input)
				.css({
					width:120,
					position:'absolute',
					top:'70px',
					left:'150px',
					fontSize:'24px',
					textAlign:'right',
					lineHeight:'30px'
				});
			$('#line',div).css({
				height:'2px',
				borderBottom:'2px solid #000',
				position:'relative',
				top:'5px',
				left:'15px'
			});
			$('#line img',div).css({
				position:'relative',
				top:'-15px',	
				left:'10px'
			});
			Interaction.appendButton({
				bottom:'40px',
				right:'40px'
			});
			Interaction.appendStatus({
				bottom:'50px',
				right:'160px'
			});
			Interaction.questionDiv = div;
			Interaction.addend1Div = $('#addend1',div).get(0);
			Interaction.addend2Div = $('#addend2',div).get(0);
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){
			if(Interaction.solutionDiv)
				$(Interaction.solutionDiv).remove();
			
			function checkAddend2(){
				if(Interaction.addend2*1.1 > Interaction.addend1)
					return true;
				var a1 = (""+Interaction.addend1).length;
				var a2 = (""+Interaction.addend2).length
				for(var i=0;i<Math.min(a1,a2);i++)
					if(parseInt(( ""+Interaction.addend1).substring(a1-i-1,a1),10 ) < parseInt(( ""+Interaction.addend2).substring(a2-i-1,a2),10 ) )
						return true;
				return false;
			}
			do
				Interaction.addend1 = Math.floor(Math.random()*10000);
				while((""+Interaction.addend1).indexOf('0')> 0)
			do
				Interaction.addend2 = Math.floor(Math.random()*9+1)*Math.pow(10,Math.floor(Math.random()*3+1));
				while(checkAddend2())
			$(Interaction.addend1Div).html(Interaction.addend1);
			$(Interaction.addend2Div).html(Interaction.addend2);
			
		},
	isAnswerCorrect : function(value){
			if(value == Interaction.addend1 - Interaction.addend2)
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
			Interaction.setStatus('Yanlış cevap, doğrusu ' +  (Interaction.addend1 - Interaction.addend2) + ' olacaktı',false);
			Interaction.solutionDiv = $(Interaction.questionDiv).clone().insertAfter(Interaction.questionDiv);
			var zeros = $('#addend2',Interaction.questionDiv).html();
			zeros = zeros.substring(0,1)+'<span class="zero">'+zeros.substring(1,zeros.length)+'</span>';
			var html = "" + $(Interaction.solutionDiv).html();
			html = html.substring(0,html.indexOf('<input'));
			
			$(Interaction.solutionDiv)
				.html(html)
				.append('<div id="result" style=""></div>')
				.css({
					left:$(Interaction.solutionDiv).position().left+160
				});
			
			$('#result',Interaction.solutionDiv)
				.css({
					position:'relative',
					top:'-10px'
				})
				.delay(1000)
				.html(Interaction.addend1-Interaction.addend2)
			
			var resultHTML = $('#result',Interaction.solutionDiv).html();
			var startOfLastDigits = resultHTML.length-Interaction.addend2Div.innerHTML.length+1;
			resultHTML = resultHTML.substring(0,startOfLastDigits)+'<span id="lastDigits">'+resultHTML.substr(startOfLastDigits)+'</span>';
			$('#result',Interaction.solutionDiv).html(resultHTML);
            $('#result',Interaction.solutionDiv)
                .css({opacity:0})
                .animate({opacity:1},500)
			$('#result #lastDigits',Interaction.solutionDiv)
				.css({opacity:0,position:'relative',top:'-82px'})
				.delay(1500)
				.animate({opacity:1,top:'0px'},1000)
			$('#addend2',Interaction.solutionDiv)
				.html(zeros)
			
			$('#addend2 .zero',Interaction.solutionDiv)
				.css({color:'#000'})
				.delay(500)
				.animate(
					{color:'#ddd'},
					1000
				);
			$('.zero',Interaction.solutionDiv)
				.css({color:'#000'})
				.delay(500)
				.animate(
					{color:'#ddd'},
					1000,
					function(){
						$('.zero',Interaction.solutionDiv)
							.animate({color:'#000'},500,function(){
								Interaction.pause = false;	
							})
						
					}
				);
		}
}