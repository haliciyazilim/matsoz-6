var start = function(){
        this.ox = this.position.x;
        this.oy = this.position.y;
        this.hitShape = null;
        this.odx = 0;
        this.ody = 0;
        var svg_offset = $(Interaction.container).offset();
        this.s_left = svg_offset.left;
        this.s_top = svg_offset.top;
        this.inDropableShape = false;
        if(this.preventDrag == null || this.preventDrag == 'undefined')
            this.preventDrag = false;
        return true;
    },
    move = function(dx,dy,x,y){
        if(this.preventDrag == true )
            return;
        this.odx += dx;
        this.ody += dy;
        Interaction.dropableShapes.setImage('dropable_default');
        this.position = [this.position.x + dx,this.position.y + dy];
        //var hitResult = project.activeLayer.hitTest([x,y],{ fill: true, stroke: true, segments: true, tolerance: 2, class: "dropableShape" });
        var hitResult = Interaction.dropableShapes.hitTest(new Point(x,y));
        if(hitResult){
            this.inDropableShape = true;
            this.hitShape = hitResult;
            this.hitShape.setImage($('#dropable_hover').get(0));
        }else{
            this.inDropableShape = false;
            this.hitShape = null;
        }

        return true;
    },
    up = function(){
        if(this.preventDrag == true)
            return;
        this.preventDrag=true;
        Interaction.dropableShapes.setImage('dropable_default');

        var revert = false;
        if(this.inDropableShape == true){
            if(this.hitShape.numberOfEdges === this.numberOfEdges){
                this.opacityX = 1;
                this.scaleRatio = 0.9;
                this.animate({
                    style:{
                        opacityX:-0.3,
                        scaleRatio:1
                    },
                    duration:500,
                    update:function(){
                        if(this.opacityX < 0.7)
                            this.opacity = this.opacityX+0.3;
                        this.scale(this.scaleRatio);
                    },
                    callback:this.remove
                });
                this.class = null;

                this.hitShape.setImage($('#dropable_true').get(0));
                setTimeout(function(){
                    Interaction.dropableShapes.setImage('dropable_default');
                },400);
            }
            else{
                revert = true;
                this.hitShape.setImage($('#dropable_false').get(0));
                setTimeout(function(){
                    Interaction.dropableShapes.setImage('dropable_default');
                },400);
            }
        }
        else
            revert = true;
        if(revert == true){
            var distance = Math.sqrt(this.odx*this.odx + this.ody*this.ody);
            var velocity = 1;// px/ms
            var time  = distance / velocity;
            this.animate({
                style:{
                    position:new Point(this.ox,this.oy)
                },
                duration: time,
                callback:this.callback
            });
        }
        var isExist=false;
        for(var i=0; i < Interaction.shapes.length ;i++)
            if(Interaction.shapes[i].class == "draggable")
                isExist=true;
        if(isExist == false)
            Interaction.setStatus('<span style="position:relative;top:10px" class="status_true">Tebrikler bütün çokgenleri doğru şekilde sınıflandırdınız.</span>&emsp;<input type="button" onclick="Interaction.init(Interaction.container);"  class="repeat_button"/>');
    };
