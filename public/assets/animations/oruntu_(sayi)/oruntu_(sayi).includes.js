function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}
;
var NumberWithShape = function(opt){
    this.animate = Item.prototype.animate;
    this.position = opt.position;
    this.number = opt.number;
    this.size = opt.size;
    if(opt.isHiddenNumber)
        this.isHiddenNumber = opt.isHiddenNumber;
    else
        this.isHiddenNumber = false;
    if(opt.fillColor)
        this.fillColor = opt.fillColor;
    else
        this.fillColor = '#a9dbe4';
    if(opt.strokeColor)
        this.strokeColor = opt.strokeColor
    else
        this.strokeColor = "#41818a"
}

NumberWithShape.prototype.draw = function(){
    this.removeShape();
    this.cubeArray = [];
    this.sqrt = Math.ceil(Math.sqrt(this.number))
    if(this.number == 3){
        for(var i=0; i < this.number; i++){
            this.cubeArray.push(new Path.Cube(
                this.position.add(this.size*i,0),
                this.size,
                new Point(0.4,0.3)
            ).set_style({strokeColor:this.strokeColor,fillColor:this.fillColor}));
        }
    }else{
        for(var i=0; i < this.number; i++){
            var position = this.position;

            position = position.add(
                this.size * Math.floor(i % this.sqrt),
                -this.size * Math.floor(i / this.sqrt)
            );

            this.cubeArray.push(new Path.Cube(
                position,
                this.size,
                new Point(0.4,0.3)
            ).set_style({strokeColor:this.strokeColor,fillColor:this.fillColor}));
        }
    }

    this.width = this.size * this.sqrt;
    if(this.number <=8)
        this.height = this.size * Math.ceil(this.number /2 );
    else
        this.height = this.size * 4;
    if(this.number == 3){
        this.width = 3 * this.size;
        this.height = this.size;
    }
    this.numberText = new PointText(this.position.add(this.width*0.5,this.size+28));
    this.numberText.justification = 'center';
    this.numberText.content = this.number;
    this.numberText.fontSize = 16;
    if(this.isHiddenNumber === true){
        this.setOpacity(0);
    }
}

NumberWithShape.prototype.setOpacity = function(opacity){

        for(var i=0;i<this.cubeArray.length;i++)
            this.cubeArray[i].opacity = opacity;

        this.numberText.opacity = opacity;

}

NumberWithShape.prototype.removeShape = function (){
    if(this.cubeArray)
        $(this.cubeArray).each(function(){this.remove()});
    if(this.numberText)
        this.numberText.remove();
}

var Pattern = Class.extend({
    init:function(coefficient,constant,length){
        this.coefficient = coefficient;
        this.constant = constant;
        this.length = length;
        this.cubeSize = 25;
    },
    setHiddenNumber:function(hiddenNumber){
        this.hiddenNumber = hiddenNumber;
    },
    draw:function(position){
        var nums = [];
        var self = this;
        var hiddenNumberPosition;
        console.log(""+this,this.hiddenNumber);
        var totalWidth = 0;
        this.cubeSize++;



        do{
            totalWidth = 0;
            this.cubeSize--;
            for(var i=0; i<this.numbers.length;i++)
                totalWidth += (i==0?0:this.cubeSize) + this.cubeSize * Math.ceil(this.numbers[i] / Math.ceil(Math.sqrt(this.numbers[i])));
        }
        while(totalWidth > 500)
        $(this.numbers).each(function(index){
            var num = new NumberWithShape({
                position:position.add(120*index,0),
                number:this,
                size:self.cubeSize,
                isHiddenNumber:(this == self.hiddenNumber)
            });
            num.draw();
            nums.push(num);
//            totalWidth+= (index==0?0:self.cubeSize) + num.width;
        });
        position = position.add(-totalWidth*0.5,0)

        totalWidth = 0;
        for(var i=0;i<nums.length;i++){
            totalWidth += (i>0?this.cubeSize:0);
            nums[i].position = position.add(totalWidth,0);
            nums[i].draw();
            totalWidth += nums[i].width;
            if(nums[i].number == this.hiddenNumber)
                hiddenNumberPosition  = nums[i].numberText.position;
        }
        this.numberWithShapes = nums;
        return hiddenNumberPosition;
    },
    showHiddenNumber:function(duration,delay){
        if(duration == undefined || isNaN(duration))
            duration = 0;
        if(delay == undefined || isNaN(duration))
            delay = 0;
        var hiddenNumber;
        for(var i=0; i<this.numberWithShapes.length; i++)
            if(this.numberWithShapes[i].isHiddenNumber === true)
                hiddenNumber = this.numberWithShapes[i];
        if(duration == 0)
            hiddenNumber.setOpacity(1);
        else{
            hiddenNumber.opacity = 0;
            hiddenNumber.animate({
                style:{opacity:1},
                duration:duration,
                delay:delay,
                update:function(){
                    this.setOpacity(this.opacity);
                }
            });
        }

    },
    remove:function(){
        for(var i=0;i<this.numberWithShapes.length;i++)
            this.numberWithShapes[i].removeShape();
    }
});

var LinearPattern = Pattern.extend({
    init:function(coefficient,constant,length){
        this._super(coefficient,constant,length);
        var numbers = [];
        for(var i=1; i<=length; i++){
            numbers.push(coefficient*i+constant);
        }
        this.numbers = numbers;
    },
    toString:function(){
        return (this.coefficient>1?this.coefficient:"") +
            "n" +
            (this.constant > 0 ? " + "+this.constant:(this.constant < 0 ? this.constant: ""));
    }

});

