function convertUnits(quantity,initialUnit,convertedUnit){

    var middleValue;
    var result;

    switch(initialUnit){
        case "kiloliter":
            middleValue = quantity*1000;
            break;
        case "hectoliter":
            middleValue = quantity*100;
            break;
        case "decaliter":
            middleValue = quantity*10;
            break;
        case "liter":
            middleValue = quantity;
            break;
        case "deciliter":
            middleValue = quantity*0.1;
            break;
        case "centiliter":
            middleValue = quantity*0.01;
            break;
        case "milliliter":
            middleValue = quantity*0.001;
            break;
        default:
            throw("unsupported initial unit type");
    }

    switch(convertedUnit){
        case "kiloliter":
            result = middleValue*0.001;
            break;
        case "hectoliter":
            result = middleValue*0.01;
            break;
        case "decaliter":
            result = middleValue*0.1;
            break;
        case "liter":
            result = middleValue;
            break;
        case "deciliter":
            result  = middleValue*10;
            break;
        case "centiliter":
            result = middleValue*100;
            break;
        case "milliliter":
            result = middleValue*1000;
            break;
        default:
            throw("unsupported converted unit type");
    }

    return result;
}

function generateQuestion(){
    var questionUnit, answerUnit;
    var questionIndex, answerIndex, quantity;
    var factor;

    questionIndex = Util.randomInteger(0,7);
    switch(questionIndex){
        case 0:
            factor = Util.randomInteger(0,3);
            quantity = Util.randomInteger(1,100);
            quantity = quantity / Math.pow(10,factor);
            answerIndex = Util.randomInteger(1,5);
            questionUnit = questionUnitsArray[questionIndex];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 1:
            factor = Util.randomInteger(0,3);
            quantity = Util.randomInteger(1,100);
            quantity = quantity / Math.pow(10,factor);
            answerIndex = Util.randomInteger(0,5,[1]);
            questionUnit = questionUnitsArray[questionIndex];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 2:
            factor = Util.randomInteger(0,3);
            quantity = Util.randomInteger(1,100);
            quantity = quantity / Math.pow(10,factor);
            answerIndex = Util.randomInteger(0,6,[2]);
            questionUnit = questionUnitsArray[questionIndex];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 3:
            factor = Util.randomInteger(0,2);
            quantity = Util.randomInteger(1,100);
            quantity = quantity / Math.pow(10,factor);
            answerIndex = Util.randomInteger(0,7,[3]);
            questionUnit = questionUnitsArray[questionIndex];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 4:
            quantity = Util.randomInteger(1,100);
            answerIndex = Util.randomInteger(1,7,[4]);
            questionUnit = questionUnitsArray[questionIndex];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 5:
            quantity = Util.randomInteger(1,100);
            answerIndex = Util.randomInteger(2,7,[5]);
            questionUnit = questionUnitsArray[questionIndex];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 6:
            quantity = Util.randomInteger(1,100);
            answerIndex = Util.randomInteger(3,7,[6]);
            questionUnit = questionUnitsArray[questionIndex];
            answerUnit = answerUnitsArray[answerIndex];
            break;
    }

    Interaction.question = quantity;
    Interaction.questionUnit = questionUnit;
    Interaction.answerUnit = answerUnit;
}

function convertInitials(abbr){
    var long;

    switch(abbr){
        case "kL":
            long = "kiloliter";
            break;
        case "hL":
            long = "hectoliter";
            break;
        case "daL":
            long = "decaliter";
            break;
        case "L":
            long = "liter";
            break;
        case "dL":
            long = "deciliter";
            break;
        case "cL":
            long = "centiliter";
            break;
        case "mL":
            long = "milliliter";
            break;
    }

    return long;
}

questionUnitsArray = ["kL","hL","daL","L","dL","cL","mL"];
answerUnitsArray = ["kL","hL","daL","L","dL","cL","mL"];