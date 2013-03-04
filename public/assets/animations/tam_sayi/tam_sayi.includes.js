function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}
;
 var kusDondurmeSayisi=0;
        function dondurKus(){
            var yon=kusDondurmeSayisi%2==0?-1:1;
            $("#kus").css("-webkit-transform","scaleX("+yon+")")
                .css("-moz-transform","scaleX("+yon+")")
                .css("-ms-transform","scaleX("+yon+")")
                .css("transform","scaleX("+yon+")")
                .css("-o-transform","scaleX("+yon+")");
            kusDondurmeSayisi++;
        }
        
        var balikDondurmeSayisi=0;
        function dondurBalik(){
            var yon=balikDondurmeSayisi%2==0?-1:1;
            $("#balik").css("-webkit-transform","scaleX("+yon+")")
                .css("-moz-transform","scaleX("+yon+")")
                .css("-ms-transform","scaleX("+yon+")")
                .css("transform","scaleX("+yon+")")
                .css("-o-transform","scaleX("+yon+")");

            balikDondurmeSayisi++;
        }
       


function soruTip1(){
    if(Interaction.randomNumber==0)
        Interaction.prepareNextQuestion();


    Main.setObjective(Interaction.isaret+Interaction.sayi+"<br/>tam sayısını sayı doğrusunda gösteriniz.");
}


function soruTipi2(){

    Main.setObjective("Sayı doğrusunda gösterilen noktanın hangi tam sayıyı gösterdiğini yazınız.");
    $("#girdi").css("opacity","1");
    $("#noktalar"+Interaction.randomNumber).css("opacity","1")
}

