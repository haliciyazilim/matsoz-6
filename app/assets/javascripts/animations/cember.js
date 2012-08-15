function __Styles(){
    textStyle = {
        'font-size':'16px',
        'text-color': '#55f'
    };
    lineStyle = {
        strokeColor:"#000",
        strokeWidth:1
    }
    circleStyle = {
        strokeColor:"#000"
    };
    angleStyle = {
        'stroke-width': '2px'
    };
}
var Animation = {
	init:function(container){
		Animation.container = container;
		var w=$(container).width(), h=$(container).height();
		var x = w *0.5;
		var y = h*0.5;
		p1 = new Point(x-100,y);
		var R = 75;
		var circleCenter = new Path.Circle(p1,4);
		circleCenter.set_style({
			fillColor:'#000'
		});
		var circleCenterText = new PointText(
			new Point(
				p1.x-15,
				p1.y+15
			)
		);
		circleCenterText.content = 'O';
		circleCenterText.set_style({
			strokeColor:'#000',
			fillColor:'#000'
		});
		var pointGroup = new Group();
		var animationHelper = {
			animate:Item.prototype.animate,
			angle:0,
			count:0,
			dots:[0,30,60,90,120,150,180,210,240,270,300,330],
			nextDot:0,
			circleOpacity:0
		};
		Animation.onFrame = function(event){
			var x=p1.x,y=p1.y;
            var dot;
			if(animationHelper.angle > animationHelper.nextDot){
				x += R*Math.cos(Util.degreeToRadians(animationHelper.nextDot));
				y += R*Math.sin(Util.degreeToRadians(animationHelper.nextDot));
				if(animationHelper.angle > 360)
					dot = new Path.Circle(
						new Point(x,y),
						3
					);
				else
					dot = new Path.Circle(
						new Point(x,y),
						3
					);
				dot.set_style({
					fillColor:'#000',
					strokeColor:'#fff',
					strokeWidth:2
				});
				pointGroup.addChild(dot);
				animationHelper.nextDot = animationHelper.dots.shift();
			}
			else if(animationHelper.angle == 360){
				
				for(var i=0; i <36 ;i++)
					animationHelper.dots[i] = i*10+360;
				animationHelper.nextDot=360;
			}
			else if(animationHelper.angle > 720 && animationHelper.angle <= 1080){
				
				var startAngle = Util.degreeToRadians(720)
				var endAngle = Util.degreeToRadian(animationHelper.angle);
				if(animationHelper.angle == 1080){
					pointGroup.removeChildren();
					endAngle = 1079;
					Animation.circle.remove();
					Animation.circle = new Path.Circle(p1,R);
					Animation.circle.set_style({
						strokeColor:'#000',
						strokeWidth:1
					});
				}
				else{
					if(Animation.circle)
						Animation.circle.remove();
					var point1 = new Point(x + Math.cos(startAngle) * R,
										   y + Math.sin(startAngle) * R);
										   
					var point2 = new Point(x + Math.cos((startAngle+endAngle)/2) * R,
										   y + Math.sin((startAngle+endAngle)/2) * R);
										   
					var point3 = new Point(x + Math.cos(endAngle) * R,
										   y + Math.sin(endAngle) * R);
										   
					Animation.circle = new Path.Arc(point1, point2, point3);
					
					Animation.circle.set_style({
						strokeColor:'#000',
						strokeWidth:1
					});
				}
			}
			else if(animationHelper.angle == -1){
				Animation.circle.insertBelow(circleCenter);
				circleCenter.insertAbove(Animation.circle);
				circleCenterText.insertAbove(Animation.circle);
				if(animationHelper.circleOpacity == 1){
					animationHelper.angle = -2;
				}
				
			}
			else if(animationHelper.angle == -2){
				var line = new Path.Line(
					p1,
					new Point(
						x+R*Math.cos(-Math.PI*0.1),
						y+R*Math.sin(-Math.PI*0.1)
					)
				)
				line.set_style({
					strokeWidth:1,
					strokeColor:'#000'
				});
				var text = new PointText(
					new Point(p1.x+R*0.5,p1.y)
				);
				text.content = "r";
				$(Animation.container).append(
					'<div id="result" style="position:absolute;top:40px;left:50%;margin-left:30px;line-height:35px;">' +
						'O : merkez</br>' +
						'r : yarıçap</br>' +
						'2 x r = R : çap' +
					'</div>'
				);
				$('div#result',Animation.container).css({opacity:0});
				$('div#result',Animation.container).animate({opacity:1},1000,Main.animationFinished)
				Animation.onFrame = null;
                
			}
		}
		animationHelper.animate({
			style:{
				angle:-1
			},
			duration:1,
			delay:8000
		});
		
		animationHelper.animate({
			style:{
				circleOpacity:1
			},
			duration:500,
			delay:8000
		});
		animationHelper.animate({
			style:{
				angle:1080
			},
			duration:2000,
			delay:6000
		});
		animationHelper.animate({
			style:{
				angle:720
			},
			duration:2000,
			delay:3500
		});
		animationHelper.animate({
			style:{
				angle:360
			},
			duration:2000,
			delay:1000
		});
	}
};
var Interaction = {};
Interaction.getFramework = function() {
	return 'paper';
}
Interaction.images = [
	{
		id: "ruler",
		src: '/assets/animations/ruler.png'
	},
	{
		id: "compass_left_leg",
		src: '/assets/animations/compass_left_leg.png'
	},
	{
		id: "compass_knuckle",
		src: '/assets/animations/compass_knuckle.png'
	},
	{
		id: "compass_right_leg",
		src: '/assets/animations/compass_right_leg.png'
	}
];

