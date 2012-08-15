// JavaScript Document
function __Styles(){
	shapeStyle = {
		strokeColor:'#255b63',
		strokeWidth:2
	};
	dashedLineStyle = {
		strokeColor:'#333',
		strokeWidth:1,
		dashArray:[3,2]
	};
	heightLineStyle = {
		strokeColor:'#f00',
		strokeWidth:2
	};
	textStyle = {
		fontSize:13
	};
	hCircleStyle = {
		fillColor:'#FFFFFF',
		strokeColor:'#FF0000'
	}


}
var Animation = {
	images:[
		{
			id:'wall',
			src:'/assets/animations/yukseklik/wall.png'	
		},
		{
			id:'redline',
			src:'/assets/animations/yukseklik/redline.png'	
		},
		{
			id:'height',
			src:'/assets/animations/yukseklik/height.png'	
		}
	],
	init:function(container){
		Animation.container = container;
		var w = $(container).width();
		var h = $(container).height();
		var p = new Point(w*0.5+0.5,h*0.5);
		
		var r1 = new Raster('wall');
		var r2 = new Raster('redline');
		var r3 = new Raster('height');
		
		r1.position = p;
		r2.position = p;
		r3.position = p;
		
		r1.opacity = 0;
		r2.opacity = 0;
		r3.opacity = 0;
		
		r1.animate({
			style:{opacity:1},
			duration:1000,
			delay:100
		});
		r2.animate({
			style:{opacity:1},
			duration:1000,
			delay:1200
		});
		r3.animate({
			style:{opacity:1},
			duration:1000,
			delay:2300,
            callback:Main.animationFinished
		});
		 
	}
};

