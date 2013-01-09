var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki prizmaların cisim köşegenlerini belirleyiniz. Bunun için ilgili köşelere basmanız gerekecek.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:"40px",
            right:"40px",
            opacity:0


        });

        //$("input").attr("disabled",true);
        Interaction.appendStatus({
            bottom:"50px",
            right:"150px"
        })

        //$(container).append("<div id='tiklama'>")
        $("#tiklama").css({
            position:"absolute",
            width:"100px",
            height:"20px",
            right:"50px",
            top:"100px"


        });

     /*   //ciz("dikKare");
        //ciz("egikKare");
        //ciz("dikdortgen");
        //ciz("paralelKenar");
        ciz("esKenar");
        //ciz("ucgen");*/

        sekiller=["dikKare","egikKare","dikdortgen","paralelKenar","esKenar","ucgen"];

        sayi=deger=Util.getShuffledArray(6);
        sira=0;





        var tik;
        var tiklama=0;
        var tool=new Tool();
        //tool.distanceThreshold = 100;
        Interaction.tiklama=onMouseDown;
        tool.onMouseDown=Interaction.tiklama;
        tool.onMouseUp=onMouseUp;

        if( navigator.platform.indexOf("Win") >-1 || navigator.platform.indexOf("Mac") >-1 || navigator.platform.indexOf("Linux") >-1){
            if( navigator.platform != 'Linux armv6l' && navigator.platform != 'Linux armv7l')
                tool.onMouseMove=onMouseMove;
        }



        birinciTiklama="";
        ikinciTiklama="";
        kosegen="";
        hata=0;
        dogru=0;

        var idler=["nokta00","nokta01","nokta02","nokta03","nokta10","nokta11","nokta12","nokta13"];

        Interaction.dogruNoktalar=[];
        function onMouseDown(event) {
            if(event.item){

                if(event.item.class=="nokta"){
                    console.log(event.item);
                    Interaction.setStatus('',true);
                    if(tiklama==0){
                        event.item.opacity=1;
                        event.item.fillColor="yellow";
                        tik = new Path(event.item.position);

                        birinciTiklama=event.item;

                        $("#tiklama").html("Birinci Tıklama: "+tiklama+" . "+birinciTiklama.myId);
                        tiklama++;

                    }
                    else if(tiklama==1){
                        ikinciTiklama=event.item;
                        if(birinciTiklama.myId!=ikinciTiklama.myId){


                            switch (birinciTiklama.myId){
                                case "nokta00":
                                    kosegen="nokta11"
                                    break;
                                case "nokta01":
                                    kosegen="nokta10"
                                    break;
                                case "nokta02":
                                    kosegen="nokta13"
                                    break;
                                case "nokta03":
                                    kosegen="nokta12"
                                    break;
                                case "nokta10":
                                    kosegen="nokta01"
                                    break;
                                case "nokta11":
                                    kosegen="nokta00"
                                    break;
                                case "nokta12":
                                    kosegen="nokta03"
                                    break;
                                case "nokta13":
                                    kosegen="nokta02"
                                    break;

                            }

                            if(ikinciTiklama.myId==kosegen){
                                event.item.fillColor="yellow";
                                tik.add(event.item.position)
                                tik.strokeColor = 'green';
                                tiklama++;
                                console.log("ikinci tıklama "+tiklama+" . "+event.item.myid);
                                $("#tiklama").html("ikinci tıklama "+tiklama+" . "+event.item.myId);
                                Interaction.dogruNoktalar.push(birinciTiklama.myId);
                                Interaction.dogruNoktalar.push(ikinciTiklama.myId);
                                console.log("ok");
                                dogru++
                                if(dogru<4){
                                    Interaction.setStatus('Doğru; şimdi diğer cisim köşegenini belirleyiniz.',true);

                                    birinciTiklama.opacity=0;
                                    ikinciTiklama.opacity=0;
                                }
                                else if(dogru==4){
                                    Interaction.setStatus('Doğru; cisim köşegenlerinin tamamını buldunuz.',true);
                                    birinciTiklama.opacity=0;
                                    ikinciTiklama.opacity=0;
                                    dogru=0;
                                    tool.onMouseDown=null;
                                    $(".next_button").css("opacity","1").attr("disabled",false);


                                }


                            }
                            else{


                                birinciTiklama.opacity=0;
                                ikinciTiklama.opacity=0;
                                birinciTiklama=null;
                                ikinciTiklama=null;
                                tiklama=0;
                                hata++;

                                if(hata==2){
                                    tool.onMouseDown=null;
                                    Interaction.setStatus('Bulamadın; cisim köşegenleri yukarıda belirtilmiştir.',false);
                                    $(".next_button").css("opacity","1").attr("disabled",false);
                                    hata=0;

                                    if(Interaction.dogruNoktalar.indexOf("nokta00")==-1){
                                        var cizgi=new Path.Line(new Point(koordinat[0][0].x,koordinat[0][0].y),new Point(koordinat[1][1].x,koordinat[1][1].y));
                                        cizgi.strokeColor="red";
                                    }
                                    if(Interaction.dogruNoktalar.indexOf("nokta01")==-1){
                                        var cizgi=new Path.Line(new Point(koordinat[0][1].x,koordinat[0][1].y),new Point(koordinat[1][0].x,koordinat[1][0].y));
                                        cizgi.strokeColor="red";
                                    }
                                    if(Interaction.dogruNoktalar.indexOf("nokta02")==-1){
                                        var cizgi=new Path.Line(new Point(koordinat[0][2].x,koordinat[0][2].y),new Point(koordinat[1][3].x,koordinat[1][3].y));
                                        cizgi.strokeColor="red";
                                    }
                                    if(Interaction.dogruNoktalar.indexOf("nokta03")==-1){
                                        var cizgi=new Path.Line(new Point(koordinat[0][3].x,koordinat[0][3].y),new Point(koordinat[1][2].x,koordinat[1][2].y));
                                        cizgi.strokeColor="red";
                                    }
                                }
                                else{
                                    Interaction.setStatus('Bu cisim köşegeni değil; lütfen tekrar deneyin.',false)
                                }
                            }

                        }
                        else if(birinciTiklama.myId==event.item.myId){
                            tiklama++;
                            birinciTiklama=null;
                            console.log(birinciTiklama)
                            event.item.opacity=0;

                        }
                    }

                }
            }
        }

        function onMouseUp(){
            if(tiklama==2)
                tiklama=0;

        }


        item=[];
        colors=[];
        var firstBox;
        var hitOptions = {
            //segments: true,
            //stroke: true,
            fill: true,
            tolerance: 10

        };
        function onMouseMove(event) {
            firstBox = null;
            var hitResult = project.hitTest(event.point, hitOptions);
            project.activeLayer.selected = false;
            if (hitResult && hitResult.item){
                if(event.item){
                    if(event.item.class=="nokta"){
                        //hitResult.item.selected = true;
                        console.log(hitResult.item);
                        $(Interaction.container).css("cursor","pointer");
                        firstBox = hitResult.item;

                    }
                    else{
                        $(Interaction.container).css("cursor","default");
                }

            }


            }


        }


        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.button.className="next_button";
        Interaction.button.onclick=Interaction.prepareNextQuestion;
        Main.interactionProject.activeLayer.removeChildren();
        tool.onMouseDown=Interaction.tiklama;

        $(".next_button").css("opacity","0").attr("disabled",true);

        var cizilecek=sekiller[sayi[sira]];
        //var cizilecek=sekiller[0];
        ciz(cizilecek);
        sira++;
        if(sira==5)
            sira=0;

        if(cizilecek=="ucgen"){
            tool.onMouseDown=null;
            Interaction.setStatus('Üçgen prizmanın cisim köşegeni yoktur.',true);
            setTimeout(function(){$(".next_button").css("opacity","1").attr("disabled",false)},5000);
        }

       //ciz("dikKare");
        //ciz("egikKare");
        //ciz("dikdortgen");
        //ciz("paralelKenar");
        //ciz("esKenar");
        //ciz("ucgen");


    },

	preCheck : function(){


    },
	isAnswerCorrect : function(value){

    },
	onCorrectAnswer : function(){
		
    },
	onWrongAnswer : function(){
		
    },
	onFail : function(){
		
    }
}