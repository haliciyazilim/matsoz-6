var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    images:[],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yanda verilen sayının doğal sayı olup olmadığını, "EVET" ya da "HAYIR" düğmelerine basarak belirtiniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }
        
        $(container).append("<div id='soru'>");
            $("#soru")
                .css("width","100px")
                .css("height","100px")
                .css("position","absolute")
                .css("left","0")
                .css("top","20px")
                //.css("bottom","0")
                .css("right","0")
                .css("margin","auto")
                //.css("border","1px solid red");
        
          Interaction.appendStatus({
            bottom:'50px',
            right:'160px',
            width:"280px",
            textAlign:"center"
        });
	
        Interaction.appendButton({
            bottom:'40px',
            right:'40px',
	});
        Interaction.button.id="btnKontrol";
        
        $(container).append("<div id='soruCumlesi'>")
        $("#soruCumlesi")
                .css("width","300px")
                .css("height","30px")
                .css("position","absolute")
                .css("left","0")
                .css("top","130px")
                //.css("bottom","0")
                .css("right","0")
                .css("margin","auto")
                //.css("border","1px solid red")
                //.css("font-size","20px")
                .css("text-align","center")
                .html("Yukarıdaki sayı doğal sayı mı?");
        $(container).append("<div id='yanit'>")
        $("#yanit")
            .css("width","154px")
            .css("height","40px")
            .css("position","absolute")
            .css("left","0")
            .css("top","160px")
            //.css("bottom","0")
            .css("right","0")
            .css("margin","auto")
            
            
        
        $("#yanit").append("<img id='evet' class='yanitlar' src='/assets/animations/dogal_sayi/evet.png' />");
        $("#yanit").append("<img id='hayir' class='yanitlar' src='/assets/animations/dogal_sayi/hayir.png' />");
        $("#yanit img").attr("style","clear:none !important");
        $("#evet").css("margin-right","10px");
        $(".yanitlar").css("float","left").css("width","72").css("height","32");
        
        Interaction.cevap;
        
        Interaction.evetTik=function(){
            Interaction.cevap=1;
            console.log(Interaction.cevap);
            Interaction.button.click();
            $("#btnKontrol").css("visibility","visible");
        
        };
        
        Interaction.hayirTik=function(){
            Interaction.cevap=0;
            console.log(Interaction.cevap);
            Interaction.button.click();
            $("#btnKontrol").css("visibility","visible");
        };
        

        Interaction.setRandomGenerator(5,1)
        
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        $("#btnKontrol").css("visibility","hidden");
        $("#evet").bind("click",Interaction.evetTik);
        $("#hayir").bind("click",Interaction.hayirTik);
        Interaction.trial=1;
        console.log(randomNumber);
        //dogalSayi();
        //ondalikKesir();
        //negatifTamSayi();
        //kesir();
        $("#soru").html("");
        
        switch (randomNumber){
            case 1:
                Interaction.istenen=dogalSayi();
                break;
            case 2:
                Interaction.istenen=ondalikKesir();
                break;
            case 3:
                Interaction.istenen=negatifTamSayi();
                break;
            case 4:
                Interaction.istenen=kesir();
                break;
             
        }
        
    },
    preCheck : function(){
        
    },
    isAnswerCorrect : function(value){
        console.log("istenen: "+Interaction.istenen+", cevap: "+Interaction.cevap);
        $("#evet, #hayir").unbind("click");
        
        if(Interaction.istenen==1){
            if(Interaction.cevap==1){
                return true;
            }
        }
        else{
            if(Interaction.cevap==0){
                return true;
            }
        }
            
        
        
    },
    onCorrectAnswer : function(){
        if(Interaction.istenen==1)
            Interaction.setStatus('Doğru; yukarıdaki sayı doğal sayıdır.', true);
        else if(Interaction.istenen==2)
            Interaction.setStatus('Doğru; yukarıdaki sayı negatif tam sayıdır.', true);
        else if(Interaction.istenen==3)
            Interaction.setStatus('Doğru; yukarıdaki sayı ondalık kesirdir.', true);
        else if(Interaction.istenen==4)
            Interaction.setStatus('Doğru; yukarıdaki sayı kesirdir.', true);
    },
    onWrongAnswer : function(){
        
    },
    onFail : function(){
        if(Interaction.istenen==1)
            Interaction.setStatus('Yanlış; yukarıdaki sayı doğal sayıdır.', false);
        else if(Interaction.istenen==2)
            Interaction.setStatus('Yanlış; yukarıdaki sayı negatif tam sayıdır.', false);
        else if(Interaction.istenen==3)
            Interaction.setStatus('Yanlış; yukarıdaki sayı ondalık kesirdir.', false);
        else if(Interaction.istenen==4)
            Interaction.setStatus('Yanlış; yukarıdaki sayı kesirdir.', false);
        
    }
}
;
