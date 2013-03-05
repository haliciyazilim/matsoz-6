var Interaction = {
	getFramework:function(){
        return 'paper';
    },
	images:[
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki uzay modelinde nokta doğru ve düzlem modellerini “sonraki” düğmesine basarak izleyebilirsiniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        };
        Interaction.appendButton({
            bottom:"40px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"50px",
            right:"150px"
        });
        Interaction.shapeIndex = 0;
        Interaction.generateScenarios();
        Interaction.matrix = Util.createProjectionMatrixForObjectAt(250,150);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(){
        Interaction.pause();
        Interaction.resume(3000);
        Interaction.button.className = "next_button";
        Interaction.button.onclick = Interaction.prepareNextQuestion;
        Main.interactionProject.activeLayer.removeChildren();
        Interaction.createRectanglePrisim();
//        Interaction.Shapes[Interaction.shapeIndex]();
        Interaction.playScenerio(Interaction.Scenarios[Interaction.shapeIndex]);
//        /*<[[TEST*/ Interaction.playScenerio(Interaction.Scenarios[ 9 ]); /*TEST]]>*/
        if(Interaction.shapeIndex == Interaction.Scenarios.length-1){
            Interaction.button.style.display = 'none';
        }
        else{
            Interaction.shapeIndex = ++Interaction.shapeIndex % Interaction.Scenarios.length;
        }
//        if(Interaction.shapeIndex == )
    },
    createRectanglePrisim:function(){
        var pr = new ExpandablePrism(350, 225, 100, Interaction.matrix);
        pr.fillColor = new RgbColor(1,1,1,0.5);
        pr.project();
    },
    playScenerio:function(scenario){
        for(var i=0;i<scenario.length;i++){
            switch(scenario[i].type){
                case "point":
                    point(scenario[i]);
                    break;
                case "line":
                    Line(scenario[i]);
                    break;
                case "surface":
                    surface(scenario[i]);
                    break;
                case "dashedLine":
                    dashedLine(scenario[i]);
                    break;
            }
        }
    },
    generateScenarios:function(){
        Interaction.Scenarios = [
            [
                {
                    type:"point",
                    from: new Point3(-70,0,20),
                    to:[ new Point3(70,75,20) , new Point3(140,-70,50)]
                }
            ],
            [
                {
                    type:"point",
                    from: new Point3(-110,45,20),
                    to:[ new Point3(100,10,20)]
                },
                {
                    type:"point",
                    from: new Point3(150,75,35),
                    to:[ new Point3(-50,-70,45)]
                }
            ],
            [
                {
                    type:"line",
                    point1: new Point3(-50,95,45),
                    point2: new Point3(125,-45,36)
                }
            ],
            [
                {
                    type:"line",
                    point1: new Point3(-125,95,45),
                    point2: new Point3(125,-45,36)
                },
                {
                    type:"line",
                    point1: new Point3(-125,125,100),
                    point2: new Point3(125,-15,100)
                }
            ],
            [
                {
                    type:"line",
                    point1: new Point3(-120,50,30),
                    point2: new Point3(120,-50,65)
                },
                {
                    type:"line",
                    point1: new Point3(-120,-50,30),
                    point2: new Point3(120,50,65)
                }
            ],
            [
                {
                    type:"surface",
                    points:[
                        new Point3(-100,-50,-20),
                        new Point3(-100,50,-20),
                        new Point3(100,50,20),
                        new Point3(100,-50,20)
                    ]
                }
            ],
            [
                {
                    type:"surface",
                    points:[
                        new Point3(-120,-50,-0),
                        new Point3(-120,50,-0),
                        new Point3(80,50,40),
                        new Point3(80,-50,40)
                    ],
                    rotateY:new Point3(0,0,0)
                },
                {
                    type:"surface",
                    points:[
                        new Point3(-100,-50,-20),
                        new Point3(-100,50,-20),
                        new Point3(100,50,20),
                        new Point3(100,-50,20)
                    ],
                    rotateY:new Point3(0,0,0)
                }
            ],
            [
                {
                    type:'dashedLine',
                    point1:new Point3(100,0,0),
                    point2:new Point3(-100,0,0),
                    rotateX:new Point3(0,0,0)
                },
                {
                    type:"surface",
                    points:[
                        new Point3(-100,0,-50),
                        new Point3(100,0,-50),
                        new Point3(100,0,50),
                        new Point3(-100,0,50)
                    ],
                    rotateX:new Point3(0,0,0)
                },
                {
                    type:"surface",
                    points:[
                        new Point3(-100,-50,0),
                        new Point3(-100,50,0),
                        new Point3(100,50,0),
                        new Point3(100,-50,0)
                    ],
                    rotateX:new Point3(0,0,0)
                }
            ],
            [
                {
                    type:"surface",
                    points:[
                        new Point3(-100,0,-50),
                        new Point3(100,0,-50),
                        new Point3(100,0,50),
                        new Point3(-100,0,50)
                    ],
                    rotateX:new Point3(0,0,0)
                },
                {
                    type:"line",
                    point1: new Point3(-80,-50,-30),
                    point2: new Point3(80,-50,65),
                    rotateX:new Point3(0,0,0)
                }
            ],
            [
                {
                    type:"line",
                    point1: new Point3(-80,-70,-30),
                    point2: new Point3(80,70,30),
                    rotateX:new Point3(0,0,0)
                },
                {
                    type:"point",
                    from:new Point3(0,0,0)
                },
                {
                    type:"surface",
                    points:[
                        new Point3(-100,0,-50),
                        new Point3(100,0,-50),
                        new Point3(100,0,50),
                        new Point3(-100,0,50)
                    ],
                    rotateX:new Point3(0,0,0)
                }
            ]
        ];
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