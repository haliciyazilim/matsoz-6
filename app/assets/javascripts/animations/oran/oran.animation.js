var Animation = {
    images:[{
            id: "car",
         src: '/assets/animations/oran/car.jpg'
        },
        {
            id: "kadran",
            src: '/assets/animations/oran/kadran.png'
        },
        {
            id: "akrep",
            src: '/assets/animations/oran/akrep.png'
        },
        {
            id: "yelkovan",
            src: '/assets/animations/oran/yelkovan.png'
        }],
	init:function(container){
        Animation.container = container;



        var xStart = 20;
        var xEnd = 360;

        $(container).append('<img src="/assets/animations/oran/car.jpg" id="car_image"></img>');
        $("#car_image").css("position", "absolute")
            .css("left", xStart+"px")
            .css("top", "110px")
            .css("z-index", "1");

        $(container).append("<div id='yol'>");
        $("#yol").css({
            position:"absolute",
            width:"466px",
            height:"20px",
            left:xStart+"px",
            top:"152px",
            borderTop:"solid 1px black",
            textAlign:"center",
            lineHeight:2,
            fontSize:"20px"


        }).html("130 km");

        $(container).append("<div id='aciklama'>");
        $("#aciklama").css({
            position:"absolute",
            width:"235px",
            height:"50px",
            right:"20px",
            top:"35px",
            textAlign:"center",
            fontSize:"20px",
            opacity:0


        }).html("Otomobilin gittiği yolun geçen süreye oranı");

        $(container).append("<div id='islem'><div id='kesir'></div><div id='sonuc'></div></div>");
        $("#islem").css({
            position:"absolute",
            width:"250px",
            height:"80px",
            right:"10px",
            bottom:"35px",
            textAlign:"center",
            fontSize:"20px"

        });
        $("#kesir").css({
            width:"50%",
            height:"100%",
            float:"left",
            opacity:0


        });
        $("#kesir").append("<div id='pay' class='kesir'></div><div id='payda' class='kesir'></div>");
        $(".kesir").css({width:"100%",height:"50%"})
        $("#pay").css({lineHeight:"55px"}).html("130 km")
        $("#payda").css({borderTop:"black 2px solid",lineHeight:"35px"}).html("2 saat");

        $("#sonuc").css({marginTop:"30px",opacity:0}).html("= 65 km/saat");


        // BEbeler
        var resim={
            zemin:"/assets/animations/oran/zemin.jpg",
            can:"/assets/animations/oran/can.png",
            mehmet:"/assets/animations/oran/mehmet.png"};

        $(container).append("<img id='zemin' src='"+resim.zemin+"'>");
        $(container).append("<img id='can' src='"+resim.can+"'>");
        $(container).append("<img id='mehmet' src='"+resim.mehmet+"'>");

        $("#zemin").css({
            width:"250px",
            height:"170px",
            position:"absolute",
            left:"75px",
            top:"20px",
            opacity:0
        });

        $("#can").css({
            width:"250px",
            height:"170px",
            position:"absolute",
            left:"75px",
            top:"20px",
            opacity:0
        });
        $("#mehmet").css({
            width:"250px",
            height:"170px",
            position:"absolute",
            left:"76px",
            top:"23px",
            opacity:0
        });








        // Clock
        kadran = new Raster("kadran");
        kadran.position = new Point(192,48);

        yelkovan = new Raster("yelkovan");
        yelkovan.position = new Point(192,48);

        akrep = new Raster("akrep");
        akrep.position = new Point(192,48);

        clockHelper = new AnimationHelper({
            yelkovanAngle: 0,
            akrepAngle: 0,
            x:20
        })

        akrep.lastTransformation = akrep.matrix;
        yelkovan.lastTransformation = yelkovan.matrix;

        clockHelper.animate({
            style: {
                yelkovanAngle: 360*2,
                akrepAngle: 60,
                x: xEnd
            },
            delay: 2000,
            duration: 8000,
            update: function() {
                var matrix = new Matrix();
                matrix.rotate(this.akrepAngle, 192, 48);
                matrix.concatenate(akrep.lastTransformation);

                akrep.setMatrix(matrix);

                matrix = new Matrix();
                matrix.rotate(this.yelkovanAngle, 192, 48);
                matrix.concatenate(yelkovan.lastTransformation);

                yelkovan.setMatrix(matrix);

                $("#car_image").css({left:this.x});
            },
            callback: function(){
                $("#aciklama").delay(500).animate({opacity:1},1000);
                $("#kesir").delay(2500).animate({opacity:1},1000);
                $("#sonuc").delay(4500).animate({opacity:1},1000);

                $("#aciklama").delay(5000).animate({opacity:0},1000);
                $("#kesir").delay(3000).animate({opacity:0},1000);
                $("#sonuc").delay(1000).animate({opacity:0},1000);
                $("#car_image, #yol").delay(6500).animate({opacity:0},1000);

                var saatHelper=new AnimationHelper({
                    opacity:1
                });

                saatHelper.animate({
                    style:{
                        opacity:0
                    },
                    delay: 6500,
                    duration: 1000,
                    update: function(){
                        kadran.opacity=this.opacity;
                        yelkovan.opacity=this.opacity;
                        akrep.opacity=this.opacity;

                    },
                    callback:function(){
                    $("#zemin").delay(500).animate({opacity:1},1000);
                    $("#can").delay(1500).animate({opacity:1},1000);
                    $("#mehmet").delay(2500).animate({opacity:1},1000);
                        $("#pay").html("145 cm")
                        $("#payda").html("152 cm");
                        $("#sonuc").html(" &nbsp;= ").css({textAlign:"left"});
                        $("#islem").css({width:"158px",right:"55px"});


                        $(container).append("<div id='sonucS'><div id='payS' class='kesir'></div><div id='paydaS' class='kesir'></div></div>");
                        $(".kesir").css({width:"100%",height:"50%"})
                        $("#payS").css({lineHeight:"75px",fontSize:"20px"}).html("145")
                        $("#paydaS").css({borderTop:"black 2px solid",lineHeight:"35px", fontSize:"20px"}).html("152");
                        $("#sonucS").css({width:"40px", height:"100px", position:"absolute",right:"65px",top:"74px", opacity:0});

                    $("#aciklama").html("Can'ın boyunun Mehmet'in boyuna oranı").delay(3000).animate({opacity:1},1000);
                    $("#kesir").delay(4000).animate({opacity:1},1000);
                    $("#sonuc").delay(5000).animate({opacity:1},1000);
                    $("#sonucS").delay(5500).animate({opacity:1},1000);

                }


                });



            }
        });



        Main.animationFinished(15500);



    }
}