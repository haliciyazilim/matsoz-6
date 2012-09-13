var deleteAll = function(){
    if(Interaction.path){
        Interaction.path.remove();
    }

    if(Interaction.line2){
        Interaction.line2.remove();
    }

    if(Interaction.circle1){
        Interaction.circle1.remove();
    }

    if(Interaction.circle2){
        Interaction.circle2.remove();
    }

    if(Interaction.text1){
        Interaction.text1.remove();
    }

    if(Interaction.text2){
        Interaction.text2.remove();
    }

    Interaction.clickk = 0;

    Interaction.firstPoint = null;
    Interaction.secondPoint = null;

    $('#again').css("opacity",0.4);
    $('#again').get(0).onclick = null;
};