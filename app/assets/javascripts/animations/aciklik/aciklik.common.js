function adamlariGetir(){

    var kisilerArray=Interaction.kisilerArray;
    for(var i=0; i<kisilerArray.length;i++){
        $(Interaction.container).append("<img id='"+kisilerArray[i][0]+"' class='kisiler' src='"+kisilerArray[i][1]+"'>");

        if(i<4){
            $("#"+kisilerArray[i][0]).css({
                left:i*60+20+"px",
                bottom:"150px"
            });
        }
        else{
            $("#"+kisilerArray[i][0]).css({
                left:(i-4)*60+50+"px",
                bottom:"50px"
            });
        }
        Interaction.kisilerYasToplam+=kisilerArray[i][0];

    }

    $(".kisiler").css({
        position:"absolute",
        width:"50px",
        height:"100px",
        cursor:"pointer"

    });

    $(".kisiler").click(
        function(){
            console.log("vurma");
            if(Interaction.izin==true){
                $(this).animate({opacity:"0"},1000);
                $(this).addClass("yok");
                hesapla();

            }

        }
    );
}

function adamlariKaristir(){
    Interaction.izin=true;
    var kisilerArray=Interaction.kisilerArray;

    var karisikSira=Util.getShuffledArray(7);
    //console.log(karisikSira);

    $(".kisiler").css("opacity","1").removeClass("yok");

    for(var i=0; i<kisilerArray.length;i++){
        if(i<4){
            $("#"+kisilerArray[karisikSira[i]][0]).css({
                left:i*60+20+"px",
                bottom:"150px"
            });
        }
        else{
            $("#"+kisilerArray[karisikSira[i]][0]).css({
                left:(i-4)*60+50+"px",
                bottom:"50px"
            });
        }

    }

    setTimeout(function(){Interaction.izin=false;},5000);
    setTimeout(function(){adamlariKaristir()},10000);

    hesapla();

}

function hesapla(){

    var elemanSayisi=$(".yok").length;
    var gidenlerToplam=0;
    for(var i=0; i<elemanSayisi;i++){
        //console.log($(".yok").get(i).id);
        gidenlerToplam+=parseInt($(".yok").get(i).id,10);
    }
    var kalanlar=$(".kisiler").not(".yok");
    console.log("kalanlar"+kalanlar.length);

    var kalanlarArray=[];
    for(var i=0; i<kalanlar.length;i++)
        kalanlarArray.push(kalanlar.get(i).id);

    //console.log(kalanlarArray);
    var buyuktenKucuge=kalanlarArray.sort(function(a,b){return b-a});
    //console.log("Buyuk"+enBuyuk[0]);


    //console.log("Kucuk"+enKucuk[0]);

    var enBuyuk=buyuktenKucuge[0];
    var enKucuk=buyuktenKucuge[buyuktenKucuge.length-1];
    console.log("Buyuk: "+enBuyuk+", Küçük: "+enKucuk);
    var aciklik=enBuyuk-enKucuk;

    var ortalama=Util.format(parseInt(Interaction.kisilerYasToplam-gidenlerToplam,10)/parseInt(Interaction.kisilerArray.length-elemanSayisi),{places:2});

    console.log("Kişiler yas Toplam: "+Interaction.kisilerYasToplam+", gidenler Toplam:"+gidenlerToplam+",Kişiler Uzunluk: "+Interaction.kisilerArray.length+",giden Eleman sayısı "+elemanSayisi)

    $("#sonucAciklik").html(aciklik);
    $("#sonucOrtalama").html(ortalama);




}