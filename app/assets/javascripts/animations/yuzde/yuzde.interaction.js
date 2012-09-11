var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki eşitlikte boş kutuları doldurunuz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.appendButton({
            bottom:"30px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"40px",
            right:"200px"
        });

        Interaction.denomArr = [2,4,5,10,20,25,50];
        Interaction.denom2Arr = [200,400,500];
        Interaction.setRandomGenerator(3);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.randomNumber = randomNumber;
        Interaction.flushInputs();
        Interaction.myRandom = Util.randomInteger(0,3);
        if(Interaction.questionDiv){
            $(Interaction.questionDiv).remove();
        }

        var nom, denom, a;
        switch(randomNumber){
            case 0:     // simple
                denom = Interaction.denomArr[Util.randomInteger(0,7)];
                a = 100/denom;
                nom = Util.randomInteger(1,denom);
                Interaction.rationalNumber = new RationalNumber({factor:1,nominator:nom,denominator:denom});
                break;
            case 1:     // compound
                denom = Interaction.denomArr[Util.randomInteger(0,7)];
                a = 100/denom;
                nom = Util.randomInteger(denom+1,2*denom);
                Interaction.rationalNumber = new RationalNumber({factor:1,nominator:nom,denominator:denom});
                break;
            case 2:     // so-simple
                denom = Interaction.denom2Arr[Util.randomInteger(0,3)];
                a = 100/denom;
                b = denom/100;
                do{
                    nom = Util.randomInteger(2,4);
                }while(nom % b == 0)
                Interaction.rationalNumber = new RationalNumber({factor:1,nominator:nom,denominator:denom});
                break;
        }
        Interaction.nom = Interaction.rationalNumber.nominator;
        Interaction.denom = Interaction.rationalNumber.denominator;
        var c = (Interaction.nom * a) / 100;
        c = Math.floor(c*10000)/10000;

        var d = ""+c;
        var e = d.split(".");

        Interaction.d1 = e[0];
        Interaction.d2 = e[1];
        var t = Math.floor(c*10000)/100;
        var y = ""+t;
        var u = y.split(".");
       Interaction.pp = ""+u[0]+","+u[1];
        if(Interaction.randomNumber == 2){
            Interaction.e = Interaction.pp;
        }
        else{
            Interaction.e = t;
        }

        Interaction.questionDiv = Util.dom({parent:Interaction.container, tag:'div', css:questionDivStyle});

        var b;
        var p = Interaction.nom*a;
        p = Math.floor(p*10000)/10000;
        var g = p * 10;
        if(p % 10 == 0){
            b = 1;
        }
        else if(p % 1 == 0){
            b = 2;
        }
        else if(g % 1 == 0){
            b = 3;
        }
        else{
            b = 4;
        }

        var kk = ""+Interaction.d1+","+Interaction.d2;

        switch(Interaction.myRandom){
            case 0:
                Interaction.appendInput({
                    position:'absolute',
                    top:'26px',
                    left:'248px',
                    width:'68px',
                    height:'34px',
                    fontSize:'28px'
                });
                var myNode = Interaction.rationalNumber.toHTML(28);
                $(Interaction.questionDiv).append(myNode);
                $(myNode).css({
                    position:'absolute',
                    top:'10px',
                    left:'-22px'
                });
                $(Interaction.questionDiv).append('<span id="eqq1" style="position:absolute;top:29px;left:66px;"> = </span>' +
                    '<span id="dec" style="position:absolute;top:28px;left:86px;text-align:center;width:100px;"></span>' +
                    '<span id="eqq2" style="position:absolute;top:29px;left:190px;"> = </span>' +
                    '<span id="decc" style="position:absolute;top:29px;left:214px;"> % </span>');
                $('#dec').html(kk);

                $(Interaction.input).attr("maxLength",4);
                $(Interaction.questionDiv).append(Interaction.input);
                break;
            case 1:
                Interaction.appendInput({
                    position:'absolute',
                    top:'26px',
                    left:'88px',
                    width:'30px',
                    height:'34px',
                    fontSize:'28px'
                });

                Interaction.appendInput({
                    position:'absolute',
                    top:'26px',
                    left:'130px',
                    width:'52px',
                    height:'34px',
                    fontSize:'28px'
                });

                var myNode = Interaction.rationalNumber.toHTML(28);
                $(Interaction.questionDiv).append(myNode);
                $(myNode).css({
                    position:'absolute',
                    top:'10px',
                    left:'-22px'
                });

                $(Interaction.questionDiv).append('<span id="eqq1" style="position:absolute;top:29px;left:66px;"> = </span>' +
                    '<span id="eqq2" style="position:absolute;top:29px;left:190px;"> = </span>' +
                    '<span id="comma" style="position:absolute;top:29px;left:120px;">,</span>' +
                    '<span id="decc" style="position:absolute;top:29px;left:214px;"></span>');
                $('#decc').html(" %"+Interaction.e);

                $(Interaction.inputs[0]).attr("maxLength",1);
                $(Interaction.inputs[1]).attr("maxLength",3);

                $(Interaction.questionDiv).append(Interaction.inputs[0]);
                $(Interaction.questionDiv).append(Interaction.inputs[1]);
                break;
            case 2:
                Interaction.appendInput({
                    position:'absolute',
                    top:'2px',
                    left:'0px',
                    width:'52px',
                    height:'34px',
                    fontSize:'28px'
                });

                Interaction.appendInput({
                    position:'absolute',
                    top:'48px',
                    left:'0px',
                    width:'52px',
                    height:'34px',
                    fontSize:'28px'
                });

                $(Interaction.questionDiv).append('<span id="eqq1" style="position:absolute;top:29px;left:66px;"> = </span>' +
                    '<div id="lline" style="position:absolute;left:-2px;top:42px;width:60px;height:1px;padding:0;border-top:2px solid;"></div>' +
                    '<span id="eqq2" style="position:absolute;top:29px;left:190px;"> = </span>' +
                    '<span id="dec" style="position:absolute;top:28px;left:86px;text-align:center;width:100px;"></span>' +
                    '<span id="decc" style="position:absolute;top:29px;left:214px;"></span>');
                $('#dec').html(kk);
                $('#decc').html(" %"+Interaction.e);

                $(Interaction.inputs[0]).attr("maxLength",3);
                $(Interaction.inputs[1]).attr("maxLength",3);

                $(Interaction.questionDiv).append(Interaction.inputs[0]);
                $(Interaction.questionDiv).append(Interaction.inputs[1]);
                break;
        }
    },
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        if(Interaction.myRandom == 0){
            if(Interaction.randomNumber == 2){
                if(value == Interaction.pp || value == Interaction.pp+"0"){
                    return true;
                }
                else{
                    return false;
                }
            }
            else{
                return value == Interaction.e;
            }
        }
        else if(Interaction.myRandom == 1){
            var m = ""+Interaction.d2+"0";
            if(value[0] == Interaction.d1 && (value[1] == Interaction.d2 || value[1] == m)){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return ((value[0] * Interaction.denom) == (value[1] * Interaction.nom))
        }
    },
	onCorrectAnswer : function(){
		for(var i = 0; i < Interaction.inputs.length; i++){
            $(Interaction.inputs[i]).css("color","green");
        }
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir!',false);
        if(Interaction.myRandom == 0){
            Interaction.input.value = Interaction.e;
        }
        else if(Interaction.myRandom == 1){
            Interaction.inputs[0].value = Interaction.d1;
            Interaction.inputs[1].value = Interaction.d2;
        }
        else{
            Interaction.inputs[0].value = Interaction.nom;
            Interaction.inputs[1].value = Interaction.denom;
        }

        for(var i = 0; i < Interaction.inputs.length; i++){
            $(Interaction.inputs[i]).css("color","green");
        }
    }
}