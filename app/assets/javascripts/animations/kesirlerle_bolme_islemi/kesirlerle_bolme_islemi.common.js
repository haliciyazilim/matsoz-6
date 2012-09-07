var Fraction = Class.extend({
    init:function(opt){
        if(opt.denominator == 0){
            throw "divisionByZero";
        }
        else{
            try{
                switch(opt.type){
                    case Fraction.SIMPLE:
                        this.definition = ""+opt.nominator+" bölü "+opt.denominator;
                        this.nominator = opt.nominator;
                        this.denominator = opt.denominator;
                        this.value = this.nominator / this.denominator;
                        break;
                    case Fraction.COMPOUND:
                        this.definition = ""+opt.nominator+" bölü "+opt.denominator;
                        this.nominator = opt.nominator;
                        this.denominator = opt.denominator;
                        this.value = this.nominator / this.denominator;
                        break;
                    case Fraction.MIXED:
                        this.definition = ""+opt.integer+" tam "+opt.nominator+" bölü "+opt.denominator;
                        this.nominator = opt.nominator;
                        this.denominator = opt.denominator;
                        this.integer = opt.integer;
                        this.value = this.integer + (this.nominator / this.denominator);
                }
            }
            catch(err){
                return false;
            }
            finally{
                return true;
            }
        }
    },

    reduceFraction:function(){
        try{
            var a = [];
            a = Util.reduceFractions(this.nominator, this.denominator);
            this.nominator = a[0];
            this.denominator = a[1];
        }
        catch(err){
            return false;
        }
        finally{
            return true;
        }
    },

    addWith:function(otherFraction){

    }
});

Fraction.SIMPLE = 0;
Fraction.COMPOUND = 1;
Fraction.MIXED = 2;