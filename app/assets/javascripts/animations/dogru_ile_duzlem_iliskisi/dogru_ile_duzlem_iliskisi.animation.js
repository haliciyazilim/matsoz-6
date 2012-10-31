var Animation = {
    images:[],
	init:function(container){


        Animation.container = container;

        var textContent=["Bir doğru ile bir düzlem paralel olabilir.",
            "Bir doğru ile bir düzlem bir noktada kesişebilir.",
            "Bir doğru ile bir düzlem bir noktada dik kesişebilir.",
            "Bir doğru ile bir düzlemden biri diğerinin üzerinde olabilir."];

        var width = 100;
        var length = 50;
        var height = 30;

//        var point11 = new Point3(-70, -height, -50);
//        var point21 = new Point3(60, -height, 15);

        var point11 = new Point3(-70, -height, -50);
        var point21 = new Point3(60, -height, 15);

        //var point12 = new Point3(-30, height*4, -20);

        var point12 = new Point3(15, height, 12.5);
        var point22 = new Point3(60, -height*2, 45);
        var point32 = new Point3(-6, height*2.5, -6);

        var nokta12=new Point3(12, height, 12.5);
        var nokta22=new Point3(18, height, 12.5);
        var circleEgri=new Point3(15, height, 12.5);



        var point13 = new Point3(-10, height, 10);
        var point23 = new Point3(-10, 20-height*2, 10);
        var point33 = new Point3(-10, 20+height*2, 10);
        var circle=new Point3(-10, height, 10);
        var ki1 = new Point3(  0, 20, 10);
        var ki2 = new Point3(-10, 20, 10);
        var ki3 = new Point3(0, 20, 10);
        var ki4 = new Point3(0, 30, 10);
        var kin=new Point3(-5,25,10)

        var surface = new Surface([
            new Point3(-width, height, -length),
            new Point3( width, height, -length),
            new Point3( width, height,  length),
            new Point3(-width, height,  length)
        ]);

        var point14 = new Point3(-60, height, 30);
        var point24 = new Point3(40, height, -30);



        var totalDelay = 0;

        var matrix = Util.createProjectionMatrixForObjectAt(375, 70);

        var sira=1;
        //dondur(point13,point23,2);
        //dondur(point12,point22,1);

        dondur(point11,point21);

        function contentDegistir(){
            return textContent[sira-1];
        }
        function dondur(point1,point2,k){
            if(!k){
                k=0;
            }

            if(Animation.line)
                Animation.line.remove();

            if(Animation.text)
                Animation.text.remove();

            Animation.text=new PointText(new Point(250,160));
            Animation.text.set_style(textStyle);
            Animation.text.content=textContent[sira-1];




            var p1 = Util.project(point1, matrix);
            var p2 = Util.project(point2, matrix);



            if(k==1){
                var p3 = Util.project(point32, matrix);
                Animation.line2 = new Path.Line(p1, p3);
                Animation.line2.set_style(surfaceStyleLine);
            }

            if(k==2){
            var p3 = Util.project(point33, matrix);
            Animation.line2 = new Path.Line(p1, p3);
            Animation.line2.set_style(surfaceStyleLine);
            }


            Animation.path = surface.project(matrix);
            Animation.path.set_style(surfaceStyle);

            Animation.line = new Path.Line(p1, p2);
            Animation.line.set_style(surfaceStyleLine);



            if(k==1){
                var pN1 = Util.project(circleEgri, matrix);
                Animation.nokta=new Path.Circle(pN1,2);
                Animation.nokta.set_style(circleStyle);
            }
            //dik kesme
            if(k==2){
                var pN1 = Util.project(circle, matrix);
                Animation.nokta=new Path.Circle(pN1,2);
                Animation.nokta.set_style(circleStyle);

                var pki1=Util.project(ki1, matrix)
                var pki2=Util.project(ki2, matrix)
                Animation.ki1=new Path.Line(pki1,pki2);
                Animation.ki1.set_style(dikmeStyle);

                var pki3=Util.project(ki3, matrix)
                var pki4=Util.project(ki4, matrix)
                Animation.ki2=new Path.Line(pki3,pki4);
                Animation.ki2.set_style(dikmeStyle);

                var pkin=Util.project(kin,matrix);
                Animation.kin=new Path.Circle(pkin,1);
                Animation.kin.set_style(circleStyle);



            }








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
                    if(this.rotation<Math.PI*0.9){
                        if (Animation.line) {
                            Animation.line.remove();
                        }
                        if(Animation.nokta){
                            Animation.nokta.remove();
                            Animation.line2.remove();

                        }
                        if(Animation.ki1){
                            Animation.ki1.remove();
                            Animation.ki2.remove();
                            Animation.kin.remove();
                            Animation.line2.remove();
                        }

                        var p1 = Util.project(point1.getRotatedPointByX(this.rotation), matrix);
                        var p2 = Util.project(point2.getRotatedPointByX(this.rotation), matrix);



                        if(k==1){
                            var p3 = Util.project(point32.getRotatedPointByX(this.rotation), matrix);
                            Animation.line2 = new Path.Line(p1, p3);
                            Animation.line2.set_style(surfaceStyleLine);
                        }

                        if(k==2){
                            var p3 = Util.project(point33.getRotatedPointByX(this.rotation), matrix);
                            Animation.line2 = new Path.Line(p1, p3);
                            Animation.line2.set_style(surfaceStyleLine);
                        }



                        surface.rotationsX[0] = this.rotation;

                        Animation.path = surface.project(matrix);
                        Animation.path.set_style(surfaceStyle);

                        Animation.line = new Path.Line(p1, p2);
                        Animation.line.set_style(surfaceStyleLine);



                        if(k==1){
                            var pN1 = Util.project(circleEgri.getRotatedPointByX(this.rotation), matrix);
                            Animation.nokta=new Path.Circle(pN1,2);
                            Animation.nokta.set_style(circleStyle);
                        }

                        if(k==2){
                            var pN1 = Util.project(circle.getRotatedPointByX(this.rotation), matrix);
                            Animation.nokta=new Path.Circle(pN1,2);
                            Animation.nokta.set_style(circleStyle);

                            var pN11 = Util.project(ki1.getRotatedPointByX(this.rotation), matrix);
                            var pN21 = Util.project(ki2.getRotatedPointByX(this.rotation), matrix);
                            Animation.ki1=new Path.Line(pN11,pN21);
                            Animation.ki1.set_style(dikmeStyle);

                            var pN12 = Util.project(ki3.getRotatedPointByX(this.rotation), matrix);
                            var pN22 = Util.project(ki4.getRotatedPointByX(this.rotation), matrix);
                            Animation.ki2=new Path.Line(pN12,pN22);
                            Animation.ki2.set_style(dikmeStyle);

                            var pkin = Util.project(kin.getRotatedPointByX(this.rotation), matrix);
                            Animation.kin=new Path.Circle(pkin,1);
                            Animation.kin.set_style(circleStyle);


                        }
                    }
                    else if(this.rotation>Math.PI*0.9 && this.rotation<Math.PI*1.9){
                        if (Animation.line) {
                            Animation.line.remove();

                        }
                        if(Animation.nokta){
                            Animation.nokta.remove();
                            Animation.line2.remove();
                        }
                        if(Animation.ki1){
                            Animation.ki1.remove();
                            Animation.ki2.remove();
                            Animation.kin.remove();
                            Animation.line2.remove();
                        }

                        var p1 = Util.project(point1.getRotatedPointByX(this.rotation), matrix);
                        var p2 = Util.project(point2.getRotatedPointByX(this.rotation), matrix);






                        Animation.line = new Path.Line(p1, p2);
                        Animation.line.set_style(surfaceStyleLine);





                        if(k==2){

                            var pN11 = Util.project(ki1.getRotatedPointByX(this.rotation), matrix);
                            var pN21 = Util.project(ki2.getRotatedPointByX(this.rotation), matrix);
                            Animation.ki1=new Path.Line(pN11,pN21);
                            Animation.ki1.set_style(dikmeStyle);

                            var pN12 = Util.project(ki3.getRotatedPointByX(this.rotation), matrix);
                            var pN22 = Util.project(ki4.getRotatedPointByX(this.rotation), matrix);
                            Animation.ki2=new Path.Line(pN12,pN22);
                            Animation.ki2.set_style(dikmeStyle);

                            var pkin = Util.project(kin.getRotatedPointByX(this.rotation), matrix);
                            Animation.kin=new Path.Circle(pkin,1);
                            Animation.kin.set_style(circleStyle);


                        }

                        surface.rotationsX[0] = this.rotation;

                        Animation.path = surface.project(matrix);
                        Animation.path.set_style(surfaceStyle);
                        if(k==1){
                            var p3 = Util.project(point32.getRotatedPointByX(this.rotation), matrix);
                            Animation.line2 = new Path.Line(p1, p3);
                            Animation.line2.set_style(surfaceStyleLine);
                        }
                        if(k==2){
                            var p3 = Util.project(point33.getRotatedPointByX(this.rotation), matrix);
                            Animation.line2 = new Path.Line(p1, p3);
                            Animation.line2.set_style(surfaceStyleLine);
                        }

                        if(k==1){
                            var pN1 = Util.project(circleEgri.getRotatedPointByX(this.rotation), matrix);
                            Animation.nokta=new Path.Circle(pN1,2);
                            Animation.nokta.set_style(circleStyle);
                        }
                        if(k==2){
                            var pN1 = Util.project(circle.getRotatedPointByX(this.rotation), matrix);
                            Animation.nokta=new Path.Circle(pN1,2);
                            Animation.nokta.set_style(circleStyle);
                        }

                    }
                    else{
                        if (Animation.line) {
                            Animation.line.remove();

                        }
                        if(Animation.nokta){
                            Animation.nokta.remove();
                        }
                        if(Animation.line2)
                            Animation.line2.remove();
                        if(Animation.ki1){
                            Animation.ki1.remove();
                            Animation.ki2.remove();
                            Animation.kin.remove();
                            Animation.line2.remove();
                        }

                        var p1 = Util.project(point1.getRotatedPointByX(this.rotation), matrix);
                        var p2 = Util.project(point2.getRotatedPointByX(this.rotation), matrix);


                        if(k==1){
                            var p3 = Util.project(point32.getRotatedPointByX(this.rotation), matrix);
                            Animation.line2 = new Path.Line(p1, p3);
                            Animation.line2.set_style(surfaceStyleLine);
                        }

                        if(k==2){
                            var p3 = Util.project(point33.getRotatedPointByX(this.rotation), matrix);
                            Animation.line2 = new Path.Line(p1, p3);
                            Animation.line2.set_style(surfaceStyleLine);
                        }



                        surface.rotationsX[0] = this.rotation;

                        Animation.path = surface.project(matrix);
                        Animation.path.set_style(surfaceStyle);

                        Animation.line = new Path.Line(p1, p2);
                        Animation.line.set_style(surfaceStyleLine);



                        if(k==1){
                            var pN1 = Util.project(circleEgri.getRotatedPointByX(this.rotation), matrix);
                            Animation.nokta=new Path.Circle(pN1,2);
                            Animation.nokta.set_style(circleStyle);
                        }

                        if(k==2){
                            var pN1 = Util.project(circle.getRotatedPointByX(this.rotation), matrix);
                            Animation.nokta=new Path.Circle(pN1,2);
                            Animation.nokta.set_style(circleStyle);

                            var pN11 = Util.project(ki1.getRotatedPointByX(this.rotation), matrix);
                            var pN21 = Util.project(ki2.getRotatedPointByX(this.rotation), matrix);
                            Animation.ki1=new Path.Line(pN11,pN21);
                            Animation.ki1.set_style(dikmeStyle);

                            var pN12 = Util.project(ki3.getRotatedPointByX(this.rotation), matrix);
                            var pN22 = Util.project(ki4.getRotatedPointByX(this.rotation), matrix);
                            Animation.ki2=new Path.Line(pN12,pN22);
                            Animation.ki2.set_style(dikmeStyle);

                            var pkin = Util.project(kin.getRotatedPointByX(this.rotation), matrix);
                            Animation.kin=new Path.Circle(pkin,1);
                            Animation.kin.set_style(circleStyle);


                        }
                    }

                },
                callback:function(){

                    sira++;

                    Animation.text.animate({
                        style:{opacity:0},
                        duration:1000
                    });

                    Animation.line.animate({
                        style:{opacity:0},
                        duration:1000,


                        callback:function(){

                            switch (sira){
                                case 2:
                                    dondur(point12,point22,1);
                                    break;

                                case 3:
                                    dondur(point13,point23,2);
                                    break;
                                case 4:
                                    dondur(point14,point24);
                                    break;
                            }
                        }
                    });

                    if(Animation.line2){
                        Animation.line2.animate({
                            style:{opacity:0},
                            duration:1000
                        })
                        Animation.nokta.animate({
                            style:{opacity:0},
                            duration:1000
                        })
                        Animation.ki1.animate({
                            style:{opacity:0},
                            duration:1000
                        })
                        Animation.ki2.animate({
                            style:{opacity:0},
                            duration:1000
                        })
                        Animation.kin.animate({
                            style:{opacity:0},
                            duration:1000
                        })
                    }
                }

            });
        }
    }
}

Main.animationFinished(28000);