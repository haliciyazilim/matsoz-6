var Set = Class.extend({
    init:function(opt){
        this.elements = [];
        switch(opt.type){
            case Set.ELEMENTS:
                this.definition = ""+opt.elements.length+" elemanlı küme";
                this.elements = opt.elements;
                this.elements.sort(function(a,b){return a-b})
                this.type = Set.ELEMENTS;
                break;
            case Set.SMALLER_THAN:
                this.definition = ""+this.getValueStr(opt.value)+" küçük doğal sayılar";
                for(var i = 0; i < opt.value; i++){
                    this.elements.push(i);
                }
                this.type = Set.SMALLER_THAN;
                break;

            case Set.SMALLER_THAN_ODD:
                this.definition = ""+this.getValueStr(opt.value)+" küçük tek doğal sayılar";
                for(var i = 0; i < opt.value; i++){
                    if(i % 2 == 1){
                        this.elements.push(i);
                    }
                }
                this.type = Set.SMALLER_THAN_ODD;
                break;
            case Set.SMALLER_THAN_EVEN:
                this.definition = ""+this.getValueStr(opt.value)+" küçük çift doğal sayılar";
                for(var i = 0; i < opt.value; i++){
                    if(i % 2 == 0){
                        this.elements.push(i);
                    }
                }
                this.type = Set.SMALLER_THAN_EVEN;
                break;
            case Set.SMALLER_THAN_PRIME:
                this.definition = ""+this.getValueStr(opt.value)+" küçük asal sayılar";
                for(var i = 0; i < opt.value; i++){
                    if(Util.isPrimeNumber(i)){
                        this.elements.push(i);
                    }
                }
                this.type = Set.SMALLER_THAN_PRIME;
                break;
            case Set.SMALLER_THAN_GREATER_THAN:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük doğal sayılar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    this.elements.push(i);
                }
                this.type = Set.SMALLER_THAN_GREATER_THAN;
                break;
            case Set.SMALLER_THAN_GREATER_THAN_ODD:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük tek doğal sayılar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    if(i % 2 == 1){
                        this.elements.push(i);
                    }
                }
                this.type = Set.SMALLER_THAN_GREATER_THAN_ODD;
                break;
            case Set.SMALLER_THAN_GREATER_THAN_EVEN:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük çift doğal sayılar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    if(i % 2 == 0){
                        this.elements.push(i);
                    }
                }
                this.type = Set.SMALLER_THAN_GREATER_THAN_EVEN;
                break;
            case Set.SMALLER_THAN_GREATER_THAN_PRIME:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük asal sayılar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    if(Util.isPrimeNumber(i)){
                        this.elements.push(i);
                    }
                }
                this.type = Set.SMALLER_THAN_GREATER_THAN_PRIME;
                break;
            case Set.FACTORS:
                this.definition = ""+this.getValueStr(opt.value, 1)+" çarpanları";
                a = [];
                a = Util.getFactors(opt.value);
                for(var i = 0; i < a.length; i++){
                    this.elements.push(a[i]);
                }
                this.type = Set.FACTORS;
                break;
            case Set.MULTIPLIES:
                this.definition = ""+this.getValueStr(opt.value1,1)+" "+this.getValueStr(opt.value2)+" küçük katları";
                for(var i = 1; i < opt.value2/opt.value1; i++){
                    this.elements.push(opt.value1*i);
                }
                this.type = Set.MULTIPLIES;
                break;
        }
    },

    isEqualSet:function(otherSet){
        if(this.elements.length != otherSet.elements.length){
            return false;
        }
        else{
            var a = [];
            var correctN = 0;
            for(var i = 0; i < this.elements.length; i++){
                a[i] = this.elements[i];
            }
            for(var i = 0; i < this.elements.length; i++){
                for(var j = 0; j < otherSet.elements.length; j++){
                    if(a[i] == otherSet.elements[j]){
                        a[i] = "axxwt";
                    }
                }
            }

            for(var i = 0; i < a.length; i++){
                if(a[i] == "axxwt"){
                    correctN += 1;
                }
            }

            if(correctN == this.elements.length){
                return true;
            }
            else{
                return false;
            }
        }
    },

    isSubSet:function(otherSet){
        if(this.elements.length > otherSet.elements.length){
            return false;
        }
        else{
            var a = [];
            var correctN = 0;
            for(var i = 0; i < this.elements.length; i++){
                a[i] = this.elements[i];
            }
            for(var i = 0; i < this.elements.length; i++){
                for(var j = 0; j < otherSet.elements.length; j++){
                    if(a[i] == otherSet.elements[j]){
                        a[i] = "axxwt";
                    }
                }
            }

            for(var i = 0; i < a.length; i++){
                if(a[i] == "axxwt"){
                    correctN += 1;
                }
            }

            if(correctN == this.elements.length){
                return true;
            }
            else{
                return false;
            }
        }
    },

    isDiscreteSet:function(otherSet){
        var a = [];
        var correctN = 0;
        for(var i = 0; i < this.elements.length; i++){
            a[i] = this.elements[i];
        }
        for(var i = 0; i < this.elements.length; i++){
            for(var j = 0; j < otherSet.elements.length; j++){
                if(a[i] == otherSet.elements[j]){
                    a[i] = "axxwt";
                }
            }
        }

        for(var i = 0; i < a.length; i++){
            if(a[i] == "axxwt"){
                correctN += 1;
            }
        }

        if(correctN == 0){
            return true;
        }
        else{
            return false;
        }
    },

    isConcurrentSet:function(otherSet){
        var a = [];
        var correctN = 0;
        for(var i = 0; i < this.elements.length; i++){
            a[i] = this.elements[i];
        }
        for(var i = 0; i < this.elements.length; i++){
            for(var j = 0; j < otherSet.elements.length; j++){
                if(a[i] == otherSet.elements[j]){
                    a[i] = "axxwt";
                }
            }
        }

        for(var i = 0; i < a.length; i++){
            if(a[i] == "axxwt"){
                correctN += 1;
            }
        }

        if(correctN != 0){
            return true;
        }
        else{
            return false;
        }
    },

    getIntersection:function(otherSet){
        var intersect = [];
        for(var i = 0; i < this.elements.length; i++){
            for(var j = 0; j < otherSet.elements.length; j++){
                if(this.elements[i] == otherSet.elements[j]){
                    intersect.push(this.elements[i]);
                }
            }
        }
        intersect.sort(function(a,b){return a-b});
        var c = new Set({type:Set.ELEMENTS, elements:intersect});
        var cStr = "";
        if(otherSet.type == Set.ELEMENTS){
            cStr = "'nin";
        }
        else if(otherSet.type == Set.FACTORS || otherSet.type == Set.MULTIPLIES){
            cStr = "'nın";
        }
        else{
            cStr = "'ın"
        }
        c.definition = ""+this.definition+" ile "+otherSet.definition+""+cStr+" kesişimi";

        return c;
    },

    getUnion:function(otherSet){
        var union = [];

        for(var i = 0; i < this.elements.length; i++){
            union.push(this.elements[i]);
        }

        for(var j = 0; j < otherSet.elements.length; j++){
            if(union.indexOf(otherSet.elements[j]) == -1){
                union.push(otherSet.elements[j]);
            }
        }

        union.sort(function(a,b){return a-b});
        var c = new Set({type:Set.ELEMENTS, elements:union});
        var cStr = "";
        if(otherSet.type == Set.ELEMENTS){
            cStr = "'nin";
        }
        else if(otherSet.type == Set.FACTORS || otherSet.type == Set.MULTIPLIES){
            cStr = "'nın";
        }
        else{
            cStr = "'ın"
        }
        c.definition = ""+this.definition+" ile "+otherSet.definition+""+cStr+" birleşimi";
        return c;
    },

    getDifference : function(otherSet){
        var difference = [];

        for(var i = 0; i < this.elements.length; i++){
            if(otherSet.elements.indexOf(this.elements[i]) == -1){
                difference.push(this.elements[i]);
            }
        }

        difference.sort(function(a,b){return a-b});

        var c = new Set({type:Set.ELEMENTS, elements:difference});
        var cStr = "";
        if(otherSet.type == Set.ELEMENTS){
            cStr = "'nin";
        }
        else if(otherSet.type == Set.FACTORS || otherSet.type == Set.MULTIPLIES){
            cStr = "'nın";
        }
        else{
            cStr = "'ın"
        }
        c.definition = ""+this.definition+" ile "+otherSet.definition+""+cStr+" farkı";
        return c;
    },

    getSubSets:function(){

    },

    getComplement : function(universalSet){
        return universalSet.getDifference(this);
    },

    getDefinitionString : function(setLetter){
        if(setLetter == undefined){
            var definitionString = "{ "+this.definition+" }";
        }
        else{
            var definitionString = ""+setLetter+" = { "+this.definition+" }";
        }

        return definitionString;
    },

    getElementsString : function(setLetter){
        if(setLetter == undefined){
            var elementsString = "{ ";
        }
        else{
            var elementsString = ""+setLetter+" = { ";
        }
        for(var i = 0; i < this.elements.length-1; i++){
            elementsString += ""+this.elements[i]+", ";
        }
        elementsString += this.elements[this.elements.length-1]+" }";

        return elementsString;
    },

    getValueStr:function(value,opt){
        if(opt == undefined){
            opt = 0;
        }
        if(opt == 0){
            var a = "";
            if(value % 90 == 0){
                a += value+"'dan";
            }
            else if(value % 80 == 0 || value % 50 == 0 ){
                a += value+"'den";
            }
            else if(value % 70 == 0){
                a += value+"'ten";
            }
            else if(value % 60 == 0 || value % 40 == 0){
                a += value+"'tan";
            }
            else if(value % 30 == 0){
                a += value+"'dan";
            }
            else if(value % 20 == 0){
                a += value+"'den";
            }
            else if(value % 10 == 0){
                a += value+"'dan";
            }
            else if(value % 10 == 1 || value % 10 == 2 || value % 10 == 7 || value % 10 == 8){
                a += value+"'den";
            }
            else if(value % 10 == 3 || value % 10 == 4 || value % 10 == 5){
                a += value+"'ten";
            }
            else if(value % 10 == 6 || value % 10 == 9){
                a += value+"'dan";
            }
        }
        else if(opt == 1){
            var a = "";
            if(value % 90 == 0 || value % 60 == 0){
                a += value+"'ın";
            }
            else if(value % 80 == 0 || value % 70 == 0){
                a += value+"'in";
            }
            else if(value % 50 == 0){
                a += value+"'nin";
            }
            else if(value % 40 == 0){
                a += value+"'ın";
            }
            else if(value % 30 == 0){
                a += value+"'un";
            }
            else if(value % 20 == 0){
                a += value+"'nin";
            }
            else if(value % 10 == 0 || value % 10 == 9){
                a += value+"'un";
            }
            else if(value % 10 == 8 || value % 10 == 1 || value % 10 == 5){
                a += value+"'in";
            }
            else if(value % 10 == 7 || value % 10 == 2){
                a += value+"'nin";
            }
            else if(value % 10 == 6){
                a += value+"'nın";
            }
            else if(value % 10 == 4 || value % 10 == 3){
                a += value+"'ün";
            }
        }

        return a;
    },

    drawVennDiagram : function(container, topLeftPoint, setLetter){
        var size = new Size(150, 100);
        var rectangle = new Rectangle(topLeftPoint, size);
        this.vennDiagram = new Path.Oval(rectangle);
        this.vennDiagram.strokeColor = "black";

        $(container).append('<div id="vennElements2"><div id="vennLetter2"></div><div id="e12"></div><div id="e22"></div><div id="e32"></div><div id="e42"></div><div id="e52"></div><div id="e62"></div></div>');
        $('#vennElements2').css({
            position:'absolute',
            top:topLeftPoint.y+14,
            left:topLeftPoint.x+14,
            width:'150px',
            height:'100px',
            fontSize:'16px',
            textAlign:'center',
            fontWeight:'bold',
         //   border:'1px solid'
        });
        $('#vennLetter2').css({
            position:'absolute',
            top:'0px',
            left:'0px',
            width:'18px',
            height:'18px',
            fontWeight:'normal'
        });
        $('#vennLetter2').html(setLetter);
        $('#e12').css({
            position:'absolute',
            width:'24px',
            height:'20px',
        });
        $('#e22').css({
            position:'absolute',
            width:'24px',
            height:'20px',
        });
        $('#e32').css({
            position:'absolute',
            width:'24px',
            height:'20px',
        });
        $('#e42').css({
            position:'absolute',
            width:'24px',
            height:'20px',
        });
        $('#e52').css({
            position:'absolute',
            width:'24px',
            height:'20px',
        });
        $('#e62').css({
            position:'absolute',
            width:'24px',
            height:'20px',
        });

        switch(this.elements.length){
            case 0:
                break;
            case 1:{
                $('#e12').css({
                    top:'42px',
                    left:'62px'
                });
                break;
            }
            case 2:{
                $('#e12').css({
                    top:'40px',
                    left:'34px'
                });
                $('#e22').css({
                    top:'40px',
                    left:'96px',
                });
                break;
            }
            case 3:{
                $('#e12').css({
                    top:'40px',
                    left:'30px'
                });
                $('#e22').css({
                    top:'15px',
                    left:'67px',
                });
                $('#e32').css({
                    top:'61px',
                    left:'84px'
                });
                break;
            }
            case 4:{
                $('#e12').css({
                    top:'22px',
                    left:'34px'
                });
                $('#e22').css({
                    top:'22px',
                    left:'88px',
                });
                $('#e32').css({
                    top:'66px',
                    left:'34px'
                });
                $('#e42').css({
                    top:'66px',
                    left:'88px',
                });
                break;
            }
            case 5:{
                $('#e12').css({
                    top:'20px',
                    left:'32px'
                });
                $('#e22').css({
                    top:'20px',
                    left:'90px',
                });
                $('#e32').css({
                    top:'68px',
                    left:'32px'
                });
                $('#e42').css({
                    top:'68px',
                    left:'90px',
                });
                $('#e52').css({
                    top:'42px',
                    left:'62px'
                });
                break;
            }
            case 6:{
                $('#e12').css({
                    top:'42px',
                    left:'62px'
                });
                $('#e22').css({
                    top:'12px',
                    left:'70px',
                });
                $('#e32').css({
                    top:'30px',
                    left:'106px'
                });
                $('#e42').css({
                    top:'66px',
                    left:'34px',
                });
                $('#e52').css({
                    top:'18px',
                    left:'24px'
                });
                $('#e62').css({
                    top:'66px',
                    left:'90px',
                });
                break;
            }
        }

        for(var i = 1; i <= this.elements.length; i++){
            $('#e'+i+"2").html("."+this.elements[i-1]);
        }
    },
});
Set.ELEMENTS = 0;
Set.SMALLER_THAN = 1;
Set.SMALLER_THAN_ODD = 2;
Set.SMALLER_THAN_EVEN = 3;
Set.SMALLER_THAN_PRIME = 4;
Set.SMALLER_THAN_GREATER_THAN = 5;
Set.SMALLER_THAN_GREATER_THAN_ODD = 6;
Set.SMALLER_THAN_GREATER_THAN_EVEN = 7;
Set.SMALLER_THAN_GREATER_THAN_PRIME = 8;
Set.FACTORS = 9;
Set.MULTIPLIES = 10;

