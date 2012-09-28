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
	nextQuestion: function(randomNumber){
        Interaction.pause();
        Interaction.resume(3000);
        Interaction.button.className = "next_button";
        Interaction.button.onclick = Interaction.prepareNextQuestion;
        Main.interactionProject.activeLayer.removeChildren();
        Interaction.createRectanglePrisim();
//        Interaction.Shapes[Interaction.shapeIndex]();
        Interaction.playScenerio(Interaction.Scenarios[Interaction.shapeIndex]);
//        /*<[[TEST*/ Interaction.playScenerio(Interaction.Scenarios[ 9 ]); /*TEST]]>*/
        Interaction.shapeIndex = ++Interaction.shapeIndex % Interaction.Scenarios.length;
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
                    line(scenario[i]);
                    break;
                case "surface":
                    surface(scenario[i]);
                    break;
                case "dashedLine":
                    dashedLine(scenario[i]);
                    break;
            }
            function point(p){
                var point = Util.project(p.from,Interaction.matrix).showOnCanvas(5);
                if(p.to){
                    for(var i=0;i<p.to.length;i++)
                        point.animate({
                            style:{position:Util.project(p.to[i],Interaction.matrix)},
                            duration:1000,
                            delay:1000*(i+1)
                        });
                }
            }
            function surface(scene){
                var surface = new Surface(scene.points);
                surface.shape = {
                    strokeColor:new RgbColor(65/255,129/255,138/255,0.5),
                    fillColor:new RgbColor(168/255,219/255,227/255,0.5)
                }
                surface.project(Interaction.matrix);
                var animHelper = new AnimationHelper({
                    angle:0
                });


                if(scene.rotateX || scene.rotateY || scene.rotateZ){
                    animHelper.animate({
                        style:{angle:Math.PI * 2},
                        duration:2000,
                        delay:1500,
                        init:function(){
                            if(scene.rotateX)
                                surface.pivotsX[0] = scene.rotateX;
                            else if(scene.rotateY)
                                surface.pivotsY[0] = scene.rotateY;
                            else
                                surface.pivotsZ[0] = scene.rotateZ;
                        },
                        update:function(){
                            if(scene.rotateX)
                                surface.rotationsX[0] = this.angle;
                            else if(scene.rotateY)
                                surface.rotationsY[0] = this.angle;
                            else
                                surface.rotationsZ[0] = this.angle;
                            surface.project(Interaction.matrix)
                        }
                    });
                }

            }
            function line(scene){
                var centerPoint = Util.centerOfPoints([
                    Util.project(scene.point1,Interaction.matrix),
                    Util.project(scene.point2,Interaction.matrix)
                ]);

                var point1  = centerPoint.showOnCanvas(5);
                point1.animate({
                    style:{position:Util.project(scene.point1,Interaction.matrix)},
                    duration:1000,
                    delay:100
                });
                point1.set_style({fillColor:"#41818"})
                var point2  = centerPoint.showOnCanvas(5);
                point2.animate({
                    style:{position:Util.project(scene.point2,Interaction.matrix)},
                    duration:1000,
                    delay:100
                });
                point2.set_style({fillColor:"#41818"})
                var animHelper = new AnimationHelper({
                    line:null,
                    point1:centerPoint,
                    point2:centerPoint
                });
                animHelper.animate({
                    style:{
                        point1:Util.project(scene.point1,Interaction.matrix),
                        point2:Util.project(scene.point2,Interaction.matrix)
                    },
                    duration:1000,
                    delay:100,
                    update:function(){
                        if(this.line)
                            this.line.remove();
                        this.line = new Path.Line(this.point1,this.point2);
                        this.line.set_style({
                                strokeColor:"#41818A",
                                strokeWidth:2
                        });
                    }
                });
                if(scene.rotateX || scene.rotateY || scene.rotateZ){
                    var anim = new AnimationHelper({
                        angle:0
                    });
                    anim.animate({
                        style:{angle:Math.PI*2},
                        duration:2000,
                        delay:1500,
                        update:function(){
                            if(scene.rotateX){
                                var p1 = Util.project(scene.point1.getRotatedPointByX(this.angle), Interaction.matrix);
                                var p2 = Util.project(scene.point2.getRotatedPointByX(this.angle), Interaction.matrix);
                            }
                            else if(scene.rotateY){
                                var p1 = Util.project(scene.point1.getRotatedPointByY(this.angle), Interaction.matrix);
                                var p2 = Util.project(scene.point2.getRotatedPointByY(this.angle), Interaction.matrix);
                            }else{
                                var p1 = Util.project(scene.point1.getRotatedPointByY(this.angle), Interaction.matrix);
                                var p2 = Util.project(scene.point2.getRotatedPointByY(this.angle), Interaction.matrix);
                            }
                            if(animHelper.line)
                                animHelper.line.remove();
                            animHelper.line = new Path.Line(p1,p2);
                            animHelper.line.set_style({
                                strokeColor:"#41818A",
                                strokeWidth:2
                            });
                            point1.position = p1;
                            point2.position = p2;
                        }

                    })
                }
            }
            function dashedLine(scene){
                this.line = new Path.Line(Util.project(scene.point1,Interaction.matrix),Util.project(scene.point2,Interaction.matrix));
                this.line.set_style({
                    strokeColor:new RgbColor(65/255,129/255,138/255,1),
                    dashArray:[3,2]
                });
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