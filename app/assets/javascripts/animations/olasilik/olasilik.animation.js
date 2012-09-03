var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        Animation.animDiv = Util.dom({parent:Animation.container, tag:'div', css:animationDivStyle});

        Animation.firstDiv = Util.dom({parent:Animation.animDiv, tag:'div', css:firstDivStyle,
            html:'<div id="textt" style="position:absolute;top:18px;left:0px;">Bir olayın olma olasılığı =</div>' +
                '<div id="fract" style="position:absolute;top:0px;left:210px;height:51px;width:280px;padding:0;margin:0;line-height:25px;"><div id="nomt"></div><div id="linet"></div><div id="denomt"></div></div>'
        });

        $('#linet').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#nomt').css("text-align", "center")
            .css("height", "25px");
        $('#nomt').html("İstenen olayın çıktı sayısı");

        $('#denomt').css("text-align", "center")
            .css("height", "25px");
        $('#denomt').html("Mümkün olan tüm çıktıların sayısı");

        Animation.secondDiv = Util.dom({parent:Animation.animDiv, tag:'div', css:secondDivStyle,
            html:'<div id="textt2" style="position:absolute;top:20px;left:140px;">2 gelme olasılığı = </div>' +
                '<div id="fracs" style="position:absolute;top:3px;left:296px;height:51px;width:30px;padding:0;margin:0;line-height:25px;"><div id="noms"></div><div id="lines"></div><div id="denoms"></div></div>'
        });

        $('#lines').css("height", "1px")
            .css("border-top", "1px solid")
            .css("padding", 0);

        $('#noms').css("text-align", "center")
            .css("height", "25px");
        $('#noms').html(1);

        $('#denoms').css("text-align", "center")
            .css("height", "25px");
        $('#denoms').html(6);

    }
}