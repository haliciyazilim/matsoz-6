function __Styles() {
    fillColor = new RgbColor(0.75, 0.91, 0.94, 0.7);
    strokeColor = "#255b63";
    strokeWidth = 1;
    kucultButtonStyle = {fillColor: "#456"};
    
    animationTextStyle = {
        fontSize:16
    }
    animationSurfacesTextStyle = {
        fillColor: '#5ba559'
    }
    animationEdgesTextStyle = {
        fillColor: '#c14444'
    }
    animationVertexesTextStyle = {
        fillColor: '#4451d0'
    }
    
    animationSurfacesHighlightStyle = {
        fillColor: '#5ba559'
    }
    
    animationEdgesHighlightStyle = {
        strokeColor:'#c14444',
        strokeWidth:2
    }
    
    animationVertexesHighlightStyle = {
        fillColor:'#4451d0'
    }
    
}
var Animation = {
    init: function(container) {
            
            var cubeMatrix = Util.createProjectionMatrixForObjectAt(200, 85);
            var cube = new ExpandablePrism(50, 70, 30, cubeMatrix);
            cube.project();
            
            cube.expand();
            cube.showSurfaces(500,5000);
            cube.delay = 9000;
            
            cube.contract();
            
            cube.showEdges(500,14000);
            cube.showVertexes(500,22000);

            var textReferencePoint = new Point(370,60);
            var surfacesText    = new PointText(textReferencePoint.add(0, 0))
                .set_style(animationTextStyle)
                .set_style(animationSurfacesTextStyle);
            var edgesText       = new PointText(textReferencePoint.add(0,40))
                .set_style(animationTextStyle)
                .set_style(animationEdgesTextStyle);
            var vertexesText    = new PointText(textReferencePoint.add(0,80))
                .set_style(animationTextStyle)
                .set_style(animationVertexesTextStyle);
            surfacesText.count = 1;
            surfacesText.animate({
                style:{count:6},
                duration:2500,
                delay:5000,
                update:function(){
                    this.content = Math.floor(this.count) + " dikdörtgensel bölge şeklinde yüz"
                }
            });
            edgesText.count = 1;
            edgesText.animate({
                style:{count:12},
                duration:5500,
                delay:14000,
                update:function(){
                    this.content = Math.floor(this.count) + " ayrıt"
                }
            });
            vertexesText.count = 1;
            vertexesText.animate({
                style:{count:8},
                duration:3500,
                delay:22000,
                update:function(){
                    this.content = Math.floor(this.count) + " köşe"
                },
                callback:Main.animationFinished
            });
        }
};
var Interaction =function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}

