function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}
;
// Normal Çarpma
function carpma(){
    carpim1OndalikSecim=Math.floor(Math.random()*100);
    carpan1=Math.floor(Math.random()*1000);
    carpan1=carpim1OndalikSecim<50?carpan1/10:carpan1/100;

    carpan2=(Math.random()*10).toFixed(1);


    carpan1=36.9;
    carpan2=4.3;

    console.log(carpan1);
    console.log(carpan2);

    carpan1Array=0;
    carpan2Array=0;

    if(Util.isInteger(carpan1)==false){
        carpan1Array=carpan1.toString().split(".");
        carpan1VirguldenSonra=carpan1Array[1].length;
    }
    else{
        carpan1Array=[carpan1];
        carpan1VirguldenSonra=0;
    }

    if(Util.isInteger(carpan2)==false){
        carpan2Array=carpan2.toString().split(".");
        carpan2VirguldenSonra=carpan2Array[1].length;
    }
    else{
        carpan2=parseInt(carpan2,10);
        carpan2Array=[carpan2];
        carpan2VirguldenSonra=0;
    }


    var virgulFark=carpan1VirguldenSonra-carpan2VirguldenSonra;
    var virgulToplam=carpan1VirguldenSonra+carpan2VirguldenSonra;

    $("#soru",container).append("<div id='carpan1' class='carpan'>");

    $("#carpan1")
        .css("top","10px").html(Util.format(carpan1, {point:',', places:carpan1VirguldenSonra}));

    $("#soru",container).append("<div id='carpan2' class='carpan'>");
    $("#carpan2")
        .css("top","50px").html(Util.format(carpan2, {point:',', places:carpan2VirguldenSonra}));


    $("#soru",container).append("<div id='carpmaIsareti'>");
    $("#carpmaIsareti").css("width","100px")
        .css("text-align","left")
        .css("height","30px")
        .css("margin","auto")
        .css("position","absolute")
        //.css("bottom","20px")
        //.css("left","0")
        .css("right","0px")
        .css("font-size","30px")
        .css("border-bottom","solid 2px black")
        .css("top","60px")
        .html("x");


    carpan1Str=Util.isInteger(carpan1)==false?carpan1Array[0]+""+carpan1Array[1]:parseInt(carpan1,10);
    carpan2Str=Util.isInteger(carpan2)==false?carpan2Array[0]+""+carpan2Array[1]:parseInt(carpan2,10);

    console.log("çarpanlar: "+carpan1Str+","+carpan2Str);

    carpan1Str=carpan1Str.toString();
    carpan2Str=carpan2Str.toString();

    icerik= new Array();
    for (var i=0; i<=carpan2Str.length; i++){
        icerik[i]=carpan1Str*carpan2Str.charAt(carpan2Str.length-i);

        if(icerik[i]==0)
            icerik[i]="000";
        console.log("icerik_"+i+": "+icerik[i]);
    }

    for(var i=0; i<carpan2Str.length;i++){
        var top=(100+35*i);
        var right=(i*16);
        var id=i+1;

        $("#soru",container).append("<div id='sonuc"+id+"'/>");
        $("#sonuc"+id).css("width","100px")
            .css("text-align","right")
            .css("height","30px")
            .css("margin","auto")
            .css("position","absolute")
            //.css("bottom","20px")
            //.css("left","0")
            .css("right",right)
            .css("font-size","30px")
            .css("top",top+"px")
            .css("z-index","5")
            .html(icerik[i+1]);


        /*$("#girdi"+id).css("width","100px")
            .css("text-align","right")
            .css("height","30px")
            .css("margin","auto")
            .css("position","absolute")
            //.css("bottom","20px")
            //.css("left","0")
            .css("right",right)
            .css("font-size","30px")
            .css("top",top+"px")
            .css("z-index","5");*/

       var input= Interaction.appendInput({
            position:"absolute",
            width:"100px",
            height:"30px",
            right:right,
            top:top+"px",
            margin:"auto",
            fontSize:"30px",
            textAlign:"right",
            zIndex:"5"
        }, true,false);
        input.id = "girdi"+id;
        $("#girdi"+id).attr("maxLength", "5");

        $("#soru",container).append(input);


        if(i==(carpan2Str.length-1) &&carpan2Str.length>1){
            $("#soru",container).append("<div id='toplamaIsareti'>");
            $("#toplamaIsareti").css("width",120+i*20+"px")
                .css("text-align","left")
                .css("height","30px")
                .css("margin","auto")
                .css("position","absolute")
                .css("right","0px")
                .css("font-size","30px")
                .css("border-bottom","solid 2px black")
                .css("top",(top+5)+"px")
                .html("+");

            $("#soru",container).append("<div id='sonucToplam'/>");
            $("#sonucToplam").css("width",120+(i-1)*16+"px")
                .css("text-align","right")
                .css("height","30px")
                .css("margin","auto")
                .css("position","absolute")
                //.css("bottom","20px")
                //.css("left","0")
                .css("right","0px")
                .css("font-size","30px")
                .css("top",top+40+"px")
                .css("z-index","5")
                .html((carpan1*carpan2).toFixed(virgulToplam));

           /* $("#soru",container).append("<input id='girdiToplam' type='text' maxlength=7 />");
            $("#girdiToplam").css("width",120+(i-1)*16+"px")
                .css("text-align","right")
                .css("height","30px")
                .css("margin","auto")
                .css("position","absolute")
                //.css("bottom","20px")
                //.css("left","0")
                .css("right","0px")
                .css("font-size","30px")
                .css("top",top+40+"px")
                .css("z-index","5");*/

            var inputSonuc= Interaction.appendInput({
                position:"absolute",
                width:"100px",
                height:"30px",
                right:"0px",
                top:top+40+"px",
                margin:"auto",
                fontSize:"30px",
                textAlign:"right",
                zIndex:"5"

            }, true,false);
            inputSonuc.id = "girdi3";
            $("#soru",container).append(inputSonuc);
            $("#girdi3").attr("maxLength", "7");



        }



    }



    /*$("#soru",container).append("<div id='toplam' class='carpan'>");
     $("#toplam")
     .attr("style","top:210px; right:32px !important")
     .html(format(toplam, {point:'.'}));*/

    $("input").addClass("input").addClass("number_input_field");

    $(".carpan").css("width","100px")
        .css("text-align","right")
        .css("height","30px")
        .css("margin","auto")
        .css("position","absolute")
        //.css("bottom","20px")
        //.css("left","0")
        .css("right","0px")
        .css("font-size","30px");

    if(Util.isInteger(carpan2)==true)
        $("#carpan2").css("margin-right",virgulFark*20+3);
    else
        $("#carpan2").css("margin-right",virgulFark*20);
    //.css("border","solid 1px black");
    $("#girdi1, #girdi2, #girdi3, #girdiToplam").keydown(function(event){
        var pos;
        if(event.keyCode == 8)
            pos = 1;
        else
            pos = 0;
        if(this.createTextRange){
            var textRange = node.createTextRange();
            textRange.collapse(true);
            textRange.moveEnd(pos);
            textRange.moveStart(pos);
            textRange.select();
            return true;
        }else if(this.setSelectionRange){
            this.setSelectionRange(pos,pos);
            return true;
        }
    });


    $("#girdi1, #girdi2, #girdi3, #girdiToplam").keyup(
        function(){
            var icerik=$(this).val();

            $(this).val(icerik);
            console.log($(this).val());
        }
    );


}
;
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        $(container).append("<div id='ornek'>");
        $("#ornek").css("width","120px")
            .css("height","130px")

            .css("position","absolute")
            .css("left","0px")
            .css("top","10px");




        // Tablo

        var sayilarStrokeRenk="#9bd1d9";
        var sayilarFillRenk="#f2fafc";
        var tabloStrokeRenk="#255b63";
        var tabloBirlerFillRenk="#ecf8fa";
        var tabloBinlerFillRenk="#d9f1f5";
        var tabloMilyonlarFillRenk="#bfe8ef";
        var inputStrokeRenk="#9bd1d9";

        // Ana Tablo
        $(Animation.container).append("<div id='tablo'>");
        $("#tablo").css("width","540px")
            .css("height","130px")
            .css("margin","auto")
            .css("position","absolute")
            .css("right","20px")
            .css("top","20px")
            .css("font-size","20px")

        var basamaklar=["Yüzler b.","Onlar b.","Birler b.","Onda birler b.","Yüzde birler b.","Binde birler b."];
        var siniflar=["baslik","rakam","virgul"];
        var sinif;
        for(var i=1; i<=6;i++){

            for(var j=1; j<=7;j++){
                if(i==1 && j!=4)
                    sinif=siniflar[0];
                else if(j==4)
                    sinif=siniflar[2];
                else
                    sinif=siniflar[1];

                $("#tablo",Animation.container).append("<div id='parca"+i+"x"+j+"' class='"+sinif+"'>");
                $("#parca"+i+"x"+j).html(" ")

                if(i==1 && j!=4){
                    if(j<4)
                        $("#parca"+i+"x"+j).html(basamaklar[j-1]);
                    else
                        $("#parca"+i+"x"+j).html(basamaklar[j-2]);
                }

                if(i>1 && i%2!=0 && j!=4)
                    $("#parca"+i+"x"+j).css({borderBottom:"1px solid black"})
                else if(i>1 && i%2!=0 && j==4)
                    $("#parca"+i+"x"+j).css({borderBottom:"1px solid "+tabloMilyonlarFillRenk}).html(",");

                if(i>1 && j==4)
                    $("#parca"+i+"x"+j).html("<span id='virgulK"+(i-1)+"'>,</span>");




                if(j%2==0){
                    $("#parca"+i+"x"+j).css({backgroundColor:tabloMilyonlarFillRenk})
                }
                else
                    $("#parca"+i+"x"+j).css({backgroundColor:tabloBirlerFillRenk})
            }
        }

        $(".baslik").css({
            height:"26px",
            width:"85px",
            float:"left",
            fontSize:"12px",
            textAlign:"center",
            lineHeight:"25px",
//            borderBottom:"1px solid black"
        });


        $("#tablo .virgul").css({
            height:"26px",
            width:"30px",
            float:"left",
            textAlign:"center",
            lineHeight:"25px",
//            borderBottom:"1px solid black"


        })

        $(".rakam").css({
            height:"26px",
            width:"85px",
            float:"left",
            fontSize:"16px",
            textAlign:"center",
//            borderBottom:"1px solid black",
            lineHeight:"25px",

        });

        $("#parca2x3").html("<span class='kademe1'>0</span>");
        $("#parca2x5").html("<span class='kademe1'>7</span>");

        $("#parca3x3").html("<span class='kademe2'>1</span>");
        $("#parca3x5").html("<span class='kademe2'>5</span>");

        $("#parca3x1").html("<span class='kademe2'>x</span>");

        $("#parca4x3").html("<span class='kademe3'>0</span>");
        $("#parca4x5").html("<span class='kademe3'>3</span>");
        $("#parca4x6").html("<span class='kademe3'>5</span>");


        $("#parca5x3").html("<span class='kademe4'>0</span>");
        $("#parca5x5").html("<span class='kademe4'>7</span>");

        $("#parca5x1").html("<span class='kademe4'>+</span>");

        $("#parca6x3").html("<span class='kademe5'>1</span>");
        $("#parca6x5").html("<span class='kademe5'>0</span>");
        $("#parca6x6").html("<span class='kademe5'>5</span>");

        $(".kademe1,.kademe2, .kademe3, .kademe4, .kademe5, #virgulK1, #virgulK2, #virgulK3, #virgulK4, #virgulK5").css({opacity:0});

        var islem=new DecimalMultiplication(0.7,1.5,"ornek",30);
//        var islem=new DecimalMultiplication(90,1.5,"ornek",30);


        setTimeout(function(){islem.doldur(); islem.basla(1000,1000);},1000);

        $(".kademe1, #virgulK1").delay(1000).animate({opacity:1},1000);
        $(".kademe2, #virgulK2").delay(2000).animate({opacity:1},1000);
        $(".kademe3, #virgulK3").delay(10000).animate({opacity:1},1000);
        $(".kademe4, #virgulK4").delay(14000).animate({opacity:1},1000);
        $(".kademe5").delay(22000).animate({opacity:1},1000);
        $("#virgulK5").delay(22500).animate({opacity:1},1000);



        Main.animationFinished(24000);

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
;




