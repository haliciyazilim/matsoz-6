var checkDatas = function(values){
    var correctN = 0;
    var a = [];
    Interaction.missingFactors = [];
    Interaction.inputsColors = [];
    for(var i = 0; i < Interaction.factorNum; i++){
        a[i] = Interaction.factorsOfQuestion[i];
    }
    for(var i = 0; i < Interaction.factorNum; i++){
        for(var j = 0; j < Interaction.factorNum; j++){
            if(values[j] == a[i]){
                values[j] = "axxwt";
                a[i] = "axxwt";
                Interaction.inputsColors.push(j);
            }
        }
    }

    for(var i = 0; i < Interaction.factorNum; i++){
        if(a[i] != "axxwt"){
            Interaction.missingFactors.push(a[i]);
        }
    }

    for(var i=0; i < Interaction.factorNum; i++){
        if(values[i] == "axxwt")
            correctN += 1;
    }
    if(correctN == Interaction.factorNum)
        return true;
    else
        return false;
}
;
