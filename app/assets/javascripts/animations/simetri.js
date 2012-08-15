function __Styles(){
    /*
     * write your styles here without using 'var' definer
     */
}

var Animation = {
    init:function(container){
        Animation.container = container;

        $(container).append('<img id="butterfly" src="/assets/animations/simetri/01.jpg" />');
        $('#butterfly').css("width", "128px")
            .css("height", "113px")
            .css("position", "absolute")
            .css("left", "40px")
            .css("top", "50px")
            .css("opacity", 0)
            .delay(1000).animate({opacity:1}, 1000)

        setTimeout('$("#butterfly").attr("src", "/assets/animations/simetri/butterfly_animated_01.gif")', 3000)

        setTimeout('$("#butterfly").attr("src", "/assets/animations/simetri/01.jpg")', 7000)


        AnimateHelper = new AnimationHelper({

            firstPoint: new Point(180.5, 140.5),
            secondPoint: new Point(280.5, 140.5),
            middlePoint: new Point(230.5, 140.5),
            topPoint: new Point(230.5, 40.5),
            shadowColor: new RgbColor(1,1,1),
            shadowColor2: new RgbColor(1,1,1),

            rectAPoint: new Point(440.5, 40.5),
            rectBPoint: new Point(340.5, 40.5),
            rectCPoint: new Point(340.5, 140.5),
            rectDPoint: new Point(440.5, 140.5),
            rectEPoint: new Point(340.5, 90.5),
            rectFPoint: new Point(440.5, 90.5),
            rectGPoint: new Point(390.5, 40.5),
            rectHPoint: new Point(390.5, 140.5),

            hexAPoint: new Point(510.5, 38.5),
            hexBPoint: new Point(570.5, 38.5),
            hexCPoint: new Point(600.5, 90.5),
            hexDPoint: new Point(570.5, 142.5),
            hexEPoint: new Point(510.5, 142.5),
            hexFPoint: new Point(480.5, 90.5),
            hexGPoint: new Point(585, 64.5), // middle of B and C
            hexHPoint: new Point(495.5, 116.5), // middle of E and F
            hexJPoint: new Point(495.5, 64.5), // middle of A and F
            hexKPoint: new Point(585.5, 116.5), // middle of C and D
            hexLPoint: new Point(540.5, 38.5), // middle of A and B
            hexMPoint: new Point(540.5, 142.5), // middle of E and D

            trapAPoint: new Point(650.5 ,38.5),
            trapBPoint: new Point(710.5, 38.5),
            trapCPoint: new Point(740.5, 142.5),
            trapDPoint: new Point(640.5, 142.5),

            triangleOpacity: 0,
            triangleTextOpacity: 0,
            triangleSymTextOpacity: 0,

            squareSymTextOpacity: 0,
            rectOpacity: 0,
            rectFirstLineOpacity: 0,
            rectFourthLineOpacity: 0,

            hexOpacity: 0,
            hexSymTextOpacity: 0,

            trapOpacity: 0,
            trapTextOpacity: 0,

            rectAngle:0,
            rectAngle2:0,
            hexAngle:0
        });


        var rectFirstLine = new Path.Line(new Point(AnimateHelper.rectAPoint), new Point(AnimateHelper.rectCPoint));
        rectFirstLine.strokeColor = "black";
        rectFirstLine.opacity = 0;
        var rectSecondLine = new Path.Line(new Point(AnimateHelper.rectBPoint), new Point(AnimateHelper.rectDPoint));
        rectSecondLine.strokeColor = "black";
        rectSecondLine.opacity = 0;
        var rectThirdLine = new Path.Line(new Point(AnimateHelper.rectEPoint), new Point(AnimateHelper.rectFPoint));
        rectThirdLine.strokeColor = "black";
        rectThirdLine.opacity = 0;
        var rectFourthLine = new Path.Line(new Point(AnimateHelper.rectGPoint), new Point(AnimateHelper.rectHPoint));
        rectFourthLine.strokeColor = "black";
        rectFourthLine.opacity = 0;

        var hexFirstLine = new Path.Line(new Point(AnimateHelper.hexBPoint), new Point(AnimateHelper.hexEPoint));
        hexFirstLine.strokeColor = "black";
        hexFirstLine.opacity = 0;
        var hexSecondLine = new Path.Line(new Point(AnimateHelper.hexAPoint), new Point(AnimateHelper.hexDPoint));
        hexSecondLine.strokeColor = "black";
        hexSecondLine.opacity = 0;
        var hexThirdLine = new Path.Line(new Point(AnimateHelper.hexFPoint), new Point(AnimateHelper.hexCPoint));
        hexThirdLine.strokeColor = "black";
        hexThirdLine.opacity = 0;
        var hexFourthLine = new Path.Line(new Point(AnimateHelper.hexHPoint), new Point(AnimateHelper.hexGPoint));
        hexFourthLine.strokeColor = "black";
        hexFourthLine.opacity = 0;
        var hexFifthLine = new Path.Line(new Point(AnimateHelper.hexJPoint), new Point(AnimateHelper.hexKPoint));
        hexFifthLine.strokeColor = "black";
        hexFifthLine.opacity = 0;
        var hexSixthLine = new Path.Line(new Point(AnimateHelper.hexLPoint), new Point(AnimateHelper.hexMPoint));
        hexSixthLine.strokeColor = "black";
        hexSixthLine.opacity = 0;

        var trianglePath = new Path();
        var trianglePath2 = new Path();
        trianglePath.moveTo(AnimateHelper.middlePoint);
        trianglePath.lineTo(AnimateHelper.firstPoint);
        trianglePath.lineTo(AnimateHelper.topPoint);
        trianglePath.strokeColor = "black";
        trianglePath.opacity = 0;

        trianglePath2.moveTo(AnimateHelper.middlePoint);
        trianglePath2.lineTo(AnimateHelper.secondPoint);
        trianglePath2.lineTo(AnimateHelper.topPoint);
        trianglePath2.strokeColor = "black";
        trianglePath2.fillColor = AnimateHelper.color;


        /************************ symmetry lines ***************************/
        // triangle symmetry line
        var triangleSymLine = new Group();
        var line1 = new Path.Line(new Point(230, 34), new Point(230, 146));
        line1.strokeColor = "red";
        line1.strokeWidth = 2;
        line1.dashArray = [7,4];
        var line2 = new Path.Line(new Point(230, 34), new Point(222, 40));
        line2.strokeColor = "red";
        line2.strokeWidth = 2;
        var line3 = new Path.Line(new Point(230, 34), new Point(238, 40));
        line3.strokeColor = "red";
        line3.strokeWidth = 2;
        var line4 = new Path.Line(new Point(230, 148), new Point(222, 142));
        line4.strokeColor = "red";
        line4.strokeWidth = 2;
        var line5 = new Path.Line(new Point(230, 148), new Point(238, 142));
        line5.strokeColor = "red";
        line5.strokeWidth = 2;
        triangleSymLine.strokeWidth = 2;
        triangleSymLine.addChild(line1);
        triangleSymLine.addChild(line2);
        triangleSymLine.addChild(line3);
        triangleSymLine.addChild(line4);
        triangleSymLine.addChild(line5);

        // square symmetry lines
        var squareSymGroup = new Group();
        var squareSymLine1 = triangleSymLine.clone();
        squareSymLine1.position = new Point(391, 90);
        squareSymLine1.strokeColor = "red";
        squareSymLine1.strokeWidth = 2;
        //squareSymLine1.insertAbove(rectFirstLine);
        var squareSymLine2 = squareSymLine1.clone();
        squareSymLine2.rotate(90);
        squareSymLine2.position = new Point(390, 90);
        squareSymLine2.strokeColor = "red";
        squareSymLine2.strokeWidth = 2;
        var squareSymLine3 = squareSymLine1.clone();
        squareSymLine3.rotate(45);
        squareSymLine3.position = new Point(391, 90);
        squareSymLine3.strokeColor = "red";
        squareSymLine3.scale(1.3);
        squareSymLine3.strokeWidth = 2;
        var squareSymLine4 = squareSymLine3.clone();
        squareSymLine4.rotate(-90);
        squareSymLine4.strokeWidth = 2;
        squareSymLine4.strokeColor = "red";
        squareSymGroup.addChild(squareSymLine1);
        squareSymGroup.addChild(squareSymLine2);
        squareSymGroup.addChild(squareSymLine3);
        squareSymGroup.addChild(squareSymLine4);
        squareSymGroup.insertAbove(rectFirstLine);
        squareSymGroup.insertAbove(rectSecondLine);
        squareSymGroup.insertAbove(rectThirdLine);
        squareSymGroup.insertAbove(rectFourthLine);
//	squareSymGroup.opacity = 0;

        // hexagon symmetry lines
        var hexagonSymGroup = new Group();
        var hexSymLine1 = squareSymLine1.clone();
        hexSymLine1.position = new Point(541, 90);
        hexSymLine1.strokeWidth = 2;
        hexSymLine1.scale(1.05);
        hexSymLine1.strokeColor = "red";
        var hexSymLine2 = squareSymLine1.clone();
        hexSymLine2.position = new Point(541, 90);
        hexSymLine2.strokeWidth = 2;
        hexSymLine2.rotate(30);
        hexSymLine2.scale(1.15);
        hexSymLine2.strokeColor = "red";
        var hexSymLine3 = squareSymLine1.clone();
        hexSymLine3.position = new Point(541, 90);
        hexSymLine3.strokeWidth = 2;
        hexSymLine3.rotate(60);
        hexSymLine3.scale(1.05);
        hexSymLine3.strokeColor = "red";
        var hexSymLine4 = squareSymLine1.clone();
        hexSymLine4.position = new Point(541, 90);
        hexSymLine4.strokeWidth = 2;
        hexSymLine4.rotate(90);
        hexSymLine4.scale(1.15);
        hexSymLine4.strokeColor = "red";
        var hexSymLine5 = squareSymLine1.clone();
        hexSymLine5.position = new Point(541, 90);
        hexSymLine5.strokeWidth = 2;
        hexSymLine5.rotate(120);
        hexSymLine5.scale(1.05);
        hexSymLine5.strokeColor = "red";
        var hexSymLine6 = squareSymLine1.clone();
        hexSymLine6.position = new Point(541, 90);
        hexSymLine6.strokeWidth = 2;
        hexSymLine6.rotate(150);
        hexSymLine6.scale(1.15);
        hexSymLine6.strokeColor = "red";
        hexagonSymGroup = new Group();
        hexagonSymGroup.addChild(hexSymLine1);
        hexagonSymGroup.addChild(hexSymLine2);
        hexagonSymGroup.addChild(hexSymLine3);
        hexagonSymGroup.addChild(hexSymLine4);
        hexagonSymGroup.addChild(hexSymLine5);
        hexagonSymGroup.addChild(hexSymLine6);
//	hexagonSymGroup.opacity = 0;
        /*********************************************************************/

        /*<!-------------------------------------------------------------------------------->*/

        /*************** shape texts ********************************/
        // triangle Text
        var triangleText = new PointText(new Point(230, 22));
        triangleText.justification = "center";
        triangleText.fillColor = "black";
        triangleText.content = "ikizkenar üçgen";


        // square Text
        var squareText = new PointText(new Point(390, 22));
        squareText.justification = "center";
        squareText.fillColor = "black";
        squareText.content = "kare";
        squareText.opacity = 0;

        // hexagon Text
        var hexagonText = new PointText(new Point(540, 22));
        hexagonText.justification = "center";
        hexagonText.fillColor = "black";
        hexagonText.content = "düzgün altıgen";
        hexagonText.opacity = 0;

        // trapezoid Text
        var trapezoidText = new PointText(new Point(680, 22));
        trapezoidText.justification = "center";
        trapezoidText.fillColor = "black";
        trapezoidText.content = "yamuk";
        trapezoidText.opacity = 0;
        /************************************************************/

        /*************** symmetry lines texts **********************/
        // triangle symmetry Text
        var triangleSymText = new PointText(new Point(230, 168));
        triangleSymText.justification = "center";
        triangleSymText.fillColor = "black";
        triangleSymText.content = "bir simetri ekseni";

        // square symmetry Text
        var squareSymText = new PointText(new Point(390, 168));
        squareSymText.justification = "center";
        squareSymText.fillColor = "black";
        squareSymText.content = "dört simetri ekseni";

        // hexagon symmetry Text
        var hexSymText = new PointText(new Point(540, 168));
        hexSymText.justification = "center";
        hexSymText.fillColor = "black";
        hexSymText.content = "altı simetri ekseni";

        // trapezoid symmetry Text
        var trapSymText = new PointText(new Point(690, 168));
        trapSymText.justification = "center";
        trapSymText.fillColor = "black";
        trapSymText.content = "simetri ekseni yok";

        var rectPath = new Path();
        rectPath.moveTo(AnimateHelper.rectDPoint);
        rectPath.lineTo(AnimateHelper.rectCPoint);
        rectPath.lineTo(AnimateHelper.rectBPoint);
        rectPath.lineTo(AnimateHelper.rectAPoint);
        rectPath.lineTo(AnimateHelper.rectDPoint);
        rectPath.strokeColor = "black";

        var hexPath = new Path();
        hexPath.moveTo(AnimateHelper.hexAPoint);
        hexPath.lineTo(AnimateHelper.hexBPoint);
        hexPath.lineTo(AnimateHelper.hexCPoint);
        hexPath.lineTo(AnimateHelper.hexDPoint);
        hexPath.lineTo(AnimateHelper.hexEPoint);
        hexPath.lineTo(AnimateHelper.hexFPoint);
        hexPath.lineTo(AnimateHelper.hexAPoint);
        hexPath.strokeColor = "black";

        var trapPath = new Path();
        trapPath.moveTo(AnimateHelper.trapAPoint);
        trapPath.lineTo(AnimateHelper.trapBPoint);
        trapPath.lineTo(AnimateHelper.trapCPoint);
        trapPath.lineTo(AnimateHelper.trapDPoint);
        trapPath.lineTo(AnimateHelper.trapAPoint);
        trapPath.strokeColor = "black";

        var rectFirstPath = new Path();
        var rectFillPath = new Path();
        var hexFillPath = new Path();
        var shadowPath = new Path();
        var shadowPath2 = new Path();


        Animation.onFrame = function(event){
            if(trianglePath)
                trianglePath.remove();
            if(trianglePath2)
                trianglePath2.remove();


            trianglePath = new Path();
            trianglePath.moveTo(AnimateHelper.middlePoint);
            trianglePath.lineTo(AnimateHelper.firstPoint);
            trianglePath.lineTo(AnimateHelper.topPoint);
            trianglePath.strokeColor = "black";
            trianglePath.opacity = AnimateHelper.triangleOpacity;

            trianglePath2 = new Path();
            trianglePath2.moveTo(AnimateHelper.middlePoint);
            trianglePath2.lineTo(AnimateHelper.secondPoint);
            trianglePath2.lineTo(AnimateHelper.topPoint);
            trianglePath2.strokeColor = "black";
            trianglePath2.fillColor = AnimateHelper.color;
            trianglePath2.opacity = AnimateHelper.triangleOpacity;
            triangleText.opacity = AnimateHelper.triangleTextOpacity;
            triangleSymText.opacity = AnimateHelper.triangleSymTextOpacity;
            triangleSymLine.opacity = AnimateHelper.triangleSymTextOpacity;

            rectPath.opacity = AnimateHelper.rectOpacity;
            squareText.opacity = AnimateHelper.rectOpacity;
            squareSymGroup.opacity = AnimateHelper.squareSymTextOpacity;
            squareSymText.opacity = AnimateHelper.squareSymTextOpacity;

            hexPath.opacity = AnimateHelper.hexOpacity;
            hexagonText.opacity = AnimateHelper.hexOpacity;
            hexSymText.opacity = AnimateHelper.hexSymTextOpacity;
            hexagonSymGroup.opacity = AnimateHelper.hexSymTextOpacity;

            trapPath.opacity = AnimateHelper.trapOpacity;
            trapezoidText.opacity = AnimateHelper.trapOpacity;
            trapSymText.opacity = AnimateHelper.trapTextOpacity;
        }

        var triangleStart = 7000;
        var rectangleStart = triangleStart + 4500;
        var hexagonStart = rectangleStart + 14500;
        var trapezoidStart = hexagonStart+21000;

        AnimateHelper.animate({
            style: {
                triangleOpacity: 1,
                triangleTextOpacity: 1,
            },
            duration:1000,
            delay: triangleStart,
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                firstPoint: new Point(230.5, 150.5),
                secondPoint: new Point(230.5, 150.5),

            },
            duration: 1000,
            delay: triangleStart+1000,
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                firstPoint: new Point(180.5, 140.5),
                secondPoint: new Point(280.5, 140.5),
            },
            duration: 1000,
            delay: triangleStart+2500,
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                triangleSymTextOpacity: 1,
            },
            duration: 1000,
            delay: triangleStart+3500,
            animationType: 'easeOut'
        });

        AnimateHelper.animate({
            style: {
                rectOpacity: 1,
            },
            duration: 1000,
            delay: rectangleStart,
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                rectBPoint: new Point(440.5, 140.5),
                rectAngle:Math.PI,
                shadowColor: new RgbColor(0.88, 0.88, 0.88),
            },
            duration: 1000,
            delay: rectangleStart+1500,
            update:function(){
                if(rectPath)
                    rectPath.remove();

                rectPath = new Path();
                rectPath.moveTo(AnimateHelper.rectDPoint);
                rectPath.lineTo(AnimateHelper.rectCPoint);
                rectPath.lineTo(
                    AnimateHelper.rectBPoint
                        .add(
                        10*Math.sin(this.rectAngle),
                        -10*Math.sin(this.rectAngle)
                    )
                );
                rectPath.lineTo(AnimateHelper.rectAPoint);
                rectPath.lineTo(AnimateHelper.rectDPoint);
                rectPath.strokeColor = "black";
                rectPath.opacity = AnimateHelper.rectOpacity;
            },
            animationType: 'easeInEaseOut'
        });

        rectFirstLine.animate({
            style: {
                opacity: 1,

            },
            duration: 20,
            delay: rectangleStart+2000,
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                rectBPoint: new Point(340.5, 40.5),
                rectAngle:0
            },
            duration: 1000,
            delay: rectangleStart+3000,
            update:function(){
                if(rectPath)
                    rectPath.remove();

                rectPath = new Path();
                rectPath.moveTo(AnimateHelper.rectDPoint);
                rectPath.lineTo(AnimateHelper.rectCPoint);
                rectPath.lineTo(
                    AnimateHelper.rectBPoint
                        .add(
                        10*Math.sin(this.rectAngle),
                        -10*Math.sin(this.rectAngle)
                    )
                );
                rectPath.lineTo(AnimateHelper.rectAPoint);
                rectPath.lineTo(AnimateHelper.rectDPoint);
                rectPath.strokeColor = "black";
                rectPath.opacity = AnimateHelper.rectOpacity;
            },
            animationType: 'easeInEaseOut'
        });

        rectFirstLine.animate({
            style: {
                opacity: 0,

            },
            duration: 20,
            delay: rectangleStart+3500,
            animationType: 'easeInEaseOut'
        });
        // second
        AnimateHelper.animate({
            style: {
                rectAPoint: new Point(340.5, 140.5),
                rectAngle:Math.PI
            },
            duration: 1000,
            delay: rectangleStart+4500,
            update:function(){
                if(rectPath)
                    rectPath.remove();

                rectPath = new Path();
                rectPath.moveTo(AnimateHelper.rectDPoint);
                rectPath.lineTo(AnimateHelper.rectCPoint);
                rectPath.lineTo(AnimateHelper.rectBPoint);
                rectPath.lineTo(
                    AnimateHelper.rectAPoint
                        .add(
                        -10*Math.sin(this.rectAngle),
                        -10*Math.sin(this.rectAngle)
                    )
                );
                rectPath.lineTo(AnimateHelper.rectDPoint);
                rectPath.strokeColor = "black";
                rectPath.opacity = AnimateHelper.rectOpacity;
            },
            animationType: 'easeInEaseOut'
        });

        rectSecondLine.animate({
            style: {
                opacity: 1,
            },
            duration: 20,
            delay: rectangleStart+5000,
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                rectAPoint: new Point(440.5, 40.5),
                rectAngle:0
            },
            duration: 1000,
            delay: rectangleStart+6000,
            update:function(){
                if(rectPath)
                    rectPath.remove();

                rectPath = new Path();
                rectPath.moveTo(AnimateHelper.rectDPoint);
                rectPath.lineTo(AnimateHelper.rectCPoint);
                rectPath.lineTo(AnimateHelper.rectBPoint);
                rectPath.lineTo(
                    AnimateHelper.rectAPoint
                        .add(
                        -10*Math.sin(this.rectAngle),
                        -10*Math.sin(this.rectAngle)
                    )

                );
                rectPath.lineTo(AnimateHelper.rectDPoint);
                rectPath.strokeColor = "black";
                rectPath.opacity = AnimateHelper.rectOpacity;
            },
            animationType: 'easeInEaseOut'
        });

        rectSecondLine.animate({
            style: {
                opacity: 0,

            },
            duration: 20,
            delay: rectangleStart+6500,
            animationType: 'easeInEaseOut'
        });

        // third
        AnimateHelper.animate({
            style: {
                rectAPoint: new Point(440.5, 140.5),
                rectBPoint: new Point(340.5, 140.5),

                rectAngle:Math.PI
            },
            duration: 1000,
            delay: rectangleStart+7500,
            update:function(){
                if(rectPath)
                    rectPath.remove();

                rectPath = new Path();
                rectPath.moveTo(AnimateHelper.rectFPoint);
                rectPath.lineTo(AnimateHelper.rectDPoint);
                rectPath.lineTo(AnimateHelper.rectCPoint);
                rectPath.lineTo(AnimateHelper.rectEPoint);
                rectPath.lineTo(
                    AnimateHelper.rectBPoint
                        .add(
                        -10*Math.sin(this.rectAngle),
                        0
                    )
                );
                rectPath.lineTo(
                    AnimateHelper.rectAPoint
                        .add(
                        10*Math.sin(this.rectAngle),
                        0
                    )
                );
                rectPath.lineTo(AnimateHelper.rectFPoint);
                rectPath.strokeColor = "black";
                rectPath.opacity = AnimateHelper.rectOpacity;
                if(this.rectAngle > Math.PI*0.5){
                    if(rectFillPath)
                        rectFillPath.remove();

                    rectFillPath = new Path();
                    rectFillPath.moveTo(AnimateHelper.rectEPoint);
                    rectFillPath.lineTo(
                        AnimateHelper.rectBPoint
                            .add(
                            -10*Math.sin(this.rectAngle),
                            0
                        )
                    );
                    rectFillPath.lineTo(
                        AnimateHelper.rectAPoint
                            .add(
                            10*Math.sin(this.rectAngle),
                            0
                        )

                    );
                    rectFillPath.lineTo(AnimateHelper.rectFPoint);
                    rectFillPath.strokeColor = "black";
                    rectFillPath.fillColor = "white";
                }
                if(this.rectAngle < Math.PI*0.5){
                    if(rectFillPath)
                        rectFillPath.remove();
                }
            },
            animationType: 'easeInEaseOut'
        });

        rectThirdLine.animate({
            style: {
                opacity: 1,

            },
            duration: 20,
            delay: rectangleStart+8000,
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                rectAPoint: new Point(440.5, 40.5),
                rectBPoint: new Point(340.5, 40.5),

                rectAngle:0
            },
            duration: 1000,
            delay: rectangleStart+9000,
            update:function(){
                if(rectPath)
                    rectPath.remove();

                rectPath = new Path();
                rectPath.moveTo(AnimateHelper.rectFPoint);
                rectPath.lineTo(AnimateHelper.rectDPoint);
                rectPath.lineTo(AnimateHelper.rectCPoint);
                rectPath.lineTo(AnimateHelper.rectEPoint);
                rectPath.lineTo(
                    AnimateHelper.rectBPoint
                        .add(
                        -10*Math.sin(this.rectAngle),
                        0
                    )
                );
                rectPath.lineTo(
                    AnimateHelper.rectAPoint
                        .add(
                        10*Math.sin(this.rectAngle),
                        0
                    )
                );
                rectPath.lineTo(AnimateHelper.rectFPoint);
                rectPath.strokeColor = "black";
                rectPath.opacity = AnimateHelper.rectOpacity;
                if(this.rectAngle > Math.PI*0.5){
                    if(rectFillPath)
                        rectFillPath.remove();

                    rectFillPath = new Path();
                    rectFillPath.moveTo(AnimateHelper.rectEPoint);
                    rectFillPath.lineTo(
                        AnimateHelper.rectBPoint
                            .add(
                            -10*Math.sin(this.rectAngle),
                            0
                        )
                    );
                    rectFillPath.lineTo(
                        AnimateHelper.rectAPoint
                            .add(
                            10*Math.sin(this.rectAngle),
                            0
                        )
                    );
                    rectFillPath.lineTo(AnimateHelper.rectFPoint);
                    rectFillPath.fillColor = "white";
                }
                if(this.rectAngle < Math.PI*0.5){
                    if(rectFillPath)
                        rectFillPath.remove();
                }
            },
            animationType: 'easeInEaseOut'
        });


        rectThirdLine.animate({
            style: {
                opacity: 0,
            },
            duration: 20,
            delay: rectangleStart+9500,
            animationType: 'easeInEaseOut'
        });

        // fourth
        AnimateHelper.animate({
            style: {
                rectAPoint: new Point(340.5, 40.5),
                rectDPoint: new Point(340.5, 140.5),
                rectAngle:Math.PI
            },
            duration: 1000,
            delay: rectangleStart+10500,
            update:function(){
                if(rectPath)
                    rectPath.remove();

                rectPath = new Path();
                rectPath.moveTo(AnimateHelper.rectGPoint);
                rectPath.lineTo(AnimateHelper.rectBPoint);
                rectPath.lineTo(AnimateHelper.rectCPoint);
                rectPath.lineTo(AnimateHelper.rectHPoint);

                rectPath.lineTo(
                    AnimateHelper.rectDPoint
                        .add(
                        0,
                        10*Math.sin(this.rectAngle)
                    )
                );
                rectPath.lineTo(
                    AnimateHelper.rectAPoint
                        .add(
                        0,
                        -10*Math.sin(this.rectAngle)
                    )
                );
                rectPath.lineTo(AnimateHelper.rectGPoint);
                rectPath.strokeColor = "black";
                rectPath.opacity = AnimateHelper.rectOpacity;
                if(this.rectAngle > Math.PI*0.5){
                    if(rectFillPath)
                        rectFillPath.remove();

                    rectFillPath = new Path();
                    rectFillPath.moveTo(AnimateHelper.rectHPoint);
                    rectFillPath.lineTo(
                        AnimateHelper.rectDPoint
                            .add(
                            0,
                            10*Math.sin(this.rectAngle)
                        )
                    );
                    rectFillPath.lineTo(
                        AnimateHelper.rectAPoint
                            .add(
                            0,
                            -10*Math.sin(this.rectAngle)
                        )

                    );
                    rectFillPath.lineTo(AnimateHelper.rectGPoint);
                    rectFillPath.strokeColor = "black";
                    rectFillPath.fillColor = "white";
                }
                if(this.rectAngle < Math.PI*0.5){
                    if(rectFillPath)
                        rectFillPath.remove();
                }
            },
            animationType: 'easeInEaseOut'
        });

        rectFourthLine.animate({
            style: {
                opacity: 1,

            },
            duration: 20,
            delay: rectangleStart+11000,
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                rectAPoint: new Point(440.5, 40.5),
                rectDPoint: new Point(440.5, 140.5),

                rectAngle:0
            },
            duration: 1000,
            delay: rectangleStart+12000,
            update:function(){
                if(rectPath)
                    rectPath.remove();

                rectPath = new Path();
                rectPath.moveTo(AnimateHelper.rectGPoint);
                rectPath.lineTo(AnimateHelper.rectBPoint);
                rectPath.lineTo(AnimateHelper.rectCPoint);
                rectPath.lineTo(AnimateHelper.rectHPoint);

                rectPath.lineTo(
                    AnimateHelper.rectDPoint
                        .add(
                        0,
                        10*Math.sin(this.rectAngle)
                    )
                );
                rectPath.lineTo(
                    AnimateHelper.rectAPoint
                        .add(
                        0,
                        -10*Math.sin(this.rectAngle)
                    )
                );
                rectPath.lineTo(AnimateHelper.rectGPoint);
                rectPath.strokeColor = "black";
                rectPath.opacity = AnimateHelper.rectOpacity;
                if(this.rectAngle > Math.PI*0.5){
                    if(rectFillPath)
                        rectFillPath.remove();

                    rectFillPath = new Path();
                    rectFillPath.moveTo(AnimateHelper.rectHPoint);
                    rectFillPath.lineTo(
                        AnimateHelper.rectDPoint
                            .add(
                            0,
                            10*Math.sin(this.rectAngle)
                        )
                    );
                    rectFillPath.lineTo(
                        AnimateHelper.rectAPoint
                            .add(
                            0,
                            -10*Math.sin(this.rectAngle)
                        )

                    );
                    rectFillPath.lineTo(AnimateHelper.rectGPoint);
                    rectFillPath.fillColor = "white";
                }
                if(this.rectAngle < Math.PI*0.5){
                    if(rectFillPath)
                        rectFillPath.remove();
                }
            },
            animationType: 'easeInEaseOut'
        });

        rectFourthLine.animate({
            style: {
                opacity: 0,
            },
            duration: 20,
            delay: rectangleStart+12500,
            animationType: 'easeInEaseOut'
        });


        AnimateHelper.animate({
            style: {
                squareSymTextOpacity: 1,
            },
            duration: 1000,
            delay: rectangleStart+13000,
            update: function(){
                if(rectFourthLine)
                    rectFourthLine.remove();
            },
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                hexOpacity: 1,
            },
            duration: 1000,
            delay: hexagonStart,
            animationType: 'easeInEaseOut'
        });

        // hex first close
        AnimateHelper.animate({
            style: {
                hexAPoint: new Point(600.5, 90.5),
                hexFPoint: new Point(570.5, 142.5),
                hexAngle: Math.PI
            },
            duration: 1000,
            delay: hexagonStart+1500,
            update:function(){
                if(hexPath)
                    hexPath.remove();

                hexPath = new Path();
                hexPath.moveTo(
                    AnimateHelper.hexAPoint
                    //				.add(
//						10*Math.sin(this.hexAngle),
//						-10*Math.sqrt(3)*Math.sin(this.hexAngle)
//					)
                );
                hexPath.lineTo(AnimateHelper.hexBPoint);
                hexPath.lineTo(AnimateHelper.hexCPoint);
                hexPath.lineTo(AnimateHelper.hexDPoint);
                hexPath.lineTo(AnimateHelper.hexEPoint);
                hexPath.lineTo(
                    AnimateHelper.hexFPoint
//					.add(
//						-10*Math.sqrt(3)*Math.sin(this.hexAngle),
//						10*Math.sin(this.hexAngle)
//					)
                );
                hexPath.lineTo(
                    AnimateHelper.hexAPoint
                    //			.add(
//						10*Math.sin(this.hexAngle),
//						-10*Math.sqrt(3)*Math.sin(this.hexAngle)
//					)
                );
                hexPath.strokeColor = "black";
                hexPath.opacity = AnimateHelper.hexOpacity;

            },
            animationType: 'easeInEaseOut'
        });

        // hex get first line
        hexFirstLine.animate({
            style: {
                opacity: 1,
            },
            duration: 20,
            delay: hexagonStart+2000,
            animationType: 'easeInEaseOut'
        });

        // hex first open
        AnimateHelper.animate({
            style: {
                hexAPoint: new Point(510.5, 38.5),
                hexFPoint: new Point(480.5, 90.5),
                hexAngle: 0
            },
            duration: 1000,
            delay: hexagonStart+3000,
            update:function(){
                if(hexPath)
                    hexPath.remove();

                hexPath = new Path();
                hexPath.moveTo(
                    AnimateHelper.hexAPoint
//					.add(
//						10*Math.sin(this.hexAngle),
//						-10*Math.sqrt(3)*Math.sin(this.hexAngle)
//					)
                );
                hexPath.lineTo(AnimateHelper.hexBPoint);
                hexPath.lineTo(AnimateHelper.hexCPoint);
                hexPath.lineTo(AnimateHelper.hexDPoint);
                hexPath.lineTo(AnimateHelper.hexEPoint);
                hexPath.lineTo(
                    AnimateHelper.hexFPoint
                    //				.add(
//						-10*Math.sqrt(3)*Math.sin(this.hexAngle),
//						10*Math.sin(this.hexAngle)
//					)
                );
                hexPath.lineTo(
                    AnimateHelper.hexAPoint
                    //				.add(
//						10*Math.sin(this.hexAngle),
//						-10*Math.sqrt(3)*Math.sin(this.hexAngle)
//					)
                );
                hexPath.strokeColor = "black";
                hexPath.opacity = AnimateHelper.hexOpacity;

            },
            animationType: 'easeInEaseOut'
        });

        // hex remove first line
        hexFirstLine.animate({
            style: {
                opacity: 0,
            },
            duration: 20,
            delay: hexagonStart+3500,
            animationType: 'easeInEaseOut'
        });

        // hex second close
        AnimateHelper.animate({
            style: {
                hexBPoint: new Point(480.5, 90.5),
                hexCPoint: new Point(510.5, 142.5),
                hexAngle: Math.PI
            },
            duration: 1000,
            delay: hexagonStart+4500,
            update:function(){
                if(hexPath)
                    hexPath.remove();

                hexPath = new Path();
                hexPath.moveTo(AnimateHelper.hexAPoint);
                hexPath.lineTo(
                    AnimateHelper.hexBPoint
                    //			.add(
//						-10*Math.sin(this.hexAngle),
//						-10*Math.sin(this.hexAngle)
//					)
                );
                hexPath.lineTo(
                    AnimateHelper.hexCPoint
                    //			.add(
//						10*Math.sin(this.hexAngle),
//						-10*Math.sin(this.hexAngle)
//					)
                );
                hexPath.lineTo(AnimateHelper.hexDPoint);
                hexPath.lineTo(AnimateHelper.hexEPoint);
                hexPath.lineTo(AnimateHelper.hexFPoint);
                hexPath.lineTo(AnimateHelper.hexAPoint);
                hexPath.strokeColor = "black";
                hexPath.opacity = AnimateHelper.hexOpacity;

            },
            animationType: 'easeInEaseOut'
        });

        // hex get second line
        hexSecondLine.animate({
            style: {
                opacity: 1,
            },
            duration: 20,
            delay: hexagonStart+5000,
            animationType: 'easeInEaseOut'
        });

        // hex second open
        AnimateHelper.animate({
            style: {
                hexBPoint: new Point(570.5, 38.5),
                hexCPoint: new Point(600.5, 90.5),
                hexAngle: 0
            },
            duration: 1000,
            delay: hexagonStart+6000,
            update:function(){
                if(hexPath)
                    hexPath.remove();

                hexPath = new Path();
                hexPath.moveTo(AnimateHelper.hexAPoint);
                hexPath.lineTo(
                    AnimateHelper.hexBPoint
                    //			.add(
//						-10*Math.sin(this.hexAngle),
//						-10*Math.sin(this.hexAngle)
//					)
                );
                hexPath.lineTo(
                    AnimateHelper.hexCPoint
                    //				.add(
//						10*Math.sin(this.hexAngle),
//						-10*Math.sin(this.hexAngle)
//					)
                );
                hexPath.lineTo(AnimateHelper.hexDPoint);
                hexPath.lineTo(AnimateHelper.hexEPoint);
                hexPath.lineTo(AnimateHelper.hexFPoint);
                hexPath.lineTo(AnimateHelper.hexAPoint);
                hexPath.strokeColor = "black";
                hexPath.opacity = AnimateHelper.hexOpacity;

            },
            animationType: 'easeInEaseOut'
        });

        // hex remove second line
        hexSecondLine.animate({
            style: {
                opacity: 0,
            },
            duration: 20,
            delay: hexagonStart+6500,
            animationType: 'easeInEaseOut'
        });

        // hex third close
        AnimateHelper.animate({
            style: {
                hexAPoint: new Point(510.5, 142.5),
                hexBPoint: new Point(570.5, 142.5),
                hexAngle: Math.PI
            },
            duration: 1000,
            delay: hexagonStart+7500,
            update:function(){
                if(hexPath)
                    hexPath.remove();

                hexPath = new Path();
                hexPath.moveTo(
                    AnimateHelper.hexAPoint
                        .add(
                        -10*Math.sin(this.hexAngle),
                        0
                    )
                );
                hexPath.lineTo(
                    AnimateHelper.hexBPoint
                        .add(
                        10*Math.sin(this.hexAngle),
                        0
                    )
                );
                hexPath.lineTo(AnimateHelper.hexCPoint);
                hexPath.lineTo(AnimateHelper.hexDPoint);
                hexPath.lineTo(AnimateHelper.hexEPoint);
                hexPath.lineTo(AnimateHelper.hexFPoint);
                hexPath.lineTo(
                    AnimateHelper.hexAPoint
                        .add(
                        -10*Math.sin(this.hexAngle),
                        0
                    )
                );
                hexPath.strokeColor = "black";
                hexPath.opacity = AnimateHelper.hexOpacity;

            },
            animationType: 'easeInEaseOut'
        });

        // hex get third line
        hexThirdLine.animate({
            style: {
                opacity: 1,
            },
            duration: 20,
            delay: hexagonStart+8000,
            animationType: 'easeInEaseOut'
        });

        // hex third open
        AnimateHelper.animate({
            style: {
                hexAPoint: new Point(510.5, 38.5),
                hexBPoint: new Point(570.5, 38.5),
                hexAngle: 0
            },
            duration: 1000,
            delay: hexagonStart+9000,
            update:function(){
                if(hexPath)
                    hexPath.remove();

                hexPath = new Path();
                hexPath.moveTo(
                    AnimateHelper.hexAPoint
                        .add(
                        -10*Math.sin(this.hexAngle),
                        0
                    )
                );
                hexPath.lineTo(
                    AnimateHelper.hexBPoint
                        .add(
                        10*Math.sin(this.hexAngle),
                        0
                    )
                );
                hexPath.lineTo(AnimateHelper.hexCPoint);
                hexPath.lineTo(AnimateHelper.hexDPoint);
                hexPath.lineTo(AnimateHelper.hexEPoint);
                hexPath.lineTo(AnimateHelper.hexFPoint);
                hexPath.lineTo(
                    AnimateHelper.hexAPoint
                        .add(
                        -10*Math.sin(this.hexAngle),
                        0
                    )
                );
                hexPath.strokeColor = "black";
                hexPath.opacity = AnimateHelper.hexOpacity;

            },
            animationType: 'easeInEaseOut'
        });

        // hex remove third line
        hexThirdLine.animate({
            style: {
                opacity: 0,
            },
            duration: 20,
            delay: hexagonStart+9500,
            animationType: 'easeInEaseOut'
        });

        // hex fourth close
        AnimateHelper.animate({
            style: {
                hexAPoint: new Point(570.5, 142.5),
                hexBPoint: new Point(600.5, 90.5),
                hexFPoint: new Point(510.5, 142.5),
                hexAngle: Math.PI,
            },
            duration: 1000,
            delay: hexagonStart+10500,
            update:function(){
                if(hexPath)
                    hexPath.remove();

                hexPath = new Path();
                hexPath.moveTo(AnimateHelper.hexAPoint);
                hexPath.lineTo(
                    AnimateHelper.hexBPoint
                        .add(
                        10*Math.sin(this.hexAngle),
                        -10*Math.sin(this.hexAngle)
                    )
                );
                hexPath.lineTo(AnimateHelper.hexGPoint);
                hexPath.lineTo(AnimateHelper.hexCPoint);
                hexPath.lineTo(AnimateHelper.hexDPoint);
                hexPath.lineTo(AnimateHelper.hexEPoint);
                hexPath.lineTo(AnimateHelper.hexHPoint);
                hexPath.lineTo(
                    AnimateHelper.hexFPoint
                        .add(
                        -10*Math.sin(this.hexAngle),
                        10*Math.sin(this.hexAngle)
                    )
                );
                hexPath.lineTo(AnimateHelper.hexAPoint);
                hexPath.strokeColor = "black";
                hexPath.opacity = AnimateHelper.hexOpacity;
                if(this.hexAngle > Math.PI*0.5){
                    if(hexFillPath)
                        hexFillPath.remove();
                    hexFillPath = new Path();
                    hexFillPath.moveTo(AnimateHelper.hexHPoint);
                    hexFillPath.lineTo(
                        AnimateHelper.hexFPoint
                            .add(
                            -10*Math.sin(this.hexAngle),
                            10*Math.sin(this.hexAngle)
                        )
                    );
                    hexFillPath.lineTo(AnimateHelper.hexAPoint);
                    hexFillPath.lineTo(
                        AnimateHelper.hexBPoint
                            .add(
                            10*Math.sin(this.hexAngle),
                            -10*Math.sin(this.hexAngle)
                        )
                    );
                    hexFillPath.lineTo(AnimateHelper.hexGPoint);
                    hexFillPath.strokeColor = "black";
                    hexFillPath.fillColor = "white";
                }
                if(this.hexAngle < Math.PI*0.5){
                    if(hexFillPath)
                        hexFillPath.remove();
                }
            },

            animationType: 'easeInEaseOut'
        });

        // hex get fourth line
        hexFourthLine.animate({
            style: {
                opacity: 1,
            },
            duration: 20,
            delay: hexagonStart+11000,
            animationType: 'easeInEaseOut'
        });

        // hex fourth open
        AnimateHelper.animate({
            style: {
                hexAPoint: new Point(510.5, 38.5),
                hexBPoint: new Point(570.5, 38.5),
                hexFPoint: new Point(480.5, 90.5),
                hexAngle: 0,
            },
            duration: 1000,
            delay: hexagonStart+12000,
            update:function(){
                if(hexPath)
                    hexPath.remove();

                hexPath = new Path();
                hexPath.moveTo(AnimateHelper.hexAPoint);
                hexPath.lineTo(
                    AnimateHelper.hexBPoint
                        .add(
                        10*Math.sin(this.hexAngle),
                        -10*Math.sin(this.hexAngle)
                    )
                );
                hexPath.lineTo(AnimateHelper.hexGPoint);
                hexPath.lineTo(AnimateHelper.hexCPoint);
                hexPath.lineTo(AnimateHelper.hexDPoint);
                hexPath.lineTo(AnimateHelper.hexEPoint);
                hexPath.lineTo(AnimateHelper.hexHPoint);
                hexPath.lineTo(
                    AnimateHelper.hexFPoint
                        .add(
                        -10*Math.sin(this.hexAngle),
                        10*Math.sin(this.hexAngle)
                    )
                );
                hexPath.lineTo(AnimateHelper.hexAPoint);
                hexPath.strokeColor = "black";
                hexPath.opacity = AnimateHelper.hexOpacity;
                if(this.hexAngle > Math.PI*0.5){
                    if(hexFillPath)
                        hexFillPath.remove();
                    hexFillPath = new Path();
                    hexFillPath.moveTo(AnimateHelper.hexHPoint);
                    hexFillPath.lineTo(
                        AnimateHelper.hexFPoint
                            .add(
                            -10*Math.sin(this.hexAngle),
                            10*Math.sin(this.hexAngle)
                        )
                    );
                    hexFillPath.lineTo(AnimateHelper.hexAPoint);
                    hexFillPath.lineTo(
                        AnimateHelper.hexBPoint
                            .add(
                            10*Math.sin(this.hexAngle),
                            -10*Math.sin(this.hexAngle)
                        )
                    );
                    hexFillPath.lineTo(AnimateHelper.hexGPoint);
                    hexFillPath.strokeColor = "black";
                    hexFillPath.fillColor = "white";
                }
                if(this.hexAngle < Math.PI*0.5){
                    if(hexFillPath)
                        hexFillPath.remove();
                }
            },
            animationType: 'easeInEaseOut'
        });

        // hex remove fourth line
        hexFourthLine.animate({
            style: {
                opacity: 0,
            },
            duration: 20,
            delay: hexagonStart+12500,
            animationType: 'easeInEaseOut'
        });

        // hex fifth close
        AnimateHelper.animate({
            style: {
                hexAPoint: new Point(480.5, 90.5),
                hexBPoint: new Point(510.5, 142.5),
                hexCPoint: new Point(570.5, 142.5),
                hexAngle: Math.PI,
            },
            duration: 1000,
            delay: hexagonStart+13500,
            update:function(){
                if(hexPath)
                    hexPath.remove();

                hexPath = new Path();
                hexPath.moveTo(
                    AnimateHelper.hexAPoint
                        .add(
                        -10*Math.sin(this.hexAngle),
                        -10*Math.sin(this.hexAngle)
                    )
                );
                hexPath.lineTo(AnimateHelper.hexBPoint);
                hexPath.lineTo(
                    AnimateHelper.hexCPoint
                        .add(
                        10*Math.sin(this.hexAngle),
                        10*Math.sin(this.hexAngle)
                    )
                );
                hexPath.lineTo(AnimateHelper.hexKPoint);
                hexPath.lineTo(AnimateHelper.hexDPoint);
                hexPath.lineTo(AnimateHelper.hexEPoint);
                hexPath.lineTo(AnimateHelper.hexFPoint);
                hexPath.lineTo(AnimateHelper.hexJPoint);
                hexPath.lineTo(
                    AnimateHelper.hexAPoint
                        .add(
                        -10*Math.sin(this.hexAngle),
                        -10*Math.sin(this.hexAngle)
                    )
                );
                hexPath.strokeColor = "black";
                hexPath.opacity = AnimateHelper.hexOpacity;
                if(this.hexAngle > Math.PI*0.5){
                    if(hexFillPath)
                        hexFillPath.remove();
                    hexFillPath = new Path();
                    hexFillPath.moveTo(AnimateHelper.hexJPoint);
                    hexFillPath.lineTo(
                        AnimateHelper.hexAPoint
                            .add(
                            -10*Math.sin(this.hexAngle),
                            -10*Math.sin(this.hexAngle)
                        )
                    );
                    hexFillPath.lineTo(AnimateHelper.hexBPoint);
                    hexFillPath.lineTo(
                        AnimateHelper.hexCPoint
                            .add(
                            10*Math.sin(this.hexAngle),
                            10*Math.sin(this.hexAngle)
                        )
                    );
                    hexFillPath.lineTo(AnimateHelper.hexKPoint);
                    hexFillPath.strokeColor = "black";
                    hexFillPath.fillColor = "white";
                }
                if(this.hexAngle < Math.PI*0.5){
                    if(hexFillPath)
                        hexFillPath.remove();
                }
            },

            animationType: 'easeInEaseOut'
        });

        // hex get fifth line
        hexFifthLine.animate({
            style: {
                opacity: 1,
            },
            duration: 20,
            delay: hexagonStart+14000,
            animationType: 'easeInEaseOut'
        });

        // hex fifth open
        AnimateHelper.animate({
            style: {
                hexAPoint: new Point(510.5, 38.5),
                hexBPoint: new Point(570.5, 38.5),
                hexCPoint: new Point(600.5, 90.5),
                hexAngle: 0,
            },
            duration: 1000,
            delay: hexagonStart+15000,
            update:function(){
                if(hexPath)
                    hexPath.remove();

                hexPath = new Path();
                hexPath.moveTo(
                    AnimateHelper.hexAPoint
                        .add(
                        -10*Math.sin(this.hexAngle),
                        -10*Math.sin(this.hexAngle)
                    )
                );
                hexPath.lineTo(AnimateHelper.hexBPoint);
                hexPath.lineTo(
                    AnimateHelper.hexCPoint
                        .add(
                        10*Math.sin(this.hexAngle),
                        10*Math.sin(this.hexAngle)
                    )
                );
                hexPath.lineTo(AnimateHelper.hexKPoint);
                hexPath.lineTo(AnimateHelper.hexDPoint);
                hexPath.lineTo(AnimateHelper.hexEPoint);
                hexPath.lineTo(AnimateHelper.hexFPoint);
                hexPath.lineTo(AnimateHelper.hexJPoint);
                hexPath.lineTo(
                    AnimateHelper.hexAPoint
                        .add(
                        -10*Math.sin(this.hexAngle),
                        -10*Math.sin(this.hexAngle)
                    )
                );
                hexPath.strokeColor = "black";
                hexPath.opacity = AnimateHelper.hexOpacity;
                if(this.hexAngle > Math.PI*0.5){
                    if(hexFillPath)
                        hexFillPath.remove();
                    hexFillPath = new Path();
                    hexFillPath.moveTo(AnimateHelper.hexJPoint);
                    hexFillPath.lineTo(
                        AnimateHelper.hexAPoint
                            .add(
                            -10*Math.sin(this.hexAngle),
                            -10*Math.sin(this.hexAngle)
                        )
                    );
                    hexFillPath.lineTo(AnimateHelper.hexBPoint);
                    hexFillPath.lineTo(
                        AnimateHelper.hexCPoint
                            .add(
                            10*Math.sin(this.hexAngle),
                            10*Math.sin(this.hexAngle)
                        )
                    );
                    hexFillPath.lineTo(AnimateHelper.hexKPoint);
                    hexFillPath.strokeColor = "black";
                    hexFillPath.fillColor = "white";
                }
                if(this.hexAngle < Math.PI*0.5){
                    if(hexFillPath)
                        hexFillPath.remove();

                }
            },

            animationType: 'easeInEaseOut'
        });

        // hex remove fifth line
        hexFifthLine.animate({
            style: {
                opacity: 0,
            },
            duration: 20,
            delay: hexagonStart+15500,
            animationType: 'easeInEaseOut'
        });

        // hex sixth close
        AnimateHelper.animate({
            style: {
                hexBPoint: new Point(510.5, 38.5),
                hexCPoint: new Point(480.5, 90.5),
                hexDPoint: new Point(510.5, 142.5),
                hexAngle: Math.PI,
            },
            duration: 1000,
            delay: hexagonStart+16500,
            update:function(){
                if(hexPath)
                    hexPath.remove();

                hexPath = new Path();
                hexPath.moveTo(AnimateHelper.hexAPoint);
                hexPath.lineTo(AnimateHelper.hexLPoint);
                hexPath.lineTo(
                    AnimateHelper.hexBPoint
                        .add(
                        0,
                        -10*Math.sin(this.hexAngle)
                    )
                );
                hexPath.lineTo(AnimateHelper.hexCPoint);
                hexPath.lineTo(
                    AnimateHelper.hexDPoint
                        .add(
                        0,
                        10*Math.sin(this.hexAngle)
                    )
                );
                hexPath.lineTo(AnimateHelper.hexMPoint);
                hexPath.lineTo(AnimateHelper.hexEPoint);
                hexPath.lineTo(AnimateHelper.hexFPoint);
                hexPath.lineTo(AnimateHelper.hexAPoint);
                hexPath.strokeColor = "black";
                hexPath.opacity = AnimateHelper.hexOpacity;
                if(this.hexAngle > Math.PI*0.5){
                    if(hexFillPath)
                        hexFillPath.remove();
                    hexFillPath = new Path();
                    hexFillPath.moveTo(AnimateHelper.hexLPoint);
                    hexFillPath.lineTo(
                        AnimateHelper.hexBPoint
                            .add(
                            0,
                            -10*Math.sin(this.hexAngle)
                        )
                    );
                    hexFillPath.lineTo(AnimateHelper.hexCPoint);
                    hexFillPath.lineTo(
                        AnimateHelper.hexDPoint
                            .add(
                            0,
                            10*Math.sin(this.hexAngle)
                        )
                    );
                    hexFillPath.lineTo(AnimateHelper.hexMPoint);
                    hexFillPath.strokeColor = "black";
                    hexFillPath.fillColor = "white";
                }
            },
            animationType: 'easeInEaseOut'
        });

        // hex get sixth line
        hexSixthLine.animate({
            style: {
                opacity: 1,
            },
            duration: 20,
            delay: hexagonStart+17000,
            animationType: 'easeInEaseOut'
        });

        // hex sixth open
        AnimateHelper.animate({
            style: {
                hexBPoint: new Point(570.5, 38.5),
                hexCPoint: new Point(600.5, 90.5),
                hexDPoint: new Point(570.5, 142.5),
                hexAngle: 0,
            },
            duration: 1000,
            delay: hexagonStart+18000,
            update:function(){
                if(hexPath)
                    hexPath.remove();

                hexPath = new Path();
                hexPath.moveTo(AnimateHelper.hexAPoint);
                hexPath.lineTo(AnimateHelper.hexLPoint);
                hexPath.lineTo(
                    AnimateHelper.hexBPoint
                        .add(
                        0,
                        -10*Math.sin(this.hexAngle)
                    )
                );
                hexPath.lineTo(AnimateHelper.hexCPoint);
                hexPath.lineTo(
                    AnimateHelper.hexDPoint
                        .add(
                        0,
                        10*Math.sin(this.hexAngle)
                    )
                );
                hexPath.lineTo(AnimateHelper.hexMPoint);
                hexPath.lineTo(AnimateHelper.hexEPoint);
                hexPath.lineTo(AnimateHelper.hexFPoint);
                hexPath.lineTo(AnimateHelper.hexAPoint);
                hexPath.strokeColor = "black";
                hexPath.opacity = AnimateHelper.hexOpacity;
                if(this.hexAngle > Math.PI*0.5){
                    if(hexFillPath)
                        hexFillPath.remove();
                    hexFillPath = new Path();
                    hexFillPath.moveTo(AnimateHelper.hexLPoint);
                    hexFillPath.lineTo(
                        AnimateHelper.hexBPoint
                            .add(
                            0,
                            -10*Math.sin(this.hexAngle)
                        )
                    );
                    hexFillPath.lineTo(AnimateHelper.hexCPoint);
                    hexFillPath.lineTo(
                        AnimateHelper.hexDPoint
                            .add(
                            0,
                            10*Math.sin(this.hexAngle)
                        )
                    );
                    hexFillPath.lineTo(AnimateHelper.hexMPoint);
                    hexFillPath.strokeColor = "black";
                    hexFillPath.fillColor = "white";
                }
                if(this.hexAngle < Math.PI*0.5){
                    if(hexFillPath)
                        hexFillPath.remove();
                }
            },
            animationType: 'easeInEaseOut'
        });

        // hex remove sixth line
        hexSixthLine.animate({
            style: {
                opacity: 0,
            },
            duration: 20,
            delay: hexagonStart+18500,
            animationType: 'easeInEaseOut'
        });

        AnimateHelper.animate({
            style: {
                hexSymTextOpacity: 1,
            },
            duration: 1000,
            delay: hexagonStart+19500,
            animationType: 'easeInEaseOut'
        });

        // trapezoid
        AnimateHelper.animate({
            style: {
                trapOpacity: 1,
            },
            duration: 1000,
            delay: trapezoidStart,
            animationType: 'easeInEaseOut',
        });

        AnimateHelper.animate({
            style: {
                trapTextOpacity: 1,
            },
            duration: 1000,
            delay: trapezoidStart+1000,
            animationType: 'easeInEaseOut',
            callback: function(){
                Main.animationFinished();
            }
        });



    }
}

