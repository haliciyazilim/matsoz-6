var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki ondalık kesirlerle bölme işlemini yapınız ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }
        $(container).append("<div id='soru'>");
        $("#soru").css({
            position:"absolute",
            width:"140px",
            height:"50px",
            left:"110px",
            top:"100px",
            fontSize:"20px",
            lineHeight:"55px",
            textAlign:"right",
            opacity:1
        });

        $(container).append("<div id='cevap'>");
        $("#cevap").css({
            position:"absolute",
            width:"100%",
            top:"180px",
            left:"20px",


            textAlign:"center",
            fontSize:"20px"
        });




        Interaction.appendInput({
            position:"absolute",
            width:"70px",
            height:"50px",
            right:"0",
            top:"100px",
            left:"0",
            margin:"auto",
            textAlign:"center",
            fontSize:"20px",
            opacity:1
        }, true, false);
        Interaction.input.id = "girdi";
        $("#girdi").attr("maxLength", "5");
        Interaction.appendButton({
            bottom:"40px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"50px",
            right:"150px"
        })
        /*
        *	Initialize your interaction here
        */

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        $("#cevap").html("");
        $("input").css("color","black");
        var kontrol=0;

        while(kontrol==0){
            soru=soruGetir();

            var sonuc=soru[0]/soru[1];
            var sonucArray=sonuc.toString().split(".");


            if(sonucArray[1] && sonucArray[1].length<3)
                kontrol=1;

            console.log(soru[0]+", "+soru[1]+", "+sonuc);
        }


        var bolum=Util.isInteger(soru[0])?parseInt(soru[0],10):Util.format(soru[0],{places:2})
        var bolen=Util.isInteger(soru[1])?parseInt(soru[1],10):Util.format(soru[1],{places:2})

        $("#soru").html(bolum+" : "+bolen+" = ");

    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        sonuc=soru[0]/soru[1];
        gelenCevapArray=value.split(",");
        gelenCevap=parseFloat(gelenCevapArray[0]+"."+gelenCevapArray[1]);
        console.log(gelenCevap);
        if(sonuc==gelenCevap)
            return true;

    },
	onCorrectAnswer : function(){
        bolmeIslemi(soru[0],soru[1],"cevap",20);
        $("input #cevap").css("color","green");

        Interaction.pause();
        setTimeout(function(){Interaction.resume()},6000);
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Cevabın yanlış; doğrusu yukarıdadır.',false);
        $("input").css("color","red");


        bolmeIslemi(soru[0],soru[1],"cevap",20);

        Interaction.pause();
        setTimeout(function(){Interaction.resume()},6000);


		
    }
}
;
