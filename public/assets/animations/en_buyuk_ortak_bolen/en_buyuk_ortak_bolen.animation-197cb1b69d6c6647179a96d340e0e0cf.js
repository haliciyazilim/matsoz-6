var Animation={images:[{id:"cember",src:"/assets/animations/cember.png"},{id:"cember2",src:"/assets/animations/cember.png"}],init:function(e){Animation.container=e;var t=1e3;Animation.animDiv=document.createElement("div"),Animation.animDiv.id="animDiv",$(Animation.container).append(Animation.animDiv),$(Animation.animDiv).css({position:"absolute",top:"30px",left:"150px",width:"700px",height:"150px",fontSize:"20px"}),$(Animation.animDiv).html('<div id="firstDiv"></div><div id="secondDiv"></div><div id="thirdDiv"></div>'),$("#firstDiv").css({position:"absolute",top:"10px",left:"20px",width:"600px",height:"40px",padding:"0px",margin:"0px"}),$("#firstDiv").html('<div id="title1">36\'nın bölenleri</div><div id="eq1"></div>'),$("#title1").css({position:"absolute",top:"10px",left:"10px",opacity:0}),$("#title1").delay(t).animate({opacity:1},1e3,"easeInOutQuad"),$("#eq1").css({position:"absolute",top:"10px",left:"180px",width:"460px",height:"24px",padding:"0px",margin:"0px"});var n=["1","2","3","4","6","9","12","18","36"];for(var r=0;r<9;r++){var i=r+1,s="s"+i,o=n[r],u=o.length>1?32:25,a=""+u+"px";o=="36"?$("#eq1").append('<div id="'+s+'" style="position:relative;float:left;width:'+a+';">'+o+"</div>"):$("#eq1").append('<div id="'+s+'" style="position:relative;float:left;width:'+a+';">'+o+",</div>")}$("#s6").append($("#cember")),$("#cember").css({position:"absolute",top:"-4px",left:"-5px",opacity:0}),$("#cember").delay(19500).animate({opacity:1},1e3,"easeInOutQuad"),$("#secondDiv").css({position:"absolute",top:"100px",left:"20px",width:"600px",height:"40px"}),$("#secondDiv").html('<div id="title2">45\'in bölenleri</div><div id="eq2"></div>'),$("#title2").css({position:"absolute",top:"10px",left:"10px",opacity:0}),$("#title2").delay(t+9750).animate({opacity:1},1e3,"easeInOutQuad"),$("#eq2").css({position:"absolute",top:"10px",left:"180px",width:"460px",height:"24px",padding:"0px",margin:"0px"});var f=["1","3","5","9","15","45"];for(var r=0;r<6;r++){var l=r+1,c="d"+l,h=f[r],p=h.length>1?32:25,d=""+p+"px";h=="45"?$("#eq2").append('<div id="'+c+'" style="position:relative;float:left;width:'+d+';">'+h+"</div>"):$("#eq2").append('<div id="'+c+'" style="position:relative;float:left;width:'+d+';">'+h+",</div>")}$("#d4").append($("#cember2")),$("#cember2").css({position:"absolute",top:"-4px",left:"-5px",opacity:0}),$("#cember2").delay(19500).animate({opacity:1},1e3,"easeInOutQuad"),$("#thirdDiv").css({position:"absolute",top:"65px",left:"360px",width:"200px",height:"20px",fontWeight:"bold",opacity:0}),$("#thirdDiv").html("EBOB(36, 45) = 9"),$("#thirdDiv").delay(20500).animate({opacity:1},1e3,"easeInOutQuad",function(){Main.animationFinished(1500)});for(var r=1;r<10;r++)$("#s"+r).css("opacity",0).delay(t+1e3+r*750).animate({opacity:1},750,"easeInOutQuad");for(var r=1;r<7;r++)$("#d"+r).css("opacity",0).delay(t+10750+r*750).animate({opacity:1},750,"easeInOutQuad");$("#s1").delay(14500).animate({color:animColor},1e3,"easeInOutQuad"),$("#s3").delay(13e3).animate({color:animColor},1e3,"easeInOutQuad"),$("#s6").delay(10750).animate({color:animColor},1e3,"easeInOutQuad"),$("#d1").delay(4750).animate({color:animColor},1e3,"easeInOutQuad"),$("#d2").delay(4e3).animate({color:animColor},1e3,"easeInOutQuad"),$("#d4").delay(2500).animate({color:animColor},1e3,"easeInOutQuad")}};