var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Bir apartmanda yaşayan ailelerin çocuk sayıları araştırma sonuçları verilmiştir. Bu sonuçlara göre soruları cevaplayınız.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        // crate questions array -> holds 16 question
        Interaction.questions = [];
        Interaction.questions[0] = "Apartmanda 1 çocuğu olan kaç aile var?";
        Interaction.questions[1] = "Apartmanda 2 çocuğu olan kaç aile var?";
        Interaction.questions[2] = "Apartmanda 3 çocuğu olan kaç aile var?";
        Interaction.questions[3] = "Apartmanda 4 çocuğu olan kaç aile var?";
        Interaction.questions[4] = "Apartmanda 5 çocuğu olan kaç aile var?";
        Interaction.questions[5] = "Apartmanda çocuğu olmayan kaç aile var?";
        Interaction.questions[6] = "Apartmanda çocuğu olan kaç aile var?";
        Interaction.questions[7] = "Apartmanda kaç aile var?";
        Interaction.questions[8] = "Apartmanda çocuk sayısı 1 den fazla olan kaç aile var?";
        Interaction.questions[9] = "Apartmanda çocuk sayısı 2 den fazla olan kaç aile var?";
        Interaction.questions[10] = "Apartmanda çocuk sayısı 3 den fazla olan kaç aile var?";
        Interaction.questions[11] = "Apartmanda çocuk sayısı 2 den az olan kaç aile var?";
        Interaction.questions[12] = "Apartmanda çocuk sayısı 3 den az olan kaç aile var?";
        Interaction.questions[13] = "Apartmanda çocuk sayısı 4 den az olan kaç aile var?";
        Interaction.questions[14] = "Apartmanda çocuk sayısı 5 den az olan kaç aile var?";
        Interaction.questions[15] = "Apartmanda kaç çocuk var?";

        // crate data array randomly -> holds 30 data
        Interaction.datas = [];
        for(i = 0; i < 30; i++)
        {
            Interaction.datas[i] = Math.floor(Math.random() * 6);
        }

        // adding neccesary html element -> images, datas, question, input box and buttons
        $(container).append('<img id="paper" src="/assets/animations/veri/veri_02.jpg" />');
        $('#paper').css("width", "413px")
            .css("height", "284px")
            .css("position", "absolute")
            .css("left", "0px")
            .css("top", "0px");

        for(i = 0; i < 5; i++){
            var topStr = ""+(114+24*i)+"px";
            for(j = 0; j < 6; j++)
            {
                var leftStr = ""+(210+26*j)+"px";
                $(container).append('<p id="data'+i*6+j+'"></p>');
                $('#data'+i*6+j).html(Interaction.datas[i*6+j]);
                $('#data'+i*6+j).css("position", "absolute")
                    .css("left", leftStr)
                    .css("top", topStr)
                    .css("font-size", 18)
            }
        }

        $(container).append('<p id="question" ></p>');
        $('#question').css("position", "absolute")
            .css("left", "300px")
            .css("top", "30px")
            .css("width", "230px")
            .css("font-size", 18)
            .css("text-align", "center");

        Interaction.appendInput({
            width: '30px',
            height: '32px',
            textAlign: 'center',
            position: 'absolute',
            left: '474px',
            top: "98px",
            fontSize: '20px'
        });

        Interaction.appendStatus({
            top:'160px',
            left:'414px',
            width: '160px',
            height: '50px',
            textAlign: 'center'
        });
        Interaction.appendButton({
            bottom:'30px',
            right:'40px'
        });

        Interaction.setRandomGenerator(16);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){

        Interaction.randomNumber = randomNumber;
        Interaction.inputs[0].style.color = "black";
        $('#question').html(Interaction.questions[randomNumber]);

        for(i = 0; i < 5; i++){
            for(j = 0; j < 6; j++){
                $('#data'+i*6+j).css("color", "black");
            }
        }

    },
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        Interaction.answer = 0;

        switch(Interaction.randomNumber) {
            case 0:
                for(var i = 0; i < Interaction.datas.length; i++){
                    if(Interaction.datas[i] == 1)
                        Interaction.answer += 1;
                }
                break;
            case 1:
                for(var i = 0; i < Interaction.datas.length; i++){
                    if(Interaction.datas[i] == 2)
                        Interaction.answer += 1;
                }
                break;
            case 2:
                for(var i = 0; i < Interaction.datas.length; i++){
                    if(Interaction.datas[i] == 3)
                        Interaction.answer += 1;
                }
                break;
            case 3:
                for(var i = 0; i < Interaction.datas.length; i++){
                    if(Interaction.datas[i] == 4)
                        Interaction.answer += 1;
                }
                break;
            case 4:
                for(var i = 0; i < Interaction.datas.length; i++){
                    if(Interaction.datas[i] == 5)
                        Interaction.answer += 1;
                }
                break;
            case 5:
                for(var i = 0; i < Interaction.datas.length; i++){
                    if(Interaction.datas[i] == 0)
                        Interaction.answer += 1;
                }
                break;
            case 6:
                for(var i = 0; i < Interaction.datas.length; i++){
                    if(Interaction.datas[i] != 0)
                        Interaction.answer += 1;
                }
                break;
            case 7:
                Interaction.answer = Interaction.datas.length;
                break;
            case 8:
                for(var i = 0; i < Interaction.datas.length; i++){
                    if(Interaction.datas[i] > 1)
                        Interaction.answer += 1;
                }
                break;
            case 9:
                for(var i = 0; i < Interaction.datas.length; i++){
                    if(Interaction.datas[i] > 2)
                        Interaction.answer += 1;
                }
                break;
            case 10:
                for(var i = 0; i < Interaction.datas.length; i++){
                    if(Interaction.datas[i] > 3)
                        Interaction.answer += 1;
                }
                break;
            case 11:
                for(var i = 0; i < Interaction.datas.length; i++){
                    if(Interaction.datas[i] < 2)
                        Interaction.answer += 1;
                }
                break;
            case 12:
                for(var i = 0; i < Interaction.datas.length; i++){
                    if(Interaction.datas[i] < 3)
                        Interaction.answer += 1;
                }
                break;
            case 13:
                for(var i = 0; i < Interaction.datas.length; i++){
                    if(Interaction.datas[i] < 4)
                        Interaction.answer += 1;
                }
                break;
            case 14:
                for(var i = 0; i < Interaction.datas.length; i++){
                    if(Interaction.datas[i] < 5)
                        Interaction.answer += 1;
                }
                break;
            case 15:
                for(var i = 0; i < Interaction.datas.length; i++)
                    Interaction.answer += Interaction.datas[i];
                break;
        }
        if(value == Interaction.answer)
            return true;
        else
            return false;
    },
	onCorrectAnswer : function(){
        Interaction.fillAnswer(Interaction.randomNumber, "green");
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);
        Interaction.inputs[0].value = Interaction.answer;
        Interaction.inputs[0].style.color = "green";
        Interaction.fillAnswer(Interaction.randomNumber, "green");
    },
    fillAnswer : function(rand, fillColor){
        switch(rand) {
            case 0:
                for(var i = 0; i < 5; i++){
                    for(var j = 0; j < 6; j++){
                        if(Interaction.datas[i*6+j] == 1)
                            $('#data'+i*6+j).css("color", fillColor)
                    }
                }
                break;
            case 1:
                for(var i = 0; i < 5; i++){
                    for(var j = 0; j < 6; j++){
                        if(Interaction.datas[i*6+j] == 2)
                            $('#data'+i*6+j).css("color", fillColor)
                    }
                }
                break;
            case 2:
                for(var i = 0; i < 5; i++){
                    for(var j = 0; j < 6; j++){
                        if(Interaction.datas[i*6+j] == 3)
                            $('#data'+i*6+j).css("color", fillColor)
                    }
                }
                break;
            case 3:
                for(var i = 0; i < 5; i++){
                    for(var j = 0; j < 6; j++){
                        if(Interaction.datas[i*6+j] == 4)
                            $('#data'+i*6+j).css("color", fillColor)
                    }
                }
                break;
            case 4:
                for(var i = 0; i < 5; i++){
                    for(var j = 0; j < 6; j++){
                        if(Interaction.datas[i*6+j] == 5)
                            $('#data'+i*6+j).css("color", fillColor)
                    }
                }
                break;
            case 5:
                for(var i = 0; i < 5; i++){
                    for(var j = 0; j < 6; j++){
                        if(Interaction.datas[i*6+j] == 0)
                            $('#data'+i*6+j).css("color", fillColor)
                    }
                }
                break;
            case 6:
                for(var i = 0; i < 5; i++){
                    for(var j = 0; j < 6; j++){
                        if(Interaction.datas[i*6+j] != 0)
                            $('#data'+i*6+j).css("color", fillColor)
                    }
                }
                break;
            case 7:
                for(var i = 0; i < 5; i++){
                    for(var j = 0; j < 6; j++){
                        $('#data'+i*6+j).css("color", fillColor)
                    }
                }
                break;
            case 8:
                for(var i = 0; i < 5; i++){
                    for(var j = 0; j < 6; j++){
                        if(Interaction.datas[i*6+j] > 1)
                            $('#data'+i*6+j).css("color", fillColor)
                    }
                }
                break;
            case 9:
                for(var i = 0; i < 5; i++){
                    for(var j = 0; j < 6; j++){
                        if(Interaction.datas[i*6+j] > 2)
                            $('#data'+i*6+j).css("color", fillColor)
                    }
                }
                break;
            case 10:
                for(var i = 0; i < 5; i++){
                    for(var j = 0; j < 6; j++){
                        if(Interaction.datas[i*6+j] > 3)
                            $('#data'+i*6+j).css("color", fillColor)
                    }
                }
                break;
            case 11:
                for(var i = 0; i < 5; i++){
                    for(var j = 0; j < 6; j++){
                        if(Interaction.datas[i*6+j] < 2)
                            $('#data'+i*6+j).css("color", fillColor)
                    }
                }
                break;
            case 12:
                for(var i = 0; i < 5; i++){
                    for(var j = 0; j < 6; j++){
                        if(Interaction.datas[i*6+j] < 3)
                            $('#data'+i*6+j).css("color", fillColor)
                    }
                }
                break;
            case 13:
                for(var i = 0; i < 5; i++){
                    for(var j = 0; j < 6; j++){
                        if(Interaction.datas[i*6+j] < 4)
                            $('#data'+i*6+j).css("color", fillColor)
                    }
                }
                break;
            case 14:
                for(var i = 0; i < 5; i++){
                    for(var j = 0; j < 6; j++){
                        if(Interaction.datas[i*6+j] < 5)
                            $('#data'+i*6+j).css("color", fillColor)
                    }
                }
                break;
            case 15:
                for(var i = 0; i < 5; i++){
                    for(var j = 0; j < 6; j++){
                        $('#data'+i*6+j).css("color", fillColor)
                    }
                }
                break;
        }
    }
}