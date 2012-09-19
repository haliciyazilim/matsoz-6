var Animation = {
    images:[],
	init:function(container){

        surfaceStyle = {
            strokeColor: "#4F9C4F",
            strokeWidth: 2
        };

        Animation.container = container;


        var width = 100;
        var length = 50;
        var height = 30;

        var point11 = new Point3(-70, -height, -50);
        var point21 = new Point3(60, -height, 15);

        var point12 = new Point3(-30, height*2, -20);
        var point22 = new Point3(60, -height*2, 45);

        var point13 = new Point3(-10, 20+height*2, 20);
        var point23 = new Point3(-10, 20-height*2, 20);

        var point14 = new Point3(-60, height, 30);
        var point24 = new Point3(40, height, -30);




        var surface = new Surface([
            new Point3(-width, height, -length),
            new Point3( width, height, -length),
            new Point3( width, height,  length),
            new Point3(-width, height,  length)
        ]);

        dondur(point11,point21);

        function dondur(point1,point2){

            if(Animation.line)
                Animation.line.remove();

            var matrix = Util.createProjectionMatrixForObjectAt(375, 70);


            var p1 = Util.project(point1, matrix);
            var p2 = Util.project(point2, matrix);

            var path = surface.project(matrix);
            path.set_style(surfaceStyle);

            Animation.line = new Path.Line(p1, p2);
            Animation.line.set_style(surfaceStyle);

            var animationHelper = new AnimationHelper({
                rotation: 0
            });

            var totalDelay = 0;

            animationHelper.animate({
                style: {
                    rotation: Math.PI*2
                },
                duration: 3000,
                delay: totalDelay += 2000,
                animationType: 'easeInEaseOut',
                init: function() {
                surface.pivotsX[0] = new Point3(0, 0, 0);
                },
                update: function() {
                    if (Animation.line) {
                        Animation.line.remove();
                    }

                    var p1 = Util.project(point1.getRotatedPointByX(this.rotation), matrix);
                    var p2 = Util.project(point2.getRotatedPointByX(this.rotation), matrix);

                    Animation.line = new Path.Line(p1, p2);
                    Animation.line.set_style(surfaceStyle);

                    surface.rotationsX[0] = this.rotation;

                    var path = surface.project(matrix);
                    path.set_style(surfaceStyle);
                },

            });
        }


    }
}