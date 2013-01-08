var Animation = {
	init:function(container){
			Animation.container = container;

        var animStart = 1000;
        var basicFadeInDuration = 1000;

        var rect1 = new Path.SegmentedRectangle(206.5, 50.5, 144, 12, 12, 1, 12, animationRectFillColor);
        rect1.strokeColor = animationRectStrokeColor;
        rect1.opacity = 0;
        var rect2 = new Path.SegmentedRectangle(434.5, 50.5, 72, 24, 6, 2, 12, animationRectFillColor);
        rect2.strokeColor = animationRectStrokeColor;
        rect2.opacity = 0;
        var rect3 = new Path.SegmentedRectangle(606.5, 50.5, 48, 36, 4, 3, 12, animationRectFillColor);
        rect3.strokeColor = animationRectStrokeColor;
        rect3.opacity = 0;

        var rect4 = new Path.SegmentedRectangle(200.5, 140.5, 156, 12, 13, 1, 13, animationRectFillColor2);
        rect4.strokeColor = animationRectStrokeColor2;
        rect4.opacity = 0;


        $(Animation.container).append('<div id="firstDiv"><div id="num1">12</div><div id="text1">asal değil</div></div>');
        $(Animation.container).append('<div id="secondDiv">12 = 1 x 12</div>');
        $(Animation.container).append('<div id="thirdDiv">12 = 2 x 6</div>');
        $(Animation.container).append('<div id="fourthDiv">12 = 3 x 4</div>');

        $('#firstDiv').css({
            position:'absolute',
            top:'30px',
            left:'80px',
            fontSize:'20px',
            width:'100px',
            height:'50px'
        });
        $('#num1').css({
            position:'absolute',
            top:'0px',
            left:0,
            right:0,
            textAlign: 'center',
            opacity:0
        });
        $('#num1').delay(animStart).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad');
        $('#text1').css({
            position:'absolute',
            top:'30px',
            left:0,
            right:0,
            textAlign: 'center',
            opacity:0
        });
        $('#text1').delay(animStart+4000).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad');

        $('#secondDiv').css({
            position:'absolute',
            top:'30px',
            left:'240px',
            fontSize:'20px',
            width:'120px',
            height:'50px',
            opacity:0
        });
        $('#secondDiv').delay(animStart+1000).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad')

        $('#thirdDiv').css({
            position:'absolute',
            top:'30px',
            left:'440px',
            fontSize:'20px',
            width:'100px',
            height:'50px',
            opacity:0
        });
        $('#thirdDiv').delay(animStart+2000).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad')

        $('#fourthDiv').css({
            position:'absolute',
            top:'30px',
            left:'600px',
            fontSize:'20px',
            width:'100px',
            height:'50px',
            opacity:0
        });
        $('#fourthDiv').delay(animStart+3000).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad');

        $(Animation.container).append('<div id="fifthDiv"><div id="num2">13</div><div id="text2">asal sayı</div></div>');
        $(Animation.container).append('<div id="sixthDiv">13 = 1 x 13</div>');

        $('#fifthDiv').css({
            position:'absolute',
            top:'120px',
            left:'80px',
            fontSize:'20px',
            width:'100px',
            height:'50px',
        });
        $('#num2').css({
            position:'absolute',
            top:'0px',
            left:0,
            right:0,
            textAlign: 'center',
            opacity:0
        });
        $('#num2').delay(animStart+5000).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad');
        $('#text2').css({
            position:'absolute',
            top:'30px',
            left:0,
            right:0,
            textAlign: 'center',
            color: 'red',
            opacity:0
        });
        $('#text2').delay(animStart+7000).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad');

        $('#sixthDiv').css({
            position:'absolute',
            top:'120px',
            left:'240px',
            fontSize:'20px',
            width:'120px',
            height:'50px',
            opacity:0
        });
        $('#sixthDiv').delay(animStart+6000).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad', function(){Main.animationFinished(1500);});

        rect1.animate({
            style:{
                opacity:1,
            },
            duration: basicFadeInDuration,
            delay: animStart+1000,
            animationType: 'easeInOutQuad'
        });

        rect2.animate({
            style:{
                opacity:1,

            },
            duration: basicFadeInDuration,
            delay: animStart+2000,
            animationType: 'easeInOutQuad'
        });

        rect3.animate({
            style:{
                opacity:1,
            },
            duration: basicFadeInDuration,
            delay: animStart+3000,
            animationType: 'easeInOutQuad'
        });

        rect4.animate({
            style:{
                opacity:1,
            },
            duration: basicFadeInDuration,
            delay: animStart+6000,
            animationType: 'easeInOutQuad'
        });
		
    }
}
;
