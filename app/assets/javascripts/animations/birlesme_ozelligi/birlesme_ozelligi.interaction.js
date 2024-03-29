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
                .css("width","475px")
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
                .css("width","220px")
                .css("height","35px")
                .css("float","left")
                .css("margin-left","7px")
               // .css("border","1px solid red");
        
        for(var i=0; i<7; i++){
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
        
        //$("#soru #girilen").append("( "+Interaction.inputs[0]+" * "+Interaction.inputs[1]+" ) * "+Interaction.inputs[2]);
        
        Interaction.isaretSayaci=1;
        Interaction.isaret="•";
        $("#div0").append("(").css("width","10px");
        $("#div1").append(input1).css("width","30px");
        $("#div2").append(Interaction.isaret).css("width","10px").css("line-height","35px");
        $("#div3").append(input2).css("width","30px");
        $("#div4").append(")").css("width","10px");
        $("#div5").append(Interaction.isaret).css("width","10px").css("line-height","35px");
        $("#div6").append(input3).css("width","30px");
        
        $(".icerik")
        .css("font-size","30px")
        .css("float","left")
        .css("height","100%")
        .css("text-align","left")
        .css("margin","0")
        .css("padding-right","5px")
        .css("padding-left","5px")

       $(container).append("<div id='cevap'>");
            $("#cevap")
                .css("width","405px")
                .css("height","35px")
                .css("position","absolute")
                .css("left","0")
                .css("top","135px")
                .css("right","0")
                .css("margin","auto")
                //.css("border","1px solid red");
        $("#cevap").append("<div id='cevapVerilen'>");
            $("#cevapVerilen")
                .css("width","185px")
                .css("height","35px")
                .css("float","left")
                .css("margin","auto")
                .css("font-size","30px")
                .css("text-align","right")
                // .css("border","1px solid red");
       $("#cevap").append("<div id='dogruCevap'>");
            $("#dogruCevap")
                .css("width","213px")
                .css("height","35px")
                .css("float","right")
                .css("margin","auto")
                .css("color","green")
                .css("font-size","30px");
               // .css("border","1px solid red");
               
        
    
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
        Interaction.isaret=Interaction.isaretSayaci%2==0?" • ":"+";
        $("#div2, #div5").html(Interaction.isaret);
        Interaction.random=new Array();
        
        //Interaction.randomSecimi=Math.floor(Math.random()*2+1)
        //Interaction.randomFonksiyonu=Interaction.randomSecimi%2==0?random1():random2();
        Interaction.randomFonksiyonu=Interaction.isaretSayaci%2==0?random1():random2();
        
        
        $("#istenilen").html(Interaction.random[0]+Interaction.isaret+"("+Interaction.random[1]+Interaction.isaret+Interaction.random[2]+") = ");
        
        console.log(Interaction.random);
        
        $("#dogruCevap, #cevapVerilen").html("");
        $("input").css("color","black");
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
            var verilenCevap=value[0]*value[1]*value[2];
            var istenenCevap=Interaction.random[0]*Interaction.random[1]*Interaction.random[2];
            console.log(verilenCevap+","+istenenCevap);
            if(girdiKontrolu==3 && verilenCevap==istenenCevap)
                return true;
            
        }
        
        else {
            
            var verilenCevap=parseInt(value[0],10)+parseInt(value[1],10)+parseInt(value[2],10);
            var istenenCevap=Interaction.random[0]+Interaction.random[1]+Interaction.random[2];
            console.log(verilenCevap+","+istenenCevap);
            if(girdiKontrolu==3 && verilenCevap==istenenCevap)
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
//            $("#dogruCevap").html("("+Interaction.random[0]+"."+Interaction.random[1]+")."+Interaction.random[2]);
//        else
//            $("#dogruCevap").html("("+Interaction.random[0]+"+"+Interaction.random[1]+")+"+Interaction.random[2]);
        
        esitliklerGosterim();
        
    }
}