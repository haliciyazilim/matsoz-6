var getNewPage = function(){
    if(shape1){
        shape1.remove();
        shape1 = null;
    }
    if(shape2){
        shape2.remove();
        shape2 = null;
    }
    if(shape3){
        shape3.remove();
        shape3 = null;
    }

    switch(Interaction.myType){
        case 1:
            if(shape11){
                shape11.shape.remove();
                shape11 = null;
            }
            break;
        case 2:
            if(shape22){
                shape22.shape.remove();
                shape22 = null;
            }
            break;
        case 3:
            if(shape33){
                shape33.shape.remove();
                shape33 = null;
            }
            break;
    }
    if(Interaction.pp){
        Interaction.pp.remove();
    }
    if(Interaction.mark){
        Interaction.mark.remove();
    }
    if(Interaction.selectedColorCircle){
        Interaction.selectedColorCircle.remove();
    }
    if(Interaction.dropArea){
        Interaction.dropArea.remove();
    }

    Interaction.selectedColor = null;

    for(var i = 0; i < Interaction.clonesObjectArr.length; i++){
        Interaction.clonesObjectArr[i].remove();
    }
    Interaction.clonesObjectArr = [];

    for(var i = 0; i < Interaction.colorsCircles.length; i++){
        Interaction.colorsCircles[i].remove();
    }
    Interaction.colorsCircles = [];

    Interaction.init(Interaction.container);
};
