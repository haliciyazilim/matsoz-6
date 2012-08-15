var cubeStyle = {
	strokeColor:'#255b63',
	strokeWidth:1,
	fillColor:'#bfe8ef'
};
var animationCubeStyle = {
	strokeColor:'#666',
	strokeWidth:1,
	fillColor:'#ddd'
}
var Animation = {
	init:function(container){
			Main.animationProject.activeLayer.removeChildren();
			Animation.container = container;
			Animation.xZ = 0.4;
			Animation.yZ = 0.5;
			var w=$(container).width(), h=$(container).height();
			var x = 100;
			var y = 20;
			Animation.a = 30;
			Animation.xCube = 7;
			Animation.yCube = 2;
			Animation.zCube = 4;
			Animation.rectPrizm = new Path.RectanglePrisim(
				new Point(x,y),
				new Size(
					Animation.xCube*Animation.a,
					Animation.yCube*Animation.a
				),    
				new Size(
					Animation.zCube*Animation.xZ*Animation.a,
					Animation.zCube*Animation.yZ*Animation.a
				)
			).set_style({
				strokeWidth:2,
				strokeColor:'#000'
			});
			
			
			var div = document.createElement('div');
			$(container).append(div);
			$(div)
				.css({
					position:'absolute',
					top:'50px',
					right:'200px',
					lineHeight:'30px',
					textAlign:'center',
					fontSize:'16px'
				})
				.html('Dikdörtgenler prizmasının <br/> hacmi <br/> <span id="count" style="font-weight:bold"></span> birim küptür.')
			
			Animation.countSpan = $('span#count',div).get(0);
			
			Animation.zeroPoint = new Point(
				x + (Animation.zCube-1)*Animation.xZ*Animation.a,
				y + (Animation.yCube-1)*Animation.a
			);
			Animation.cubes = [];
			for(var i=0;i<Animation.xCube;i++)
				for(var j=0;j<Animation.yCube;j++)
					for(var k=0;k<Animation.zCube;k++)
						Animation.cubes.push(new UnitCube(i,j,k));
			
			UnitCube.drawCubes(Animation.cubes,Animation.zeroPoint,Animation.a,Animation,animationCubeStyle);
			Animation.cubes[0].shape.insertBelow(Animation.rectPrizm.children[4]);
			for(var i=1;i<Animation.cubes.length;i++){
				Animation.cubes[i].shape.opacity = 0;
				Animation.cubes[i].shape.insertAbove(Animation.cubes[i-1].shape);
				Animation.cubes[i].shape.__i = i+1;
				Animation.cubes[i].shape.animate({
					style:{opacity:1},
					duration:1,
					delay:i*100,
					callback:function(){
						$(Animation.countSpan).html(this.__i);
					}
				});
				
			}
            Main.animationFinished(5000);
		}
}

