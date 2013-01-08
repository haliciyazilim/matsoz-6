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
