function __Styles(){
	planeStyle1 = {
		fillColor: new RgbColor(0.95, 0.78, 0.52, 0.7),
		strokeColor:'#9b763d',
		strokeWidth:1		
	}
	
	planeStyle2 = {
		fillColor: new RgbColor(0.91, 0.62, 0.62, 0.7),
		strokeColor:'#9c4f4f',
		strokeWidth:1		
	}
	
	planeStyle = {
		fillColor:new RgbColor(0.75,0.91,0.94,0.5),
		strokeColor:'#255b63',
		strokeWidth:1
	}
	planeSelectedStyle = {
		fillColor:new RgbColor(0.15,0.36,0.39,0.7)
	}
	clickableAreaStyle = {
		fillColor:new RgbColor(1,1,0.6,1),
		strokeColor:'#255b63',
		strokeWidth:1
	}
	typeDivCss = {
		position:'absolute',
		color:'#c90',
		border:'2px solid #c90',
		backgroundColor:'#900',
		width:'140px',
		height:'50px',
		top:'40px',
		right:'100px',
		fontWeight:'bold',
		lineHeight:'46px',
		textAlign:'center',
		boxSizing:'border-box'
	}
	notExistDivCss = {
		position:'absolute',
		color:'#cfc',
		border:'2px outset #afa',
		backgroundColor:'#363',
		width:'70px',
		height:'50px',
		top:'40px',
		right:'10px',
		lineHeight:'46px',
		textAlign:'center',
		borderRadius:'25px',
		boxSizing:'border-box'
	}
	notExistDivSelectedCss = {
		toString:function(){
			return  'background-color:#030 !important; '+
					/*'font-weight:bold !important;'+*/
					'border:2px inset #afa !important;';
		}
	}
}

