function __Styles(){rectFillColor="#ffdead",questionDivStyle={position:"absolute",top:"40px",left:"120px",width:"300px",height:"60px",fontSize:"24px"},answerDivStyle={position:"absolute",top:"130px",left:"105px",width:"400px",height:"80px",fontSize:"18px",color:"#069"}}var Animation={images:[],init:function(e){Animation.container=e;var t=0,n=t+1500,r=n+1500,s=r+2e3,o=s+2e3,u=o+2e3,a=u+2e3,f=a+1e3,l=f+2e3,c=l+5e3,h=c+1e3,p=h+2e3,d=p+2e3,v=d+2e3,m=new Path.SegmentedRectangle(140.5,10.5,75,50,1,1,1,rectFillColor);m.strokeColor=rectFillColor,m.opacity=0;var g=new Path.SegmentedRectangle(360.5,10.5,50,50,1,1,1,rectFillColor);g.strokeColor=rectFillColor,g.opacity=0;var y=new Path.SegmentedRectangle(140.5,10.5,150,50,2,1,1,rectFillColor);y.opacity=0;var b=new Path.SegmentedRectangle(360.5,10.5,150,50,3,1,1,rectFillColor);b.opacity=0;var w=new Path.SegmentedRectangle(580.5,10.5,150,50,6,1,0,rectFillColor);w.opacity=0;var E=new Path.OneSidedArrow(new Point(525,35),new Point(565,35),10,30);E.opacity=0;var S=new Group;for(i=0;i<5;i++){var x=new Path.Line(new Point(165.5+i*25,10.5),new Point(165.5+i*25,60.5));x.strokeColor="black",x.dashArray=[3,2],S.addChild(x)}S.opacity=0;var T=new Group;for(i=0;i<5;i++){var N=new Path.Line(new Point(385.5+i*25,10.5),new Point(385.5+i*25,60.5));N.strokeColor="black",N.dashArray=[3,2],T.addChild(N)}T.opacity=0;var C=new PointText(new Point(326.5,48.5));C.justification="center",C.fillColor="black",C.fontSize=26,C.content="+",C.opacity=0;var k=new Group,L=new Path.OneSidedArrow(new Point(170,164),new Point(670,164),10,30),A=new Path.OneSidedArrow(new Point(670,164),new Point(671,164),10,30);L.rotate(180),k.addChild(L),k.addChild(A),k.opacity=0;var O=new Group,M=new Path.Circle(new Point(210.5,164.5),5);M.strokeColor="black",M.fillColor="black";var _=new Path.Circle(new Point(630.5,164.5),5);_.strokeColor="black",_.fillColor="black",O.addChild(M),O.addChild(_),O.opacity=0;var D=new Group;for(i=0;i<5;i++){var P=new Path.Circle(new Point(280.5+70*i,164.5),3);P.strokeColor="black",P.fillColor="black",P.opacity=0,D.addChild(P)}var H=new Group,B=new Path.Arc(new Point(434,140),new Point(490,130),new Point(546,140));B.strokeColor="black";var j=new Path.Line(new Point(546,140),new Point(542,132));j.strokeColor="black";var F=new Path.Line(new Point(546,140),new Point(536,142));F.strokeColor="black",H.addChild(B),H.addChild(j),H.addChild(F),H.opacity=0,$(Animation.container).append('<div id="frac22"><p id="nom22">1</p><div id="line22"></div><p id="denom22">2</p></div>'),$("#frac22").css("position","absolute").css("top","83px").css("left","222px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line22").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom22").css("text-align","center").css("height","16px"),$("#denom22").css("text-align","center").css("height","16px"),$("#frac22").css("opacity",0),$("#frac22").delay(s).animate({opacity:1},1e3).delay(1e3).animate({opacity:0},1e3),$(Animation.container).append('<div id="frac33"><div id="nom33">1 x 3</div><div id="line33"></div><div id="denom33">2 x 3</div></div>'),$("#frac33").css("position","absolute").css("top","83px").css("left","213px").css("width","36px").css("height","33px").css("padding",0).css("margin",0).css("color","red").css("line-height","16px"),$("#line33").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom33").css("text-align","center").css("height","16px"),$("#denom33").css("text-align","center").css("height","16px"),$("#frac33").css("opacity",0),$("#frac33").delay(o).animate({opacity:1},1e3).delay(1e3).animate({opacity:0},1e3),$(Animation.container).append('<div id="frac44"><div id="nom44">3</div><div id="line44"></div><div id="denom44">6</div></div>'),$("#frac44").css("position","absolute").css("top","83px").css("left","222px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line44").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom44").css("text-align","center").css("height","16px"),$("#denom44").css("text-align","center").css("height","16px"),$("#frac44").css("opacity",0),$("#frac44").delay(u).animate({opacity:1},1e3),$(Animation.container).append('<div id="frac55"><div id="nom55">1</div><div id="line55"></div><div id="denom55">3</div></div>'),$("#frac55").css("position","absolute").css("top","83px").css("left","442px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line55").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom55").css("text-align","center").css("height","16px"),$("#denom55").css("text-align","center").css("height","16px"),$("#frac55").css("opacity",0),$("#frac55").delay(s).animate({opacity:1},1e3).delay(1e3).animate({opacity:0},1e3),$(Animation.container).append('<div id="frac66"><div id="nom66">1 x 2</div><div id="line66"></div><div id="denom66">3 x 2</div></div>'),$("#frac66").css("position","absolute").css("top","83px").css("left","433px").css("width","36px").css("height","33px").css("padding",0).css("margin",0).css("color","red").css("line-height","16px"),$("#line66").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom66").css("text-align","center").css("height","16px"),$("#denom66").css("text-align","center").css("height","16px"),$("#frac66").css("opacity",0),$("#frac66").delay(o).animate({opacity:1},1e3).delay(1e3).animate({opacity:0},1e3),$(Animation.container).append('<div id="frac77"><div id="nom77">2</div><div id="line77"></div><div id="denom77">6</div></div>'),$("#frac77").css("position","absolute").css("top","83px").css("left","442px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line77").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom77").css("text-align","center").css("height","16px"),$("#denom77").css("text-align","center").css("height","16px"),$("#frac77").css("opacity",0),$("#frac77").delay(u).animate({opacity:1},1e3),$(Animation.container).append('<div id="frac88"><div id="nom88">3</div><div id="line88"></div><div id="denom88">6</div></div><div id="pls">+</div><div id="frac888"><div id="nom888">2</div><div id="line888"></div><div id="denom888">6</div></div><div id="eqq">=</div><div id="frac8888"><div id="nom8888">5</div><div id="line8888"></div><div id="denom8888">6</div></div>'),$("#frac88").css("position","absolute").css("top","83px").css("left","632px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line88").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom88").css("text-align","center").css("height","16px"),$("#denom88").css("text-align","center").css("height","16px"),$("#pls").css({position:"absolute",left:"652px",top:"92px"}),$("#frac888").css("position","absolute").css("top","83px").css("left","664px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line888").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom888").css("text-align","center").css("height","16px"),$("#denom888").css("text-align","center").css("height","16px"),$("#eqq").css({position:"absolute",left:"684px",top:"92px"}),$("#frac8888").css("position","absolute").css("top","83px").css("left","696px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line8888").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom8888").css("text-align","center").css("height","16px"),$("#denom8888").css("text-align","center").css("height","16px"),$("#frac88").css("opacity",0).delay(l+1e3).animate({opacity:1},1e3),$("#pls").css("opacity",0).delay(l+1e3).animate({opacity:1},1e3),$("#frac888").css("opacity",0).delay(l+1e3).animate({opacity:1},1e3),$("#eqq").css("opacity",0).delay(l+3500).animate({opacity:1},1e3),$("#frac8888").css("opacity",0).delay(l+3500).animate({opacity:1},1e3),$(Animation.container).append('<p id="zerro">0</p>'),$("#zerro").css({position:"absolute",left:"219px",top:"150px",fontSize:24}),$("#zerro").css("opacity",0).delay(h+1e3).animate({opacity:1},1e3),$(Animation.container).append('<p id="onne">1</p>'),$("#onne").css({position:"absolute",left:"637px",top:"150px",fontSize:24}),$("#onne").css("opacity",0).delay(h+1e3).animate({opacity:1},1e3),$(Animation.container).append('<div id="frac222"><div id="nom222">1</div><div id="line222"></div><div id="denom222">2</div></div>'),$("#frac222").css("position","absolute").css("top","141px").css("left","426px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line222").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom222").css("text-align","center").css("height","16px"),$("#denom222").css("text-align","center").css("height","16px"),$("#frac222").css("opacity",0),$("#frac222").delay(p).animate({opacity:1},1e3,"easeInOutQuad").delay(1e3).animate({opacity:0},1e3,"easeInOutQuad"),$(e).append('<div id="frac333"><div id="nom333">3</div><div id="line333"></div><div id="denom333">6</div></div>'),$("#frac333").css("position","absolute").css("top","141px").css("left","426px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("color","red").css("line-height","16px"),$("#line333").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom333").css("text-align","center").css("height","16px"),$("#denom333").css("text-align","center").css("height","16px"),$("#frac333").css("opacity",0),$("#frac333").delay(d).animate({opacity:1},1e3,"easeInOutQuad").delay(2e3).animate({opacity:0},1e3,"easeInOutQuad"),$(Animation.container).append('<div id="frac3333"><div id="nom3333">3</div><div id="line3333"></div><div id="denom3333">6</div></div>'),$("#frac3333").css("position","absolute").css("top","141px").css("left","426px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line3333").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom3333").css("text-align","center").css("height","16px"),$("#denom3333").css("text-align","center").css("height","16px"),$("#frac3333").css("opacity",0),$("#frac3333").delay(d+3e3).animate({opacity:1},0,"easeInOutQuad"),$(e).append('<div id="frac444"><div id="nom444">5</div><div id="line444"></div><div id="denom444">6</div></div>'),$("#frac444").css("position","absolute").css("top","141px").css("left","566px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line444").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom444").css("text-align","center").css("height","16px"),$("#denom444").css("text-align","center").css("height","16px"),$("#frac444").css("opacity",0),$("#frac444").delay(v+8e3).animate({opacity:1},1e3,"easeInOutQuad",function(){Main.animationFinished(1e3)}),$(Animation.container).append('<div id="frac555"><div id="nom555">1</div><div id="line555"></div><div id="denom555">3</div></div>'),$("#frac555").css("position","absolute").css("top","106px").css("left","496px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line555").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom555").css("text-align","center").css("height","16px"),$("#denom555").css("text-align","center").css("height","16px"),$("#frac555").css("opacity",0),$("#frac555").delay(v+1e3).animate({opacity:1},1e3,"easeInOutQuad").delay(2e3).animate({opacity:0},1e3,"easeInOutQuad"),$(Animation.container).append('<div id="frac5555"><div id="nom5555">2</div><div id="line5555"></div><div id="denom5555">6</div></div>'),$("#frac5555").css("position","absolute").css("top","106px").css("left","496px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px").css("color","red"),$("#line5555").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom5555").css("text-align","center").css("height","16px"),$("#denom5555").css("text-align","center").css("height","16px"),$("#frac5555").css("opacity",0),$("#frac5555").delay(v+4e3).animate({opacity:1},1e3,"easeInOutQuad").delay(2e3).animate({opacity:0},1e3,"easeInOutQuad"),$(Animation.container).append('<div id="frac55555"><div id="nom55555">2</div><div id="line55555"></div><div id="denom55555">6</div></div>'),$("#frac55555").css("position","absolute").css("top","106px").css("left","496px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("line-height","16px"),$("#line55555").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom55555").css("text-align","center").css("height","16px"),$("#denom55555").css("text-align","center").css("height","16px"),$("#frac55555").css("opacity",0),$("#frac55555").delay(v+7e3).animate({opacity:1},0,"easeInOutQuad"),$(Animation.container).append('<div id="my1"><p id="myNom1">1</p><div id="myLine1"></div><p id="myDenom1">2</p></div>'),$("#my1").css("position","absolute").css("top","106px").css("left","26px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("font-weight","bold").css("line-height","16px"),$("#myLine1").css("height","1px").css("border-top","1px solid").css("padding",0),$("#myNom1").css("text-align","center").css("height","16px"),$("#myDenom1").css("text-align","center").css("height","16px"),$("#my1").css("opacity",0),$("#my1").delay(n).animate({opacity:1},1e3,"easeInOutQuad"),$("#my1").delay(u-n-1e3).animate({opacity:0},1e3,"easeInOutQuad"),$(Animation.container).append('<div id="my11"><p id="myNom11">3</p><div id="myLine11"></div><p id="myDenom11">6</p></div>'),$("#my11").css("position","absolute").css("top","106px").css("left","26px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("font-weight","bold").css("line-height","16px"),$("#myLine11").css("height","1px").css("border-top","1px solid").css("padding",0),$("#myNom11").css("text-align","center").css("height","16px"),$("#myDenom11").css("text-align","center").css("height","16px"),$("#my11").css("opacity",0),$("#my11").delay(u).animate({opacity:1},1e3,"easeInOutQuad"),$(Animation.container).append('<span id="plss" style="opacity:0;font-weight:bold;position:absolute;top:115px;left:50px;">+</span><span id="eqqq" style="opacity:0;font-weight:bold;position:absolute;top:116px;left:88px;">=</span><span id="eqqq2" style="opacity:0;position:absolute;font-weight:bold;top:116px;left:140px;">=</span>'),$("#plss").delay(n).animate({opacity:1},1e3,"easeInOutQuad"),$("#eqqq").delay(n).animate({opacity:1},1e3,"easeInOutQuad"),$("#eqqq2").delay(l).animate({opacity:1},1e3,"easeInOutQuad"),$(Animation.container).append('<div id="my2"><p id="myNom2">1</p><div id="myLine2"></div><p id="myDenom2">3</p></div>'),$("#my2").css("position","absolute").css("top","106px").css("left","66px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("font-weight","bold").css("line-height","16px"),$("#myLine2").css("height","1px").css("border-top","1px solid").css("padding",0),$("#myNom2").css("text-align","center").css("height","16px"),$("#myDenom2").css("text-align","center").css("height","16px"),$("#my2").css("opacity",0),$("#my2").delay(n).animate({opacity:1},1e3,"easeInOutQuad"),$("#my2").delay(u-n-1e3).animate({opacity:0},1e3,"easeInOutQuad"),$(Animation.container).append('<div id="my22"><p id="myNom22">2</p><div id="myLine22"></div><p id="myDenom22">6</p></div>'),$("#my22").css("position","absolute").css("top","106px").css("left","66px").css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("font-weight","bold").css("line-height","16px"),$("#myLine22").css("height","1px").css("border-top","1px solid").css("padding",0),$("#myNom22").css("text-align","center").css("height","16px"),$("#myDenom22").css("text-align","center").css("height","16px"),$("#my22").css("opacity",0),$("#my22").delay(u).animate({opacity:1},1e3,"easeInOutQuad"),$(Animation.container).append('<div id="my3"><p id="myNom3">3+2</p><div id="myLine3"></div><p id="myDenom3">6</p></div>'),$("#my3").css("position","absolute").css("top","106px").css("left","104px").css("width","28px").css("height","33px").css("padding",0).css("margin",0).css("font-weight","bold").css("line-height","16px"),$("#myLine3").css("height","1px").css("border-top","1px solid").css("padding",0),$("#myNom3").css("text-align","center").css("height","16px"),$("#myDenom3").css("text-align","center").css("height","16px"),$("#my3").css("opacity",0),$("#my3").delay(l).animate({opacity:1},1e3,"easeInOutQuad"),$(Animation.container).append('<div id="my4"><p id="myNom4">5</p><div id="myLine4"></div><p id="myDenom4">6</p></div>'),$("#my4").css("position","absolute").css("top","106px").css("left","154px").css("width","16px").css("height","16px").css("padding",0).css("margin",0).css("font-weight","bold").css("line-height","16px"),$("#myLine4").css("height","1px").css("border-top","1px solid").css("padding",0),$("#myNom4").css("text-align","center").css("height","16px"),$("#myDenom4").css("text-align","center").css("height","16px"),$("#my4").css("opacity",0),$("#my4").delay(l+3500).animate({opacity:1},1e3,"easeInOutQuad"),$(Animation.container).append('<span id="aa1" style="font-weight:bold;opacity:0;position:absolute;top:140px;left:25px;">(3)</span><span id="aa2" style="font-weight:bold;opacity:0;position:absolute;top:140px;left:65px;">(2)</span>'),$("#aa1").delay(o-500).animate({opacity:1},1e3,"easeInOutQuad"),$("#aa1").delay(u-o-500).animate({opacity:0},1e3,"easeInOutQuad"),$("#aa2").delay(o-500).animate({opacity:1},1e3,"easeInOutQuad"),$("#aa2").delay(u-o-500).animate({opacity:0},1e3,"easeInOutQuad"),y.animate({style:{opacity:1},duration:1e3,delay:r,animationType:"easeInOutQuad"}),b.animate({style:{opacity:1},duration:1e3,delay:r,animationType:"easeInOutQuad"}),S.animate({style:{opacity:1},duration:1e3,delay:u,animationType:"easeInOutQuad"}),T.animate({style:{opacity:1},duration:1e3,delay:u,animationType:"easeInOutQuad"}),C.animate({style:{opacity:1},duration:1e3,delay:a,animationType:"easeInOutQuad"}),E.animate({style:{opacity:1},duration:1e3,delay:a,animationType:"easeInOutQuad"}),w.animate({style:{opacity:1},duration:1e3,delay:f,animationType:"easeInOutQuad"}),m.animate({style:{opacity:2,position:new Point(618,35.5)},duration:3e3,delay:l,animationType:"easeInOutQuad"}),g.animate({style:{opacity:2,position:new Point(680.5,35.5)},duration:3e3,delay:l,animationType:"easeInOutQuad"}),k.animate({style:{opacity:1},duration:1e3,delay:c,animationType:"easeInOutQuad"}),O.animate({style:{opacity:1},duration:1e3,delay:h,animationType:"easeInOutQuad"}),D.children[2].animate({style:{opacity:1},duration:1e3,delay:p,animationType:"easeInOutQuad"}),D.children[0].animate({style:{opacity:1},duration:1e3,delay:d,animationType:"easeInOutQuad"}),D.children[1].animate({style:{opacity:1},duration:1e3,delay:d,animationType:"easeInOutQuad"}),D.children[3].animate({style:{opacity:1},duration:1e3,delay:d,animationType:"easeInOutQuad"}),D.children[4].animate({style:{opacity:1},duration:1e3,delay:d,animationType:"easeInOutQuad"}),H.animate({style:{opacity:1},duration:1e3,delay:v+1e3,animationType:"easeInOutQuad"})}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yanda verilen kesirlerin toplamlarını bulunuz ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendStatus({bottom:"30px",right:"150px",width:"370px",height:"26px",textAlign:"center"}),Interaction.appendButton({bottom:"30px",right:"30px"}),Interaction.appendInput({position:"absolute",top:"-9px",left:"202px",height:"32px",width:"42px",fontSize:"22px"}),Interaction.appendInput({position:"absolute",top:"35px",left:"202px",height:"32px",width:"42px",fontSize:"22px"}),Interaction.questionDiv=Util.dom({parent:Interaction.container,tag:"div",css:questionDivStyle,html:'<div id="firstFracDiv" style="position:absolute;top:0px;left:0px;width:65px;height:60px;"></div><span id="intPlus" style="position:absolute;top:18px;left:75px;">+</span></div><div id="secondFracDiv" style="position:absolute;top:0px;left:96px;width:65px;height:60px;"></div><span id="intEq" style="position:absolute;top:18px;left:170px;">=</span><div id="answerLine" style="position:absolute;top:29px;left:200px;width:48px;height:1px;border-top:2px solid;padding:0"></div>'}),$(Interaction.inputs[0]).attr("max-length",3),$(Interaction.inputs[1]).attr("max-length",3),$(Interaction.questionDiv).append(Interaction.inputs[0]),$(Interaction.questionDiv).append(Interaction.inputs[1]),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.answerDiv&&$(Interaction.answerDiv).remove(),$("#firstFracDiv").html(""),$("#secondFracDiv").html(""),$(Interaction.inputs[0]).css("color","black"),$(Interaction.inputs[1]).css("color","black");var t=Util.randomDigit(0,5),n=Util.randomDigit(0,5),r,i,s,o,u,a;t==0&&(u=Util.randomInteger(1,4)),n==0&&(a=Util.randomInteger(1,4)),s=Util.randomInteger(2,7);do o=Util.randomInteger(2,7,[s]);while(Util.gcd(s,o)!=1);do r=Util.randomInteger(1,10);while(r==s||r%s==0);do i=Util.randomInteger(1,10);while(i==o||i%o==0);t==0&&n==0?(Interaction.firstFrac=new RationalNumber({factor:1,integer:u,nominator:r,denominator:s}),Interaction.secondFrac=new RationalNumber({factor:1,integer:a,nominator:i,denominator:o})):t==0&&n!=0?(Interaction.firstFrac=new RationalNumber({factor:1,integer:u,nominator:r,denominator:s}),Interaction.secondFrac=new RationalNumber({factor:1,nominator:i,denominator:o})):t!=0&&n==0?(Interaction.firstFrac=new RationalNumber({factor:1,nominator:r,denominator:s}),Interaction.secondFrac=new RationalNumber({factor:1,integer:a,nominator:i,denominator:o})):(Interaction.firstFrac=new RationalNumber({factor:1,nominator:r,denominator:s}),Interaction.secondFrac=new RationalNumber({factor:1,nominator:i,denominator:o})),Interaction.answer=Interaction.firstFrac.addition(Interaction.secondFrac),Interaction.answer.convertToCompoundForm(),Interaction.firstH=Interaction.firstFrac.toHTML(24),$(Interaction.firstH).css("right","0px"),Interaction.secondH=Interaction.secondFrac.toHTML(24),$(Interaction.secondH).css("left","0px"),Interaction.secondFrac.integer?($("#intEq").css("left","170px"),$("#answerLine").css("left","196px"),$(Interaction.inputs[0]).css("left","198px"),$(Interaction.inputs[1]).css("left","198px"),$(Interaction.questionDiv).css("left","140px")):($("#intEq").css("left","140px"),$("#answerLine").css("left","164px"),$(Interaction.inputs[0]).css("left","166px"),$(Interaction.inputs[1]).css("left","166px"),$(Interaction.questionDiv).css("left","150px")),$("#firstFracDiv").append(Interaction.firstH),$("#secondFracDiv").append(Interaction.secondH)},preCheck:function(){},isAnswerCorrect:function(e){return e[0]!=0&&e[1]!=0?e[0]*Interaction.answer.denominator==e[1]*Interaction.answer.nominator?!0:!1:!1},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir!",!1),$(Interaction.inputs[0]).css("color","red"),$(Interaction.inputs[1]).css("color","red"),Interaction.showAnswer()},showAnswer:function(){Interaction.answerDiv=Util.dom({parent:Interaction.container,tag:"div",css:answerDivStyle,html:'<div id="sf1" style="position:absolute;top:20px;left:20px;width:40px;height:42px;padding:0;margin:0;line-height:20px;"><div id="sint1" style="width:20px;height:42px;text-align:center;float:left;line-height:42px;"></div><div id="snom1" style="text-align:center;width:20px;height:20px;float:left;"></div><div id="sline1" style="height:1px;width:20px;border-top:2px solid;padding:0;float:left;"></div><div id="sdenom1" style="text-align:center;width:20px;height:20px;float:left;"></div></div><span id="fact1" style="position:absolute;top:64px;left:38px;"></span><span id="t1" style="position:absolute;top:32px;left:66px;">+</span><div id="sf2" style="position:absolute;top:20px;left:72px;width:40px;height:42px;padding:0;margin:0;line-height:20px;"><div id="sint2" style="width:20px;height:42px;text-align:center;float:left;line-height:42px;"></div><div id="snom2" style="text-align:center;width:20px;height:20px;float:left;"></div><div id="sline2" style="height:1px;width:20px;border-top:2px solid;padding:0;float:left;"></div><div id="sdenom2" style="text-align:center;width:20px;height:20px;float:left;"></div></div><span id="fact2" style="position:absolute;top:64px;left:92px;"></span><span id="ee1" style="position:absolute;top:33px;left:118px;">=</span><div id="sf3" style="position:absolute;top:20px;left:134px;width:120px;height:42px;padding:0;margin:0;line-height:20px;"><div id="snom3" style="text-align:center;width:120px;height:20px;float:left;"></div><div id="sline3" style="height:1px;width:120px;border-top:2px solid;padding:0;float:left;"></div><div id="sdenom3" style="text-align:center;width:120px;height:20px;float:left;"></div></div><span id="ee2" style="position:absolute;top:33px;left:260px;">=</span><div id="ff" style="position:absolute;top:20px;left:276px;width:30px;height:42px;padding:0;margin:0;line-height:20px;"><div id="fnom" style="text-align:center;width:30px;height:20px;float:left;"></div><div id="fline" style="height:1px;width:30px;border-top:2px solid;padding:0;float:left;"></div><div id="fdenom" style="text-align:center;width:30px;height:20px;float:left;"></div></div>'}),Interaction.secondFrac.integer?($("#sf1").css("left","20px"),$("#fact1").css("left","38px"),$("#t1").css("left","66px")):($("#sf1").css("left","30px"),$("#fact1").css("left","48px"),$("#t1").css("left","76px"));var e="";if(Interaction.firstFrac.integer){$("#sint1").html(Interaction.firstFrac.integer);var t=Interaction.firstFrac.integer*Interaction.firstFrac.denominator;t+=Interaction.firstFrac.nominator,e+="("+t+"x"+Interaction.secondFrac.denominator+") + "}else e+="("+Interaction.firstFrac.nominator+"x"+Interaction.secondFrac.denominator+") + ";if(Interaction.secondFrac.integer){$("#sint2").html(Interaction.secondFrac.integer);var n=Interaction.secondFrac.integer*Interaction.secondFrac.denominator;n+=Interaction.secondFrac.nominator,e+="("+n+"x"+Interaction.firstFrac.denominator+")"}else e+="("+Interaction.secondFrac.nominator+"x"+Interaction.firstFrac.denominator+")";$("#snom1").html(Interaction.firstFrac.nominator),$("#snom2").html(Interaction.secondFrac.nominator),$("#sdenom1").html(Interaction.firstFrac.denominator),$("#sdenom2").html(Interaction.secondFrac.denominator),$("#fact1").html("("+Interaction.secondFrac.denominator+")"),$("#fact2").html("("+Interaction.firstFrac.denominator+")"),$("#snom3").html(e),$("#sdenom3").html(Interaction.answer.denominator),$("#fnom").html(Interaction.answer.nominator),$("#fdenom").html(Interaction.answer.denominator)}},RationalNumber=Class.extend({init:function(e){e.integer&&(this.integer=e.integer),this.nominator=e.nominator,this.denominator=e.denominator,e.factor?this.factor=e.factor:this.factor=1,this.determineType(),this.determineDefinition(),this.determineValue()},simplification:function(){var e=Util.gcd(this.nominator,this.denominator);this.nominator=this.nominator/e,this.denominator=this.denominator/e,this.determineDefinition(),this.determineValue()},denomEqualization:function(e){var t=Util.lcm(this.denominator,e.denominator);this.nominator=this.nominator*(t/this.denominator),this.denominator=t,e.nominator=e.nominator*(t/e.denominator),e.denominator=t,this.determineDefinition(),this.determineValue(),e.determineDefinition(),e.determineValue()},addition:function(e){var t,n,r,i,s,o,u;s=0,this.denomEqualization(e),this.integer?(n=this.integer*this.denominator+this.nominator,s=1):n=this.nominator,e.integer?(r=e.integer*e.denominator+e.nominator,s=1):r=e.nominator,o=this.denominator,t=this.factor*n+e.factor*r,s&&(u=Math.floor(Math.abs(t/o)),t%=o,o=o),t<0?(i=-1,t=-1*t):(i=1,t=t);if(s)var a=new RationalNumber({factor:i,integer:u,nominator:t,denominator:o});else var a=new RationalNumber({factor:i,nominator:t,denominator:o});return this.simplification(),e.simplification(),a.simplification(),a},substraction:function(e){var t;return e.additionInvert(),t=this.addition(e),e.additionInvert(),t.simplification(),t},multiplication:function(e){var t,n,r;this.convertToCompoundForm(),e.convertToCompoundForm(),t=this.factor*e.factor,n=this.nominator*e.nominator,r=this.denominator*e.denominator;var i=new RationalNumber({factor:t,nominator:n,denominator:r});return this.convertToComplexForm(),e.convertToComplexForm(),i.simplification(),i},division:function(e){var t;return e.multiplicationInvert(),t=this.multiplication(e),e.multiplicationInvert(),t.simplification(),t},convertToComplexForm:function(){this.integer||(this.integer=Math.floor(this.nominator/this.denominator),this.nominator=this.nominator%this.denominator),this.determineType(),this.determineDefinition(),this.determineValue()},convertToCompoundForm:function(){this.integer&&(this.nominator=this.integer*this.denominator+this.nominator),this.integer=undefined,this.determineType(),this.determineDefinition(),this.determineValue()},additionInvert:function(){this.factor&&(this.factor==1?this.factor=-1:this.factor=1),this.determineType(),this.determineDefinition(),this.determineValue()},multiplicationInvert:function(){this.type==3&&this.convertToCompoundForm();var e=this.nominator;this.nominator=this.denominator,this.denominator=e,this.determineType(),this.determineDefinition(),this.determineValue()},toHTML:function(e){var t=Date.now(),n=e+4,r=2*n+1,i=r+6,s=Math.round(i*.56),o=i-s,u=s,a=2*n,f=""+e+"px",l=""+n+"px",c=""+r+"px",h=""+i+"px",p=""+s+"px",d=""+o+"px",v=""+u+"px",m=""+a+"px",g={position:"absolute",padding:0,margin:0,width:h,height:c,fontSize:f,lineHeight:l},y={position:"absolute",padding:0,margin:0,width:p,fontSize:f,lineHeight:l},b={width:d,height:c,textAlign:"right",paddingRight:"4px",boxSizing:"border-box","float":"left",lineHeight:m},w={width:p,height:l,textAlign:"center","float":"left",lineHeight:l},E={width:v,height:"1px",padding:0,borderTop:"2px solid","float":"left"},S={width:p,height:l,textAlign:"center","float":"left",lineHeight:l};if(this.integer){var x=Util.dom({tag:"div",css:g,html:'<div class="frac"><div class="int"></div><div class="nom"></div><div class="line"></div><div class="denom"></div></div>'}),T;this.integer?T=this.factor*this.integer:this.factor==-1?T="-":T="",$(".int",x).html(T),$(".int",x).css(b),$(".nom",x).html(this.nominator),$(".nom",x).css(w),$(".denom",x).html(this.denominator),$(".denom",x).css(S),$(".line",x).css(E)}else{var x=Util.dom({tag:"div",css:y,html:'<div class="frac"><div class="nom"></div><div class="line"></div><div class="denom"></div></div>'});$(".nom",x).html(this.nominator),$(".nom",x).css(w),$(".denom",x).html(this.denominator),$(".denom",x).css(S),$(".line",x).css(E)}return x},determineType:function(){this.factor==-1?this.type=RationalNumber.RATIONAL:this.integer?this.type=RationalNumber.COMPLEX:this.nominator<this.denominator?this.type=RationalNumber.SIMPLE:this.type=RationalNumber.COMPOUND},determineDefinition:function(){this.factor==-1?this.integer?this.definition="-"+this.integer+" tam "+this.nominator+" bölü "+this.denominator:this.definition="-"+this.nominator+" bölü "+this.denominator:this.integer?this.definition=""+this.integer+" tam "+this.nominator+" bölü "+this.denominator:this.definition=""+this.nominator+" bölü "+this.denominator},determineValue:function(){var e;this.integer?e=this.integer+this.nominator/this.denominator:e=this.nominator/this.denominator,this.value=this.factor*e}});RationalNumber.randomGenerator=function(e,t){if(t==null||t==undefined)t=Util.randomInteger(0,4);if(e==null||e==undefined)t==0?e=-1:e=1;var n,r,i,s;switch(t){case 0:Util.randomDigit()?(i=Util.randomInteger(1,4),n=Util.randomInteger(1,11),r=Util.randomInteger(2,16,[n]),s=new RationalNumber({factor:e,integer:i,nominator:n,denominator:r})):(n=Util.randomInteger(1,11),r=Util.randomInteger(2,16,[n]),s=new RationalNumber({factor:e,nominator:n,denominator:r}));break;case 1:n=Util.randomInteger(1,11),r=Util.randomInteger(n+1,16),s=new RationalNumber({factor:e,nominator:n,denominator:r});break;case 2:do n=Util.randomInteger(3,16),r=Util.randomInteger(2,n);while(n%r==0);s=new RationalNumber({factor:e,nominator:n,denominator:r});break;case 3:i=Util.randomInteger(1,4),n=Util.randomInteger(1,11),r=Util.randomInteger(n+1,16),s=new RationalNumber({factor:e,integer:i,nominator:n,denominator:r})}return s},RationalNumber.RATIONAL=0,RationalNumber.SIMPLE=1,RationalNumber.COMPOUND=2,RationalNumber
.COMPLEX=3;