Interaction.init = function(container){
	Main.setObjective("Yandaki dikdörtgenler prizmasını küçültüp büyütünüz veya istediğiniz yönde döndürünüz.");
	load();
	var w = $(Interaction.container).width();
	var h = $(Interaction.container).height();
	Interaction.UP = false;
	Interaction.DOWN = false;
	Interaction.LEFT = false;
	Interaction.RIGHT = false;
	//$(container).append(
//		'<div style="position:absolute;top:60%;left:0px;text-align:center;">'+
//			'<input type="button" value="UP" onmousedown="Interaction.UP=true;" onmouseup="Interaction.UP=false;" /><br />'+
//			'<input type="button" value="LEFT" onmousedown="Interaction.LEFT=true;" onmouseup="Interaction.LEFT=false;"  />'+
//			'<input type="button" value="RIGHT"  onmousedown="Interaction.RIGHT=true;" onmouseup="Interaction.RIGHT=false;" /><br />'+
//			'<input type="button" value="DOWN"  onmousedown="Interaction.DOWN=true;" onmouseup="Interaction.DOWN=false;" />'+
//		'</div>'
//	);
	inc = 15;
	$(container).append(
		'<div class="ezd_btn_rotate" style="position:absolute;top:40%;right:10px;text-align:center;">'+
			'<div class="ezd_btn_rotate_top" onclick="Interaction._3d.zAngle+=inc;return false;" >'+
				'<img src="/assets/animations/3d_navigation/btn_gray_top.png" width="32" height="31" alt="Yukarı">'+
			'</div>'+
			'<div class="ezd_btn_rotate_right"  onclick="Interaction._3d.xAngle-=inc;return false;" >'+
				'<img src="/assets/animations/3d_navigation/btn_gray_right.png" width="32" height="31" alt="Sağa">'+
			'</div>'+
			'<div class="ezd_btn_rotate_bottom" onclick="Interaction._3d.zAngle-=inc;return false;" >'+
				'<img src="/assets/animations/3d_navigation/btn_gray_bottom.png" width="32" height="31" alt="Aşağı">'+
			'</div>'+
			'<div class="ezd_btn_rotate_left"  onclick="Interaction._3d.xAngle+=inc;return false;" >'+
				'<img src="/assets/animations/3d_navigation/btn_gray_left.png" width="32" height="31" alt="Sola">'+
			'</div>'+
		'</div>'
	);
	$(container).append(
		'<div style="position:absolute;top:50%;left:10px;text-align:center;font-size:12px;line-height:20px;">'+
			'<div style="position:relative;padding-top:5px;float:left;" onclick="$(\'#distance\').val($(\'#distance\').val()-1);return false;"><img src="/assets/animations/3d_navigation/btn_gray_small.png" /></div>'+
			'<div style="position:relative;top:10px;width:60px;float:left;" id="slider">'+
				'<input type="range" min="0" max="10" value="5" id="distance"  style="width:60px;background:none" />'+
			'</div>'+
			'<div style="user-select:none;position:relative;left:1px;float:left;padding-top:5px;" onclick="$(\'#distance\').val(parseInt($(\'#distance\').val())+1);return false;"><img src="/assets/animations/3d_navigation/btn_gray_large.png" /></div>'+
		'</div>'
	);
	//$('#slider').slider();
	//var count =0;
	Interaction._3d = {};
	Interaction._3d.x=100;
	Interaction._3d.y=100;
	Interaction._3d.z=0;
	Interaction._3d.xAngle = 75;
	Interaction._3d.zAngle = 75;
	Interaction._3d.R_constant = 150;
	function changeXAngle(){
		Interaction._3d.x = Interaction._3d.R * Math.cos(Util.degreeToRadians(Interaction._3d.xAngle)) * Math.sin(Util.degreeToRadians(Interaction._3d.zAngle)) ;
		Interaction._3d.z = Interaction._3d.R * Math.sin(Util.degreeToRadians(Interaction._3d.xAngle)) * Math.sin(Util.degreeToRadians(Interaction._3d.zAngle)) ;
		
	}
	function changeZAngle(){
		Interaction._3d.y = Interaction._3d.R * Math.cos(Util.degreeToRadians(Interaction._3d.zAngle));
		Interaction._3d.x = Interaction._3d.R * Math.cos(Util.degreeToRadians(Interaction._3d.xAngle)) * Math.sin(Util.degreeToRadians(Interaction._3d.zAngle)) ;
		Interaction._3d.z = Interaction._3d.R * Math.sin(Util.degreeToRadians(Interaction._3d.xAngle)) * Math.sin(Util.degreeToRadians(Interaction._3d.zAngle)) ;
	}
	Interaction._3d.R = Interaction._3d.R_constant - $('#distance').val()*6;
	changeXAngle();
	changeZAngle();
	loop(Interaction._3d.x ,Interaction._3d.y ,Interaction._3d.z );
	var tool = new Tool();
	tool.onMouseDrag = function(event){
		Interaction._3d.zAngle -= event.delta.y;
		Interaction._3d.xAngle -= event.delta.x;
	}
	setInterval(
		function(){
			
			//if( Interaction.UP == true)
//				Interaction._3d.zAngle-=inc;
//			else if(Interaction.DOWN == true)
//				Interaction._3d.zAngle+=inc;
//			else if(Interaction.LEFT == true)
//				Interaction._3d.xAngle-=inc;
//			else if(Interaction.RIGHT == true)
//				Interaction._3d.xAngle+=inc;
//			else return;
			Interaction._3d.R = Interaction._3d.R_constant - $('#distance').val()*6;
			Interaction._3d.zAngle = Interaction._3d.zAngle > 160 ? 160 : (Interaction._3d.zAngle < 20 ? 20: Interaction._3d.zAngle);
			changeXAngle();
			changeZAngle();
			loop(Interaction._3d.x ,Interaction._3d.y ,Interaction._3d.z );
			//Interaction._3d.R++;
		},
		25
	);
}

