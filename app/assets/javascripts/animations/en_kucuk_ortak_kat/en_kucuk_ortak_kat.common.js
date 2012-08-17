var getQuestion = function(){
    if(Interaction.randomNumber == 0){ // 2 numbers
        do{
            Interaction.question[0] = Util.randomInteger(2, 16);
            Interaction.question[1] = Util.randomInteger(2, 16, [Interaction.question[0]]);
            Interaction.answer = Util.lcm(Interaction.question[0], Interaction.question[1]);
        } while(Interaction.answer > 200);
        Interaction.ques = "EKOK("+Interaction.question[0]+", "+Interaction.question[1]+")";
        $('#questionn').html(Interaction.ques)
    }
    else{ // 3 numbers
        do{
            Interaction.question[0] = Util.randomInteger(2, 16);
            Interaction.question[1] = Util.randomInteger(2, 16, [Interaction.question[0]]);
            Interaction.question[2] = Util.randomInteger(2, 16, [Interaction.question[0], Interaction.question[1]]);
            Interaction.answer = Util.lcm(Interaction.question[0], Interaction.question[1], Interaction.question[2]);
        } while(Interaction.answer > 200);
        Interaction.ques = "EKOK("+Interaction.question[0]+", "+Interaction.question[1]+", "+Interaction.question[2]+")";
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

        Interaction.answerTitles[i] += " katları : ";
    }
};