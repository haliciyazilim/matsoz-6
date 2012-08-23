 var kusDondurmeSayisi=0;
        function dondurKus(){
            var yon=kusDondurmeSayisi%2==0?-1:1;
            $("#kus").css("-webkit-transform","scaleX("+yon+")")
                .css("-moz-transform","scaleX("+yon+")")
                .css("-ms-transform","scaleX("+yon+")")
                .css("transform","scaleX("+yon+")");
            kusDondurmeSayisi++;
        }
        
        var balikDondurmeSayisi=0;
        function dondurBalik(){
            var yon=balikDondurmeSayisi%2==0?-1:1;
            $("#balik").css("-webkit-transform","scaleX("+yon+")")
                .css("-moz-transform","scaleX("+yon+")")
                .css("-ms-transform","scaleX("+yon+")")
                .css("transform","scaleX("+yon+")");
            balikDondurmeSayisi++;
        }
       


function soruTip1(){
    if(Interaction.randomNumber==0)
        Interaction.prepareNextQuestion();
    Main.setObjective(Interaction.randomNumber+"<br/>tam sayısını sayı doğrusunda gösteriniz.");
}


function soruTipi2(){
        Main.setObjective("Sayı doğrusunda gösterilen noktanın hangi tam sayıyı gösterdiğini yazınız.");
        $("#girdi").css("opacity","1");
        $("#noktalar"+Interaction.randomNumber).css("opacity","1")
}

