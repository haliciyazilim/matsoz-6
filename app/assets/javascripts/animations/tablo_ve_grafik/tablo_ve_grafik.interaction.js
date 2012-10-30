var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;

        Main.setObjective('Yandaki tablonun başlığını yazınız. Tablodaki bölümlerden en az ilk üçünü doldurunuz. Tabloyu 0 ile 10 arasındaki değerlerle doldurup "Oluştur" düğmesine basınız ve grafiği oluşturunuz.');

        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        $(Interaction.container).append('<span id="table" style="position:absolute;top:31px;left:10px;font-size:12px;">Tablo:</span>' +
            '<span id="graph" style="position:absolute;top:14px;left:270px;opacity:0;">Grafik:</span>' +
            ' <button id="graphBtn" class="chart_button"></button>' +
            '<button id="repeatBtn" class="repeat_button_small"></button>');

        $('#graphBtn').css({
            position:'absolute',
            top:'210px',
            left:'20px',
            opacity:1
        });
        $('#repeatBtn').css({
            position:'absolute',
            top:'210px',
            left:'130px',
            opacity:1
        });

        Interaction.appendStatus({
            bottom:"10px",
            left:"10px",
            width:"220px",
            height:"40px",
//            border:"1px solid",
            textAlign:'center'
        });
        Interaction.appendInput({
            position:'absolute',
            top:'20px',
            left:'47px',
            width:'183px',
            height:'30px',
            fontSize:'12px',
            color:'#757575'
        },false,false);
        var xText = new PointText(new Point(30,65));
        xText.justification = 'left';
        xText.content = 'x ekseni';

        var yText = new PointText(new Point(145,65));
        yText.justification = 'left';
        yText.content = 'y ekseni';

        $(Interaction.container).append(Interaction.input);
        Interaction.input.onfocus = function(){
            if(this.value == 'Tablo başlığını giriniz'){
                this.value = '';
                $(Interaction.input).css({
                    color:'#000000',
                    fontSize:'12px'
                });
            }

        };
        Interaction.input.onblur = function(){
            if(this.value == ''){
                this.value = 'Tablo başlığını giriniz';
                $(Interaction.input).css({
                    color:'#757575',
                    fontSize:'12px'
                });
            }

        };
        $(Interaction.input).attr('maxLength',28);
        var leftStr = '';
        var topStr = '';
        var myIndex;
        for(var t = 0; t < 5; t++){
            var top = 70+t*26;
            topStr = ''+top+'px';
            for(var y = 0; y < 2; y++){
                myIndex = t*2+y;
                var left = 10+y*110;
                leftStr = ''+left+'px';
                if(t == 0){
                    Interaction.appendInput({
                        position:'absolute',
                        top:topStr,
                        left:leftStr,
                        width:'110px',
                        height:'26px',
                        fontSize:'12px',
                        backgroundColor:'#d9d9d9',
                        fontWeight:'normal'
                    },false,false);
                }
                else{
                    Interaction.appendInput({
                        position:'absolute',
                        top:topStr,
                        left:leftStr,
                        width:'110px',
                        height:'26px',
                        fontSize:'12px',
                        fontWeight:'normal'
                    },false,false);
                }
                if(myIndex == 0 || myIndex == 1){
                    $(Interaction.inputs[myIndex+1]).attr("maxLength",10);
                }
                else{
                    $(Interaction.inputs[myIndex+1]).attr("maxLength",20);
                }
            }
        }
        Interaction.disableAutoFocus();

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        for(var i = 0; i < Interaction.inputs.length; i++){
            Interaction.inputs[i].value = '';
        }

        if(Interaction.titleText){
            Interaction.titleText.remove();
        }

        if(Interaction.graphGroup){
            Interaction.graphGroup.remove();
        }
        if(Interaction.emptyGroup){
            Interaction.emptyGroup.remove();
        }

        $('#graph').css("opacity",0);

        var xLabels = ["","", "",""];
        var yLabels = ["","","","","","0"];
        var data = [];
        var xGridLabelStyle = {
            justification:'right',
            rotation:-90
        };
        var chart = {
            xAxisName: "x ekseni",
//            xAxisUnit: "Gün",
            yAxisName: "y ekseni",
//            yAxisUnit: "TL",
            xGridLabelStyle: xGridLabelStyle,
            xLabels: xLabels,
            yLabels: yLabels,
            data: data
        };
        Interaction.emptyGroup = columnGraph(new Point(270,90),chart.xLabels.length*50,120,chart);

        enableInputsBox();
        Interaction.inputs[0].focus();
        Interaction.inputs[0].blur();

        $('#repeatBtn').css("opacity",0.4);
        $('#repeatBtn').get(0).onclick = null;

        $('#graphBtn').css("opacity",1);
        $('#graphBtn').get(0).onclick = Interaction.preCheck;
    },
	preCheck : function(){
        if(Interaction.inputs[0].value == 'Tablo başlığını giriniz'){
            Interaction.setStatus('Lütfen tablo başlığını giriniz.',false);
        }
        else if(Interaction.inputs[1].value == '' || Interaction.inputs[2].value == ''){
            Interaction.setStatus('Lütfen eksen başlıklarını doldurunuz.',false);
        }
        else if(Interaction.inputs[3].value == '' || Interaction.inputs[5].value == ''){
            Interaction.setStatus('Lütfen en az iki sütunu doldurunuz.',false);
        }
        else if(!Util.isInteger(Interaction.inputs[4].value) || !Util.isInteger(Interaction.inputs[6].value)){
            Interaction.setStatus('Lütfen y sütununa 0 ile 10 arasında tam sayı giriniz.',false);
        }
        else if(Interaction.inputs[4].value < 0 || Interaction.inputs[4].value > 10){
            Interaction.setStatus('Lütfen y sütununa 0 ile 10 arasında tam sayı giriniz.',false);
        }
        else if(Interaction.inputs[6].value < 0 || Interaction.inputs[6].value > 10){
            Interaction.setStatus('Lütfen y sütununa 0 ile 10 arasında tam sayı giriniz.',false);
        }
        else if(Interaction.inputs[7].value == '' && Interaction.inputs[8].value != ''){
            Interaction.setStatus('Lütfen x eksenini eksiksiz doldurunuz.',false);
        }
        else if(Interaction.inputs[9].value == '' && Interaction.inputs[10].value != ''){
            Interaction.setStatus('Lütfen x eksenini eksiksiz doldurunuz.',false);
        }
        else if(Interaction.inputs[7].value != ''){
            if(!Util.isInteger(Interaction.inputs[8].value) || Interaction.inputs[8].value < 0 || Interaction.inputs[8].value > 10){
                Interaction.setStatus('Lütfen y sütununa 0 ile 10 arasında tam sayı giriniz.',false);
            }
            else{
                if(Interaction.inputs[9].value != ''){
                    if(!Util.isInteger(Interaction.inputs[10].value) || Interaction.inputs[10].value < 0 || Interaction.inputs[10].value > 10){
                        Interaction.setStatus('Lütfen y sütununa 0 ile 10 arasında tam sayı giriniz.',false);
                    }
                    else{
                        Interaction.setStatus('');
                        drawColumnGraph();
                    }
                }
                else{
                    Interaction.setStatus('');
                    drawColumnGraph();
                }
            }
        }

        else{
            Interaction.setStatus('');
            drawColumnGraph();
        }
        return false;
    },
	isAnswerCorrect : function(value){

    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
		
    }
}