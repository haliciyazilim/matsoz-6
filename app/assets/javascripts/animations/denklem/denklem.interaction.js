var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        {
            id:'scales_knuckle',
            src:'/assets/animations/denklem/scales_knuckle.png'
        },
        {
            id:'scales_bar',
            src:'/assets/animations/denklem/scales_bar.png'
        },
        {
            id:'scales_left',
            src:'/assets/animations/denklem/scales_left.png'
        },
        {
            id:'scales_right',
            src:'/assets/animations/denklem/scales_right.png'
        },
        {
            id:'weight_1',
            src:'/assets/animations/denklem/weight_1.png'
        },
        {
            id:'weight_2',
            src:'/assets/animations/denklem/weight_2.png'
        },
        {
            id:'weight_3',
            src:'/assets/animations/denklem/weight_3.png'
        },
        {
            id:'weight_4',
            src:'/assets/animations/denklem/weight_4.png'
        },
        {
            id:'weight_a',
            src:'/assets/animations/denklem/weight_a.png'
        },
        {
            id:'weight_m',
            src:'/assets/animations/denklem/weight_m.png'
        },
        {
            id:'weight_x',
            src:'/assets/animations/denklem/weight_x.png'
        }
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki denklemi, terazinin sol ve sağ kefelerinden kütleleri karşılıklı sürükleyip çıkararak bilinmeyeni bulunuz, kutuya yazınız ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }
        Interaction.appendButton({
            bottom:'10px',
            right:'50px'
        });
        Interaction.appendStatus({
            bottom:'20px',
            right:'160px'
        });
        Interaction.appendQuestion('<span id="equation"></span><br/><span id="variable"></span>&nbsp;=&nbsp;',{
            position:"absolute",
            right:'0px',
            top:'100px',
            width:"250px",
            textAlign:"center",
            fontSize:'16px',
            lineHeight:'34px',
            fontWeight:600
        });
        $(Interaction.questionDiv).append(
            Interaction.appendInput({
                position:'static'
            })
        );
        Interaction.scales = new Scales({
            position:new Point(180,115)
        });
        Interaction.createTool();
        Interaction.setRandomGenerator(5);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.scales.emptyScales();
        var leftScale = [];
        var rightScale = [];
        /*<[[TEST*/
//            randomNumber = 4;
        /*TEST]]>*/
        var equationString = "";
        var variableCharacter = "";
        var correctAnswer;
        switch (randomNumber){
            case 0:
                var a = Util.randomInteger(0,4)+1;
                var b = Util.randomInteger(0,4)+1;
                leftScale   = [ {type:"x",value:a},{type:b} ];
                rightScale  = [ {type:a},{type:b} ];
                equationString = "x + "+b+" = "+a+" + "+b;
                variableCharacter = "x";
                correctAnswer = a;
                break;
            case 1:
                var a = Util.randomInteger(0,4)+1;
                var b = Util.randomInteger(0,2)+1;
                var c = Util.randomInteger(0,2)+1;
                leftScale   = [ {type:"x",value:a},{type:b+c} ];
                rightScale  = [ {type:a},{type:b},{type:c} ];
                equationString = "x + "+(b+c)+" = "+a+" + "+b+" + "+c;
                variableCharacter = "x";
                correctAnswer = a;
                break;
            case 2:
                var a = Util.randomInteger(0,4)+1;
                var b = Util.randomInteger(0,4)+1;
                var c = Util.randomInteger(0,4)+1;
                leftScale   = [ {type:"x",value:a},{type:b},{type:c} ];
                rightScale  = [ {type:a},{type:b},{type:c} ];
                equationString = "x + "+(b+" + "+c)+" = "+a+" + "+b+" + "+c;
                variableCharacter = "x";
                correctAnswer = a;
                break;
            case 3:
                var a = Util.randomInteger(0,4)+1;
                var b = Util.randomInteger(0,4)+1;
                var c = Util.randomInteger(0,4)+1;
                var d = Util.randomInteger(0,4)+1;
                leftScale   = [ {type:"x",value:a},{type:b},{type:c},{type:d} ];
                rightScale  = [ {type:a},{type:b},{type:c},{type:d} ];
                equationString = "x + "+(b+" + "+c)+" + "+d+" = "+a+" + "+b+" + "+c+" + "+d;
                variableCharacter = "x";
                correctAnswer = a;
                break;
            case 4:
                var a = Util.randomInteger(1,4)+1;
                var b = Util.randomInteger(0,4)+1;
                var c = Util.randomInteger(0,4)+1;
                leftScale   = [ {type:"x",value:a},{type:b},{type:c} ];
                rightScale  = [ {type:a-1},{type:1},{type:b},{type:c} ];
                equationString = "x + "+(b+" + "+c)+" = "+(a-1)+" + "+(1)+" + "+b+" + "+c;
                variableCharacter = "x";
                correctAnswer = a;
                break;
        }
        Interaction.correctAnswer = correctAnswer;
        Interaction.weights = [];
