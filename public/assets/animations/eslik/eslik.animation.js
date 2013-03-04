var Animation = {

	init:function(container){
        Animation.container = container;

    var resimler={
        animasyon:"/assets/animations/eslik/animasyon.gif",
        animasyonSonFrame:"/assets/animations/eslik/animasyon_son_frame.gif",

    };

        gosteri= new Image();
        gosteri.src=resimler.animasyon;
        gosteri.id="gosteri";
        //gosteri.class="animasyon";

        sonFrame= new Image();
        sonFrame.src=resimler.animasyonSonFrame;
        sonFrame.id="sonFrame";
        //sonFrame.class="animasyon";


        $(Animation.container).append(gosteri);
        $(Animation.container).append(sonFrame);

        $("#gosteri, #sonFrame").addClass("animasyon");



        $(".animasyon").css({
            position:"absolute",
            width:"750px",
            height:"170px",
            right:"0",
            left:"0",
            top:"0",
            bottom:"0",
            margin:"auto"
        });
        $("#gosteri").css("z-index","3");
        $("#sonFrame").css("z-index","2");

        //setTimeout(function(){$("#gosteri").remove(); Main.animationFinished()},10000);

        setTimeout(function(){$("#gosteri").css("opacity","0").attr("src",sonFrame.src);  Main.animationFinished()},12000);

    }
}
;
