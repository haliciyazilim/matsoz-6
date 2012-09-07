var RationalNumber = Class.extend({
    init:function(opt){
        if(opt.integer){
            this.integer = opt.integer;
        }
        this.nominator = opt.nominator;
        this.denominator = opt.denominator;
        if(opt.factor){
            this.factor = opt.factor;
        }
        else{
            this.factor = 1;
        }

        this.determineType();
        this.determineDefinition();
        this.determineValue();

    },
    simplification:function(){
        try{
            var gcd = Util.gcd(this.nominator,this.denominator);

            this.nominator = this.nominator/gcd;
            this.denominator = this.denominator/gcd;

            this.determineDefinition();
            this.determineValue();
        }
        catch(err){
            return false;
        }
        finally{
            return true;
        }
    },
    denomEqualization:function(otherRationalNumber){
        try{
            var lcm = Util.lcm(this.denominator,otherRationalNumber.denominator);

            this.nominator = this.nominator * (lcm/this.denominator);
            this.denominator = lcm;

            otherRationalNumber.nominator = otherRationalNumber.nominator * (lcm/otherRationalNumber.denominator);
            otherRationalNumber.denominator = lcm;

            this.determineDefinition();
            this.determineValue();

            otherRationalNumber.determineDefinition();
            otherRationalNumber.determineValue();
        }
        catch(err){
            return false;
        }
        finally{
            return true;
        }
    },
    addition:function(otherRationalNumber){

    },
    substraction:function(otherRationalNumber){

    },
    multiplication:function(otherRationalNumber){

    },
    division:function(otherRationalNumber){

    },
    conversion:function(){

    },
    additionInvert:function(){

    },
    multiplicationInvert:function(){

    },
    toHTML:function(fontSize){

    },
    determineType:function(){
        if(this.factor == -1){
            this.type = RationalNumber.RATIONAL;
        }
        else{
            if(this.integer){
                this.type = RationalNumber.COMPLEX;
            }
            else{
                if(this.nominator < this.denominator){
                    this.type = RationalNumber.SIMPLE;
                }
                else{
                    this.type = RationalNumber.COMPOUND;
                }
            }
        }
    },
    determineDefinition:function(){
        if(this.factor == -1){
            if(this.integer){
                this.definition = "-"+this.integer+" tam "+this.nominator+" bölü "+this.denominator;
            }
            else{
                this.definition = "-"+this.nominator+" bölü "+this.denominator;
            }
        }
        else{
            if(this.integer){
                this.definition = ""+this.integer+" tam "+this.nominator+" bölü "+this.denominator;
            }
            else{
                this.definition = ""+this.nominator+" bölü "+this.denominator;
            }
        }
    },
    determineValue:function(){
        var value;
        if(this.integer){
            value = this.integer + (this.nominator/this.denominator);
        }
        else{
            value = this.nominator/this.denominator;
        }
        this.value = this.factor * value;
    }
});

RationalNumber.RATIONAL = 0;
RationalNumber.SIMPLE = 1;
RationalNumber.COMPOUND = 2;
RationalNumber.COMPLEX = 3;