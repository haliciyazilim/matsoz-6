var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        $(container).append("<div id='baslik'>");
        $("#baslik").css({
            position:"absolute",
            width:"100%",
            top:"25px",
            left:"0px",
            right:"0px",
            margin:"auto",
            textAlign:"center",
            fontSize:"20px",

            opacity:1
        }).html("1,28 ondalık kesrini onda birler basamağına göre yuvarlama:");

        $(container).append("<div id='cumle'>");
        $("#cumle").css({
            position:"absolute",
            width:"100%",
            top:"135px",
            left:"0px",
            right:"0px",
            margin:"auto",
            textAlign:"center",
            fontSize:"18px",
            opacity:0
        }).html("1,28 ondalık kesri, 8 > 5 olduğu için 1,30 yani kısaca 1,3 ondalık kesrine yuvarlanır.");

        $(container).append("<div id='sonNokta'>");
        $("#sonNokta").css({
            position:"absolute",
            width:"100%",
            top:"165px",
            left:"0px",
            right:"0px",
            margin:"auto",
            textAlign:"center",
            fontSize:"20px",
            opacity:0,
            color:"red"
        }).html("1,28 <img src='/assets/animations/ondalik_kesirlerde_yuvarlama/sag_ok.png'  /> 1,3");

        $("#sonNokta img").css({display:"inline-block"});



        var sayiDogrusuTop=90;
        var fontSize=16;

        Animation.numericalAxis = new Group();
        var arr = new Group();
        var arrow = new Path.OneSidedArrow(new Point(40, sayiDogrusuTop), new Point(717, sayiDogrusuTop), 10, 30)
        var arrow2 = new Path.OneSidedArrow(new Point(717, sayiDogrusuTop), new Point(718, sayiDogrusuTop), 10, 30);
        arrow.rotate(180);
        arr.addChild(arrow);
        arr.addChild(arrow2);
        arr.strokeWidth=2;

        var pieceLength = 677/15;

        Interaction.smallDots = new Group();
        Interaction.sayiTextGrup=new Group();
        for(var i = 0; i < 14; i++){

            var sayi=1.18+i/100;


            if(i==3 || i==10 || i==12){
                var sayiText=new PointText(new Point(17+pieceLength*(i+1), sayiDogrusuTop-20));
                sayiText.fontSize=16;
                sayiText.strokeWidth=2;
                sayiText.strokeColor=new RgbColor(0,0,0);

                var smallDot = new Path.Circle(new Point(40+pieceLength*(i+1), sayiDogrusuTop), 5)
                smallDot.fillColor = new RgbColor(0,0,0);
            }
            else{
                var sayiText=new PointText(new Point(25+pieceLength*(i+1), sayiDogrusuTop-20));
                sayiText.fontSize=12;
                sayiText.fillColor=new RgbColor(0,0,0);

                var smallDot = new Path.Circle(new Point(40+pieceLength*(i+1), sayiDogrusuTop), 3);
                smallDot.fillColor = new RgbColor(0,0,0);

            }

            sayiText.content=Util.format(sayi,{places:2});


            Interaction.sayiTextGrup.addChild(sayiText);
            Interaction.smallDots.addChild(smallDot);


        }

        animationHelper=new AnimationHelper({
           fillColor: new RgbColor(0,0,0),
            strokeColor:new RgbColor(0,0,0)
        });

        animationHelper.animate({
            style:{
                fillColor: new RgbColor(1,0,0),
                strokeColor:new RgbColor(1,0,0)
            },
            delay: 1000,
            duration: 3000,
            update: function(){
                Interaction.sayiTextGrup.children[10].fillColor=this.fillColor;
                Interaction.sayiTextGrup.children[10].strokeColor=this.strokeColor;
                Interaction.smallDots.children[10].fillColor=this.fillColor;

            }
        });


        //Interaction.sayiTextGrup.children[10].fillColor=new RgbColor(255,0,0);

        sagaOkHelper=new AnimationHelper({
            okPosition:pieceLength*12,
            opacity:0
        });
        Interaction.sagaOk = new Path.OneSidedArrow(new Point(pieceLength*12, sayiDogrusuTop+20), new Point( sagaOkHelper.okPosition+6, sayiDogrusuTop+20), 10, 30);
        Interaction.sagaOk.strokeColor="blue";
        Interaction.sagaOk.fillColor="blue"
        Interaction.sagaOk.opacity=0;


        sagaOkHelper.animate({
            style:{
                okPosition:pieceLength*14-5,
                opacity:1
            },
            delay: 4000,
            duration: 3000,
            update: function(){
                Interaction.sagaOk.remove();
                Interaction.sagaOk = new Path.OneSidedArrow(new Point(pieceLength*12, sayiDogrusuTop+20), new Point(this.okPosition, sayiDogrusuTop+20), 10, 30);
                Interaction.sagaOk.strokeColor="blue";
                Interaction.sagaOk.fillColor="blue"
                Interaction.sagaOk.opacity=this.opacity*10;



            }
        });

        solaOkHelper=new AnimationHelper({
            okPosition:pieceLength*12-10,
            opacity:0
        });
        Interaction.solaOk = new Path.OneSidedArrow(new Point(pieceLength*12-10, sayiDogrusuTop+20), new Point( solaOkHelper.okPosition-11, sayiDogrusuTop+20), 10, 30);
        Interaction.solaOk.strokeColor="blue";
        Interaction.solaOk.fillColor="blue"
        Interaction.solaOk.opacity=0;


        solaOkHelper.animate({
            style:{
                okPosition:pieceLength*5-5,
                opacity:1
            },
            delay: 4000,
            duration: 3000*1.5,
            update: function(){
                Interaction.solaOk.remove();
                Interaction.solaOk = new Path.OneSidedArrow(new Point(pieceLength*12-10, sayiDogrusuTop+20), new Point(this.okPosition, sayiDogrusuTop+20), 10, 30);
                Interaction.solaOk.strokeColor="blue";
                Interaction.solaOk.fillColor="blue"
                Interaction.solaOk.opacity=this.opacity*10;



            },
            callback: function(){
                console.log("CallBAck");
                $("#cumle").animate({opacity:1},1000);
                $("#sonNokta").delay(1000).animate({opacity:1},1000);
            }
        });

        Main.animationFinished(12000);
    }
}