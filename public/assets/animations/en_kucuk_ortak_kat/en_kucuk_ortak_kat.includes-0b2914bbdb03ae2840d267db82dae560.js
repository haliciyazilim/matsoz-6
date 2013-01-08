function __Styles(){
    answerDivColor = "#069";
    animColor = "#ff0000";
}
;
var getQuestion = function(){
    if(Interaction.randomNumber == 0){ // 2 numbers
        do{
            Interaction.question[0] = Util.randomInteger(2, 16);
            Interaction.question[1] = Util.randomInteger(2, 16, [Interaction.question[0]]);
            Interaction.answer = Util.lcm(Interaction.question[0], Interaction.question[1]);
        } while(Interaction.answer > 200);
        Interaction.ques = "EKOK("+Interaction.question[0]+", "+Interaction.question[1]+")";
        $('#questionn').html(Interaction.ques)
    }
    else{ // 3 numbers
        do{
            Interaction.question[0] = Util.randomInteger(2, 16);
            Interaction.question[1] = Util.randomInteger(2, 16, [Interaction.question[0]]);
            Interaction.question[2] = Util.randomInteger(2, 16, [Interaction.question[0], Interaction.question[1]]);
            Interaction.answer = Util.lcm(Interaction.question[0], Interaction.question[1], Interaction.question[2]);
        } while(Interaction.answer > 200);
        Interaction.ques = "EKOK("+Interaction.question[0]+", "+Interaction.question[1]+", "+Interaction.question[2]+")";
        $('#questionn').html(Interaction.ques);
    }
};

