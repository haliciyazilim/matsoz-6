var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        {
            id:'compass_left_leg',
            src:'/assets/animations/compass_left_leg.png'
        },
        {
            id:'compass_knuckle',
            src:'/assets/animations/compass_knuckle.png'
        },
        {
            id:'compass_right_leg',
            src:'/assets/animations/compass_right_leg.png'
        }
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki MNK açısının açıortayını çiziniz. Önce pergelin sivri ucunu açının köşesine yerleştirip bir yay çiziniz. Yayın açının kollarını kestiği noktalardan pergelin açıklığını bozmadan yaylar çiziniz ve kesiştikleri noktayı açının köşesi ile birleştiriniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        if(Interaction.angle){
            Interaction.angle.remove();
        }
        if(Interaction.compass){
            Interaction.compass.remove();
        }
        Interaction.br = 12;
        Interaction.step2 = false;
        initCompass(new Point(440,140));
        var myAngle = Util.randomInteger(30,141);
        var myCenterPoint = new Point(200,200);
        var circ1 = new Path.Circle(myCenterPoint,6);
        circ1.fillColor = 'black';
        var referencePoint = new Point(myCenterPoint.x,myCenterPoint.y-120);
        var point1 = referencePoint.getRotatedPoint(-myAngle/2,myCenterPoint);
        var point2 = referencePoint.getRotatedPoint(myAngle/2,myCenterPoint);
        var circ2 = new Path.Circle(point1,6);
        circ2.fillColor = 'black';
        var circ3 = new Path.Circle(point2,6);
        circ3.fillColor = 'black';
        Interaction.angle = new Path();
        Interaction.angle.moveTo(point1);
        Interaction.angle.lineTo(myCenterPoint);
        Interaction.angle.lineTo(point2);
        Interaction.angle.strokeColor = 'black';
        Interaction.angle.strokeWidth = 2;
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