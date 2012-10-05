var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        $(container).append("<div id='ornek'>");
        $("#ornek").css("width","120px")
            .css("height","130px")
            .css("margin","auto")
            .css("position","absolute")
            .css("left","290px")
            .css("top","10px");

        var islem=new LongMultiplication(15,07,"ornek",30);
        //var islem=new LongMultiplication(178,172,"ornek");
        islem.doldur();
        islem.basla(1000,1000);

        Main.animationFinished(47000);

    }
}