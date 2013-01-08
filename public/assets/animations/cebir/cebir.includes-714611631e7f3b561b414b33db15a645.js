function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}
;
var Animation = {
	init:function(container){
		Animation.container = container;

        resimler=[
            "/assets/animations/cebir/cebir_zemin.jpg",
            "/assets/animations/cebir/cebir_harezmi.png",
            "/assets/animations/cebir/cebir_eski_yazi.png",
            "/assets/animations/cebir/cebir_yeni_yazi.png"];

        $(container).append("<img id='zemin'  class='resim' src='"+resimler[0]+"'>");
        $(container).append("<img id='harezmi' class='resim' src='"+resimler[1]+"'>");
        $(container).append("<img id='eskiYazi' class='resim' src='"+resimler[2]+"'>");
        $(container).append("<img id='yeniYazi' class='resim' src='"+resimler[3]+"'>");

        $(container).append("<ul id='ifadeler'>");
        $("#ifadeler").append("<li id='ifade1'>x</li>");
        $("#ifadeler").append("<li id='ifade2'>a+1</li>");
        $("#ifadeler").append("<li id='ifade3'>2n-1=3</li>");

        $(".resim").css({
            position:"absolute",
            top:"20px",
            left:"0",
            right:"0",
            margin:"auto",
            opacity:"0"

        });

        $("#ifadeler").css({
           width:"300px",
           float:"left",
           listStyle:"none",
           position:"absolute",
           top:"20px",
           left:"133px",
           margin:"auto",
           fontSize:"22px",
           textAlign:"right"


        });
        $("#ifadeler li").css({
            position:"relative",
            width:"30%",
            float:"left",
            opacity:"0",
            fontWeight:"bold"
        });

        $("#ifade1").css("color","#44DFFB");
        $("#ifade2").css("color","#B1A0C6");
        $("#ifade3").css("color","#FFCA00");
        var idler=["zemin","harezmi","eskiYazi","yeniYazi"];
        var zaman=0
        for(var i=0; i<idler.length;i++){
            $("#"+idler[i]).delay(i*1000).animate({opacity:"1"},1000);
            zaman=i*1000;
        }

        var idlerIfade=["ifade1","ifade2","ifade3"];
        for(var i=0; i<idlerIfade.length;i++){
            $("#"+idlerIfade[i]).delay(i*1000+zaman).animate({top:"135px",opacity:"1"},1000);
        }

        Main.animationFinished(6000);
		
	}
}
;
var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},

    init:function(container){
        Interaction.container = container;
		Main.setObjective('Yandaki cebirsel ifadelerde kutulara uygun sayıları giriniz ve kontrol ediniz.');
		Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}



        $(container).append("<div id='soru'>");
        $("#soru").append("<div id='sol' class='yanlar'>");
        $("#soru").append("<div id='sag' class='yanlar'>");
        $("#soru").append("<div id='dogru' class='yanlar'>")

        for(var i= 0; i<5;i++){
            $("#sol").append("<div id='sol"+i+"' class='madde'>");
            $("#sag").append("<div id='sag"+i+"' class='madde'>");
            $("#dogru").append("<div id='dogru"+i+"' class='madde cevap'>");

            if(i>0){
                $("#sol"+i).html(i);
                //$("#sag"+i).html(i);

                var input = Interaction.appendInput({
                    width: '35px',
                    height: '32px',
                    textAlign: 'center',
                    fontSize: '20px'

                },false,false);
//                Interaction.inputs[i-1].id="girdi"+i;
//                $("#sag"+i).html($("#girdi"+i));
                $("#sag"+i).append(input);
            }

        }


        $("input").attr("style","margin: auto !important").css("margin-top","3px");
        $(".madde").css({
            width:"148px",
            height:"40px",
            textAlign:"center",
            fontSize:"20px",
            lineHeight:"40px",
            margin:"0px"


        });

        $(".yanlar").css({
            width:"148px",
            height:"200px",

            float:"left"

        });

        $("#sol0, #sag0, #dogru0").css("border-bottom","2px solid #a9dbe4").css("font-weight","bold").css("color","#006e7d").css("height","35px").css("margin-bottom","10px")
        $("#dogru0").css("opacity","0");

        $("#soru")
            .css("width","450px")
            .css("height","200px")
            .css("position","absolute")
            .css("margin","auto")
            .css("font-size","16px")
            .css("left","150px")
            .css("right","0px")
            .css("top","10px")
            //.css("border","1px solid red");

        Interaction.appendStatus({
            bottom:'20px',
            right:'160px',
            width:"280px",
            textAlign:"center"
        });

        Interaction.appendButton({
            bottom:'10px',
            right:'40px'
        });

        Interaction.soruSayaci=0;
        Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){
        $(".cevap").html("");
        $("#dogru0").css("opacity","0");
        $("input").css("color","black");
        $("#soru").animate({left:"150px"},1000);

        Interaction.random1=Math.floor(Math.random()*9+1);

        Interaction.random2=Math.floor(Math.random()*9);

        Interaction.isaret=Interaction.soruSayaci%2==0?" + ":" – ";

        var bilinmeyenRandom=Math.floor(Math.random()*2);
        var bilinmeyen="";
        switch (bilinmeyenRandom){
            case 0:
                bilinmeyen="x";
                break;
            case 1:
                bilinmeyen="a";
                break;
            case 2:
                bilinmeyen="n";
                break;


        }

        $("#sol0").html(bilinmeyen);
        //Interaction.soru=Interaction.random1==1?("x "+Interaction.isaret+" "+Interaction.random2):(Interaction.random1+"x "+Interaction.isaret+" "+Interaction.random2)

        Interaction.parca1=Interaction.random1==1?(bilinmeyen):(Interaction.random1+bilinmeyen);
        Interaction.parca2=Interaction.random2==0?"":Interaction.isaret+Interaction.random2;

        Interaction.soru=Interaction.parca1+Interaction.parca2;
        $("#sag0").html(Interaction.soru);

        Interaction.soruSayaci++;

		},
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
		
		},
	isAnswerCorrect : function(values){
        Interaction.dogrular=[];
        Interaction.girilenler=[];
        Interaction.testSayaci=0;
        if(Interaction.soruSayaci%2!=0){ // toplama durumu


            for(var i=1; i<=4;i++){
                var dogru=Interaction.random1*i+Interaction.random2;
                Interaction.dogrular.push(dogru);
                Interaction.girilenler.push(values[i-1]);

                if(Interaction.dogrular[i-1]==Interaction.girilenler[i-1])
                    Interaction.testSayaci++;
            }


            //if(value[0])
        }
        else{
            for(var i=1; i<=4;i++){
                var dogru=Interaction.random1*i-Interaction.random2;
                Interaction.dogrular.push(dogru);
                Interaction.girilenler.push(values[i-1]);

                if(Interaction.dogrular[i-1]==Interaction.girilenler[i-1])
                    Interaction.testSayaci++;
            }
        }

        if(Interaction.testSayaci==4)
            return true;

		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
        $("#soru").animate({left:"0px"},1000);
        $("#dogru0").html("Doğru Cevaplar");
        $("#dogru0").css("opacity","1");
        for(var i=1; i<=4;i++){
            $("#dogru"+i).css("color","green").html(Interaction.dogrular[i-1]);
            if(Interaction.dogrular[i-1]==Interaction.girilenler[i-1])
                $("#sag"+i+" input").css("color","green");
            else
            $("#sag"+i+" input").css("color","red");
        }

        Interaction.setStatus("Yanlış cevap; doğrusu yukarıdadır.",false);
	}
}
;




