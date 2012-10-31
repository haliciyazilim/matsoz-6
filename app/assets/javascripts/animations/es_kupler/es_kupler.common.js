
Shape3.Generate = function(type){
    var shape;
    switch(type){
        case 0:
            shape = new LShape3();
            break;
        case 1:
            shape = new UShape3();
            break;
        case 2:
            shape = new dShape3();
            break;
        case 3:
            shape = new ManivelaShape3();
            break;
        case 4:
            shape = new ForkShape3();
            break
        case 5:
            shape = new PlusShape3();
            break;
    }
    return shape;
}

var LShape3 = Shape3.extend({
    init:function(opt){
        this._super(opt);
        this.points.push( new Point3( 0, 0, 0 ) );
//        this.points.push( new Point3( 1, 0, 0 ) );
        this.points.push( new Point3( 0, 0, 1 ) );
        this.points.push( new Point3( 0, 1, 0 ) );
        this.points.push( new Point3( 0, 2, 0 ) );
        this.points.push( new Point3( 0, 3, 0 ) );

    }
});

var UShape3 = Shape3.extend({
    init:function(opt){
        this._super(opt);
        this.points.push( new Point3( 0, 0, 0 ) );
        this.points.push( new Point3(-1, 0, 0 ) );
        this.points.push( new Point3( 1, 0, 0 ) );
        this.points.push( new Point3(-1, 1, 0 ) );
        this.points.push( new Point3( 1, 1, 0 ) );
        if(Util.rand01() == 1)
            this.points.push( new Point3( 1, 2, 0 ) );
        if(Util.rand01() == 1)
            this.points.push( new Point3(-1, 2, 0 ) );

    }
});

var dShape3 = Shape3.extend({
    init:function(opt){
        this._super(opt);
        this.points.push( new Point3( 0, 0, 0 ) );
        this.points.push( new Point3( 1, 0, 0 ) );
        this.points.push( new Point3( 1, 0, 1 ) );
        this.points.push( new Point3( 0, 0, 1 ) );
        this.points.push( new Point3( 0, 1, 0 ) );
        if(Util.rand01() == 1){
            this.points.push( new Point3( 0, 1, 0 ) );
            this.points.push( new Point3( 1, 1, 0 ) );
            this.points.push( new Point3( 1, 1, 1 ) );
            this.points.push( new Point3( 0, 1, 1 ) );
            this.points.push( new Point3( 0, 2, 0 ) );
            this.points.push( new Point3( 0, 2, 0 ) );
        }
    }
});

var ManivelaShape3 = Shape3.extend({
    init:function(opt){
        this._super(opt);
        this.points.push( new Point3( 0, 0, 0 ) );
        this.points.push( new Point3(-1, 0, 0 ) );
        this.points.push( new Point3( 1, 0, 0 ) );

        this.points.push( new Point3( 1, 1, 0 ) );
        this.points.push( new Point3( 1, 1,-1 ) );

        this.points.push( new Point3(-1,-1, 0 ) );
        this.points.push( new Point3(-1,-1, 1 ) );

    }
})
var ForkShape3 = Shape3.extend({
    init:function(opt){
        this._super(opt);
        this.points.push( new Point3( 0, 0, 0 ) );
        this.points.push( new Point3(-1, 0, 0 ) );
        this.points.push( new Point3( 1, 0, 0 ) );

        this.points.push( new Point3( 1, 1, 0 ) );
        this.points.push( new Point3( 1, 1,-1 ) );

        this.points.push( new Point3(-1, 1, 0 ) );
        this.points.push( new Point3(-1, 1,-1 ) );

        this.points.push( new Point3( 0, 0, 1 ) );

    }
})

var PlusShape3 = Shape3.extend({
    init:function(opt){
        this._super(opt);
        this.points.push( new Point3( 0, 0, 0 ) );
        this.points.push( new Point3( 1, 0, 0 ) );
        this.points.push( new Point3( 0, 1, 0 ) );
        this.points.push( new Point3( 0, 0, 1 ) );
        this.points.push( new Point3(-1, 0, 0 ) );
        this.points.push( new Point3( 0,-1, 0 ) );
        this.points.push( new Point3( 0, 0,-1 ) );

    }
})

var AnimationShape = Shape3.extend({
    init:function(opt){
        this._super(opt);
        this.points.push( new Point3( 0, 0, 0 ) );
        this.points.push( new Point3(-1, 0, 0 ) );
        this.points.push( new Point3( 1, 0, 0 ) );
        this.points.push( new Point3(-1, 1, 0 ) );
        this.points.push( new Point3( 1, 1, 0 ) );
        this.points.push( new Point3( 1, 2, 0 ) );
        this.style = animationShapeStyle;
    }
})


ShapePattern.prototype.drawAPiece = function(upperLeftPosition,gridSize){
    return PieceFactory({
        type:this.pieceType,
        upperLeftPosition:upperLeftPosition,
        gridSize:gridSize,
        style:this.pieceStyle,
        disableLayers:true
    });
};