var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        var animStart = 0;
        Animation.animDiv = document.createElement('div');
        Animation.animDiv.id = "animDiv";
        $(Animation.container).append(Animation.animDiv);
        $(Animation.animDiv).css({
            position:'absolute',
            top:'40px',
            left:'130px',
            width:'600px',
            height:'150px',
            //           border:'1px solid',
            fontSize:'20px'
        });

        $(Animation.animDiv).html('<div id="factorT">çarpanları</div><div id="firstDiv">12 = <span id="eq1">1 x 12</span></div><div id="secondDiv">12 = <span id="eq2">2 x 6</span></div><div id="thirdDiv">12 = <span id="eq3">3 x 4</span></div><div id="fourthDiv">1, 12</div><div id="fifthDiv">2, 6</div><div id="sixthDiv">3, 4</div><div id="seventhDiv"><b>12</b> </br>sayısının çarpanları</div><div id="eighthDiv">1, 2, 3, 4, 6, 12</div>');
        $('#factorT').css({
            position:'absolute',
            top:'0px',
            left:'216px',
            opacity:0,
            fontWeight:'bold'
        });
        $('#factorT').delay(animStart+3000).animate({opacity:1}, 1000, 'easeInOutQuad')
        $('#firstDiv').css({
            position:'absolute',
            top:'35px',
            left:'20px',
            opacity:0
        });
        $('#firstDiv').delay(animStart).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#eq1').css("opacity", 0).delay(animStart+1500).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#secondDiv').css({
            position:'absolute',
            top:'65px',
            left:'20px',
            opacity:0
        });
        $('#secondDiv').delay(animStart+6000).animate({opacity:1}, 1000, 'easeInOutQuad')
        $('#eq2').css("opacity", 0).delay(animStart+7500).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#thirdDiv').css({
            position:'absolute',
            top:'95px',
            left:'20px',
            opacity:0
        });
        $('#thirdDiv').delay(animStart+10500).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#eq3').css("opacity", 0).delay(animStart+12000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#fourthDiv').css({
            position:'absolute',
            top:'35px',
            left:'236px',
            opacity:0,
            color:animationEqsColor
        });
        $('#fourthDiv').delay(animStart+4500).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#fifthDiv').css({
            position:'absolute',
            top:'65px',
            left:'238px',
            opacity:0,
            color:animationEqsColor
        });
        $('#fifthDiv').delay(animStart+9000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#sixthDiv').css({
            position:'absolute',
            top:'95px',
            left:'238px',
            opacity:0,
            color:animationEqsColor
        });
        $('#sixthDiv').delay(animStart+13500).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#seventhDiv').css({
            position:'absolute',
            top:'30px',
            left:'356px',
            textAlign:'center',
            width:'180px',
            opacity:0,
            color:wholeFactorsColor,
        });
        $('#seventhDiv').delay(animStart+15000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#eighthDiv').css({
            position:'absolute',
            top:'80px',
            left:'376px',
            opacity:0,
            color:wholeFactorsColor,
        });
        $('#eighthDiv').delay(animStart+16500).animate({opacity:1}, 1000, 'easeInOutQuad', function(){Main.animationFinished(1000)})

    }
}
;
