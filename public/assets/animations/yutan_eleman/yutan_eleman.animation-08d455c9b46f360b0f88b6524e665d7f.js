var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 1000;
        var secondStart = animStart+4500;
        var thirdStart = secondStart+4500;
        var fourthStart = thirdStart+4500;
        var fifthStart = fourthStart+3000;

        Animation.animDiv = Util.dom({parent:Animation.container, tag:'div', css:animDivStyle,
            html:'<span id="eq1" style="opacity:0;position:absolute;top:0px;left:0px;">7 x 0 = 0</span>' +
                '<span id="eq2" style="opacity:0;position:absolute;top:40px;left:0px;">0 x 7 = 0</span>' +
                '<span id="eq3" style="opacity:0;position:absolute;top:0px;left:0px;">3 x 0 = 0</span>' +
                '<span id="eq4" style="opacity:0;position:absolute;top:40px;left:0px;">0 x 3 = 0</span>' +
                '<span id="eq5" style="opacity:0;position:absolute;top:0px;left:0px;">46 x 0 = 0</span>' +
                '<span id="eq6" style="opacity:0;position:absolute;top:40px;left:0px;">0 x 46 = 0</span>' +
                '<span id="eq7" style="opacity:0;position:absolute;top:0px;left:0px;">a x <span style="color:red;">0</span> = <span style="color:red;">0</span></span>' +
                '<span id="eq8" style="opacity:0;position:absolute;top:40px;left:0px;"><span style="color:red;">0</span> x a = <span style="color:red;">0</span></span>' +
                '<span id="lastText" style="opacity:0;position:absolute;width:240px;top:100px;left:-46px;">yutan eleman <span style="color:red;">0</span></span>'
        });

        $('#eq1').delay(animStart).animate({opacity:1},1000,'easeInOutQuad').delay(2500).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq2').delay(animStart+1000).animate({opacity:1},1000,'easeInOutQuad').delay(1500).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq3').delay(secondStart).animate({opacity:1},1000,'easeInOutQuad').delay(2500).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq4').delay(secondStart+1000).animate({opacity:1},1000,'easeInOutQuad').delay(1500).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq5').delay(thirdStart).animate({opacity:1},1000,'easeInOutQuad').delay(2500).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq6').delay(thirdStart+1000).animate({opacity:1},1000,'easeInOutQuad').delay(1500).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq7').delay(fourthStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq8').delay(fourthStart+1000).animate({opacity:1},1000,'easeInOutQuad');
        $('#lastText').delay(fifthStart).animate({opacity:1},1000,'easeInOutQuad',function(){Main.animationFinished(1000)});
    }
};
