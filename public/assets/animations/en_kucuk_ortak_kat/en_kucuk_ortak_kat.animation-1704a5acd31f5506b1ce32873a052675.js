var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 1000;

        Animation.animDiv = document.createElement('div');
        Animation.animDiv.id = "animDiv";
        $(Animation.container).append(Animation.animDiv);

        $(Animation.animDiv).css({
            position:'absolute',
            top:'30px',
            left:'40px',
            width:'700px',
            height:'150px',
            fontSize:'20px'
        });

        $(Animation.animDiv).html('<div id="firstDiv"></div><div id="secondDiv"></div><div id="thirdDiv"></div>');
        $('#firstDiv').css({
            position:'absolute',
            top:'10px',
            left:'20px',
            width:'600px',
            height:'40px',
        });

        $('#firstDiv').html('<div id="title1">3\'ün katları</div><div id="eq1"></div>');
        $('#title1').css({
            position:'absolute',
            top:'10px',
            left:'10px',
            opacity:0
        });
        $('#title1').delay(animStart).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#eq1').css({
            position:'absolute',
            top:'10px',
            left:'130px',
            width:'460px',
            height:'24px',
        });
        $('#eq1').html('<span id="s1">3, </span><span id="s2">6, </span><span id="s3">9, </span><span id="s4">12, </span><span id="s5">15, </span>' +
            '<span id="s6">18, </span><span id="s7">21, </span><span id="s8">24, </span><span id="s9">27, </span><span id="s10">30, </span>' +
            '<span id="s11">33, </span><span id="s12">36, </span><span id="s13">39, ...</span>');

        $('#secondDiv').css({
            position:'absolute',
            top:'100px',
            left:'20px',
            width:'600px',
            height:'40px',
        });
        $('#secondDiv').html('<div id="title2">4\'ün katları</div><div id="eq2"></div>');
        $('#title2').css({
            position:'absolute',
            top:'10px',
            left:'10px',
            opacity:0
        });
        $('#title2').delay(animStart+12000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#eq2').css({
            position:'absolute',
            top:'10px',
            left:'130px',
            width:'460px',
            height:'24px',
        });
        $('#eq2').html('<span id="d1">4, </span><span id="d2">8, </span><span id="d3">12, </span><span id="d4">16, </span><span id="d5">20, </span>' +
            '<span id="d6">24, </span><span id="d7">28, </span><span id="d8">32, </span><span id="d9">36, </span><span id="d10">40, </span>' +
            '<span id="d11">44, </span><span id="d12">48, </span><span id="d13">52, ...</span>');

        $('#thirdDiv').css({
            position:'absolute',
            top:'65px',
            left:'510px',
            width:'170px',
            height:'20px',
            fontWeight:'bold',
            opacity:0
        });
        $('#thirdDiv').html('EKOK(3, 4) = 12');
        $('#thirdDiv').delay(28000).animate({opacity:1}, 1000, 'easeInOutQuad', function(){Main.animationFinished(1500)});
        for(var i = 1; i < 14; i++){
            $('#s'+i).css("opacity", 0).delay(animStart+1000+i*750).animate({opacity:1}, 750, 'easeInOutQuad');
            $('#d'+i).css("opacity", 0).delay(animStart+13000+i*750).animate({opacity:1}, 750, 'easeInOutQuad');
        }

        $('#s4').delay(19000).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#s8').delay(16000).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#s12').delay(13000).animate({color:animColor}, 1000, 'easeInOutQuad');

        $('#d3').delay(7750).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#d6').delay(5500).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#d9').delay(3250).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#d12').delay(1000).animate({color:animColor}, 1000, 'easeInOutQuad');

        var circ1 = new Path.Circle(new Point(258, 46), 18);
        circ1.strokeColor = "red";
        circ1.opacity = 0;

        var circ2 = new Path.Circle(new Point(235, 136), 18);
        circ2.strokeColor = "red";
        circ2.opacity = 0;

        circ1.animate({
            style:{
                opacity: 1,
            },
            delay: 26500,
            duration: 1000,
            animationType: 'easeInOutQuad'
        });

        circ2.animate({
            style:{
                opacity: 1,
            },
            delay: 26500,
            duration: 1000,
            animationType: 'easeInOutQuad'
        });
		
    }
}
;
