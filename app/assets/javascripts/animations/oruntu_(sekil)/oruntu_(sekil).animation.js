var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        Animation.grids = new InteractiveGrids({
            position:new Point(50.5,10.5),
            size:22,
            cols:30,
            rows:7,
            style:{
                strokeColor:'#CCC'
            }
        });
        Animation.pieceType = 0;
        Animation.pieceStyle = {
            strokeColor: "#000",
            fillColor:'#f6f'
        };
        var patterns = [
            new TShapePattern({
                position: new Point(3,2),
                number:2
            }),
            new NumberPattern({
                position: new Point(3,0),
                number:2
            }),
            new TShapePattern({
                position: new Point(10,2),
                number:3
            }),
            new NumberPattern({
                position: new Point(10,0),
                number:3
            }),
            new TShapePattern({
                position: new Point(19,2),
                number:4
            }),
            new NumberPattern({
                position: new Point(19,0),
                number:4
            }),

        ];
        for(var i=0; i< patterns.length; i++){

            var pattern = patterns[i];
            pattern.position = pattern.position.add(2,0)
            pattern.pieceStyle = Animation.pieceStyle;
            pattern.pieceType = Animation.pieceType;
            var pieces = Animation.grids.drawPattern(pattern);
            for(var j=0;j<pieces.length;j++){
                pieces[j].set_style({
                    opacity:0
                });
                pieces[j].animate({
                    style:{opacity:1},
                    duration:1000,
                    delay:1500*i+1000-(100*j)
                });
            }
        }

        Main.animationFinished(patterns.length * 2000)



    }

}