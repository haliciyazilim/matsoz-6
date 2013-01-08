function __Styles(){

}
;
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
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 1000;
        var elementsStart = animStart+6000;
        var vennDrawStart = elementsStart+5000;

        Animation.set = new Set({type:Set.ELEMENTS, elements:["a","e","ı","i","o","ö","u","ü"]});
        Animation.set.definition = "Alfabemizdeki sesli harfler";

        Animation.animDiv = document.createElement('div');
        Animation.animDiv.id = 'animationDiv';
        $(Animation.container).append(Animation.animDiv);

        $(Animation.animDiv).css({
            position:'absolute',
            top:'30px',
            left:'50px',
        //    border:'1px solid',
            width:'480px',
            height:'150px',
            fontSize:'24px',
            opacity:0
        });
        $(Animation.animDiv).delay(animStart).animate({opacity:1}, 1000, 'easeInOutQuad');

        $(Animation.animDiv).html('<div id="mainText">Alfabemizdeki sesli harflerin kümesi:</div><div id="definitionStr"></div><div id="elementsStr"></div>')
        $('#definitionStr').css({
            position:'absolute',
            top:'60px',
            left:'60px',
            opacity:0
        });
        $('#definitionStr').html(Animation.set.getDefinitionString("A"));
        $('#definitionStr').delay(animStart+2000).animate({opacity:1}, 1000, 'easeInOutQuad');

        $('#elementsStr').css({
            position:'absolute',
            top:'100px',
            left:'60px',
            opacity:0
        });
        $('#elementsStr').html(Animation.set.getElementsString("A"));
        $('#elementsStr').delay(animStart+4000).animate({opacity:1}, 1000, 'easeInOutQuad');

        $(Animation.container).append('<div id="vElem"><div id="vL">A</div>' +
                                    '<div id="el1">.a</div><div id="el2">.e</div>' +
                                    '<div id="el3">.ı</div><div id="el4">.i</div>' +
                                    '<div id="el5">.o</div><div id="el6">.ö</div>' +
                                    '<div id="el7">.u</div><div id="el8">.ü</div>' +
                                    '</div>');
        $('#vElem').css({
            position:'absolute',
            top:'28px',
            left:'584px',
            width:'140px',
            height:'140px',
            fontSize:'18px'
        });
        $('#vL').css({
            position:'absolute',
            top:'0px',
            left:'0px',
            fontSize:'20px',
            opacity:0,
        });
        $('#vL').delay(vennDrawStart+2500).animate({opacity:1}, 1000, 'easeInOutQuad',function(){Main.animationFinished();});
        $('#el1').css({
            position:'absolute',
            top:'30px',
            left:'30px',
            opacity:0,
        });
        $('#el2').css({
            position:'absolute',
            top:'20px',
            left:'62px',
            opacity:0,
        });
        $('#el3').css({
            position:'absolute',
            top:'30px',
            left:'98px',
            opacity:0,
        });
        $('#el4').css({
            position:'absolute',
            top:'70px',
            left:'20px',
            opacity:0,
        });
        $('#el5').css({
            position:'absolute',
            top:'60px',
            left:'56px',
            opacity:0,
        });
        $('#el6').css({
            position:'absolute',
            top:'70px',
            left:'94px',
            opacity:0,
        });
        $('#el7').css({
            position:'absolute',
            top:'98px',
            left:'44px',
            opacity:0,
        });
        $('#el8').css({
            position:'absolute',
            top:'98px',
            left:'76px',
            opacity:0,
        });
        for(var i = 1; i < 9; i++){
            $('#el'+i).delay(elementsStart+(i*500)).animate({opacity:1}, 500, 'easeInOutQuad');
        }

        var animationHelper = {
            animate:Item.prototype.animate,
            myAngle:5,
        };
        animationHelper.animate({
            style:{
                myAngle:357,
            },
            duration:2000,
            delay:vennDrawStart,
            animationType:'easeInOutQuad',
            update:function(){
                if(Animation.venn){
                    Animation.venn.remove();
                }
                if(animationHelper.myAngle == 357){
                    Animation.venn = new Path.Circle(new Point(640,84), 70);
                    Animation.venn.strokeColor = "black";
                }
                else{
                    Animation.venn = new Path.ArcByAngle(new Point(640,84), 70, animationHelper.myAngle);
                    Animation.venn.strokeColor = "black";
                }
            }
        });
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
        Main.setObjective('Yanda ortak özellik yöntemi ile verilen kümenin elemanlarını yazınız ve soruları cevaplayınız.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };
        Interaction.firstQuestionDiv = document.createElement('div');
        Interaction.firstQuestionDiv.id = 'firstQuestionDiv';
        $(Interaction.container).append(Interaction.firstQuestionDiv);

        $(Interaction.firstQuestionDiv).css({
            position:'absolute',
            top:'10px',
            left:'24px',
        //    border:'1px solid',
            width:'400px',
            height:'80px'
        });
        $(Interaction.firstQuestionDiv).html('<div id="question1"><span id="setLetter">A = </span><span id="set">{ <span id="setDefinition"></span> }</span></div><div id="answer1"><span id="setLetter2">A = </span><span id="setAnswer">{ <span id="inputs"></span> }</span></div>');
        $('#question1').css({
            position:'absolute',
            top:'10px',
            left:'10px',
         //   border:'1px solid',
            width:'380px',
            height:'30px',
            fontSize:'16px'
        });
        $('#answer1').css({
            position:'absolute',
            top:'40px',
            left:'10px',
         //   border:'1px solid',
            width:'380px',
            height:'30px',
            fontSize:'16px',
        });


        Interaction.appendStatus({
            bottom:'10px',
            right:'170px',
        //    border:'1px solid',
            width:'400px',
            height:'26px',
            textAlign:'center'

        });
        Interaction.appendButton({
            bottom:'10px',
            right:'40px'
        });

        Interaction.letters = [];
        Interaction.letters[0] = "A";
        Interaction.letters[1] = "B";
        Interaction.letters[2] = "C";
        Interaction.letters[3] = "D";
        Interaction.letters[4] = "E";
        Interaction.letters[5] = "F";
        Interaction.letters[6] = "G";
        Interaction.letters[7] = "H";
        Interaction.letters[8] = "J";
        Interaction.letters[9] = "K";
        Interaction.letters[10] = "L";
        Interaction.letters[11] = "M";
        Interaction.letters[12] = "N";
        Interaction.letters[13] = "O";
        Interaction.letters[14] = "P";
        Interaction.letters[15] = "R";
        Interaction.letters[16] = "S";
        Interaction.letters[17] = "T";
        Interaction.letters[18] = "V";
        Interaction.letters[19] = "Y";
        Interaction.letters[20] = "Z";

        var topLeft = new Point(420, 10);
        var size = new Size(150,100);
        var rectangle = new Rectangle(topLeft, size);
        Interaction.vennDiagram = new Path.Oval(rectangle);
        Interaction.vennDiagram.strokeColor = "black";

        $(Interaction.container).append('<div id="vennElements"><div id="vennLetter"></div><div id="e1"></div><div id="e2"></div><div id="e3"></div><div id="e4"></div><div id="e5"></div><div id="e6"></div></div>');
        $('#vennElements').css({
            position:'absolute',
            top:'9px',
            left:'419px',
            width:'150px',
            height:'100px',
            fontSize:'16px',
            textAlign:'center',
            fontWeight:'bold'
        });
        $('#vennLetter').css({
            position:'absolute',
            top:'0px',
            left:'0px',
            width:'18px',
            height:'18px',
            fontWeight:'normal'
        });
        $('#e1').css({
            position:'absolute',
            width:'24px',
            height:'20px',
        });
        $('#e2').css({
            position:'absolute',
            width:'24px',
            height:'20px',
        });
        $('#e3').css({
            position:'absolute',
            width:'24px',
            height:'20px',
        });
        $('#e4').css({
            position:'absolute',
            width:'24px',
            height:'20px',
        });
        $('#e5').css({
            position:'absolute',
            width:'24px',
            height:'20px',
        });
        $('#e6').css({
            position:'absolute',
            width:'24px',
            height:'20px',
        });

        Interaction.secondQuestionDiv = document.createElement('div');
        Interaction.secondQuestionDiv.id = 'secondQuestionDiv';
        $(Interaction.container).append(Interaction.secondQuestionDiv);

        $(Interaction.secondQuestionDiv).css({
            position:'absolute',
            top:'110px',
            left:'24px',
        //    border:'1px solid',
            width:'400px',
            height:'80px',
            fontSize:'18px',
            paddingLeft:'10px'
        });
        $(Interaction.secondQuestionDiv).html('<div id="questionText">Aşağıdaki boşluğa uygun işareti sürükleyiniz.</div><div id="question21"><div id="ques1"></div><div id="dropDiv1"></div><div id="setL1"></div></div><div id="question22"><div id="ques2"></div><div id="dropDiv2"></div><div id="setL2"></div>')

        $('#question21').css({
            position:'absolute',
            top:'30px',
            left:'10px',
            width:'160px',
            height:'40px',
        //    border:'1px solid'
        });
        $('#ques1').css({
            position:'absolute',
            left:'20px',
            top:'10px',
            width:'20px',
            height:'20px',
            fontSize:'18px',
            textAlign:'right',
        });
        $('#setL1').css({
            position:'absolute',
            left:'100px',
            top:'10px',
            width:'20px',
            height:'20px',
            fontSize:'18px',
            textAlign:'left',
        });
        $('#dropDiv1').css({
            position:'absolute',
            left:'50px',
            top:'0px',
            width:'50px',
            height:'50px',
            padding:0,
            margin:0,
        //    border:'1px solid'
        });
        $('#dropDiv1').append('<div id="targetContainer"><img src="/assets/animations/kume/kume_hedef.png" id="target" /></div>')
        $('#targetContainer').css("position", "relative")
            .css("height", "36px")
            .css("width", "36px")
            .css("float", "left")
        $('#target').css("position", "absolute")
            .css("top", "0px")
            .css("left", "0px")

        $('#dropDiv1').append('<img id="elementActive" src="/assets/animations/kume/kume_kume_active.png" /><img id="notElementActive" src="/assets/animations/kume/kume_kumedegil_active.png" />')
        $('#elementActive').css("position", "absolute")
            .css("top", "2px")
            .css("left", "2px")
            .css("opacity", 0);

        $('#notElementActive').css("position", "absolute")
            .css("top", "2px")
            .css("left", "2px")
            .css("opacity", 0);

        $('#question22').css({
            position:'absolute',
            top:'30px',
            left:'214px',
            width:'160px',
            height:'40px',
        //    border:'1px solid'
        });

        $('#ques2').css({
            position:'absolute',
            left:'20px',
            top:'10px',
            width:'20px',
            height:'20px',
            fontSize:'18px',
            textAlign:'right',
        });
        $('#setL2').css({
            position:'absolute',
            left:'100px',
            top:'10px',
            width:'20px',
            height:'20px',
            fontSize:'18px',
            textAlign:'left',
        });
        $('#dropDiv2').css({
            position:'absolute',
            left:'50px',
            top:'0px',
            width:'50px',
            height:'50px',
            padding:0,
            margin:0,
            //    border:'1px solid'
        });
        $('#dropDiv2').append('<div id="targetContainer2"><img src="/assets/animations/kume/kume_hedef.png" id="target2" /></div>')
        $('#targetContainer2').css("position", "relative")
            .css("height", "36px")
            .css("width", "36px")
            .css("float", "left")
        $('#target2').css("position", "absolute")
            .css("top", "0px")
            .css("left", "0px")

        $('#dropDiv2').append('<img id="element2Active" src="/assets/animations/kume/kume_kume_active.png" /><img id="notElement2Active" src="/assets/animations/kume/kume_kumedegil_active.png" />')
        $('#element2Active').css("position", "absolute")
            .css("top", "2px")
            .css("left", "2px")
            .css("opacity", 0);

        $('#notElement2Active').css("position", "absolute")
            .css("top", "2px")
            .css("left", "2px")
            .css("opacity", 0);

        Interaction.thirdQuestionDiv = document.createElement('div');
        Interaction.thirdQuestionDiv.id = 'thirdQuestionDiv';
        $(Interaction.container).append(Interaction.thirdQuestionDiv);

        $(Interaction.thirdQuestionDiv).css({
            position:'absolute',
            top:'210px',
            left:'34px',
            width:'500px',
            height:'30px',
         //   border:'1px solid',
            fontSize:'24px',
        });
        $(Interaction.thirdQuestionDiv).html('<div id="text"><span id="sId"></span><span> kümesinin eleman sayısı = </span></div>');

        Interaction.sortingDiv = document.createElement('div');
        Interaction.sortingDiv.id = 'sortingDiv';
        $(Interaction.container).append(Interaction.sortingDiv);
        $(Interaction.sortingDiv).css({
            position:'absolute',
            left:'458px',
            top:'135px',
            width:'100px',
            height:'50px',
            padding: 0,
            margin: 0,
        });

        $(Interaction.sortingDiv).append('<div id="elementDiv"><img src="/assets/animations/kume/kume_kume_base.png" /><img id="element" src="/assets/animations/kume/kume_kume_fg.png" /><img id="elementHover" class="drg" src="/assets/animations/kume/kume_kume_hover.png" /></div>')

        $('#elementDiv').css("position", "relative")
            .css("height", "40px")
            .css("width", "40px")
            .css("float", "left")
            .css("line-height", "32px")
            .css("cursor","pointer");

        $('#element').css("position", "absolute")
            .css("top", "0px")
            .css("left", "0px")

        $('#elementHover').css("position", "absolute")
            .css("top", "0px")
            .css("left", "0px")
            .css("opacity", 0);

        $(Interaction.sortingDiv).append('<div id="notElementDiv"><img src="/assets/animations/kume/kume_kumedegil_base.png" /><img id="notElement" src="/assets/animations/kume/kume_kumedegil_fg.png" /><img id="notElementHover" class="drg" src="/assets/animations/kume/kume_kumedegil_hover.png" /></div>')

        $('#notElementDiv').css("position", "relative")
            .css("height", "40px")
            .css("width", "40px")
            .css("float", "left")
            .css("line-height", "32px")
            .css("cursor","pointer");

        $('#notElement').css("position", "absolute")
            .css("top", "0px")
            .css("left", "0px")

        $('#notElementHover').css("position", "absolute")
            .css("top", "0px")
            .css("left", "0px")
            .css("opacity", 0);

        $('#sortingDiv .drg').draggable({
            revert: "invalid",
            helper: "clone",
            cursor: "pointer",
            stack: "#sortingDiv .drg",
            disabled: "false",
            start : function(event, ui){
                Interaction.setStatus('');
                $($(ui.helper.get(0)).siblings(this)[1]).css("opacity", 0)
                $(ui.helper.get(0)).css("opacity", 1)
            },
            stop : function(event, ui){
                if(Interaction.myTrial == 1){
                    $(ui.helper.get(0)).css("opacity", 0)
                    if(this.id != Interaction.oldStr+"Hover"){
                        $($(ui.helper.get(0)).siblings(this)[1]).css("opacity", 1)
                    }
                }
                else{
                    $(ui.helper.get(0)).css("opacity", 0)
                    if(this.id != Interaction.oldStr2+"Hover"){
                        $($(ui.helper.get(0)).siblings(this)[1]).css("opacity", 1)
                    }
                }
            }
        });

        $('#dropDiv1').droppable({
            accept: '.drg',
            tolerance: 'pointer',
            disabled: "false",
            drop : function(event, ui){
                if(Interaction.oldActiveStr){
                    $("#"+Interaction.oldActiveStr).css("opacity", 0)
                    $("#"+Interaction.oldActiveStr.replace("Active", "Hover")).draggable({disabled: false})
                    $("#"+Interaction.oldStr).css("opacity", 1)

                }
                Interaction.activeStr = $(ui.draggable).get(0).id;
                $("#"+Interaction.activeStr).draggable({disabled: true});
                var oldStr = Interaction.activeStr.replace("Hover", "");
                Interaction.activeStr = Interaction.activeStr.replace("Hover", "Active");
                $("#"+Interaction.activeStr).css("opacity", 1);
                Interaction.oldActiveStr = Interaction.activeStr;
                Interaction.oldStr = oldStr;
            },
        });

        $('#dropDiv2').droppable({
            accept: '.drg',
            tolerance: 'pointer',
            disabled: "false",
            drop : function(event, ui){
                if(Interaction.oldActiveStr2){
                    $("#"+Interaction.oldActiveStr2).css("opacity", 0)
                    $("#"+Interaction.oldActiveStr2.replace("2Active", "Hover")).draggable({disabled: false})
                    $("#"+Interaction.oldStr2).css("opacity", 1)

                }
                Interaction.activeStr2 = $(ui.draggable).get(0).id;
                $("#"+Interaction.activeStr2).draggable({disabled: true});
                var oldStr2 = Interaction.activeStr2.replace("Hover", "");
                Interaction.activeStr2 = Interaction.activeStr2.replace("Hover", "2Active");
                $("#"+Interaction.activeStr2).css("opacity", 1);
                Interaction.oldActiveStr2 = Interaction.activeStr2;
                Interaction.oldStr2 = oldStr2;
            },
        });

        Interaction.emptySetCounter = -1;
        Interaction.emptySetIndex = Util.randomInteger(0,10);

        Interaction.loadingDots = new Group();

        var a;
        for(var i = 0; i < 4; i++){
            a = new Path.Circle(new Point(474+i*15,230),4);
            a.fillColor = "grey";
            a.opacity = 0.2;
            Interaction.loadingDots.addChild(a);
        }
        Interaction.loadingDots.opacity = 0;

        Interaction.setRandomGenerator(11,1);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.emptySetCounter += 1;
        Interaction.myPause = 0;
	    Interaction.randomNumber = randomNumber;
        Interaction.trial = 1;
        Interaction.myTrial = 0;
        Interaction.vennDiagram.opacity = 0;
        $('#vennElements').css("opacity",0);
        $(Interaction.secondQuestionDiv).css("opacity", 0);
        $(Interaction.sortingDiv).css("opacity", 0)
        $(Interaction.thirdQuestionDiv).css("opacity", 0);
        $('#question21').css("opacity", 0);
        $('#question22').css("opacity", 0);
        Interaction.flushInputs();
        $('#inputs').html('');
        if(Interaction.questionSet)
            Interaction.questionSet = null;

        $('#vennLetter').html('');
        for(var i = 1; i < 7; i++){
            $('#e'+i).html('');
        }

        if($(Interaction.clone2)){
            $(Interaction.clone2).remove();
            Interaction.clone2 = null;
        }

        if($(Interaction.clone22)){
            $(Interaction.clone22).remove();
            Interaction.clone22 = null;
        }

        if($(Interaction.dropped)){
            $(Interaction.dropped).remove();
            Interaction.dropped = null;
        }

        if($(Interaction.dropped2)){
            $(Interaction.dropped2).remove();
            Interaction.dropped2 = null;
        }

        $('#sortingDiv img').draggable("enable");
        $('#dropDiv1').droppable("enable");
        $('#dropDiv2').droppable("enable");

        $('#elementActive').css("opacity",0);
        $('#element2Active').css("opacity",0);
        $('#notElementActive').css("opacity",0);
        $('#notElement2Active').css("opacity",0);

        if(Interaction.oldStr){
            $("#"+Interaction.oldStr).css("opacity", 1)
        }

        if(Interaction.oldStr2){
            $("#"+Interaction.oldStr2).css("opacity", 1)
        }

        if(Interaction.answerId)
            $("#"+Interaction.answerId.replace("Hover", "")).css("opacity", 1);

        if(Interaction.answerId2)
            $("#"+Interaction.answerId2.replace("Hover", "")).css("opacity", 1);

        Interaction.activeStr = null;
        Interaction.activeStr2 = null;

        if(Interaction.emptySetCounter == Interaction.emptySetIndex){

            var emptySetDefs = [];
            emptySetDefs[0] = "2'den büyük 3'ten küçük doğal sayılar";
            emptySetDefs[1] = "3'den büyük 5'ten küçük asal sayılar";
            emptySetDefs[2] = "9'dan büyük çift rakamlar";
            emptySetDefs[3] = "2'den küçük asal sayılar";
            emptySetDefs[4] = "0'dan küçük doğal sayılar";

            var emptySetIndex = Util.randomInteger(0, 5);

            Interaction.questionSet = new Set({type:Set.ELEMENTS, elements:[]});
            Interaction.questionSet.definition = emptySetDefs[emptySetIndex];
            $('#setDefinition').html(Interaction.questionSet.definition);

            Interaction.length = 0;
        }
        else{

            switch(Interaction.randomNumber){
                case 1:{     // Set.SMALLER_THAN
                    var randNum = Util.randomInteger(1,7);
                    Interaction.questionSet = new Set({type:Set.SMALLER_THAN, value:randNum});
                    $('#setDefinition').html(Interaction.questionSet.definition);
                    break;
                }
                case 2:{     // Set.SMALLER_THAN_ODD
                    var randNum = Util.randomInteger(2,12);
                    Interaction.questionSet = new Set({type:Set.SMALLER_THAN_ODD, value:randNum});
                    $('#setDefinition').html(Interaction.questionSet.definition);
                    break;
                }
                case 3:{     // Set.SMALLER_THAN_EVEN
                    var randNum = Util.randomInteger(1,11);
                    Interaction.questionSet = new Set({type:Set.SMALLER_THAN_EVEN, value:randNum});
                    $('#setDefinition').html(Interaction.questionSet.definition);
                    break;
                }
                case 4:{     // Set.SMALLER_THAN_PRIME
                    var randNum = Util.randomInteger(3,14);
                    Interaction.questionSet = new Set({type:Set.SMALLER_THAN_PRIME, value:randNum});
                    $('#setDefinition').html(Interaction.questionSet.definition);
                    break;
                }
                case 5:{     // Set.SMALLER_THAN_GREATER_THAN
                    var randNum1 = Util.randomInteger(1,90);
                    var randNum2 = Util.randomInteger(randNum1+2, randNum1+8);
                    Interaction.questionSet = new Set({type:Set.SMALLER_THAN_GREATER_THAN, value1:randNum1, value2:randNum2});
                    $('#setDefinition').html(Interaction.questionSet.definition);
                    break;
                }
                case 6:{     // Set.SMALLER_THAN_GREATER_THAN_ODD
                    var randNum1 = Util.randomInteger(1,80);
                    var randNum2 = randNum1+Util.randomInteger(4,13);
                    Interaction.questionSet = new Set({type:Set.SMALLER_THAN_GREATER_THAN_ODD, value1:randNum1, value2:randNum2});
                    $('#setDefinition').html(Interaction.questionSet.definition);
                    break;
                }
                case 7:{     // Set.SMALLER_THAN_GREATER_THAN_EVEN
                    var randNum1 = Util.randomInteger(1,80);
                    var randNum2 = randNum1+Util.randomInteger(4,13);
                    Interaction.questionSet = new Set({type:Set.SMALLER_THAN_GREATER_THAN_EVEN, value1:randNum1, value2:randNum2});
                    $('#setDefinition').html(Interaction.questionSet.definition);
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
                    Interaction.questionSet = new Set({type:Set.SMALLER_THAN_GREATER_THAN_PRIME, value1:randNum1, value2:randNum2});
                    $('#setDefinition').html(Interaction.questionSet.definition);
                    break;
                }
                case 9:{     // Set.FACTORS
                    do{
                        var randNum = Util.randomInteger(1,97);
                        var factors = [];
                        factors = Util.getFactors(randNum);
                    }while(factors.length > 6)
                    Interaction.questionSet = new Set({type:Set.FACTORS, value:randNum});
                    $('#setDefinition').html(Interaction.questionSet.definition);
                    break;
                }
                case 10:{    // Set.MULTIPLIES
                    var randNum1 = Util.randomInteger(2,17);
                    var randNum2 = randNum1+randNum1*Util.randomInteger(0, 6)+Util.randomInteger(1,randNum1);
                    Interaction.questionSet = new Set({type:Set.MULTIPLIES, value1:randNum1, value2:randNum2});
                    $('#setDefinition').html(Interaction.questionSet.definition);
                    break;
                }
            }
            Interaction.length = Interaction.questionSet.elements.length;
        }

        if(Interaction.length == 0){
            var inp = Interaction.appendInput({
                width:'26px',
                height:'24px',
                position:'static'
            }, true, true);

            $('#inputs').append(inp);
        }
        else{
            for(var i = 0; i < Interaction.length; i++){
                Interaction.appendInput({
                    width:'26px',
                    height:'24px',
                    position:'static'
                });
            }
            for(var i = 0; i < Interaction.length; i++){
                $('#inputs').append(Interaction.inputs[i]);
                if(i != Interaction.length-1){
                    $('#inputs').append(" , ");
                }
            }
        }

        var b = Util.randomInteger(0,21);
        var setLetterStr = ""+Interaction.letters[b]+" = ";
        $('#setLetter').html(setLetterStr);
        $('#setLetter2').html(setLetterStr);
        $('#sId').html(setLetterStr[0]);

        switch(Interaction.length){
            case 0:
                break;
            case 1:{
                $('#e1').css({
                    top:'42px',
                    left:'62px'
                });
                break;
            }
            case 2:{
                $('#e1').css({
                    top:'40px',
                    left:'34px'
                });
                $('#e2').css({
                    top:'40px',
                    left:'96px',
                });
                break;
            }
            case 3:{
                $('#e1').css({
                    top:'40px',
                    left:'30px'
                });
                $('#e2').css({
                    top:'15px',
                    left:'67px',
                });
                $('#e3').css({
                    top:'61px',
                    left:'84px'
                });
                break;
            }
            case 4:{
                $('#e1').css({
                    top:'22px',
                    left:'34px'
                });
                $('#e2').css({
                    top:'22px',
                    left:'88px',
                });
                $('#e3').css({
                    top:'66px',
                    left:'34px'
                });
                $('#e4').css({
                    top:'66px',
                    left:'88px',
                });
                break;
            }
            case 5:{
                $('#e1').css({
                    top:'20px',
                    left:'32px'
                });
                $('#e2').css({
                    top:'20px',
                    left:'90px',
                });
                $('#e3').css({
                    top:'68px',
                    left:'32px'
                });
                $('#e4').css({
                    top:'68px',
                    left:'90px',
                });
                $('#e5').css({
                    top:'42px',
                    left:'62px'
                });
                break;
            }
            case 6:{
                $('#e1').css({
                    top:'42px',
                    left:'62px'
                });
                $('#e2').css({
                    top:'12px',
                    left:'70px',
                });
                $('#e3').css({
                    top:'30px',
                    left:'106px'
                });
                $('#e4').css({
                    top:'66px',
                    left:'34px',
                });
                $('#e5').css({
                    top:'18px',
                    left:'24px'
                });
                $('#e6').css({
                    top:'66px',
                    left:'90px',
                });
                break;
            }
        }

        $('#vennLetter').html(setLetterStr[0]);
        for(var i = 1; i <= Interaction.length; i++){
            $('#e'+i).html("."+Interaction.questionSet.elements[i-1]);
        }

        if(Interaction.length == 0){
            r = 0;
        }
        else{
            var r = Util.randomInteger(0,3);
        }
        if(r == 0){ // both elements are not elements of Set
            var a = [];
            for(var i = 0; i < Interaction.questionSet.elements.length; i++){
                a.push(Interaction.questionSet.elements[i]);
            }
            Interaction.element1 = Util.randomInteger(0, 99, a);
            a.push(Interaction.element1);
            Interaction.element2 = Util.randomInteger(0, 99, a);
        }
        else if(r == 1){ // only first element is element of Set
            do{
                Interaction.element1 = Util.randomInteger(0,99);
            }while(Interaction.questionSet.elements.indexOf(Interaction.element1) == -1)
            Interaction.element2 = Util.randomInteger(0,99, Interaction.questionSet.elements);
        }
        else{ // only second element is element of Set
            do{
                Interaction.element2 = Util.randomInteger(0,99);
            }while(Interaction.questionSet.elements.indexOf(Interaction.element2) == -1)
            Interaction.element1 = Util.randomInteger(0,99, Interaction.questionSet.elements);
        }

        $('#ques1').html(Interaction.element1);
        $('#setL1').html(setLetterStr[0]);
        $('#ques2').html(Interaction.element2);
        $('#setL2').html(setLetterStr[0]);


        Interaction.appendInput({
            position:'absolute',
            top:'-4px',
            left:'320px',
            width:'32px',
            height:'30px',
            fontSize:'24px'
        });
        if(Interaction.length == 0){
            $(Interaction.thirdQuestionDiv).append(Interaction.inputs[1]);
        }
        else{
            $(Interaction.thirdQuestionDiv).append(Interaction.inputs[Interaction.length]);
        }

    },
	preCheck : function(){
        if(Interaction.myPause == 1){
            return false;
        }
        else{
            if(Interaction.myTrial == 0){ // question1
                if(Interaction.length == 0){
                    if(Interaction.inputs[0].value == ""){
                        Interaction.setStatus('Tebrikler!', true);
                        Interaction.vennDiagram.opacity = 1;
                        $('#vennElements').css("opacity", 1);
                        Interaction.myTrial += 1;

                        Interaction.animateDots();
                        setTimeout('$(Interaction.secondQuestionDiv).css("opacity", 1);$("#question21").css("opacity", 1);$(Interaction.sortingDiv).css("opacity", 1);Interaction.setStatus("")', 2600);

                        Interaction.inputs[0].readOnly = true;
                        setTimeout(function(){
                            $(Interaction.inputs).each(function(){
                                this.blur();
                            })

                        }, 100);
                        return false;
                    }
                    else{
                        Interaction.setStatus('Yanlış cevap, doğrusu boş küme olacaktı!',false);
                        Interaction.inputs[0].value = "";
                        Interaction.vennDiagram.opacity = 1;
                        $('#vennElements').css("opacity", 1);
                        Interaction.myTrial += 1;

                        Interaction.animateDots();
                        setTimeout('$(Interaction.secondQuestionDiv).css("opacity", 1);$("#question21").css("opacity", 1);$(Interaction.sortingDiv).css("opacity", 1);Interaction.setStatus("")', 2600);

                        Interaction.inputs[0].readOnly = true;
                        setTimeout(function(){
                            $(Interaction.inputs).each(function(){
                                this.blur();
                            })

                        }, 100);
                        return false;
                    }
                }
                else{
                    var isAllSet = 1;
                    for(var k = 0; k < Interaction.length; k++){
                        if(Interaction.inputs[k].value == ""){
                            isAllSet = 0;
                        }
                    }
                    if(isAllSet == 0){
                        Interaction.setStatus('Lütfen tüm kutucukları doldurunuz.', false);
                    }
                    else{
                        var myArr = [];
                        for(var i = 0; i < Interaction.length; i++){
                            myArr[i] = Interaction.inputs[i].value;
                        }
                        if(Interaction.checkAnswers(myArr)){
                            Interaction.setStatus('Tebrikler!',true);
                            for(var i = 0; i < Interaction.length; i++){
                                $(Interaction.inputs[i]).css("color","green");
                                Interaction.inputs[i].readOnly = true;
                                setTimeout(function(){
                                    $(Interaction.inputs).each(function(){
                                        this.blur();
                                    })

                                }, 100);
                            }
                            Interaction.vennDiagram.opacity = 1;
                            $('#vennElements').css("opacity", 1);
                        }
                        else{
                            Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);
                            for(var i = 0; i < Interaction.length; i++){
                                Interaction.inputs[i].value = Interaction.questionSet.elements[i];
                                $(Interaction.inputs[i]).css("color", "green");
                                Interaction.inputs[i].readOnly = true;
                                setTimeout(function(){
                                    $(Interaction.inputs).each(function(){
                                        this.blur();
                                    })

                                }, 100);
                            }
                            Interaction.vennDiagram.opacity = 1;
                            $('#vennElements').css("opacity", 1);

                        }
                        Interaction.myTrial += 1;
                        Interaction.animateDots();
                        setTimeout('$(Interaction.secondQuestionDiv).css("opacity", 1);$("#question21").css("opacity", 1);$(Interaction.sortingDiv).css("opacity", 1);Interaction.setStatus("")', 2600);
                    }
                    return false;
                }
            }
            else if(Interaction.myTrial == 1){ // question2
                Interaction.dropped = Interaction.activeStr;
                if(Interaction.dropped == null || Interaction.dropped == undefined){
                    Interaction.setStatus('Lütfen işaretlerden birini kutucuğa sürükleyiniz.', 'alert')
                    return false;
                }
                else{
                    if(Interaction.questionSet.elements.indexOf(Interaction.element1) == -1){
                        Interaction.answerIdStr = "notElementActive";
                    }
                    else{
                        Interaction.answerIdStr = "elementActive";
                    }
                    if(Interaction.dropped == Interaction.answerIdStr){
                        Interaction.setStatus('Tebrikler!', true);
                        Interaction.animateDots();
                        setTimeout('$("#question22").css("opacity", 1);Interaction.setStatus("")',2600);
                        $("#sortingDiv img").draggable("enable");
                        $("#dropDiv1").droppable({disabled: true});
                    }
                    else{
                        Interaction.myPause = 1;
                        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);
                        $("#"+Interaction.oldActiveStr).css("opacity", 0);
                        Interaction.answerId = Interaction.answerIdStr.replace("Active", "Hover");
                        $("#"+Interaction.oldActiveStr.replace("Active", "")).css("opacity", 1)
                        $("#"+Interaction.answerId.replace("Hover", "")).css("opacity", 0)
                        Interaction.clone2 = $("#"+Interaction.answerId).clone();
                        Interaction.clone2.attr('id', 'flying');

                        $(Interaction.container).append(Interaction.clone2);
                      //  $(Interaction.clone2).insertAfter($('#dropDiv1'));

                        var ansTop = $(Interaction.sortingDiv).position().top;
                        var ansLeft = $(Interaction.sortingDiv).position().left;

                        if(Interaction.answerId == "notElementHover")
                            ansLeft += 40;
                        var flyTop = $('#dropDiv1').position().top + 143;
                        var flyLeft = $('#dropDiv1').position().left + 35;

                        $(Interaction.clone2).css("position", "absolute")
                            .css("top",ansTop)
                            .css("left", ansLeft)
                            .css("opacity", 0);

                        $(Interaction.clone2).delay(0).animate(
                            {opacity:3, top: flyTop, left:flyLeft},
                            2000,
                            'easeInOutQuad',
                            function(){
                                $(Interaction.clone2).css("opacity", 0);
                                $("#"+Interaction.answerIdStr).css("opacity", 1)
                            }
                        );
                        setTimeout('Interaction.myPause = 0;',2700);
                        Interaction.animateDots();
                        setTimeout('$("#question22").css("opacity", 1);$("#sortingDiv img").draggable("enable");$("#"+Interaction.answerId.replace("Hover", "")).css("opacity", 1);$("#dropDiv1").droppable({disabled: true});Interaction.setStatus("")', 2600)
                    }

                    if(Interaction.oldStr){
                        $("#"+Interaction.oldStr).css("opacity", 1)
                    }

                    Interaction.myTrial += 1;
                    return false;
                }
            }
            else if(Interaction.myTrial == 2){ // question3
                Interaction.dropped2 = Interaction.activeStr2;
                if(Interaction.dropped2 == null || Interaction.dropped2 == undefined){
                    Interaction.setStatus('Lütfen işaretlerden birini kutucuğa sürükleyiniz.', 'alert')
                    return false;
                }
                else{
                    if(Interaction.questionSet.elements.indexOf(Interaction.element2) == -1){
                        Interaction.answerIdStr2 = "notElement2Active";
                    }
                    else{
                        Interaction.answerIdStr2 = "element2Active";
                    }
                    if(Interaction.dropped2 == Interaction.answerIdStr2){
                        Interaction.setStatus('Tebrikler!', true);
                        $("#dropDiv2").droppable({disabled: true});
                        Interaction.animateDots();
                        setTimeout('$(Interaction.thirdQuestionDiv).css("opacity", 1);Interaction.setStatus("")',2600);
                        if(Interaction.length == 0){
                            Interaction.inputs[1].focus();
                        }
                        else{
                            Interaction.inputs[Interaction.length].focus();
                        }
                    }
                    else{
                        Interaction.myPause = 1;
                        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);
                        $("#"+Interaction.oldActiveStr2).css("opacity", 0);
                        Interaction.answerId2 = Interaction.answerIdStr2.replace("2Active", "Hover");
                        $("#"+Interaction.oldActiveStr2.replace("2Active", "")).css("opacity", 1)
                        $("#"+Interaction.answerId2.replace("Hover", "")).css("opacity", 0)
                        Interaction.clone22 = $("#"+Interaction.answerId2).clone();
                        Interaction.clone22.attr('id', 'flying2');

                        $(Interaction.container).append(Interaction.clone22);
                   //     $(Interaction.clone22).insertAfter($('#dropDiv2'));

                        var ansTop2 = $(Interaction.sortingDiv).position().top;
                        var ansLeft2 = $(Interaction.sortingDiv).position().left;

                        if(Interaction.answerId2 == "notElementHover")
                            ansLeft2 += 40;
                        var flyTop2 = $('#dropDiv2').position().top + 143;
                        var flyLeft2 = $('#dropDiv2').position().left + 239;

                        $(Interaction.clone22).css("position", "absolute")
                            .css("top",ansTop2)
                            .css("left", ansLeft2)
                            .css("opacity", 0);

                        $(Interaction.clone22).delay(0).animate(
                            {opacity:3, top: flyTop2, left:flyLeft2},
                            2000,
                            'easeInOutQuad',
                            function(){
                                $(Interaction.clone22).css("opacity", 0);
                                $("#"+Interaction.answerIdStr2).css("opacity", 1)
                            }
                        );
                        setTimeout('Interaction.myPause = 0;',2700);
                        Interaction.animateDots();
                        setTimeout('$("#"+Interaction.answerId2.replace("Hover", "")).css("opacity", 1);$("#dropDiv2").droppable({disabled: true});$(Interaction.thirdQuestionDiv).css("opacity", 1);Interaction.setStatus("")', 2600)
                        if(Interaction.length == 0){
                            setTimeout('Interaction.inputs[1].focus();', 2700)
                        }
                        else{
                            setTimeout('Interaction.inputs[Interaction.length].focus();', 2700)
                        }
                    }

                    if(Interaction.oldStr2){
                        $("#"+Interaction.oldStr2).css("opacity", 1)
                    }

                    $('#sortingDiv img').draggable("disable");

                    Interaction.myTrial += 1;
                    return false;
                }
            }
            else{
                return true;
            }
        }
		
    },
	isAnswerCorrect : function(value){
        if(Interaction.length == 0){
            return value[1] == Interaction.length;
        }
        else{
            return value[Interaction.length] == Interaction.length;
        }
    },
	onCorrectAnswer : function(){
        if(Interaction.length == 0){
            $(Interaction.inputs[1]).css("color", "green");
        }
        else{
            $(Interaction.inputs[Interaction.length]).css("color", "green");
        }
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.',false);
        if(Interaction.length == 0){
            Interaction.inputs[1].value = Interaction.length;
            $(Interaction.inputs[1]).css("color", "green");
        }
        else{
            Interaction.inputs[Interaction.length].value = Interaction.length;
            $(Interaction.inputs[Interaction.length]).css("color", "green");
        }
    },
    checkAnswers : function(myArr){
        var correctN = 0;
        var d = [];
        for(var i = 0; i < Interaction.length; i++){
            d[i] = Interaction.questionSet.elements[i];
        }
        for(var i = 0; i < Interaction.length; i++){
            for(var j = 0; j < Interaction.length; j++){
                if(myArr[i] == d[j]){
                    myArr[i] = "axxwt";
                    d[j] = "axxwt";
                }
            }
        }
        for(var i = 0; i < Interaction.length; i++){
            if(myArr[i] == "axxwt"){
                correctN += 1;
            }
        }
        if(correctN == Interaction.length){
            return true;
        }
        else{
            return false;
        }
    },
    animateDots : function(){
        Interaction.myPause = 1;
        Interaction.loadingDots.opacity = 1;

        for(var i = 0; i < 4; i++){
            Interaction.loadingDots.children[i].animate({
                style:{
                    opacity:1,
                },
                duration:400,
                delay:500*i+200,
                animationType:'easeInOutQuad'
            });
            Interaction.loadingDots.children[i].animate({
                style:{
                    opacity:0.2
                },
                duration:400,
                delay:500*i+700,
                animationType:'easeInOutQuad',
            });
        }
        setTimeout('Interaction.loadingDots.opacity = 0;Interaction.myPause = 0;',2600)
    },

}
;




