var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
	images:[
        
    ],
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
        Interaction.ansCirc = [];
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        Interaction.randomNumber = Util.rand01();
        Interaction.gcd = randomNumber;
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
        }
        Interaction.ansCirc = [];
        for(var i = 0; i < Interaction.question.length; i++){
            var arr = [];
            if(Interaction.question[i] == 1){
                arr[0] = 1;
            }
            else{
                arr = Util.getFactors(Interaction.question[i]);
                //  arr.sort(function(a,b){return b-a});
            }
            for(var j = 0; j < arr.length; j++){
                var a = 11*i+j+1;
                var b = arr[j];
                if(j == arr.length-1){
                    var aStr = ""+b;
                }
                else{
                    var aStr = ""+b+", ";
                }
                $('#n'+a).html(aStr);
                if(b == Interaction.answer){
                    $('#n'+a).css("color", "green")
                        .css("font-weight", "bold");

                    var circLeft = $('#n'+a).position().left;
                    if(Interaction.question.length == 2){
                        circLeft += 150;
                    }
                    else{
                        circLeft += 120;
                    }

                    var circTop = $('#n'+a).position().top;
                    circTop += 110;
                    circTop += i*30;

                    if(arr[j] >= 10){
                        var radius = 14;
                    }
                    else{
                        var radius = 10;
                        circLeft -= 4;
                    }

                    Interaction.ansCirc[i] = new Path.Circle(new Point(circLeft, circTop), radius);
                    Interaction.ansCirc[i].strokeColor = "red";
                 //   Interaction.ansCirc[i].fillColor = "green";

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

}
;
