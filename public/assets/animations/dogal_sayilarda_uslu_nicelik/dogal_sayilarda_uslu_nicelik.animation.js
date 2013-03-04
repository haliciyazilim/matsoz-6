var Animation = {
    images:[],
    init:function(container){
        Animation.container = container;

        var animStart = 1000;
        var secondEqStart = animStart+3000;
        var thirdEqStart = secondEqStart+3000;
        var fourthEqStart = thirdEqStart+3000;
        var fifthEqStart = fourthEqStart+3000;
        var slideStart = fifthEqStart+2000;
        var textStart = slideStart+7000;
        var colorChanges = textStart+2000;

        Animation.animDiv = Util.dom({parent:Animation.container, tag:'div', css:animDivStyle,
            html:'<span id="s0" style="opacity:0;font-size:24px;">a, b, n birer doğal sayı olmak üzere;</span>' +
                '<span id="s1" style="opacity:0;position:absolute;top:30px;left:152px;">' +
                '<span>2</span>' +
                '<span style="position:relative;top:-16px;font-size:20px;">1</span>' +
                '<span> = 2</span>' +
                '</span>' +
                '<span id="s2" style="opacity:0;position:absolute;top:30px;left:96px;">' +
                '<span>2</span>' +
                '<span style="position:relative;top:-16px;font-size:20px;">2</span>' +
                '<span> = 2 x 2 = 4</span>' +
                '</span>' +
                '<span id="s3" style="opacity:0;position:absolute;top:30px;left:70px;">' +
                '<span>2</span>' +
                '<span style="position:relative;top:-16px;font-size:20px;">3</span>' +
                '<span> = 2 x 2 x 2 = 8</span>' +
                '</span>' +
                '<span id="s4" style="opacity:0;position:absolute;top:30px;left:46px;">' +
                '<span>2</span>' +
                '<span style="position:relative;top:-16px;font-size:20px;">4</span>' +
                '<span> = 2 x 2 x 2 x 2 = 16</span>' +
                '</span>' +
                '<span id="s5" style="opacity:0;position:absolute;top:30px;left:20px;">' +
                '<span id="base5">2</span>' +
                '<span id="pow5" style="position:relative;top:-16px;font-size:20px;">5</span>' +
                '<span id="lastAns"> = <span id="lastEq">2 x 2 x 2 x 2 x 2 = </span></span>' +
                '</span>' +
                '<span id="lastAns2" style="opacity:0;position:absolute;top:30px;left:340px;">32</span>' +
                '<span id="sf" style="opacity:0;position:absolute;top:100px;left:150px;">' +
                '<span id="b1">a</span>' +
                '<span id="b2" style="position:relative;top:-16px;font-size:22px;">n</span>' +
                '<span> = <span id="b3">b</span></span>' +
                '</span>' +
                '<span id="f1" style="opacity:0;position:absolute;top:106px;left:60px;color:red;font-size:20px;">taban</span>' +
                '<span id="f2" style="opacity:0;position:absolute;top:48px;left:130px;color:#069;font-size:20px;width:100px;">kuvvet (üs)</span>' +
                '<span id="f3" style="opacity:0;position:absolute;top:106px;left:270px;color:green;font-size:20px;">değer</span>' +
                '<img id="im1" style="opacity:0;position:absolute;top:113px;left:117px;" src="/assets/animations/dogal_sayilarda_uslu_nicelik/uslu_ok_1.png"/>' +
                '<img id="im2" style="opacity:0;position:absolute;top:68px;left:167px;" src="/assets/animations/dogal_sayilarda_uslu_nicelik/uslu_ok_2.png"/>' +
                '<img id="im3" style="opacity:0;position:absolute;top:113px;left:238px;" src="/assets/animations/dogal_sayilarda_uslu_nicelik/uslu_ok_3.png"/>'
        });

        $('#s1').delay(animStart).animate({opacity:1},1000,'easeInOutQuad').delay(1000).animate({opacity:0},1000,'easeInOutQuad');
        $('#s2').delay(secondEqStart).animate({opacity:1},1000,'easeInOutQuad').delay(1000).animate({opacity:0},1000,'easeInOutQuad');
        $('#s3').delay(thirdEqStart).animate({opacity:1},1000,'easeInOutQuad').delay(1000).animate({opacity:0},1000,'easeInOutQuad');
        $('#s4').delay(fourthEqStart).animate({opacity:1},1000,'easeInOutQuad').delay(1000).animate({opacity:0},1000,'easeInOutQuad');
        $('#s5').delay(fifthEqStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#lastAns2').delay(fifthEqStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#lastEq').delay(slideStart).animate({opacity:0},1000,'easeInOutQuad');
        $('#s5').delay(slideStart-fifthEqStart+2000).animate({left:'+=128px'},1000,'easeInOutQuad');
        $('#lastAns2').delay(slideStart-fifthEqStart+2000).animate({left:'-=128px'},1000,'easeInOutQuad');

        $('#s5').delay(1000).animate({top:'+=70px'},1000,'easeInOutQuad');
        $('#lastAns2').delay(1000).animate({top:'+=70px'},1000,'easeInOutQuad');

        $('#s0').delay(textStart).animate({opacity:1},1000,'easeInOutQuad');

        $('#s5').delay(3000).animate({opacity:0},1000,'easeInOutQuad');
        $('#lastAns2').delay(3000).animate({opacity:0},1000,'easeInOutQuad');

        $('#sf').delay(colorChanges).animate({opacity:1},1000,'easeInOutQuad');

        $('#f1').delay(colorChanges+3000).animate({opacity:1},1000,'easeInOutQuad');
        $('#f2').delay(colorChanges+5000).animate({opacity:1},1000,'easeInOutQuad');
        $('#f3').delay(colorChanges+7000).animate({opacity:1},1000,'easeInOutQuad');

        $('#im1').delay(colorChanges+3000).animate({opacity:1},1000,'easeInOutQuad');
        $('#im2').delay(colorChanges+5000).animate({opacity:1},1000,'easeInOutQuad');
        $('#im3').delay(colorChanges+7000).animate({opacity:1},1000,'easeInOutQuad');

        $('#b1').delay(colorChanges+3000).animate({color:"#ff0000"},1000,'easeInOutQuad');
        $('#b2').delay(colorChanges+5000).animate({color:"#069"},1000,'easeInOutQuad');
        $('#b3').delay(colorChanges+7000).animate({color:"#008000"},1000,'easeInOutQuad',function(){Main.animationFinished(1000);});




    }
};
