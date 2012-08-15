// JavaScript Document

/*Styles*/
var textStyle = {fontSize:12,fillColor:'#fff',justification:'center'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};
//var shapeStyle = {'fill':'#fff','shape-rendering':'crispEdges'};
var animationShapeStyle = {strokeColor:'#000',strokeWidth:2}
var shapeStyle = {strokeColor:'#255b63',strokeWidth:2,fillColor:'#fff'};
var dropableShapeHoverStyle = {strokeColor:'#000',fillColor:'#dd9',strokeWidth:2};
var dropableShapeDefaultStyle = {strokeColor:'#999',fillColor:'rgb(146,208,80)',strokeWidth:1};
var dropableShapeDroppedTrueStyle = {strokeColor:'#0f0',fillColor:'#afa'};
var dropableShapeDroppedFalseStyle = {strokeColor:'#f00',fillColor:'#f00'};
//Styles

var Animation = {
	images:[
		{
			id:'triangle_pattern',
			src:'/assets/animations/duzgun_cokgen/triangle.png'
		},
		{
			id:'square_pattern',
			src:'/assets/animations/duzgun_cokgen/square.png'
		},
		{
			id:'pentagon_pattern',
			src:'/assets/animations/duzgun_cokgen/pentagon.png'
		},
		{
			id:'hexagon_pattern',
			src:'/assets/animations/duzgun_cokgen/hexagon.png'
		}
	],
	init: function(container){
		Animation.container = container;
		var w=$(container).width(), h=$(container).height();
		var x = w *0.5;
		var y = h*0.5;
		var _h = 10;
		var size = new Size(150,170);
		//console.log(size)
		function PolygonInterface(P,S,angles){
			this.setAngles = function(angles){
				if(angles instanceof Array)
					this.angles = angles;
				else
					throw 'argument `angles` is not an array';
			}
			this.draw = function(){
				if(this.shape)
					this.shape.remove();
				this.shape = new Path.EquiradialPolygon(this.position,this.size,this.angles,0);
				this.shape.set_style(animationShapeStyle);
			}
			this.redraw = function(angles){
				this.setAngles(angles);
				this.draw();
			}
			
			this.position = P;
			this.size = S
			
			if(angles){
				this.setAngles(angles);
			}
		}
		var p1 = new Point(
			0,
			27+0.5-_h
		);
		var p2 = new Point(
			w*0.25 ,
			12-_h 
		);
		var p3 = new Point(
			w*0.5,
			4-Math.floor(_h)
		);
		var p4 = new Point(
			w*0.75,
			0-_h 
		);
		
		var animationHelper = {
			animate: Item.prototype.animate,
			t1:150,
			t2:210,
			t3:330,
			s1:30,
			s2:150,
			s3:210,
			s4:330,
			p1:60,
			p2:90,
			p3:120,
			p4:200,
			p5:330,
			h1:30,
			h2:60,
			h3:150,
			h4:200,
			h5:210,
			h6:350
		}
		
		Animation.triangle = new PolygonInterface(
			p1,
			size,
			[
				animationHelper.t1,
				animationHelper.t2,
				animationHelper.t3
			]
		);
		Animation.triangle.draw();
		Animation.square = new PolygonInterface(
			p2,
			size,
			[
				animationHelper.s1,
				animationHelper.s2,
				animationHelper.s3,
				animationHelper.s4
			]
		);
		Animation.square.draw();
		
		Animation.pentagon = new PolygonInterface(
			p3,
			size,
			[
				animationHelper.p1,
				animationHelper.p2,
				animationHelper.p3,
				animationHelper.p4,
				animationHelper.p5
			]
		);
		Animation.pentagon.draw();
		
		Animation.hexagon = new PolygonInterface(
			p4,
			size,
			[
				animationHelper.h1,
				animationHelper.h2,
				animationHelper.h3,
				animationHelper.h4,
				animationHelper.h5,
				animationHelper.h6
			]
		);
		Animation.hexagon.draw();

		Animation.onFrame = function(event){
			Animation.triangle.redraw([
				animationHelper.t1,
				animationHelper.t2,
				animationHelper.t3
			]);
			Animation.square.redraw([
				animationHelper.s1,
				animationHelper.s2,
				animationHelper.s3,
				animationHelper.s4
			]);
			Animation.pentagon.redraw([
				animationHelper.p1,
				animationHelper.p2,
				animationHelper.p3,
				animationHelper.p4,
				animationHelper.p5
			]);
			Animation.hexagon.redraw([
				animationHelper.h1,
				animationHelper.h2,
				animationHelper.h3,
				animationHelper.h4,
				animationHelper.h5,
				animationHelper.h6
			]);
		}

		
		animationHelper.animate({
			style:{t1:90},
			duration:1750,
			delay:600,
			animationType: 'easeInEaseOut',
			callback:function(){
				
				//console.log('Im here');
				$(Animation.container).append('<span style="position:absolute;bottom:10px;left:40px">Eşkenar Üçgen</span>');
				var raster = new Raster('triangle_pattern');
				raster.position = Animation.triangle.shape.centerPoint.floor();
				raster.opacity = 0;
				raster.animate({
					style:{opacity:1},
					duration:1000,
					delay:500
				});
			}
		});
		animationHelper.animate({
			style:{
				s1:45,
				s2:135,
				s3:225,
				s4:315
			},
			duration:1500,
			delay:700,
			animationType: 'easeInEaseOut',
			callback:function(){
				//console.log('Im here');
				$(Animation.container).append('<span style="position:absolute;bottom:10px;left:26.5%">Kare (Düzgün Dörtgen)</span>');
				var raster = new Raster('square_pattern');
				raster.position = Animation.square.shape.centerPoint.floor();
				raster.opacity = 0;
				raster.animate({
					style:{opacity:1},
					duration:1000,
					delay:500

				});
			}
		});
		animationHelper.animate({
			style:{
				p1:18,
				p2:90,
				p3:162,
				p4:234,
				p5:306,
			},
			duration:2000,
			delay:750,
			animationType: 'easeInEaseOut',
			callback:function(){
				//console.log('Im here');
				$(Animation.container).append('<span style="position:absolute;bottom:10px;left:53.5%">Düzgün Beşgen</span>');
				var raster = new Raster('pentagon_pattern');
				raster.position = Animation.pentagon.shape.centerPoint.floor();
				raster.opacity = 0;
				raster.animate({
					style:{opacity:1},
					duration:1000,
					delay:500

				});
			}
		});
		animationHelper.animate({
			style:{
				h1:0,
				h2:60,
				h3:120,
				h4:180,
				h5:240,
				h6:300
			},
			duration:2500,
			delay:500,
			animationType: 'easeInEaseOut',
			callback:function(){
				//console.log('Im here');
				$(Animation.container).append('<span style="position:absolute;bottom:10px;left:78%">Düzgün Altıgen</span>');
				var raster = new Raster('hexagon_pattern');
				raster.position = Animation.hexagon.shape.centerPoint.floor();
				raster.opacity = 0;
				raster.animate({
					style:{opacity:1},
					duration:1000,
					delay:500,
                    callback:Main.animationFinished

				});
			}
		});
		
	}
};
var Interaction =function(){};Interaction();

