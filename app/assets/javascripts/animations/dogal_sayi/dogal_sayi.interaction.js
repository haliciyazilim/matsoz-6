var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    images:[],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yanda verilen sayının doğal sayı olup olmadığını, fare yardımıyla “Doğal Sayı” ya da “Doğal sayı değil” düğmelerine tıklayarak belirtiniz.');
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
                .css("top","50px")
                //.css("bottom","0")
                .css("right","0")
                .css("margin","auto")
                .css("border","1px solid red");
        
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
        
        $(container).append("<button id='btnDogalSayi'>");
        $("#btnDogalSayi")
            .css("width","100px")
            .css("height","30px")
            .css("position","absolute")
            .css("left","0")
            .css("top","160px")
            //.css("bottom","0")
            .css("right","0")
            .css("margin","auto")
            .html("Doğal Sayı")
        
        $(container).append("<button id='btnDogalSayiDegil'>");
        $("#btnDogalSayiDegil")
            .css("width","130px")
            .css("height","30px")
            .css("position","absolute")
            .css("left","0")
            .css("top","190px")
            //.css("bottom","0")
            .css("right","0")
            .css("margin","auto")
            .html("Doğal Sayı Değil")
        
        Interaction.cevap;
        $("#btnDogalSayi").click(
            function(){
                Interaction.cevap=1;
        });
        
        $("#btnDogalSayiDegil").click(
            function(){
                Interaction.cevap=0;
               
        });
        
        $("button").click(function(){
            console.log(Interaction.cevap);
            Interaction.button.click();
            $("#btnKontrol").css("visibility","visible");
        });
        Interaction.setRandomGenerator(5,1)
        
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        $("#btnKontrol").css("visibility","hidden");
        $("#btnDogalSayi, #btnDogalSayiDegil").css("visibility","visible");
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
        $("#btnDogalSayi, #btnDogalSayiDegil").css("visibility","hidden");
        
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