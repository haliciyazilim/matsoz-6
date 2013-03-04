function __Styles(){
    cubeStyle = {
        strokeColor:'#255b63',
        strokeWidth:1,
        fillColor:'#bfe8ef'
    };
    animationCubeStyle = {
        strokeColor:'#666',
        strokeWidth:1,
        fillColor:'#ddd'
    }
}
;
function UnitCube(x,y,z){
    this.x = x;
    this.y = y;
    this.z = z;

    this.draw = function(p,a,_s,style){
        if(this.shape)
            this.shape.remove();
        this.shape = new Path.Cube(p,a,new Point(_s.xZ,_s.yZ));
        if(style)
            this.shape.set_style(style);
        else
            this.shape.set_style(cubeStyle);
    return this.shape;
    };
}
UnitCube.compare = function(a,b){
    if(a.z > b.z)
        return 1;
    if(a.z < b.z)
        return -1;
    if(a.y > b.y)
        return 1;
    if(a.y < b.y)
        return -1;
    if(a.x > b.x)
        return 1
    if(a.x < b.x)
        return -1;
    return 0;
}
UnitCube.drawCubes = function(cubes,zero,a,_s,style){
    //decide the draw order
    cubes.sort(UnitCube.compare);

    //draw the cubes
    for(var i=0; i<cubes.length;i++){
        var p = zero.add(
            Math.floor(cubes[i].x*a)+0.5,
            Math.floor(-cubes[i].y*a)+0.5
        );
        p = p.add(
            Math.floor(-cubes[i].z*a*_s.xZ),
            Math.floor(cubes[i].z*a*_s.yZ)
        );

        cubes[i].draw(p,a,_s,style);
    }
}
UnitCube.explode = function(cubes,zero,a,distance,_s){
    //decide the draw order
    cubes.sort(UnitCube.compare);
    //draw the cubes
    for(var i=0; i<cubes.length;i++){
        //console.log(cubes[i].x,cubes[i].y,cubes[i].z)
        var p = zero.add(cubes[i].x*a,-cubes[i].y*a);
        p = p.add(-cubes[i].z*a*_s.xZ,cubes[i].z*a*_s.yZ);
        p = p.add(distance*cubes[i].x,0);
        p = p.add(0,-distance*cubes[i].y);
        p = p.add(-cubes[i].z*distance*_s.xZ,cubes[i].z*distance*_s.yZ);
        p = new Point(Math.floor(p.x)+0.5,Math.floor(p.y)+0.5)
        cubes[i].draw(p,a,_s);
    }
}
;
var Animation = {
    images:[],
	init:function(container){
        Main.animationProject.activeLayer.removeChildren();
        Animation.container = container;
        Animation.xZ = 0.4;
        Animation.yZ = 0.5;
        var w=$(container).width(), h=$(container).height();
        var x = 100;
        var y = 20;
        Animation.shapePosition = new Point(100,10);
        Animation.a = 30;

        var singleCubePosition = new Point(350.5,100.5);
        var singleCube = new Group();
        singleCube.addChild(new UnitCube(0,0,0).draw(
            singleCubePosition,
            30,
            {xZ:0.4,yZ:0.5},
            {
                strokeColor:"#000",
                fillColor:'#ddd'
            }
        ));
        singleCube.addChild(new PointText(singleCubePosition.add(45,10)))
        singleCube.addChild(new PointText(singleCubePosition.add(45,45)))
        singleCube.addChild(new PointText(singleCubePosition.add(15,60)))
        singleCube.children[1].content = "1 cm"
        singleCube.children[2].content = "1 cm"
        singleCube.children[3].content = "1 cm"
        singleCube.animate({
            style:{},
            duration:1,
            delay:2000,
            callback:singleCube.remove
        })
        Animation.animateShape({
            fillDelay:2500,
            xCube : 7,
            yCube : 2,
            zCube : 4,
            shapeName : "Dikdörtgenler prizmasının",
            callback:function(){
                Main.animationProject.activeLayer.removeChildren();
                $("div.hacim",Animation.container).remove();
                Animation.shapePosition = Animation.shapePosition.add(30,0)
                Animation.animateShape({
                    xCube : 6,
                    yCube : 3,
                    zCube : 3,
                    shapeName : "Kare prizmanın",
                    callback:function(){
                        Main.animationProject.activeLayer.removeChildren();
                        $("div.hacim",Animation.container).remove();
                        Animation.shapePosition = Animation.shapePosition.add(70,0)
                        Animation.animateShape({
                            xCube : 3,
                            yCube : 3,
                            zCube : 3,
                            shapeName : "Küpün",
                            callback:function(){
                                Main.animationProject.activeLayer.animate({
                                    style:{opacity:0},
                                    duration:500
                                });
                                $("div.hacim",Animation.container).animate({opacity:0},500,$("div.hacim",Animation.container).remove);
                                $(Animation.container).append('<div id="calculation">H = a . b . c</div>');
                                $('#calculation',Animation.container).css({
                                    position:'absolute',
                                    fontSize:'36px',
                                    top:'50%',
                                    left:'50%',
                                    opacity:0,
                                    marginLeft:'-92px',
                                    marginTop:'-18px'
                                }).delay(500).animate({opacity:1},500,Main.animationFinished)
                            }
                        });
                    }
                });
            }
        });
    },
    animateShape:function(opt){
        if(!opt.fillDelay)
            opt.fillDelay = 0;
        Animation.rectPrizm = new Path.RectanglePrisim(
            Animation.shapePosition,
            new Size(
                opt.xCube*Animation.a,
                opt.yCube*Animation.a
            ),
            new Size(
                opt.zCube*Animation.xZ*Animation.a,
                opt.zCube*Animation.yZ*Animation.a
            )
        ).set_style({
                strokeWidth:2,
                strokeColor:'#000'
            });

        Animation.zeroPoint = Animation.shapePosition.add(
            (opt.zCube-1)*Animation.xZ*Animation.a,
            (opt.yCube-1)*Animation.a
        );
        var cubes = [];
        for(var i=0;i<opt.xCube;i++)
            for(var j=0;j<opt.yCube;j++)
                for(var k=0;k<opt.zCube;k++)
                    cubes.push(new UnitCube(i,j,k));
        var div = document.createElement('div');
        div.className = "hacim"

        $(Animation.container).append(div);
        $(div)
            .css({
                position:'absolute',
                top:'50px',
                right:'150px',
                lineHeight:'30px',
                textAlign:'center',
                fontSize:'16px'
            })
            .html(opt.shapeName + ' <br/> hacmi <br/> H = <span id="count" style="font-weight:bold">0</span> cm<sup>3</sup>' +
            '<div id="calculate">'+opt.xCube+' . '+opt.yCube+'  . '+opt.zCube+' = '+ cubes.length+'</div>');
        $('#calculate',div).css({opacity:0});
        Animation.countSpan = $('span#count',div).get(0);
        UnitCube.drawCubes(cubes,Animation.zeroPoint,Animation.a,Animation,animationCubeStyle);
        cubes[0].shape.insertBelow(Animation.rectPrizm.children[4]);
        for(var i=0;i<cubes.length;i++){
            cubes[i].shape.opacity = 0;
            if(i>0)
                cubes[i].shape.insertAbove(cubes[i-1].shape);
            cubes[i].shape.__i = i+1;
            cubes[i].shape.animate({
                style:{opacity:1},
                duration:1,
                delay:i*100+opt.fillDelay,
                callback:function(){
                    $(Animation.countSpan).html(this.__i);
                }
            });
        }
        $('#calculate',div).delay(opt.fillDelay+cubes.length*100).animate({opacity:1},500);
        AnimationManager.delay(opt.callback,cubes.length*100+3000+opt.fillDelay)

        new PointText(Animation.shapePosition.add(
            opt.xCube*Animation.a+opt.zCube*Animation.xZ*Animation.a+10,
            opt.yCube*Animation.a*0.5 + 10
        )).animate({
                style:{},
                duration:cubes.length*100+opt.fillDelay,
                callback:function(){
                    this.content = opt.yCube + " cm"
                }
            });
        new PointText(Animation.shapePosition.add(
            opt.xCube*Animation.a+30,
            opt.yCube*Animation.a+ 40
        )).animate({
                style:{},
                duration:cubes.length*100+opt.fillDelay,
                callback:function(){
                    this.content = opt.zCube + " cm"
                }
            });
        new PointText(Animation.shapePosition.add(
            opt.xCube*Animation.a*0.5,
            opt.yCube*Animation.a +opt.zCube*Animation.yZ*Animation.a+15
        )).animate({
                style:{},
                duration:cubes.length*100+opt.fillDelay,
                callback:function(){
                    this.content = opt.xCube + " cm"
                }
            });
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
        Main.setObjective('Yandaki dikdörtgenler prizmasının hacmini bulunuz ve kontrol ediniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:"20px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"30px",
            right:"150px"
        })

        Interaction.appendInput({
            position:'static'
        });

        Interaction.appendQuestion(
            "H = ",
            {
                position:'absolute',
                right:'50px',
                top:'120px'
            }
        );
        $(Interaction.questionDiv)
            .append(Interaction.input)
            .append(" cm<sup>3</sup>")

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Main.interactionProject.activeLayer.removeChildren();
        Interaction.sizes = {
            xCube : Util.randomInteger(3,10),
            yCube : Util.randomInteger(3,7),
            zCube : Util.randomInteger(3,7)
        };
        Interaction.unitSize = 25;
        Interaction.referencePoint  = new Point(200,130);
        var size1 = new Size(
            Interaction.sizes.xCube*Interaction.unitSize,
            Interaction.sizes.yCube*Interaction.unitSize
        );
        var size2 = new Size(
            Interaction.sizes.zCube*0.4*Interaction.unitSize,
            Interaction.sizes.zCube*0.3*Interaction.unitSize
        );
        Interaction.referencePoint = Interaction.referencePoint.subtract(size1.width*0.5,size1.height*0.5)
        Interaction.referencePoint = Interaction.referencePoint.subtract(size2.width*0.5,size2.height*0.5)
        Interaction.rectPrisim = new Path.RectanglePrisim(Interaction.referencePoint.floor(),size1,size2)
        Interaction.rectPrisim.set_style({
            strokeWidth:2,
            strokeColor:'#000',
            fillColor:new RgbColor(0.65,0.83,0.89,0.7)
        });

        new PointText(Interaction.referencePoint.add(
            size1.width+size2.width+10,
            size1.height*0.5 + 10
        )).content = Interaction.sizes.yCube + " cm";
        new PointText(Interaction.referencePoint.add(
            size1.width+size2.width*0.5+10,
            size1.height+size2.height*0.5+10
        )).content = Interaction.sizes.zCube + " cm";
        new PointText(Interaction.referencePoint.add(
            size1.width*0.5+10,
            size1.height+size2.height + 20
        )).content = Interaction.sizes.xCube + " cm";



    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
        return (value == Interaction.sizes.xCube * Interaction.sizes.yCube  * Interaction.sizes.zCube );
    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
		Interaction.setStatus('Yanlış. Doğru cevap: H = ' + Interaction.sizes.xCube + ' . ' + Interaction.sizes.yCube + ' . ' +
            Interaction.sizes.zCube + ' = ' + (Interaction.sizes.xCube * Interaction.sizes.yCube  * Interaction.sizes.zCube) +
            ' cm<sup>3</sup>',false);
    }
}
;




