var Animation = {
    images:[
        {
            id:'cember',
            src:'/assets/animations/cember_big.png'
        },
        {
            id:'cember2',
            src:'/assets/animations/cember_big.png'
        }
    ],
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
            width:'630px',
            height:'40px',
            padding:'0px',
            margin:'0px'
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
            width:'490px',
            height:'24px',
            padding:'0px',
            margin:'0px'
        });
        var myArray = ["3","6","9","12","15","18","21","24","27","30","33","36","39"];
        for(var i = 0; i < 13; i++){
            var myId = i+1;
            var myIdStr = "s"+myId;
            var value = myArray[i];
            var width = value.length > 1 ? 32: 25;
            if(value == 39){
                width = 60;
            }
            var widthStr = ""+width+"px";
            if(value == "39"){
                $("#eq1").append('<div id="'+myIdStr+'" style="position:relative;float:left;width:'+widthStr+';">'+value+', ...</div>');
            }
            else{
                $("#eq1").append('<div id="'+myIdStr+'" style="position:relative;float:left;width:'+widthStr+';">'+value+',</div>');
            }
        }

        $('#s4').append($('#cember'));
        $('#cember').css({
            position:'absolute',
            top:'-4px',
            left:'-4px',
            opacity:0
        });
        $('#cember').delay(26500).animate({opacity:1}, 1000, 'easeInOutQuad');

        $('#secondDiv').css({
            position:'absolute',
            top:'100px',
            left:'20px',
            width:'630px',
            height:'40px',
            padding:'0px',
            margin:'0px'
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
            width:'490px',
            height:'24px',
            padding:'0px',
            margin:'0px'
        });

        var myArray2 = ["4","8","12","16","20","24","28","32","36","40","44","48","52"];
        for(var i = 0; i < 13; i++){
            var myId2 = i+1;
            var myIdStr2 = "d"+myId2;
            var value2 = myArray2[i];
            var width2 = value2.length > 1 ? 32: 25;
            if(value2 == 52){
                width2 = 60;
            }
            var widthStr2 = ""+width2+"px";
            if(value2 == "52"){
                $("#eq2").append('<div id="'+myIdStr2+'" style="position:relative;float:left;width:'+widthStr2+';">'+value2+', ...</div>');
            }
            else{
                $("#eq2").append('<div id="'+myIdStr2+'" style="position:relative;float:left;width:'+widthStr2+';">'+value2+',</div>');
            }
        }

        $('#d3').append($('#cember2'));
        $('#cember2').css({
            position:'absolute',
            top:'-4px',
            left:'-4px',
            opacity:0
        });
        $('#cember2').delay(26500).animate({opacity:1}, 1000, 'easeInOutQuad');

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
		
    }
}