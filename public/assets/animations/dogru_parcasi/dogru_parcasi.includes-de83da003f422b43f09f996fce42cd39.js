function __Styles(){lettersStyle={position:"absolute",top:"106px",left:"242px",width:"308px",height:"40px",fontSize:"24px",textAlign:"center",opacity:0}}var deleteAll=function(){Interaction.path&&Interaction.path.remove(),Interaction.line2&&Interaction.line2.remove(),Interaction.circle1&&Interaction.circle1.remove(),Interaction.circle2&&Interaction.circle2.remove(),Interaction.text1&&Interaction.text1.remove(),Interaction.text2&&Interaction.text2.remove(),Interaction.text3&&Interaction.text3.remove(),Interaction.clickk=0,Interaction.firstPoint=null,Interaction.secondPoint=null,$("#again").css("opacity",.4),$("#again").get(0).onclick=null},Animation={images:[],init:function(e){Animation.container=e;var t=0,n=t+1e3,r=n+6e3,i=r+2e3,s=new Path.Circle(new Point(235,80),6);s.strokeColor="black",s.fillColor="black",s.opacity=0;var o=new Path.Circle(new Point(525,80),6);o.strokeColor="black",o.fillColor="black",o.opacity=0,Animation.line2=new Path.Line(new Point(234.5,80.5),new Point(525.5,80.5)),Animation.line2.strokeColor="black",Animation.line2.strokeWidth=3,Animation.line2.opacity=0;var u=new AnimationHelper({X:0});u.animate({style:{X:150},duration:5e3,delay:n,animationType:"linear",update:function(){Animation.line&&Animation.line.remove(),Animation.line=new Path.Line(new Point(379.5-this.X,80.5),new Point(381.5+this.X,80.5)),Animation.line.strokeColor="black"}}),s.animate({style:{opacity:1},duration:1e3,delay:r,animationType:"easeInOutQuad"}),o.animate({style:{opacity:1},duration:1e3,delay:r,animationType:"easeInOutQuad"}),Animation.line2.animate({style:{opacity:1},duration:1e3,delay:r,animationType:"easeInOutQuad"});var a=Util.dom({parent:Animation.container,tag:"div",css:lettersStyle,html:'<span style="float:left">A</span> <span style="float:right">B</span><span style="position:relative;top:30px;">AB doğru parçası</span>&nbsp;&nbsp;&nbsp;<span style="position:relative;top:30px;">[AB]</span>'});$(a).delay(i).animate({opacity:1},1e3,"easeInOutQuad",function(){Main.animationFinished(1e3)})}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yandaki alanda iki nokta belirleyerek bir doğru parçası oluşturunuz."),Interaction.paper={width:$(e).width(),height:$(e).height()},$(Interaction.container).append('<button id="again" class="repeat_button" style="position:absolute;bottom:20px;right:150px;"></button>'),Interaction.prepareNextQuestion()},nextQuestion:function(e){$("#again").css("opacity",.4),$("#again").get(0).onclick=null,Interaction.clickk=0,Interaction.letters=[],Interaction.letters[0]="A",Interaction.letters[1]="B",Interaction.letters[2]="C",Interaction.letters[3]="D",Interaction.letters[4]="E",Interaction.letters[5]="F",Interaction.letters[6]="K",Interaction.letters[7]="L",Interaction.letters[8]="M",Interaction.letters[9]="N",Interaction.rectangle=new Path.Rectangle(new Point(40.5,40.5),new Size(500,160)),Interaction.rectangle.strokeColor="black",Interaction.rectangle.fillColor="white";var t=new Tool;t.onMouseDown=function(e){if(Interaction.clickk==0)Interaction.firstPoint=e.downPoint,Interaction.rectangle.hitTest(Interaction.firstPoint)&&(Interaction.path=new Path,Interaction.path.strokeColor="black",Interaction.path.strokeWidth=4,Interaction.path.add(e.downPoint),Interaction.circle1=new Path.Circle(Interaction.firstPoint,6),Interaction.circle1.strokeColor="black",Interaction.circle1.fillColor="black",Interaction.clickk+=1);else{if(Interaction.clickk!=1)return!1;Interaction.secondPoint=e.downPoint;if(Interaction.rectangle.hitTest(Interaction.secondPoint)){Interaction.clickk+=1,Interaction.path.add(e.downPoint),$("#again").css("opacity",1),$("#again").get(0).onclick=deleteAll;var t=Util.randomInteger(0,5);t*=2,Interaction.circle2=new Path.Circle(Interaction.secondPoint,6),Interaction.circle2.strokeColor="black",Interaction.circle2.fillColor="black";var n=Interaction.firstPoint.findPointTo(Interaction.secondPoint,20);n=n.getRotatedPoint(90,Interaction.firstPoint);var r=Interaction.secondPoint.findPointTo(Interaction.firstPoint,20);r=r.getRotatedPoint(-90,Interaction.secondPoint),Interaction.text1=new PointText(new Point(n.x,n.y+4)),Interaction.text1.justification="center",Interaction.text1.fillColor="black",Interaction.text1.content=Interaction.letters[t],Interaction.text1.strokeWidth="1px",Interaction.text2=new PointText(new Point(r.x,r.y+4)),Interaction.text2.justification="center",Interaction.text2.fillColor="black",Interaction.text2.content=Interaction.letters[t+1],Interaction.text2.strokeWidth="1px",Interaction.text3=new PointText(new Point(186.5,260.5)),Interaction.text3.justification="center",Interaction.text3.fillColor="black",Interaction.text3.content=""+Interaction.letters[t+0]+Interaction.letters[t+1]+" doğru parçası",Interaction.text3.strokeWidth="1px"}}}},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};