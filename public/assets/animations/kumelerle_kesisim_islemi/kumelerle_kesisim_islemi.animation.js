var Animation = {
    images:[],
    init:function(container){
        Animation.container = container;

        var hizB=1000;
        var hizA=1000;
        var resimler = ['/assets/animations/kumelerle_kesisim_islemi/kes_kume_01.png',
            '/assets/animations/kumelerle_kesisim_islemi/kes_kume_02.png',
            '/assets/animations/kumelerle_kesisim_islemi/kes_kume_03.png',
            '/assets/animations/kumelerle_kesisim_islemi/kes_kume_04.png',
            '/assets/animations/kumelerle_kesisim_islemi/kes_kume_05.png',
            '/assets/animations/kumelerle_kesisim_islemi/kes_kume_06.png',
            '/assets/animations/kumelerle_kesisim_islemi/kes_kume_07.png'];

        var kumeId=["kume_siir_sol","kume_siir_sag","kume_bebe_sol","kume_bebe_sag","kume_bos_sol","kume_bos_sag","kume_birlesim"]

        for(var i=0; i<kumeId.length;i++){
            $(container).append("<img id='"+kumeId[i]+"' class='ortak' src='" + resimler[i] + "'>");
            $("#"+kumeId[i]).css("opacity","0");
        }

        $(".ortak").css({
            position: "absolute",
            top: "0",
            bottom: "0",

            margin: "auto",
            width: "319px",
            height: "170px"
            //opacity:"0"
        });

        $("#"+kumeId[4]+", #"+kumeId[5]).css("width","480px").css("left","154px");


        $("#"+kumeId[0]).css("left","10px");
        $("#"+kumeId[1]).css("right","10px");

        $("#"+kumeId[2]).css("left","10px");
        $("#"+kumeId[3]).css("right","10px");


        $("#"+kumeId[0]+", #"+kumeId[1]+", #"+kumeId[2]+", #"+kumeId[3]).delay(hizB).animate({opacity:"1"},hizA);
        $("#"+kumeId[0]+", #"+kumeId[2]).delay(hizB).animate({left:"154px"},hizA*3);
        $("#"+kumeId[1]+", #"+kumeId[3]).delay(hizB).animate({right:"154px"},hizA*3);

        $("#"+kumeId[0]+", #"+kumeId[1]+", #"+kumeId[2]+", #"+kumeId[3]).delay(hizB).animate({opacity:"0"},hizA);

        $("#"+kumeId[4]).delay(hizB*3+hizA*4).animate({opacity:"1"},hizA).delay(hizB).animate({opacity:"0"},hizA);
        $("#"+kumeId[5]).delay(hizB*4+hizA*5).animate({opacity:"1"},hizA,Main.animationFinished);


    }
}
;
