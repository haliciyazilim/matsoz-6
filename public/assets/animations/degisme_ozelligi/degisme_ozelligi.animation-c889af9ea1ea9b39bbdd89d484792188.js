var Animation={images:[],init:function(e){Animation.container=e;var t=0;Animation.animDiv=document.createElement("div"),Animation.animDiv.id="animDiv",$(Animation.container).append(Animation.animDiv),$(Animation.animDiv).html('<div id="firstDiv"></div><div id="secondDiv"></div><div id="thirdDiv"></div>'),$(Animation.animDiv).css({position:"absolute",top:"30px",left:"90px",width:"600px",height:"140px"}),$("#firstDiv").css({position:"absolute",top:"0px",left:"0px",width:"600px",height:"40px",fontSize:"26px",textAlign:"center"}),$("#secondDiv").css({position:"absolute",top:"50px",left:"0px",width:"600px",height:"40px",fontSize:"26px",textAlign:"center"}),$("#thirdDiv").css({position:"absolute",top:"100px",left:"0px",width:"600px",height:"40px",fontSize:"26px",textAlign:"center"}),$("#firstDiv").html('<div id="ffirst">6 <span id="plus1" style="color:red;">+</span> 2 <span id="a1">= 8</span></div><div id="fsecond">6 <span id="minus1" style="color:red;">-</span> 2 <span id="b1">= 4</span></div><div id="fthird">6 <dfn id="dot1" style="color:red;"> • </dfn> 2 <span id="c1">= 12</span></div><div id="ffourth">6 <span id="divide1" style="color:red;">:</span> 2 <span id="d1">= 3</span></div>'),$("#ffirst").css({position:"absolute",top:"0px",left:"0px",width:"120px",height:"40px",opacity:0}),$("#ffirst").delay(t).animate({opacity:1},1e3,"easeInOutQuad"),$("#plus1").css("opacity",0).delay(t+1e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#a1").css("opacity",0).delay(t+1e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#fsecond").css({position:"absolute",top:"0px",left:"160px",width:"120px",height:"40px",opacity:0}),$("#fsecond").delay(t+3e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#minus1").css("opacity",0).delay(t+4e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#b1").css("opacity",0).delay(t+4e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#fthird").css({position:"absolute",top:"0px",left:"320px",width:"120px",height:"40px",opacity:0}),$("#fthird").delay(t+6e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#dot1").css("opacity",0).delay(t+7e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#c1").css("opacity",0).delay(t+7e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#ffourth").css({position:"absolute",top:"0px",left:"480px",width:"120px",height:"40px",opacity:0}),$("#ffourth").delay(t+9e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#divide1").css("opacity",0).delay(t+1e4).animate({opacity:1},1e3,"easeInOutQuad"),$("#d1").css("opacity",0).delay(t+1e4).animate({opacity:1},1e3,"easeInOutQuad"),$("#secondDiv").html('<div id="sfirst">2 <span id="plus2" style="color:red;">+</span> 6 <span id="a2">= 8</span></div><div id="ssecond">2 <span id="minus2" style="color:red;">-</span> 6 <span id="b2">= ?</span></div><div id="sthird">2 <dfn id="dot2" style="color:red;"> • </dfn> 6 <span id="c2">= 12</span></div><div id="sfourth">2 <span id="divide2" style="color:red;">:</span> 6 <span id="d2">= ?</span></div>'),$("#sfirst").css({position:"absolute",top:"0px",left:"0px",width:"120px",height:"40px",opacity:0}),$("#sfirst").delay(t).animate({opacity:1},1e3,"easeInOutQuad"),$("#plus2").css("opacity",0).delay(t+1e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#a2").css("opacity",0).delay(t+1e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#ssecond").css({position:"absolute",top:"0px",left:"160px",width:"120px",height:"40px",opacity:0}),$("#ssecond").delay(t+3e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#minus2").css("opacity",0).delay(t+4e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#b2").css("opacity",0).delay(t+4e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#sthird").css({position:"absolute",top:"0px",left:"320px",width:"120px",height:"40px",opacity:0}),$("#sthird").delay(t+6e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#dot2").css("opacity",0).delay(t+7e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#c2").css("opacity",0).delay(t+7e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#sfourth").css({position:"absolute",top:"0px",left:"480px",width:"120px",height:"40px",opacity:0}),$("#sfourth").delay(t+9e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#divide2").css("opacity",0).delay(t+1e4).animate({opacity:1},1e3,"easeInOutQuad"),$("#d2").css("opacity",0).delay(t+1e4).animate({opacity:1},1e3,"easeInOutQuad"),$("#thirdDiv").html('<div id="tfirst">6 + 2 </div><div id="eq1">=</div><div id="tsecond">2 + 6 </div><div id="tthird">6 <dfn id="dot3"> • </dfn> 2</div><div id="eq2">=</div><div id="tfourth">2 <dfn id="dot4"> • </dfn> 6 </div>'),$("#tfirst").css({position:"absolute",top:"-100px",left:"0px",width:"80px",height:"40px",opacity:0}),$("#tfirst").delay(t+12e3).animate({opacity:2,top:"0px",left:"-30px"},2e3,"easeInOutQuad"),$("#tsecond").css({position:"absolute",top:"-50px",left:"0px",width:"80px",height:"40px",opacity:0}),$("#tsecond").delay(t+12e3).animate({opacity:2,top:"0px",left:"70px"},2e3,"easeInOutQuad",function(){$("#eq1").css("opacity",1)}),$("#eq1").css({position:"absolute",top:"0px",left:"50px",width:"20px",height:"40px",color:"red",opacity:0}),$("#tthird").css({position:"absolute",top:"-100px",left:"314px",width:"80px",height:"40px",opacity:0}),$("#tthird").delay(t+14e3).animate({opacity:2,top:"0px",left:"284px"},2e3,"easeInOutQuad"),$("#tfourth").css({position:"absolute",top:"-50px",left:"314px",width:"80px",height:"40px",opacity:0}),$("#tfourth").delay(t+14e3).animate({opacity:2,top:"0px",left:"384px"},2e3,"easeInOutQuad",function(){$("#eq2").css("opacity",1),Main.animationFinished(1e3)}),$("#eq2").css({position:"absolute",top:"0px",left:"364px",width:"20px",height:"40px",color:"red",opacity:0})}};