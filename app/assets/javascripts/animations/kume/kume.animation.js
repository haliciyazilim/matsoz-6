var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var animStart = 1000;
        var elementsStart = animStart+6000;
        var vennDrawStart = elementsStart+5000;

        Animation.set = new Set({type:Set.ELEMENTS, elements:["a","e","ı","i","o","ö","u","ü"]});
        Animation.set.definition = "Alfabemizdeki sesli harfler";

        Animation.animDiv = document.createElement('div');
        Animation.animDiv.id = 'animationDiv';
        $(Animation.container).append(Animation.animDiv);

        $(Animation.animDiv).css({
            position:'absolute',
            top:'30px',
            left:'50px',
        //    border:'1px solid',
            width:'480px',
            height:'150px',
            fontSize:'24px',
            opacity:0
        });
        $(Animation.animDiv).delay(animStart).animate({opacity:1}, 1000, 'easeInOutQuad');

        $(Animation.animDiv).html('<div id="mainText">Alfabemizdeki sesli harflerin kümesi:</div><div id="definitionStr"></div><div id="elementsStr"></div>')
        $('#definitionStr').css({
            position:'absolute',
            top:'60px',
            left:'60px',
            opacity:0
        });
        $('#definitionStr').html(Animation.set.getDefinitionString("A"));
        $('#definitionStr').delay(animStart+2000).animate({opacity:1}, 1000, 'easeInOutQuad');

        $('#elementsStr').css({
            position:'absolute',
            top:'100px',
            left:'60px',
            opacity:0
        });
        $('#elementsStr').html(Animation.set.getElementsString("A"));
        $('#elementsStr').delay(animStart+4000).animate({opacity:1}, 1000, 'easeInOutQuad');

        $(Animation.container).append('<div id="vElem"><div id="vL">A</div>' +
                                    '<div id="el1">.a</div><div id="el2">.e</div>' +
                                    '<div id="el3">.ı</div><div id="el4">.i</div>' +
                                    '<div id="el5">.o</div><div id="el6">.ö</div>' +
                                    '<div id="el7">.u</div><div id="el8">.ü</div>' +
                                    '</div>');
        $('#vElem').css({
            position:'absolute',
            top:'28px',
            left:'584px',
            width:'140px',
            height:'140px',
            fontSize:'18px'
        });
        $('#vL').css({
            position:'absolute',
            top:'0px',
            left:'0px',
            fontSize:'20px',
            opacity:0,
        });
        $('#vL').delay(vennDrawStart+2500).animate({opacity:1}, 1000, 'easeInOutQuad',function(){Main.animationFinished();});
        $('#el1').css({
            position:'absolute',
            top:'30px',
            left:'30px',
            opacity:0,
        });
        $('#el2').css({
            position:'absolute',
            top:'20px',
            left:'62px',
            opacity:0,
        });
        $('#el3').css({
            position:'absolute',
            top:'30px',
            left:'98px',
            opacity:0,
        });
        $('#el4').css({
            position:'absolute',
            top:'70px',
            left:'20px',
            opacity:0,
        });
        $('#el5').css({
            position:'absolute',
            top:'60px',
            left:'56px',
            opacity:0,
        });
        $('#el6').css({
            position:'absolute',
            top:'70px',
            left:'94px',
            opacity:0,
        });
        $('#el7').css({
            position:'absolute',
            top:'98px',
            left:'44px',
            opacity:0,
        });
        $('#el8').css({
            position:'absolute',
            top:'98px',
            left:'76px',
            opacity:0,
        });
        for(var i = 1; i < 9; i++){
            $('#el'+i).delay(elementsStart+(i*500)).animate({opacity:1}, 500, 'easeInOutQuad');
        }

        var animationHelper = {
            animate:Item.prototype.animate,
            myAngle:5,
        };
        animationHelper.animate({
            style:{
                myAngle:357,
            },
            duration:2000,
            delay:vennDrawStart,
            animationType:'easeInOutQuad',
            update:function(){
                if(Animation.venn){
                    Animation.venn.remove();
                }
                if(animationHelper.myAngle == 357){
                    Animation.venn = new Path.Circle(new Point(640,84), 70);
                    Animation.venn.strokeColor = "black";
                }
                else{
                    Animation.venn = new Path.ArcByAngle(new Point(640,84), 70, animationHelper.myAngle);
                    Animation.venn.strokeColor = "black";
                }
            }
        });
    }
}