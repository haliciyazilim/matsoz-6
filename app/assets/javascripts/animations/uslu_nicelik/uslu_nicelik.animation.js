var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        Animation.animDiv = Util.dom({parent:Animation.container, tag:'div', css:animDivStyle,
        html:'<div id="ttext" style="font-size:20px;">a, b, n birer doğal sayı olmak üzere;</div>' +
            '<div id="bbase" style="position:absolute;top:90px;left:0px;">2</div><div id="pow" style="position:absolute;top:80px;left:20px;font-size:20px;">1</div>' +
            '</div><div id="eq" style="position:absolute;top:90px;left:40px;">=</div>' +
            '<div id="ans" style="position:absolute;top:90px;left:70px;"> <span id="s1" style="opacity:0;"> 2 x 2 = </span><span id="sl">2</span></div>'
        });

        $('#sl').css({
            position:'absolute',
            left:'0px',
            top:'0px'
        });
        $('#sl').delay(1000).animate({left:'+:100px'},1000,'easeInOutQuad');
    }
};