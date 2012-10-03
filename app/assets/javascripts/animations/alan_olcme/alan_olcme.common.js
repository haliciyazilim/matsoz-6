function convertUnits(quantity,initialUnit,convertedUnit){

    var middleValue;
    var result;

    switch(initialUnit){
        case "kilometersquare":
            middleValue = quantity*1000000;
            break;
        case "hectometersquare":
            middleValue = quantity*10000;
            break;
        case "decametersquare":
            middleValue = quantity*100;
            break;
        case "metersquare":
            middleValue = quantity;
            break;
        case "decimetersquare":
            middleValue = quantity*0.01;
            break;
        case "centimetersquare":
            middleValue = quantity*0.0001;
            break;
        case "millimetersquare":
            middleValue = quantity*0.000001;
            break;
        default:
            throw("unsupported initial unit type");
    }

    switch(convertedUnit){
        case "kilometersquare":
            result = middleValue*0.000001;
            break;
        case "hectometersquare":
            result = middleValue*0.0001;
            break;
        case "decametersquare":
            result = middleValue*0.01;
            break;
        case "metersquare":
            result = middleValue;
            break;
        case "decimetersquare":
            result  = middleValue*100;
            break;
        case "centimetersquare":
            result = middleValue*10000;
            break;
        case "millimetersquare":
            result = middleValue*1000000;
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
            factor = Util.randomInteger(0,4);
            quantity = Util.randomInteger(1,100);
            quantity = quantity / Math.pow(10,factor);
            answerIndex = Util.randomInteger(1,5);
            questionUnit = questionUnitsArray[questionIndex];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 1:
            factor = Util.randomInteger(0,4);
            quantity = Util.randomInteger(1,100);
            quantity = quantity / Math.pow(10,factor);
            answerIndex = Util.randomInteger(0,5,[1]);
            questionUnit = questionUnitsArray[questionIndex];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 2:
            factor = Util.randomInteger(0,4);
            quantity = Util.randomInteger(1,100);
            quantity = quantity / Math.pow(10,factor);
            answerIndex = Util.randomInteger(0,6,[2]);
            questionUnit = questionUnitsArray[questionIndex];
            answerUnit = answerUnitsArray[answerIndex];
            break;
        case 3:
            factor = Util.randomInteger(0,4);
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
        case "km":
            long = "kilometersquare";
            break;
        case "hm":
            long = "hectometersquare";
            break;
        case "dam":
            long = "decametersquare";
            break;
        case "m":
            long = "metersquare";
            break;
        case "dm":
            long = "decimetersquare";
            break;
        case "cm":
            long = "centimetersquare";
            break;
        case "mm":
            long = "millimetersquare";
            break;
    }

    return long;
}

questionUnitsArray = ["km","hm","dam","m","dm","cm","mm"];
answerUnitsArray = ["km","hm","dam","m","dm","cm","mm"];