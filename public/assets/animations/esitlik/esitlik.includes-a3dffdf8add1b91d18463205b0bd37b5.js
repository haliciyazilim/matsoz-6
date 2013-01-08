function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}
;
var Scales2 = function(opt){
    this.animate = Item.prototype.animate;
    this.position = opt.position;
    this.angle = 0;
    this.bar = new Raster('terazi_k_02');
    this.knuckle = new Raster('terazi_k_01');
    this.left = new Raster('terazi_k_03');
    this.right = new Raster('terazi_k_04');
    this.pieces = [];
    this.pieces.push(this.bar);
    this.pieces.push(this.knuckle);
    this.pieces.push(this.left);
    this.pieces.push(this.right);
    for(var i=0;i<this.pieces.length;i++){
        this.pieces[i].position = this.position;
        this.pieces[i].lastTransformation = this.pieces[i].matrix;
    }
    this.knucklePoint = this.position.add(0,-37);
    this.leftKnucklePoint = this.knucklePoint.subtract(54,0);
    this.rightKnucklePoint = this.knucklePoint.add(54,0);
    this.leftWeights = [];
    this.rightWeights = [];
    this.animationType = "easeOutBounce";

//    this.setAngle(30);


}
Scales2.prototype.setAngle = function(angle){
    this.angle = angle;
    var matrix = new Matrix();
    matrix.rotate(this.angle, this.knucklePoint.x, this.knucklePoint.y);
    matrix.concatenate(this.bar.lastTransformation);
    this.bar.setMatrix(matrix);
    this.left.position = this.position.add(this.leftKnucklePoint.getRotatedPoint(angle,this.knucklePoint).subtract(this.leftKnucklePoint));
    this.right.position = this.position.add(this.rightKnucklePoint.getRotatedPoint(angle,this.knucklePoint).subtract(this.rightKnucklePoint));
    this.calculateLeftWeightPositions();
    this.calculateRightWeightPositions();
}
Scales2.prototype.insideLeft = function(point){

    return  point.x < this.left.position.x &&
        point.x > this.left.position.x  - this.left.width*0.5 &&
        point.y < this.left.position.y + this.left.height*0.5 &&
        point.y > this.left.position.y

}
Scales2.prototype.insideRight = function(point){

    return  point.x > this.right.position.x &&
        point.x < this.right.position.x  + this.right.width*0.5 &&
        point.y < this.right.position.y + this.right.height*0.5 &&
        point.y > this.right.position.y

}
Scales2.prototype.calculateLeftWeightPositions = function(){
    var totalLeftWidth = 0;var locatedLeftWidth= 0;
    for(var i=0;i<this.leftWeights.length;i++){
        totalLeftWidth+=this.leftWeights[i].raster.width;
    }
    var leftStartPoint = this.left.position.add(-54,60).subtract(totalLeftWidth/2,0);
    for(i=0;i<this.leftWeights.length;i++){
        this.leftWeights[i].raster.position = leftStartPoint.add(locatedLeftWidth,0).add(this.leftWeights[i].raster.width*0.5,-this.leftWeights[i].raster.height*0.5);
        locatedLeftWidth += this.leftWeights[i].raster.width;
    }
}
Scales2.prototype.calculateRightWeightPositions = function(){
    var totalRightWidth = 0;var locatedRightWidth= 0;
    for(var i=0;i<this.rightWeights.length;i++){
        totalRightWidth+=this.rightWeights[i].raster.width;
    }
    var rightStartPoint = this.right.position.add(54,60).subtract(totalRightWidth/2,0);
    for(i=0;i<this.rightWeights.length;i++){
        this.rightWeights[i].raster.position = rightStartPoint.add(locatedRightWidth,0).add(this.rightWeights[i].raster.width*0.5,-this.rightWeights[i].raster.height*0.5);
        locatedRightWidth += this.rightWeights[i].raster.width;
    }
}
Scales2.prototype.addWeightToLeft = function(weight,calculate){
    if(this.leftWeights.length >= 4)
        return false;
    weight.owner = this;
    this.leftWeights.push(weight);
    if(calculate == true)
        this.calculateWeights();
    this.calculateLeftWeightPositions();
}

