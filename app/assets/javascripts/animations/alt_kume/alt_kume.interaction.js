var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
    init:function(container){
        Interaction.container = container;

        Interaction.paper = {
		    width:$(container).width(),
			height:$(container).height()
		};

        $(container).append("<div id='kumeUst' class='soru'>");
        $(container).append("<div id='cevap' class='soru'>");
        $(container).append("<div id='dogruCevap' class='soru'>");

        $(".soru")
            .css("width","100%")
            .css("height","30px")
            .css("position","absolute")
            .css("margin","auto")
            .css("font-size","16px")
        //.css("border","1px solid red");

        $("#kumeUst")
            .css("left","10px")
            .css("top","10px");

        $("#cevap")
            .css("left","10px")
            .css("top","50px");

        $("#dogruCevap")
            .css("left","10px")
            .css("top","90px")
            .css("width","100%")
            .css("color","green");

        Interaction.appendStatus({
            bottom:'20px',
            right:'160px',
            width:"280px",
            textAlign:"center"
        });

        Interaction.appendButton({
            bottom:'10px',
            right:'40px'
        });

        Interaction.liste=Util.getShuffledArray(9,1);
        console.log(Interaction.liste)

        Interaction.soruSayaci=0;
		Interaction.prepareNextQuestion();
	},
	nextQuestion: function(randomNumber){
        Interaction.flushInputs();



        Interaction.birinciKume=new sorgular(Interaction.liste[Interaction.soruSayaci]);
        Interaction.soru=Interaction.birinciKume.yeniSoru("A");

        Interaction.elemanlar=Interaction.birinciKume.elemanlar();

        //console.log(Interaction.soru);
        $("#kumeUst").html(Interaction.soru);
        console.log("Uzunluk: "+Interaction.birinciKume.uzunluk());

        Interaction.elemanSayisi=istenenElemanSayisi(Interaction.birinciKume.uzunluk());
        var elemanSayisiYazi=["","bir","iki","üç"];

        Main.setObjective("Yanda verilen kümenin <span style='color:#ff0000;'><span id='eleman'>"+elemanSayisiYazi[Interaction.elemanSayisi]+"</span> elemanlı alt kümelerinden birini</span> bulunuz ve kontrol ediniz");
        for(var i=0; i<Interaction.elemanSayisi;i++){
            Interaction.appendInput({
                width: '26px',
                height: '24px',
                textAlign: 'center',
                fontSize: '16px',
                position:"static"
            },false);
            Interaction.inputs[i].id="girdi"+i;
        }

        $('#cevap').html("");
        $('#cevap').append("B = { ");
        for(var i = 0; i < Interaction.elemanSayisi; i++){
            $('#cevap').append(Interaction.inputs[i]);
            if(i != Interaction.elemanSayisi-1){
                $('#cevap').append(" , ");
            }
            else if(i == Interaction.elemanSayisi-1){
                $('#cevap').append(" }");
            }
        }


        console.log("İstenen Eleman: "+Interaction.elemanSayisi);

        console.log("Soru Sayacı: "+Interaction.soruSayaci+"<br/>");
        Interaction.soruSayaci++;

        if(Interaction.soruSayaci==8)
            Interaction.soruSayaci=0;

		},
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
		
		},
	isAnswerCorrect : function(value){
        Interaction.dogruCevaplar=Interaction.birinciKume.elemanlar();
        Interaction.dogruElemanSayisi=0;
        for(var i=0; i<Interaction.inputs.length;i++){
            for(var j=0; j<Interaction.birinciKume.uzunluk();j++){
                var simdikiDogruSayisi=Interaction.dogruElemanSayisi;
                console.log("şimdiki: "+simdikiDogruSayisi)
                console.log("girilen: "+$("#girdi"+i).val()+", "+Interaction.dogruCevaplar[j])
                if($("#girdi"+i).val()==Interaction.dogruCevaplar[j]){
                    Interaction.dogruElemanSayisi++
                    Interaction.dogruCevaplar[j]="xx";
                    $("#girdi"+i).addClass("dogru")
                    continue;

                }
            }

        }
        if(Interaction.dogruElemanSayisi==Interaction.inputs.length)
        return true;


        console.log("Doğru eleman sayısı: "+Interaction.dogruElemanSayisi);

		
		},
	onCorrectAnswer : function(){

		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
        Interaction.dogruCevaplardanBiri=Util.getShuffledArray(Interaction.birinciKume.uzunluk());

        Interaction.dogruCevaplar

        $("")
        Interaction.setStatus('Yanlış cevap, doğru cevaplardan biri yukarıda gösterilmiştir.',false);
		$("input:not(.dogru)").css("color","red");
        $(".dogru").css("color","green");
		}
}