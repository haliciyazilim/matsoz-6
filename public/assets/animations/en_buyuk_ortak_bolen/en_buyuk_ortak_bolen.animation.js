var Animation={images:[],init:function(e){Animation.container=e;var t=1e3;Animation.animDiv=document.createElement("div"),Animation.animDiv.id="animDiv",$(Animation.container).append(Animation.animDiv),$(Animation.animDiv).css({position:"absolute",top:"30px",left:"150px",width:"700px",height:"150px",fontSize:"20px"}),$(Animation.animDiv).html('<div id="firstDiv"></div><div id="secondDiv"></div><div id="thirdDiv"></div>'),$("#firstDiv").css({position:"absolute",top:"10px",left:"20px",width:"600px",height:"40px"}),$("#firstDiv").html('<div id="title1">36\'nın bölenleri</div><div id="eq1"></div>'),$("#title1").css({position:"absolute",top:"10px",left:"10px",opacity:0}),$("#title1").delay(t).animate({opacity:1},1e3,"easeInOutQuad"),$("#eq1").css({position:"absolute",top:"10px",left:"180px",width:"460px",height:"24px"}),$("#eq1").html('<span id="s1">1, </span><span id="s2">2, </span><span id="s3">3, </span><span id="s4">4, </span><span id="s5">6, </span><span id="s6">9, </span><span id="s7">12, </span><span id="s8">18</span>'),$("#secondDiv").css({position:"absolute",top:"100px",left:"20px",width:"600px",height:"40px"}),$("#secondDiv").html('<div id="title2">45\'in bölenleri</div><div id="eq2"></div>'),$("#title2").css({position:"absolute",top:"10px",left:"10px",opacity:0}),$("#title2").delay(t+9e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#eq2").css({position:"absolute",top:"10px",left:"180px",width:"460px",height:"24px"}),$("#eq2").html('<span id="d1">1, </span><span id="d2">3, </span><span id="d3">4, </span><span id="d4">9, </span><span id="d5">15</span>'),$("#thirdDiv").css({position:"absolute",top:"65px",left:"360px",width:"200px",height:"20px",fontWeight:"bold",opacity:0}),$("#thirdDiv").html("EBOB(36, 45) = 9"),$("#thirdDiv").delay(2e4).animate({opacity:1},1e3,"easeInOutQuad",function(){Main.animationFinished(1500)});for(var n=1;n<9;n++)$("#s"+n).css("opacity",0).delay(t+1e3+n*750).animate({opacity:1},750,"easeInOutQuad");for(var n=1;n<6;n++)$("#d"+n).css("opacity",0).delay(t+1e4+n*750).animate({opacity:1},750,"easeInOutQuad");$("#s1").delay(12750).animate({color:animColor},1e3,"easeInOutQuad"),$("#s3").delay(11250).animate({color:animColor},1e3,"easeInOutQuad"),$("#s6").delay(9e3).animate({color:animColor},1e3,"easeInOutQuad"),$("#d1").delay(4500).animate({color:animColor},1e3,"easeInOutQuad"),$("#d2").delay(3750).animate({color:animColor},1e3,"easeInOutQuad"),$("#d4").delay(1500).animate({color:animColor},1e3,"easeInOutQuad");var r=new Path.Circle(new Point(458,46),14);r.strokeColor="red",r.opacity=0;var i=new Path.Circle(new Point(412,136),14);i.strokeColor="red",i.opacity=0,r.animate({style:{opacity:1},delay:18e3,duration:1e3,animationType:"easeInOutQuad"}),i.animate({style:{opacity:1},delay:18e3,duration:1e3,animationType:"easeInOutQuad"})}};