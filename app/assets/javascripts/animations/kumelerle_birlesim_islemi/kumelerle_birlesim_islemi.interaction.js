var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},
	images:[],
    init:function(container){
		Interaction.container = container;
		Main.setObjective('Yanda verilen kümelerin birleşim kümesini yazınız ve kontrol ediniz.');
		Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			};





        $(container).append("<div id='kumeUst' class='soru'>");
        $(container).append("<div id='kumeAlt' class='soru'>");
        $(container).append("<div id='cevap' class='soru'>");
        $(container).append("<div id='dogruCevap' class='soru'>");

        $(".soru")
            .css("width","300px")
            .css("height","30px")
            .css("position","absolute")
            .css("margin","auto")
            .css("font-size","16px")
            //.css("border","1px solid red");

        $("#kumeUst")
            .css("left","10px")
            .css("top","10px");

        $("#kumeAlt")
            .css("left","10px")
            .css("top","50px");

        $("#cevap")
            .css("left","10px")
            .css("top","100px")
            .css("width","100%");

        $("#dogruCevap")
            .css("left","10px")
            .css("top","210px")
            .css("width","100%")
            .css("color","green");




        // Interaction.kume.drawVennDiagram(Interaction.container,new Point(400,40),"C");

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

        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){

        Interaction.flushInputs();
        Interaction.birinciKume=new sorgular();
        Interaction.ikinciKume=new sorgular();

        Interaction.soru1=Interaction.birinciKume.yeniSoru("A");
        Interaction.soru2=Interaction.ikinciKume.yeniSoru("B");

        Interaction.birlesim=Interaction.birinciKume.getKume().getUnion(Interaction.ikinciKume.getKume());
        Interaction.birlesimUzunluk=Interaction.birlesim.elements.length;

        console.log(Interaction.birlesim.elements);
        console.log(Interaction.birlesimUzunluk);

        for(var i=0; i<Interaction.birlesimUzunluk;i++){
            Interaction.appendInput({
                width: '26px',
                height: '24px',
                textAlign: 'center',
                fontSize: '16px',
                position:"static"
            });
            Interaction.inputs[i].id="girdi"+i;
        }

        $("#kumeUst").html(Interaction.soru1);

        $("#kumeAlt").html(Interaction.soru2);

        $('#cevap').html("");
        $('#cevap').append("A U B = { ");
        for(var i = 0; i < Interaction.birlesimUzunluk; i++){
            $('#cevap').append(Interaction.inputs[i]);
            if(i != Interaction.birlesimUzunluk-1){
                $('#cevap').append(" , ");
            }
            else if(i == Interaction.birlesimUzunluk-1){
                $('#cevap').append(" }");
            }
        }
    },

    /*
     *	this function is called inside Interaction.__checkAnswer() function
     *	if this function returns false, check answer operation is cancelled
     */
    preCheck : function(){

    },
    isAnswerCorrect : function(value){
        Interaction.girilenler=new Array();
        for(var i=0; i<value.length;i++){
            Interaction.girilenler.push(value[i]);
        }
        Interaction.girilenler=Interaction.girilenler.sort();

        var dogruSayisi=0;
        for(var i=0;i<Interaction.birlesimUzunluk; i++){
            if(Interaction.birlesim.elements[i]==Interaction.girilenler[i])
                dogruSayisi++;
        }
        if(dogruSayisi==Interaction.birlesimUzunluk)
            return true;
        else
            return false;

    },
    onCorrectAnswer : function(){


    },
    onWrongAnswer : function(){

    },
    onFail : function(){
        Interaction.setStatus('Yanlış cevap, doğrusu yukarıda gösterilmiştir.',false);

        for(var i=0; i<Interaction.inputs.length;i++){
            $("#girdi"+i).val(Interaction.birlesim.elements[i]);
            $("input").css("color","green");
        }
    }
}