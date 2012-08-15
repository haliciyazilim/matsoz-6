
function __Styles() {
    fillColor = new RgbColor(0.75, 0.91, 0.94, 0.7);
    strokeColor = "#255b63";
    strokeWidth = 1;
}


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
	
	locked: false,
	lastExpand: -1,
	expand: function(style) {
		if (this.locked) {
			return false;
		}
		
		if (this.lastExpand != -1) {
			this.contract();
		} else {			
			this.clearRotations();
			
			this.locked = true;
			
			switch (style) {
				case 3:
					this.rotateSurfaceX(this.surfaces.topSurface, -Math.PI/2, this.surfaces.topSurface.points[2]);
					this.rotateSurfaceY(this.surfaces.leftSurface, Math.PI/2, this.surfaces.leftSurface.points[1]);
										
					this.rotateSurfaceY(this.surfaces.rightSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], true);
					this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], true);
					this.rotateSurfaceY(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], false);					
					
					this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));

					this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.bottomSurface.points[1]);
				
					break;
				case 2:
					this.rotateSurfaceY(this.surfaces.rightSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], true);
					this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], true);
					this.rotateSurfaceY(this.surfaces.topSurface, -Math.PI/2, this.surfaces.rightSurface.points[2]);
					
					this.rotateSurfaceX(this.surfaces.topSurface, -Math.PI/2, this.surfaces.rightSurface.points[2]);
					
					this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));

					this.rotateSurfaceY(this.surfaces.leftSurface, Math.PI/2, this.surfaces.leftSurface.points[1], true);
					this.rotateSurfaceY(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.leftSurface.points[1]);
					
					this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.bottomSurface.points[0]);
				
					break;
				case 1:
					this.rotateSurfaceY(this.surfaces.topSurface, Math.PI/2, this.surfaces.topSurface.points[3], true);
					this.rotateSurfaceY(this.surfaces.leftSurface, Math.PI/2, this.surfaces.leftSurface.points[1]);
					
					this.rotateSurfaceX(this.surfaces.topSurface, -Math.PI/2, this.surfaces.topSurface.points[2]);
					
					this.rotateSurfaceY(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.topSurface.points[2], true);
					this.rotateSurfaceY(this.surfaces.rightSurface, -Math.PI/2, this.surfaces.topSurface.points[2], true);
					this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.topSurface.points[2], false);
					
					this.rotateSurfaceY(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()), true);
					this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()), false);
					
					this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[2].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()), true);
					
					break;
				case 0:
				default:
					this.rotateSurfaceX(this.surfaces.topSurface, -Math.PI/2, this.surfaces.topSurface.points[2]);
					this.rotateSurfaceY(this.surfaces.rightSurface, -Math.PI/2, this.surfaces.rightSurface.points[2], true);
					this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[2]);
					this.rotateSurfaceY(this.surfaces.frontSurface, -Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
					this.rotateSurfaceY(this.surfaces.leftSurface, Math.PI/2, this.surfaces.leftSurface.points[1]);
					this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.bottomSurface.points[0]);
			}
		
			var self = this;
			
			AnimationManager.delay(function () {
				self.locked = false;
			}, this.delay);
			
			this.delay = 0;
			
			this.lastExpand = style;
			
			return true;
		}
	},
	
	contract: function() {
		if (this.locked) {
			return false;
		}
	
		if(this.lastExpand == -1) {
			return false;
		}
		
		this.locked = true;
		
		switch(this.lastExpand) {
			case 3:
				this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.bottomSurface.points[1]);
				
				this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
			
				this.rotateSurfaceY(this.surfaces.rightSurface, Math.PI/2, this.surfaces.rightSurface.points[2], true);
				this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[2], true);
				this.rotateSurfaceY(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.rightSurface.points[2], false);					
			
				this.rotateSurfaceY(this.surfaces.leftSurface, -Math.PI/2, this.surfaces.leftSurface.points[1]);
						
				this.rotateSurfaceX(this.surfaces.topSurface, Math.PI/2, this.surfaces.topSurface.points[2]);

				break;
				
			case 2:
				this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.bottomSurface.points[0]);
			
				this.rotateSurfaceY(this.surfaces.leftSurface, -Math.PI/2, this.surfaces.leftSurface.points[1], true);
				this.rotateSurfaceY(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.leftSurface.points[1]);
			
				this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
			
				this.rotateSurfaceX(this.surfaces.topSurface, Math.PI/2, this.surfaces.rightSurface.points[2]);
							
				this.rotateSurfaceY(this.surfaces.rightSurface, Math.PI/2, this.surfaces.rightSurface.points[2], true);
				this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[2], true);
				this.rotateSurfaceY(this.surfaces.topSurface, Math.PI/2, this.surfaces.rightSurface.points[2]);
				
				break;
			case 1:
				this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[2].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
			
				this.rotateSurfaceY(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()), true);
				this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()), false);
			
				this.rotateSurfaceY(this.surfaces.bottomSurface, Math.PI/2, this.surfaces.topSurface.points[2], true);
				this.rotateSurfaceY(this.surfaces.rightSurface, Math.PI/2, this.surfaces.topSurface.points[2], true);
				this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.topSurface.points[2], false);
			
				this.rotateSurfaceX(this.surfaces.topSurface, Math.PI/2, this.surfaces.topSurface.points[2]);
			
				this.rotateSurfaceY(this.surfaces.topSurface, -Math.PI/2, this.surfaces.topSurface.points[3], true);
				this.rotateSurfaceY(this.surfaces.leftSurface, -Math.PI/2, this.surfaces.leftSurface.points[1]);
				break;

			case 0:
			default:
				this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, this.surfaces.bottomSurface.points[0]);
				this.rotateSurfaceY(this.surfaces.leftSurface, -Math.PI/2, this.surfaces.leftSurface.points[1]);
				this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[1].add(this.surfaces.rightSurface.points[1].swapXZ()).subtract(this.surfaces.rightSurface.points[3].swapXZ()));
				this.rotateSurfaceY(this.surfaces.rightSurface, Math.PI/2, this.surfaces.rightSurface.points[2], true);
				this.rotateSurfaceY(this.surfaces.frontSurface, Math.PI/2, this.surfaces.rightSurface.points[2]);
				this.rotateSurfaceX(this.surfaces.topSurface, Math.PI/2, this.surfaces.topSurface.points[2]);
		}
		
		var self = this;
		
		AnimationManager.delay(function () {
			self.locked = false;
		}, this.delay);
		
		this.lastExpand = -1;
		this.delay = 0;
		
		return true;
	}
	
});