Interaction.getFramework = function() {
	return 'paper';
}

Interaction.images = [
	{
		id:'dropable_default',
		src:'/assets/animations/cokgenler/dropable_default.png'	
	},
	{
		id:'dropable_hover',
		src:'/assets/animations/cokgenler/dropable_hover.png'	
	},
	{
		id:'dropable_false',
		src:'/assets/animations/cokgenler/dropable_false.png'	
	},
	{
		id:'dropable_true',
		src:'/assets/animations/cokgenler/dropable_true.png'	
	},
]

Interaction.init = function(container){
	Main.setObjective('Yandaki çokgenlerden düzgün olanları  "Düzgün Çokgen" bölümüne sürükleyiniz.');
	Interaction.container = container;
	Interaction.container.top = $(container).offset().top;
	Interaction.container.left = $(container).offset().left;
	var w = $(Interaction.container).width();
	var h = $(Interaction.container).height();
	Interaction.shuffledArray = null;
	project.activeLayer.removeChildren();
	Interaction.createDropableShape(w*0.75,0,w*0.2,h);
	Interaction.shapeCount = 0;
	Interaction.generateRandomShapes(20,20,w*0.8,h-20);
	Interaction.paper = {width:500,height:300};
	Interaction.preventDrag = false;
	if(Interaction.status == null || Interaction.status == 'undefined'){
		Interaction.status = document.createElement('div');
		Interaction.status.className = 'status_true';
		$(Interaction.status).css({'position':'absolute','top':''+(h-40)+'px','left':'20px','padding-left':'20px'});
		Interaction.container.appendChild(Interaction.status);
	}
	else
		Interaction.setStatus('');
	var drag = new Tool();
	drag.onMouseDown = function(event){
		if(event.item){
			drag.shape = event.item;
			event.item.start();
		}
	};
	drag.onMouseDrag = function(event){
		if(drag.shape)
			drag.shape.move(event.delta.x,event.delta.y,event.point.x,event.point.y);
	};
	drag.onMouseUp = function(event){
		if(drag.shape)
			drag.shape.up();
		drag.shape = null;
	}
	drag.activate();
};

