var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 0;
        var paperFadeIn = animStart+1000;
        var firstClose = paperFadeIn+2000;
        var firstOpen = firstClose+1500;
        var secondClose = firstOpen+1500;
        var secondOpen = secondClose+1500;
        var firstTextsStart = secondOpen+2000;

        var paper2FadeIn = animStart+1000
        var first2Close = paper2FadeIn+2000;
        var first2Open = first2Close+1500;
        var second2Close = first2Open+1500;
        var second2Open = second2Close+1500;
        var firstTexts2Start2 = second2Open+2000;

        var animHelper = new AnimationHelper({
            APoint:new Point(20.5,30.5),
            BPoint:new Point(100.5,30.5),
            CPoint:new Point(100.5,150.5),
            DPoint:new Point(20.5,150.5),
            EPoint:new Point(20.5,90.5),
            FPoint:new Point(100.5,90.5),
            GPoint:new Point(20.5,50.5),
            HPoint:new Point(100.5,50.5),

            rectAngle:0
        });

        var anim2Helper = new AnimationHelper({
            A2Point:new Point(270.5,30.5),
            B2Point:new Point(350.5,30.5),
            C2Point:new Point(350.5,150.5),
            D2Point:new Point(270.5,150.5),
            E2Point:new Point(270.5,90.5),
            F2Point:new Point(350.5,90.5),

            rect2Angle:0
        });

        Animation.rectanglePath = new Path();
        Animation.rectanglePath.moveTo(animHelper.APoint);
        Animation.rectanglePath.lineTo(animHelper.BPoint);
        Animation.rectanglePath.lineTo(animHelper.CPoint);
        Animation.rectanglePath.lineTo(animHelper.DPoint);
        Animation.rectanglePath.lineTo(animHelper.APoint);
        Animation.rectanglePath.strokeColor = "black";
        Animation.rectanglePath.opacity = 0;

        Animation.rectangle2Path = new Path();
        Animation.rectangle2Path.moveTo(anim2Helper.A2Point);
        Animation.rectangle2Path.lineTo(anim2Helper.B2Point);
        Animation.rectangle2Path.lineTo(anim2Helper.C2Point);
        Animation.rectangle2Path.lineTo(anim2Helper.D2Point);
        Animation.rectangle2Path.lineTo(anim2Helper.A2Point);
        Animation.rectangle2Path.strokeColor = "black";
        Animation.rectangle2Path.opacity = 0;

        var rectFirstLine = new Path.Line(animHelper.EPoint, animHelper.FPoint);
        rectFirstLine.strokeColor = "black";
        rectFirstLine.opacity = 0;

        var rectSecondLine = new Path.Line(animHelper.GPoint, animHelper.HPoint);
        rectSecondLine.strokeColor = "black";
        rectSecondLine.opacity = 0;

        var rect2FirstLine = new Path.Line(anim2Helper.E2Point, anim2Helper.F2Point);
        rect2FirstLine.strokeColor = "black";
        rect2FirstLine.opacity = 0;

        var rect2SecondLine = new Path.Line(anim2Helper.A2Point, anim2Helper.C2Point);
        rect2SecondLine.strokeColor = "black";
        rect2SecondLine.opacity = 0;

        var rectFillPath = new Path();
        var rect2FillPath = new Path();

        var firstLetter = new PointText(new Point(animHelper.EPoint.x-10,animHelper.EPoint.y+4));
        firstLetter.justification = 'center';
        firstLetter.fillColor = 'black';
        firstLetter.content = 'A';
        firstLetter.strokeWidth = '1px';
        firstLetter.opacity = 0;

        var secondLetter = new PointText(new Point(animHelper.FPoint.x+10,animHelper.FPoint.y+4));
        secondLetter.justification = 'center';
        secondLetter.fillColor = 'black';
        secondLetter.content = 'B';
        secondLetter.strokeWidth = '1px';
        secondLetter.opacity = 0;

        var thirdLetter = new PointText(new Point(animHelper.GPoint.x-10,animHelper.GPoint.y+4));
        thirdLetter.justification = 'center';
        thirdLetter.fillColor = 'black';
        thirdLetter.content = 'C';
        thirdLetter.strokeWidth = '1px';
        thirdLetter.opacity = 0;

        var fourthLetter = new PointText(new Point(animHelper.HPoint.x+10,animHelper.HPoint.y+4));
        fourthLetter.justification = 'center';
        fourthLetter.fillColor = 'black';
        fourthLetter.content = 'D';
        fourthLetter.strokeWidth = '1px';
        fourthLetter.opacity = 0;

        var fifthLetter = new PointText(new Point(anim2Helper.E2Point.x-10,anim2Helper.E2Point.y+4));
        fifthLetter.justification = 'center';
        fifthLetter.fillColor = 'black';
        fifthLetter.content = 'A';
        fifthLetter.strokeWidth = '1px';
        fifthLetter.opacity = 0;

        var sixthLetter = new PointText(new Point(anim2Helper.F2Point.x+10,anim2Helper.F2Point.y+4));
        sixthLetter.justification = 'center';
        sixthLetter.fillColor = 'black';
        sixthLetter.content = 'B';
        sixthLetter.strokeWidth = '1px';
        sixthLetter.opacity = 0;

        var firstText = new PointText(new Point(animHelper.FPoint.x+30,animHelper.FPoint.y-10));
        firstText.justification = 'left';
        firstText.content = 'AB ve CD paralel';
        firstText.strokeWidth = '1px';
        firstText.opacity = 0;

        var first2Text = new PointText(new Point(animHelper.FPoint.x+30,animHelper.FPoint.y+20));
        first2Text.justification = 'left';
        first2Text.content = '[AB] // [CD]';
        first2Text.strokeWidth = '1px';
        first2Text.opacity = 0;


        Animation.rectanglePath.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:paperFadeIn,
            animationType:'easeInOutQuad'
        });

        Animation.rectangle2Path.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:paper2FadeIn,
            animationType:'easeInOutQuad'
        });


        // first close
        animHelper.animate({
            style:{
                APoint: new Point(20.5,150.5),
                BPoint: new Point(100.5,150.5),
                rectAngle:Math.PI
            },
            duration:1000,
            delay:firstClose,
            update:function(){

                if(Animation.rectanglePath){
                    Animation.rectanglePath.remove();
                }

                Animation.rectanglePath = new Path();
                Animation.rectanglePath.moveTo(
                    animHelper.APoint
                        .add(
                        -10*Math.sin(this.rectAngle),
                        0
                    )
                );
                Animation.rectanglePath.lineTo(
                    animHelper.BPoint
                        .add(
                        10*Math.sin(this.rectAngle),
                        0
                    )
                );
                Animation.rectanglePath.lineTo(animHelper.FPoint);
                Animation.rectanglePath.lineTo(animHelper.CPoint);
                Animation.rectanglePath.lineTo(animHelper.DPoint);
                Animation.rectanglePath.lineTo(animHelper.EPoint);
                Animation.rectanglePath.lineTo(
                    animHelper.APoint
                        .add(
                        -10*Math.sin(this.rectAngle),
                        0
                    )
                );
                Animation.rectanglePath.strokeColor = "black";

                if(this.rectAngle > Math.PI*0.5){
                    rectFirstLine.opacity = 1;

                    if(rectFillPath){
                        rectFillPath.remove();
                    }

                    rectFillPath = new Path();

                    rectFillPath.moveTo(animHelper.EPoint);
                    rectFillPath.lineTo(animHelper.FPoint);
                    rectFillPath.lineTo(
                        animHelper.BPoint
                            .add(
                            10*Math.sin(this.rectAngle),
                            0
                        )
                    );
                    rectFillPath.lineTo(
                        animHelper.APoint
                            .add(
                            -10*Math.sin(this.rectAngle),
                            0
                        )
                    );
                    rectFillPath.lineTo(animHelper.EPoint);

                    rectFillPath.strokeColor = "black";
                    rectFillPath.fillColor = "white";

                    if(this.rectAngle < Math.PI*0.5){
                        if(rectFillPath){
                            rectFillPath.remove();
                        }
                    }
                }
            },
            animationType:'easeInEaseOut'
        });

        // first open
        animHelper.animate({
            style:{
                APoint: new Point(20.5,30.5),
                BPoint: new Point(100.5,30.5),
                rectAngle:0
            },
            duration:1000,
            delay:firstOpen,
            update:function(){
                if(this.rectAngle < Math.PI/2){
                    rectFirstLine.strokeColor = "grey";
                    rectFirstLine.dashArray = [2,3];
                }
                if(Animation.rectanglePath){
                    Animation.rectanglePath.remove();
                }

                Animation.rectanglePath = new Path();
                Animation.rectanglePath.moveTo(
                    animHelper.APoint
                        .add(
                        -10*Math.sin(this.rectAngle),
                        0
                    )
                );
                Animation.rectanglePath.lineTo(
                    animHelper.BPoint
                        .add(
                        10*Math.sin(this.rectAngle),
                        0
                    )
                );
                Animation.rectanglePath.lineTo(animHelper.FPoint);
                Animation.rectanglePath.lineTo(animHelper.CPoint);
                Animation.rectanglePath.lineTo(animHelper.DPoint);
                Animation.rectanglePath.lineTo(animHelper.EPoint);
                Animation.rectanglePath.lineTo(
                    animHelper.APoint
                        .add(
                        -10*Math.sin(this.rectAngle),
                        0
                    )
                );
                Animation.rectanglePath.strokeColor = "black";

                if(this.rectAngle > Math.PI*0.5){

                    if(rectFillPath){
                        rectFillPath.remove();
                    }

                    rectFillPath = new Path();

                    rectFillPath.moveTo(animHelper.EPoint);
                    rectFillPath.lineTo(animHelper.FPoint);
                    rectFillPath.lineTo(
                        animHelper.BPoint
                            .add(
                            10*Math.sin(this.rectAngle),
                            0
                        )
                    );
                    rectFillPath.lineTo(
                        animHelper.APoint
                            .add(
                            -10*Math.sin(this.rectAngle),
                            0
                        )
                    );
                    rectFillPath.lineTo(animHelper.EPoint);

                    rectFillPath.strokeColor = "black";
                    rectFillPath.fillColor = "white";

                    if(this.rectAngle < Math.PI*0.5){
                        if(rectFillPath){
                            rectFillPath.remove();
                        }
                    }
                }

                if(this.rectAngle < Math.PI*0.5){
                    if(rectFillPath)
                        rectFillPath.remove();
                }
            },
            animationType:'easeInEaseOut',
            callback:function(){
                firstLetter.opacity = 1;
                secondLetter.opacity = 1;
            }
        });

        // second close

        animHelper.animate({
            style:{
                APoint: new Point(20.5,70.5),
                BPoint: new Point(100.5,70.5),
                rectAngle:Math.PI
            },
            duration:1000,
            delay:secondClose,
            update:function(){
                if(this.rectAngle > Math.PI/2){
                    rectSecondLine.opacity = 1;
                }
                if(Animation.rectanglePath){
                    Animation.rectanglePath.remove();
                }

                Animation.rectanglePath = new Path();
                Animation.rectanglePath.moveTo(
                    animHelper.APoint
                        .add(
                        -10*Math.sin(this.rectAngle),
                        0
                    )
                );
                Animation.rectanglePath.lineTo(
                    animHelper.BPoint
                        .add(
                        10*Math.sin(this.rectAngle),
                        0
                    )
                );
                Animation.rectanglePath.lineTo(animHelper.HPoint);
                Animation.rectanglePath.lineTo(animHelper.CPoint);
                Animation.rectanglePath.lineTo(animHelper.DPoint);
                Animation.rectanglePath.lineTo(animHelper.GPoint);
                Animation.rectanglePath.lineTo(
                    animHelper.APoint
                        .add(
                        -10*Math.sin(this.rectAngle),
                        0
                    )
                );
                Animation.rectanglePath.strokeColor = "black";

                if(this.rectAngle > Math.PI*0.5){
                    rectSecondLine.opacity = 1;

                    if(rectFillPath){
                        rectFillPath.remove();
                    }

                    rectFillPath = new Path();

                    rectFillPath.moveTo(animHelper.GPoint);
                    rectFillPath.lineTo(animHelper.HPoint);
                    rectFillPath.lineTo(
                        animHelper.BPoint
                            .add(
                            10*Math.sin(this.rectAngle),
                            0
                        )
                    );
                    rectFillPath.lineTo(
                        animHelper.APoint
                            .add(
                            -10*Math.sin(this.rectAngle),
                            0
                        )
                    );
                    rectFillPath.lineTo(animHelper.GPoint);

                    rectFillPath.strokeColor = "black";
                    rectFillPath.fillColor = "white";

                    if(this.rectAngle < Math.PI*0.5){
                        if(rectFillPath){
                            rectFillPath.remove();
                        }
                    }
                }
            },
            animationType:'easeInEaseOut'
        });

        // second open
        animHelper.animate({
            style:{
                APoint: new Point(20.5,30.5),
                BPoint: new Point(100.5,30.5),
                rectAngle:0
            },
            duration:1000,
            delay:secondOpen,
            update:function(){
                if(this.rectAngle < Math.PI/2){
                    rectSecondLine.strokeColor = "grey";
                    rectSecondLine.dashArray = [2,3];
                }
                if(Animation.rectanglePath){
                    Animation.rectanglePath.remove();
                }

                Animation.rectanglePath = new Path();
                Animation.rectanglePath.moveTo(
                    animHelper.APoint
                        .add(
                        -10*Math.sin(this.rectAngle),
                        0
                    )
                );
                Animation.rectanglePath.lineTo(
                    animHelper.BPoint
                        .add(
                        10*Math.sin(this.rectAngle),
                        0
                    )
                );
                Animation.rectanglePath.lineTo(animHelper.HPoint);
                Animation.rectanglePath.lineTo(animHelper.CPoint);
                Animation.rectanglePath.lineTo(animHelper.DPoint);
                Animation.rectanglePath.lineTo(animHelper.GPoint);
                Animation.rectanglePath.lineTo(
                    animHelper.APoint
                        .add(
                        -10*Math.sin(this.rectAngle),
                        0
                    )
                );
                Animation.rectanglePath.strokeColor = "black";

                if(this.rectAngle > Math.PI*0.5){

                    if(rectFillPath){
                        rectFillPath.remove();
                    }

                    rectFillPath = new Path();

                    rectFillPath.moveTo(animHelper.GPoint);
                    rectFillPath.lineTo(animHelper.HPoint);
                    rectFillPath.lineTo(
                        animHelper.BPoint
                            .add(
                            10*Math.sin(this.rectAngle),
                            0
                        )
                    );
                    rectFillPath.lineTo(
                        animHelper.APoint
                            .add(
                            -10*Math.sin(this.rectAngle),
                            0
                        )
                    );
                    rectFillPath.lineTo(animHelper.GPoint);

                    rectFillPath.strokeColor = "black";
                    rectFillPath.fillColor = "white";

                    if(this.rectAngle < Math.PI*0.5){
                        if(rectFillPath){
                            rectFillPath.remove();
                        }
                    }
                }

                if(this.rectAngle < Math.PI*0.5){
                    if(rectFillPath)
                        rectFillPath.remove();
                }
            },
            animationType:'easeInEaseOut',
            callback:function(){
                thirdLetter.opacity = 1;
                fourthLetter.opacity = 1;
            }
        });

        firstText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstTextsStart,
            animationType:'easeInOutQuad'
        });

        first2Text.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstTextsStart,
            animationType:'easeInOutQuad'
        });

        // second rect

        // first close

        anim2Helper.animate({
            style:{
                A2Point: new Point(270.5,150.5),
                B2Point: new Point(350.5,150.5),
                rect2Angle:Math.PI
            },
            duration:1000,
            delay:first2Close,
            update:function(){

                if(Animation.rectangle2Path){
                    Animation.rectangle2Path.remove();
                }

                Animation.rectangle2Path = new Path();
                Animation.rectangle2Path.moveTo(
                    anim2Helper.A2Point
                        .add(
                        -10*Math.sin(this.rect2Angle),
                        0
                    )
                );
                Animation.rectangle2Path.lineTo(
                    anim2Helper.B2Point
                        .add(
                        10*Math.sin(this.rect2Angle),
                        0
                    )
                );
                Animation.rectangle2Path.lineTo(anim2Helper.F2Point);
                Animation.rectangle2Path.lineTo(anim2Helper.C2Point);
                Animation.rectangle2Path.lineTo(anim2Helper.D2Point);
                Animation.rectangle2Path.lineTo(anim2Helper.E2Point);
                Animation.rectangle2Path.lineTo(
                    anim2Helper.A2Point
                        .add(
                        -10*Math.sin(this.rect2Angle),
                        0
                    )
                );
                Animation.rectangle2Path.strokeColor = "black";

                if(this.rect2Angle > Math.PI*0.5){
                    rect2FirstLine.opacity = 1;

                    if(rect2FillPath){
                        rect2FillPath.remove();
                    }

                    rect2FillPath = new Path();

                    rect2FillPath.moveTo(anim2Helper.E2Point);
                    rect2FillPath.lineTo(anim2Helper.F2Point);
                    rect2FillPath.lineTo(
                        anim2Helper.B2Point
                            .add(
                            10*Math.sin(this.rect2Angle),
                            0
                        )
                    );
                    rect2FillPath.lineTo(
                        anim2Helper.A2Point
                            .add(
                            -10*Math.sin(this.rect2Angle),
                            0
                        )
                    );
                    rect2FillPath.lineTo(anim2Helper.E2Point);

                    rect2FillPath.strokeColor = "black";
                    rect2FillPath.fillColor = "white";

                    if(this.rect2Angle < Math.PI*0.5){
                        if(rect2FillPath){
                            rect2FillPath.remove();
                        }
                    }
                }
            },
            animationType:'easeInEaseOut'
        });

        // first open
        anim2Helper.animate({
            style:{
                A2Point: new Point(270.5,30.5),
                B2Point: new Point(350.5,30.5),
                rect2Angle:0
            },
            duration:1000,
            delay:first2Open,
            update:function(){
                if(this.rect2Angle < Math.PI*0.5){
                    rect2FirstLine.strokeColor = "grey";
                    rect2FirstLine.dashArray = [2,3];
                }
                if(Animation.rectangle2Path){
                    Animation.rectangle2Path.remove();
                }

                Animation.rectangle2Path = new Path();
                Animation.rectangle2Path.moveTo(
                    anim2Helper.A2Point
                        .add(
                        -10*Math.sin(this.rect2Angle),
                        0
                    )
                );
                Animation.rectangle2Path.lineTo(
                    anim2Helper.B2Point
                        .add(
                        10*Math.sin(this.rect2Angle),
                        0
                    )
                );
                Animation.rectangle2Path.lineTo(anim2Helper.F2Point);
                Animation.rectangle2Path.lineTo(anim2Helper.C2Point);
                Animation.rectangle2Path.lineTo(anim2Helper.D2Point);
                Animation.rectangle2Path.lineTo(anim2Helper.E2Point);
                Animation.rectangle2Path.lineTo(
                    anim2Helper.A2Point
                        .add(
                        -10*Math.sin(this.rect2Angle),
                        0
                    )
                );
                Animation.rectangle2Path.strokeColor = "black";

                if(this.rect2Angle > Math.PI*0.5){

                    if(rect2FillPath){
                        rect2FillPath.remove();
                    }

                    rect2FillPath = new Path();

                    rect2FillPath.moveTo(anim2Helper.E2Point);
                    rect2FillPath.lineTo(anim2Helper.F2Point);
                    rect2FillPath.lineTo(
                        anim2Helper.B2Point
                            .add(
                            10*Math.sin(this.rect2Angle),
                            0
                        )
                    );
                    rect2FillPath.lineTo(
                        anim2Helper.A2Point
                            .add(
                            -10*Math.sin(this.rect2Angle),
                            0
                        )
                    );
                    rect2FillPath.lineTo(anim2Helper.E2Point);

                    rect2FillPath.strokeColor = "black";
                    rect2FillPath.fillColor = "white";
                }

                if(this.rect2Angle < Math.PI*0.5){
                    if(rect2FillPath)
                        rect2FillPath.remove();
                }
            },
            animationType:'easeInEaseOut',
            callback:function(){
                fifthLetter.opacity = 1;
                sixthLetter.opacity = 1;
            }
        });

        // second close
        anim2Helper.animate({
            style:{
                B2Point: new Point(230.5,100.5),
                rect2Angle:Math.PI
            },
            duration:1000,
            delay:second2Close,
            update:function(){
                if(Animation.rectangle2Path){
                    Animation.rectangle2Path.remove();
                }

                Animation.rectangle2Path = new Path();
                Animation.rectangle2Path.moveTo(anim2Helper.A2Point);
                Animation.rectangle2Path.lineTo(
                    anim2Helper.B2Point
                        .add(
                        -10*Math.sin(this.rect2Angle),
                        -10*Math.sin(this.rect2Angle)
                    )
                );
                Animation.rectangle2Path.lineTo(anim2Helper.C2Point);
                Animation.rectangle2Path.lineTo(anim2Helper.D2Point);
                Animation.rectangle2Path.lineTo(anim2Helper.A2Point);
                Animation.rectangle2Path.strokeColor = "black";

                if(this.rect2Angle > Math.PI*0.5){
                    rect2SecondLine.opacity = 1;
                }

                if(rect2FillPath){
                    rect2FillPath.remove();
                }

                rect2FillPath = new Path();

                rect2FillPath.moveTo(anim2Helper.A2Point);
                rect2FillPath.lineTo(
                    anim2Helper.B2Point
                        .add(
                        -10*Math.sin(this.rect2Angle),
                        -10*Math.sin(this.rect2Angle)
                    )
                );
                rect2FillPath.lineTo(this.C2Point);
                rect2FillPath.lineTo(this.A2Point);

                rect2FillPath.strokeColor = "black";
                rect2FillPath.fillColor = "white";

                if(this.rect2Angle < Math.PI*0.5){
                    if(rect2FillPath){
                        rect2FillPath.remove();
                    }
                }


            },
            animationType:'easeInEaseOut'
        });

    }
};