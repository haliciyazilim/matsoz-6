var NumberWithShape = function(opt){
    this.position = opt.position;
    this.number = opt.number;
    this.size = opt.size;
}
NumberWithShape.prototype.draw = function(){
    this.removeShape();
    this.cubeArray = [];
    for(var i=0; i < this.number; i++){
        var position = this.position.add(
            this.size  * (i % 2),
            -this.size * Math.floor(i / 2)
        ).add(
            this.size * 2 * Math.floor(i/8),
            this.size * 4 * Math.floor(i/8)
        )
        this.cubeArray.push(new Path.Cube(
            position,
            this.size,
            new Point(0.4,0.3)
        ).set_style({strokeColor:'#000',fillColor:'#193'}));
    }
    console.log(""+this.number)
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

    this.numberText = new PointText(this.position.add(this.width*0.5,this.size*2+8));
    this.numberText.justification = 'center';
    this.numberText.content = this.number;
    this.numberText.fontSize = 16;
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
    },
    setHiddenNumber:function(hiddenNumber){
        this.hiddenNumber = hiddenNumber;
    },
    draw:function(position){
        $(this.numbers).each(function(index){
            var num = new NumberWithShape({
                position:position.add(120*index,0),
                number:this,
                size:25
            })
            num.draw();
        })

    },
    showHiddenNumber:function(){

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
    }
});
var QuadraticPattern = Pattern.extend({
    init:function(coefficient,constant,length){
        this._super(coefficient,constant,length);
        var numbers = [];
        for(var i=1; i<=length; i++){
            numbers.push(coefficient*i*i+constant);
        }
        this.numbers = numbers;
    }
});
var ExponentialPattern = Pattern.extend({
    init:function(coefficient,constant,base,length){
        this._super(coefficient,constant,length);
        this.base = base;
        var numbers = [];
        for(var i=1; i<=length; i++){
            numbers.push(coefficient*Math.pow(base,i)+constant);
        }
        this.numbers = numbers;
    }
});