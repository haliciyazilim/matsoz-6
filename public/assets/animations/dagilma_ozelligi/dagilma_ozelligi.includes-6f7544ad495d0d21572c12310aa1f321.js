function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}
;
function ciftBasamak() {
    var sayilar=new Array ();
    for (i=0; i<3; i++){
            sayilar.push(Math.floor(Math.random()*99+1));
            
        }
        return sayilar;
}

function tekBasamak() {
    var sayilar=new Array ();
    for (i=0; i<3; i++){
            sayilar.push(Math.floor(Math.random()*9+1));
            
        }
        return sayilar;
}

function esitliklerGosterim(){

    var solParantezSonuc=Interaction.isaretSayaci%2==0?(Interaction.random[1]-Interaction.random[2]):(Interaction.random[1]+Interaction.random[2])
    var solSonSonuc=(Interaction.random[0]*solParantezSonuc);
    var icerikAltSol=[Interaction.random[0]+"<dfn> • </dfn>"+"("+Interaction.random[1]+Interaction.isaret+Interaction.random[2]+")",Interaction.random[0]+"<dfn> • </dfn>"+solParantezSonuc,solSonSonuc];
        
    var sagParantez1Sonuc=Interaction.random[0]*Interaction.random[1];
    var sagParantez2Sonuc=Interaction.random[0]*Interaction.random[2];
    var sagSonSonuc=Interaction.isaretSayaci%2==0?(sagParantez1Sonuc-sagParantez2Sonuc):(sagParantez1Sonuc+sagParantez2Sonuc)
    var icerikAltSag=["("+Interaction.random[0]+"<dfn> • </dfn>"+Interaction.random[1]+")"+Interaction.isaret+"("+Interaction.random[0]+"<dfn> • </dfn>"+Interaction.random[2]+")",sagParantez1Sonuc+Interaction.isaret+sagParantez2Sonuc,sagSonSonuc];
        
    var ornekAlt=ornek("Alt",-118,80,30, icerikAltSol, icerikAltSag);
    
    for(var i=0;i<3;i++){

        //setTimeout(function(){$("#ornekAltSol"+i).fadeIn(1000)},(i*2500));
            
            $("#ornekAltSol"+i).delay(i*2500).animate({opacity:"1"},1000);
            $("#esittirAlt"+i).delay(i*2500+750).animate({opacity:"1"},1000);
            $("#ornekAltSag"+i).delay(i*2500+1500).animate({opacity:"1"},1000);
        }
}

