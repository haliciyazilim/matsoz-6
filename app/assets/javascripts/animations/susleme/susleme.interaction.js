var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki model oluşturma yöntemlerinden birini seçiniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };


        // first shape big part
        point1 = new Point(140.5,25.5);
        point2 = new Point(180.5,25.5);
        point3 = new Point(180.5,65.5);
        point4 = new Point(160.5,65.5);
        point5 = new Point(140.5,45.5);

        // first shape small part
        point6 = new Point(140.5,45.5);
        point7 = new Point(160.5,65.5);
        point8 = new Point(140.5,65.5);

        // second shape big part
        point9 = new Point(220.5,25.5);
        point10 = new Point(260.5,25.5);
        point11 = new Point(260.5,65.5);
        point12 = new Point(220.5,65.5);
        point13 = new Point(240.5,45.5);

        // second shape small part
        point14 = new Point(220.5,25.5);
        point15 = new Point(240.5,45.5);
        point16 = new Point(220.5,65.5);

        // third shape big part
        point17 = new Point(300.5,25.5);
        point18 = new Point(340.5,25.5);
        point19 = new Point(340.5,65.5);
        point20 = new Point(300.5,65.5);
        point21 = new Point(320.5,55.5);
        point22 = new Point(320.5,35.5);

        // third shape small part
        point23 = new Point(300.5,25.5);
        point24 = new Point(320.5,35.5);
        point25 = new Point(320.5,55.5);
        point26 = new Point(300.5,65.5);

        // shape1
        shape1 = new Group();
        var fShape1 = new Path();
        fShape1.moveTo(point1);
        fShape1.lineTo(point2);
        fShape1.lineTo(point3);
        fShape1.lineTo(point4);
        fShape1.lineTo(point5);
        fShape1.lineTo(point1);
        fShape1.closed = true;
        fShape1.fillColor = "white";
        fShape1.strokeColor = "black";

        var sShape1 = new Path();
        sShape1.moveTo(point6);
        sShape1.lineTo(point7);
        sShape1.lineTo(point8);
        sShape1.lineTo(point6);
        sShape1.closed = true;
        sShape1.fillColor = "white";
        sShape1.strokeColor = "black";

        shape1.addChild(fShape1);
        shape1.addChild(sShape1);
        shape1.myId = 1;
        shape1.class = "shapes";

        // shape2
        shape2 = new Group();
        var fShape2 = new Path();
        fShape2.moveTo(point9);
        fShape2.lineTo(point10);
        fShape2.lineTo(point11);
        fShape2.lineTo(point12);
        fShape2.lineTo(point13);
        fShape2.lineTo(point9);
        fShape2.closed = true;
        fShape2.fillColor = "white";
        fShape2.strokeColor = "black";

        var sShape2 = new Path();
        sShape2.moveTo(point14);
        sShape2.lineTo(point15);
        sShape2.lineTo(point16);
        sShape2.lineTo(point14);
        sShape2.closed = true;
        sShape2.fillColor = "white";
        sShape2.strokeColor = "black";

        shape2.addChild(fShape2);
        shape2.addChild(sShape2);
        shape2.myId = 2;
        shape2.class = "shapes";

        // shape3
        shape3 = new Group();
        var fShape3 = new Path();
        fShape3.moveTo(point17);
        fShape3.lineTo(point18);
        fShape3.lineTo(point19);
        fShape3.lineTo(point20);
        fShape3.lineTo(point21);
        fShape3.lineTo(point22);
        fShape3.lineTo(point17);
        fShape3.closed = true;
        fShape3.fillColor = "white";
        fShape3.strokeColor = "black";

        var sShape3 = new Path();
        sShape3.moveTo(point23);
        sShape3.lineTo(point24);
        sShape3.lineTo(point25);
        sShape3.lineTo(point26);
        sShape3.lineTo(point23);
        sShape3.closed = true;
        sShape3.fillColor = "white";
        sShape3.strokeColor = "black";

        shape3.addChild(fShape3);
        shape3.addChild(sShape3);
        shape3.myId = 3;
        shape3.class = "shapes";

        Interaction.palette = new Path.Rectangle(new Point(480.5,10.5), new Size(100,280));
        Interaction.palette.strokeColor = "black";

        var tool1 = new Tool();
        tool1.onMouseDown = function(event){
            if(event.item){
                console.log("im here");
                if(event.item.class == "shapes"){
                    var myId = event.item.myId;
                    if(myId == 1){
                        shape2.remove();
                        shape3.remove();
                        shape1.animate({
                            style:{
                                position:new Point(shape1.position.x+80,shape1.position.y)
                            },
                            duration:1000,
                            delay:1000,
                            animationType:'easeInOutQuad'
                        });
                        Main.setObjective('Kare içindeki şekli sağa ya da yukarı sürükleyerek öteleyiniz.');
                    }
                }
            }
        };
        console.log(tool1);

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){

    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
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