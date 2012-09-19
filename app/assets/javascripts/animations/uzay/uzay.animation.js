var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 0;
        var lineStart = animStart+2000;
        var lineExStart = lineStart+3000;

        var animHelper = new AnimationHelper({
            pointA:new Point(360,80),
            pointB:new Point(362,80),
            angle:0,
            x:0
        });

        var line1,line2,line3,line4,line5,line6,line7,line8,line9;
        var fillPath1, fillPath2, fillPath3;
        var firstX = animHelper.pointB.x;
        var firstPos;
        var r = 38;

        line1 = new Path.Line(animHelper.pointA,animHelper.pointB);
        line1.set_style(lineStyle);

        animHelper.animate({
            style:{
                angle:Math.PI*0.5
            },
            duration:2000,
            delay:lineStart,
            update:function(){
                if(line1){
                    line1.remove();
                }
                this.pointB.x = firstX + r*Math.sin(this.angle);

                line1 = new Path.Line(this.pointA,this.pointB);
                line1.set_style(lineStyle);
            }
        });

        animHelper.animate({
            style:{
                pointA:new Point(340,80),
                pointB:new Point(420,80)
            },
            duration:2000,
            delay:lineExStart,
            animationType:'easeInOutQuad',
            update:function(){
                if(line1){
                    line1.remove();
                }
                line1 = new Path.Line(this.pointA,this.pointB);
                line1.set_style(lineStyle);
            }
        });
    }
}