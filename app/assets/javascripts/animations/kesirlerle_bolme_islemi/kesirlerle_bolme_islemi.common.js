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
        var gcd = Util.gcd(this.nominator,this.denominator);

        this.nominator = this.nominator/gcd;
        this.denominator = this.denominator/gcd;

        this.determineDefinition();
        this.determineValue();
    },
    denomEqualization:function(otherRationalNumber){
        var lcm = Util.lcm(this.denominator,otherRationalNumber.denominator);

        this.nominator = this.nominator * (lcm/this.denominator);
        this.denominator = lcm;

        otherRationalNumber.nominator = otherRationalNumber.nominator * (lcm/otherRationalNumber.denominator);
        otherRationalNumber.denominator = lcm;

        this.determineDefinition();
        this.determineValue();

        otherRationalNumber.determineDefinition();
        otherRationalNumber.determineValue();
    },
    addition:function(otherRationalNumber){
        var nom, nom1, nom2, factor1, flag, denom, integer;

        flag = 0;
        this.denomEqualization(otherRationalNumber);

        if(this.integer){
            nom1 = (this.integer * this.denominator) + this.nominator;
            flag = 1;
        }
        else{
            nom1 = this.nominator;
        }

        if(otherRationalNumber.integer){
            nom2 = (otherRationalNumber.integer * otherRationalNumber.denominator) + otherRationalNumber.nominator;
            flag = 1;
        }
        else{
            nom2 = otherRationalNumber.nominator;
        }

        denom = this.denominator;

        nom = (this.factor * nom1) + (otherRationalNumber.factor * nom2);

        if(flag){
            integer = Math.floor(Math.abs(nom / denom));
            nom = nom % denom;
            denom = denom;
        }

        if(nom < 0){
            factor1 = -1;
            nom = -1 * nom;
        }
        else{
            factor1 = 1;
            nom = nom;
        }

        if(flag){
           var addition = new RationalNumber({factor:factor1,integer:integer,nominator:nom,denominator:denom});
        }
        else{
            var addition = new RationalNumber({factor:factor1,nominator:nom,denominator:denom});
        }

        this.simplification();
        otherRationalNumber.simplification();

        addition.simplification();
        return addition;
    },
    substraction:function(otherRationalNumber){
        var substraction;

        otherRationalNumber.additionInvert();

        substraction = this.addition(otherRationalNumber);

        otherRationalNumber.additionInvert();

        substraction.simplification();
        return substraction;
    },
    multiplication:function(otherRationalNumber){
        var factor1, nom1, denom1;

        this.convertToCompoundForm();
        otherRationalNumber.convertToCompoundForm();

        factor1 = this.factor * otherRationalNumber.factor;
        nom1 = this.nominator * otherRationalNumber.nominator;
        denom1 = this.denominator * otherRationalNumber.denominator;

        var multiplication = new RationalNumber({factor:factor1,nominator:nom1,denominator:denom1});

        this.convertToComplexForm();
        otherRationalNumber.convertToComplexForm();

        multiplication.simplification();
        return multiplication;
    },
    division:function(otherRationalNumber){
        var division;

        otherRationalNumber.multiplicationInvert();

        division = this.multiplication(otherRationalNumber);

        otherRationalNumber.multiplicationInvert();

        division.simplification();
        return division;
    },
    convertToComplexForm:function(){
        if(!this.integer){
            this.integer = Math.floor(this.nominator / this.denominator);
            this.nominator = this.nominator % this.denominator;
        }

        this.determineType();
        this.determineDefinition();
        this.determineValue();
    },
    convertToCompoundForm:function(){
        if(this.integer){
            this.nominator = (this.integer * this.denominator) + this.nominator;
        }

        this.integer = undefined;
        this.determineType();
        this.determineDefinition();
        this.determineValue();
    },
    additionInvert:function(){
        if(this.factor){
            if(this.factor == 1){
                this.factor = -1;
            }
            else{
                this.factor = 1;
            }
        }

        this.determineType();
        this.determineDefinition();
        this.determineValue();
    },
    multiplicationInvert:function(){
        if(this.type == 3){
            this.convertToCompoundForm();
        }

        var nom = this.nominator;
        this.nominator = this.denominator;
        this.denominator = nom;

        this.determineType();
        this.determineDefinition();
        this.determineValue();

    },
    toHTML:function(fontSize){
        var now = Date.now();

        var line = fontSize+4;
        var height = (2*line)+1;
        var width = height+6;
        var width2 = Math.round(width * 0.56);
        var width3 = width - width2;
        var lineWidth = width2;
        var intHeight = 2*line;

        var fontStr = ""+fontSize+"px";
        var lineStr = ""+line+"px";
        var heightStr = ""+height+"px";
        var widthStr = ""+width+"px";
        var width2Str = ""+width2+"px";
        var width3Str = ""+width3+"px";
        var lineWidthStr = ""+lineWidth+"px";
        var intHeightStr = ""+intHeight+"px";

        var myCss = {
            position:'absolute',
            padding:0,
            margin:0,
            width:widthStr,
            height:heightStr,
            fontSize:fontStr,
            lineHeight:lineStr
        };

        var intStyle = {
            width:width3Str,
            height:heightStr,
            textAlign:'right',
            paddingRight:'4px',
            boxSizing:'border-box',
            float:'left',
            lineHeight:intHeightStr
        };
        var nomStyle = {
            width:width2Str,
            height:lineStr,
            textAlign:'center',
            float:'left',
            lineHeight:lineStr
        };
        var lineStyle = {
            width:lineWidthStr,
            height:'1px',
            padding:0,
            borderTop:'2px solid',
            float:'left'
        };
        var denomStyle = {
            width:width2Str,
            height:lineStr,
            textAlign:'center',
            float:'left',
            lineHeight:lineStr
        };

        var html = Util.dom({tag:'div', css:myCss,
            html:'<div class="frac">' +
                    '<div class="int"></div>' +
                    '<div class="nom"></div>' +
                    '<div class="line"></div>' +
                    '<div class="denom"></div>' +
                '</div>'
        });

        var integer;
        if(this.integer){
            integer = this.factor * this.integer;
        }
        else{
            if(this.factor == -1){
                integer = "-";
            }
            else{
                integer = "";
            }
        }

        $('.int',html).html(integer);
        $('.int',html).css(intStyle);
        $('.nom',html).html(this.nominator);
        $('.nom',html).css(nomStyle);
        $('.denom',html).html(this.denominator);
        $('.denom',html).css(denomStyle);
        $('.line',html).css(lineStyle);

        return html;

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

RationalNumber.randomGenerator = function(factor,type){
    if(type == null || type == undefined){
        type = Util.randomInteger(0,4);
    }
    if(factor == null || factor == undefined){
        if(type == 0){
            factor = -1;
        }
        else{
            factor = 1;
        }
    }

    var nom, denom, integer, rationalNumber;

    switch(type){
        case 0:
            if(Util.randomDigit()){
                integer = Util.randomInteger(1,4);
                nom = Util.randomInteger(1,11);
                denom = Util.randomInteger(2,16,[nom]);
                rationalNumber = new RationalNumber({factor:factor,integer:integer,nominator:nom,denominator:denom});
            }
            else{
                nom = Util.randomInteger(1,11);
                denom = Util.randomInteger(2,16,[nom]);
                rationalNumber = new RationalNumber({factor:factor,nominator:nom,denominator:denom});
            }
            break;
        case 1:
            nom = Util.randomInteger(1,11);
            denom = Util.randomInteger(nom+1,16);
            rationalNumber = new RationalNumber({factor:factor,nominator:nom,denominator:denom});
            break;
        case 2:
            do{
                nom = Util.randomInteger(3,16);
                denom = Util.randomInteger(2,nom);
            } while(nom % denom == 0)
            rationalNumber = new RationalNumber({factor:factor,nominator:nom,denominator:denom});
            break;
        case 3:
            integer = Util.randomInteger(1,4);
            nom = Util.randomInteger(1,11);
            denom = Util.randomInteger(nom+1,16);
            rationalNumber = new RationalNumber({factor:factor,integer:integer,nominator:nom,denominator:denom});
            break;
    }

    return rationalNumber;
};

RationalNumber.RATIONAL = 0;
RationalNumber.SIMPLE = 1;
RationalNumber.COMPOUND = 2;
RationalNumber.COMPLEX = 3;