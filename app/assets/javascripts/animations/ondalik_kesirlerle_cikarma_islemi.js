function __Styles(){
    fillColor = '#f3b93e'//'#bfe8ef';
    rectStyle = {
        fillColor: '#f3b93e', //'#bfe8ef',
        strokeWidth:1,
        strokeColor:'#af762f'//'#255b63'
    },
    animationSubtractCss = {
        width:120,
		position:'absolute',
		top:'35px',
		left:'250px',
		fontSize:'24px',
		textAlign:'right',
        fontWeight:'bold',
		fontFamily:"cursive",
		zIndex:1,
        color:'#fff'
    }

    if(navigator.appName == "Microsoft Internet Explorer"){
		animationSubtractCss.font = "arial";
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
            var w=Math.floor($(container).width()), h=Math.floor($(container).height());
			var board = new Raster('board');
			board.position = new Point(Math.floor(w*0.5),Math.floor(h*0.5)+2)
			var div = document.createElement('div');
			$(container).append(div);
            div.id = "animation_subtraction";
            
            $(div).css(animationSubtractCss);
            var subtraction = new LongSubtraction(2.38,1.26,"animation_subtraction",24);
            subtraction.doldur();
            subtraction.basla(1000, 1000);
//			$(container).append(div);
//			$(div)
//				.append('<div id="addend1"><span class="3">2</span>,<span class="2">3</span><span class="1">8</span></div><div id="addend2"><span class="3">1</span>,<span class="2">2</span><span class="1">6</span></div><div id="line"><span>-</span></div><br/>')
//				.append('<div id="result"></div>')
//				.css(animationSubtractCss);
//			
//			$('#line',div).css({
//				height:'2px',
//				borderBottom:'2px solid #fff',
//				position:'relative',
//				top:'5px',
//				left:'15px'
//			});
//			
//			$('#line span',div).css({
//				position:'absolute',
//				top:'-35px',	
//				left:'10px',
//				zIndex:2
//			});
//			$('#result').css({
//				position:'relative',
//				top:'-35px'
//			})
			var size = new Size(40,40)
			var p1 = new Point(450,10).add(0.5,0.5);
			var r1 = new Path.Rectangle(p1, size);
			r1.set_style(rectStyle);
			var r2 = new Path.Rectangle(p1.add(-5,5),size);
			r2.set_style(rectStyle);
			var p2 = p1.add(60,0)
			var y1 = Path.SegmentedRectangle(p2.x,p2.y,size.width,size.height,10,10,38,fillColor);
			y1.strokeColor = rectStyle.strokeColor;
			var p1 = new Point(450,60).add(0.5,0.5);
			var r1 = new Path.Rectangle(p1, size);
			r1.set_style(rectStyle);
			var p2 = p1.add(60,0)
			var y1 = Path.SegmentedRectangle(p2.x,p2.y,size.width,size.height,10,10,26,fillColor);
			y1.strokeColor = rectStyle.strokeColor;
			var p3 = p1.add(0,50);
			var p4 = p3.add(60,0);
			$('span.1').delay(1000).animate({color:'#f00'},1000).delay(2000).animate({color:'#fff'},2000);
			$('span.2').delay(5000).animate({color:'#f00'},1000).delay(2000).animate({color:'#fff'},2000);
			$('span.3').delay(9000).animate({color:'#f00'},1000).delay(2000).animate({color:'#fff'},2000);
			setTimeout(function(){
				$('#result').html('2');
			},2500);
			setTimeout(function(){
				$('#result').html('12');
			},6500);
			setTimeout(function(){
				$('#result').html('112');
			},10500);
			setTimeout(function(){
				$('#result').html('1,12');
			},11500);
			Animation.rectDraw = function(){
				if(Animation.rect)
					Animation.rect.remove();
				Animation.rect = Path.SegmentedRectangle(p4.x,p4.y,size.width,size.height,10,10,Math.floor(this.count),fillColor);
				Animation.rect.strokeColor = rectStyle.strokeColor
			}
			
			new AnimationHelper({
				count:0
			}).animate({
				style:{count:2},
				duration:1000,
				delay:1000,
				update:Animation.rectDraw
			});
			
			new AnimationHelper({
				count:2
			}).animate({
				style:{count:12},
				duration:1000,
				delay:3000,
				update:Animation.rectDraw	
			})
			new AnimationHelper().animate({
				duration:1,
				delay:5000,
				callback:function(){
					var r3 = new Path.Rectangle(p3, size);
					r3.set_style(rectStyle);
					r3.opacity =0;
					r3.animate({
						style:{opacity:1},
						duration:1000,
                        callback:Main.animationFinished
					});
				}	
			})
	}
	
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yüzde birler basamağından itibaren çıkarma işlemini yapınız ve sonra uygun yere virgül koyarak kontrol ediniz.');
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
			Interaction.input.selectorIndex = 0;
			$(Interaction.input)
				.attr('maxlength','7')
                .keyup(function(event) {
                    switch(event.keyCode){
                        case 8:
                            if(this.selectorIndex == 0)
                                this.selectorIndex = 1;
                            break;
                        case 37:
                            if(this.selectorIndex > 0)
                                this.selectorIndex--;
                            break;
                        case 39:
                            if(this.selectorIndex < this.value.length)
                                this.selectorIndex++
                            break;
                            
                    }
					if(this.createTextRange){
						var textRange = node.createTextRange();
						textRange.collapse(true);
						textRange.moveEnd(this.selectorIndex);
						textRange.moveStart(this.selectorIndex);
						textRange.select();
						return true;
					}else if(this.setSelectionRange){
						this.setSelectionRange(this.selectorIndex,this.selectorIndex);
						return true;
					}
                })
				
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
			Interaction.addend1 = Math.floor(Math.random()*1000)/100;
			do
				Interaction.addend2 = Math.floor(Math.random()*1000)/100;
				while(
					function(){
						if(Interaction.addend1 < Interaction.addend2)
							return true;
						var t = Interaction.addend1 - Interaction.addend2;
						var float = t - Math.floor(t);
						if(Math.floor(t * 100)%10 == 0)
							return true;
						else
							return false;
					}()
				)
			$(Interaction.addend1Div).html(Util.numberTurkishFloating(Interaction.addend1,2));
			$(Interaction.addend2Div).html(Util.numberTurkishFloating(Interaction.addend2,2));
			
		},
	isAnswerCorrect : function(value){
			if(value == Util.numberTurkishFloating(Interaction.addend1 - Interaction.addend2,2))
				return true;
			else 
				return false;
		},
	onCorrectAnswer : function(){
			
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
			Interaction.setStatus('Yanlış cevap, doğrusu ' +  Util.numberTurkishFloating(Interaction.addend1 - Interaction.addend2,2) + ' olacaktı',false);
            var div = document.createElement('div');
            div.id = "subtraction";
            $(Interaction.container).append(div);
            $(div)
                .css({
                    position:'absolute',
                    top:'60px',
                    left:'400px',
                    width:'100px',
                    fontSize:'24px'
                })
            console.log(Interaction.addend1,Interaction.addend2)
            Interaction.pause();
			var subtraction = new LongSubtraction(Interaction.addend1,Interaction.addend2,"subtraction",24);
            subtraction.doldur();
            subtraction.basla(1000, 1000,Interaction.resume);
		}
}