var Interaction={getFramework:function(){return"paper"},init:function(e){Interaction.container=e,Main.setObjective(""),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.sortingDiv=document.createElement("div"),Interaction.sortingDiv.id="sortingDiv",$(Interaction.container).append(Interaction.sortingDiv),$(Interaction.sortingDiv).css({width:"80px",height:"40px",position:"absolute",left:"240px",top:"10px",padding:0,margin:0}),$(Interaction.sortingDiv).append('<div id="lessThanDiv"><img src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_base.png"/><img id="lessThan" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_fg.png" /><img id="lessThanHover" class="drg" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_hover.png" /></div>'),$("#lessThanDiv").css("position","relative").css("height","40px").css("width","40px").css("float","left").css("line-height","32px").css("cursor","pointer"),$("#lessThan").css("position","absolute").css("top","0px").css("left","0px"),$("#lessThanHover").css("position","absolute").css("top","0px").css("left","0px").css("opacity",0),$(Interaction.sortingDiv).append('<div id="greaterThanDiv"><img src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_base.png"/><img id="greaterThan" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_fg.png" /><img id="greaterThanHover" class="drg" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_hover.png" /></div>'),$("#greaterThanDiv").css("position","relative").css("height","40px").css("width","40px").css("float","left").css("line-height","32px").css("cursor","pointer"),$("#greaterThan").css("position","absolute").css("top","0px").css("left","0px"),$("#greaterThanHover").css("position","absolute").css("top","0px").css("left","0px").css("opacity",0),$("#sortingDiv .drg").draggable({revert:"invalid",helper:"clone",cursor:"pointer",stack:"#sortingDiv .drg",start:function(e,t){Interaction.setStatus(""),$($(t.helper.get(0)).siblings(this)[1]).css("opacity",0),$(t.helper.get(0)).css("opacity",1)},stop:function(e,t){$(t.helper.get(0)).css("opacity",0),this.id!=Interaction.oldStr+"Hover"&&$($(t.helper.get(0)).siblings(this)[1]).css("opacity",1)}}),Interaction.appendStatus({bottom:"26px",right:"160px",height:"40px",width:"300px",textAlign:"center"}),Interaction.appendButton({bottom:"30px",right:"40px"}),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.dropped&&$(Interaction.dropped).remove(),Interaction.activeStr&&(Interaction.activeStr=null);if($(Interaction.clone2)){$(Interaction.clone2).remove(),Interaction.clone2=null,$("#sortingDiv img").draggable("enable"),Interaction.oldActiveStr&&$("."+Interaction.oldActiveStr).css("opacity",0),Interaction.oldStr&&$("#"+Interaction.oldStr).css("opacity",1),Interaction.answerId&&$("#"+Interaction.answerId.replace("Hover","")).css("opacity",1),Interaction.sortingUl&&$(Interaction.sortingUl).sortable({disabled:!1}),Interaction.pointDiv&&$(Interaction.pointDiv).remove();if(Interaction.ansF)for(i=0;i<Interaction.ansF.length;i++)$(Interaction.ansF[i]).remove();Interaction.lline&&Interaction.lline.remove(),Interaction.numericalAxis&&Interaction.numericalAxis.remove(),Interaction.questionDiv&&$(Interaction.questionDiv).remove(),Interaction.qType=Math.floor(Math.random()*2),Interaction.numOfFracs=3,Interaction.questionDiv=document.createElement("div"),Interaction.questionDiv.id="questionDiv",$(Interaction.container).append(Interaction.questionDiv),$(Interaction.questionDiv).css({position:"absolute",top:"65px",left:"84px",width:"400px",height:"100px",listStyleType:"none"}),Interaction.sortingUl=document.createElement("ul"),Interaction.sortingUl.id="sortingUl",$(Interaction.questionDiv).append(Interaction.sortingUl),$(Interaction.sortingUl).html('<li id="firstFrac"><div id="firstFracDiv"></div></li><div id="dropDiv1"  class="dropDivs"/><li id="secondFrac"><div id="secondFracDiv"></div></li><div id="dropDiv2" class="dropDivs"/><li id="thirdFrac"><div id="thirdFracDiv"></div></li>'),$(Interaction.sortingUl).css({width:"400px",height:"100px"}),$(Interaction.sortingUl).sortable({items:"li:not(div)",placeholder:"placeHolder",tolerance:"pointer",cursor:sortableCursorType,axis:"x"}),$("#dropDiv1").css({width:"54px",height:"54px",position:"absolute",left:"114px",top:"0px",padding:0,margin:0}),$("#dropDiv2").css({width:"54px",height:"54px",position:"absolute",left:"220px",top:"0px",padding:0,margin:0}),$(Interaction.container).append("<style> #sortingUl li {float:left; width:36px; height:51px; margin-left:70px; font-size:22px;}</style>"),$(Interaction.container).append("<style> #questionDiv #sortingUl .placeHolder { width: 36px; height:51px}</style>"),$("#firstFracDiv").html('<div id="nom1">5</div><div id="line1"></div><div id="denom1">10</div>'),$("#firstFracDiv").css("width","36px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#line1").css("height","1px").css("width","32px").css("border-top","2px solid").css("padding",0),$("#nom1").css("text-align","center").css("width","30px").css("height","25px"),$("#denom1").css("text-align","center").css("width","30px").css("height","25px"),$("#secondFracDiv").html('<div id="nom2">7</div><div id="line2"></div><div id="denom2">10</div>'),$("#secondFracDiv").css("width","36px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#line2").css("height","1px").css("width","32px").css("border-top","2px solid").css("padding",0),$("#nom2").css("text-align","center").css("width","30px").css("height","25px"),$("#denom2").css("text-align","center").css("width","30px").css("height","25px"),$("#thirdFracDiv").html('<div id="nom3">3</div><div id="line3"></div><div id="denom3">5</div>'),$("#thirdFracDiv").css("width","36px").css("height","51px").css("padding",0).css("margin",0).css("line-height","25px"),$("#line3").css("height","1px").css("width","32px").css("border-top","2px solid").css("padding",0),$("#nom3").css("text-align","center").css("width","30px").css("height","25px"),$("#denom3").css("text-align","center").css("width","30px").css("height","25px"),Interaction.getFractionsToBeSorted(Interaction.numOfFracs),Interaction.nomD=$("#nom1").get(0),Interaction.denomD=$("#denom1").get(0),Interaction.nom2D=$("#nom2").get(0),Interaction.denom2D=$("#denom2").get(0),Interaction.nom3D=$("#nom3").get(0),Interaction.denom3D=$("#denom3").get(0),$(Interaction.nomD).html(Interaction.nom[0]),$(Interaction.denomD).html(Interaction.denom[0]),$(Interaction.nom2D).html(Interaction.nom[1]),$(Interaction.denom2D).html(Interaction.denom[1]),$(Interaction.nom3D).html(Interaction.nom[2]),$(Interaction.denom3D).html(Interaction.denom[2]),Interaction.numOfFracs==4?(Interaction.nom4D=$("#nom4").get(0),Interaction.denom4D=$("#denom4").get(0),$(Interaction.nom4D).html(Interaction.nom[3]),$(Interaction.denom4D).html(Interaction.denom[3])):Interaction.numOfFracs==5&&(Interaction.nom4D=$("#nom4").get(0),Interaction.denom4D=$("#denom4").get(0),Interaction.nom5D=$("#nom5").get(0),Interaction.denom5D=$("#denom5").get(0),$(Interaction.nom4D).html(Interaction.nom[3]),$(Interaction.denom4D).html(Interaction.denom[3]),$(Interaction.nom5D).html(Interaction.nom[4]),$(Interaction.denom5D).html(Interaction.denom[4])),Interaction.fracIds=[],Interaction.fracIds[0]="firstFrac",Interaction.fracIds[1]="secondFrac",Interaction.fracIds[2]="thirdFrac",Interaction.numOfFracs==4?Interaction.fracIds[3]="fourthFrac":Interaction.numOfFracs==5&&(Interaction.fracIds[3]="fourthFrac",Interaction.fracIds[4]="fifthFrac"),$(".dropDivs").droppable({accept:".drg",tolerance:"pointer",drop:function(e,t){Interaction.oldActiveStr&&($("."+Interaction.oldActiveStr).css("opacity",0),$("#"+Interaction.oldActiveStr.replace("Active","Hover")).draggable({disabled:!1}),$("#"+Interaction.oldStr).css("opacity",1)),Interaction.activeStr=$(t.draggable).get(0).id,$("#"+Interaction.activeStr).draggable({disabled:!0});var n=Interaction.activeStr.replace("Hover","");Interaction.activeStr=Interaction.activeStr.replace("Hover","Active"),$("."+Interaction.activeStr).css("opacity",1),Interaction.oldActiveStr=Interaction.activeStr,Interaction.oldStr=n}}),$(".dropDivs").append('<div class="targetContainer"><img src="/assets/animations/kesirleri_karsilastirma/oran_hedef.png" class="target" /></div>'),$(".targetContainer").css("position","relative").css("height","54px").css("width","54px").css("float","left"),$(".target").css("position","absolute").css("top","0px").css("left","0px"),$(".dropDivs").append('<img class="lessThanActive" src="/assets/animations/kesirleri_karsilastirma/oran_kucuk_active.png" /><img class="greaterThanActive" src="/assets/animations/kesirleri_karsilastirma/oran_buyuk_active.png" />'),$(".lessThanActive").css("position","absolute").css("top","11px").css("left","11px").css("opacity",0),$(".greaterThanActive").css("position","absolute").css("top","11px").css("left","11px").css("opacity",0),Interaction.qType==0?Main.setObjective('Yandaki kesirleri <span style="color:red;font-weight:bold;">büyükten küçüğe</span> sıralayınız. Bunun için kesirleri sağa ya da sola kaydırıp diğer kesirlerle yerlerini değiştirebilirsiniz. Daha sonra aralarına küçük (<) ya da büyük (>) işaretlerinden birini sürükleyerek sıralamayı tamamlayabilirsiniz.'):Main.setObjective('Yandaki kesirleri <span style="color:red;font-weight:bold;">küçükten büyüğe</span> sıralayınız. Bunun için kesirleri sağa ya da sola kaydırıp diğer kesirlerle yerlerini değiştirebilirsiniz. Daha sonra aralarına küçük (<) ya da büyük (>) işaretlerinden birini sürükleyerek sıralamayı tamamlayabilirsiniz.')}},preCheck:function(){Interaction.dropped=Interaction.activeStr;if(Interaction.dropped==null||Interaction.dropped==undefined)return Interaction.setStatus("Lütfen işaretlerden birini kutucuğa sürükleyiniz.","alert"),!1},isAnswerCorrect:function(e){Interaction.userAnswerArr=[];if(Interaction.qType==1){Interaction.frac=[],Interaction.sortedFrac=[],Interaction.answerIdStr="lessThanActive",Interaction.answerIdsArray=[];for(var t=0;t<Interaction.numOfFracs;t++)Interaction.frac[t]=Interaction.nom[t]/Interaction.denom[t];for(var t=0;t<Interaction.numOfFracs;t++)Interaction.sortedFrac[t]=Interaction.frac[t];Interaction.sortedFrac.sort(function(e,t){return e-t});for(var t=0;t<Interaction.numOfFracs;t++)Interaction.answerIdsArray[Interaction.sortedFrac.indexOf(Interaction.frac[t])]=Interaction.fracIds[t]}else{Interaction.frac=[],Interaction.sortedFrac=[],Interaction.answerIdStr="greaterThanActive",Interaction.answerIdsArray=[];for(var t=0;t<Interaction.numOfFracs;t++)Interaction.frac[t]=Interaction.nom[t]/Interaction.denom[t];for(var t=0;t<Interaction.numOfFracs;t++)Interaction.sortedFrac[t]=Interaction.frac[t];Interaction.sortedFrac.sort(function(e,t){return t-e});for(var t=0;t<Interaction.numOfFracs;t++)Interaction.answerIdsArray[Interaction.sortedFrac.indexOf(Interaction.frac[t])]=Interaction.fracIds[t]}for(t=0;t<Interaction.numOfFracs;t++)Interaction.userAnswerArr[t]=$(Interaction.sortingUl).find("li")[t].id;var n;for(t=0,n=0;t<Interaction.numOfFracs;t++)Interaction.userAnswerArr[t]==Interaction.answerIdsArray[t]&&(n+=1);return n==Interaction.numOfFracs&&Interaction.dropped==Interaction.answerIdStr?($("#sortingDiv img").draggable("disable"),!0):!1},onCorrectAnswer:function(){for(var e=0;e<Interaction.numOfFracs;e++)Interaction.userAnswerArr[e]==Interaction.answerIdsArray[e]?$("#"+Interaction.userAnswerArr[e]).css("color","green"):$("#"+Interaction.userAnswerArr[e]).css("color","red");Interaction.nom2=[],Interaction.denom2=[],$(Interaction.sortingUl).sortable({disabled:!0}),Interaction.numOfFracs==5?Interaction.lcm=Util.lcm(Interaction.denom[0],Util.lcm(Interaction.denom[1],Interaction.denom[2],Interaction.denom[3],Interaction.denom[4])):Interaction.lcm=Util.lcm(Interaction.denom[0],Interaction.denom[1],Interaction.denom[2],Interaction.denom[3]);for(var e=0;e<Interaction.numOfFracs;e++)Interaction.nom2[e]=Interaction.nom[e]*(Interaction.lcm/Interaction.denom[e]),Interaction.denom2[e]=Interaction.lcm;Interaction.GetNumericalAxis(Interaction.lcm)},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir.",!1),Interaction.pause();var e="",t="",n="";switch(Interaction.userAnswerArr[0]){case Interaction.answerIdsArray[0]:e="0px";break;case Interaction.answerIdsArray[1]:e="106px";break;case Interaction.answerIdsArray[2]:e="212px"}switch(Interaction.userAnswerArr[1]){case Interaction.answerIdsArray[0]:t="-106px";break;case Interaction.answerIdsArray[1]:t="0px";break;case Interaction.answerIdsArray[2]:t="106px"}switch(Interaction.userAnswerArr[2]){case Interaction.answerIdsArray[0]:n="-212px";break;case Interaction.answerIdsArray[1]:n="-106px";break;case Interaction.answerIdsArray[2]:n="0px"}$("#"+Interaction.userAnswerArr[0]).css("position","relative"),$("#"+Interaction.userAnswerArr[1]).css("position","relative"),$("#"+Interaction.userAnswerArr[2]).css("position","relative"),$("#"+Interaction.userAnswerArr[0]).delay(1e3).animate({left:e},2e3,"easeInOutQuad"),$("#"+Interaction.userAnswerArr[1]).delay(1250).animate({left:t},2e3,"easeInOutQuad"),$("#"+Interaction.userAnswerArr[2]).delay(1500).animate({left:n},2e3,"easeInOutQuad");if(Interaction.dropped!=Interaction.answerIdStr){Interaction.clone2=[],$("."+Interaction.oldActiveStr).css("opacity",0),Interaction.answerId=Interaction.answerIdStr.replace("Active","Hover"),$("#"+Interaction.oldActiveStr.replace("Active","")).css("opacity",1),setTimeout('$("#"+Interaction.answerId.replace("Hover", "")).css("opacity", 0);',3500);for(var r=0;r<Interaction.numOfFracs-1;r++){Interaction.clone2[r]=$("#"+Interaction.answerId).clone(),Interaction.clone2[r].attr("class","flying"),Interaction.clone2[r].attr("id",r);var i=$(Interaction.sortingDiv).position().top,s=$(Interaction.sortingDiv).position().left;Interaction.qType==0&&(s+=40);var o=$(Interaction.questionDiv).position().top,u=$(Interaction.questionDiv).position().left,a=parseInt($(".dropDivs")[r].style.top)+11+o,f=parseInt($(".dropDivs")[r].style.left)+11+u;$(Interaction.clone2[r]).css("position","absolute").css("top",i).css("left",s).css("opacity",0),$(Interaction.container).append(Interaction.clone2[r]),$(Interaction.clone2[r]).delay(3500).animate({opacity:200,top:a,left:f},1500,"easeInOutQuad",function(){$(this).remove(),$("."+Interaction.answerIdStr).css("opacity",1)})}$("#sortingDiv img").draggable("disable"),Interaction.oldActiveStr=Interaction.answerIdStr}for(var r=0;r<Interaction.numOfFracs;r++)Interaction.userAnswerArr[r]==Interaction.answerIdsArray[r]?$("#"+Interaction.userAnswerArr[r]).css("color","green"):$("#"+Interaction.userAnswerArr[r]).css("color","red");Interaction.nom2=[],Interaction.denom2=[],$(Interaction.sortingUl).sortable({disabled:!0}),Interaction.numOfFracs==5?Interaction.lcm=Util.lcm(Interaction.denom[0],Util.lcm(Interaction.denom[1],Interaction.denom[2],Interaction.denom[3],Interaction.denom[4])):Interaction.lcm=Util.lcm(Interaction.denom[0],Interaction.denom[1],Interaction.denom[2],Interaction.denom[3]);for(var r=0;r<Interaction.numOfFracs;r++)Interaction.nom2[r]=Interaction.nom[r]*(Interaction.lcm/Interaction.denom[r]),Interaction.denom2[r]=Interaction.lcm;Interaction.GetNumericalAxis(Interaction.lcm),Interaction.resume(4e3)},GetNumericalAxis:function(e){Interaction.numericalAxis=new Group;var t=new Group,n=new Path.OneSidedArrow(new Point(20,170),new Point(560,170),10,30),r=new Path.OneSidedArrow(new Point(560,170),new Point(561,170),10,30);n.rotate(180),t.addChild(n),t.addChild(r);var i=new Group,s=new Path.Circle(new Point(50,170),5);s.fillColor="black";var o=new Path.Circle(new Point(530,170),5);o.fillColor="black",i.addChild(s),i.addChild(o);var u=480/e;Interaction.smallDots=new Group;for(var a=0;a<e-1;a++){var f=new Path.Circle(new Point(50+u*(a+1),170),3);f.fillColor="black",Interaction.smallDots.addChild(f)}Interaction.numericalAxis.addChild(t),Interaction.numericalAxis.addChild(i),Interaction.numericalAxis.addChild(Interaction.smallDots);var l,c;Interaction.index=[],Interaction.index2=[],Interaction.lline=new Group,Interaction.nom22=[],Interaction.posX2=[],Interaction.posY2=[];for(var a=0;a<Interaction.numOfFracs;a++)Interaction.nom22[a]=Interaction.nom2[a];Interaction.nom22.sort(function(e,t){return e-t}),Interaction.ansF=[];for(var a=0;a<Interaction.numOfFracs;a++){Interaction.index[a]=Interaction.nom22[a]-1,Interaction.index2[a]=Interaction.nom2[a]-1,l=Interaction.smallDots.children[Interaction.index[a]].position.x,c=Interaction.smallDots.children[Interaction.index[a]].position.y,Interaction.posX2[a]=Interaction.smallDots.children[Interaction.index2[a]].position.x-8,Interaction.posY2[a]=Interaction.smallDots.children[Interaction.index2[a]].position.y+8,Interaction.smallDots.children[Interaction.index[a]].opacity=0;var h=new Path.Line(new Point(l,c-6),new Point(l,c+6));h.strokeColor="#0066FF",h.strokeWidth=2,Interaction.lline.addChild(h),Interaction.ansF[a]=document.createElement("div"),Interaction.ansF[a].id="ansF"+a,$(Interaction.container).append(Interaction.ansF[a]),$(Interaction.ansF[a]).html('<div id="nomm'+a+'"></div><div id="linee'+a+'"></div><div id="denomm'+a+'"></div>'),$(Interaction.ansF[a]).css("position","absolute").css("top",Interaction.posY2[a]).css("left",Interaction.posX2[a]).css("width","16px").css("height","33px").css("padding",0).css("margin",0).css("color","#0066FF").css("font-size","12px").css("font-weight","bold").css("line-height","16px"),$("#linee"+a).css("height","1px").css("border-top","1px solid").css("padding",0),$("#nomm"+a).css("text-align","center").css("height","16px").html(Interaction.nom[a]),$("#denomm"+a).css("text-align","center").css("height","16px").html(Interaction.denom[a])}Interaction.ansF.sort(function(e,t){return $(e).offset().left<$(t).offset().left?-1:$(e).offset().left>$(t).offset().left?1:0});for(var a=0;a<Interaction.ansF.length;a++)if(a%2==1){var p=$(Interaction.ansF[a]).position().top-50;$(Interaction.ansF[a]).css("top",p)}Interaction.pointDiv=document.createElement("div"),Interaction.pointDiv.id="pointDiv",$(Interaction.container).append(Interaction.pointDiv),$(Interaction.pointDiv).html('<div id="fp"></div> <div id="sp"></div>'),$(Interaction.pointDiv).css("position","absolute").css("top","130px").css("left","30px").css("width","480px").css("height","20px").css("font-size",22),$("#fp").css("position","absolute").css("top","0px").css("left","14px").css("width","20px").css("height","20px").html(0),$("#sp").css("position","absolute").css("top","0px").css("left","492px").css("width","20px").css("height","20px").html(1)},getFractionsToBeSorted:function(e){Interaction.nom=[],Interaction.denom=[],Interaction.vals=[];do for(var t=0;t<e;t++)Interaction.denom[t]=Util.randomInteger(2,8),Interaction.nom[t]=Util.randomInteger(1,Interaction.denom[t]),Interaction.vals[t]=Interaction.nom[t]/Interaction.denom[t];while(Util.lcm(Interaction.denom[0],Interaction.denom[1],Interaction.denom[2])>25||Interaction.vals[0]==Interaction.vals[1]||Interaction.vals[0]==Interaction.vals[2]||Interaction.vals[1]==Interaction.vals[2])}};