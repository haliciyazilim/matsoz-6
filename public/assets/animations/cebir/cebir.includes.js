function __Styles(){}var Animation={images:[],init:function(e){Animation.container=e}},Interaction={getFramework:function(){return"paper"},init:function(e){Interaction.container=e,Main.setObjective("Yandaki cebirsel ifadelerde kutulara uygun sayıları giriniz ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},$(e).append("<div id='soru'>"),$("#soru").append("<div id='sol' class='yanlar'>"),$("#soru").append("<div id='sag' class='yanlar'>");for(var t=0;t<5;t++)$("#sol").append("<div id='sol"+t+"' class='madde'>"),$("#sag").append("<div id='sag"+t+"' class='madde'>"),t>0?($("#sol"+t).html(t),Interaction.appendInput({width:"35px",height:"32px",textAlign:"center",fontSize:"20px"},!1,!0),Interaction.inputs[t-1].id="girdi"+t,$("#sag"+t).html($("#girdi"+t))):$("#sol0").html("x");$(".madde").css({width:"148px",height:"40px",position:"relative",textAlign:"center",fontSize:"20px",lineHeight:"40px"}),$(".yanlar").css({width:"148px",height:"200px",position:"relative","float":"left"}),$("#soru").css("width","300px").css("height","200px").css("position","absolute").css("margin","auto").css("font-size","16px").css("left","0px").css("right","0px").css("top","10px").css("border","1px solid red"),Interaction.appendStatus({bottom:"20px",right:"160px",width:"280px",textAlign:"center"}),Interaction.appendButton({bottom:"10px",right:"40px"}),Interaction.soruSayaci=0,Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.random1=Math.floor(Math.random()*9+1),Interaction.random2=Math.floor(Math.random()*9+1),Interaction.isaret=Interaction.soruSayaci%2==0?"+":"–",Interaction.soru=Interaction.random1==1?"x "+Interaction.isaret+" "+Interaction.random2:Interaction.random1+"x "+Interaction.isaret+" "+Interaction.random2,$("#sag0").html(Interaction.soru),Interaction.soruSayaci++},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};