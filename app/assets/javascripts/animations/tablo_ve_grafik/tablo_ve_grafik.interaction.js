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
//        var xLabels = ["P.tesi","Sali", "Cuma"];
//        var yLabels = ["10","8","6","4","2","0"];
        var xLabels = ["", ""];
        var yLabels = ["","","","","","0"];
        var data = [];
        var chart = {
            xAxisName: "Zaman",
            xAxisUnit: "Gün",
            yAxisName: "Satis fiyati",
            yAxisUnit: "TL",
            xLabels: xLabels,
            yLabels: yLabels,
            data: data
        };
        columnGraph(new Point(100,50),chart.xLabels.length*60,120,chart);

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){

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