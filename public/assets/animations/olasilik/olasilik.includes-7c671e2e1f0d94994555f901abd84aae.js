function __Styles(){ballColors=[],ballColors[0]="#ff0000",ballColors[1]="#0096ff",ballColors[2]="#ff9900",ballColors[3]="#00c800",questionDivStyle={position:"absolute",top:"100px",left:"260px",height:"100px",width:"320px"},questionTextStyle={position:"absolute",top:"30px",left:"-10px",width:"250px",height:"20px",fontSize:"18px",textAlign:"right"},lineStyle={position:"absolute",height:"1px",width:"38px",padding:0,borderTop:"1px solid",top:"38px",left:"248px"},animationDivStyle={position:"absolute",top:"30px",left:"30px",height:"160px",width:"700px",verticalAlign:"middle"},firstDivStyle={position:"absolute",top:"10px",left:"100px",height:"60px",width:"500px",fontSize:"18px"},secondDivStyle={position:"absolute",top:"80px",left:"160px",height:"60px",width:"410px",fontSize:"18px"}}var generateBalls=function(){try{var e=Util.randomInteger(2,5);Interaction.ballsGroup=new Group,Interaction.myColors=[];var t=[];t=Util.getShuffledArray(4),Interaction.myColors[0]=ballColors[t[0]],Interaction.myColors[1]=ballColors[t[1]],Interaction.myColors[2]=ballColors[t[2]],Interaction.myColors[3]=ballColors[t[3]],Interaction.questionArr=[];for(var n=0;n<e;n++)Interaction.myColors[n]=="#ff0000"?Interaction.questionArr[n]="Kırmızı":Interaction.myColors[n]=="#0096ff"?Interaction.questionArr[n]="Mavi":Interaction.myColors[n]=="#ff9900"?Interaction.questionArr[n]="Turuncu":Interaction.myColors[n]=="#00c800"&&(Interaction.questionArr[n]="Yeşil");Interaction.ballArr=[];var r=0,i,s=new Group,o;for(var n=0;n<e;n++){var u=Util.randomInteger(1,4);Interaction.ballArr.push(u);for(var a=0;a<u;a++)i=new Path.Circle(new Point(50+a*42+r*42,40),18),i.fillColor=Interaction.myColors[n],o=new Raster("shadow"),o.position=new Point(50+a*42+r*42,40),s.addChild(i),s.addChild(o),Interaction.ballsGroup.addChild(s);r+=u}Interaction.totalBall=r,Interaction.ballsGroup.position=new Point(Interaction.ballsGroup.position.x+(12-r)*20,Interaction.ballsGroup.position.y);for(var n=0;n<Interaction.ballsGroup.children[0].children.length;n++)Interaction.ballsGroup.children[0].children[n].position.y-=100;for(var a=0;a<Interaction.ballsGroup.children[0].children.length;a+=2)Interaction.ballsGroup.children[0].children[a].animate({style:{position:Interaction.ballsGroup.children[0].children[a].position.add(new Point(0,100))},duration:1e3,delay:a*200,animationType:"easeOutBounce"}),Interaction.ballsGroup.children[0].children[a+1].animate({style:{position:Interaction.ballsGroup.children[0].children[a+1].position.add(new Point(0,100))},duration:1e3,delay:a*200,animationType:"easeOutBounce"});Interaction.myIndex=0}catch(f){return!1}return!0},Animation={images:[{id:"dicee",src:"/assets/animations/olasilik/olasilik_zar.png"}],init:function(e){Animation.container=e;var t=1e3,n=t+6e3,r=n+2e3;Animation.animDiv=Util.dom({parent:Animation.container,tag:"div",css:animationDivStyle}),Animation.firstDiv=Util.dom({parent:Animation.animDiv,tag:"div",css:firstDivStyle,html:'<div id="textt" style="opacity:0;position:absolute;top:18px;left:2px;padding:0;margin:0;">Bir olayın olma olasılığı =</div><div id="fract" style="position:absolute;left:210px;height:52px;width:280px;padding:0;margin:0;line-height:25px;"><div id="nomt" style="opacity:0;"></div><div id="linet" style="opacity:0;"></div><div id="denomt" style="opacity:0;"></div></div>'}),$("#linet").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nomt").css("text-align","center").css("height","25px"),$("#nomt").html("İstenen olayın çıktı sayısı"),$("#denomt").css("text-align","center").css("height","25px"),$("#denomt").html("Mümkün olan tüm çıktıların sayısı"),Animation.secondDiv=Util.dom({parent:Animation.animDiv,tag:"div",css:secondDivStyle,html:'<div id="textt2" style=opacity:0;position:absolute;top:20px;left:140px;">2 gelme olasılığı = </div><div id="fracs" style="position:absolute;top:3px;left:296px;height:51px;width:30px;padding:0;margin:0;line-height:25px;"><div id="noms" style="opacity:0;"></div><div id="lines" style="opacity:0;"></div><div id="denoms" style="opacity:0;"></div></div>'}),$("#lines").css("height","1px").css("border-top","1px solid").css("padding",0),$("#noms").css("text-align","center").css("height","25px"),$("#noms").html(1),$("#denoms").css("text-align","center").css("height","25px"),$("#denoms").html(6),$("#textt").delay(t).animate({opacity:1},1e3,"easeInOutQuad"),$("#linet").delay(t+1500).animate({opacity:1},1e3,"easeInOutQuad"),$("#nomt").delay(t+3e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#denomt").delay(t+4500).animate({opacity:1},1e3,"easeInOutQuad"),pp=new Raster("dicee"),pp.position=new Point(260,-30),pp.animate({style:{position:pp.position.add(0,150)},duration:1500,delay:n,animationType:"easeOutBounce"}),$("#textt2").delay(r).animate({opacity:1},1e3,"easeInOutQuad"),$("#lines").delay(r+1500).animate({opacity:1},1e3,"easeInOutQuad"),$("#noms").delay(r+1500).animate({opacity:1},1e3,"easeInOutQuad"),$("#denoms").delay(r+1500).animate({opacity:1},1e3,"easeInOutQuad",function(){Main.animationFinished(1e3)})}},Interaction={getFramework:function(){return"paper"},images:[{id:"shadow",src:"/assets/animations/olasilik/top_golge.png"},{id:"pouch1",src:"/assets/animations/olasilik/olasilik_torba_01.png"},{id:"pouch2",src:"/assets/animations/olasilik/olasilik_torba_02.png"}],init:function(e){Interaction.container=e,Main.setObjective("Yandaki toplar bir torbanın içindedir. İstenen topun torbadan rastgele çekilme olasılığını bulunuz ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.questionDiv=Util.dom({parent:Interaction.container,tag:"div",css:questionDivStyle}),Interaction.questionText=Util.dom({parent:Interaction.questionDiv,tag:"div",css:questionTextStyle}),Interaction.line=Util.dom({parent:Interaction.questionDiv,tag:"div",css:lineStyle}),Interaction.appendStatus({bottom:"10px",right:"170px",width:"400px",height:"26px",textAlign:"center"}),Interaction.appendButton({bottom:"10px",right:"40px"}),Interaction.appendInput({position:"absolute",top:"2px",left:"250px",width:"32px",height:"30px",fontSize:"24px"}),Interaction.appendInput({position:"absolute",top:"42px",left:"250px",width:"32px",height:"30px",fontSize:"24px"}),$(Interaction.questionDiv).append(Interaction.inputs[0]),$(Interaction.questionDiv).append(Interaction.inputs[1]),Interaction.myIndex=0,Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.ansGroup&&Interaction.ansGroup.remove(),Interaction.pouch1&&Interaction.pouch1.remove(),Interaction.pouch2&&Interaction.pouch2.remove(),$(Interaction.inputs[0]).css("color","black"),$(Interaction.inputs[1]).css("color","black"),Interaction.questionArr?Interaction.myIndex==Interaction.questionArr.length-1?($(Interaction.questionDiv).css("opacity",0),Interaction.ballsGroup&&Interaction.ballsGroup.remove(),generateBalls(),Interaction.shuffledIndex=Util.getShuffledArray(Interaction.questionArr.length),Interaction.ballDropTime=Interaction.totalBall*400+1e3,Interaction.qIndex=Interaction.shuffledIndex[Interaction.myIndex],Interaction.question=""+Interaction.questionArr[Interaction.qIndex]+" top çekilme olasılığı =",$(Interaction.questionText).html(Interaction.question),Interaction.answer=Interaction.ballArr[Interaction.qIndex]/Interaction.totalBall,setTimeout('$(Interaction.questionDiv).css("opacity",1)',Interaction.ballDropTime)):(Interaction.myIndex+=1,Interaction.qIndex=Interaction.shuffledIndex[Interaction.myIndex],Interaction.question=""+Interaction.questionArr[Interaction.qIndex]+" top çekilme olasılığı =",$(Interaction.questionText).html(Interaction.question),Interaction.answer=Interaction.ballArr[Interaction.qIndex]/Interaction.totalBall):($(Interaction.questionDiv).css("opacity",0),generateBalls(),Interaction.shuffledIndex=Util.getShuffledArray(Interaction.questionArr.length),Interaction.ballDropTime=Interaction.totalBall*400+1e3,Interaction.qIndex=Interaction.shuffledIndex[Interaction.myIndex],Interaction.question=""+Interaction.questionArr[Interaction.qIndex]+" top çekilme olasılığı =",$(Interaction.questionText).html(Interaction.question),Interaction.answer=Interaction.ballArr[Interaction.qIndex]/Interaction.totalBall,setTimeout('$(Interaction.questionDiv).css("opacity",1)',Interaction.ballDropTime))},preCheck:function(){},isAnswerCorrect:function(e){return e[0]/e[1]==Interaction.answer?!0:!1},onCorrectAnswer:function(){Interaction.pause(),$(Interaction.inputs[0]).css("color","green"),$(Interaction.inputs[1]).css("color","green");var e=Interaction.myColors[Interaction.qIndex];Interaction.pouch2=new Raster("pouch2"),Interaction.pouch2.position=new Point(92.5,184.5);var t=new Path.Circle(new Point(115,196),18);t.fillColor=e;var n=new Raster("shadow");n.position=new Point(115,196),Interaction.ansGroup=new Group,Interaction.ansGroup.addChild(t),Interaction.ansGroup.addChild(n),Interaction.pouch1=new Raster("pouch1"),Interaction.pouch1.position=new Point(92.5,184.5),Interaction.ansGroup.animate({style:{position:new Point(Interaction.ansGroup.position.x,Interaction.ansGroup.position.y-110)},duration:1e3,delay:1e3,animationType:"easeInOutQuad",callback:function(){Interaction.ansGroup.firstPosition=Interaction.ansGroup.position}}),Interaction.ansGroup.X=0,Interaction.ansGroup.animate({style:{X:36},duration:1e3,delay:2500,animationType:"easeInOutQuad",update:function(){this.position=this.firstPosition.add(2.51*this.X,.04*this.X*this.X)},callback:function(){Interaction.ansGroup.firstPosition=Interaction.ansGroup.position}}),setTimeout("Interaction.resume();",3500)},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir!",!1),Interaction.inputs[0].value=Interaction.ballArr[Interaction.qIndex],Interaction.inputs[1].value=Interaction.totalBall,$(Interaction.inputs[0]).css("color","green"),$(Interaction.inputs[1]).css("color","green")}};