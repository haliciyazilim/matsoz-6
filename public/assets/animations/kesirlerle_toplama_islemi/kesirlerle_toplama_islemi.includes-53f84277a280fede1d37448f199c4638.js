function __Styles(){
	rectFillColor = "#ffdead";

    questionDivStyle = {
        position:'absolute',
        top:'40px',
        left:'120px',
        width:'300px',
        height:'60px',
        fontSize:'24px'
    };

    answerDivStyle = {
        position:'absolute',
        top:'130px',
        left:'105px',
        width:'400px',
        height:'80px',
        fontSize:'18px',
    //    border:'1px solid',
        color:'#069'
    };
}
;
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
;
var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yanda verilen kesirlerin toplamlarını bulunuz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.appendStatus({
            bottom:'30px',
            right:'150px',
            width:'370px',
            height:'26px',
            textAlign:'center'
        //    border:'1px solid'
        });
        Interaction.appendButton({
            bottom:'30px',
            right:'30px'
        });

        Interaction.appendInput({
            position:'absolute',
            top:'-9px',
            left:'202px',
            height:'32px',
            width:'42px',
            fontSize:'22px'
        });

        Interaction.appendInput({
            position:'absolute',
            top:'35px',
            left:'202px',
            height:'32px',
            width:'42px',
            fontSize:'22px'
        });

        Interaction.questionDiv = Util.dom({parent:Interaction.container, tag:'div', css:questionDivStyle,
            html:'<div id="firstFracDiv" style="position:absolute;top:0px;left:0px;width:65px;height:60px;"></div>' +
                '<span id="intPlus" style="position:absolute;top:18px;left:75px;">+</span>' +
                '</div><div id="secondFracDiv" style="position:absolute;top:0px;left:96px;width:65px;height:60px;"></div>' +
                '<span id="intEq" style="position:absolute;top:18px;left:170px;">=</span>' +
                '<div id="answerLine" style="position:absolute;top:29px;left:200px;width:48px;height:1px;border-top:2px solid;padding:0"></div>'
        });

        $(Interaction.inputs[0]).attr("max-length",3);
        $(Interaction.inputs[1]).attr("max-length",3);

        $(Interaction.questionDiv).append(Interaction.inputs[0]);
        $(Interaction.questionDiv).append(Interaction.inputs[1]);

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){

        if(Interaction.answerDiv){
            $(Interaction.answerDiv).remove();
        }

        $('#firstFracDiv').html('');
        $('#secondFracDiv').html('');

        $(Interaction.inputs[0]).css("color","black");
        $(Interaction.inputs[1]).css("color","black");


        var digit1 = Util.randomDigit(0,5);
        var digit2 = Util.randomDigit(0,5);
        var nom1, nom2, denom1, denom2,factor1,factor2;

        if(digit1 == 0){
            factor1 = Util.randomInteger(1,4);
        }
        if(digit2 == 0){
            factor2 = Util.randomInteger(1,4);
        }

        denom1 = Util.randomInteger(2,7);
        do{
            denom2 = Util.randomInteger(2,7,[denom1]);
        } while(Util.gcd(denom1,denom2) != 1);

        do{
            nom1 = Util.randomInteger(1,10);
        } while(nom1 == denom1 || nom1 % denom1 == 0);
        do{
            nom2 = Util.randomInteger(1,10);
        } while(nom2 == denom2 || nom2 % denom2 == 0);

        if(digit1 == 0 && digit2 == 0){
            Interaction.firstFrac = new RationalNumber({factor:1,integer:factor1,nominator:nom1,denominator:denom1});
            Interaction.secondFrac = new RationalNumber({factor:1,integer:factor2,nominator:nom2,denominator:denom2});
        }
        else if(digit1 == 0 && digit2 != 0){
            Interaction.firstFrac = new RationalNumber({factor:1,integer:factor1,nominator:nom1,denominator:denom1});
            Interaction.secondFrac = new RationalNumber({factor:1,nominator:nom2,denominator:denom2});
        }
        else if(digit1 != 0 && digit2 == 0){
            Interaction.firstFrac = new RationalNumber({factor:1,nominator:nom1,denominator:denom1});
            Interaction.secondFrac = new RationalNumber({factor:1,integer:factor2,nominator:nom2,denominator:denom2});
        }
        else{
            Interaction.firstFrac = new RationalNumber({factor:1,nominator:nom1,denominator:denom1});
            Interaction.secondFrac = new RationalNumber({factor:1,nominator:nom2,denominator:denom2});
        }

        Interaction.answer = Interaction.firstFrac.addition(Interaction.secondFrac);
        Interaction.answer.convertToCompoundForm();


        Interaction.firstH = Interaction.firstFrac.toHTML(24);
        $(Interaction.firstH).css("right","0px");
        Interaction.secondH = Interaction.secondFrac.toHTML(24);
        $(Interaction.secondH).css("left","0px");

        if(Interaction.secondFrac.integer){
            $('#intEq').css("left","170px");
            $('#answerLine').css("left","196px");
            $(Interaction.inputs[0]).css("left","198px");
            $(Interaction.inputs[1]).css("left","198px");
            $(Interaction.questionDiv).css("left","140px");
        }
        else{
            $('#intEq').css("left","140px");
            $('#answerLine').css("left","164px");
            $(Interaction.inputs[0]).css("left","166px");
            $(Interaction.inputs[1]).css("left","166px");
            $(Interaction.questionDiv).css("left","150px")
        }

        $('#firstFracDiv').append(Interaction.firstH);
        $('#secondFracDiv').append(Interaction.secondH);
    },
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        if(value[0] != 0 && value[1] != 0){
            if(value[0]*Interaction.answer.denominator == value[1]*Interaction.answer.nominator){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir!", false);
        $(Interaction.inputs[0]).css("color","red");
        $(Interaction.inputs[1]).css("color","red");

        Interaction.showAnswer();
		
    },
    showAnswer : function(){
        Interaction.answerDiv = Util.dom({parent:Interaction.container, tag:'div', css:answerDivStyle,
            html:'<div id="sf1" style="color:black;position:absolute;top:20px;left:20px;width:40px;height:42px;padding:0;margin:0;line-height:20px;">' +
                '<div id="sint1" style="width:20px;height:42px;text-align:center;float:left;line-height:42px;"></div>' +
                '<div id="snom1" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '<div id="sline1" style="height:1px;width:20px;border-top:2px solid;padding:0;float:left;"></div>' +
                '<div id="sdenom1" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '</div>' +
                '<span id="fact1" style="position:absolute;top:64px;left:38px;"></span>' +
                '<span id="t1" style="color:black;position:absolute;top:32px;left:66px;">+</span>' +
                '<div id="sf2" style="color:black;position:absolute;top:20px;left:72px;width:40px;height:42px;padding:0;margin:0;line-height:20px;">' +
                '<div id="sint2" style="width:20px;height:42px;text-align:center;float:left;line-height:42px;"></div>' +
                '<div id="snom2" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '<div id="sline2" style="height:1px;width:20px;border-top:2px solid;padding:0;float:left;"></div>' +
                '<div id="sdenom2" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '</div>' +
                '<span id="fact2" style="position:absolute;top:64px;left:92px;"></span>' +
                '<span id="ee1" style="position:absolute;top:33px;left:118px;">=</span>' +
                '<div id="sf3" style="position:absolute;top:20px;left:134px;width:120px;height:42px;padding:0;margin:0;line-height:20px;">' +
                '<div id="snom3" style="text-align:center;width:120px;height:20px;float:left;"></div>' +
                '<div id="sline3" style="height:1px;width:120px;border-top:2px solid;padding:0;float:left;"></div>' +
                '<div id="sdenom3" style="text-align:center;width:120px;height:20px;float:left;"></div>' +
                '</div>' +
                '<span id="ee2" style="position:absolute;top:33px;left:260px;">=</span>' +
                '<div id="ff" style="position:absolute;top:20px;left:276px;width:30px;height:42px;padding:0;margin:0;line-height:20px;">' +
                '<div id="fnom" style="text-align:center;width:30px;height:20px;float:left;"></div>' +
                '<div id="fline" style="height:1px;width:30px;border-top:2px solid;padding:0;float:left;"></div>' +
                '<div id="fdenom" style="text-align:center;width:30px;height:20px;float:left;"></div>' +
                '</div>'
        });

        if(Interaction.secondFrac.integer){
            $('#sf1').css("left","20px");
            $('#fact1').css("left","38px");
            $('#t1').css("left","66px");
        }
        else{
            $('#sf1').css("left","30px");
            $('#fact1').css("left","48px");
            $('#t1').css("left","76px");
        }

        var snomStr = "";
        if(Interaction.firstFrac.integer){
            $('#sint1').html(Interaction.firstFrac.integer);
            var intp = Interaction.firstFrac.integer*Interaction.firstFrac.denominator;
            intp += Interaction.firstFrac.nominator;
            snomStr += "("+intp+"x"+Interaction.secondFrac.denominator+") + ";
        }
        else{
            snomStr += "("+Interaction.firstFrac.nominator+"x"+Interaction.secondFrac.denominator+") + ";
        }
        if(Interaction.secondFrac.integer){
            $('#sint2').html(Interaction.secondFrac.integer);
            var intp2 = Interaction.secondFrac.integer*Interaction.secondFrac.denominator;
            intp2 += Interaction.secondFrac.nominator;
            snomStr += "("+intp2+"x"+Interaction.firstFrac.denominator+")";
        }
        else{
            snomStr += "("+Interaction.secondFrac.nominator+"x"+Interaction.firstFrac.denominator+")";

        }
        $('#snom1').html(Interaction.firstFrac.nominator);
        $('#snom2').html(Interaction.secondFrac.nominator);

        $('#sdenom1').html(Interaction.firstFrac.denominator);
        $('#sdenom2').html(Interaction.secondFrac.denominator);

        $('#fact1').html("("+Interaction.secondFrac.denominator+")");
        $('#fact2').html("("+Interaction.firstFrac.denominator+")");

        $('#snom3').html(snomStr);
        $('#sdenom3').html(Interaction.answer.denominator);

        $('#fnom').html(Interaction.answer.nominator);
        $('#fdenom').html(Interaction.answer.denominator);
    }
}
;
var RationalNumber = Class.extend({
    init:function(opt){
        if(opt.integer){
            this.integer = opt.integer;
        }
        this.nominator = opt.nominator;
        this.denominator = opt.denominator;
        if(opt.factor){
            this.factor = opt.factor;
        }
        else{
            this.factor = 1;
        }

        this.determineType();
        this.determineDefinition();
        this.determineValue();

    },
    simplification:function(){
        var gcd = Util.gcd(this.nominator,this.denominator);

        this.nominator = this.nominator/gcd;
        this.denominator = this.denominator/gcd;

        this.determineDefinition();
        this.determineValue();
    },
    denomEqualization:function(otherRationalNumber){
        var lcm = Util.lcm(this.denominator,otherRationalNumber.denominator);

        this.nominator = this.nominator * (lcm/this.denominator);
        this.denominator = lcm;

        otherRationalNumber.nominator = otherRationalNumber.nominator * (lcm/otherRationalNumber.denominator);
        otherRationalNumber.denominator = lcm;

        this.determineDefinition();
        this.determineValue();

        otherRationalNumber.determineDefinition();
        otherRationalNumber.determineValue();
    },
    addition:function(otherRationalNumber){
        var nom, nom1, nom2, factor1, flag, denom, integer;

        flag = 0;
        this.denomEqualization(otherRationalNumber);

        if(this.integer){
            nom1 = (this.integer * this.denominator) + this.nominator;
            flag = 1;
        }
        else{
            nom1 = this.nominator;
        }

        if(otherRationalNumber.integer){
            nom2 = (otherRationalNumber.integer * otherRationalNumber.denominator) + otherRationalNumber.nominator;
            flag = 1;
        }
        else{
            nom2 = otherRationalNumber.nominator;
        }

        denom = this.denominator;

        nom = (this.factor * nom1) + (otherRationalNumber.factor * nom2);

        if(flag){
            integer = Math.floor(Math.abs(nom / denom));
            nom = nom % denom;
            denom = denom;
        }

        if(nom < 0){
            factor1 = -1;
            nom = -1 * nom;
        }
        else{
            factor1 = 1;
            nom = nom;
        }

        if(flag){
           var addition = new RationalNumber({factor:factor1,integer:integer,nominator:nom,denominator:denom});
        }
        else{
            var addition = new RationalNumber({factor:factor1,nominator:nom,denominator:denom});
        }

        this.simplification();
        otherRationalNumber.simplification();

        addition.simplification();
        return addition;
    },
    substraction:function(otherRationalNumber){
        var substraction;

        otherRationalNumber.additionInvert();

        substraction = this.addition(otherRationalNumber);

        otherRationalNumber.additionInvert();

        substraction.simplification();
        return substraction;
    },
    multiplication:function(otherRationalNumber){
        var factor1, nom1, denom1;
        var flag1 = 0;
        var flag2 = 0;
        if(this.type == RationalNumber.COMPLEX){
            this.convertToCompoundForm();
            flag1 = 1;
        }
        if(otherRationalNumber.type == RationalNumber.COMPLEX){
            otherRationalNumber.convertToCompoundForm();
            flag2 = 1;
        }

        factor1 = this.factor * otherRationalNumber.factor;
        nom1 = this.nominator * otherRationalNumber.nominator;
        denom1 = this.denominator * otherRationalNumber.denominator;

        var multiplication = new RationalNumber({factor:factor1,nominator:nom1,denominator:denom1});

        if(flag1 == 1){
            this.convertToComplexForm();
        }
        if(flag2 == 1){
            otherRationalNumber.convertToComplexForm();
        }

    //    multiplication.simplification();
        return multiplication;
    },
    division:function(otherRationalNumber){
        var division;

        otherRationalNumber.multiplicationInvert();

        division = this.multiplication(otherRationalNumber);

        otherRationalNumber.multiplicationInvert();

    //    division.simplification();
        return division;
    },
    convertToComplexForm:function(){
        if(!this.integer){
            this.integer = Math.floor(this.nominator / this.denominator);
            this.nominator = this.nominator % this.denominator;
        }

        this.determineType();
        this.determineDefinition();
        this.determineValue();
    },
    convertToCompoundForm:function(){
        if(this.integer){
            this.nominator = (this.integer * this.denominator) + this.nominator;
        }

        this.integer = undefined;
        this.determineType();
        this.determineDefinition();
        this.determineValue();
    },
    additionInvert:function(){
        if(this.factor){
            if(this.factor == 1){
                this.factor = -1;
            }
            else{
                this.factor = 1;
            }
        }

        this.determineType();
        this.determineDefinition();
        this.determineValue();
    },
    multiplicationInvert:function(){
        if(this.type == 3){
            this.convertToCompoundForm();
        }

        var nom = this.nominator;
        this.nominator = this.denominator;
        this.denominator = nom;

        this.determineType();
        this.determineDefinition();
        this.determineValue();

    },
    toHTML:function(fontSize){
        var now = Date.now();

        var line = fontSize+4;
        var height = (2*line)+1;
        var width = height+6;
        var width2 = Math.round(width * 0.56);
        var width3 = width - width2;
        var lineWidth = width2;
        var intHeight = 2*line;

        var fontStr = ""+fontSize+"px";
        var lineStr = ""+line+"px";
        var heightStr = ""+height+"px";
        var widthStr = ""+width+"px";
        var width2Str = ""+width2+"px";
        var width3Str = ""+width3+"px";
        var lineWidthStr = ""+lineWidth+"px";
        var intHeightStr = ""+intHeight+"px";

        var myCss = {
            position:'absolute',
            padding:0,
            margin:0,
            width:widthStr,
            height:heightStr,
            fontSize:fontStr,
            lineHeight:lineStr
        };

        var myCss2 = {
            position:'absolute',
            padding:0,
            margin:0,
            width:width2Str,
            fontSize:fontStr,
            lineHeight:lineStr
        };

        var intStyle = {
            width:width3Str,
            height:heightStr,
            textAlign:'right',
            paddingRight:'4px',
            boxSizing:'border-box',
            float:'left',
            lineHeight:intHeightStr
        };
        var nomStyle = {
            width:width2Str,
            height:lineStr,
            textAlign:'center',
            float:'left',
            lineHeight:lineStr
        };
        var lineStyle = {
            width:lineWidthStr,
            height:'1px',
            padding:0,
            borderTop:'2px solid',
            float:'left'
        };
        var denomStyle = {
            width:width2Str,
            height:lineStr,
            textAlign:'center',
            float:'left',
            lineHeight:lineStr
        };

        if(this.integer){

            var html = Util.dom({tag:'div', css:myCss,
                html:'<div class="frac">' +
                        '<div class="int"></div>' +
                        '<div class="nom"></div>' +
                        '<div class="line"></div>' +
                        '<div class="denom"></div>' +
                    '</div>'
            });
            var integer;

            if(this.integer){
                integer = this.factor * this.integer;
            }
            else{
                if(this.factor == -1){
                    integer = "-";
                }
                else{
                    integer = "";
                }
            }

            $('.int',html).html(integer);
            $('.int',html).css(intStyle);
            $('.nom',html).html(this.nominator);
            $('.nom',html).css(nomStyle);
            $('.denom',html).html(this.denominator);
            $('.denom',html).css(denomStyle);
            $('.line',html).css(lineStyle);
        }
        else{
            var html = Util.dom({tag:'div', css:myCss2,
            html:'<div class="frac">' +
                    '<div class="nom"></div>' +
                    '<div class="line"></div>' +
                    '<div class="denom"></div>' +
                '</div>'
            });

            $('.nom',html).html(this.nominator);
            $('.nom',html).css(nomStyle);
            $('.denom',html).html(this.denominator);
            $('.denom',html).css(denomStyle);
            $('.line',html).css(lineStyle);

        }
        return html;

    },
    determineType:function(){
        if(this.factor == -1){
            this.type = RationalNumber.RATIONAL;
        }
        else{
            if(this.integer){
                this.type = RationalNumber.COMPLEX;
            }
            else{
                if(this.nominator < this.denominator){
                    this.type = RationalNumber.SIMPLE;
                }
                else{
                    this.type = RationalNumber.COMPOUND;
                }
            }
        }
    },
    determineDefinition:function(){
        if(this.factor == -1){
            if(this.integer){
                this.definition = "-"+this.integer+" tam "+this.nominator+" bölü "+this.denominator;
            }
            else{
                this.definition = "-"+this.nominator+" bölü "+this.denominator;
            }
        }
        else{
            if(this.integer){
                this.definition = ""+this.integer+" tam "+this.nominator+" bölü "+this.denominator;
            }
            else{
                this.definition = ""+this.nominator+" bölü "+this.denominator;
            }
        }
    },
    determineValue:function(){
        var value;
        if(this.integer){
            value = this.integer + (this.nominator/this.denominator);
        }
        else{
            value = this.nominator/this.denominator;
        }
        this.value = this.factor * value;
    }
});

