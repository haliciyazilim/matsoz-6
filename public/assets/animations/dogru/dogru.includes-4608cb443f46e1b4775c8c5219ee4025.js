function __Styles(){firstCircleColor="#ffde00",secondCircleColor="#0072ff",thirdCircleColor="#e0a26f",fourthCircleColor="#7fae4e",fifthCircleColor="#df5353",lettersStyle={position:"absolute",top:"76px",left:"242px",width:"308px",height:"60px",fontSize:"28px",textAlign:"center",opacity:0},letters2Style={position:"absolute",top:"150px",left:"242px",width:"308px",height:"30px",fontSize:"24px",textAlign:"center",opacity:0}}var deleteAll=function(){Interaction.path&&Interaction.path.remove(),Interaction.line1&&Interaction.line1.remove(),Interaction.line2&&Interaction.line2.remove(),Interaction.circle1&&Interaction.circle1.remove(),Interaction.circle2&&Interaction.circle2.remove(),Interaction.text1&&Interaction.text1.remove(),Interaction.text2&&Interaction.text2.remove(),Interaction.text3&&Interaction.text3.remove(),Interaction.arrow&&Interaction.arrow.remove(),Interaction.arrow2&&Interaction.arrow2.remove(),Interaction.clickk=0,Interaction.firstPoint=null,Interaction.secondPoint=null,$("#again").css("opacity",.4),$("#again").get(0).onclick=null},Animation={images:[{id:"shadow",src:"/assets/animations/olasilik/top_golge.png"}],init:function(e){Animation.container=e;var t=0,n=t+2500,r=t+3e3,i=r+1e3,s=i+1e3,o=s+1e3,u=o+2500,a=u+2e3,f=a+1500;Animation.line=new Path.Line(new Point(336.5,50.5),new Point(426.5,50.5)),Animation.line.strokeColor="black",Animation.line.opacity=0,Animation.circleGroup=new Group;var l=new Group,c=new Path.Circle(new Point(381,49),18);c.fillColor=firstCircleColor;var h=new Raster("shadow");h.position=new Point(381,49),l.addChild(c),l.addChild(h),l.opacity=0;var p=new Group,d=new Path.Circle(new Point(345,49),18);d.fillColor=secondCircleColor;var v=new Raster("shadow");v.position=new Point(345,49),p.addChild(d),p.addChild(v),p.position=new Point(-20,49);var m=new Group,g=new Path.Circle(new Point(417,49),18);g.fillColor=secondCircleColor;var y=new Raster("shadow");y.position=new Point(417,49),m.addChild(g),m.addChild(y),m.position=new Point(777,49);var b=new Group,w=new Path.Circle(new Point(309,49),18);w.fillColor=thirdCircleColor;var E=new Raster("shadow");E.position=new Point(309,49),b.addChild(w),b.addChild(E),b.position=new Point(-20,49);var S=new Group,x=new Path.Circle(new Point(453,49),18);x.fillColor=thirdCircleColor;var T=new Raster("shadow");T.position=new Point(453,49),S.addChild(x),S.addChild(T),S.position=new Point(777,49);var N=new Group,C=new Path.Circle(new Point(273,49),18);C.fillColor=fourthCircleColor;var k=new Raster("shadow");k.position=new Point(273,49),N.addChild(C),N.addChild(k),N.position=new Point(-20,49);var L=new Group,A=new Path.Circle(new Point(489,49),18);A.fillColor=fourthCircleColor;var O=new Raster("shadow");O.position=new Point(489,49),L.addChild(A),L.addChild(O),L.position=new Point(777,49);var M=new Group,_=new Path.Circle(new Point(237,49),18);_.fillColor=fifthCircleColor;var D=new Raster("shadow");D.position=new Point(237,49),M.addChild(_),M.addChild(D),M.position=new Point(-20,49);var P=new Group,H=new Path.Circle(new Point(525,49),18);H.fillColor=fifthCircleColor;var B=new Raster("shadow");B.position=new Point(525,49),P.addChild(H),P.addChild(B),P.position=new Point(777,49);var j=new Path.Circle(new Point(237,50),6);j.strokeColor="black",j.fillColor="black",j.opacity=0;var F=new Path.Circle(new Point(525,50),6);F.strokeColor="black",F.fillColor="black",F.opacity=0,Animation.myLine=new Group;var I=new Path.OneSidedArrow(new Point(186.5,50.5),new Point(576.5,50.5),10,30);I.strokeWidth=3,Animation.myLine.addChild(I);var q=new Path.OneSidedArrow(new Point(186.5,50.5),new Point(184.5,50.5),10,30);q.strokeWidth=3,Animation.myLine.addChild(q),Animation.myLine.opacity=0,Animation.circleGroup.addChild(l),Animation.circleGroup.addChild(p),Animation.circleGroup.addChild(m),Animation.circleGroup.addChild(b),Animation.circleGroup.addChild(S),Animation.circleGroup.addChild(N),Animation.circleGroup.addChild(L),Animation.circleGroup.addChild(M),Animation.circleGroup.addChild(P),Animation.circleGroup.addChild(j),Animation.circleGroup.addChild(F);var R=Util.dom({parent:Animation.container,tag:"div",css:lettersStyle,html:'<span style="float:left">A</span> <span style="float:right">B</span><span style="position:relative;top:30px;">AB</span>&nbsp;&nbsp;&nbsp;<span style="position:relative;top:30px;">AB</span>'}),U=Util.dom({parent:Animation.container,tag:"div",css:letters2Style,html:"<span>AB doğrusu</span>"}),z=new Path.Line(new Point(396,86),new Point(430,86));z.strokeColor="black",z.strokeWidth=2,z.opacity=0;var W=new AnimationHelper({X:0});W.animate({style:{X:150},duration:5e3,delay:n,animationType:"linear",update:function(){Animation.line.remove(),Animation.line=new Path.Line(new Point(334.5-this.X,50.5),new Point(424.5+this.X,50.5)),Animation.line.strokeColor="black",Animation.line.insertBelow(Animation.circleGroup),Animation.line.insertBelow(Animation.myLine)}}),l.animate({style:{opacity:1},duration:1e3,delay:t,animationType:"easeInOutQuad"}),Animation.line.animate({style:{opacity:1},duration:1e3,delay:t+750,animationType:"easeInOutQuad"}),p.animate({style:{position:new Point(345,49)},duration:1e3,delay:r,animationType:"easeInOutQuad"}),m.animate({style:{position:new Point(417,49)},duration:1e3,delay:r+300,animationType:"easeInOutQuad"}),b.animate({style:{position:new Point(309,49)},duration:1e3,delay:i,animationType:"easeInOutQuad"}),S.animate({style:{position:new Point(453,49)},duration:1e3,delay:i+300,animationType:"easeInOutQuad"}),N.animate({style:{position:new Point(273,49)},duration:1e3,delay:s,animationType:"easeInOutQuad"}),L.animate({style:{position:new Point(489,49)},duration:1e3,delay:s+300,animationType:"easeInOutQuad"}),M.animate({style:{position:new Point(237,49)},duration:1e3,delay:o,animationType:"easeInOutQuad"}),P.animate({style:{position:new Point(525,49)},duration:1e3,delay:o+300,animationType:"easeInOutQuad"}),l.animate({style:{opacity:0},duration:1e3,delay:u,animationType:"easeInOutQuad"}),p.animate({style:{opacity:0},duration:1e3,delay:u,animationType:"easeInOutQuad"}),m.animate({style:{opacity:0},duration:1e3,delay:u,animationType:"easeInOutQuad"}),b.animate({style:{opacity:0},duration:1e3,delay:u,animationType:"easeInOutQuad"}),S.animate({style:{opacity:0},duration:1e3,delay:u,animationType:"easeInOutQuad"}),N.animate({style:{opacity:0},duration:1e3,delay:u,animationType:"easeInOutQuad"}),L.animate({style:{opacity:0},duration:1e3,delay:u,animationType:"easeInOutQuad"}),M.animate({style:{opacity:0},duration:1e3,delay:a,animationType:"easeInOutQuad"}),P.animate({style:{opacity:0},duration:1e3,delay:a,animationType:"easeInOutQuad"}),j.animate({style:{opacity:1},duration:1e3,delay:a,animationType:"easeInOutQuad"}),F.animate({style:{opacity:1},duration:1e3,delay:a,animationType:"easeInOutQuad"}),Animation.myLine.animate({style:{opacity:1},duration:1e3,delay:a,animationType:"easeInOutQuad"}),Animation.line.animate({style:{opacity:1},duration:1e3,delay:a,animationType:"easeInOutQuad"}),$(R).delay(f).animate({opacity:1},1e3,"easeInOutQuad"),$(U).delay(f).animate({opacity:1},1e3,"easeInOutQuad",function(){Main.animationFinished(1e3)}),z.animate({style:{opacity:1},duration:1e3,delay:f,animationType:"easeInOutQuad"})}},Interaction={getFramework:function(){return"paper"},images:[{id:"paper",src:"/assets/animations/mavi_cizgili_kagit.jpg"}],init:function(e){Interaction.container=e,Main.setObjective("Yandaki alanda iki nokta belirleyerek bir doğru oluşturunuz."),Interaction.paper={width:$(e).width(),height:$(e).height()},$(Interaction.container).append('<button id="again" class="repeat_button" style="position:absolute;bottom:20px;right:90px;"></button>'),Interaction.appendStatus({bottom:"20px",right:"240px",width:"310px",height:"26px",textAlign:"center"}),Interaction.prepareNextQuestion()},nextQuestion:function(e){$("#again").css("opacity",.4),$("#again").get(0).onclick=null,Interaction.clickk=0,Interaction.letters=[],Interaction.letters[0]="A",Interaction.letters[1]="B",Interaction.letters[2]="C",Interaction.letters[3]="D",Interaction.letters[4]="E",Interaction.letters[5]="F",Interaction.letters[6]="K",Interaction.letters[7]="L",Interaction.letters[8]="M",Interaction.letters[9]="N",Interaction.rectangle=new Path.Rectangle(new Point(40.5,40.5),new Size(500,160)),Interaction.rectangle.strokeColor="black",Interaction.rectangle.fillColor="white",Interaction.rectangle.opacity=0;var t=new Raster("paper");t.position=new Point(295,150);var n=new Tool;n.onMouseDown=function(e){if(Interaction.clickk==0)Interaction.firstPoint=e.downPoint,Interaction.rectangle.hitTest(Interaction.firstPoint)&&(Interaction.path=new Path,Interaction.path.strokeColor="black",Interaction.path.strokeWidth=4,Interaction.path.add(e.downPoint),Interaction.circle1=new Path.Circle(Interaction.firstPoint,6),Interaction.circle1.strokeColor="black",Interaction.circle1.fillColor="black",Interaction.clickk+=1);else{if(Interaction.clickk!=1)return!1;if(Interaction.firstPoint.getDistance(e.downPoint)<25)Interaction.setStatus("Lütfen daha uzak bir nokta belirleyiniz.",!1);else{Interaction.secondPoint=e.downPoint;if(Interaction.rectangle.hitTest(Interaction.secondPoint)){Interaction.clickk+=1,Interaction.path.add(e.downPoint),$("#again").css("opacity",1),$("#again").get(0).onclick=deleteAll;var t=Util.randomInteger(0,5);t*=2,Interaction.line1=new Path.Line(new Point(Interaction.firstPoint.findPointTo(Interaction.secondPoint,-35)),new Point(Interaction.firstPoint)),Interaction.line1.strokeColor="black",Interaction.line1.strokeWidth=4,Interaction.arrow=new Path.OneSidedArrow(new Point(Interaction.firstPoint.findPointTo(Interaction.secondPoint,-35)),new Point(Interaction.firstPoint.findPointTo(Interaction.secondPoint,-36)),10,30),Interaction.line2=new Path.Line(new Point(Interaction.secondPoint.findPointTo(Interaction.firstPoint,-35)),new Point(Interaction.secondPoint)),Interaction.line2.strokeColor="black",Interaction.line2.strokeWidth=4,Interaction.arrow2=new Path.OneSidedArrow(new Point(Interaction.secondPoint.findPointTo(Interaction.firstPoint,-35)),new Point(Interaction.secondPoint.findPointTo(Interaction.firstPoint,-36)),10,30),Interaction.circle2=new Path.Circle(Interaction.secondPoint,6),Interaction.circle2.strokeColor="black",Interaction.circle2.fillColor="black";var n=Interaction.firstPoint.findPointTo(Interaction.secondPoint,20);n=n.getRotatedPoint(90,Interaction.firstPoint);var r=Interaction.secondPoint.findPointTo(Interaction.firstPoint,20);r=r.getRotatedPoint(-90,Interaction.secondPoint),Interaction.text1=new PointText(new Point(n.x,n.y+4)),Interaction.text1.justification="center",Interaction.text1.fillColor="black",Interaction.text1.content=Interaction.letters[t],Interaction.text1.strokeWidth="1px",Interaction.text2=new PointText(new Point(r.x,r.y+4)),Interaction.text2.justification="center",Interaction.text2.fillColor="black",Interaction.text2.content=Interaction.letters[t+1],Interaction.text2.strokeWidth="1px",Interaction.text3=new PointText(new Point(206.5,264.5)),Interaction.text3.justification="center",Interaction.text3.fillColor="black",Interaction.text3.fontSize=16,Interaction.text3.content=""+Interaction.letters[t+0]+Interaction.letters[t+1]+" doğrusu",Interaction.setStatus("")}}}}},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};