var Animation = {
	init:function(container){
			Animation.container = container;
			
			$(container).append("<div id='parallel'>Paralel Düzlemler</div>");
			$(container).append("<div id='intersecting'>Kesişen Düzlemler</div>");
			
			$('#parallel').css({
				fontSize: 22,
				position: 'absolute',
				textAlign: 'center',
				width: 200,
				top: 90,
				left: 500,
				opacity: 0
			})
			
			$('#intersecting').css({
				fontSize: 22,
				position: 'absolute',
				textAlign: 'center',
				width: 200,				
				top: 90,
				left: 500,
				opacity: 0
			})
			
			
			var animationHelper = new AnimationHelper({
				x: -75,
				y: 90,
				width: 50,
				length: 25,
				height: 20,
				x2: -100,
				y2: 90,
				rotation: 0,
				offsetY: 0
			})
			
			var matrix;
			var surface1 = new Surface([
				new Point3(-animationHelper.width, -animationHelper.height, -animationHelper.length),
				new Point3( animationHelper.width, -animationHelper.height, -animationHelper.length),
				new Point3( animationHelper.width, -animationHelper.height,  animationHelper.length),
				new Point3(-animationHelper.width, -animationHelper.height,  animationHelper.length)
			]);
			
			var surface2;
			
			
			animationHelper.animate({
				style: {
					x: 312,
					y: 90
				},
				duration: 2000,
				delay: 1000,
				animationType: 'easeInEaseOut',
				update: function () {
					matrix = Util.createProjectionMatrixForObjectAt(this.x, this.y);
					
					var path = surface1.project(matrix);
					path.set_style(planeStyle1);
				}
			})
		
			
			animationHelper.animate({
				style: {
					width: 100,
					length: 50
				},
				duration: 1000,
				delay: 3000,
				animationType: 'easeInEaseOut',
				update: function () {
					surface1.points = [
						new Point3(-animationHelper.width, -animationHelper.height, -animationHelper.length),
						new Point3( animationHelper.width, -animationHelper.height, -animationHelper.length),
						new Point3( animationHelper.width, -animationHelper.height,  animationHelper.length),
						new Point3(-animationHelper.width, -animationHelper.height,  animationHelper.length)
					];
					
					var path = surface1.project(matrix);
					path.set_style(planeStyle1);
				}
			})
			
			animationHelper.animate({
				style: {
					rotation: Math.PI*2
				},
				duration: 3000,
				delay: 5000,
				animationType: 'easeInEaseOut',
				init: function() {
					surface1.pivotsX[0] = new Point3(0, -animationHelper.height, 0);
				},
				update: function() {
					surface1.rotationsX[0] = this.rotation;
					
					var path = surface1.project(matrix);
					path.set_style(planeStyle1);
				}
			})
			
			animationHelper.animate({
				style: {
					x2: 312,
					y2: 90
				},
				duration: 2000,
				delay: 9000,
				animationType: 'easeInEaseOut',
				init: function() {
					$("#parallel").animate({
						opacity: 1
					}, 1000)
					
					surface2 = new Surface([
						new Point3(-animationHelper.width, animationHelper.height, -animationHelper.length),
						new Point3( animationHelper.width, animationHelper.height, -animationHelper.length),
						new Point3( animationHelper.width, animationHelper.height,  animationHelper.length),
						new Point3(-animationHelper.width, animationHelper.height,  animationHelper.length)
					]);
				},
				update: function() {
					var matrix2 = Util.createProjectionMatrixForObjectAt(this.x2, this.y2);
					
					var path = surface2.project(matrix2);
					path.set_style(planeStyle2);
				}
			})
			
			animationHelper.animate({
				style: {
					rotation: Math.PI*3.5
				},
				duration: 3000,
				delay: 11000,
				animationType: 'easeInEaseOut',
				init: function() {
					surface1.pivotsX[0] = new Point3(0, 0, 0);
					surface2.pivotsX[0] = new Point3(0, 0, 0);
				},
				update: function() {
					surface1.rotationsX[0] = this.rotation;
					surface2.rotationsX[0] = this.rotation;
					
					var path1 = surface1.project(matrix);
					path1.set_style(planeStyle1);
					
					var path2 = surface2.project(matrix);
					path2.set_style(planeStyle2);
				}
			})
			
			animationHelper.animate({
				style: {
					rotation: Math.PI*4
				},
				duration: 1000,
				delay: 15000,
				animationType: 'easeInEaseOut',
				init: function() {
				
					$("#parallel").animate({
						opacity: 0
					}, 1000);


					surface1.pivotsX[0] = new Point3(0, 0, 0);
					surface2.pivotsX[0] = new Point3(0, 0, 0);
				},
				update: function() {
					surface1.rotationsX[0] = this.rotation;
					surface2.rotationsX[0] = this.rotation;
					
					var path1 = surface1.project(matrix);
					path1.set_style(planeStyle1);
					
					var path2 = surface2.project(matrix);
					path2.set_style(planeStyle2);
				}
			})
			
			animationHelper.animate({
				style: {
					rotation: Math.PI*3.5,
					offsetY: 30
				},
				duration: 1000,
				delay: 17000,
				animationType: 'easeInEaseOut',
				init: function() {
					$("#intersecting").animate({
						opacity: 1
					}, 1000);
				},
				update: function() {
					surface1.pivotsX[0] = new Point3(0, this.offsetY, animationHelper.length - animationHelper.height);
					
					surface1.rotationsX[0] = this.rotation;
					
					surface1.points = [
						new Point3(-animationHelper.width, -animationHelper.height + this.offsetY, -animationHelper.length),
						new Point3( animationHelper.width, -animationHelper.height + this.offsetY, -animationHelper.length),
						new Point3( animationHelper.width, -animationHelper.height + this.offsetY,  animationHelper.length),
						new Point3(-animationHelper.width, -animationHelper.height + this.offsetY,  animationHelper.length)
					];
					
					surface2.points = [
						new Point3(-animationHelper.width, animationHelper.height + this.offsetY, -animationHelper.length),
						new Point3( animationHelper.width, animationHelper.height + this.offsetY, -animationHelper.length),
						new Point3( animationHelper.width, animationHelper.height + this.offsetY,  animationHelper.length),
						new Point3(-animationHelper.width, animationHelper.height + this.offsetY,  animationHelper.length)
					];										
					
					var path1 = surface1.project(matrix);
					path1.set_style(planeStyle1);
					
					var path2 = surface2.project(matrix);
					path2.set_style(planeStyle2);
				},
				callback: Main.animationFinished
			})
		}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	_types:{
			PARALLEL:'Paralel Düzlemler',
			INTERSECTING:'Kesişen Düzlemler'
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki geometrik cisimlerin istenen paralel ya da kesişen düzlem ikilisine fare ile tıklayarak gösteriniz. Olmayanlar için “Yok” düğmesine tıklayınız.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			Interaction.appendStatus({
				bottom:'30px',
				right:'40px',
				textAlign:'right',
				lineHeight:'20px'
			});
			Interaction.appendButton({
				bottom:'70px',
				right:'40px'
			});
			Interaction.typeDiv = document.createElement('div');
			$(container).append(Interaction.typeDiv);
			$(Interaction.typeDiv)
				.attr('id','typeDiv')
				.css(typeDivCss)
			
			Interaction.notExistDiv = document.createElement('div');
			$(container).append(Interaction.notExistDiv);
			$(Interaction.notExistDiv)
				.attr({
					'id':'notExistDiv',
					'__selected':'false'
					})
				.css(notExistDivCss)
				.html('Yok')
				.click(function(){
						if($(this).attr('__selected') == 'false'){
							$(this).attr('__selected','true');
							$(this).addClass('selected');
							Interaction.deselectPlanes();
						}
						else{
							$(this).attr('__selected','false');
							$(this).removeClass('selected');
						}
					});
			Interaction.notExistDiv.deselect = function(){
				$(Interaction.notExistDiv).attr('__selected','false');
				$(Interaction.notExistDiv).removeClass('selected');
			}
			Interaction.notExistDiv.isSelected = function(){
				return $(Interaction.notExistDiv).attr('__selected') == 'true' ? true : false;
			}
			$(container).append('<style>#notExistDiv.selected { '+notExistDivSelectedCss.toString()+' }</style>')
			Interaction.setRandomGenerator(8);
			Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){
			Interaction.createTool();
			Main.interactionProject.activeLayer.removeChildren()
			Interaction.notExistDiv.deselect();
			Interaction.qType = Util.rand01()==0?Interaction._types.INTERSECTING:Interaction._types.PARALLEL;
			$(Interaction.typeDiv).html(Interaction.qType);
			/*<[[TestCode*/
				//randomNumber = 7; 
			/*TestCode]]>*/
			Interaction.shapeType = randomNumber;
			switch(randomNumber){
				case 0://cube					
					var rPrism = new RectangularPrisim(new Point(150,150),100,100,100);
					Interaction.shape = rPrism.draw();
					break;
				case 1://square prisim
					var rPrism = new RectangularPrisim(new Point(150,150),75,150,75);
					Interaction.shape = rPrism.draw();
					break;
				case 2://rectangular prisim
					var rPrism = new RectangularPrisim(new Point(150,150),125,75,150);
					Interaction.shape = rPrism.draw();
					break;
				case 3://triangle prisim
					var tPrism = new TrianglePrisim(new Point(150,150),100,100,100);
					Interaction.shape = tPrism.draw();
					break;
				case 5://pyramid
					var pyramid = new Pyramid(new Point(150,125),150,150,150);
					Interaction.shape = pyramid.draw();
					break;
				case 4://cylinder
					var cylinder = new Cylinder(new Point(150,125),150,150,150);
					Interaction.shape = cylinder.draw();
					break;
				case 6://cone
					var cone = new Cone(new Point(150,125),150,150,150);
					Interaction.shape = cone.draw();
					break;
				case 7://sphere
					var sphere = new Path.Sphere(new Point(150,125),100).set_style(planeStyle);
					break;
			}
			
		},
	preCheck : function(){
			if(!Interaction.notExistDiv.isSelected() && (Interaction.getSelectedPlanes().length < 2 && Interaction.shapeType != 6 || Interaction.shapeType == 6/*cone*/ &&Interaction.getSelectedPlanes().length < 1 ) ){
				Interaction.setStatus('Lütfen bir cevap belirtiniz.','alert');
				return false;
			}
			else
				return true;
		},
	isAnswerCorrect : function(value){
			switch(Interaction.shapeType){
				case 0://cube
				case 1://square prisim
				case 2://rectangular prisim
				case 3://triangle prisim
					if(Interaction.notExistDiv.isSelected())
						return false;
					var planes = Interaction.getSelectedPlanes();
					if(Interaction.qType == Interaction._types.INTERSECTING)
						return !planes[0].isParallelTo(planes[1]);
					if(Interaction.qType == Interaction._types.PARALLEL)
						return planes[0].isParallelTo(planes[1]);
					break;
				case 5://pyramid
					if( Interaction.qType == Interaction._types.PARALLEL &&
						Interaction.notExistDiv.isSelected()
					)
						return true;
					if(Interaction.qType == Interaction._types.INTERSECTING &&
							!Interaction.notExistDiv.isSelected()
					)
						return true;
					return false;
					break;
				case 4://cylinder
					if( Interaction.qType == Interaction._types.PARALLEL &&
						!Interaction.notExistDiv.isSelected()
					)
						return true;
					
					if( Interaction.qType == Interaction._types.INTERSECTING &&
						Interaction.notExistDiv.isSelected()
					)
						return true;
					return false;
				case 6://cone
				case 7://sphere
					if(!Interaction.notExistDiv.isSelected())
						return false;
					return true;
					break;
						
			}
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
			Interaction.pause = true;
			Interaction.deselectPlanes();
			var pairs = [];
			switch(Interaction.shapeType){
				case 0://cube
				case 1://square prisim
				case 2://rectangular prisim
				case 3://triangle prisim
					if(Interaction.qType == Interaction._types.INTERSECTING){
						Interaction.setStatus('Yanlış cevap. Kesişen düzlemler var. <br/> Kesişen düzlemlerin bazılarını şeklin üzerinde görebilirsiniz.',false);
						pairs = Interaction.getIntersectingPlanePairs();
					}
					if(Interaction.qType == Interaction._types.PARALLEL){
						Interaction.setStatus('Yanlış cevap. Paralel düzlemler var. <br/> Paralel düzlemleri şeklin üzerinde görebilirsiniz.',false);
						pairs = Interaction.getParellelPlanePairs();
					}
					break;
				case 5://pyramid
					if(Interaction.qType == Interaction._types.PARALLEL){
						Interaction.setStatus('Yanlış cevap. Paralel düzlemler yok.',false);
					}
					if(Interaction.qType == Interaction._types.INTERSECTING){
						Interaction.setStatus('Yanlış cevap. Kesişen düzlemler var. <br/> Kesişen düzlemleri şeklin üzerinde görebilirsiniz.',false);
						pairs = Interaction.getIntersectingPlanePairs();
					}
					break;
				case 4://cylinder
					if(Interaction.qType == Interaction._types.INTERSECTING){
						Interaction.setStatus('Yanlış cevap. Kesişen düzlemler yok.',false);
					}
					if(Interaction.qType == Interaction._types.PARALLEL){
						Interaction.setStatus('Yanlış cevap. Paralel düzlemler var. <br/> Paralel düzlemleri şeklin üzerinde görebilirsiniz.',false);
						pairs = Interaction.getParellelPlanePairs();
					}
					break;
				case 6://cone
				case 7://sphere
					if(Interaction.qType == Interaction._types.PARALLEL){
						Interaction.setStatus('Yanlış cevap. Paralel düzlemler yok.',false);
					}
					if(Interaction.qType == Interaction._types.INTERSECTING){
						Interaction.setStatus('Yanlış cevap. Kesişen düzlemler yok.',false);
					}
					break;
						
			}
			
			
			$(pairs).each(function(index, element) {
                $(this).each(function() {
                	this.shape.animate({
						style:{fillColor:planeSelectedStyle.fillColor},
						duration:500,
						delay:2000*(index+1),
						animationType:'easeOut',
						callback:function(){
							this.animate({
								style:{fillColor:planeStyle.fillColor},
								duration:500,
								animationType:'easeIn',
								delay:700
							})
						}
					});    
                });
            });
			if(pairs.length > 0)
				setTimeout('Interaction.pause = false',2000+pairs.length*2000);
			else
				Interaction.pause = false;
			
		},
	getParellelPlanePairs:function(){
			return Interaction.getPlanePairs('parallel');
		},
	getIntersectingPlanePairs:function(){
			return Interaction.getPlanePairs('intersecting');
		},
	getPlanePairs : function(type){
			if(type != 'parallel' && type != 'intersecting')
				throw 'getPlanePairs: please specify type. type can only be "parallel" or "intersecting"';
			var planes = [];
			function _recursive(node){
				if(node.class == 'Plane'){
					planes.push({plane:node.plane,hasPartner:false});
				}
				else{
					$(node.children).each(function(index, element) {
                    	_recursive(this);   
                    });
				}
			}
			_recursive(Main.interactionProject.activeLayer);
			
			var planePairs = [];
			for(var i=0; i<planes.length;i++)
				for(var j=0; j<planes.length;j++){
					if(i==j || planes[i].hasPartner == true || planes[j].hasPartner == true)
						continue;
					if( type == 'parallel' 	 && planes[i].plane.isParallelTo(planes[j].plane) ||
						type == 'intersecting' && !planes[i].plane.isParallelTo(planes[j].plane)
					){
						planes[i].hasPartner = true;
						planes[j].hasPartner = true;
						planePairs.push([
							planes[i].plane,
							planes[j].plane
						]);
						
					}
				}
			return planePairs;
		},
	getSelectedPlanes : function(){
			var resultArray = [];
			function _recursive(node){
				if(node.class == 'ClickableArea' && node.plane.plane.isSelected()){
					resultArray.push(node.plane.plane);
				}
				else{
					$(node.children).each(function(index, element) {
                    	_recursive(this);   
                    });
				}
			}
			_recursive(Main.interactionProject.activeLayer);
			return resultArray;
		},
	deselectPlanes : function(){
			Interaction.tool.count = 0;
			function _recursive(node){
				if(node.class == 'ClickableArea'){
					node.plane.set_style(planeStyle);
					node.plane.plane.isPlaneSelected = false;
				}
				else{
					$(node.children).each(function(index, element) {
                    	_recursive(this);   
                    });
				}
			}
			_recursive(Main.interactionProject.activeLayer);
		},
	createTool : function(){
			Interaction.tool = new Tool();
			Interaction.tool.count = 0;
			Interaction.tool.onMouseDown = function(event){
				var item = null;
				$(Main.interactionProject.activeLayer.getItemsByClass('ClickableArea')).each(function(index, element) {
                    if(this.bounds.contains(event.point))
						item = this;
                });
				if(item != null && item.plane != undefined){
					if(item.plane.plane.isSelected() == false){
						if(this.count < 2){
							item.plane.plane.select();
							this.count++;
							Interaction.notExistDiv.deselect();
						}
					}
					else{
						item.plane.plane.deselect()
						this.count--;
					}
				} 
			}
			Interaction.tool.activate();
		}
}