generateRandomShapes = function(X,Y,WIDTH,HEIGHT){
    Interaction.shapes = [];
    var maxW = WIDTH*0.25;
    var maxH = HEIGHT*0.25;
    Interaction.shapeCount = -1;
    do{///generate shapes randomly
        var x,y,w,h;
        var p = findSpace(WIDTH,HEIGHT);
        x = p.x+X, y = p.y+Y;
        Interaction.shapeType = Math.floor(Math.random()*6);

        w = maxW*0.7;
        h = maxH*0.7;
        var shape = {};
        var edgeNumber;

        var NUMBER_OF_SHAPES  = 12;
        Interaction.shapeCount++;
        Interaction.shapeCount = Interaction.shapeCount%NUMBER_OF_SHAPES;
        if(Interaction.shuffledArray == null || Interaction.shuffledArray == undefined)
            Interaction.shuffledArray = Util.getShuffledArray(NUMBER_OF_SHAPES);
        Interaction.shapeType = Interaction.shuffledArray[Interaction.shapeCount];

        switch(Interaction.shapeType){
            case 0:
                h = w = Math.min(w,h);
                shape = new Path.Rectangle(new Point(x,y),new Size(w,h));
                edgeNumber = 4;
                break;
            case 1:
                var a,b,c;
                a = b = c = 5;
                shape = new Triangle(a,b,c,x,y,w,h);
                edgeNumber = 3;
                break;
            case 2:
                shape = regularpentagon(new Point(x,y), new Size(w,h));
                edgeNumber = 5;
                break;
            case 3:
                shape = hexagon(new Point(x,y), new Size(w,h));
                edgeNumber = 6;
                break;
            case 4:
                shape = new Path.Rhomboid(new Point(x,y+h*0.1), new Size(w*0.8,h*0.7), w*0.2);
                edgeNumber = 4;
                break;
            case 5:
                shape = new Path.Rhombus(new Point(x,y+h*0.1),new Size(w,h*0.7) );
                edgeNumber = 4;
                break;
            case 6:
                h = w = Math.min(w,h);
                while(h == w || h > maxH)
                    h =- Math.floor(Math.random()*3)*30+w+30;
                shape = new Path.Rectangle(new Point(x,y+10),new Size(w,h));
                edgeNumber = 4;
                break;
            case 7:
                var a,b,c;
                c = 5, a = 3, b = 4;
                shape = new Triangle(a,b,c,x,y,w,h);
                edgeNumber = 3;
                break;
            case 8:
                shape = pentagon(new Point(x,y), new Size(w,h));
                edgeNumber = 5;
                break;
            case 9:
                shape = regularhexagon(new Point(x,y), new Size(w,h));
                edgeNumber = 6;
                break;
            case 10:
                var a,b,c;
                a = b = c = 5;
                a = 6, b = 8;
                shape = new Triangle(a,b,c,x+5,y-15,w,h);
                edgeNumber = 3;
                break;
            case 11:
                var a,b,c;
                a = b = c = 5;
                a = 4, b = 3;
                shape = new Triangle(a,b,c,x,y-15,w,h);
                edgeNumber = 3;
                break

        }
        shape.numberOfEdges = edgeNumber;
        shape.class = "draggable";
        shape.style = shapeStyle;
        shape.start = start;
        shape.move = move;
        shape.up = up;

        shape.callback = function(){
            this.preventDrag = false;
        };

        shape.order = Interaction.shapes.length;
        Interaction.shapes.push(shape);
    }while( Interaction.shapes.length < 12 )

};
createDropableShape = function(x,y,w,h,text){
//	var shape = new Path.Oval(
//		new Rectangle(
//			new Point(x,y),
//			new Size(w,h)
//		)
//	);
    var shape = new Raster('dropable_default');
    shape.position = new Point(x,y)
    shape.class = "dropableShape";
    var t1 = new PointText(new Point(x+1,y+6));
    t1.set_style(textStyle);
    t1.fillColor = '#2f4f54'
    t1.content = text;
    var t1 = new PointText(new Point(x,y+5));
    t1.set_style(textStyle);
    t1.content = text;
    return shape;
}
createDropableShapesLeft = function(X,Y,WIDTH,HEIGHT){
    var x,y,rx,ry,length;
    w = WIDTH * 0.90;
    h = WIDTH * 0.80;
    x = X + (WIDTH)*0.5;
    y = Y + (HEIGHT-h) * 0.5;
    Interaction.dropableShapes.triangle = createDropableShape(x,y,w,h,"Üçgen");
    Interaction.dropableShapes.triangle.numberOfEdges = 3;
    Interaction.dropableShapes.rectangle = createDropableShape(x,y+h*1.2,w,h,"Dörtgen");
    Interaction.dropableShapes.rectangle.numberOfEdges = 4;
};

createDropableShapesRight = function(X,Y,WIDTH,HEIGHT){
    var x,y,rx,ry,length;
    length = Math.min(WIDTH,HEIGHT);
    w = length * 0.90;
    h = length * 0.80;
    x = X + (WIDTH)*0.5;
    y = Y + (HEIGHT-h) * 0.5;
    Interaction.dropableShapes.pentagon = createDropableShape(x,y,w,h,"Beşgen");
    Interaction.dropableShapes.pentagon.numberOfEdges = 5;
    Interaction.dropableShapes.hexagon = createDropableShape(x,y+h*1.2,w,h,"Altıgen");
    Interaction.dropableShapes.hexagon.numberOfEdges = 6;
};

//find left-upper-most empty space to place a shape
findSpace = function(w,h){
    var n = Interaction.shapes.length;
    var p = {
        x:Math.floor(n%4)*w*0.25,
        y:Math.floor(n/4)*h*0.3
    };
    return p;
}
function Triangle(i,j,k,x,y,maxW,maxH){
    this.i=i,this.j=j,this.k=k;
    this.p1={x:0,y:0},this.p2={x:0,y:0},this.p3={x:0,y:0};
    this.a1=null,this.a2=null,this.a3=null;
    var a = Math.min(maxW,maxH);
    var _c = a/Math.max(i,j,k);
    this.p1.x = x;
    this.p1.y = y+a;
    this.p2.x = this.p1.x + this.i*_c;
    this.p2.y = this.p1.y;
    var a = Math.acos((this.i*this.i + this.k*this.k - this.j*this.j)/(2*this.i*this.k));
    this.p3.x = this.p1.x + Math.cos(a)*k*_c;
    this.p3.y = this.p1.y - Math.sin(a)*k*_c;
    return new Path.Triangle(this.p1,this.p2,this.p3);
};
function pentagon(p,s){
    var o=[10,70,150,200,300];
    return new Path.EquiradialPolygon(p,s,o);
}
function regularpentagon(p,s){
    return new Path.RegularPolygon(p,s,5);
}
function hexagon(p,s){
    var o=[10,50,100,150,200,300];
    return new Path.EquiradialPolygon(p,s,o);
}
function regularhexagon(p,s){
    return new Path.RegularPolygon(p,s,6);
}
setStatus = function(msg){
    $(Interaction.status).hide();
    Interaction.status.innerHTML = msg;
    $(Interaction.status).show();
}
;