var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki şekillerin simetrilerini oluşturmak için, çizeceğiniz doğru parçasının başlangıç ve bitiş noktalarını belirleyiniz. Daha sonra kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.dotGroup = [];
        var symLine = new Path.Line(new Point(210,10), new Point(210, 260));
        symLine.strokeColor = "grey";
        symLine.strokeWidth = 2;
        symLine.dashArray = [3,2];
        // creating dots
        for(i = 0; i < 13; i++){
            for(j = 0; j < 8; j++){
                var circc = new Path.Circle(new Point(30+(i*30), 30+(j*30)), 3);
                circc.strokeColor = "grey";
                circc.fillColor = "grey";
                circc.class = "circle";
                circc.id2 = i*8 + j;
                if(circc.id2 < 48){
                    circc.class = "non-click";
                }
                Interaction.dotGroup.push(circc);
            }
        }

        Interaction.appendStatus({
            left:'445px',
            top:'94px',
            width: '120px',
            height: '50px',
            textAlign: 'left'
        });
        Interaction.appendButton({
            bottom:'10px',
            right:'20px'
        })

        $(Interaction.container).append('<button id="deleteBtn" class="delete_button"></button>')
        $('#deleteBtn').css("position", "absolute")
                        .css("bottom", "12px")
                        .css("right", "260px")
                        .css("opacity", 0.4)

        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        $('#deleteBtn').get(0).onclick = null;
        $('#deleteBtn').css("opacity", 0.4)
    //    Interaction.deleteAll();
        Interaction.trial = 1;
        Interaction.myArr = [];
        if(Interaction.qLineGroup)
            Interaction.qLineGroup.remove();
        if(Interaction.aLineGroup){
            for(var i = 0; i < Interaction.aLineGroup.length; i++)
                Interaction.aLineGroup[i].remove();
        }
        if(Interaction.path)
            Interaction.path.remove();

        for(i = 48; i < 104; i++){
            Interaction.dotGroup[i].fillColor = "grey";
            Interaction.dotGroup[i].strokeColor = "grey";
        }

        Interaction.ansArr = [];
        Interaction.clickk = 0;
        var drag = new Tool();
        drag.setHitTestOptions({ fill: true, stroke: true, segments: true, tolerance: 9 , class: "circle"});
        drag.onMouseDown = function(event){
            if(event.item){
                if(Interaction.clickk == 0){
                    Interaction.path = new Path();
                    Interaction.path.strokeColor = 'orange';
                    Interaction.path.strokeWidth = 4;
                    Interaction.path.add(event.item.position);
                    Interaction.ansArr.push(event.item.id2);
                    event.item.strokeColor = "black";
                    event.item.fillColor = "black";
                    Interaction.clickk = 1;
                    $('#deleteBtn').css("opacity", 1);
                    $('#deleteBtn').get(0).onclick = Interaction.deleteAll;
                }
                else{
                    Interaction.path.add(event.item.position);
                    Interaction.ansArr.push(event.item.id2);
                    event.item.strokeColor = "black";
                    event.item.fillColor = "black";
                }
            }
        };
        drag.activate();
        // startPoint
        var startPoint = Util.randomInteger(48, 52);
        // endPoint
        var endPoint = Util.randomInteger(52, 56);
        // firstPoint
        var firstPt = Util.randomInteger(24, 28)
        var firstMlt = Util.randomInteger(0, 3);
        var firstPoint = firstPt + (firstMlt * 8);
        //secondPoint
        var secondPt = Util.randomInteger(0, 4);
        var secondMlt = Util.randomInteger(0, 3);
        var secondPoint = secondPt + (secondMlt * 8);
        // thirdPoint
        var thirdPt = Util.randomInteger(4, 8);
        var thirdMlt = Util.randomInteger(0, 3);
        var thirdPoint = thirdPt + (thirdMlt * 8);
        // fourthPoint
        var fourthPt = Util.randomInteger(28, 32);
        var fourthMlt = Util.randomInteger(0, 3);
        var fourthPoint = fourthPt + (fourthMlt * 8);
        Interaction.myArr.push(startPoint);
        Interaction.myArr.push(firstPoint);
        Interaction.myArr.push(secondPoint);
        Interaction.myArr.push(thirdPoint);
        Interaction.myArr.push(fourthPoint);
        Interaction.myArr.push(endPoint);


        Interaction.quesArr = [];
        Interaction.answerArr = [];
        Interaction.qLineGroup = new Group();
        Interaction.aLineGroup = [];
        for(var i = 0; i < 5; i++){
            var qLine = new Path.Line(new Point(Interaction.dotGroup[Interaction.myArr[i]].position.x, Interaction.dotGroup[Interaction.myArr[i]].position.y),
                new Point(Interaction.dotGroup[Interaction.myArr[i+1]].position.x, Interaction.dotGroup[Interaction.myArr[i+1]].position.y));
            Interaction.quesArr.push(Interaction.dotGroup[Interaction.myArr[i]].id2);
            if(i == 4){
                Interaction.quesArr.push(Interaction.dotGroup[Interaction.myArr[i+1]].id2);
            }
            var a = Interaction.myArr[i];
            var b = a % 8;
            var c = Math.floor(a/8);
            var d = Interaction.myArr[i+1];
            var e = d % 8;
            var f = Math.floor(d/8);
            var g = 104-((c+1)*8)+b;
            var h = 104-((f+1)*8)+e;
            var aLine = new Path.Line(new Point(Interaction.dotGroup[g].position.x, Interaction.dotGroup[g].position.y),
                new Point(Interaction.dotGroup[h].position.x, Interaction.dotGroup[h].position.y));
            Interaction.answerArr.push(Interaction.dotGroup[g].id2);
            if(i == 4){
                Interaction.answerArr.push(Interaction.dotGroup[h].id2);
            }
            aLine.strokeColor = "green";
            aLine.strokeWidth = 4;
            Interaction.aLineGroup.push(aLine);

            aLine.opacity = 0;

            qLine.strokeColor = "green";
            qLine.strokeWidth = 4;
            Interaction.qLineGroup.addChild(qLine);
        }
    },

    /*
     *	this function is called inside Interaction.__checkAnswer() function
     *	if this function returns false, check answer operation is cancelled
     */
    preCheck : function(){

    },
    isAnswerCorrect : function(value){
        var correct = 0;
        var correct2 = 0;
        Interaction.ansArr = Interaction.removeSamePoints(Interaction.ansArr);
        Interaction.ansArr = Interaction.removeLinearPoints(Interaction.ansArr);
        Interaction.answerArr = Interaction.removeLinearPoints(Interaction.answerArr);

        var myLen = Interaction.answerArr.length;
        for(var i = 0; i < myLen; i++){
            if(Interaction.ansArr[i] == Interaction.answerArr[i])
                correct += 1;
        }
        for(var i = 0; i < myLen; i++){
            if(Interaction.ansArr[i] == Interaction.answerArr[myLen-1-i])
                correct2 += 1;
        }
        if((correct == myLen && Interaction.ansArr.length == Interaction.answerArr.length) || (correct2 == myLen && Interaction.ansArr.length == Interaction.answerArr.length))
            return true;
        else
            return false;

    },
    onCorrectAnswer : function(){
        $('#deleteBtn').css("opacity", 0.4)
        $('#deleteBtn').get(0).onclick = null;
    },
    onWrongAnswer : function(){

    },
    onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yanda gösterilmiştir.', false);

        if(Interaction.ansArr.length < Interaction.answerArr.length){
            for(i = Interaction.ansArr.length; i < Interaction.answerArr.length; i++){
                Interaction.ansArr[i] = -1;
            }
        }
        if(Interaction.path){
            Interaction.path.strokeColor = "red";
            Interaction.path.strokeWidth = 3;
        }



        var len = Interaction.answerArr.length;
        for(i = 0; i < 5; i++){
            Interaction.aLineGroup[i].opacity = 1;
            if(Interaction.path)
                Interaction.aLineGroup[i].insertAbove(Interaction.path);
        }
        $('#deleteBtn').css("opacity", 0.4)
        $('#deleteBtn').get(0).onclick = null;

    },
    deleteAll : function(){
        console.log("entered to deleteAll")
        if(Interaction.path){
            Interaction.path.remove();
        }
        Interaction.clickk = 0;
        Interaction.ansArr = [];
        for(i = 48; i < 104; i++){
            Interaction.dotGroup[i].fillColor = "grey";
            Interaction.dotGroup[i].strokeColor = "grey";
        }
        $('#deleteBtn').css("opacity", 0.4);
        $('#deleteBtn').get(0).onclick = null;
    },
    removeSamePoints : function(arr){
        var retArr = [];
        var arr2 = [];
        for(j = 0; j < arr.length; j++){
            arr2[j] = arr[j];
        }
        for(i = 0; i < arr.length-1; i++){
            if(arr[i] == arr[i+1]){
                arr2[i] = -1;
            }
        }
        for(i = 0, index = 0; i < arr2.length; i++){
            if(arr2[i] != -1){
                retArr[index] = arr2[i];
                index += 1;
            }
        }
        return retArr;
    },
    removeLinearPoints: function(arr){
        var retArr = [];
        var arr2 = [];
        for(j = 0; j < arr.length; j++){
            arr2[j] = arr[j];
        }
        for(i = 0; i < arr.length - 2; i++){
            var a = new Point();
            var b = new Point();
            var c = new Point();
            a.x = Interaction.dotGroup[arr[i]].position.x;
            a.y = Interaction.dotGroup[arr[i]].position.y;
            b.x = Interaction.dotGroup[arr[i+1]].position.x;
            b.y = Interaction.dotGroup[arr[i+1]].position.y;
            c.x = Interaction.dotGroup[arr[i+2]].position.x;
            c.y = Interaction.dotGroup[arr[i+2]].position.y;
            if(((a.y == b.y) && (a.y == c.y))
                || ((a.x == b.x) && (a.x == c.x))
                || (((b.y - a.y) / (b.x - a.x)) == ((c.y - a.y) / (c.x - a.x)))){
                arr2[i+1] = -1;
            }
        }
        for(i = 0, index = 0; i < arr2.length; i++){
            if(arr2[i] != -1){
                retArr[index] = arr2[i];
                index += 1;
            }
        }
        return retArr;
    }
}