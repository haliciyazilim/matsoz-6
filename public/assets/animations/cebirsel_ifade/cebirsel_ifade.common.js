function sorular(){

    this.randomSayi=Math.floor(Math.random()*19+1);

    this.isaretSecimi=this.randomSayi%2==0?true:false;

    console.log("sayi: "+this.randomSayi+", "+this.isaretSecimi);

    this.soruCesidi=Math.floor(Math.random()*3+1);;
    //this.soruCesidi=4;

    switch (this.soruCesidi){
        case 1:
            var soru=soruCesidi1(this.randomSayi,this.isaretSecimi);
            break;
        case 2:
            var soru=soruCesidi2(this.randomSayi,this.isaretSecimi);
            break;
        case 3:
            var soru=soruCesidi3(this.randomSayi,this.isaretSecimi);
            break;
        case 4:
            var soru=soruCesidi4(this.randomSayi);
            break;
    }

    return soru;
}

function soruCesidi1 (sayi,isaret){

    this.sayi=sayi;
    this.isaret=isaret;

    this.oran=this.isaret==true?"fazlası":"eksiği";
    this.cumleSecimi=Math.floor(Math.random()*2);
    this.cumleler=["Paramın "+this.sayi+" lira "+this.oran,
        "Ali'nin yaşının "+this.sayi+" yaş "+this.oran,
        "Misketlerin "+this.sayi+" "+this.oran];



    for (var i=1; i<=3;i++){
        var input = Interaction.appendInput({
            width: '35px',
            height: '32px',
            textAlign: 'center',
            fontSize: '20px',
            position:"static"

        },false,false);

        Interaction.inputs[i-1].id="girdi"+i;
        $("#girdiler").append($("#girdi"+i));
    }

    //$("#girdiler").html($("#girdi1")+$("#girdi2")+$("#girdi3"));
    this.islem=this.isaret==true?"+":"-";
    Interaction.dogruCevap=[1,"x",this.islem,this.sayi];
    return this.cumleler[this.cumleSecimi];



}

function soruCesidi2 (sayi,isaret){

    this.sayi=sayi;
    this.isaret=isaret;

    this.oran=this.isaret==true?"2 katı":"yarısı";
    this.cumleSecimi=Math.floor(Math.random()*3);
    this.cumleler=["Ankara ile İstanbul arasındaki yolun "+this.oran,
        "Elmaların "+this.oran,
        "Paramın "+this.oran,
        "Masanın uzunluğunun "+this.oran];


    for (var i=1; i<=2;i++){
        var input = Interaction.appendInput({
            width: '35px',
            height: '32px',
            textAlign: 'center',
            fontSize: '20px',
            position:"static"

        },false,false);

        Interaction.inputs[i-1].id="girdi"+i;

    }
    if(this.isaret==true){
        $("#girdiler").append($("#girdi1")).append($("#girdi2"));

    }
    else{
        $("#girdiler").append("<div id='kesir'>");
        $("#kesir").append("<div id='pay'>");
        $("#kesir").append("<div id='payda'>");

        $("#pay").append($("#girdi1"));
        $("#payda").append($("#girdi2")).css("border-top","2px black solid");

        $("#girdi1").css("margin-bottom","5px");
        $("#girdi2").css("margin-top","5px");
        $("#kesir").css({
            width:"45",
            height:"70px",
            textAlign:"center",
            fontSize:"20px",
            margin:"0 auto"
        });
    }

    //$("#girdiler").html($("#girdi1")+$("#girdi2")+$("#girdi3"));

    Interaction.dogruCevap=[2,this.isaret,2,"x"];
    return this.cumleler[this.cumleSecimi];


}

function soruCesidi3 (sayi,isaret){

    this.sayi=sayi;
    this.isaret=isaret;
    this.kat=Math.floor(Math.random()*8+2);
    this.oran=this.isaret==true?" fazlası":" eksiği";
    this.cumleSecimi=Math.floor(Math.random()*3);
    this.cumleler=["Babamın yaşının  "+this.kat+" katının "+this.sayi+this.oran,
        "Paramın  "+this.kat+" katının "+this.sayi+this.oran,
        "Armutların  "+this.kat+" katının "+this.sayi+this.oran,
        "Öğrencilerin  "+this.kat+" katının "+this.sayi+this.oran];


    for (var i=1; i<=4;i++){
        var input = Interaction.appendInput({
            width: '35px',
            height: '32px',
            textAlign: 'center',
            fontSize: '20px',
            position:"static"

        },false,false);

        Interaction.inputs[i-1].id="girdi"+i;
        $("#girdiler").append($("#girdi"+i));
    }

    //$("#girdiler").html($("#girdi1")+$("#girdi2")+$("#girdi3"));
    this.islem=this.isaret==true?"+":"-";
    Interaction.dogruCevap=[3,this.kat,"x",this.islem,this.sayi];
    return this.cumleler[this.cumleSecimi];


    return this.cumleler[this.cumleSecimi];
}