var Pyramid = ExpandableShape.extend({
	init: function(width, height, length, matrix) {
		this._super(matrix);
	
		this.width = width;
		this.height = height;
		this.length = length;
		
		width /= 2;
	    height /= 2;
	    length /= 2;
		
		this.setSurfaces({
		    backSurface: new Surface([
		        new Point3(-width,  height, length),
		        new Point3( width,  height, length),
		        new Point3( 0, -height, 0)
		        ]),
	        bottomSurface: new Surface([
	            new Point3(-width, height,  length),
	            new Point3( width, height,  length),
	            new Point3( width, height, -length),           
	            new Point3(-width, height, -length)
	            ]),
	        leftSurface: new Surface([
	            new Point3(0, -height, 0),
	            new Point3(-width,  height,  length),
	            new Point3(-width,  height, -length)
	            ]),
	        rightSurface: new Surface([
	            new Point3(width,  height, -length),
	            new Point3(width,  height,  length),
	            new Point3(0, -height,  0)
	            ]),
	        frontSurface: new Surface([
	            new Point3(0, -height, 0),
	            new Point3( width,  height, -length),
	            new Point3(-width,  height, -length)
	            ])
	    });
	},
	
	lastExpand: -1,
	expand: function(style) {
		if (this.lastExpand != -1) {
			this.contract();
		} else {
			switch (style) {
				case 0:
				default:

					var angle1 = Math.atan(this.width/this.height/2) + Math.PI/2;
					var angle2 = Math.atan(this.length/this.height/2) + Math.PI/2;

					var center = new Point3(0,0,0);
					this.rotateSurfaceZ(this.surfaces.rightSurface, angle1, this.surfaces.rightSurface.points[0], false);
					this.rotateSurfaceX(this.surfaces.backSurface, -angle2, this.surfaces.backSurface.points[0], false);
					this.rotateSurfaceZ(this.surfaces.leftSurface, -angle1, this.surfaces.leftSurface.points[1], false);
					this.rotateSurfaceX(this.surfaces.frontSurface, angle2, this.surfaces.frontSurface.points[1], false);
				
					this.rotateSurfaceX(this.surfaces.rightSurface, Math.PI/2, center, true);
					this.rotateSurfaceX(this.surfaces.leftSurface, Math.PI/2, center, true);
					this.rotateSurfaceX(this.surfaces.frontSurface, Math.PI/2, center, true);
					this.rotateSurfaceX(this.surfaces.backSurface, Math.PI/2, center, true);				
					this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, center);
			}
		
			this.lastExpand = style;
		}
	},
	
	contract: function() {
		if(this.lastExpand == -1) {
			return;
		}
		
		switch(this.lastExpand) {
			case 0:
			default:
			
				var angle1 = Math.atan(this.width/this.height/2) + Math.PI/2;
				var angle2 = Math.atan(this.length/this.height/2) + Math.PI/2;

				var center = new Point3(0,0,0);
				this.rotateSurfaceZ(this.surfaces.rightSurface, angle1, this.surfaces.rightSurface.points[0], false);
				this.rotateSurfaceX(this.surfaces.backSurface, -angle2, this.surfaces.backSurface.points[0], false);
				this.rotateSurfaceZ(this.surfaces.leftSurface, -angle1, this.surfaces.leftSurface.points[1], false);
				this.rotateSurfaceX(this.surfaces.frontSurface, angle2, this.surfaces.frontSurface.points[1], false);
				//this.delay -= 500;
			
				this.rotateSurfaceX(this.surfaces.rightSurface, Math.PI/2, center, true);
				this.rotateSurfaceX(this.surfaces.leftSurface, Math.PI/2, center, true);
				this.rotateSurfaceX(this.surfaces.frontSurface, Math.PI/2, center, true);
				this.rotateSurfaceX(this.surfaces.backSurface, Math.PI/2, center, true);				
				this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, center);
		}
	}
});

