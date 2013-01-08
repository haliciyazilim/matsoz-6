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
