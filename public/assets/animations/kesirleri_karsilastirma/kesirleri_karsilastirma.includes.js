function __Styles(){placeHolderColor="#bfe8ef",fractionsColor="#e6c181",sortableCursorType="pointer",fractionsDivStyle={position:"absolute",top:"30px",left:"150px",height:"40px",width:"180px",fontSize:"16px",opacity:0},equalizedFractionsDivStyle={position:"absolute",top:"30px",left:"470px",height:"40px",width:"180px",fontSize:"16px"},fractionsOnAxisDivStyle={position:"absolute",top:"152px",left:"244px",height:"40px",width:"380px",fontSize:"16px"},informationsDivStyle={position:"absolute",top:"70px",left:"100px",width:"540px",height:"60px"}}var Animation={images:[],init:function(e){Animation.container=e;var t=0,n=t+1e3,r=n+2e3,i=r+1500,s=i+2e3,o=s+6e3,u=o+12500,a=u+2e3,f=a+2e3,l=Util.dom({parent:Animation.container,tag:"div",css:fractionsDivStyle,html:'<div id="firstF" style="position:absolute;top:0px;left:0px;width:20px;height:33px;padding:0;margin:0;"><div id="firstNom" style="text-align:center;height:16px;">10</div><div id="firstLine" style="height:1px;padding:0;border-top:1px solid;"></div><div id="firstDenom" style="text-align:center;height:16px;">16</div></div><div id="secondF" style="position:absolute;top:0px;left:70px;width:20px;height:33px;padding:0;margin:0;"><div id="secondNom" style="text-align:center;height:16px;">1</div><div id="secondLine" style="height:1px;padding:0;border-top:1px solid;"></div><div id="secondDenom" style="text-align:center;height:16px;">4</div></div><div id="thirdF" style="position:absolute;top:0px;left:140px;width:20px;height:33px;padding:0;margin:0;"><div id="thirdNom" style="text-align:center;height:16px;">7</div><div id="thirdLine" style="height:1px;padding:0;border-top:1px solid;"></div><div id="thirdDenom" style="text-align:center;height:16px;">8</div></div>'}),c=Util.dom({parent:Animation.container,tag:"div",css:equalizedFractionsDivStyle,html:'<div id="fourthF" style="opacity:0;position:absolute;top:0px;left:0px;width:20px;height:33px;padding:0;margin:0;"><div id="fourthNom" style="text-align:center;height:16px;">5</div><div id="fourthLine" style="height:1px;padding:0;border-top:1px solid;"></div><div id="fourthDenom" style="text-align:center;height:16px;">8</div></div><span id="firstL" style="opacity:0;position:absolute;top:10px;left:40px;"><</span> <div id="fifthF" style="opacity:0;position:absolute;top:0px;left:70px;width:20px;height:33px;padding:0;margin:0;"><div id="fifthNom" style="text-align:center;height:16px;">2</div><div id="fifthLine" style="height:1px;padding:0;border-top:1px solid;"></div><div id="fifthDenom" style="text-align:center;height:16px;">8</div></div><span id="secondL" style="opacity:0;position:absolute;top:10px;left:110px;"><</span> <div id="sixthF" style="opacity:0;position:absolute;top:0px;left:140px;width:20px;height:33px;padding:0;margin:0;"><div id="sixthNom" style="text-align:center;height:16px;">7</div><div id="sixthLine" style="height:1px;padding:0;border-top:1px solid;"></div><div id="sixthDenom" style="text-align:center;height:16px;">8</div></div>'}),h=new Group,p=new Path.OneSidedArrow(new Point(60,130),new Point(700,130),10,30),d=new Path.OneSidedArrow(new Point(700,130),new Point(701,130),10,30);p.rotate(180),h.addChild(p),h.addChild(d),h.opacity=0;var v=new Group,m=new Path.Circle(new Point(100,130),6);m.fillColor="black";var g=new Path.Circle(new Point(660,130),6);g.fillColor="black",v.addChild(m),v.addChild(g),v.opacity=0;var y=new Group;for(var b=0;b<7;b++){var w=new Path.Circle(new Point(170+70*b,130),4);w.fillColor="black",w.opacity=0,y.addChild(w)}y.children[3].opacity=1,y.opacity=0;var E=new Group;for(var b=0;b<3;b++){var S=new Path.Circle(new Point(146+70*b,30),24);S.strokeColor="black",S.opacity=0,E.addChild(S)}var x=Util.dom({parent:Animation.container,tag:"div",css:fractionsOnAxisDivStyle,html:'<span id="zero" style="opacity:0;position:absolute;top:-40px;left:-136px;font-size:24px;">0</span><span id="one" style="opacity:0;position:absolute;top:-40px;left:422px;font-size:24px;">1</span><div id="seventhF" style="opacity:0;position:absolute;top:0px;left:0px;width:20px;height:33px;padding:0;margin:0;"><div id="seventhNom" style="text-align:center;height:16px;">2</div><div id="seventhLine" style="height:1px;padding:0;border-top:1px solid;"></div><div id="seventhDenom" style="text-align:center;height:16px;">8</div></div><div id="eighthF" style="opacity:0;position:absolute;top:0px;left:210px;width:20px;height:33px;padding:0;margin:0;"><div id="eighthNom" style="text-align:center;height:16px;">5</div><div id="eighthLine" style="height:1px;padding:0;border-top:1px solid;"></div><div id="eighthDenom" style="text-align:center;height:16px;">8</div></div><div id="ninthF" style="opacity:0;position:absolute;top:0px;left:350px;width:20px;height:33px;padding:0;margin:0;"><div id="ninthNom" style="text-align:center;height:16px;">7</div><div id="ninthLine" style="height:1px;padding:0;border-top:1px solid;"></div><div id="ninthDenom" style="text-align:center;height:16px;">8</div></div><div id="tenthF" style="opacity:0;position:absolute;top:-46px;left:140px;width:20px;height:33px;padding:0;margin:0;"><div id="tenthNom" style="text-align:center;height:16px;">1</div><div id="tenthLine" style="height:1px;padding:0;border-top:1px solid;"></div><div id="tenthDenom" style="text-align:center;height:16px;">2</div></div>'}),T=new Path.OneSidedArrow(new Point(166,54),new Point(354,116),6,20);T.opacity=0;var N=new Path.OneSidedArrow(new Point(216,60),new Point(120,110),6,20);N.opacity=0;var C=new Path.OneSidedArrow(new Point(310,50),new Point(640,110),6,20);C.opacity=0;var k=Util.dom({parent:Animation.container,tag:"div",css:informationsDivStyle,html:'<span id="firstInfo" style="opacity:0;position:absolute;top:20px;left:200px;">yarıma yakın</span><span id="secondInfo" style="opacity:0;position:absolute;top:16px;left:-16px;">0\'a daha yakın</span><span id="thirdInfo" style="opacity:0;position:absolute;top:10px;left:410px;">1\'e daha yakın</span>'});$(l).delay(n).animate({opacity:1},1e3,"easeInOutQuad"),h.animate({style:{opacity:1},duration:1e3,delay:r,animationType:"easeInOutQuad"}),v.animate({style:{opacity:1},duration:1e3,delay:i,animationType:"easeInOutQuad"}),y.animate({style:{opacity:1},duration:1e3,delay:i,animationType:"easeInOutQuad"}),$("#zero").delay(i).animate({opacity:1},1e3,"easeInOutQuad"),$("#one").delay(i).animate({opacity:1},1e3,"easeInOutQuad"),$("#tenthF").delay(i).animate({opacity:1},1e3,"easeInOutQuad"),E.children[0].animate({style:{opacity:1},duration:1e3,delay:s,animationType:"easeInOutQuad"}),T.animate({style:{opacity:1},duration:1e3,delay:s,animationType:"easeInOutQuad"}),$("#firstInfo").delay(s).animate({opacity:1},1e3,"easeInOutQuad"),E.children[1].animate({style:{opacity:1},duration:1e3,delay:s+2e3,animationType:"easeInOutQuad"}),N.animate({style:{opacity:1},duration:1e3,delay:s+2e3,animationType:"easeInOutQuad"}),$("#secondInfo").delay(s+2e3).animate({opacity:1},1e3,"easeInOutQuad"),E.children[2].animate({style:{opacity:1},duration:1e3,delay:s+4e3,animationType:"easeInOutQuad"}),C.animate({style:{opacity:1},duration:1e3,delay:s+4e3,animationType:"easeInOutQuad"}),$("#thirdInfo").delay(s+4e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#firstF").delay(o).animate({color:"#ff0000"},1e3,"easeInOutQuad").delay(1500).animate({color:"#000000"},1e3,"easeInOutQuad"),$("#fourthF").delay(o).animate({opacity:1},1e3,"easeInOutQuad"),$("#secondF").delay(o+4500).animate({color:"#ff0000"},1e3,"easeInOutQuad").delay(1500).animate({color:"#000000"},1e3,"easeInOutQuad"),$("#fifthF").delay(o+4500).animate({opacity:1},1e3,"easeInOutQuad"),$("#thirdF").delay(o+9e3).animate({color:"#ff0000"},1e3,"easeInOutQuad").delay(1500).animate({color:"#000000"},1e3,"easeInOutQuad"),$("#sixthF").delay(o+9e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#fourthF").delay(u-o-1e3).animate({left:"+=70"},1500,"easeInOutQuad"),$("#fifthF").delay(u-o-5500).animate({left:"-=70"},1500,"easeInOutQuad"),$("#firstL").delay(a).animate({opacity:1},1e3,"easeInOutQuad"),$("#secondL").delay(a).animate({opacity:1},1e3,"easeInOutQuad");for(var b=0;b<y.children.length;b++)y.children[b].animate({style:{opacity:1},duration:1e3,delay:f,animationType:"easeInOutQuad"});$("#seventhF").delay(f+2e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#eighthF").delay(f+2e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#ninthF").delay(f+2e3).animate({opacity:1},1e3,"easeInOutQuad",function(){Main.animationFinished(1e3)})}},Interaction={getFramework:function(){return"paper"},init:function(e){Interaction.container=e,Main.setObjective(""),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.sortingDiv=document.createElement("div"),Interaction.sortingDiv.id="sortingDiv",$(Interaction.container).append(Interaction.sortingDiv),$(Interaction.sortingDiv).css({width:"80px",height:"40px",position:"absolute",left:"240px",top:"10px",padding:0,margin:0}),$(Interaction.sortingDiv).append('<div id="lessThanDiv"><img src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_base.png"/><img id="lessThan" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_fg.png" /><img id="lessThanHover" class="drg" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_hover.png" /></div>'),$("#lessThanDiv").css("position","relative").css("height","40px").css("width","40px").css("float","left").css("line-height","32px").css("cursor","pointer"),$("#lessThan").css("position","absolute").css("top","0px").css("left","0px"),$("#lessThanHover").css("position","absolute").css("top","0px").css("left","0px").css("opacity",0),$(Interaction.sortingDiv).append('<div id="greaterThanDiv"><img src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_base.png"/><img id="greaterThan" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_fg.png" /><img id="greaterThanHover" class="drg" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_hover.png" /></div>'),$("#greaterThanDiv").css("position","relative").css("height","40px").css("width","40px").css("float","left").css("line-height","32px").css("cursor","pointer"),$("#greaterThan").css("position","absolute").css("top","0px").css("left","0px"),$("#greaterThanHover").css("position","absolute").css("top","0px").css("left","0px").css("opacity",0),$("#sortingDiv .drg").draggable({revert:"invalid",helper:"clone",cursor:"pointer",stack:"#sortingDiv .drg",start:function(e,t){Interaction.setStatus(""),$($(t.helper.get(0)).siblings(this)[1]).css("opacity",0),$(t.helper.get(0)).css("opacity",1)},stop:function(e,t){$(t.helper.get(0)).css("opacity",0),this.id!=Interaction.oldStr+"Hover"&&$($(t.helper.get(0)).siblings(this)[1]).css("opacity",1)}}),Interaction.appendStatus({bottom:"26px",right:"160px",height:"40px",width:"300px",textAlign:"center"}),Interaction.appendButton({bottom:"30px",right:"40px"}),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.dropped&&$(Interaction.dropped).remove(),Interaction.activeStr&&(Interaction.activeStr=null);if($(Interaction.clone2)){$(Interaction.clone2).remove(),Interaction.clone2=null,$("#sortingDiv img").draggable("enable"),Interaction.oldActiveStr&&$("."+Interaction.oldActiveStr).css("opacity",0),Interaction.oldStr&&$("#"+Interaction.oldStr).css("opacity",1),Interaction.answerId&&$("#"+Interaction.answerId.replace("Hover","")).css("opacity",1),Interaction.sortingUl&&$(Interaction.sortingUl).sortable({disabled:!1}),Interaction.pointDiv&&$(Interaction.pointDiv).remove();if(Interaction.ansF)for(i=0;i<Interaction.ansF.length;i++)$(Interaction.ansF[i]).remove();Interaction.lline&&Interaction.lline.remove(),Interaction.numericalAxis&&Interaction.numericalAxis.remove(),Interaction.questionDiv&&$(Interaction.questionDiv).remove(),Interaction.qType=Math.floor(Math.random()*2),Interaction.numOfFracs=3,Interaction.questionDiv=document.createElement("div"),Interaction.questionDiv.id="questionDiv",$(Interaction.container).append(Interaction.questionDiv),$(Interaction.questionDiv).css({position:"absolute",top:"65px",left:"84px",width:"400px",height:"100px",listStyleType:"none"}),Interaction.sortingUl=document.createElement("ul"),Interaction.sortingUl.id="sortingUl",$(Interaction.questionDiv).append(Interaction.sortingUl),$(Interaction.sortingUl).html('<li id="firstFrac"><div id="firstFracDiv"></div></li><div id="dropDiv1"  class="dropDivs"/><li id="secondFrac"><div id="secondFracDiv"></div></li><div id="dropDiv2" class="dropDivs"/><li id="thirdFrac"><div id="thirdFracDiv"></div></li>'),$(Interaction.sortingUl).css({width:"400px",height:"100px"}),$(Interaction.sortingUl).sortable({items:"li:not(div)",placeholder:"placeHolder",tolerance:"pointer",cursor:sortableCursorType,axis:"x"}),$("#dropDiv1").css({width:"54px",height:"54px",position:"absolute",left:"114px",top:"0px",padding:0,margin:0}),$("#dropDiv2").css({width:"54px",height:"54px",position:"absolute",left:"220px",top:"0px",padding:0,margin:0}),$(Interaction.container).append("<style> #sortingUl li {float:left; width:36px; height:51px; margin-left:70px; font-size:22px;}</style>"),$(Interaction.container).append("<style> #questionDiv #sortingUl .placeHolder { width: 36px; height:51px}</style>"),$("#firstFracDiv").html('<div id="nom1">5</div><div id="line1"></div><div id="denom1">10</div>'),$("#firstFracDiv").css("width","36px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#line1").css("height","1px").css("width","32px").css("border-top","2px solid").css("padding",0),$("#nom1").css("text-align","center").css("width","30px").css("height","25px"),$("#denom1").css("text-align","center").css("width","30px").css("height","25px"),$("#secondFracDiv").html('<div id="nom2">7</div><div id="line2"></div><div id="denom2">10</div>'),$("#secondFracDiv").css("width","36px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#line2").css("height","1px").css("width","32px").css("border-top","2px solid").css("padding",0),$("#nom2").css("text-align","center").css("width","30px").css("height","25px"),$("#denom2").css("text-align","center").css("width","30px").css("height","25px"),$("#thirdFracDiv").html('<div id="nom3">3</div><div id="line3"></div><div id="denom3">5</div>'),$("#thirdFracDiv").css("width","36px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#line3").css("height","1px").css("width","32px").css("border-top","2px solid").css("padding",0),$("#nom3").css("text-align","center").css("width","30px").css("height","25px"),$("#denom3").css("text-align","center").css("width","30px").css("height","25px"),Interaction.getFractionsToBeSorted(Interaction.numOfFracs),Interaction.nomD=$("#nom1").get(0),Interaction.denomD=$("#denom1").get(0),Interaction.nom2D=$("#nom2").get(0),Interaction.denom2D=$("#denom2").get(0),Interaction.nom3D=$("#nom3").get(0),Interaction.denom3D=$("#denom3").get(0),$(Interaction.nomD).html(Interaction.nom[0]),$(Interaction.denomD).html(Interaction.denom[0]),$(Interaction.nom2D).html(Interaction.nom[1]),$(Interaction.denom2D).html(Interaction.denom[1]),$(Interaction.nom3D).html(Interaction.nom[2]),$(Interaction.denom3D).html(Interaction.denom[2]),Interaction.numOfFracs==4?(Interaction.nom4D=$("#nom4").get(0),Interaction.denom4D=$("#denom4").get(0),$(Interaction.nom4D).html(Interaction.nom[3]),$(Interaction.denom4D).html(Interaction.denom[3])):Interaction.numOfFracs==5&&(Interaction.nom4D=$("#nom4").get(0),Interaction.denom4D=$("#denom4").get(0),Interaction.nom5D=$("#nom5").get(0),Interaction.denom5D=$("#denom5").get(0),$(Interaction.nom4D).html(Interaction.nom[3]),$(Interaction.denom4D).html(Interaction.denom[3]),$(Interaction.nom5D).html(Interaction.nom[4]),$(Interaction.denom5D).html(Interaction.denom[4])),Interaction.fracIds=[],Interaction.fracIds[0]="firstFrac",Interaction.fracIds[1]="secondFrac",Interaction.fracIds[2]="thirdFrac",Interaction.numOfFracs==4?Interaction.fracIds[3]="fourthFrac":Interaction.numOfFracs==5&&(Interaction.fracIds[3]="fourthFrac",Interaction.fracIds[4]="fifthFrac"),$(".dropDivs").droppable({accept:".drg",tolerance:"pointer",drop:function(e,t){Interaction.oldActiveStr&&($("."+Interaction.oldActiveStr).css("opacity",0),$("#"+Interaction.oldActiveStr.replace("Active","Hover")).draggable({disabled:!1}),$("#"+Interaction.oldStr).css("opacity",1)),Interaction.activeStr=$(t.draggable).get(0).id,$("#"+Interaction.activeStr).draggable({disabled:!0});var n=Interaction.activeStr.replace("Hover","");Interaction.activeStr=Interaction.activeStr.replace("Hover","Active"),$("."+Interaction.activeStr).css("opacity",1),Interaction.oldActiveStr=Interaction.activeStr,Interaction.oldStr=n}}),$(".dropDivs").append('<div class="targetContainer"><img src="/assets/animations/kesirleri_karsilastirma/oran_hedef.png" class="target" /></div>'),$(".targetContainer").css("position","relative").css("height","54px").css("width","54px").css("float","left"),$(".target").css("position","absolute").css("top","0px").css("left","0px"),$(".dropDivs").append('<img class="lessThanActive" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png" /><img class="greaterThanActive" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" />'),$(".lessThanActive").css("position","absolute").css("top","11px").css("left","11px").css("opacity",0),$(".greaterThanActive").css("position","absolute").css("top","11px").css("left","11px").css("opacity",0),Interaction.qType==0?Main.setObjective('Yandaki kesirleri <span style="color:red;font-weight:bold;">büyükten küçüğe</span> sıralayınız. Bunun için kesirleri sağa ya da sola kaydırıp diğer kesirlerle yerlerini değiştirebilirsiniz. Daha sonra aralarına küçük (<) ya da büyük (>) işaretlerinden birini sürükleyerek sıralamayı tamamlayabilirsiniz.'):Main.setObjective('Yandaki kesirleri <span style="color:red;font-weight:bold;">küçükten büyüğe</span> sıralayınız. Bunun için kesirleri sağa ya da sola kaydırıp diğer kesirlerle yerlerini değiştirebilirsiniz. Daha sonra aralarına küçük (<) ya da büyük (>) işaretlerinden birini sürükleyerek sıralamayı tamamlayabilirsiniz.')}},preCheck:function(){Interaction.dropped=Interaction.activeStr;if(Interaction.dropped==null||Interaction.dropped==undefined)return Interaction.setStatus("Lütfen işaretlerden birini kutucuğa sürükleyiniz.","alert"),!1},isAnswerCorrect:function(e){Interaction.userAnswerArr=[];if(Interaction.qType==1){Interaction.frac=[],Interaction.sortedFrac=[],Interaction.answerIdStr="lessThanActive",Interaction.answerIdsArray=[];for(var t=0;t<Interaction.numOfFracs;t++)Interaction.frac[t]=Interaction.nom[t]/Interaction.denom[t];for(var t=0;t<Interaction.numOfFracs;t++)Interaction.sortedFrac[t]=Interaction.frac[t];Interaction.sortedFrac.sort(function(e,t){return e-t});for(var t=0;t<Interaction.numOfFracs;t++)Interaction.answerIdsArray[Interaction.sortedFrac.indexOf(Interaction.frac[t])]=Interaction.fracIds[t]}else{Interaction.frac=[],Interaction.sortedFrac=[],Interaction.answerIdStr="greaterThanActive",Interaction.answerIdsArray=[];for(var t=0;t<Interaction.numOfFracs;t++)Interaction.frac[t]=Interaction.nom[t]/Interaction.denom[t];for(var t=0;t<Interaction.numOfFracs;t++)Interaction.sortedFrac[t]=Interaction.frac[t];Interaction.sortedFrac.sort(function(e,t){return t-e});for(var t=0;t<Interaction.numOfFracs;t++)Interaction.answerIdsArray[Interaction.sortedFrac.indexOf(Interaction.frac[t])]=Interaction.fracIds[t]}for(t=0;t<Interaction.numOfFracs;t++)Interaction.userAnswerArr[t]=$(Interaction.sortingUl).find("li")[t].id;var n;for(t=0,n=0;t<Interaction.numOfFracs;t++)Interaction.userAnswerArr[t]==Interaction.answerIdsArray[t]&&(n+=1);return n==Interaction.numOfFracs&&Interaction.dropped==Interaction.answerIdStr?($("#sortingDiv img").draggable("disable"),!0):!1},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir.",!1);if(Interaction.dropped!=Interaction.answerIdStr){Interaction.pause(),Interaction.clone2=[],$("."+Interaction.oldActiveStr).css("opacity",0),Interaction.answerId=Interaction.answerIdStr.replace("Active","Hover"),$("#"+Interaction.oldActiveStr.replace("Active","")).css("opacity",1),$("#"+Interaction.answerId.replace("Hover","")).css("opacity",0);for(var e=0;e<Interaction.numOfFracs-1;e++){Interaction.clone2[e]=$("#"+Interaction.answerId).clone(),Interaction.clone2[e].attr("class","flying"),Interaction.clone2[e].attr("id",e);var t=$(Interaction.sortingDiv).position().top,n=$(Interaction.sortingDiv).position().left;Interaction.qType==0&&(n+=40);var r=$(Interaction.questionDiv).position().top,i=$(Interaction.questionDiv).position().left,s=parseInt($(".dropDivs")[e].style.top)+11+r,o=parseInt($(".dropDivs")[e].style.left)+11+i;$(Interaction.clone2[e]).css("position","absolute").css("top",t).css("left",n).css("opacity",0),$(Interaction.container).append(Interaction.clone2[e]),$(Interaction.clone2[e]).delay(0).animate({opacity:200,top:s,left:o},1500,"easeInOutQuad",function(){$(this).remove(),$("."+Interaction.answerIdStr).css("opacity",1),Interaction.resume(500)})}$("#sortingDiv img").draggable("disable"),Interaction.oldActiveStr=Interaction.answerIdStr}for(var e=0;e<Interaction.numOfFracs;e++)Interaction.userAnswerArr[e]==Interaction.answerIdsArray[e]?$("#"+Interaction.userAnswerArr[e]).css("color","green"):$("#"+Interaction.userAnswerArr[e]).css("color","red");Interaction.nom2=[],Interaction.denom2=[],$(Interaction.sortingUl).sortable({disabled:!0}),Interaction.numOfFracs==5?Interaction.lcm=Util.lcm(Interaction.denom[0],Util.lcm(Interaction.denom[1],Interaction.denom[2],Interaction.denom[3],Interaction.denom[4])):Interaction.lcm=Util.lcm(Interaction.denom[0],Interaction.denom[1],Interaction.denom[2],Interaction.denom[3]);for(var e=0;e<Interaction.numOfFracs;e++)Interaction.nom2[e]=Interaction.nom[e]*(Interaction.lcm/Interaction.denom[e]),Interaction.denom2[e]=Interaction.lcm;Interaction.GetNumericalAxis(Interaction.lcm)},GetNumericalAxis:function(e){Interaction.numericalAxis=new Group;var t=new Group,n=new Path.OneSidedArrow(new Point(20,170),new Point(560,170),10,30),r=new Path.OneSidedArrow(new Point(560,170),new Point(561,170),10,30);n.rotate(180),t.addChild(n),t.addChild(r);var i=new Group,s=new Path.Circle(new Point(50,170),5);s.fillColor="black";var o=new Path.Circle(new Point(530,170),5);o.fillColor="black",i.addChild(s),i.addChild(o);var u=480/e;Interaction.smallDots=new Group;for(var a=0;a<e-1;a++){var f=new Path.Circle(new Point(50+u*(a+1),170),3);f.fillColor="black",Interaction.smallDots.addChild(f)}Interaction.numericalAxis.addChild(t),Interaction.numericalAxis.addChild(i),Interaction.numericalAxis.addChild(Interaction.smallDots);var l,c;Interaction.index=[],Interaction.index2=[],Interaction.lline=new Group,Interaction.nom22=[],Interaction.posX2=[],Interaction.posY2=[];for(var a=0;a<Interaction.numOfFracs;a++)Interaction.nom22[a]=Interaction.nom2[a];Interaction.nom22.sort(function(e,t){return e-t}),Interaction.ansF=[];for(var a=0;a<Interaction.numOfFracs;a++){Interaction.index[a]=Interaction.nom22[a]-1,Interaction.index2[a]=Interaction.nom2[a]-1,l=Interaction.smallDots.children[Interaction.index[a]].position.x,c=Interaction.smallDots.children[Interaction.index[a]].position.y,Interaction.posX2[a]=Interaction.smallDots.children[Interaction.index2[a]].position.x-8,Interaction.posY2[a]=Interaction.smallDots.children[Interaction.index2[a]].position.y+8,Interaction.smallDots.children[Interaction.index[a]].opacity=0;var h=new Path.Line(new Point(l,c-6),new Point(l,c+6));h.strokeColor="#0066FF",h.strokeWidth=2,Interaction.lline.addChild(h),Interaction.ansF[a]=document.createElement("div"),Interaction.ansF[a].id="ansF"+a,$(Interaction.container).append(Interaction.ansF[a]),$(Interaction.ansF[a]).html('<div id="nomm'+a+'"></div><div id="linee'+a+'"></div><div id="denomm'+a+'"></div>'),$(Interaction.ansF[a]).css("position","absolute").css("top",Interaction.posY2[a]).css("left",Interaction.posX2[a]).css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("color","#0066FF").css("font-size","12px").css("font-weight","bold").css("line-height","16px"),$("#linee"+a).css("height","1px").css("border-top","1px solid").css("padding",0),$("#nomm"+a).css("text-align","center").css("height","16px").html(Interaction.nom[a]),$("#denomm"+a).css("text-align","center").css("height","16px").html(Interaction.denom[a])}Interaction.ansF.sort(function(e,t){return $(e).offset().left<$(t).offset().left?-1:$(e).offset().left>$(t).offset().left?1:0});for(var a=0;a<Interaction.ansF.length;a++)if(a%2==1){var p=$(Interaction.ansF[a]).position().top-50;$(Interaction.ansF[a]).css("top",p)}Interaction.pointDiv=document.createElement("div"),Interaction.pointDiv.id="pointDiv",$(Interaction.container).append(Interaction.pointDiv),$(Interaction.pointDiv).html('<div id="fp"></div> <div id="sp"></div>'),$(Interaction.pointDiv).css("position","absolute").css("top","130px").css("left","30px").css("width","480px").css("height","20px").css("font-size",22),$("#fp").css("position","absolute").css("top","0px").css("left","14px").css("width","20px").css("height","20px").html(0),$("#sp").css("position","absolute").css("top","0px").css("left","492px").css("width","20px").css("height","20px").html(1)},getFractionsToBeSorted:function(e){Interaction.nom=[],Interaction.denom=[],Interaction.vals=[];do for(var t=0;t<e;t++)Interaction.denom[t]=Util.randomInteger(2,8),Interaction.nom[t]=Util.randomInteger(1,Interaction.denom[t]),Interaction.vals[t]=Interaction.nom[t]/Interaction.denom[t];while(Util.lcm(Interaction.denom[0],Interaction.denom[1],Interaction.denom[2])>25||Interaction.vals[0]==Interaction.vals[1]||Interaction.vals[0]==Interaction.vals[2]||Interaction.vals[1]==Interaction.vals[2])}};