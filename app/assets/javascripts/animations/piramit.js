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
    
    animationSurfaceHighlightStyle = {
        
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
            var Prism = ExpandableShape.extend({
                init: function(width, height, length, matrix) {
                        this._super(matrix);

                        width /= 2;
                        height /= 2;
                        length /= 2;
                        this.setSurfaces({
                            backSurface: new Surface([
                                new Point3(-width,  height, length),
                                new Point3( width,  height, length),
                                new Point3( width, -height, length),
                                new Point3(-width, -height, length)
                                ]),
                            bottomSurface: new Surface([
                                new Point3(-width, height,  length),
                                new Point3( width, height,  length),
                                new Point3( width, height, -length),
                                new Point3(-width, height, -length)
                                ]),
                            leftSurface: new Surface([
                                new Point3(-width, -height, -length),
                                new Point3(-width, -height,  length),
                                new Point3(-width,  height,  length),
                                new Point3(-width,  height, -length)
                                ]),
                            rightSurface: new Surface([
                                new Point3(width,  height, -length),
                                new Point3(width,  height,  length),
                                new Point3(width, -height,  length),
                                new Point3(width, -height, -length)
                                ]),
                            topSurface: new Surface([
                                new Point3(-width, -height, -length),
                                new Point3( width, -height, -length),
                                new Point3( width, -height,  length),
                                new Point3(-width, -height,  length)
                                ]),
                            frontSurface: new Surface([
                                new Point3(-width, -height, -length),
                                new Point3( width, -height, -length),
                                new Point3( width,  height, -length),
                                new Point3(-width,  height, -length)
                                ])
                        });
                    },
                showVertexes : function(delay,startingDelay) {
                        if(startingDelay == undefined)
                                startingDelay = 0;
                        var circle = function(p1,i){
                            var anim = new AnimationHelper({});
                            anim.animate({
                                style:{},
                                duration:0,
                                delay:startingDelay,
                                init: function() {
                                    var path = new Path.Circle(p1,4);
                                    path.set_style(animationVertexesHighlightStyle);
                                    path.set_style({
                                        opacity:0
                                    });
                                    path.animate({
                                        style:{opacity:1},
                                        duration:delay,
                                        delay:delay*i
                                    });

                                    path.animate({
                                        style:{opacity:0},
                                        delay:delay*8,
                                        duration:delay,
                                        callback:path.remove
                                    })
                                }
                            })
                        }
                        var frontPoints = this.surfaces.frontSurface.get2DPoints(this.matrix);
                        var backPoints = this.surfaces.backSurface.get2DPoints(this.matrix);
                        var i = 0,j = 0,k = 0;
                        for (; i < frontPoints.length; i++) {
                            new circle(frontPoints[i],i);
                        }
                        for (;j < backPoints.length ; j++,i++){
                            new circle(backPoints[j],i);
                        }

                    },
                showEdges: function(delay,startingDelay){
                        if(startingDelay == undefined)
                            startingDelay = 0;
                        var line = function(p1,p2,i) {
                            var anim = new AnimationHelper({});
                            anim.animate({
                                style:{},
                                duration:0,
                                delay:startingDelay,
                                init: function() {
//                                    console.log("I'm here");
                                    var path = new Path.Line(p1,p2);
                                    path.set_style(animationEdgesHighlightStyle);
                                    path.set_style({
                                        opacity:0
                                    });
                                    path.animate({
                                        style:{opacity:1},
                                        duration:delay,
                                        delay:delay*i
                                    });
                                    path.animate({
                                        style:{opacity:0},
                                        duration:delay,
                                        delay:delay*14,
                                        callback:path.remove
                                    });
                                }
                            })
                        }
                        var frontPoints = this.surfaces.frontSurface.get2DPoints(this.matrix);
                        var backPoints = this.surfaces.backSurface.get2DPoints(this.matrix);
                        var i = 0,j = 0,k = 0;
                        for (; i < frontPoints.length; i++) {
                            new line(frontPoints[i],frontPoints[(i+1)%frontPoints.length],i);
                        }
                        for (;j < backPoints.length ; j++,i++){
                            new line(backPoints[j],backPoints[(j+1)%backPoints.length],i);
                        }
                        for (;k < backPoints.length ; k++,i++){
                            new line(frontPoints[k],backPoints[3-k],i);
                        }
                    },
                expand: function(style) {
                        this.rotateSurfaceX(this.surfaces.topSurface, -Math.PI/2, this.surfaces.topSurface.points[2]);
                        this.rotateSurfaceY(this.surfaces.rightSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], true);
                        this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[2]);
                        this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
                        this.rotateSurfaceY(this.surfaces.leftSurface, Math.PI/2, this.surfaces.leftSurface.points[1]);
                        this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.bottomSurface.points[0]);
                    },
                contract: function (style){
                        this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.bottomSurface.points[0]);
                        this.rotateSurfaceY(this.surfaces.leftSurface, -Math.PI/2, this.surfaces.leftSurface.points[1]);
                        this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
                        this.rotateSurfaceY(this.surfaces.rightSurface, Math.PI/2, this.surfaces.rightSurface.points[2], true);
                        this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[2]);
                        this.rotateSurfaceX(this.surfaces.topSurface, Math.PI/2, this.surfaces.topSurface.points[2]);
                    }
            });// var Prisim
            var cubeMatrix = Util.createProjectionMatrixForObjectAt(200, 85);
            var cube = new Prism(50, 70, 30, cubeMatrix);
            cube.project();
            cube.expand();
            cube.contract();
            cube.showEdges(500,10000);
            cube.showVertexes(500,18000);

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
                duration:5000,
                update:function(){
                    this.content = Math.floor(this.count) + " karesel bölge şeklinde yüz"
                }
            });
            edgesText.count = 1;
            edgesText.animate({
                style:{count:12},
                duration:6000,
                delay:10000,
                update:function(){
                    this.content = Math.floor(this.count) + " ayrıt"
                }
            });
            vertexesText.count = 1;
            vertexesText.animate({
                style:{count:8},
                duration:4000,
                delay:18000,
                update:function(){
                    this.content = Math.floor(this.count) + " köşe"
                }
            });
        }
};
var Interaction =function(){};Interaction();
Interaction.getFramework = function() {
	return 'paper';
}