RationalNumber.randomGenerator = function(factor,type){
    if(type == null || type == undefined){
        type = Util.randomInteger(0,4);
    }
    if(factor == null || factor == undefined){
        if(type == 0){
            factor = -1;
        }
        else{
            factor = 1;
        }
    }

    var nom, denom, integer, rationalNumber;

    switch(type){
        case 0:
            if(Util.randomDigit()){
                integer = Util.randomInteger(1,4);
                nom = Util.randomInteger(1,11);
                denom = Util.randomInteger(2,16,[nom]);
                rationalNumber = new RationalNumber({factor:factor,integer:integer,nominator:nom,denominator:denom});
            }
            else{
                nom = Util.randomInteger(1,11);
                denom = Util.randomInteger(2,16,[nom]);
                rationalNumber = new RationalNumber({factor:factor,nominator:nom,denominator:denom});
            }
            break;
        case 1:
            nom = Util.randomInteger(1,11);
            denom = Util.randomInteger(nom+1,16);
            rationalNumber = new RationalNumber({factor:factor,nominator:nom,denominator:denom});
            break;
        case 2:
            do{
                nom = Util.randomInteger(3,16);
                denom = Util.randomInteger(2,nom);
            } while(nom % denom == 0)
            rationalNumber = new RationalNumber({factor:factor,nominator:nom,denominator:denom});
            break;
        case 3:
            integer = Util.randomInteger(1,4);
            nom = Util.randomInteger(1,11);
            denom = Util.randomInteger(nom+1,16);
            rationalNumber = new RationalNumber({factor:factor,integer:integer,nominator:nom,denominator:denom});
            break;
    }

    return rationalNumber;
};

RationalNumber.RATIONAL = 0;
RationalNumber.SIMPLE = 1;
RationalNumber.COMPOUND = 2;
RationalNumber.COMPLEX = 3;





