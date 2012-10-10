// Normal Çarpma
function carpma(){
    carpim1OndalikSecim=Math.floor(Math.random()*100);
    carpan1=Math.floor(Math.random()*1000);
    carpan1=carpim1OndalikSecim<50?carpan1/10:carpan1/100;
    console.log(carpan1);

    carpan2=(Math.random()*10).toFixed(1);

    console.log(carpan2);

    carpan1Array=0;
    carpan2Array=0;

    if(Util.isInteger(carpan1)==false){
        carpan1Array=carpan1.toString().split(".");
        carpan1VirguldenSonra=carpan1Array[1].length;
    }
    else
        carpan1VirguldenSonra=0;

    if(Util.isInteger(carpan2)==false){
        carpan2Array=carpan2.toString().split(".");
        carpan2VirguldenSonra=carpan2Array[1].length;
    }
    else
        carpan2VirguldenSonra=0;


    var virgulFark=carpan1VirguldenSonra-carpan2VirguldenSonra;
    var virgulToplam=carpan1VirguldenSonra+carpan2VirguldenSonra;

    $("#soru",container).append("<div id='carpan1' class='carpan'>");

    $("#carpan1")
        .css("top","10px").html(Util.format(carpan1, {point:',', places:carpan1VirguldenSonra}));

    $("#soru",container).append("<div id='carpan2' class='carpan'>");
    $("#carpan2")
        .css("top","50px").html(Util.format(carpan2, {point:',', places:carpan2VirguldenSonra}));


    $("#soru",container).append("<div id='carpmaIsareti'>");
    $("#carpmaIsareti").css("width","100px")
        .css("text-align","left")
        .css("height","30px")
        .css("margin","auto")
        .css("position","absolute")
        //.css("bottom","20px")
        //.css("left","0")
        .css("right","0px")
        .css("font-size","30px")
        .css("border-bottom","solid 2px black")
        .css("top","60px")
        .html("x");


    var carpan1Str=Util.isInteger(carpan1)==false?carpan1Array[0]+""+carpan1Array[1]:parseInt(carpan1,10);
    var carpan2Str=Util.isInteger(carpan2)==false?carpan2Array[0]+""+carpan2Array[1]:parseInt(carpan2,10);

    console.log(carpan1Str+","+carpan2Str);


    var icerik= new Array();
    for (var i=0; i<=carpan2Str.length; i++){
        icerik[i]=carpan1Str*carpan2Str.charAt(carpan2Str.length-i);

        if(icerik[i]==0)
            icerik[i]="000";
        console.log("icerik_"+i+": "+icerik[i]);
    }

    for(var i=0; i<carpan2Str.length;i++){
        var top=(100+35*i);
        var right=(i*16);
        var id=i+1;

        $("#soru",container).append("<div id='sonuc"+id+"'/>");
        $("#sonuc"+id).css("width","100px")
            .css("text-align","right")
            .css("height","30px")
            .css("margin","auto")
            .css("position","absolute")
            //.css("bottom","20px")
            //.css("left","0")
            .css("right",right)
            .css("font-size","30px")
            .css("top",top+"px")
            .css("z-index","5")
            .html(icerik[i+1]);


        /*$("#girdi"+id).css("width","100px")
            .css("text-align","right")
            .css("height","30px")
            .css("margin","auto")
            .css("position","absolute")
            //.css("bottom","20px")
            //.css("left","0")
            .css("right",right)
            .css("font-size","30px")
            .css("top",top+"px")
            .css("z-index","5");*/

       var input= Interaction.appendInput({
            position:"absolute",
            width:"100px",
            height:"30px",
            right:right,
            top:top+"px",
            margin:"auto",
            fontSize:"30px",
            textAlign:"right",
            zIndex:"5"
        }, true,false);
        input.id = "girdi"+id;
        $("#girdi"+id).attr("maxLength", "5");

        $("#soru",container).append(input);


        if(i==(carpan2Str.length-1)){
            $("#soru",container).append("<div id='toplamaIsareti'>");
            $("#toplamaIsareti").css("width",120+i*20+"px")
                .css("text-align","left")
                .css("height","30px")
                .css("margin","auto")
                .css("position","absolute")
                .css("right","0px")
                .css("font-size","30px")
                .css("border-bottom","solid 2px black")
                .css("top",(top+5)+"px")
                .html("+");

            $("#soru",container).append("<div id='sonucToplam'/>");
            $("#sonucToplam").css("width",120+(i-1)*16+"px")
                .css("text-align","right")
                .css("height","30px")
                .css("margin","auto")
                .css("position","absolute")
                //.css("bottom","20px")
                //.css("left","0")
                .css("right","0px")
                .css("font-size","30px")
                .css("top",top+40+"px")
                .css("z-index","5")
                .html((carpan1*carpan2).toFixed(virgulToplam));

           /* $("#soru",container).append("<input id='girdiToplam' type='text' maxlength=7 />");
            $("#girdiToplam").css("width",120+(i-1)*16+"px")
                .css("text-align","right")
                .css("height","30px")
                .css("margin","auto")
                .css("position","absolute")
                //.css("bottom","20px")
                //.css("left","0")
                .css("right","0px")
                .css("font-size","30px")
                .css("top",top+40+"px")
                .css("z-index","5");*/

            var inputSonuc= Interaction.appendInput({
                position:"absolute",
                width:"100px",
                height:"30px",
                right:"0px",
                top:top+40+"px",
                margin:"auto",
                fontSize:"30px",
                textAlign:"right",
                zIndex:"5"

            }, true,false);
            inputSonuc.id = "girdi3";
            $("#soru",container).append(inputSonuc);
            $("#girdi3").attr("maxLength", "7");



        }



    }



    /*$("#soru",container).append("<div id='toplam' class='carpan'>");
     $("#toplam")
     .attr("style","top:210px; right:32px !important")
     .html(format(toplam, {point:'.'}));*/

    $("input").addClass("input").addClass("number_input_field");

    $(".carpan").css("width","100px")
        .css("text-align","right")
        .css("height","30px")
        .css("margin","auto")
        .css("position","absolute")
        //.css("bottom","20px")
        //.css("left","0")
        .css("right","0px")
        .css("font-size","30px");

    if(Util.isInteger(carpan2)==true)
        $("#carpan2").css("margin-right",virgulFark*20+3);
    else
        $("#carpan2").css("margin-right",virgulFark*20);
    //.css("border","solid 1px black");
    $("#girdi1, #girdi2, #girdi3, #girdiToplam").keydown(function(event){
        var pos;
        if(event.keyCode == 8)
            pos = 1;
        else
            pos = 0;
        if(this.createTextRange){
            var textRange = node.createTextRange();
            textRange.collapse(true);
            textRange.moveEnd(pos);
            textRange.moveStart(pos);
            textRange.select();
            return true;
        }else if(this.setSelectionRange){
            this.setSelectionRange(pos,pos);
            return true;
        }
    });


    $("#girdi1, #girdi2, #girdi3, #girdiToplam").keyup(
        function(){
            var icerik=$(this).val();

            $(this).val(icerik);
            console.log($(this).val());
        }
    );


}