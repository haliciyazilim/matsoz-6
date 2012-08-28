var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        Animation.referencePoint = new Point(300,50);
        Animation.showEqualSets();
    },
    showEqualSets:function(){
        var set1 = new Set({type:Set.ELEMENTS,elements:[1,2,3,4,5]});
        set1.drawVennDiagram(Animation.container,Animation.referencePoint.add(-0,0),"A");
        var set2 = new Set({type:Set.ELEMENTS,elements:[1,2,3,4,5]});
        set2.drawVennDiagram(Animation.container,Animation.referencePoint.add(0,0),"A");
    },
    showDisjointSets:function(){

    },
    showSubsets:function(){

    },
    showIntersectingSets:function(){

    }

}