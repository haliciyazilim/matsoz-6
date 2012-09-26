var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        $(container).append("<div id='aciklama'>");
        $("#aciklama").css({
            position:"absolute",
            width:"100px",
            height:"20px",
            top:"0",
            bottom:"0",
            right:"100px",
            margin:"auto",
            opacity:"0"
        });

        ciz("dikKare",350,90);

        setTimeout(
            function(){
                $("#aciklama").html("Dik kare prizma").animate({opacity:1},1000);
                var cizgi=new Path.Line(new Point(koordinat[0][0].x,koordinat[0][0].y),new Point(koordinat[1][1].x,koordinat[1][1].y));
            }

            ,3000);

        Main.animationFinished(3000);


    }
}