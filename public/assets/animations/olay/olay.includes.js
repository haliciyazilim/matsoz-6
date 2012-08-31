function __Styles(){ballStyle={strokeColor:"#9b763d",fillColor:"#f2c885"},ballTextColor="#8b5400",animDivStyle={position:"absolute",top:"20px",left:"320px",height:"160px",width:"450px",fontSize:"16px"},firstDivStyle={position:"absolute",top:"0px",left:"0px",opacity:0},secondDivStyle={position:"absolute",top:"36px",left:"191px",opacity:0},thirdDivStyle={position:"absolute",top:"82px",left:"0px"},fourthDivStyle={position:"absolute",top:"140px",left:"70px",opacity:0},optionsStyle={position:"absolute",fontSize:"16px",fontWeight:"bold",color:"#000",cursor:"pointer",width:"300px"},optionsImageContainer={position:"relative",width:"32px",height:"32px","float":"left",top:"-8px",marginRight:"10px",backgroundImage:"url(/assets/radio_buttons.png)",backgroundPosition:"0px 0px"},selectedOptionStyle={color:"#235394"},trueOptionStyle={color:"#309423"},falseOptionStyle={color:"#942323"},imagesDivStyle={position:"absolute",top:"20px",left:"20px",width:"248px",height:"233px",border:"1px solid"},questionDivStyle={position:"absolute",top:"40px",left:"320px",width:"250px",height:"80px",fontSize:"20px"}}var animateNumber=function(e){var t,n;if(e==undefined||isNaN(e))e=0;e?(t=5,n=0):(t=4,n=1);for(var r=0;r<t;r++){var i=Animation.balls.children[2*r+n].position;Animation.balls.children[2*r+n].animate({style:{position:new Point(i.x,i.y-40)},duration:500,delay:0,animationType:"easeOut"}),Animation.balls.children[2*r+n].animate({style:{position:new Point(i.x,i.y)},duration:400,delay:500,animationType:"easeIn"}),Animation.balls.children[2*r+n].animate({style:{position:new Point(i.x,i.y-25)},duration:400,delay:900,animationType:"easeOut"}),Animation.balls.children[2*r+n].animate({style:{position:new Point(i.x,i.y)},duration:300,delay:1300,animationType:"easeIn"}),Animation.balls.children[2*r+n].animate({style:{position:new Point(i.x,i.y-15)},duration:300,delay:1600,animationType:"easeOut"}),Animation.balls.children[2*r+n].animate({style:{position:new Point(i.x,i.y)},duration:200,delay:1900,animationType:"easeIn"})}},Question=Class.extend({init:function(e,t){switch(e){case Question.DICE:this.question=Question.diceArray[t];break;case Question.COIN:this.question=Question.coinArray[t];break;case Question.WHEEL:this.question=Question.wheelArray[t];break;case Question.POUCH:this.question=Question.pouchArray[t]}}});Question.DICE=0,Question.COIN=1,Question.WHEEL=2,Question.POUCH=3,Question.diceArray=[],Question.diceArray[0]="7 gelme olasılığı",Question.diceArray[1]="0'dan büyük 7'den küçük sayı gelme olasılığı",Question.diceArray[2]='"Tek sayı gelme olasılığı" ve "Çift sayı gelme olasılığı"',Question.diceArray[3]='"4 gelme olasılığı" ve "Tek sayı gelme olasılığı"',Question.coinArray=[],Question.coinArray[0]="Yazı ya da tura gelmeme olasılığı",Question.coinArray[1]="Yazı ya da tura gelme olasılığı",Question.coinArray[2]='"Yazı gelme olasılığı" ve "Tura gelme olasılığı"',Question.coinArray[3]='"Yazı gelme olasılığı" ve "Yazı ya da tura gelme olasılığı"',Question.wheelArray=[],Question.wheelArray[0]="Yeşil gelme olasılığı",Question.wheelArray[1]="Turuncu, mavi, mor renklerden birinin gelme olasılığı",Question.wheelArray[2]='"Turuncu gelme olasılığı" ve "Mavi ya da mor gelme olasılığı"',Question.wheelArray[3]='"Sarı gelme olasılığı" ve "Turuncu gelme olasılığı"',Question.pouchArray=[],Question.pouchArray[0]="Kırmızı top çekme olasılığı",Question.pouchArray[1]="Mor, pembe, yeşil renk toplardan birini çekme olasılığı",Question.pouchArray[2]='"Pembe top çekme olasılığı" ve "Mor ya da yeşil top çekme olasılığı"',Question.pouchArray[3]='"Mor top çekme olasılığı" ve "Mor ya da yeşil top çekme olasılığı"';var Animation={images:[],init:function(e){Animation.container=e;var t=1e3,n=t+2e3,r=n+2e3,i=r+2e3,s=i+4e3,o=s+4e3;Animation.balls=new Group;for(var u=0;u<9;u++){var a=new Group,f=new Path.Circle(new Point(20+32*u,94),13);f.style=ballStyle;var l=new PointText(new Point(20+32*u,99));l.justification="center",l.strokeWidth="1px",l.strokeColor=ballTextColor,l.content=u+1,l.fillColor=ballTextColor,a.addChild(f),a.addChild(l),Animation.balls.addChild(a)}Animation.balls.opacity=0;var c=Util.dom({parent:Animation.container,tag:"div",css:animDivStyle}),h=Util.dom({parent:c,tag:"div",css:firstDivStyle,html:"0'dan büyük 10'dan küçük sayı çekme olasılığı = <b>1</b> &nbsp;&nbsp;&nbsp;<span style=\"color:red;\">kesin olay</span>"}),p=Util.dom({parent:c,tag:"div",css:secondDivStyle,html:'10 çekme olasılığı = <b>0</b> &nbsp;&nbsp;&nbsp;<span style="color:red;">imkânsız olay</span>'}),d=Util.dom({parent:c,tag:"div",css:thirdDivStyle,html:'<div id="ff"><div id="fT">Çift sayı çekme olasılığı = </div><div id="firstFrac" style="position:absolute;top:-17px;left:180px;width:30px;height:51px;padding:0;margin:0;line-height:25px;"><div id="nom1"></div><div id="line1"></div><div id="denom1"></div></div></div><div id="ss"><div id="sT" style="position:absolute;top:0px;left:230px;width:180px">Tek sayı çekme olasılığı = </div><div id="secondFrac" style="position:absolute;top:-17px;left:410px;width:30px;height:51px;padding:0;margin:0;line-height:25px;"><div id="nom2"></div><div id="line2"></div><div id="denom2"></div></div></div>'});$("#line1").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom1").css("text-align","center").css("height","25px"),$("#nom1").html(4),$("#denom1").css("text-align","center").css("height","25px"),$("#denom1").html(9),$("#line2").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom2").css("text-align","center").css("height","25px"),$("#nom2").html(5),$("#denom2").css("text-align","center").css("height","25px"),$("#denom2").html(9);var v=Util.dom({parent:c,tag:"div",css:fourthDivStyle,html:'<span style="color:red;">Tümleyen olay</span><div id="thirdFrac" style="position:absolute;top:-17px;left:120px;width:50px;height:51px;padding:0;margin:0;line-height:25px;"><div id="nom3"></div><div id="line3"></div><div id="denom3"></div></div><span style="position:absolute;left:180px">=</span><div id="fourthFrac" style="position:absolute;top:-17px;left:200px;width:30px;height:51px;padding:0;margin:0;line-height:25px;"><div id="nom4"></div><div id="line4"></div><div id="denom4"></div></div><span style="position:absolute;left:240px;width:30px;">= <b>1</b></span>'});$("#line3").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom3").css("text-align","center").css("height","25px"),$("#nom3").html("4 + 5"),$("#denom3").css("text-align","center").css("height","25px"),$("#denom3").html(9),$("#line4").css("height","1px").css("border-top","1px solid").css("padding",0),$("#nom4").css("text-align","center").css("height","25px"),$("#nom4").html(9),$("#denom4").css("text-align","center").css("height","25px"),$("#denom4").html(9),Animation.balls.animate({style:{opacity:1},duration:1e3,delay:t,animationType:"easeInOutQuad"}),$(h).delay(n).animate({opacity:1},1e3,"easeInOutQuad"),$(p).delay(r).animate({opacity:1},1e3,"easeInOutQuad"),$("#ff").css("opacity",0).delay(i).animate({opacity:1},1e3,"easeInOutQuad"),AnimationManager.delay(function(){animateNumber(0)},i+1e3),$("#ss").css("opacity",0).delay(s).animate({opacity:1},1e3,"easeInOutQuad"),AnimationManager.delay(function(){animateNumber(1)},s+1e3),$(v).delay(o).animate({opacity:1},1e3,"easeInOutQuad",function(){Main.animationFinished(1e3)})}},Interaction={getFramework:function(){return"paper"},images:[{id:"radio_buttons",src:"/assets/radio_buttons.png"},{id:"dice",src:"/assets/animations/olay/olay_etki_01.jpg"},{id:"coin",src:"/assets/animations/olay/olay_etki_02.jpg"},{id:"wheel",src:"/assets/animations/olay/olay_etki_03.jpg"},{id:"pouch",src:"/assets/animations/olay/olay_etki_04.jpg"}],init:function(e){Interaction.container=e,Main.setObjective("Yandaki olayları tanımlayınız ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendStatus({bottom:"15px",right:"250px",width:"300px",textAlign:"center"}),Interaction.appendButton({bottom:"15px",right:"110px"}),Interaction.questionDiv=Util.dom({parent:Interaction.container,tag:"div",css:questionDivStyle}),Interaction.setRandomGenerator(4),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.cleanOptions(),Interaction.myPause=0,Interaction.randomNumber=e,Interaction.randomNumber2=Util.randomInteger(1,4);var t=new Point(100,100);Interaction.createOptions(t.add(250,0));var n;Interaction.pp&&Interaction.pp.remove();switch(Interaction.randomNumber){case 0:Interaction.questionType=Question.DICE,Interaction.pp=new Raster("dice"),Interaction.pp.position=new Point(144,136);break;case 1:Interaction.questionType=Question.COIN,Interaction.pp=new Raster("coin"),Interaction.pp.position=new Point(144,136);break;case 2:Interaction.questionType=Question.WHEEL,Interaction.pp=new Raster("wheel"),Interaction.pp.position=new Point(144,136);break;case 3:Interaction.questionType=Question.POUCH,Interaction.pp=new Raster("pouch"),Interaction.pp.position=new Point(144,136)}switch(Interaction.randomNumber2){case 0:n=0,Interaction.answer=Interaction.impossibleEvent;break;case 1:n=1,Interaction.answer=Interaction.certainEvent;break;case 2:n=2,Interaction.answer=Interaction.complementaryEvent;break;case 3:n=3,Interaction.answer=Interaction.notComplementaryEvent}Interaction.question=new Question(Interaction.questionType,n),$(Interaction.questionDiv).html(Interaction.question.question)},preCheck:function(){if(Interaction.clickedOption==null)return Interaction.setStatus("Lütfen bir şık seçiniz","alert"),!1},isAnswerCorrect:function(e){return Interaction.clickedOption==Interaction.answer?!0:!1},onCorrectAnswer:function(){$(Interaction.clickedOption).css(trueOptionStyle),$(".image-container",Interaction.clickedOption).css({backgroundPosition:"-64px 0px"}),Interaction.myPause=1},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yeşil renk ile gösterilmiştir.",!1),$(Interaction.clickedOption).css(falseOptionStyle),$(".image-container",Interaction.clickedOption).css({backgroundPosition:"-96px 0px"}),$(".image-container",Interaction.answer).css({backgroundPosition:"-64px 0px"}),$(Interaction.answer).css(trueOptionStyle),Interaction.myPause=1},createOptions:function(e){$(Interaction.certainEvent)&&($(Interaction.certainEvent).remove(),Interaction.certainEvent=null),$(Interaction.impossibleEvent)&&($(Interaction.impossibleEvent).remove(),Interaction.impossibleEvent=null),$(Interaction.complementaryEvent)&&($(Interaction.complementaryEvent).remove(),Interaction.complementaryEvent=null),$(Interaction.notComplementaryEvent)&&($(Interaction.notComplementaryEvent).remove(),Interaction.notComplementaryEvent=null),Interaction.randomNumber2<2?(Interaction.certainEvent=Util.dom({parent:Interaction.container,tag:"div",css:optionsStyle,html:"Kesin olay"}),Interaction.impossibleEvent=Util.dom({parent:Interaction.container,tag:"div",css:optionsStyle,html:"İmkânsız olay"}),Interaction.options=[Interaction.certainEvent,Interaction.impossibleEvent]):(Interaction.complementaryEvent=Util.dom({parent:Interaction.container,tag:"div",css:optionsStyle,html:"Tümleyen olay"}),Interaction.notComplementaryEvent=Util.dom({parent:Interaction.container,tag:"div",css:optionsStyle,html:"Tümleyen olay değil"}),Interaction.options=[Interaction.complementaryEvent,Interaction.notComplementaryEvent]);for(var t=0;t<Interaction.options.length;t++)$(Interaction.options[t]).css({top:e.y+30+40*t,left:e.x-20}).click(function(){Interaction.myPause||(Interaction.cleanOptions(),Interaction.clickedOption=this,$(".image-container",this).css({backgroundPosition:"-32px 0px"}),$(Interaction.clickedOption).css(selectedOptionStyle))}).prepend('<div class="image-container"></div>'),$(".image-container",Interaction.options[t]).css(optionsImageContainer)},cleanOptions:function(){Interaction.clickedOption=null,$(Interaction.options).each(function(){$(this).css(optionsStyle)}),$(".image-container").css({backgroundPosition:"0px 0px"})}};