function __Styles(){lettersStyle={position:"absolute",top:"106px",left:"242px",width:"308px",height:"40px",fontSize:"28px",textAlign:"center",opacity:0},pencilStyle={position:"absolute",top:"-15px",left:"250px",opacity:0}}var deleteAll=function(){Interaction.path&&Interaction.path.remove(),Interaction.line2&&Interaction.line2.remove(),Interaction.circle1&&Interaction.circle1.remove(),Interaction.circle2&&Interaction.circle2.remove(),Interaction.text1&&Interaction.text1.remove(),Interaction.text2&&Interaction.text2.remove(),Interaction.text3&&Interaction.text3.remove(),Interaction.arrow&&Interaction.arrow.remove(),Interaction.clickk=0,Interaction.firstPoint=null,Interaction.secondPoint=null,$("#again").css("opacity",.4),$("#again").get(0).onclick=null},Animation={images:[],init:function(e){Animation.container=e;var t=0,n=t+1e3,r=n+1500,i=r+5500,s=i+2e3;Animation.dot1=new Path.Circle(new Point(237,80),6),Animation.dot1.strokeColor="black",Animation.dot1.fillColor="black",Animation.dot1.opacity=0,Animation.dot2=new Path.Circle(new Point(525,80),6),Animation.dot2.strokeColor="black",Animation.dot2.fillColor="black",Animation.dot2.opacity=0,Animation.arrow=new Path.OneSidedArrow(new Point(587.5,80.5),new Point(588.5,80.5),10,30),Animation.arrow.opacity=0;var o=Util.dom({parent:Animation.container,tag:"div",css:lettersStyle,html:'<span style="float:left">A</span> <span style="float:right">B</span><span style="position:relative;top:30px;">[AB</span>&nbsp;&nbsp;&nbsp;<span style="position:relative;top:30px;">AB</span>'}),u=new Path.OneSidedArrow(new Point(400,116),new Point(440,116),10,20);u.opacity=0;var a=Util.dom({parent:Animation.container,tag:"div",css:pencilStyle,html:'<img id="pencil" src="/assets/animations/isin/kursun_kalem_.png"/>'});$(a).delay(n).animate({opacity:1},1e3,"easeInOutQuad").delay(500).animate({left:"+=350px"},4e3,"linear").delay(500).animate({opacity:0},1e3,"easeInOutQuad");var f=new AnimationHelper({X:0});f.animate({style:{X:350},duration:4e3,delay:r,animationType:"linear",update:function(){Animation.line&&Animation.line.remove(),Animation.line=new Path.Line(new Point(237.5,80.5),new Point(237.5+this.X,80.5)),Animation.line.strokeColor="black",Animation.line.strokeWidth=3},callback:function(){Animation.line.insertBelow(Animation.dot1),Animation.line.insertBelow(Animation.dot2)}}),Animation.dot1.animate({style:{opacity:1},duration:1e3,delay:i,animationType:"easeInOutQuad"}),Animation.dot2.animate({style:{opacity:1},duration:1e3,delay:i,animationType:"easeInOutQuad"}),Animation.arrow.animate({style:{opacity:1},duration:1e3,delay:i,animationType:"easeInOutQuad"}),$(o).delay(s).animate({opacity:1},1e3,"easeInOutQuad",function(){Main.animationFinished(1e3)}),u.animate({style:{opacity:1},duration:1e3,delay:s,animationType:"easeInOutQuad"})}},Interaction={getFramework:function(){return"paper"},images:[{id:"paper",src:"/assets/animations/mavi_cizgili_kagit.jpg"}],init:function(e){Interaction.container=e,Main.setObjective("Yandaki alanda iki nokta belirleyerek bir ışın oluşturunuz."),Interaction.paper={width:$(e).width(),height:$(e).height()},$(Interaction.container).append('<button id="again" class="repeat_button" style="position:absolute;bottom:20px;right:150px;"></button>'),Interaction.prepareNextQuestion()},nextQuestion:function(e){$("#again").css("opacity",.4),$("#again").get(0).onclick=null,Interaction.clickk=0,Interaction.letters=[],Interaction.letters[0]="A",Interaction.letters[1]="B",Interaction.letters[2]="C",Interaction.letters[3]="D",Interaction.letters[4]="E",Interaction.letters[5]="F",Interaction.letters[6]="K",Interaction.letters[7]="L",Interaction.letters[8]="M",Interaction.letters[9]="N",Interaction.rectangle=new Path.Rectangle(new Point(40.5,40.5),new Size(500,160)),Interaction.rectangle.strokeColor="black",Interaction.rectangle.fillColor="white",Interaction.rectangle.opacity=0;var t=new Raster("paper");t.position=new Point(295,150);var n=new Tool;n.onMouseDown=function(e){if(Interaction.clickk==0)Interaction.firstPoint=e.downPoint,Interaction.rectangle.hitTest(Interaction.firstPoint)&&(Interaction.path=new Path,Interaction.path.strokeColor="black",Interaction.path.strokeWidth=4,Interaction.path.add(e.downPoint),Interaction.circle1=new Path.Circle(Interaction.firstPoint,6),Interaction.circle1.strokeColor="black",Interaction.circle1.fillColor="black",Interaction.clickk+=1);else{if(Interaction.clickk!=1)return!1;Interaction.secondPoint=e.downPoint;if(Interaction.rectangle.hitTest(Interaction.secondPoint)){Interaction.clickk+=1,Interaction.path.add(e.downPoint),$("#again").css("opacity",1),$("#again").get(0).onclick=deleteAll;var t=Util.randomInteger(0,5);t*=2,Interaction.line2=new Path.Line(new Point(Interaction.secondPoint.findPointTo(Interaction.firstPoint,-35)),new Point(Interaction.secondPoint)),Interaction.line2.strokeColor="black",Interaction.line2.strokeWidth=4,Interaction.arrow=new Path.OneSidedArrow(new Point(Interaction.secondPoint.findPointTo(Interaction.firstPoint,-35)),new Point(Interaction.secondPoint.findPointTo(Interaction.firstPoint,-36)),10,30),Interaction.circle2=new Path.Circle(Interaction.secondPoint,6),Interaction.circle2.strokeColor="black",Interaction.circle2.fillColor="black";var n=Interaction.firstPoint.findPointTo(Interaction.secondPoint,20);n=n.getRotatedPoint(90,Interaction.firstPoint);var r=Interaction.secondPoint.findPointTo(Interaction.firstPoint,20);r=r.getRotatedPoint(-90,Interaction.secondPoint),Interaction.text1=new PointText(new Point(n.x,n.y+4)),Interaction.text1.justification="center",Interaction.text1.fillColor="black",Interaction.text1.content=Interaction.letters[t],Interaction.text1.strokeWidth="1px",Interaction.text2=new PointText(new Point(r.x,r.y+4)),Interaction.text2.justification="center",Interaction.text2.fillColor="black",Interaction.text2.content=Interaction.letters[t+1],Interaction.text2.strokeWidth="1px",Interaction.text3=new PointText(new Point(186.5,260.5)),Interaction.text3.justification="center",Interaction.text3.fillColor="black",Interaction.text3.content=""+Interaction.letters[t+0]+Interaction.letters[t+1]+" ışını",Interaction.text3.strokeWidth="1px"}}}},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};