function soruCesidi4 (sayi){

    this.sayi=sayi;
    this.cumleSecimi=Math.floor(Math.random()*3);
    this.cumleler=["Karenin alanı",
        "Bir sayının karesi",
        "Kitaplarımın karesi "];


    Interaction.appendInput({
        width: '25px',
        height: '24px',
        textAlign: 'center',
        fontSize: '16px',
        position:"static"

    },false,false);
    Interaction.appendInput({
        width: '35px',
        height: '32px',
        textAlign: 'center',
        fontSize: '20px',
        position:"static"

    },false,false);


    Interaction.inputs[0].id="girdi1";
    Interaction.inputs[1].id="girdi2";

    $("#girdiler").append("<div id='kesir'>");
    $("#kesir").append("<div id='pay'>");
    $("#kesir").append("<div id='payda'>");

    $("#pay").append($("#girdi1"));
    $("#payda").append($("#girdi2"));

    $("#girdi1").css("margin-bottom","5px").css("float","right");
    $("#girdi2").css("float","left");
    $("#kesir").css({
        width:"60px",
        height:"70px",
        textAlign:"center",
        fontSize:"20px",
        margin:"0 auto"
    });

    Interaction.dogruCevap=[4,2,"x"];
    return this.cumleler[this.cumleSecimi];
}

function kontrol(value){
    var degisim=["a","n","k"];

    for(var i=0; i<value.length;i++){
        value[i]=value[i].trim();
    }
    for(var i=0; i<value.length;i++){

        for(var j=0; j<degisim.length;j++){
            if (value[j]==degisim[i]){
                console.log("buldum");
                value[j]="x";
                break;
            }
        }
    }

    console.log("değişen value: "+value[0]+", "+value[1]+", "+value[2]);
    Interaction.soruCesidi=Interaction.dogruCevap[0];
    Interaction.sinanacakDegerler=[];
    for(var i=0; i<Interaction.dogruCevap.length;i++)
        Interaction.sinanacakDegerler.push(Interaction.dogruCevap[i]);
    Interaction.testSayaci=0;
    switch (Interaction.soruCesidi){
        case 1:
            for(var i=0; i<value.length;i++){
                for(var j=1; j<(Interaction.dogruCevap.length);j++){
                    if(Interaction.sinanacakDegerler[j]==value[i].trim()){
                        Interaction.testSayaci++
                        Interaction.sinanacakDegerler[j]="dogru";
                    }
                }
            }
            if(Interaction.testSayaci==3)
                if(value[1]=="+"){
                    return true
                }
                else if( value[1]=="-" && Interaction.dogruCevap[3]==value[2]){
                    return true
                }

            break;

        case 2:

            for(var i=0; i<value.length;i++){
                for(var j=2; j<(Interaction.dogruCevap.length);j++){
                    if(Interaction.sinanacakDegerler[j]==value[i]){
                        Interaction.testSayaci++
                        Interaction.sinanacakDegerler[j]="dogru";

                    }
                }
            }
            console.log(value[0],value[1]);

            if(Interaction.testSayaci==2){
                if(Interaction.dogruCevap[1]==true)
                    return true;
                else{
                    if(Interaction.dogruCevap[3]==value[0])
                        return true;
                }
            }
            break;

        case 3:
            for(var i=0; i<value.length;i++){
                for(var j=1; j<(Interaction.dogruCevap.length);j++){
                    if(Interaction.sinanacakDegerler[j]==value[i]){
                        Interaction.testSayaci++
                        Interaction.sinanacakDegerler[j]="dogru";
                    }
                }
            }
            if(Interaction.testSayaci==4)
                if(value[2]=="+" && value[3]==Interaction.dogruCevap[4]){
                    return true
                }
                else if(value[1]=="+" && value[0]==Interaction.dogruCevap[4]){
                    return true
                }
                else if(value[2]=="-" && Interaction.dogruCevap[4]==value[3]){
                    return true
                }

            break;

        case 4:

            for(var i=0; i<value.length;i++){
                for(var j=1; j<(Interaction.dogruCevap.length);j++){
                    if(Interaction.sinanacakDegerler[j]==value[i]){
                        Interaction.testSayaci++
                        Interaction.sinanacakDegerler[j]="dogru";

                    }
                }
            }
            console.log(value[0],value[1]);

            if(Interaction.testSayaci==2 && Interaction.dogruCevap[1]==value[0]){
                return true;
            }
            break;
    }
}

function hataliCevap(){

    Interaction.soruCesidi=Interaction.dogruCevap[0];
    switch (Interaction.soruCesidi){
        case 1:
            for(var i=1; i<=3;i++){
                $("#girdi"+i).val(Interaction.dogruCevap[i])
            }
            break;

        case 2:
            if(Interaction.dogruCevap[1]==true){
                for(var i=2; i<=3;i++){
                    $("#girdi"+(i-1)).val(Interaction.dogruCevap[i]);
                }
            }
            else{
                $("#girdi1").val("x");
                $("#girdi2").val("2");
            }

            break;

        case 3:
            for(var i=1; i<=5;i++){
                $("#girdi"+(i)).val(Interaction.dogruCevap[i])
            }


            break;

        case 4:
            for(var i=1; i<=2;i++){
                $("#girdi"+i).val(Interaction.dogruCevap[i])
            }
            break;
            break;
    }
}


;
