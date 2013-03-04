function __Styles(){
	operatorFillColor = "#c00000";
    operatorTextColor = "white"; // do bold
    operandBoxesFillColor = "#41818a";
    operandTextColor = "white"; // do bold
    generalStrokeColor = "#101010";

    disabledInputBackgroundColor = "#006e7d";
    disabledInputOpacity = 0.3;

    selectedInputStrokeColor = "#006e7d";
    selectedInputStrokeWidth = 2; // try this

    // selectedInput "border-style", "inset" -> try this also
}
;
var getNewQuestion = function(){

    Interaction.operand1 = Util.randomInteger(1,11);
    Interaction.operand2 = Util.randomInteger(1,11,[Interaction.operand1]);

    if(Interaction.operator == "+"){
        Interaction.answer = Interaction.operand1 + Interaction.operand2;
        Interaction.operatorText.content = "+";
    }
    else{
        Interaction.answer = Interaction.operand1 * Interaction.operand2;
        Interaction.operatorText.content = "x";
    }

    for(var i = 0; i < 100; i++){
        $(Interaction.inputs[i]).css("opacity", 0.3)
            .css("background-color", "white")
            .css("box-sizing", "border-box")
            .css("border", "none")
            .css("border-right", "1px solid #999")
            .css("border-bottom", "1px solid #999")
            .css("border-color", "#999")
            .css("color", "black")
        Interaction.inputs[i].isEmpty = true;
        Interaction.inputs[i].readOnly = true;
    }

    var numOfIter1 = Interaction.operand2 - 1;
    var numOfIter2 = Interaction.operand1 - 1;

    for(var i = 0; i < numOfIter1; i++){
        $(Interaction.inputs[Interaction.operand1-1+(10*i)]).css("background-color", operandBoxesFillColor);
    }
    for(var i = 0; i < numOfIter2; i++){
        $(Interaction.inputs[(Interaction.operand2-1)*10+i]).css("background-color", operandBoxesFillColor);
    }

    Interaction.indexOfAnswer = (Interaction.operand2-1) * 10 + (Interaction.operand1-1);

    $(Interaction.inputs[Interaction.indexOfAnswer]).css({
        border:'1px solid',
        boxSizing:'border-box',
        borderColor:selectedInputStrokeColor,
        opacity:1,
    });
    Interaction.inputs[Interaction.indexOfAnswer].readOnly = false;
    Interaction.inputs[Interaction.indexOfAnswer].isEmpty = false;
    setTimeout('Interaction.inputs[Interaction.indexOfAnswer].focus()',100);
};

