var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        var fractionsDiv = Util.dom({parent:Animation.container, tag:'div', css:fractionsDivStyle,
            html:'<div id="firstF" style="position:absolute;top:0px;left:0px;width:20px;height:33px;padding:0;margin:0;">' +
                    '<div id="firstNom" style="text-align:center;height:16px;">10</div>' +
                    '<div id="firstLine" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="firstDenom" style="text-align:center;height:16px;">16</div>' +
                '</div>' +
                '<div id="secondF" style="position:absolute;top:0px;left:70px;width:20px;height:33px;padding:0;margin:0;">' +
                    '<div id="secondNom" style="text-align:center;height:16px;">1</div>' +
                    '<div id="secondLine" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="secondDenom" style="text-align:center;height:16px;">4</div>' +
                '</div>' +
                '<div id="thirdF" style="position:absolute;top:0px;left:140px;width:20px;height:33px;padding:0;margin:0;">' +
                    '<div id="thirdNom" style="text-align:center;height:16px;">7</div>' +
                    '<div id="thirdLine" style="height:1px;padding:0;border-top:1px solid;"></div>' +
                    '<div id="thirdDenom" style="text-align:center;height:16px;">8</div>' +
                '</div>'
        });
    }
}