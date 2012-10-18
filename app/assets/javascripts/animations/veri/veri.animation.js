var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        $(container).append('<img id="mainIm" src="/assets/animations/veri/FUTBOL.jpg" />');
        $('#mainIm').css("width", "757px")
            .css("height", "170px")
            .css("position", "absolute")
            .css("left", "0px")
            .css("bottom", "0px")
            .css("opacity", 0);

        var animStart = 3500;

        $(container).append('<img id="fut" src="/assets/animations/veri/FUTBOL.jpg" />');
        $('#fut')

            .css("position", "absolute")
            .css("left", "15px")
            .css("top", "17px")
            .css("opacity", 0)

        $(container).append('<img id="player7" src="/assets/animations/veri/futbolcu_07.png" />');
        $('#player7')

            .css("position", "absolute")
            .css("left", "40px")
            .css("top", "30px")
            .css("opacity", 0)
            .delay(13000).animate({opacity: 1}, 1000)

        $(container).append('<img id="player8" src="/assets/animations/veri/futbolcu_08.png" />');
        $('#player8')

            .css("position", "absolute")
            .css("left", "110px")
            .css("top", "26px")
            .css("opacity", 0)
            .delay(14500).animate({opacity: 1}, 1000)

        $(container).append('<img id="player9" src="/assets/animations/veri/futbolcu_09.png" />');
        $('#player9')

            .css("position", "absolute")
            .css("left", "173px")
            .css("top", "27px")
            .css("opacity", 0)
            .delay(16000).animate({opacity: 1}, 1000)

        $(container).append('<img id="player10" src="/assets/animations/veri/futbolcu_10.png" />');
        $('#player10')

            .css("position", "absolute")
            .css("left", "240px")
            .css("top", "25px")
            .css("opacity", 0)
            .delay(17500).animate({opacity: 1}, 1000)

        $(container).append('<img id="player11" src="/assets/animations/veri/futbolcu_11.png" />');
        $('#player11')

            .css("position", "absolute")
            .css("left", "325px")
            .css("top", "30px")
            .css("opacity", 0)
            .delay(19000).animate({opacity: 1}, 1000)

        $(container).append('<img id="player1" src="/assets/animations/veri/futbolcu_01.png" />');
        $('#player1')

            .css("position", "absolute")
            .css("left", "20px")
            .css("top", "86px")
            .css("opacity", 0)
            .delay(3000).animate({opacity: 1}, 1000)

        $(container).append('<img id="player2" src="/assets/animations/veri/futbolcu_02.png" />');
        $('#player2')

            .css("position", "absolute")
            .css("left", "84px")
            .css("top", "88px")
            .css("opacity", 0)
            .delay(5500).animate({opacity: 1}, 1000)

        $(container).append('<img id="player3" src="/assets/animations/veri/futbolcu_03.png" />');
        $('#player3')

            .css("position", "absolute")
            .css("left", "144px")
            .css("top", "90px")
            .css("opacity", 0)
            .delay(7000).animate({opacity: 1}, 1000)

        $(container).append('<img id="player4" src="/assets/animations/veri/futbolcu_04.png" />');
        $('#player4')

            .css("position", "absolute")
            .css("left", "211px")
            .css("top", "95px")
            .css("opacity", 0)
            .delay(8500).animate({opacity: 1}, 1000)

        $(container).append('<img id="player5" src="/assets/animations/veri/futbolcu_05.png" />');
        $('#player5')

            .css("position", "absolute")
            .css("left", "290px")
            .css("top", "84px")
            .css("opacity", 0)
            .delay(10000).animate({opacity: 1}, 1000)

        $(container).append('<img id="player6" src="/assets/animations/veri/futbolcu_06.png" />');
        $('#player6')

            .css("position", "absolute")
            .css("left", "350px")
            .css("top", "90px")
            .css("opacity", 0)
            .delay(11500).animate({opacity: 1}, 1000)

        $(container).append('<img id="infoo" src="/assets/animations/veri/veri_f_yazi.png" />');
        $('#infoo')
            .css("width", "110px")
            .css("height", "70px")
            .css("position", "absolute")
            .css("left", "402px")
            .css("top", "34px")
            .css("opacity", 0)
            .delay(1000).animate({opacity: 1}, 1000)

        $(container).append('<img id="ball" src="/assets/animations/veri/veri_futbol_topu.png" />');
        $('#ball')
            .css("width", "34px")
            .css("height", "30px")
            .css("position", "absolute")
            .css("left", "468px")
            .css("top", "146px")
            .css("opacity", 0)
            .delay(2000).animate({opacity: 1}, 1000)

        $(container).append('<img id="datasPad" src="/assets/animations/veri/veri_tabla.png" />');
        $('#datasPad')
            .css("width", "256px")
            .css("height", "150px")
            .css("position", "absolute")
            .css("left", "505px")
            .css("top", "30px")
            .css("opacity", 0)
            .delay(2000).animate({opacity: 1}, 1000)

        $(container).append('<p id="data1">1.41</p>');
        $('#data1').css("position", "absolute")
            .css("width", "0px")
            .css("top", "55px")
            .css("left", "570px")
            .css("opacity", 0)
            .delay(animStart+1100).animate({opacity: 1, width: '30px'}, 1000)

        $(container).append('<p id="data2">1.40</p>');
        $('#data2').css("position", "absolute")
            .css("top", "55px")
            .css("left", "610px")
            .css("width", '0px')
            .css("opacity", 0)
            .delay(animStart+2600).animate({opacity: 1, width: '30px'}, 1000)

        $(container).append('<p id="data3">1.39</p>');
        $('#data3').css("position", "absolute")
            .css("width", "0px")
            .css("top", "55px")
            .css("left", "650px")
            .css("opacity", 0)
            .delay(animStart+4100).animate({opacity: 1, width: '30px'}, 1000)

        $(container).append('<p id="data4">1.40</p>');
        $('#data4').css("position", "absolute")
            .css("width", "0px")
            .css("top", "55px")
            .css("left", "690px")
            .css("opacity", 0)
            .delay(animStart+5600).animate({opacity: 1, width: '30px'}, 1000)

        $(container).append('<p id="data5">1.40</p>');
        $('#data5').css("position", "absolute")
            .css("width", "0px")
            .css("top", "89px")
            .css("left", "570px")
            .css("opacity", 0)
            .delay(animStart+7100).animate({opacity: 1, width: '30px'}, 1000)

        $(container).append('<p id="data6">1.41</p>');
        $('#data6').css("position", "absolute")
            .css("width", "0px")
            .css("top", "89px")
            .css("left", "610px")
            .css("opacity", 0)
            .delay(animStart+8600).animate({opacity: 1, width: '30px'}, 1000)

        $(container).append('<p id="data7">1.38</p>');
        $('#data7').css("position", "absolute")
            .css("width", "0px")
            .css("top", "89px")
            .css("left", "650px")
            .css("opacity", 0)
            .delay(animStart+10100).animate({opacity: 1, width: '30px'}, 1000)

        $(container).append('<p id="data8">1.40</p>');
        $('#data8').css("position", "absolute")
            .css("width", "0px")
            .css("top", "89px")
            .css("left", "690px")
            .css("opacity", 0)
            .delay(animStart+11600).animate({opacity: 1, width: '30px'}, 1000)

        $(container).append('<p id="data9">1.42</p>');
        $('#data9').css("position", "absolute")
            .css("width", "0px")
            .css("top", "123px")
            .css("left", "570px")
            .css("opacity", 0)
            .delay(animStart+13100).animate({opacity: 1, width: '30px'}, 1000)

        $(container).append('<p id="data10">1.39</p>');
        $('#data10').css("position", "absolute")
            .css("width", "0px")
            .css("top", "123px")
            .css("left", "610px")
            .css("opacity", 0)
            .delay(animStart+14600).animate({opacity: 1, width: '30px'}, 1000)

        $(container).append('<p id="data11">1.41</p>');
        $('#data11').css("position", "absolute")
            .css("width", "0px")
            .css("top", "123px")
            .css("left", "650px")
            .css("opacity", 0)
            .delay(animStart+16100).animate({opacity: 1, width: '30px'}, 1000)

        $(container).append('<img id="pencil" src="/assets/animations/veri/kursun_kalem_.png" />');
        $('#pencil')
            .css("width", "70px")
            .css("height", "110px")
            .css("position", "absolute")
            .css("left", "565px")
            .css("top", "-39px")
            .css("opacity", 0)

        $('#pencil').delay(animStart).animate({opacity: 1}, 500)
            .delay(500).animate({left: '+=30'}, 1000)
            //		.delay(0).animate({opacity: 0}, 500)
            .delay(0).animate({left: '+=10'}, 0)

        $('#pencil')//.delay(950).animate({opacity:1}, 500)
            .delay(500).animate({left: '+=30'}, 1000)
            //		.delay(0).animate({opacity: 0}, 500)
            .delay(0).animate({left: '+=10'}, 0)

        $('#pencil')//.delay(950).animate({opacity:1}, 500)
            .delay(500).animate({left: '+=30'}, 1000)
            //		.delay(0).animate({opacity: 0}, 500)
            .delay(0).animate({left: '+=10'}, 0)

        $('#pencil')//.delay(970).animate({opacity:1}, 500)
            .delay(500).animate({left: '+=30'}, 1000)
            //		.delay(0).animate({opacity: 0}, 500)
            .delay(0).animate({left: '565px', top: '-5px'}, 0)

        $('#pencil')//.delay(970).animate({opacity:1}, 500)
            .delay(500).animate({left: '+=30'}, 1000)
            //		.delay(0).animate({opacity: 0}, 500)
            .delay(0).animate({left: '+=10'}, 0)

        $('#pencil')//.delay(970).animate({opacity:1}, 500)
            .delay(500).animate({left: '+=30'}, 1000)
            //		.delay(0).animate({opacity: 0}, 500)
            .delay(0).animate({left: '+=10'}, 0)

        $('#pencil')//.delay(970).animate({opacity:1}, 500)
            .delay(500).animate({left: '+=30'}, 1000)
            //		.delay(0).animate({opacity: 0}, 500)
            .delay(0).animate({left: '+=10'}, 0)

        $('#pencil')//.delay(970).animate({opacity:1}, 500)
            .delay(500).animate({left: '+=30'}, 1000)
            //		.delay(0).animate({opacity: 0}, 500)
            .delay(0).animate({left: '565px', top: '29px'}, 0)

        $('#pencil')//.delay(970).animate({opacity:1}, 500)
            .delay(500).animate({left: '+=30'}, 1000)
            //		.delay(0).animate({opacity: 0}, 500)
            .delay(0).animate({left: '+=10'}, 0)

        $('#pencil')//.delay(970).animate({opacity:1}, 500)
            .delay(500).animate({left: '+=30'}, 1000)
            //		.delay(0).animate({opacity: 0}, 500)
            .delay(0).animate({left: '+=10'}, 0)

        $('#pencil')//.delay(970).animate({opacity:1}, 500)
            .delay(500).animate({left: '+=30'}, 1000)
            .delay(0).animate({opacity: 0}, 500, function(){
                Main.animationFinished(1000);

            })
    }
}