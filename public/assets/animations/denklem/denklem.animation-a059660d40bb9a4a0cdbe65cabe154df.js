var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;

        Animation.resim={
            tura:"/assets/animations/denklem/para_tura.png",
            yazi:"/assets/animations/denklem/para_yazi.png",
            cep:"/assets/animations/denklem/cep.png"
        }

        var tura1=new Image();
        tura1.src=Animation.resim.tura;
        tura1.id="tura1";

        var tura2=new Image();
        tura2.src=Animation.resim.tura;
        tura2.id="tura2";

        var yazi1=new Image();
        yazi1.src=Animation.resim.yazi;
        yazi1.id="yazi1";

        var yazi2=new Image();
        yazi2.src=Animation.resim.yazi;
        yazi2.id="yazi2";

        var yazi3=new Image();
        yazi3.src=Animation.resim.yazi;
        yazi3.id="yazi3";

        var yazi4=new Image();
        yazi4.src=Animation.resim.yazi;
        yazi4.id="yazi4";

        var yazi5=new Image();
        yazi5.src=Animation.resim.yazi;
        yazi5.id="yazi5";

        var cep=new Image();
        cep.src=Animation.resim.cep;
        cep.id="cep";


        $(container).append("<div id='cumle'>");
        $("#cumle").css({
            position:'absolute',
            width:'100%',
            top:'30px',
            left:'0px',
            textAlign:'center',
            fontWeight:700,
            opacity:0,
            fontSize:'20px'
        }).html("Eğer <span id='ikiLira'>2 liram</span> daha olursa cebimde <span id='besLira'>5 lira</span> olacak. Şu an <span id='kacLira'>kaç liram</span> var?");

        $(container).append("<div id='denklem'>");
        $("#denklem").css({
            position:'absolute',
            width:'100%',
            top:'110px',
            left:'-20px',
            textAlign:'center',
            fontSize:'22px'
        }).html("<span id='x'>x</span> <span id='arti'>+</span> <span id='2'>2</span> <span id='esittir'>=</span> <span id='5'>5</span>");

        $(container).append("<div id='dikme'>");
        $("#dikme").css({
            position:'absolute',
            width:'200px',
            height:"128px",
            top:'60px',
            left:'0px',
            right:'0px',
            margin:"auto",
            borderLeft:"1px #d9d9d9 solid",
            borderRight:"1px #d9d9d9 solid"

        })

        $(container).append("<div id='asama2'>");
        $("#asama2").css({
            position:'absolute',
            width:'100%',
            top:'110px',
            left:'404px',
            textAlign:'left',
            opacity:0,
            fontSize:'22px'
        }).html("1 + 2 <span id='gidecekler'>+ 2</span>");

        $(container).append("<div id='asama3'>");
        $("#asama3").css({
            position:'absolute',
            width:'100%',
            top:'110px',
            left:'404px',
            textAlign:'left',
            opacity:0,
            fontSize:'22px'
        }).html("3");

        $("#x, #arti,#2, #esittir, #5").css("opacity","0").css("position","relative");



        $(container).append(cep);
        $("#cep").css({
            position:'absolute',
            width:'141px',
            height:"127px",
            top:'65px',
            left:'10px',
            opacity:0
        });

        $(container).append(tura1);
        $("#tura1").css({
            position:'absolute',
            width:'84px',
            height:"40px",
            top:'100px',
            left:'150px',
            opacity:0
        });

        $(container).append(tura2);
        $("#tura2").css({
            position:'absolute',
            width:'84px',
            height:"40px",
            top:'100px',
            left:'190px',
            opacity:0
        });

        $(container).append(yazi1);
        $("#yazi1").css({
            position:'absolute',
            width:'84px',
            height:"40px",
            top:'70px',
            left:'700px',
            opacity:0
        });
        $(container).append(yazi2);
        $("#yazi2").css({
            position:'absolute',
            width:'84px',
            height:"40px",
            top:'130px',
            left:'700px',
            opacity:0
        });

        $(container).append(yazi3);
        $("#yazi3").css({
            position:'absolute',
            width:'84px',
            height:"40px",
            top:'70px',
            left:'500px',
            opacity:0
        });
        $(container).append(yazi4);
        $("#yazi4").css({
            position:'absolute',
            width:'84px',
            height:"40px",
            top:'130px',
            left:'500px',
            opacity:0
        });
        $(container).append(yazi5);
        $("#yazi5").css({
            position:'absolute',
            width:'84px',
            height:"40px",
            top:'100px',
            left:'600px',
            opacity:0
        });

        $("#cumle").animate({opacity:1},1000);

        $("#ikiLira").delay(1000).animate({color:degisenRenk},1000).delay(1000).animate({color:ilkRenk},1000);
        $("#2, #arti, #tura1, #tura2").delay(1000).animate({opacity:1},2000);

        $("#besLira").delay(3000).animate({color:degisenRenk},1000).delay(1000).animate({color:ilkRenk},1000);
        $("#5, #esittir, #yazi1,#yazi2,#yazi3,#yazi4,#yazi5").delay(3000).animate({opacity:1},2000)

        $("#kacLira").delay(5000).animate({color:degisenRenk},1000).delay(1000).animate({color:ilkRenk},1000);
        $("#x, #cep").delay(5000).animate({opacity:1},2000)

        $("#5").delay(4000).animate({opacity:0},1000)
        $("#asama2").delay(9000).animate({opacity:1},1000);
        $("#yazi1").delay(4000).animate({top:"90px"},1000);
        $("#yazi2").delay(4000).animate({top:"110px"},1000);
        $("#yazi3").delay(4000).animate({top:"90px", left:"600px"},1000);
        $("#yazi4").delay(4000).animate({top:"110px", left:"600px"},1000);
        $("#yazi5").delay(4000).animate({left:"500px"},1000);

        $("#2, #arti, #tura1,#tura2").delay(9000).animate({opacity:0},1000);
        $("#gidecekler").delay(12000).animate({opacity:0},1000);
        $("#yazi1,#yazi2").delay(2000).animate({opacity:0},1000);


        $("#asama2").delay(5000).animate({opacity:0},1000);
        $("#asama3").delay(15000).animate({opacity:1},1000);

        $("#x").delay(9000).animate({left:35},1000)
        $("#cep").delay(10000).animate({left:100},1000)
        $("#dikme").delay(17000).animate({opacity:0},1000)

        Main.animationFinished(18000);


    }
}
;
