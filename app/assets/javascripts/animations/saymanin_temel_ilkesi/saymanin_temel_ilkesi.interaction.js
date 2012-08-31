var Interaction = {
    
	getFramework:function(){
		return 'paper';
	},

    init:function(container){
		Interaction.container = container;
		Main.setObjective('');
		Interaction.paper = {
			width:$(container).width(),
			height:$(container).height()
		}

        Interaction.tisortlerStr=["sarı","kırmızı","mavi","mor"];
        Interaction.pantolonlarStr=["siyah","mavi","kahverengi"];
        Interaction.ayakkabilarStr=["kahverengi","gri"];
			
		$(container).append("<div id='tisortCerceve'>");
            $("#tisortCerceve").append("<div id='tisort1' class='esyalar tisortler'>");
            $("#tisortCerceve").append("<div id='tisort2' class='esyalar tisortler'>");
            $("#tisortCerceve").append("<div id='tisort3' class='esyalar tisortler'>");
            $("#tisortCerceve").append("<div id='tisort4' class='esyalar tisortler'>");
        $(container).append("<div id='pantolonCerceve'>");
            $("#pantolonCerceve").append("<div id='pantolon1' class='esyalar pantolonlar'>");
            $("#pantolonCerceve").append("<div id='pantolon2' class='esyalar pantolonlar'>");
            $("#pantolonCerceve").append("<div id='pantolon3' class='esyalar pantolonlar'>");
        $(container).append("<div id='ayakkabiCerceve'>");
            $("#ayakkabiCerceve").append("<div id='ayakkabi1' class='esyalar ayakkabilar'>");
            $("#ayakkabiCerceve").append("<div id='ayakkabi2' class='esyalar ayakkabilar'>");

        $("#tisortCerceve").css({
            position:"absolute",
            width:"230px",
            height:"50px",
            top:"50px",
            left:"50px",
            //backgroundColor:"red"
        });

        $("#pantolonCerceve").css({
            position:"absolute",
            width:"170px",
            height:"70px",
            top:"120px",
            left:"50px",
            //backgroundColor:"yellow"
        });

        $("#ayakkabiCerceve").css({
            position:"absolute",
            width:"110px",
            height:"30px",
            top:"210px",
            left:"50px",
            //backgroundColor:"orange"
        });

        $(".esyalar").css({
            position:"absolute",
            width:"50px",
            top:"0px",
            cursor:"pointer"

        });

        for(var i=1;i<5;i++){
            $("#tisort"+i).css({left:(i-1)*60});
            $("#pantolon"+i).css({left:(i-1)*60});
            $("#ayakkabi"+i).css({left:(i-1)*60});

        }

        $(".tisortler").css({
            height:"50px"
        });
        $(".pantolonlar").css({
            height:"70px"
        });
        $(".ayakkabilar").css({
            height:"30px"
        });

        $("#tisort1").css({backgroundColor:"green"});
        $("#tisort2").css({backgroundColor:"blue"});
        $("#tisort3").css({backgroundColor:"black"});
        $("#tisort4").css({backgroundColor:"purple"});

        $("#pantolon1").css({backgroundColor:"green"});
        $("#pantolon2").css({backgroundColor:"blue"});
        $("#pantolon3").css({backgroundColor:"black"});

        $("#ayakkabi1").css({backgroundColor:"green"});
        $("#ayakkabi2").css({backgroundColor:"blue"});


        $(container).append("<div id='kiyafetlerStr'>")
        $("#kiyafetlerStr").css({
            position:"absolute",
            width:"350px",
            height:"30px",
            bottom:"40px",
            right:"0px",
            textAlign:"right"
        });

        $(container).append("<button id='btnGoster'>")
        $("#btnGoster").css({
            position:"absolute",
            width:"110px",
            height:"30px",
            bottom:"20px",
            left:"110px",


        }).attr("disabled","disabled").html("Göster");

        $(".esyalar").click(function(){
            Interaction.setStatus("");
            $("#kiyafetlerStr").html("");
            var seciliCerceveId=$(this).get(0).parentNode.id;
            var secilen=$(this).get(0).id;
            var seciliYeniId=$(this).get(0).id+"A";

            sil(this,$(this).get(0).className);
            //console.log(seciliYeniId);
            $(this).clone().attr("id",seciliYeniId).appendTo("#"+seciliCerceveId).css("opacity","0.6");
            $(this).css("opacity","0.6");



            //console.log($(this).get(0).parentNode.id);
            //console.log("seçilen: "+$(this).get(0).id);
            console.log("Sınıf işmi: "+$(this).get(0).className);


            console.log("Giydirilmişler: "+$(".esyalar").length);
            var esyalarUzunluk=$(".esyalar").length;
            if(esyalarUzunluk==12)
                $("#btnGoster").removeAttr("disabled");

        });

        Interaction.kombinasyonlar=new Array();

        $("#btnGoster").click(function(){

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
                top:animTop+"px"

            },2000,"easeInOutSine",function(){
                $(this).get(0).id=$(this).get(0).id+"G";
                $(this).removeClass().addClass("giydirilmis");


            });

            $(pantolon).animate({
                left:animLeft,
                top:(animTop-20)+"px"

            },2000,"easeInOutSine",function(){
                $(this).get(0).id=$(this).get(0).id+"G";
                $(this).removeClass().addClass("giydirilmis");


            });

            $(ayakkabi).animate({
                left:animLeft,
                top:(animTop-40)+"px"

            },2000,"easeInOutSine",function(){
                $(this).get(0).id=$(this).get(0).id+"G";
                $(this).removeClass().addClass("giydirilmis");

                $("#kiyafetlerStr").html(Interaction.tisortlerStr[tisort.charAt(tisort.length-2)-1]+" tişört, "+Interaction.pantolonlarStr[pantolon.charAt(pantolon.length-2)-1]+" pantolon, "+Interaction.ayakkabilarStr[ayakkabi.charAt(ayakkabi.length-2)-1]+" ayakkabı");



            });

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