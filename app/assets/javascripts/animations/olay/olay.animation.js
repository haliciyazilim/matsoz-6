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

            var ball = new Path.Circle(new Point(20+32*i, 94), 13);
            ball.style = ballStyle;

            var text = new PointText(new Point(20+32*i, 99));
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

        var firstDiv = Util.dom({parent:animDiv, tag:'div', css:firstDivStyle, html:'0\'dan büyük 10\'dan küçük sayı çekme olasılığı = <b>1</b> &nbsp;&nbsp;&nbsp;<span style="color:red;">kesin olay</span>'});
        var secondDiv = Util.dom({parent:animDiv, tag:'div', css:secondDivStyle, html:'10 çekme olasılığı = <b>0</b> &nbsp;&nbsp;&nbsp;<span style="color:red;">imkânsız olay</span>'})
        var thirdDiv = Util.dom({parent:animDiv, tag:'div', css:thirdDivStyle, html:'<div id="ff"><div id="fT">Çift sayı çekme olasılığı = </div>' +
            '<div id="firstFrac" style="position:absolute;top:-17px;left:180px;width:30px;height:51px;padding:0;margin:0;line-height:25px;">' +
                '<div id="nom1"></div><div id="line1"></div><div id="denom1"></div></div></div>' +
            '<div id="ss"><div id="sT" style="position:absolute;top:0px;left:230px;width:180px">Tek sayı çekme olasılığı = </div>' +
            '<div id="secondFrac" style="position:absolute;top:-17px;left:410px;width:30px;height:51px;padding:0;margin:0;line-height:25px;">' +
                '<div id="nom2"></div><div id="line2"></div><div id="denom2"></div></div></div>'});

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
            '<div id="thirdFrac" style="position:absolute;top:-17px;left:120px;width:50px;height:51px;padding:0;margin:0;line-height:25px;">' +
                '<div id="nom3"></div><div id="line3"></div><div id="denom3"></div></div>' +
            '<span style="position:absolute;left:180px">=</span>' +
            '<div id="fourthFrac" style="position:absolute;top:-17px;left:200px;width:30px;height:51px;padding:0;margin:0;line-height:25px;">' +
                '<div id="nom4"></div><div id="line4"></div><div id="denom4"></div></div>' +
            '<span style="position:absolute;left:240px;width:30px;">= <b>1</b></span>'});

        $('#line3').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nom3').css("text-align", "center")
            .css("height", "25px");
        $('#nom3').html("4 + 5");

        $('#denom3').css("text-align", "center")
            .css("height", "25px");
        $('#denom3').html(9);

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
        $('#ff').css("opacity",0).delay(firstFracStart).animate({opacity:1},1000,'easeInOutQuad');
        AnimationManager.delay(function(){animateNumber(0)},firstFracStart+1000);
        $('#ss').css("opacity",0).delay(secondFracStart).animate({opacity:1},1000,'easeInOutQuad');
        AnimationManager.delay(function(){animateNumber(1)},secondFracStart+1000);
        $(fourthDiv).delay(fourthDivStart).animate({opacity:1},1000,'easeInOutQuad',function(){Main.animationFinished(1000)});
    }
}