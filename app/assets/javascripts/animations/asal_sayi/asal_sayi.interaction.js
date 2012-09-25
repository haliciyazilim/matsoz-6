var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
	images:[
        
    ],
    init:function(container){
        console.log("Interaction.init started ");
			Interaction.container = container;
        Main.setObjective('Yanda verilen yüzlük tabloda asal sayıları belirleyiniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.appendStatus({
            left:'410px',
            top:'120px',
            width:'140px',
            height:'50px',
            textAlign:'center',
        });

        // whole prime numbers from 1 to 100
        Interaction.primeNumbers = [];
        for(var i = 1; i < 101; i++){
            if(Util.isPrimeNumber(i)){
                Interaction.primeNumbers.push(i);
            }
        }
        Interaction.answerTable = [];
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
            if(Interaction.pause == 1)
                return;
            else{
                Interaction.setStatus('');
                if(event.item){
                    if(event.item.class == "number"){
                        if(Util.isPrimeNumber(event.item.myId)){
                            Interaction.wholeTable[event.item.myId-1].fillColor = wholeTablePrimeFillColor;
                            Interaction.wholeTable[event.item.myId-1].strokeColor = wholeTablePrimeStrokeColor;
                            if(Interaction.answerTable.indexOf(event.item.myId) == -1){
                                Interaction.answerTable.push(event.item.myId);
                                Interaction.remainingNumber -= 1;
                                $('#count').html(Interaction.remainingNumber);
                                if(Interaction.answerTable.length == Interaction.primeNumbers.length){
                                    if($('#counterDiv'))
                                        $('#counterDiv').remove();
                                    $(Interaction.button).css("opacity",1);
                                    Interaction.setStatus('Tebrikler, bütün asal sayıları buldunuz.', true)
                                    Interaction.button.onclick = Interaction.nextQuestion;
                                    Interaction.pause = 1;
                                }
                            }
                        }
                        else{
                            Interaction.setStatus('Seçtiğiniz sayı asal sayı değil.', false)
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

        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        Interaction.pause = 0;
        Interaction.button.className = "repeat_button";
        $(Interaction.button).css("opacity", 0);
        Interaction.setStatus('');
        Interaction.remainingNumber = 25;

        Interaction.answerTable = [];
        for(var i = 0; i < 100; i++){
            Interaction.wholeTable[i].strokeColor = wholeTableStrokeColor;
            Interaction.wholeTable[i].fillColor = wholeTableFillColor;
        }

        $(Interaction.container).append('<div id="counterDiv"><div id="count"></div><div id="text">tane sayı kaldı</div></div>')
        $('#counterDiv').css({
            position:'absolute',
            top:'20px',
            left:'400px',
            width:'160px',
            height:'60px'
        });
        $('#count').css({
            position:'absolute',
            top:'10px',
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
            top:'40px',
            left:0,
            right:0,
            textAlign: 'center',
            fontSize: '16px',
            color: counterColor
        });
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