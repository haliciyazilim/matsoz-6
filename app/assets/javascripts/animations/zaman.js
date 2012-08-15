function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
   hourDivCss = {
        position:'absolute',
        bottom:'40px',
        right:'30px',
        border:'1px solid #ccc',
        background:'#fff',
        width:'50px',
        fontSize:'20px'

    }
}
var Animation = {
    images:[
        {
            id:'moon_sun',
            src:'/assets/animations/zaman/moon_sun.png'
        },
        {
            id:'floor_day',
            src:'/assets/animations/zaman/floor_day.png'
        },
        {
            id:'floor_night',
            src:'/assets/animations/zaman/floor_night.png'
        },
        {
            id:'sky_day',
            src:'/assets/animations/zaman/sky_day.png'
        },
        {
            id:'sky_night',
            src:'/assets/animations/zaman/sky_night.png'
        }
    ],
	init:function(container){
			Animation.container = container;
            Animation.centerPoint = new Point($(container).width()*0.5,$(container).height()*0.5).floor();
            Animation.sky_day = new Raster('sky_day');
            Animation.sky_day.position = Animation.centerPoint;
            Animation.sky_night = new Raster('sky_night');
            Animation.sky_night.position = Animation.centerPoint;
            Animation.moon_sun = new Raster('moon_sun');
            Animation.moon_sun.firstPosition = new Point(379,462);
            Animation.moon_sun.position = Animation.moon_sun.firstPosition
            Animation.floor_day = new Raster('floor_day');
            Animation.floor_day.position = Animation.centerPoint;
            Animation.floor_night = new Raster('floor_night');
            Animation.floor_night.position = Animation.centerPoint;
            var div = document.createElement('div');
            $(container).append(div);
            $(div).css(hourDivCss);
            Animation.hour = div;
            Animation.play();
		},
    play:function(){
            Animation.isPaused = false;
            Animation.h = 0;
            Animation.m = 0;
            Animation.t = setInterval(function(){
                if(Animation.isPaused == true)
                     return;
                if(Animation.m==60){
                    Animation.h++;
                    Animation.m=0;
                }
                if(Animation.h == 24){
                    Animation.h = 0;
                }
                Animation.setImagesByTime(Animation.h, Animation.m++);
            },1)
        },
    pause:function(){
            Animation.isPaused = true;
        },
    resume:function(){
            Animation.isPaused = false;
        },
    stop:function(){
            clearInterval(Animation.t);
        },
    setImagesByTime:function(h,m){
            var angle = ( 2 * Math.PI ) * (h*60+m) / 1440; 
            var opacity = 0.5 * Math.cos(angle) + 0.5;
//            console.log(opacity);
            Animation.floor_night.opacity = opacity;
            Animation.sky_night.opacity = opacity;
            var matrix = new Matrix();
            matrix.setToRotation(Util.radianToDegree(angle/2 + Math.PI/2),Animation.moon_sun.firstPosition.x,Animation.moon_sun.firstPosition.y);
            Animation.moon_sun.setMatrix(matrix);
            Animation.moon_sun.position = Animation.moon_sun.firstPosition;
            m = Math.floor(m/10)*10;
            Animation.hour.innerHTML = ( (""+h).length<2?'0':'' ) + h + ':' +( (""+m).length<2?'0':'') + m;
        }
}
var Interaction = {
	images:[
		{
			id:'time_interval',
			class:'menu_link_images',
			src:'/assets/animations/zaman/time_interval.png',
			linkTo:function(){
					if(Interaction.pause == true)
						return;
					Interaction.pause = true;
					$('.menu_link_images').slideDown(500);
					$('#time_interval').slideUp(500,function(){
						Interaction.pause = false;
						Interaction.openPage(Interaction.timeIntervalPage);
					});
				}	
		},
		{
			id:'calendar',
			class:'menu_link_images',
			src:'/assets/animations/zaman/calendar.png',
			linkTo:function(){
					if(Interaction.pause == true)
						return;
					Interaction.pause = true;
					$('.menu_link_images').slideDown(500);
					$('#calendar').slideUp(500,function(){
						Interaction.pause = false;
						Interaction.openPage(Interaction.calendarPage);
					});
				}	
		},
		{
			id:'clock',
			class:'menu_link_images',
			src:'/assets/animations/zaman/clock.png',
			linkTo:function(){
					if(Interaction.pause == true)
						return;
					Interaction.pause = true;
					$('.menu_link_images').slideDown(500);
					$('#clock').slideUp(500,function(){
						Interaction.pause = false;
						Interaction.openPage(Interaction.clockPage);
					});
					
				}	
		},
		{
			id: "kadran",
			src: '/assets/animations/zaman/kadran.jpg'
		},
		{
			id: "akrep",
			src: '/assets/animations/zaman/akrep.png'
		},
		{
			id: "yelkovan",
			src: '/assets/animations/zaman/yelkovan.png'
		}
	],
	
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki zaman birimlerinden istediğinizi seçiniz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			Interaction.centerPoint = new Point(Interaction.paper.width*0.5,Interaction.paper.height*0.5);
			$(Interaction.images).each(function(index, element) {
                if(index < 3){
					$(Interaction.container).append($('#'+this.id).get(0));
					$('#'+this.id)
						.addClass('menu_link_images')
						.css({
							position:'absolute',
							bottom:'100px',
							left:(50+200*index)+'px',
							height:'auto'						
						})
						.click(this.linkTo)
				}
            });
			Interaction.timeIntervalPage = {
				objective:'Yandaki zaman çizelgesini doldurunuz. Belirtilen olayların tarihlerini üstteki kutulara klavye yardımıyla yazınız. Sizin için önemli diğer tarihleri ve olayları da ekleyebilirsiniz.',
				init:function(){
					var arr = new Group(); 
					var startPoint = Interaction.centerPoint.add(-250, -50);
					var endPoint = startPoint.add(501,0);
					var arrow = new Path.OneSidedArrow(startPoint,endPoint, 10, 30);
					var arrow2 = new Path.OneSidedArrow(startPoint, endPoint, 10, 30);
					arrow.rotate(180,Interaction.centerPoint.add(0,-50));
					arr.addChild(arrow);
					arr.addChild(arrow2);
					Interaction.timeLine = arr;
					Interaction.yearDivs = [];
					Interaction.eventDivs = [];
					var divCss = {
							'transform':'rotate(-90deg)',
							'-webkit-transform':'rotate(-90deg)',
							'-ms-transform':'rotate(-90deg)', /* IE 9 */
							'-moz-transform':'rotate(-90deg)', /* Firefox */
							'-o-transform':'rotate(-90deg)', /* Opera */
							position:'absolute',
							width:'80px',
							height:'40px',
							border:'1px solid #999',
							overflow:'hidden',
							resize:'none'
						}
					for(var i=0; i<7;i++){
						arr.addChild(new Path.Circle(startPoint.add(40+i*70,0),5).set_style({fillColor:'#000'}));
						var yearDiv = document.createElement('textarea');
						yearDiv.setAttribute('type','text');
						Interaction.yearDivs.push(yearDiv);
						$(Interaction.container).append(yearDiv);
						$(yearDiv)
							.html('')
							.css(divCss).css({top:'30px',left:45+i*70,fontSize:'30px'})
						
						var eventDiv = document.createElement('textarea');
						eventDiv.setAttribute('type','text');
						Interaction.eventDivs.push(eventDiv);
						$(Interaction.container).append(eventDiv);
						$(eventDiv)
							.html('')
							.css(divCss).css({top:'150px',left:25+i*70,width:'120px'});
					}
					$(Interaction.eventDivs[0]).html('Annem ve babam evlendi.')
					$(Interaction.eventDivs[2]).html('Doğum tarihim.')
					$(Interaction.eventDivs[4]).html('Okula başladım.')
				},
				dispose:function(f){
					$(Interaction.yearDivs).each(function(index, element) {
                        $(this).animate({opacity:0},500,this.remove);
                    });
					$(Interaction.eventDivs).each(function(index, element) {
                        $(this).animate({opacity:0},500,this.remove);
                    });
					Interaction.timeLine.animate({
						style:{opacity:0},
						duration:500,
						animationType:'easeOut',
						callback:function(){this.remove()}
					});
					setTimeout(function(){Interaction.pause = false;f();},500);
				}
			};
			Interaction.calendarPage = {
				objective:'Takvimde ileri geri ilerleyebilirsiniz.',
				init:function(){
					
					var calendarContainer = document.createElement('div');
					$(Interaction.container).append(calendarContainer);
					$(calendarContainer).css({
						position:'absolute',
						top:'10px',
						left:'50%',
						width:'200px',
						marginLeft:'-150px'
					})
					var calendarImageContainer = document.createElement('div');
					$(calendarContainer).append('<style></style>');
					var calendar = document.createElement('div');
					$(calendarContainer).append(calendar);
					$( calendar ).datepicker({firstDay:1});
					var date = new Date();
					if(date.getMonth() > 5)
						date.setMonth(8,10);
					else{
						date.setMonth(8,10)
						date.setFullYear(date.getFullYear()-1);
					}
					$(calendar).datepicker('setDate',date)
					Interaction.calendarContainer = calendarContainer;
				},
				dispose:function(f){
					$(Interaction.calendarContainer).animate({opacity:0},500,function(){
						$(Interaction.calendarContainer).remove();
					});
					setTimeout(function(){Interaction.pause = false;f();},500);
				}
			};
			Interaction.clockPage = {
				objective:'Yanda verilen saate göre sorulara cevap veriniz.',
				init:function(){
					Interaction.clock = new Clock(new Point(100,100));
					Interaction.appendButton({
						bottom:'40px',
						right:'40px'
					});
					Interaction.appendStatus({
						bottom:'10px',
						right:'40px'
					});
					Interaction.flushInputs();
					var inputStyle = {
							position:'static',
							height:'24px',
							fontSize:'16px',
							width:'24px'
						}
					var hour = Interaction.appendInput(inputStyle,true,false);
					var minute = Interaction.appendInput(inputStyle,true,false);
					$(hour).attr('maxlength',2);
					$(minute).attr('maxlength',2);
					var div = Interaction.appendQuestion(
						'<span id="hour"></span>&nbsp;saat&nbsp;<span id="minute"></span>&nbsp;dakika sonra saat&nbsp;',
						{
							position:'absolute',
							top:'100px',
							right:'40px',
							width:'400px',
							textAlign:'right',
							fontSize:'16px'
						}
					)
					$(div)
						.append(hour)
						.append('&nbsp;:&nbsp;')
						.append(minute)
						.append('&nbsp;olur.');
					Interaction.prepareNextQuestion();
				},
				dispose:function(f){
					$(Interaction.button).animate({opacity:0},500,$(Interaction.button).remove)
					$(Interaction.status).animate({opacity:0},500,$(Interaction.status).remove)
					$(Interaction.questionDiv).animate({opacity:0},500,$(Interaction.questionDiv).remove)
					Interaction.clock.remove(500);
					Interaction.clock = null;
					setTimeout(function(){Interaction.pause = false;f();},500);
				}
			};
		},
	openPage: function(page){
			if(page == Interaction._openedPage)
				return;
			Interaction._waitingPage = page;
			function _openPage(){
				Interaction._openedPage = Interaction._waitingPage;
				Interaction._openedPage.init();
				Main.setObjective(Interaction._waitingPage.objective);
				Interaction._waitingPage = null;
			}
			if(Interaction._openedPage){
				Interaction._openedPage.dispose(_openPage)
			}
			else{
				$('.menu_link_images').each(function(index, element) {
                    $(this).animate({width:$(this).width()*0.6,bottom:'0px',left:(100+70*index)+'px',marginLeft:-$(this).width()*0.63},1000);
                }); 
				setTimeout(_openPage,1000)
			}
			
		},
	nextQuestion: function(randomNumber){
			Interaction.clock.setTime({
				h: Math.floor(Math.random()*12),
				m: Math.floor(Math.random()*11+1)*5
			});
			var hour = Math.floor(Math.random()*12);
			var minute = Math.floor(Math.random()*11+1)*5;
			Interaction.setQuestionParams([
				{id:'hour', html:hour},
				{id:'minute', html:minute}
			]);
		},
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
		
		},
	isAnswerCorrect : function(values){
			var minute = (Interaction.clock.getTime().m + parseInt(Interaction.getQuestionParams()[1].html,10) ) ;
			var hour = Math.floor(minute/60);
			minute = minute%60;
			hour = (hour + Interaction.clock.getTime().h + parseInt(Interaction.getQuestionParams()[0].html,10) ) % 12;
			if(hour == 0)
				hour = 12;
			Interaction.correctAnswer = {h:hour,m:minute};
			if(hour == values[0] && minute == values[1])
				return true;
			else
				return false;
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
			var zero = (""+Interaction.correctAnswer.m).length < 2 ? '0':''
			Interaction.setStatus('Yanlış, doğru cevap '+Interaction.correctAnswer.h+':'+zero + Interaction.correctAnswer.m+' olacaktı.',false);
			Interaction.clock.setTime(Interaction.correctAnswer);
		},
}

