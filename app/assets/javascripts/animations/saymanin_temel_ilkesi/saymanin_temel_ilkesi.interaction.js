var Interaction = {
    
	getFramework:function(){
		return 'paper';
	},

    init:function(container){
		Interaction.container = container;
		Main.setObjective('Yandaki çocuğun 4 tişört 3 pantolon ve 2 ayakkabısından birer tanesini seçtikten sonra "giydir" butonuna basarak çocuğun kaç farklı şekilde giyinebileceğini bulunuz.');
		Interaction.paper = {
			width:$(container).width(),
			height:$(container).height()
		}

        Interaction.rCocuk="/assets/animations/saymanin_temel_ilkesi/cocuk.png";
        Interaction.rTisortBeyaz="/assets/animations/saymanin_temel_ilkesi/tisort_beyaz.png";
        Interaction.rTisortKirmizi="/assets/animations/saymanin_temel_ilkesi/tisort_kirmizi.png";
        Interaction.rTisortMavi="/assets/animations/saymanin_temel_ilkesi/tisort_mavi.png";
        Interaction.rTisortMor="/assets/animations/saymanin_temel_ilkesi/tisort_mor.png";
        Interaction.rTisortSari="/assets/animations/saymanin_temel_ilkesi/tisort_sari.png";

        Interaction.rPantolontBeyaz="/assets/animations/saymanin_temel_ilkesi/pantolon_beyaz.png";
        Interaction.rPantolonKahve="/assets/animations/saymanin_temel_ilkesi/pantolon_kahve.png";
        Interaction.rPantolonMavi="/assets/animations/saymanin_temel_ilkesi/pantolon_mavi.png";
        Interaction.rPantolonSiyah="/assets/animations/saymanin_temel_ilkesi/pantolon_siyah.png";

        Interaction.rAyakkabitBeyaz="/assets/animations/saymanin_temel_ilkesi/ayakkabi_beyaz.png";
        Interaction.rAyakkabiKahve="/assets/animations/saymanin_temel_ilkesi/ayakkabi_kahve.png";
        Interaction.rAyakkabiSiyah="/assets/animations/saymanin_temel_ilkesi/ayakkabi_siyah.png";


        Interaction.tisortlerStr=["sarı","kırmızı","mavi","mor"];
        Interaction.pantolonlarStr=["siyah","mavi","kahverengi"];
        Interaction.ayakkabilarStr=["kahverengi","siyah"];

        $(container).append("<img id='cocuk' src='"+Interaction.rCocuk+"'>");

        $(container).append("<img id='cocukTisort' src='"+Interaction.rTisortBeyaz+"'>");
        $(container).append("<img id='cocukPantolon' src='"+Interaction.rPantolontBeyaz+"'>");
        $(container).append("<img id='cocukAyakkabi' src='"+Interaction.rAyakkabitBeyaz+"'>");

		$(container).append("<div id='tisortCerceve'>");
            $("#tisortCerceve").append("<img id='tisort1' class='esyalar tisortler' src='"+Interaction.rTisortSari+"'>");
            $("#tisortCerceve").append("<img id='tisort2' class='esyalar tisortler' src='"+Interaction.rTisortKirmizi+"'>");
            $("#tisortCerceve").append("<img id='tisort3' class='esyalar tisortler' src='"+Interaction.rTisortMavi+"'>");
            $("#tisortCerceve").append("<img id='tisort4' class='esyalar tisortler' src='"+Interaction.rTisortMor+"'>");
        $(container).append("<div id='pantolonCerceve'>");
            $("#pantolonCerceve").append("<img id='pantolon1' class='esyalar pantolonlar' src='"+Interaction.rPantolonSiyah+"'>");
            $("#pantolonCerceve").append("<img id='pantolon2' class='esyalar pantolonlar' src='"+Interaction.rPantolonMavi+"'>");
            $("#pantolonCerceve").append("<img id='pantolon3' class='esyalar pantolonlar' src='"+Interaction.rPantolonKahve+"'>");
        $(container).append("<div id='ayakkabiCerceve'>");
            $("#ayakkabiCerceve").append("<img id='ayakkabi1' class='esyalar ayakkabilar' src='"+Interaction.rAyakkabiKahve+"'>");
            $("#ayakkabiCerceve").append("<img id='ayakkabi2' class='esyalar ayakkabilar' src='"+Interaction.rAyakkabiSiyah+"'>");

        $("#tisortCerceve").css({
            position:"absolute",
            width:"230px",
            height:"50px",
            top:"20px",
            left:"20px"
            //backgroundColor:"red"
        });

        $("#pantolonCerceve").css({
            position:"absolute",
            width:"170px",
            height:"70px",
            top:"100px",
            left:"15px"
            //backgroundColor:"yellow"
        });

        $("#ayakkabiCerceve").css({
            position:"absolute",
            width:"110px",
            height:"30px",
            top:"200px",
            left:"15px"
            //backgroundColor:"orange"
        });

        $(".esyalar").css({
            position:"absolute",
            width:"59px",
            top:"0px",
            cursor:"pointer"

        });

        for(var i=1;i<5;i++){
            $("#tisort"+i).css({left:(i-1)*70});
            $("#pantolon"+i).css({left:(i-1)*70});
            $("#ayakkabi"+i).css({left:(i-1)*70});

        }

        $(".tisortler").css({
            height:"75px",
            zIndex:4
        });
        $(".pantolonlar").css({
            height:"95px",
            zIndex:3
        });
        $(".ayakkabilar").css({
            height:"30px",
            zIndex:2
        });

        $("#cocuk").css({
            position:"absolute",
            width:"96px",
            height:"232px",
            top:"0px",
            left:"370px"
        });

        $("#cocukTisort").css({
            position:"absolute",
            width:"59px",
            height:"75",
            top:"60px",
            left:"404px",
            zIndex:3
        });

        $("#cocukPantolon").css({
            position:"absolute",
            width:"59px",
            height:"95px",
            top:"122px",
            left:"399px",
            zIndex:2
        });

        $("#cocukAyakkabi").css({
            position:"absolute",
            width:"59px",
            height:"30px",
            top:"203px",
            left:"398px",
            zIndex:1
        });
/*


        $("#tisort1").css({backgroundColor:"green"});
        $("#tisort2").css({backgroundColor:"blue"});
        $("#tisort3").css({backgroundColor:"black"});
        $("#tisort4").css({backgroundColor:"purple"});

        $("#pantolon1").css({backgroundColor:"green"});
        $("#pantolon2").css({backgroundColor:"blue"});
        $("#pantolon3").css({backgroundColor:"black"});

        $("#ayakkabi1").css({backgroundColor:"green"});
        $("#ayakkabi2").css({backgroundColor:"blue"});
*/


        $(container).append("<div id='kiyafetlerStr'>")
        $("#kiyafetlerStr").css({
            position:"absolute",
            width:"350px",
            height:"30px",
            bottom:"30px",
            right:"20px",
            textAlign:"right"
        });

        $(container).append("<button id='btnGoster'>")
        $("#btnGoster").css({
            position:"absolute",
            width:"110px",
            height:"30px",
            bottom:"20px",
            left:"110px",


        }).attr("disabled","disabled").html("Giydir");

        $(".esyalar").click(esyalarClick);

        Interaction.kombinasyonlar=new Array();

        $("#btnGoster").click(function(){

            $(".esyalar").unbind("click");
            $(this).attr("disabled","disabled");
            $(".giydirilmis").remove();

            $(".esyalar").css("opacity","1");
            var tisort="";
            var pantolon="";
            var ayakkabi="";
            var tisortElemanlar=$("#tisortCerceve").children();
            var pantolonElemanlar=$("#pantolonCerceve").children();
            var ayakkabiElemanlar=$("#ayakkabiCerceve").children();

            //console.log(tisortElemanlar[1])
            //console.log("tisort class: "+$("#"+tisortElemanlar[1].id).hasClass("giydilirmis"))

            for(var i=0;i<tisortElemanlar.length;i++){
                if($("#"+tisortElemanlar[1].id).hasClass("giydilirmis")==true)
                    continue
                else
                {
                    for(var j=1; j<=5;j++){
                        console.log(tisortElemanlar[i].id+", tisort"+j+"A");
                        if(tisortElemanlar[i].id==("tisort"+j+"A")){

                            tisort="#"+tisortElemanlar[i].id;
                            break;
                        }
                    }

                }
            }

            for(var i=0;i<pantolonElemanlar.length;i++){
                if($("#"+pantolonElemanlar[1].id).hasClass("giydilirmis")==true)
                    continue
                else
                {

                    for(var j=1; j<=4;j++){
                        console.log(pantolonElemanlar[i].id+", pantolon"+j+"A");
                        if(pantolonElemanlar[i].id==("pantolon"+j+"A")){
                            pantolon="#"+pantolonElemanlar[i].id;
                            break;
                        }
                    }
                }

            }

            for(var i=0;i<ayakkabiElemanlar.length;i++){
                if($("#"+ayakkabiElemanlar[1].id).hasClass("giydilirmis")==true)
                    continue
                else
                {
                    for(var j=1; j<=3;j++){
                        console.log(ayakkabiElemanlar[i].id+", ayakkabi"+j+"A");
                        if(ayakkabiElemanlar[i].id==("ayakkabi"+j+"A")){
                            ayakkabi="#"+ayakkabiElemanlar[i].id;
                            break;
                        }
                    }
                }

            }

            var giydirilmisGrup=new Array();

            giydirilmisGrup.push(tisort);
            giydirilmisGrup.push(pantolon);
            giydirilmisGrup.push(ayakkabi);

            var testSonucu=kombinasyonKontrol(giydirilmisGrup);

            if(testSonucu==true){
            $(tisort).animate({
                left:animLeft,
                top:(animTop-10)+"px"

            },2000,"easeInOutSine",function(){
                $(this).get(0).id=$(this).get(0).id+"G";
                $(this).removeClass().addClass("giydirilmis");


            });

            $(pantolon).animate({
                left:animLeft,
                top:(animTop-30)+"px"

            },2000,"easeInOutSine",function(){
                $(this).get(0).id=$(this).get(0).id+"G";
                $(this).removeClass().addClass("giydirilmis");


            });

            $(ayakkabi).animate({
                left:animLeft,
                top:(animTop-47)+"px"

            },2000,"easeInOutSine",function(){
                $(this).get(0).id=$(this).get(0).id+"G";
                $(this).removeClass().addClass("giydirilmis");

                $("#kiyafetlerStr").html(Interaction.tisortlerStr[tisort.charAt(tisort.length-2)-1]+" tişört, "+Interaction.pantolonlarStr[pantolon.charAt(pantolon.length-2)-1]+" pantolon, "+Interaction.ayakkabilarStr[ayakkabi.charAt(ayakkabi.length-2)-1]+" ayakkabı");

                $(".esyalar").bind("click",esyalarClick);


            });

            }
            else{
                hepsiniSil();
                $(".esyalar").bind("click",esyalarClick);
            }

            console.log(giydirilmisGrup);
            console.log($(".giydirilmis"));
            //alert(tisort+" "+pantolon+" "+ayakkabi);
        })

        Interaction.appendStatus({
            bottom:'26px',
            right:'60px',
            width:"300px",
            textAlign:"center"
        });
		Interaction.prepareNextQuestion();
	},
	nextQuestion: function(randomNumber){


		},
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
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