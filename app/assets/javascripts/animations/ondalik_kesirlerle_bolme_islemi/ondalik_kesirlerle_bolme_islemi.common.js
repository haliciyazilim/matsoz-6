soruGetir=function(){
    var bolum=Math.random()*10;
    var bolen=Math.random()*10;

    bolum=bolum.toFixed(2);
    bolen=bolen.toFixed(2);

    var gidecekler=[bolum,bolen];

    return gidecekler;
}