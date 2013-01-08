function __Styles(){
    interactionRectangleStyle = {
        fillColor:"#ffffec"
    };
    interactionLineStyle = {
        strokeWidth:4,
        strokeCap:'round'
    };
    interactionLineSelectedStyle = {
        strokeColor: new RgbColor(0.12,0.34,0.63)
    };
    interactionLineWrongStyle = {
//        strokeColor: "#ce4030"
        strokeColor: new RgbColor(0.80,0.25,0.18)
    };
    interactionLineCorrectStyle = {
//        strokeColor: "#5fa926"
        strokeColor: new RgbColor(0.37,0.66,0.14)
    };
    markLineColor = "#d8d8d8";
}
;
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

        var paper2FadeIn = firstTextsStart+2000;
        var first2Close = paper2FadeIn+2000;
        var first2Open = first2Close+1500;
        var second2Close = first2Open+2000;
        var second2Open = second2Close+1500;
        var firstTexts2Start = second2Open+2000;

        var paper3FadeIn = firstTexts2Start+2000;
        var first3Close = paper3FadeIn+2000;
        var first3Open = first3Close+1500;
        var second3Close = first3Open+2000;
        var second3Open = second3Close+1500;
        var firstTexts3Start = second3Open+2000;

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
            A2Point:new Point(265.5,30.5),
            B2Point:new Point(345.5,30.5),
            C2Point:new Point(345.5,150.5),
            D2Point:new Point(265.5,150.5),
            E2Point:new Point(265.5,90.5),
            F2Point:new Point(345.5,90.5),

            rect2Angle:0
        });

        var anim3Helper = new AnimationHelper({
            A3Point:new Point(525.5,30.5),
            B3Point:new Point(605.5,30.5),
            C3Point:new Point(605.5,150.5),
            D3Point:new Point(525.5,150.5),
            E3Point:new Point(525.5,90.5),
            F3Point:new Point(605.5,90.5),
            G3Point:new Point(565.5,30.5),
            H3Point:new Point(565.5,150.5),

            rect3Angle:0
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

        Animation.rectangle3Path = new Path();
        Animation.rectangle3Path.moveTo(anim3Helper.A3Point);
        Animation.rectangle3Path.lineTo(anim3Helper.B3Point);
        Animation.rectangle3Path.lineTo(anim3Helper.C3Point);
        Animation.rectangle3Path.lineTo(anim3Helper.D3Point);
        Animation.rectangle3Path.lineTo(anim3Helper.A3Point);
        Animation.rectangle3Path.strokeColor = "black";
        Animation.rectangle3Path.opacity = 0;

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

        var rect3FirstLine = new Path.Line(anim3Helper.E3Point, anim3Helper.F3Point);
        rect3FirstLine.strokeColor = "black";
        rect3FirstLine.opacity = 0;

        var rect3SecondLine = new Path.Line(anim3Helper.G3Point, anim3Helper.H3Point);
        rect3SecondLine.strokeColor = "black";
        rect3SecondLine.opacity = 0;

        var rectFillPath = new Path();
        var rect2FillPath = new Path();
        var rect3FillPath = new Path();

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

        var seventhLetter = new PointText(new Point(anim2Helper.A2Point.x-10,anim2Helper.A2Point.y+4));
        seventhLetter.justification = 'center';
        seventhLetter.fillColor = 'black';
        seventhLetter.content = 'C';
        seventhLetter.strokeWidth = '1px';
        seventhLetter.opacity = 0;

        var eighthLetter = new PointText(new Point(anim2Helper.C2Point.x+10,anim2Helper.C2Point.y+4));
        eighthLetter.justification = 'center';
        eighthLetter.fillColor = 'black';
        eighthLetter.content = 'D';
        eighthLetter.strokeWidth = '1px';
        eighthLetter.opacity = 0;

        var ninthLetter = new PointText(new Point(anim3Helper.E3Point.x-10,anim3Helper.E3Point.y+4));
        ninthLetter.justification = 'center';
        ninthLetter.fillColor = 'black';
        ninthLetter.content = 'A';
        ninthLetter.strokeWidth = '1px';
        ninthLetter.opacity = 0;

        var tenthLetter = new PointText(new Point(anim3Helper.F3Point.x+10,anim3Helper.F3Point.y+4));
        tenthLetter.justification = 'center';
        tenthLetter.fillColor = 'black';
        tenthLetter.content = 'B';
        tenthLetter.strokeWidth = '1px';
        tenthLetter.opacity = 0;

        var eleventhLetter = new PointText(new Point(anim3Helper.G3Point.x,anim3Helper.G3Point.y-4));
        eleventhLetter.justification = 'center';
        eleventhLetter.fillColor = 'black';
        eleventhLetter.content = 'C';
        eleventhLetter.strokeWidth = '1px';
        eleventhLetter.opacity = 0;

        var twelvethLetter = new PointText(new Point(anim3Helper.H3Point.x,anim3Helper.H3Point.y+10));
        twelvethLetter.justification = 'center';
        twelvethLetter.fillColor = 'black';
        twelvethLetter.content = 'D';
        twelvethLetter.strokeWidth = '1px';
        twelvethLetter.opacity = 0;

        var firstText = new PointText(new Point(animHelper.FPoint.x+30,animHelper.FPoint.y-30));
        firstText.justification = 'left';
        firstText.content = 'AB ve CD doğru';
        firstText.strokeWidth = '1px';
        firstText.opacity = 0;

        var first2Text = new PointText(new Point(animHelper.FPoint.x+30,animHelper.FPoint.y-10));
        first2Text.justification = 'left';
        first2Text.content = 'parçaları paralel.';
        first2Text.strokeWidth = '1px';
        first2Text.opacity = 0;

        var first3Text = new PointText(new Point(animHelper.FPoint.x+30,animHelper.FPoint.y+20));
        first3Text.justification = 'left';
        first3Text.content = '[AB] // [CD]';
        first3Text.strokeWidth = '1px';
        first3Text.opacity = 0;

        var secondText = new PointText(new Point(anim2Helper.F2Point.x+30,anim2Helper.F2Point.y-40));
        secondText.justification = 'left';
        secondText.content = 'AB ve CD doğru';
        secondText.strokeWidth = '1px';
        secondText.opacity = 0;

        var second2Text = new PointText(new Point(anim2Helper.F2Point.x+30,anim2Helper.F2Point.y-20));
        second2Text.justification = 'left';
        second2Text.content = 'parçaları kesişiyor.';
        second2Text.strokeWidth = '1px';
        second2Text.opacity = 0;

        var second3Text = new PointText(new Point(anim2Helper.F2Point.x+30,anim2Helper.F2Point.y+10));
        second3Text.justification = 'left';
        second3Text.content = 'Aynı düzlemde';
        second3Text.strokeWidth = '1px';
        second3Text.opacity = 0;

        var second4Text = new PointText(new Point(anim2Helper.F2Point.x+30,anim2Helper.F2Point.y+30));
        second4Text.justification = 'left';
        second4Text.content = 'kesişmeyen doğrular';
        second4Text.strokeWidth = '1px';
        second4Text.opacity = 0;

        var second5Text = new PointText(new Point(anim2Helper.F2Point.x+30,anim2Helper.F2Point.y+50));
        second5Text.justification = 'left';
        second5Text.content = 'paraleldir.';
        second5Text.strokeWidth = '1px';
        second5Text.opacity = 0;

        var thirdText = new PointText(new Point(anim3Helper.F3Point.x+30,anim3Helper.F3Point.y-50));
        thirdText.justification = 'left';
        thirdText.content = 'AB ve CD';
        thirdText.strokeWidth = '1px';
        thirdText.opacity = 0;

        var third2Text = new PointText(new Point(anim3Helper.F3Point.x+30,anim3Helper.F3Point.y-30));
        third2Text.justification = 'left';
        third2Text.content = 'doğru parçaları';
        third2Text.strokeWidth = '1px';
        third2Text.opacity = 0;

        var third3Text = new PointText(new Point(anim3Helper.F3Point.x+30,anim3Helper.F3Point.y-10));
        third3Text.justification = 'left';
        third3Text.content = 'dik kesişiyor.';
        third3Text.strokeWidth = '1px';
        third3Text.opacity = 0;

        var third4Text = new PointText(new Point(anim3Helper.F3Point.x+30,anim3Helper.F3Point.y+15));
        third4Text.justification = 'left';
        third4Text.content = '[AB] ┴ [CD]';
        third4Text.strokeWidth = '1px';
        third4Text.opacity = 0;

        var third5Text = new PointText(new Point(anim3Helper.F3Point.x+30,anim3Helper.F3Point.y+40));
        third5Text.justification = 'left';
        third5Text.content = 'Diklik, kesişmenin';
        third5Text.strokeWidth = '1px';
        third5Text.opacity = 0;

        var third6Text = new PointText(new Point(anim3Helper.F3Point.x+30,anim3Helper.F3Point.y+60));
        third6Text.justification = 'left';
        third6Text.content = 'özel bir durumudur.';
        third6Text.strokeWidth = '1px';
        third6Text.opacity = 0;


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

        Animation.rectangle3Path.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:paper3FadeIn,
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
                    rectFirstLine.strokeColor = markLineColor;
                //    rectFirstLine.dashArray = [2,3];
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
                    rectSecondLine.strokeColor = markLineColor;
                //    rectSecondLine.dashArray = [2,3];
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

        first3Text.animate({
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
                A2Point: new Point(265.5,150.5),
                B2Point: new Point(345.5,150.5),
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
                A2Point: new Point(265.5,30.5),
                B2Point: new Point(345.5,30.5),
                rect2Angle:0
            },
            duration:1000,
            delay:first2Open,
            update:function(){
                if(this.rect2Angle < Math.PI*0.5){
                    rect2FirstLine.strokeColor = markLineColor;
                //    rect2FirstLine.dashArray = [2,3];
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
            init:function(){
                fifthLetter.opacity = 0;
                sixthLetter.opacity = 0;
                rect2FirstLine.opacity = 0;
            },
            style:{
                B2Point: new Point(225.5,100.5),
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

        // second open

        anim2Helper.animate({
            callback:function(){
                fifthLetter.opacity = 1;
                sixthLetter.opacity = 1;
                seventhLetter.opacity = 1;
                eighthLetter.opacity = 1;
                rect2FirstLine.opacity = 1;
            },
            style:{
                B2Point: new Point(345.5,30.5),
                rect2Angle:0
            },
            duration:1000,
            delay:second2Open,
            update:function(){

                if(this.rect2Angle < Math.PI*0.5){
                    rect2SecondLine.strokeColor = markLineColor;
                //    rect2SecondLine.dashArray = [2,3];
                }

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
                }

                if(this.rect2Angle < Math.PI*0.5){
                    if(rect2FillPath)
                        rect2FillPath.remove();
                }
            },
            animationType:'easeInEaseOut'
        });

        secondText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstTexts2Start,
            animationType:'easeInOutQuad'
        });

        second2Text.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstTexts2Start,
            animationType:'easeInOutQuad'
        });

        second3Text.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstTexts2Start,
            animationType:'easeInOutQuad'
        });

        second4Text.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstTexts2Start,
            animationType:'easeInOutQuad'
        });

        second5Text.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstTexts2Start,
            animationType:'easeInOutQuad'
        });

        // third paper

        // first close
        anim3Helper.animate({
            style:{
                A3Point: new Point(525.5,150.5),
                B3Point: new Point(605.5,150.5),
                rect3Angle:Math.PI
            },
            duration:1000,
            delay:first3Close,
            update:function(){

                if(Animation.rectangle3Path){
                    Animation.rectangle3Path.remove();
                }

                Animation.rectangle3Path = new Path();
                Animation.rectangle3Path.moveTo(
                    anim3Helper.A3Point
                        .add(
                        -10*Math.sin(this.rect3Angle),
                        0
                    )
                );
                Animation.rectangle3Path.lineTo(
                    anim3Helper.B3Point
                        .add(
                        10*Math.sin(this.rect3Angle),
                        0
                    )
                );
                Animation.rectangle3Path.lineTo(anim3Helper.F3Point);
                Animation.rectangle3Path.lineTo(anim3Helper.C3Point);
                Animation.rectangle3Path.lineTo(anim3Helper.D3Point);
                Animation.rectangle3Path.lineTo(anim3Helper.E3Point);
                Animation.rectangle3Path.lineTo(
                    anim3Helper.A3Point
                        .add(
                        -10*Math.sin(this.rect3Angle),
                        0
                    )
                );
                Animation.rectangle3Path.strokeColor = "black";

                if(this.rect3Angle > Math.PI*0.5){
                    rect3FirstLine.opacity = 1;

                    if(rect3FillPath){
                        rect3FillPath.remove();
                    }

                    rect3FillPath = new Path();

                    rect3FillPath.moveTo(anim3Helper.E3Point);
                    rect3FillPath.lineTo(anim3Helper.F3Point);
                    rect3FillPath.lineTo(
                        anim3Helper.B3Point
                            .add(
                            10*Math.sin(this.rect3Angle),
                            0
                        )
                    );
                    rect3FillPath.lineTo(
                        anim3Helper.A3Point
                            .add(
                            -10*Math.sin(this.rect3Angle),
                            0
                        )
                    );
                    rect3FillPath.lineTo(anim3Helper.E3Point);

                    rect3FillPath.strokeColor = "black";
                    rect3FillPath.fillColor = "white";

                    if(this.rect3Angle < Math.PI*0.5){
                        if(rect3FillPath){
                            rect3FillPath.remove();
                        }
                    }
                }
            },
            animationType:'easeInEaseOut'
        });

        // first open
        anim3Helper.animate({
            style:{
                A3Point: new Point(525.5,30.5),
                B3Point: new Point(605.5,30.5),
                rect3Angle:0
            },
            duration:1000,
            delay:first3Open,
            update:function(){
                if(this.rect3Angle < Math.PI/2){
                    rect3FirstLine.strokeColor = markLineColor;
                //   rect3FirstLine.dashArray = [2,3];
                }
                if(Animation.rectangle3Path){
                    Animation.rectangle3Path.remove();
                }

                Animation.rectangle3Path = new Path();
                Animation.rectangle3Path.moveTo(
                    anim3Helper.A3Point
                        .add(
                        -10*Math.sin(this.rect3Angle),
                        0
                    )
                );
                Animation.rectangle3Path.lineTo(
                    anim3Helper.B3Point
                        .add(
                        10*Math.sin(this.rect3Angle),
                        0
                    )
                );
                Animation.rectangle3Path.lineTo(anim3Helper.F3Point);
                Animation.rectangle3Path.lineTo(anim3Helper.C3Point);
                Animation.rectangle3Path.lineTo(anim3Helper.D3Point);
                Animation.rectangle3Path.lineTo(anim3Helper.E3Point);
                Animation.rectangle3Path.lineTo(
                    anim3Helper.A3Point
                        .add(
                        -10*Math.sin(this.rect3Angle),
                        0
                    )
                );
                Animation.rectangle3Path.strokeColor = "black";

                if(this.rect3Angle > Math.PI*0.5){

                    if(rect3FillPath){
                        rect3FillPath.remove();
                    }

                    rect3FillPath = new Path();

                    rect3FillPath.moveTo(anim3Helper.E3Point);
                    rect3FillPath.lineTo(anim3Helper.F3Point);
                    rect3FillPath.lineTo(
                        anim3Helper.B3Point
                            .add(
                            10*Math.sin(this.rect3Angle),
                            0
                        )
                    );
                    rect3FillPath.lineTo(
                        anim3Helper.A3Point
                            .add(
                            -10*Math.sin(this.rect3Angle),
                            0
                        )
                    );
                    rect3FillPath.lineTo(anim3Helper.E3Point);

                    rect3FillPath.strokeColor = "black";
                    rect3FillPath.fillColor = "white";

                    if(this.rect3Angle < Math.PI*0.5){
                        if(rect3FillPath){
                            rect3FillPath.remove();
                        }
                    }
                }

                if(this.rect3Angle < Math.PI*0.5){
                    if(rect3FillPath)
                        rect3FillPath.remove();
                }
            },
            animationType:'easeInEaseOut',
            callback:function(){
                ninthLetter.opacity = 1;
                tenthLetter.opacity = 1;
            }
        });

        // second close
        anim3Helper.animate({
            init:function(){
                ninthLetter.opacity = 0;
                tenthLetter.opacity = 0;
                rect3FirstLine.opacity = 0;
            },
            style:{
                B3Point: new Point(525.5,30.5),
                C3Point: new Point(525.5,150.5),
                rect3Angle:Math.PI
            },
            duration:1000,
            delay:second3Close,
            update:function(){

                if(Animation.rectangle3Path){
                    Animation.rectangle3Path.remove();
                }

                Animation.rectangle3Path = new Path();
                Animation.rectangle3Path.moveTo(anim3Helper.A3Point);
                Animation.rectangle3Path.lineTo(anim3Helper.G3Point);
                Animation.rectangle3Path.lineTo(
                    anim3Helper.B3Point
                        .add(
                        0,
                        -10*Math.sin(this.rect3Angle)
                    )
                );
                Animation.rectangle3Path.lineTo(
                    anim3Helper.C3Point
                        .add(
                        0,
                        10*Math.sin(this.rect3Angle)
                    )
                );
                Animation.rectangle3Path.lineTo(anim3Helper.H3Point);
                Animation.rectangle3Path.lineTo(anim3Helper.D3Point);
                Animation.rectangle3Path.lineTo(anim3Helper.A3Point);

                Animation.rectangle3Path.strokeColor = "black";

                if(this.rect3Angle > Math.PI*0.5){
                    rect3SecondLine.opacity = 1;

                    if(rect3FillPath){
                        rect3FillPath.remove();
                    }

                    rect3FillPath = new Path();

                    rect3FillPath.moveTo(anim3Helper.G3Point);
                    rect3FillPath.lineTo(
                        anim3Helper.B3Point
                            .add(
                            0,
                            -10*Math.sin(this.rect3Angle)
                        )
                    );
                    rect3FillPath.lineTo(
                        anim3Helper.C3Point
                            .add(
                            0,
                            10*Math.sin(this.rect3Angle)
                        )
                    );
                    rect3FillPath.lineTo(anim3Helper.H3Point);

                    rect3FillPath.strokeColor = "black";
                    rect3FillPath.fillColor = "white";

                    if(this.rect3Angle < Math.PI*0.5){
                        if(rect3FillPath){
                            rect3FillPath.remove();
                        }
                    }
                }
            },
            animationType:'easeInEaseOut'
        });

        // second open
        anim3Helper.animate({
            style:{
                B3Point: new Point(605.5,30.5),
                C3Point: new Point(605.5,150.5),
                rect3Angle:0
            },
            duration:1000,
            delay:second3Open,
            update:function(){
                if(this.rect3Angle < Math.PI/2){
                    rect3SecondLine.strokeColor = markLineColor;
                //    rect3SecondLine.dashArray = [2,3];
                }
                if(Animation.rectangle3Path){
                    Animation.rectangle3Path.remove();
                }

                Animation.rectangle3Path = new Path();
                Animation.rectangle3Path.moveTo(anim3Helper.A3Point);
                Animation.rectangle3Path.lineTo(anim3Helper.G3Point);
                Animation.rectangle3Path.lineTo(
                    anim3Helper.B3Point
                        .add(
                        0,
                        -10*Math.sin(this.rect3Angle)
                    )
                );
                Animation.rectangle3Path.lineTo(
                    anim3Helper.C3Point
                        .add(
                        0,
                        10*Math.sin(this.rect3Angle)
                    )
                );
                Animation.rectangle3Path.lineTo(anim3Helper.H3Point);
                Animation.rectangle3Path.lineTo(anim3Helper.D3Point);
                Animation.rectangle3Path.lineTo(anim3Helper.A3Point);

                Animation.rectangle3Path.strokeColor = "black";

                if(this.rect3Angle > Math.PI*0.5){

                    if(rect3FillPath){
                        rect3FillPath.remove();
                    }

                    rect3FillPath = new Path();

                    rect3FillPath.moveTo(anim3Helper.G3Point);
                    rect3FillPath.lineTo(
                        anim3Helper.B3Point
                            .add(
                            0,
                            -10*Math.sin(this.rect3Angle)
                        )
                    );
                    rect3FillPath.lineTo(
                        anim3Helper.C3Point
                            .add(
                            0,
                            10*Math.sin(this.rect3Angle)
                        )
                    );
                    rect3FillPath.lineTo(anim3Helper.H3Point);

                    rect3FillPath.strokeColor = "black";
                    rect3FillPath.fillColor = "white";

                    if(this.rect3Angle < Math.PI*0.5){
                        if(rect3FillPath){
                            rect3FillPath.remove();
                        }
                    }
                }

                if(this.rect3Angle < Math.PI*0.5){
                    if(rect3FillPath)
                        rect3FillPath.remove();
                }
            },
            animationType:'easeInEaseOut',
            callback:function(){
                ninthLetter.opacity = 1;
                tenthLetter.opacity = 1;
                rect3FirstLine.opacity = 1;
                eleventhLetter.opacity = 1;
                twelvethLetter.opacity = 1;
            }
        });

        thirdText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstTexts3Start,
            animationType:'easeInOutQuad'
        });

        third2Text.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstTexts3Start,
            animationType:'easeInOutQuad'
        });

        third3Text.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstTexts3Start,
            animationType:'easeInOutQuad'
        });

        third4Text.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstTexts3Start,
            animationType:'easeInOutQuad'
        });

        third5Text.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstTexts3Start,
            animationType:'easeInOutQuad'
        });

        third6Text.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstTexts3Start,
            animationType:'easeInOutQuad',
            callback:function(){
                Main.animationFinished(1000);
            }
        });
    }
};
var Interaction = {
	getFramework:function(){
        return 'paper';
    },
	images:[
    ],
    PARALLEL:"paralel olan",
    ORTHOGONAL:"dik kesişen",
    init:function(container){
        Interaction.container = container;
        Main.setObjective('');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }
        Interaction.appendButton({
            bottom:"0px",
            right:"10px"
        });
        Interaction.appendStatus({
            bottom:"10px",
            right:"150px",
            lineHeight:'30px',
            backgroundColor:'rgba(255,255,255,0.7)'
        })
        Interaction.createTool();
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(){
        Interaction.button.style.display = 'none' ;
        Main.interactionProject.activeLayer.removeChildren();
        Interaction.selectedLine1 = null;
        Interaction.selectedLine2 = null;
        Interaction.questionType = Util.rand01() == 1 ? Interaction.PARALLEL : Interaction.ORTHOGONAL;
        /*<[[TEST*/
//            Interaction.questionType = Interaction.PARALLEL;
        /*TEST]]>*/
        Main.setObjective("Yandaki düzlemde yer alan doğrulardan<br/> <strong>"+Interaction.questionType+"</strong> <br/> iki doğruyu belirleyiniz.");
        Interaction.generateLines();
    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
    generateLines:function(){
        var position= new Point(0,0);
        var size    = new Point(590,300);
        if(Interaction.rectangle)
            Interaction.rectangle.remove();
        Interaction.rectangle = new Path.Rectangle(position,size);
        Interaction.rectangle.set_style(interactionRectangleStyle);
        var lineCount = 0;
        var lines = [];
        do{
            var randomNumber = Util.randomInteger(0,5);
            /*<[[TEST*/
                randomNumber =  Util.randomInteger(0,3);
            /*TEST]]>*/
            var p1 = position.add(new Point(Util.randomInteger( 1,15)*40,Util.randomInteger(1,10)*30));
            var p2 = new Point(Util.randomInteger(20,40)*10,Util.randomInteger(-30,30)*10).add(p1.x,0);
            /*<[[TEST*/
//                p1 = new Point(200,271);
//                p2 = new Point(500,121);
            /*TEST]]>*/

            if(!Interaction.rectangle.contains(p1) || !Interaction.rectangle.contains(p2))
                continue;
            switch(lineCount%4){
                case 0://generate two parallel lines
                    var diff = Util.randomInteger(20,100);
                    if(!Interaction.rectangle.bounds.contains(p1.add(0,diff))
                        || !Interaction.rectangle.bounds.contains(p2.add(0,diff)))
                        continue;
                    lines.push([p1.add(0,diff),p2.add(0,diff)]);
                    lineCount += 2;
                    lines.push([p1,p2]);
                    break;
                case 1://generate a random line
                    lines.push([p1,p2]);
                    lineCount++;
                    break;
                case 2://generate two orthogonal lines
                    var lineCenter = Util.centerOfPoints([p1,p2]);
                    if(!Interaction.rectangle.bounds.contains(p1.getRotatedPoint(90,lineCenter))
                        || !Interaction.rectangle.bounds.contains(p2.getRotatedPoint(90,lineCenter)))
                        continue;
                    lines.push([p1.getRotatedPoint(90,lineCenter),p2.getRotatedPoint(90,lineCenter)]);
                    lines.push([p1,p2]);
                    lineCount += 2;
                    break;
                case 3:
                default:
                    lineCount++;
            }
        }while(/*<[[TEST*/true && /*TEST]]>*/ lineCount < 10)
        var shuffle = Util.getShuffledArray(lines.length);
        Interaction.lines = [];
        for(var i=0;i<shuffle.length;i++){
            var p1 = lines[shuffle[i]][0];
            var p2 = lines[shuffle[i]][1];
            var path = new Path.Line(p1,p2)
                .set_style(interactionLineStyle)
                .set_style({
                    className:"line"
                });
            Interaction.lines.push(path);
            path.p1 = p1;
            path.p2 = p2;
            switch(i%3){
                case 0:
                    path.strokeColor = new RgbColor(1,0.56,Math.random());
                    break;
                case 1:
                    path.strokeColor = new RgbColor(Math.random(),1,0.56);
                    break;
                case 2:
                    path.strokeColor = new RgbColor(0.56,Math.random(),1);
                    break;
            }
            path.strokeColor = new RgbColor(0.3,0.3,0.3,0.8);
            path.isParallelTo = function(other){
                return Math.abs(Math.round(this.getDotProductWith(other)*1000000)) == 1000000;
            }
            path.isOrthogonalTo = function(other){
                return Math.abs(Math.round(this.getDotProductWith(other)*1000000)) == 0;

            }
            path.getDotProductWith = function(other){
                var v1 = this.p1.subtract(this.p2).normalize();
                var v2 = other.p1.subtract(other.p2).normalize();
                return v1.dot(v2);
            }
            path.highlight = function(){
                var clone = this.clone();
                clone.set_style({
                    strokeWidth:this.strokeWidth*2,
                    strokeColor:"#fff"
                });
                this.originalStrokeColor = this.strokeColor;
                this.insertAbove(clone);
            }
        }
    },
    createTool:function(){
        var tool = new Tool();
        tool.setHitTestOptions({ fill: true, stroke: true, segments: true, tolerance: 6 })
        tool.onMouseDown = function(event){
            if(event.item && event.item.className == "line" ){
                var checkAnswer = false;
                if(Interaction.selectedLine1 == null)
                    Interaction.selectedLine1 = event.item;
                else if(Interaction.selectedLine2 == null && Interaction.selectedLine1.id != event.item.id){
                    Interaction.selectedLine2 = event.item;
                    checkAnswer = true;
                }
                else
                    return;
                event.item.highlight();
                event.item.set_style(interactionLineSelectedStyle);
                if(checkAnswer)
                    Interaction.button.click();
            }
        }
    },
	preCheck : function(){
    },
	isAnswerCorrect : function(value){
        if(Interaction.questionType == Interaction.PARALLEL){
            return Interaction.selectedLine1.isParallelTo(Interaction.selectedLine2);
        }else if(Interaction.questionType == Interaction.ORTHOGONAL){
            return Interaction.selectedLine1.isOrthogonalTo(Interaction.selectedLine2);
        }
    },
	onCorrectAnswer : function(){
		Interaction.selectedLine1.set_style(interactionLineCorrectStyle);
		Interaction.selectedLine2.set_style(interactionLineCorrectStyle);
        Interaction.button.style.display = 'block' ;
    },
	onWrongAnswer : function(){
        var line1Color = Interaction.selectedLine1.strokeColor;
        var line2Color = Interaction.selectedLine2.strokeColor;
		Interaction.selectedLine1.set_style(interactionLineWrongStyle);
        Interaction.selectedLine2.set_style(interactionLineWrongStyle);
        console.log(line1Color);
        Interaction.selectedLine1.animate({
            style:{strokeColor:Interaction.selectedLine1.originalStrokeColor},
            duration:1000,
            delay:1000,
            callback:function(){
                Interaction.selectedLine1 = null;
            }
        });
        Interaction.selectedLine2.animate({
            style:{strokeColor:Interaction.selectedLine2.originalStrokeColor},
            duration:1000,
            delay:1000,
            callback:function(){
                Interaction.resume();
                Interaction.selectedLine2 = null;
            }
        });
    },
	onFail : function(){
        Interaction.setStatus("Yanlış cevap doğrusu yeşil renk ile gösterilmiştir.",false);
		Interaction.selectedLine1.set_style(interactionLineWrongStyle);
		Interaction.selectedLine2.set_style(interactionLineWrongStyle);
        Interaction.pause();
        for(var i=0;i<Interaction.lines.length;i++)
            for(var j=0;j<Interaction.lines.length;j++)
                if(i == j) continue;
                else if(Interaction.questionType == Interaction.PARALLEL){
                    if(Interaction.lines[j].isParallelTo(Interaction.lines[i])){
                        Interaction.selectedLine1 = Interaction.lines[j];
                        Interaction.selectedLine2 = Interaction.lines[i];
                    }
                } else {
                    if(Interaction.lines[j].isOrthogonalTo(Interaction.lines[i])){
                        Interaction.selectedLine1 = Interaction.lines[j];
                        Interaction.selectedLine2 = Interaction.lines[i];
                    }
                }
        Interaction.selectedLine1.animate({
            style:{
                strokeColor:interactionLineCorrectStyle.strokeColor,
                strokeWidth:interactionLineStyle.strokeWidth*2
            },
            duration:1000,
            delay:1000,
            update:function(){
                Interaction.selectedLine2.set_style({
                    strokeWidth:this.strokeWidth,
                    strokeColor:this.strokeColor
                })
            },
            callback:function(){
                Interaction.selectedLine1.highlight();
                Interaction.selectedLine2.highlight();
                Interaction.resume();
            }
        });
        Interaction.button.style.display = 'block' ;
    }
}
;




