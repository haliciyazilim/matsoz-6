liste=function(eleman1,eleman2, eleman3,div){
    this.div="#"+div;
    this.e1=eleman1;
    this.e2=eleman2;
    this.e3=eleman3;
    this.doldur=
        function(){



            //$(container).append("<style>#siralama .yer_tutucu { width: 66px; background:#009966; height:20px}</style>");
            //$(container).append("<style>#cerceve { left:0px; top:10px; position:absolute}</style>");
            //$(container).append("<style>#kucuk { left:160px; top:10px; position:absolute}</style>");







            $(this.div).append("<ul id='siralama'>");

            $(this.div+" #siralama").append("<li id='siralanacakSayi1' class='sayilar'>");
            $(this.div+" #siralama #siralanacakSayi1")
                .html(this.e1);
            $(this.div+" #siralama").append("<div id='raf1' class='raf'>");
            $(this.div+" #siralama").append("<div id='kucuk1' class='isaretler'>");


            $(this.div+" #siralama").append("<li id='siralanacakSayi2' class='sayilar'>");
            $(this.div+" #siralama #siralanacakSayi2")
                .html(this.e2);
            $(this.div+" #siralama").append("<div id='raf2' class='raf'>");
            $(this.div+" #siralama").append("<div id='kucuk2' class='isaretler'>");


            $(this.div+" #siralama").append("<li id='siralanacakSayi3' class='sayilar'>");
            $(this.div+" #siralama #siralanacakSayi3")
                .html(this.e3);
            $(this.div+" #siralama").append("<div id='raf3' class='raf'>");

            $(this.div+" #siralama .sayilar")

                .css("font-size","20px")
                .css("cursor","pointer");



            if(this.div=="#ornekUst" ||this.div=="#ornekAlt"){

                $(this.div+" #siralama")
                    .css("list-style-type","none")
                    .css("width","414px")
                    .css("padding","0")
                    .css("margin-top","10px");
                //.css("border","solid 1px orange");
                $(this.div+" #siralama li")
                    .css("float","left")
                    .css("height","30px")
                    .css("line-height","30px");
                //.css("border","solid 1px black");
                $(this.div+" #siralama .sayilar")
                    .css("font-size","20px")
                    .css("cursor","pointer");

                $(this.div+" #siralama li").css("margin","0 70px 0 10px");
                $(this.div+" #siralama .sayilar").css("text-align","left").css("width","40px");
            }
            if(this.div=="#soru" ||this.div=="#cevap"){
                $(container).append("<style>"+this.div+" #siralama {width:430px; list-style-type:none; cursor:auto; margin:auto;}</style>");
                $(container).append("<style>" +this.div+" #siralama li {float:left; height:20px; width:70px; margin:0px 30px; padding: 8px 5px;background:"+sayilarKutuRenk+"; font-size:12px; color:"+sayilarStrokeRenk+"; font-weight:bold; border:1px solid "+sayilarKutuStrokeRenk+";}</style>");
                $(container).append("<style>" +this.div+" #siralama .yerTutucu { width: 70px; background:"+yerTutucuRenk+"; height:20px; border-color:"+yerTutucuRenk+"}</style>");
                $(this.div+" #siralama .sayilar").css("text-align","center");
            }



            if(this.div=="#soru" || this.div=="#cevap"){
                $(this.div+" #kucuk1").css("left","210px");
                $(this.div+" #kucuk2").css("left","350px");
                $(this.div+" #raf1").css("left","103px");
                $(this.div+" #raf2").css("left","246px");
                $(this.div+" #raf3").css("left","388px");

                $(this.div+" #siralama .isaretler").append("<img id='kucuk' src='/assets/animations/ondalik_kesirleri_karsilastirma/oran_kucuk_active.png' />");
                $(this.div+" .isaretler")
                    .css("position","absolute")
                    .css("bottom","10px");
                $(this.div+" #siralama .raf").append("<img class='rafResim' src='/assets/animations/ondalik_kesirleri_karsilastirma/okk_etkilesim_raf.png' />");
                $(this.div+" .raf")
                    .css("position","absolute")
                    .css("top","38px")
                    .css("margin","auto");
                $(this.div+" .rafResim").css("width","95px");
                console.log("div: "+this.div+" #siralama li")
            }
            else if(this.div=="#ornekAlt"){
                $(this.div+" #kucuk1").css("left","88px");
                $(this.div+" #kucuk2").css("left","206px");
                $(this.div+" .isaretler")

                    .css("position","absolute")
                    .css("bottom","10px")
                    .css("margin","auto");
                $("#ornekAlt #kucuk1, #ornekAlt #kucuk2").html("<").css("width","10px").css("font-size","20px");

            }
            else if(this.div=="#ornekUst"){
                $("#ornekUst #kucuk1, #ornekUst #kucuk2").css("width","20px");
                //$(this.div+" #siralama li").css("width","60px");
            }





            if(this.div=="#soru"){
                $(function() {
                    $("#soru #siralama" ).sortable({
                        items: "li:not(.raf .isaretler)",

                        placeholder : "yerTutucu",
                        //grid: [80, 30],
                        //helper: 'original',
                        //forceHelperSize: true,
                        //forcePlaceholderSize: true,

                        /*opactiy:0.6,
                         cursor: 'move',
                         axis: 'x',
                         zIndex:5,*/
                        tolerance: 'pointer'


                    });

                    $( "#soru #siralama" ).sortable({cancel: ".kapali"});


                    //$( "#soru #siralama" ).disableSelection();
                    //$("#soru #siralama").sortable( "refreshPositions" );

                    /*$("#soru .sayilar").draggable({
                     connectToSortable: ".sayilar",


                     });*/
                });


            }
        }
}


sayiUretim=function(){

    var deger=Math.floor(Math.random()*3+1);
    console.log("deger: "+deger);

    var ondalik=Math.floor(Math.random()*3+1);
    console.log("deger: "+ondalik);
    //deger=3;
    //rastgeleSayi=999.999;
    switch(deger){
        case 1:
            var rastgeleSayi=Math.random()*9+1;
            return format(rastgeleSayi,{places:ondalik});
            break;
        case 2:
            var rastgeleSayi=Math.random()*99+1;
            return format(rastgeleSayi,{places:ondalik});
            break;
        case 3:
            var rastgeleSayi=Math.random()*999+1;
            return format(rastgeleSayi,{places:ondalik});
            break;
    }
};

format = function(num, options) {
    options.point=options.point ||'.';
    options.group=options.group ||' ';
    options.places=options.places||0;
    options.suffix=options.suffix||'';
    options.prefix=options.prefix||'';

    regex = /(\d+)(\d{3})/;
    result = ((isNaN(num) ? 0 : Math.abs(num)).toFixed(options.places)) + '';

    for (result = result.replace('.', options.point); regex.test(result) && options.group; result=result.replace(regex, '$1'+options.group+'$2')) {};
    return (num < 0 ? '-' : '') + options.prefix + result + options.suffix;
};