var ClickableArea = Class.extend({
	init:function(plane){
			this.plane = plane;
			this.matrix = this.plane.matrix;
			console.log("I'm here");
		},	
	setParent : function(parent){
			this.parent = parent;
			this.matrix = this.parent.matrix;
			return this;
		},
	draw : function(){
			var shape = new Path();
			var c = projectPoint(this.plane.centerPoint,this.matrix);
			for(var i=0;i<=this.plane.points.length;i++){
				var p = projectPoint(this.plane.points[i%this.plane.points.length],this.matrix);
				var _p = c.findPointTo(p,20,true) 
				shape.add(Math.floor(_p.x)+0.5,Math.floor(_p.y)+0.5);
			}
			shape.closed = true;
			shape.class = "ClickableArea";
			shape.set_style(clickableAreaStyle);
			this.shape = shape;
			return shape;
		}
});

var CircularClickableArea = ClickableArea.extend({
	init:function(plane){
			this._super(plane);
		},
	draw : function(){
			var shape = new Path();
			var c = Util.centerOfPoints(this.plane.shape.points);
			var points = [];
			$(this.plane.shape.points).each(function(index, element) {
                var p = c.findPointTo(this,20,true) 
				points.push(p);
            });
			shape.add(points[0]);
			shape.cubicCurveTo(points[1],points[2],points[3])
			shape.add(points[3]);
			shape.cubicCurveTo(points[4],points[5],points[0])
			shape.points = points;
			shape.extremePoints = [];
			shape.closed = true;
			shape.class = "ClickableArea";
			shape.set_style(clickableAreaStyle);
			shape.insertAbove(this.plane.shape);
			this.shape = shape;
			return shape;
		}
});

