var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var firstDivStart = 1000;
        var secondDivStart = firstDivStart+10000;
        var thirdDivStart = secondDivStart+10000;

        Animation.firstDiv = Util.dom({parent:Animation.container, tag:'div', css:firstDivStyle,
        html:'<span id="eq1" style="opacity:0;position:absolute;font-size:20px;top:24px;left:46px;"> = </span>' +
            '<div id="frac2" style="opacity:0;position:absolute;top:8px;left:66px;padding:0;margin:0;width:60px;height:51px;font-size:20px;line-height:24px;">' +
                '<div id="nom2" style="text-align:center;height:25px;">3 x 5</div>' +
                '<div id="line2" style="height:1px;padding:0;border-top:2px solid;"></div>' +
                '<div id="denom2" style="text-align:center;height:25px;">20 x 5</div>' +
            '</div>' +
            '<span id="eq2" style="opacity:0;position:absolute;font-size:20px;top:24px;left:134px;"> = </span>' +
            '<span id="eq3" style="opacity:0;position:absolute;font-size:20px;top:24px;left:196px;"> = </span>' +
            '<span id="a1" style="opacity:0;position:absolute;font-size:20px;top:24px;left:216px;"> 0,15</span>' +
            '<span id="eq4" style="opacity:0;position:absolute;font-size:20px;top:24px;left:262px;"> = </span>' +
            '<span id="b1" style="opacity:0;position:absolute;font-size:20px;top:24px;left:280px;color:red;"> %15</span>'
        });

        Animation.secondDiv = Util.dom({parent:Animation.container, tag:'div', css:secondDivStyle,
        html:'<span id="eq5" style="opacity:0;position:absolute;font-size:20px;top:24px;left:46px;"> = </span>' +
            '<div id="frac3" style="opacity:0;position:absolute;top:8px;left:66px;padding:0;margin:0;width:60px;height:51px;font-size:20px;line-height:24px;">' +
                '<div id="nom3" style="text-align:center;height:25px;">25 x 5</div>' +
                '<div id="line3" style="height:1px;padding:0;border-top:2px solid;"></div>' +
                '<div id="denom3" style="text-align:center;height:25px;">20 x 5</div>' +
            '</div>' +
            '<span id="eq6" style="opacity:0;position:absolute;font-size:20px;top:24px;left:134px;"> = </span>' +
            '<span id="eq7" style="opacity:0;position:absolute;font-size:20px;top:24px;left:198px;"> = </span>' +
            '<span id="a2" style="opacity:0;position:absolute;font-size:20px;top:24px;left:218px;"> 1,25</span>' +
            '<span id="eq8" style="opacity:0;position:absolute;font-size:20px;top:24px;left:264px;"> = </span>' +
            '<span id="b2" style="opacity:0;position:absolute;font-size:20px;top:24px;left:282px;color:red;"> %125</span>'
        });

        Animation.thirdDiv = Util.dom({parent:Animation.container, tag:'div', css:thirdDivStyle,
        html:'<span id="eq9" style="opacity:0;position:absolute;font-size:20px;top:24px;left:52px;"> = </span>' +
            '<div id="frac4" style="opacity:0;position:absolute;top:8px;left:70px;padding:0;margin:0;width:66px;height:51px;font-size:20px;line-height:24px;">' +
                '<div id="nom4" style="text-align:center;height:25px;">2 : 5</div>' +
                '<div id="line4" style="height:1px;padding:0;border-top:2px solid;"></div>' +
                '<div id="denom4" style="text-align:center;height:25px;">500 : 5</div>' +
            '</div>' +
            '<span id="eq10" style="opacity:0;position:absolute;font-size:20px;top:24px;left:142px;"> = </span>' +
            '<span id="eq11" style="opacity:0;position:absolute;font-size:20px;top:24px;left:202px;"> = </span>' +
            '<span id="a3" style="opacity:0;position:absolute;font-size:20px;top:24px;left:222px;"> 0,004</span>' +
            '<span id="eq12" style="opacity:0;position:absolute;font-size:20px;top:24px;left:276px;"> = </span>' +
            '<span id="b3" style="opacity:0;position:absolute;font-size:20px;top:24px;left:294px;color:red;"> %0,4</span>'
        });

        var firstNum = new RationalNumber({factor:1,nominator:3,denominator:20});
        var firstNode = firstNum.toHTML(20);
        $(Animation.firstDiv).append(firstNode);
        $(firstNode).css({
            position:'absolute',
            top:'9px',
            left:'-26px',
            opacity:0
        });

        var secondNum = new RationalNumber({factor:1,nominator:15,denominator:100});
        var secondNode = secondNum.toHTML(20);
        $(Animation.firstDiv).append(secondNode);
        $(secondNode).css({
            position:'absolute',
            width:'64px',
            top:'9px',
            left:'126px',
            opacity:0
        });
        $('.nom',secondNode).css({
            width:'34px'
        });
        $('.denom',secondNode).css({
            width:'34px'
        });
        $('.line',secondNode).css({
            width:'34px'
        });

        var thirdNum = new RationalNumber({factor:1,nominator:25,denominator:20});
        var thirdNode = thirdNum.toHTML(20);
        $(Animation.secondDiv).append(thirdNode);
        $(thirdNode).css({
            position:'absolute',
            top:'9px',
            left:'-26px',
            opacity:0
        });

        var fourthNum = new RationalNumber({factor:1,nominator:125,denominator:100});
        var fourthNode = fourthNum.toHTML(20);
        $(Animation.secondDiv).append(fourthNode);
        $(fourthNode).css({
            position:'absolute',
            width:'66px',
            top:'9px',
            left:'126px',
            opacity:0
        });
        $('.nom',fourthNode).css({
            width:'36px'
        });
        $('.denom',fourthNode).css({
            width:'36px'
        });
        $('.line',fourthNode).css({
            width:'36px'
        });

        var fifthNum = new RationalNumber({factor:1,nominator:2,denominator:500});
        var fifthNode = fifthNum.toHTML(20);
        $(Animation.thirdDiv).append(fifthNode);
        $(fifthNode).css({
            position:'absolute',
            width:'66px',
            top:'9px',
            left:'-20px',
            opacity:0
        });
        $('.nom',fifthNode).css({
            width:'36px'
        });
        $('.denom',fifthNode).css({
            width:'36px'
        });
        $('.line',fifthNode).css({
            width:'36px'
        });

        var sixthNum = new RationalNumber({factor:1,nominator:"0,4",denominator:100});
        var sixthNode = sixthNum.toHTML(20);
        $(Animation.thirdDiv).append(sixthNode);
        $(sixthNode).css({
            position:'absolute',
            width:'66px',
            top:'9px',
            left:'130px',
            opacity:0
        });
        $('.nom',sixthNode).css({
            width:'36px'
        });
        $('.denom',sixthNode).css({
            width:'36px'
        });
        $('.line',sixthNode).css({
            width:'36px'
        });

        $(firstNode).delay(firstDivStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq1').delay(firstDivStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#frac2').delay(firstDivStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq2').delay(firstDivStart+4000).animate({opacity:1},1000,'easeInOutQuad');
        $(secondNode).delay(firstDivStart+4000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq3').delay(firstDivStart+6000).animate({opacity:1},1000,'easeInOutQuad');
        $('#a1').delay(firstDivStart+6000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq4').delay(firstDivStart+8000).animate({opacity:1},1000,'easeInOutQuad');
        $('#b1').delay(firstDivStart+8000).animate({opacity:1},1000,'easeInOutQuad');

        $(thirdNode).delay(secondDivStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq5').delay(secondDivStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#frac3').delay(secondDivStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq6').delay(secondDivStart+4000).animate({opacity:1},1000,'easeInOutQuad');
        $(fourthNode).delay(secondDivStart+4000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq7').delay(secondDivStart+6000).animate({opacity:1},1000,'easeInOutQuad');
        $('#a2').delay(secondDivStart+6000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq8').delay(secondDivStart+8000).animate({opacity:1},1000,'easeInOutQuad');
        $('#b2').delay(secondDivStart+8000).animate({opacity:1},1000,'easeInOutQuad');

        $(fifthNode).delay(thirdDivStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq9').delay(thirdDivStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#frac4').delay(thirdDivStart+2000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq10').delay(thirdDivStart+4000).animate({opacity:1},1000,'easeInOutQuad');
        $(sixthNode).delay(thirdDivStart+4000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq11').delay(thirdDivStart+6000).animate({opacity:1},1000,'easeInOutQuad');
        $('#a3').delay(thirdDivStart+6000).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq12').delay(thirdDivStart+8000).animate({opacity:1},1000,'easeInOutQuad');
        $('#b3').delay(thirdDivStart+8000).animate({opacity:1},1000,'easeInOutQuad',function(){Main.animationFinished(1000);});

    }
};