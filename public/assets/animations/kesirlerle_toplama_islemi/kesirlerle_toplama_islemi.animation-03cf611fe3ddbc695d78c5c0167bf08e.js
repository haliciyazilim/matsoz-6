var Animation={images:[],init:function(e){Animation.container=e;var t=0,n=t+1500,r=n+1500,s=r+2e3,o=s+2e3,u=o+2e3,a=u+2e3,f=a+1e3,l=f+2e3,c=l+5e3,h=c+1e3,p=h+2e3,d=p+2e3,v=new Path.SegmentedRectangle(140.5,10.5,75,50,1,1,1,rectFillColor);v.strokeColor=rectFillColor,v.opacity=0;var m=new Path.SegmentedRectangle(360.5,10.5,50,50,1,1,1,rectFillColor);m.strokeColor=rectFillColor,m.opacity=0;var g=new Path.SegmentedRectangle(140.5,10.5,150,50,2,1,1,rectFillColor);g.opacity=0;var y=new Path.SegmentedRectangle(360.5,10.5,150,50,3,1,1,rectFillColor);y.opacity=0;var b=new Path.SegmentedRectangle(580.5,10.5,150,50,6,1,0,rectFillColor);b.opacity=0;var w=new Path.OneSidedArrow(new Point(525,35),new Point(565,35),10,30);w.opacity=0;var E=new Group;for(i=0;i<5;i++){var S=new Path.Line(new Point(165.5+i*25,10.5),new Point(165.5+i*25,60.5));S.strokeColor="black",S.dashArray=[3,2],E.addChild(S)}E.opacity=0;var x=new Group;for(i=0;i<5;i++){var T=new Path.Line(new Point(385.5+i*25,10.5),new Point(385.5+i*25,60.5));T.strokeColor="black",T.dashArray=[3,2],x.addChild(T)}x.opacity=0;var N=new PointText(new Point(326.5,48.5));N.justification="center",N.fillColor="black",N.fontSize=26,N.content="+",N.opacity=0;var C=new Group,k=new Path.OneSidedArrow(new Point(170,164),new Point(670,164),10,30),L=new Path.OneSidedArrow(new Point(670,164),new Point(671,164),10,30);k.rotate(180),C.addChild(k),C.addChild(L),C.opacity=0;var A=new Group,O=new Path.Circle(new Point(210.5,164.5),5);O.strokeColor="black",O.fillColor="black";var M=new Path.Circle(new Point(630.5,164.5),5);M.strokeColor="black",M.fillColor="black",A.addChild(O),A.addChild(M),A.opacity=0;var _=new Group;for(i=0;i<5;i++){var D=new Path.Circle(new Point(280.5+70*i,164.5),3);D.strokeColor="black",D.fillColor="black",_.addChild(D)}_.opacity=0;var P=new Group,H=new Path.Arc(new Point(434,140),new Point(490,130),new Point(546,140));H.strokeColor="black";var B=new Path.Line(new Point(546,140),new Point(542,132));B.strokeColor="black";var j=new Path.Line(new Point(546,140),new Point(536,142));j.strokeColor="black",P.addChild(H),P.addChild(B),P.addChild(j),P.opacity=0,$(Animation.container).append('<div id="frac22"><p id="nom22">1</p><div id="line22"></div><p id="denom22">2</p></div>'),$("#frac22").css("position","absolute").css("top","83px").css("left","222px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line22").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom22").css("text-align","center").css("height","16px"),$("#denom22").css("text-align","center").css("height","16px"),$("#frac22").css("opacity",0),$("#frac22").delay(s).animate({opacity:1},1e3).delay(1e3).animate({opacity:0},1e3),$(Animation.container).append('<div id="frac33"><div id="nom33">1 x 3</div><div id="line33"></div><div id="denom33">2 x 3</div></div>'),$("#frac33").css("position","absolute").css("top","83px").css("left","213px").css("width","36px").css("height","33px").css("padding",0).css("margin",0).css("color","red").css("line-height","16px"),$("#line33").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom33").css("text-align","center").css("height","16px"),$("#denom33").css("text-align","center").css("height","16px"),$("#frac33").css("opacity",0),$("#frac33").delay(o).animate({opacity:1},1e3).delay(1e3).animate({opacity:0},1e3),$(Animation.container).append('<div id="frac44"><div id="nom44">3</div><div id="line44"></div><div id="denom44">6</div></div>'),$("#frac44").css("position","absolute").css("top","83px").css("left","222px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line44").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom44").css("text-align","center").css("height","16px"),$("#denom44").css("text-align","center").css("height","16px"),$("#frac44").css("opacity",0),$("#frac44").delay(u).animate({opacity:1},1e3),$(Animation.container).append('<div id="frac55"><div id="nom55">1</div><div id="line55"></div><div id="denom55">3</div></div>'),$("#frac55").css("position","absolute").css("top","83px").css("left","442px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line55").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom55").css("text-align","center").css("height","16px"),$("#denom55").css("text-align","center").css("height","16px"),$("#frac55").css("opacity",0),$("#frac55").delay(s).animate({opacity:1},1e3).delay(1e3).animate({opacity:0},1e3),$(Animation.container).append('<div id="frac66"><div id="nom66">1 x 2</div><div id="line66"></div><div id="denom66">3 x 2</div></div>'),$("#frac66").css("position","absolute").css("top","83px").css("left","433px").css("width","36px").css("height","33px").css("padding",0).css("margin",0).css("color","red").css("line-height","16px"),$("#line66").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom66").css("text-align","center").css("height","16px"),$("#denom66").css("text-align","center").css("height","16px"),$("#frac66").css("opacity",0),$("#frac66").delay(o).animate({opacity:1},1e3).delay(1e3).animate({opacity:0},1e3),$(Animation.container).append('<div id="frac77"><div id="nom77">2</div><div id="line77"></div><div id="denom77">6</div></div>'),$("#frac77").css("position","absolute").css("top","83px").css("left","442px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line77").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom77").css("text-align","center").css("height","16px"),$("#denom77").css("text-align","center").css("height","16px"),$("#frac77").css("opacity",0),$("#frac77").delay(u).animate({opacity:1},1e3),$(Animation.container).append('<div id="frac88"><div id="nom88">3</div><div id="line88"></div><div id="denom88">6</div></div><div id="pls">+</div><div id="frac888"><div id="nom888">2</div><div id="line888"></div><div id="denom888">6</div></div><div id="eqq">=</div><div id="frac8888"><div id="nom8888">5</div><div id="line8888"></div><div id="denom8888">6</div></div>'),$("#frac88").css("position","absolute").css("top","83px").css("left","632px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line88").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom88").css("text-align","center").css("height","16px"),$("#denom88").css("text-align","center").css("height","16px"),$("#pls").css({position:"absolute",left:"652px",top:"92px"}),$("#frac888").css("position","absolute").css("top","83px").css("left","664px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line888").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom888").css("text-align","center").css("height","16px"),$("#denom888").css("text-align","center").css("height","16px"),$("#eqq").css({position:"absolute",left:"684px",top:"92px"}),$("#frac8888").css("position","absolute").css("top","83px").css("left","696px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line8888").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom8888").css("text-align","center").css("height","16px"),$("#denom8888").css("text-align","center").css("height","16px"),$("#frac88").css("opacity",0).delay(l+1e3).animate({opacity:1},1e3),$("#pls").css("opacity",0).delay(l+1e3).animate({opacity:1},1e3),$("#frac888").css("opacity",0).delay(l+1e3).animate({opacity:1},1e3),$("#eqq").css("opacity",0).delay(l+3500).animate({opacity:1},1e3),$("#frac8888").css("opacity",0).delay(l+3500).animate({opacity:1},1e3),$(Animation.container).append('<p id="zerro">0</p>'),$("#zerro").css({position:"absolute",left:"219px",top:"150px",fontSize:24}),$("#zerro").css("opacity",0).delay(h+1e3).animate({opacity:1},1e3),$(Animation.container).append('<p id="onne">1</p>'),$("#onne").css({position:"absolute",left:"637px",top:"150px",fontSize:24}),$("#onne").css("opacity",0).delay(h+1e3).animate({opacity:1},1e3),$(Animation.container).append('<div id="frac222"><div id="nom222">1</div><div id="line222"></div><div id="denom222">2</div></div>'),$("#frac222").css("position","absolute").css("top","141px").css("left","426px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line222").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom222").css("text-align","center").css("height","16px"),$("#denom222").css("text-align","center").css("height","16px"),$("#frac222").css("opacity",0),$("#frac222").delay(d).animate({opacity:1},1e3,"easeInOutQuad").delay(3e3).animate({opacity:0},1e3,"easeInOutQuad"),$(e).append('<div id="frac333"><div id="nom333">3</div><div id="line333"></div><div id="denom333">6</div></div>'),$("#frac333").css("position","absolute").css("top","141px").css("left","426px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("color","red").css("line-height","16px"),$("#line333").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom333").css("text-align","center").css("height","16px"),$("#denom333").css("text-align","center").css("height","16px"),$("#frac333").css("opacity",0),$("#frac333").delay(d+4e3).animate({opacity:1},1e3,"easeInOutQuad").delay(2e3).animate({opacity:0},0,"easeInOutQuad"),$(Animation.container).append('<div id="frac3333"><div id="nom3333">3</div><div id="line3333"></div><div id="denom3333">6</div></div>'),$("#frac3333").css("position","absolute").css("top","141px").css("left","426px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line3333").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom3333").css("text-align","center").css("height","16px"),$("#denom3333").css("text-align","center").css("height","16px"),$("#frac3333").css("opacity",0),$("#frac3333").delay(d+7e3).animate({opacity:1},0,"easeInOutQuad"),$(e).append('<div id="frac444"><div id="nom444">5</div><div id="line444"></div><div id="denom444">6</div></div>'),$("#frac444").css("position","absolute").css("top","141px").css("left","566px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line444").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom444").css("text-align","center").css("height","16px"),$("#denom444").css("text-align","center").css("height","16px"),$("#frac444").css("opacity",0),$("#frac444").delay(d+8e3).animate({opacity:1},1e3,"easeInOutQuad",function(){Main.animationFinished(1e3)}),$(Animation.container).append('<div id="frac555"><div id="nom555">1</div><div id="line555"></div><div id="denom555">3</div></div>'),$("#frac555").css("position","absolute").css("top","106px").css("left","496px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line555").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom555").css("text-align","center").css("height","16px"),$("#denom555").css("text-align","center").css("height","16px"),$("#frac555").css("opacity",0),$("#frac555").delay(d+1e3).animate({opacity:1},1e3,"easeInOutQuad").delay(2e3).animate({opacity:0},1e3,"easeInOutQuad"),$(Animation.container).append('<div id="frac5555"><div id="nom5555">2</div><div id="line5555"></div><div id="denom5555">6</div></div>'),$("#frac5555").css("position","absolute").css("top","106px").css("left","496px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px").css("color","red"),$("#line5555").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom5555").css("text-align","center").css("height","16px"),$("#denom5555").css("text-align","center").css("height","16px"),$("#frac5555").css("opacity",0),$("#frac5555").delay(d+4e3).animate({opacity:1},1e3,"easeInOutQuad").delay(2e3).animate({opacity:0},1e3,"easeInOutQuad"),$(Animation.container).append('<div id="frac55555"><div id="nom55555">2</div><div id="line55555"></div><div id="denom55555">6</div></div>'),$("#frac55555").css("position","absolute").css("top","106px").css("left","496px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line55555").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom55555").css("text-align","center").css("height","16px"),$("#denom55555").css("text-align","center").css("height","16px"),$("#frac55555").css("opacity",0),$("#frac55555").delay(d+7e3).animate({opacity:1},0,"easeInOutQuad"),$(Animation.container).append('<div id="my1"><p id="myNom1">1</p><div id="myLine1"></div><p id="myDenom1">2</p></div>'),$("#my1").css("position","absolute").css("top","106px").css("left","26px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("font-weight","bold").css("line-height","16px"),$("#myLine1").css("height","1px").css("border-top","1px solid").css("padding",0),$("#myNom1").css("text-align","center").css("height","16px"),$("#myDenom1").css("text-align","center").css("height","16px"),$("#my1").css("opacity",0),$("#my1").delay(n).animate({opacity:1},1e3,"easeInOutQuad"),$("#my1").delay(u-n-1e3).animate({opacity:0},1e3,"easeInOutQuad"),$(Animation.container).append('<div id="my11"><p id="myNom11">3</p><div id="myLine11"></div><p id="myDenom11">6</p></div>'),$("#my11").css("position","absolute").css("top","106px").css("left","26px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("font-weight","bold").css("line-height","16px"),$("#myLine11").css("height","1px").css("border-top","1px solid").css("padding",0),$("#myNom11").css("text-align","center").css("height","16px"),$("#myDenom11").css("text-align","center").css("height","16px"),$("#my11").css("opacity",0),$("#my11").delay(u).animate({opacity:1},1e3,"easeInOutQuad"),$(Animation.container).append('<span id="plss" style="opacity:0;font-weight:bold;position:absolute;top:115px;left:50px;">+</span><span id="eqqq" style="opacity:0;font-weight:bold;position:absolute;top:116px;left:88px;">=</span><span id="eqqq2" style="opacity:0;position:absolute;font-weight:bold;top:116px;left:140px;">=</span>'),$("#plss").delay(n).animate({opacity:1},1e3,"easeInOutQuad"),$("#eqqq").delay(n).animate({opacity:1},1e3,"easeInOutQuad"),$("#eqqq2").delay(l).animate({opacity:1},1e3,"easeInOutQuad"),$(Animation.container).append('<div id="my2"><p id="myNom2">1</p><div id="myLine2"></div><p id="myDenom2">3</p></div>'),$("#my2").css("position","absolute").css("top","106px").css("left","66px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("font-weight","bold").css("line-height","16px"),$("#myLine2").css("height","1px").css("border-top","1px solid").css("padding",0),$("#myNom2").css("text-align","center").css("height","16px"),$("#myDenom2").css("text-align","center").css("height","16px"),$("#my2").css("opacity",0),$("#my2").delay(n).animate({opacity:1},1e3,"easeInOutQuad"),$("#my2").delay(u-n-1e3).animate({opacity:0},1e3,"easeInOutQuad"),$(Animation.container).append('<div id="my22"><p id="myNom22">2</p><div id="myLine22"></div><p id="myDenom22">6</p></div>'),$("#my22").css("position","absolute").css("top","106px").css("left","66px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("font-weight","bold").css("line-height","16px"),$("#myLine22").css("height","1px").css("border-top","1px solid").css("padding",0),$("#myNom22").css("text-align","center").css("height","16px"),$("#myDenom22").css("text-align","center").css("height","16px"),$("#my22").css("opacity",0),$("#my22").delay(u).animate({opacity:1},1e3,"easeInOutQuad"),$(Animation.container).append('<div id="my3"><p id="myNom3">3+2</p><div id="myLine3"></div><p id="myDenom3">6</p></div>'),$("#my3").css("position","absolute").css("top","106px").css("left","104px").css("width","28px").css("height","33px").css("padding",0).css("margin",0).css("font-weight","bold").css("line-height","16px"),$("#myLine3").css("height","1px").css("border-top","1px solid").css("padding",0),$("#myNom3").css("text-align","center").css("height","16px"),$("#myDenom3").css("text-align","center").css("height","16px"),$("#my3").css("opacity",0),$("#my3").delay(l).animate({opacity:1},1e3,"easeInOutQuad"),$(Animation.container).append('<div id="my4"><p id="myNom4">5</p><div id="myLine4"></div><p id="myDenom4">6</p></div>'),$("#my4").css("position","absolute").css("top","106px").css("left","154px").css("width","16px").css("height","16px").css("padding",0).css("margin",0).css("font-weight","bold").css("line-height","16px"),$("#myLine4").css("height","1px").css("border-top","1px solid").css("padding",0),$("#myNom4").css("text-align","center").css("height","16px"),$("#myDenom4").css("text-align","center").css("height","16px"),$("#my4").css("opacity",0),$("#my4").delay(l+3500).animate({opacity:1},1e3,"easeInOutQuad"),$(Animation.container).append('<span id="aa1" style="font-weight:bold;opacity:0;position:absolute;top:140px;left:25px;">(3)</span><span id="aa2" style="font-weight:bold;opacity:0;position:absolute;top:140px;left:65px;">(2)</span>'),$("#aa1").delay(o-500).animate({opacity:1},1e3,"easeInOutQuad"),$("#aa1").delay(u-o-500).animate({opacity:0},1e3,"easeInOutQuad"),$("#aa2").delay(o-500).animate({opacity:1},1e3,"easeInOutQuad"),$("#aa2").delay(u-o-500).animate({opacity:0},1e3,"easeInOutQuad"),g.animate({style:{opacity:1},duration:1e3,delay:r,animationType:"easeInOutQuad"}),y.animate({style:{opacity:1},duration:1e3,delay:r,animationType:"easeInOutQuad"}),E.animate({style:{opacity:1},duration:1e3,delay:u,animationType:"easeInOutQuad"}),x.animate({style:{opacity:1},duration:1e3,delay:u,animationType:"easeInOutQuad"}),N.animate({style:{opacity:1},duration:1e3,delay:a,animationType:"easeInOutQuad"}),w.animate({style:{opacity:1},duration:1e3,delay:a,animationType:"easeInOutQuad"}),b.animate({style:{opacity:1},duration:1e3,delay:f,animationType:"easeInOutQuad"}),v.animate({style:{opacity:2,position:new Point(618,35.5)},duration:3e3,delay:l,animationType:"easeInOutQuad"}),m.animate({style:{opacity:2,position:new Point(680.5,35.5)},duration:3e3,delay:l,animationType:"easeInOutQuad"}),C.animate({style:{opacity:1},duration:1e3,delay:c,animationType:"easeInOutQuad"}),A.animate({style:{opacity:1},duration:1e3,delay:h,animationType:"easeInOutQuad"}),_.animate({style:{opacity:1},duration:1e3,delay:p,animationType:"easeInOutQuad"}),P.animate({style:{opacity:1},duration:1e3,delay:d+1e3,animationType:"easeInOutQuad"})}};