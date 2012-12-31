function point(p){
    var point = Util.project(p.from,Interaction.matrix).showOnCanvas(5);
    if(p.to){
        for(var i=0;i<p.to.length;i++)
            point.animate({
                style:{position:Util.project(p.to[i],Interaction.matrix)},
                duration:1000,
                delay:1000*(i+1)
            });
    }
}
function surface(scene){
    var surface = new Surface(scene.points);
    surface.shape = {
        strokeColor:new RgbColor(65/255,129/255,138/255,0.5),
        fillColor:new RgbColor(168/255,219/255,227/255,0.5)
    }
    surface.project(Interaction.matrix);
    var animHelper = new AnimationHelper({
        angle:0
    });


    if(scene.rotateX || scene.rotateY || scene.rotateZ){
        animHelper.animate({
            style:{angle:Math.PI * 2},
            duration:2000,
            delay:1500,
            init:function(){
                if(scene.rotateX)
                    surface.pivotsX[0] = scene.rotateX;
                else if(scene.rotateY)
                    surface.pivotsY[0] = scene.rotateY;
                else
                    surface.pivotsZ[0] = scene.rotateZ;
            },
            update:function(){
                if(scene.rotateX)
                    surface.rotationsX[0] = this.angle;
                else if(scene.rotateY)
                    surface.rotationsY[0] = this.angle;
                else
                    surface.rotationsZ[0] = this.angle;
                surface.project(Interaction.matrix)
            }
        });
    }

}
function line(scene){
    var centerPoint = Util.centerOfPoints([
        Util.project(scene.point1,Interaction.matrix),
        Util.project(scene.point2,Interaction.matrix)
    ]);

    var point1  = centerPoint.showOnCanvas(5);
    point1.animate({
        style:{position:Util.project(scene.point1,Interaction.matrix)},
        duration:1000,
        delay:100
    });
    point1.set_style({fillColor:"#41818"})
    var point2  = centerPoint.showOnCanvas(5);
    point2.animate({
        style:{position:Util.project(scene.point2,Interaction.matrix)},
        duration:1000,
        delay:100
    });
    point2.set_style({fillColor:"#41818"})
    var animHelper = new AnimationHelper({
        line:null,
        point1:centerPoint,
        point2:centerPoint
    });
    animHelper.animate({
        style:{
            point1:Util.project(scene.point1,Interaction.matrix),
            point2:Util.project(scene.point2,Interaction.matrix)
        },
        duration:1000,
        delay:100,
        update:function(){
            if(this.line)
                this.line.remove();
            this.line = new Path.Line(this.point1,this.point2);
            this.line.set_style({
                strokeColor:"#41818A",
                strokeWidth:2
            });
        }
    });
    if(scene.rotateX || scene.rotateY || scene.rotateZ){
        var anim = new AnimationHelper({
            angle:0
        });
        anim.animate({
            style:{angle:Math.PI*2},
            duration:2000,
            delay:1500,
            update:function(){
                if(scene.rotateX){
                    var p1 = Util.project(scene.point1.getRotatedPointByX(this.angle), Interaction.matrix);
                    var p2 = Util.project(scene.point2.getRotatedPointByX(this.angle), Interaction.matrix);
                }
                else if(scene.rotateY){
                    var p1 = Util.project(scene.point1.getRotatedPointByY(this.angle), Interaction.matrix);
                    var p2 = Util.project(scene.point2.getRotatedPointByY(this.angle), Interaction.matrix);
                }else{
                    var p1 = Util.project(scene.point1.getRotatedPointByY(this.angle), Interaction.matrix);
                    var p2 = Util.project(scene.point2.getRotatedPointByY(this.angle), Interaction.matrix);
                }
                if(animHelper.line)
                    animHelper.line.remove();
                animHelper.line = new Path.Line(p1,p2);
                animHelper.line.set_style({
                    strokeColor:"#41818A",
                    strokeWidth:2
                });
                point1.position = p1;
                point2.position = p2;
            }

        })
    }
}
function dashedLine(scene){
    this.line = new Path.Line(Util.project(scene.point1,Interaction.matrix),Util.project(scene.point2,Interaction.matrix));
    this.line.set_style({
        strokeColor:new RgbColor(65/255,129/255,138/255,1),
        dashArray:[3,2]
    });
}