function RectangularPrisim(p,a,b,c){
	this.centerPoint = p;
	var x = p.x, y = p.y, z = a*5;
	p = [];
	p[0] = new Point3(-a*0.5,-b*0.5,+c*0.5);
	p[1] = new Point3(-a*0.5,+b*0.5,+c*0.5);
	p[2] = new Point3(+a*0.5,+b*0.5,+c*0.5);
	p[3] = new Point3(+a*0.5,-b*0.5,+c*0.5);
	p[4] = new Point3(-a*0.5,-b*0.5,-c*0.5);
	p[5] = new Point3(-a*0.5,+b*0.5,-c*0.5);
	p[6] = new Point3(+a*0.5,+b*0.5,-c*0.5);
	p[7] = new Point3(+a*0.5,-b*0.5,-c*0.5);
	/*
	*	generate planes here
	*/
	this.matrix = Util.createProjectionMatrixForObjectAt(x,y);
	//console.log(this.matrix);
	this.planes = [];
	//front
	this.planes.push(new Plane([p[0],p[1],p[2],p[3]]).setParent(this));
	//back
	this.planes.push(new Plane([p[4],p[5],p[6],p[7]]).setParent(this));
	//left
	this.planes.push(new Plane([p[0],p[1],p[5],p[4]]).setParent(this));
	//right
	this.planes.push(new Plane([p[3],p[2],p[6],p[7]]).setParent(this));
	//top
	this.planes.push(new Plane([p[0],p[3],p[7],p[4]]).setParent(this));
	//bottom
	this.planes.push(new Plane([p[1],p[2],p[6],p[5]]).setParent(this));

	$(this.planes).each(function(index, element) {
        this.set_style(planeStyle)
    });
	/*<[[TestCode*/
	//	this.planes[2].set_style({fillColor:new RgbColor(0.5,1,1,0.5)});
	/*TestCode]]>*/
	this.draw = function(){
		var shape = [];
		this.planes.sort(Plane.compare);
		for(var i=0;i<this.planes.length;i++){
			shape.push(this.planes[i].draw())
		}
		shape.class = "RectangularPrisim";
		return shape;
	}
}

