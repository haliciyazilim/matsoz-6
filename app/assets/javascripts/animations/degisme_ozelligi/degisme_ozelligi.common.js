var getNewQuestion = function(){

    Interaction.operand1 = Util.randomInteger(1,11);
    Interaction.operand2 = Util.randomInteger(1,11,[Interaction.operand1]);

    if(Interaction.operator == "+"){
        Interaction.answer = Interaction.operand1 + Interaction.operand2;
        Interaction.operatorText.content = "+";
    }
    else{
        Interaction.answer = Interaction.operand1 * Interaction.operand2;
        Interaction.operatorText.content = "x";
    }

    for(var i = 0; i < 100; i++){
        $(Interaction.inputs[i]).css("opacity", 0.3)
            .css("background-color", "white")
            .css("box-sizing", "border-box")
            .css("border", "none")
            .css("border-right", "1px solid #999")
            .css("border-bottom", "1px solid #999")
            .css("border-color", "#999")
            .css("color", "black")
        Interaction.inputs[i].isEmpty = true;
        Interaction.inputs[i].readOnly = true;
    }

    var numOfIter1 = Interaction.operand2 - 1;
    var numOfIter2 = Interaction.operand1 - 1;

    for(var i = 0; i < numOfIter1; i++){
        $(Interaction.inputs[Interaction.operand1-1+(10*i)]).css("background-color", operandBoxesFillColor);
    }
    for(var i = 0; i < numOfIter2; i++){
        $(Interaction.inputs[(Interaction.operand2-1)*10+i]).css("background-color", operandBoxesFillColor);
    }

    Interaction.indexOfAnswer = (Interaction.operand2-1) * 10 + (Interaction.operand1-1);

    $(Interaction.inputs[Interaction.indexOfAnswer]).css({
        border:'1px solid',
        boxSizing:'border-box',
        borderColor:selectedInputStrokeColor,
        opacity:1,
    });
    Interaction.inputs[Interaction.indexOfAnswer].readOnly = false;
    Interaction.inputs[Interaction.indexOfAnswer].isEmpty = false;
    setTimeout('Interaction.inputs[Interaction.indexOfAnswer].focus()',100);
};

var getSecondQuestion = function(){
    Interaction.pause2 = 1;
    var numOfIter1 = Interaction.operand2 - 1;
    var numOfIter2 = Interaction.operand1 - 1;

    for(var i = 0; i < numOfIter1; i++){
        $(Interaction.inputs[Interaction.operand1-1+(10*i)]).css("background-color", "white");
    }
    for(var i = 0; i < numOfIter2; i++){
        $(Interaction.inputs[(Interaction.operand2-1)*10+i]).css("background-color", "white");
    }
    Interaction.inputs[Interaction.indexOfAnswer].readOnly = true;
 //   Interaction.inputs[Interaction.indexOfAnswer].isEmpty = true;

    Interaction.indexOfAnswer = (Interaction.operand1-1) * 10 + (Interaction.operand2-1);

    for(var i = 0; i < numOfIter1; i++){
        $(Interaction.inputs[(Interaction.operand1-1)*10+i]).css("background-color", operandBoxesFillColor);
    }
    for(var i = 0; i < numOfIter2; i++){
        $(Interaction.inputs[Interaction.operand2-1+(10*i)]).css("background-color", operandBoxesFillColor);
    }



    $(Interaction.inputs[Interaction.indexOfAnswer]).css({
        border:'1px solid',
        boxSizing:'border-box',
        borderColor:selectedInputStrokeColor,
        opacity:1,
    });
    Interaction.inputs[Interaction.indexOfAnswer].readOnly = false;
    Interaction.inputs[Interaction.indexOfAnswer].isEmpty = false;
    setTimeout('Interaction.inputs[Interaction.indexOfAnswer].focus()',100);
};