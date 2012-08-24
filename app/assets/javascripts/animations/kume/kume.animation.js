var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        Animation.set = new Set({type:Set.ELEMENTS, elements:["a","e","ı","i","o","ö","u","ü"]});
        Animation.set.definition = "Alfabemizdeki sesli harfler";

        Main.animationFinished();

    }
}