//        var leftScaleShuffledIndex = Util.getShuffledArray(leftScale.length);
        for(var i=0;i<leftScale.length;i++){
            var weight = new Weight(leftScale[i]);
            if(i == 0)
                weight.raster.class = 'disabled';
            Interaction.scales.addWeightToLeft(weight);
            Interaction.weights.push(weight);
        }

//        var rightScaleShuffledIndex = Util.getShuffledArray(rightScale.length);
        for(var i=0;i<rightScale.length;i++){
            var weight = new Weight(rightScale[i]);
            if(i == 0)
                weight.raster.class = 'disabled';
            Interaction.scales.addWeightToRight(weight);
            Interaction.weights.push(weight);

        }

        Interaction.setQuestionParams([
            {
                id:'equation',
                html:equationString
            },
            {
                id:'variable',
                html:variableCharacter
            }
        ])
        Interaction.scales.calculateWeights();
    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        return value == Interaction.correctAnswer;

    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
    },
	onFail : function(){
        Interaction.setStatus("Yanlış. Doğru cevap "+Interaction.correctAnswer + " olacaktı.",false);

    },
    createTool : function(){
        var tool = new Tool();
        tool.onMouseDown = function(event){
            if(Interaction.isPaused())
                return;
            for(var i = 0; i < Interaction.weights.length; i++){
                var raster = Interaction.weights[i].raster;
                if(raster.bounds.contains(event.point)){
                    if(raster.class == "static_weight"){
                        this.item = raster.weight.clone().raster;
                        this.item.class = "draggable_weight";
                        Interaction.weights.push(this.item.weight);
                    }
                    else if(raster.class == 'disabled')
                        return;
                    else
                        this.item = raster;

                    this.item.opacity = 0.8;
                    this.drag = true;
                    this.firstPosition = this.item.position;
                    this.totalDelta = new Point(0,0);
                    return;
                }
            }

        }
        tool.onMouseDrag = function(event){
            if(Interaction.isPaused())
                return;
            if(this.drag == true){
                console.log(this.item);
                this.totalDelta = this.totalDelta.add(event.delta);
                this.item.position = this.firstPosition.add(this.totalDelta);
            }
        }
        tool.onMouseUp = function(event){
            if(!Interaction.isPaused()){
                if(this.drag == true){
                    if(Interaction.scales.insideRight(event.point)){
                        if(this.item.weight.owner == null){
                            if(Interaction.scales.addWeightToRight(this.item.weight,true) === false){
                                Interaction.weights.splice(Interaction.weights.indexOf(this.item.weight),1);
                                this.item.remove();
                            }
                        }else{//revert to first position
                            Interaction.pause();
                            this.item.animate({
                                style:{position:this.firstPosition},
                                duration:this.item.position.getDistance(this.firstPosition)*2,
                                callback:Interaction.resume
                            })
                        }
                    }
                    else{
                        Interaction.weights.splice(Interaction.weights.indexOf(this.item.weight),1);
                        Interaction.scales.removeWeight(this.item.weight,true);
                        this.item.remove();
                    }
                    this.item.opacity = 1;
                }
            }
            this.item = null;
            this.drag = false;
            this.firstPosition = null;
            this.totalDelta = null;
        }
        tool.activate();
    }
}