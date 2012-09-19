var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 0;
        var lineStart = animStart+2000;
        var dotGone = lineStart+3000;
        var lineExStart = dotGone+1000;
        var surfaceStart = lineExStart+3000;
        var rotationStart = surfaceStart+3000;
        var surfaceExStart = rotationStart+3000;
        var cubeStart = surfaceExStart+3000;
        var cubeExStart = cubeStart+3000;

        var animHelper = new AnimationHelper({
            pointA:new Point(370,120),
            pointB:new Point(372,120),
            pointC:new Point(420,120),
            pointD:new Point(350,120),
            pointE:new Point(330,60),
            pointF:new Point(430,60),
            pointG:new Point(430,160),
            angle:0,
            x:0,
            myOpacity:1,
            radius1:4,
            radius2:4
        });

        var line1,line2,line3,line4,line5,line6,line7,line8;
        var fillPath1, fillPath2, fillPath3;
        var firstX = animHelper.pointB.x;
        var firstPos;
        var r = 28;

        line1 = new Path.Line(animHelper.pointA,animHelper.pointB);
        line1.set_style(lineStyle);

        var circ2 = new Path.Circle(animHelper.pointA,animHelper.radius2);
        circ2.set_style(circStyle);

        var circ1 = new Path.Circle(animHelper.pointA,animHelper.radius1);
        circ1.set_style(circStyle);

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

                if(circ1){
                    circ1.remove();
                }
                if(circ2){
                    circ2.remove();
                }

                line1 = new Path.Line(this.pointA,this.pointB);
                line1.set_style(lineStyle);

                circ2 = new Path.Circle(this.pointB,this.radius2);
                circ2.set_style(circStyle);

                circ1 = new Path.Circle(this.pointA,this.radius1);
                circ1.set_style(circStyle);

            }
        });

        animHelper.animate({
            style:{
                myOpacity:0
            },
            duration:1000,
            delay:dotGone,
            animationType:'easeInOutQuad',
            update:function(){
                if(circ1){
                    circ1.remove();
                }
                if(circ2){
                    circ2.remove();
                }

                circ1 = new Path.Circle(this.pointA,this.radius1);
                circ1.set_style(circStyle);
                circ1.opacity = this.myOpacity;

                circ2 = new Path.Circle(this.pointB,this.radius2);
                circ2.set_style(circStyle);
                circ2.opacity = this.myOpacity;
            }
        });

        animHelper.animate({
            init:function(){
                if(circ1){
                    circ1.remove();
                }

                if(circ2){
                    circ2.remove();
                }
            },
            style:{
                pointA:new Point(350,120),
                pointB:new Point(420,120)
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

        animHelper.animate({
            style:{
                pointC:new Point(472,64),
                pointD:new Point(402,64)
            },
            duration:2000,
            delay:surfaceStart,
            animationType:'easeInOutQuad',
            update:function(){
                if(line2){
                    line2.remove();
                }
                if(line3){
                    line3.remove();
                }
                if(line4){
                    line4.remove();
                }
                if(fillPath1){
                    fillPath1.remove();
                }

                line2 = new Path.Line(this.pointB,this.pointC);
                line2.set_style(lineStyle);

                line3 = new Path.Line(this.pointC,this.pointD);
                line3.set_style(lineStyle);

                line4 = new Path.Line(this.pointD,this.pointA);
                line4.set_style(lineStyle);

                fillPath1 = new Path();
                fillPath1.moveTo(this.pointA);
                fillPath1.lineTo(this.pointB);
                fillPath1.lineTo(this.pointC);
                fillPath1.lineTo(this.pointD);
                fillPath1.lineTo(this.pointA);
                fillPath1.set_style(fillStyle);
            }
        });

        animHelper.animate({
            init:function(){
                this.angle = 0;
            },
            style:{
                pointC:new Point(420,50),
                pointD:new Point(350,50),
                angle:Math.PI
            },
            duration:2000,
            delay:rotationStart,
            animationType:'easeInOutQuad',
            update:function(){
                if(line2){
                    line2.remove();
                }
                if(line3){
                    line3.remove();
                }
                if(line4){
                    line4.remove();
                }
                if(fillPath1){
                    fillPath1.remove();
                }

                line2 = new Path.Line(this.pointB,
                    this.pointC
                        .add(
                        -10*Math.sin(this.angle),
                        -10*Math.sin(this.angle)
                    )
                );
                line2.set_style(lineStyle);

                line3 = new Path.Line(
                    this.pointC
                        .add(
                        -10*Math.sin(this.angle),
                        -10*Math.sin(this.angle)
                    ),
                    this.pointD
                        .add(
                        -10*Math.sin(this.angle),
                        -10*Math.sin(this.angle)
                    )
                );
                line3.set_style(lineStyle);

                line4 = new Path.Line(
                    this.pointD
                        .add(
                        -10*Math.sin(this.angle),
                        -10*Math.sin(this.angle)
                    ),
                    this.pointA);
                line4.set_style(lineStyle);

                fillPath1 = new Path();
                fillPath1.moveTo(this.pointA);
                fillPath1.lineTo(this.pointB);
                fillPath1.lineTo(
                    this.pointC
                        .add(
                        -10*Math.sin(this.angle),
                        -10*Math.sin(this.angle)
                    )
                );
                fillPath1.lineTo(
                    this.pointD
                        .add(
                        -10*Math.sin(this.angle),
                        -10*Math.sin(this.angle)
                    )
                );
                fillPath1.lineTo(this.pointA);
                fillPath1.set_style(fillStyle);
            }
        });

        animHelper.animate({
            style:{
                pointA:new Point(330,160),
                pointB:new Point(430,160),
                pointC:new Point(430,60),
                pointD:new Point(330,60)
            },
            duration:2000,
            delay:surfaceExStart,
            animationType:'easeInOutQuad',
            update:function(){
                if(line1){
                    line1.remove();
                }
                if(line2){
                    line2.remove();
                }
                if(line3){
                    line3.remove();
                }
                if(line4){
                    line4.remove();
                }
                if(fillPath1){
                    fillPath1.remove();
                }

                line1 = new Path.Line(this.pointA,this.pointB);
                line1.set_style(lineStyle);

                line2 = new Path.Line(this.pointB,this.pointC);
                line2.set_style(lineStyle);

                line3 = new Path.Line(this.pointC,this.pointD);
                line3.set_style(lineStyle);

                line4 = new Path.Line(this.pointD,this.pointA);
                line4.set_style(lineStyle);

                fillPath1 = new Path();
                fillPath1.moveTo(this.pointA);
                fillPath1.lineTo(this.pointB);
                fillPath1.lineTo(this.pointC);
                fillPath1.lineTo(this.pointD);
                fillPath1.lineTo(this.pointA);
                fillPath1.set_style(fillStyle);
            }
        });

        animHelper.animate({
            style:{
                pointE:new Point(380,30),
                pointF:new Point(480,30),
                pointG:new Point(480,130)
            },
            duration:2000,
            delay:cubeStart,
            animationType:'easeInOutQuad',
            update:function(){
                if(line1){
                    line1.remove();
                }
                if(line2){
                    line2.remove();
                }
                if(line3){
                    line3.remove();
                }
                if(line4){
                    line4.remove();
                }
                if(line5){
                    line5.remove();
                }
                if(line6){
                    line6.remove();
                }
                if(line7){
                    line7.remove();
                }
                if(line8){
                    line8.remove();
                }
                if(fillPath1){
                    fillPath1.remove();
                }
                if(fillPath2){
                    fillPath1.remove();
                }
                if(fillPath3){
                    fillPath1.remove();
                }

                line1 = new Path.Line(this.pointA,this.pointB);
                line1.set_style(lineStyle);

                line2 = new Path.Line(this.pointB,this.pointC);
                line2.set_style(lineStyle);

                line3 = new Path.Line(this.pointC,this.pointD);
                line3.set_style(lineStyle);

                line4 = new Path.Line(this.pointD,this.pointA);
                line4.set_style(lineStyle);

                line5 = new Path.Line(this.pointD,this.pointE);
                line5.set_style(lineStyle);

                line6 = new Path.Line(this.pointE,this.pointF);
                line6.set_style(lineStyle);

                line7 = new Path.Line(this.pointF,this.pointG);
                line7.set_style(lineStyle);

                line8 = new Path.Line(this.pointG,this.pointB);
                line8.set_style(lineStyle);

                fillPath1 = new Path();
                fillPath1.moveTo(this.pointA);
                fillPath1.lineTo(this.pointB);
                fillPath1.lineTo(this.pointC);
                fillPath1.lineTo(this.pointD);
                fillPath1.lineTo(this.pointA);
                fillPath1.set_style(fillStyle);

                fillPath2 = new Path();
                fillPath2.moveTo(this.pointD);
                fillPath2.lineTo(this.pointE);
                fillPath2.lineTo(this.pointF);
                fillPath2.lineTo(this.pointC);
                fillPath2.lineTo(this.pointD);
                fillPath2.set_style(fillStyle);

                fillPath3 = new Path();
                fillPath3.moveTo(this.pointC);
                fillPath3.lineTo(this.pointF);
                fillPath3.lineTo(this.pointG);
                fillPath3.lineTo(this.pointB);
                fillPath3.lineTo(this.pointC);
                fillPath3.set_style(fillStyle);
            }
        });

        animHelper.animate({
            style:{
                pointA:new Point(324,166),
                pointB:new Point(430,166),
                pointC:new Point(430,60),
                pointD:new Point(324,60),
                pointE:new Point(380,30),
                pointF:new Point(486,30),
                pointG:new Point(486,136)
            },
            duration:2000,
            delay:cubeExStart,
            animationType:'easeInOutQuad',
            update:function(){
                if(line1){
                    line1.remove();
                }
                if(line2){
                    line2.remove();
                }
                if(line3){
                    line3.remove();
                }
                if(line4){
                    line4.remove();
                }
                if(line5){
                    line5.remove();
                }
                if(line6){
                    line6.remove();
                }
                if(line7){
                    line7.remove();
                }
                if(line8){
                    line8.remove();
                }
                if(fillPath1){
                    fillPath1.remove();
                }
                if(fillPath2){
                    fillPath1.remove();
                }
                if(fillPath3){
                    fillPath1.remove();
                }

                line1 = new Path.Line(this.pointA,this.pointB);
                line1.set_style(lineStyle);

                line2 = new Path.Line(this.pointB,this.pointC);
                line2.set_style(lineStyle);

                line3 = new Path.Line(this.pointC,this.pointD);
                line3.set_style(lineStyle);

                line4 = new Path.Line(this.pointD,this.pointA);
                line4.set_style(lineStyle);

                line5 = new Path.Line(this.pointD,this.pointE);
                line5.set_style(lineStyle);

                line6 = new Path.Line(this.pointE,this.pointF);
                line6.set_style(lineStyle);

                line7 = new Path.Line(this.pointF,this.pointG);
                line7.set_style(lineStyle);

                line8 = new Path.Line(this.pointG,this.pointB);
                line8.set_style(lineStyle);

                fillPath1 = new Path();
                fillPath1.moveTo(this.pointA);
                fillPath1.lineTo(this.pointB);
                fillPath1.lineTo(this.pointC);
                fillPath1.lineTo(this.pointD);
                fillPath1.lineTo(this.pointA);
                fillPath1.set_style(fillStyle);

                fillPath2 = new Path();
                fillPath2.moveTo(this.pointD);
                fillPath2.lineTo(this.pointE);
                fillPath2.lineTo(this.pointF);
                fillPath2.lineTo(this.pointC);
                fillPath2.lineTo(this.pointD);
                fillPath2.set_style(fillStyle);

                fillPath3 = new Path();
                fillPath3.moveTo(this.pointC);
                fillPath3.lineTo(this.pointF);
                fillPath3.lineTo(this.pointG);
                fillPath3.lineTo(this.pointB);
                fillPath3.lineTo(this.pointC);
                fillPath3.set_style(fillStyle);
            },
            callback:function(){
                Main.animationFinished(1000);
            }
        });
    }
}