var getSecondQuestion = function(){
    Interaction.pause2 = 1;
    var numOfIter1 = Interaction.operand2 - 1;
    var numOfIter2 = Interaction.operand1 - 1;

    for(var i = 0; i < numOfIter1; i++){
        $(Interaction.inputs[Interaction.operand1-1+(10*i)]).css("background-color", "white");
    }
    for(var i = 0; i < numOfIter2; i++){
        $(Interaction.inputs[(Interaction.operand2-1)*10+i]).css("background-color", "white");
    }
    Interaction.inputs[Interaction.indexOfAnswer].readOnly = true;
 //   Interaction.inputs[Interaction.indexOfAnswer].isEmpty = true;

    Interaction.indexOfAnswer = (Interaction.operand1-1) * 10 + (Interaction.operand2-1);

    for(var i = 0; i < numOfIter1; i++){
        $(Interaction.inputs[(Interaction.operand1-1)*10+i]).css("background-color", operandBoxesFillColor);
    }
    for(var i = 0; i < numOfIter2; i++){
        $(Interaction.inputs[Interaction.operand2-1+(10*i)]).css("background-color", operandBoxesFillColor);
    }



    $(Interaction.inputs[Interaction.indexOfAnswer]).css({
        border:'1px solid',
        boxSizing:'border-box',
        borderColor:selectedInputStrokeColor,
        opacity:1,
    });
    Interaction.inputs[Interaction.indexOfAnswer].readOnly = false;
    Interaction.inputs[Interaction.indexOfAnswer].isEmpty = false;
    setTimeout('Interaction.inputs[Interaction.indexOfAnswer].focus()',100);
};
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 0;

        Animation.animDiv = document.createElement('div');
        Animation.animDiv.id = "animDiv";
        $(Animation.container).append(Animation.animDiv);

        $(Animation.animDiv).html('<div id="firstDiv"></div><div id="secondDiv"></div><div id="thirdDiv"></div>')
        $(Animation.animDiv).css({
            position:'absolute',
            top:'30px',
            left:'90px',
            width:'600px',
            height:'140px',
        });
        $('#firstDiv').css({
            position:'absolute',
            top:'0px',
            left:'0px',
            width:'600px',
            height:'40px',
            fontSize:'26px',
            textAlign:'center',
        //    opacity:0,
        });
        $('#secondDiv').css({
            position:'absolute',
            top:'50px',
            left:'0px',
            width:'600px',
            height:'40px',
            fontSize:'26px',
            textAlign:'center',
        //    opacity:0,
        });

        $('#thirdDiv').css({
            position:'absolute',
            top:'100px',
            left:'0px',
            width:'600px',
            height:'40px',
            fontSize:'26px',
            textAlign:'center'
        });

        $('#firstDiv').html('<div id="ffirst">6 <span id="plus1" style="color:red;">+</span> 2 <span id="a1">= 8</span></div><div id="fsecond">6 <span id="minus1" style="color:red;">-</span> 2 <span id="b1">= 4</span></div><div id="fthird">6 <dfn id="dot1" style="color:red;"> • </dfn> 2 <span id="c1">= 12</span></div><div id="ffourth">6 <span id="divide1" style="color:red;">:</span> 2 <span id="d1">= 3</span></div>');
        $('#ffirst').css({
            position:'absolute',
            top:'0px',
            left:'0px',
            width:'120px',
            height:'40px',
            opacity:0,
        });
        $('#ffirst').delay(animStart).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#plus1').css("opacity", 0).delay(animStart+1000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#a1').css("opacity", 0).delay(animStart+1000).animate({opacity:1}, 1000, 'easeInOutQuad');

        $('#fsecond').css({
            position:'absolute',
            top:'0px',
            left:'160px',
            width:'120px',
            height:'40px',
            opacity:0,
        });
        $('#fsecond').delay(animStart+3000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#minus1').css("opacity", 0).delay(animStart+4000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#b1').css("opacity", 0).delay(animStart+4000).animate({opacity:1}, 1000, 'easeInOutQuad');

        $('#fthird').css({
            position:'absolute',
            top:'0px',
            left:'320px',
            width:'120px',
            height:'40px',
            opacity:0,
        });
        $('#fthird').delay(animStart+6000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#dot1').css("opacity", 0).delay(animStart+7000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#c1').css("opacity", 0).delay(animStart+7000).animate({opacity:1}, 1000, 'easeInOutQuad');

        $('#ffourth').css({
            position:'absolute',
            top:'0px',
            left:'480px',
            width:'120px',
            height:'40px',
            opacity:0,
        });
        $('#ffourth').delay(animStart+9000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#divide1').css("opacity", 0).delay(animStart+10000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#d1').css("opacity", 0).delay(animStart+10000).animate({opacity:1}, 1000, 'easeInOutQuad');

        $('#secondDiv').html('<div id="sfirst">2 <span id="plus2" style="color:red;">+</span> 6 <span id="a2">= 8</span></div><div id="ssecond">2 <span id="minus2" style="color:red;">-</span> 6 <span id="b2">= ?</span></div><div id="sthird">2 <dfn id="dot2" style="color:red;"> • </dfn> 6 <span id="c2">= 12</span></div><div id="sfourth">2 <span id="divide2" style="color:red;">:</span> 6 <span id="d2">= ?</span></div>');
        $('#sfirst').css({
            position:'absolute',
            top:'0px',
            left:'0px',
            width:'120px',
            height:'40px',
            opacity:0,
        });
        $('#sfirst').delay(animStart).animate({opacity:1}, 1000, 'easeInOutQuad')
        $('#plus2').css("opacity", 0).delay(animStart+1000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#a2').css("opacity", 0).delay(animStart+1000).animate({opacity:1}, 1000, 'easeInOutQuad');

        $('#ssecond').css({
            position:'absolute',
            top:'0px',
            left:'160px',
            width:'120px',
            height:'40px',
            opacity:0,
        });
        $('#ssecond').delay(animStart+3000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#minus2').css("opacity", 0).delay(animStart+4000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#b2').css("opacity", 0).delay(animStart+4000).animate({opacity:1}, 1000, 'easeInOutQuad');

        $('#sthird').css({
            position:'absolute',
            top:'0px',
            left:'320px',
            width:'120px',
            height:'40px',
            opacity:0,
        });
        $('#sthird').delay(animStart+6000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#dot2').css("opacity", 0).delay(animStart+7000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#c2').css("opacity", 0).delay(animStart+7000).animate({opacity:1}, 1000, 'easeInOutQuad');


        $('#sfourth').css({
            position:'absolute',
            top:'0px',
            left:'480px',
            width:'120px',
            height:'40px',
            opacity:0,
        });
        $('#sfourth').delay(animStart+9000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#divide2').css("opacity", 0).delay(animStart+10000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#d2').css("opacity", 0).delay(animStart+10000).animate({opacity:1}, 1000, 'easeInOutQuad');

        $('#thirdDiv').html('<div id="tfirst">6 + 2 </div><div id="eq1">=</div><div id="tsecond">2 + 6 </div><div id="tthird">6 <dfn id="dot3"> • </dfn> 2</div><div id="eq2">=</div><div id="tfourth">2 <dfn id="dot4"> • </dfn> 6 </div>');
        $('#tfirst').css({
            position:'absolute',
            top:'-100px',
            left:'0px',
            width:'80px',
            height:'40px',
            opacity:0,
        });
        $('#tfirst').delay(animStart+12000).animate({opacity:2, top:'0px', left:'-30px'}, 2000, 'easeInOutQuad');

        $('#tsecond').css({
            position:'absolute',
            top:'-50px',
            left:'0px',
            width:'80px',
            height:'40px',
            opacity:0,
        });
        $('#tsecond').delay(animStart+12000).animate({opacity:2, top:'0px', left:'70px'}, 2000, 'easeInOutQuad', function(){$('#eq1').css("opacity", 1)});

        $('#eq1').css({
            position:'absolute',
            top:'0px',
            left:'50px',
            width:'20px',
            height:'40px',
            color:'red',
            opacity:0,
        });

        $('#tthird').css({
            position:'absolute',
            top:'-100px',
            left:'314px',
            width:'80px',
            height:'40px',
            opacity:0,
        });
        $('#tthird').delay(animStart+14000).animate({opacity:2, top:'0px', left:'284px'}, 2000, 'easeInOutQuad');

        $('#tfourth').css({
            position:'absolute',
            top:'-50px',
            left:'314px',
            width:'80px',
            height:'40px',
            opacity:0,
        });
        $('#tfourth').delay(animStart+14000).animate({opacity:2, top:'0px', left:'384px'}, 2000, 'easeInOutQuad', function(){$('#eq2').css("opacity", 1);Main.animationFinished(1000);});

        $('#eq2').css({
            position:'absolute',
            top:'0px',
            left:'364px',
            width:'20px',
            height:'40px',
            color:'red',
            opacity:0,
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
        Main.setObjective('Yanda verilen tabloda sol üst köşedeki işarete tıklayarak işlemi değiştirebilirsiniz. Köşedeki işleme göre tabloda belirtilen kutuya uygun sayıyı yazınız ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.operatorBox = new Path.Rectangle(new Point(10.5, 10.5), new Size(25,25));
        Interaction.operatorBox.fillColor = operatorFillColor;
        Interaction.operatorBox.strokeColor = generalStrokeColor;
        Interaction.operatorBox.class = "clickable";

        Interaction.operatorText = new PointText(new Point(Interaction.operatorBox.position.x, Interaction.operatorBox.position.y+6));
        Interaction.operatorText.justification = 'center';
        Interaction.operatorText.fillColor = operatorTextColor;
        Interaction.operatorText.content = '+';
        Interaction.operatorText.strokeWidth = "1px";
        Interaction.operatorText.strokeColor = operatorTextColor;

        Interaction.operandBox = [];
        for(var i = 0; i < 10; i++){
            Interaction.operandBox[i] = new Path.Rectangle(new Point(35.5+(25*i), 10.5), new Size(25,25));
            Interaction.operandBox[i].fillColor = operandBoxesFillColor;
            Interaction.operandBox[i].strokeColor = generalStrokeColor;
        }

        Interaction.operandText = [];
        for(var i = 0; i < 10; i++){
            Interaction.operandText[i] = new PointText(new Point(Interaction.operandBox[i].position.x, Interaction.operandBox[i].position.y+6));
            Interaction.operandText[i].justification = 'center';
            Interaction.operandText[i].fillColor = operandTextColor;
            Interaction.operandText[i].content = i+1;
            Interaction.operandText[i].strokeWidth = "1px";
            Interaction.operandText[i].strokeColor = operandTextColor;

        }

        Interaction.operandBox2 = [];
        for(var i = 0; i < 10; i++){
            Interaction.operandBox2[i] = new Path.Rectangle(new Point(10.5, 35.5+(25*i)), new Size(25,25));
            Interaction.operandBox2[i].fillColor = operandBoxesFillColor;
            Interaction.operandBox2[i].strokeColor = generalStrokeColor;
        }

        Interaction.operandText2 = [];
        for(var i = 0; i < 10; i++){
            Interaction.operandText2[i] = new PointText(new Point(Interaction.operandBox2[i].position.x, Interaction.operandBox2[i].position.y+6));
            Interaction.operandText2[i].justification = 'center';
            Interaction.operandText2[i].fillColor = operandTextColor;
            Interaction.operandText2[i].content = i+1;
            Interaction.operandText2[i].strokeWidth = "1px";
            Interaction.operandText2[i].strokeColor = operandTextColor;
        }

        var tool = new Tool();
        tool.onMouseUp = function(event){
            if(event.item){
                if(event.item.class == "clickable"){
                    if(Interaction.pause2 == 0){
                        if(Interaction.operatorText.content == "+"){
                            Interaction.operatorText.content = "x";
                            Interaction.operator = "x";
                        }
                        else{
                            Interaction.operatorText.content = "+";
                            Interaction.operator = "+";
                        }
                    }
                    else{
                        Interaction.setStatus('Soruyu tamamladıktan sonra işlemi değiştirebilirsiniz. Lütfen önce soruyu tamamlayınız.', false)
                    }
                }
            }
        }
        tool.activate();

        for(var i = 0; i < 10; i++){
            var top = 35.5+(25*i);
            var topStr = ""+top+"px";
            for(var j = 0; j < 10; j++){
                var left = 35.5+(25*j);
                var leftStr = ""+left+"px";
                var input = Interaction.appendInput({
                    position:'absolute',
                    top:topStr,
                    left:leftStr,
                    width:'25px',
                    height:'25px',
                    padding:0,
                    margin:0,
                    boxSizing:'border-box',
                    border:'none',
                    borderRight:'1px solid #999',
                    borderBottom:'1px solid #999'
                }, true, true);
                $(input).focus(function(){
                    $(this).css({
                        zIndex:'100'
                    })
                }).blur(function(){
                    $(this).css({
                        zIndex:'1'
                    })
                })
            }
        }

        Interaction.appendStatus({
            bottom:'160px',
            right:'60px',
            width:'160px',
            height:'60px',
          //  border:'1px solid',
            textAlign:'center'

        });
        Interaction.appendButton({
            bottom:'20px',
            right:'40px'
        });

        if(Util.rand01() == 0){
            Interaction.operator = "+";
        }
        else{
            Interaction.operator = "x";
        }
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.quest = 0;
        Interaction.pause2 = 0;
        Interaction.trial2 = 0;
        getNewQuestion();
    },
		

	preCheck : function(){
        if(Interaction.inputs[Interaction.indexOfAnswer].value == ""){
            Interaction.setStatus('Lütfen kutucuğu doldurunuz.', false);
            return false;
        }
        else{
            if(Interaction.operator == "+"){
                Interaction.answer = Interaction.operand1 + Interaction.operand2;
            }
            else{
                Interaction.answer = Interaction.operand1 * Interaction.operand2;
            }
            if(Interaction.quest == 0){
                if(Interaction.answer == Interaction.inputs[Interaction.indexOfAnswer].value){
                    $(Interaction.inputs[Interaction.indexOfAnswer]).css("color", "green");
                    Interaction.setStatus('');
                    Interaction.quest += 1;
                    getSecondQuestion();
                    return false;
                }
                else{
                    if(Interaction.trial2 == 0){
                        Interaction.setStatus('Yanlış cevap, lütfen tekrar deneyiniz.',false);
                        Interaction.inputs[Interaction.indexOfAnswer].value = "";
                        Interaction.trial2 += 1;
                    }
                    else{
                        Interaction.setStatus('Yanlış cevap, doğrusu yanda gösterilmiştir.',false);
                        Interaction.inputs[Interaction.indexOfAnswer].value = Interaction.answer;
                        $(Interaction.inputs[Interaction.indexOfAnswer]).css("color", "green");
                        Interaction.quest += 1;
                        getSecondQuestion();
                    }
                }
                return false;
            }
            else{
                return true;
            }
        }
    },
	isAnswerCorrect : function(value){
	    return Interaction.answer == value[Interaction.indexOfAnswer];


    },
	onCorrectAnswer : function(){
        $(Interaction.inputs[Interaction.indexOfAnswer]).css("color", "green");
		Interaction.pause2 = 0;
    },
	onWrongAnswer : function(){
		Interaction.inputs[Interaction.indexOfAnswer].value = "";
    },
	onFail : function(){

        Interaction.setStatus('Yanlış cevap, doğrusu yanda gösterilmiştir.',false);
        Interaction.inputs[Interaction.indexOfAnswer].value = Interaction.answer;
        $(Interaction.inputs[Interaction.indexOfAnswer]).css("color", "green");
        Interaction.pause2 = 0;
    }
}
;




