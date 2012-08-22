function __Styles(){izmirColor="#ff4a03",vanColor="#4885ff"}var getNumericalAxis=function(e,t,n){Interaction.pause=1,setTimeout("Interaction.pause = 0;",1500),Interaction.numericalAxis=new Group;var r=new Group,s=new Path.OneSidedArrow(new Point(10,180),new Point(570,180),10,30),o=new Path.OneSidedArrow(new Point(570,180),new Point(571,180),10,30);s.rotate(180),r.addChild(s),r.addChild(o);var u=t-e,a=500/u,f=new Group;for(i=0;i<u+1;i++){var l=new Path.Circle(new Point(40+a*i,180),3);l.fillColor="black",f.addChild(l)}Interaction.numericalAxis.addChild(r),Interaction.numericalAxis.addChild(f);var c=document.createElement("div");c.id="pointDiv",$(Interaction.container).append(c),$(c).html('<span id="s0">-12</span> <span id="s1">-11</span> <span id="s2">-10</span>&nbsp; <span id="s3">-9 </span>&nbsp; <span id="s4">-8 </span>&nbsp;&nbsp;<span id="s5">-7</span>&nbsp;&nbsp; <span id="s6">-6 </span>&nbsp;&nbsp; <span id="s7">-5</span>&nbsp;&nbsp; <span id="s8">-4 </span> &nbsp;&nbsp;<span id="s9">-3 </span>&nbsp;&nbsp;&nbsp;<span id="s10">-2</span>&nbsp;&nbsp; <span id="s11">-1 </span>&nbsp;&nbsp;&nbsp; <span id="s12">0</span> &nbsp;&nbsp;&nbsp;<span id="s13">1</span> &nbsp;&nbsp;&nbsp;&nbsp;<span id="s14">2 </span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="s15">3</span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="s16">4</span>&nbsp;&nbsp;&nbsp;&nbsp; <span id="s17">5</span>&nbsp;&nbsp;&nbsp;&nbsp; <span id="s18">6</span>&nbsp;&nbsp;&nbsp; <span id="s19">7</span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="s20">8</span> &nbsp;&nbsp;&nbsp;&nbsp;<span id="s21">9</span> &nbsp;&nbsp;<span id="s22">10</span> &nbsp;&nbsp;<span id="s23">11</span> &nbsp;&nbsp;<span id="s24">12</span>'),$(c).css({position:"absolute",top:"190px",left:"30px",width:"530px",height:"30px",fontSize:"12px"});var h=Interaction.wh1+12,p=Interaction.wh2+12;f.children[h].fillColor="red",f.children[p].fillColor="red",$("#s"+h).css("color","red"),$("#s"+p).css("color","red")},Animation={images:[],init:function(e){Animation.container=e;var t=1e3;Animation.animDiv=document.createElement("div"),Animation.animDiv.id="animDiv",$(Animation.container).append(Animation.animDiv),$(Animation.animDiv).css({position:"absolute",top:"30px",left:"250px",width:"500px",height:"150px",fontSize:"22px"}),$(Animation.animDiv).html('<div id="firstDiv">İzmir\'in ocak ayı sıcaklık ortalaması 7 °C</div><div id="secondDiv">Van\'ın ocak ayı sıcaklık ortalaması -7 °C</div><div id="thirdDiv">7 > -7</div>'),$("#firstDiv").css({position:"absolute",top:"0px",left:"0px",color:izmirColor,opacity:0}),$("#firstDiv").delay(t+2e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#secondDiv").css({position:"absolute",top:"130px",left:"0px",color:vanColor,opacity:0}),$("#secondDiv").delay(t+3e3).animate({opacity:1},1e3,"easeInOutQuad"),$("#thirdDiv").css({position:"absolute",top:"60px",left:"400px",fontWeight:"bold",opacity:0}),$("#thirdDiv").delay(t+4e3).animate({opacity:1},1e3,"easeInOutQuad",function(){Main.animationFinished(1e3)}),$(Animation.container).append('<img id="thermometer1" src="/assets/animations/tam_sayilarin_karsilastirilmasi/termometre01.jpg"/>'),$("#thermometer1").css({position:"absolute",top:"18px",left:"50px",opacity:0}),$("#thermometer1").delay(t).animate({opacity:1},1e3,"easeInOutQuad"),$(Animation.container).append('<img id="thermometer2" src="/assets/animations/tam_sayilarin_karsilastirilmasi/termometre02.png"/>'),$("#thermometer2").css({position:"absolute",top:"18px",left:"50px",opacity:0}),$("#thermometer2").delay(t+1e3).animate({opacity:1},1e3,"easeInOutQuad")}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective('Yanda verilen tam sayıları, aralarına küçük "<" ya da büyük ">" işaretlerini sürükleyerek karşılaştırınız.'),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.sortingDiv=document.createElement("div"),Interaction.sortingDiv.id="sortingDiv",$(e).append(Interaction.sortingDiv),$(Interaction.sortingDiv).css({width:"150px",height:"50px",position:"absolute",left:"240px",top:"10px",padding:0,margin:0}),$(Interaction.sortingDiv).append('<div id="lessThanDiv"><img src="/assets/animations/tam_sayilarin_karsilastirilmasi/oran_kucuk_base.png"/><img id="lessThan" src="/assets/animations/tam_sayilarin_karsilastirilmasi/oran_kucuk_fg.png" /><img id="lessThanHover" class="drg" src="/assets/animations/tam_sayilarin_karsilastirilmasi/oran_kucuk_hover.png" /></div>'),$("#lessThanDiv").css("position","relative").css("height","40px").css("width","40px").css("float","left").css("line-height","32px").css("cursor","pointer"),$("#lessThan").css("position","absolute").css("top","0px").css("left","0px"),$("#lessThanHover").css("position","absolute").css("top","0px").css("left","0px").css("opacity",0),$(Interaction.sortingDiv).append('<div id="greaterThanDiv"><img src="/assets/animations/tam_sayilarin_karsilastirilmasi/oran_buyuk_base.png"/><img id="greaterThan" src="/assets/animations/tam_sayilarin_karsilastirilmasi/oran_buyuk_fg.png" /><img id="greaterThanHover" class="drg" src="/assets/animations/tam_sayilarin_karsilastirilmasi/oran_buyuk_hover.png" /></div>'),$("#greaterThanDiv").css("position","relative").css("height","40px").css("width","40px").css("float","left").css("line-height","32px").css("cursor","pointer"),$("#greaterThan").css("position","absolute").css("top","0px").css("left","0px"),$("#greaterThanHover").css("position","absolute").css("top","0px").css("left","0px").css("opacity",0),$("#sortingDiv .drg").draggable({revert:"invalid",helper:"clone",cursor:"pointer",stack:"#sortingDiv .drg",disabled:"false",start:function(e,t){Interaction.setStatus(""),$($(t.helper.get(0)).siblings(this)[1]).css("opacity",0),$(t.helper.get(0)).css("opacity",1)},stop:function(e,t){$(t.helper.get(0)).css("opacity",0),this.id!=Interaction.oldStr+"Hover"&&$($(t.helper.get(0)).siblings(this)[1]).css("opacity",1)}}),Interaction.questionDiv=document.createElement("div"),Interaction.questionDiv.id="questionDiv",$(e).append(Interaction.questionDiv),$(Interaction.questionDiv).css({position:"absolute",left:"180px",top:"70px",width:"200px",height:"90px"}),Interaction.firstFracDiv=document.createElement("div"),Interaction.firstFracDiv.id="firstFracDiv",$(Interaction.questionDiv).append(Interaction.firstFracDiv),$(Interaction.firstFracDiv).css({position:"absolute",top:"14px",left:"26px",width:"30px",height:"30px",fontSize:"24px",textAlign:"right"}),Interaction.secondFracDiv=document.createElement("div"),Interaction.secondFracDiv.id="secondFracDiv",$(Interaction.questionDiv).append(Interaction.secondFracDiv),$(Interaction.secondFracDiv).css({position:"absolute",top:"14px",left:"134px",width:"30px",height:"30px",fontSize:"24px",textAlign:"left"}),Interaction.dropDiv=document.createElement("div"),Interaction.dropDiv.id="dropDiv",$(e).append(Interaction.dropDiv),$(Interaction.dropDiv).css({width:"54px",height:"54px",position:"absolute",left:"250px",top:"68px",padding:0,margin:0}),$(Interaction.dropDiv).append('<div id="targetContainer"><img src="/assets/animations/tam_sayilarin_karsilastirilmasi/oran_hedef.png" id="target" /></div>'),$("#targetContainer").css("position","relative").css("height","54px").css("width","54px").css("float","left"),$("#target").css("position","absolute").css("top","0px").css("left","0px"),$(Interaction.dropDiv).droppable({accept:".drg",tolerance:"pointer",drop:function(e,t){Interaction.oldActiveStr&&($("#"+Interaction.oldActiveStr).css("opacity",0),$("#"+Interaction.oldActiveStr.replace("Active","Hover")).draggable({disabled:!1}),$("#"+Interaction.oldStr).css("opacity",1)),Interaction.activeStr=$(t.draggable).get(0).id,$("#"+Interaction.activeStr).draggable({disabled:!0});var n=Interaction.activeStr.replace("Hover","");Interaction.activeStr=Interaction.activeStr.replace("Hover","Active"),$("#"+Interaction.activeStr).css("opacity",1),Interaction.oldActiveStr=Interaction.activeStr,Interaction.oldStr=n}}),$(Interaction.dropDiv).append('<img id="lessThanActive" src="/assets/animations/tam_sayilarin_karsilastirilmasi/oran_kucuk_active.png" /><img id="greaterThanActive" src="/assets/animations/tam_sayilarin_karsilastirilmasi/oran_buyuk_active.png" />'),$("#lessThanActive").css("position","absolute").css("top","11px").css("left","11px").css("opacity",0),$("#greaterThanActive").css("position","absolute").css("top","11px").css("left","11px").css("opacity",0),Interaction.appendStatus({bottom:"26px",right:"160px",height:"40px",width:"300px",textAlign:"center"}),Interaction.appendButton({bottom:"30px",right:"40px"}),Interaction.firstFracD=$(Interaction.firstFracDiv).get(0),Interaction.secondFracD=$(Interaction.secondFracDiv).get(0),Interaction.answerD=$(Interaction.answerDiv).get(0),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.numericalAxis&&Interaction.numericalAxis.remove(),$("#pointDiv")&&$("#pointDiv").remove(),$(Interaction.clone2)&&($(Interaction.clone2).remove(),Interaction.clone2=null),$(Interaction.dropped)&&($(Interaction.dropped).remove(),Interaction.dropped=null),$("#sortingDiv img").draggable("enable"),Interaction.oldActiveStr&&$("#"+Interaction.oldActiveStr).css("opacity",0),Interaction.oldStr&&$("#"+Interaction.oldStr).css("opacity",1),Interaction.answerId&&$("#"+Interaction.answerId.replace("Hover","")).css("opacity",1),$(Interaction.firstFracDiv).html(""),$(Interaction.secondFracDiv).html(""),Interaction.activeStr=null,Interaction.randomNumber=e,Interaction.wh1=Util.randomInteger(-12,13),Interaction.wh2=Util.randomInteger(-12,13,[Interaction.wh1]),Interaction.whD=$(Interaction.secondFracDiv).get(0),Interaction.wh2D=$(Interaction.firstFracDiv).get(0),$(Interaction.whD).html(Interaction.wh1),$(Interaction.wh2D).html(Interaction.wh2)},preCheck:function(){Interaction.dropped=Interaction.activeStr;if(Interaction.dropped==null||Interaction.dropped==undefined)return Interaction.setStatus("Lütfen işaretlerden birini kutucuğa sürükleyiniz.","alert"),!1},isAnswerCorrect:function(e){return Interaction.wh1<Interaction.wh2?Interaction.answerIdStr="greaterThanActive":Interaction.answerIdStr="lessThanActive",Interaction.dropped==Interaction.answerIdStr?($("#sortingDiv img").draggable("disable"),!0):!1},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir.",!1),$("#"+Interaction.oldActiveStr).css("opacity",0),Interaction.answerId=Interaction.answerIdStr.replace("Active","Hover"),$("#"+Interaction.oldActiveStr.replace("Active","")).css("opacity",1),$("#"+Interaction.answerId.replace("Hover","")).css("opacity",0),Interaction.clone2=$("#"+Interaction.answerId).clone(),Interaction.clone2.attr("id","flying"),$(Interaction.container).append(Interaction.clone2),$(Interaction.clone2).insertAfter($(Interaction.dropDiv));var e=$(Interaction.sortingDiv).position().top,t=$(Interaction.sortingDiv).position().left;Interaction.answerId=="greaterThanHover"&&(t+=40);var n=$(Interaction.dropDiv).position().top+11,r=$(Interaction.dropDiv).position().left+11;$(Interaction.clone2).css("position","absolute").css("top",e).css("left",t).css("opacity",0),$(Interaction.clone2).delay(0).animate({opacity:2,top:n,left:r},1e3,"easeInOutQuad",function(){$(Interaction.clone2).css("opacity",0),$("#"+Interaction.answerIdStr).css("opacity",1)}),$("#sortingDiv img").draggable("disable"),Interaction.oldActiveStr=Interaction.answerIdStr,getNumericalAxis(-12,12,25)}};