function soruTip1(){
    if(Interaction.randomNumber==0)
        Interaction.prepareNextQuestion();
    Main.setObjective(Interaction.randomNumber+"<br/>tam sayısını sayı doğrusunda gösteriniz.");
}


function soruTipi2(){
    
        $("#girdi").css("opacity","1");
        $("#noktalar"+Interaction.randomNumber).css("opacity","1")
}