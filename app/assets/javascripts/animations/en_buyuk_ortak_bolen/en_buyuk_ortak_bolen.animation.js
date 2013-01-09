var Animation = {
    images:[
        {
            id:'cember',
            src:'/assets/animations/cember.png'
        },
        {
            id:'cember2',
            src:'/assets/animations/cember.png'
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
            padding:'0px',
            margin:'0px'
//            border:'1px solid'
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
            padding:'0px',
            margin:'0px'
        });
        var myArray = ["1","2","3","4","6","9","12","18","36"];
        for(var i = 0; i < 9; i++){
            var myId = i+1;
            var myIdStr = "s"+myId;
            var value = myArray[i];
            var width = value.length > 1 ? 32: 25;
            var widthStr = ""+width+"px";
            if(value == "36"){
                $("#eq1").append('<div id="'+myIdStr+'" style="position:relative;float:left;width:'+widthStr+';">'+value+'</div>');
            }
            else{
                $("#eq1").append('<div id="'+myIdStr+'" style="position:relative;float:left;width:'+widthStr+';">'+value+',</div>');
            }
        }

        $('#s6').append($('#cember'));
        $('#cember').css({
            position:'absolute',
            top:'-4px',
            left:'-5px',
            opacity:0
        });
        $('#cember').delay(19500).animate({opacity:1}, 1000, 'easeInOutQuad');

        $('#secondDiv').css({
            position:'absolute',
            top:'100px',
            left:'20px',
            width:'600px',
            height:'40px'
        });
        $('#secondDiv').html('<div id="title2">45\'in bölenleri</div><div id="eq2"></div>');
        $('#title2').css({
            position:'absolute',
            top:'10px',
            left:'10px',
            opacity:0
        });
        $('#title2').delay(animStart+9750).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#eq2').css({
            position:'absolute',
            top:'10px',
            left:'180px',
            width:'460px',
            height:'24px',
            padding:'0px',
            margin:'0px'
        });
        var myArray2 = ["1","3","5","9","15","45"];
        for(var i = 0; i < 6; i++){
            var myId2 = i+1;
            var myIdStr2 = "d"+myId2;
            var value2 = myArray2[i];
            var width2 = value2.length > 1 ? 32: 25;
            var widthStr2 = ""+width2+"px";
            if(value2 == "45"){
                $("#eq2").append('<div id="'+myIdStr2+'" style="position:relative;float:left;width:'+widthStr2+';">'+value2+'</div>');
            }
            else{
                $("#eq2").append('<div id="'+myIdStr2+'" style="position:relative;float:left;width:'+widthStr2+';">'+value2+',</div>');
            }
        }

        $('#d4').append($('#cember2'));
        $('#cember2').css({
            position:'absolute',
            top:'-4px',
            left:'-5px',
            opacity:0
        });
        $('#cember2').delay(19500).animate({opacity:1}, 1000, 'easeInOutQuad');

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
        $('#thirdDiv').delay(20500).animate({opacity:1}, 1000, 'easeInOutQuad', function(){Main.animationFinished(1500)});
        for(var i = 1; i < 10; i++){
            $('#s'+i).css("opacity", 0).delay(animStart+1000+i*750).animate({opacity:1}, 750, 'easeInOutQuad');

        }
        for(var i = 1; i < 7; i++ ){
            $('#d'+i).css("opacity", 0).delay(animStart+10750+i*750).animate({opacity:1}, 750, 'easeInOutQuad');
        }

        $('#s1').delay(14500).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#s3').delay(13000).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#s6').delay(10750).animate({color:animColor}, 1000, 'easeInOutQuad');

        $('#d1').delay(4750).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#d2').delay(4000).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#d4').delay(2500).animate({color:animColor}, 1000, 'easeInOutQuad');
    }
}