Scales2.prototype.addWeightToRight = function(weight,calculate){
    if(this.rightWeights.length >= 4)
        return false;
    weight.owner = this;
    this.rightWeights.push(weight);
    if(calculate == true)
        this.calculateWeights();
    this.calculateRightWeightPositions();
}
Scales2.prototype.calculateWeights = function(){

    var totalLeftWeights = 0;
    var totalRightWeights = 0;
    for(var i=0;i<this.leftWeights.length;i++)
        totalLeftWeights += this.leftWeights[i].value;
    for(var i=0;i<this.rightWeights.length;i++)
        totalRightWeights += this.rightWeights[i].value;
//    console.log("calculateWeights Left: ",totalLeftWeights," Right: ",totalRightWeights);

    var duration = 7000 / (Math.abs(totalLeftWeights-totalRightWeights)+1);
    totalLeftWeights+=2;totalRightWeights+=2; // escape from zero values
    var angle = 30;
    this.animationType = "easeOutBounce";
    if(totalLeftWeights < totalRightWeights){
        duration *= totalLeftWeights / totalRightWeights;
        angle *= 1;
    }
    else if(totalLeftWeights > totalRightWeights){
        duration *= totalRightWeights / totalLeftWeights;
        angle *= -1;
    }
    else{
        angle = 0;
        duration = 4000;
        this.animationType = "easeOutElastic";

    }
//    console.log("Angle: ",angle," Duration: ",duration);
    if(this.angle != angle){
//        Interaction.pause();
        this.animateToAngle(angle,duration);

    }

}
Scales2.prototype.animateToAngle = function(angle,duration){
//    Interaction.pause();
    if(duration == undefined)
        duration = 1000;
    this._angle =this.angle;
    this.animate({
        style:{_angle:angle},
        duration:duration,
        delay:100,
        animationType:this.animationType,
        init:this.beforeAnimate,
        update:function(){
            this.setAngle(this._angle);
        },
        callback:function(){

            if(this.angle == 0 && this.onEqual)
                this.onEqual();
            else
                Interaction.resume();
        }
    })
}
Scales2.prototype.callOnEqual = function(func){
    this.onEqual = func;
}
Scales2.prototype.callBeforeAnimate = function(func){
    this.beforeAnimate = func;
}
Scales2.prototype.emptyScales = function(){
    $(this.leftWeights).each(function(){
        this.remove();
    });
    $(this.rightWeights).each(function(){
        this.remove();
    });
    this.leftWeights = [];
    this.rightWeights = [];
    this.calculateWeights();
}
Scales2.prototype.removeWeight = function(weight,calculate){
    if(calculate == undefined)
        calculate = false;
    var isFound = false;
    var leftIndex = this.leftWeights.indexOf(weight);
    if(leftIndex >= 0){
        this.leftWeights[leftIndex].remove();
        this.leftWeights.splice(leftIndex,1);
        isFound = true;
    }
    else{
        var rightIndex = this.rightWeights.indexOf(weight);
        if(rightIndex >= 0){
            this.rightWeights[rightIndex].remove();
            this.rightWeights.splice(rightIndex,1);
            isFound = true;
        }
    }
    if(isFound && calculate){
        this.calculateWeights();
    }
    return isFound;
}
;
var Animation = {
    images:[
        {
            id:'1kg',
            src:'/assets/animations/esitlik/1kg.png'
        },{
            id:'2kg',
            src:'/assets/animations/esitlik/2kg.png'
        },{
            id:'elma',
            src:'/assets/animations/esitlik/elma.png'
        },{
            id:'elma_sepet',
            src:'/assets/animations/esitlik/elma_sepet.png'
        },{
            id:'terazi_k_01',
            src:'/assets/animations/esitlik/terazi_k_01.png'
        },{
            id:'terazi_k_02',
            src:'/assets/animations/esitlik/terazi_k_02.png'
        },{
            id:'terazi_k_03',
            src:'/assets/animations/esitlik/terazi_k_03.png'
        },{
            id:'terazi_k_04',
            src:'/assets/animations/esitlik/terazi_k_04.png'
        }
    ],
	init:function(container){
        Animation.container = container;
        Animation.placeItems();
        Animation.moveAnApple(1000);
        Animation.putWeight1kg(4000);
        Animation.moveAnApple(7000);
        var weight = Animation.putWeight1kg(11000);
        Animation.moveAnApple(13000);
        Animation.moveAnApple(16000);
        Animation.putWeight2kg(19000);
        weight.raster.animate({
            style:{
                position:weight.raster.position.subtract(0,30),
                opacity:0.5
            },
            duration:500,
            delay:23000,
            callback:function(){
                Animation.scales.removeWeight(weight);
                Animation.scales.calculateWeights();
                Main.animationFinished(2000);
                }
        })
//        Animation.moveAnApple(4000);
//        Animation.putWeight1kg(5500);
    },
    placeItems:function(){
        new Raster('elma_sepet').position = new Point(100.5,100);
        Animation.scales = new Scales2({
            position:new Point(375.5,75)
        });
    },
    moveAnApple:function(delay){
        var weight = new Weight({type:'elma'});
        weight.raster.position = new Point(100,100);
        weight.raster.opacity = 0;
        weight.raster.animate({
            style:{
                opacity:4,
                position:new Point(325,100)
            },
            duration:1000,
            delay:delay,
            callback:function(){
                Animation.scales.addWeightToLeft(weight);
                Animation.scales.calculateWeights();
            },
            animationType:'easeInEaseQuad'
        });
    },
    putWeight1kg: function(delay){
        var weight = new Weight({type:'1kg'});
        weight.raster.position = new Point(425,50.5);
        weight.raster.opacity = 0;
        weight.raster.animate({
            style:{
                opacity:4,
                position: weight.raster.position.add(0,30)
            },
            duration:500,
            delay:delay,
            callback:function(){
                Animation.scales.addWeightToRight(weight);
                Animation.scales.calculateWeights();
            },
            animationType:'easeIn'
        });
        return weight;
    },
    putWeight2kg: function(delay){
        var weight = new Weight({type:'2kg'});
        weight.raster.position = new Point(425.5,50.5);
        weight.raster.opacity = 0;
        weight.raster.animate({
            style:{
                opacity:4,
                position: weight.raster.position.add(0,30)
            },
            duration:500,
            delay:delay,
            callback:function(){
                Animation.scales.addWeightToRight(weight);
                Animation.scales.calculateWeights();
            },
            animationType:'easeIn'
        });
    }
}
;
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
var Scales = function(opt){
    this.animate = Item.prototype.animate;
    this.position = opt.position;
    this.angle = 0;
    this.bar = new Raster('scales_bar');
    this.knuckle = new Raster('scales_knuckle');
    this.left = new Raster('scales_left');
    this.right = new Raster('scales_right');
    this.pieces = [];
    this.pieces.push(this.bar);
    this.pieces.push(this.knuckle);
    this.pieces.push(this.left);
    this.pieces.push(this.right);
    for(var i=0;i<this.pieces.length;i++){
        this.pieces[i].position = this.position;
        this.pieces[i].lastTransformation = this.pieces[i].matrix;
    }
    this.knucklePoint = this.position.add(-1,-56);
    this.leftKnucklePoint = this.knucklePoint.subtract(83,0);
    this.rightKnucklePoint = this.knucklePoint.add(83,0);
    this.leftWeights = [];
    this.rightWeights = [];
    this.animationType = "easeOutBounce";

//    this.setAngle(30);


}
Scales.prototype.setAngle = function(angle){
    this.angle = angle;
    var matrix = new Matrix();
    matrix.rotate(this.angle, this.knucklePoint.x, this.knucklePoint.y);
    matrix.concatenate(this.bar.lastTransformation);
    this.bar.setMatrix(matrix);
    this.left.position = this.position.add(this.leftKnucklePoint.getRotatedPoint(angle,this.knucklePoint).subtract(this.leftKnucklePoint));
    this.right.position = this.position.add(this.rightKnucklePoint.getRotatedPoint(angle,this.knucklePoint).subtract(this.rightKnucklePoint));
    this.calculateLeftWeightPositions();
    this.calculateRightWeightPositions();
}
Scales.prototype.insideLeft = function(point){

    return  point.x < this.left.position.x &&
            point.x > this.left.position.x  - this.left.width*0.5 &&
            point.y < this.left.position.y + this.left.height*0.5 &&
            point.y > this.left.position.y

}
Scales.prototype.insideRight = function(point){

    return  point.x > this.right.position.x &&
            point.x < this.right.position.x  + this.right.width*0.5 &&
            point.y < this.right.position.y + this.right.height*0.5 &&
            point.y > this.right.position.y

}
Scales.prototype.calculateLeftWeightPositions = function(){
    var totalLeftWidth = 0;var locatedLeftWidth= 0;
    for(var i=0;i<this.leftWeights.length;i++){
        totalLeftWidth+=this.leftWeights[i].raster.width;
    }
    var leftStartPoint = this.left.position.add(-83,92).subtract(totalLeftWidth/2,0);
    for(i=0;i<this.leftWeights.length;i++){
        this.leftWeights[i].raster.position = leftStartPoint.add(locatedLeftWidth,0).add(this.leftWeights[i].raster.width*0.5,-this.leftWeights[i].raster.height*0.5);
        locatedLeftWidth += this.leftWeights[i].raster.width;
    }
}
Scales.prototype.calculateRightWeightPositions = function(){
    var totalRightWidth = 0;var locatedRightWidth= 0;
    for(var i=0;i<this.rightWeights.length;i++){
        totalRightWidth+=this.rightWeights[i].raster.width;
    }
    var rightStartPoint = this.right.position.add(83,92).subtract(totalRightWidth/2,0);
    for(i=0;i<this.rightWeights.length;i++){
        this.rightWeights[i].raster.position = rightStartPoint.add(locatedRightWidth,0).add(this.rightWeights[i].raster.width*0.5,-this.rightWeights[i].raster.height*0.5);
        locatedRightWidth += this.rightWeights[i].raster.width;
    }
}
Scales.prototype.getTotalOfLeftWeights = function(){
    var total = 0;
    for(var i=0; i< this.leftWeights.length ; i++)
        total += this.leftWeights[i].value;
    return total;
}
Scales.prototype.addWeightToLeft = function(weight,calculate){
    if(this.leftWeights.length >= 4)
        return false;
    weight.owner = this;
    this.leftWeights.push(weight);
    if(calculate == true)
        this.calculateWeights();
    this.calculateLeftWeightPositions();
}

