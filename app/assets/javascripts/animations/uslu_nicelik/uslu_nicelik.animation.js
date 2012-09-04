var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 1000;

        var firstPowChange = animStart + 2000;
        var firstSlide = firstPowChange + 500;
        var firstFadeIn = firstSlide + 1000;

        var secondPowChange = firstFadeIn + 2500;
        var secondSlide = secondPowChange + 500;
        var secondFadeIn = secondSlide + 1000;

        var thirdPowChange = secondFadeIn + 2500;
        var thirdSlide = thirdPowChange + 500;
        var thirdFadeIn = thirdSlide + 1000;

        var fourthPowChange = thirdFadeIn + 2500;
        var fourthSlide = fourthPowChange + 500;
        var fourthFadeIn = fourthSlide + 1000;

        var firstEq = fourthFadeIn + 3000;
        var gettingCloser = firstEq + 2000;

        var ttextFadeIn = gettingCloser + 2000;

        var transformation = ttextFadeIn + 2000;

        var colorChanges = transformation + 2000;

        Animation.animDiv = Util.dom({parent:Animation.container, tag:'div', css:animDivStyle,
        html:'<div id="ttext" style="position:absolute;left:40px;font-size:20px;opacity:0">a, b, n birer doğal sayı olmak üzere;</div>' +
            '<div id="wholeN" style="opacity:0;position:absolute;top:0px;left:0px;"><div id="bbase" style="position:absolute;top:90px;left:0px;">2</div><div id="pow" style="position:absolute;top:80px;left:20px;font-size:20px;">1</div>' +
            '<div id="eq" style="position:absolute;top:90px;left:40px;">=</div></div>' +
            '<div id="ans" style="position:absolute;top:90px;left:70px;"> ' +
            '<span id="s4" style="opacity:0;position:absolute;width:44px;"> 2 x</span> ' +
            '<span id="s3" style="opacity:0;position:absolute;width:44px;"> 2 x</span> ' +
            '<span id="s2" style="opacity:0;position:absolute;width:44px;"> 2 x</span> ' +
            '<span id="s1" style="opacity:0;position:absolute;width:96px;"> 2 x 2 = </span>' +
            '<span id="sl" style="opacity:0;position:absolute;width:20px;">2</span></div>'
        });

        $('#wholeN').delay(animStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#sl').delay(animStart).animate({opacity:1},1000,'easeInOutQuad');

        setTimeout('$("#pow").html(2)',firstPowChange);
        $('#sl').delay(firstSlide-animStart-1000).animate({left:"+=104px"},1000,'easeInOutQuad');
        $('#s1').delay(firstFadeIn).animate({opacity:1},1000,'easeInOutQuad',
            function(){
                $('#sl').html(4);
            });

        setTimeout('$("#pow").html(3)',secondPowChange);
        $('#sl').delay(secondSlide-firstSlide-1000).animate({left:"+=50px"},1000,'easeInOutQuad');
        $('#s1').delay(secondSlide-firstFadeIn-1000).animate({left:"+50px"},1000,'easeInOutQuad');
        $('#s2').delay(secondFadeIn).animate({opacity:1},1000,'easeInOutQuad',
            function(){
                $('#sl').html(8);
            });

        setTimeout('$("#pow").html(4)',thirdPowChange);
        $('#sl').delay(thirdSlide-secondSlide-1000).animate({left:"+=50px"},1000,'easeInOutQuad');
        $('#s1').delay(thirdSlide-secondSlide-1000).animate({left:"+=50px"},1000,'easeInOutQuad');
        $('#s2').delay(thirdSlide-secondFadeIn-1000).animate({left:"+=50px"},1000,'easeInOutQuad');
        $('#s3').delay(thirdFadeIn).animate({opacity:1},1000,'easeInOutQuad',
            function(){
                $('#sl').html(16);
            });

        setTimeout('$("#pow").html(5)',fourthPowChange);
        $('#sl').delay(fourthSlide-thirdSlide-1000).animate({left:"+=50px"},1000,'easeInOutQuad');
        $('#s1').delay(fourthSlide-thirdSlide-1000).animate({left:"+=50px"},1000,'easeInOutQuad');
        $('#s2').delay(fourthSlide-thirdSlide-1000).animate({left:"+=50px"},1000,'easeInOutQuad');
        $('#s3').delay(fourthSlide-thirdFadeIn-1000).animate({left:"+=50px"},1000,'easeInOutQuad');
        $('#s4').delay(fourthFadeIn).animate({opacity:1},1000,'easeInOutQuad',
            function(){
                $('#sl').html(32);
            });

        for(var i = 1; i < 4; i++){
            $('#s'+i).delay(firstEq-fourthSlide-1000).animate({opacity:0},1000,'easeInOutQuad');
        }
        $('#s4').delay(firstEq-fourthFadeIn-1000).animate({opacity:0},1000,'easeInOutQuad');

        $('#wholeN').delay(gettingCloser-animStart-1000).animate({left:"+=150px"},1000,'easeInOutQuad');
        $('#sl').delay(gettingCloser-fourthSlide-1000).animate({left:"-=104px"},1000,'easeInOutQuad');

        $('#ttext').delay(ttextFadeIn).animate({opacity:1},1000,'easeInOutQuad');

        Animation.finalDiv = Util.dom({parent:Animation.animDiv, tag:'div',css:finalDivStyle,
            html:'<div id="fBase" style="position:absolute;top:10px;left:10px">a</div>' +
                '<div id="fPow" style="position:absolute;top:0px;left:30px;font-size:20px">n</div>' +
                '<span id="fEq" style="position:absolute;top:12px;left:50px;">=</span>' +
                '<div id="fAns" style="position:absolute;top:10px;left:84px;">b</div>'
        });

        $('#wholeN').delay(transformation-gettingCloser-1000).animate({opacity:0},1000,'easeInOutQuad');
        $('#sl').delay(transformation-gettingCloser-1000).animate({opacity:0},1000,'easeInOutQuad');
        $(Animation.finalDiv).css("opacity",0).delay(transformation).animate({opacity:1},1000,'easeInOutQuad');

        $('#fBase').delay(colorChanges).animate({color:'#ff0000'},1000,'easeInOutQuad');
        $('#fPow').delay(colorChanges).animate({color:'#069'},1000,'easeInOutQuad');
        $('#fAns').delay(colorChanges).animate({color:'#008000'},1000,'easeInOutQuad');

        $(Animation.container).append('<span id="tBase" style="color:red;">taban</span>' +
            '<span id="tPow" style="color:#069;">kuvvet (üs)</span>' +
            '<span id="tAns" style="color:green;">değer</span>')

        $('#tBase').css({
            position:'absolute',
            top:'136px',
            left:'280px',
            opacity:0
        });
        $('#tBase').delay(colorChanges).animate({opacity:1},1000,'easeInOutQuad');
        $('#tPow').css({
            position:'absolute',
            top:'80px',
            left:'340px',
            opacity:0
        });
        $('#tPow').delay(colorChanges).animate({opacity:1},1000,'easeInOutQuad');
        $('#tAns').css({
            position:'absolute',
            top:'136px',
            left:'470px',
            opacity:0
        });
        $('#tAns').delay(colorChanges).animate({opacity:1},1000,'easeInOutQuad',function(){Main.animationFinished(1000);});

    }
};