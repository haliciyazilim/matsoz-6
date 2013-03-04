var Animation = {
    images:[
        {
            id:'top_arrow',
            src:'/assets/animations/uzunluklari_olcme/ust_ok.png'
        },
        {
            id:'bottom_arrow',
            src:'/assets/animations/uzunluklari_olcme/alt_ok.png'
        },
        {
            id:'pitcher',
            src:'/assets/animations/sivilari_olcme/sivilariolcme_litre.jpg'
        }
    ],
    init:function(container){
        Animation.container = container;

        var mySize = new Size(120,20);
        var literPoint = new Point(120.5,80.5);
        var deciliterPoint = new Point(140.5,100.5);
        var centiliterPoint = new Point(160.5,120.5);
        var milliliterPoint = new Point(180.5,140.5);
        var decaliterPoint = new Point(100.5,60.5);
        var hectoliterPoint = new Point(80.5,40.5);
        var kiloliterPoint = new Point(60.5,20.5);

        var klPoint = new Point(460.5,60.5);

        var lastTextPoint = new Point(600.5,130.5);

        var animStart = 0;
        var pitcherStart = animStart+1000;
        var literStart = pitcherStart+1500;
        var deciliterStart = literStart+1000;
        var centiliterStart = deciliterStart+1000;
        var milliliterStart = centiliterStart+1000;
        var decaliterStart = milliliterStart+1000;
        var hectoliterStart = decaliterStart+1000;
        var kiloliterStart = hectoliterStart+1000;

        var klTextStart = kiloliterStart+2000;
        var hlTextStart = klTextStart+500;
        var dalTextStart = hlTextStart+500;
        var lTextStart = dalTextStart+500;
        var dlTextStart = lTextStart+500;
        var clTextStart = dlTextStart+500;
        var mlTextStart = clTextStart+500;

        var top1Start = mlTextStart+1500;
        var top2Start = top1Start+750;
        var top3Start = top2Start+750;
        var top4Start = top3Start+750;
        var top5Start = top4Start+750;
        var top6Start = top5Start+750;

        var bottom6Start = top6Start+1500;
        var bottom5Start = bottom6Start+750;
        var bottom4Start = bottom5Start+750;
        var bottom3Start = bottom4Start+750;
        var bottom2Start = bottom3Start+750;
        var bottom1Start = bottom2Start+750;

        var lastTextStart = bottom1Start+1500;

        var pitcher = new Raster('pitcher');
        pitcher.position = new Point(60,130);
        pitcher.opacity = 0;

        // liter Group
        var literGroup = new Group();

        var literRect1 = new Path.Rectangle(literPoint,mySize);
        literRect1.strokeColor = animStrokeColors;
        literRect1.fillColor = literColor;

        var literRect2 = new Path.Rectangle(new Point(literPoint.x+mySize.width,literPoint.y),mySize);
        literRect2.strokeColor = animStrokeColors;

        var literText1 = new PointText(new Point(literPoint.x+4,literPoint.y+16));
        literText1.justification = 'left';
        literText1.content = 'Litre';
        literText1.fillColor = "white";
        literText1.fontSize = 12;

        var literText2 = new PointText(new Point(literPoint.x+mySize.width+4,literPoint.y+16));
        literText2.justification = 'left';
        literText2.content = '1 litre';
        literText2.fontSize = 12;

        literGroup.addChild(literRect1);
        literGroup.addChild(literRect2);
        literGroup.addChild(literText1);
        literGroup.addChild(literText2);
        literGroup.opacity = 0;

        // deciliter Group
        var deciliterGroup = new Group();

        var deciliterRect1 = new Path.Rectangle(deciliterPoint,mySize);
        deciliterRect1.strokeColor = animStrokeColors;
        deciliterRect1.fillColor = deciliterColor;

        var deciliterRect2 = new Path.Rectangle(new Point(deciliterPoint.x+mySize.width,deciliterPoint.y),mySize);
        deciliterRect2.strokeColor = animStrokeColors;

        var deciliterText1 = new PointText(new Point(deciliterPoint.x+4,deciliterPoint.y+16));
        deciliterText1.justification = 'left';
        deciliterText1.content = 'Desilitre';
        deciliterText1.fontSize = 12;

        var deciliterText2 = new PointText(new Point(deciliterPoint.x+mySize.width+4,deciliterPoint.y+16));
        deciliterText2.justification = 'left';
        deciliterText2.content = '0,1 litre';
        deciliterText2.fontSize = 12;

        deciliterGroup.addChild(deciliterRect1);
        deciliterGroup.addChild(deciliterRect2);
        deciliterGroup.addChild(deciliterText1);
        deciliterGroup.addChild(deciliterText2);
        deciliterGroup.opacity = 0;

        // centiliter Group
        var centiliterGroup = new Group();

        var centiliterRect1 = new Path.Rectangle(centiliterPoint,mySize);
        centiliterRect1.strokeColor = animStrokeColors;
        centiliterRect1.fillColor = centiliterColor;

        var centiliterRect2 = new Path.Rectangle(new Point(centiliterPoint.x+mySize.width,centiliterPoint.y),mySize);
        centiliterRect2.strokeColor = animStrokeColors;

        var centiliterText1 = new PointText(new Point(centiliterPoint.x+4,centiliterPoint.y+16));
        centiliterText1.justification = 'left';
        centiliterText1.content = 'Santilitre';
        centiliterText1.fontSize = 12;

        var centiliterText2 = new PointText(new Point(centiliterPoint.x+mySize.width+4,centiliterPoint.y+16));
        centiliterText2.justification = 'left';
        centiliterText2.content = '0,01 litre';
        centiliterText2.fontSize = 12;

        centiliterGroup.addChild(centiliterRect1);
        centiliterGroup.addChild(centiliterRect2);
        centiliterGroup.addChild(centiliterText1);
        centiliterGroup.addChild(centiliterText2);
        centiliterGroup.opacity = 0;

        // milliliter Group
        var milliliterGroup = new Group();

        var milliliterRect1 = new Path.Rectangle(milliliterPoint,mySize);
        milliliterRect1.strokeColor = animStrokeColors;
        milliliterRect1.fillColor = milliliterColor;

        var milliliterRect2 = new Path.Rectangle(new Point(milliliterPoint.x+mySize.width,milliliterPoint.y),mySize);
        milliliterRect2.strokeColor = animStrokeColors;

        var milliliterText1 = new PointText(new Point(milliliterPoint.x+4,milliliterPoint.y+16));
        milliliterText1.justification = 'left';
        milliliterText1.content = 'Mililitre';
        milliliterText1.fontSize = 12;

        var milliliterText2 = new PointText(new Point(milliliterPoint.x+mySize.width+4,milliliterPoint.y+16));
        milliliterText2.justification = 'left';
        milliliterText2.content = '0,001 litre';
        milliliterText2.fontSize = 12;

        milliliterGroup.addChild(milliliterRect1);
        milliliterGroup.addChild(milliliterRect2);
        milliliterGroup.addChild(milliliterText1);
        milliliterGroup.addChild(milliliterText2);
        milliliterGroup.opacity = 0;

        // decaliter Group
        var decaliterGroup = new Group();

        var decaliterRect1 = new Path.Rectangle(decaliterPoint,mySize);
        decaliterRect1.strokeColor = animStrokeColors;
        decaliterRect1.fillColor = decaliterColor;

        var decaliterRect2 = new Path.Rectangle(new Point(decaliterPoint.x+mySize.width,decaliterPoint.y),mySize);
        decaliterRect2.strokeColor = animStrokeColors;

        var decaliterText1 = new PointText(new Point(decaliterPoint.x+4,decaliterPoint.y+16));
        decaliterText1.justification = 'left';
        decaliterText1.content = 'Dekalitre';
        decaliterText1.fillColor = "white";
        decaliterText1.fontSize = 12;

        var decaliterText2 = new PointText(new Point(decaliterPoint.x+mySize.width+4,decaliterPoint.y+16));
        decaliterText2.justification = 'left';
        decaliterText2.content = '10 litre';
        decaliterText2.fontSize = 12;

        decaliterGroup.addChild(decaliterRect1);
        decaliterGroup.addChild(decaliterRect2);
        decaliterGroup.addChild(decaliterText1);
        decaliterGroup.addChild(decaliterText2);
        decaliterGroup.opacity = 0;

        // hectoliter Group
        var hectoliterGroup = new Group();

        var hectoliterRect1 = new Path.Rectangle(hectoliterPoint,mySize);
        hectoliterRect1.strokeColor = animStrokeColors;
        hectoliterRect1.fillColor = hectoliterColor;

        var hectoliterRect2 = new Path.Rectangle(new Point(hectoliterPoint.x+mySize.width,hectoliterPoint.y),mySize);
        hectoliterRect2.strokeColor = animStrokeColors;

        var hectoliterText1 = new PointText(new Point(hectoliterPoint.x+4,hectoliterPoint.y+16));
        hectoliterText1.justification = 'left';
        hectoliterText1.content = 'Hektolitre';
        hectoliterText1.fillColor = "white";
        hectoliterText1.fontSize = 12;

        var hectoliterText2 = new PointText(new Point(hectoliterPoint.x+mySize.width+4,hectoliterPoint.y+16));
        hectoliterText2.justification = 'left';
        hectoliterText2.content = '100 litre';
        hectoliterText2.fontSize = 12;

        hectoliterGroup.addChild(hectoliterRect1);
        hectoliterGroup.addChild(hectoliterRect2);
        hectoliterGroup.addChild(hectoliterText1);
        hectoliterGroup.addChild(hectoliterText2);
        hectoliterGroup.opacity = 0;

        // kiloliter Group
        var kiloliterGroup = new Group();

        var kiloliterRect1 = new Path.Rectangle(kiloliterPoint,mySize);
        kiloliterRect1.strokeColor = animStrokeColors;
        kiloliterRect1.fillColor = kiloliterColor;

        var kiloliterRect2 = new Path.Rectangle(new Point(kiloliterPoint.x+mySize.width,kiloliterPoint.y),mySize);
        kiloliterRect2.strokeColor = animStrokeColors;

        var kiloliterText1 = new PointText(new Point(kiloliterPoint.x+4,kiloliterPoint.y+16));
        kiloliterText1.justification = 'left';
        kiloliterText1.content = 'Kilolitre';
        kiloliterText1.fillColor = "white";
        kiloliterText1.fontSize = 12;

        var kiloliterText2 = new PointText(new Point(kiloliterPoint.x+mySize.width+4,kiloliterPoint.y+16));
        kiloliterText2.justification = 'left';
        kiloliterText2.content = '1000 litre';
        kiloliterText2.fontSize = 12;

        kiloliterGroup.addChild(kiloliterRect1);
        kiloliterGroup.addChild(kiloliterRect2);
        kiloliterGroup.addChild(kiloliterText1);
        kiloliterGroup.addChild(kiloliterText2);
        kiloliterGroup.opacity = 0;

        // kl
        var klText = new PointText(klPoint);
        klText.justification = 'left';
        klText.content = 'kL';
        klText.fontSize = 10;
        klText.opacity = 0;

        // hl
        var hlText = new PointText(new Point(klPoint.x+40,klPoint.y));
        hlText.justification = 'left';
        hlText.content = 'hL';
        hlText.fontSize = 10;
        hlText.opacity = 0;

        // dal
        var dalText = new PointText(new Point(klPoint.x+80,klPoint.y));
        dalText.justification = 'left';
        dalText.content = 'daL';
        dalText.fontSize = 10;
        dalText.opacity = 0;

        // l
        var lText = new PointText(new Point(klPoint.x+126,klPoint.y));
        lText.justification = 'left';
        lText.content = 'L';
        lText.fillColor = "red";
        lText.fontSize = 10;
        lText.opacity = 0;

        // dl
        var dlText = new PointText(new Point(klPoint.x+160,klPoint.y));
        dlText.justification = 'left';
        dlText.content = 'dL';
        dlText.fontSize = 10;
        dlText.opacity = 0;

        // cl
        var clText = new PointText(new Point(klPoint.x+200,klPoint.y));
        clText.justification = 'left';
        clText.content = 'cL';
        clText.fontSize = 10;
        clText.opacity = 0;

        // ml
        var mlText = new PointText(new Point(klPoint.x+240,klPoint.y));
        mlText.justification = 'left';
        mlText.content = 'mL';
        mlText.fontSize = 10;
        mlText.opacity = 0;

        // top arrows
        var top1 = new Raster('top_arrow');
        top1.position = new Point(klPoint.x+30,klPoint.y-20);
        top1.opacity = 0;

        var top2 = new Raster('top_arrow');
        top2.position = new Point(klPoint.x+70,klPoint.y-20);
        top2.opacity = 0;

        var top3 = new Raster('top_arrow');
        top3.position = new Point(klPoint.x+114,klPoint.y-20);
        top3.opacity = 0;

        var top4 = new Raster('top_arrow');
        top4.position = new Point(klPoint.x+150,klPoint.y-20);
        top4.opacity = 0;

        var top5 = new Raster('top_arrow');
        top5.position = new Point(klPoint.x+190,klPoint.y-20);
        top5.opacity = 0;

        var top6 = new Raster('top_arrow');
        top6.position = new Point(klPoint.x+230,klPoint.y-20);
        top6.opacity = 0;

        // bottom arrows

        var bottom1 = new Raster('bottom_arrow');
        bottom1.position = new Point(klPoint.x+30,klPoint.y+14);
        bottom1.opacity = 0;

        var bottom2 = new Raster('bottom_arrow');
        bottom2.position = new Point(klPoint.x+70,klPoint.y+14);
        bottom2.opacity = 0;

        var bottom3 = new Raster('bottom_arrow');
        bottom3.position = new Point(klPoint.x+114,klPoint.y+14);
        bottom3.opacity = 0;

        var bottom4 = new Raster('bottom_arrow');
        bottom4.position = new Point(klPoint.x+150,klPoint.y+14);
        bottom4.opacity = 0;

        var bottom5 = new Raster('bottom_arrow');
        bottom5.position = new Point(klPoint.x+190,klPoint.y+14);
        bottom5.opacity = 0;

        var bottom6 = new Raster('bottom_arrow');
        bottom6.position = new Point(klPoint.x+230,klPoint.y+14);
        bottom6.opacity = 0;

        // top texts
        var ttext1 = new PointText(klPoint.x+17,klPoint.y-30);
        ttext1.justification = 'left';
        ttext1.content = 'x 10';
        ttext1.fontSize = 10;
        ttext1.opacity = 0;

        var ttext2 = new PointText(klPoint.x+57,klPoint.y-30);
        ttext2.justification = 'left';
        ttext2.content = 'x 10';
        ttext2.fontSize = 10;
        ttext2.opacity = 0;

        var ttext3 = new PointText(klPoint.x+101,klPoint.y-30);
        ttext3.justification = 'left';
        ttext3.content = 'x 10';
        ttext3.fontSize = 10;
        ttext3.opacity = 0;

        var ttext4 = new PointText(klPoint.x+137,klPoint.y-30);
        ttext4.justification = 'left';
        ttext4.content = 'x 10';
        ttext4.fontSize = 10;
        ttext4.opacity = 0;

        var ttext5 = new PointText(klPoint.x+177,klPoint.y-30);
        ttext5.justification = 'left';
        ttext5.content = 'x 10';
        ttext5.fontSize = 10;
        ttext5.opacity = 0;

        var ttext6 = new PointText(klPoint.x+217,klPoint.y-30);
        ttext6.justification = 'left';
        ttext6.content = 'x 10';
        ttext6.fontSize = 10;
        ttext6.opacity = 0;

        // bottom texts
        var btext1 = new PointText(klPoint.x+17,klPoint.y+32);
        btext1.justification = 'left';
        btext1.content = ': 10';
        btext1.fontSize = 10;
        btext1.opacity = 0;

        var btext2 = new PointText(klPoint.x+57,klPoint.y+32);
        btext2.justification = 'left';
        btext2.content = ': 10';
        btext2.fontSize = 10;
        btext2.opacity = 0;

        var btext3 = new PointText(klPoint.x+101,klPoint.y+32);
        btext3.justification = 'left';
        btext3.content = ': 10';
        btext3.fontSize = 10;
        btext3.opacity = 0;

        var btext4 = new PointText(klPoint.x+137,klPoint.y+32);
        btext4.justification = 'left';
        btext4.content = ': 10';
        btext4.fontSize = 10;
        btext4.opacity = 0;

        var btext5 = new PointText(klPoint.x+177,klPoint.y+32);
        btext5.justification = 'left';
        btext5.content = ': 10';
        btext5.fontSize = 10;
        btext5.opacity = 0;

        var btext6 = new PointText(klPoint.x+217,klPoint.y+32);
        btext6.justification = 'left';
        btext6.content = ': 10';
        btext6.fontSize = 10;
        btext6.opacity = 0;

        // last texts
        var lastText1 = new PointText(lastTextPoint);
        lastText1.justification = 'center';
        lastText1.content = 'En çok kullanılan sıvı ölçme birimleri';
        lastText1.fillColor = "#069";
        lastText1.fontSize = 12;
        lastText1.opacity = 0;

        var lastText2 = new PointText(new Point(lastTextPoint.x,lastTextPoint.y+20));
        lastText2.justification = 'center';
        lastText2.content = 'L, cL ve mL\'dir.';
        lastText2.fillColor = "#069";
        lastText2.fontSize = 12;
        lastText2.opacity = 0;

        pitcher.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:pitcherStart,
            animationType:'easeInOutQuad'
        });

        literGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:literStart,
            animationType:'easeInOutQuad'
        });

        deciliterGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:deciliterStart,
            animationType:'easeInOutQuad'
        });

        centiliterGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:centiliterStart,
            animationType:'easeInOutQuad'
        });

        milliliterGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:milliliterStart,
            animationType:'easeInOutQuad'
        });

        decaliterGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:decaliterStart,
            animationType:'easeInOutQuad'
        });

        hectoliterGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:hectoliterStart,
            animationType:'easeInOutQuad'
        });

        kiloliterGroup.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:kiloliterStart,
            animationType:'easeInOutQuad'
        });

        klText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:klTextStart,
            animationType:'easeInOutQuad'
        });

        hlText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:hlTextStart,
            animationType:'easeInOutQuad'
        });

        dalText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:dalTextStart,
            animationType:'easeInOutQuad'
        });

        lText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:lTextStart,
            animationType:'easeInOutQuad'
        });

        dlText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:dlTextStart,
            animationType:'easeInOutQuad'
        });

        clText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:clTextStart,
            animationType:'easeInOutQuad'
        });

        mlText.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:mlTextStart,
            animationType:'easeInOutQuad'
        });

        top1.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top1Start,
            animationType:'easeInOutQuad'
        });

        ttext1.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top1Start,
            animationType:'easeInOutQuad'
        });

        top2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top2Start,
            animationType:'easeInOutQuad'
        });

        ttext2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top2Start,
            animationType:'easeInOutQuad'
        });

        top3.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top3Start,
            animationType:'easeInOutQuad'
        });

        ttext3.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top3Start,
            animationType:'easeInOutQuad'
        });

        top4.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top4Start,
            animationType:'easeInOutQuad'
        });

        ttext4.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top4Start,
            animationType:'easeInOutQuad'
        });

        top5.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top5Start,
            animationType:'easeInOutQuad'
        });

        ttext5.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top5Start,
            animationType:'easeInOutQuad'
        });

        top6.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top6Start,
            animationType:'easeInOutQuad'
        });

        ttext6.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:top6Start,
            animationType:'easeInOutQuad'
        });

        bottom6.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom6Start,
            animationType:'easeInOutQuad'
        });

        btext6.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom6Start,
            animationType:'easeInOutQuad'
        });

        bottom5.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom5Start,
            animationType:'easeInOutQuad'
        });

        btext5.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom5Start,
            animationType:'easeInOutQuad'
        });

        bottom4.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom4Start,
            animationType:'easeInOutQuad'
        });

        btext4.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom4Start,
            animationType:'easeInOutQuad'
        });

        bottom3.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom3Start,
            animationType:'easeInOutQuad'
        });

        btext3.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom3Start,
            animationType:'easeInOutQuad'
        });

        bottom2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom2Start,
            animationType:'easeInOutQuad'
        });

        btext2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom2Start,
            animationType:'easeInOutQuad'
        });

        bottom1.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom1Start,
            animationType:'easeInOutQuad'
        });

        btext1.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:bottom1Start,
            animationType:'easeInOutQuad'
        });

        lastText1.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:lastTextStart,
            animationType:'easeInOutQuad'
        });

        lastText2.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:lastTextStart,
            animationType:'easeInOutQuad',
            callback:function(){
                Main.animationFinished(1000);
            }
        });


    }
}
;