Scales.prototype.addWeightToRight = function(weight,calculate){
    if(this.rightWeights.length >= 4)
        return false;
    weight.owner = this;
    this.rightWeights.push(weight);
    if(calculate == true)
        this.calculateWeights();
    this.calculateRightWeightPositions();
}
Scales.prototype.calculateWeights = function(){

    var totalLeftWeights = 0;
    var totalRightWeights = 0;
    for(var i=0;i<this.leftWeights.length;i++)
        totalLeftWeights += this.leftWeights[i].value;
    for(var i=0;i<this.rightWeights.length;i++)
        totalRightWeights += this.rightWeights[i].value;
//    console.log("calculateWeights Left: ",totalLeftWeights," Right: ",totalRightWeights);

    var duration = 7000 / (Math.abs(totalLeftWeights-totalRightWeights)+1);
    totalLeftWeights+=0.3;totalRightWeights+=0.3; // escape from zero values
    var angle = 30;
    this.animationType = "easeOutBounce";
    if(totalLeftWeights < totalRightWeights){
        duration *= totalLeftWeights / totalRightWeights;
        angle *= 1;
    }
    else if(totalLeftWeights > totalRightWeights){
        duration *= totalRightWeights / totalLeftWeights;
        angle *= -1;
    }
    else{
        angle = 0;
        duration = 4000;
        this.animationType = "easeOutElastic";

    }
//    console.log("Angle: ",angle," Duration: ",duration);
    if(this.angle != angle)
        this.animateToAngle(angle,duration);

}
Scales.prototype.animateToAngle = function(angle,duration){
    if(Interaction.isPaused())
        return;
    Interaction.pause();
    if(duration == undefined)
        duration = 1000;
    this._angle =this.angle;
    this.animate({
        style:{_angle:angle},
        duration:duration,
        delay:100,
        animationType:this.animationType,
        init:this.beforeAnimate,
        update:function(){
            this.setAngle(this._angle);
        },
        callback:function(){
            Interaction.resume();
            if(this.angle == 0 && this.onEqual)
                this.onEqual();
        }
    })
}
Scales.prototype.callOnEqual = function(func){
    this.onEqual = func;
}
Scales.prototype.callBeforeAnimate = function(func){
    this.beforeAnimate = func;
}
Scales.prototype.emptyScales = function(){
    $(this.leftWeights).each(function(){
        this.remove();
    });
    $(this.rightWeights).each(function(){
        this.remove();
    });
    this.leftWeights = [];
    this.rightWeights = [];
    this.calculateWeights();
}
Scales.prototype.removeWeight = function(weight,calculate){
    if(calculate == undefined)
        calculate = false;
    var isFound = false;
    var leftIndex = this.leftWeights.indexOf(weight);
    if(leftIndex >= 0){
        this.leftWeights[leftIndex].remove();
        this.leftWeights.splice(leftIndex,1);
        isFound = true;
    }
    else{
        var rightIndex = this.rightWeights.indexOf(weight);
        if(rightIndex >= 0){
            this.rightWeights[rightIndex].remove();
            this.rightWeights.splice(rightIndex,1);
            isFound = true;
        }
    }
    if(isFound && calculate){
        this.calculateWeights();
    }
    return isFound;
}
var Weight = function(opt){
    if(opt.type)
        this.type = opt.type;
    else
        throw "Please indicate the type of weight";
    this.owner = null;
    var raster;
    switch(this.type){
        case 1:
            raster = new Raster('weight_1');
            this.value = 1;
            break;
        case 2:
            raster = new Raster('weight_2');
            this.value = 2;
            break;
        case 3:
            raster = new Raster('weight_3');
            this.value = 3;
            break;
        case 4:
            raster = new Raster('weight_4');
            this.value = 4;
            break;
        case 'a':
            raster = new Raster('weight_a');
            this.value = opt.value;
            break;
        case 'm':
            raster = new Raster('weight_m');
            this.value = opt.value;
            break;
        case 'x':
            raster = new Raster('weight_x');
            this.value = opt.value;
            break;
        case '1kg':
            raster = new Raster('1kg');
            this.value = 1;
            break;
        case '2kg':
            raster = new Raster('2kg');
            this.value = 2;
            break;
        case 'elma':
            raster = new Raster('elma');
            this.value = 0.75;
            break;
    }
    this.raster = raster;
    this.raster.weight = this;
}

Weight.prototype.remove = function(){
    this.raster.remove();
}
Weight.prototype.clone = function(){
    var weight = new Weight({type:this.type});
    weight.raster.position = this.raster.position;
    return weight;
}

;





