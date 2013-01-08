var sil=function(secilen, parent){
    this.secilen=secilen
    this.parent=parent;

    console.log("secilen: "+this.secilen+", parent: "+this.parent);
    console.log(this.secilen);
    console.log($("#pantolon1"));
    if($(this.secilen).hasClass("tisortler")==true){
        $(".tisortler").css("opacity","1");
        var tisortElemanlar=$(".tisortler");
        //console.log(tisortElemanlar)
            for(var i=0;i<tisortElemanlar.length;i++){
                console.log($(this.secilen).get(0).className);
                if($(this.secilen).get(0).className=="giydirilmis")
                    continue;
                else
                {
                for(var j=1; j<=5;j++){
                    //console.log(tisortElemanlar[i].id+", tisort"+j+"A");
                    if(tisortElemanlar[i].id==("tisort"+j+"A") && ($(this.secilen).get(0).id+"A")!=tisortElemanlar[i].id){
                        console.log("İf: #"+tisortElemanlar[i].id+", "+$(this.secilen).get(0).id);
                        $("#"+tisortElemanlar[i].id).remove();
                        break;
                    }
                }

            }
        }
    }

    else if($(this.secilen).hasClass("pantolonlar")==true){
        $(".pantolonlar").css("opacity","1");
        var pantolonElemanlar=$(".pantolonlar");

        for(var i=0;i<pantolonElemanlar.length;i++){
            if($(this.secilen).get(0).className=="giydirilmis")
                continue;
            else
            {
                for(var j=1; j<=4;j++){
                    console.log(pantolonElemanlar[i].id+", pantolon"+j+"A");
                    if(pantolonElemanlar[i].id==("pantolon"+j+"A") && ($(this.secilen).get(0).id+"A")!=pantolonElemanlar[i].id){
                        $("#"+pantolonElemanlar[i].id).remove();
                        break;
                    }
                }
            }
        }
    }

    else if($(this.secilen).hasClass("ayakkabilar")==true){
        $(".ayakkabilar").css("opacity","1");
        var ayakkabiElemanlar=$("#ayakkabiCerceve").children();
        for(var i=0;i<ayakkabiElemanlar.length;i++){
            if($(this.secilen).get(0).className=="giydirilmis")
                continue;
            else
            {
                for(var j=1; j<=3;j++){
                    console.log(ayakkabiElemanlar[i].id+", ayakkabi"+j+"A");
                    if(ayakkabiElemanlar[i].id==("ayakkabi"+j+"A") && ($(this.secilen).get(0).id+"A")!=ayakkabiElemanlar[i].id){
                        $("#"+ayakkabiElemanlar[i].id).remove();
                        break;
                    }

                }
            }
        }
    }
}



var kombinasyonKontrol=function(grup){
    this.grup=grup;
    this.eslesme=0
    this.genelSayac=0;
    //alert("Ombinasyon uzunluğu: "+Interaction.kombinasyonlar.length)
    if(Interaction.kombinasyonlar.length>0){
        for(var i=0; i<Interaction.kombinasyonlar.length;i++){
            //alert("this.grup.length"+this.grup.length)
            for(var j=0; j<this.grup.length;j++){
                if(Interaction.kombinasyonlar[i][j]==this.grup[j]){
                    //alert("Büyük Array: "+Interaction.kombinasyonlar[i][j]+", küçük grup: "+this.grup[j]+", eşleme"+this.eslesme);
                    this.eslesme++;
                }
            }
            if(this.eslesme==3){
                //alert("sııntı var: "+i);
                Interaction.setStatus('Daha önce bu kıyafet üçlüsünü seçtin.',false);

                this.genelSayac=1;
                break;

            }
            else{
                //alert("sııntı yok: "+i);
                this.eslesme=0;
            }

        }
    }

    if(this.genelSayac==0){
        Interaction.kombinasyonlar.push(this.grup);

        if(Interaction.kombinasyonlar.length==24){
            Interaction.setStatus('Tebrikler',true);
            Interaction.kombinasyonlar=[];
            return true;
        }
        else
            return true;
    }



}

function esyalarClick (){

    Interaction.setStatus("");
    $("#kiyafetlerStr").html("");
    var seciliCerceveId=$(this).get(0).parentNode.id;
    var secilen=$(this).get(0).id;
    var seciliYeniId=$(this).get(0).id+"A";

    sil(this,$(this).get(0).className);
    //console.log(seciliYeniId);
    $(this).clone().attr("id",seciliYeniId).appendTo("#"+seciliCerceveId).css("opacity","0.4");
    $(this).css("opacity","0.4");



    //console.log($(this).get(0).parentNode.id);
    //console.log("seçilen: "+$(this).get(0).id);
    console.log("Sınıf işmi: "+$(this).get(0).className);


    console.log("Giydirilmişler: "+$(".esyalar").length);
    var esyalarUzunluk=$(".esyalar").length;
    if(esyalarUzunluk==12)
        $("#btnGoster").removeAttr("disabled");

}

function hepsiniSil(){
    var uzunlukT=$(".tisortler").length;

    for(var i=4; i<uzunlukT; i++){
        var idNo=$(".tisortler").get(i).id;
        $("#"+idNo).remove();
    }

    var uzunlukP=$(".pantolonlar").length;

    for(var i=3; i<uzunlukP; i++){
        var idNo=$(".pantolonlar").get(i).id;
        $("#"+idNo).remove();
    }

    var uzunlukA=$(".ayakkabilar").length;

    for(var i=2; i<uzunlukA; i++){
        var idNo=$(".ayakkabilar").get(i).id;
        $("#"+idNo).remove();
    }

}
;
