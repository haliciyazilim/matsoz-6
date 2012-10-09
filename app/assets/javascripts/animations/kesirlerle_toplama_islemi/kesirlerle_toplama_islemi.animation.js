var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 0;
        var totalStart = animStart+1500;
        var firstRectStart = totalStart+1500;
        var fracsStart = firstRectStart+2000;
        var denomEqStart = fracsStart+2000;
        var denomEqLast = denomEqStart+2000;
        var plusStart = denomEqLast+2000;
        var rect3Start = plusStart+1000;
        var flyStart = rect3Start+2000;
        var numAxisStart = flyStart+5000;
        var bigDotsStart = numAxisStart+1000;
        var firstDotStart = bigDotsStart+2000;

        var smallDotsStart = firstDotStart+2000;
        var execStart = smallDotsStart+2000;

        var rect4 = new Path.SegmentedRectangle(140.5, 10.5, 75, 50, 1, 1, 1, rectFillColor);
        rect4.strokeColor = rectFillColor;
        rect4.opacity = 0;
        var rect5 = new Path.SegmentedRectangle(360.5, 10.5, 50, 50, 1, 1, 1, rectFillColor);
        rect5.strokeColor = rectFillColor;
        rect5.opacity = 0;
        var rect1 = new Path.SegmentedRectangle(140.5, 10.5, 150, 50, 2, 1, 1, rectFillColor);
        rect1.opacity = 0;
        var rect2 = new Path.SegmentedRectangle(360.5, 10.5, 150, 50, 3, 1, 1, rectFillColor);
        rect2.opacity = 0;
        var rect3 = new Path.SegmentedRectangle(580.5, 10.5, 150, 50, 6, 1, 0, rectFillColor);
        rect3.opacity = 0;

        var arrow = new Path.OneSidedArrow(new Point(525, 35), new Point(565, 35), 10, 30);
        arrow.opacity = 0;

        var dashedLinesGroup = new Group();
        for(i = 0; i < 5; i++){
            var dashedLine = new Path.Line(new Point(165.5+(i*25),10.5), new Point(165.5+(i*25),60.5));
            dashedLine.strokeColor = "black";
            dashedLine.dashArray = [3, 2];
            dashedLinesGroup.addChild(dashedLine);
        }
        dashedLinesGroup.opacity = 0;

        var dashedLinesGroup2 = new Group();
        for(i = 0; i < 5; i++){
            var dashedLine2 = new Path.Line(new Point(385.5+(i*25),10.5), new Point(385.5+(i*25),60.5));
            dashedLine2.strokeColor = "black";
            dashedLine2.dashArray = [3, 2];
            dashedLinesGroup2.addChild(dashedLine2);
        }
        dashedLinesGroup2.opacity = 0;

        var pluss = new PointText(new Point(326.5, 48.5));
        pluss.justification = "center";
        pluss.fillColor = "black";
        pluss.fontSize = 26;
        pluss.content = "+";
        pluss.opacity = 0;

        var arr = new Group();
        var arroww = new Path.OneSidedArrow(new Point(170, 164), new Point(670, 164), 10, 30);
        var arroww2 = new Path.OneSidedArrow(new Point(670, 164), new Point(671, 164), 10, 30);
        arroww.rotate(180);
        arr.addChild(arroww);
        arr.addChild(arroww2);
        arr.opacity = 0;

        var bigDots = new Group();
        var bigDot1 = new Path.Circle(new Point(210.5, 164.5), 5);
        bigDot1.strokeColor = "black";
        bigDot1.fillColor = "black";
        var bigDot2 = new Path.Circle(new Point(630.5, 164.5), 5);
        bigDot2.strokeColor = "black";
        bigDot2.fillColor = "black";
        bigDots.addChild(bigDot1);
        bigDots.addChild(bigDot2);
        bigDots.opacity = 0;

        var smallDots = new Group();
        for(i = 0; i < 5; i++){
            var smallDot = new Path.Circle(new Point(280.5+(70*i), 164.5), 3);
            smallDot.strokeColor = "black";
            smallDot.fillColor = "black";
            smallDot.opacity = 0;
            smallDots.addChild(smallDot);
        }

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
        arcGroup.opacity = 0;

        $(Animation.container).append('<div id="frac22"><p id="nom22">1</p><div id="line22"></div><p id="denom22">2</p></div>')

        $('#frac22').css("position", "absolute")
            .css("top", "83px")
            .css("left", "222px")
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
        $('#frac22').delay(fracsStart).animate({opacity: 1}, 1000)
            .delay(1000).animate({opacity: 0}, 1000);

        $(Animation.container).append('<div id="frac33"><div id="nom33">1 x 3</div><div id="line33"></div><div id="denom33">2 x 3</div></div>')

        $('#frac33').css("position", "absolute")
            .css("top", "83px")
            .css("left", "213px")
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
        $('#frac33').delay(denomEqStart).animate({opacity: 1}, 1000)
            .delay(1000).animate({opacity: 0}, 1000);

        $(Animation.container).append('<div id="frac44"><div id="nom44">3</div><div id="line44"></div><div id="denom44">6</div></div>');

        $('#frac44').css("position", "absolute")
            .css("top", "83px")
            .css("left", "222px")
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

        $('#frac44').css("opacity", 0);
        $('#frac44').delay(denomEqLast).animate({opacity: 1}, 1000);

        $(Animation.container).append('<div id="frac55"><div id="nom55">1</div><div id="line55"></div><div id="denom55">3</div></div>')

        $('#frac55').css("position", "absolute")
            .css("top", "83px")
            .css("left", "442px")
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
        $('#frac55').delay(fracsStart).animate({opacity: 1}, 1000)
            .delay(1000).animate({opacity: 0}, 1000);

        $(Animation.container).append('<div id="frac66"><div id="nom66">1 x 2</div><div id="line66"></div><div id="denom66">3 x 2</div></div>');

        $('#frac66').css("position", "absolute")
            .css("top", "83px")
            .css("left", "433px")
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
        $('#frac66').delay(denomEqStart).animate({opacity: 1}, 1000)
            .delay(1000).animate({opacity: 0}, 1000);

        $(Animation.container).append('<div id="frac77"><div id="nom77">2</div><div id="line77"></div><div id="denom77">6</div></div>');

        $('#frac77').css("position", "absolute")
            .css("top", "83px")
            .css("left", "442px")
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

        $('#frac77').css("opacity", 0);
        $('#frac77').delay(denomEqLast).animate({opacity: 1}, 1000);

        $(Animation.container).append('<div id="frac88"><div id="nom88">3</div><div id="line88"></div><div id="denom88">6</div></div><div id="pls">+</div><div id="frac888"><div id="nom888">2</div><div id="line888"></div><div id="denom888">6</div></div><div id="eqq">=</div><div id="frac8888"><div id="nom8888">5</div><div id="line8888"></div><div id="denom8888">6</div></div>')

        $('#frac88').css("position", "absolute")
            .css("top", "83px")
            .css("left", "632px")
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
                left: "652px",
                top:"92px"
            });

        $('#frac888').css("position", "absolute")
            .css("top", "83px")
            .css("left", "664px")
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
                left: "684px",
                top:"92px"
            });

        $('#frac8888').css("position", "absolute")
            .css("top", "83px")
            .css("left", "696px")
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

        $('#frac88').css("opacity", 0).delay(flyStart+1000).animate({opacity: 1}, 1000);
        $('#pls').css("opacity", 0).delay(flyStart+1000).animate({opacity: 1}, 1000);
        $('#frac888').css("opacity", 0).delay(flyStart+1000).animate({opacity: 1}, 1000);
        $('#eqq').css("opacity", 0).delay(flyStart+3500).animate({opacity: 1}, 1000);
        $('#frac8888').css("opacity", 0).delay(flyStart+3500).animate({opacity: 1}, 1000);

        $(Animation.container).append('<p id="zerro">0</p>');
        $('#zerro').css({
            position: "absolute",
            left: "219px",
            top: "150px",
            fontSize: 24
        });
        $('#zerro').css("opacity", 0).delay(bigDotsStart+1000).animate({opacity: 1}, 1000);

        $(Animation.container).append('<p id="onne">1</p>');
        $('#onne').css({
            position: "absolute",
            left: "637px",
            top: "150px",
            fontSize: 24
        });
        $('#onne').css("opacity", 0).delay(bigDotsStart+1000).animate({opacity: 1}, 1000);

        $(Animation.container).append('<div id="frac222"><div id="nom222">1</div><div id="line222"></div><div id="denom222">2</div></div>');

        $('#frac222').css("position", "absolute")
            .css("top", "141px")
            .css("left", "426px")
            .css("width", "16px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("line-height","16px");

        $('#line222').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);
        $('#nom222').css("text-align", "center")
            .css("height", "16px");
        $('#denom222').css("text-align", "center")
            .css("height", "16px");

        $('#frac222').css("opacity", 0);
        $('#frac222').delay(firstDotStart).animate({opacity: 1}, 1000,'easeInOutQuad')
            .delay(1000).animate({opacity: 0}, 1000,'easeInOutQuad');

        $(container).append('<div id="frac333"><div id="nom333">3</div><div id="line333"></div><div id="denom333">6</div></div>');

        $('#frac333').css("position", "absolute")
            .css("top", "141px")
            .css("left", "426px")
            .css("width", "16px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("color", "red")
            .css("line-height","16px");

        $('#line333').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom333').css("text-align", "center")
            .css("height", "16px");

        $('#denom333').css("text-align", "center")
            .css("height", "16px");

        $('#frac333').css("opacity", 0);
        $('#frac333').delay(smallDotsStart).animate({opacity: 1}, 1000,'easeInOutQuad')
            .delay(2000).animate({opacity: 0}, 1000,'easeInOutQuad');

        $(Animation.container).append('<div id="frac3333"><div id="nom3333">3</div><div id="line3333"></div><div id="denom3333">6</div></div>');

        $('#frac3333').css("position", "absolute")
            .css("top", "141px")
            .css("left", "426px")
            .css("width", "16px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("line-height","16px");

        $('#line3333').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom3333').css("text-align", "center")
            .css("height", "16px");

        $('#denom3333').css("text-align", "center")
            .css("height", "16px");

        $('#frac3333').css("opacity", 0);
        $('#frac3333').delay(smallDotsStart+3000).animate({opacity: 1}, 0,'easeInOutQuad');

        $(container).append('<div id="frac444"><div id="nom444">5</div><div id="line444"></div><div id="denom444">6</div></div>');

        $('#frac444').css("position", "absolute")
            .css("top", "141px")
            .css("left", "566px")
            .css("width", "16px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("line-height","16px");

        $('#line444').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom444').css("text-align", "center")
            .css("height", "16px");

        $('#denom444').css("text-align", "center")
            .css("height", "16px");

        $('#frac444').css("opacity", 0);
        $('#frac444').delay(execStart+8000).animate({opacity: 1}, 1000,'easeInOutQuad', function(){Main.animationFinished(1000);});

        $(Animation.container).append('<div id="frac555"><div id="nom555">1</div><div id="line555"></div><div id="denom555">3</div></div>');

        $('#frac555').css("position", "absolute")
            .css("top", "106px")
            .css("left", "496px")
            .css("width", "16px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("line-height","16px");

        $('#line555').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom555').css("text-align", "center")
            .css("height", "16px");

        $('#denom555').css("text-align", "center")
            .css("height", "16px");

        $('#frac555').css("opacity", 0);
        $('#frac555').delay(execStart+1000).animate({opacity: 1}, 1000,'easeInOutQuad')
            .delay(2000).animate({opacity: 0}, 1000,'easeInOutQuad');

        $(Animation.container).append('<div id="frac5555"><div id="nom5555">2</div><div id="line5555"></div><div id="denom5555">6</div></div>');

        $('#frac5555').css("position", "absolute")
            .css("top", "106px")
            .css("left", "496px")
            .css("width", "16px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("line-height","16px")
            .css("color","red");

        $('#line5555').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom5555').css("text-align", "center")
            .css("height", "16px");

        $('#denom5555').css("text-align", "center")
            .css("height", "16px");

        $('#frac5555').css("opacity", 0);
        $('#frac5555').delay(execStart+4000).animate({opacity: 1}, 1000,'easeInOutQuad')
            .delay(2000).animate({opacity: 0}, 1000,'easeInOutQuad');

        $(Animation.container).append('<div id="frac55555"><div id="nom55555">2</div><div id="line55555"></div><div id="denom55555">6</div></div>');

        $('#frac55555').css("position", "absolute")
            .css("top", "106px")
            .css("left", "496px")
            .css("width", "16px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("line-height","16px");

        $('#line55555').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom55555').css("text-align", "center")
            .css("height", "16px");

        $('#denom55555').css("text-align", "center")
            .css("height", "16px");

        $('#frac55555').css("opacity", 0);
        $('#frac55555').delay(execStart+7000).animate({opacity: 1}, 0,'easeInOutQuad');


        // first execution

        $(Animation.container).append('<div id="my1"><p id="myNom1">1</p><div id="myLine1"></div><p id="myDenom1">2</p></div>');

        $('#my1').css("position", "absolute")
            .css("top", "106px")
            .css("left", "26px")
            .css("width", "16px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("font-weight","bold")
            .css("line-height","16px");

        $('#myLine1').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#myNom1').css("text-align", "center")
            .css("height", "16px");

        $('#myDenom1').css("text-align", "center")
            .css("height", "16px");

        $('#my1').css("opacity",0);
        $('#my1').delay(totalStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#my1').delay(denomEqLast-totalStart-1000).animate({opacity:0},1000,'easeInOutQuad');

        $(Animation.container).append('<div id="my11"><p id="myNom11">3</p><div id="myLine11"></div><p id="myDenom11">6</p></div>');

        $('#my11').css("position", "absolute")
            .css("top", "106px")
            .css("left", "26px")
            .css("width", "16px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("font-weight","bold")
            .css("line-height","16px");

        $('#myLine11').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#myNom11').css("text-align", "center")
            .css("height", "16px");

        $('#myDenom11').css("text-align", "center")
            .css("height", "16px");
        $('#my11').css("opacity",0);
        $('#my11').delay(denomEqLast).animate({opacity:1},1000,'easeInOutQuad');


        $(Animation.container).append('<span id="plss" style="opacity:0;font-weight:bold;position:absolute;top:115px;left:50px;">+</span><span id="eqqq" style="opacity:0;font-weight:bold;position:absolute;top:116px;left:88px;">=</span><span id="eqqq2" style="opacity:0;position:absolute;font-weight:bold;top:116px;left:140px;">=</span>');
        $('#plss').delay(totalStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#eqqq').delay(totalStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#eqqq2').delay(flyStart).animate({opacity:1},1000,'easeInOutQuad');
        $(Animation.container).append('<div id="my2"><p id="myNom2">1</p><div id="myLine2"></div><p id="myDenom2">3</p></div>');

        $('#my2').css("position", "absolute")
            .css("top", "106px")
            .css("left", "66px")
            .css("width", "16px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("font-weight","bold")
            .css("line-height","16px");

        $('#myLine2').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#myNom2').css("text-align", "center")
            .css("height", "16px");

        $('#myDenom2').css("text-align", "center")
            .css("height", "16px");
        $('#my2').css("opacity",0);
        $('#my2').delay(totalStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#my2').delay(denomEqLast-totalStart-1000).animate({opacity:0},1000,'easeInOutQuad');

        $(Animation.container).append('<div id="my22"><p id="myNom22">2</p><div id="myLine22"></div><p id="myDenom22">6</p></div>');

        $('#my22').css("position", "absolute")
            .css("top", "106px")
            .css("left", "66px")
            .css("width", "16px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("font-weight","bold")
            .css("line-height","16px");

        $('#myLine22').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#myNom22').css("text-align", "center")
            .css("height", "16px");

        $('#myDenom22').css("text-align", "center")
            .css("height", "16px");
        $('#my22').css("opacity",0);
        $('#my22').delay(denomEqLast).animate({opacity:1},1000,'easeInOutQuad');

        $(Animation.container).append('<div id="my3"><p id="myNom3">3+2</p><div id="myLine3"></div><p id="myDenom3">6</p></div>');

        $('#my3').css("position", "absolute")
            .css("top", "106px")
            .css("left", "104px")
            .css("width", "28px")
            .css("height", "33px")
            .css("padding", 0)
            .css("margin", 0)
            .css("font-weight","bold")
            .css("line-height","16px");

        $('#myLine3').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#myNom3').css("text-align", "center")
            .css("height", "16px");

        $('#myDenom3').css("text-align", "center")
            .css("height", "16px");
        $('#my3').css("opacity",0);
        $('#my3').delay(flyStart).animate({opacity:1},1000,'easeInOutQuad');

        $(Animation.container).append('<div id="my4"><p id="myNom4">5</p><div id="myLine4"></div><p id="myDenom4">6</p></div>');

        $('#my4').css("position", "absolute")
            .css("top", "106px")
            .css("left", "154px")
            .css("width", "16px")
            .css("height", "16px")
            .css("padding", 0)
            .css("margin", 0)
            .css("font-weight","bold")
            .css("line-height","16px");

        $('#myLine4').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#myNom4').css("text-align", "center")
            .css("height", "16px");

        $('#myDenom4').css("text-align", "center")
            .css("height", "16px");
        $('#my4').css("opacity",0);
        $('#my4').delay(flyStart+3500).animate({opacity:1},1000,'easeInOutQuad');

        $(Animation.container).append('<span id="aa1" style="font-weight:bold;opacity:0;position:absolute;top:140px;left:25px;">(3)</span><span id="aa2" style="font-weight:bold;opacity:0;position:absolute;top:140px;left:65px;">(2)</span>');
        $('#aa1').delay(denomEqStart-500).animate({opacity:1},1000,'easeInOutQuad');
        $('#aa1').delay(denomEqLast-denomEqStart-500).animate({opacity:0},1000,'easeInOutQuad');
        $('#aa2').delay(denomEqStart-500).animate({opacity:1},1000,'easeInOutQuad');
        $('#aa2').delay(denomEqLast-denomEqStart-500).animate({opacity:0},1000,'easeInOutQuad');
        rect1.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstRectStart,
            animationType:'easeInOutQuad'
        });

        rect2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstRectStart,
            animationType:'easeInOutQuad'
        });

        dashedLinesGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:denomEqLast,
            animationType:'easeInOutQuad'
        });

        dashedLinesGroup2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:denomEqLast,
            animationType:'easeInOutQuad'
        });

        pluss.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:plusStart,
            animationType:'easeInOutQuad'
        });

        arrow.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:plusStart,
            animationType:'easeInOutQuad'
        });

        rect3.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:rect3Start,
            animationType:'easeInOutQuad'
        });

        rect4.animate({
            style:{
                opacity:2,
                position:new Point(618,35.5)
            },
            duration:3000,
            delay:flyStart,
            animationType:'easeInOutQuad'
        });

        rect5.animate({
            style:{
                opacity:2,
                position:new Point(680.5,35.5)
            },
            duration:3000,
            delay:flyStart,
            animationType:'easeInOutQuad'
        });

        arr.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:numAxisStart,
            animationType:'easeInOutQuad'
        });

        bigDots.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bigDotsStart,
            animationType:'easeInOutQuad'
        });

        smallDots.children[2].animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:firstDotStart,
            animationType:'easeInOutQuad'
        });

        smallDots.children[0].animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:smallDotsStart,
            animationType:'easeInOutQuad'
        });

        smallDots.children[1].animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:smallDotsStart,
            animationType:'easeInOutQuad'
        });

        smallDots.children[3].animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:smallDotsStart,
            animationType:'easeInOutQuad'
        });

        smallDots.children[4].animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:smallDotsStart,
            animationType:'easeInOutQuad'
        });

        arcGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:execStart+1000,
            animationType:'easeInOutQuad'
        });

    }
}