Interaction.init = function(container){
	Interaction.container = container;
	Main.setObjective("Aşağıdaki küpü küçültüp büyütünüz veya istediğiniz yönde döndürünüz.");
	
	var w = $(Interaction.container).width();
	var h = $(Interaction.container).height();
	Interaction.UP = false;
	Interaction.DOWN = false;
	Interaction.LEFT = false;
	Interaction.RIGHT = false;
	space = new Space();
	scene = new Scene();
	
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
			'<div id="buyut" style="user-select:none;position:relative;left:1px;float:left;padding-top:5px;" onclick="$(\'#distance\').val(parseInt($(\'#distance\').val())+1);return false;"><img src="/assets/animations/3d_navigation/btn_gray_large.png" /></div>'+
		'</div>'
	);
	$(container).append('<input type="button" value="sonraki" class="next_button" style="position:absolute;bottom:15px;right:15px;" />')
	Interaction.next_button = $('.next_button').get(0);
	$("#buyut > img").show();
	//console.log(window.location.hash)
	switch(window.location.hash){
		case '#triangle':
	//		//console.log('triangle');
			load_triangle_pyramid();
			break;
		case '#rectangle':
	//		//console.log('rectangle');
			load_rectangle_pyramid();
			break;
		default:
	//		//console.log('default');
			load_square_pyramid();
	}
	
	//$('#slider').slider();
	//var count =0;
	Interaction._3d = {};
	Interaction._3d.x=100;
	Interaction._3d.y=100;
	Interaction._3d.z=0;
	Interaction._3d.xAngle = 146;
	Interaction._3d.zAngle = 60;
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

