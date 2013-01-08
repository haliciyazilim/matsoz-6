var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 0;
        var tangramStart = animStart+1000;
        var tangramAnimation = tangramStart+2000;
        var tangramColorAnimation = tangramAnimation+2000;
        var tangramOpening = tangramColorAnimation+2500;
        var tangramClosing = tangramOpening+3000;

        var myRectangle = new Path.Rectangle(new Point(340.5,45.5),new Size(80,80));
        myRectangle.fillColor = animationDefaultColor;
        myRectangle.strokeColor = animationDefaultColor;
        myRectangle.opacity = 0;

        Animation.animationPoints = [];
        Animation.animationPoints[0] = new Point(125,-29);
        Animation.animationPoints[1] = new Point(-177,-18);
        Animation.animationPoints[2] = new Point(126,37);
        Animation.animationPoints[3] = new Point(180,-8);
        Animation.animationPoints[4] = new Point(-107,-43);
        Animation.animationPoints[5] = new Point(-116,44);
        Animation.animationPoints[6] = new Point(18,42);

        Animation.tangram = new Tangram();
        Animation.tangram.drawPieces(new Point(340.5,45.5),80,animationDefaultColor,animationDefaultColor);
        for(var i = 0; i < Animation.tangram.pieces.length; i++){
            Animation.tangram.pieces[i].shape.opacity = 0;
        }

        myRectangle.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:tangramStart,
            animationType:'easeInOutQuad',
            callback:function(){
                for(var j = 0; j < Animation.tangram.pieces.length; j++){
                    Animation.tangram.pieces[j].shape.opacity = 1;
                }
            }
        });
        myRectangle.animate({
            style:{
                opacity:0
            },
            duration:0,
            delay:tangramAnimation,
            animationType:'easeInOutQuad'
        });
        Animation.tangram.animatePieces(tangramAnimation);

        for(var k = 0; k < Animation.tangram.pieces.length; k++){
            Animation.tangram.pieces[k].shape.animate({
                style:{
                    fillColor:animationColors[k],
                    strokeColor:animationColors[k]
                },
                duration:1000,
                delay:tangramColorAnimation,
                animationType:'easeInOutQuad'
            })
        }

        for(var i = 0; i < Animation.tangram.pieces.length; i++){
            Animation.tangram.pieces[i].shape.animate({
                style:{
                    position:new Point(Animation.tangram.pieces[i].shape.position.add(Animation.animationPoints[i]))
                },
                duration:2000,
                delay:tangramOpening,
                animationType:'easeOut'
            })
        }

        for(var i = 0; i < Animation.tangram.pieces.length; i++){
            Animation.tangram.pieces[i].shape.animate({
                style:{
                    position:new Point(Animation.tangram.pieces[i].originalPosition)
                },
                duration:2000,
                delay:tangramClosing,
                animationType:'easeOut',
                callback:function(){
                    Main.animationFinished(1000);
                }
            })
        }
    }
};
