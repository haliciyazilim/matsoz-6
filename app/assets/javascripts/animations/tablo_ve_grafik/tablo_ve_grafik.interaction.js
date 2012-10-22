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

        Interaction.appendStatus({
            bottom:"30px",
            right:"150px",
            width:"350px",
            height:"30px",
//            border:"1px solid"
        });

        Interaction.appendInput({
            position:'absolute',
            top:'20px',
            left:'10px',
            width:'220px',
            height:'30px',
            fontSize:'12px',
            color:'#757575'
        },false,false);
        $(Interaction.container).append(Interaction.input);
        Interaction.input.onfocus = function(){
            if(this.value == 'Tablo basligini giriniz.'){
                this.value = '';
                $(Interaction.input).css({
                    color:'#000000',
                    fontSize:'12px'
                });
            }

        };
        Interaction.input.onblur = function(){
            if(this.value == ''){
                this.value = 'Tablo basligini giriniz.';
                $(Interaction.input).css({
                    color:'#757575',
                    fontSize:'12px'
                });
            }

        };
        $(Interaction.input).attr('maxLength',50);
        var leftStr = '';
        var topStr = '';
        var myIndex;
        for(var t = 0; t < 2; t++){
            var left = 10+t*110;
            leftStr = ''+left+'px';
            for(var y = 0; y < 5; y++){
                myIndex = t*5+y;
                var top = 50+y*30;
                topStr = ''+top+'px';
                if(y == 0){
                    Interaction.appendInput({
                        position:'absolute',
                        top:topStr,
                        left:leftStr,
                        width:'110px',
                        height:'30px',
                        fontSize:'12px',
                        backgroundColor:'#d9d9d9'
                    },false,false);
                }
                else{
                    Interaction.appendInput({
                        position:'absolute',
                        top:topStr,
                        left:leftStr,
                        width:'110px',
                        height:'30px',
                        fontSize:'12px'
                    },false,false);
                }
                $(Interaction.inputs[myIndex+1]).attr("maxLength",20);
            }
        }

        var xLabels = ["Pazartesi","Sali", "Carsamba","Persembe"];
        var yLabels = ["10","8","6","4","2","0"];
        var data = [9,3,7,8];
        var xGridLabelStyle = {
            justification:'right',
            rotation:-90
        };
        var chart = {
            xAxisName: "Zaman",
//            xAxisUnit: "Gün",
            yAxisName: "Satis fiyati",
//            yAxisUnit: "TL",
            xGridLabelStyle: xGridLabelStyle,
            xLabels: xLabels,
            yLabels: yLabels,
            data: data
        };
        columnGraph(new Point(280,80),chart.xLabels.length*50,120,chart,undefined,1000,1000);

        Interaction.disableAutoFocus();

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.input.focus();
        Interaction.input.blur();
    },
	preCheck : function(){

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