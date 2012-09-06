var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        Animation.referencePoint = new Point(300,50);
        Animation.showEqualSets();
    },
    showEqualSets:function(){
        var set1 = new Set({type:Set.ELEMENTS,elements:[1,2,3,4,5]});
        var set2 = new Set({type:Set.ELEMENTS,elements:[1,2,3,4,5]});
        Set.animateEqualSets({
            container:Animation.container,
            position:new Point(275,10),
            sets:[set1 , set2],
            letters:['A','B'],
            callback:function(){
                Animation.showText("A = B <br/> İki küme eşit olabilir");
                Main.animationProject.activeLayer.animate({
                    style:{opacity:0},
                    duration:1000,
                    delay:2000,
                    callback:function(){
                        this.opacity = 1;
                        Main.animationProject.activeLayer.removeChildren();
                        Animation.showDisjointSets();
                    }
                })
            }
        });
    },
    showDisjointSets:function(){
        var set1 = new Set({type:Set.ELEMENTS,elements:[1,2,3,4,5]});
        var set2 = new Set({type:Set.ELEMENTS,elements:[6,7,8,9]});
        Set.animateDisjointSets({
            container:Animation.container,
            position:new Point(275,10),
            sets:[set1 , set2],
            letters:['A','B'],
            callback:function(){
                Animation.showText("A = B <br/> İki küme ayrık olabilir");
                Main.animationProject.activeLayer.animate({
                    style:{opacity:0},
                    duration:1000,
                    delay:2000,
                    callback:function(){
                        this.opacity = 1;
                        Main.animationProject.activeLayer.removeChildren();
                        Animation.showSubsets();
                    }
                })
            }
        });
    },
    showSubsets:function(){
        var set1 = new Set({type:Set.ELEMENTS,elements:[1,2,3,4,5]});
        var set2 = new Set({type:Set.ELEMENTS,elements:[4,5]});
        Set.animateSets({
            container:Animation.container,
            position:new Point(275,10),
            sets:[set1 , set2],
            letters:['A','B'],
            callback:function(){
                Animation.showText("A &#8834; B <br/> İki kümeden biri diğerinin alt kümesi olabilir");
                Main.animationProject.activeLayer.animate({
                    style:{opacity:0},
                    duration:1000,
                    delay:2000,
                    callback:function(){
                        this.opacity = 1;
                        Main.animationProject.activeLayer.removeChildren();
                        Animation.showIntersectingSets();
                    }
                })
            }
        });
    },
    showIntersectingSets:function(){
        var set1 = new Set({type:Set.ELEMENTS,elements:[1,2,3,4,5]});
        var set2 = new Set({type:Set.ELEMENTS,elements:[4,5,6,7,8]});
        Set.animateSets({
            container:Animation.container,
            position:new Point(225,10),
            sets:[set1 , set2],
            letters:['A','B'],
            callback:function(){
                Animation.showText("B &#8745;  A <br/> İki küme kesişebilir",false);
                AnimationManager.delay(function(){Main.animationFinished()},4000);
            }
        });
    },
    showText:function(text,remove){
        if(remove == undefined)
            remove = true;
        var a = Util.dom({
            tag:'div',
            parent:Animation.container,
            css:{
                position:'absolute',
                width:"100%",
                textAlign:'center',
                bottom:'10px',
                left:'0px',
                opacity:0
            },
            html:text
        });
        $(a).animate({opacity:1},1000).delay(1000)

        if(remove)
            $(a).animate({opacity:0},1000, $(a).remove)
    }

}