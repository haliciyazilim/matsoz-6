var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;



        $(container).append("<div id='islem1'>");
        $("#islem1").css({
            position:"absolute",
            width:"100%",
            top:"25px",
            left:"0px",
            right:"0px",
            margin:"auto",
            textAlign:"center",
            fontSize:"20px",

            opacity:1
        });


        $(container).append("<div id='islem2'>");
        $("#islem2").css({
            position:"absolute",
            width:"100%",
            top:"80px",
            left:"0px",
            right:"0px",
            margin:"auto",
            textAlign:"center",
            fontSize:"20px",

            opacity:1
        });


        $(container).append("<div id='islem3'>");
        $("#islem3").css({
            position:"absolute",
            width:"100%",
            top:"135px",
            left:"0px",
            right:"0px",
            margin:"auto",
            textAlign:"center",
            fontSize:"20px",

            opacity:1
        });

        setTimeout(function(){bolmeIslemi(12,0.3,"islem1",20)},1000);
        setTimeout(function(){bolmeIslemi(1.2,0.3,"islem2",20)},7000);
        setTimeout(function(){bolmeIslemi(0.12,0.3,"islem3",20)},13000);
        //bolmeIslemi(1.2,0.3,"islem2",20);
        //bolmeIslemi(0.12,0.3,"islem3",20);
    }
}