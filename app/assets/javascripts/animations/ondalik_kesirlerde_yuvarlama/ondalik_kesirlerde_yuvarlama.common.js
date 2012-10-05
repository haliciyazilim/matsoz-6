sayiOlustur=function(sira){
    var sayi=0;
    var kontrol=0;

    while(kontrol==0){
        sayi=Math.random()*10;
        var sayiFormat=sayi.toFixed(2);

        var sayiArray=sayiFormat.toString().split(".");

        if(sayiArray[1]<95)
            kontrol=1;
    }



    var virguldenSonra=0;
    var metin="";
    var istenen=0;

    var soruSecimi=sira;
    //soruSecimi=6;

    switch (soruSecimi){
        case 0:
            sayi=sayi.toFixed(2);
            virguldenSonra=2
            metin="onda birler";
            istenen=2;
            break;
        case 1:
            sayi=sayi.toFixed(3);
            virguldenSonra=3
            metin="onda birler";
            istenen=3;
            break;
        case 2:
            sayi=sayi.toFixed(3);
            virguldenSonra=3
            metin="yüzde birler";
            istenen=2;

            var sayiKontrolu=sayi.toString().charAt(sayi.toString().length-2);
            if(sayiKontrolu==9){
                sayi=parseFloat(sayi)-0.010;
                console.log("girdim: "+sayi)
                sayi=sayi.toFixed(3);
                console.log("girdim: "+sayi)
            }
            break;
    }


    var soru=[sayi,metin,virguldenSonra,istenen];

    return soru;

}
