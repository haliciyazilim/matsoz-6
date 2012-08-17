var getQuestion = function(){
    if(Interaction.randomNumber == 0){ // 2 numbers
        $(Interaction.answerDiv).css("left", "140px");
        $('#ans').css("left", "160px");
        do{
            Interaction.factor1 = Util.randomInteger(1,11);
        } while(Util.getFactors(Interaction.gcd * Interaction.factor1).length > 10)
        do{
            Interaction.factor2 = Util.randomInteger(1,11,[Interaction.factor1]);
        } while(Util.getFactors(Interaction.gcd * Interaction.factor2).length > 10)

        Interaction.question[0] = Interaction.gcd * Interaction.factor1;
        Interaction.question[1] = Interaction.gcd * Interaction.factor2;
        Interaction.answer = Util.gcd(Interaction.question[0], Interaction.question[1]);
        Interaction.ques = "EBOB("+Interaction.question[0]+", "+Interaction.question[1]+")";
        $('#questionn').html(Interaction.ques)
    }
    else{ // 3 numbers
        $(Interaction.answerDiv).css("left", "110px");
        $('#ans').css("left", "130px");
        do{
            Interaction.factor1 = Util.randomInteger(1,11);
        } while(Util.getFactors(Interaction.gcd * Interaction.factor1).length > 10)
        do{
            Interaction.factor2 = Util.randomInteger(1,11,[Interaction.factor1]);
        } while(Util.getFactors(Interaction.gcd * Interaction.factor2).length > 10)
        do{
            Interaction.factor3 = Util.randomInteger(1,11,[Interaction.factor1, Interaction.factor2]);
        } while(Util.getFactors(Interaction.gcd * Interaction.factor3).length > 10)
        Interaction.question[0] = Interaction.gcd * Interaction.factor1;
        Interaction.question[1] = Interaction.gcd * Interaction.factor2;
        Interaction.question[2] = Interaction.gcd * Interaction.factor3;
//            Interaction.question[0] = 100;
//            Interaction.question[1] = 100;
//            Interaction.question[2] = 100;
        Interaction.answer = Util.gcd(Interaction.question[0], Interaction.question[1], Interaction.question[2]);
        Interaction.ques = "EBOB("+Interaction.question[0]+", "+Interaction.question[1]+", "+Interaction.question[2]+")";
        $('#questionn').html(Interaction.ques);
    }
};

var getAnswerTitles = function(){
    Interaction.answerTitles = [];
    for(var i = 0; i < Interaction.question.length; i++){
        Interaction.answerTitles[i] = "";
        Interaction.answerTitles[i] += Interaction.question[i];
        if(Interaction.question[i] == 10){
            Interaction.answerTitles[i] += "\'un ";
        }
        else if(Interaction.question[i] == 20){
            Interaction.answerTitles[i] += "\'nin ";
        }
        else if(Interaction.question[i] == 30){
            Interaction.answerTitles[i] += "\'un ";
        }
        else if(Interaction.question[i] == 40){
            Interaction.answerTitles[i] += "\'ın ";
        }
        else if(Interaction.question[i] == 50){
            Interaction.answerTitles[i] += "\'nin ";
        }
        else if(Interaction.question[i] == 60){
            Interaction.answerTitles[i] += "\'ın ";
        }
        else if(Interaction.question[i] == 70){
            Interaction.answerTitles[i] += "\'in ";
        }
        else if(Interaction.question[i] == 80){
            Interaction.answerTitles[i] += "\'nin ";
        }
        else if(Interaction.question[i] == 90){
            Interaction.answerTitles[i] += "\'ın ";
        }
        else if(Interaction.question[i] == 100){
            Interaction.answerTitles[i] += "\'ün ";
        }
        else{
            var dv = Interaction.question[i] % 10;
            switch(dv){
                case 1:
                    Interaction.answerTitles[i] += "\'in";
                    break;
                case 2:
                    Interaction.answerTitles[i] += "\'nin";
                    break;
                case 3:
                    Interaction.answerTitles[i] += "\'ün";
                    break;
                case 4:
                    Interaction.answerTitles[i] += "\'ün";
                    break;
                case 5:
                    Interaction.answerTitles[i] += "\'in";
                    break
                case 6:
                    Interaction.answerTitles[i] += "\'nın";
                    break;
                case 7:
                    Interaction.answerTitles[i] += "\'nin";
                    break;
                case 8:
                    Interaction.answerTitles[i] += "\'in";
                    break;
                case 9:
                    Interaction.answerTitles[i] += "\'ın";
                    break;
            }

        }

        Interaction.answerTitles[i] += " bölenleri : ";
    }
};