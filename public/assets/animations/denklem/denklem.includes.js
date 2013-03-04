function __Styles(){
	ilkRenk="#000000";
    degisenRenk="#ff0000"
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
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        Animation.resim={
            tura:"/assets/animations/denklem/para_tura.png",
            yazi:"/assets/animations/denklem/para_yazi.png",
            cep:"/assets/animations/denklem/cep.png"
        }

        var tura1=new Image();
        tura1.src=Animation.resim.tura;
        tura1.id="tura1";

        var tura2=new Image();
        tura2.src=Animation.resim.tura;
        tura2.id="tura2";

        var yazi1=new Image();
        yazi1.src=Animation.resim.yazi;
        yazi1.id="yazi1";

        var yazi2=new Image();
        yazi2.src=Animation.resim.yazi;
        yazi2.id="yazi2";

        var yazi3=new Image();
        yazi3.src=Animation.resim.yazi;
        yazi3.id="yazi3";

        var yazi4=new Image();
        yazi4.src=Animation.resim.yazi;
        yazi4.id="yazi4";

        var yazi5=new Image();
        yazi5.src=Animation.resim.yazi;
        yazi5.id="yazi5";

        var cep=new Image();
        cep.src=Animation.resim.cep;
        cep.id="cep";


        $(container).append("<div id='cumle'>");
        $("#cumle").css({
            position:'absolute',
            width:'100%',
            top:'30px',
            left:'0px',
            textAlign:'center',
            fontWeight:700,
            opacity:0,
            fontSize:'20px'
        }).html("Eğer <span id='ikiLira'>2 liram</span> daha olursa cebimde <span id='besLira'>5 lira</span> olacak. Şu an <span id='kacLira'>kaç liram</span> var?");

        $(container).append("<div id='denklem'>");
        $("#denklem").css({
            position:'absolute',
            width:'100%',
            top:'110px',
            left:'-20px',
            textAlign:'center',
            fontSize:'22px'
        }).html("<span id='x'>x</span> <span id='arti'>+</span> <span id='2'>2</span> <span id='esittir'>=</span> <span id='5'>5</span>");

        $(container).append("<div id='dikme'>");
        $("#dikme").css({
            position:'absolute',
            width:'200px',
            height:"128px",
            top:'60px',
            left:'0px',
            right:'0px',
            margin:"auto",
            borderLeft:"1px #d9d9d9 solid",
            borderRight:"1px #d9d9d9 solid"

        })

        $(container).append("<div id='asama2'>");
        $("#asama2").css({
            position:'absolute',
            width:'100%',
            top:'110px',
            left:'404px',
            textAlign:'left',
            opacity:0,
            fontSize:'22px'
        }).html("1 + 2 <span id='gidecekler'>+ 2</span>");

        $(container).append("<div id='asama3'>");
        $("#asama3").css({
            position:'absolute',
            width:'100%',
            top:'110px',
            left:'404px',
            textAlign:'left',
            opacity:0,
            fontSize:'22px'
        }).html("3");

        $("#x, #arti,#2, #esittir, #5").css("opacity","0").css("position","relative");



        $(container).append(cep);
        $("#cep").css({
            position:'absolute',
            width:'141px',
            height:"127px",
            top:'65px',
            left:'10px',
            opacity:0
        });

        $(container).append(tura1);
        $("#tura1").css({
            position:'absolute',
            width:'84px',
            height:"40px",
            top:'100px',
            left:'150px',
            opacity:0
        });

        $(container).append(tura2);
        $("#tura2").css({
            position:'absolute',
            width:'84px',
            height:"40px",
            top:'100px',
            left:'190px',
            opacity:0
        });

        $(container).append(yazi1);
        $("#yazi1").css({
            position:'absolute',
            width:'84px',
            height:"40px",
            top:'70px',
            left:'700px',
            opacity:0
        });
        $(container).append(yazi2);
        $("#yazi2").css({
            position:'absolute',
            width:'84px',
            height:"40px",
            top:'130px',
            left:'700px',
            opacity:0
        });

        $(container).append(yazi3);
        $("#yazi3").css({
            position:'absolute',
            width:'84px',
            height:"40px",
            top:'70px',
            left:'500px',
            opacity:0
        });
        $(container).append(yazi4);
        $("#yazi4").css({
            position:'absolute',
            width:'84px',
            height:"40px",
            top:'130px',
            left:'500px',
            opacity:0
        });
        $(container).append(yazi5);
        $("#yazi5").css({
            position:'absolute',
            width:'84px',
            height:"40px",
            top:'100px',
            left:'600px',
            opacity:0
        });

        $("#cumle").animate({opacity:1},1000);

        $("#ikiLira").delay(1000).animate({color:degisenRenk},1000).delay(1000).animate({color:ilkRenk},1000);
        $("#2, #arti, #tura1, #tura2").delay(1000).animate({opacity:1},2000);

        $("#besLira").delay(3000).animate({color:degisenRenk},1000).delay(1000).animate({color:ilkRenk},1000);
        $("#5, #esittir, #yazi1,#yazi2,#yazi3,#yazi4,#yazi5").delay(3000).animate({opacity:1},2000)

        $("#kacLira").delay(5000).animate({color:degisenRenk},1000).delay(1000).animate({color:ilkRenk},1000);
        $("#x, #cep").delay(5000).animate({opacity:1},2000)

        $("#5").delay(4000).animate({opacity:0},1000)
        $("#asama2").delay(9000).animate({opacity:1},1000);
        $("#yazi1").delay(4000).animate({top:"90px"},1000);
        $("#yazi2").delay(4000).animate({top:"110px"},1000);
        $("#yazi3").delay(4000).animate({top:"90px", left:"600px"},1000);
        $("#yazi4").delay(4000).animate({top:"110px", left:"600px"},1000);
        $("#yazi5").delay(4000).animate({left:"500px"},1000);

        $("#2, #arti, #tura1,#tura2").delay(9000).animate({opacity:0},1000);
        $("#gidecekler").delay(12000).animate({opacity:0},1000);
        $("#yazi1,#yazi2").delay(2000).animate({opacity:0},1000);


        $("#asama2").delay(5000).animate({opacity:0},1000);
        $("#asama3").delay(15000).animate({opacity:1},1000);

        $("#x").delay(9000).animate({left:35},1000)
        $("#cep").delay(10000).animate({left:100},1000)
        $("#dikme").delay(17000).animate({opacity:0},1000)

        Main.animationFinished(18000);


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
;




