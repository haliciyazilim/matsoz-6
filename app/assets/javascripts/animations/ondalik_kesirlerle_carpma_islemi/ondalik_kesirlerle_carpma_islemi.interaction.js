var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki ondalık kesirleri çarpınız ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        // Soru Divi
        $(container).append("<div id='soru'>");
        $("#soru").css("width","120px")
            .css("height","130px")
            .css("margin","auto")
            .css("position","absolute")
            //.css("bottom","20px")
            .css("left","0")
            .css("right","0")
            .css("top","0px")
            .css("font-size","20px");
        //.css("border","solid 1px black");

        // Cevap Divi
        $(container).append("<div id='cevap'>");
        $("#cevap").css("width","120px")
            .css("height","130px")
            .css("margin","auto")
            .css("position","absolute")
            //.css("bottom","20px")

            .css("right","120px")
            .css("top","0px")
            .css("font-size","20px")
            .css("opacity","0");



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
        Interaction.inputs=[];
        $("#soru, #cevap").html("");
        $("#cevap").animate({opacity:0, right:"0px"},1000, function(){$("#cevap").html("");});
        $("#soru").animate({right:"0px"});

        carpma();


    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(values){

        if(carpan2Str.length>1){
            girdi1=$("#soru #sonuc1").html();
            girdi2=$("#soru #sonuc2").html();
            girdiToplam=$("#soru #sonucToplam").html();

            cevap1=values[0];
            cevap2=values[1];
            cevap3=values[2];


            cevap3Array=cevap3.split(",");

            if(cevap3Array[0])
                cevap3=cevap3Array[0]+"."+cevap3Array[1];

            console.log(cevap1+", "+cevap2+", "+cevap3);
            console.log(girdi1+", "+girdi2+", "+girdiToplam);

            yanlislar=[];
            if(cevap1==girdi1 && cevap2==girdi2 && cevap3==girdiToplam)
                return true;
            else{
                if(cevap1!=girdi1)
                    yanlislar.push(1);
                if(cevap2!=girdi2)
                    yanlislar.push(2);
                if(cevap3!=girdiToplam)
                    yanlislar.push(3);
            }
        }

        else  if(carpan2Str.length==1){
            girdi1=carpan1*carpan2;

            cevap1=values;



            cevap1Array=cevap1.split(",");

            if(cevap1Array[0])
                cevap1=cevap1Array[0]+"."+cevap1Array[1];

            console.log(cevap1);
            console.log(girdi1);

            yanlislar=[];
            if(cevap1==girdi1)
                return true;
            else{
                if(cevap1!=girdi1)
                    yanlislar.push(1);
            }
        }

    },
	onCorrectAnswer : function(){
        Interaction.pause();
        $("input[type='button']").css({opacity:0.5})
        $("#cevap").animate({opacity:1, right:"150px"},1000);
        $("#soru").animate({opacity:1, right:"200px"},1000);
        var islem=new DecimalMultiplication(carpan1,carpan2,"cevap",30);
        //var islem=new LongMultiplication(178,172,"ornek");
        islem.doldur();
        islem.basla(1000,1000);
        var bitirmeSuresi=carpan2Str.length==1?10000:35000;

        setTimeout(function(){Interaction.resume(); $("input[type='button']").css({opacity:1});},bitirmeSuresi);
		
    },
	onWrongAnswer : function(){

    },
	onFail : function(){
        Interaction.pause();
        $("input[type='button']").css({opacity:0.5})

        $("#soru input").css("color","green");
        for(var i=0; i<yanlislar.length;i++){
            var yesillenecek=yanlislar[i];

            $("#soru #girdi"+yesillenecek).css("color","red");

        }

        Interaction.setStatus('Cevabın yanlış; doğrusu sağ taraftadır.',false);
        $("#cevap").animate({opacity:1, right:"150px"},1000);
        $("#soru").animate({opacity:1, right:"200px"},1000);

        var islem=new DecimalMultiplication(carpan1,carpan2,"cevap",30);
        //var islem=new LongMultiplication(178,172,"ornek");
        islem.doldur();
        islem.basla(1000,1000);
        var bitirmeSuresi=carpan2Str.length==1?10000:35000;



        setTimeout(function(){Interaction.resume(); $("input[type='button']").css({opacity:1});},bitirmeSuresi);
		
    }
}