function TrianglePrisim(p,a,b,c){
	this.centerPoint = p;
	var x = p.x, y = p.y, z = a*5;
	p = [];
	p[0] = new Point3(-a*0.5,-b*0.5,+c*0);
	p[3] = new Point3(+a*0.5,-b*0.5,+c*0.5);
	p[4] = new Point3(+a*0.5,-b*0.5,-c*0.5);
	
	p[1] = new Point3(-a*0.5,+b*0.5,+c*0);
	p[2] = new Point3(+a*0.5,+b*0.5,+c*0.5);
	p[5] = new Point3(+a*0.5,+b*0.5,-c*0.5);
	
	this.matrix = Util.createProjectionMatrixForObjectAt(x,y);
	//console.log(this.matrix);
	this.planes = [];
	//front
	//this.planes.push(new Plane([p[0],p[1],p[2],p[3]]).setParent(this));
	//back
	this.planes.push(new Plane([p[0],p[1],p[2],p[3]]).setParent(this));
	//left
	this.planes.push(new Plane([p[5],p[4],p[0],p[1]]).setParent(this));
	//right
	this.planes.push(new Plane([p[2],p[3],p[4],p[5]]).setParent(this));
	//top
	this.planes.push(new Plane([p[1],p[2],p[5]]).setParent(this));
	//bottom
	this.planes.push(new Plane([p[0],p[3],p[4]]).setParent(this));

	$(this.planes).each(function(index, element) {
        this.set_style(planeStyle)
    });
	/*<[[TestCode*/
	//	this.planes[2].set_style({fillColor:new RgbColor(0.5,1,1,0.5)});
	/*TestCode]]>*/
	this.draw = function(){
		var shape = [];
		this.planes.sort(Plane.compare);
		for(var i=0;i<this.planes.length;i++){
			shape.push(this.planes[i].draw())
		}
		shape.class = "RectangularPrisim";
		return shape;
	}
}

