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
        }
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki terazide sağdaki birim kütleleri sürükleyip sağ kefeye yerleştirerek eşitlik oluşturunuz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }
        Interaction.appendStatus({
            bottom:'0px',
            width:'420px',
            textAlign:'center',
            left:'35px',
            lineHeight:'27px'
        })
        Interaction.createTool();
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Main.interactionProject.activeLayer.removeChildren();
        Interaction.scales = new Scales({
            position:new Point(250,115)
        });
        var length = Util.randomInteger(1,5);

        Interaction.scales.callOnEqual(Interaction.onEqual);
        Interaction.scales.callBeforeAnimate(function(){
            Interaction.setStatus('');
        })
        Interaction.generateWeights();
        do
            for(var i=0; i<length;i++){
                var weight = new Weight({
                    type:Util.randomInteger(1,5)
                });
                Interaction.scales.addWeightToLeft(weight);
            }
        while(Interaction.scales.getTotalOfLeftWeights() < 3 || Interaction.scales.getTotalOfLeftWeights() > 12)

        var disabledWeight = Interaction.weights[Interaction.scales.leftWeights[Util.randomInteger(0,Interaction.scales.leftWeights.length)].value-1];
        disabledWeight.raster.set_style({
            opacity:0.5,
            class:'disabled'
        });
        disabledWeight.class = 'disabled';


        AnimationManager.delay(
            function(){
                Interaction.scales.calculateWeights()
            },1000
        );
    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(value){

    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
		
    },
    onEqual : function(){
        Interaction.pause();
        if(Interaction.scales.leftWeights.length == 0)
            return;

        var equationHTML = '<span style="color:green">Tebrikler!</span><br/>';
        var totalLeftWeight = 0;
        var totalRightWeight = 0;
        for(var i=0;i<Interaction.scales.leftWeights.length;i++){
            equationHTML += '<span id="'+i+'">'+(i>0?' + ':'')+Interaction.scales.leftWeights[i].value+'</span>';
            totalLeftWeight += Interaction.scales.leftWeights[i].value;

        }
        equationHTML += '<span id="'+ (i++) +'"> = </span>';
        for(var j=0;j<Interaction.scales.rightWeights.length;j++,i++){
            equationHTML += '<span id="'+i+'">'+(j>0?' + ':'')+Interaction.scales.rightWeights[j].value+'</span>';
            totalRightWeight += Interaction.scales.rightWeights[j].value;
        }
//        console.log(equationHTML);

        equationHTML += '<br/><span id="'+(i)+'">'+totalLeftWeight+' = '+totalRightWeight+'</span>';
        var totalLength = Interaction.scales.leftWeights.length + Interaction.scales.rightWeights.length;

        Interaction.setStatus(equationHTML);
        for(var i=0; i < totalLength+2 ; i++){
            $("span#"+i,Interaction.status)
                .css({opacity:0})
                .delay(1000*i)
                .animate({opacity:1},1000)
        }

        AnimationManager.delay(
            function(){
                Interaction.resume();
                Main.interactionProject.activeLayer.animate({
                    style:{opacity:0},
                    duration:500,
                    callback:function(){
                        Main.interactionProject.activeLayer.removeChildren();
                        Interaction.setStatus('');
                        Interaction.prepareNextQuestion();
                        Main.interactionProject.activeLayer.set_style({opacity:1});
                    }
                })
            },(totalLength+5)*1000
        );

    },
    generateWeights: function(){
        Interaction.weightsReferencePoint = new Point(550,45.5);
        Interaction.weights = [];
        for(var i = 0 ; i < 4 ; i++){
            var weight = new Weight({type:i+1});
            weight.raster.class = "static_weight";
            weight.raster.position = Interaction.weightsReferencePoint.add(0,60*i);
            Interaction.weights.push(weight);
        }

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
                    /*if(Interaction.scales.insideLeft(event.point)){
                        if(this.item.weight.owner == null){
                            if(Interaction.scales.addWeightToLeft(this.item.weight,true) === false){
                                Interaction.weights.splice(Interaction.weights.indexOf(this.item.weight),1);
                                this.item.remove();
                            }
                                ;
                        }else{//revert to first position
                            Interaction.pause();
                            this.item.animate({
                                style:{position:this.firstPosition},
                                duration:this.item.position.getDistance(this.firstPosition)*2,
                                callback:Interaction.resume
                            })
                        }
                    }
                    else */
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
;
