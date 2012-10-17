var Animation = {

	init:function(container){
        Animation.container = container;

    var resimler={
        animasyon:"/assets/animations/eslik/animasyon.gif",
        animasyonSonFrame:"/assets/animations/eslik/animasyon_son_frame.gif",
        kagit:"/assets/animations/eslik/kagit.png"
    };

        kagit= new Image();
        kagit.src=resimler.kagit;
        kagit.id="kagit";

        gosteri= new Image();
        gosteri.src=resimler.animasyon;
        gosteri.id="gosteri";
        //gosteri.class="animasyon";

        sonFrame= new Image();
        sonFrame.src=resimler.animasyonSonFrame;
        sonFrame.id="sonFrame";
        //sonFrame.class="animasyon";

        $(Animation.container).append(kagit);
        $(Animation.container).append(gosteri);
        $(Animation.container).append(sonFrame);

        $("#gosteri, #sonFrame").addClass("animasyon");

        $("#kagit").css({
            position:"absolute",
            width:"89px",
            height:"124px",
            left:"50px",
            top:"0",
            bottom:"0",
            margin:"auto"
        });

        $(".animasyon").css({
            position:"absolute",
            width:"540px",
            height:"170px",
            right:"50px",
            top:"0",
            bottom:"0",
            margin:"auto"
        });
        $("#gosteri").css("z-index","3");
        $("#sonFrame").css("z-index","2");

        //setTimeout(function(){$("#gosteri").remove(); Main.animationFinished()},10000);

        setTimeout(function(){$("#gosteri").css("opacity","0").attr("src",sonFrame.src);  Main.animationFinished()},10000);

    }
}