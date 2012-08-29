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

                        setTimeout('$(Interaction.secondQuestionDiv).css("opacity", 1);$("#question21").css("opacity", 1);$(Interaction.sortingDiv).css("opacity", 1);Interaction.setStatus("")', 2500);

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

                        setTimeout('$(Interaction.secondQuestionDiv).css("opacity", 1);$("#question21").css("opacity", 1);$(Interaction.sortingDiv).css("opacity", 1);Interaction.setStatus("")', 2500);

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
                    setTimeout('$(Interaction.secondQuestionDiv).css("opacity", 1);$("#question21").css("opacity", 1);$(Interaction.sortingDiv).css("opacity", 1);Interaction.setStatus("")', 2500);
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
                        setTimeout('$("#question22").css("opacity", 1);Interaction.setStatus("")',2500);
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
                        setTimeout('Interaction.myPause = 0;',3000)
                        setTimeout('$("#question22").css("opacity", 1);$("#sortingDiv img").draggable("enable");$("#"+Interaction.answerId.replace("Hover", "")).css("opacity", 1);$("#dropDiv1").droppable({disabled: true});Interaction.setStatus("")', 3000)
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
                        setTimeout('$(Interaction.thirdQuestionDiv).css("opacity", 1);Interaction.setStatus("")',2500);
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
                        setTimeout('Interaction.myPause = 0;',3000);
                        setTimeout('$("#"+Interaction.answerId2.replace("Hover", "")).css("opacity", 1);$("#dropDiv2").droppable({disabled: true});$(Interaction.thirdQuestionDiv).css("opacity", 1);Interaction.setStatus("")', 3000)
                        if(Interaction.length == 0){
                            setTimeout('Interaction.inputs[1].focus();', 3000)
                        }
                        else{
                            setTimeout('Interaction.inputs[Interaction.length].focus();', 3000)
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
    }
}