/* -------------------------------------------------------------------- */


function loop(x,y,z) {
	ctx.clearRect(0, 0, canvasWidth, canvasHeight);

	scene.camera.x = x;
	scene.camera.y = y;
	scene.camera.z = z;
	//scene.cameraRotation = 0;

	scene.draw();
}

function load() {
	// Init drawing system
	canvas = document.getElementById("interaction_canvas");
	ctx = canvas.getContext("2d");

	canvasWidth = canvas.width*1;
	canvasHeight = canvas.height*1;
	halfCanvasWidth = canvasWidth * 0.5+20;
	halfCanvasHeight = canvasHeight * 0.5;

	// Init 3D components
	space = new Space();
	scene = new Scene();

	// Create a box shape and add it to the scene
	scene.shapes['box'] = new Shape();
	var p = scene.shapes['box'].points; // for convenience

	p[0] = new Point3(-7, -15, -10); // left  bottom front
	p[1] = new Point3(7, -15, -10);  // right bottom front
	p[2] = new Point3(7, 15, -10);   // right top    front
	p[3] = new Point3(-7, 15, -10);  // left  top    front

	p[4] = new Point3(-7, -15, 15);  // left  bottom back
	p[5] = new Point3(7, -15, 15);   // right bottom back
	p[6] = new Point3(7, 15, 15);    // right top    back
	p[7] = new Point3(-7, 15, 15);   // left  top    back
	
	//p[5] = p[4];
	//p[6] = p[7];
	// Back
	scene.shapes['box'].polygons.push(new Polygon(
		[ p[0], p[1], p[2], p[3] ],
		new Point(0, 0, -1),
		true /* double-sided */,
		Polygon.SOLID,
		[100, 100, 100,1]
	));

	// Front
	scene.shapes['box'].polygons.push(new Polygon(
		[ p[4], p[5], p[6], p[7] ],
		new Point(0, 0, 1),
		true /* double-sided */,
		Polygon.SOLID,
		[100, 100, 100,1]
	));

	// Top
	scene.shapes['box'].polygons.push(new Polygon(
		[ p[2], p[3], p[7], p[6] ],
		new Point(0, 1, 0),
		false /* single-sided */,
		Polygon.WIRE,
		[200, 200, 200,1]
	));

	// Transparent Top
	scene.shapes['box'].polygons.push(new Polygon(
		[ p[2], p[3], p[7], p[6] ],
		new Point(0, 1, 0),
		false /* single-sided */,
		Polygon.SOLID,
		[200, 200, 200,1]
	));

	// Left
	scene.shapes['box'].polygons.push(new Polygon(
		[ p[0], p[4], p[7], p[3] ],
		new Point(-1, 0, 0),
		true /* double-sided */,
		Polygon.SOLID,
		[150, 150, 150,1]
	));

	// Right
	scene.shapes['box'].polygons.push(new Polygon(
		[ p[1], p[5], p[6], p[2] ],
		new Point(1, 0, 0),
		true /* double-sided */,
		Polygon.SOLID,
		[50, 50, 50,1]
	));

	// Create a floor shape and add it to the scene
	//scene.shapes['floor'] = new Shape();
	//var p = scene.shapes['floor'].points; // for convenience

	//p[0]  = new Point3(-40, -10, -40);
	//p[1]  = new Point3(-40, -10,  40);
	//p[2] = new Point3( 40, -10,  40);
	//p[3] = new Point3( 40, -10, -40);

	//Floor
	scene.shapes['box'].polygons.push(new Polygon(
		[ p[0], p[1], p[5], p[4] ],
		new Point(0, 1, 0),
		false /* single-sided */,
		Polygon.SOLID,
		[200, 200, 200,1]
	));

	//setInterval('loop()', 20);
}

/* -------------------------------------------------------------------- */
