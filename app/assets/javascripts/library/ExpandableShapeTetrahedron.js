var ExpandableShapeTetrahedron = ExpandableShape.extend({
	init: function(size, matrix) {
		this._super(matrix);
		
		size /= 2;
		this.size = size;
		
		
		this.setSurfaces({
		    backSurface: new Surface([
		        new Point3( size*Math.sqrt(3)/2, size*Math.sqrt(2)/3, size/2),
		        new Point3(-size*Math.sqrt(3)/2, size*Math.sqrt(2)/3, size/2),
		        new Point3(0, -2*size*Math.sqrt(2)/3, 0)
		        ]),
	        bottomSurface: new Surface([
	            new Point3(-size*Math.sqrt(3)/2, size*Math.sqrt(2)/3, size/2),
	            new Point3( size*Math.sqrt(3)/2, size*Math.sqrt(2)/3, size/2),
	            new Point3( 0, size*Math.sqrt(2)/3, -size)
	            ]),
	        leftSurface: new Surface([
				new Point3(-size*Math.sqrt(3)/2, size*Math.sqrt(2)/3, size/2),
	            new Point3( 0, size*Math.sqrt(2)/3, -size),
	            new Point3(0, -2*size*Math.sqrt(2)/3, 0)
	            ]),
	        rightSurface: new Surface([
	            new Point3( size*Math.sqrt(3)/2, size*Math.sqrt(2)/3, size/2),
	            new Point3(0, -2*size*Math.sqrt(2)/3, 0),
	            new Point3( 0, size*Math.sqrt(2)/3, -size)
	            ])
	    });
	},
	 showSurfaces : function(delay,startingDelay) {
        var surface = function(s,m,index){
                AnimationManager.delay(function(){
                    var path = new Path();
                    var p = s.get2DPoints(m);
                    for(var i=0;i<p.length;i++)
                        path.add(p[i]);
                    path.closed = true;
                    path.set_style(animationSurfacesHighlightStyle);
                    path.set_style({
                        opacity:0
                    });
                    path.animate({
                        style:{opacity:1},
                        duration:0,//delay,
                        delay:delay*index
                    });

                    path.animate({
                        style:{opacity:0},
                        delay:delay*8,
                        duration:delay,
                        callback:path.remove
                    })
                }, startingDelay);
            }
            var i=0;
            surface(this.surfaces["bottomSurface"],this.matrix,i++);
            surface(this.surfaces["leftSurface"],this.matrix,i++);
            surface(this.surfaces["backSurface"],this.matrix,i++);
            surface(this.surfaces["rightSurface"],this.matrix,i++);
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
                        var a = new AnimationHelper({
                            shape:null,
                            opacity:0
                        });
                        a.animate({
                            style:{opacity:1}, 
                            duration:0,//delay,
                            delay:delay*i,
                            update:function(){
                                if(this.shape)
                                    this.shape.remove();
                                this.shape = new Path.Circle(p1,4);
                                this.shape.set_style(animationVertexesHighlightStyle);
                                this.shape.set_style({opacity:this.opacity});
                            }
                        })
                        a.animate({
                            style:{opacity:0},
                            delay:delay*8,
                            duration:delay,
                            callback:function(){
                                this.shape.remove();
                            },
                            update:function(){
                                if(this.shape)
                                    this.shape.remove();
                                this.shape = new Path.Circle(p1,4);
                                this.shape.set_style(animationVertexesHighlightStyle);
                                this.shape.set_style({opacity:this.opacity});
                            }
                        })
                    }
                })
            }
            var bottomPoints = this.surfaces.bottomSurface.get2DPoints(this.matrix);
            var topPoint = this.surfaces.leftSurface.get2DPoints(this.matrix)[2];
            var i = 0,j = 0,k = 0;
            for (; i < bottomPoints.length; i++) {
                new circle(bottomPoints[i],i);
            }
            new circle(topPoint,i);

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
                        var path = new Path.Line(p1,p2);
                        path.set_style(animationEdgesHighlightStyle);
                        path.set_style({
                            opacity:0
                        });
                        path.animate({
                            style:{opacity:1},
                            duration:0,//delay,
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
            var bottomPoints = this.surfaces.bottomSurface.get2DPoints(this.matrix);
            var topPoint = this.surfaces.leftSurface.get2DPoints(this.matrix)[2];
            var i = 0,j = 0,k = 0;
            for (; i < bottomPoints.length; i++) {
                new line(bottomPoints[i],bottomPoints[(i+1)%bottomPoints.length],i);
            }
            for (;j < bottomPoints.length ; j++,i++){
                new line(bottomPoints[j],topPoint,i);
            }
        },
	expand: function(style) {
		switch (style) {
			case 0:
			default:

				//var angle = Math.atan(Math.sqrt(2)) + Math.PI/2;
				var angle = Math.PI - Math.atan(4*Math.sqrt(2));
				var angle2 = Math.PI*5/6 - Math.acos(Math.sqrt(3)/6);
					// angle = Math.PI/4;
				//var center = new Point3(0,this.size*Math.sqrt(2)/3,0);
				var center = new Point3(this.size*Math.sqrt(3)/4, this.size*Math.sqrt(2)/3, -this.size/4);
				
				var animationHelper = new AnimationHelper({
					rotation: 0,
					rotation2: 0,
					rotation3: 0
				})
				
				this.rightSurfacePoint = this.surfaces.rightSurface.points[1];
				this.backSurfacePoint = this.surfaces.backSurface.points[2];
				this.leftSurfacePoint = this.surfaces.leftSurface.points[2];
				
				var self = this;
				
				animationHelper.animate({
					style: {
						rotation: angle
					},
					duration: 900,
					delay: this.delay,
					animationType: 'easeInEaseOut',
					update: function() {
						self.surfaces.rightSurface.points[1] = self.rightSurfacePoint.getRotatedPointByX(this.rotation, center);
						self.surfaces.rightSurface.points[1] = self.surfaces.rightSurface.points[1].getRotatedPointByY(-angle2/*this.rotation/angle*/, center);
						self.project();
					}
				})
				
				
				var center2 = new Point3(0, this.size*Math.sqrt(2)/3, this.size/2);
				var angle3 = Math.asin(1/3) + Math.PI/2;
				
				animationHelper.animate({
					style: {
						rotation2: angle3
					},
					duration: 900,
					delay: this.delay+1000,
					animationType: 'easeInEaseOut',
					update: function() {
						self.surfaces.backSurface.points[2] = self.backSurfacePoint.getRotatedPointByX(-this.rotation2, center2);
						self.project();
					}
				})
				
				var center3 = new Point3(-this.size*Math.sqrt(3)/4, this.size*Math.sqrt(2)/3, -this.size/4);
				
				animationHelper.animate({
					style: {
						rotation3: angle
					},
					duration: 900,
					delay: this.delay + 2000,
					animationType: 'easeInEaseOut',
					update: function() {
						self.surfaces.leftSurface.points[2] = self.leftSurfacePoint.getRotatedPointByX(this.rotation3, center3);
						self.surfaces.leftSurface.points[2] = self.surfaces.leftSurface.points[2].getRotatedPointByY(angle2/*this.rotation3/angle*/, center3);
						self.project();
					}
				})
				
				this.delay += 3000;
				
				var center4 = new Point3(0,0,0);
				
				this.rotateSurfaceX(this.surfaces.rightSurface, Math.PI/2, center4, true);
				this.rotateSurfaceX(this.surfaces.backSurface, Math.PI/2, center4, true);				
				this.rotateSurfaceX(this.surfaces.leftSurface, Math.PI/2, center4, true);
				this.rotateSurfaceX(this.surfaces.bottomSurface, Math.PI/2, center4, true);
		}
	},
	
	contract: function() {
		var center4 = new Point3(0,0,0);
		this.rotateSurfaceX(this.surfaces.rightSurface, -Math.PI/2, center4, true);
		this.rotateSurfaceX(this.surfaces.backSurface, -Math.PI/2, center4, true);				
		this.rotateSurfaceX(this.surfaces.leftSurface, -Math.PI/2, center4, true);
		this.rotateSurfaceX(this.surfaces.bottomSurface, -Math.PI/2, center4, true);
		
		
		var angle = Math.PI - Math.atan(4*Math.sqrt(2));
		var angle2 = Math.PI*5/6 - Math.acos(Math.sqrt(3)/6);
		
		var angle3 = Math.asin(1/3) + Math.PI/2;
		var center = new Point3(this.size*Math.sqrt(3)/4, this.size*Math.sqrt(2)/3, -this.size/4);
		
		var animationHelper = new AnimationHelper({
			rotation: angle,
			rotation2: angle3,
			rotation3: angle
		})
		
		var self = this;
		
		
		
		
		var center3 = new Point3(-this.size*Math.sqrt(3)/4, this.size*Math.sqrt(2)/3, -this.size/4);
		
		animationHelper.animate({
			style: {
				rotation3: 0
			},
			duration: 900,
			delay: this.delay + 1000,
			animationType: 'easeInEaseOut',
			update: function() {
				self.surfaces.leftSurface.points[2] = self.leftSurfacePoint.getRotatedPointByX(this.rotation3, center3);
				self.surfaces.leftSurface.points[2] = self.surfaces.leftSurface.points[2].getRotatedPointByY(angle2/*this.rotation3/angle*/, center3);
				self.project();
			},
			callback: function() {
				self.surfaces.leftSurface.points[2] = self.leftSurfacePoint;
				self.project();
			}
		})
		
		
		var center2 = new Point3(0, this.size*Math.sqrt(2)/3, this.size/2);
		
		animationHelper.animate({
			style: {
				rotation2: 0
			},
			duration: 900,
			delay: this.delay+2000,
			animationType: 'easeInEaseOut',
			update: function() {
				self.surfaces.backSurface.points[2] = self.backSurfacePoint.getRotatedPointByX(-this.rotation2, center2);
				self.project();
			}
		})
		
		animationHelper.animate({
			style: {
				rotation: 0
			},
			duration: 900,
			delay: this.delay + 3000,
			animationType: 'easeInEaseOut',
			update: function() {
				self.surfaces.rightSurface.points[1] = self.rightSurfacePoint.getRotatedPointByX(this.rotation, center);
				self.surfaces.rightSurface.points[1] = self.surfaces.rightSurface.points[1].getRotatedPointByY(-angle2/*this.rotation/angle*/, center);
				self.project();
			},
			callback: function() {
				self.surfaces.rightSurface.points[1] = self.rightSurfacePoint;
				self.project();
			}
		})  

		

		
		
		
		
		
		
		
	}
});