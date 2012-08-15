var Surface = function (points) {
    this.points = points;
    
    this.rotationsX = [];
    this.pivotsX = [];
    
    this.rotationsY = [];
    this.pivotsY = [];
    
	this.rotationsZ = [];
	this.pivotsZ = [];
	
	this.clearRotations = function() {
		this.pivotsX = [];
		this.rotationsX = [];
		this.pivotsY = [];
		this.rotationsY = [];
		this.pivotsZ = [];
		this.rotationsZ = [];
	}
	
    this.project = function(matrix) {
        if (this.projectedSurface) {
            this.projectedSurface.remove();
        }
        
        var path = new Path();
        
        
        var points = this.get2DPoints(matrix);
        
        for (var i = 0; i < points.length; i++) {
            path.add(points[i]);
        }
            
        path.closed = true;
	
		if (this.shape) {
			path.strokeColor = this.shape.strokeColor;
	        path.fillColor = this.shape.fillColor;
	        path.strokeWidth = this.shape.strokeWidth;
			path.opacity = this.shape.opacity;
		}
				
        this.projectedSurface = path;
        
		path.surface = this;

        return path;
    }
    
    this.get2DPoints = function(matrix) {
        var points = [];
        
        for (var i = 0; i < this.points.length; i++) {
            var p = this.points[i];
            

            for (j = 0; j < this.rotationsY.length; j++) {
				p = Util.rotateY(this.rotationsY[j], p, this.pivotsY[j]);
            }

            for (j = 0; j < this.rotationsZ.length; j++) {
				p = Util.rotateZ(this.rotationsZ[j], p, this.pivotsZ[j]);
            }

    		for (var j = 0; j < this.rotationsX.length; j++) {
				p = Util.rotateX(this.rotationsX[j], p, this.pivotsX[j]);
			}
	        
            
            var pp = Util.project(p, matrix);
            pp.x = Math.floor(pp.x) + 0.5;
            pp.y = Math.floor(pp.y) + 0.5;
          
            points.push(pp);
        }
             
        return points;
    }
};

var ExpandableShape = Class.extend({
	delay: 0,
	opacity: 1,
	
	init: function(matrix) {
		this.matrix = matrix;
		this.animate = Item.prototype.animate;
		
		this.fillColor = new RgbColor(0.75, 0.91, 0.94, 0.7);
	    this.strokeColor = "#255b63";
	    this.strokeWidth = 1;
	},
	
	setSurfaces: function (surfaces) {
		this.surfaces = surfaces;
		
		for (var key in this.surfaces) {
			if (this.surfaces.hasOwnProperty(key)) {
				if (this.surfaces[key] instanceof Surface) {
					this.surfaces[key].shape = this;
				}	
			}
		}
	},
	
	clearRotations: function() {
		for (var key in this.surfaces) {
			if (this.surfaces.hasOwnProperty(key)) {
				if (this.surfaces[key] instanceof Surface) {
					this.surfaces[key].clearRotations();
				}	
			}
		}
	},
	
	project: function() {
		for (var key in this.surfaces) {
			if (this.surfaces.hasOwnProperty(key)) {
				if (this.surfaces[key] instanceof Surface) {
					this.surfaces[key].project(this.matrix);
				}	
			}
		}
	},
	
	rotateSurfaceX: function(surface, angle, center, asynch) {
		var self = this;
		
		var animationHelper = new AnimationHelper ({
			angle: 0
		});
		
		animationHelper.animate({
			style: {
				angle: angle
			},
			duration: 800,
			delay: this.delay,
			animationType: 'easeInEaseOut',
			init: function() {
				if (center == undefined && center == null) {
					surface.pivotsX.push(new Point3(0,0,0));
				} else {
					surface.pivotsX.push(center);
				}
			},
			update: function() {
				surface.rotationsX[surface.pivotsX.length-1] = this.angle;
				self.project();
			}
		})
		
		if (!asynch) {
			this.delay += 1000;
		}
	},
	
	rotateSurfaceY: function(surface, angle, center, asynch) {
		var self = this;
		
		var animationHelper = new AnimationHelper ({
			angle: 0
		});
		
		animationHelper.animate({
			style: {
				angle: angle
			},
			duration: 800,
			delay: this.delay,
			animationType: 'easeInEaseOut',
			init: function() {
				if (center == undefined && center == nil) {
					surface.pivotsY.push(new Point3(0,0,0));
				} else {
					surface.pivotsY.push(center);
				}
			},
			update: function() {
				surface.rotationsY[surface.pivotsY.length-1] = this.angle;
				self.project();
			}
		})
		
		if (!asynch) {
			this.delay += 1000;
		}
	},
	
	rotateSurfaceZ: function(surface, angle, center, asynch) {
		var self = this;
		
		var animationHelper = new AnimationHelper ({
			angle: 0
		});
		
		animationHelper.animate({
			style: {
				angle: angle
			},
			duration: 800,
			delay: this.delay,
			animationType: 'easeInEaseOut',
			init: function() {
				if (center == undefined && center == nil) {
					surface.pivotsZ.push(new Point3(0,0,0));
				} else {
					surface.pivotsZ.push(center);
				}
			},
			update: function() {
				surface.rotationsZ[surface.pivotsZ.length-1] = this.angle;
				self.project();
			}
		})
		
		if (!asynch) {
			this.delay += 1000;
		}
	}
});
