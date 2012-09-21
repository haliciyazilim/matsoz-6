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
        Interaction.button.className = "next_button";
        Interaction.button.onclick = Interaction.prepareNextQuestion;
        Main.interactionProject.activeLayer.removeChildren();
        Interaction.createRectanglePrisim();
//        Interaction.Shapes[Interaction.shapeIndex]();
//        Interaction.playScenerio(Interaction.Scenarios[Interaction.shapeIndex]);
        /*<[[TEST*/
            Interaction.playScenerio(Interaction.Scenarios[ 5 ]);
        /*TEST]]>*/
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
            }
            function point(p){
//                var point  = p.from.showOnCanvas(5);
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
                    strokeColor:"#000"
                }
                surface.project(Interaction.matrix);
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
                    delay:1000
                });
                var point2  = centerPoint.showOnCanvas(5);
                point2.animate({
                    style:{position:Util.project(scene.point2,Interaction.matrix)},
                    duration:1000,
                    delay:1000
                });
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
                    delay:1000,
                    update:function(){
                        if(this.line)
                            this.line.remove();
                        this.line = new Path.Line(this.point1,this.point2);
                        this.line.set_style({strokeColor:"#000"});
//                        this.line.insertBelow(Interaction.rectanglePrisim);
                    },
                    callback:function(){
                        if(scene.rotateX || scene.rotateY || scene.rotateZ){
                            var anim = new AnimationHelper({
                                angle:0,
                                line:this.line
                            });
                            anim.animate({
                                style:{angle:Math.PI*2},
                                duration:1000,
                                delay:500,
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
                                    this.line.remove();
                                    this.line = new Path.Line(p1,p2);
                                    this.line.set_style({strokeColor:"#000"});
                                    point1.position = p1;
                                    point2.position = p2;
                                }
                            })
                        }

                    }
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
                    point2: new Point3(125,-45,36),
                    rotateX: new Point3(100,0,0)
                }
            ],
            [
                {
                    type:"line",
                    point1: new Point3(-50,95,45),
                    point2: new Point3(125,-45,36)
                },
                {
                    type:"line",
                    point1: new Point3(-50,125,100),
                    point2: new Point3(125,-15,100)
                }
            ],
            [
                {
                    type:"line",
                    point1: new Point3(200,150,78),
                    point2: new Point3(300,50,366)
                },
                {
                    type:"line",
                    point1: new Point3(450,50,87),
                    point2: new Point3(150,100,15)
                }
            ],
            [
                {
                    type:"surface",
                    points:[
                        new Point3(-50,-50,20),
                        new Point3(-50,50,20),
                        new Point3(50,50,-20),
                        new Point3(50,-50,-20)
                    ],
                    rotateX: new Point3(0,0,0)
                }
            ]
        ];
    },

//    Shapes:[
//        function(){//one point
//            Interaction.pause();
//            var point  = new Point(200,150).showOnCanvas(5);
//            point.animate({
//                style:{position:point.position.add(100,0)},
//                duration:1000,
//                delay:1000,
//                callback:Interaction.resume()
//            });
//        },
//        function(){//two point
//            var point1  = new Point(110,125).showOnCanvas(5);
//            point1.animate({
//                style:{position:point1.position.add(230,10)},
//                duration:1000,
//                delay:1000,
//                callback:Interaction.resume()
//            });
//            var point2  = new Point(310,175).showOnCanvas(5);
//            point2.animate({
//                style:{position:point2.position.add(-50,-70)},
//                duration:1000,
//                delay:1000,
//                callback:Interaction.resume()
//            });
//        },
//        function(){//
//            var point1  = new Point(250,125).showOnCanvas(5);
//            point1.animate({
//                style:{position:point1.position.add(50,50)},
//                duration:1000,
//                delay:1000,
//                callback:Interaction.resume()
//            });
//            var point2  = new Point(250,125).showOnCanvas(5);
//            point2.animate({
//                style:{position:point2.position.add(-50,-50)},
//                duration:1000,
//                delay:1000,
//                callback:Interaction.resume()
//            });
//            point1.insertBelow(Interaction.rectanglePrisim);
//            point2.insertBelow(Interaction.rectanglePrisim);
//            var animHelper = new AnimationHelper({
//                line:null,
//                point1:point1.position,
//                point2:point2.position
//            });
//            animHelper.animate({
//                style:{
//                    point1:point1.position.add(50,50),
//                    point2:point2.position.add(-50,-50)
//                },
//                duration:1000,
//                delay:1000,
//                update:function(){
//                    if(this.line)
//                        this.line.remove();
//                    this.line = new Path.Line(this.point1,this.point2);
//                    this.line.set_style({strokeColor:"#000"});
//                    this.line.insertBelow(Interaction.rectanglePrisim);
//                }
//            });
//        },
//        function(){//
//
//        }
//    ],

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