var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        Animation.angle1 = new Angle({
            angle:70,
            phase:0,
            center:new Point(200,100),
            textPosition:new Point(350,140)
        });
        Animation.suplementAngle1 = new Angle({
            angle:0,
            phase:45,
            center:new Point(500,100)
        });
        Animation.angle1.setSuplement(Animation.suplementAngle1);
        Animation.angle1.draw();

        var animHelper = new AnimationHelper({
            point1:Animation.angle1.centerPoint,
            point2:Animation.suplementAngle1.centerPoint,
            point3:Animation.angle1.textPosition
        });
        animHelper.animate({
            style:{
                point1:new Point(50,100),
                point2:new Point(250,100),
                point3:new Point(200,140)
            },
            duration:1000,
            delay:1000,
            update:function(){
                Animation.angle1.centerPoint = this.point1;
                Animation.angle1.textPosition = this.point3;
                Animation.suplementAngle1.centerPoint = this.point2;
                Animation.angle1.redraw();
            },
            callback:function(){
                var angle = new Angle({
                    angle:70,
                    phase:0,
                    center:new Point(550,100),
                    textPosition:new Point(550,140)
                });

                var suplementAngle  = new Angle({
                    angle:120,
                    phase: 15,
                    center:new Point(550,100),
                    isNeighbour:true
                });
                angle.setSuplement(suplementAngle)
                angle.redraw();
            }

        })
    }
}