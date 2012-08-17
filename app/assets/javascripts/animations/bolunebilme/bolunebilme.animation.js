var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 1000;
        var firstDivStart = animStart+2000;
        var secondDivStart = firstDivStart+4000;
        var thirdDivStart = secondDivStart+4000;
        var fourthDivStart = thirdDivStart+4000;
        var fifthDivStart = fourthDivStart+4000;
        var sixthDivStart = fifthDivStart+4000;
        var seventhDivStart = sixthDivStart+4000;


        var basicFadeInDuration = 1000;
        var coloredNumberDuration = 1000;

        var animationDiv = document.createElement('div');
        animationDiv.id = 'animationDiv'
        $(Animation.container).append(animationDiv);
        $(animationDiv).css({
            position:'absolute',
            top:'30px',
            left:'10px',
            width:'760px',
            height:'160px',
        });

        $(animationDiv).append('<div id="numm"><span id="fD">1</span><span id="sD">3</span><span id="tD">2</span></div>')
        $('#numm').css({
            position:'absolute',
            top:'-5px',
            left:0,
            right:0,
            fontSize: '40px',
            fontWeight:'bold',
            textAlign:'center',
            opacity:0

        });

        $('#numm').css("text-shadow","2px 2px 3px rgba(0,0,0,.20)");
        $('#numm').delay(animStart).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad')

        $('#tD').delay(firstDivStart).animate({color:textColor4}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3},coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor4}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor4}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')
            .delay(5000).animate({color:textColor2}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor2}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor2}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')


        $('#fD').delay(secondDivStart).animate({color:textColor4}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')
            .delay(13000).animate({color:textColor2}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')

        $('#sD').delay(secondDivStart).animate({color:textColor4}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor4}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')
            .delay(9000).animate({color:textColor2}, coloredNumberDuration, 'easeInOutQuad')
            .delay(1000).animate({color:textColor3}, coloredNumberDuration, 'easeInOutQuad')

        $(animationDiv).append('<div id="firstDiv">birler basamağı (2) çift sayı </br> <span style="font-weight:bold;color:'+textColor+';">2\'ye kalansız bölünür</span></div>')
        $('#firstDiv').css({
            position:'absolute',
            top:'45px',
            left:'10px',
            width:'240px',
            height:'30px',
            textAlign:'center',
            lineHeight:'14px',
            fontSize:'12px',
            opacity:0
        });
        $('#firstDiv').delay(firstDivStart).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad')
        $(animationDiv).append('<div id="secondDiv">rakamlar toplamı (1+3+2=6) 3\'ün katı </br> <span style="font-weight:bold;color:'+textColor+';">3\'e kalansız bölünür</span></div>')
        $('#secondDiv').css({
            position:'absolute',
            top:'45px',
            left:'260px',
            width:'240px',
            height:'30px',
            textAlign: 'center',
            lineHeight:'14px',
            fontSize:'12px',
            opacity:0
        });
        $('#secondDiv').delay(secondDivStart).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad')
        $(animationDiv).append('<div id="thirdDiv">sağdan iki basamak (32) 4\'ün katı </br><span style="font-weight:bold;color:'+textColor+';"> 4\'e kalansız bölünür</span></div>')
        $('#thirdDiv').css({
            position:'absolute',
            top:'45px',
            left:'510px',
            width:'240px',
            height:'30px',
            textAlign: 'center',
            lineHeight:'14px',
            fontSize:'12px',
            opacity:0
        });
        $('#thirdDiv').delay(thirdDivStart).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad')

        $(animationDiv).append('<div id="fourthDiv">2 ve 3\'e kalansız bölünür </br><span style="font-weight:bold;color:'+textColor+';"> 6\'ya kalansız bölünür</span></div>')
        $('#fourthDiv').css({
            position:'absolute',
            top:'85px',
            left:'260px',
            width:'240px',
            height:'30px',
            textAlign: 'center',
            lineHeight:'14px',
            fontSize:'12px',
            opacity:0
        });
        $('#fourthDiv').delay(fourthDivStart).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad')

        $(animationDiv).append('<div id="fifthDiv">birler basamağı (2) 5 ya da 0 değil </br><span style="font-weight:bold;color:'+textColor2+';"> 5\'e kalansız bölünmez</span></div>')
        $('#fifthDiv').css({
            position:'absolute',
            top:'125px',
            left:'10px',
            width:'240px',
            height:'30px',
            textAlign: 'center',
            lineHeight:'14px',
            fontSize:'12px',
            opacity:0
        });
        $('#fifthDiv').delay(fifthDivStart).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad')

        $(animationDiv).append('<div id="sixthDiv">rakamlar toplamı (1+3+2=6) 9\'un katı değil </br><span style="font-weight:bold;color:'+textColor2+';"> 9\'a kalansız bölünmez</span></div>')
        $('#sixthDiv').css({
            position:'absolute',
            top:'125px',
            left:'260px',
            width:'240px',
            height:'30px',
            textAlign: 'center',
            lineHeight:'14px',
            fontSize:'12px',
            opacity:0
        });
        $('#sixthDiv').delay(sixthDivStart).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad')

        $(animationDiv).append('<div id="seventhDiv">birler basamağı (2) 0 değil </br><span style="font-weight:bold;color:'+textColor2+';"> 10\'a kalansız bölünmez</span></div>')
        $('#seventhDiv').css({
            position:'absolute',
            top:'125px',
            left:'510px',
            width:'240px',
            height:'30px',
            textAlign: 'center',
            lineHeight:'14px',
            fontSize:'12px',
            opacity:0
        });
        $('#seventhDiv').delay(seventhDivStart).animate({opacity:1}, basicFadeInDuration, 'easeInOutQuad', function(){Main.animationFinished(2000);})

    }
}