var start = function(){
		this.ox = this.position.x;
		this.oy = this.position.y;
		this.odx = 0;
		this.ody = 0;
		var svg_offset = $(Interaction.container).offset();
		this.s_left = svg_offset.left;
		this.s_top = svg_offset.top;
		this.inDropableShape = false;
		if(this.preventDrag == null || this.preventDrag == 'undefined')
			this.preventDrag = false;
		return true;
	},
	move = function(dx,dy,x,y){
		if(this.preventDrag == true )
			return;
		this.odx += dx;
		this.ody += dy;
		Interaction.dropableShape.style = dropableShapeDefaultStyle;
		this.position = [this.position.x + dx,this.position.y + dy];
		var hitResult = Interaction.dropableShape.bounds.contains(new Point(x,y));
		if(hitResult){
			this.inDropableShape = true;
			Interaction.changeDropableShape('dropable_hover');
		}
		else{
			Interaction.changeDropableShape('dropable_default');
			this.inDropableShape = false;
		}
		return true;
	},
	up = function(){
		if(this.preventDrag == true)
			return;
		this.preventDrag=true;
		Interaction.dropableShape.style = dropableShapeDefaultStyle;
		
		var revert = false;
		if(this.inDropableShape == true){
			if(this.isRegular === true){
				this.opacityX = 1;
				this.scaleRatio = 0.9;
				this.animate({
					style:{
						opacityX:-0.3,
						scaleRatio:1
					},
					duration:500,
					update:function(){
						if(this.opacityX < 0.7)
							this.opacity = this.opacityX+0.3;
						this.scale(this.scaleRatio);	
					},
					callback:this.remove
				});
				this.isRegular = false;
				Interaction.changeDropableShape('dropable_true');
				setTimeout(function(){
						Interaction.changeDropableShape('dropable_default');
					},600);
			}
			else{
				revert = true;
				Interaction.changeDropableShape('dropable_false');
				setTimeout(function(){
						Interaction.changeDropableShape('dropable_default');
					},600);
			}
		}
		else
			revert = true;
		if(revert == true){
			var distance = Math.sqrt(this.odx*this.odx + this.ody*this.ody);
			var velocity = 1;// px/ms
			var time  = distance / velocity;
			/*this.callback = function(){
				this.preventDrag = false;
				//console.log(this.preventDrag);
			}*/
			this.animate({
					style:{
						position:new Point(this.ox,this.oy)
						},
					duration: time,
					callback:this.callback
				});
		}
		var isExist=false;
		for(var i=0; i < Interaction.shapes.length ;i++)
			if(Interaction.shapes[i] != 'undefined' && Interaction.shapes[i].isRegular ==true)
				isExist=true;
		if(isExist == false){
		
			Interaction.setStatus('<span class="status_true" style="position:relative;top:10px;">Tebrikler bütün düzgün çokgenleri buldunuz.</span> &emsp;<input type="button" onclick="Interaction.init(Interaction.container);" class="repeat_button"/>');
		
		}
	};
Interaction.generateRandomShapes = function(X,Y,WIDTH,HEIGHT){
	Interaction.shapes = [];
	var maxW = WIDTH*0.25;
	var maxH = HEIGHT*0.3;
	shapeStyle.fillColor = new RgbColor(1,1,1,0)
	do{///generate shapes randomly
		var x,y,w,h;
		var p = Interaction.findSpace(WIDTH,HEIGHT);
		x = p.x+X, y = p.y+Y;
		
		w = maxW*0.7;
		h = maxH*0.8;
		var shape;
		var isRegular;
		var NUMBER_OF_SHAPES  = 12;
		Interaction.shapeCount = Interaction.shapeCount%NUMBER_OF_SHAPES;
		if(Interaction.shuffledArray == null || Interaction.shuffledArray == undefined)
			Interaction.shuffledArray = Util.getShuffledArray(NUMBER_OF_SHAPES);
		Interaction.shapeType = Interaction.shuffledArray[Interaction.shapeCount++];
		//console.log(Interaction.shuffledArray)
		switch(Interaction.shapeType){
			case 0:
				var a = Math.min(w,h);
				shape = new Path.Rectangle(new Point(x+a*0.15,y+a*0.15),new Size(a*0.7,a*0.7));
				isRegular = true;
				break;
			case 1:
				h = w = Math.min(w,h);
				while(h == w || h > maxH)
					h = -Math.floor(Math.random()*3)*30+w+30;
				shape = new Path.Rectangle(new Point(x+10,y+10),new Size(w,h));
				isRegular = false;
				break;
				
			case 2:
				var a,b,c;
				a = b = c = 5;	
				shape = new Triangle(a,b,c,x,y,w,h);
				isRegular = true;
				break;
			
			case 3:
				var a,b,c;
				a = b = c = 5;
				a = 3, b = 4;
				shape = new Triangle(a,b,c,x,y,w,h);
				isRegular = false;
				break;
			
			case 4:
				shape = pentagon(new Point(x,y), new Size(w,h));
				isRegular = false;
				break;
			case 5:
				shape = regularpentagon(new Point(x,y), new Size(w,h));
				isRegular = true;
				break;
			case 6:
				shape = hexagon(new Point(x,y), new Size(w,h));
				isRegular = false;
				break;
			case 7:
				shape = regularhexagon(new Point(x,y), new Size(w,h));
				isRegular = true;
				break;
			case 8:
				shape = new Path.Rhomboid(new Point(x,y+h*0.1), new Size(w*0.6,h*0.7), w*0.2);
				isRegular = false;
				break;
			case 9:
				shape = new Path.Rhombus(new Point(x+w*0.1,y+h*0.1),new Size(w*0.8,h*0.7) );
				isRegular = false;
				break;
			case 10:
				var a,b,c;
				a = b = c = 5;
				a = 6, b = 8;
				shape = new Triangle(a,b,c,x,y,w,h);
				isRegular = false;
				break;
			case 11:
				var a,b,c;
				a = b = c = 5;
				a = 4, b = 3;
				shape = new Triangle(a,b,c,x,y,w,h);
				isRegular = false;
				break;
		}
		shape.isRegular = isRegular;
		shape.style = shapeStyle;
		shape.start = start;
		shape.move = move;
		shape.up = up;
		shape.callback = function(){
			this.preventDrag = false; 
			
		};
		shape.order = Interaction.shapes.length;
		Interaction.shapes.push(shape);
	}while( Interaction.shapes.length < 12 )

};

