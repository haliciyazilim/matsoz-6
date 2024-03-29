var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 1000;
        var firstDivStart = animStart+2000;
        var secondDivStart = firstDivStart+2000;
        var firstFracStart = secondDivStart+2000;
        var secondFracStart = firstFracStart+4000;
        var fourthDivStart = secondFracStart+4000;

        Animation.balls = new Group();

        for(var i = 0; i < 9; i++){
            var ballANDTextGroup = new Group();

            var ball = new Path.Circle(new Point(14+31*i, 94), 13);
            ball.style = ballStyle;

            var text = new PointText(new Point(14+31*i, 99));
            text.justification = "center";
            text.strokeWidth = "1px"
            text.strokeColor = ballTextColor;
            text.content = i+1;
            text.fillColor = ballTextColor;

            ballANDTextGroup.addChild(ball);
            ballANDTextGroup.addChild(text);

            Animation.balls.addChild(ballANDTextGroup);
        }

        Animation.balls.opacity = 0;

        var animDiv = Util.dom({parent:Animation.container, tag:'div', css:animDivStyle});

        var firstDiv = Util.dom({parent:animDiv, tag:'div', css:firstDivStyle, html:'0\'dan büyük 10\'dan küçük sayı çekme olasılığı = <b>1</b>&nbsp;<span style="color:red;">kesin olay</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'});
        var secondDiv = Util.dom({parent:animDiv, tag:'div', css:secondDivStyle, html:'10 çekme olasılığı = <b>0</b>&nbsp;<span style="color:red;">imkânsız olay</span>'});
        var thirdDiv = Util.dom({parent:animDiv, tag:'div', css:thirdDivStyle, html:'<div id="fT" style="float:left;position:relative;top:17px;opacity:0;width:190px;text-align:right;">Çift sayı çekme olasılığı = </div>' +
            '<div id="firstFrac" style="position:static;float:left;opacity:0;width:30px;height:51px;padding:0;margin:0;margin-left:4px;line-height:25px;">' +
                '<div id="nom1"></div><div id="line1"></div><div id="denom1"></div></div>' +
            '<div id="sT" style="position:relative;top:17px;float:left;opacity:0;width:190px;text-align:right;margin-left:4px;">Tek sayı çekme olasılığı = </div>' +
            '<div id="secondFrac" style="position:static;float:left;opacity:0;width:30px;height:51px;padding:0;margin:0;margin-left:4px;line-height:25px;">' +
                '<div id="nom2"></div><div id="line2"></div><div id="denom2"></div></div>'});

        $('#line1').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom1').css("text-align", "center")
            .css("height", "25px");
        $('#nom1').html(4);

        $('#denom1').css("text-align", "center")
            .css("height", "25px");
        $('#denom1').html(9);

        $('#line2').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom2').css("text-align", "center")
            .css("height", "25px");
        $('#nom2').html(5);

        $('#denom2').css("text-align", "center")
            .css("height", "25px");
        $('#denom2').html(9);

        var fourthDiv = Util.dom({parent:animDiv, tag:'div', css:fourthDivStyle, html:'<span style="color:red;">Tümleyen olay</span>' +
            '<div id="thirdFrac" style="position:absolute;opacity:0;top:-17px;left:140px;width:50px;height:51px;padding:0;margin:0;line-height:25px;">' +
                '<div id="nom3"></div><div id="line3"></div><div id="denom3"></div></div>' +
            '<div id="tfFrac" style="position:absolute;top:-17px;left:110px;width:30px;height:51px;padding:0;margin:0;line-height:25px;">' +
            '<div id="nomtf"></div><div id="linetf"></div><div id="denomtf"></div></div>' +
            '<span id="pls" style="position:absolute;left:146px">+</span>' +
            '<div id="tsFrac" style="position:absolute;top:-17px;left:160px;width:30px;height:51px;padding:0;margin:0;line-height:25px;">' +
            '<div id="nomts"></div><div id="linets"></div><div id="denomts"></div></div>' +
            '<span id="eqq" style="opacity:0;position:absolute;left:200px">=</span>' +
            '<div id="fourthFrac" style="opacity:0;position:absolute;top:-17px;left:220px;width:30px;height:51px;padding:0;margin:0;line-height:25px;">' +
                '<div id="nom4"></div><div id="line4"></div><div id="denom4"></div></div>' +
            '<span id="last" style="opacity:0;position:absolute;left:260px;width:30px;">= <b>1</b></span>'});

        $('#line3').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom3').css("text-align", "center")
            .css("height", "25px");
        $('#nom3').html("4 + 5");

        $('#denom3').css("text-align", "center")
            .css("height", "25px");
        $('#denom3').html(9);

        $('#linetf').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nomtf').css("text-align", "center")
            .css("height", "25px");
        $('#nomtf').html(4);

        $('#denomtf').css("text-align", "center")
            .css("height", "25px");
        $('#denomtf').html(9);

        $('#linets').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nomts').css("text-align", "center")
            .css("height", "25px");
        $('#nomts').html(5);

        $('#denomts').css("text-align", "center")
            .css("height", "25px");
        $('#denomts').html(9);

        $('#line4').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom4').css("text-align", "center")
            .css("height", "25px");
        $('#nom4').html(9);

        $('#denom4').css("text-align", "center")
            .css("height", "25px");
        $('#denom4').html(9);

        Animation.balls.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:animStart,
            animationType:'easeInOutQuad'
        });

        $(firstDiv).delay(firstDivStart).animate({opacity:1},1000,'easeInOutQuad');
        $(secondDiv).delay(secondDivStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#fT').delay(firstFracStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#firstFrac').delay(firstFracStart).animate({opacity:1},1000,'easeInOutQuad');
        AnimationManager.delay(function(){animateNumber(0)},firstFracStart+1000);
        $('#sT').delay(secondFracStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#secondFrac').delay(secondFracStart).animate({opacity:1},1000,'easeInOutQuad');
        AnimationManager.delay(function(){animateNumber(1)},secondFracStart+1000);
        $(fourthDiv).delay(fourthDivStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#tfFrac').delay(fourthDivStart+2000).animate({opacity:0},1000,'easeInOutQuad');
        $('#tsFrac').delay(fourthDivStart+2000).animate({opacity:0},1000,'easeInOutQuad');
        $('#pls').delay(fourthDivStart+2000).animate({opacity:0},1000,'easeInOutQuad');
        $('#thirdFrac').delay(fourthDivStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eqq').delay(fourthDivStart+3500).animate({opacity:1},1000,'easeInOutQuad');
        $('#fourthFrac').delay(fourthDivStart+3500).animate({opacity:1},1000,'easeInOutQuad');
        $('#last').delay(fourthDivStart+5000).animate({opacity:1},1000,'easeInOutQuad', function(){Main.animationFinished(1000);})
    }
}