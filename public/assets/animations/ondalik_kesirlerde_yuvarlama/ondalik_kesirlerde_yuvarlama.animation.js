var Animation={images:[],init:function(e){Animation.container=e,$(e).append("<div id='baslik'>"),$("#baslik").css({position:"absolute",width:"100%",top:"25px",left:"0px",right:"0px",margin:"auto",textAlign:"center",fontSize:"20px",opacity:1}).html("1,28 ondalık kesrini onda birler basamağına göre yuvarlama:"),$(e).append("<div id='cumle'>"),$("#cumle").css({position:"absolute",width:"100%",top:"135px",left:"0px",right:"0px",margin:"auto",textAlign:"center",fontSize:"18px",opacity:0}).html("1,28 ondalık kesri, 8 > 5 olduğu için 1,30 yani kısaca 1,3 ondalık kesrine yuvarlanır."),$(e).append("<div id='sonNokta'>"),$("#sonNokta").css({position:"absolute",width:"100%",top:"165px",left:"0px",right:"0px",margin:"auto",textAlign:"center",fontSize:"20px",opacity:0,color:"red"}).html("1,28 <img src='/assets/animations/ondalik_kesirlerde_yuvarlama/sag_ok.png'  /> 1,3"),$("#sonNokta img").css({display:"inline-block"});var t=90,n=16;Animation.numericalAxis=new Group;var r=new Group,i=new Path.OneSidedArrow(new Point(40,t),new Point(717,t),10,30),s=new Path.OneSidedArrow(new Point(717,t),new Point(718,t),10,30);i.rotate(180),r.addChild(i),r.addChild(s),r.strokeWidth=2;var o=677/15;Interaction.smallDots=new Group,Interaction.sayiTextGrup=new Group;for(var u=0;u<14;u++){var a=1.18+u/100;if(u==3||u==10||u==12){var f=new PointText(new Point(17+o*(u+1),t-20));f.fontSize=16,f.strokeWidth=2,f.strokeColor=new RgbColor(0,0,0);var l=new Path.Circle(new Point(40+o*(u+1),t),5);l.fillColor=new RgbColor(0,0,0)}else{var f=new PointText(new Point(25+o*(u+1),t-20));f.fontSize=12,f.fillColor=new RgbColor(0,0,0);var l=new Path.Circle(new Point(40+o*(u+1),t),3);l.fillColor=new RgbColor(0,0,0)}f.content=Util.format(a,{places:2}),Interaction.sayiTextGrup.addChild(f),Interaction.smallDots.addChild(l)}animationHelper=new AnimationHelper({fillColor:new RgbColor(0,0,0),strokeColor:new RgbColor(0,0,0)}),animationHelper.animate({style:{fillColor:new RgbColor(1,0,0),strokeColor:new RgbColor(1,0,0)},delay:1e3,duration:3e3,update:function(){Interaction.sayiTextGrup.children[10].fillColor=this.fillColor,Interaction.sayiTextGrup.children[10].strokeColor=this.strokeColor,Interaction.smallDots.children[10].fillColor=this.fillColor}}),sagaOkHelper=new AnimationHelper({okPosition:o*12,opacity:0}),Interaction.sagaOk=new Path.OneSidedArrow(new Point(o*12,t+20),new Point(sagaOkHelper.okPosition+6,t+20),10,30),Interaction.sagaOk.strokeColor="blue",Interaction.sagaOk.fillColor="blue",Interaction.sagaOk.opacity=0,sagaOkHelper.animate({style:{okPosition:o*14-5,opacity:1},delay:4e3,duration:3e3,update:function(){Interaction.sagaOk.remove(),Interaction.sagaOk=new Path.OneSidedArrow(new Point(o*12,t+20),new Point(this.okPosition,t+20),10,30),Interaction.sagaOk.strokeColor="blue",Interaction.sagaOk.fillColor="blue",Interaction.sagaOk.opacity=this.opacity*10}}),solaOkHelper=new AnimationHelper({okPosition:o*12-10,opacity:0}),Interaction.solaOk=new Path.OneSidedArrow(new Point(o*12-10,t+20),new Point(solaOkHelper.okPosition-11,t+20),10,30),Interaction.solaOk.strokeColor="blue",Interaction.solaOk.fillColor="blue",Interaction.solaOk.opacity=0,solaOkHelper.animate({style:{okPosition:o*5-5,opacity:1},delay:4e3,duration:4500,update:function(){Interaction.solaOk.remove(),Interaction.solaOk=new Path.OneSidedArrow(new Point(o*12-10,t+20),new Point(this.okPosition,t+20),10,30),Interaction.solaOk.strokeColor="blue",Interaction.SolaOk.fillColor="blue",Interaction.solaOk.opacity=this.opacity*10},callback:function(){$("#cumle").animate({opacity:1},1e3),$("#sonNokta").delay(1e3).animate({opacity:1},1e3)}}),Main.animationFinished(12e3)}};