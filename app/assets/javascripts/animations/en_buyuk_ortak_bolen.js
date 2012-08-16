function __Styles(){

    answerDivColor = "#069";
    animColor = "#ff0000"
}

var Animation = {
    init:function(container){
        Animation.container = container;

        var animStart = 1000;

        Animation.animDiv = document.createElement('div');
        Animation.animDiv.id = "animDiv";
        $(Animation.container).append(Animation.animDiv);

        $(Animation.animDiv).css({
            position:'absolute',
            top:'30px',
            left:'150px',
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

        $('#firstDiv').html('<div id="title1">36\'nın bölenleri</div><div id="eq1"></div>');
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
            left:'180px',
            width:'460px',
            height:'24px',
        });
        $('#eq1').html('<span id="s1">1, </span><span id="s2">2, </span><span id="s3">3, </span><span id="s4">4, </span><span id="s5">6, </span>' +
            '<span id="s6">9, </span><span id="s7">12, </span><span id="s8">18</span>');

        $('#secondDiv').css({
            position:'absolute',
            top:'100px',
            left:'20px',
            width:'600px',
            height:'40px',
        });
        $('#secondDiv').html('<div id="title2">45\'in bölenleri</div><div id="eq2"></div>');
        $('#title2').css({
            position:'absolute',
            top:'10px',
            left:'10px',
            opacity:0
        });
        $('#title2').delay(animStart+9000).animate({opacity:1}, 1000, 'easeInOutQuad');
        $('#eq2').css({
            position:'absolute',
            top:'10px',
            left:'180px',
            width:'460px',
            height:'24px',
        });
        $('#eq2').html('<span id="d1">1, </span><span id="d2">3, </span><span id="d3">4, </span><span id="d4">9, </span><span id="d5">15</span>');

        $('#thirdDiv').css({
            position:'absolute',
            top:'65px',
            left:'360px',
            width:'200px',
            height:'20px',
            fontWeight:'bold',
            opacity:0
        });
        $('#thirdDiv').html('EBOB(36, 45) = 9');
        $('#thirdDiv').delay(20000).animate({opacity:1}, 1000, 'easeInOutQuad', function(){Main.animationFinished(1500)});
        for(var i = 1; i < 9; i++){
            $('#s'+i).css("opacity", 0).delay(animStart+1000+i*750).animate({opacity:1}, 750, 'easeInOutQuad');

        }
        for(var i = 1; i < 6; i++ ){
            $('#d'+i).css("opacity", 0).delay(animStart+10000+i*750).animate({opacity:1}, 750, 'easeInOutQuad');
        }

        $('#s1').delay(12750).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#s3').delay(11250).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#s6').delay(9000).animate({color:animColor}, 1000, 'easeInOutQuad');

        $('#d1').delay(4500).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#d2').delay(3750).animate({color:animColor}, 1000, 'easeInOutQuad');
        $('#d4').delay(1500).animate({color:animColor}, 1000, 'easeInOutQuad');

        var circ1 = new Path.Circle(new Point(458, 46), 14);
        circ1.strokeColor = "red";
        circ1.opacity = 0;

        var circ2 = new Path.Circle(new Point(412, 136), 14);
        circ2.strokeColor = "red";
        circ2.opacity = 0;

        circ1.animate({
            style:{
                opacity: 1,
            },
            delay: 18000,
            duration: 1000,
            animationType: 'easeInOutQuad'
        });

        circ2.animate({
            style:{
                opacity: 1,
            },
            delay: 18000,
            duration: 1000,
            animationType: 'easeInOutQuad'
        });
    }
}

