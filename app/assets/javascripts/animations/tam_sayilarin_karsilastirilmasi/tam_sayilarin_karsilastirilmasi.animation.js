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
            left:'250px',
            width:'500px',
            height:'150px',
            fontSize:'22px'
        });
        $(Animation.animDiv).html('<div id="firstDiv">İzmir\'in ocak ayı sıcaklık ortalaması 7 °C</div><div id="secondDiv">Van\'ın ocak ayı sıcaklık ortalaması -7 °C</div><div id="thirdDiv">7 > -7</div>');

        $('#firstDiv').css({
            position:'absolute',
            top:'0px',
            left:'0px',
            color:izmirColor,
            opacity:0

        });
        $('#firstDiv').delay(animStart+2000).animate({opacity:1}, 1000, 'easeInOutQuad');

        $('#secondDiv').css({
            position:'absolute',
            top:'130px',
            left:'0px',
            color:vanColor,
            opacity:0
        });
        $('#secondDiv').delay(animStart+3000).animate({opacity:1}, 1000, 'easeInOutQuad');

        $('#thirdDiv').css({
            position:'absolute',
            top:'60px',
            left:'400px',
            fontWeight:'bold',
            opacity:0
        });
        $('#thirdDiv').delay(animStart+4000).animate({opacity:1}, 1000, 'easeInOutQuad', function(){Main.animationFinished(1000)});

        $(Animation.container).append('<img id="thermometer1" src="/assets/animations/tam_sayilarin_karsilastirilmasi/termometre01.jpg"/>');
        $('#thermometer1').css({
            position:'absolute',
            top:'18px',
            left:'50px',
            opacity:0
        });
        $('#thermometer1').delay(animStart).animate({opacity:1}, 1000, 'easeInOutQuad');

        $(Animation.container).append('<img id="thermometer2" src="/assets/animations/tam_sayilarin_karsilastirilmasi/termometre02.png"/>');
        $('#thermometer2').css({
            position:'absolute',
            top:'18px',
            left:'50px',
            opacity:0
        });
        $('#thermometer2').delay(animStart+1000).animate({opacity:1}, 1000, 'easeInOutQuad');
    }
}