var ExpandablePrism = ExpandableShape.extend({
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
            surface(this.surfaces["topSurface"],this.matrix,i++);
            surface(this.surfaces["backSurface"],this.matrix,i++);
            surface(this.surfaces["rightSurface"],this.matrix,i++);
            surface(this.surfaces["frontSurface"],this.matrix,i++);

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
                new line(frontPoints[3-k],backPoints[k],i);
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