var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yanda verilen sayıların en büyük ortak bölenini bulunuz.');
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
            left:'100px', //120
            width:'340px', //320
            height:'60px',
            fontSize:'26px',
            textAlign:'center',
        //          border:'1px solid'
        });

        $(Interaction.questionDiv).html('<div id="questionn"></div><span id="eq">=</span>');
        $('#questionn').css({
            position:'absolute',
            top:'20px',
            left:'-10px',
            width:'250px',
            height:'30px',
            textAlign:'right',
            fontWeight:'bold',
    //        border: '1px solid'
        });
        $('#eq').css({
            position:'absolute',
            top:'22px',
            left:'246px',

        });

        Interaction.answerDiv = document.createElement('div');
        Interaction.answerDiv.id = "answerDiv";
        $(Interaction.container).append(Interaction.answerDiv);

        $(Interaction.answerDiv).css({
            position:'absolute',
            top:'100px',
            left:'100px',
            width:'440px',
            height:'90px',
            fontSize:'16px',
            color:answerDivColor,
         //        border:'1px solid'
        });
        $(Interaction.container).append('<div id="ans"></div>');
        $('#ans').css({
            position:'absolute',
            top:'200px',
            left:'130px',
            width:'240px',
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
            '<span id="n11"></span>' +
            '</div>' +
            '<div id="answer2">' +
            '<span id="f2" style="font-weight:bold;"></span>' +
            '<span id="n12"></span>' +
            '<span id="n13"></span>' +
            '<span id="n14"></span>' +
            '<span id="n15"></span>' +
            '<span id="n16"></span>' +
            '<span id="n17"></span>' +
            '<span id="n18"></span>' +
            '<span id="n19"></span>' +
            '<span id="n20"></span>' +
            '<span id="n21"></span>' +
            '<span id="n22"></span>' +
            '</div>' +
            '<div id="answer3">' +
            '<span id="f3" style="font-weight:bold;"></span>' +
            '<span id="n23"></span>' +
            '<span id="n24"></span>' +
            '<span id="n25"></span>' +
            '<span id="n26"></span>' +
            '<span id="n27"></span>' +
            '<span id="n28"></span>' +
            '<span id="n29"></span>' +
            '<span id="n30"></span>' +
            '<span id="n31" ></span>' +
            '<span id="n32"></span>' +
            '<span id="n33"></span>' +
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
            left:'266px',
            width:'45px',
            height:'40px',
            fontSize:'24px'
        });
        $(Interaction.inputs).attr('maxlength', '3')
        $(Interaction.questionDiv).append(Interaction.input)

        Interaction.setRandomGenerator(13, 1);
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        Interaction.randomNumber = Util.rand01();
        Interaction.gcd = randomNumber;
        console.log("randomNumber: "+randomNumber);
        Interaction.answerTitles = [];
        Interaction.question = [];
        $('#ans').html('');
        $('#f1').html('');
        $('#f2').html('');
        $('#f3').html('');
        for(var i = 1; i < 34; i++){
            $('#n'+i).html('');
            $('#n'+i).css("color", "black")
                .css("font-weight", "normal")
        }

        Interaction.input.style.color = "black";
        Interaction.getQuestion();
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

        Interaction.getAnswerTitles();

        for(var i = 1; i <= Interaction.question.length; i++){
            $('#f'+i).html(Interaction.answerTitles[i-1]);
        }
        for(var i = 0; i < Interaction.question.length; i++){
            var arr = [];
            if(Interaction.question[i] == 1){
                arr[0] = 1;
            }
            else{
                arr = Util.getFactors(Interaction.question[i]);
              //  arr.sort(function(a,b){return b-a});
            }
            for(var j = 0; j <arr.length; j++){
                var a = 11*i+j+1;
                var b = arr[j];
                if(j == arr.length-1){
                    var aStr = ""+b;
                    var c = 11*i+j+2;
                    $('#n'+c).html(", ...");
                }
                else{
                    var aStr = ""+b+", ";
                }
                $('#n'+a).html(aStr);
                if(b == Interaction.answer){
                    $('#n'+a).css("color", "green")
                        .css("font-weight", "bold")
                }
            }

        }

        var anssStr = "";
        if(Interaction.question.length == 2){
            anssStr += "EBOB("+Interaction.question[0]+", "+Interaction.question[1]+") = "+Interaction.answer;
        }
        else{
            anssStr += "EBOB("+Interaction.question[0]+", "+Interaction.question[1]+", "+Interaction.question[2]+") = "+Interaction.answer;
        }

        $('#ans').html(anssStr);

    },
    getQuestion : function(){
        if(Interaction.randomNumber == 0){ // 2 numbers
            $(Interaction.answerDiv).css("left", "140px");
            $('#ans').css("left", "160px");
            do{
                Interaction.factor1 = Util.randomInteger(1,11);
            } while(Util.getFactors(Interaction.gcd * Interaction.factor1).length > 10)
            do{
                Interaction.factor2 = Util.randomInteger(1,11,[Interaction.factor1]);
            } while(Util.getFactors(Interaction.gcd * Interaction.factor2).length > 10)

            Interaction.question[0] = Interaction.gcd * Interaction.factor1;
            Interaction.question[1] = Interaction.gcd * Interaction.factor2;
            Interaction.answer = Util.gcd(Interaction.question[0], Interaction.question[1]);
            Interaction.ques = "EBOB("+Interaction.question[0]+", "+Interaction.question[1]+")";
            $('#questionn').html(Interaction.ques)
        }
        else{ // 3 numbers
            $(Interaction.answerDiv).css("left", "110px");
            $('#ans').css("left", "130px");
            do{
                Interaction.factor1 = Util.randomInteger(1,11);
            } while(Util.getFactors(Interaction.gcd * Interaction.factor1).length > 10)
            do{
                Interaction.factor2 = Util.randomInteger(1,11,[Interaction.factor1]);
            } while(Util.getFactors(Interaction.gcd * Interaction.factor2).length > 10)
            do{
                Interaction.factor3 = Util.randomInteger(1,11,[Interaction.factor1, Interaction.factor2]);
            } while(Util.getFactors(Interaction.gcd * Interaction.factor3).length > 10)
            Interaction.question[0] = Interaction.gcd * Interaction.factor1;
            Interaction.question[1] = Interaction.gcd * Interaction.factor2;
            Interaction.question[2] = Interaction.gcd * Interaction.factor3;
//            Interaction.question[0] = 100;
//            Interaction.question[1] = 100;
//            Interaction.question[2] = 100;
            Interaction.answer = Util.gcd(Interaction.question[0], Interaction.question[1], Interaction.question[2]);
            Interaction.ques = "EBOB("+Interaction.question[0]+", "+Interaction.question[1]+", "+Interaction.question[2]+")";
            $('#questionn').html(Interaction.ques);
        }
    },

    getAnswerTitles : function(){
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

            Interaction.answerTitles[i] += " bölenleri : ";
        }
    }
}