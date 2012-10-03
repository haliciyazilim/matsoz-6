var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;

        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        $(container).append("<div id='soru'>");
        $("#soru").css({
            position:"absolute",
            width:"100px",
            height:"50px",
            left:"150px",
            top:"100px",
            fontSize:"20px",
            lineHeight:"55px",
            textAlign:"right",
            opacity:1
        });

        $(container).append("<div id='cevap'><div id='sayi'>33,67</div><div id='olcum'>7>5</div><div id='sonuc'></div></div>");
        $("#cevap").css({
            position:"absolute",
            width:"600px",
            height:"50px",
            left:"0",
            right:"0",
            margin:"auto",
            top:"180px",
            textAlign:"center",
            fontSize:"20px",
            opacity:1

        });
        $("#cevap div").css({float:"left",width:"200px"});

        $("#sayi, #sonuc, #olcum").css("opacity","0");




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
        });

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.soru=sayiOlustur();
        var istenenKisim=Interaction.soru[1];
        Interaction.virguldenSonraBasamak=Interaction.soru[2];
        Interaction.gelenSayi=Interaction.soru[0]
        Main.setObjective("Yandaki ondalık kesri <b>"+istenenKisim+"</b> basamağına göre yuvarlayınız ve kontrol ediniz.");
        $("#soru").html(Util.format(Interaction.gelenSayi,{places:Interaction.virguldenSonraBasamak})+" = ");

        $("#sayi, #sonuc, #olcum").animate({opacity:0},1000);

    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        istenen=Interaction.soru[3];

        sonKisim=Interaction.gelenSayi.toString().charAt(Interaction.gelenSayi.length-(istenen-1));
        if(sonKisim<5){
            Interaction.dogruCevap=Interaction.gelenSayi.toString().substr(0,Interaction.gelenSayi.length-(istenen-1))
        }
        else{
            degisecekRakam=Interaction.gelenSayi.toString().charAt(Interaction.gelenSayi.length-istenen);
            console.log("değişecek rakam: "+degisecekRakam);
            degisenRakam=parseInt(degisecekRakam,10)+1;
            console.log("değişen rakam: "+degisecekRakam);

            Interaction.dogruCevap=Interaction.gelenSayi.toString().substr(0,Interaction.gelenSayi.length-istenen);
            Interaction.dogruCevap=Interaction.dogruCevap+degisenRakam;

        }

        var gelenSayiArray=value.split(",");
        if(gelenSayiArray.length==2)
            Interaction.gelenCevap=gelenSayiArray[0]+"."+gelenSayiArray[1];
        else
            Interaction.gelenCevap=gelenSayiArray[0];

        if(parseFloat(Interaction.dogruCevap)==parseFloat(Interaction.gelenCevap))
            return true;



    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Cevabın yanlış; doğrusu yukarıdadır.',false);

        var gosterilenSayi=Util.format(Interaction.gelenSayi,{places:Interaction.virguldenSonraBasamak});
        var olusanSayi=Util.format(Interaction.dogruCevap,{places:Interaction.virguldenSonraBasamak-1});

        if(istenen==3 && Interaction.virguldenSonraBasamak==3){
            olusanSayi=Util.format(Interaction.dogruCevap,{places:1});
            alert();
        }



        if(sonKisim<5){
            $("#olcum").html(sonKisim+" < 5");
        }
        else if(sonKisim==5)
            $("#olcum").html(sonKisim+" ≥ 5");
        else
            $("#olcum").html(sonKisim+" > 5");

        $("#sayi").html(gosterilenSayi);
        $("#sonuc").html(gosterilenSayi+" <img src='/assets/animations/ondalik_kesirlerde_yuvarlama/sag_ok.png'  /> "+olusanSayi);

        $("#cevap img").css({display:"inline-block"});
        $("#sayi, #sonuc, #olcum").animate({opacity:1},1000);

		
    }
}