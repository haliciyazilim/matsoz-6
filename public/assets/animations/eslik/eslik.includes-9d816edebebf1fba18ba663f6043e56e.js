function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}
;
soruResimleri={
    soruAdedi:5,
    soru1R1:"/assets/animations/eslik/eslik_1_alt_1.png",
    soru1R2:"/assets/animations/eslik/eslik_1_alt_2.png",
    soru1R3:"/assets/animations/eslik/eslik_1_alt_3.png",
    soru1RC:"/assets/animations/eslik/eslik_1_Cevap.png",
    soru1RS:"/assets/animations/eslik/eslik_1_Soru.png",
    soru1DD:180,

    soru2R1:"/assets/animations/eslik/eslik_2_alt_1.png",
    soru2R2:"/assets/animations/eslik/eslik_2_alt_2.png",
    soru2R3:"/assets/animations/eslik/eslik_2_alt_3.png",
    soru2RC:"/assets/animations/eslik/eslik_2_Cevap.png",
    soru2RS:"/assets/animations/eslik/eslik_2_Soru.png",
    soru2DD:180,

    soru3R1:"/assets/animations/eslik/eslik_3_alt_1.png",
    soru3R2:"/assets/animations/eslik/eslik_3_alt_2.png",
    soru3R3:"/assets/animations/eslik/eslik_3_alt_3.png",
    soru3RC:"/assets/animations/eslik/eslik_3_Cevap.png",
    soru3RS:"/assets/animations/eslik/eslik_3_Soru.png",
    soru3DD:180,

    soru4R1:"/assets/animations/eslik/eslik_4_alt_1.png",
    soru4R2:"/assets/animations/eslik/eslik_4_alt_2.png",
    soru4R3:"/assets/animations/eslik/eslik_4_alt_3.png",
    soru4RC:"/assets/animations/eslik/eslik_4_Cevap.png",
    soru4RS:"/assets/animations/eslik/eslik_4_Soru.png",
    soru4DD:180,

    soru5R1:"/assets/animations/eslik/eslik_5_alt_1.png",
    soru5R2:"/assets/animations/eslik/eslik_5_alt_2.png",
    soru5R3:"/assets/animations/eslik/eslik_5_alt_3.png",
    soru5RC:"/assets/animations/eslik/eslik_5_Cevap.png",
    soru5RS:"/assets/animations/eslik/eslik_5_Soru.png",
    soru5DD:180



};
var Animation = {

	init:function(container){
        Animation.container = container;

    var resimler={
        animasyon:"/assets/animations/eslik/animasyon.gif",
        animasyonSonFrame:"/assets/animations/eslik/animasyon_son_frame.gif",

    };

        gosteri= new Image();
        gosteri.src=resimler.animasyon;
        gosteri.id="gosteri";
        //gosteri.class="animasyon";

        sonFrame= new Image();
        sonFrame.src=resimler.animasyonSonFrame;
        sonFrame.id="sonFrame";
        //sonFrame.class="animasyon";


        $(Animation.container).append(gosteri);
        $(Animation.container).append(sonFrame);

        $("#gosteri, #sonFrame").addClass("animasyon");



        $(".animasyon").css({
            position:"absolute",
            width:"750px",
            height:"170px",
            right:"0",
            left:"0",
            top:"0",
            bottom:"0",
            margin:"auto"
        });
        $("#gosteri").css("z-index","3");
        $("#sonFrame").css("z-index","2");

        //setTimeout(function(){$("#gosteri").remove(); Main.animationFinished()},10000);

        setTimeout(function(){$("#gosteri").css("opacity","0").attr("src",sonFrame.src);  Main.animationFinished()},12000);

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
        Main.setObjective('Yandaki şeklin eşini bulunuz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:"40px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"50px",
            right:"150px"
        })

        Interaction.soruResmi=new Image();
        Interaction.soruResmi.id="soru";

        Interaction.soruResmi1=new Image();
        Interaction.soruResmi1.id="secenek1";

        Interaction.soruResmi2=new Image();
        Interaction.soruResmi2.id="secenek2";

        Interaction.soruResmi3=new Image();
        Interaction.soruResmi3.id="secenek3";

        Interaction.soruResmi4=new Image();
        Interaction.soruResmi4.id="secenek4";

        $(Interaction.container).append(Interaction.soruResmi);
        $(Interaction.container).append("<div id='secenekler'>");
        $("#secenekler").append(Interaction.soruResmi1);
        $("#secenekler").append(Interaction.soruResmi2);
        $("#secenekler").append(Interaction.soruResmi3);
        $("#secenekler").append(Interaction.soruResmi4);



        $("#soru").css({
            position:"absolute",
            width:"72px",
            height:"72px",
            top:"30px",
            left:"0",
            right:"0",
            margin:"auto"
        });

        $("#secenekler").css({
            position:"absolute",
            width:"340px",
            height:"72px",
            top:"120px",
            left:"0",
            right:"0",
            margin:"auto",
            float:"left"
        });

        $("#secenekler img").css({

            marginLeft:"10px",
            float:"left",
            clear:"none",
            cursor:"pointer"

        });
        Interaction.verilenCevap=null;
        $("#secenekler img").mousedown(function(){
            $("#secenekler img").css("opacity","0.5");
            $(this).css("opacity","1");
            Interaction.verilenCevap=$(this).attr("id");

        });

        Interaction.sorularArray=Util.getShuffledArray(soruResimleri.soruAdedi);
        Interaction.soruSirasi=0;


        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){

        Interaction.verilenCevap=null;

        cevirme=Math.floor(Math.random()*3);

        switch (cevirme){
            case 0:
                Interaction.cevirmeDerecesi=0;
                break;
            case 1:
                Interaction.cevirmeDerecesi=-90;
                break;
            case 2:
                Interaction.cevirmeDerecesi=90;
                break;
        }



        console.log("ÇEvrim: "+Interaction.cevirmeDerecesi);
        $("#soru")
            .css("transform","rotate("+Interaction.cevirmeDerecesi+"deg)")
            .css("-webkit-transform","rotate("+Interaction.cevirmeDerecesi+"deg)")
            .css("-ms-transform","rotate("+Interaction.cevirmeDerecesi+"deg)")
            .css("-moz-transform","rotate("+Interaction.cevirmeDerecesi+"deg)")
            .css("-o-transform","rotate("+Interaction.cevirmeDerecesi+"deg)");

        $("#secenekler img").css({
            border:"none",
            opacity:"1"
        })

        Interaction.simdikiSoru=Interaction.sorularArray[Interaction.soruSirasi];
        console.log(Interaction.simdikiSoru);

        var secenekSiralama=Util.getShuffledArray(4);
        switch (Interaction.simdikiSoru){
            case 0:
                var soru=soruResimleri.soru1RS;
                var seceneklerArray=[
                    soruResimleri.soru1R1,
                    soruResimleri.soru1R2,
                    soruResimleri.soru1R3,
                    soruResimleri.soru1RC];
                var dogruCevap=soruResimleri.soru1RC;
                var donusDerecesi=soruResimleri.soru1DD;
                break;
            case 1:
                var soru=soruResimleri.soru2RS;
                var seceneklerArray=[
                    soruResimleri.soru2R1,
                    soruResimleri.soru2R2,
                    soruResimleri.soru2R3,
                    soruResimleri.soru2RC];
                var dogruCevap=soruResimleri.soru2RC;
                var donusDerecesi=soruResimleri.soru2DD;
                break;
            case 2:
                var soru=soruResimleri.soru3RS;
                var seceneklerArray=[
                    soruResimleri.soru3R1,
                    soruResimleri.soru3R2,
                    soruResimleri.soru3R3,
                    soruResimleri.soru3RC];
                var dogruCevap=soruResimleri.soru3RC;
                var donusDerecesi=soruResimleri.soru3DD;
                break;
            case 3:
                var soru=soruResimleri.soru4RS;
                var seceneklerArray=[
                    soruResimleri.soru4R1,
                    soruResimleri.soru4R2,
                    soruResimleri.soru4R3,
                    soruResimleri.soru4RC];
                var dogruCevap=soruResimleri.soru4RC;
                var donusDerecesi=soruResimleri.soru4DD;
                break;
            case 4:
                var soru=soruResimleri.soru5RS;
                var seceneklerArray=[
                    soruResimleri.soru5R1,
                    soruResimleri.soru5R2,
                    soruResimleri.soru5R3,
                    soruResimleri.soru5RC];
                var dogruCevap=soruResimleri.soru5RC;
                var donusDerecesi=soruResimleri.soru5DD;
                break;


        }



        Interaction.soruResmi.src=soru;
        Interaction.soruResmi1.src=seceneklerArray[secenekSiralama[0]];
        Interaction.soruResmi2.src=seceneklerArray[secenekSiralama[1]];
        Interaction.soruResmi3.src=seceneklerArray[secenekSiralama[2]];
        Interaction.soruResmi4.src=seceneklerArray[secenekSiralama[3]];
        Interaction.dogruCevap=dogruCevap;
        Interaction.donusDerecesi=donusDerecesi;


        Interaction.soruSirasi++;
        if(Interaction.soruSirasi==soruResimleri.soruAdedi)
            Interaction.soruSirasi=0;

    },
		

	preCheck : function(){
        if(Interaction.verilenCevap==null){
            Interaction.setStatus('Lütfen bir seçim yapınız.',false);
            return false;
        }
    },
	isAnswerCorrect : function(value){
        var verilenCevap=$("#"+Interaction.verilenCevap).attr("src");
        if(verilenCevap==Interaction.dogruCevap)
            return true;


    },
	onCorrectAnswer : function(){
        $("#"+Interaction.verilenCevap).css("border","solid 3px green");
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.',false);
        $("#"+Interaction.verilenCevap).css("border","solid 2px red");

        $("#"+Interaction.verilenCevap).css("opacity","0.50")

        for(var i=1; i<=4;i++){
            if($("#secenek"+i).attr("src")==Interaction.dogruCevap)
                $("#secenek"+i).css("border","solid 3px green").css("opacity","1");
        }

        var donus=90;

        var animHelp=new AnimationHelper({
            donus:0
        });

        animHelp.animate({
            style:{
                donus:Interaction.donusDerecesi
            },

            delay:0,
            duration:2000,
            update:function(){
                $("#soru")
                    .css("transform","rotate("+this.donus+"deg)")
                    .css("-webkit-transform","rotate("+this.donus+"deg)")
                    .css("-ms-transform","rotate("+this.donus+"deg)")
                    .css("-moz-transform","rotate("+this.donus+"deg)")
                    .css("-o-transform","rotate("+this.donus+"deg)");
            }


        });


        /*$("#soru")
            .css("transform","rotate("+donus+"deg)")
            .css("-webkit-transform","rotate("+donus+"deg)")
            .css("-ms-transform","rotate("+donus+"deg)")
            .css("-moz-transform","rotate("+donus+"deg)")
            .css("-o-transform","rotate("+donus+"deg)");*/
    }
}
;




