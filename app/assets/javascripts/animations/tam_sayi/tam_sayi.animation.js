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