function Pyramid(p,a,b,c){
	this.centerPoint = p;
	var x = p.x, y = p.y, z = a*5;
	p = [];
	
	
	
	p[0] = new Point3(-a*0,-b*0.5,+c*0);
	p[1] = new Point3(-a*0.4,+b*0.5,+c*0.5);
	p[2] = new Point3(+a*0.6,+b*0.5,+c*0.5);
	p[5] = new Point3(+a*0.5,+b*0.5,-c*0.5)
	p[6] = new Point3(-a*0.5,+b*0.5,-c*0.5);
	
	this.matrix = Util.createProjectionMatrixForObjectAt(x,y);
	//console.log(this.matrix);
	this.planes = [];
	//front
	this.planes.push(new Plane([p[0],p[1],p[2]]).setParent(this));
	//back
	this.planes.push(new Plane([p[0],p[2],p[5]]).setParent(this));
	//left
	this.planes.push(new Plane([p[0],p[5],p[6]]).setParent(this));
	//right
	this.planes.push(new Plane([p[0],p[6],p[1]]).setParent(this));
	//bottom
	this.planes.push(new Plane([p[1],p[2],p[5],p[6]]).setParent(this));

	$(this.planes).each(function(index, element) {
        this.set_style(planeStyle)
    });
	/*<[[TestCode*/
	//	this.planes[2].set_style({fillColor:new RgbColor(0.5,1,1,0.5)});
	/*TestCode]]>*/
	this.draw = function(){
		var shape = [];
		this.planes.sort(Plane.compare);
		for(var i=0;i<this.planes.length;i++){
			shape.push(this.planes[i].draw())
		}
		shape.class = "RectangularPrisim";
		return shape;
	}
}

