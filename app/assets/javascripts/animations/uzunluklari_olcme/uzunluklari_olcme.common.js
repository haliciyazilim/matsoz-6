function convertUnits(quantity,initialUnit,convertedUnit){

    var middleValue;
    var result;

    switch(initialUnit){
        case "kilometer":
            middleValue = quantity*1000;
            break;
        case "hectometer":
            middleValue = quantity*100;
            break;
        case "decameter":
            middleValue = quantity*10;
            break;
        case "meter":
            middleValue = quantity;
            break;
        case "decimeter":
            middleValue = quantity*0.1;
            break;
        case "centimeter":
            middleValue = quantity*0.01;
            break;
        case "millimeter":
            middleValue = quantity*0.001;
            break;
        default:
            throw("unsupported initial unit type");
    }

    switch(convertedUnit){
        case "kilometer":
            result = middleValue*0.001;
            break;
        case "hectometer":
            result = middleValue*0.01;
            break;
        case "decameter":
            result = middleValue*0.1;
            break;
        case "meter":
            result = middleValue;
            break;
        case "decimeter":
            result  = middleValue*10;
            break;
        case "centimeter":
            result = middleValue*100;
            break;
        case "millimeter":
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
        case "km":
            long = "kilometer";
            break;
        case "hm":
            long = "hectometer";
            break;
        case "dam":
            long = "decameter";
            break;
        case "m":
            long = "meter";
            break;
        case "dm":
            long = "decimeter";
            break;
        case "cm":
            long = "centimeter";
            break;
        case "mm":
            long = "millimeter";
            break;
    }

    return long;
}

questionUnitsArray = ["km","hm","dam","m","dm","cm","mm"];
answerUnitsArray = ["km","hm","dam","m","dm","cm","mm"];