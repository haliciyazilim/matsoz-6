var Animation={images:[],init:function(e){Animation.container=e;var t=0;Animation.animDiv=document.createElement("div"),Animation.animDiv.id="animDiv",$(Animation.container).append(Animation.animDiv),$(Animation.animDiv).css({position:"absolute",top:"40px",left:"130px",width:"600px",height:"150px",fontSize:"20px"}),$(Animation.animDiv).html('<div id="factorT">çarpanları</div><div id="firstDiv">12 = <span id="eq1">1 x 12</span></div><div id="secondDiv">12 = <span id="eq2">2 x 6</span></div><div id="thirdDiv">12 = <span id="eq3">3 x 4</span></div><div id="fourthDiv">1, 12</div><div id="fifthDiv">2, 6</div><div id="sixthDiv">3, 4</div><div id="seventhDiv"><b>12</b> </br>sayısının çarpanları</div><div id="eighthDiv">1, 2, 3, 4, 6, 12</div>'),$("#factorT").css({position:"absolute",top:"0px",left:"216px",opacity:0,fontWeight:"bold"}),$("#factorT").delay(t+3e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#firstDiv").css({position:"absolute",top:"35px",left:"20px",opacity:0}),$("#firstDiv").delay(t).animate({opacity:1},1e3,"easeInOutQuad"),$("#eq1").css("opacity",0).delay(t+1500).animate({opacity:1},1e3,"easeInOutQuad"),$("#secondDiv").css({position:"absolute",top:"65px",left:"20px",opacity:0}),$("#secondDiv").delay(t+6e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#eq2").css("opacity",0).delay(t+7500).animate({opacity:1},1e3,"easeInOutQuad"),$("#thirdDiv").css({position:"absolute",top:"95px",left:"20px",opacity:0}),$("#thirdDiv").delay(t+10500).animate({opacity:1},1e3,"easeInOutQuad"),$("#eq3").css("opacity",0).delay(t+12e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#fourthDiv").css({position:"absolute",top:"35px",left:"236px",opacity:0,color:animationEqsColor}),$("#fourthDiv").delay(t+4500).animate({opacity:1},1e3,"easeInOutQuad"),$("#fifthDiv").css({position:"absolute",top:"65px",left:"238px",opacity:0,color:animationEqsColor}),$("#fifthDiv").delay(t+9e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#sixthDiv").css({position:"absolute",top:"95px",left:"238px",opacity:0,color:animationEqsColor}),$("#sixthDiv").delay(t+13500).animate({opacity:1},1e3,"easeInOutQuad"),$("#seventhDiv").css({position:"absolute",top:"30px",left:"356px",textAlign:"center",width:"180px",opacity:0,color:wholeFactorsColor}),$("#seventhDiv").delay(t+15e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#eighthDiv").css({position:"absolute",top:"80px",left:"376px",opacity:0,color:wholeFactorsColor}),$("#eighthDiv").delay(t+16500).animate({opacity:1},1e3,"easeInOutQuad",function(){Main.animationFinished(1e3)})}};