Set.randomGenerator = function(type){

    var sType,elements,value,value1,value2;
    if(type == undefined || !isNaN(type))
        sType= Util.randomInteger(0,11);
    else
        sType = type;
    var set;
    switch(sType){
        case 1:{     // Set.SMALLER_THAN
            var randNum = Util.randomInteger(1,7);
            set = new Set({type:Set.SMALLER_THAN, value:randNum});
            break;
        }
        case 2:{     // Set.SMALLER_THAN_ODD
            var randNum = Util.randomInteger(2,12);
            set = new Set({type:Set.SMALLER_THAN_ODD, value:randNum});
            break;
        }
        case 3:{     // Set.SMALLER_THAN_EVEN
            var randNum = Util.randomInteger(1,11);
            set = new Set({type:Set.SMALLER_THAN_EVEN, value:randNum});
            break;
        }
        case 4:{     // Set.SMALLER_THAN_PRIME
            var randNum = Util.randomInteger(3,14);
            set = new Set({type:Set.SMALLER_THAN_PRIME, value:randNum});
            break;
        }
        case 5:{     // Set.SMALLER_THAN_GREATER_THAN
            var randNum1 = Util.randomInteger(1,90);
            var randNum2 = Util.randomInteger(randNum1+2, randNum1+8);
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN, value1:randNum1, value2:randNum2});
            break;
        }
        case 6:{     // Set.SMALLER_THAN_GREATER_THAN_ODD
            var randNum1 = Util.randomInteger(1,80);
            var randNum2 = randNum1+Util.randomInteger(4,13);
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_ODD, value1:randNum1, value2:randNum2});
            break;
        }
        case 7:{     // Set.SMALLER_THAN_GREATER_THAN_EVEN
            var randNum1 = Util.randomInteger(1,80);
            var randNum2 = randNum1+Util.randomInteger(4,13);
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_EVEN, value1:randNum1, value2:randNum2});
            break;
        }
        case 8:{     // Set.SMALLER_THAN_GREATER_THAN_PRIME
            do{
                var randNum1 = Util.randomInteger(1, 90);
                var randNum2 = Util.randomInteger(1, 90);
                var primeNums = [];
                for(var i = randNum1+1; i < randNum2; i++){
                    if(Util.isPrimeNumber(i)){
                        primeNums.push(i);
                    }
                }
            } while(primeNums.length == 0 || primeNums.length > 6)
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_PRIME, value1:randNum1, value2:randNum2});
            break;
        }
        case 9:{     // Set.FACTORS
            do{
                var randNum = Util.randomInteger(1,97);
                var factors = [];
                factors = Util.getFactors(randNum);
            }while(factors.length > 6)
            set = new Set({type:Set.FACTORS, value:randNum});
            break;
        }
        case 10:{    // Set.MULTIPLIES
            var randNum1 = Util.randomInteger(2,17);
            var randNum2 = randNum1+randNum1*Util.randomInteger(0, 6)+Util.randomInteger(1,randNum1);
            set = new Set({type:Set.MULTIPLIES, value1:randNum1, value2:randNum2});
            break;
        }
    }

    return set;
}
