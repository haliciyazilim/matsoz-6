// JavaScript Document

/*Styles*/
var textStyle = {fontSize:13,fillColor:'#fff',justification:'center'};
var edgeStyle = {'stroke-width':'2px'};
var angleStyle = {'fill':'#DDD'};
//var shapeStyle = {'fill':'#fff','shape-rendering':'crispEdges'};
var animationEdgeStyle = {strokeColor:'#000',strokeWidth:2}
function __Styles(){
	shapeStyle = {strokeColor:'#255b63',strokeWidth:2,fillColor:new RgbColor(1,1,1,0)};
}
var dropableShapeHoverStyle = {strokeColor:'#000',fillColor:'#dd9',strokeWidth:2};
var dropableShapeDefaultStyle = "default"//shadow
var dropableShapeDefaultTriangleStyle = {strokeColor:'#999',fillColor:'rgb(146,208,80)',strokeWidth:1};
var dropableShapeDefaultRectangleStyle = {strokeColor:'#999',fillColor:'rgb(226,108,9)',strokeWidth:1};
var dropableShapeDefaultPentagonStyle = {strokeColor:'#999',fillColor:'rgb(177,160,198)',strokeWidth:1};
var dropableShapeDefaultHexagonStyle = {strokeColor:'#999',fillColor:'rgb(217,148,147)',strokeWidth:1};
var dropableShapeDroppedTrueStyle = {strokeColor:'#0f0',fillColor:'#afa'};
var dropableShapeDroppedFalseStyle = {strokeColor:'#f00',fillColor:'#f00'};
//Styles

var Animation = {

	init:function(container){
		
		function animationWithDefaultTransform(shape,duration,delay,callback){
			if(shape.vertexArray == null || shape.vertexArray == undefined)
				return;
			for(var i=0,length = shape.vertexArray.length; i<length; i++){
				var line = new Path.Line(
					shape.vertexArray[i],
					shape.vertexArray[(i+1)%length]
				);
				line.set_style(animationEdgeStyle);
				var angle = Math.floor(Math.random()*180)-90;
				var x = Math.floor(Math.random()*400)-200;
				var y = Math.floor(Math.random()*50)-25;
				line.angle = angle;
				line.opacity = 0;
				line.firstPosition = line.position;
				line.translate(x,y);
				line.lastTransformation = line.matrix;
				line.animate({
					style:{
						opacity:1,
						angle:0,
						position:new Point(line.position.x-x,line.position.y-y)
					},
					duration:duration,
					delay:delay,
					animationType:'easeInEaseOut',
					update:function(){
						var matrix = new Matrix();
						matrix.rotate(this.angle, this.firstPosition);
						matrix.translate(this.lastTransformation);
						this.setMatrix(matrix);
						this.lastTransformation = this.matrix;
					}
				})	
			}
			setTimeout(callback,duration+delay);
		}
		Animation.container = container;
		var w=$(container).width(), h=$(container).height();
		var size = new Size(140,140);
		var p1 = new Point(
			0,
			25
		);
		var p2 = new Point(
			w*0.25 ,
			0 
		);
		var p3 = new Point(
			w*0.5,
			0
		);
		var p4 = new Point(
			w*0.75,
			0
		);
		animationWithDefaultTransform(
			new Path.EquiradialPolygon(
				p1,
				size,
				[90,170,330],
				0
			),
			1500,
			500,
			function(){
				$(Animation.container).append('<span style="position:absolute;bottom:20px;left:50px">Üçgen</span>');
			}
		);
		animationWithDefaultTransform(
			new Path.EquiradialPolygon(
				p2,
				size,
				[10,120,170,250],
				0
			),
			2500,
			100,
			function(){
				$(Animation.container).append('<span style="position:absolute;bottom:20px;left:30%">Dörtgen</span>');
			}
		);
		animationWithDefaultTransform(
			new Path.EquiradialPolygon(
				p3,
				size,
				[10,60,150,180,260],
				0
			),
			3000,
			300,
			function(){
				$(Animation.container).append('<span style="position:absolute;bottom:20px;left:53.5%">Beşgen</span>');
			}
		);
		animationWithDefaultTransform(
			new Path.EquiradialPolygon(
				p4,
				size,
				[20,70,99,136,240,342],
				0
			),
			3000,
			900,
			function(){
				$(Animation.container).append('<span style="position:absolute;bottom:20px;left:80%">Altıgen</span>');
                Main.animationFinished();
            }
		);	
	}
};


var Interaction =function(){};Interaction();

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


