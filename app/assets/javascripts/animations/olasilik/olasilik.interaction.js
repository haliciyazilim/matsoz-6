var Interaction = {
    
	getFramework:function(){
			return 'paper';
    },
	images:[{
        id:'shadow',
        src:'/assets/animations/olasilik/top_golge.png'
    }],
    init:function(container){
        Interaction.container = container;

        Main.setObjective('Yandaki toplar bir torbanın içindedir. İstenen topun torbadan rastgele çekilme olasılığını bulunuz ve kontrol ediniz.');

        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.questionDiv = Util.dom({parent:Interaction.container, tag:'div', css:questionDivStyle});
        Interaction.questionText = Util.dom({parent:Interaction.questionDiv, tag:'div', css:questionTextStyle});
        Interaction.line = Util.dom({parent:Interaction.questionDiv, tag:'div', css:lineStyle});
        Interaction.appendStatus({
            bottom:'10px',
            right:'170px',
            //    border:'1px solid',
            width:'400px',
            height:'26px',
            textAlign:'center'
        });
        Interaction.appendButton({
            bottom:'10px',
            right:'40px'
        });

        Interaction.appendInput({
            position:'absolute',
            top:'2px',
            left:'250px',
            width:'32px',
            height:'30px',
            fontSize:'24px'
        });
        Interaction.appendInput({
            position:'absolute',
            top:'42px',
            left:'250px',
            width:'32px',
            height:'30px',
            fontSize:'24px'
        });
        $(Interaction.questionDiv).append(Interaction.inputs[0]);
        $(Interaction.questionDiv).append(Interaction.inputs[1]);
        Interaction.myIndex = 0;

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        if(Interaction.ansGroup){
            Interaction.ansGroup.remove();
        }

        $(Interaction.inputs[0]).css("color","black");
        $(Interaction.inputs[1]).css("color","black");

        if(Interaction.questionArr){
            if(Interaction.myIndex == Interaction.questionArr.length-1){
                $(Interaction.questionDiv).css("opacity",0);
                if(Interaction.ballsGroup){
                    Interaction.ballsGroup.remove();
                }
                generateBalls();
                Interaction.shuffledIndex = Util.getShuffledArray(Interaction.questionArr.length);

                Interaction.ballDropTime = (Interaction.totalBall * 400) + 1000;
                Interaction.qIndex = Interaction.shuffledIndex[Interaction.myIndex];
                Interaction.question = ""+Interaction.questionArr[Interaction.qIndex]+" top çekilme olasılığı =";
                $(Interaction.questionText).html(Interaction.question);
                Interaction.answer = Interaction.ballArr[Interaction.qIndex] / Interaction.totalBall;

                setTimeout('$(Interaction.questionDiv).css("opacity",1)', Interaction.ballDropTime);

            }
            else{
                Interaction.myIndex += 1;
                Interaction.qIndex = Interaction.shuffledIndex[Interaction.myIndex];
                Interaction.question = ""+Interaction.questionArr[Interaction.qIndex]+" top çekilme olasılığı =";
                $(Interaction.questionText).html(Interaction.question);
                Interaction.answer = Interaction.ballArr[Interaction.qIndex] / Interaction.totalBall;
            }
        }
        else{
            $(Interaction.questionDiv).css("opacity",0);
            generateBalls();
            Interaction.shuffledIndex = Util.getShuffledArray(Interaction.questionArr.length);
            Interaction.ballDropTime = (Interaction.totalBall * 400) + 1000;

            Interaction.qIndex = Interaction.shuffledIndex[Interaction.myIndex];
            Interaction.question = ""+Interaction.questionArr[Interaction.qIndex]+" top çekilme olasılığı =";
            $(Interaction.questionText).html(Interaction.question);
            Interaction.answer = Interaction.ballArr[Interaction.qIndex] / Interaction.totalBall;

            setTimeout('$(Interaction.questionDiv).css("opacity",1)', Interaction.ballDropTime);
        }
    },
		

	preCheck : function(){

    },
	isAnswerCorrect : function(value){

        if(value[0]/value[1] == Interaction.answer){
            return true;
        }
        else{
            return false;
        }
    },
	onCorrectAnswer : function(){
        Interaction.pause();
        $(Interaction.inputs[0]).css("color","green");
        $(Interaction.inputs[1]).css("color","green");
        var answerFillColor = Interaction.myColors[Interaction.qIndex];

        var answerCirc = new Path.Circle(new Point(120,180),18);
        answerCirc.fillColor = answerFillColor;
        var shadow = new Raster('shadow');
        shadow.position = new Point(120,180)
        Interaction.ansGroup = new Group();
        Interaction.ansGroup.addChild(answerCirc);
        Interaction.ansGroup.addChild(shadow);

        Interaction.ansGroup.animate({
            style:{
                position:new Point(Interaction.ansGroup.position.x,Interaction.ansGroup.position.y-90),
            },
            duration:1000,
            delay:1000,
            animationType:'easeInOutQuad',
            callback:function(){
                Interaction.ansGroup.firstPosition = Interaction.ansGroup.position;
            }
        });
        Interaction.ansGroup.X = 0;
        Interaction.ansGroup.animate({
            style:{
                X:80,
            },
            duration:1000,
            delay:2500,
            animationType:'easeInOutQuad',
            update:function(){
                this.position = this.firstPosition.add(1.5*this.X,0.015*this.X*this.X);
            },
        });
        setTimeout('Interaction.resume();',3500)
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir!', false);
        Interaction.inputs[0].value = Interaction.ballArr[Interaction.qIndex];
        Interaction.inputs[1].value = Interaction.totalBall;
        $(Interaction.inputs[0]).css("color","green");
        $(Interaction.inputs[1]).css("color","green");
		
    }
}