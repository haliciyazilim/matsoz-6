var Animation = {
    images:[],
	init:function(container){


        Animation.container = container;


        var width = 100;
        var length = 50;
        var height = 30;



        var point11 = new Point3(-70, -height, -50);
        var point21 = new Point3(60, -height, 15);


        var point12 = new Point3(-30, height*4, -20);
        var point22 = new Point3(60, -height*2, 45);

        var point13 = new Point3(-10, 20+height*2, 0);
        var point23 = new Point3(-10, 20-height*2, 20);

        var point14 = new Point3(-60, height, 30);
        var point24 = new Point3(40, height, -30);


        var textContent=["Bir doğru ile bir düzlem paralel olabilir.",
            "Bir doğru ile bir düzlem bir noktada kesişebilir.",
            "Bir doğru ile bir düzlem bir noktada dik kesişebilir.",
            "Bir doğru ile bir düzlemden biri diğerinin üzerinde olabilir."];

        var surface = new Surface([
            new Point3(-width, height, -length),
            new Point3( width, height, -length),
            new Point3( width, height,  length),
            new Point3(-width, height,  length)
        ]);
        var totalDelay = 0;
        var matrix = Util.createProjectionMatrixForObjectAt(375, 70);

        var sira=1;
        dondur(point11,point21);

        function contentDegistir(){
            return textContent[sira-1];
        }
        function dondur(point1,point2){


            if(Animation.line)
                Animation.line.remove();

            if(Animation.text)
                Animation.text.remove();

            Animation.text=new PointText(new Point(250,160));
            Animation.text.set_style(textStyle);
            Animation.text.content=textContent[sira-1];




            var p1 = Util.project(point1, matrix);
            var p2 = Util.project(point2, matrix);

            Animation.path = surface.project(matrix);
            Animation.path.set_style(surfaceStyle);

            Animation.line = new Path.Line(p1, p2);
            Animation.line.set_style(surfaceStyleLine);




            Animation.line.animate({
                style:{opacity:1},
                duration:1000,
                delay:1000
            });


            Animation.text.position.x=(757-Animation.text.width)/2;

            Animation.text.animate({

                style:{opacity:1},
                duration:1000,
                delay:1500

            });

            Animation.animationHelper = new AnimationHelper({
                rotation: 0
            });



            Animation.animationHelper.animate({
                style: {
                    rotation: Math.PI*2
                },
                duration: 3000,
                delay: totalDelay += 1000,
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

                    Animation.path = surface.project(matrix);
                    Animation.path.set_style(surfaceStyle);
                },
                callback:function(){

                    sira++;

                    Animation.text.animate({
                        style:{opacity:0},
                        duration:1000,


                    });

                    Animation.line.animate({
                        style:{opacity:0},
                        duration:1000,

                        callback:function(){

                            switch (sira){
                                case 2:
                                    dondur(point12,point22);
                                    break;

                                case 3:
                                    dondur(point13,point23);
                                    break;
                                case 4:
                                    dondur(point14,point24);
                                    break;
                            }
                        }


                    });




                }
            });
        }


    }
}

Main.animationFinished(28000);