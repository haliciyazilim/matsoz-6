var NumberWithShape = function(opt){
    this.animate = Item.prototype.animate;
    this.position = opt.position;
    this.number = opt.number;
    this.size = opt.size;
    if(opt.isHiddenNumber)
        this.isHiddenNumber = opt.isHiddenNumber;
    else
        this.isHiddenNumber = false;
    if(opt.color)
        this.color = opt.color;
    else
        this.color = '#193';
}

NumberWithShape.prototype.draw = function(){
    this.removeShape();
    this.cubeArray = [];
    for(var i=0; i < this.number; i++){
        var position = this.position;
        if(i < 8){
            position = position.add(
                this.size  * (i % 2),
                -this.size * Math.floor(i / 2)
            );
        }
        else{
            position = position.add(
                this.size * Math.floor(i / 4),
                -this.size * Math.floor(i % 4)
            );
        }
        this.cubeArray.push(new Path.Cube(
            position,
            this.size,
            new Point(0.4,0.3)
        ).set_style({strokeColor:'#000',fillColor:this.color}));
    }
    if(this.number == 1){
        this.width = this.size;
    }
    else if (this.number <= 8){
        this.width = this.size * 2 ;
    }
    else{
        this.width = this.size * Math.ceil(this.number / 4);
    }
    if(this.number <=8)
        this.height = this.size * Math.ceil(this.number /2 );
    else
        this.height = this.size * 4;
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
                totalWidth += (i==0?0:this.cubeSize) + this.cubeSize * Math.ceil(this.numbers[i] / 4);
        }
        while(totalWidth > 570)
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