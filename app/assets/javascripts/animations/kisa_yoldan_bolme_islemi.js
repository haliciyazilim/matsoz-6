
function __Styles(){
	animationDivisionStyle = {
		width:'160px',
		position:'absolute',
		top:'30px',
		left:'60px',
		fontSize:'22px',
		fontWeight:700,
		color:'#fff',
		fontFamily:"cursive",
		opacity:0
	}
    if(navigator.appName == "Microsoft Internet Explorer"){
		animationDivisionStyle.fontFamily = "arial";
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
				.css(animationDivisionStyle)
				.css({left:'60px'})
				.delay(500)
				.animate({opacity:0.9},500);
			Animation.division = new LongDivision(4581,9,div);
			var span1 = document.createElement('span');
			span1.innerHTML = 0;
			$(span1).css({color:"#fff",opacity:1})
				.delay(1500)
				.animate({opacity:0},500)
				.delay(3500)
				.animate({color:'#fff'},100)
				.animate({opacity:1},500);
			$(Animation.division.nodes.dividend).append(span1);
			
			var span2 = document.createElement('span');
			span2.innerHTML = 0;
			$(span2).css({color:"#fff",opacity:1})
				.delay(1500)
				.animate({opacity:0},500)
				.delay(3500)
				.animate({color:'#fff'},100)
				.animate({opacity:1},500);
			$(Animation.division.nodes.divisor).append(span2);
			
			setTimeout(
				'Animation.division.nextStep(2000);'
				,4000);
			setTimeout(
				'Animation.division.nextStep(2000);'
				,2000);
			
			
			
			var div2 = document.createElement('div');
			$(container).append(div2);
			$(div2)
				.css(animationDivisionStyle)
				.css({left:'260px', width:'190px'})
				.delay(7000)
				.animate({opacity:0.9},1000);
			Animation.division2 = new LongDivision(4581,9,div2);
			
			var span3 = document.createElement('span');
			span3.innerHTML = '00';
			$(span3).css({color:"#fff",opacity:1})
				.delay(8000)
				.animate({opacity:0},500)
				.delay(2500)
				.animate({color:'#fff'},100)
				.animate({opacity:1},500);
			$(Animation.division2.nodes.dividend).append(span3);
			
			var span4 = document.createElement('span');
			span4.innerHTML = '00';
			$(span4).css({color:"#fff",opacity:1})
				.delay(8000)
				.animate({opacity:0},500)
				.delay(2500)
				.animate({color:'#fff'},100)
				.animate({opacity:1},500);
			$(Animation.division2.nodes.divisor).append(span4);

			setTimeout(
				'Animation.division2.nextStep(2000);'
				,9000);
			setTimeout(
				'Animation.division2.nextStep(2000);'
				,7000);
			
			
			
			
			
			var div3 = document.createElement('div');
			$(container).append(div3);
			$(div3)
				.css(animationDivisionStyle)
				.css({left:'460px', width:'220px'})
				.delay(11000)
				.animate({opacity:0.9},1000);
			Animation.division3 = new LongDivision(4581,9,div3);
			
			var span5 = document.createElement('span');
			span5.innerHTML = '000';
			$(span5).css({color:"#fff",opacity:1})
				.delay(12000)
				.animate({opacity:0},500)
				.delay(3500)
				.animate({color:'#fff'},100)
				.animate({opacity:1},500);
			$(Animation.division3.nodes.dividend).append(span5);
			
			var span6 = document.createElement('span');
			span6.innerHTML = '000';
			$(span6).css({color:"#fff",opacity:1})
				.delay(12000)
				.animate({opacity:0},500)
				.delay(3500)
				.animate({color:'#fff'},100)
				.animate({opacity:1},500);
			$(Animation.division3.nodes.divisor).append(span6);
			setTimeout(
				'Animation.division3.nextStep(2000);'
				,13000);
			setTimeout(
				'Animation.division3.nextStep(2000);'
				,11000);
            Main.animationFinished(15000)
		}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki bölme işlemini yapınız ve kontrol ediniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			Interaction.appendInput({
				position:'relative',
				marginTop:'5px',
				marginLeft:'5px',
				width:'80px',
				fontSize:'28px',
				height:'35px',
				textAlign:'left'
			})
		//	$(Interaction.input).attr('maxlength',5)
			var div = document.createElement('div');
			$(container).append(div);
			$(div)
				.html('<div id="dividend"></div><div id="divisor"></div>')
				.append(Interaction.input)
				.css({
					position:'absolute',
					top:'50px',
					left:'100px',
					width:'260px',
					height:'80px',
					fontSize:'28px'
				});
			Interaction.dividendDiv = $('#dividend',div).get(0);
			$(Interaction.dividendDiv)
				.css({
					height:'80px',
					float:'left',
					width:'120px',
					borderRight:'1px solid #000',
					textAlign:'right',
					paddingRight:'5px',
					paddingTop:'10px'
				});
			Interaction.divisorDiv = $('#divisor',div).get(0);
			$(Interaction.divisorDiv)
				.css({
					paddingTop:'10px',
					paddingLeft:'5px',
					height:'35px',
					float:'left',
					width:'90px',
					borderBottom:'1px solid #000'
				})
			Interaction.appendButton({
				bottom:'30px',
				right:'40px'
			});
			Interaction.appendStatus({
				bottom:'40px',
				right:'170px'
			})
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(){
			Interaction.zeros = Math.floor(Math.random()*3+1);
			Interaction.divisor = Math.floor(Math.random()*9+1)*Math.pow(10,Interaction.zeros);
			Interaction.dividend = Interaction.divisor*Math.floor(Math.random()*990+10);
			/*<[TEST VALUES*/
//				Interaction.zeros = 0;
//				Interaction.divisor = 12;
//				Interaction.dividend = 28;
			/*TEST VALUES]>*/
			$(Interaction.dividendDiv).html(Interaction.dividend);
			$(Interaction.divisorDiv).html(Interaction.divisor);
			if(Interaction.longDivisionDiv)
				$(Interaction.longDivisionDiv).remove();
		},
	isAnswerCorrect : function(value){
			if(value == Interaction.dividend/Interaction.divisor)
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
			Interaction.setStatus('Yanlış cevap, doğrusu ' +  Interaction.dividend/Interaction.divisor + ' olacaktı',false);
			var div = document.createElement('div');
			Interaction.longDivisionDiv = div;
			$(Interaction.container).append(div);
			$(div).css({
				width:'160px',
				position:'absolute',
				top:'30px',
				right:'30px',
				fontSize:'20px'
			})
			Interaction.division = new LongDivision(
				Interaction.dividend/Math.pow(10,Interaction.zeros),
				Interaction.divisor/Math.pow(10,Interaction.zeros),
				div
			);
			var span1 = document.createElement('span');
			var span2 = document.createElement('span');
			
			for(var i=0;i<Interaction.zeros;i++){
				span1.innerHTML += '0';
				span2.innerHTML += '0';
			}
			$(span1).css({color:"#000",opacity:1})
				.delay(500)
				.animate({color:"#f00"},500)
				.delay(500)
				.animate({opacity:0},500);
				
			$(Interaction.division.nodes.dividend).append(span1);
			$(span2).css({color:"#000",opacity:1})
				.delay(500)
				.animate({color:"#f00"},500)
				.delay(500)
				.animate({opacity:0},500);
			$(Interaction.division.nodes.divisor).append(span2);
			function callNextStep(){
				var div = Interaction.division.nextStep(1000);
				if(div!=null)
					setTimeout(callNextStep,1500);
				else{
					Interaction.pause = false;
					$(span1).css({color:"#000"})
						.animate({opacity:1},1000);
					$(span2).css({color:"#000"})
						.animate({opacity:1},1000);
				}
			}
			setTimeout(callNextStep,500);
		}
}

