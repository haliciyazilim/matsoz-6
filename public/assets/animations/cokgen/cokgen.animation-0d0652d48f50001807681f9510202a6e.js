var Animation = {

    init:function(container){

        function animationWithDefaultTransform(shape,duration,delay,callback){
            if(shape.vertexArray == null || shape.vertexArray == undefined)
                return;
            for(var i=0,length = shape.vertexArray.length; i<length; i++){
                var line = new Path.Line(
                    shape.vertexArray[i],
                    shape.vertexArray[(i+1)%length]
                );
                line.set_style(animationEdgeStyle);
                var angle = Math.floor(Math.random()*180)-90;
                var x = Math.floor(Math.random()*400)-200;
                var y = Math.floor(Math.random()*50)-25;
                line.angle = angle;
                line.opacity = 0;
                line.firstPosition = line.position;
                line.translate(x,y);
                line.lastTransformation = line.matrix;
                line.animate({
                    style:{
                        opacity:1,
                        angle:0,
                        position:new Point(line.position.x-x,line.position.y-y)
                    },
                    duration:duration,
                    delay:delay,
                    animationType:'easeInEaseOut',
                    update:function(){
                        var matrix = new Matrix();
                        matrix.rotate(this.angle, this.firstPosition);
                        matrix.translate(this.lastTransformation);
                        this.setMatrix(matrix);
                        this.lastTransformation = this.matrix;
                    }
                })
            }
            setTimeout(callback,duration+delay);
        }
        Animation.container = container;
        var w=$(container).width(), h=$(container).height();
        var size = new Size(140,140);
        var p1 = new Point(
            0,
            25
        );
        var p2 = new Point(
            w*0.25 ,
            0
        );
        var p3 = new Point(
            w*0.5,
            0
        );
        var p4 = new Point(
            w*0.75,
            0
        );
        animationWithDefaultTransform(
            new Path.EquiradialPolygon(
                p1,
                size,
                [90,170,330],
                0
            ),
            1500,
            500,
            function(){
                $(Animation.container).append('<span style="position:absolute;bottom:20px;left:50px">Üçgen</span>');
            }
        );
        animationWithDefaultTransform(
            new Path.EquiradialPolygon(
                p2,
                size,
                [10,120,170,250],
                0
            ),
            2500,
            100,
            function(){
                $(Animation.container).append('<span style="position:absolute;bottom:20px;left:30%">Dörtgen</span>');
            }
        );
        animationWithDefaultTransform(
            new Path.EquiradialPolygon(
                p3,
                size,
                [10,60,150,180,260],
                0
            ),
            3000,
            300,
            function(){
                $(Animation.container).append('<span style="position:absolute;bottom:20px;left:53.5%">Beşgen</span>');
            }
        );
        animationWithDefaultTransform(
            new Path.EquiradialPolygon(
                p4,
                size,
                [20,70,99,136,240,342],
                0
            ),
            3000,
            900,
            function(){
                $(Animation.container).append('<span style="position:absolute;bottom:20px;left:80%">Altıgen</span>');
                Main.animationFinished();
            }
        );
    }
};
