var Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yandaki alanda iki nokta belirleyerek bir doğru parçası oluşturunuz."),Interaction.paper={width:$(e).width(),height:$(e).height()},$(Interaction.container).append('<button id="again" class="repeat_button" style="position:absolute;bottom:20px;right:150px;"></button>'),Interaction.prepareNextQuestion()},nextQuestion:function(e){$("#again").css("opacity",.4),$("#again").get(0).onclick=null,Interaction.clickk=0,Interaction.letters=[],Interaction.letters[0]="A",Interaction.letters[1]="B",Interaction.letters[2]="C",Interaction.letters[3]="D",Interaction.letters[4]="E",Interaction.letters[5]="F",Interaction.letters[6]="K",Interaction.letters[7]="L",Interaction.letters[8]="M",Interaction.letters[9]="N",Interaction.rectangle=new Path.Rectangle(new Point(40.5,40.5),new Size(500,160)),Interaction.rectangle.strokeColor="black",Interaction.rectangle.fillColor="white";var t=new Tool;t.onMouseDown=function(e){if(Interaction.clickk==0)Interaction.firstPoint=e.downPoint,Interaction.rectangle.hitTest(Interaction.firstPoint)&&(Interaction.path=new Path,Interaction.path.strokeColor="black",Interaction.path.strokeWidth=4,Interaction.path.add(e.downPoint),Interaction.circle1=new Path.Circle(Interaction.firstPoint,6),Interaction.circle1.strokeColor="black",Interaction.circle1.fillColor="black",Interaction.clickk+=1);else{if(Interaction.clickk!=1)return!1;Interaction.secondPoint=e.downPoint;if(Interaction.rectangle.hitTest(Interaction.secondPoint)){Interaction.clickk+=1,Interaction.path.add(e.downPoint),$("#again").css("opacity",1),$("#again").get(0).onclick=deleteAll;var t=Util.randomInteger(0,5);t*=2,Interaction.circle2=new Path.Circle(Interaction.secondPoint,6),Interaction.circle2.strokeColor="black",Interaction.circle2.fillColor="black";var n=Interaction.firstPoint.findPointTo(Interaction.secondPoint,20);n=n.getRotatedPoint(90,Interaction.firstPoint);var r=Interaction.secondPoint.findPointTo(Interaction.firstPoint,20);r=r.getRotatedPoint(-90,Interaction.secondPoint),Interaction.text1=new PointText(new Point(n.x,n.y+4)),Interaction.text1.justification="center",Interaction.text1.fillColor="black",Interaction.text1.content=Interaction.letters[t],Interaction.text1.strokeWidth="1px",Interaction.text2=new PointText(new Point(r.x,r.y+4)),Interaction.text2.justification="center",Interaction.text2.fillColor="black",Interaction.text2.content=Interaction.letters[t+1],Interaction.text2.strokeWidth="1px",Interaction.text3=new PointText(new Point(186.5,260.5)),Interaction.text3.justification="center",Interaction.text3.fillColor="black",Interaction.text3.content=""+Interaction.letters[t+0]+Interaction.letters[t+1]+" doğru parçası",Interaction.text3.strokeWidth="1px"}}}},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};