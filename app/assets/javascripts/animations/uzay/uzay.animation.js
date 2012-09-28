var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;


        var matrix = Util.createProjectionMatrix(757, 170, 200, 0, 0, 757, 170);
        var point1 = new Point3(0,0,-200);

        var p1 = Util.project(point1, matrix);

        var point2 = new Point3(10,10,-200);
        var p2 = Util.project(point2, matrix);

        var point;
        var line;
        var surface;
        var cube;

        point = new Path.Line(p1, p1.add(2,0));
        point.strokeColor = strokeColor;
        point.strokeWidth = 2;

        var animationHelper = new AnimationHelper({
            lineAngle: -0.05,
            surfaceAngle: 0,
            cubeAngleX: 0,
            cubeAngleY: 0
        })


        var point2 = new Point3(0,0,-300);

        animationHelper.animate({
            style: {
                lineAngle: -Math.PI/2
            },
            duration: 2000,
            delay: 2000,
            animationType: 'easeInEaseOut',
            init: function() {
                point.remove();
            },
            update: function() {
                if (line) {
                    line.remove();
                }
                var center = new Point3(-25, 0, -225);
                var p1 = Util.project(point1.getRotatedPointByY(this.lineAngle, center), matrix);
                var p2 = Util.project(point2.getRotatedPointByY(this.lineAngle, center), matrix);

                line = new Path.Line(p1, p2);
                line.strokeColor = lineStyle.strokeColor;
            }
        })

        animationHelper.animate({
            style: {
                surfaceAngle: Math.PI/2
            },
            duration: 2000,
            delay: 5000,
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

                var center = new Point3(0, 0, -250);

                var point1 = new Point3(-50, 0, -200);
                var point2 = new Point3( 50, 0, -200);
                var point3 = new Point3( 50, 0, -300);
                var point4 = new Point3(-50, 0, -300);

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
                cubeAngleX: Math.PI/8,
                cubeAngleY: -Math.PI/4
            },
            duration: 2000,
            delay: 8000,
            animationType: 'easeInEaseOut',
            init: function() {
                surface.remove();
            },
            update: function() {
                if (cube) {
                    cube.remove();
                }

                var center = new Point3(0, 0, -300);

                var point1 = new Point3(-50, -50, -250);
                var point2 = new Point3( 50, -50, -250);
                var point3 = new Point3( 50,  50, -250);
                var point4 = new Point3(-50,  50, -250);

                var point5 = new Point3( 50, -50, -350);
                var point6 = new Point3( 50,  50, -350);
                var point7 = new Point3(-50,  50, -350);

                var p1 = Util.project(point1.getRotatedPointByY(this.cubeAngleY, center).getRotatedPointByX(this.cubeAngleX, center), matrix);
                var p2 = Util.project(point2.getRotatedPointByY(this.cubeAngleY, center).getRotatedPointByX(this.cubeAngleX, center), matrix);
                var p3 = Util.project(point3.getRotatedPointByY(this.cubeAngleY, center).getRotatedPointByX(this.cubeAngleX, center), matrix);
                var p4 = Util.project(point4.getRotatedPointByY(this.cubeAngleY, center).getRotatedPointByX(this.cubeAngleX, center), matrix);

                var p5 = Util.project(point5.getRotatedPointByY(this.cubeAngleY, center).getRotatedPointByX(this.cubeAngleX, center), matrix);
                var p6 = Util.project(point6.getRotatedPointByY(this.cubeAngleY, center).getRotatedPointByX(this.cubeAngleX, center), matrix);
                var p7 = Util.project(point7.getRotatedPointByY(this.cubeAngleY, center).getRotatedPointByX(this.cubeAngleX, center), matrix);

                cube = new Group();

                var s3 = new Path();
                s3.moveTo(p3);
                s3.lineTo(p6);
                s3.lineTo(p7);
                s3.lineTo(p4);
                s3.closed = true;
                s3.set_style(fillStyle);
                cube.addChild(s3);

                var s2 = new Path();
                s2.moveTo(p2);
                s2.lineTo(p5);
                s2.lineTo(p6);
                s2.lineTo(p3);
                s2.closed = true;
                s2.set_style(fillStyle);
                cube.addChild(s2);

                var s1 = new Path();
                s1.moveTo(p1);
                s1.lineTo(p2);
                s1.lineTo(p3);
                s1.lineTo(p4);
                s1.closed = true;
                s1.set_style(fillStyle);
                cube.addChild(s1);
            }
        })


        Main.animationFinished(1000);
    }

}