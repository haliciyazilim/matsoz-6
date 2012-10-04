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

        $(Animation.container).append('<div id="frac22"><p id="nom22">1</p><div id="line22"></div><p id="denom22">2</p></div>')

        $('#frac22').css("position", "absolute")
            .css("top", "108px")
            .css("left", "182px")
            .css("width", "16px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("line-height","16px");

        $('#line22').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom22').css("text-align", "center")
            .css("height", "16px");

        $('#denom22').css("text-align", "center")
            .css("height", "16px");

        $('#frac22').css("opacity", 0);
//        $('#frac22').delay(2000).animate({opacity: 1}, 1000)
//            .delay(1000).animate({opacity: 0}, 1000);

        $(Animation.container).append('<div id="frac33"><div id="nom33">1 x 3</div><div id="line33"></div><div id="denom33">2 x 3</div></div>')

        $('#frac33').css("position", "absolute")
            .css("top", "108px")
            .css("left", "173px")
            .css("width", "36px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("color", "red")
            .css("line-height","16px");

        $('#line33').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom33').css("text-align", "center")
            .css("height", "16px");

        $('#denom33').css("text-align", "center")
            .css("height", "16px");

        $('#frac33').css("opacity", 0);
//        $('#frac33').delay(4000).animate({opacity: 1}, 1000)
//            .delay(1000).animate({opacity: 0}, 1000);

        $(Animation.container).append('<div id="frac44"><div id="nom44">3</div><div id="line44"></div><div id="denom44">6</div></div>');

        $('#frac44').css("position", "absolute")
            .css("top", "108px")
            .css("left", "182px")
            .css("width", "16px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("line-height","16px");

        $('#line44').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom44').css("text-align", "center")
            .css("height", "16px");

        $('#denom44').css("text-align", "center")
            .css("height", "16px");

        $('#frac44').css("opacity", 1);
//        $('#frac44').delay(6000).animate({opacity: 1}, 1000);

        $(Animation.container).append('<div id="frac55"><div id="nom55">1</div><div id="line55"></div><div id="denom55">3</div></div>')

        $('#frac55').css("position", "absolute")
            .css("top", "108px")
            .css("left", "402px")
            .css("width", "16px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("line-height","16px");

        $('#line55').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom55').css("text-align", "center")
            .css("height", "16px");

        $('#denom55').css("text-align", "center")
            .css("height", "16px");

        $('#frac55').css("opacity", 0);
//        $('#frac55').delay(2000).animate({opacity: 1}, 1000);

        $(Animation.container).append('<div id="frac66"><div id="nom66">1 x 2</div><div id="line66"></div><div id="denom66">3 x 2</div></div>');

        $('#frac66').css("position", "absolute")
            .css("top", "108px")
            .css("left", "393px")
            .css("width", "36px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("color", "red")
            .css("line-height","16px");

        $('#line66').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom66').css("text-align", "center")
            .css("height", "16px");

        $('#denom66').css("text-align", "center")
            .css("height", "16px");

        $('#frac66').css("opacity", 0);
//        $('#frac66').delay(4000).animate({opacity: 1}, 1000)
//            .delay(1000).animate({opacity: 0}, 1000);

        $(Animation.container).append('<div id="frac77"><div id="nom77">2</div><div id="line77"></div><div id="denom77">6</div></div>');

        $('#frac77').css("position", "absolute")
            .css("top", "108px")
            .css("left", "402px")
            .css("width", "16px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("line-height","16px");

        $('#line77').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom77').css("text-align", "center")
            .css("height", "16px");

        $('#denom77').css("text-align", "center")
            .css("height", "16px");

        $('#frac77').css("opacity", 1);
//        $('#frac7').delay(6000).animate({opacity: 1}, 1000);

        $(Animation.container).append('<div id="frac88"><div id="nom88">3</div><div id="line88"></div><div id="denom88">6</div></div><div id="pls">+</div><div id="frac888"><div id="nom888">2</div><div id="line888"></div><div id="denom888">6</div></div><div id="eqq">=</div><div id="frac8888"><div id="nom8888">5</div><div id="line8888"></div><div id="denom8888">6</div></div>')

        $('#frac88').css("position", "absolute")
            .css("top", "108px")
            .css("left", "592px")
            .css("width", "16px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("line-height","16px");

        $('#line88').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);
        $('#nom88').css("text-align", "center")
            .css("height", "16px");
        $('#denom88').css("text-align", "center")
            .css("height", "16px");

        $('#pls')
            .css({
                position: "absolute",
                left: "612px",
                top:"117px"
            });

        $('#frac888').css("position", "absolute")
            .css("top", "108px")
            .css("left", "624px")
            .css("width", "16px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("line-height","16px");

        $('#line888').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);
        $('#nom888').css("text-align", "center")
            .css("height", "16px");
        $('#denom888').css("text-align", "center")
            .css("height", "16px");

        $('#eqq')
            .css({
                position: "absolute",
                left: "644px",
                top:"117px"
            });

        $('#frac8888').css("position", "absolute")
            .css("top", "108px")
            .css("left", "656px")
            .css("width", "16px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("line-height","16px");
        $('#line8888').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);
        $('#nom8888').css("text-align", "center")
            .css("height", "16px");
        $('#denom8888').css("text-align", "center")
            .css("height", "16px");

//        $('#frac88').css("opacity", 0).delay(11000).animate({opacity: 1}, 1000);
//        $('#pls').css("opacity", 0).delay(11000).animate({opacity: 1}, 1000);
//        $('#frac888').css("opacity", 0).delay(11000).animate({opacity: 1}, 1000);
//        $('#eqq').css("opacity", 0).delay(11000).animate({opacity: 1}, 1000);
//        $('#frac8888').css("opacity", 0).delay(13000).animate({opacity: 1}, 500);

    }
}