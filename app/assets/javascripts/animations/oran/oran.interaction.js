var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;



        Main.setObjective('Yanda verilen şekle göre istenen oranı bulunuz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:"10px",
            right:"65px"
        });
        Interaction.appendStatus({
            bottom:"10px",
            right:"200px"
        })




        $(container).append("<div id='soru'>");
        $("#soru").css({
            position:"absolute",
            width:"235px",
            height:"50px",
            right:"0px",
            top:"35px",
            textAlign:"center",
            fontSize:"20px",
            opacity:1


        });

        $(container).append("<div id='dogruCevap'><div id='kesirD'></div><div id='sonucD'></div></div>");
        $("#dogruCevap").css({
            position:"absolute",
            width:"235px",
            height:"50px",
            right:"-33px",
            top:"185px",
            textAlign:"center",
            fontSize:"20px",
            opacity:1


        });
        $("#kesirD").css({
            width:"30%",
            height:"100%",
            float:"left",
            opacity:0


        });
        $("#kesirD").append("<div id='payD' class='kesir'></div><div id='paydaD' class='kesir'></div>");
        $(".kesir").css({width:"100%",height:"50%"})
        $("#payD").css({lineHeight:"30px"}).html("130 km")
        $("#paydaD").css({borderTop:"black 2px solid",lineHeight:"30px"}).html("2 saat");

        $("#sonucD").css({marginTop:"16px",textAlign:"left",opacity:0}).html("&nbsp; = ");

        //$(container).append("<input id='girdi'>");

        Interaction.appendInput({
            position:"absolute",
            width:"70px",
            height:"50px",
            right:"80px",
            top:"120px",
            textAlign:"center",
            fontSize:"20px",
            opacity:1

        },true, false);
        Interaction.input.id="girdi";
        $("#girdi").attr("maxLength","5");

        Interaction.soruNo=Util.getShuffledArray(4);
        Interaction.sira=0;

        Interaction.prepareNextQuestion();



    },
	nextQuestion: function(randomNumber){



        Main.interactionProject.activeLayer.removeChildren();



        Interaction.siradakiSoru=Interaction.soruNo[Interaction.sira];

        //test
        //Interaction.siradakiSoru=2;

        yeniSoru(Interaction.siradakiSoru);



        Interaction.sira++;

        if(Interaction.sira==4)
            Interaction.sira=0;








        $("#soru").html(Interaction.soru[0]);
        $("#kesirD").delay(500).animate({opacity:0},1000)
        $("#sonucD").animate({opacity:0},1000)

    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        var deger1=Interaction.soru[1];
        var deger2=Interaction.soru[2];
        var sonuc=0;

         sonuc=deger1/deger2;
         $("#payD").html(deger1+" cm");
         $("#paydaD").html(deger2+" cm");





        console.log(value);
        var degerBoluk=value.split(",");

        if(degerBoluk[1]){
        Interaction.girilenDeger=parseFloat(degerBoluk[0]+"."+degerBoluk[1]);
        console.log(Interaction.girilenDeger+"=if="+sonuc);
        Interaction.virguldenSonra=degerBoluk[1].length;
        Interaction.sonuc=sonuc.toFixed(Interaction.virguldenSonra);

        }
        else{
            Interaction.girilenDeger=parseInt(degerBoluk[0],10);
            Interaction.sonuc=sonuc;

            console.log(Interaction.girilenDeger+"=else="+sonuc+", "+Interaction.sonuc+", virgülden sonra: "+Interaction.virguldenSonra);
        }
        if(Interaction.girilenDeger==Interaction.sonuc){
            return true;
        }
        else
            Interaction.sonuc=sonuc;

    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Cevabın yanlış; doğrusu yukarıdadır.',false);

        console.log(Interaction.sonuc+", "+Interaction.virguldenSonra);

        var sonucKontrol=Util.isInteger(Interaction.sonuc)

        if(sonucKontrol==false){
            var sonucArray=Interaction.sonuc.toString().split(".");
            var basamakDegeri=sonucArray[1].length>3?3:sonucArray[1].length;
        }
        else{
            var basamakDegeri=0;
        }

        console.log(Util.format(Interaction.sonuc,{places:basamakDegeri}));
        $("#sonucD").html("&nbsp; = "+Util.format(Interaction.sonuc,{places:basamakDegeri}));



        $("#kesirD").animate({opacity:1},1000)
        $("#sonucD").delay(500).animate({opacity:1},1000)

		
    }
}
