var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
	images:[
        
    ],
    init:function(container){
			Interaction.container = container;
			Main.setObjective('');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}

            Interaction.appendStatus({
                left:'410px',
                top:'120px',
                width:'140px',
                height:'50px',
                textAlign:'center',
            });

            Interaction.wholeTable = [];
            Interaction.textTable = [];
            for(var i = 0; i < 10; i++){
                for(var j = 0; j < 10; j++){
                    var a = i*10+j;
                    Interaction.wholeTable[a] = new Path.Rectangle(new Point(20.5+j*35, 20.5+i*26), new Size(35, 26));
                    Interaction.wholeTable[a].strokeColor = wholeTableStrokeColor;
                    Interaction.wholeTable[a].fillColor = wholeTableFillColor;
                    Interaction.wholeTable[a].myId = a+1;
                    Interaction.wholeTable[a].class = "number";

                    Interaction.textTable[a] = new PointText(new Point(Interaction.wholeTable[i*10+j].position.x,Interaction.wholeTable[i*10+j].position.y+6));
                    Interaction.textTable[a].justification = 'center';
                    Interaction.textTable[a].fillColor = 'black';
                    Interaction.textTable[a].content = a+1;
                    Interaction.textTable[a].myId = a+1;
                }
            }

            var tool = new Tool();
            tool.onMouseDown = function(event){
                if(Interaction.pause2 == 1)
                    return;
                else{
                    Interaction.setStatus('');
                    if(event.item){
                        if(event.item.class == "number"){
                            if(Interaction.answerTable.indexOf(event.item.myId) != -1){
                                Interaction.wholeTable[event.item.myId-1].fillColor = wholeTablePrimeFillColor;
                                Interaction.wholeTable[event.item.myId-1].strokeColor = wholeTablePrimeStrokeColor;
                                if(Interaction.userAnswerTable.indexOf(event.item.myId) == -1){
                                    Interaction.userAnswerTable.push(event.item.myId);
                                    Interaction.remainingNumber -= 1;
                                    $('#count').html(Interaction.remainingNumber);
                                    if(Interaction.userAnswerTable.length == Interaction.answerTable.length){
                                        if($('#counterDiv'))
                                            $('#counterDiv').remove();
                                        $(Interaction.button).css("opacity",1);
                                        Interaction.setStatus('Tebrikler, '+Interaction.questionString+' kalansız bölünen bütün sayıları buldunuz.', true)
                                        Interaction.button.onclick = Interaction.prepareNextQuestion;
                                        Interaction.pause2 = 1;
                                    }
                                }
                            }
                            else{
                                Interaction.setStatus('Seçtiğiniz sayı '+Interaction.questionString+' kalansız bölünmüyor.', false)
                            }
                        }
                    }
                }
            };
            tool.onMouseUp = function(event){

            };

            Interaction.appendButton({
                bottom: '20px',
                right: '40px',
            });

            Interaction.questionArray = [];
            Interaction.questionArray[0] = 2;
            Interaction.questionArray[1] = 3;
            Interaction.questionArray[2] = 4;
            Interaction.questionArray[3] = 5;
            Interaction.questionArray[4] = 6;
            Interaction.questionArray[5] = 9;
            Interaction.questionArray[6] = 10;
            Interaction.setRandomGenerator(7);
			Interaction.prepareNextQuestion();
		},
    nextQuestion: function(randomNumber){
        Interaction.randomNumber = randomNumber;
        Interaction.pause2 = 0;
        Interaction.button.className = "next_button";
        $(Interaction.button).css("opacity", 0);
        Interaction.setStatus('');


        Interaction.question = Interaction.questionArray[randomNumber];
        Interaction.remainingNumber = Math.floor(100/Interaction.question);

        Interaction.userAnswerTable = [];
        Interaction.answerTable = [];
        for(var i = 1; i < 101; i ++){
            if(i % Interaction.question == 0){
                Interaction.answerTable.push(i);
            }
        }

        Interaction.questionString = Interaction.question;
        if(Interaction.question == 2){
            Interaction.questionString = ""+Interaction.questionString+"'ye"
        }
        else if(Interaction.question == 3 || Interaction.question == 4 || Interaction.question == 5){
            Interaction.questionString = ""+Interaction.questionString+"'e";
        }
        else if(Interaction.question == 6){
            Interaction.questionString = ""+Interaction.questionString+"'ya";
        }
        else{
            Interaction.questionString = ""+Interaction.questionString+"'a"
        }



        Main.setObjective('Yanda verilen yüzlük tabloda '+'<span id="qt">'+Interaction.questionString+'</span>'+' kalansız bölünen sayıları belirleyiniz.');
        $('#qt').css("font-weight", "bold")
            .css("color", "red")
        for(var i = 0; i < 100; i++){
            Interaction.wholeTable[i].strokeColor = wholeTableStrokeColor;
            Interaction.wholeTable[i].fillColor = wholeTableFillColor;
        }


        $(Interaction.container).append('<div id="counterDiv"><div id="ct"></div><div id="count"></div><div id="text">tane sayı kaldı</div></div>')
        $('#counterDiv').css({
            position:'absolute',
            top:'20px',
            left:'400px',
            width:'160px',
            height:'80px',
            //    border:'solid'
        });
        $('#ct').css({
            position:'absolute',
            top:'10px',
            left:0,
            right:0,
            textAlign: 'center',
            fontSize: '16px',
            color: counterQuestionColor
        });
        $('#ct').html(""+Interaction.questionString+" kalansız bölünen");
        $('#count').css({
            position:'absolute',
            top:'30px',
            left:0,
            right:0,
            textAlign: 'center',
            fontSize: '30px',
            fontWeight: 'bold',
            color: counterColor
        });
        $('#count').html(Interaction.remainingNumber);
        $('#text').css({
            position:'absolute',
            top:'60px',
            left:0,
            right:0,
            textAlign: 'center',
            fontSize: '16px',
            color: counterColor
        })

    },


    preCheck : function(){

    },
    isAnswerCorrect : function(value){

    },
    onCorrectAnswer : function(){

    },
    onWrongAnswer : function(){

    },
    onFail : function(){

    }
}