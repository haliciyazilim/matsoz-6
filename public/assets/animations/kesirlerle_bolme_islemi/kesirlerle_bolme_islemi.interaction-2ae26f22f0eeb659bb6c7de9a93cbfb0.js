var Interaction = {

    getFramework:function(){
        return 'paper';
    },
    images:[

    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yanda verilen bölme işlemini birinci kesri aynen yazıp, ikinci kesri ters çevirip çarparak yapabilirsiniz. Kontrol etmeyi unutmayınız.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.appendStatus({
            bottom:'30px',
            right:'150px',
            width:'370px',
            height:'26px',
            textAlign:'center'
            //    border:'1px solid'
        });
        Interaction.appendButton({
            bottom:'30px',
            right:'30px'
        });

        Interaction.appendInput({
            position:'absolute',
            top:'-9px',
            left:'202px',
            height:'32px',
            width:'42px',
            fontSize:'22px'
        });

        Interaction.appendInput({
            position:'absolute',
            top:'35px',
            left:'202px',
            height:'32px',
            width:'42px',
            fontSize:'22px'
        });

        Interaction.questionDiv = Util.dom({parent:Interaction.container, tag:'div', css:questionDivStyle,
            html:'<div id="firstFracDiv" style="position:absolute;top:0px;left:0px;width:65px;height:60px;"></div>' +
                '<span id="intPlus" style="position:absolute;top:17px;left:76px;font-weight:bold;">:</span>' +
                '</div><div id="secondFracDiv" style="position:absolute;top:0px;left:96px;width:65px;height:60px;"></div>' +
                '<span id="intEq" style="position:absolute;top:18px;left:170px;">=</span>' +
                '<div id="answerLine" style="position:absolute;top:29px;left:200px;width:48px;height:1px;border-top:2px solid;padding:0"></div>'
        });

        $(Interaction.inputs[0]).attr("max-length",3);
        $(Interaction.inputs[1]).attr("max-length",3);

        $(Interaction.questionDiv).append(Interaction.inputs[0]);
        $(Interaction.questionDiv).append(Interaction.inputs[1]);

        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){

        if(Interaction.answerDiv){
            $(Interaction.answerDiv).remove();
        }

        $('#firstFracDiv').html('');
        $('#secondFracDiv').html('');

        $(Interaction.inputs[0]).css("color","black");
        $(Interaction.inputs[1]).css("color","black");

        var nom1, nom2, denom1, denom2;

        denom1 = Util.randomInteger(2,7);
        denom2 = Util.randomInteger(2,7,[denom1]);

        do{
            nom1 = Util.randomInteger(1,10);
        } while(nom1 == denom1 || nom1 % denom1 == 0);
        do{
            nom2 = Util.randomInteger(1,10);
        } while(nom2 == denom2 || nom2 % denom2 == 0);

        console.log("nom1: ",nom1);
        console.log("denom1: ",denom1);
        console.log("nom2: ",nom2);
        console.log("denom2: ",denom2);

        Interaction.firstFrac = new RationalNumber({factor:1,nominator:nom1,denominator:denom1});
        Interaction.secondFrac = new RationalNumber({factor:1,nominator:nom2,denominator:denom2});

        Interaction.answer = Interaction.firstFrac.division(Interaction.secondFrac);
        Interaction.answer.convertToCompoundForm();


        Interaction.firstH = Interaction.firstFrac.toHTML(24);
        $(Interaction.firstH).css("right","0px");
        Interaction.secondH = Interaction.secondFrac.toHTML(24);
        $(Interaction.secondH).css("left","0px");

        if(Interaction.secondFrac.integer){
            $('#intEq').css("left","170px");
            $('#answerLine').css("left","196px");
            $(Interaction.inputs[0]).css("left","198px");
            $(Interaction.inputs[1]).css("left","198px");
            $(Interaction.questionDiv).css("left","140px");
        }
        else{
            $('#intEq').css("left","140px");
            $('#answerLine').css("left","164px");
            $(Interaction.inputs[0]).css("left","166px");
            $(Interaction.inputs[1]).css("left","166px");
            $(Interaction.questionDiv).css("left","150px")
        }

        $('#firstFracDiv').append(Interaction.firstH);
        $('#secondFracDiv').append(Interaction.secondH);
    },
    preCheck : function(){

    },
    isAnswerCorrect : function(value){
        if(value[0] != 0 && value[1] != 0){
            if(value[0]*Interaction.answer.denominator == value[1]*Interaction.answer.nominator){
                return true;
            }
            else{
                return false;
            }
        }
        else{
            return false;
        }
    },
    onCorrectAnswer : function(){

    },
    onWrongAnswer : function(){

    },
    onFail : function(){
        Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir!", false);
        $(Interaction.inputs[0]).css("color","red");
        $(Interaction.inputs[1]).css("color","red");

        Interaction.showAnswer();

    },
    showAnswer : function(){
        Interaction.answerDiv = Util.dom({parent:Interaction.container, tag:'div', css:answerDivStyle,
            html:'<div id="sf11" style="color:black;position:absolute;top:20px;left:-52px;width:40px;height:42px;padding:0;margin:0;line-height:20px;">' +
                '<div id="sint11" style="width:20px;height:42px;text-align:center;float:left;line-height:42px;"></div>' +
                '<div id="snom11" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '<div id="sline11" style="height:1px;width:20px;border-top:2px solid;padding:0;float:left;"></div>' +
                '<div id="sdenom11" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '</div>' +
                '<span id="t11" style="color:black;position:absolute;top:32px;left:-8px;font-weight:bold;">:</span>' +
                '<div id="sf22" style="color:black;position:absolute;top:20px;left:-16px;width:40px;height:42px;padding:0;margin:0;line-height:20px;">' +
                '<div id="sint22" style="width:20px;height:42px;text-align:center;float:left;line-height:42px;"></div>' +
                '<div id="snom22" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '<div id="sline22" style="height:1px;width:20px;border-top:2px solid;padding:0;float:left;"></div>' +
                '<div id="sdenom22" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '</div>' +
                '<span id="ee11" style="position:absolute;top:33px;left:30px;">=</span>' +
                '<div id="sf1" style="position:absolute;top:20px;left:20px;width:40px;height:42px;padding:0;margin:0;line-height:20px;">' +
                '<div id="sint1" style="width:20px;height:42px;text-align:center;float:left;line-height:42px;"></div>' +
                '<div id="snom1" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '<div id="sline1" style="height:1px;width:20px;border-top:2px solid;padding:0;float:left;"></div>' +
                '<div id="sdenom1" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '</div>' +
                '<span id="t1" style="position:absolute;top:32px;left:70px;">•</span>' +
                '<div id="sf2" style="position:absolute;top:20px;left:72px;width:40px;height:42px;padding:0;margin:0;line-height:20px;">' +
                '<div id="sint2" style="width:20px;height:42px;text-align:center;float:left;line-height:42px;"></div>' +
                '<div id="snom2" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '<div id="sline2" style="height:1px;width:20px;border-top:2px solid;padding:0;float:left;"></div>' +
                '<div id="sdenom2" style="text-align:center;width:20px;height:20px;float:left;"></div>' +
                '</div>' +
                '<span id="ee1" style="position:absolute;top:33px;left:118px;">=</span>' +
                '<div id="sf3" style="position:absolute;top:20px;left:134px;width:60px;height:42px;padding:0;margin:0;line-height:20px;">' +
                '<div id="snom3" style="text-align:center;width:60px;height:20px;float:left;"></div>' +
                '<div id="sline3" style="height:1px;width:60px;border-top:2px solid;padding:0;float:left;"></div>' +
                '<div id="sdenom3" style="text-align:center;width:60px;height:20px;float:left;"></div>' +
                '</div>' +
                '<span id="ee2" style="position:absolute;top:33px;left:200px;">=</span>' +
                '<div id="ff" style="position:absolute;top:20px;left:216px;width:30px;height:42px;padding:0;margin:0;line-height:20px;">' +
                '<div id="fnom" style="text-align:center;width:30px;height:20px;float:left;"></div>' +
                '<div id="fline" style="height:1px;width:30px;border-top:2px solid;padding:0;float:left;"></div>' +
                '<div id="fdenom" style="text-align:center;width:30px;height:20px;float:left;"></div>' +
                '</div>'
        });

        if(Interaction.secondFrac.integer){
            $('#sf1').css("left","20px");
            $('#fact1').css("left","38px");
            $('#t1').css("left","66px");
        }
        else{
            $('#sf1').css("left","30px");
            $('#fact1').css("left","48px");
            $('#t1').css("left","78px");
        }

        var snomStr = "";

        snomStr += ""+Interaction.firstFrac.nominator+" • ";
        snomStr += ""+Interaction.secondFrac.denominator;

        $('#snom11').html(Interaction.firstFrac.nominator);
        $('#snom22').html(Interaction.secondFrac.nominator);

        $('#sdenom11').html(Interaction.firstFrac.denominator);
        $('#sdenom22').html(Interaction.secondFrac.denominator);

        $('#snom1').html(Interaction.firstFrac.nominator);
        $('#snom2').html(Interaction.secondFrac.denominator);

        $('#sdenom1').html(Interaction.firstFrac.denominator);
        $('#sdenom2').html(Interaction.secondFrac.nominator);

        $('#snom3').html(snomStr);
        $('#sdenom3').html(Interaction.answer.denominator);

        $('#fnom').html(Interaction.answer.nominator);
        $('#fdenom').html(Interaction.answer.denominator);
    }
}
;