function load_square_pyramid() {	
	Interaction.next_button.onclick = function(){
		window.location.hash = "triangle";
		window.location.reload();
	};
	// Init drawing system 
	canvas = $('canvas',Interaction.container).get(0);
	// //console.log(canvas);
	ctx = canvas.getContext("2d");

	canvasWidth = canvas.width*1;
	canvasHeight = canvas.height*1;
	halfCanvasWidth = canvasWidth * 0.5+20;
	halfCanvasHeight = canvasHeight * 0.5;

	// Init 3D components
	space = new Space();
	scene = new Scene();

	// Create a box shape and add it to the scene
	Interaction.oldShape = new Shape()
	scene.shapes['square_pyramid'] = Interaction.oldShape;
	var p = scene.shapes['square_pyramid'].points; // for convenience

	p[0] = new Point3(-10, -10, -10); // left  bottom front
	p[1] = new Point3(10, -10, -10);  // right bottom front
	p[2] = new Point3(0, 10, 0);   // right top    front
	p[3] = new Point3(-10, 10, -10);  // left  top    front

	p[4] = new Point3(-10, -10, 10);  // left  bottom back
	p[5] = new Point3(10, -10, 10);   // right bottom back
	p[6] = new Point3(10, 10, 10);    // right top    back
	p[7] = new Point3(-10, 10, 10);   // left  top    back
	
	p[3] = p[2];
	p[6] = p[2];
	p[7] = p[2];
//	p[5] = p[4];
//	p[6] = p[7];
	// Back
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[0], p[1], p[2], p[3] ],
		new Point(0, 0, -1),
		true /* double-sided */,
		Polygon.SOLID,
		[100, 100, 100, 1]
	));

	// Front
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[4], p[5], p[6], p[7] ],
		new Point(0, 0, 1),
		true /* double-sided */,
		Polygon.SOLID,
		[100, 100, 100, 1]
	));

	// Top
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[2], p[3], p[7], p[6] ],
		new Point(0, 1, 0),
		false /* single-sided */,
		Polygon.WIRE,
		[200, 200, 200, 0.9]
	));

	// Transparent Top
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[2], p[3], p[7], p[6] ],
		new Point(0, 1, 0),
		false /* single-sided */,
		Polygon.SOLID,
		[200, 200, 200, 1]
	));

	// Left
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[0], p[4], p[7], p[3] ],
		new Point(-1, 0, 0),
		true /* double-sided */,
		Polygon.SOLID,
		[150, 150, 150, 1]
	));

	// Right
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[1], p[5], p[6], p[2] ],
		new Point(1, 0, 0),
		true /* double-sided */,
		Polygon.SOLID,
		[50, 50, 50, 1]
	));
	

	//Floor
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[0], p[1], p[5], p[4] ],
		new Point(0, 1, 0),
		false /* single-sided */,
		Polygon.SOLID,
		[200, 200, 200, 1]
	));

	//setInterval('loop()', 20);
}

function load_triangle_pyramid(){
	Interaction.next_button.onclick = function(){
		window.location.hash = "rectangle";
		window.location.reload();
	};
	// Init drawing system
	canvas = $('canvas',Interaction.container).get(0);
	ctx = canvas.getContext("2d");
	//canvas.clearRect(0,0,canvas.width,canvas.height);
	canvasWidth = canvas.width*1;
	canvasHeight = canvas.height*1;
	halfCanvasWidth = canvasWidth * 0.5+20;
	halfCanvasHeight = canvasHeight * 0.5;


	// Create a box shape and add it to the scene
	scene.shapes['box'] = new Shape();
	var p = scene.shapes['box'].points; // for convenience

	p[0] = new Point3(-10, 0, -10*Math.sqrt(3)); // left  bottom front
	p[1] = new Point3(-10, 0, 10*Math.sqrt(3));  // right bottom front
	p[4] = new Point3(20 ,0, 0);  // left  bottom back
	p[5] = new Point3(20, 0, 0);   // right bottom back
	
	p[2] = new Point3(0, 20, 0);   // right top    front
	//p[3] = new Point3(-10, 20*Math.sqrt(3), -5);  // left  top    front
	//p[6] = new Point3(10, 20*Math.sqrt(3), 10);    // right top    back
	//p[7] = new Point3(-10, 20*Math.sqrt(3), 10);   // left  top    back
	
	p[3] = p[2];
	p[6] = p[2];
	p[7] = p[2];
	// Back
	scene.shapes['box'].polygons.push(new Polygon(
		[ p[0], p[1], p[2], p[3] ],
		new Point(0, 0, -1),
		true /* double-sided */,
		Polygon.SOLID,
		[100, 100, 100]
	));

	// Front
	scene.shapes['box'].polygons.push(new Polygon(
		[ p[4], p[5], p[6], p[7] ],
		new Point(0, 0, 1),
		true /* double-sided */,
		Polygon.SOLID,
		[100, 100, 100]
	));
	// Left
	scene.shapes['box'].polygons.push(new Polygon(
		[ p[0], p[4], p[7], p[3] ],
		new Point(-1, 0, 0),
		true /* double-sided */,
		Polygon.SOLID,
		[150, 150, 150]
	));

	// Right
	scene.shapes['box'].polygons.push(new Polygon(
		[ p[1], p[5], p[6], p[2] ],
		new Point(1, 0, 0),
		true /* double-sided */,
		Polygon.SOLID,
		[50, 50, 50]
	));

	//Floor
	scene.shapes['box'].polygons.push(new Polygon(
		[ p[0], p[1], p[5], p[4] ],
		new Point(0, 1, 0),
		false /* single-sided */,
		Polygon.SOLID,
		[200, 200, 200]
	));

}

