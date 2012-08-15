var cubeStyle = {
	strokeColor:'#255b63',
	strokeWidth:1,
	fillColor:'#bfe8ef'
};
var animationCubeStyle = {
	strokeColor:'#333',
	strokeWidth:1,
	fillColor:'#ddd'
}
var Animation = {
	pathInit:function(){
			Path.Cube3d = function(p,a,xAngle,yAngle,zAngle){
				yAngle = yAngle%90 - 45;
				if(zAngle == undefined)
					zAngle =0;
				function calculateRotation(p,o,angle){
					return p.getRotatedPoint(angle,o)
						.subtract(o)
						.multiply(1,Math.sin(Util.degreeToRadian(xAngle)))
						.add(o);
				}
				var p1,p2,p3,p4,p5,p6,p7;
				var poBottom,poTop,poCenter;
				var a_2_ = a*Math.sqrt(2);
				p1 = p.add(0,a_2_*0.5);
				p2 = p.add(0,a_2_*0.5+a*Math.cos(Util.degreeToRadian(xAngle)));
				p3 = p.add(a*Math.sqrt(2)*0.5,a*Math.cos(Util.degreeToRadian(xAngle))+a_2_);
				p4 = p.add(a*Math.sqrt(2),a*Math.cos(Util.degreeToRadian(xAngle))+a_2_*0.5);
				p5 = p.add(a*Math.sqrt(2),a_2_*0.5);
				p6 = p.add(a*Math.sqrt(2)*0.5,0);
				p7 = p.add(a*Math.sqrt(2)*0.5,a_2_);
				
				poBottom = Util.centerOfPoints([p2,p4]);
				poTop = Util.centerOfPoints([p1,p5]);
				poCenter = Util.centerOfPoints([p1,p2,p3,p4,p5,p6]);
				poBottom = poBottom.getRotatedPoint(zAngle,poCenter); 
				poTop = poTop.getRotatedPoint(zAngle,poCenter);
				p1 = calculateRotation(p1,poTop,yAngle).getRotatedPoint(zAngle,poCenter);
				p5 = calculateRotation(p5,poTop,yAngle).getRotatedPoint(zAngle,poCenter);
				p6 = calculateRotation(p6,poTop,yAngle).getRotatedPoint(zAngle,poCenter);
				p7 = calculateRotation(p7,poTop,yAngle).getRotatedPoint(zAngle,poCenter);
				p2 = calculateRotation(p2,poBottom,yAngle).getRotatedPoint(zAngle,poCenter);
				p3 = calculateRotation(p3,poBottom,yAngle).getRotatedPoint(zAngle,poCenter);
				p4 = calculateRotation(p4,poBottom,yAngle).getRotatedPoint(zAngle,poCenter);
				//rotate top points;
				var vertexArray = [];
				vertexArray.push(p1);
				vertexArray.push(p2);
				vertexArray.push(p3);
				vertexArray.push(p4);
				vertexArray.push(p5);
				vertexArray.push(p6);
				//var centerPoint = Util.centerOfPoints(vertexArray);
				var cube = new Group();
				var outline = new Path();
				for(var i=0;i<vertexArray.length;i++){
					outline.add(vertexArray[i]);
				}
				outline.closed = true;
				cube.addChild(outline);
				cube.addChild(new Path.Line(p1,p7));
				cube.addChild(new Path.Line(p5,p7));
				cube.addChild(new Path.Line(p3,p7));
				return cube;
			}
		},
	init:function(container){
			Animation.pathInit();
			Animation.container = container;
			Animation.angle = 0;
			var p = new Point(340,30);
			Animation.a = 50;
			var animHelp = new AnimationHelper({
				yAngle:0,
				zAngle:0,
				xAngle:0
			});
			animHelp.animate({
				style:{yAngle:585,zAngle:0,xAngle:30},
				duration:3000,
				animationType:'easeInEaseOut',
				update:function(){
					if(Animation.cube1)
						Animation.cube1.remove();	
					Animation.cube1 = new Path.Cube3d(p,Animation.a,this.xAngle,this.yAngle,this.zAngle);
					Animation.cube1.set_style(animationCubeStyle);
				}
			});
			animHelp = new AnimationHelper({
				yAngle:0,
				zAngle:0,
				xAngle:0,
				position:p.add(520,-120)
			});
			animHelp.animate({
				style:{yAngle:585,zAngle:0,xAngle:30,position:p.add(Animation.a*Math.sqrt(2)*0.5,Animation.a*Math.sqrt(2)*0.5*Math.sin(Util.degreeToRadian(30)))},
				duration:3000,
				delay:3000,
				animationType:'easeInEaseOut',
				update:function(){
					if(Animation.cube2)
						Animation.cube2.remove();
					Animation.cube2 = new Path.Cube3d(this.position,Animation.a,this.xAngle,this.yAngle,this.zAngle);
					Animation.cube2.set_style(animationCubeStyle);
				}
			});
			animHelp = new AnimationHelper({
				yAngle:0,
				zAngle:0,
				xAngle:45,
				position:p.add(-200,+120)
			});
			animHelp.animate({
				style:{yAngle:585,zAngle:0,xAngle:30,position:p.add(-Animation.a*Math.sqrt(2)*0.5,Animation.a*Math.sqrt(2)*0.5*Math.sin(Util.degreeToRadian(30)))},
				duration:3000,
				delay:6000,
				animationType:'easeInEaseOut',
				update:function(){
					if(Animation.cube3)
						Animation.cube3.remove();
					Animation.cube3 = new Path.Cube3d(this.position,Animation.a,this.xAngle,this.yAngle,this.zAngle);
					Animation.cube3.set_style(animationCubeStyle);
				}
			});
			
			animHelp = new AnimationHelper({
				yAngle:0,
				zAngle:0,
				xAngle:45,
				position:p.add(0,+120)
			});
			animHelp.animate({
				style:{yAngle:585,zAngle:0,xAngle:30,position:p.add(0,-Animation.a*Math.cos(Util.degreeToRadian(30)))},
				duration:3000,
				delay:9000,
				animationType:'easeInEaseOut',
				update:function(){
					if(Animation.cube4)
						Animation.cube4.remove();
					Animation.cube4 = new Path.Cube3d(this.position,Animation.a,this.xAngle,this.yAngle,this.zAngle);
					Animation.cube4.set_style(animationCubeStyle);
				},
                callback:Main.animationFinished
			});
		}
}
var Interaction = {
	images:[
			{
				id:'isometric_paper',
				src:'/assets/animations/es_kupler/isometric_paper.jpg'
			}
		],
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki yapının kaç tane eş küp ile oluşturulduğunu bulunuz.');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
			Interaction.xZ = 0.4;
			Interaction.yZ = 0.5;
			Interaction.appendInput({
				position:'static'
			});
			Interaction.appendButton({
				top:'110px',
				right:'95px'
			});
			Interaction.appendStatus({
				top:'170px',
				right:'20px',
				width:'252px',
				textAlign:'center'
			});
			var div = document.createElement('div');
			$(container).append(div);
			$(div)
				.append('Bu yapının hacmi&emsp;')
				.append(Interaction.input)
				.append('&emsp;birim küptür.')
				.css({
					position:'absolute',
					top:'60px',
					right:'20px'
				});
                
            Interaction.setRandomGenerator(5);
			Interaction.xCubes = 0;
			Interaction.yCubes = 0;
			Interaction.zCubes = 0;
			Interaction.zeroPoint = new Point(138,126);
			Interaction.a = 35;
			Interaction.h = 35;
			Interaction.prepareNextQuestion();
		},
	nextQuestion:function(randomNumber){
            console.log('random number is: '+randomNumber);
			if(Interaction.pause == true)
				return;
			Interaction.pause = false;
			Main.interactionProject.activeLayer.removeChildren();
			Interaction.isometricPaper = new Raster('isometric_paper');
			Interaction.isometricPaper.position = new Point(
                Interaction.isometricPaper.width*0.5,
                Interaction.isometricPaper.height*0.5
            );
			var zero = Interaction.zeroPoint;
			var a = Interaction.a;
			
			var zCubes, xCubes, yCubes;
			do
				xCubes = Math.floor(Math.random()*3)+2;
				while(Interaction.xCubes == xCubes)
			do
				yCubes = Math.floor(Math.random()*2)+1;
				while(Interaction.yCubes == yCubes)
			do
				zCubes = Math.floor(Math.random()*3)+1;
			while(Interaction.zCubes == zCubes)
			
			Interaction.xCubes = xCubes;
			Interaction.yCubes = yCubes;
			Interaction.zCubes = zCubes;
			Interaction.xCubes = xCubes;
			Interaction.yCubes = yCubes;
			Interaction.zCubes = zCubes;
            
			Interaction.cubes = Interaction.generateShape(randomNumber);
            Interaction.pause = true;
            var delay = 500;
			UnitCube.drawCubesOneByOne(Interaction.cubes,zero,a,Interaction,delay);
            setTimeout("Interaction.pause = false",delay*Interaction.cubes.length);
        }, 
    generateShape : function(randomNumber){
            var cubes = [];
            var i;
            switch(randomNumber){
                case 0:
                    for(i=0; i< Interaction.xCubes ; i++)
                        cubes.push(new UnitCube(i-1,0,0));
                    for(i=0; i< Interaction.yCubes ; i++)
                        cubes.push(new UnitCube(0,(i+1),0));
                    for(i=0; i< Interaction.zCubes ; i++)
                        cubes.push(new UnitCube(-Math.floor(i/3),0,i%3+1));
                    break;
                case 1:
                    for(i=0; i< Interaction.xCubes ; i++)
                        cubes.push(new UnitCube(i-1,0,2));
                    for(i=0; i< Interaction.yCubes ; i++)
                        cubes.push(new UnitCube(0,i+1,2));
                    for(i=0; i< Interaction.zCubes ; i++)
                        cubes.push(new UnitCube(-Math.floor(i/3),0, - i%3+1));
                    break;
                case 2:
                    for(i=0; i< Interaction.xCubes ; i++)
                        cubes.push(new UnitCube(i-1,0,0));
                    for(i=0; i< Interaction.yCubes ; i++)
                        cubes.push(new UnitCube(0,(i+1),0));
                    for(i=0; i< Interaction.zCubes ; i++)
                        cubes.push(new UnitCube(i-1,0,1));
                    break;
                case 3:
                    for(i=0; i< Interaction.xCubes ; i++)
                        cubes.push(new UnitCube(-1,(i-1),0));
                    cubes.push(new UnitCube(0,0,0));
                    for(i=0; i< Interaction.zCubes ; i++)
                        cubes.push(new UnitCube(1,(i-1),0));
                    break;
                case 4:
                    for(i=0; i< Interaction.yCubes ; i++)
                        cubes.push(new UnitCube(-i,0,1));
                    for(i=0; i< Interaction.yCubes ; i++)
                        cubes.push(new UnitCube(0,(i),0));
                    for(i=0; i< Interaction.zCubes ; i++)
                        cubes.push(new UnitCube(i,0,3));
                     cubes.push(new UnitCube(0,0,2));
                    break;
            }
            return cubes;
        },
	showCubes : function(distance){
			if(Interaction.pause == true)
				return;
			Interaction.pause = true;
			var animHelp = new AnimationHelper({
				distance:0,
				update:function(){
					UnitCube.explode(
						Interaction.cubes,
						Interaction.zeroPoint,
						Interaction.a,
						this.distance,
						Interaction
					);
				}
			});
			animHelp.animate({
				style:{distance:distance},
				duration:1000,
				update:animHelp.update,
				callback:function(){
					
					this.animate({
						style:{distance:0},
						duration:1000,
						delay:500,
						update:this.update,
						callback:function(){
							Interaction.pause = false;
						}
					});
				}
			});	
		},
	isAnswerCorrect : function(value){
			if(value == Interaction.cubes.length )
				return true;
			else
				return false;
		},
	onCorrectAnswer : function(){
			Interaction.showCubes(15);
		},
	onWrongAnswer : function(){
	
		},
	onFail : function(){
			Interaction.setStatus('Yanlış cevap, doğrusu '+Interaction.cubes.length + ' olacaktı.',false);
			Interaction.showCubes(20);
		}
};
function UnitCube(x,y,z){
	this.x = x;
	this.y = y;
	this.z = z;
	
	this.draw = function(p,a,_s){
		if(this.shape)
			this.shape.remove();
		this.shape = new Path.Cube3d(p,a,Interaction.h,45,0);
		this.shape.set_style(cubeStyle);
	};
}
UnitCube.compare = function(a,b){
		if(a.z > b.z)
			return 1;
		if(a.z < b.z)
			return -1;
		if(a.y > b.y)
			return 1;
		if(a.y < b.y)
			return -1;
		if(a.x > b.x)
			return 1
		if(a.x < b.x)
			return -1;
		return 0;
}
UnitCube.drawCubes = function(cubes,zero,a,h){
	//decide the draw order 				
	cubes.sort(UnitCube.compare);
	
	//draw the cubes
	cubes.sort(UnitCube.compare);
	var dY = a;
	for(var i=0; i<cubes.length;i++){
		var p = zero.add(
			0.5,
			Math.floor(-cubes[i].y*a*Math.cos(Util.degreeToRadian(Interaction.h)))+0.5
		);
		p = p.add(
			Math.floor(cubes[i].x*a*Math.sqrt(2)*0.5),
			Math.floor(cubes[i].x*dY*0.5)
		);
		p = p.add(
			Math.floor(-cubes[i].z*a*Math.sqrt(2)*0.5),
			Math.floor(cubes[i].z*dY*0.5)
		);
		
		cubes[i].draw(p,a,_s);
	}
}
UnitCube.drawCubesOneByOne = function(cubes,zero,a,_s,delay){
	
	cubes.sort(UnitCube.compare);
	var dY = a*Math.sin(Util.degreeToRadian(Interaction.h))*Math.sqrt(2)/2;
	for(var i=0; i<cubes.length;i++){
		var p = zero.add(
			0.5,
			Math.floor(-cubes[i].y*a*Math.cos(Util.degreeToRadian(Interaction.h)))+0.5
		);
		p = p.add(
			Math.floor(cubes[i].x*a*Math.sqrt(2)*0.5),
			Math.floor(cubes[i].x*dY)
		);
		p = p.add(
			Math.floor(-cubes[i].z*a*Math.sqrt(2)*0.5),
			Math.floor(cubes[i].z*dY)
		);
		
		cubes[i].draw(p,a,_s);
		cubes[i].shape.opacity = 0;
		cubes[i].shape.animate({
			style:{opacity:1},
			delay:delay*i,
			duration:100
		});
		
	}
}

UnitCube.explode = function(cubes,zero,a,distance,_s){
	//decide the draw order 				
	cubes.sort(UnitCube.compare);
	
	//draw the cubes
	cubes.sort(UnitCube.compare);
    a = a + distance;
	var dY = a*Math.sin(Util.degreeToRadian(Interaction.h))*Math.sqrt(2)/2;
	for(var i=0; i<cubes.length;i++){
		var p = zero.add(
			0.5,
			Math.floor(-cubes[i].y*a*Math.cos(Util.degreeToRadian(Interaction.h)))+0.5
		);
		p = p.add(
			Math.floor(cubes[i].x*a*Math.sqrt(2)*0.5),
			Math.floor(cubes[i].x*dY)
		);
		p = p.add(
			Math.floor(-cubes[i].z*a*Math.sqrt(2)*0.5),
			Math.floor(cubes[i].z*dY)
		);
		//a = a - distance;
		cubes[i].draw(p,a - distance,_s);
	}
}