var QuadraticPattern = Pattern.extend({
    init:function(coefficient,constant,length){
        this._super(coefficient,constant,length);
        this.cubeSize = 20;
        var numbers = [];
        for(var i=1; i<=length; i++){
            numbers.push(coefficient*i*i+constant);
        }
        this.numbers = numbers;
    },
    toString:function(){
        return (this.coefficient>1?this.coefficient:"") +
            "n²" +
            (this.constant > 0 ? " + "+this.constant:(this.constant < 0 ? this.constant: ""));
    }
});

var ExponentialPattern = Pattern.extend({
    init:function(coefficient,constant,base,length){
        this._super(coefficient,constant,length);
        this.base = base;
        this.cubeSize = 20;

        var numbers = [];
        for(var i=1; i<=length; i++){
            numbers.push(coefficient*Math.pow(base,i)+constant);
        }
        this.numbers = numbers;
    },
    toString:function(){
        return (this.coefficient>1?this.coefficient:"") +
            "(" + this.base +"<sup>n</sup>)" +
            (this.constant > 0 ? " + "+this.constant:(this.constant < 0 ? this.constant: ""));
    }
});
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        Animation.referencePoint = new Point(-70,80);
        for(var i=1; i<=4; i++){
            var num = new NumberWithShape({
                number:i*3,
                position:Animation.referencePoint.add(120*i,0),
                size:25,
                fillColor:"#f3c884",
                strokeColor:"#9b773d"
            });
            num.draw();
            num.setOpacity(0);
            num.opacity = 0;
            num.order = i;

            num.animate({
                style:{opacity:1},
                duration:1000,
                delay:i*2000,
                update:function(){
                    this.setOpacity(this.opacity);
                },
                callback:function(){
                    var text1 = new PointText(this.numberText.position.add(0,16));
                    text1.content = this.order + ". sayı"
                    text1.justification = 'center';
                    var text2 = new PointText(this.numberText.position.add(0,32));
                    text2.content = "3 . " + this.order + " = " + (3*this.order);
                    text2.justification = 'center';

                    text1.opacity = 0;
                    text2.opacity = 0;

                    text1.animate({
                        style:{opacity:1},
                        duration:1000,
                        update:function(){
                            text2.opacity = this.opacity;
                        }
                    })
                }
            })
        }

        AnimationManager.delay(function(){
            new PointTextFadeIn({
                position:new Point(650,50),
                content:"..."
            });
            new PointTextFadeIn({
                position:new Point(650,130),
                content:"...",
                delay:1000
            });
            new PointTextFadeIn({
                position:new Point(650,147),
                content:"n. Sayı",
                delay:2000
            });
            new PointTextFadeIn({
                position:new Point(650,163),
                content:"3 . n = 3n",
                delay:3000
            });
        },10000)
        Main.animationFinished(14000);
    }
}
;
var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki örüntüde bir sonraki adımda gelecek sayıyı yazarak kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }
        Interaction.appendButton({
            bottom:"20px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"30px",
            right:"150px"
        })
        Interaction.setRandomGenerator(3);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.flushInputs();
        if(Interaction.pattern)
            Interaction.pattern.remove();
        /*<[[TEST*/
//            randomNumber = 0;
        /*TEST]]>*/
//        var pattern = new QuadraticPattern(1,0,4);
        var pattern = Interaction.generatePattern(randomNumber);
        var inputPosition = pattern.draw(new Point(260,165));
        Interaction.appendInput({
            position:'absolute',
            top:inputPosition.y,
            left:inputPosition.x,
            marginLeft:"-18.5px",
            marginTop:'-25px'
        }).focus();
        /*<[[TEST*/
//            Main.setObjective(pattern.toString());
        /*TEST]]>*/
        Interaction.pattern = pattern;

    },
		
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        return Interaction.pattern.hiddenNumber == value;
    },
	onCorrectAnswer : function(){
		Interaction.setStatus('Tebrikler! Bu örüntünün genel sayısı: '+Interaction.pattern.toString(),true);
        Interaction.showAnswer();
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
		Interaction.setStatus('Olmadı! Bu örüntünün genel sayısı: '+Interaction.pattern.toString(),false);
        Interaction.showAnswer();

    },
    generatePattern: function(randomNumber){
        var pattern;
        var coefficient = Util.randomInteger(1,5);
        var constant = Util.randomInteger(0,5);
        var base = 2;
        var length = 5;
        var hiddenNumberIndex = Util.randomInteger(0,length-1);
        /*<[[TEST*/
//            coefficient = 4;
//            constant = 5;
        /*TEST]]>*/
        switch(randomNumber){
            case 0:
                pattern = new LinearPattern(coefficient,constant,length);
                break;
            case 1:
                pattern = new QuadraticPattern(1,0,length);
                break;
            case 2:
                pattern = new ExponentialPattern(1,0,base,length);
                break;
        }
        console.log(pattern.numbers,pattern.numbers[hiddenNumberIndex]);
        pattern.setHiddenNumber(pattern.numbers[hiddenNumberIndex]);
        Interaction.patternType = randomNumber;
        return pattern;
    },
    showAnswer:function(){
        Interaction.pause();
        Interaction.pattern.showHiddenNumber(1000,1000);
        $(Interaction.input).animate({opacity:0},500);
        Interaction.resume(2000);
    }
}
;




