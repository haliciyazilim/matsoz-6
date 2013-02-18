function __Styles(){}var Animation={images:[{id:"ankara_dogrusal",src:"/assets/animations/dogru_ile_nokta_iliskisi/ankara_dogrusal_start.png"},{id:"halat_dogrusal",src:"/assets/animations/dogru_ile_nokta_iliskisi/halat_dogrusal_start.png"}],init:function(e){Animation.container=e,Animation.animateAnkaraDogrusal()},animateAnkaraDogrusal:function(){var e=new GIF({src:"/assets/animations/dogru_ile_nokta_iliskisi/ankara.png",width:250,height:170,parent:Animation.container,count:54,css:{position:"absolute",top:"50%",left:"50%",marginLeft:"-125px",marginTop:"-83px"}});setTimeout(function(){e.play(14)},2e3),$(e.div).delay(6e3).animate({marginLeft:"-325px"},1e3,function(){Animation.animateHalatDogrusal()})},animateHalatDogrusal:function(){var e=new GIF({src:"/assets/animations/dogru_ile_nokta_iliskisi/halat.png",width:250,height:170,parent:Animation.container,count:39,css:{position:"absolute",top:"50%",left:"50%",marginLeft:"60px",marginTop:"-85px"}});setTimeout(function(){e.play(14)},1e3),Main.animationFinished(4500)}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yandaki nokta ve doğru sembollerinden birini seçiniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.letters=[],Interaction.letters[0]="A",Interaction.letters[1]="B",Interaction.letters[2]="C",Interaction.letters[3]="D",Interaction.letters[4]="E",Interaction.letters[5]="F",Interaction.letters[6]="K",Interaction.letters[7]="L",Interaction.letters[8]="M",Interaction.letters[9]="N",Interaction.setRandomGenerator(9),Interaction.pointRadius=6,Interaction.lineWidth=3;var t=new Tool;Interaction.tool=t,t.activate(),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.cleanButton=Util.dom({parent:Interaction.container,tag:"button",css:{position:"absolute",bottom:"20px",left:"200px"}}),Interaction.cleanButton.setAttribute("class","repeat_button"),Interaction.cleanButton.setAttribute("type","button"),Interaction.cleanButton.onclick=Interaction.cleanPaper,Interaction.pointButton=Util.dom({parent:Interaction.container,tag:"button",css:{position:"absolute",top:"20px",left:"20px",border:"none",backgroundImage:"url(/assets/animations/dogru_ile_nokta_iliskisi/btn_gray_point.png)",backgroundColor:"#fff",height:"30px",width:"73px"}}),Interaction.pointButton.setAttribute("type","button"),Interaction.pointButton.onclick=Interaction.selectPoint,Interaction.lineButton=Util.dom({parent:Interaction.container,tag:"button",css:{position:"absolute",top:"20px",left:"120px",border:"none",backgroundImage:"url(/assets/animations/dogru_ile_nokta_iliskisi/btn_gray_dogru.png)",backgroundColor:"#fff",height:"30px",width:"73px"}}),Interaction.lineButton.setAttribute("type","button"),Interaction.lineButton.onclick=Interaction.selectLine},cleanPaper:function(e){console.log(e),e!=0&&(e=!0);if(e==1&&Interaction.selectedFunction){Interaction.selectedFunction();return}Main.interactionProject.activeLayer.removeChildren(),Interaction.pointA=null,Interaction.pointB=null,Interaction.circle1=undefined,Interaction.circle2=undefined},selectPoint:function(){Interaction.cleanPaper(!1),Interaction.selectedFunction=Interaction.selectPoint,(new Point(Util.randomInteger(150,350),Util.randomInteger(125,175))).showOnCanvas(Interaction.pointRadius*1.5),Main.setObjective("Bu noktadan geçen bir doğru çizmek için ekranda uygun yerlerde iki noktaya basınız."),Interaction.pointA=null,Interaction.pointB=null,Interaction.tool.onMouseDown=function(e){if(Interaction.pointA!=null){Interaction.pointB=e.point,Interaction.pointB.showOnCanvas(Interaction.pointRadius);var t=Interaction.pointA.findPointTo(Interaction.pointB,-50),n=Interaction.pointB.findPointTo(Interaction.pointA,-50);new Path.TwoSidedArrow(t,n,15,30);var r=Interaction.pointA.findPointTo(Interaction.pointB,20).getRotatedPoint(90,Interaction.pointA).add(0,8),i=new PointText(r);i.content="A",i.fontSize=16,i.justification="center";var s=Interaction.pointB.findPointTo(Interaction.pointA,20).getRotatedPoint(-90,Interaction.pointB).add(0,8),o=new PointText(s);o.content="B",o.fontSize=16,o.justification="center",Interaction.pointA=null}else Interaction.pointB==null&&(Interaction.pointA=e.point,Interaction.pointA.showOnCanvas(Interaction.pointRadius))}},selectLine:function(){Interaction.cleanPaper(!1),Interaction.selectedFunction=Interaction.selectLine,Interaction.pointA=new Point(Util.randomInteger(60,200),Util.randomInteger(75,175)),Interaction.pointB=new Point(Util.randomInteger(360,500),Util.randomInteger(75,175)),Main.setObjective("Bu doğru üzerinde iki nokta belirtiniz."),Interaction.line=new Path.TwoSidedArrow(Interaction.pointA,Interaction.pointB,15,30),Interaction.tool.onMouseDown=function(e){var t=e.point.projectToLine(Interaction.pointA,Interaction.pointB);if(e.point.getDistance(t)>15)return;if(t.getDistance(Interaction.pointA.findPointTo(Interaction.pointB,30),!0)+t.getDistance(Interaction.pointB.findPointTo(Interaction.pointA,30),!0)>Interaction.pointA.findPointTo(Interaction.pointB,30).getDistance(Interaction.pointB.findPointTo(Interaction.pointA,30),!0)+1)return;if(Interaction.circle1==undefined||Interaction.circle2==undefined){var n=t.showOnCanvas(10);Interaction.circle1==undefined?Interaction.circle1=n:Interaction.circle2==undefined&&(Interaction.circle2=n)}}},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};