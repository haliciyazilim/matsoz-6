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
            left:'150px',
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

        $('#firstDiv').html('<div id="title1">36\'nın bölenleri</div><div id="eq1"></div>');
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
            left:'180px',
            width:'460px',
            height:'24px',
        });
        $('#eq1').html('<span id="s1">1, </span><span id="s2">2, </span><span id="s3">3, </span><span id="s4">4, </span><span id="s5">6, </span>' +
            '<span id="s6">9, </span><span id="s7">12, </span><span id="s8">18</span>');

        $('#secondDiv').css({
            position:'absolute',
            top:'100px',
            left:'20px',
            width:'600px',
            height:'40px',
        });
        $('#secondDiv').html('<div id="title2">45\'in bölenleri</div><div id="eq2"></div>');
        $('#title2').css({
            position:'absolute',
            top:'10px',
            left:'10px',
            opacity:0
        });
        $('#title2').delay(animStart+9000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#eq2').css({
            position:'absolute',
            top:'10px',
            left:'180px',
            width:'460px',
            height:'24px',
        });
        $('#eq2').html('<span id="d1">1, </span><span id="d2">3, </span><span id="d3">4, </span><span id="d4">9, </span><span id="d5">15</span>');

        $('#thirdDiv').css({
            position:'absolute',
            top:'65px',
            left:'360px',
            width:'200px',
            height:'20px',
            fontWeight:'bold',
            opacity:0
        });
        $('#thirdDiv').html('EBOB(36, 45) = 9');
        $('#thirdDiv').delay(20000).animate({opacity:1}, 1000, 'easeInOutQuad', function(){Main.animationFinished(1500)});
        for(var i = 1; i < 9; i++){
            $('#s'+i).css("opacity", 0).delay(animStart+1000+i*750).animate({opacity:1}, 750, 'easeInOutQuad');

        }
        for(var i = 1; i < 6; i++ ){
            $('#d'+i).css("opacity", 0).delay(animStart+10000+i*750).animate({opacity:1}, 750, 'easeInOutQuad');
        }

        $('#s1').delay(12750).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#s3').delay(11250).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#s6').delay(9000).animate({color:animColor}, 1000, 'easeInOutQuad');

        $('#d1').delay(4500).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#d2').delay(3750).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#d4').delay(1500).animate({color:animColor}, 1000, 'easeInOutQuad');

        var circ1 = new Path.Circle(new Point(458, 46), 14);
        circ1.strokeColor = "red";
        circ1.opacity = 0;

        var circ2 = new Path.Circle(new Point(412, 136), 14);
        circ2.strokeColor = "red";
        circ2.opacity = 0;

        circ1.animate({
            style:{
                opacity: 1,
            },
            delay: 18000,
            duration: 1000,
            animationType: 'easeInOutQuad'
        });

        circ2.animate({
            style:{
                opacity: 1,
            },
            delay: 18000,
            duration: 1000,
            animationType: 'easeInOutQuad'
        });
    }
}