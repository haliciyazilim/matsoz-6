function __Styles(){
	strokeColor = "#9b763d";
    fillColor = "#f2c885";

    lineStyle = {
        strokeWidth:2,
        strokeColor:strokeColor
    };

    circStyle = {
        fillColor:fillColor,
        strokeColor:strokeColor
    };

    fillStyle = {
        fillColor:fillColor,
        strokeColor:strokeColor
    };

    interactionRectanglePrisimStyle = {
        strokeColor: "#000"
    }
}
;
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
;
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var size = 80;


        var matrix = Util.createProjectionMatrix(757, 170, 200, 0, -20, 757, 170);

        var point1 = new Point3(0,0,-200);

        var p1 = Util.project(point1, matrix);

        var point2 = new Point3(10,10,-200);
        var p2 = Util.project(point2, matrix);

        var point;
        var line;
        var surface;
        var space;

        point = new Path.Line(p1, p1.add(2,0));
        point.strokeColor = strokeColor;
        point.strokeWidth = 2;

        var animationHelper = new AnimationHelper({
            lineAngle: -0.05,
            surfaceAngle: 0,
            spaceAngleX: 0,
            spaceAngleY: 0
        })


        var point2 = new Point3(0,0,-200-size*2);

        animationHelper.animate({
            style: {
                lineAngle: -Math.PI/2
            },
            duration: 2000,
            delay: 3000,
            animationType: 'easeInEaseOut',
            init: function() {
                point.remove();
            },
            update: function() {
                if (line) {
                    line.remove();
                }
                var center = new Point3(-size/2, 0, -200 - size/2);
                var p1 = Util.project(point1.getRotatedPointByY(this.lineAngle, center), matrix);
                var p2 = Util.project(point2.getRotatedPointByY(this.lineAngle, center), matrix);

                line = new Path.Line(p1, p2);
                line.strokeColor = lineStyle.strokeColor;
            }
        })

        $(Animation.container).append('<div id="point">Nokta</div>')
        $('#point').css({
            position: 'absolute',
            width: '757px',
            bottom: '16px',
            textAlign: 'center',
            color: 'black',
            opacity: 0
        })
        $(Animation.container).append('<div id="line">Doğru Parçası</div>')
        $('#line').css({
            position: 'absolute',
            width: '757px',
            bottom: '16px',
            textAlign: 'center',
            color: 'black',
            opacity: 0
        })
        $(Animation.container).append('<div id="surface">Düzlem</div>')
        $('#surface').css({
            position: 'absolute',
            width: '757px',
            bottom: '16px',
            textAlign: 'center',
            color: 'black',
            opacity: 0
        })
        $(Animation.container).append('<div id="space">Uzay</div>')
        $('#space').css({
            position: 'absolute',
            width: '757px',
            bottom: '16px',
            textAlign: 'center',
            color: 'black',
            opacity: 0
        })

        $('#point').delay(000).animate({
            opacity: 1
        }, 1000).delay(2000).animate({
            opacity: 0
        }, 1000);

        $('#line').delay(3000).animate({
            opacity: 1
        }, 1000).delay(2000).animate({
            opacity: 0
        }, 1000);

        $('#surface').delay(6000).animate({
            opacity: 1
        }, 1000).delay(2000).animate({
            opacity: 0
        }, 1000);

        $('#space').delay(9000).animate({
            opacity: 1
        }, 1000);


        animationHelper.animate({
            style: {
                surfaceAngle: Math.PI/2
            },
            duration: 2000,
            delay: 6000,
            animationType: 'easeInEaseOut',
            init: function() {
                if (line) {
                    line.remove();
                }
            },
            update: function() {
                if (surface) {
                    surface.remove();
                }

                var center = new Point3(0, 0, -200 - size);

                var point1 = new Point3(-size, 0, -200);
                var point2 = new Point3( size, 0, -200);
                var point3 = new Point3( size, 0, -200-size*2);
                var point4 = new Point3(-size, 0, -200-size*2);

                var p1 = Util.project(point1.getRotatedPointByX(this.surfaceAngle, center), matrix);
                var p2 = Util.project(point2.getRotatedPointByX(this.surfaceAngle, center), matrix);
                var p3 = Util.project(point3.getRotatedPointByX(this.surfaceAngle, center), matrix);
                var p4 = Util.project(point4.getRotatedPointByX(this.surfaceAngle, center), matrix);

                surface = new Path();
                surface.moveTo(p1);
                surface.lineTo(p2);
                surface.lineTo(p3);
                surface.lineTo(p4);
                surface.closed = true;

                surface.set_style(fillStyle);
            }
        });


        animationHelper.animate({
            style: {
                spaceAngleX: Math.PI/8,
                spaceAngleY: -Math.PI/4
            },
            duration: 2000,
            delay: 9000,
            animationType: 'easeInEaseOut',
            init: function() {
                surface.remove();
            },
            update: function() {
                if (space) {
                    space.remove();
                }

                var center = new Point3(0, 0, -200-size*2);

                var point1 = new Point3(-size, -size, -200-size);
                var point2 = new Point3( size, -size, -200-size);
                var point3 = new Point3( size,  size, -200-size);
                var point4 = new Point3(-size,  size, -200-size);

                var point5 = new Point3( size, -size, -200-size*3);
                var point6 = new Point3( size,  size, -200-size*3);
                var point7 = new Point3(-size,  size, -200-size*3);

                var p1 = Util.project(point1.getRotatedPointByY(this.spaceAngleY, center).getRotatedPointByX(this.spaceAngleX, center), matrix);
                var p2 = Util.project(point2.getRotatedPointByY(this.spaceAngleY, center).getRotatedPointByX(this.spaceAngleX, center), matrix);
                var p3 = Util.project(point3.getRotatedPointByY(this.spaceAngleY, center).getRotatedPointByX(this.spaceAngleX, center), matrix);
                var p4 = Util.project(point4.getRotatedPointByY(this.spaceAngleY, center).getRotatedPointByX(this.spaceAngleX, center), matrix);

                var p5 = Util.project(point5.getRotatedPointByY(this.spaceAngleY, center).getRotatedPointByX(this.spaceAngleX, center), matrix);
                var p6 = Util.project(point6.getRotatedPointByY(this.spaceAngleY, center).getRotatedPointByX(this.spaceAngleX, center), matrix);
                var p7 = Util.project(point7.getRotatedPointByY(this.spaceAngleY, center).getRotatedPointByX(this.spaceAngleX, center), matrix);

                space = new Group();

                var s3 = new Path();
                s3.moveTo(p3);
                s3.lineTo(p6);
                s3.lineTo(p7);
                s3.lineTo(p4);
                s3.closed = true;
                s3.set_style(fillStyle);
                space.addChild(s3);

                var s2 = new Path();
                s2.moveTo(p2);
                s2.lineTo(p5);
                s2.lineTo(p6);
                s2.lineTo(p3);
                s2.closed = true;
                s2.set_style(fillStyle);
                space.addChild(s2);

                var s1 = new Path();
                s1.moveTo(p1);
                s1.lineTo(p2);
                s1.lineTo(p3);
                s1.lineTo(p4);
                s1.closed = true;
                s1.set_style(fillStyle);
                space.addChild(s1);
            },
            callback: function() {
                Main.animationFinished();
            }
        })

    }

}
;
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
;