Interaction.createDropableShape = function(X,Y,WIDTH,HEIGHT){	
	var x,y,rx,ry,length;
	length = Math.min(WIDTH,HEIGHT);
	w = length * 0.90;
	h = length * 0.80;
	x = X + (WIDTH)*0.5;
	y = Y + (HEIGHT) * 0.5;
	//Interaction.dropableShape = new Path.Oval(new Rectangle(new Point(x,y), new Size(w,h)));
	//Interaction.dropableShape.style = dropableShapeDefaultStyle;
	Interaction.dropableShape = new Raster('dropable_default');
	Interaction.dropableShape.position = new Point(x,y)
	
	
	//shadow
	var t1 = new PointText(new Point(x+1,y-2));
	t1.set_style(textStyle);
	t1.content = "Düzgün";
	t1.fillColor='#2f4f54';
	var t1 = new PointText(new Point(x+1,y+13));
	t1.set_style(textStyle);
	t1.content = "Çokgen";
	t1.fillColor='#2f4f54';
	
	//foreground
	var t1 = new PointText(new Point(x,y-3));
	t1.set_style(textStyle);
	t1.content = "Düzgün";
	var t1 = new PointText(new Point(x,y+12));
	t1.set_style(textStyle);
	t1.content = "Çokgen";

};

Interaction.changeDropableShape = function(id){
	Interaction.dropableShape.setImage($('#'+id).get(0));
	Interaction.dropableShape.setVisible(false);
	Interaction.dropableShape.setVisible(true);
	//console.log("I'm here")
	
}

//find left-upper-most empty space to place a shape
Interaction.findSpace = function(w,h){
	var n = Interaction.shapes.length;
	var p = {
			x:Math.floor(n%4)*w*0.2,
			y:Math.floor(n/4)*h*0.3
		};
	return p;
}
function Triangle(i,j,k,x,y,maxW,maxH){
	this.i=i,this.j=j,this.k=k;
	this.p1={x:0,y:0},this.p2={x:0,y:0},this.p3={x:0,y:0};
	this.a1=null,this.a2=null,this.a3=null;
	var a = Math.min(maxW,maxH);
	var _c = a/Math.max(i,j,k);
	this.p1.x = x;
	this.p1.y = y+a;
	this.p2.x = this.p1.x + this.i*_c;
	this.p2.y = this.p1.y;
	var a = Math.acos((this.i*this.i + this.k*this.k - this.j*this.j)/(2*this.i*this.k));
	this.p3.x = this.p1.x + Math.cos(a)*k*_c;
	this.p3.y = this.p1.y - Math.sin(a)*k*_c;
	return new Path.Triangle(this.p1,this.p2,this.p3);
};
function pentagon(p,s){
	var o=[10,70,150,200,300];
	return new Path.EquiradialPolygon(p,s,o);
}
function regularpentagon(p,s){
	return new Path.RegularPolygon(p,s,5);
}
function hexagon(p,s){
	var o=[10,50,100,150,200,300];
	return new Path.EquiradialPolygon(p,s,o);
}
function regularhexagon(p,s){
	return new Path.RegularPolygon(p,s,6);
}
Interaction.setStatus = function(msg){
	$(Interaction.status).hide();
	Interaction.status.innerHTML = msg;
	$(Interaction.status).show();
}
