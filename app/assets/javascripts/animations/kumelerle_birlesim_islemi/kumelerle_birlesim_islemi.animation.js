var Animation = {
    images:[],
	init:function(container){
		Animation.container = container;

        var hizB=1000;
        var hizA=1000;
        var resimler = ['/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_01.png',
            '/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_02.png',
            '/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_03.png',
            '/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_04.png',
            '/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_05.png',
            '/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_06.png',
            '/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_07.png'];

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

        $("#"+kumeId[6]).css({
          width:"492px",
          left:"0px",
          right:"0px"
        });

        $("#"+kumeId[0]).css("left","10px");
        $("#"+kumeId[1]).css("right","10px");

        $("#"+kumeId[2]).css("left","10px");
        $("#"+kumeId[3]).css("right","10px");

        $("#"+kumeId[4]).css("left","150px");
        $("#"+kumeId[5]).css("right","150px");


        $("#"+kumeId[0]+", #"+kumeId[1]+", #"+kumeId[2]+", #"+kumeId[3]).delay(hizB).animate({opacity:"1"},hizA);
        $("#"+kumeId[0]+", #"+kumeId[2]).delay(hizB).animate({left:"150px"},hizA*3);
        $("#"+kumeId[1]+", #"+kumeId[3]).delay(hizB).animate({right:"150px"},hizA*3);

        $("#"+kumeId[0]+", #"+kumeId[1]+", #"+kumeId[2]+", #"+kumeId[3]).delay(hizB).animate({opacity:"0"},hizA);

        $("#"+kumeId[4]+", #"+kumeId[5]).delay(hizB*3+hizA*4).animate({opacity:"1"},hizA);


        //$("#"+kumeId[5]).delay(hizB).animate({left:"170px",right:"0"},hizA);
        //$("#"+kumeId[4]).delay(hizB).animate({right:"170px",left:"0"},hizA);

        $("#"+kumeId[4]+", #"+kumeId[5]).delay(hizB*2).animate({opacity:"0"},hizA);

        $("#"+kumeId[6]).delay(hizB*5+hizA*5).animate({opacity:"1"},hizA);

        Main.animationFinished(10000);
	}
}