var Interaction = {
	getFramework:function(){
			return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('Yandaki yapının hacminin kaç birim küp olduğunu bulunuz ve kontrol ediniz.');
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
				top:'170px',
				right:'95px'
			});
			Interaction.appendStatus({
				top:'220px',
				right:'20px',
				width:'250px',
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
					top:'130px',
					right:'20px'
				});
            Interaction.setRandomGenerator(5);
			Interaction.xCubes = 0;
			Interaction.yCubes = 0;
			Interaction.zCubes = 0;
			Interaction.zeroPoint = new Point(120,160);
			Interaction.a = 30;
			Interaction.prepareNextQuestion();
		},
	nextQuestion:function(randomNumber){
			if(Interaction.pause == true)
				return;
			Interaction.pause = false;
			Main.interactionProject.activeLayer.removeChildren();
			var zero = Interaction.zeroPoint;
			var a = Interaction.a;
			
			var zCubes, xCubes, yCubes;
			do
				xCubes = Math.floor(Math.random()*4)+3;
				while(Interaction.xCubes == xCubes)
			do
				yCubes = Math.floor(Math.random()*3)+1;
				while(Interaction.yCubes == yCubes)
			do
				zCubes = Math.floor(Math.random()*3)+1;
			while(zCubes/4 > xCubes-2 || Interaction.zCubes == zCubes)
			
			Interaction.xCubes = xCubes;
			Interaction.yCubes = yCubes;
			Interaction.zCubes = zCubes;
            
			Interaction.cubes = Interaction.generateShape(randomNumber);
//			Interaction.cubes = Interaction.generateShape(4);
            UnitCube.drawCubes(Interaction.cubes,zero,a,Interaction);
		},
    generateShape : function(randomNumber){
            var cubes = [];
            switch(randomNumber){
                case 0:
                    for(var i=0; i< Interaction.xCubes ; i++)
                        cubes.push(new UnitCube(i-1,2,0));
                    for(var i=0; i< Interaction.yCubes ; i++)
                        cubes.push(new UnitCube(0,2-(i+1),0));
                    for(var i=0; i< Interaction.zCubes ; i++)
                        cubes.push(new UnitCube(-Math.floor(i/3),2,i%3+1));
                    break;
                case 1:
                    for(var i=0; i< Interaction.xCubes ; i++)
                        cubes.push(new UnitCube(i-1,2,2));
                    for(var i=0; i< Interaction.yCubes ; i++)
                        cubes.push(new UnitCube(0,2-(i+1),2));
                    for(var i=0; i< Interaction.zCubes ; i++)
                        cubes.push(new UnitCube(-Math.floor(i/3),2, - i%3+1));
                    break;
                case 2:
                    for(var i=0; i< Interaction.xCubes ; i++)
                        cubes.push(new UnitCube(i-1,0,0));
                    for(var i=0; i< Interaction.yCubes ; i++)
                        cubes.push(new UnitCube(0,(i+1),0));
                    for(var i=0; i< Interaction.zCubes ; i++)
                        cubes.push(new UnitCube(i-1,0,1));
                    break;
                case 3:
                    for(var i=0; i< Interaction.xCubes ; i++)
                        cubes.push(new UnitCube(-1,(i-1),0));
                    cubes.push(new UnitCube(0,0,0));
                    for(var i=0; i< Interaction.zCubes ; i++)
                        cubes.push(new UnitCube(1,(i-1),0));
                    break;
                case 4:
                    for(var i=0; i< Interaction.yCubes ; i++)
                        cubes.push(new UnitCube(-i,0,1));
                    for(var i=0; i< Interaction.yCubes ; i++)
                        cubes.push(new UnitCube(0,(i),0));
                    for(var i=0; i< Interaction.zCubes ; i++)
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
					Interaction.pause = false;
					/*this.animate({
						style:{distance:0},
						duration:1000,
						delay:500,
						update:this.update,
						callback:function(){
							
						}
					});*/
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
			Interaction.showCubes(20);
		},
	onWrongAnswer : function(){
	
		},
	onFail : function(){
			Interaction.setStatus('Yanlış cevap, doğrusu '+Interaction.cubes.length + ' olacaktı.',false);
			Interaction.showCubes(10);
		}
};

function UnitCube(x,y,z){
	this.x = x;
	this.y = y;
	this.z = z;
	
	this.draw = function(p,a,_s,style){
		if(this.shape)
			this.shape.remove();
		this.shape = new Path.Cube(p,a,new Point(_s.xZ,_s.yZ));
		if(style)
			this.shape.set_style(style);
		else
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
UnitCube.drawCubes = function(cubes,zero,a,_s,style){
	//decide the draw order 				
	cubes.sort(UnitCube.compare);
	
	//draw the cubes
	for(var i=0; i<cubes.length;i++){
		var p = zero.add(
			Math.floor(cubes[i].x*a)+0.5,
			Math.floor(-cubes[i].y*a)+0.5
		);
		p = p.add(
			Math.floor(-cubes[i].z*a*_s.xZ),
			Math.floor(cubes[i].z*a*_s.yZ)
		);
		
		cubes[i].draw(p,a,_s,style);
	}
}
UnitCube.explode = function(cubes,zero,a,distance,_s){
	//decide the draw order 				
	cubes.sort(UnitCube.compare);
	//draw the cubes
	for(var i=0; i<cubes.length;i++){
		//console.log(cubes[i].x,cubes[i].y,cubes[i].z)
		var p = zero.add(cubes[i].x*a,-cubes[i].y*a);
		p = p.add(-cubes[i].z*a*_s.xZ,cubes[i].z*a*_s.yZ);
		p = p.add(distance*cubes[i].x,0);
		p = p.add(0,-distance*cubes[i].y);
		p = p.add(-cubes[i].z*distance*_s.xZ,cubes[i].z*distance*_s.yZ);
		p = new Point(Math.floor(p.x)+0.5,Math.floor(p.y)+0.5)
		cubes[i].draw(p,a,_s);
	}
}