Interaction.getFramework = function() {
	return 'paper';
}
Interaction.init = function(container){
	Main.setObjective('Yandaki çokgenleri sınıflandırınız.');
	Interaction.container = container;
	Interaction.container.top = $(container).offset().top;
	Interaction.container.left = $(container).offset().left;
	var w = $(Interaction.container).width();
	var h = $(Interaction.container).height();
	project.activeLayer.removeChildren();
	Interaction.dropableShapes = {
		setImage : function(image){
			Interaction.dropableShapes.triangle.setImage($('#'+image).get(0));
			Interaction.dropableShapes.rectangle.setImage($('#'+image).get(0));
			Interaction.dropableShapes.pentagon.setImage($('#'+image).get(0));
			Interaction.dropableShapes.hexagon.setImage($('#'+image).get(0));
		},
		hitTest : function(p){
			if(Interaction.dropableShapes.triangle.bounds.contains(p))
				return Interaction.dropableShapes.triangle;
			if(Interaction.dropableShapes.rectangle.bounds.contains(p))
				return Interaction.dropableShapes.rectangle;
			if(Interaction.dropableShapes.pentagon.bounds.contains(p))
				return Interaction.dropableShapes.pentagon;
			if(Interaction.dropableShapes.hexagon.bounds.contains(p))
				return Interaction.dropableShapes.hexagon;
		}
		
	};
	Interaction.shuffledArray = null;
	Interaction.createDropableShapesLeft(0,0,w*0.2,h*0.8);
	Interaction.createDropableShapesRight(w*0.8,0,w*0.2,h*0.8);
	//Interaction.dropableShapes.setImage('dropable_default');
	Interaction.generateRandomShapes(w*0.2,10,w*0.6,h);
	Interaction.paper = {width:500,height:300};
	Interaction.preventDrag = false;
	if(Interaction.status == null || Interaction.status == 'undefined'){
		Interaction.status = document.createElement('div');
		Interaction.status.className = 'status_true';
		$(Interaction.status).css({
			position:'absolute',
			bottom:'10px',
			left:'0px',
			paddingLeft:'20px',
			width:'100%'
		});
		Interaction.container.appendChild(Interaction.status);
	}
	else
		Interaction.setStatus('');
	var drag = new Tool();
	drag.setHitTestOptions({ 
		fill: true, 
		stroke: true, 
		segments: true, 
		tolerance: 2, 
		class: "draggable" 
	});
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
		this.hitShape = null;
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
		Interaction.dropableShapes.setImage('dropable_default');
		this.position = [this.position.x + dx,this.position.y + dy];
		//var hitResult = project.activeLayer.hitTest([x,y],{ fill: true, stroke: true, segments: true, tolerance: 2, class: "dropableShape" });
		var hitResult = Interaction.dropableShapes.hitTest(new Point(x,y));
		if(hitResult){
			this.inDropableShape = true;
			this.hitShape = hitResult;
			this.hitShape.setImage($('#dropable_hover').get(0));
		}else{
			this.inDropableShape = false;
			this.hitShape = null;
		}
		
		return true;
	},
	up = function(){
		if(this.preventDrag == true)
			return;
		this.preventDrag=true;
		Interaction.dropableShapes.setImage('dropable_default');
		
		var revert = false;
		if(this.inDropableShape == true){
			if(this.hitShape.numberOfEdges === this.numberOfEdges){
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
				this.class = null;
				
				this.hitShape.setImage($('#dropable_true').get(0));
				setTimeout(function(){
						Interaction.dropableShapes.setImage('dropable_default');
					},400);
			}
			else{
				revert = true;
				this.hitShape.setImage($('#dropable_false').get(0));
				setTimeout(function(){
						Interaction.dropableShapes.setImage('dropable_default');
					},400);
			}
		}
		else
			revert = true;
		if(revert == true){
			var distance = Math.sqrt(this.odx*this.odx + this.ody*this.ody);
			var velocity = 1;// px/ms
			var time  = distance / velocity;
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
				if(Interaction.shapes[i].class == "draggable")
					isExist=true;
		if(isExist == false)
			Interaction.setStatus('<span style="position:relative;top:10px" class="status_true">Tebrikler bütün çokgenleri doğru şekilde sınıflandırdınız.</span>&emsp;<input type="button" onclick="Interaction.init(Interaction.container);"  class="repeat_button"/>');
	};
Interaction.generateRandomShapes = function(X,Y,WIDTH,HEIGHT){
	Interaction.shapes = [];
	var maxW = WIDTH*0.25;
	var maxH = HEIGHT*0.3;
	Interaction.shapeCount = -1;
	do{///generate shapes randomly
		var x,y,w,h;
		var p = Interaction.findSpace(WIDTH,HEIGHT);
		x = p.x+X, y = p.y+Y;
		Interaction.shapeType = Math.floor(Math.random()*6);
		
		w = maxW*0.7;
		h = maxH*0.7;
		var shape = {};
		var isRegular;
		var edgeNumber;
		
		var NUMBER_OF_SHAPES  = 12;
		Interaction.shapeCount++;
		Interaction.shapeCount = Interaction.shapeCount%NUMBER_OF_SHAPES;
		if(Interaction.shuffledArray == null || Interaction.shuffledArray == undefined)
			Interaction.shuffledArray = Util.getShuffledArray(NUMBER_OF_SHAPES);
		Interaction.shapeType = Interaction.shuffledArray[Interaction.shapeCount];
		
		switch(Interaction.shapeType){
			case 0:
				h = w = Math.min(w,h);
				shape = new Path.Rectangle(new Point(x,y),new Size(w,h));
				edgeNumber = 4;
				break;
			case 1:
				var a,b,c;
				a = b = c = 5;
				shape = new Triangle(a,b,c,x,y,w,h);
				edgeNumber = 3;
				break;
			case 2:
				shape = regularpentagon(new Point(x,y), new Size(w,h));
				edgeNumber = 5;
				break;
			case 3:
				shape = hexagon(new Point(x,y), new Size(w,h));
				edgeNumber = 6;
				break;
			case 4:
				shape = new Path.Rhomboid(new Point(x,y+h*0.1), new Size(w*0.8,h*0.7), w*0.2);
				edgeNumber = 4;
				break;
			case 5:
				shape = new Path.Rhombus(new Point(x,y+h*0.1),new Size(w,h*0.7) );
				edgeNumber = 4;
				break;
			case 6:
				h = w = Math.min(w,h);
				while(h == w || h > maxH)
					h =- Math.floor(Math.random()*3)*30+w+30;
				shape = new Path.Rectangle(new Point(x,y+10),new Size(w,h));
				edgeNumber = 4;
				break;
			case 7:
				var a,b,c;
				c = 5, a = 3, b = 4;				
				shape = new Triangle(a,b,c,x,y,w,h);
				edgeNumber = 3;
				break;
			case 8:
				shape = pentagon(new Point(x,y), new Size(w,h));
				edgeNumber = 5;
				break;
			case 9:
				shape = regularhexagon(new Point(x,y), new Size(w,h));
				edgeNumber = 6;
				break;
			case 10:
				var a,b,c;
				a = b = c = 5;
				a = 6, b = 8;
				shape = new Triangle(a,b,c,x+5,y-15,w,h);
				edgeNumber = 3;
				break;
			case 11:
				var a,b,c;
				a = b = c = 5;
				a = 4, b = 3;
				shape = new Triangle(a,b,c,x,y-15,w,h);
				edgeNumber = 3;
				break

		}
		shape.numberOfEdges = edgeNumber;
		shape.class = "draggable";
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
Interaction.createDropableShape = function(x,y,w,h,text){
//	var shape = new Path.Oval(
//		new Rectangle(
//			new Point(x,y),
//			new Size(w,h)
//		)
//	);
	var shape = new Raster('dropable_default');
	shape.position = new Point(x,y)
	shape.class = "dropableShape";
	var t1 = new PointText(new Point(x+1,y+6));
	t1.set_style(textStyle);
	t1.fillColor = '#2f4f54'
	t1.content = text;
	var t1 = new PointText(new Point(x,y+5));
	t1.set_style(textStyle);
	t1.content = text;
	return shape;
}
Interaction.createDropableShapesLeft = function(X,Y,WIDTH,HEIGHT){	
	var x,y,rx,ry,length;
	w = WIDTH * 0.90;
	h = WIDTH * 0.80;
	x = X + (WIDTH)*0.5;
	y = Y + (HEIGHT-h) * 0.5;
	Interaction.dropableShapes.triangle = Interaction.createDropableShape(x,y,w,h,"Üçgen");
	Interaction.dropableShapes.triangle.numberOfEdges = 3;
	Interaction.dropableShapes.rectangle = Interaction.createDropableShape(x,y+h*1.2,w,h,"Dörtgen");
	Interaction.dropableShapes.rectangle.numberOfEdges = 4;
};

Interaction.createDropableShapesRight = function(X,Y,WIDTH,HEIGHT){	
	var x,y,rx,ry,length;
	length = Math.min(WIDTH,HEIGHT);
	w = length * 0.90;
	h = length * 0.80;
	x = X + (WIDTH)*0.5;
	y = Y + (HEIGHT-h) * 0.5;
	Interaction.dropableShapes.pentagon = Interaction.createDropableShape(x,y,w,h,"Beşgen");
	Interaction.dropableShapes.pentagon.numberOfEdges = 5;
	Interaction.dropableShapes.hexagon = Interaction.createDropableShape(x,y+h*1.2,w,h,"Altıgen");
	Interaction.dropableShapes.hexagon.numberOfEdges = 6;
};

//find left-upper-most empty space to place a shape
Interaction.findSpace = function(w,h){
	var n = Interaction.shapes.length;
	var p = {
			x:Math.floor(n%4)*w*0.25,
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
