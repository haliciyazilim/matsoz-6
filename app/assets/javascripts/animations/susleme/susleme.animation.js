var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 0;
        var secondPieceStart = animStart+1000;
        var secondPieceFirstMove = secondPieceStart+2000;
        var secondPieceSecondMove = secondPieceFirstMove+2000;
        var lastMoves = secondPieceSecondMove+2500;
        var decorStart = lastMoves+1500;
        var colorStart = decorStart+14000;
        var animFinish = colorStart+14000;

        var animHelper = new AnimationHelper({

            // main rect points
            point1:new Point(358.5,64.5),
            point2:new Point(398.5,64.5),
            point3:new Point(398.5,104.5),
            point4:new Point(358.5,104.5),

            // cut-rect points
            point5:new Point(368.5,64.5),
            point6:new Point(388.5,64.5),
            point7:new Point(378.5,79.5),

            // snapped-rect points
            point8:new Point(368.5,104.5),
            point9:new Point(388.5,104.5),
            point10:new Point(378.5,119.5),

            // cut-triangle points
            point11:new Point(368.5,64.5),
            point12:new Point(388.5,64.5),
            point13:new Point(378.5,79.5),

            X:0

        });

        var firstPiece = new Path();
        firstPiece.moveTo(animHelper.point1);
        firstPiece.lineTo(animHelper.point5);
        firstPiece.lineTo(animHelper.point6);
        firstPiece.lineTo(animHelper.point2);
        firstPiece.lineTo(animHelper.point3);
        firstPiece.lineTo(animHelper.point9);
        firstPiece.lineTo(animHelper.point8);
        firstPiece.lineTo(animHelper.point4);
        firstPiece.lineTo(animHelper.point1);
        firstPiece.strokeColor = "black";

        var secondPiece = new Path();
        secondPiece.moveTo(animHelper.point11);
        secondPiece.lineTo(animHelper.point12);
        secondPiece.lineTo(animHelper.point13);
        secondPiece.lineTo(animHelper.point11);
        secondPiece.strokeColor = "black";
        secondPiece.fillColor = "white";
        secondPiece.insertAbove(firstPiece);
        secondPiece.opacity = 0;

        secondPiece.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:secondPieceStart,
            animationType:'easeInOutQuad',
            callback:function(){
                if(firstPiece){
                    firstPiece.remove();
                }

                firstPiece = new Path();
                firstPiece.moveTo(animHelper.point1);
                firstPiece.lineTo(animHelper.point5);
                firstPiece.lineTo(animHelper.point7);
                firstPiece.lineTo(animHelper.point6);
                firstPiece.lineTo(animHelper.point2);
                firstPiece.lineTo(animHelper.point3);
                firstPiece.lineTo(animHelper.point9);
                firstPiece.lineTo(animHelper.point8);
                firstPiece.lineTo(animHelper.point4);
                firstPiece.lineTo(animHelper.point1);
                firstPiece.strokeColor = "black";
                secondPiece.insertAbove(firstPiece);
            }
        });

        secondPiece.animate({
            style:{
                position:new Point(secondPiece.position.x,secondPiece.position.y-10)
            },
            duration:1000,
            delay:secondPieceFirstMove,
            animationType:'easeInOutQuad'
        });

        secondPiece.animate({
            style:{
                position:new Point(secondPiece.position.x,secondPiece.position.y+40)
            },
            duration:1000,
            delay:secondPieceSecondMove,
            animationType:'easeInOutQuad',
            callback:function(){
                AnimationManager.delay(function(){
                    if(firstPiece){
                        firstPiece.remove();
                    }

                    firstPiece = new Path();
                    firstPiece.moveTo(animHelper.point1);
                    firstPiece.lineTo(animHelper.point5);
                    firstPiece.lineTo(animHelper.point7);
                    firstPiece.lineTo(animHelper.point6);
                    firstPiece.lineTo(animHelper.point2);
                    firstPiece.lineTo(animHelper.point3);
                    firstPiece.lineTo(animHelper.point9);
                    firstPiece.lineTo(animHelper.point10);
                    firstPiece.lineTo(animHelper.point8);
                    firstPiece.lineTo(animHelper.point4);
                    firstPiece.lineTo(animHelper.point1);
                    firstPiece.strokeColor = "black";
                    firstPiece.fillColor = "white";

                    secondPiece.opacity = 0;
                },500)
            }
        });

        var firstPos;

        animHelper.animate({
            init:function(){
                secondPiece.remove();
                firstPiece.remove();

                firstPiece = new Path();
                firstPiece.moveTo(animHelper.point1);
                firstPiece.lineTo(animHelper.point5);
                firstPiece.lineTo(animHelper.point7);
                firstPiece.lineTo(animHelper.point6);
                firstPiece.lineTo(animHelper.point2);
                firstPiece.lineTo(animHelper.point3);
                firstPiece.lineTo(animHelper.point9);
                firstPiece.lineTo(animHelper.point10);
                firstPiece.lineTo(animHelper.point8);
                firstPiece.lineTo(animHelper.point4);
                firstPiece.lineTo(animHelper.point1);
                firstPiece.strokeColor = "black";
                firstPiece.fillColor = "white";
                firstPos = firstPiece.position;

            },
            style:{
                X:140
            },
            duration:1000,
            delay:lastMoves,
            animationType:'easeInOutQuad',
            update:function(){
                firstPiece.position = new Point(firstPos.x-this.X,firstPos.y);
            }
        });

        var myId = -1;
        var myGroup = new Group();
        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 6; j++){
                myId += 1;
                var myId2 = (i*3)+j;
                var a = new Path();
                a.moveTo(animHelper.point1);
                a.lineTo(animHelper.point5);
                a.lineTo(animHelper.point7);
                a.lineTo(animHelper.point6);
                a.lineTo(animHelper.point2);
                a.lineTo(animHelper.point3);
                a.lineTo(animHelper.point9);
                a.lineTo(animHelper.point10);
                a.lineTo(animHelper.point8);
                a.lineTo(animHelper.point4);
                a.lineTo(animHelper.point1);

                a.opacity = 0;
                a.position = new Point(320.5+40*j,50+40*i);
                a.strokeColor = new RgbColor(0,0,0);
                a.fillColor = new RgbColor(1,1,1);
                myGroup.addChild(a);

                a.animate({
                    style:{
                        opacity:1
                    },
                    duration:1000,
                    delay:decorStart+750*myId,
                    animationType:'easeInOutQuad'
                });
            }
        }

        for(var i = 0; i < 18; i += 2){
            if(i < 6 || i > 11){
                myGroup.children[i].animate({
                    style:{
                        fillColor:new RgbColor(0.949,0.784,0.521),
                        strokeColor:new RgbColor(0.451,0.462,0.239)
                    },
                    duration:1000,
                    delay:colorStart+750*i,
                    animationType:'easeInOutQuad'
                });
                myGroup.children[i+1].animate({
                    style:{
                        fillColor:new RgbColor(0.913,0.619,0.619),
                        strokeColor:new RgbColor(0.611,0.309,0.309)
                    },
                    duration:1000,
                    delay:colorStart+750*(i+1),
                    animationType:'easeInOutQuad'
                });
            }
            else{
                myGroup.children[i].animate({
                    style:{
                        fillColor:new RgbColor(0.913,0.619,0.619),
                        strokeColor:new RgbColor(0.611,0.309,0.309)
                    },
                    duration:1000,
                    delay:colorStart+750*i,
                    animationType:'easeInOutQuad'
                });
                myGroup.children[i+1].animate({
                    style:{
                        fillColor:new RgbColor(0.949,0.784,0.521),
                        strokeColor:new RgbColor(0.451,0.462,0.239)
                    },
                    duration:1000,
                    delay:colorStart+750*(i+1),
                    animationType:'easeInOutQuad'
                });
            }
        }

        Main.animationFinished(animFinish);

    }
};