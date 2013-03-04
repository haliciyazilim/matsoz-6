var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 1000;
        var divisionStart = animStart+1000;
        var firstLineStart = divisionStart+8000;
        var indicatorStart = firstLineStart+2000;
        var secondLineStart = firstLineStart+13500;
        var lastAnim = secondLineStart+2000;

        Animation.firstDiv = Util.dom({parent:Animation.container, tag:'div', css:firstDivStyle,
            html:'<div id="line" style="opacity:0;position:absolute;top:0px;left:40px;border-left:1px solid;width:1px;height:150px;"></div>' +
                '<span id="num1" style="opacity:0;font-weight:bold;position:absolute;left:8px;top:0px;">24</span><span id="num2" style="opacity:0;position:absolute;top:0px;left:48px">2</span>' +
                '<span id="num3" style="opacity:0;position:absolute;top:32px;left:8px;">12</span><span id="num4" style="opacity:0;position:absolute;top:32px;left:48px">2</span>' +
                '<span id="num5" style="opacity:0;position:absolute;top:64px;left:18px;">6</span><span id="num6" style="opacity:0;position:absolute;top:64px;left:48px">2</span>' +
                '<span id="num7" style="opacity:0;position:absolute;top:96px;left:18px;">3</span><span id="num8" style="opacity:0;position:absolute;top:96px;left:48px">3</span>' +
                '<span id="num9" style="opacity:0;position:absolute;top:128px;left:18px;">1</span>'
        });

        Animation.secondDiv = Util.dom({parent:Animation.container, tag:'div', css:secondDivStyle,
            html:'<div id="firstLine" style="opacity:0;"><b>24</b> = 2 x 2 x 2 x 3</div>' +
                '<image id="indicator" src="/assets/animations/asal_carpan/asal_sayi_ikonu.png" style="opacity:0;position:absolute;top:-86px;left:46px;"/>' +
                '<div id="secondLine" style="opacity:0;"><span style="position:absolute;top:46px;left:34px;"> = </span>' +
                    '<div id="x1" style="position:absolute;top:46px;left:54px;">2</div><div id="y1" style="position:absolute;top:36px;left:66px;font-size:18px;">3</div>' +
                    '<span style="position:absolute;top:46px;left:82px;"> x </span><div style="position:absolute;top:46px;left:100px;" id="x1">3</div>' +
                '</div>'
        });

        $('#num1').delay(animStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#line').delay(animStart+1000).animate({opacity:1},1000,'easeInOutQuad')

        for(var i = 2; i < 10; i+=2){
            var j = i + 1;
            $('#num'+i).delay(divisionStart+750*i).animate({opacity:1},1000,'easeInOutQuad');
            $('#num'+j).delay(divisionStart+750*i).animate({opacity:1},1000,'easeInOutQuad');
        }

        $('#firstLine').delay(firstLineStart).animate({opacity:1},1000,'easeInOutQuad');

        $('#indicator').delay(indicatorStart).animate({opacity:1},500,'easeInOutQuad')
            .delay(1000).animate({opacity:0},1000,'easeInOutQuad',function(){$('#indicator').css("left","85px");})
            .delay(500).animate({opacity:1},500,'easeInOutQuad')
            .delay(1000).animate({opacity:0},1000,'easeInOutQuad',function(){$('#indicator').css("left","124px");})
            .delay(500).animate({opacity:1},500,'easeInOutQuad')
            .delay(1000).animate({opacity:0},1000,'easeInOutQuad',function(){$('#indicator').css("left","162px");})
            .delay(500).animate({opacity:1},500,'easeInOutQuad')
            .delay(1000).animate({opacity:0},1000,'easeInOutQuad');

        $('#secondLine').delay(secondLineStart).animate({opacity:1},1000,'easeInOutQuad');
        $(Animation.secondDiv).delay(lastAnim).animate({top:"-=40px"},1000,'easeInOutQuad',function(){Main.animationFinished();})
    }
}
;