function ornek(isim, left, topDegeri,fontSize, icerikSol, icerikSag){
    this.isim=isim;
    this.left=left;
    this.topDegeri=topDegeri;
    this.fontSize=fontSize;
    this.icerikSol=icerikSol;
    this.icerikSag=icerikSag;
    
    if(this.isim=="Alt")
        $(Interaction.container).append("<div id='ornek"+this.isim+"'>");
    else
        $(Animation.container).append("<div id='ornek"+this.isim+"'>");
    
    
        for(var i=0; i<3; i++){
            
            $("#ornek"+this.isim).append("<div class='ornekIcerik' id='ornek"+this.isim+"Sol"+i+"'>");
            $("#ornek"+this.isim).append("<div class='ornekEsittir' id='esittir"+this.isim+i+"'>");
            $("#ornek"+this.isim).append("<div class='ornekIcerik' id='ornek"+this.isim+"Sag"+i+"'>");
            
        }
        
        $("#ornek"+this.isim)
                .css("width","700px")
                .css("height","140px")
                .css("position","absolute")
                .css("left",this.left)
                .css("top",this.topDegeri)
                .css("margin","auto")
                .css("font-size",fontSize)
                //.css("border","1px solid red");
        
        $(".ornekIcerik")
            .css("width","330px")
            .css("height","30px")
            .css("float","left")
            .css("margin-bottom","20px")
            //.css("border","1px solid red");
        $(".ornekEsittir")
            .css("width","20px")
            .css("height","30px")
            .css("float","left")
            .css("margin-left","10px")
            .css("margin-right","10px")
            //.css("border","1px solid red")
            .html("=");
        
            
        
        
        
            for(var i=0; i<3; i++){
                $("#ornek"+this.isim+"Sol"+i)
                    .html(this.icerikSol[i])
                    .css("text-align","right")
                    .css("opacity","0");
                $("#ornek"+this.isim+"Sag"+i)
                    .html(this.icerikSag[i])
                    .css("opacity","0");
                $("#esittir"+this.isim+i).css("opacity","0");
            }
        
}
;
var Animation = {
    init:function(container){
        Animation.container = container;
         var fontSize=30;
        
        var icerikSolSol=["3<dfn id='nokta'> • </dfn>(5 + 2)","3<dfn id='nokta'> • </dfn>7","21"];
        var icerikSolSag=["3<dfn id='nokta'> • </dfn>5 + 3<dfn id='nokta'> • </dfn>2","15 + 6","21"];
        
        var icerikSagSol=["4<dfn id='nokta'> • </dfn>(7 &#150; 1)","4<dfn id='nokta'> • </dfn>6","24"];
        var icerikSagSag=["4<dfn id='nokta'> • </dfn>7 &#150; 4<dfn id='nokta'> • </dfn>1","28 &#150; 4","24"];
        
        var ornekSol=ornek("Sol",-165,40,fontSize, icerikSolSol, icerikSolSag);
        var ornekSag=ornek("Sag",240,40,fontSize, icerikSagSol, icerikSagSag);
        
        for(var i=0;i<3;i++){
            $("#ornekSolSol"+i).delay(i*2500).animate({opacity:"1"},1000);
            $("#esittirSol"+i).delay(i*2500+750).animate({opacity:"1"},1000);
            $("#ornekSolSag"+i).delay(i*2500+1500).animate({opacity:"1"},1000);
        }
        for(var i=0;i<3;i++){
            $("#ornekSagSol"+i).delay((i+3)*2500).animate({opacity:"1"},1000);
            $("#esittirSag"+i).delay((i+3)*2500+750).animate({opacity:"1"},1000);
            $("#ornekSagSag"+i).delay((i+3)*2500+1500).animate({opacity:"1"},1000);
        }
        
        Main.animationFinished(15000);
        
    }
}
;
var Interaction = {
    getFramework:function(){
        return 'paper';
    },
    init:function(container){
        Interaction.container = container;
	Main.setObjective('Yanda verilen işlemi kutulara uygun sayılar girerek tamamlayınız ve kontrol ediniz.');
	Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
    }
        
         // Ana Div
        $(container).append("<div id='soru'>");
            $("#soru")
                .css("width","550px")
                .css("height","35px")
                .css("position","absolute")
                .css("left","0")
                .css("top","30px")
                .css("right","0")
                .css("margin","auto")
                //.css("border","1px solid red");
        $("#soru").append("<div id='istenilen'>");
            $("#istenilen")
                .css("width","220px")
                .css("height","35px")
                .css("float","left")
                .css("margin","auto")
                .css("font-size","30px")
                .css("text-align","right")
               // .css("border","1px solid red");
       $("#soru").append("<div id='girilen'>");
            $("#girilen")
                .css("width","320px")
                .css("height","35px")
                .css("float","left")
                .css("margin-left","5px")
               // .css("border","1px solid red");
        
        for(var i=0; i<=10; i++){
            $("#girilen").append("<div  class='icerik' id='div"+i+"'>");
        }
        var input1=Interaction.appendInput({
            width: '30px',
            height: '32px',
            textAlign: 'center',
            fontSize: '20px'
        });
        Interaction.inputs[0].id="girdi1";
        
        var input2=Interaction.appendInput({
            width: '30px',
            height: '32px',
            textAlign: 'center',
            fontSize: '20px'
        });
        Interaction.inputs[1].id="girdi2";
        
        var input3=Interaction.appendInput({
            width: '30px',
            height: '32px',
            textAlign: 'center',
            fontSize: '20px'
        });
        Interaction.inputs[2].id="girdi3";
        
        var input4=Interaction.appendInput({
            width: '30px',
            height: '32px',
            textAlign: 'center',
            fontSize: '20px'
        });
        Interaction.inputs[3].id="girdi4";
        
        //$("#soru #girilen").append("( "+Interaction.inputs[0]+" * "+Interaction.inputs[1]+" ) * "+Interaction.inputs[2]);
        
        Interaction.isaretSayaci=1;
        Interaction.isaret="+";
        $("#div0").append("(").css("width","10px");
        $("#div1").append(input1).css("width","30px");
        $("#div2").append("•").css("width","10px").css("line-height","35px");
        $("#div3").append(input2).css("width","30px");
        $("#div4").append(")").css("width","10px");
        
        $("#div5").append(Interaction.isaret).css("width","10px").css("line-height","35px");
        
        $("#div6").append("(").css("width","10px");
        $("#div7").append(input3).css("width","30px");
        $("#div8").append("•").css("width","10px").css("line-height","35px");
        $("#div9").append(input4).css("width","30px");
        $("#div10").append(")").css("width","10px");
       
        
        $(".icerik")
        .css("font-size","30px")
        .css("float","left")
        .css("height","100%")
        .css("text-align","left")
        .css("margin","0")
        .css("padding-right","5px")
        .css("padding-left","5px")

       
    
        Interaction.appendStatus({
            bottom:'50px',
            right:'160px',
            width:'335px',
            textAlign:'center'
            
        });
	
        Interaction.appendButton({
            bottom:'40px',
            right:'40px'
            
	});
    
        Interaction.prepareNextQuestion();
},
    nextQuestion: function(randomNumber){
        
        Interaction.isaretSayaci++
        Interaction.isaret=Interaction.isaretSayaci%2==0?" &#150; ":"+";
        $("#div5").html(Interaction.isaret);
        Interaction.random=Interaction.isaretSayaci%2==0?tekBasamak():ciftBasamak();
        
        Interaction.random=Interaction.random.sort().reverse();
        if(Interaction.isaretSayaci%2==0)
            $("#istenilen").html(Interaction.random[0]+"<dfn> • </dfn>("+Interaction.random[1]+" &#150; "+Interaction.random[2]+") = ");
        else
            $("#istenilen").html(Interaction.random[0]+"<dfn> • </dfn>("+Interaction.random[1]+" + "+Interaction.random[2]+") = ");
        console.log(Interaction.random);
        
        $("#dogruCevap, #cevapVerilen").html("");
        $("input").css("color","black").attr("maxLength","2");
        $("#ornekAlt").html("");
        
        
        

    },
	
    preCheck : function(){
        
    },
    isAnswerCorrect : function(value){
        var girdiKontrolu=0;
        for(var i=0; i<3;i++){
                 var sayac=0;
                for(var p=0; p<3; p++){
                    
                    if(Interaction.random[i]==value[p])
                        sayac++
                }
                if(sayac==1)
                    girdiKontrolu++
        }
        
        if(Interaction.isaretSayaci%2==0){
            var verilenCevap=(value[0]*value[1])-(value[2]*value[3]);
            var istenenCevap=(Interaction.random[0]*Interaction.random[1])-(Interaction.random[0]*Interaction.random[2]);
            console.log(verilenCevap+","+istenenCevap);
            if(verilenCevap==istenenCevap)
                return true;
            
        }
        
        else {
            
            var verilenCevap=(value[0]*value[1])+(value[2]*value[3]);
            var istenenCevap=(Interaction.random[0]*Interaction.random[1])+(Interaction.random[0]*Interaction.random[2]);
            console.log(verilenCevap+","+istenenCevap);
            if(verilenCevap==istenenCevap)
                return true;
            
        }
        
        
        
    },
    onCorrectAnswer : function(){
        esitliklerGosterim();
    },
    onWrongAnswer : function(){
    },
    onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğru cevaplardan biri yukarıda gösterilmiştir.', false);
        $("input").css("color","red");
//        $("#cevapVerilen").html($("#istenilen").html());
//        if(Interaction.isaretSayaci%2==0)
//            $("#dogruCevap").html("("+Interaction.random[0]+"<dfn> • </dfn>"+Interaction.random[1]+")-("+Interaction.random[0]+"<dfn> • </dfn>"+Interaction.random[2]+")");
//        else
//             $("#dogruCevap").html("("+Interaction.random[0]+"<dfn> • </dfn>"+Interaction.random[1]+")+("+Interaction.random[0]+"<dfn> • </dfn>"+Interaction.random[2]+")");
        esitliklerGosterim();
    }
}
;