var Animation = {
    init: function(container) {
        var cubeMatrix = Util.createProjectionMatrixForObjectAt(140, 100);
        var cube = new Prism(50, 50, 50, cubeMatrix);
		cube.strokeColor = '#9b763d';
		cube.fillColor = new RgbColor(0.95, 0.78, 0.52, 0.7);
        cube.project();
		cube.delay = 2000;		
		cube.expand(0);
		
		
		var prismMatrix = Util.createProjectionMatrixForObjectAt(500, 90);
		var prism = new Prism(50, 90, 30, prismMatrix);
		prism.strokeColor = '#9c4f4f';
		prism.fillColor = new RgbColor(0.91, 0.62, 0.62, 0.7);
        prism.project();
		prism.delay = 8000;
		prism.expand(0);
		
		
				// 
				// var pyramidMatrix = Util.createProjectionMatrixForObjectAt(300, 90);
				// var pyramid = new Pyramid(60, 50, 40, pyramidMatrix);
				// pyramid.project();
				// pyramid.expand();
				// 
		// var tetrMatrix = Util.createProjectionMatrixForObjectAt(300, 90);
		// var tetr = new Tetrahedron(100, tetrMatrix);
		// tetr.delay = 1000;
		// tetr.project();
		// tetr.expand();
		
		Main.animationFinished(14000);
    }
}


var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init: function(container){
		Interaction.array = Util.getShuffledArray(4);
		
        Interaction.cube = new Prism(80, 80, 80);
		Interaction.cube.x = 140;
		Interaction.cube.y = 160;
		Interaction.cube.xorg = Interaction.cube.x;
		Interaction.cube.yorg = Interaction.cube.y;
		Interaction.cube.matrix = Util.createProjectionMatrixForObjectAt(Interaction.cube.x, Interaction.cube.y);
        Interaction.cube.project();
		
		Interaction.prism = new Prism(100, 40, 70);
		Interaction.prism.x = 400;
		Interaction.prism.y = 160;
		Interaction.prism.xorg = Interaction.prism.x;
		Interaction.prism.yorg = Interaction.prism.y;		
		Interaction.prism.matrix = Util.createProjectionMatrixForObjectAt(Interaction.prism.x, Interaction.prism.y);
        Interaction.prism.project();
		
		Interaction.index = 0;
		Interaction.expanded = false;
		Interaction.createTool();
		
		Main.setObjective('Yandaki geometrik cisimlerden açınımını elde etmek istediğinizin üzerine basınız. Her seferinde farklı açınımını elde edeceksiniz.');
    },
	createTool: function() {
		var tool = new Tool();
		tool.onMouseDown = function (event) {
			if (event.item) {
				var shape = event.item.surface.shape;
				
				var otherShape;
				
				if (shape == Interaction.cube) {
					otherShape = Interaction.prism;
				} else {
					otherShape = Interaction.cube;
				}
				
				if (Interaction.expanded) {
					if (shape.contract()) {
						Interaction.expanded = false;
						
						shape.animate({
							style: {
								x: shape.xorg,
								y: shape.yorg								
							},
							duration: 1000,
							delay: 5000,
							animationType: 'easeInEaseOut',
							init: function() {
								Main.setObjective('Yandaki geometrik cisimlerden açınımını elde etmek istediğinizin üzerine basınız. Her seferinde farklı açınımını elde edeceksiniz.');
							},
							update: function () {
								shape.matrix = Util.createProjectionMatrixForObjectAt(shape.x, shape.y);
								shape.project();
							}
						})
						
						otherShape.animate({
							style: {
								opacity: 1
							},
							duration: 500,
							delay: 5250,
							animationType: 'easeInEaseOut',
							update: function () {
								otherShape.project();
							}
						})
					}
				} else {
					shape.delay = 1000;
					if (shape.expand(Interaction.array[Interaction.index])) {
						Interaction.index = (Interaction.index + 1) % 4
						Interaction.expanded = true;
						// setTimeout(function() {}, 4000);
						

						shape.animate({
							style: {
								x: 240,
								y: 160								
							},
							duration: 1000,
							animationType: 'easeInEaseOut',
							update: function () {
								shape.matrix = Util.createProjectionMatrixForObjectAt(shape.x, shape.y);
								shape.project();
							},
							callback: function () {
								Main.setObjective('Yandaki açınımın hangi geometrik cisim olduğunu görmek için açınımın üzerine basınız.');
							}
						})

						otherShape.animate({
							style: {
								opacity: 0
							},
							duration: 500,
							delay: 250,
							animationType: 'easeInEaseOut',
							update: function () {
								otherShape.project();
							}
						})
					}
				}
			}
		}
	}
}
