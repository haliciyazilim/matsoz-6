var Animation = {
    images:[],
	init:function(container){
		Animation.container = container;
        Animation.aKumesi = new Set({
            type: Set.ELEMENTS,
            elements:["a","b","c"]
        });
        //Animation.aKumesi.drawVennDiagram(Animation.container,new Point(300,40),"A");
        //Animation.aKumesi.strokeColor=new RgbColor(0,0,0);

        //A
        var fSize = new Size(210, 140);
        var fDortgen = new Rectangle(new Point(165,20), fSize);

        Animation.aKumesi = new Path.Oval(fDortgen);
        Animation.aKumesi.strokeColor=new RgbColor(0,0,0);
        $(container).append("<div id='aKumeBaslik' class='elemanlar'>");
        $(container).append("<div id='elemanA' class='elemanlar'>");
        $(container).append("<div id='elemanB' class='elemanlar'>");
        $(container).append("<div id='elemanC' class='elemanlar'>");

        $(".elemanlar").css({
            position:"absolute",
            width:"20px",
            height:"20px",
            fontSize:"20px"
        });

        $("#aKumeBaslik").css({
            left:"190px",
            top:"35px"
        }).html("A");

        $("#elemanA").css({
            left:"240px",
            top:"80px"
        }).html(".a");

        $("#elemanB").css({
            left:"280px",
            top:"120px"
        }).html(".b");

        $("#elemanC").css({
            left:"320px",
            top:"80px"
        }).html(".c");

        //B
        $(container).append("<ul id='liste1'>")

        $("#liste1",container).append("<li id='madde11'>")
        $("#madde11").html("A = {a,b,c}");

        $("#liste1",container).append("<li id='madde12'>")
        $("#madde12").html("B = {a}");

        $("#liste1",container).append("<li id='madde13' class='simge'>")
        $("#madde13").html("B ⊂ A");

        Animation.bKumesi = new Path.Circle(new Point(235, 75), 20);
        Animation.bKumesi.strokeColor="red";
        Animation.bKumesi.opacity=0;



        $(container).append("<div id='bKumesiBaslik'>");
        $("#bKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"70px",
            left:"220px",
            color:"red",
            opacity:"0"


        }).html("B");


        // C
        $(container).append("<ul id='liste2'>")

        $("#liste2",container).append("<li id='madde21'>")
        $("#madde21").html("A = {a,b,c}");

        $("#liste2",container).append("<li id='madde22'>")
        $("#madde22").html("C = {b}");

        $("#liste2",container).append("<li id='madde23' class='simge'>")
        $("#madde23").html("C ⊂ A");



        Animation.cKumesi = new Path.Circle(new Point(275, 115), 20);
        Animation.cKumesi.strokeColor="red";
        Animation.cKumesi.opacity=0;



        $(container).append("<div id='cKumesiBaslik'>");
        $("#cKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"105px",
            left:"260px",
            color:"red",
            opacity:"0"


        }).html("C");

        // D
        $(container).append("<ul id='liste3'>")

        $("#liste3",container).append("<li id='madde31'>")
        $("#madde31").html("A = {a,b,c}");

        $("#liste3",container).append("<li id='madde32'>")
        $("#madde32").html("D = {c}");

        $("#liste3",container).append("<li id='madde33' class='simge'>")
        $("#madde33").html("D ⊂ A");



        Animation.dKumesi = new Path.Circle(new Point(315, 78), 20);
        Animation.dKumesi.strokeColor="red";
        Animation.dKumesi.opacity=0;



        $(container).append("<div id='dKumesiBaslik'>");
        $("#dKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"70px",
            left:"300px",
            color:"red",
            opacity:"0"


        }).html("D");


        // F
        $(container).append("<ul id='liste4'>")

        $("#liste4",container).append("<li id='madde41'>")
        $("#madde41").html("A = {a,b,c}");

        $("#liste4",container).append("<li id='madde42'>")
        $("#madde42").html("F = {a,b}");

        $("#liste4",container).append("<li id='madde43' class='simge'>")
        $("#madde43").html("F ⊂ A");



        var fSize = new Size(80, 60);
        var fDortgen = new Rectangle(new Point(215,70), fSize);
        Animation.fKumesi = new Path.Oval(fDortgen);
        Animation.fKumesi.rotate(40);

        //Animation.dKumesi = new Path.Circle(new Point(400, 110), 20);
        Animation.fKumesi.strokeColor="red";
        Animation.fKumesi.opacity=0;



        $(container).append("<div id='fKumesiBaslik'>");
        $("#fKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"80px",
            left:"225px",
            color:"red",
            opacity:"0"


        }).html("F");


        // G
        $(container).append("<ul id='liste5'>")

        $("#liste5",container).append("<li id='madde51'>")
        $("#madde51").html("A = {a,b,c}");

        $("#liste5",container).append("<li id='madde52'>")
        $("#madde52").html("G = {a,c}");

        $("#liste5",container).append("<li id='madde53' class='simge'>")
        $("#madde53").html("G ⊂ A");



        var gSize = new Size(120, 50);
        var gDortgen = new Rectangle(new Point(215,50), gSize);
        Animation.gKumesi = new Path.Oval(gDortgen);
        //Animation.gKumesi.rotate(-10);

        //Animation.dKumesi = new Path.Circle(new Point(400, 110), 20);
        Animation.gKumesi.strokeColor="red";
        Animation.gKumesi.opacity=0;



        $(container).append("<div id='gKumesiBaslik'>");
        $("#gKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"70px",
            left:"215px",
            color:"red",
            opacity:"0"


        }).html("G");


        // H
        $(container).append("<ul id='liste6'>")

        $("#liste6",container).append("<li id='madde61'>")
        $("#madde61").html("A = {a,b,c}");

        $("#liste6",container).append("<li id='madde62'>")
        $("#madde62").html("H = {b,c}");

        $("#liste6",container).append("<li id='madde63' class='simge'>")
        $("#madde63").html("H ⊂ A");


        var hSize = new Size(100, 50);
        var hDortgen = new Rectangle(new Point(245,70), hSize);
        Animation.hKumesi = new Path.Oval(hDortgen);
        Animation.hKumesi.rotate(-50);

        //Animation.dKumesi = new Path.Circle(new Point(400, 110), 20);
        Animation.hKumesi.strokeColor="red";
        Animation.hKumesi.opacity=0;



        $(container).append("<div id='hKumesiBaslik'>");
        $("#hKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"70px",
            left:"350px",
            color:"red",
            opacity:"0"


        }).html("H");


        // A alt küme A
        $(container).append("<ul id='liste7'>")

        $("#liste7",container).append("<li id='madde71'>")
        $("#madde71").html("A = {a,b,c}");

        $("#liste7",container).append("<li id='madde72'>")
        $("#madde72").html("A = {a,b,c}");

        $("#liste7",container).append("<li id='madde73' class='simge'>")
        $("#madde73").html("A ⊂ A");

        $("#liste7",container).append("<li id='madde74'>")
        $("#madde74").html("Her küme kendinin alt kümesidir.");




        // Boş küme
        $(container).append("<ul id='liste8'>")

        $("#liste8",container).append("<li id='madde81'>")
        $("#madde81").html("A = {a,b,c}");

        $("#liste8",container).append("<li id='madde82'>")
        $("#madde82").html("Boş küme {} Ø");

        $("#liste8",container).append("<li id='madde83' class='simge'>")
        $("#madde83").html("Ø ⊂ A");

        $("#liste8",container).append("<li id='madde84'>")
        $("#madde84").html("Boş küme her kümenin alt kümesidir.");




        // Evrensel Küme
        $(container).append("<ul id='liste9'>")

        $("#liste9",container).append("<li id='madde91'>")
        $("#madde91").html("A = {a,b,c}");

        $("#liste9",container).append("<li id='madde92'>")
        $("#madde92").html("E  evrensel küme");

        $("#liste9",container).append("<li id='madde93' class='simge'>")
        $("#madde93").html("A ⊂ E");

        $("#liste9",container).append("<li id='madde94'>")
        $("#madde94").html("Her küme evrensel kümenin alt kümesidir.");



        var eSize = new Size(240, 160);
        Animation.eKumesi = new Path.Rectangle(new Point(150,10), eSize);
        Animation.eKumesi.strokeColor="red";
        Animation.eKumesi.opacity=0;



        $(container).append("<div id='eKumesiBaslik'>");
        $("#eKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"35px",
            left:"385px",
            color:"red",
            opacity:"0"


        }).html("E");


        $("ul",container).css({
            position:"absolute",

            top:"60px",
            left:"420px"

        });

        $(".simge").css("color","red");

        $("li",container).css("height","20").css("opacity","0");

        //birinci küme ve elemanlarının gösterimi

        Animation.bKumesi.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 1000

        });


        $("#madde11").css("opacity","1")
        $("#bKumesiBaslik").delay(1000).animate({opacity:"1"},1000).delay(4000).animate({opacity:"0"},1000);
        $("#madde12").delay(2000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);;
        $("#madde13").delay(3000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);;

        Animation.bKumesi.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 6000

        });

        //ikinci küme ve elemanlarıın gösterimi

        Animation.cKumesi.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 6000

        });



        $("#cKumesiBaslik").delay(6000).animate({opacity:"1"},1000).delay(4000).animate({opacity:"0"},1000);
        $("#madde22").delay(7000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde23").delay(8000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);

        Animation.cKumesi.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 11000

        });

        //üçüncü küme ve elemanlarıın gösterimi

        Animation.dKumesi.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 11000

        });



        $("#dKumesiBaslik").delay(11000).animate({opacity:"1"},1000).delay(4000).animate({opacity:"0"},1000);
        $("#madde32").delay(12000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde33").delay(13000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);

        Animation.dKumesi.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 16000

        });


        //dördüncü küme ve elemanlarıın gösterimi

        Animation.fKumesi.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 16000

        });



        $("#fKumesiBaslik").delay(16000).animate({opacity:"1"},1000).delay(4000).animate({opacity:"0"},1000);
        $("#madde42").delay(17000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde43").delay(18000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);

        Animation.fKumesi.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 21000

        });


        //beşinci küme ve elemanlarıın gösterimi

        Animation.gKumesi.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 21000

        });



        $("#gKumesiBaslik").delay(21000).animate({opacity:"1"},1000).delay(4000).animate({opacity:"0"},1000);
        $("#madde52").delay(22000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde53").delay(23000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);

        Animation.gKumesi.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 26000

        });

        //altıncı küme ve elemanlarıın gösterimi

        Animation.hKumesi.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 26000

        });



        $("#hKumesiBaslik").delay(26000).animate({opacity:"1"},1000).delay(4000).animate({opacity:"0"},1000);
        $("#madde62").delay(27000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde63").delay(28000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);

        Animation.hKumesi.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 31000

        });

        //yedinci küme ve elemanlarıın gösterimi: A alt küme A

        Animation.aKumesi.animate({
            style: {
                strokeColor: new RgbColor(1,0,0)
            },
            duration: 1000,
            delay: 31000

        });



        $("#aKumeBaslik").delay(31000).animate({color:"#FF0000"},1000).delay(5000).animate({color:"#000000"},1000);
        $("#madde72").delay(32000).animate({opacity:"1"},1000).delay(4000).animate({opacity:"0"},1000);
        $("#madde73").delay(33000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde74").delay(34000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);

        Animation.aKumesi.animate({
            style: {
                strokeColor: new RgbColor(0,0,0)
            },
            duration: 1000,
            delay: 37000

        });

        //sekizinci küme ve elemanlarıın gösterimi: A alt küme A

        $("#madde82").delay(38000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde83").delay(39000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);
        $("#madde84").delay(40000).animate({opacity:"1"},1000).delay(1000).animate({opacity:"0"},1000);


        //dokuzuncu küme ve elemanlarıın gösterimi: Evrensel küme

        Animation.eKumesi.animate({
            style: {
                opacity:1
            },
            duration: 1000,
            delay: 42000

        });



        $("#eKumesiBaslik").delay(42000).animate({opacity:"1"},1000).delay(5000).animate({opacity:"0"},1000);
        $("#madde92").delay(43000).animate({opacity:"1"},1000).delay(4000).animate({opacity:"0"},1000);
        $("#madde93").delay(44000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde94").delay(45000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);

        Animation.eKumesi.animate({
            style: {
                opacity:0
            },
            duration: 1000,
            delay: 48000

        });

    }
}