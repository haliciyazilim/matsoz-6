etkilesim=function(amac){
    this.amac=amac;
    this.anadiv="#"+amac;
    this.doldur=function(){

        // Ana Div
        $(this.anadiv,Interaction.container).append("<div id='soruTekliInput'>");
        $("#soruTekliInput").css("width","200px")
            .css("height","50px")
            .css("margin","auto")
            .css("position","absolute")
            //.css("bottom","20px")
            .css("left","30px")
            .css("top","90px")
            .css("font-size","20px")
            .css("float","left");
        //.css("border","solid 1px black");

        $("#soruTekliInput",Interaction.container).append("<div id='kesir'>");
        $("#kesir")
            .css("width", "90px")
            .css("height", "45px")
            .css("float","left")
            .css("position","relative")
        /*.css("position","absolute")
         .css("left", "0px")
         .css("top", "0px")
         .css("padding", 0)
         .css("border", "2px solid");*/

        $("#kesir",container).append("<div id='kesirPay'>");
        $("#kesirPay").css("text-align","center");
        if (this.amac=="ornek")
            $("#kesirPay").html("347 895").css("line-height","24px");
        else if (this.amac=="soru")
            $("#kesirPay").html(format(pay, {places:3})).css("line-height","24px");

        $("#kesir",container).append("<div id='kesirIsareti'>");
        $('#kesirIsareti').css("position","absolute")
            .css("left", "px")
            .css("top", "22px")
            .css("width", "90px")
            .css("height", "1px")
            .css("padding", 0)
            .css("border-top", "2px solid");

        $("#kesir",container).append("<div id='kesirPayda'>");

        if (this.amac=="ornek")
            $("#kesir #kesirPayda",container).append("1000");
        else if (this.amac=="soru")
            $("#kesir #kesirPayda",container).append(payda);
        $("#kesirPayda").css("text-align","center");

        $("#soruTekliInput",Interaction.container).append("<div id='esittir'>");

        $("#esittir")
            .css("height", "45px")
            .css("width","20px")
            .css("float","left")
            .css("line-height","45px")
            .css("text-align","center")
            .html("=");


        $("#soruTekliInput",Interaction.container).append("<div id='input'>");

        $("#input")
            .css("height", "45px")
            .css("width","60px")
            .css("float","left")
            .css("line-height","45px")
            .css("text-align","center")
            .css("padding-top","6px");

        if (this.amac=="soru"){
            var girdi=Interaction.appendInput({
                width:"80px",
                fontSize:"20px",
            },true,true);
            $(Interaction.inputs[0]).attr('maxlength', '7')
            $("#soruTekliInput #input",Interaction.container).append(girdi);
        }
        else if (this.amac=="ornek")
            $("#soruTekliInput #input",Interaction.container).append("347,895");

        // cok inputlu
        $(this.anadiv, Interaction.container).append("<div id='SoruCokluInput'>");
        $("#SoruCokluInput").css("width","261px")
            .css("height","160px")
            .css("margin","auto")
            .css("position","absolute")
            //.css("bottom","20px")
            .css("right","48px")
//			.css("right","0")
            .css("top","10px")
            .css("font-size","20px")
            .css("border","solid 1px "+tabloStrokeRenk);



        // Tam Kısım
        $("#SoruCokluInput",container).append("<div id=tamKisim>");
        $("#tamKisim").css("width","140px");
        $("#tamKisim").css("height","30px");
        $("#tamKisim").css("position","absolute");
        $("#tamKisim").css("top","0px");
        $("#tamKisim").css("left","0px");
        $("#tamKisim").css("margin","auto")
            .css("border-right","solid 1px "+tabloStrokeRenk)
            .css("background-color",tabloMilyonlarFillRenk)
        $("#tamKisim").css("font-size","small");
        $("#tamKisim").css("font-weight","bold");

        $("#tamKisim", container).append("<div class='yaziBolukler'>");
        $("#tamKisim .yaziBolukler").html("Tam Kısmı");

        // Kesir kısım
        $("#SoruCokluInput",container).append("<div id=kesirKisim>");
        $("#kesirKisim").css("width","120px");
        $("#kesirKisim").css("height","30px");
        $("#kesirKisim").css("position","absolute");
        $("#kesirKisim").css("top","0px");
        $("#kesirKisim").css("left","140px");
        //$("#milyonlarYuz").css("right","0");
        $("#kesirKisim").css("margin","auto")
            .css("border-left","solid 1px "+tabloStrokeRenk)
            .css("background-color",tabloBinlerFillRenk)
        $("#kesirKisim").css("font-size","small");
        $("#kesirKisim").css("font-weight","bold");

        $("#kesirKisim", container).append("<div class='yaziBolukler'>");
        $("#kesirKisim .yaziBolukler").html("Kesir Kısmı");


        $("#SoruCokluInput",container).append("<div id='yuzler' >");

        $("#yuzler").css("width","40px");
        $("#yuzler").css("height","130px");
        $("#yuzler").css("position","absolute");
        $("#yuzler").css("top","30px");
        $("#yuzler").css("left","0px");
        //$("#milyonlarYuz").css("right","0");
        $("#yuzler").css("margin","auto")
            .css("border","solid 1px "+tabloStrokeRenk)
            .css("background-color", tabloMilyonlarFillRenk)
        $("#yuzler").css("border-left","none").css("border-bottom","none");
        $("#yuzler").css("font-size","medium");

        $("#yuzler",container).append("<div class='yatay'>");
        $("#yuzler .yatay").html("Yüzler <br> Basamağı");

        $("#SoruCokluInput #yuzler",container).append("<div id='girdiYuzler' >");
        $("#girdiYuzler").css("width","40px")
            .css("height","40px")
            .css("border","solid 1px "+tabloStrokeRenk)
            //.css("border-bottom", "none")
            .css("position","absolute")
            .css("bottom","0px")
            .css("left","0px")
            .css("margin","auto")
            .css("border-left","none");
        //.css("font-size","medium").html("ok");

        if (this.amac=="soru"){
            var yuzler=Interaction.appendInput({},true,true);
            $(Interaction.inputs[1]).attr('maxlength', '1').attr("id","inputYuzler");
            $("#girdiYuzler",container).append(yuzler);
        }
        /*else if (this.amac=="soru"){
         $("#girdiYuzler",container).append(yuzler);

         }
         */


        $("#inputYuzler")
            .css("position","absolute")
            .css("bottom","0")
            .css("left","0")
            .css("right","0")
            .css("top","0")
            .css("margin","auto")
            .css("height","30px")
            .css("width","30px");

        // onlar
        $("#SoruCokluInput",container).append("<div id='onlar' >");
        $("#onlar").css("width","40px");
        $("#onlar").css("height","130px");
        $("#onlar").css("position","absolute");
        $("#onlar").css("top","30px");
        $("#onlar").css("left","40px");
        //$("#milyonlarYuz").css("right","0");
        $("#onlar").css("margin","auto")
            .css("border","solid 1px "+tabloStrokeRenk)
            .css("background-color", tabloMilyonlarFillRenk);
        $("#onlar").css("border-bottom","none");
        $("#onlar").css("font-size","medium");

        $("#onlar",container).append("<div class='yatay'>");
        $("#onlar .yatay").html("Onlar <br> Basamağı");


        $("#SoruCokluInput #onlar",container).append("<div id='girdiOnlar' >");
        $("#girdiOnlar").css("width","40px")
            .css("height","40px")
            .css("border","solid 1px "+tabloStrokeRenk)
            //.css("border-bottom", "none")
            .css("position","absolute")
            .css("bottom","0px")
            .css("left","0px")
            .css("margin","auto")
            .css("border-left","none");
        //.css("font-size","medium").html("ok");
        if (this.amac=="soru"){
            var onlar=Interaction.appendInput({},true,true);
            $(Interaction.inputs[2]).attr('maxlength', '1').attr("id","inputOnlar");
            $("#girdiOnlar",container).append(onlar);
        }


        $("#inputOnlar")
            .css("position","absolute")
            .css("bottom","0")
            .css("left","0")
            .css("right","0")
            .css("top","0")
            .css("margin","auto")
            .css("height","30px")
            .css("width","30px");


        // birler
        $("#SoruCokluInput",container).append("<div id='birler' >");
        $("#birler").css("width","40px");
        $("#birler").css("height","130px");
        $("#birler").css("position","absolute");
        $("#birler").css("top","30px");
        $("#birler").css("left","80px");
        //$("#milyonlarYuz").css("right","0");
        $("#birler").css("margin","auto");
        $("#birler").css("border","solid 1px "+tabloStrokeRenk)
            .css("background-color", tabloMilyonlarFillRenk);
        $("#birler").css("border-bottom","none");
        $("#birler").css("font-size","medium");

        $("#birler",container).append("<div class='yatay'>");
        $("#birler .yatay").html("Birler <br> Basamağı");

        $("#SoruCokluInput #birler",container).append("<div id='girdiBirler' >");
        $("#girdiBirler").css("width","40px")
            .css("height","40px")
            .css("border","solid 1px "+tabloStrokeRenk)
            //.css("border-bottom", "none")
            .css("position","absolute")
            .css("bottom","0px")
            .css("left","0px")
            .css("margin","auto")
            .css("border-left","none");
        //.css("font-size","medium").html("ok");
        if (this.amac=="soru"){
            var birler=Interaction.appendInput({},true,true);
            $(Interaction.inputs[3]).attr('maxlength', '1').attr("id","inputBirler");
            $("#girdiBirler",container).append(birler);
        }
        $("#inputBirler")
            .css("position","absolute")
            .css("bottom","0")
            .css("left","0")
            .css("right","0")
            .css("top","0")
            .css("margin","auto")
            .css("height","30px")
            .css("width","30px");

        // Virgül

        $("#SoruCokluInput",container).append("<div id='virgul' >");
        $("#virgul").css("width","20px")
            .css("height","160px")
            .css("position","absolute")
            .css("top","0px")
            .css("left","120px")
            .css("margin","auto")
            .css("border","solid 1px "+tabloStrokeRenk)
            .css("background-color", "white")
            .css("border-top","none")
            .css("font-size","medium")
            .css("text-align","center")
            .css("font-size","40px")
            .css("line-height","270px")
            .html(",");


        // Kesir kısmı yatayşarı

        // Onda birler
        $("#SoruCokluInput",container).append("<div id='ondaBirler' >");
        $("#ondaBirler").css("width","40px");
        $("#ondaBirler").css("height","130px");
        $("#ondaBirler").css("position","absolute");
        $("#ondaBirler").css("top","30px");
        $("#ondaBirler").css("left","141px");
        //$("#milyonlarYuz").css("right","0");
        $("#ondaBirler").css("margin","auto");
        $("#ondaBirler").css("border","solid 1px "+tabloStrokeRenk)
            .css("background-color", tabloBinlerFillRenk);
        $("#ondaBirler").css("border-bottom","none");
        $("#ondaBirler").css("font-size","medium");

        $("#ondaBirler",container).append("<div class='yatay'>");
        $("#ondaBirler .yatay").html("Onda Birler <br> Basamağı");

        $("#SoruCokluInput #ondaBirler",container).append("<div id='girdiOndaBirler' >");
        $("#girdiOndaBirler").css("width","40px")
            .css("height","40px")
            .css("border","solid 1px "+tabloStrokeRenk)
            //.css("border-bottom", "none")
            .css("position","absolute")
            .css("bottom","0px")
            .css("left","0px")
            .css("margin","auto")
            .css("border-left","none");
        //.css("font-size","medium").html("ok");
        if (this.amac=="soru"){
            var ondaBirler=Interaction.appendInput({},true,true);
            $(Interaction.inputs[4]).attr('maxlength', '1').attr("id","inputOndaBirler");
            $("#girdiOndaBirler",container).append(ondaBirler);
        }
        $("#inputOndaBirler")
            .css("position","absolute")
            .css("bottom","0")
            .css("left","0")
            .css("right","0")
            .css("top","0")
            .css("margin","auto")
            .css("height","30px")
            .css("width","30px");



        // Yüzde birler
        $("#SoruCokluInput",container).append("<div id='yuzdeBirler' >");
        $("#yuzdeBirler").css("width","40px");
        $("#yuzdeBirler").css("height","130px");
        $("#yuzdeBirler").css("position","absolute");
        $("#yuzdeBirler").css("top","30px");
        $("#yuzdeBirler").css("left","180px");
        //$("#milyonlarYuz").css("right","0");
        $("#yuzdeBirler").css("margin","auto");
        $("#yuzdeBirler").css("border","solid 1px "+tabloStrokeRenk)
            .css("background-color", tabloBinlerFillRenk);
        $("#yuzdeBirler").css("border-bottom","none");
        $("#yuzdeBirler").css("font-size","medium");

        $("#yuzdeBirler",container).append("<div class='yatay'>");
        $("#yuzdeBirler .yatay").html("Yüzde Birler <br> Basamağı");

        $("#SoruCokluInput #yuzdeBirler",container).append("<div id='girdiYuzdeBirler' >");
        $("#girdiYuzdeBirler").css("width","40px")
            .css("height","40px")
            .css("border","solid 1px "+tabloStrokeRenk)
            .css("position","absolute")
            .css("bottom","0px")
            .css("left","0px")
            .css("margin","auto")
            .css("border-left","none");
        //.css("font-size","medium").html("ok");
        if (this.amac=="soru"){
            var yuzdeBirler=Interaction.appendInput({},true,true);
            $(Interaction.inputs[5]).attr('maxlength', '1').attr("id","inputYuzdeBirler");
            $("#girdiYuzdeBirler",container).append(yuzdeBirler);
        }
        $("#inputYuzdeBirler")
            .css("position","absolute")
            .css("bottom","0")
            .css("left","0")
            .css("right","0")
            .css("top","0")
            .css("margin","auto")
            .css("height","30px")
            .css("width","30px");


        // Binde Birler
        $("#SoruCokluInput",container).append("<div id='bindeBirler' >");
        $("#bindeBirler").css("width","40px");
        $("#bindeBirler").css("height","130px");
        $("#bindeBirler").css("position","absolute");
        $("#bindeBirler").css("top","30px");
        $("#bindeBirler").css("left","220px");
        //$("#milyonlarYuz").css("right","0");
        $("#bindeBirler").css("margin","auto");
        $("#bindeBirler").css("border","solid 1px "+tabloStrokeRenk)
            .css("background-color", tabloBinlerFillRenk);
        $("#bindeBirler").css("border-bottom","none");
        $("#bindeBirler").css("font-size","medium");

        $("#bindeBirler",container).append("<div class='yatay'>");
        $("#bindeBirler .yatay").html("Binde Birler <br> Basamağı");


        $("#SoruCokluInput #bindeBirler",container).append("<div id='girdiBindeBirler' >");
        $("#girdiBindeBirler").css("width","40px")
            .css("height","40px")
            .css("border","solid 1px "+tabloStrokeRenk)

            .css("position","absolute")
            .css("bottom","0px")
            .css("left","0px")
            .css("margin","auto")
            .css("border-left","none");
        //.css("font-size","medium").html("ok");
        if (this.amac=="soru"){
            var bindeBirler=Interaction.appendInput({},true,true);
            $(Interaction.inputs[6]).attr('maxlength', '1').attr("id","inputBindeBirler");
            $("#girdiBindeBirler",container).append(bindeBirler);
        }
        $("#inputBindeBirler")
            .css("position","absolute")
            .css("bottom","0")
            .css("left","0")
            .css("right","0")
            .css("top","0")
            .css("margin","auto")
            .css("height","30px")
            .css("width","30px");


        $(".yaziBolukler").css("text-align","center");
        $(".yaziBolukler").css("position","absolute");
        $(".yaziBolukler").css("width","120px");
        $(".yaziBolukler").css("height","14px");
        //$(".yazi").css("height","210px");
        $(".yaziBolukler").css("top","0");
        $(".yaziBolukler").css("bottom","0");
        $(".yaziBolukler").css("left","0");
        $(".yaziBolukler").css("right","0");
        $(".yaziBolukler").css("margin","auto");

        $("input")
            .css("text-align","center")
            .css("border-color",inputStrokeRenk)
            .addClass("input");

        $(".yatay").css("-webkit-transform","rotate(-90deg)");
        $(".yatay").css("transform","rotate(-90deg)");
        $(".yatay").css("-ms-transform","rotate(-90deg)");
        $(".yatay").css("-moz-transform","rotate(-90deg)");
        $(".yatay").css("-o-transform","rotate(-90deg)");


        //$("#yuzler .yazi").css("-writing-mode","tb-rl");
        //-webkit-transform:rotate(-90deg);
        $(".yatay").css("text-align","left");
        $(".yatay").css("position","absolute");
        $(".yatay").css("height","6px");
        $(".yatay").css("width","130px");
        $(".yatay").css("bottom","110px");
        $(".yatay").css("left","-55px");
        //$("#yatay").css("right","200px");
        //$("#yatay").css("margin","auto");
        $(".yatay").css("font-size","small");

    }
    // cevaplar
    if(this.amac=="soru"){


        for(var i=0; i<=6;i++){
            if(i==3){
                $(Interaction.container).append("<div id='cokluInputCevapVirgul' class='cokluCevap'>");
                $("#cokluInputCevapVirgul").css({
                    width:"20px",
                    height:"40px",
                    border:"solid 1px #255B63",
                    borderLeft:"none",
                    bottom:"75px",
                    right:(40*i+48)+"px",
                    position:"absolute",
                    fontSize:"40px",
                    textAlign:"center"
                }).html(",");

            }
            else if(i>3 && i<6){
                $(Interaction.container).append("<div id='cokluInputCevap"+(i-1)+"' class='cokluInputCevap cokluCevap'>");
                $("#cokluInputCevap"+(i-1)).css({right:(40*i+28)+"px"});
            }
            else if(i==6){
                $(Interaction.container).append("<div id='cokluInputCevap"+(i-1)+"'  class='cokluInputCevap cokluCevap'>");
                $("#cokluInputCevap"+(i-1)).css({right:(40*i+28)+"px"});
            }
            else{
                $(Interaction.container).append("<div id='cokluInputCevap"+(i)+"'  class='cokluInputCevap cokluCevap'>");
                $("#cokluInputCevap"+(i)).css({right:(40*i+48)+"px"});
            }
        }

        $(".cokluInputCevap").css({
            width:"40px",
            height:"40px",
            border:"solid 1px #255B63",
            borderLeft:"none",
            bottom:"75px",
            position:"absolute",
            textAlign:"center",
            fontSize:"40px",
            color:"green"
        });
        $(".cokluCevap").css("opacity","0").css("font-weight","bold");
        $("#cokluInputCevap5").css({border:"solid 1px #255B63"});


        $(Interaction.container).append("<div id='soruTekliInputCevap'>");
        $("#soruTekliInputCevap").css("width","200px")
            .css("height","50px")
            .css("margin","auto")
            .css("position","absolute")
            //.css("bottom","20px")
            .css("left","30px")
            .css("top","150px")
            .css("font-size","20px")
            .css("float","left")
            .css("opacity","0");
        //.css("border","solid 1px black");

        $("#soruTekliInputCevap",Interaction.container).append("<div id='kesirCevap'>");
        $("#kesirCevap")
            .css("width", "90px")
            .css("height", "45px")
            .css("float","left")
            .css("position","relative")
        /*.css("position","absolute")
         .css("left", "0px")
         .css("top", "0px")
         .css("padding", 0)
         .css("border", "2px solid");*/

        $("#kesirCevap",Interaction.container).append("<div id='kesirPayCevap'>");
        $("#kesirPayCevap").css("text-align","center");

        $("#kesirPayCevap").html(format(pay, {places:3})).css("line-height","24px");

        $("#kesirCevap",Interaction.container).append("<div id='kesirIsaretiCevap'>");
        $('#kesirIsaretiCevap').css("position","absolute")
            .css("left", "px")
            .css("top", "22px")
            .css("width", "90px")
            .css("height", "1px")
            .css("padding", 0)
            .css("border-top", "2px solid");

        $("#kesirCevap",Interaction.container).append("<div id='kesirPaydaCevap'>");


        $("#kesirPaydaCevap").html(payda);
        $("#kesirPaydaCevap").css("text-align","center");

        $("#soruTekliInputCevap",Interaction.container).append("<div id='esittirCevap'>");

        $("#esittirCevap")
            .css("height", "45px")
            .css("width","20px")
            .css("float","left")
            .css("line-height","45px")
            .css("text-align","center")
            .html("=");


        $("#soruTekliInputCevap",Interaction.container).append("<div id='inputCevap'>");

        $("#inputCevap")
            .css("height", "45px")
            .css("width","60px")
            .css("float","left")
            .css("line-height","45px")
            .css("text-align","center")
            .css("font-size","40px");



        //$("#soruTekliInput #input",Interaction.container).append(girdi);

    }

};
format = function(num, options) {
    options.point=options.point ||',';
    options.group=options.group ||' ';
    options.places=options.places||0;
    options.suffix=options.suffix||'';
    options.prefix=options.prefix||'';

    regex = /(\d+)(\d{3})/;
    result = ((isNaN(num) ? 0 : Math.abs(num)).toFixed(options.places)) + '';

    for (result = result.replace('.', options.point); regex.test(result) && options.group; result=result.replace(regex, '$1'+options.group+'$2')) {};
    return (num < 0 ? '-' : '') + options.prefix + result + options.suffix;
};
