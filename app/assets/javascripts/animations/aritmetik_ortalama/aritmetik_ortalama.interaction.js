var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki dizide yer alan sayıları ilgili kutucuklara giriniz ve aritmetik ortalamayı bulunuz. Daha sonra kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.appendStatus({
            bottom:'0px',
            right:'160px',
            height:'40px',
            width:'300px',
            textAlign:'center',
        });

        Interaction.appendButton({
            bottom:'14px',
            right:'30px'
        });

        Interaction.setRandomGenerator(3);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.total = 0;
        Interaction.randomNumber = randomNumber;
        if($('#datasDiv'))
            $('#datasDiv').remove();
        if($('#questionDiv'))
            $('#questionDiv').remove();
        Interaction.flushInputs();
        var fraction1, fraction2;
        var total;
        Interaction.datas = [];
        if(randomNumber == 0){
            //	if(0) {
            for(var i = 0; i < 4; i++) {
                Interaction.datas[i] = Math.floor(Math.random() * 19) + 2;
            }
            do {
                Interaction.datas[4] = Math.floor(Math.random() * 19) + 2;
                for(var j = 0, total = 0; j < Interaction.datas.length; j++)
                    total += Interaction.datas[j];
            }
            while(total % 5 != 0);

            $(Interaction.container).append('<div id="datasDiv"></div>');
            $('#datasDiv').css("position", "absolute")
                .css("left", "180px")
                .css("top", "16px")
                .css("width", "200px")
                .css("height", "20px")
                .css("text-align", "center");

            $(Interaction.container).append('<div id="questionDiv"></div>');
            $('#questionDiv').css("position", "absolute")
                .css("left", "40px")
                .css("top", "35px")
                .css("width", "400px")
                .css("height", "210px");

            $('#questionDiv').append('<div id="avgText">Aritmetik Ortalama</div>');
            $('#avgText').css("position", "absolute")
                .css("left", "0px")
                .css("top", "32px")
                .css("font-size", 18)
                .css("text-align", "center")
                .css("width", "100px");

            $('#questionDiv').append('<p id="equal1" >=</p>');
            $('#equal1').css("position", "absolute")
                .css("left", "120px")
                .css("top", "48px")
                .css("font-size", 18);

            $('#questionDiv').append('<div id="line1"></div>');
            $('#line1').css("position","absolute")
                .css("left", "144px")
                .css("top", "56px")
                .css("width", "252px")
                .css("height", "1px")
                .css("padding", 0)
                .css("border-top", "2px solid");
            $('#questionDiv').append('<p id="plus1" >+</p>');
            $('#plus1').css("position", "absolute")
                .css("font-size", 18)
                .css("left", "182px")
                .css("top", "28px");
            $('#questionDiv').append('<p id="plus2" >+</p>');
            $('#plus2').css("position", "absolute")
                .css("font-size", 18)
                .css("left", "236px")
                .css("top", "28px");

            $('#questionDiv').append('<p id="plus3" >+</p>');
            $('#plus3').css("position", "absolute")
                .css("font-size", 18)
                .css("left", "290px")
                .css("top", "28px");

            $('#questionDiv').append('<p id="plus4" >+</p>');
            $('#plus4').css("position", "absolute")
                .css("font-size", 18)
                .css("left", "344px")
                .css("top", "28px");

            $('#questionDiv').append('<p id="equal2" >=</p>');
            $('#equal2').css("position", "absolute")
                .css("font-size", 18)
                .css("left", "120px")
                .css("top", "160px");

            $('#questionDiv').append('<div id="line2"></div>');
            $('#line2').css("position","absolute")
                .css("left", "144px")
                .css("top", "168px")
                .css("width", "36px")
                .css("height", "1px")
                .css("padding", 0)
                .css("border-top", "2px solid");

            $('#questionDiv').append('<p id="equal3" >=</p>');
            $('#equal3').css("position", "absolute")
                .css("font-size", 18)
                .css("left", "190px")
                .css("top", "160px");

            // first input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '146px',
                top: "18px",
                fontSize: '18px'
            });

            // second input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '200px',
                top: "18px",
                fontSize: '18px'
            });

            // third input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '254px',
                top: "18px",
                fontSize: '18px'
            });

            // fourth input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '308px',
                top: "18px",
                fontSize: '18px'
            });

            // fifth input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '362px',
                top: "18px",
                fontSize: '18px'
            });

            // sixth input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '254px',
                top: "62px",
                fontSize: '18px'
            });

            // seventh input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '146px',
                top: "130px",
                fontSize: '18px'
            });

            // eighth input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '146px',
                top: "174px",
                fontSize: '18px'
            });

            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '210px',
                top: "150px",
                fontSize: '18px'
            });

            $(Interaction.inputs[0]).attr('maxlength', '2');
            $(Interaction.inputs[1]).attr('maxlength', '2');
            $(Interaction.inputs[2]).attr('maxlength', '2');
            $(Interaction.inputs[3]).attr('maxlength', '2');
            $(Interaction.inputs[4]).attr('maxlength', '2');
            $(Interaction.inputs[5]).attr('maxlength', '2');
            $(Interaction.inputs[6]).attr('maxlength', '2');
            $(Interaction.inputs[7]).attr('maxlength', '2');
            $(Interaction.inputs[8]).attr('maxlength', '2');

            $('#questionDiv').append(Interaction.inputs[0])
                .append(Interaction.inputs[1])
                .append(Interaction.inputs[2])
                .append(Interaction.inputs[3])
                .append(Interaction.inputs[4])
                .append(Interaction.inputs[5])
                .append(Interaction.inputs[6])
                .append(Interaction.inputs[7])
                .append(Interaction.inputs[8])
        }
        else if(randomNumber == 1){
            //	else if(0){
            for(var i = 0; i < 3; i++) {
                Interaction.datas[i] = Math.floor(Math.random() * 19) + 2;
            }
            do {
                Interaction.datas[3] = Math.floor(Math.random() * 19) + 2;
                for(var j = 0, total = 0; j < Interaction.datas.length; j++)
                    total += Interaction.datas[j];
            }
            while(total % 4 != 0);

            $(Interaction.container).append('<div id="datasDiv"></div>');
            $('#datasDiv').css("position", "absolute")
                .css("left", "180px")
                .css("top", "16px")
                .css("width", "200px")
                .css("height", "20px")
                .css("text-align", "center");

            $(Interaction.container).append('<div id="questionDiv"></div>');
            $('#questionDiv').css("position", "absolute")
                .css("left", "40px")
                .css("top", "35px")
                .css("width", "400px")
                .css("height", "210px");

            $('#questionDiv').append('<div id="avgText">Aritmetik Ortalama</div>');
            $('#avgText').css("position", "absolute")
                .css("left", "0px")
                .css("top", "32px")
                .css("font-size", 18)
                .css("text-align", "center")
                .css("width", "100px");

            $('#questionDiv').append('<p id="equal1" >=</p>');
            $('#equal1').css("position", "absolute")
                .css("left", "120px")
                .css("top", "48px")
                .css("font-size", 18);

            $('#questionDiv').append('<div id="line1"></div>');
            $('#line1').css("position","absolute")
                .css("left", "144px")
                .css("top", "56px")
                .css("width", "202px")
                .css("height", "1px")
                .css("padding", 0)
                .css("border-top", "2px solid");
            $('#questionDiv').append('<p id="plus1" >+</p>');
            $('#plus1').css("position", "absolute")
                .css("font-size", 18)
                .css("left", "182px")
                .css("top", "28px");
            $('#questionDiv').append('<p id="plus2" >+</p>');
            $('#plus2').css("position", "absolute")
                .css("font-size", 18)
                .css("left", "236px")
                .css("top", "28px");

            $('#questionDiv').append('<p id="plus3" >+</p>');
            $('#plus3').css("position", "absolute")
                .css("font-size", 18)
                .css("left", "290px")
                .css("top", "28px");

            $('#questionDiv').append('<p id="equal2" >=</p>');
            $('#equal2').css("position", "absolute")
                .css("font-size", 18)
                .css("left", "120px")
                .css("top", "160px");

            $('#questionDiv').append('<div id="line2"></div>');
            $('#line2').css("position","absolute")
                .css("left", "144px")
                .css("top", "168px")
                .css("width", "36px")
                .css("height", "1px")
                .css("padding", 0)
                .css("border-top", "2px solid");

            $('#questionDiv').append('<p id="equal3" >=</p>');
            $('#equal3').css("position", "absolute")
                .css("font-size", 18)
                .css("left", "190px")
                .css("top", "160px");

            // first input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '146px',
                top: "18px",
                fontSize: '18px'
            });

            // second input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '200px',
                top: "18px",
                fontSize: '18px'
            });

            // third input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '254px',
                top: "18px",
                fontSize: '18px'
            });

            // fourth input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '308px',
                top: "18px",
                fontSize: '18px'
            });

            // sixth input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '226px',
                top: "62px",
                fontSize: '18px'
            });

            // seventh input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '146px',
                top: "130px",
                fontSize: '18px'
            });

            // eighth input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '146px',
                top: "174px",
                fontSize: '18px'
            });

            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '210px',
                top: "150px",
                fontSize: '18px'
            });

            $(Interaction.inputs[0]).attr('maxlength', '2');
            $(Interaction.inputs[1]).attr('maxlength', '2');
            $(Interaction.inputs[2]).attr('maxlength', '2');
            $(Interaction.inputs[3]).attr('maxlength', '2');
            $(Interaction.inputs[4]).attr('maxlength', '2');
            $(Interaction.inputs[5]).attr('maxlength', '2');
            $(Interaction.inputs[6]).attr('maxlength', '2');
            $(Interaction.inputs[7]).attr('maxlength', '2');

            $('#questionDiv').append(Interaction.inputs[0])
                .append(Interaction.inputs[1])
                .append(Interaction.inputs[2])
                .append(Interaction.inputs[3])
                .append(Interaction.inputs[4])
                .append(Interaction.inputs[5])
                .append(Interaction.inputs[6])
                .append(Interaction.inputs[7])
        }
        else{
            for(var i = 0; i < 2; i++) {
                Interaction.datas[i] = Math.floor(Math.random() * 19) + 2;
            }
            do {
                Interaction.datas[2] = Math.floor(Math.random() * 19) + 2;
                for(var j = 0, total = 0; j < Interaction.datas.length; j++)
                    total += Interaction.datas[j];
            }
            while(total % 3 != 0);

            $(Interaction.container).append('<div id="datasDiv"></div>');
            $('#datasDiv').css("position", "absolute")
                .css("left", "180px")
                .css("top", "16px")
                .css("width", "200px")
                .css("height", "20px")
                .css("text-align", "center");

            $(Interaction.container).append('<div id="questionDiv"></div>');
            $('#questionDiv').css("position", "absolute")
                .css("left", "40px")
                .css("top", "35px")
                .css("width", "400px")
                .css("height", "210px");

            $('#questionDiv').append('<div id="avgText">Aritmetik Ortalama</div>');
            $('#avgText').css("position", "absolute")
                .css("left", "0px")
                .css("top", "32px")
                .css("font-size", 18)
                .css("text-align", "center")
                .css("width", "100px");

            $('#questionDiv').append('<p id="equal1" >=</p>');
            $('#equal1').css("position", "absolute")
                .css("left", "120px")
                .css("top", "48px")
                .css("font-size", 18);

            $('#questionDiv').append('<div id="line1"></div>');
            $('#line1').css("position","absolute")
                .css("left", "144px")
                .css("top", "56px")
                .css("width", "152px")
                .css("height", "1px")
                .css("padding", 0)
                .css("border-top", "2px solid");
            $('#questionDiv').append('<p id="plus1" >+</p>');
            $('#plus1').css("position", "absolute")
                .css("font-size", 18)
                .css("left", "182px")
                .css("top", "28px");
            $('#questionDiv').append('<p id="plus2" >+</p>');
            $('#plus2').css("position", "absolute")
                .css("font-size", 18)
                .css("left", "236px")
                .css("top", "28px");

            $('#questionDiv').append('<p id="equal2" >=</p>');
            $('#equal2').css("position", "absolute")
                .css("font-size", 18)
                .css("left", "120px")
                .css("top", "160px");

            $('#questionDiv').append('<div id="line2"></div>');
            $('#line2').css("position","absolute")
                .css("left", "144px")
                .css("top", "168px")
                .css("width", "36px")
                .css("height", "1px")
                .css("padding", 0)
                .css("border-top", "2px solid");

            $('#questionDiv').append('<p id="equal3" >=</p>');
            $('#equal3').css("position", "absolute")
                .css("font-size", 18)
                .css("left", "190px")
                .css("top", "160px");

            // first input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '146px',
                top: "18px",
                fontSize: '18px'
            });

            // second input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '200px',
                top: "18px",
                fontSize: '18px'
            });

            // third input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '254px',
                top: "18px",
                fontSize: '18px'
            });

            // sixth input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '200px',
                top: "62px",
                fontSize: '18px'
            });

            // seventh input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '146px',
                top: "130px",
                fontSize: '18px'
            });


            // eighth input
            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '146px',
                top: "174px",
                fontSize: '18px'
            });

            Interaction.appendInput({
                width: '30px',
                height: '32px',
                textAlign: 'center',
                position: 'absolute',
                left: '210px',
                top: "150px",
                fontSize: '18px'
            });

            $(Interaction.inputs[0]).attr('maxlength', '2');
            $(Interaction.inputs[1]).attr('maxlength', '2');
            $(Interaction.inputs[2]).attr('maxlength', '2');
            $(Interaction.inputs[3]).attr('maxlength', '2');
            $(Interaction.inputs[4]).attr('maxlength', '2');
            $(Interaction.inputs[5]).attr('maxlength', '2');
            $(Interaction.inputs[6]).attr('maxlength', '2');

            $('#questionDiv').append(Interaction.inputs[0])
                .append(Interaction.inputs[1])
                .append(Interaction.inputs[2])
                .append(Interaction.inputs[3])
                .append(Interaction.inputs[4])
                .append(Interaction.inputs[5])
                .append(Interaction.inputs[6])

        }

        for(var i = 0; i < Interaction.datas.length; i++) {
            if(Interaction.datas[i-1] >= 10) {
                var leftStr = ""+(8+40*i)+"px";
            }
            else {
                var leftStr = ""+(8+38*i)+"px";
            }
            $('#datasDiv').append('<p id="data'+i+'"></p>');
            $('#data'+i).css("position", "absolute")
                .css("left", leftStr)
                .css("top", "0px")
                .css("text-align", "center")
                .css("font-size", 18);
            if(i != Interaction.datas.length-1) {
                $('#data'+i).html(""+Interaction.datas[i]+",");
            }
            else {
                $('#data'+i).html(""+Interaction.datas[i]);
            }
        }

    },
	preCheck : function(){

    },
	isAnswerCorrect : function(values){
        var total = 0;
        for(var i = 0, total = 0; i < Interaction.datas.length; i++)
            total += Interaction.datas[i];
        var checkDataArr = [];
        var len = Interaction.datas.length;
        for(var i = 0; i < len; i++){
            checkDataArr[i] = values[i]
        }
        if(Interaction.checkDatas(checkDataArr) && values[len] == len && values[len+1] == total
            && values[len+2] == len && values[len+3] == total/len)
            return true;
        else
            return false;
    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.', false);
        var len = Interaction.datas.length;
        for(var i = 0, total = 0; i < Interaction.datas.length; i++)
            total += Interaction.datas[i];
        for(var i = 0; i < Interaction.datas.length; i++){
            Interaction.inputs[i].value = Interaction.datas[i];
        }
        Interaction.inputs[len].value = len;
        Interaction.inputs[len+1].value = total;
        Interaction.inputs[len+2].value = len;
        Interaction.inputs[len+3].value = total/len;
        for(var i = 0; i < Interaction.inputs.length; i++){
            Interaction.inputs[i].style.color = "green";
        }
    },
    checkDatas: function(values){
        var correctN = 0;
        console.log(values)
        for(var i = 0; i < Interaction.datas.length; i++){
            for(var j = 0; j < Interaction.datas.length; j++){
                if(values[j] == Interaction.datas[i]){
                    values[j] = "axxwt";
                }
            }
        }

        for(var i = 0; i < Interaction.datas.length; i++){
            console.log(values[i]);
            if(values[i] == "axxwt"){
                correctN += 1;
            }
        }
        console.log("correctN: "+correctN)

        if(correctN == Interaction.datas.length)
            return true;
        else
            return false;
    }
}