function Cylinder(p,a,b){
	this.centerPoint = p;
	var x = p.x, y = p.y, z = a*5;
	p = [];
	this.matrix = Util.createProjectionMatrixForObjectAt(x,y);
	/*this.matrix = [
						1, 0, 0, 150,
						0, 0, 1, 150,			
						0, 0, 0, 1,
						0, 0, 0, 1,		
					]*/
	this.planes = [];
	this.planes.push(new CircularPlane([new Point3(0,b*0.5,0)],a*0.5).setParent(this));
	this.planes.push(new CircularPlane([new Point3(0,-b*0.5,0)],a*0.5).setParent(this));

	$(this.planes).each(function(index, element) {
        this.set_style(planeStyle)
    });
	this.draw = function(){
		var shape = [];
		this.planes.sort(Plane.compare);
		for(var i=0;i<this.planes.length;i++){
			shape.push(this.planes[i].draw())
		}
		
		var backSide = new Path();
		backSide.add(shape[1].points[3]);
		backSide.cubicCurveTo(
			shape[1].points[4],
			shape[1].points[5],
			shape[1].points[0]
		);
		backSide.add(shape[1].extremePoints[1]);
		backSide.add(shape[0].extremePoints[1]);
		backSide.add(shape[0].points[0]);
		backSide.cubicCurveTo(
			shape[0].points[5],
			shape[0].points[4],
			shape[0].points[3]
		);
		backSide.add(shape[0].extremePoints[0]);
		backSide.add(shape[1].extremePoints[0]);
		backSide.closed = true;
		backSide.set_style(planeStyle);
		var frontSide = new Path();
		frontSide.add(shape[1].points[3]);
		frontSide.cubicCurveTo(
			shape[1].points[2],
			shape[1].points[1],
			shape[1].points[0]
		);
		frontSide.add(shape[1].extremePoints[1]);
		frontSide.add(shape[0].extremePoints[1]);
		frontSide.add(shape[0].points[0]);
		frontSide.cubicCurveTo(
			shape[0].points[1],
			shape[0].points[2],
			shape[0].points[3]
		);
		frontSide.add(shape[0].extremePoints[0]);
		frontSide.add(shape[1].extremePoints[0]);
		frontSide.closed = true;
		backSide.insertBelow(shape[0]);
		shape[1].insertAbove(frontSide);
		frontSide.set_style(planeStyle);
		shape[1].remove();
		shape[1] = this.planes[1].draw();
		return shape;
	}
}

function Cone(p,a,b){
	this.centerPoint = p;
	this.topPoint = new Point3(0,-b*0.5,0);
	var x = p.x, y = p.y, z = a*5;
	p = [];
	this.matrix = Util.createProjectionMatrixForObjectAt(x,y);
	this.planes = [];
	this.planes.push(new CircularPlane([new Point3(0,b*0.5,0)],a*0.5).setParent(this));

	$(this.planes).each(function(index, element) {
        this.set_style(planeStyle)
    });
	this.draw = function(){
		var shape = [];
		var topPoint = projectPoint(this.topPoint,this.matrix)
		this.planes.sort(Plane.compare);
		for(var i=0;i<this.planes.length;i++){
			shape.push(this.planes[i].draw())
		}
		var frontSide = new Path();
		frontSide.add(topPoint);
		frontSide.add(shape[0].extremePoints[1]);
		frontSide.add(shape[0].points[0]);
		frontSide.cubicCurveTo(
			shape[0].points[1],
			shape[0].points[2],
			shape[0].points[3]
		);
		frontSide.add(shape[0].extremePoints[0]);
		frontSide.closed = true;
		frontSide.set_style(planeStyle);
		return shape;
	}
}

function projectPoint(p,matrix){
	//var x,y;
	if(p == undefined)
		throw 'p is not defined';
	if(matrix == undefined)
		throw 'matrix is not defined';
	return Util.project([p.x,p.y,p.z], matrix);
}