var Interaction = {
	
	getFramework : function() {
		return 'paper';
	},
	
	init : function(container){
		Main.setObjective('Yandaki geometrik şeklin köşelerinden herhangi birine basınız. Belirlediğiniz noktaya göre yüksekliğin bulunuşunu inceleyiniz.');
		Interaction.container = container;
		Interaction.paper = {width:$(container).width(), height: $(container).height()}

		Interaction.shapeCount = 0;
		Interaction.nextButton = document.createElement('input');
		Interaction.nextButton.setAttribute('type','button');
		$(container).append(Interaction.nextButton);
		$(Interaction.nextButton)
			.attr({
				class:'next_button'
			})
			.css({
				position:'absolute',
				bottom:'10px',
				right:'10px'
			})
			.click(Interaction.nextQuestion);
		Interaction.nextQuestion();
		Interaction.createTool();
	},
	nextQuestion : function(){
		project.activeLayer.removeChildren();
		Interaction.shapeCount++;
		Interaction.drawHeightLine.vertexLetter = false;
		Interaction.letters = ["E","D","C","B","A"];
		var X = Interaction.paper.width*0.5-100;
		var Y = Interaction.paper.height*0.5-75;
		var W = 200;
		var H = 200;
		var NUMBER_OF_SHAPES  = 9 ;
		try{
            if(phase == undefined)
                phase = 0;
        }catch(e){
            phase = 0;
        }
        if(phase == 0 )
            phase = Math.floor(Math.random()*60)-30;
        else
            phase = 0;
        
        
		Interaction.shapeCount = Interaction.shapeCount%NUMBER_OF_SHAPES;
		if(Interaction.shuffledArray == null || Interaction.shuffledArray == undefined)
			Interaction.shuffledArray = Util.getShuffledArray(NUMBER_OF_SHAPES);
		Interaction.shapeType = Interaction.shuffledArray[Interaction.shapeCount];	
		/*TEST*/ 
		//	Interaction.shapeType = 8 ;  
        /*TEST*/

		switch(Interaction.shapeType){
			case 0://square
				Interaction.shape = new Path.EquiradialPolygon(new Point(X,Y),new Size(W,H),[45,135,225,315],phase);
				break;
			case 1://rectangle
				Interaction.shape = new Path.EquiradialPolygon(new Point(X,Y),new Size(W,H),[60,120,240,300],phase);
				break;
			case 2:
				Interaction.shape = new Path.Rhomboid(new Point(X,Y),new Size(W*0.8,H*0.4),W*0.2,phase);
				break;
			case 3://wide angled triangle
				Interaction.shape = new Path.EquiradialPolygon(new Point(X,Y),new Size(W,H),[100,160,240],phase);		
				break;
			case 4://equilateral triangle
				Interaction.shape = new Path.EquiradialPolygon(new Point(X,Y),new Size(W,H),[90,210,340],phase);		
				break;
			case 5://isosceles triangle (ikizkenar ucgen)
				Interaction.shape = new Path.EquiradialPolygon(new Point(X,Y),new Size(W,H),[90,240,300],phase);		
				break;
			case 6://trapezoid
				Interaction.shape = new Path.Trapezoid(new Point(X,Y),new Size(W,H*0.5),W*0.4,W*0.2,phase);
				break;
			case 7://IsoscelesTrapezoid
				Interaction.shape = new Path.IsoscelesTrapezoid(new Point(X,Y),new Size(W,H*0.5),W*0.3,phase);
				break;
			case 8://Right Trapezoid
				Interaction.shape = new Path.Trapezoid(new Point(X,Y),new Size(W*0.8,H*0.5),W*0.3,0,phase);
				break;
				
		};
		Interaction.shape.set_style(shapeStyle);
		var diffPoint = Interaction.shape.centerPoint.subtract(new Point(Interaction.paper.width*0.5,Interaction.paper.height*0.5)).multiply(-1,-1);
		Interaction.shape.translate(diffPoint);
		
		for(var i=0;i<Interaction.shape.vertexArray.length;i++){
			Interaction.shape.vertexArray[i] = Interaction.shape.vertexArray[i].add(diffPoint);
			var j = (i+1)%Interaction.shape.vertexArray.length;
			var p = Interaction.shape.vertexArray[i].findPointTo(Interaction.shape.centerPoint,-20).add(-5,5)
			Interaction.printVertexLetters(p);
		}	
		
		Interaction.drawHeightLine(0);
	},
	createTool : function(){
		
		var POINT_HIT_TOLERANCE = 40;
		
		var tool = new Tool();
		tool.onMouseDown = function(event){
			if( Interaction.shape == null || Interaction.shape == undefined )
				return;
			for( var i=0 ; i < Interaction.shape.vertexArray.length ; i++ )
				if(POINT_HIT_TOLERANCE > Interaction.shape.vertexArray[i].getDistance(event.point) ){
					Interaction.drawHeightLine(i);
				}
		};
		tool.activate();	
	},
	drawHeightLine : function(index){
        if(Interaction.drawHeightLine.increment == undefined)
            Interaction.drawHeightLine.increment = 0;
        else if(Interaction.drawHeightLine.increment == 0)
            Interaction.drawHeightLine.increment = 1;
        else
            Interaction.drawHeightLine.increment = 0;
        if(Interaction.heightLine)
			Interaction.heightLine.remove();
		var p1,p2,p,h;
		p = Interaction.shape.vertexArray[index];
		
        var i = Interaction.drawHeightLine.increment;
        switch(Interaction.shape.vertexArray.length){
			case 4:
				p1 = Interaction.shape.vertexArray[(index+i+1)%4];
				p2 = Interaction.shape.vertexArray[(index+i+2)%4];
				h = p.projectToLine(p1,p2); 
				break;
			case 3:
				p1 = Interaction.shape.vertexArray[(index+1)%3];
				p2 = Interaction.shape.vertexArray[(index+2)%3];
				h = p.projectToLine(p1,p2); 
				break;
		}
		//Interaction.shape.centerPoint.showOnCanvas();
		Interaction.heightLine = new Group();
		Interaction.heightLine.addChild(
			new Path.Line(p,h)
				.set_style(heightLineStyle)
		)
		var d;//distant point
		var c;//closest point
		if(h.getDistance(p1) > h.getDistance(p2)){
			d = p1;
			c = p2;
		}
		else{
			c = p1;
			d = p2;
		}
        
		var d_ph = h.findPointTo(d,10);
		var p_ph = h.findPointTo(p,10);;
		var m_ph = Util.centerOfPoints([d_ph,p_ph]);
		var s_ph = h.symmetricTo(m_ph);
		var l1 = new Path.Line(d_ph,s_ph).set_style(heightLineStyle);
		var l2 = new Path.Line(p_ph,s_ph).set_style(heightLineStyle);
		var m  = new Path.Circle(m_ph,1).set_style(heightLineStyle);
		Interaction.heightLine.addChild(l1);
		Interaction.heightLine.addChild(l2);
		Interaction.heightLine.addChild(m);
		
        //decide to draw a dahsed line
		if(!h.isBetweenTwoLinePoints(p1,p2))
			Interaction.heightLine.addChild(
				new Path.Line(h,c)
					.set_style(dashedLineStyle)
			);
		var t_p = h.findPointTo(p,-20).add(-5,5);
		if(Interaction.drawHeightLine.vertexLetter)
			Interaction.drawHeightLine.vertexLetter.position = t_p;
		else
			Interaction.drawHeightLine.vertexLetter = Interaction.printVertexLetters(t_p);
		var circ = new Path.Circle(Util.centerOfPoints([p,h]),12).set_style(hCircleStyle);
		var hText = new PointText(
			Util.centerOfPoints([p,h]).add(-4,5)
		); 
		hText.set_style(textStyle);
		hText.content = 'h';
		var pCircle = new Path.Circle(p,4);
		pCircle.set_style({fillColor:shapeStyle.strokeColor})
		Interaction.heightLine.addChild(pCircle);
		Interaction.heightLine.addChild(circ);
		Interaction.heightLine.addChild(hText);
	},
	printVertexLetters : function(p){
			var text = new PointText(p);
			text.content = ""+Interaction.letters.shift();
			text.set_style(textStyle);
			return text;
	}
}
