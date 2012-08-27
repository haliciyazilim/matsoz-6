var Set = Class.extend({
    init:function(opt){
        this.elements = [];
        switch(opt.type){
            case Set.ELEMENTS:
                this.definition = ""+opt.elements.length+" elemanlı küme";
                this.elements = [];
                for(var i=0;i<opt.elements.length;i++){
                    var isExist;
                    //remove the duplicates
                    for(var j=0;j<this.elements.length;j++)
                        if(opt.elements[i] == this.elements[j])
                            isExist = true;
                    if(isExist)
                        continue;
                    this.elements.push(opt.elements[i])
                }
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
            case Set.DIGIT:
                this.definition = "rakamlar";
                for(var i = 0; i < 10; i++){
                    this.elements.push(i);
                }
                this.type = Set.DIGIT;
                break;
            case Set.DIGIT_ODD:
                this.definition = "tek rakamlar";
                for(var i = 0; i < 10; i++){
                    if(i % 2 == 1){
                        this.elements.push(i);
                    }
                }
                this.type = Set.DIGIT_ODD;
                break;
            case Set.DIGIT_EVEN:
                this.definition = "çift rakamlar";
                for(var i = 0; i < 10; i++){
                    if(i % 2 == 0){
                        this.elements.push(i);
                    }
                }
                this.type = Set.DIGIT_EVEN;
                break;
            case Set.SMALLER_THAN_DIGIT:
                this.definition = ""+this.getValueStr(opt.value)+" küçük rakamlar";
                if(opt.value > 10){
                    var limit = 10;
                }
                else{
                    var limit = opt.value;
                }
                for(var i = 0; i < limit; i++){
                    this.elements.push(i);
                }
                this.type = Set.SMALLER_THAN_DIGIT;
                break;
            case Set.SMALLER_THAN_DIGIT_ODD:
                this.definition = ""+this.getValueStr(opt.value)+" küçük tek rakamlar";
                if(opt.value > 10){
                    var limit = 10;
                }
                else{
                    var limit = opt.value;
                }
                for(var i = 0; i < limit; i++){
                    if(i % 2 == 1){
                        this.elements.push(i);
                    }
                }
                this.type = Set.SMALLER_THAN_DIGIT_ODD;
                break;
            case Set.SMALLER_THAN_DIGIT_EVEN:
                this.definition = ""+this.getValueStr(opt.value)+" küçük çift rakamlar";
                if(opt.value > 10){
                    var limit = 10;
                }
                else{
                    var limit = opt.value;
                }
                for(var i = 0; i < limit; i++){
                    if(i % 2 == 0){
                        this.elements.push(i);
                    }
                }
                this.type = Set.SMALLER_THAN_DIGIT_EVEN;
                break;
            case Set.GREATER_THAN_DIGIT:
                this.definition = ""+this.getValueStr(opt.value)+" büyük rakamlar";
                if(opt.value < 0){
                    var limit = 0;
                }
                else{
                    var limit = opt.value;
                }
                for(var i = limit+1; i < 10; i++){
                    this.elements.push(i);
                }
                this.type = Set.GREATER_THAN_DIGIT;
                break;
            case Set.GREATER_THAN_DIGIT_ODD:
                this.definition = ""+this.getValueStr(opt.value)+" büyük tek rakamlar";
                if(opt.value < 0){
                    var limit = 0;
                }
                else{
                    var limit = opt.value;
                }
                for(var i = limit+1; i < 10; i++){
                    if(i % 2 == 1){
                        this.elements.push(i);
                    }
                }
                this.type = Set.GREATER_THAN_DIGIT_ODD;
                break;
            case Set.GREATER_THAN_DIGIT_EVEN:
                this.definition = ""+this.getValueStr(opt.value)+" büyük çift rakamlar";
                if(opt.value < 0){
                    var limit = 0;
                }
                else{
                    var limit = opt.value;
                }
                for(var i = limit+1; i < 10; i++){
                    if(i % 2 == 0){
                        this.elements.push(i);
                    }
                }
                this.type = Set.GREATER_THAN_DIGIT_EVEN;
                break;
            case Set.SMALLER_THAN_GREATER_THAN_DIGIT:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük rakamlar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    this.elements.push(i);
                }
                this.type = Set.SMALLER_THAN_GREATER_THAN_DIGIT;
                break;
            case Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük tek rakamlar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    if(i % 2 == 1){
                        this.elements.push(i);
                    }
                }
                this.type = Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD;
                break;
            case Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük çift rakamlar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    if(i % 2 == 0){
                        this.elements.push(i);
                    }
                }
                this.type = Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN;
                break;
            case Set.SMALLER_THAN_LETTER:
                this.definition = ""+this.getValueStr(opt.value,2)+" önce gelen harfler";
                var startIndex = 0;
                var endIndex = Set.turkishLetters.indexOf(opt.value);
                for(var i = startIndex; i < endIndex; i++){
                    this.elements.push(Set.turkishLetters[i]);
                }
                this.type = Set.SMALLER_THAN_LETTER;
                break;
            case Set.GREATER_THAN_LETTER:
                this.definition = ""+this.getValueStr(opt.value,2)+" sonra gelen harfler";
                var startIndex = Set.turkishLetters.indexOf(opt.value)+1;
                var endIndex = 29;
                for(var i = startIndex; i < endIndex; i++){
                    this.elements.push(Set.turkishLetters[i]);
                }
                this.type = Set.GREATER_THAN_LETTER;
                break;
            case Set.SMALLER_THAN_GREATER_THAN_LETTER:
            //    this.definition = ""+this.getValueStr(opt.value1,2)+" sonra "+this.getValueStr(opt.value2,2) +" önce gelen harfler";
                this.definition = ""+opt.value1+" ile "+opt.value2+" arasındaki harfler";
                var startIndex = Set.turkishLetters.indexOf(opt.value1)+1;
                var endIndex = Set.turkishLetters.indexOf(opt.value2);
                for(var i = startIndex; i < endIndex; i++){
                    this.elements.push(Set.turkishLetters[i]);
                }
                this.type = Set.SMALLER_THAN_GREATER_THAN_LETTER;
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

    isSubsetOf:function(otherSet){
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

    isDisjointWith:function(otherSet){
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

    isIntersectingWith:function(otherSet){
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
        else if(opt == 2){
            var a = "";
            var d = ["a","ı","o", "u"];
            if(d.indexOf(value) == -1){
                a += value+"'den";
            }
            else{
                a += value+"'dan";
            }
        }

        return a;
    },

    getRandomSubset:function(){
        var set;
        if(this.type == Set.ELEMENTS){
            var index1 = Util.randomInteger(0,5);
            var index2 = Util.randomInteger(index1+1,6);
            set = new Set({
                type:Set.ELEMENTS,
                elements:this.elements.slice(index1,index2)
            });
        }
        else{
            do
                set = Set.randomGenerator();
            while(set == undefined || !set.isSubsetOf(this));
        }
        return set;
    },
    getRandomDisjointSet:function(){
        var set;

        do
            set = Set.randomGenerator();
        while(set == undefined || !set.isDisjointWith(this));
        return set;
    },
    getRandomIntersectingSet:function(){
        var set;
        do
            set = Set.randomGenerator();
        while(set == undefined || !set.isIntersectingWith(this));
        return set;
    },

    drawVennDiagram : function(container, topLeftPoint, setLetter){
        if(this.elements.length <= 6){
            var size = new Size(150, 100);
            var rectangle = new Rectangle(topLeftPoint, size);
            this.vennDiagram = new Path.Oval(rectangle);
            this.vennDiagram.strokeColor = "black";

            this.div = document.createElement('div');
            $(container).append(this.div);

            $(this.div).append('<div id="vennElements2"><div id="vennLetter2"></div><div id="e12"></div><div id="e22"></div><div id="e32"></div><div id="e42"></div><div id="e52"></div><div id="e62"></div></div>');
            $('#vennElements2', this.div).css({
                position:'absolute',
                top:topLeftPoint.y+parseInt($(container).css("padding")),
                left:topLeftPoint.x+parseInt($(container).css("padding")),
                width:'150px',
                height:'100px',
                fontSize:'16px',
                textAlign:'center',
                fontWeight:'bold',
             //   border:'1px solid'
            });
            $('#vennLetter2', this.div).css({
                position:'absolute',
                top:'0px',
                left:'0px',
                width:'18px',
                height:'18px',
                fontWeight:'normal'
            });
            $('#vennLetter2', this.div).html(setLetter);
            $('#e12', this.div).css({
                position:'absolute',
                width:'24px',
                height:'20px',
            });
            $('#e22', this.div).css({
                position:'absolute',
                width:'24px',
                height:'20px',
            });
            $('#e32', this.div).css({
                position:'absolute',
                width:'24px',
                height:'20px',
            });
            $('#e42', this.div).css({
                position:'absolute',
                width:'24px',
                height:'20px',
            });
            $('#e52', this.div).css({
                position:'absolute',
                width:'24px',
                height:'20px',
            });
            $('#e62', this.div).css({
                position:'absolute',
                width:'24px',
                height:'20px',
            });

            switch(this.elements.length){
                case 0:
                    break;
                case 1:{
                    $('#e12', this.div).css({
                        top:'42px',
                        left:'62px'
                    });
                    break;
                }
                case 2:{
                    $('#e12', this.div).css({
                        top:'40px',
                        left:'34px'
                    });
                    $('#e22', this.div).css({
                        top:'40px',
                        left:'96px',
                    });
                    break;
                }
                case 3:{
                    $('#e12', this.div).css({
                        top:'40px',
                        left:'30px'
                    });
                    $('#e22', this.div).css({
                        top:'15px',
                        left:'67px',
                    });
                    $('#e32', this.div).css({
                        top:'61px',
                        left:'84px'
                    });
                    break;
                }
                case 4:{
                    $('#e12', this.div).css({
                        top:'22px',
                        left:'34px'
                    });
                    $('#e22', this.div).css({
                        top:'22px',
                        left:'88px',
                    });
                    $('#e32', this.div).css({
                        top:'66px',
                        left:'34px'
                    });
                    $('#e42', this.div).css({
                        top:'66px',
                        left:'88px',
                    });
                    break;
                }
                case 5:{
                    $('#e12', this.div).css({
                        top:'20px',
                        left:'32px'
                    });
                    $('#e22', this.div).css({
                        top:'20px',
                        left:'90px',
                    });
                    $('#e32', this.div).css({
                        top:'68px',
                        left:'32px'
                    });
                    $('#e42', this.div).css({
                        top:'68px',
                        left:'90px',
                    });
                    $('#e52', this.div).css({
                        top:'42px',
                        left:'62px'
                    });
                    break;
                }
                case 6:{
                    $('#e12', this.div).css({
                        top:'42px',
                        left:'62px'
                    });
                    $('#e22', this.div).css({
                        top:'12px',
                        left:'70px',
                    });
                    $('#e32', this.div).css({
                        top:'30px',
                        left:'106px'
                    });
                    $('#e42', this.div).css({
                        top:'66px',
                        left:'34px',
                    });
                    $('#e52', this.div).css({
                        top:'18px',
                        left:'24px'
                    });
                    $('#e62', this.div).css({
                        top:'66px',
                        left:'90px',
                    });
                    break;
                }
            }
        }
        else{
            var size = new Size(180,110);
            var rectangle = new Rectangle(topLeftPoint, size);
            this.vennDiagram = new Path.Oval(rectangle);
            this.vennDiagram.strokeColor = "black";

            this.div = document.createElement('div');
            $(container).append(this.div);

            $(this.div).append('<div id="vennElements2"><div id="vennLetter2"></div>' +
                                '<div id="e12"></div><div id="e22"></div><div id="e32"></div>' +
                                '<div id="e42"></div><div id="e52"></div><div id="e62"></div>' +
                                '<div id="e72"></div><div id="e82"></div><div id="e92"></div>' +
                                '<div id="e102"></div></div>');

            $('#vennElements2', this.div).css({
                position:'absolute',
                top:topLeftPoint.y+parseInt($(container).css("padding")),
                left:topLeftPoint.x+parseInt($(container).css("padding")),
                width:'180px',
                height:'110px',
                fontSize:'16px',
                textAlign:'center',
                fontWeight:'bold',
           //     border:'1px solid'
            });
            $('#vennLetter2', this.div).css({
                position:'absolute',
                top:'0px',
                left:'0px',
                width:'18px',
                height:'18px',
                fontWeight:'normal'
            });
            $('#vennLetter2', this.div).html(setLetter);

            $('#e12', this.div).css({
                position:'absolute',
                width:'24px',
                height:'20px',
            });
            $('#e22', this.div).css({
                position:'absolute',
                width:'24px',
                height:'20px',
            });
            $('#e32', this.div).css({
                position:'absolute',
                width:'24px',
                height:'20px',
            });
            $('#e42', this.div).css({
                position:'absolute',
                width:'24px',
                height:'20px',
            });
            $('#e52', this.div).css({
                position:'absolute',
                width:'24px',
                height:'20px',
            });
            $('#e62', this.div).css({
                position:'absolute',
                width:'24px',
                height:'20px',
            });
            $('#e72', this.div).css({
                position:'absolute',
                width:'24px',
                height:'20px',
            });
            $('#e82', this.div).css({
                position:'absolute',
                width:'24px',
                height:'20px',
            });
            $('#e92', this.div).css({
                position:'absolute',
                width:'24px',
                height:'20px',
            });
            $('#e102', this.div).css({
                position:'absolute',
                width:'24px',
                height:'20px',
            });
            switch(this.elements.length){
                case 7:
                    $('#e12', this.div).css({
                        top:'48px',
                        left:'76px'
                    });
                    $('#e22', this.div).css({
                        top:'20px',
                        left:'74px'
                    });
                    $('#e32', this.div).css({
                        top:'30px',
                        left:'42px'
                    });
                    $('#e42', this.div).css({
                        top:'80px',
                        left:'76px'
                    });
                    $('#e52', this.div).css({
                        top:'66px',
                        left:'40px'
                    });
                    $('#e62', this.div).css({
                        top:'30px',
                        left:'116px'
                    });
                    $('#e72', this.div).css({
                        top:'64px',
                        left:'120px'
                    });
                    break;
                case 8:
                    $('#e12', this.div).css({
                        top:'46px',
                        left:'28px'
                    });
                    $('#e22', this.div).css({
                        top:'16px',
                        left:'78px'
                    });
                    $('#e32', this.div).css({
                        top:'18px',
                        left:'42px'
                    });
                    $('#e42', this.div).css({
                        top:'80px',
                        left:'76px'
                    });
                    $('#e52', this.div).css({
                        top:'74px',
                        left:'36px'
                    });
                    $('#e62', this.div).css({
                        top:'30px',
                        left:'116px'
                    });
                    $('#e72', this.div).css({
                        top:'64px',
                        left:'120px'
                    });
                    $('#e82', this.div).css({
                        top:'46px',
                        left:'76px'
                    });
                    break;
                case 9:
                    $('#e12', this.div).css({
                        top:'46px',
                        left:'28px'
                    });
                    $('#e22', this.div).css({
                        top:'16px',
                        left:'76px'
                    });
                    $('#e32', this.div).css({
                        top:'18px',
                        left:'42px'
                    });
                    $('#e42', this.div).css({
                        top:'80px',
                        left:'70px'
                    });
                    $('#e52', this.div).css({
                        top:'74px',
                        left:'36px'
                    });
                    $('#e62', this.div).css({
                        top:'22px',
                        left:'112px'
                    });
                    $('#e72', this.div).css({
                        top:'74px',
                        left:'108px'
                    });
                    $('#e82', this.div).css({
                        top:'46px',
                        left:'78px'
                    });
                    $('#e92', this.div).css({
                        top:'46px',
                        left:'124px'
                    });
                    break;
                case 10:
                    $('#e12', this.div).css({
                        top:'46px',
                        left:'64px'
                    });
                    $('#e22', this.div).css({
                        top:'16px',
                        left:'76px'
                    });
                    $('#e32', this.div).css({
                        top:'18px',
                        left:'42px'
                    });
                    $('#e42', this.div).css({
                        top:'80px',
                        left:'70px'
                    });
                    $('#e52', this.div).css({
                        top:'74px',
                        left:'36px'
                    });
                    $('#e62', this.div).css({
                        top:'22px',
                        left:'112px'
                    });
                    $('#e72', this.div).css({
                        top:'72px',
                        left:'106px'
                    });
                    $('#e82', this.div).css({
                        top:'46px',
                        left:'98px'
                    });
                    $('#e92', this.div).css({
                        top:'46px',
                        left:'132px'
                    });
                    $('#e102', this.div).css({
                        top:'44px',
                        left:'24px'
                    });
                    break;

            };
        }

        for(var i = 1; i <= this.elements.length; i++){
            $('#e'+i+"2", this.div).html("."+this.elements[i-1]);
        }
    },

    drawIntersectingVennDiagram : function(container, topLeftPoint, setLetter1, otherSet, setLetter2){

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
Set.DIGIT = 11;
Set.DIGIT_ODD = 12;
Set.DIGIT_EVEN = 13;
Set.SMALLER_THAN_DIGIT = 14;
Set.SMALLER_THAN_DIGIT_ODD = 15;
Set.SMALLER_THAN_DIGIT_EVEN = 16;
Set.GREATER_THAN_DIGIT = 17;
Set.GREATER_THAN_DIGIT_ODD = 18;
Set.GREATER_THAN_DIGIT_EVEN = 19;
Set.SMALLER_THAN_GREATER_THAN_DIGIT = 20;
Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD = 21;
Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN = 22;
Set.SMALLER_THAN_LETTER = 23;
Set.GREATER_THAN_LETTER = 24;
Set.SMALLER_THAN_GREATER_THAN_LETTER = 25;

Set.turkishLetters = [];
Set.turkishLetters[0] = "a";
Set.turkishLetters[1] = "b";
Set.turkishLetters[2] = "c";
Set.turkishLetters[3] = "ç";
Set.turkishLetters[4] = "d";
Set.turkishLetters[5] = "e";
Set.turkishLetters[6] = "f";
Set.turkishLetters[7] = "g";
Set.turkishLetters[8] = "ğ";
Set.turkishLetters[9] = "h";
Set.turkishLetters[10] = "ı";
Set.turkishLetters[11] = "i";
Set.turkishLetters[12] = "j";
Set.turkishLetters[13] = "k";
Set.turkishLetters[14] = "l";
Set.turkishLetters[15] = "m";
Set.turkishLetters[16] = "n";
Set.turkishLetters[17] = "o";
Set.turkishLetters[18] = "ö";
Set.turkishLetters[19] = "p";
Set.turkishLetters[20] = "r";
Set.turkishLetters[21] = "s";
Set.turkishLetters[22] = "ş";
Set.turkishLetters[23] = "t";
Set.turkishLetters[24] = "u";
Set.turkishLetters[25] = "ü";
Set.turkishLetters[26] = "v";
Set.turkishLetters[27] = "y";
Set.turkishLetters[28] = "z";


Set.randomGenerator = function(type, length){

    if(length == undefined || isNaN(length)){
        length = 0;
    }
    var sType,elements,value,value1,value2;
    if(type == undefined || isNaN(type)){
        if(length == 0){
            sType= Util.randomInteger(1,26);
        }
        else{
            sType = Util.randomInteger(1,26,[11,12,13,14,15,16,17,18,19,20,21,22]);
        }
    }
    else{
        sType = type;
    }
    var set;
    switch(sType){
        case 1:{     // Set.SMALLER_THAN
            if(length == 0){
                var randNum = Util.randomInteger(1,7);
            }
            else{
                var randNum = length;
            }
            set = new Set({type:Set.SMALLER_THAN, value:randNum});
            break;
        }
        case 2:{     // Set.SMALLER_THAN_ODD
            if(length == 0){
                var randNum = Util.randomInteger(2,12);
            }
            else{
                var randNum = 2*length;
            }
            set = new Set({type:Set.SMALLER_THAN_ODD, value:randNum});
            break;
        }
        case 3:{     // Set.SMALLER_THAN_EVEN
            if(length == 0){
                var randNum = Util.randomInteger(1,11);
            }
            else{
                var randNum = 2*length;
            }
            set = new Set({type:Set.SMALLER_THAN_EVEN, value:randNum});
            break;
        }
        case 4:{     // Set.SMALLER_THAN_PRIME
            if(length == 0){
                var randNum = Util.randomInteger(3,14);
            }
            else{
                if(length == 7){
                    var randNum = 18;
                }
                else if(length == 8){
                    var randNum = 20;
                }
                else if(length == 9){
                    var randNum = 24;
                }
                else{
                    var randNum = 30;
                }
            }
            set = new Set({type:Set.SMALLER_THAN_PRIME, value:randNum});
            break;
        }
        case 5:{     // Set.SMALLER_THAN_GREATER_THAN
            if(length == 0){
                var randNum1 = Util.randomInteger(1,90);
                var randNum2 = Util.randomInteger(randNum1+2, randNum1+8);
            }
            else{
                var randNum1 = Util.randomInteger(1, 90);
                var randNum2 = randNum1+length+1;
            }
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN, value1:randNum1, value2:randNum2});
            break;
        }
        case 6:{     // Set.SMALLER_THAN_GREATER_THAN_ODD
            if(length == 0){
                var randNum1 = Util.randomInteger(1,80);
                var randNum2 = randNum1+Util.randomInteger(4,13);
            }
            else{
                var randNum1 = Util.randomInteger(1,78);
                var randNum2 = randNum1+2*length+1;
            }
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_ODD, value1:randNum1, value2:randNum2});
            break;
        }
        case 7:{     // Set.SMALLER_THAN_GREATER_THAN_EVEN
            if(length == 0){
                var randNum1 = Util.randomInteger(1,80);
                var randNum2 = randNum1+Util.randomInteger(4,13);
            }
            else{
                var randNum1 = Util.randomInteger(1,78);
                var randNum2 = randNum1+2*length+1;
            }
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_EVEN, value1:randNum1, value2:randNum2});
            break;
        }
        case 8:{     // Set.SMALLER_THAN_GREATER_THAN_PRIME
            if(length == 0){
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
            }
            else{
                do{
                    var randNum1 = Util.randomInteger(1,30);
                    var randNum2 = Util.randomInteger(randNum1+10, 100);
                    var primeNums = [];
                    for(var i = randNum1+1; i < randNum2; i++){
                        if(Util.isPrimeNumber(i)){
                            primeNums.push(i);
                        }
                    }
                } while(primeNums.length != length)
            }
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_PRIME, value1:randNum1, value2:randNum2});
            break;
        }
        case 9:{     // Set.FACTORS
            if(length == 0){
                do{
                    var randNum = Util.randomInteger(1,97);
                    var factors = [];
                    factors = Util.getFactors(randNum);
                }while(factors.length > 6)
            }
            else{
                do{
                    var randNum = Util.randomInteger(1,99);
                    var factors = [];
                    factors = Util.getFactors(randNum);
                } while(factors.length != length)
            }
            set = new Set({type:Set.FACTORS, value:randNum});
            break;
        }
        case 10:{    // Set.MULTIPLIES
            if(length == 0){
                var randNum1 = Util.randomInteger(2,17);
                var randNum2 = randNum1+randNum1*Util.randomInteger(0, 6)+Util.randomInteger(1,randNum1);
            }
            else{
                var randNum1 = Util.randomInteger(2,10);
                var randNum2 = randNum1*length+(Util.randomInteger(1,randNum1));
            }
            set = new Set({type:Set.MULTIPLIES, value1:randNum1, value2:randNum2});
            break;
        }
        case 11:{   // Set.DIGIT
            set = new Set({type:Set.DIGIT});
            break;
        }
        case 12:{   // Set.DIGIT_ODD
            set = new Set({type:Set.DIGIT_ODD});
            break;
        }
        case 13:{   // Set.DIGIT_EVEN
            set = new Set({type:Set.DIGIT_EVEN});
            break;
        }
        case 14:{   // Set.SMALLER_THAN_DIGIT
            var randNum = Util.randomInteger(1,11);
            set = new Set({type:Set.SMALLER_THAN_DIGIT, value:randNum});
            break;
        }
        case 15:{   // Set.SMALLER_THAN_DIGIT_ODD
            var randNum = Util.randomInteger(2,11);
            set = new Set({type:Set.SMALLER_THAN_DIGIT_ODD, value:randNum});
            break;
        }
        case 16:{   // Set.SMALLER_THAN_DIGIT_EVEN
            var randNum = Util.randomInteger(1,11);
            set = new Set({type:Set.SMALLER_THAN_DIGIT_EVEN, value:randNum});
            break;
        }
        case 17:{   // Set.GREATER_THAN_DIGIT
            var randNum = Util.randomInteger(0,9);
            set = new Set({type:Set.GREATER_THAN_DIGIT, value:randNum});
            break;
        }
        case 18:{   // Set.GREATER_THAN_DIGIT_ODD
            var randNum = Util.randomInteger(0,9);
            set = new Set({type:Set.GREATER_THAN_DIGIT_ODD, value:randNum});
            break;
        }
        case 19:{   // Set.GREATER_THAN_DIGIT_EVEN
            var randNum = Util.randomInteger(0,8);
            set = new Set({type:Set.GREATER_THAN_DIGIT_EVEN, value:randNum});
            break;
        }
        case 20:{   // Set.SMALLER_THAN_GREATER_THAN_DIGIT
            var randNum1 = Util.randomInteger(0,8);
            var randNum2 = Util.randomInteger(randNum1+2, 10);
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT, value1:randNum1, value2:randNum2});
            break;
        }
        case 21:{   // Set.SMALLER_THAN_GREATER_THAN_ODD
            var randNum1 = Util.randomInteger(0,8);
            var randNum2 = Util.randomInteger(randNum1+3, 10);
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD, value1:randNum1, value2:randNum2});
            break;
        }
        case 22:{   // Set.SMALLER_THAN_GREATER_THAN_EVEN
            var randNum1 = Util.randomInteger(0,8);
            var randNum2 = Util.randomInteger(randNum1+3, 10);
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN, value1:randNum1, value2:randNum2});
            break;
        }
        case 23:{
            var randNum = Util.randomInteger(1,29);
            set = new Set({type:Set.SMALLER_THAN_LETTER, value:Set.turkishLetters[randNum]});
            break;
        }
        case 24:{
            var randNum = Util.randomInteger(0,28);
            set = new Set({type:Set.GREATER_THAN_LETTER, value:Set.turkishLetters[randNum]});
            break;
        }
        case 25:{
            var randNum1 = Util.randomInteger(0,27);
            var randNum2 = Util.randomInteger(randNum1+2, 29);
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_LETTER, value1:Set.turkishLetters[randNum1], value2:Set.turkishLetters[randNum2]});
            break;
        }
    }

    return set;
};