Interaction.init = function(container){
	Main.setObjective('Yandaki cetvel ve pergeli kullanarak seçeceğiniz yarıçap uzunluğuna sahip çemberi aşağıdaki “Çiz” butonuna basarak çizdiriniz.');

	Interaction.container = container;
	Interaction.paper = {width:$(container).width(),height:$(container).height()};
	Interaction.button = document.createElement('input');
	Interaction.button.type = "button";
	Interaction.button.onclick = Interaction.drawCircle;
	Interaction.button.className = 'draw_button'
	$(Interaction.button).css({
			backgroundImage:'url(/assets/btn_gray_draw_text.png)',
			position:'absolute',
			top:'145px',
			width:'55px',
			height:'31px',
			left:'176px'
		});
	Interaction.container.appendChild(Interaction.button);
	Interaction.radius = document.createElement('div');
		$(Interaction.radius).css({
			position:'absolute',
			top:Interaction.paper.height*0.4,
			left:Interaction.paper.width * 0.30,
			width:'30px',
			height:'30px',
			fontSize:'20px'
		});
		
	Interaction.container.appendChild(Interaction.radius);
	
	Interaction.status = document.createElement('div');
	Interaction.status.className = "status_true";
	$(Interaction.status).css({
		position:'absolute',
		left:Interaction.paper.width*0.05,
		top:Interaction.paper.height*0.6,
		width:'40%'
	});
	Interaction.container.appendChild(Interaction.status);
	Interaction.pause = false;
	Interaction.r = null;
	Interaction.drawRuler();
	Interaction.initCompass();
};

Interaction.pause = false;

Interaction.setRadius = function(r){
	$(Interaction.radius).hide();
	Interaction.r = r;
	if(r/Interaction.br - Math.floor(r/Interaction.br)< 0.1)
		Interaction.radius.innerHTML = Math.floor(r/Interaction.br);
	else
		Interaction.radius.innerHTML = Util.numberTurkishFloating(r/Interaction.br,1);
	$(Interaction.radius).show();
};