var getAnswerTitles = function(){
    Interaction.answerTitles = [];
    for(var i = 0; i < Interaction.question.length; i++){
        Interaction.answerTitles[i] = "";
        Interaction.answerTitles[i] += Interaction.question[i];
        if(Interaction.question[i] == 10){
            Interaction.answerTitles[i] += "\'un ";
        }
        else if(Interaction.question[i] == 20){
            Interaction.answerTitles[i] += "\'nin ";
        }
        else if(Interaction.question[i] == 30){
            Interaction.answerTitles[i] += "\'un ";
        }
        else if(Interaction.question[i] == 40){
            Interaction.answerTitles[i] += "\'ın ";
        }
        else if(Interaction.question[i] == 50){
            Interaction.answerTitles[i] += "\'nin ";
        }
        else if(Interaction.question[i] == 60){
            Interaction.answerTitles[i] += "\'ın ";
        }
        else if(Interaction.question[i] == 70){
            Interaction.answerTitles[i] += "\'in ";
        }
        else if(Interaction.question[i] == 80){
            Interaction.answerTitles[i] += "\'nin ";
        }
        else if(Interaction.question[i] == 90){
            Interaction.answerTitles[i] += "\'ın ";
        }
        else if(Interaction.question[i] == 100){
            Interaction.answerTitles[i] += "\'ün ";
        }
        else{
            var dv = Interaction.question[i] % 10;
            switch(dv){
                case 1:
                    Interaction.answerTitles[i] += "\'in";
                    break;
                case 2:
                    Interaction.answerTitles[i] += "\'nin";
                    break;
                case 3:
                    Interaction.answerTitles[i] += "\'ün";
                    break;
                case 4:
                    Interaction.answerTitles[i] += "\'ün";
                    break;
                case 5:
                    Interaction.answerTitles[i] += "\'in";
                    break
                case 6:
                    Interaction.answerTitles[i] += "\'nın";
                    break;
                case 7:
                    Interaction.answerTitles[i] += "\'nin";
                    break;
                case 8:
                    Interaction.answerTitles[i] += "\'in";
                    break;
                case 9:
                    Interaction.answerTitles[i] += "\'ın";
                    break;
            }

        }

        Interaction.answerTitles[i] += " katları : ";
    }
};
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 1000;

        Animation.animDiv = document.createElement('div');
        Animation.animDiv.id = "animDiv";
        $(Animation.container).append(Animation.animDiv);

        $(Animation.animDiv).css({
            position:'absolute',
            top:'30px',
            left:'40px',
            width:'700px',
            height:'150px',
            fontSize:'20px'
        });

        $(Animation.animDiv).html('<div id="firstDiv"></div><div id="secondDiv"></div><div id="thirdDiv"></div>');
        $('#firstDiv').css({
            position:'absolute',
            top:'10px',
            left:'20px',
            width:'600px',
            height:'40px',
        });

        $('#firstDiv').html('<div id="title1">3\'ün katları</div><div id="eq1"></div>');
        $('#title1').css({
            position:'absolute',
            top:'10px',
            left:'10px',
            opacity:0
        });
        $('#title1').delay(animStart).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#eq1').css({
            position:'absolute',
            top:'10px',
            left:'130px',
            width:'460px',
            height:'24px',
        });
        $('#eq1').html('<span id="s1">3, </span><span id="s2">6, </span><span id="s3">9, </span><span id="s4">12, </span><span id="s5">15, </span>' +
            '<span id="s6">18, </span><span id="s7">21, </span><span id="s8">24, </span><span id="s9">27, </span><span id="s10">30, </span>' +
            '<span id="s11">33, </span><span id="s12">36, </span><span id="s13">39, ...</span>');

        $('#secondDiv').css({
            position:'absolute',
            top:'100px',
            left:'20px',
            width:'600px',
            height:'40px',
        });
        $('#secondDiv').html('<div id="title2">4\'ün katları</div><div id="eq2"></div>');
        $('#title2').css({
            position:'absolute',
            top:'10px',
            left:'10px',
            opacity:0
        });
        $('#title2').delay(animStart+12000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#eq2').css({
            position:'absolute',
            top:'10px',
            left:'130px',
            width:'460px',
            height:'24px',
        });
        $('#eq2').html('<span id="d1">4, </span><span id="d2">8, </span><span id="d3">12, </span><span id="d4">16, </span><span id="d5">20, </span>' +
            '<span id="d6">24, </span><span id="d7">28, </span><span id="d8">32, </span><span id="d9">36, </span><span id="d10">40, </span>' +
            '<span id="d11">44, </span><span id="d12">48, </span><span id="d13">52, ...</span>');

        $('#thirdDiv').css({
            position:'absolute',
            top:'65px',
            left:'510px',
            width:'170px',
            height:'20px',
            fontWeight:'bold',
            opacity:0
        });
        $('#thirdDiv').html('EKOK(3, 4) = 12');
        $('#thirdDiv').delay(28000).animate({opacity:1}, 1000, 'easeInOutQuad', function(){Main.animationFinished(1500)});
        for(var i = 1; i < 14; i++){
            $('#s'+i).css("opacity", 0).delay(animStart+1000+i*750).animate({opacity:1}, 750, 'easeInOutQuad');
            $('#d'+i).css("opacity", 0).delay(animStart+13000+i*750).animate({opacity:1}, 750, 'easeInOutQuad');
        }

        $('#s4').delay(19000).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#s8').delay(16000).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#s12').delay(13000).animate({color:animColor}, 1000, 'easeInOutQuad');

        $('#d3').delay(7750).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#d6').delay(5500).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#d9').delay(3250).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#d12').delay(1000).animate({color:animColor}, 1000, 'easeInOutQuad');

        var circ1 = new Path.Circle(new Point(258, 46), 18);
        circ1.strokeColor = "red";
        circ1.opacity = 0;

        var circ2 = new Path.Circle(new Point(235, 136), 18);
        circ2.strokeColor = "red";
        circ2.opacity = 0;

        circ1.animate({
            style:{
                opacity: 1,
            },
            delay: 26500,
            duration: 1000,
            animationType: 'easeInOutQuad'
        });

        circ2.animate({
            style:{
                opacity: 1,
            },
            delay: 26500,
            duration: 1000,
            animationType: 'easeInOutQuad'
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
        Main.setObjective('Yanda verilen sayıların en küçük ortak katını bulunuz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.questionDiv = document.createElement('div');
        Interaction.questionDiv.id = "questionDiv";
        $(Interaction.container).append(Interaction.questionDiv);

        $(Interaction.questionDiv).css({
            position:'absolute',
            top:'20px',
            left:'120px', //120
            width:'320px', //320
            height:'60px',
            fontSize:'26px',
            textAlign:'center',
            //      border:'1px solid'
        });

        $(Interaction.questionDiv).html('<div id="questionn"></div><span id="eq">=</span>');
        $('#questionn').css({
            position:'absolute',
            top:'20px',
            left:'0px',
            width:'200px',
            height:'30px',
            textAlign:'right',
            fontWeight:'bold',
            //       border: '1px solid'
        });
        $('#eq').css({
            position:'absolute',
            top:'22px',
            left:'206px',

        });

        Interaction.answerDiv = document.createElement('div');
        Interaction.answerDiv.id = "answerDiv";
        $(Interaction.container).append(Interaction.answerDiv);

        $(Interaction.answerDiv).css({
            position:'absolute',
            top:'100px',
            left:'90px',
            width:'440px',
            height:'90px',
            fontSize:'16px',
            color:answerDivColor,
            //     border:'1px solid'
        });
        $(Interaction.container).append('<div id="ans"></div>');
        $('#ans').css({
            position:'absolute',
            top:'200px',
            left:'150px',
            width:'220px',
            height:'20px',
            fontSize:'18px',
            color:"green",
            fontWeight:'bold',
            textAlign:'center',
            //     border:'1px solid'

        });

        $(Interaction.answerDiv).html('<div id="answer1">' +
            '<span id="f1" style="font-weight:bold;"></span>' +
            '<span id="n1"></span>' +
            '<span id="n2"></span>' +
            '<span id="n3"></span>' +
            '<span id="n4"></span>' +
            '<span id="n5"></span>' +
            '<span id="n6"></span>' +
            '<span id="n7"></span>' +
            '<span id="n8"></span>' +
            '<span id="n9" ></span>' +
            '<span id="n10"></span>' +
            '<span id="td1"></span>' +
            '</div>' +
            '<div id="answer2">' +
            '<span id="f2" style="font-weight:bold;"></span>' +
            '<span id="n11"></span>' +
            '<span id="n12"></span>' +
            '<span id="n13"></span>' +
            '<span id="n14"></span>' +
            '<span id="n15"></span>' +
            '<span id="n16"></span>' +
            '<span id="n17"></span>' +
            '<span id="n18"></span>' +
            '<span id="n19"></span>' +
            '<span id="n20"></span>' +
            '<span id="td2"></span>' +
            '</div>' +
            '<div id="answer3">' +
            '<span id="f3" style="font-weight:bold;"></span>' +
            '<span id="n21"></span>' +
            '<span id="n22"></span>' +
            '<span id="n23"></span>' +
            '<span id="n24"></span>' +
            '<span id="n25"></span>' +
            '<span id="n26"></span>' +
            '<span id="n27"></span>' +
            '<span id="n28"></span>' +
            '<span id="n29" ></span>' +
            '<span id="n30"></span>' +
            '<span id="td3"></span>' +
            '</div>');
        $('#answer1').css({
            position:'absolute',
            top:'0px',
            left:'0px',
            width:'440px',
            height:'30px',
        });
        $('#answer2').css({
            position:'absolute',
            top:'30px',
            left:'0px',
            width:'440px',
            height:'30px',
        });
        $('#answer3').css({
            position:'absolute',
            top:'60px',
            left:'0px',
            width:'440px',
            height:'30px',
        });

        Interaction.appendStatus({
            bottom:'20px',
            right:'170px',
            width:'400px',
            height:'30px',
            textAlign:'center'

        });
        Interaction.appendButton({
            bottom:'20px',
            right:'40px'
        });

        Interaction.appendInput({
            top:'13px',
            left:'226px',
            width:'45px',
            height:'40px',
            fontSize:'24px'
        });
        $(Interaction.inputs).attr('maxlength', '3')
        $(Interaction.questionDiv).append(Interaction.input)

        Interaction.setRandomGenerator(2)
        Interaction.ansCirc = [];
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        Interaction.randomNumber = Util.rand01();
        Interaction.answerTitles = [];
        Interaction.question = [];
        $('#ans').html('');
        $('#f1').html('');
        $('#f2').html('');
        $('#f3').html('');
        $('#td1').html('');
        $('#td2').html('');
        $('#td3').html('');
        for(var i = 1; i < 31; i++){
            $('#n'+i).html('');
            $('#n'+i).css("color", "black")
                .css("font-weight", "normal")
        }

        for(var i = 0; i < 3; i++){
            if(Interaction.ansCirc[i]){
                Interaction.ansCirc[i].remove();
            }
        }

        Interaction.input.style.color = "black";
        getQuestion();
    },


    preCheck : function(){

    },
    isAnswerCorrect : function(value){
        return value == Interaction.answer;

    },
    onCorrectAnswer : function(){

    },
    onWrongAnswer : function(){

    },
    onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);

        Interaction.input.style.color = "red";

        getAnswerTitles();

        for(var i = 1; i <= Interaction.question.length; i++){
            $('#f'+i).html(Interaction.answerTitles[i-1]);
            $('#td'+i).html(" ...");
        }

        Interaction.ansCirc = [];
        for(var i = 0; i < Interaction.question.length; i++){
            if(Interaction.answer > Interaction.question[i] * 10){
                for(var j = 1; j < 6; j++){
                    var a = 10*i+j;
                    var b = Interaction.question[i] * j;
                    var aStr = ""+b+", ";
                    $('#n'+a).html(aStr);
                }
                var a = 10*i+6;
                var b = Interaction.question[i]*6;
                var aStr = "....., ";
                $('#n'+a).html(aStr);

                var a = 10*i+7;
                var b = Interaction.answer - 2 * Interaction.question[i];
                var aStr = ""+b+", ";
                $('#n'+a).html(aStr);

                var a = 10*i+8;
                var b = Interaction.answer - Interaction.question[i];
                var aStr = ""+b+", ";
                $('#n'+a).html(aStr);

                var a = 10*i+9;
                var b = Interaction.answer;
                var aStr = ""+b+", ";
                $('#n'+a).html(aStr);
                $('#n'+a).css("color", "green")
                    .css("font-weight", "bold");

                var circLeft = $('#n'+a).position().left;
                circLeft += 102;


                var circTop = $('#n'+a).position().top;
                console.log(circTop);
                circTop += 110;
                circTop += i*30;

                if(b >= 100){
                    var radius = 18;
                    circLeft += 2;
                }
                else if(b >= 10){
                    var radius = 14;
                }
                else{
                    var radius = 10;
                    circLeft -= 4;
                }

                Interaction.ansCirc[i] = new Path.Circle(new Point(circLeft, circTop), radius);
                Interaction.ansCirc[i].strokeColor = "red";
               // Interaction.ansCirc[i].fillColor = "green";

                var a = 10*i+10;
                var b = Interaction.answer + Interaction.question[i];
                var aStr = ""+b+",";
                $('#n'+a).html(aStr);
            }
            else{
                for(var j = 1; j <= 10; j++){
                    var a = 10*i+j;
                    var b = Interaction.question[i] * j;
                    if(j == 10){
                        var aStr = ""+b+",";
                    }
                    else{
                        var aStr = ""+b+", ";
                    }
                    $('#n'+a).html(aStr);
                    if(b == Interaction.answer){
                        $('#n'+a).css("color", "green")
                            .css("font-weight", "bold")

                        var circLeft = $('#n'+a).position().left;
                        circLeft += 100;


                        var circTop = $('#n'+a).position().top;
                        circTop += 110;
                        circTop += i*30;

                        if(b >= 100){
                            var radius = 18;
                            circLeft += 4;
                        }
                        else if(b >= 10){
                            var radius = 14;
                        }
                        else{
                            var radius = 10;
                            circLeft -= 4;
                        }

                        Interaction.ansCirc[i] = new Path.Circle(new Point(circLeft, circTop), radius);
                        Interaction.ansCirc[i].strokeColor = "red";
                    //    Interaction.ansCirc[i].fillColor = "green";
                    }
                }
            }
        }

        var anssStr = "";
        if(Interaction.question.length == 2){
            anssStr += "EKOK("+Interaction.question[0]+", "+Interaction.question[1]+") = "+Interaction.answer;
        }
        else{
            anssStr += "EKOK("+Interaction.question[0]+", "+Interaction.question[1]+", "+Interaction.question[2]+") = "+Interaction.answer;
        }

        $('#ans').html(anssStr);

    },
}
;




