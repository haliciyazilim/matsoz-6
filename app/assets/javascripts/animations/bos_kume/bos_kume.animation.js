var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        Interaction.kume=new Set({type: Set.SMALLER_THAN, value:0});

        $(container).append("<div id='baslik'>");
        $("#baslik")
            .css("width","450px")
            .css("height","20px")
            .css("position","absolute")
            .css("margin","auto")
            .css("font-size","16px")
            .css("left","0px")
            .css("right","0px")
            .css("top","30px")
            .css("font-size","20px")
            .css("text-align","center")
            //.css("opacity","0")
            //.css("border","1px solid red")
            .html(Interaction.kume.getDefinitionString("A"));

        var venn=new Path.Circle(new Point(250,100),50);
        venn.strokeColor="black";
        venn.opacity="0";

        $(container).append("<div id='kumeIsim'>");
        $("#kumeIsim")
            .css("width","20px")
            .css("height","20px")
            .css("position","absolute")
            .css("margin","auto")
            .css("font-size","16px")
            .css("left","200px")
            .css("top","60px")
            .css("font-size","20px")
            .css("text-align","center")
            .css("opacity","0")
            //.css("border","1px solid red")
            .html("A");

        $(container).append("<div id='parantez'>");
        $("#parantez")
            .css("width","70px")
            .css("height","20px")
            .css("position","absolute")
            .css("margin","auto")
            .css("font-size","16px")
            .css("left","450px")
            .css("top","70px")
            .css("font-size","20px")
            .css("opacity","0")
            //.css("border","1px solid red")
            .html("A = { }");

        $(container).append("<div id='isaret'>");
        $("#isaret")
            .css("width","70px")
            .css("height","20px")
            .css("position","absolute")
            .css("margin","auto")
            .css("font-size","16px")
            .css("left","450px")
            .css("top","140px")
            .css("font-size","20px")
            .css("opacity","0")
            //.css("border","1px solid red")
            .html("A = <dnf style='font-size: 30px'>ø</dfn style>");

        $(container).append("<div id='aciklama'>");
        $("#aciklama")
            .css("width","120px")
            .css("height","20px")
            .css("position","absolute")
            .css("margin","auto")
            .css("font-size","16px")
            .css("left","600px")
            .css("top","105px")
            .css("font-size","20px")
            .css("opacity","0")
            //.css("border","1px solid red")
            .html("A Boş Küme");

        //Interaction.kume.drawVennDiagram(Animation.container,new Point(100,40),"A");
        venn.animate({
            style:{
                opacity:1
            },
            duration:1000,
            delay:1000,
            animationType:"easeInOutQuad"

        });

        $("#kumeIsim").delay(2000).animate({opacity:"1"},1000);
        $("#parantez").delay(3000).animate({opacity:"1"},1000);
        $("#isaret").delay(4000).animate({opacity:"1"},1000);
        $("#aciklama").delay(5000).animate({opacity:"1"},1000);

        Main.animationFinished(6000);

    }
}