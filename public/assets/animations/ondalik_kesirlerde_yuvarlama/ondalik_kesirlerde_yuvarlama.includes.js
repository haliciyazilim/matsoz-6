function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}
;
sayiOlustur=function(sira){
    var sayi=0;
    var kontrol=0;

    while(kontrol==0){
        sayi=Math.random()*10;
        var sayiFormat=sayi.toFixed(2);

        var sayiArray=sayiFormat.toString().split(".");

        if(sayiArray[1]<95)
            kontrol=1;
    }



    var virguldenSonra=0;
    var metin="";
    var istenen=0;

    var soruSecimi=sira;
    //soruSecimi=6;

    switch (soruSecimi){
        case 0:
            sayi=sayi.toFixed(2);
            virguldenSonra=2
            metin="onda birler";
            istenen=2;
            break;
        case 1:
            sayi=sayi.toFixed(3);
            virguldenSonra=3
            metin="onda birler";
            istenen=3;
            break;
        case 2:
            sayi=sayi.toFixed(3);
            virguldenSonra=3
            metin="yüzde birler";
            istenen=2;

            var sayiKontrolu=sayi.toString().charAt(sayi.toString().length-2);
            if(sayiKontrolu==9){
                sayi=parseFloat(sayi)-0.010;
                console.log("girdim: "+sayi)
                sayi=sayi.toFixed(3);
                console.log("girdim: "+sayi)
            }
            break;
    }


    var soru=[sayi,metin,virguldenSonra,istenen];

    return soru;

}
;
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        $(container).append("<div id='baslik'>");
        $("#baslik").css({
            position:"absolute",
            width:"100%",
            top:"25px",
            left:"0px",
            right:"0px",
            margin:"auto",
            textAlign:"center",
            fontSize:"20px",

            opacity:1
        }).html("1,28 ondalık kesrini onda birler basamağına göre yuvarlama:");

        $(container).append("<div id='cumle'>");
        $("#cumle").css({
            position:"absolute",
            width:"100%",
            top:"135px",
            left:"0px",
            right:"0px",
            margin:"auto",
            textAlign:"center",
            fontSize:"18px",
            opacity:0
        }).html("1,28 ondalık kesri, 8 > 5 olduğu için 1,30 yani kısaca 1,3 ondalık kesrine yuvarlanır.");

        $(container).append("<div id='sonNokta'>");
        $("#sonNokta").css({
            position:"absolute",
            width:"100%",
            top:"165px",
            left:"0px",
            right:"0px",
            margin:"auto",
            textAlign:"center",
            fontSize:"20px",
            opacity:0,
            color:"red"
        }).html("1,28 <img src='/assets/animations/ondalik_kesirlerde_yuvarlama/sag_ok.png'  /> 1,3");

        $("#sonNokta img").css({display:"inline-block"});



        var sayiDogrusuTop=90;
        var fontSize=16;

        Animation.numericalAxis = new Group();
        var arr = new Group();
        var arrow = new Path.OneSidedArrow(new Point(40, sayiDogrusuTop), new Point(717, sayiDogrusuTop), 10, 30)
        var arrow2 = new Path.OneSidedArrow(new Point(717, sayiDogrusuTop), new Point(718, sayiDogrusuTop), 10, 30);
        arrow.rotate(180);
        arr.addChild(arrow);
        arr.addChild(arrow2);
        arr.strokeWidth=2;

        var pieceLength = 677/15;

        Interaction.smallDots = new Group();
        Interaction.sayiTextGrup=new Group();
        for(var i = 0; i < 14; i++){

            var sayi=1.18+i/100;


            if(i==3 || i==10 || i==12){
                var sayiText=new PointText(new Point(17+pieceLength*(i+1), sayiDogrusuTop-20));
                sayiText.fontSize=16;
                sayiText.strokeWidth=2;
                sayiText.strokeColor=new RgbColor(0,0,0);

                var smallDot = new Path.Circle(new Point(40+pieceLength*(i+1), sayiDogrusuTop), 5)
                smallDot.fillColor = new RgbColor(0,0,0);
            }
            else{
                var sayiText=new PointText(new Point(25+pieceLength*(i+1), sayiDogrusuTop-20));
                sayiText.fontSize=12;
                sayiText.fillColor=new RgbColor(0,0,0);

                var smallDot = new Path.Circle(new Point(40+pieceLength*(i+1), sayiDogrusuTop), 3);
                smallDot.fillColor = new RgbColor(0,0,0);

            }

            sayiText.content=Util.format(sayi,{places:2});


            Interaction.sayiTextGrup.addChild(sayiText);
            Interaction.smallDots.addChild(smallDot);


        }

        animationHelper=new AnimationHelper({
           fillColor: new RgbColor(0,0,0),
            strokeColor:new RgbColor(0,0,0)
        });

        animationHelper.animate({
            style:{
                fillColor: new RgbColor(1,0,0),
                strokeColor:new RgbColor(1,0,0)
            },
            delay: 1000,
            duration: 3000,
            update: function(){
                Interaction.sayiTextGrup.children[10].fillColor=this.fillColor;
                Interaction.sayiTextGrup.children[10].strokeColor=this.strokeColor;
                Interaction.smallDots.children[10].fillColor=this.fillColor;

            }
        });


        //Interaction.sayiTextGrup.children[10].fillColor=new RgbColor(255,0,0);

        sagaOkHelper=new AnimationHelper({
            okPosition:pieceLength*12,
            opacity:0
        });
        Interaction.sagaOk = new Path.OneSidedArrow(new Point(pieceLength*12, sayiDogrusuTop+20), new Point( sagaOkHelper.okPosition+6, sayiDogrusuTop+20), 10, 30);
        Interaction.sagaOk.strokeColor="blue";
        Interaction.sagaOk.fillColor="blue"
        Interaction.sagaOk.opacity=0;


        sagaOkHelper.animate({
            style:{
                okPosition:pieceLength*14-5,
                opacity:1
            },
            delay: 4000,
            duration: 3000,
            update: function(){
                Interaction.sagaOk.remove();
                Interaction.sagaOk = new Path.OneSidedArrow(new Point(pieceLength*12, sayiDogrusuTop+20), new Point(this.okPosition, sayiDogrusuTop+20), 10, 30);
                Interaction.sagaOk.strokeColor="blue";
                Interaction.sagaOk.fillColor="blue"
                Interaction.sagaOk.opacity=this.opacity*10;



            }
        });

        solaOkHelper=new AnimationHelper({
            okPosition:pieceLength*12-10,
            opacity:0
        });
        Interaction.solaOk = new Path.OneSidedArrow(new Point(pieceLength*12-10, sayiDogrusuTop+20), new Point( solaOkHelper.okPosition-11, sayiDogrusuTop+20), 10, 30);
        Interaction.solaOk.strokeColor="blue";
        Interaction.solaOk.fillColor="blue"
        Interaction.solaOk.opacity=0;


        solaOkHelper.animate({
            style:{
                okPosition:pieceLength*5-5,
                opacity:1
            },
            delay: 4000,
            duration: 3000*1.5,
            update: function(){
                Interaction.solaOk.remove();
                Interaction.solaOk = new Path.OneSidedArrow(new Point(pieceLength*12-10, sayiDogrusuTop+20), new Point(this.okPosition, sayiDogrusuTop+20), 10, 30);
                Interaction.solaOk.strokeColor="blue";
                Interaction.solaOk.fillColor="blue"
                Interaction.solaOk.opacity=this.opacity*10;



            },
            callback: function(){
                console.log("CallBAck");
                $("#cumle").animate({opacity:1},1000);
                $("#sonNokta").delay(1000).animate({opacity:1},1000);
            }
        });

        Main.animationFinished(12000);
    }
}
;
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


        siraArray=Util.getShuffledArray(3);
        sira=0;

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        var simdikiSira=siraArray[sira];
        Interaction.soru=sayiOlustur(simdikiSira);
        var istenenKisim=Interaction.soru[1];
        Interaction.virguldenSonraBasamak=Interaction.soru[2];
        Interaction.gelenSayi=Interaction.soru[0]
        Main.setObjective("Yandaki ondalık kesri <b>"+istenenKisim+"</b> basamağına göre yuvarlayınız ve kontrol ediniz.");
        $("#soru").html(Util.format(Interaction.gelenSayi,{places:Interaction.virguldenSonraBasamak})+" = ");

        $("#sayi, #sonuc, #olcum").animate({opacity:0},1000);

        sira++;
        if(sira==3)
            sira=0;

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
        Interaction.pause();


        var gosterilenSayi=Util.format(Interaction.gelenSayi,{places:Interaction.virguldenSonraBasamak});
        var olusanSayi=Util.format(Interaction.dogruCevap,{places:Interaction.virguldenSonraBasamak-1});

        if(istenen==3 && Interaction.virguldenSonraBasamak==3){
            olusanSayi=Util.format(Interaction.dogruCevap,{places:1});

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
        $("#sayi, #sonuc, #olcum").animate({opacity:1},1000,function(){Interaction.resume();});

		
    }
}
;




