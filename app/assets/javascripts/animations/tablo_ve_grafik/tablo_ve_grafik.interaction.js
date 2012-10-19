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
            left:'400px',
            width:'150px',
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
        $(Interaction.input).attr('maxLength',30);

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
        columnGraph(new Point(40,50),chart.xLabels.length*50,120,chart,undefined,1000,1000);

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