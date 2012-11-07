var Interaction={getFramework:function(){return"paper"},images:[{id:"compass_left_leg",src:"/assets/animations/compass_left_leg.png"},{id:"compass_knuckle",src:"/assets/animations/compass_knuckle.png"},{id:"compass_right_leg",src:"/assets/animations/compass_right_leg.png"}],init:function(e){Interaction.container=e,Main.setObjective("Yandaki MNK açısının açıortayını çiziniz. Önce pergelin sivri ucunu açının köşesine yerleştirip bir yay çiziniz. Yayın açının kollarını kestiği noktalardan pergelin açıklığını bozmadan yaylar çiziniz ve kesiştikleri noktayı açının köşesi ile birleştiriniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},$(Interaction.container).append('<button id="drawBtn" class="draw_text_button"></button><button id="repeatBtn" class="repeat_button"></button>'),$("#drawBtn").css({position:"absolute",top:"210px",left:"460px",width:"55px",height:"32px"}),$("#repeatBtn").css({position:"absolute",top:"160px",left:"440px",width:"103px",height:"40px"}),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.drawCompass&&Interaction.drawCompass.remove(),Interaction.angle&&Interaction.angle.remove(),Interaction.arcGroup&&Interaction.arcGroup.remove(),Interaction.lastLine&&Interaction.lastLine.remove(),$("#drawBtn").css("opacity",1),$("#drawBtn").get(0).onclick=Interaction.drawAndAnimateCurves,$("#repeatBtn").css("opacity",0),$("#repeatBtn").get(0).onclick=null,Interaction.angle&&Interaction.angle.remove(),Interaction.compass&&Interaction.compass.remove(),Interaction.br=12,Interaction.step2=!1,initCompass(new Point(440.5,160.5)),Interaction.myAngle=Util.randomInteger(50,121),Interaction.myCenterPoint=new Point(200.5,205.5),Interaction.referencePoint=new Point(Interaction.myCenterPoint.x,Interaction.myCenterPoint.y-120),Interaction.point1=Interaction.referencePoint.getRotatedPoint(-Interaction.myAngle/2,Interaction.myCenterPoint),Interaction.point2=Interaction.referencePoint.getRotatedPoint(Interaction.myAngle/2,Interaction.myCenterPoint),Interaction.angle=new Group;var t=new Path.OneSidedArrow(Interaction.myCenterPoint,Interaction.point1.findPointTo(Interaction.myCenterPoint,-30),6,20),n=new Path.OneSidedArrow(Interaction.myCenterPoint,Interaction.point2.findPointTo(Interaction.myCenterPoint,-30),6,20),r=new Path.Circle(Interaction.myCenterPoint,4);r.fillColor="black";var i=new Path.Circle(Interaction.point1,4);i.fillColor="black";var s=new Path.Circle(Interaction.point2,4);s.fillColor="black";var o=new PointText(new Point(Interaction.myCenterPoint.x+20,Interaction.myCenterPoint.y+20));o.justification="center",o.content="N",o.fontSize=16;var u=new PointText(new Point(Interaction.point1.x-20,Interaction.point1.y+20));u.justification="center",u.content="M",u.fontSize=16;var a=new PointText(new Point(Interaction.point2.x+20,Interaction.point2.y+20));a.justification="center",a.content="K",a.fontSize=16,Interaction.angle.addChild(t),Interaction.angle.addChild(n),Interaction.angle.addChild(r),Interaction.angle.addChild(i),Interaction.angle.addChild(s),Interaction.angle.addChild(o),Interaction.angle.addChild(u),Interaction.angle.addChild(a)},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){},drawAndAnimateCurves:function(){var e=Interaction.compass.d,t=Interaction.myCenterPoint.findPointTo(Interaction.point1,e*1.15),n=Interaction.myCenterPoint.findPointTo(Interaction.point2,e*1.15),r=Interaction.myCenterPoint.x-t.x,i=n.x-Interaction.myCenterPoint.x;Interaction.compass&&Interaction.compass.remove(),Interaction.arcGroup=new Group;var s=new AnimationHelper({angle1:0,angle2:90,angle3:-90,X:0});s.animate({style:{angle1:-180},duration:2e3,delay:1e3,animationType:"easeInOutQuad",update:function(){Interaction.drawCompass&&Interaction.drawCompass.remove(),Interaction.firstArc&&Interaction.firstArc.remove(),Interaction.firstArc=new Path.ArcByAngle(Interaction.myCenterPoint,e*1.15,this.angle1,0),Interaction.firstArc.strokeColor="red",Interaction.firstArc.strokeWidth=2,Interaction.drawCompass=new Compass(Interaction.myCenterPoint.x,Interaction.myCenterPoint.y),Interaction.drawCompass.changeDelta(e),Interaction.drawCompass.rotate(this.angle1,Interaction.myCenterPoint)},callback:function(){Interaction.drawCompass.remove(),Interaction.arcGroup.addChild(Interaction.firstArc)}}),s.animate({style:{angle2:-90},duration:2e3,delay:4e3,animationType:"easeInOutQuad",update:function(){Interaction.drawCompass&&Interaction.drawCompass.remove(),Interaction.secondArc&&Interaction.secondArc.remove(),Interaction.secondArc=new Path.ArcByAngle(t,r*1.15,this.angle2,90),Interaction.secondArc.strokeColor="blue",Interaction.secondArc.strokeWidth=2,Interaction.drawCompass=new Compass(t.x,t.y),Interaction.drawCompass.changeDelta(r),Interaction.drawCompass.rotate(this.angle2,t)},callback:function(){Interaction.drawCompass.remove(),Interaction.arcGroup.addChild(Interaction.secondArc)}}),s.animate({style:{angle3:-270},duration:2e3,delay:7e3,animationType:"easeInOutQuad",update:function(){Interaction.drawCompass&&Interaction.drawCompass.remove(),Interaction.thirdArc&&Interaction.thirdArc.remove(),Interaction.thirdArc=new Path.ArcByAngle(n,i*1.15,this.angle3,-90),Interaction.thirdArc.strokeColor="blue",Interaction.thirdArc.strokeWidth=2,Interaction.drawCompass=new Compass(n.x,n.y),Interaction.drawCompass.changeDelta(i),Interaction.drawCompass.rotate(this.angle3,n)},callback:function(){Interaction.drawCompass.remove(),Interaction.arcGroup.addChild(Interaction.thirdArc)}}),s.animate({style:{X:180.5},duration:2e3,delay:1e4,animationType:"easeInOutQuad",update:function(){Interaction.lastLine&&Interaction.lastLine.remove(),Interaction.lastLine=new Path.Line(new Point(Interaction.referencePoint.x-.5,Interaction.referencePoint.y-.5-Math.round(e*.5)),new Point(Interaction.referencePoint.x-.5,Interaction.referencePoint.y+this.X)),Interaction.lastLine.strokeColor="black",Interaction.lastLine.strokeWidth=2}}),$("#drawBtn").css("opacity",0),$("#drawBtn").get(0).onclick=null,$("#repeatBtn").delay(13e3).animate({opacity:1},1e3,"easeInOutQuad",function(){$("#repeatBtn").get(0).onclick=Interaction.nextQuestion})}};