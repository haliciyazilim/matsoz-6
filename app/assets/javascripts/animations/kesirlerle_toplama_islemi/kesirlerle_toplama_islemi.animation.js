var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var rect4 = new Path.SegmentedRectangle(100.5, 10.5, 75, 75, 1, 1, 1, rectFillColor);
        rect4.opacity = 0;
        var rect5 = new Path.SegmentedRectangle(320.5, 10.5, 50, 75, 1, 1, 1, rectFillColor);
        rect5.opacity = 0;
        var rect1 = new Path.SegmentedRectangle(100.5, 10.5, 150, 75, 2, 1, 1, rectFillColor);
        rect1.opacity = 1;
        var rect2 = new Path.SegmentedRectangle(320.5, 10.5, 150, 75, 3, 1, 1, rectFillColor);
        rect2.opacity = 1;
        var rect3 = new Path.SegmentedRectangle(540.5, 10.5, 150, 75, 6, 1, 0, rectFillColor);
        rect3.opacity = 1;

        var arrow = new Path.OneSidedArrow(new Point(485, 50), new Point(525, 50), 10, 30);
        arrow.opacity = 1;

        var dashedLinesGroup = new Group();
        for(i = 0; i < 5; i++){
            var dashedLine = new Path.Line(new Point(125.5+(i*25),10.5), new Point(125.5+(i*25),85.5));
            dashedLine.strokeColor = "black";
            dashedLine.dashArray = [3, 2];
            dashedLinesGroup.addChild(dashedLine);
        }
        dashedLinesGroup.opacity = 1;

        var dashedLinesGroup2 = new Group();
        for(i = 0; i < 5; i++){
            var dashedLine2 = new Path.Line(new Point(345.5+(i*25),10.5), new Point(345.5+(i*25),85.5));
            dashedLine2.strokeColor = "black";
            dashedLine2.dashArray = [3, 2];
            dashedLinesGroup2.addChild(dashedLine2);
        }
        dashedLinesGroup2.opacity = 1;

        var pluss = new PointText(new Point(286.5, 63.5));
        pluss.justification = "center";
        pluss.fillColor = "black";
        pluss.fontSize = 26;
        pluss.content = "+";
        pluss.opacity = 1;

        var arr = new Group();
        var arroww = new Path.OneSidedArrow(new Point(170, 164), new Point(670, 164), 10, 30);
        var arroww2 = new Path.OneSidedArrow(new Point(670, 164), new Point(671, 164), 10, 30);
        arroww.rotate(180);
        arr.addChild(arroww);
        arr.addChild(arroww2);
        arr.opacity = 1;

        var bigDots = new Group();
        var bigDot1 = new Path.Circle(new Point(210.5, 164.5), 5);
        bigDot1.strokeColor = "black";
        bigDot1.fillColor = "black";
        var bigDot2 = new Path.Circle(new Point(630.5, 164.5), 5);
        bigDot2.strokeColor = "black";
        bigDot2.fillColor = "black";
        bigDots.addChild(bigDot1);
        bigDots.addChild(bigDot2);
        bigDots.opacity = 1;

        var smallDots = new Group();
        for(i = 0; i < 5; i++){
            var smallDot = new Path.Circle(new Point(280.5+(70*i), 164.5), 3);
            smallDot.strokeColor = "black";
            smallDot.fillColor = "black";
            smallDots.addChild(smallDot);
        }
        smallDots.opacity = 1;

        var arcGroup = new Group();
        var arc = new Path.Arc(new Point(434, 140), new Point(490, 130), new Point(546, 140));
        arc.strokeColor = "black";
        var linee1 = new Path.Line(new Point(546,140), new Point(542,132));
        linee1.strokeColor = "black";
        var linee2 = new Path.Line(new Point(546,140), new Point(536,142));
        linee2.strokeColor = "black";
        arcGroup.addChild(arc);
        arcGroup.addChild(linee1);
        arcGroup.addChild(linee2);
        arcGroup.opacity = 1;
    }
}