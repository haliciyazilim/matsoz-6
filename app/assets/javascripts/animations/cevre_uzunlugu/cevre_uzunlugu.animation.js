var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
//
//        var size=new Size(26,26);
//        var point=new Point(10,5);
//        grid(point,size);



        var grids = new InteractiveGrids({
            position:new Point(300.5,10.5),
            size:26,
            style:{
                strokeColor:'#666'
            },
            rows:6,
            cols:6
        }).drawShape([
            new Point(2,1),
            new Point(3,1),
            new Point(5,5),
            new Point(1,5)
        ]);
        grids.path.set_style({
            strokeColor:'#f00'
        });

        for(var i=0; i < grids.lines.length ; i++)
            grids.lines[i].set_style({
                strokeColor:new RgbColor(0,0,0,0)
            }).animate({
                style:{strokeColor:new RgbColor(0,0,0,1)},
                duration:500,
                delay:2000
            });



        var birim=new Group();

        var birimAH=new AnimationHelper({
            opacity:0
        });

        var birimSekil=new Path.Rectangle(new Point(250.5,10.5), new Size(26,26));
        birimSekil.strokeColor=new RgbColor(0,0,0,1);
        birimSekil.opacity=birimAH.opacity;
//        birim.addChild(birimSekil);

        var birim1T=new PointText(new Point(200,28))
        birim1T.content="1 birim";
        birim1T.fillColor=new RgbColor(0,0,0,1)
        birim1T.opacity=birimAH.opacity;
        birim.addChild(birim1T);

        var birim2T=new PointText(new Point(240,60))
        birim2T.content="1 birim";
        birim2T.fillColor=new RgbColor(0,0,0,1);
        birim2T.opacity=birimAH.opacity;
        birim.addChild(birim2T);

        var aciklamaAH=new AnimationHelper({
            opacity:0
        });

        var aciklamalar=new Group();
        var aciklamaP=new Point(600.5,70)
        var aciklama1=new PointText(aciklamaP);
        aciklama1.content="Yamuğun çevre uzunluğu";
        aciklama1.fillColor=new RgbColor(0,0,0,1)
        aciklama1.paragraphStyle.justification="center";
        aciklama1.opacity=aciklamaAH.opacity;
        aciklamalar.addChild(aciklama1);

        aciklamaP.y=90;
        var aciklama2=new PointText(aciklamaP);
        aciklama2.content="13 birimden";
        aciklama2.fillColor=new RgbColor(0,0,0,1)
        aciklama2.paragraphStyle.justification="center";
        aciklama2.opacity=aciklamaAH.opacity;
        aciklamalar.addChild(aciklama2);

        aciklamaP.y=110;
        var aciklama3=new PointText(aciklamaP);
        aciklama3.content="fazladır.";
        aciklama3.fillColor=new RgbColor(0,0,0,1)
        aciklama3.paragraphStyle.justification="center";
        aciklama3.opacity=aciklamaAH.opacity;
        aciklamalar.addChild(aciklama3);






        birimAH.animate({
            style:{
                strokeColor:new RgbColor(0,0,0,1),
                fillColor:new RgbColor(0,0,0,1),
                opacity:1
            },
            duration:500,
            delay:3000,
            update:function(){
                birimSekil.opacity=this.opacity
                birim1T.opacity=this.opacity;
                birim2T.opacity=this.opacity;
            }
        });

        aciklamaAH.animate({
            style:{
                opacity:1
            },
            duration:500,
            delay:4000,
            update:function(){
                aciklama1.opacity=this.opacity;
                aciklama2.opacity=this.opacity;
                aciklama3.opacity=this.opacity;
            }
        });



        Main.animationFinished(4500);




    }



}