function load_rectangle_pyramid(){
	Interaction.next_button.onclick = function(){
		window.location.hash = "square";
		window.location.reload();
	};
	canvas = $('canvas',Interaction.container).get(0);
	ctx = canvas.getContext("2d");

	canvasWidth = canvas.width*1;
	canvasHeight = canvas.height*1;
	halfCanvasWidth = canvasWidth * 0.5+20;
	halfCanvasHeight = canvasHeight * 0.5;

	// Init 3D components
	space = new Space();
	scene = new Scene();

	// Create a box shape and add it to the scene
	Interaction.oldShape = new Shape()
	scene.shapes['square_pyramid'] = Interaction.oldShape;
	var p = scene.shapes['square_pyramid'].points; // for convenience

	p[0] = new Point3(-20, -10, -10); // left  bottom front
	p[1] = new Point3(20, -10, -10);  // right bottom front
	p[2] = new Point3(0, 10, 0);   // right top    front
	p[3] = new Point3(-10, 10, -10);  // left  top    front

	p[4] = new Point3(-20, -10, 10);  // left  bottom back
	p[5] = new Point3(20, -10, 10);   // right bottom back
	p[6] = new Point3(10, 10, 10);    // right top    back
	p[7] = new Point3(-10, 10, 10);   // left  top    back
	
	p[3] = p[2];
	p[6] = p[2];
	p[7] = p[2];
//	p[5] = p[4];
//	p[6] = p[7];
	// Back
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[0], p[1], p[2], p[3] ],
		new Point(0, 0, -1),
		true /* double-sided */,
		Polygon.SOLID,
		[100, 100, 100, 1]
	));

	// Front
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[4], p[5], p[6], p[7] ],
		new Point(0, 0, 1),
		true /* double-sided */,
		Polygon.SOLID,
		[100, 100, 100, 1]
	));

	// Top
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[2], p[3], p[7], p[6] ],
		new Point(0, 1, 0),
		false /* single-sided */,
		Polygon.WIRE,
		[200, 200, 200, 1]
	));

	// Transparent Top
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[2], p[3], p[7], p[6] ],
		new Point(0, 1, 0),
		false /* single-sided */,
		Polygon.SOLID,
		[200, 200, 200, 1]
	));

	// Left
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[0], p[4], p[7], p[3] ],
		new Point(-1, 0, 0),
		true /* double-sided */,
		Polygon.SOLID,
		[150, 150, 150, 1]
	));

	// Right
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[1], p[5], p[6], p[2] ],
		new Point(1, 0, 0),
		true /* double-sided */,
		Polygon.SOLID,
		[50, 50, 50, 1]
	));

	// Create a floor shape and add it to the scene
	//scene.shapes['floor'] = new Shape();
	//var p = scene.shapes['floor'].points; // for convenience


	//p[0]  = new Point3(-40, -10, -40);
	//p[1]  = new Point3(-40, -10,  40);
	//p[2] = new Point3( 40, -10,  40);
	//p[3] = new Point3( 40, -10, -40);

	//Floor
	scene.shapes['square_pyramid'].polygons.push(new Polygon(
		[ p[0], p[1], p[5], p[4] ],
		new Point(0, 1, 0),
		false /* single-sided */,
		Polygon.SOLID,
		[200, 200, 200,1 ]
	));

	//setInterval('loop()', 20);
}

/* -------------------------------------------------------------------- */
