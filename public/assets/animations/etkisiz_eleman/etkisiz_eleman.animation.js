var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;


        var animStart = 1000;
        var secondStart = animStart+5500;
        var thirdStart = secondStart+5500;
        var fourthStart = thirdStart+5500;
        var fifthStart = fourthStart+3000;

        Animation.animDiv = Util.dom({parent:Animation.container, tag:'div', css:animDivStyle,
            html:'<span id="eq1" style="opacity:0;position:absolute;top:0px;left:0px;">5 + 0 = 5</span>' +
                '<span id="eq2" style="opacity:0;position:absolute;top:40px;left:0px;">0 + 5 = 5</span>' +
                '<span id="eq3" style="opacity:0;position:absolute;top:0px;left:0px;">2 + 0 = 2</span>' +
                '<span id="eq4" style="opacity:0;position:absolute;top:40px;left:0px;">0 + 2 = 2</span>' +
                '<span id="eq5" style="opacity:0;position:absolute;top:0px;left:0px;">38 + 0 = 38</span>' +
                '<span id="eq6" style="opacity:0;position:absolute;top:40px;left:0px;">0 + 38 = 38</span>' +
                '<span id="eq7" style="opacity:0;position:absolute;top:0px;left:0px;">a + <span style="color:red;">0</span> = a</span>' +
                '<span id="eq8" style="opacity:0;position:absolute;top:40px;left:0px;"><span style="color:red;">0</span> + a = a</span>' +
                '<span id="lastText" style="font-size:24px;opacity:0;position:absolute;width:220px;top:100px;left:-40px;text-align:center;">toplama işlemi için etkisiz eleman <span style="color:red;">0</span></span>'
        });

        $('#eq1').delay(animStart).animate({opacity:1},1000,'easeInOutQuad').delay(3500).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq2').delay(animStart+1500).animate({opacity:1},1000,'easeInOutQuad').delay(2000).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq3').delay(secondStart).animate({opacity:1},1000,'easeInOutQuad').delay(3500).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq4').delay(secondStart+1500).animate({opacity:1},1000,'easeInOutQuad').delay(2000).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq5').delay(thirdStart).animate({opacity:1},1000,'easeInOutQuad').delay(3500).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq6').delay(thirdStart+1500).animate({opacity:1},1000,'easeInOutQuad').delay(2000).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq7').delay(fourthStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq8').delay(fourthStart+1500).animate({opacity:1},1000,'easeInOutQuad');
        $('#lastText').delay(fifthStart).animate({opacity:1},1000,'easeInOutQuad',function(){Main.animationFinished(1000)});

        Animation.animDiv2 = Util.dom({parent:Animation.container, tag:'div', css:animDivStyle2,
            html:'<span id="eq12" style="opacity:0;position:absolute;top:0px;left:0px;">7 x 1 = 7</span>' +
                '<span id="eq22" style="opacity:0;position:absolute;top:40px;left:0px;">1 x 7 = 7</span>' +
                '<span id="eq32" style="opacity:0;position:absolute;top:0px;left:0px;">3 x 1 = 3</span>' +
                '<span id="eq42" style="opacity:0;position:absolute;top:40px;left:0px;">1 x 3 = 3</span>' +
                '<span id="eq52" style="opacity:0;position:absolute;top:0px;left:0px;">46 x 1 = 46</span>' +
                '<span id="eq62" style="opacity:0;position:absolute;top:40px;left:0px;">1 x 46 = 46</span>' +
                '<span id="eq72" style="opacity:0;position:absolute;top:0px;left:0px;">a x <span style="color:red;">1</span> = a</span>' +
                '<span id="eq82" style="opacity:0;position:absolute;top:40px;left:0px;"><span style="color:red;">1</span> x a = a</span>' +
                '<span id="lastText2" style="font-size:24px;opacity:0;position:absolute;width:220px;top:100px;left:-40px;text-align:center;">çarpma işlemi için etkisiz eleman <span style="color:red;">1</span></span>'
        });

        $('#eq12').delay(animStart).animate({opacity:1},1000,'easeInOutQuad').delay(3500).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq22').delay(animStart+1500).animate({opacity:1},1000,'easeInOutQuad').delay(2000).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq32').delay(secondStart).animate({opacity:1},1000,'easeInOutQuad').delay(3500).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq42').delay(secondStart+1500).animate({opacity:1},1000,'easeInOutQuad').delay(2000).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq52').delay(thirdStart).animate({opacity:1},1000,'easeInOutQuad').delay(3500).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq62').delay(thirdStart+1500).animate({opacity:1},1000,'easeInOutQuad').delay(2000).animate({opacity:0},1000,'easeInOutQuad');
        $('#eq72').delay(fourthStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#eq82').delay(fourthStart+1500).animate({opacity:1},1000,'easeInOutQuad');
        $('#lastText2').delay(fifthStart).animate({opacity:1},1000,'easeInOutQuad',function(){Main.animationFinished(1000)});
    }
}
;
