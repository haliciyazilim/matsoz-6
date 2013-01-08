var Animation = {
    images:[
        {
            id:'dicee',
            src:'/assets/animations/olasilik/olasilik_zar.png'
        }
    ],
	init:function(container){
        Animation.container = container;

        var firstDivStart = 1000;
        var diceStart = firstDivStart+6000;
        var secondDivStart = diceStart + 2000;

        Animation.animDiv = Util.dom({parent:Animation.container, tag:'div', css:animationDivStyle});

        Animation.firstDiv = Util.dom({parent:Animation.animDiv, tag:'div', css:firstDivStyle,
            html:'<div id="textt" style="opacity:0;position:absolute;top:18px;left:2px;padding:0;margin:0;">Bir olayın olma olasılığı =</div>' +
                '<div id="fract" style="position:absolute;left:210px;height:52px;width:280px;padding:0;margin:0;line-height:25px;">' +
                '<div id="nomt" style="opacity:0;"></div><div id="linet" style="opacity:0;"></div><div id="denomt" style="opacity:0;"></div></div>'
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
            html:'<div id="textt2" style=opacity:0;position:absolute;top:20px;left:140px;">2 gelme olasılığı = </div>' +
                '<div id="fracs" style="position:absolute;top:3px;left:296px;height:51px;width:30px;padding:0;margin:0;line-height:25px;">' +
                '<div id="noms" style="opacity:0;"></div><div id="lines" style="opacity:0;"></div><div id="denoms" style="opacity:0;"></div></div>'
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

        $('#textt').delay(firstDivStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#linet').delay(firstDivStart+1500).animate({opacity:1},1000,'easeInOutQuad');
        $('#nomt').delay(firstDivStart+3000).animate({opacity:1},1000,'easeInOutQuad');
        $('#denomt').delay(firstDivStart+4500).animate({opacity:1},1000,'easeInOutQuad');

        pp = new Raster('dicee');
        pp.position = new Point(260,-30);

        pp.animate({
            style:{
                position:pp.position.add(0,150)
            },
            duration:1500,
            delay:diceStart,
            animationType:'easeOutBounce'
        });

        $('#textt2').delay(secondDivStart).animate({opacity:1},1000,'easeInOutQuad');
        $('#lines').delay(secondDivStart+1500).animate({opacity:1},1000,'easeInOutQuad');
        $('#noms').delay(secondDivStart+1500).animate({opacity:1},1000,'easeInOutQuad');
        $('#denoms').delay(secondDivStart+1500).animate({opacity:1},1000,'easeInOutQuad',function(){Main.animationFinished(1000);});

    }
}
;