;
var Animation = {
    images: [],
    init: function (container) {
        Animation.container = container;
        resimler = ['/assets/animations/tam_sayi/zemin.jpg', '/assets/animations/tam_sayi/cerceve_uzun.png', '/assets/animations/tam_sayi/balik.png', '/assets/animations/tam_sayi/kus.png', '/assets/animations/tam_sayi/asagi_ok.png', '/assets/animations/tam_sayi/yukari_ok.png', '/assets/animations/tam_sayi/cetvel_siyah.png', '/assets/animations/tam_sayi/cetvel_kirmizi.png'];
        $(container).append("<div id='resimCerceve'>");
        $("#resimCerceve").append("<img id='cerceve' src=" + resimler[1] + ">");
        $("#resimCerceve").append("<img id='zemin' src=" + resimler[0] + ">");
        $("#resimCerceve").css({
            position: "absolute",
            top: "0",
            bottom: "0",
            margin: "auto",
            left: "0px",
            width: "419px",
            height: "170px"
        });
        $("#zemin").css("z-index", "2");
        $("#cerceve").css("z-index", "4");
        $("#zemin").css({
            position: "absolute",
            top: "0",
            bottom: "0",
            margin: "auto",
            left: "50px"
        });
        $("#cerceve").css({
            position: "absolute",
            top: "0",
            bottom: "0",
            margin: "auto",
            left: "0px"
        });
        $("#resimCerceve").append("<img id='balik'  class='canlilar' src=" + resimler[2] + ">");
        $("#resimCerceve").append("<img id='kus' class='canlilar' src=" + resimler[3] + ">");
        $("#resimCerceve").append("<img id='ok_asagi' src=" + resimler[4] + ">");
        $("#resimCerceve").append("<img id='ok_yukari' src=" + resimler[5] + ">");
        $("#resimCerceve").append("<img id='cetvelSiyah' src=" + resimler[6] + ">");
        $("#resimCerceve").append("<img id='cetvelKirmizi' src=" + resimler[7] + ">");
        $("#resimCerceve").append("<div id='mesafeBildirimUst' class='bildirim'>");
        $("#resimCerceve").append("<div id='mesafeBildirimAlt' class='bildirim'>");

        $(container).css("font-family","arial");
        $(container).append("<div id='negatifTamSayilarBaslik' class='basliklar'>");
        $(container).append("<div id='pozitifTamSayilarBaslik' class='basliklar'>");
        $(container).append("<div id='sifirBaslik' class='basliklar'>");
        $(container).append("<div id='sifirIcerik' class='icerik'>");

        $(container).append("<div id='negatifTamSayilarIcerik' class='icerik'>");
        $(container).append("<span id='pozitifTamSayilarIcerik' class='icerik'>");

        $(container).append("<span id='tamSayiKumesiParantezSol'>");
        $(container).append("<span id='tamSayiKumesiParantezSag'>");

        $("#cetvelKirmizi, #cetvelSiyah").css({
            position: "absolute",
            bottom: "0px",
            right: "50px",
            margin: "auto",
            zIndex: "3",
            opacity: "0"
        });

        $("#tamSayiKumesiParantezSol").css({
            position: "absolute",
            bottom: "40px",
            right: "381px",
            //margin: "auto",
            zIndex: "4",
            opacity: "0",
            // color:"red",
            //fontSize:"11px"
        }).html("Z ={");
        $("#tamSayiKumesiParantezSag").css({
            position: "absolute",
            bottom: "40px",

            //margin: "auto",
            zIndex: "4",
            opacity: "0",
            // color:"red",
            //fontSize:"11px"
        }).html("}");

        $(container).append("<div id='virgul1' class='virguller'>,</div>");
        $("#virgul1").css({
            position:"absolute",
            right:"226px",
            bottom:"40px",
            opacity:"0"
        });

        $(container).append("<div id='virgul2' class='virguller'>,</div>");
        $("#virgul2").css({
            position:"absolute",
            right:"210px",
            bottom:"40px",
            opacity:"0"
        });
        var platform=navigator.platform.substr(0,5);
        if( platform=="Linux") {
            $("#tamSayiKumesiParantezSag").css({
                right: "93px"
            });
        }
        else{
            $("#tamSayiKumesiParantezSag").css({
                right: "83px"
            });
        }

            $(".basliklar").css({
            position: "absolute",
            bottom: "130px",
            margin: "auto",
            zIndex: "4",
            opacity:"0"
            // color:"red",
            //fontSize:"11px"
        });
        $("#negatifTamSayilarBaslik").css({
            right: "260px",
            opacity: "0"
        }).html("Negatif Tam Sayılar");
        $("#sifirBaslik").css({
            right: "205px",
            opacity: "0"
        }).html("Sıfır");
        $("#pozitifTamSayilarBaslik").css({
            right: "70px",
            opacity: "0"
        }).html("Positif Tam Sayılar");

        $(".icerik").css({
            position: "absolute",
            bottom: "100px",
            zIndex:4
        });

        $("#negatifTamSayilarIcerik").css({
            right: "243px",
            opacity: "0"
        }).html("<span class='negatifTamSayilarParantez'>{</span><span id='negatifTamSayilar'>… &#8211;7, &#8211;6, &#8211;5, &#8211;3, &#8211;2, &#8211;1</span><span class='negatifTamSayilarParantez'>}</span>");

        $("#sifirIcerik").css({
            right: "214px",
            opacity: "0"
        }).html("0");

        $("#pozitifTamSayilarIcerik").css({
            opacity:"0",
            right: "62px",
            //width:"120px",
            //border:"1px red solid"
            //opacity: "0"
        }).html("<span class='pozitifTamSayilarParantez'>{</span> <span id='pozitifTamSayilar'>1, 2, 3, 4, 5, 6, 7…</span> <span class='pozitifTamSayilarParantez'>}</span>");
        $("#pozitifTamSayilar, #negatifTamSayilar").css({
            position:"relative",
            //border:"1px red solid"

        });
       /* $("#pozitifTamSayilarParantezSol").css({
            right: "188px",
            width: "6px",
            height:"15px",
            //opacity: "0"

        }).html("{");

        var parantezSagKonum=(188 - parseInt($('#pozitifTamSayilarIcerik').width(),10))+"px";

        $("#pozitifTamSayilarParantezSag").css({
            right: "68px",
            width: "6px",
            height:"15px",
            //opacity: "0"
        }).html("}");*/

        $(".bildirim").html("4 m");
        $("#mesafeBildirimUst").css({
            position: "absolute",
            bottom: "90px",
            right: "175px",
            margin: "auto",
            zIndex: "3",
            opacity: "0"
        });
        $("#mesafeBildirimAlt").css({
            position: "absolute",
            bottom: "45px",
            right: "175px",
            margin: "auto",
            zIndex: "3",
            opacity: "0"
        });
        $("#ok_yukari").css({
            position: "absolute",
            bottom: "80px",
            right: "200px",
            margin: "auto",
            zIndex: "3",
            opacity: "0"
        });
        $("#ok_asagi").css({
            position: "absolute",
            bottom: "36px",
            right: "200px",
            margin: "auto",
            zIndex: "3",
            opacity: "0"
        });
        $("#kus").css({
            top: "26px"
        });
        $("#balik").css({
            top: "110px"
        });
        $(".canlilar").css({
            position: "absolute",
            //bottom: "0",
            margin: "auto",
            right: "0px",
            zIndex: "3"
        });


        $("#kus").delay(3000).animate({
            right: "250px"
        }, 4000, "linear", function () {
            dondurKus();
        }).animate({
                right: "200px"
            }, 2000, "linear")
        //.animate({"right":"250px"},2000,"linear",function(){dondurKus();});
        $("#balik").delay(2000).animate({
            right: "270px"
        }, 4000, "linear", function () {
            dondurBalik();
        }).animate({
                right: "200px"
            }, 2000, "linear");

        $("#cetvelSiyah").delay(10000).animate({
            opacity: "1"
        }, 1000);
        $("#ok_yukari").delay(10000).animate({
            opacity: "1"
        }, 1000);
        $("#mesafeBildirimUst").delay(11000).animate({
            opacity: "1"
        }, 1000);
        $("#ok_asagi").delay(12000).animate({
            opacity: "1"
        }, 1000);
        $("#mesafeBildirimAlt").delay(13000).animate({
            opacity: "1"
        }, 1000);
        $("#cetvelKirmizi").delay(13000).animate({
            opacity: "1"
        }, 1000);
        $("#cetvelSiyah").delay(13000).animate({
            opacity: "0"
        }, 1000);
        $("#negatifTamSayilarBaslik").delay(14000).animate({
            opacity: "1"
        }, 1000)
        $("#sifirBaslik").delay(16000).animate({
            opacity: "1"
        }, 1000)
        $("#pozitifTamSayilarBaslik").delay(18000).animate({
            opacity: "1"
        }, 1000)
        $("#negatifTamSayilarIcerik").delay(15000).animate({
            opacity: "1"
        }, 1000)

        $("#sifirIcerik").delay(17000).animate({
            opacity: "1"
        }, 1000)

        $("#pozitifTamSayilarIcerik").delay(19000).animate({
            opacity: "1"
        }, 1000)

/*
        $(".negatifTamSayilarParantez").delay(15000).animate({
            opacity: "1"
        }, 1000)
        $(".pozitifTamSayilarParantez").delay(19000).animate({
            opacity: "1"
        }, 1000)
*/
        $("#negatifTamSayilar").delay(20000).animate({
            top: "60px",
            left: "20px"
        }, 1000)
        $("#sifirIcerik").delay(2000).animate({
            bottom: "40px",
            right: "214px"
        }, 1000)

        if(platform=="Linux") {
            $("#pozitifTamSayilar").delay(20000).animate({
            top: "60px",
            right: "35px"
            }, 1000)


        }
        else{
            $("#pozitifTamSayilar").delay(20000).animate({
                top: "60px",
                right: "15px"
            }, 1000)
        }

        $("#tamSayiKumesiParantezSol, #tamSayiKumesiParantezSag, .virguller").delay(21000).animate({
            opacity: "1"
        }, 500);

        $("#negatifTamSayilarBaslik").delay(8000).animate({
            opacity: "0"
        }, 1000)
        $("#sifirBaslik").delay(6000).animate({
            opacity: "0"
        }, 1000)
        $("#pozitifTamSayilarBaslik").delay(4000).animate({
            opacity: "0"
        }, 1000)
        $(".negatifTamSayilarParantez").delay(20000).animate({
            opacity: "0"
        }, 1000)
        $(".pozitifTamSayilarParantez").delay(20000).animate({
            opacity: "0"
        }, 1000)


        $("#negatifTamSayilar").delay(1000).animate({
            top: "10px"
        }, 1000)
        $("#sifirIcerik").delay(1000).animate({
            bottom: "90px"
        }, 1000)
        $("#pozitifTamSayilar").delay(1000).animate({
            top: "10px"
        }, 1000)
        $("#tamSayiKumesiParantezSol, #tamSayiKumesiParantezSag, .virguller").delay(500).animate({
            bottom: "90px"
        }, 1000);


        //alert(navigator.platform);


        //$("#kus").animate({ "-webkit-transform": "scaleX(-1)"},1000);
        // setTimeout(function(){dondur();},11000);
        Main.animationFinished(24000);
    }
}
;
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
    $(".mavikontrol").css("text-align","center");
    
    Interaction.soruSayaci=0;
     var sayiDogrusuTop=130;
     var fontSize=16;
    
    Animation.numericalAxis = new Group();
	var arr = new Group();
        var arrow = new Path.OneSidedArrow(new Point(40, sayiDogrusuTop), new Point(550, sayiDogrusuTop), 10, 30)
	var arrow2 = new Path.OneSidedArrow(new Point(550, sayiDogrusuTop), new Point(551, sayiDogrusuTop), 10, 30);
	arrow.rotate(180);
	arr.addChild(arrow);
	arr.addChild(arrow2);
        arr.strokeWidth=2;
	
        var pieceLength = 455/13;
	
        Interaction.smallDots = new Group();
	for(var i = 0; i < 13; i++){
            var smallDot = new Path.Circle(new Point(50+pieceLength*(i+1), sayiDogrusuTop), 3)
            smallDot.fillColor = "black";
            Interaction.smallDots.addChild(smallDot);
	}
        
        
         $(container).append("<div id=sayilar>");
            $("#sayilar")
                .css("width","500px")
                .css("height","30px")
                .css("position","absolute")
                .css("left","67px")
                .css("top",sayiDogrusuTop+15)
                .css("margin","auto")
                //.css("border","1px solid red");
        $(container).append("<div id='noktalar'>");
            $("#noktalar")
                .css("width","500px")
                .css("height","40px")
                .css("position","absolute")
                .css("left","67px")
                .css("top",sayiDogrusuTop+(-18))
                .css("margin","auto")
                //.css("border","1px solid red");
        
        for(i=-6; i<=6; i++){
            var isaret=i<0?"&#8211;":"";
            var sayi=i<0?i.toString().slice(1): i.toString();

            if(i<0)
                $("#sayilar").append("<div class='sayilar eksiSayilar' id=sayilar"+i+">");
            else
            $("#sayilar").append("<div class='sayilar artiSayilar' id=sayilar"+i+">");

            $("#sayilar"+i)
                .css("margin","auto").html(isaret+""+sayi)
                .css("border","0px solid red");

            if(i<0)
                $("#sayilar"+i).html(isaret+sayi+"&nbsp;&nbsp;&nbsp;")
            else
                $("#sayilar"+i).html(isaret+sayi)

            console.log(isaret+""+i);
            if(i!=0)
                $("#sayilar"+i).css("opacity","0");
            
            $("#noktalar").append("<span class='noktalar' id=noktalar"+i+">");
            
        }

        $(".sayilar")
            .css("width",pieceLength)
            .css("height","10px")
            .css("float","left")
            .css("font-style","bold")
            .css("font-size",fontSize)
        //.css("margin-left","1px")
        //.css("text-align","center")
        //.css("opacity","0");
        $(".eksiSayilar").css("text-align","right");
        $(".artiSayilar").css("text-align","center");
        $(".noktalar")

            .css("width","35")

            .css("height","10px")
            .css("float","left")
            .css("margin","auto")
            .css("font-size","40px")
            .css("color","red")
            .css("text-align","center")
            .css("opacity","1")
            .html("•")
        //.css("border","1px solid red");

      /*  if( navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Linux armv6l' || navigator.platform == 'Linux armv7l') {
            $("#noktalar-6").css({left:"1px",top:"1px"})
            $("#noktalar-5").css({left:"10px",top:"1px"})
            $("#noktalar6").css({left:"25px",top:"1px"})
        }*/


        
    
    Interaction.setRandomGenerator(7,-6);
        
        Main.setObjective("Sayı doğrusunda gösterilen noktanın hangi tam sayıyı gösterdiğini yazınız.");
        Interaction.appendInput({
            width: '40px',
            height: '40px',
            textAlign: 'center',
            fontSize: '20px',
            position:"absolute",
            margin:"auto",
            top:"50px",
            right:"0",
            left:"0"

        }, false,true);
        Interaction.input.id="girdi";
        $("#girdi").attr("maxLength","2");
        $("#girdi").keydown(function(){Interaction.setStatus('',false);});
        $("#girdi").attr("onkeypress","return SadeceRakam(event,('-','-'))");



	Interaction.appendStatus({
            bottom:'100px',
            right:'0',
            left:'0',
            margin:'auto',
            width:"100%",
            textAlign:'center'
            
        });
	
        Interaction.appendButton({
            bottom:'40px',
            right:'0',
            left:'0',
            margin:'auto'
	});
		
        
	Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){


            if(randomNumber==0)
                randomNumber++;
            Interaction.trial=1;
            Interaction.randomNumber = randomNumber;

            Interaction.isaret=Interaction.randomNumber<0?"&#8211;":"";
            Interaction.sayi=Interaction.randomNumber<0?Interaction.randomNumber.toString().slice(1): Interaction.randomNumber.toString();
            $("#girdi").css("opacity","0");
            Interaction.cevap = "";
             $("#girdi").css("color","black");
            $('.noktalar').each(function(){
                $(this).css('opacity',0);
                this.isSelected = false;
            });
            
            for(i=-6; i<=6; i++){
                if(i!=0)
                    $("#sayilar"+i).css("opacity","0");
            }
            
            var tiklamaKontrol=0;
        var tiklanmisNokta="";
        if(Interaction.soruSayaci%2!=0){
            
            console.log("ifte");
            $(".noktalar").mouseover(
                function(){
                        $(this).css("opacity","1").css("cursor","pointer");
            });


                $(".noktalar").mouseout(
                    function(){
                    if(!this.isSelected)
                        $(this).css("opacity","0");
                });


            $(".noktalar").click(
                function(){
                    $('.noktalar').each(function(){
                        $(this).css('opacity',0);
                        this.isSelected = false;
                    });
                    this.isSelected = true;
                    tiklanmisNokta=this.id;
                    console.log(tiklanmisNokta);
                    $(this).css("opacity","1");
                    Interaction.cevap=tiklanmisNokta.substring(8);
                    console.log(Interaction.cevap);
            });
        }
        else{
            $(".noktalar").unbind('mouseover').unbind('mouseout').unbind('click');

           
        }
            
            
            Interaction.soruSayaci++;
            Interaction.soruTipi=Interaction.soruSayaci%2==0?soruTip1():soruTipi2();
            
            
        },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
            if(Interaction.soruSayaci%2==0){
                if(Interaction.cevap=="" || Interaction.cevap==null){
                 Interaction.setStatus('Lütfen sayı doğrusunda bir noktayı seçin.', false);
                 return false;
               }

            }
            else{
                if(!Util.isNumber($("#girdi").val())){
                    Interaction.setStatus('Girdiğiniz sayının formatı uygun değil; lütfen düzeltiniz.',false);
                    return false;
                }
            }

		
		},
	isAnswerCorrect : function(value){
		
                if(Interaction.soruSayaci%2==0){
                    if(Interaction.cevap==Interaction.randomNumber.toString())
                        return true;
                }
                else{
                    if(value==Interaction.randomNumber.toString())
                        return true;
                }
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
            if(Interaction.soruSayaci%2==0){
                Interaction.setStatus("Cevabınız yanlış; doğru cevap yukarıda  <b style='color:green'>yeşil</b> renkle gösterilmiştir.", false);
                $("#noktalar"+Interaction.randomNumber).css("opacity","1").css("color","green");
                console.log("noktalar"+Interaction.randomNumber);
                $(".sayilar").css("opacity","1");
            }
            else{

                Interaction.setStatus("Cevabınız yanlış; doğru cevap: <b style='color:green'>"+Interaction.isaret +Interaction.sayi+"</b>", false);
                $("#girdi").css("color","red");
                $(".sayilar").css("opacity","1");
            }
		
	}
}

// Sadece rakam girilmesini sağlanıyor.
function SadeceRakam(e,allowedchars){
    var key=e.charCode==undefined?e.keyCode:e.charCode;
    if((/^[0-9]+$/.test(String.fromCharCode(key)))||key==0||key==13 ||isPassKey(key,allowedchars)){return true;}else{return false;}}
function isPassKey(key,allowedchars){if(allowedchars!=null){for(var i=0;i<allowedchars.length;i++){if(allowedchars[i]==String.fromCharCode(key))return true;}}return false;}
function SadeceRakamBlur(e,clear){var nesne=e.target?e.target:e.srcElement;var val=nesne.value;val=val.replace(/^\s+|\s+$/g,"");if(clear)val=val.replace(/\s{2,}/g," ");nesne.value=val;}
;