function Clock(p){
	this.p = p;
	this.animating = false;
	this.kadran = new Raster('kadran');
	this.kadran.position = this.p;
	this.yelkovan = new Raster('yelkovan');
	this.yelkovan.position = this.p;
	this.akrep = new Raster('akrep');
	this.akrep.position = this.p;
	this.akrep.lastTransformation = this.akrep.matrix;
	this.yelkovan.lastTransformation = this.yelkovan.matrix;
	this.remove = function(time){
		if(!isNaN(time)){
			this.akrep.animate({
				style:{opacity:0},
				duration:500,
				animationType:'easeOut',
				callback:function(){this.remove()}
			})
			this.yelkovan.animate({
				style:{opacity:0},
				duration:500,
				animationType:'easeOut',
				callback:function(){this.remove()}
			})
			this.kadran.animate({
				style:{opacity:0},
				duration:500,
				animationType:'easeOut',
				callback:function(){this.remove()}
			})
		}	
		else{
			this.akrep.remove();
			this.yelkovan.remove();
			this.kadran.remove();
		}
	}
	this.getTime = function(){
		return this.endTime;
	}
	this.setTime = function(endTime,startTime){
		
		if(this.animating == true)
			return;
		Interaction.pause = true;
		this.animating = true;
		if(this.endTime){
			while(endTime.h < this.endTime.h)
				endTime.h += 12;
		}
		this.endTime = endTime;
		this.endTime.h = this.endTime.h;
		this.endTime.m = this.endTime.m%60;
		if(startTime){
			startTime.h = startTime.h;
			startTime.m = startTime.m%60;
		}
		else if(this.startTime){
			startTime = this.startTime;
			this.startTime = undefined;
		}
		else{
			startTime = {h:0,m:0}
		}
		this.clockHelper = new AnimationHelper({
			yelkovanAngle: 360*startTime.h + 6*startTime.m,
			akrepAngle: 30*startTime.h+startTime.m*0.5,
			owner:this
		});
		this.clockHelper.animate({
			style: {
				yelkovanAngle: 360*this.endTime.h + 6*this.endTime.m,
				akrepAngle: 30*this.endTime.h+this.endTime.m*0.5
			},
			duration: Math.abs(this.endTime.h - startTime.h + (this.endTime.m - startTime.m)/60)*400,
			animationType:'easeInEaseOut',
			update: function() {
				var matrix = new Matrix();
				matrix.rotate(this.akrepAngle, this.owner.p.x, this.owner.p.y);
				matrix.concatenate(this.owner.akrep.lastTransformation);
				this.owner.akrep.setMatrix(matrix);
				matrix = new Matrix();
				matrix.rotate(this.yelkovanAngle, this.owner.p.x, this.owner.p.y);
				matrix.concatenate(this.owner.yelkovan.lastTransformation);
				this.owner.yelkovan.setMatrix(matrix);
			},
			callback:function(){
				this.owner.startTime = this.owner.endTime;
				this.owner.animating = false;
				Interaction.pause = false;
			}
		});
	}
}