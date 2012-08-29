var Animation = {
    images:[],
	init:function(container){
		Animation.container = container;
        Animation.aKumesi = new Set({
            type: Set.ELEMENTS,
            elements:["a","b","c"]
        });
        Animation.aKumesi.drawVennDiagram(Animation.container,new Point(300,40),"A");
        Animation.aKumesi.strokeColor=new RgbColor(0,0,0);

        //B
        $(container).append("<ul id='liste1'>")

        $("#liste1",container).append("<li id='madde11'>")
        $("#madde11").html("A = {a,b,c}");

        $("#liste1",container).append("<li id='madde12'>")
        $("#madde12").html("B = {a}");

        $("#liste1",container).append("<li id='madde13'>")
        $("#madde13").html("B ⊂ A");

        $("#liste1",container).css({
            position:"absolute",
            width:"200px",
            top:"60px",
            left:"490px"

        });

        $("li",container).css("height","20").css("opacity","0");

        Animation.bKumesi = new Path.Circle(new Point(345, 90), 20);
        Animation.bKumesi.strokeColor="red";
        Animation.bKumesi.opacity=0;



        $(container).append("<div id='bKumesiBaslik'>");
        $("#bKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"80px",
            left:"335px",
            color:"red",
            opacity:"0"


        }).html("B");


        // C
        $(container).append("<ul id='liste2'>")

        $("#liste2",container).append("<li id='madde21'>")
        $("#madde21").html("A = {a,b,c}");

        $("#liste2",container).append("<li id='madde22'>")
        $("#madde22").html("C = {b}");

        $("#liste2",container).append("<li id='madde23'>")
        $("#madde23").html("C ⊂ A");

        $("#liste2",container).css({
            position:"absolute",
            width:"200px",
            top:"60px",
            left:"490px"

        });

        $("li",container).css("height","20").css("opacity","0");

        Animation.cKumesi = new Path.Circle(new Point(380, 70), 20);
        Animation.cKumesi.strokeColor="red";
        Animation.cKumesi.opacity=0;



        $(container).append("<div id='cKumesiBaslik'>");
        $("#cKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"60px",
            left:"370px",
            color:"red",
            opacity:"0"


        }).html("C");

        // D
        $(container).append("<ul id='liste3'>")

        $("#liste3",container).append("<li id='madde31'>")
        $("#madde31").html("A = {a,b,c}");

        $("#liste3",container).append("<li id='madde32'>")
        $("#madde32").html("D = {c}");

        $("#liste3",container).append("<li id='madde33'>")
        $("#madde33").html("D ⊂ A");

        $("#liste3",container).css({
            position:"absolute",
            width:"200px",
            top:"60px",
            left:"490px"

        });

        $("li",container).css("height","20").css("opacity","0");

        Animation.dKumesi = new Path.Circle(new Point(400, 110), 20);
        Animation.dKumesi.strokeColor="red";
        Animation.dKumesi.opacity=0;



        $(container).append("<div id='dKumesiBaslik'>");
        $("#dKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"100px",
            left:"390px",
            color:"red",
            opacity:"0"


        }).html("D");


        // F
        $(container).append("<ul id='liste4'>")

        $("#liste4",container).append("<li id='madde41'>")
        $("#madde41").html("A = {a,b,c}");

        $("#liste4",container).append("<li id='madde42'>")
        $("#madde42").html("F = {a,b}");

        $("#liste4",container).append("<li id='madde43'>")
        $("#madde43").html("F ⊂ A");

        $("#liste4",container).css({
            position:"absolute",
            width:"200px",
            top:"60px",
            left:"490px"

        });

        $("li",container).css("height","20").css("opacity","0");

        var fSize = new Size(80, 60);
        var fDortgen = new Rectangle(new Point(320,50), fSize);
        Animation.fKumesi = new Path.Oval(fDortgen);
        Animation.fKumesi.rotate(-30);

        //Animation.dKumesi = new Path.Circle(new Point(400, 110), 20);
        Animation.fKumesi.strokeColor="red";
        Animation.fKumesi.opacity=0;



        $(container).append("<div id='fKumesiBaslik'>");
        $("#fKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"70px",
            left:"415px",
            color:"red",
            opacity:"0"


        }).html("F");


        // G
        $(container).append("<ul id='liste5'>")

        $("#liste5",container).append("<li id='madde51'>")
        $("#madde51").html("A = {a,b,c}");

        $("#liste5",container).append("<li id='madde52'>")
        $("#madde52").html("G = {a,c}");

        $("#liste5",container).append("<li id='madde53'>")
        $("#madde53").html("G ⊂ A");

        $("#liste5",container).css({
            position:"absolute",
            width:"200px",
            top:"60px",
            left:"490px"

        });

        $("li",container).css("height","20").css("opacity","0");

        var gSize = new Size(80, 50);
        var gDortgen = new Rectangle(new Point(330,80), gSize);
        Animation.gKumesi = new Path.Oval(gDortgen);
        Animation.gKumesi.rotate(30);

        //Animation.dKumesi = new Path.Circle(new Point(400, 110), 20);
        Animation.gKumesi.strokeColor="red";
        Animation.gKumesi.opacity=0;



        $(container).append("<div id='gKumesiBaslik'>");
        $("#gKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"90px",
            left:"405px",
            color:"red",
            opacity:"0"


        }).html("G");


        // H
        $(container).append("<ul id='liste6'>")

        $("#liste6",container).append("<li id='madde61'>")
        $("#madde61").html("A = {a,b,c}");

        $("#liste6",container).append("<li id='madde62'>")
        $("#madde62").html("H = {b,c}");

        $("#liste6",container).append("<li id='madde63'>")
        $("#madde63").html("H ⊂ A");

        $("#liste6",container).css({
            position:"absolute",
            width:"200px",
            top:"60px",
            left:"490px"

        });

        $("li",container).css("height","20").css("opacity","0");

        var hSize = new Size(80, 50);
        var hDortgen = new Rectangle(new Point(345,65), hSize);
        Animation.hKumesi = new Path.Oval(hDortgen);
        Animation.hKumesi.rotate(70);

        //Animation.dKumesi = new Path.Circle(new Point(400, 110), 20);
        Animation.hKumesi.strokeColor="red";
        Animation.hKumesi.opacity=0;



        $(container).append("<div id='hKumesiBaslik'>");
        $("#hKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"70px",
            left:"363px",
            color:"red",
            opacity:"0"


        }).html("H");


        // A alt küme A
        $(container).append("<ul id='liste7'>")

        $("#liste7",container).append("<li id='madde71'>")
        $("#madde71").html("A = {a,b,c}");

        $("#liste7",container).append("<li id='madde72'>")
        $("#madde72").html("A = {a,b,c}");

        $("#liste7",container).append("<li id='madde73'>")
        $("#madde73").html("A ⊂ A");

        $("#liste7",container).append("<li id='madde74'>")
        $("#madde74").html("Her küme kendinin alt kümesidir.");

        $("#liste7",container).css({
            position:"absolute",
            top:"60px",
            left:"490px"

        });

        $("li",container).css("height","20").css("opacity","0");


        // Boş küme
        $(container).append("<ul id='liste8'>")

        $("#liste8",container).append("<li id='madde81'>")
        $("#madde81").html("A = {a,b,c}");

        $("#liste8",container).append("<li id='madde82'>")
        $("#madde82").html("Boş küme {} Ø");

        $("#liste8",container).append("<li id='madde83'>")
        $("#madde83").html("Ø ⊂ A");

        $("#liste8",container).append("<li id='madde84'>")
        $("#madde84").html("Boş küme her kümenin alt kümesidir.");

        $("#liste8",container).css({
            position:"absolute",
            top:"60px",
            left:"490px"

        });

        $("li",container).css("height","20").css("opacity","0");



        // Evrensel Küme
        $(container).append("<ul id='liste9'>")

        $("#liste9",container).append("<li id='madde91'>")
        $("#madde91").html("A = {a,b,c}");

        $("#liste9",container).append("<li id='madde92'>")
        $("#madde92").html("E  evrensel küme");

        $("#liste9",container).append("<li id='madde93'>")
        $("#madde93").html("A ⊂ E");

        $("#liste9",container).append("<li id='madde94'>")
        $("#madde94").html("Her küme evrensel kümenin alt kümesidir.");

        $("#liste9",container).css({
            position:"absolute",
            top:"60px",
            left:"490px"

        });

        $("li",container).css("height","20").css("opacity","0");

        var eSize = new Size(200, 130);
        Animation.eKumesi = new Path.Rectangle(new Point(270,25), eSize);
        Animation.eKumesi.strokeColor="red";
        Animation.eKumesi.opacity=0;



        $(container).append("<div id='eKumesiBaslik'>");
        $("#eKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"45px",
            left:"470px",
            color:"red",
            opacity:"0"


        }).html("E");



        //birinci küme ve elemanlarının gösterimi

        Animation.bKumesi.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 1000

        });


        $("#madde11").css("opacity","1")
        $("#bKumesiBaslik").delay(1000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde12").delay(2000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);;
        $("#madde13").delay(3000).animate({opacity:"1"},1000).delay(1000).animate({opacity:"0"},1000);;

        Animation.bKumesi.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 5000

        });

        //ikinci küme ve elemanlarıın gösterimi

        Animation.cKumesi.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 5000

        });



        $("#cKumesiBaslik").delay(5000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde22").delay(6000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);
        $("#madde23").delay(7000).animate({opacity:"1"},1000).delay(1000).animate({opacity:"0"},1000);

        Animation.cKumesi.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 9000

        });

        //üçüncü küme ve elemanlarıın gösterimi

        Animation.dKumesi.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 9000

        });



        $("#dKumesiBaslik").delay(9000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde32").delay(10000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);
        $("#madde33").delay(11000).animate({opacity:"1"},1000).delay(1000).animate({opacity:"0"},1000);

        Animation.dKumesi.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 13000

        });


        //dördüncü küme ve elemanlarıın gösterimi

        Animation.fKumesi.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 13000

        });



        $("#fKumesiBaslik").delay(13000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde42").delay(14000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);
        $("#madde43").delay(15000).animate({opacity:"1"},1000).delay(1000).animate({opacity:"0"},1000);

        Animation.fKumesi.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 17000

        });


        //beşinci küme ve elemanlarıın gösterimi

        Animation.gKumesi.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 17000

        });



        $("#gKumesiBaslik").delay(17000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde52").delay(18000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);
        $("#madde53").delay(19000).animate({opacity:"1"},1000).delay(1000).animate({opacity:"0"},1000);

        Animation.gKumesi.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 21000

        });

        //altıncı küme ve elemanlarıın gösterimi

        Animation.hKumesi.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 21000

        });



        $("#hKumesiBaslik").delay(21000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde62").delay(22000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);
        $("#madde63").delay(23000).animate({opacity:"1"},1000).delay(1000).animate({opacity:"0"},1000);

        Animation.hKumesi.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 25000

        });

        //yedinci küme ve elemanlarıın gösterimi: A alt küme A

        Animation.aKumesi.vennDiagram.animate({
            style: {
                strokeColor: new RgbColor(1,0,0)
            },
            duration: 1000,
            delay: 25000

        });



        $("#vennLetter2").delay(25000).animate({color:"#FF0000"},1000).delay(4000).animate({color:"#000000"},1000);
        $("#madde72").delay(26000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde73").delay(27000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);
        $("#madde74").delay(28000).animate({opacity:"1"},1000).delay(1000).animate({opacity:"0"},1000);

        Animation.aKumesi.vennDiagram.animate({
            style: {
                strokeColor: new RgbColor(0,0,0)
            },
            duration: 1000,
            delay: 30000

        });

        //sekizinci küme ve elemanlarıın gösterimi: A alt küme A

        $("#madde82").delay(31000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde83").delay(32000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);
        $("#madde84").delay(33000).animate({opacity:"1"},1000).delay(1000).animate({opacity:"0"},1000);


        //dokuzuncu küme ve elemanlarıın gösterimi: Evrensel küme

        Animation.eKumesi.animate({
            style: {
                opacity:1
            },
            duration: 1000,
            delay: 35000

        });



        $("#eKumesiBaslik").delay(35000).animate({opacity:"1"},1000).delay(4000).animate({opacity:"0"},1000);
        $("#madde92").delay(36000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde93").delay(37000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);
        $("#madde94").delay(38000).animate({opacity:"1"},1000).delay(1000).animate({opacity:"0"},1000);

        Animation.eKumesi.animate({
            style: {
                opacity:0
            },
            duration: 1000,
            delay: 40000

        });

    }
}