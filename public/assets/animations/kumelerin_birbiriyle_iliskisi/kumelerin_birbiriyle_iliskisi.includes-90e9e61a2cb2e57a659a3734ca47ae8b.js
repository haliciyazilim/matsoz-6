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
                this.elements.sort(function(a,b){return a-b});
                break;
            case Set.SMALLER_THAN:
                this.definition = ""+this.getValueStr(opt.value)+" küçük doğal sayılar";
                for(var i = 0; i < opt.value; i++){
                    this.elements.push(i);
                }
                break;

            case Set.SMALLER_THAN_ODD:
                this.definition = ""+this.getValueStr(opt.value)+" küçük tek doğal sayılar";
                for(var i = 0; i < opt.value; i++){
                    if(i % 2 == 1){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.SMALLER_THAN_EVEN:
                this.definition = ""+this.getValueStr(opt.value)+" küçük çift doğal sayılar";
                for(var i = 0; i < opt.value; i++){
                    if(i % 2 == 0){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.SMALLER_THAN_PRIME:
                this.definition = ""+this.getValueStr(opt.value)+" küçük asal sayılar";
                for(var i = 0; i < opt.value; i++){
                    if(Util.isPrimeNumber(i)){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.SMALLER_THAN_GREATER_THAN:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük doğal sayılar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    this.elements.push(i);
                }
                break;
            case Set.SMALLER_THAN_GREATER_THAN_ODD:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük tek doğal sayılar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    if(i % 2 == 1){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.SMALLER_THAN_GREATER_THAN_EVEN:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük çift doğal sayılar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    if(i % 2 == 0){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.SMALLER_THAN_GREATER_THAN_PRIME:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük asal sayılar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    if(Util.isPrimeNumber(i)){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.FACTORS:
                this.definition = ""+this.getValueStr(opt.value, 1)+" çarpanları";
                a = [];
                a = Util.getFactors(opt.value);
                for(var i = 0; i < a.length; i++){
                    this.elements.push(a[i]);
                }
                break;
            case Set.MULTIPLIES:
                this.definition = ""+this.getValueStr(opt.value1,1)+" "+this.getValueStr(opt.value2)+" küçük katları";
                for(var i = 1; i < opt.value2/opt.value1; i++){
                    this.elements.push(opt.value1*i);
                }
                break;
            case Set.DIGIT:
                this.definition = "rakamlar";
                for(var i = 0; i < 10; i++){
                    this.elements.push(i);
                }
                this.type = opt.type;
                break;
            case Set.DIGIT_ODD:
                this.definition = "tek rakamlar";
                for(var i = 0; i < 10; i++){
                    if(i % 2 == 1){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.DIGIT_EVEN:
                this.definition = "çift rakamlar";
                for(var i = 0; i < 10; i++){
                    if(i % 2 == 0){
                        this.elements.push(i);
                    }
                }
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
                break;
            case Set.SMALLER_THAN_GREATER_THAN_DIGIT:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük rakamlar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    this.elements.push(i);
                }
                break;
            case Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük tek rakamlar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    if(i % 2 == 1){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük çift rakamlar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    if(i % 2 == 0){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.SMALLER_THAN_LETTER:
                this.definition = ""+this.getValueStr(opt.value,2)+" önce gelen harfler";
                var startIndex = 0;
                var endIndex = Set.turkishLetters.indexOf(opt.value);
                for(var i = startIndex; i < endIndex; i++){
                    this.elements.push(Set.turkishLetters[i]);
                }
                break;
            case Set.GREATER_THAN_LETTER:
                this.definition = ""+this.getValueStr(opt.value,2)+" sonra gelen harfler";
                var startIndex = Set.turkishLetters.indexOf(opt.value)+1;
                var endIndex = 29;
                for(var i = startIndex; i < endIndex; i++){
                    this.elements.push(Set.turkishLetters[i]);
                }
                break;
            case Set.SMALLER_THAN_GREATER_THAN_LETTER:
            //    this.definition = ""+this.getValueStr(opt.value1,2)+" sonra "+this.getValueStr(opt.value2,2) +" önce gelen harfler";
                this.definition = ""+opt.value1+" ile "+opt.value2+" arasındaki harfler";
                var startIndex = Set.turkishLetters.indexOf(opt.value1)+1;
                var endIndex = Set.turkishLetters.indexOf(opt.value2);
                for(var i = startIndex; i < endIndex; i++){
                    this.elements.push(Set.turkishLetters[i]);
                }
                break;
            case Set.WORDS:
                var a = Util.randomInteger(0,15);
                var word = Set.wordsArray[a];
                this.definition = "\""+word+"\" sözcüğündeki harfler";
                for(var i = 0; i < word.length; i++){
                    if(this.elements.indexOf(word[i]) == -1){
                        this.elements.push(word[i]);
                    }
                }
                break;
            case Set.SMALLER_THAN_INTEGER:
                this.definition = ""+this.getValueStr(opt.value)+" küçük pozitif tam sayılar";
                for(var i = 1; i < opt.value; i++){
                    this.elements.push(i);
                }
                break;
        }
        this.type = opt.type;
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
        var other = [];
        for(var t = 0; t < otherSet.elements.length; t++){
            other.push(otherSet.elements[t]);
        }

        for(var i = 0; i < this.elements.length; i++){
            union.push(this.elements[i]);
        }

        for(var j = 0; j < other.length; j++){
            for(var k = 0; k < this.elements.length; k++){
                if(other[j] == this.elements[k]){
                    other[j] = "axxwt";
                    break;
                }
            }
        }

        for(var m = 0; m < other.length; m ++){
            if(other[m] != "axxwt"){
                union.push(other[m]);
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
        var th = [];
        var num;

        for(var i = 0; i < this.elements.length; i++){
            th.push(this.elements[i]);
        }

        for(var j = 0; j < th.length; j++){
            for(var k = 0, num = 0; k < otherSet.elements.length; k++){
                if(th[j] != otherSet.elements[k]){
                    num += 1;
                }
            }
            if(num == otherSet.elements.length){
                difference.push(th[j]);
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

    removeVennDiagram : function(){
        this.vennDiagram.remove();
    },
    drawVennDiagram : function(container, topLeftPoint, setLetter){
		var noOfElements = this.elements.length;
		this.vennDiagram = new Group();
		
		var vennSize = new Size(this.elements.length*10*1.8 + 110, /*this.elements.length*6 +*/ 128);
		
		var vennBoundingBox = new Rectangle(topLeftPoint, vennSize);
        var letter = new PointText(topLeftPoint.add(5,20));
        letter.content = setLetter;
        letter.set_style({fontSize:13});
        this.letter = letter;
		var oval = Path.Oval(vennBoundingBox);
		oval.strokeColor = 'black';
		oval.fillColor = new RgbColor(1, 1, 1, 0);
		this.oval = oval;
		var elementBoxSize = new Size(vennSize.width/(noOfElements+0.8), vennSize.height/(noOfElements+0.8))

		if (elementBoxSize.width < 44)
			elementBoxSize.width = 44;

		if (elementBoxSize.height < 30)
			elementBoxSize.height = 30;
		
		var elementLocations = [];
		
		var isAvailable = function (point) {
			var point2 = point.add(elementBoxSize.width, -elementBoxSize.height);
			var point3 = point.add(elementBoxSize.width, 0);
			var point4 = point.add(0, -elementBoxSize.height);						
			
			var corners = [
				point,
				point2,
				point3,
				point4
			]
			
			for (var i = 0; i < 4; i++) {
				if (!oval.hitTest(corners[i], { fill: true, stroke: false, segments: true, tolerance: -16 })) {
					return false;
				}
				
				for (var j = 0; j < elementLocations.length; j++) {
					var otherRect = new Rectangle(new Point(elementLocations[j].x, elementLocations[j].y - elementBoxSize.height),
													elementBoxSize);
													
					// console.log(otherRect, corners[i]);
													
					if (otherRect.contains(corners[i])) {
						return false;
					}
				}
			}
			return true;
		}
		
		for (var i = 0; i < noOfElements; i++) {
			var point;
			var trials = 0;
			do {
				point = new Point(Util.randomInteger(topLeftPoint.x/5, (topLeftPoint.x + vennSize.width)/5)*5,
				 				Util.randomInteger(topLeftPoint.y/5, (topLeftPoint.y+ vennSize.height)/5)*5);
				
				trials++;
			} while (!isAvailable(point) && trials < noOfElements*20);
						
			var text = new PointText(point.add(elementBoxSize.width/2 - 10, -elementBoxSize.height/2 + 8));
			text.set_style({
				fontSize: 14
			})
			text.content = "."+this.elements[i];
			this.vennDiagram.addChild(text);
			elementLocations.push(point);
			if (trials == noOfElements*20) {
				this.removeVennDiagram();
				this.vennDiagram = new Group();
				elementLocations = [];
				i = -1;
			}
		}
    }
});


Set.ELEMENTS = 0;
Set.SMALLER_THAN = 1;   // length option
Set.SMALLER_THAN_ODD = 2;   // length option
Set.SMALLER_THAN_EVEN = 3;  // length option
Set.SMALLER_THAN_PRIME = 4;     // length option
Set.SMALLER_THAN_GREATER_THAN = 5;  // length option
Set.SMALLER_THAN_GREATER_THAN_ODD = 6;  // length option
Set.SMALLER_THAN_GREATER_THAN_EVEN = 7;     // length option
Set.SMALLER_THAN_GREATER_THAN_PRIME = 8;    // length option
Set.FACTORS = 9;    // length option
Set.MULTIPLIES = 10;    // length option
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
Set.SMALLER_THAN_LETTER = 23;   // length option
Set.GREATER_THAN_LETTER = 24;   // length option
Set.SMALLER_THAN_GREATER_THAN_LETTER = 25;  // length option
Set.WORDS = 26;
Set.SMALLER_THAN_INTEGER = 27;

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

Set.wordsArray = [];

Set.wordsArray[0] = "portakal";
Set.wordsArray[1] = "türkçe";
Set.wordsArray[2] = "bilgisayar";
Set.wordsArray[3] = "okul";
Set.wordsArray[4] = "sınıf";
Set.wordsArray[5] = "aile";
Set.wordsArray[6] = "ahlak";
Set.wordsArray[7] = "küme";
Set.wordsArray[8] = "öğretmen";
Set.wordsArray[9] = "gündüz";
Set.wordsArray[10] = "gece";
Set.wordsArray[11] = "aynalar";
Set.wordsArray[12] = "kütüphane";
Set.wordsArray[13] = "kahverengi";
Set.wordsArray[14] = "mendil";


Set.randomGenerator = function(type, length){

    if(length == undefined || isNaN(length)){
        length = 0;
    }
    var sType,elements,value,value1,value2;
    if(type == undefined || isNaN(type)){
        if(length == 0){
            sType= Util.randomInteger(1,28);
        }
        else{
            sType = Util.randomInteger(1,26,[11,12,13,14,15,16,17,18,19,20,21,22,26,27]);
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
            var randNum1 = Util.randomInteger(0,7);
            var randNum2 = Util.randomInteger(randNum1+3, 10);
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD, value1:randNum1, value2:randNum2});
            break;
        }
        case 22:{   // Set.SMALLER_THAN_GREATER_THAN_EVEN
            var randNum1 = Util.randomInteger(0,7);
            var randNum2 = Util.randomInteger(randNum1+3, 10);
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN, value1:randNum1, value2:randNum2});
            break;
        }
        case 23:{   // Set.SMALLER_THAN_LETTER
            if(length == 0){
                var randNum = Util.randomInteger(1,29);
            }
            else{
                var randNum = length;
            }
            set = new Set({type:Set.SMALLER_THAN_LETTER, value:Set.turkishLetters[randNum]});
            break;
        }
        case 24:{   // Set.GREATER_THAN_LETTER
            if(length == 0){
                var randNum = Util.randomInteger(0,28);
            }
            else{
                var randNum = 28-length;
            }
            set = new Set({type:Set.GREATER_THAN_LETTER, value:Set.turkishLetters[randNum]});
            break;
        }
        case 25:{   // Set.SMALLER_THAN_GREATER_THAN_LETTER
            if(length == 0){
                var randNum1 = Util.randomInteger(0,27);
                var randNum2 = Util.randomInteger(randNum1+2, 29);
            }
            else{
                var randNum1 = Util.randomInteger(0,18);
                var randNum2 = randNum1+length+1;
            }
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_LETTER, value1:Set.turkishLetters[randNum1], value2:Set.turkishLetters[randNum2]});
            break;
        }
        case 26:{
            set = new Set({type:Set.WORDS});
            break;
        }
        case 27:{
            var randNum = Util.randomInteger(2,8);
            set = new Set({type:Set.SMALLER_THAN_INTEGER, value:randNum});
            break;
        }
    }

    return set;
};

Set.animateDifferenceSets = function(opt){
    var sets  = Set.drawSets(opt.container, opt.position, opt.sets, opt.letters);
    var originalPosition1 = sets.set1.position;
    sets.set1.position = sets.set1.position.add(-100,0);

    var originalPosition2 = sets.set2.position;
    sets.set2.position = sets.set2.position.add(100,0);

    sets.set1.animate({
        style: {
            position: originalPosition1
        },
        duration: 1000,
        delay: 1000,
        animationType: 'easeInEaseOut',
        callback:function(){

            sets.set1.children[3].remove();
        }
    });

    sets.set2.animate({
        style: {
            position: originalPosition2
        },
        duration: 1000,
        delay: 1000,
        animationType: 'easeInEaseOut'
    });
    sets.set2.children[0].animate({
        style:{
//            fillColor: new RgbColor(0.5,1,0.5,0)
        },
        duration:1000,
        delay:2000,
        callback:function(){
            sets.set2.animate({
                style:{opacity:0},
                duration:1000,
                update:function(){
//                    sets.intersect.opacity = this.opacity;
//                    sets.intersectClone.opacity = this.opacity;
                },
                callback:function(){
                    sets.set2.remove();
                    sets.intersect.remove()
                    sets.intersectClone.remove();
                    if(opt.callback)
                        opt.callback();
                    sets.set1.children[1].content = opt.letters[0] + " \\ " + opt.letters[1];
                    sets.set1.children[1].position = sets.set1.children[1].position.add(-20,0);
                }
            })

        }
    })

    return sets;
}

Set.animateSets = function(opt){
    var sets  = Set.drawSets(opt.container, opt.position, opt.sets, opt.letters);

    var originalPosition1 = sets.set1.position;
    sets.set1.position = sets.set1.position.add(-100,0);

    var originalPosition2 = sets.set2.position;
    sets.set2.position = sets.set2.position.add(100,0);


    sets.set1.animate({
        style: {
            position: originalPosition1
        },
        duration: 1000,
        delay: 1000,
        animationType: 'easeInEaseOut',
        callback:function(){

//            sets.set2.children[2].remove();
        }
    });

    sets.set2.animate({
        style: {
            position: originalPosition2
        },
        duration: 1000,
        delay: 1000,
        animationType: 'easeInEaseOut',
        callback:function(){
//            sets.set2.remove();
            if(opt.callback)
                opt.callback();
        }

    });

    return sets;
}

Set.animateComplementSets = function(opt){
    var sets  = Set.drawSets(opt.container, opt.position, opt.sets, opt.letters);
    var originalPosition1 = sets.set1.position;
    sets.set1.position = sets.set1.position.add(-100,0);
    var originalPosition2 = sets.set2.position;
    sets.set2.position = sets.set2.position.add(100,0);
    sets.set1.children[0].opacity = 0;
    sets.set1.children[0] = new Path.Rectangle(sets.set1.children[0].bounds).set_style({strokeWidth:1,strokeColor:"#000"});
    sets.set1.children[1].position = sets.set1.children[1].position.add(-15,10);
    sets.set1.children[1].fillColor = "#f00";
    sets.set1.animate({
        style: {
            position: originalPosition1
        },
        duration: 1000,
        delay: 1000,
        animationType: 'easeInEaseOut',
        callback:function(){
            sets.set1.children[1].content = opt.letters[1] + "'";
            sets.set1.children[0].insertBelow(sets.set1.children[1]);
            sets.set2.children[2].remove();
        }
    });
    sets.set2.animate({
        style: {
            position: originalPosition2
        },
        duration: 1000,
        delay: 1000,
        animationType: 'easeInEaseOut'
    });
    sets.set1.children[0].fillColor = new RgbColor(0.8,0.8,0.8,0);
    sets.set1.children[0].animate({
        style:{
            fillColor: new RgbColor(0.8,0.8,0.8,1)
        },
        duration:1000,
        delay:2000,
        init:function(){
            sets.set2.children[0].fillColor = new RgbColor(1,1,1,1);
            sets.set2.children[1].remove();
        },
        callback:function(){
            if(opt.callback)
                opt.callback();
        }
    });
    return sets;
}

Set.animateDisjointSets = function(opt){
    var sets  = Set.drawSets(opt.container, opt.position, opt.sets, opt.letters);
    var originalPosition1 = sets.set1.position;
    sets.set1.position = sets.set1.position.add(-100,0);
    var originalPosition2 = sets.set2.position;
    console.log(originalPosition1);
    console.log(originalPosition2);
    sets.set2.position = sets.set2.position.add(-75,0);
    if(opt.callback)
        opt.callback();
    return sets;
}
Set.animateEqualSets = function(opt){
    var sets  = Set.drawSets(opt.container, opt.position, opt.sets, opt.letters);

    var originalPosition1 = sets.set1.position;
    sets.set1.position = sets.set1.position.add(-100,0);

    var originalPosition2 = sets.set2.position;
    sets.set2.position = sets.set2.position.add(100,0);

    sets.set1.animate({
        style: {
            position: originalPosition1
        },
        duration: 1000,
        delay: 1000,
        animationType: 'easeInEaseOut',
        callback:function(){

            sets.set2.children[2].remove();
        }
    });

    sets.set2.animate({
        style: {
            position: originalPosition2
        },
        duration: 1000,
        delay: 1000,
        animationType: 'easeInEaseOut',
        callback:function(){
            sets.set2.remove();
            if(opt.callback)
                opt.callback();
        }

    });

    return sets;

}


Set.drawSets = function(container, topLeftPoint, sets, letters) {
	if (!sets.length) {
		throw "Usage drawSets: function(container, topLeftPoint, sets, letters)";
	}
	
	if (sets.length > 2) {
		throw "Only one or two sets are supported for drawing sets";
	}

    var singleSet = false;

	if (sets.length == 1) {
        singleSet = true;
		sets[1] = sets[0];
        letters[1] = letters[0];
	}

	var vennDiagram1 = new Group();
	var vennDiagram2 = new Group();
	
	var set1 = sets[0];
	var set2 = sets[1];

    set1.vennDiagram = vennDiagram1;
    if(!singleSet)
        set2.vennDiagram = vennDiagram2;


    var set1DifferenceSet2 = set1.getDifference(set2);
    var set2DifferenceSet1 = set2.getDifference(set1);
    var intersection = set1.getIntersection(set2);

	var noOfElements1 = sets[0].elements.length;
	var noOfElements2 = sets[1].elements.length;

	elementsSize1 = new Size(32, 22);
	elementsSize2 = new Size(32, 22);
	elementsSize3 = new Size(32, 22);

	if (set1DifferenceSet2.elements.length == 0 && set2DifferenceSet1.elements.length == 0) {
		var separation = 0;	
		
		var vennSize1 = new Size(noOfElements1*10*1.8 + 110, 128);
		var vennBoundingBox1 = new Rectangle(topLeftPoint, vennSize1);
		var textPoint1 = new Point(vennBoundingBox1.x+vennBoundingBox1.width*0.1, vennBoundingBox1.y+vennBoundingBox1.height*0.1);
		
		var vennSize2 = new Size(noOfElements2*10*1.8 + 110, 128);
		var vennBoundingBox2 = new Rectangle(topLeftPoint.add(separation, 0), vennSize2);
		var textPoint2 = new Point(vennBoundingBox2.x+vennBoundingBox2.width*0.82, vennBoundingBox2.y+vennBoundingBox2.height*0.1);
		
		var bb1 = new Rectangle();
		intersectionBoundingBox = vennBoundingBox1;
		var bb2 = new Rectangle();
		
		elementsSize2 = new Size(vennSize1.width/(noOfElements1+2.4), vennSize1.height/(noOfElements1+2.4))
		if (elementsSize2.width < 32) {
			elementsSize2.width = 32;
		}

		if (elementsSize2.height < 22) {
			elementsSize2.height = 22;
		}

        console.log(elementsSize2);
	} else if (set1DifferenceSet2.elements.length == 0) {
		var separation = -20;	
		
		var vennSize1 = new Size(noOfElements1*10*2 + 72, 92);	
		var vennBoundingBox1 = new Rectangle(topLeftPoint.add(0,18), vennSize1);
		var textPoint1 = new Point(vennBoundingBox1.x + vennBoundingBox1.width*0.82, vennBoundingBox1.y + vennBoundingBox1.height*0.1);
		
		var vennSize2 = new Size(noOfElements2*10*2 + 160, 128);
		var vennBoundingBox2 = new Rectangle(topLeftPoint.add(separation, 0), vennSize2);
		var textPoint2 = new Point(vennBoundingBox2.x+vennBoundingBox2.width*0.82, vennBoundingBox2.y+vennBoundingBox2.height*0.1);

		var bb1 = new Rectangle();
		intersectionBoundingBox = vennBoundingBox1;
		var bb2 = new Rectangle(new Point(vennBoundingBox2.x + vennBoundingBox1.width - separation, vennBoundingBox2.y), new Size(vennBoundingBox2.width - vennBoundingBox1.width + separation, vennBoundingBox2.height));
		
		elementsSize1 = new Size(vennSize1.width/(noOfElements1+0.8), vennSize1.height/(noOfElements1+0.8))
		if (elementsSize1.width < 32) {
			elementsSize1.width = 32;
		}

		if (elementsSize1.height < 28) {
			elementsSize1.height = 28;
		}
	} else if (set2DifferenceSet1.elements.length == 0) {		
		var vennSize1 = new Size(noOfElements1*10*2 + 110, 128);	
		var vennBoundingBox1 = new Rectangle(topLeftPoint, vennSize1);
		var textPoint1 = new Point(vennBoundingBox1.x+vennBoundingBox1.width*0.1, vennBoundingBox1.y+vennBoundingBox1.height*0.1);
		
		var vennSize2 = new Size(noOfElements2*10*2 + 72, 92);
		var separation = vennSize1.width - vennSize2.width - 20;
		var vennBoundingBox2 = new Rectangle(topLeftPoint.add(separation, 18), vennSize2);
		var textPoint2 = new Point(vennBoundingBox2.x+vennBoundingBox2.width*0.1, vennBoundingBox2.y+vennBoundingBox2.height*0.1);
	
		var bb1 = new Rectangle(new Point(vennBoundingBox1.x, vennBoundingBox1.y), new Size(separation, vennBoundingBox1.height));
		intersectionBoundingBox = vennBoundingBox2;
		var bb2 = new Rectangle();
		
		elementsSize3 = new Size(vennSize2.width/(noOfElements2+0.8), vennSize2.height/(noOfElements2+0.8))
		if (elementsSize3.width < 32) {
			elementsSize3.width = 32;
		}

		if (elementsSize3.height < 24) {
			elementsSize3.height = 24;
		}
	} else if (intersection.elements.length == 0) {
		var separation = (set1DifferenceSet2.elements.length+1)*10*2 + 110;	
		
		var vennSize1 = new Size(noOfElements1*10*1.8 + 110, 128);
		var vennBoundingBox1 = new Rectangle(topLeftPoint, vennSize1);
		var textPoint1 = new Point(vennBoundingBox1.x+vennBoundingBox1.width*0.1, vennBoundingBox1.y+vennBoundingBox1.height*0.1);
		
		var vennSize2 = new Size(noOfElements2*10*1.8 + 110, 128);
		var vennBoundingBox2 = new Rectangle(topLeftPoint.add(separation, 0), vennSize2);
		var textPoint2 = new Point(vennBoundingBox2.x+vennBoundingBox2.width*0.82, vennBoundingBox2.y+vennBoundingBox2.height*0.1);
		
		var bb1 = vennBoundingBox1;
		intersectionBoundingBox = new Rectangle();
		var bb2 = vennBoundingBox2;
		
		elementsSize1 = new Size(vennSize1.width/(noOfElements1+2.4), vennSize1.height/(noOfElements1+2.4))
		if (elementsSize1.width < 32) {
			elementsSize1.width = 32;
		}

		if (elementsSize1.height < 22) {
			elementsSize1.height = 22;
		}		
		
		elementsSize3 = new Size(vennSize2.width/(noOfElements2+2.4), vennSize2.height/(noOfElements2+2.4))
		if (elementsSize3.width < 32) {
			elementsSize3.width = 32;
		}

		if (elementsSize3.height < 22) {
			elementsSize3.height = 22;
		}		
		
	} else {
		var separation = set1DifferenceSet2.elements.length*8*1.8 + 75;
		
		var vennSize1 = new Size(noOfElements1*10*2 + 110, 128);	
		var vennBoundingBox1 = new Rectangle(topLeftPoint, vennSize1);
		var textPoint1 = new Point(vennBoundingBox1.x+vennBoundingBox1.width*0.1, vennBoundingBox1.y+vennBoundingBox1.height*0.1);
		
		var vennSize2 = new Size(noOfElements2*10*2 + 110, 128);
		var vennBoundingBox2 = new Rectangle(topLeftPoint.add(separation, 0), vennSize2);
		var textPoint2 = new Point(vennBoundingBox2.x+vennBoundingBox2.width*0.82, vennBoundingBox2.y+vennBoundingBox2.height*0.1);
		
		var bb1 = new Rectangle(new Point(vennBoundingBox1.x, vennBoundingBox1.y), new Size(separation, vennBoundingBox1.height));
		intersectionBoundingBox = new Rectangle(topLeftPoint.add(separation, 0), new Size(vennSize1.width - separation, vennSize1.height - 0));
		var bb2 = new Rectangle(new Point(vennBoundingBox2.x + vennBoundingBox1.width - separation, vennBoundingBox2.y), new Size(vennBoundingBox2.width - vennBoundingBox1.width + separation, vennBoundingBox2.height));
	}
				
	var oval1 = Path.Oval(vennBoundingBox1);
	oval1.strokeColor = 'black';
	oval1.fillColor = new RgbColor(1, 1, 1, 0);
	vennDiagram1.addChild(oval1)

    var oval2 = Path.Oval(vennBoundingBox2);
    oval2.strokeColor = 'black';
    oval2.fillColor = new RgbColor(1, 1, 1, 0);
    vennDiagram2.addChild(oval2);
    if(singleSet)
        oval2.opacity = 0;

	var text = new PointText(textPoint1);
	text.set_style({
		fontSize: 14
	})
	text.content = letters[0];
	vennDiagram1.addChild(text);

    if (!singleSet) {
        text = new PointText(textPoint2);
        text.set_style({
            fontSize: 14
        })
        text.content = letters[1];
        vennDiagram2.addChild(text);
    }
		
		
	var drawElements = function (elements, boundingBox, elementSize, hitTest, fontSize) {
		if (fontSize == undefined) {
			fontSize = 12;
		}
		
		var granularity = fontSize;
		var elementLocations = [];
		var elementGroup = new Group();
		
		isAvailable = function (point) {
			var point2 = point.add(elementSize.width, -elementSize.height);
			var point3 = point.add(elementSize.width, 0);
			var point4 = point.add(0, -elementSize.height);						
			
			var corners = [
				point,
				point2,
				point3,
				point4
			]
			
			for (var i = 0; i < 4; i++) {
				if (!hitTest(corners[i])) {
					return false;
				}
			}
			
			return true;
		}
		
		var noOfElements = elements.length;
		var topLeftPoint = new Point(boundingBox.x, boundingBox.y);
		var vennSize = boundingBox.size;
		
		
		var excludingArray = [];
		
		
		for (var j = 0; j < vennSize.height/granularity; j++) {
			for (var i = 0; i < vennSize.width/granularity; i++) {
				var tempPoint = new Point(topLeftPoint.x + i*granularity, topLeftPoint.y + j*granularity);


				if (!isAvailable(tempPoint)) {
					excludingArray.push(j * Math.ceil(vennSize.width/granularity) + i);
				}

			}
		}

		for (var i = 0; i < noOfElements; i++) {
			var retry = false;
			try {
				var randomPoint = Util.randomInteger(0, Math.floor(vennSize.width * vennSize.height / granularity / granularity), excludingArray);
			}
			catch (err) {
				retry = true;
			}

			var point = new Point(topLeftPoint.x + (randomPoint % Math.ceil(vennSize.width/granularity)) * granularity, topLeftPoint.y + Math.floor(granularity * randomPoint / vennSize.width) * granularity);

//
//            rect = new Path.Rectangle(point, new Size(elementSize.width,-elementSize.height));
//            rect.strokeColor = 'black';
////            this.vennDiagram.addChild(rect);

            var text = new PointText(point.add(elementSize.width/2 - 6, -elementSize.height/2 + 8));
			text.set_style({
				fontSize: fontSize
			})
			text.content = "."+elements[i];
			
			elementGroup.addChild(text);
			
			var index = Math.floor((point.y - topLeftPoint.y)/granularity);

			elementLocations.push(point);

			var left = point.x - elementSize.width;
			var right = point.x + elementSize.width;
			var top = point.y - elementSize.height;
			var bottom = point.y + elementSize.height;

			left = Math.floor((left - topLeftPoint.x) / granularity);
			right = Math.floor((right - topLeftPoint.x) / granularity);
			top = Math.floor((top - topLeftPoint.y) / granularity);
			bottom = Math.floor((bottom - topLeftPoint.y) / granularity);

			for (x = left; x <= right; x++) {
				for (y = top; y <= bottom; y++) {
					if (x >= 0 && y >= 0) {
						excludingArray.push(y * Math.ceil(vennSize.width/granularity) + x);
					}
				}
			}
		}
		
		return elementGroup;
	}
	
	var start_time = Date.now();
    var hitTestOptions = { fill: true, stroke: false, segments: true, tolerance: -15 }
	var elementsGroup1 = drawElements(set1DifferenceSet2.elements,
		 		bb1,
		 		elementsSize1,
		 function(point) {
			return (oval1.hitTest(point,hitTestOptions) && !oval2.hitTest(point,hitTestOptions));
	});
	var endTime = Date.now();

	var start_time = Date.now();
	var elementsGroup2 = drawElements(intersection.elements,
		 		intersectionBoundingBox,
		 		elementsSize2,
		 function(point) {
			return (oval1.hitTest(point,hitTestOptions) && oval2.hitTest(point,hitTestOptions));
	});
	var endTime = Date.now();


    if (!singleSet) {
	    var start_time = Date.now();
	    var elementsGroup3 = drawElements(set2DifferenceSet1.elements,
		 	    	bb2,
		     		elementsSize3,
	    	 function(point) {
    			return (!oval1.hitTest(point,hitTestOptions) && oval2.hitTest(point,hitTestOptions));
	    });
	    var endTime = Date.now();
    }

	vennDiagram1.addChild(elementsGroup1);
	vennDiagram1.addChild(elementsGroup2);

    if (!singleSet) {
        var elementsGroup2Clone = elementsGroup2.clone();
	    vennDiagram2.addChild(elementsGroup2Clone);
	    vennDiagram2.addChild(elementsGroup3);

        return {
            set1: vennDiagram1,
            set2: vennDiagram2,
            intersect: elementsGroup2,
            intersectClone : elementsGroup2Clone
        }
    } else {
        return {
            set1: vennDiagram1,
            intersect: elementsGroup2
        }
    }




};
function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
    optionsStyle = {
        position:'absolute',
        fontSize:'16px',
        fontWeight:'bold',
        color:'#000',
        cursor:'pointer',
        width:'300px'
    }
    optionsImageContainer = {
        position:'relative',
        width:'32px',
        height:'32px',
        float:'left',
        top:'-8px',
        marginRight:'10px',
        backgroundImage:'url(/assets/radio_buttons.png)',
        backgroundPosition:'0px 0px'
    }
    selectedOptionStyle = {
        color:'#235394'
    }
    trueOptionStyle = {
        color:'#309423'
    }
    falseOptionStyle = {
        color:'#942323'
    }

    setDivCss = {
        position:'absolute',
        left:'10px',
        fontSize:'16px',
        width:'300px',
        lineHeight:'20px'


    }
}
;
var Animation = {
    images:[],
    init:function(container){
        Animation.container = container;

        bekleme=1000;
        islem=2000;

        aResimleri={
            ornek1A:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_1_a.png",
            ornek1B:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_1_b.png",

            ornek2A:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_2_a.png",
            ornek2B:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_2_b.png",

            ornek3A:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_3_a.png",
            ornek3B:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_3_b.png",

            ornek4A:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_4_a.png",
            ornek4B:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_4_b.png",

            ornek5A:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_5_a.png",
            ornek5B:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_5_b.png",
            ornek5C:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_5_c.png",

            ornek6A:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_6_a.png",
            ornek6B:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_6_b.png",
            ornek6C:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_6_c.png",

            ornek7A:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_7_a.png",
            ornek7B:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_7_b.png",
            ornek7C:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_7_c.png",

            ornek8A:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_8_a.png",
            ornek8B:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_8_b.png",
            ornek8C:"/assets/animations/kumelerin_birbiriyle_iliskisi/ornek_8_c.png",


        }

        kumeA=new Image();
        kumeA.id="kumeA";

        $(container).append(kumeA);
        $(kumeA).css({
            position:"absolute"
        });

        kumeB=new Image();
        kumeB.id="kumeB";

        $(container).append(kumeB);
        $(kumeB).css({
            position:"absolute"
        });

        kumeC=new Image();
        kumeC.id="kumeC";

        $(container).append(kumeC);
        $(kumeC).css({
            position:"absolute"
        });

        $(container).append("<div id='denklem'>")
        $(container).append("<div id='aciklama'>")
        $("#denklem").css({position:"absolute", width:"100%",height:"20px",left:"0px",bottom:"25px",textAlign:"center",opacity:0});
        $("#aciklama").css({position:"absolute", width:"100%",height:"20px",left:"0px",bottom:"5px",textAlign:"center",opacity:0});

        ornek1();
        //sonPerde();



    }
}

function ornek1(){
    var left=50;
    var right=50;
    var top=20;
    var denklem="A = B";
    var izah="İki küme eşit olabilir."

    kumeA.src=aResimleri.ornek1A;
    $(kumeA).css({
        left:left+"px",
        top:top+"px"
    });

    kumeB.src=aResimleri.ornek1B;
    $(kumeB).css({
        right:right+"px",
        top:top+"px"
    });

    $(kumeA).delay(bekleme).animate({left:"285px"},islem);
    $(kumeB).delay(bekleme).animate({right:"285px"},islem,function(){$(this).animate({opacity:0},1000)});


    setTimeout(function(){aciklama()},bekleme+islem);
    setTimeout(function(){kapat()},bekleme+islem+2000);
    setTimeout(function(){ornek2()},bekleme+islem+4000);
    console.log("örnek 1");

    function aciklama(){
        console.log("örnek 1 aciklamalar");
        $("#denklem").animate({opacity:1},1000).html(denklem);
        $("#aciklama").animate({opacity:1},1000).html(izah);
    }
    function kapat(){
        console.log("örnek 1 kapanıyor");
        $("#denklem, #aciklama").animate({opacity:0},1000);
        $("#kumeA, #kumeB").animate({opacity:0},1000);
    }



}

function ornek2(){
    var left=50;
    var right=50;
    var top=20;
    var denklem="";
    var izah="İki küme ayrık olabilir.";
    kumeA.src=aResimleri.ornek2A;
    $(kumeA).css({
        left:left+"px",
        top:top+"px"
    });

    kumeB.src=aResimleri.ornek2B;
    $(kumeB).css({
        right:right+"px",
        top:top+"px"
    });

    $(kumeA).delay(500).animate({opacity:1},500).delay(bekleme).animate({left:"150px"},islem);
    $(kumeB).delay(500).animate({opacity:1},500).delay(bekleme).animate({right:"150px"},islem);

    console.log("örnek 2");
    setTimeout(function(){aciklama()},bekleme+islem+1000);
    setTimeout(function(){kapat()},bekleme+islem+3000);
    setTimeout(function(){ornek3()},bekleme+islem+5000);
    function aciklama(){
        console.log("örnek 2 aciklamalar");
        $("#denklem").animate({opacity:1},1000).html(denklem);
        $("#aciklama").animate({opacity:1},1000).html(izah);

    }

    function kapat(){
        console.log("örnek 2 kapanıyor");
        $("#denklem, #aciklama").animate({opacity:0},1000);
        $("#kumeA, #kumeB").animate({opacity:0},1000);
    }



}

function ornek3(){
    var left=50;
    var right=50;
    var top=20;
    var denklem="A ⊂ B";
    var izah="İki kümeden biri diğerinin alt kümesi olabilir.";
    kumeA.src=aResimleri.ornek3A;
    $(kumeA).css({
        left:left+"px",
        top:top+"px"
    });

    kumeB.src=aResimleri.ornek3B;
    $(kumeB).css({
        right:right+"px",
        top:top+25+"px"
    });
    $(kumeA).delay(500).animate({opacity:1},500);
    $(kumeB).delay(500).animate({opacity:1},500);

    $(kumeA).delay(bekleme).animate({left:"285px"},islem);
    $(kumeB).delay(bekleme).animate({right:"307px"},islem);
    console.log("örnek 3");

    setTimeout(function(){aciklama()},bekleme+islem+2000);
    setTimeout(function(){kapat()},bekleme+islem+4000);
    setTimeout(function(){ornek4()},bekleme+islem+6000);
    function aciklama(){
        console.log("örnek 3 aciklamalar");
        $("#denklem").animate({opacity:1},1000).html(denklem);
        $("#aciklama").animate({opacity:1},1000).html(izah);

    }

    function kapat(){
        console.log("örnek 3 kapanıyor");
        $("#denklem, #aciklama").animate({opacity:0},1000);
        $("#kumeA, #kumeB").animate({opacity:0},1000);
    }

}

function ornek4(){
    var left=50;
    var right=50;
    var top=20;
    var denklem="A ∩ B";
    var izah="İki küme kesişebilir.";
    kumeA.src=aResimleri.ornek4A;
    $(kumeA).css({
        left:left+"px",
        top:top+"px"
    });

    kumeB.src=aResimleri.ornek4B;
    $(kumeB).css({
        right:right+"px",
        top:top+"px"
    });
    $(kumeA).delay(500).animate({opacity:1},500);
    $(kumeB).delay(500).animate({opacity:1},500);
    $(kumeA).delay(bekleme).animate({left:"225px"},islem);
    $(kumeB).delay(bekleme).animate({right:"226px"},islem);

    console.log("örnek 4");

    setTimeout(function(){aciklama()},bekleme+islem+1000);
    setTimeout(function(){kapat()},bekleme+islem+3000);
    setTimeout(function(){ornek5()},bekleme+islem+5000);
    function aciklama(){
        console.log("örnek 4 aciklamalar");
        $("#denklem").animate({opacity:1},1000).html(denklem);
        $("#aciklama").animate({opacity:1},1000).html(izah);

    }

    function kapat(){
        console.log("örnek 4 kapanıyor");
        $("#denklem, #aciklama").animate({opacity:0},1000);
        $("#kumeA, #kumeB").animate({opacity:0},1000);
    }

}

function ornek5(){
    var left=50;
    var right=50;
    var top=20;
    var denklem="A = B= C";
    var izah="Üç küme eşit olabilir.";
    kumeA.src=aResimleri.ornek5A;
    $(kumeA).css({
        left:left+"px",
        top:top+"px"
    });

    kumeB.src=aResimleri.ornek5B;
    $(kumeB).css({
        right:"0px",
        left:"0px",
        margin:"auto",
        top:top+"px"
    });

    kumeC.src=aResimleri.ornek5C;
    $(kumeC).css({
        right:right+"px",
        top:top+"px"
    });
    $(kumeA).delay(500).animate({opacity:1},500);
    $(kumeB).delay(500).animate({opacity:1},500);
    $(kumeA).delay(bekleme).animate({left:"285px"},islem);
    $(kumeC).delay(bekleme).animate({right:"285px"},islem,function(){$("#kumeB, #kumeC").animate({opacity:0},1000)});


    console.log("örnek 5");

    setTimeout(function(){aciklama()},bekleme+islem+2000);
    setTimeout(function(){kapat()},bekleme+islem+4000);
    setTimeout(function(){ornek6()},bekleme+islem+6000);
    function aciklama(){
        console.log("örnek 5 aciklamalar");
        $("#denklem").animate({opacity:1},1000).html(denklem);
        $("#aciklama").animate({opacity:1},1000).html(izah);

    }

    function kapat(){
        console.log("örnek 5 kapanıyor");
        $("#denklem, #aciklama").animate({opacity:0},1000);
        $("#kumeA, #kumeB").animate({opacity:0},1000);
    }

}

function ornek6(){
    var left=50;
    var right=50;
    var top=5;
    var denklem="A ∩ B  B ∩ C";
    var izah="Kümelerden biri diğerleri ile kesişebilir diğer iki küme ayrıktır.";
    kumeA.src=aResimleri.ornek6A;
    $(kumeA).css({
        left:left+"px",
        top:top+"px"
    });

    kumeB.src=aResimleri.ornek6B;
    $(kumeB).css({
        right:"0px",
        left:"0px",
        margin:"auto",
        top:top+"px"
    });

    kumeC.src=aResimleri.ornek6C;
    $(kumeC).css({
        right:right+"px",
        top:top+"px"
    });
    $(kumeA).delay(500).animate({opacity:1},500);
    $(kumeB).delay(500).animate({opacity:1},500);
    $(kumeC).delay(500).animate({opacity:1},500);
    $(kumeA).delay(bekleme).animate({left:"158px"},islem);
    $(kumeC).delay(bekleme).animate({right:"157px"},islem);

    console.log("örnek 6");

    setTimeout(function(){aciklama()},bekleme+islem+2000);
    setTimeout(function(){kapat()},bekleme+islem+4000);
    setTimeout(function(){ornek7()},bekleme+islem+6000);
    function aciklama(){
        console.log("örnek 6 aciklamalar");
        $("#denklem").animate({opacity:1},1000).html(denklem);
        $("#aciklama").animate({opacity:1},1000).html(izah);

    }

    function kapat(){
        console.log("örnek 6 kapanıyor");
        $("#denklem, #aciklama").animate({opacity:0},1000);
        $("#kumeA, #kumeB, #kumeC").animate({opacity:0},1000);
    }
}

function ornek7(){
    var left=50;
    var right=50;
    var top=20;
    var denklem="C ⊂ B ⊂ A";
    var izah="Üç küme biri diğerinin o da öbürünün alt kümesi olabilir.";
    kumeA.src=aResimleri.ornek7A;
    $(kumeA).css({
        left:left+"px",
        top:top+"px"
    });

    kumeB.src=aResimleri.ornek7B;
    $(kumeB).css({
        right:"0px",
        left:"0px",
        margin:"auto",
        top:top+"px"
    });

    kumeC.src=aResimleri.ornek7C;
    $(kumeC).css({
        right:right+"px",
        top:top+"px"
    });

    $(kumeA).delay(500).animate({opacity:1},500);
    $(kumeB).delay(500).animate({opacity:1},500);
    $(kumeC).delay(500).animate({opacity:1},500);
    $(kumeA).delay(bekleme).animate({left:"286px"},islem);
    $(kumeC).delay(bekleme).animate({right:"285px"},islem);


    console.log("örnek 7");

    setTimeout(function(){aciklama()},bekleme+islem+2000);
    setTimeout(function(){kapat()},bekleme+islem+4000);
    setTimeout(function(){ornek8()},bekleme+islem+6000);
    function aciklama(){
        console.log("örnek 7 aciklamalar");
        $("#denklem").animate({opacity:1},1000).html(denklem);
        $("#aciklama").animate({opacity:1},1000).html(izah);

    }

    function kapat(){
        console.log("örnek 7 kapanıyor");
        $("#denklem, #aciklama").animate({opacity:0},1000);
        $("#kumeA, #kumeB, #kumeC").animate({opacity:0},1000);
    }
}

function ornek8(){
    var left=50;
    var right=50;
    var top=20;
    var denklem="A ∩ B ∩ C";
    var izah="Üç küme kesişebilir.";
    kumeA.src=aResimleri.ornek8A;
    $(kumeA).css({
        left:left+"px",
        top:top+"px"
    });

    kumeB.src=aResimleri.ornek8B;
    $(kumeB).css({
        right:"0px",
        left:"0px",
        margin:"auto",
        top:top-2+"px"
    });

    kumeC.src=aResimleri.ornek8C;
    $(kumeC).css({
        right:right+"px",
        top:top+"px"
    });
    $(kumeA).delay(500).animate({opacity:1},500);
    $(kumeB).delay(500).animate({opacity:1},500);
    $(kumeC).delay(500).animate({opacity:1},500);
    $(kumeA).delay(bekleme).animate({left:"238px"},islem);
    $(kumeC).delay(bekleme).animate({right:"346px",top:"79px"},islem);
    $("#denklem").css({width:"320",left:"465px",bottom:"100px"}).delay(bekleme+islem+1000).animate({opacity:1},1000).html(denklem);
    $("#aciklama").css({width:"320",left:"465px",bottom:"50px"}).delay(bekleme+islem+2000).animate({opacity:1},1000).html(izah);

    setTimeout(function(){kapat()},bekleme+islem+4000);
    setTimeout(function(){sonPerde()},bekleme+islem+6000);

    function kapat(){
        console.log("örnek 8 kapanıyor");
        $("#denklem, #aciklama").animate({opacity:0},1000);
        $("#kumeA, #kumeB, #kumeC").animate({opacity:0},1000);
    }
}

function sonPerde(){
    $(Animation.container).append("<div id='sonPerde'>");
    $("#sonPerde").css({
        position:"absolute",
        width:"100%",
        height:"100%",
        top:"20px",
        left:"5px",
        opacity:"0"

    });
    for(var i=1; i<9;i++){
        $("#sonPerde").append("<div id='sonPerde"+i+"'>");
        $("#sonPerde"+i).css({
            width:"385px",
            height:"40px",
            float:"left",
            //backgroundColor:"red",
            margin:"2px",
            textAlign:"center"


        });
    }

    $("#sonPerde1").html("A = B <p>İki küme eşit olabilir.");
    $("#sonPerde2").html("A &nbsp;&nbsp;&nbsp;&nbsp;B <p>İki küme ayrık olabilir.");
    $("#sonPerde3").html("A ⊂ B <p>İki kümeden biri diğerinin alt kümesi olabilir.");
    $("#sonPerde4").html("A ∩ B <p>İki küme kesişebilir.");
    $("#sonPerde5").html("A = B= C <p>Üç küme eşit olabilir.");
    $("#sonPerde6").html("A ∩ B  B ∩ C <p>Kümelerden biri diğerleri ile kesişebilir diğer iki küme ayrıktır.");
    $("#sonPerde7").html("C ⊂ B ⊂ A <p>Üç küme biri diğerinin o da öbürünün alt kümesi olabilir.");
    $("#sonPerde8").html("A ∩ B ∩ C <p>Üç küme kesişebilir.");

    $("#sonPerde").animate({opacity:1},1000,function(){Main.animationFinished()});
}
;
var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
	images:[
        {
            id:'radio_buttons',
            src:'/assets/radio_buttons.png'
        }
    ],
    init:function(container){
        Interaction.container = container;

        Main.setObjective('Yanda verilen kümelerin birbirine göre durumunu belirtiniz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        var referencePoint = new Point(100,100);
        Interaction.createOptions(referencePoint.add(250,-50));
        Interaction.appendStatus({
            bottom:'30px',
            right:'210px'
        })
        Interaction.appendButton({
            bottom:'20px',
            right:'100px'
        })
        Interaction.set1Div = Util.dom({
            tag:'div',
            parent:container,
            css:setDivCss
        });
        $(Interaction.set1Div).css({
            top:'100px'
        })
        Interaction.set2Div = Util.dom({
            tag:'div',
            parent:container,
            css:setDivCss
        });
        $(Interaction.set2Div).css({
            top:'150px'
        })
        Interaction.setRandomGenerator(4);
        Interaction.prepareNextQuestion();


    },
	nextQuestion: function(randomNumber){
        Interaction.trial++;
        Interaction.cleanOptions();
//        /*<[[TEST*/ randomNumber = 1 /*TEST]]>*/
        Interaction.generateSets(randomNumber);

    },
		
    cleanOptions:function(){
        Interaction.clickedOption = null;
        $(Interaction.options).each(function(){
            $(this).css(optionsStyle);

        })
        $('.image-container')
            .css({
                backgroundPosition:'0px 0px'
            })
    },
    createOptions:function(referencePoint){

        var equalSets       = Util.dom({parent:Interaction.container,tag:'div',css:optionsStyle,html:'Eşit kümeler'});
        var subsetOfTheOther= Util.dom({parent:Interaction.container,tag:'div',css:optionsStyle,html:'Biri diğerinin alt kümesi'});
        var disjointSets    = Util.dom({parent:Interaction.container,tag:'div',css:optionsStyle,html:'Ayrık kümeler'});
        var intersectingSets= Util.dom({parent:Interaction.container,tag:'div',css:optionsStyle,html:'Kesişen kümeler'});

        Interaction.options = [equalSets,subsetOfTheOther,disjointSets,intersectingSets];

        for(var i=0;i<Interaction.options.length;i++){
            $(Interaction.options[i]).css({
                top:referencePoint.y+50*i,
                left:referencePoint.x
            }).click(function(){
                Interaction.cleanOptions();
                    Interaction.clickedOption = this;
                $('.image-container',this)
                    .css({
                        backgroundPosition:'-32px 0px'
                    })
                $(Interaction.clickedOption).css(selectedOptionStyle);
            }).prepend('<div class="image-container"></div>');
            $('.image-container',Interaction.options[i])
                .css(optionsImageContainer)



        }


    },
    generateSets:function(randomNumber){
        var set1String,set2String;
        Interaction.set1  = Set.randomGenerator();
        switch(randomNumber){
            case 0:
                Interaction.set2 = Interaction.set1;
                set1String = Interaction.set1.getDefinitionString();
                set2String = Interaction.set2.getElementsString();
                break;
            case 1:
                Interaction.set2 = Interaction.set1.getRandomSubset();
                break;
            case 2:
                Interaction.set2 = Interaction.set1.getRandomDisjointSet();
                break;
            case 3:
                Interaction.set2 = Interaction.set1.getRandomIntersectingSet();
                break;
        }
        if(randomNumber != 0 ){
            var isSet1DefinitionString = Util.rand01() == 1;
            var isSet2DefinitionString = Util.rand01() == 1;
            if(Interaction.set1.isEqualSet(Interaction.set2))
                isSet1DefinitionString = ! isSet2DefinitionString;
            if(isSet1DefinitionString)
                set1String = Interaction.set1.getDefinitionString();
            else
                set1String = Interaction.set1.getElementsString();
            if(isSet2DefinitionString)
                set2String = Interaction.set2.getDefinitionString();
            else
                set2String = Interaction.set2.getElementsString();
        }
        Interaction.set1Div.innerHTML = 'A = ' + set1String;
        Interaction.set2Div.innerHTML = 'B = ' + set2String;

    },
	preCheck : function(){
		if(Interaction.clickedOption == null){
            Interaction.setStatus("Lütfen bir şık seçiniz", "alert");
            return false;
        }
    },
	isAnswerCorrect : function(){
        if(Interaction.clickedOption == Interaction.options[0])
            return Interaction.set1.isEqualSet(Interaction.set2);
        if(Interaction.clickedOption == Interaction.options[1])
            return Interaction.set1.isSubsetOf(Interaction.set2) || Interaction.set2.isSubsetOf(Interaction.set1);
        if(Interaction.clickedOption == Interaction.options[2])
            return Interaction.set1.isDisjointWith(Interaction.set2);
        if(Interaction.clickedOption == Interaction.options[3])
            return Interaction.set1.isIntersectingWith(Interaction.set2);
    },
	onCorrectAnswer : function(){
        $(Interaction.clickedOption).css(trueOptionStyle);
        $('.image-container',Interaction.clickedOption).css({
            backgroundPosition:'-64px 0px'
        });
        var correctAnswers = [];
        if(Interaction.set1.isEqualSet(Interaction.set2))
            correctAnswers.push(0);
        if(Interaction.set1.isSubsetOf(Interaction.set2) || Interaction.set2.isSubsetOf(Interaction.set1))
            correctAnswers.push(1);
        if(Interaction.set1.isDisjointWith(Interaction.set2))
            correctAnswers.push(2);
        if(Interaction.set1.isIntersectingWith(Interaction.set2))
            correctAnswers.push(3);

        for(var i=0;i<correctAnswers.length;i++){
            $('.image-container',Interaction.options[correctAnswers[i]]).css({
                backgroundPosition:'-64px 0px'
            });
            $(Interaction.options[correctAnswers[i]]).css(trueOptionStyle);
        }
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış! Doğru cevaplar yeşil renk ile belirtilmiştir.',false)

        $(Interaction.clickedOption).css(falseOptionStyle);
        $('.image-container',Interaction.clickedOption).css({
            backgroundPosition:'-96px 0px'
        });
        var correctAnswers = [];
        if(Interaction.set1.isEqualSet(Interaction.set2))
            correctAnswers.push(0);
        if(Interaction.set1.isSubsetOf(Interaction.set2) || Interaction.set2.isSubsetOf(Interaction.set1))
            correctAnswers.push(1);
        if(Interaction.set1.isDisjointWith(Interaction.set2))
            correctAnswers.push(2);
        if(Interaction.set1.isIntersectingWith(Interaction.set2))
            correctAnswers.push(3);

        for(var i=0;i<correctAnswers.length;i++){
            $('.image-container',Interaction.options[correctAnswers[i]]).css({
                backgroundPosition:'-64px 0px'
            });
            $(Interaction.options[correctAnswers[i]]).css(trueOptionStyle);
        }

    }
}
;





