var Animation={images:[],init:function(e){Animation.container=e;var t=1e3,n=t+2e3,r=n+2e3,i=r+2e3,s=i+4e3,o=s+4e3;Animation.balls=new Group;for(var u=0;u<9;u++){var a=new Group,f=new Path.Circle(new Point(20+32*u,94),13);f.style=ballStyle;var l=new PointText(new Point(20+32*u,99));l.justification="center",l.strokeWidth="1px",l.strokeColor=ballTextColor,l.content=u+1,l.fillColor=ballTextColor,a.addChild(f),a.addChild(l),Animation.balls.addChild(a)}Animation.balls.opacity=0;var c=Util.dom({parent:Animation.container,tag:"div",css:animDivStyle}),h=Util.dom({parent:c,tag:"div",css:firstDivStyle,html:"0'dan büyük 10'dan küçük sayı çekme olasılığı = <b>1</b> &nbsp;&nbsp;&nbsp;<span style=\"color:red;\">kesin olay</span>"}),p=Util.dom({parent:c,tag:"div",css:secondDivStyle,html:'10 çekme olasılığı = <b>0</b> &nbsp;&nbsp;&nbsp;<span style="color:red;">imkânsız olay</span>'}),d=Util.dom({parent:c,tag:"div",css:thirdDivStyle,html:'<div id="ff"><div id="fT">Çift sayı çekme olasılığı = </div><div id="firstFrac" style="position:absolute;top:-17px;left:180px;width:30px;height:51px;padding:0;margin:0;line-height:25px;"><div id="nom1"></div><div id="line1"></div><div id="denom1"></div></div></div><div id="ss"><div id="sT" style="position:absolute;top:0px;left:230px;width:180px">Tek sayı çekme olasılığı = </div><div id="secondFrac" style="position:absolute;top:-17px;left:410px;width:30px;height:51px;padding:0;margin:0;line-height:25px;"><div id="nom2"></div><div id="line2"></div><div id="denom2"></div></div></div>'});$("#line1").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom1").css("text-align","center").css("height","25px"),$("#nom1").html(4),$("#denom1").css("text-align","center").css("height","25px"),$("#denom1").html(9),$("#line2").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom2").css("text-align","center").css("height","25px"),$("#nom2").html(5),$("#denom2").css("text-align","center").css("height","25px"),$("#denom2").html(9);var v=Util.dom({parent:c,tag:"div",css:fourthDivStyle,html:'<span style="color:red;">Tümleyen olay</span><div id="thirdFrac" style="position:absolute;opacity:0;top:-17px;left:140px;width:50px;height:51px;padding:0;margin:0;line-height:25px;"><div id="nom3"></div><div id="line3"></div><div id="denom3"></div></div><div id="tfFrac" style="position:absolute;top:-17px;left:110px;width:30px;height:51px;padding:0;margin:0;line-height:25px;"><div id="nomtf"></div><div id="linetf"></div><div id="denomtf"></div></div><span id="pls" style="position:absolute;left:146px">+</span><div id="tsFrac" style="position:absolute;top:-17px;left:160px;width:30px;height:51px;padding:0;margin:0;line-height:25px;"><div id="nomts"></div><div id="linets"></div><div id="denomts"></div></div><span id="eqq" style="opacity:0;position:absolute;left:200px">=</span><div id="fourthFrac" style="opacity:0;position:absolute;top:-17px;left:220px;width:30px;height:51px;padding:0;margin:0;line-height:25px;"><div id="nom4"></div><div id="line4"></div><div id="denom4"></div></div><span id="last" style="opacity:0;position:absolute;left:260px;width:30px;">= <b>1</b></span>'});$("#line3").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom3").css("text-align","center").css("height","25px"),$("#nom3").html("4 + 5"),$("#denom3").css("text-align","center").css("height","25px"),$("#denom3").html(9),$("#linetf").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nomtf").css("text-align","center").css("height","25px"),$("#nomtf").html(4),$("#denomtf").css("text-align","center").css("height","25px"),$("#denomtf").html(9),$("#linets").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nomts").css("text-align","center").css("height","25px"),$("#nomts").html(5),$("#denomts").css("text-align","center").css("height","25px"),$("#denomts").html(9),$("#line4").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom4").css("text-align","center").css("height","25px"),$("#nom4").html(9),$("#denom4").css("text-align","center").css("height","25px"),$("#denom4").html(9),Animation.balls.animate({style:{opacity:1},duration:1e3,delay:t,animationType:"easeInOutQuad"}),$(h).delay(n).animate({opacity:1},1e3,"easeInOutQuad"),$(p).delay(r).animate({opacity:1},1e3,"easeInOutQuad"),$("#ff").css("opacity",0).delay(i).animate({opacity:1},1e3,"easeInOutQuad"),AnimationManager.delay(function(){animateNumber(0)},i+1e3),$("#ss").css("opacity",0).delay(s).animate({opacity:1},1e3,"easeInOutQuad"),AnimationManager.delay(function(){animateNumber(1)},s+1e3),$(v).delay(o).animate({opacity:1},1e3,"easeInOutQuad"),$("#tfFrac").delay(o+2e3).animate({opacity:0},1e3,"easeInOutQuad"),$("#tsFrac").delay(o+2e3).animate({opacity:0},1e3,"easeInOutQuad"),$("#pls").delay(o+2e3).animate({opacity:0},1e3,"easeInOutQuad"),$("#thirdFrac").delay(o+2e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#eqq").delay(o+3500).animate({opacity:1},1e3,"easeInOutQuad"),$("#fourthFrac").delay(o+3500).animate({opacity:1},1e3,"easeInOutQuad"),$("#last").delay(o+5e3).animate({opacity:1},1e3,"easeInOutQuad",function(){Main.animationFinished(1e3)})}};