Interaction.drawCircle = function(){
	if(Interaction.pause === true)
		return;
	Interaction.status.innerHTML = "";
				
	Interaction.pause = true;
	var x,y,xc,yc,xr,yr,R,_o;
	Interaction.drawCircle.x = Interaction.paper.width*0.65;
	Interaction.drawCircle.y = Interaction.paper.height*0.55;
	
	if(Interaction.t)
		clearInterval(Interaction.t)
	if(Interaction.drawCircle.compass)
		Interaction.drawCircle.compass.remove();
	Interaction.drawCircle.compass = new Compass(Interaction.drawCircle.x,Interaction.drawCircle.y);
	Interaction.drawCircle.compass.changeDelta(Interaction.r-Interaction.drawCircle.compass.right.bounds.width);
		Interaction.drawCircle.compass.group.opacity=0;
	Interaction.drawCircle.compass.group.animate({
		style:{
			opacity:1
		},
		duration:500
	});
	Interaction.drawCircle.t = setInterval(
		function(){
			var dt = new Date().getTime() - Interaction.animationStarted;
			
			Interaction.drawCircle._o = dt * 0.22;
			
			if( Interaction.drawCircle._o >= 360 ){
				clearTimeout(Interaction.drawCircle.t);
				Interaction.drawCircle._o = 359.9;
				Interaction.pause = false;
				Interaction.drawCircle.textO = new PointText(new Point(Interaction.drawCircle.x-11,Interaction.drawCircle.y+10));
				Interaction.drawCircle.textO.content = "O";
				
				Interaction.drawCircle.textR = new PointText(new Point(Interaction.drawCircle.x,Interaction.drawCircle.y));
				if(Interaction.r/Interaction.br > 4.3){
					Interaction.drawCircle.textR.position = Interaction.drawCircle.textR.position.add(+Interaction.r*0.5,+15);
                    Interaction.drawCircle.textR.paragraphStyle.justification = 'center';
                }
				else
					Interaction.drawCircle.textR.position = Interaction.drawCircle.textR.position.add(Interaction.r,20);
					
				Interaction.drawCircle.textR.content = "r = "+(Interaction.radius.innerHTML);
				Interaction.drawCircle.lineR = new Path.Line(new Point(Interaction.drawCircle.x,Interaction.drawCircle.y),new Point(Interaction.drawCircle.x+Interaction.r,Interaction.drawCircle.y));
				Interaction.drawCircle.lineR.set_style(lineStyle);
				$(Interaction.status).hide();
				Interaction.status.innerHTML = "O merkezli ve "+(Interaction.radius.innerHTML)+" birim yarıçaplı çember ";
				$(Interaction.status).show();
				
				Interaction.drawCircle.textO.opacity=0;
				Interaction.drawCircle.textO.animate({
					style:{
						opacity:1
					},
					duration:1000
				});
				
				Interaction.drawCircle.textR.opacity=0;
				Interaction.drawCircle.textR.animate({
					style:{
						opacity:1
					},
					duration:1000
				});
				Interaction.drawCircle.lineR.opacity=0;
				Interaction.drawCircle.lineR.animate({
					style:{
						opacity:1
					},
					duration:1000
				});
				Interaction.centerPoint = new Path.Circle(new Point(Interaction.drawCircle.x,Interaction.drawCircle.y),2);
				Interaction.centerPoint .set_style({fillColor:'#000'});
				Interaction.centerPoint .opacity=0;
				Interaction.centerPoint .animate({
					style:{opacity:1},
					duration:1000,
					delay:100
				})
				
				Interaction.drawCircle.compass.group.opacity=1;
				Interaction.drawCircle.compass.group.animate({
					style:{
						opacity:0
					},
					duration:500
				});
			}
				
			var _x = Interaction.drawCircle.x + Interaction.r * Math.cos(Util.degreeToRadians(Interaction.drawCircle._o));
			var _y = Interaction.drawCircle.y + Interaction.r * Math.sin(Util.degreeToRadians(Interaction.drawCircle._o));
			if(Interaction.drawCircle.circle)
				Interaction.drawCircle.circle.remove();
			var center = new Point(Interaction.drawCircle.x,Interaction.drawCircle.y);
			
			var radius = Interaction.r;
			var startAngle = Util.degreeToRadians(0);
			var endAngle = Util.degreeToRadians(Interaction.drawCircle._o);
			
			Interaction.drawCircle.compass.rotate(-Interaction._o_old+Interaction.drawCircle._o, center);
			var point1 = new Point(center.x + Math.cos(startAngle) * radius,
							   center.y + Math.sin(startAngle) * radius);
			var point2 = new Point(center.x + Math.cos((startAngle+endAngle)/2) * radius,
								   center.y + Math.sin((startAngle+endAngle)/2) * radius);
			var point3 = new Point(center.x + Math.cos(endAngle) * radius,
								   center.y + Math.sin(endAngle) * radius);
			Interaction.drawCircle.circle = new Path.Arc(point1, point2, point3);
			Interaction.drawCircle.circle.set_style(circleStyle);
			Interaction.drawCircle.circle.opacity = Interaction.drawCircle._o>200 ? 1 :Interaction.drawCircle._o/200; 
			Interaction._o_old = Interaction.drawCircle._o;
			Interaction.drawCircle.circle.moveBelow(Interaction.drawCircle.compass.group);
		},
		1 
	);
	
	if(Interaction.drawCircle.textO)
		Interaction.drawCircle.textO.remove();
	if(Interaction.drawCircle.textR)
		Interaction.drawCircle.textR.remove();
	if(Interaction.drawCircle.lineR)
		Interaction.drawCircle.lineR.remove();
	if(Interaction.centerPoint)
		Interaction.centerPoint.remove();
	Interaction.drawCircle._o = 20;
	Interaction.animationStarted = new Date().getTime();
	Interaction._o_old =0;	
};


Interaction.initCompass = function(){
	Interaction.compass = new Compass(Interaction.ruler.bounds.x+9,Interaction.ruler.bounds.y);
	Interaction.compass.right.class = "right_leg";

	Interaction.drawCompass(Interaction.br*3.5);
	var tool = new Tool();
	tool.drag = false;
	tool.onMouseDown = function(event){
		if(Interaction.compass.group.bounds.contains(event.point))
			this.drag=true;
	}
	tool.onMouseDrag = function(event){
		if(this.drag === true && Interaction.pause == false){
			Interaction.drawCompass(event.delta.x);
		}
	}
	tool.onMouseUp = function(){
		this.drag = false;
	}
	tool.activate();
};

Interaction.drawCompass = function(dx){
	if(dx == null || dx == undefined)
		dx = 0;
	if( Interaction.compass.d + dx > Interaction.br*9 ||
		Interaction.compass.d + dx < Interaction.br)
		return;
	Interaction.compass.changeDelta(dx)
	Interaction.setRadius(Interaction.compass.d);
};

Interaction.drawRuler = function(){
	var x,y,w,h,b,st;
	x = Interaction.paper.width*0.02;
	y = Interaction.paper.height*0.4;
	Interaction.ruler = new Raster('ruler');
	Interaction.ruler.position = new Point(
		Math.floor(x+Interaction.ruler.size.width*0.5)-9,
		Math.floor(y+Interaction.ruler.size.height*0.5)+0.5
	);
	Interaction.br = 12;

	var _y1 = y+h*0.6;
	var _yt = y+h*0.4;
	var _y2 = y+h;
};