var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        $(container).append("<div id='aciklama'>");
        $("#aciklama").css({
            position:"absolute",
            width:"120px",
            height:"20px",
            top:"0",
            bottom:"0",
            right:"100px",
            margin:"auto",
            opacity:"0"
        });

        ciz("dikKare",350,90,"ornek");
        //ciz("egikKare",350,90,"ornek",15000);

//        setTimeout(
//            function(){
//                //Main.animationProject.activeLayer.removeChildren();
//                ciz("egikKare",350,90,"ornek");
//            }
//
//            ,10000);
//setTimeout(
////            function(){
////                //Main.animationProject.activeLayer.removeChildren();
////                ciz("egikKare",350,90,"ornek");
////            }
////
////            ,10000);

//        cizgi=new Path.Line(new Point(270.5,149.5),new Point(332.5,87.5));
//        //cizgi=new Path.Line(new Point(0,149.5),new Point(100,87.5));
//        cizgi.strokeColor="red";

        Main.animationFinished(50000);





    }
}