function dogalSayi(){
    var dogalSayi=Math.floor(Math.random()*99+1);
    
    $("#soru").append("<div id='dogalSayi'>");
        $("#dogalSayi")
            .css("width","40px")
            .css("height","30px")
            .css("position","absolute")
            .css("left","0")
            .css("top","0")
            .css("bottom","0")
            .css("right","0")
            .css("margin","auto")
            .css("font-size","30px")
            .css("text-align","center")
            .html(dogalSayi);
            //.css("border","1px solid red");
    
    return 1;
}

function negatifTamSayi(){
    var negatifTamSayi=Math.floor(Math.random()*(-99)+(-1));
    
    $("#soru").append("<div id='dogalSayi'>");
        $("#dogalSayi")
            .css("width","40px")
            .css("height","30px")
            .css("position","absolute")
            .css("left","0")
            .css("top","0")
            .css("bottom","0")
            .css("right","0")
            .css("margin","auto")
            .css("font-size","30px")
            .css("text-align","center")
            .html(negatifTamSayi);
            //.css("border","1px solid red");
    return 2;
    
}

function ondalikKesir(){
    var ondalikKesir=0;
    function sayiSec(){
    ondalikKesir=Math.random()*99+1;
    ondalikKesir=ondalikKesir.toFixed(2);
    }

    sayiSec();
    var kesik= ondalikKesir.toString().substring(0,ondalikKesir.toString().length-3);
    console.log("test: "+kesik);
    console.log("LEnght: "+ondalikKesir.toString().length)
    var test=ondalikKesir-parseFloat(kesik,10);
    test=test.toFixed(2);
    console.log("sonuc: "+test);
    if((test)==0)
        sayiSec();


    $("#soru").append("<div id='ondalikKesir'>");
        $("#ondalikKesir")
            .css("width","100px")
            .css("height","30px")
            .css("position","absolute")
            .css("left","0")
            .css("top","0")
            .css("bottom","0")
            .css("right","0")
            .css("margin","auto")
            .css("font-size","30px")
            .css("text-align","center")
            .html(Util.format(ondalikKesir,{places:2}));
            //.css("border","1px solid red");
    return 3;
}


function kesir(){
    var payda=Math.floor(Math.random()*97+2);
    //payda=2;
    var pay=Math.floor(Math.random()*payda+1);
    
    $("#soru").append("<div id='kesir'>");
        $("#kesir")
            .css("width","100px")
            .css("height","82px")
            .css("position","absolute")
            .css("left","0")
            .css("top","0")
            .css("bottom","0")
            .css("right","0")
            .css("margin","auto")
            .css("font-size","30px")
            .css("text-align","center")
            //.html(pay+"/"+payda);
            //.css("border","1px solid red");
    $("#kesir").append("<div id='pay' class='kesir'>");
    $("#kesir").append("<div id='payda' class='kesir'>");
    
    $(".kesir")
        .css("width","50px")
        .css("height","40px")
        .css("left","0")
        .css("top","0")
        .css("bottom","0")
        .css("right","0")
        .css("margin","auto")
        
        //.css("border","1px solid red");
    $("#payda").css("border-top","2px solid black").html(payda).css("line-height","40px");
    $("#pay").html(pay).css("line-height","50px")
            
     return 4;  
    
}
;