var Plane = Class.extend({
	init : function(points){
		this.points = points;
		this.centerPoint = Util.centerOfPoint3s(this.points);
		this.clickableArea = new ClickableArea(this);
		this.isPlaneSelected = false;
	},
	setParent : function(parent){
		this.parent = parent;
		this.matrix = this.parent.matrix;
		this.clickableArea.setParent(this);
		return this;
	},
	isParallelTo : function(other){
		var n1 = this.getNormal();
		var n2 = other.getNormal();
		var d1 = n1.dot(n2);
		var d2 = n1.dot(n2);
		if(d1 == 1 || d2== -1)
			return true;
		else
			return false;
	},
	getNormal : function(){
		var p1 = this.points[1].subtract(this.points[0]);
		var p2 = this.points[2].subtract(this.points[0]);
		var c = p1.cross(p2);
		return c.normalize();
	},
	isSelected : function(){
		return this.isPlaneSelected;
	},
	select : function(time){
		if(!time)
			time = 0;
		Interaction.pause = true;
		this.shape.animate({
			style:{fillColor:planeSelectedStyle.fillColor},
			duration:time,
			callback:function(){
				this.plane.isPlaneSelected = true;
				Interaction.pause = false;
			}
		});			
	},
	deselect : function(time){
		if(!time)
			time = 0;
		Interaction.pause = true;
		this.shape.animate({
			style:{fillColor:planeStyle.fillColor},
			duration:time,
			callback:function(){
				this.plane.isPlaneSelected = false;
				Interaction.pause = false;
			}
		});			
	},
	set_style : function(style){
		this.style = style;
	},
	draw : function(){
		var shape = new Path();
		for(var i=0;i<this.points.length;i++){
			shape.add(projectPoint(this.points[i],this.matrix));
		}
		shape.closed = true;
		if(this.style)
			shape.set_style(this.style);
		shape.class = "Plane";
		shape.isPlaneSelected = false;
		shape.plane = this;
		shape.clickableArea = this.clickableArea.draw();
		shape.clickableArea.plane = shape;
		this.shape = shape;
		return shape;
	}
});
var CircularPlane = Plane.extend({
	init:function(points,radius){
		this._super(points);
		this.point = points[0];
		this.radius = radius;
		this.clickableArea = new CircularClickableArea(this);
	},
	draw : function(){
		var shape = new Path();
		var points = [];// 2d points
		this.points = [];//3d points
		var rotatingPoint = this.point.add(new Point3(this.radius,0,0));
		for(var i=0;i<6;i++){
			var p = rotatingPoint.getRotatedPointByY(Math.PI*2*i/6,this.point)
			this.points.push(p);
			points.push(p);
		}
		var x = 0;
		var z = 2.4*75*0.55228;
		points[2] = points[3].add(new Point3(x,0,-z));
		points[4] = points[3].add(new Point3(x,0, z));
		points[1] = points[0].add(new Point3(-x,0,-z));
		points[5] = points[0].add(new Point3(-x,0, z));
		var matrix = this.matrix;
		var matrix = Util.createProjectionMatrixForObjectAt(150,150,1500);
		$(points).each(function(index, element) {
            var p = projectPoint(this,matrix)
			points[index] = p;
        });
		
		shape.add(points[0]);
		shape.cubicCurveTo(points[1],points[2],points[3])
		shape.add(points[3]);
		shape.cubicCurveTo(points[4],points[5],points[0])
		shape.points = points;
		shape.extremePoints = [];
		for(var i=0; i < 1000;i++){
			var p = new Point(shape.bounds.x,shape.bounds.y+i);
			if(shape.hitTest(p,{stroke:true,tolerance:0})){
				shape.extremePoints.push(p);
				break;
			}
		}
		for(var i=0; i < 1000;i++){
			var p = new Point(shape.bounds.x+shape.bounds.width,shape.bounds.y+i);
			if(shape.hitTest(p,{stroke:true,tolerance:0})){
				shape.extremePoints.push(p);
				break;
			}
		}
			
		shape.closed = true;
		if(this.style)
			shape.set_style(this.style);
		shape.class = "Plane";
		shape.isPlaneSelected = false;
		shape.plane = this;
		this.shape = shape;
		shape.clickableArea = this.clickableArea.draw();
		shape.clickableArea.plane = shape;
		this.shape = shape;
		return shape;
	}
});

Plane.compare = function(p1,p2){
	var a = p1.centerPoint;
	var b = p2.centerPoint;
	if(a.z > b.z)
		return -1;
	if(a.z < b.z)
		return 1;
	if(a.y < b.y)
		return 1;
	if(a.y > b.y)
		return -1;
	if(a.x > b.x)
		return 1
	if(a.x < b.x)
		return -1;
	return 0;
}