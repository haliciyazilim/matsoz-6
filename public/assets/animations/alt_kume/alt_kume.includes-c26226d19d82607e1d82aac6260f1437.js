function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}
;
var sorgular = function (soruSirasi) {
    this.sorguSecici = soruSirasi
    console.log("Soru Seçici: " + this.sorguSecici);
    //this.sorguSecici=7;
    switch (this.sorguSecici) {
        case 1: // 2'den küçük doğal sayılar
            this.kume = new Set({
                type: Set.SMALLER_THAN,
                value: 2
            });
            break;
        case 2: //10'dan büyük 13'ten küçük doğal sayılar
            this.kume = new Set({
                type: Set.SMALLER_THAN_GREATER_THAN,
                value1: 10,
                value2:13
            });
            break;
        case 3: // Çift rakamlar
            this.kume = new Set({
                type: Set.DIGIT_EVEN,
                value: 10
            });
            break;
        case 4:
            this.kume = new Set({
                type: Set.ELEMENTS,
                elements: ["0"]
            });
            this.kume.definition='"0" rakamından oluşan küme';
            break;

        case 5:
            this.kume = new Set({
                type: Set.ELEMENTS,
                elements:["k","l","m","n"]

            });
            this.kume.definition='"k,l,m,n" harflerinden oluşan küme';
            break;

        case 6:
            this.kume = new Set({
                type: Set.FACTORS,
                value:6

            });
            break;

        case 7:
            this.kume = new Set({
                type: Set.WORDS
            });
            break;

        case 8:
            this.kume = new Set({
                type: Set.SMALLER_THAN_INTEGER,
                value:4
            });
            break;
    }
    this.uzunluk = function () {
        return this.kume.elements.length;
    }
    this.yeniSoru = function (isim) {

        this.soruCesidi = Math.floor(Math.random() * 2 + 1);
        //this.soruCesidi=2;
        console.log("Soru çeşidi: " + this.soruCesidi);
        this.isim = isim;

        if (this.soruCesidi == 2 || this.sorguSecici==7) return this.kume.getDefinitionString(isim);
        else return this.kume.getElementsString(isim);
    }
    this.getKume = function () {
        return this.kume;
    }

    this.elemanlar=function(){
        return this.kume.elements;
    }


}

istenenElemanSayisi=function(kumeTamSayisi){
    this.kumeTamSayisi=kumeTamSayisi;
    this.rastgeleSayi=this.kumeTamSayisi>3?Math.floor(Math.random()*2+2):Math.floor(Math.random()*(this.kumeTamSayisi-1)+1);
    console.log("Küme Sayısı: "+this.kumeTamSayisi);
    console.log(this.rastgeleSayi)
    return this.rastgeleSayi;

}

function semaGoster(elements){
    this.elements=elements;
    console.log("this.elements: "+this.elements);
    Interaction.ikinciKume=new Set({
        type: Set.ELEMENTS,
        elements:this.elements
    });
    console.log([Interaction.birinciKume.kume.elements , Interaction.ikinciKume.elements]);
    Set.animateSets({
        container:Interaction.container,
        position:new Point(200,100),
        sets:[Interaction.birinciKume.kume , Interaction.ikinciKume],
        letters:['A','B']

    });
}
;
var Animation = {
    images:[],
	init:function(container){
		Animation.container = container;
        Animation.aKumesi = new Set({
            type: Set.ELEMENTS,
            elements:["a","b","c"]
        });
        //Animation.aKumesi.drawVennDiagram(Animation.container,new Point(300,40),"A");
        //Animation.aKumesi.strokeColor=new RgbColor(0,0,0);

        //A
        var fSize = new Size(210, 140);
        var fDortgen = new Rectangle(new Point(165,20), fSize);

        Animation.aKumesi = new Path.Oval(fDortgen);
        Animation.aKumesi.strokeColor=new RgbColor(0,0,0);
        $(container).append("<div id='aKumeBaslik' class='elemanlar'>");
        $(container).append("<div id='elemanA' class='elemanlar'>");
        $(container).append("<div id='elemanB' class='elemanlar'>");
        $(container).append("<div id='elemanC' class='elemanlar'>");

        $(".elemanlar").css({
            position:"absolute",
            width:"20px",
            height:"20px",
            fontSize:"20px"
        });

        $("#aKumeBaslik").css({
            left:"190px",
            top:"35px"
        }).html("A");

        $("#elemanA").css({
            left:"240px",
            top:"80px"
        }).html(".a");

        $("#elemanB").css({
            left:"280px",
            top:"120px"
        }).html(".b");

        $("#elemanC").css({
            left:"320px",
            top:"80px"
        }).html(".c");

        //B
        $(container).append("<ul id='liste1'>")

        $("#liste1",container).append("<li id='madde11'>")
        $("#madde11").html("A = {a,b,c}");

        $("#liste1",container).append("<li id='madde12'>")
        $("#madde12").html("B = {a}");

        $("#liste1",container).append("<li id='madde13' class='simge'>")
        $("#madde13").html("B ⊂ A");

        Animation.bKumesi = new Path.Circle(new Point(235, 75), 20);
        Animation.bKumesi.strokeColor="red";
        Animation.bKumesi.opacity=0;



        $(container).append("<div id='bKumesiBaslik'>");
        $("#bKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"70px",
            left:"220px",
            color:"red",
            opacity:"0"


        }).html("B");


        // C
        $(container).append("<ul id='liste2'>")

        $("#liste2",container).append("<li id='madde21'>")
        $("#madde21").html("A = {a,b,c}");

        $("#liste2",container).append("<li id='madde22'>")
        $("#madde22").html("C = {b}");

        $("#liste2",container).append("<li id='madde23' class='simge'>")
        $("#madde23").html("C ⊂ A");



        Animation.cKumesi = new Path.Circle(new Point(275, 115), 20);
        Animation.cKumesi.strokeColor="red";
        Animation.cKumesi.opacity=0;



        $(container).append("<div id='cKumesiBaslik'>");
        $("#cKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"105px",
            left:"260px",
            color:"red",
            opacity:"0"


        }).html("C");

        // D
        $(container).append("<ul id='liste3'>")

        $("#liste3",container).append("<li id='madde31'>")
        $("#madde31").html("A = {a,b,c}");

        $("#liste3",container).append("<li id='madde32'>")
        $("#madde32").html("D = {c}");

        $("#liste3",container).append("<li id='madde33' class='simge'>")
        $("#madde33").html("D ⊂ A");



        Animation.dKumesi = new Path.Circle(new Point(315, 78), 20);
        Animation.dKumesi.strokeColor="red";
        Animation.dKumesi.opacity=0;



        $(container).append("<div id='dKumesiBaslik'>");
        $("#dKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"70px",
            left:"300px",
            color:"red",
            opacity:"0"


        }).html("D");


        // F
        $(container).append("<ul id='liste4'>")

        $("#liste4",container).append("<li id='madde41'>")
        $("#madde41").html("A = {a,b,c}");

        $("#liste4",container).append("<li id='madde42'>")
        $("#madde42").html("F = {a,b}");

        $("#liste4",container).append("<li id='madde43' class='simge'>")
        $("#madde43").html("F ⊂ A");



        var fSize = new Size(80, 60);
        var fDortgen = new Rectangle(new Point(215,70), fSize);
        Animation.fKumesi = new Path.Oval(fDortgen);
        Animation.fKumesi.rotate(40);

        //Animation.dKumesi = new Path.Circle(new Point(400, 110), 20);
        Animation.fKumesi.strokeColor="red";
        Animation.fKumesi.opacity=0;



        $(container).append("<div id='fKumesiBaslik'>");
        $("#fKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"80px",
            left:"225px",
            color:"red",
            opacity:"0"


        }).html("F");


        // G
        $(container).append("<ul id='liste5'>")

        $("#liste5",container).append("<li id='madde51'>")
        $("#madde51").html("A = {a,b,c}");

        $("#liste5",container).append("<li id='madde52'>")
        $("#madde52").html("G = {a,c}");

        $("#liste5",container).append("<li id='madde53' class='simge'>")
        $("#madde53").html("G ⊂ A");



        var gSize = new Size(120, 50);
        var gDortgen = new Rectangle(new Point(215,50), gSize);
        Animation.gKumesi = new Path.Oval(gDortgen);
        //Animation.gKumesi.rotate(-10);

        //Animation.dKumesi = new Path.Circle(new Point(400, 110), 20);
        Animation.gKumesi.strokeColor="red";
        Animation.gKumesi.opacity=0;



        $(container).append("<div id='gKumesiBaslik'>");
        $("#gKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"70px",
            left:"215px",
            color:"red",
            opacity:"0"


        }).html("G");


        // H
        $(container).append("<ul id='liste6'>")

        $("#liste6",container).append("<li id='madde61'>")
        $("#madde61").html("A = {a,b,c}");

        $("#liste6",container).append("<li id='madde62'>")
        $("#madde62").html("H = {b,c}");

        $("#liste6",container).append("<li id='madde63' class='simge'>")
        $("#madde63").html("H ⊂ A");


        var hSize = new Size(100, 50);
        var hDortgen = new Rectangle(new Point(245,70), hSize);
        Animation.hKumesi = new Path.Oval(hDortgen);
        Animation.hKumesi.rotate(-50);

        //Animation.dKumesi = new Path.Circle(new Point(400, 110), 20);
        Animation.hKumesi.strokeColor="red";
        Animation.hKumesi.opacity=0;



        $(container).append("<div id='hKumesiBaslik'>");
        $("#hKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"70px",
            left:"350px",
            color:"red",
            opacity:"0"


        }).html("H");


        // A alt küme A
        $(container).append("<ul id='liste7'>")

        $("#liste7",container).append("<li id='madde71'>")
        $("#madde71").html("A = {a,b,c}");

        $("#liste7",container).append("<li id='madde72'>")
        $("#madde72").html("A = {a,b,c}");

        $("#liste7",container).append("<li id='madde73' class='simge'>")
        $("#madde73").html("A ⊂ A");

        $("#liste7",container).append("<li id='madde74'>")
        $("#madde74").html("Her küme kendinin alt kümesidir.");




        // Boş küme
        $(container).append("<ul id='liste8'>")

        $("#liste8",container).append("<li id='madde81'>")
        $("#madde81").html("A = {a,b,c}");

        $("#liste8",container).append("<li id='madde82'>")
        $("#madde82").html("Boş küme {} Ø");

        $("#liste8",container).append("<li id='madde83' class='simge'>")
        $("#madde83").html("Ø ⊂ A");

        $("#liste8",container).append("<li id='madde84'>")
        $("#madde84").html("Boş küme her kümenin alt kümesidir.");




        // Evrensel Küme
        $(container).append("<ul id='liste9'>")

        $("#liste9",container).append("<li id='madde91'>")
        $("#madde91").html("A = {a,b,c}");

        $("#liste9",container).append("<li id='madde92'>")
        $("#madde92").html("E  evrensel küme");

        $("#liste9",container).append("<li id='madde93' class='simge'>")
        $("#madde93").html("A ⊂ E");

        $("#liste9",container).append("<li id='madde94'>")
        $("#madde94").html("Her küme evrensel kümenin alt kümesidir.");



        var eSize = new Size(240, 160);
        Animation.eKumesi = new Path.Rectangle(new Point(150,10), eSize);
        Animation.eKumesi.strokeColor="red";
        Animation.eKumesi.opacity=0;



        $(container).append("<div id='eKumesiBaslik'>");
        $("#eKumesiBaslik").css({
            position:"absolute",
            width:"200px",
            height:"30px",
            top:"35px",
            left:"385px",
            color:"red",
            opacity:"0"


        }).html("E");


        $("ul",container).css({
            position:"absolute",

            top:"60px",
            left:"420px"

        });

        $(".simge").css("color","red");

        $("li",container).css("height","20").css("opacity","0");

        //birinci küme ve elemanlarının gösterimi

        Animation.bKumesi.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 1000

        });


        $("#madde11").css("opacity","1")
        $("#bKumesiBaslik").delay(1000).animate({opacity:"1"},1000).delay(4000).animate({opacity:"0"},1000);
        $("#madde12").delay(2000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);;
        $("#madde13").delay(3000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);;

        Animation.bKumesi.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 6000

        });

        //ikinci küme ve elemanlarıın gösterimi

        Animation.cKumesi.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 7000

        });



        $("#cKumesiBaslik").delay(7000).animate({opacity:"1"},1000).delay(4000).animate({opacity:"0"},1000);
        $("#madde22").delay(8000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde23").delay(9000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);

        Animation.cKumesi.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 12000

        });

        //üçüncü küme ve elemanlarıın gösterimi

        Animation.dKumesi.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 13000

        });



        $("#dKumesiBaslik").delay(13000).animate({opacity:"1"},1000).delay(4000).animate({opacity:"0"},1000);
        $("#madde32").delay(14000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde33").delay(15000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);

        Animation.dKumesi.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 18000

        });


        //dördüncü küme ve elemanlarıın gösterimi

        Animation.fKumesi.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 19000

        });



        $("#fKumesiBaslik").delay(19000).animate({opacity:"1"},1000).delay(4000).animate({opacity:"0"},1000);
        $("#madde42").delay(20000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde43").delay(21000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);

        Animation.fKumesi.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 24000

        });


        //beşinci küme ve elemanlarıın gösterimi

        Animation.gKumesi.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 25000

        });



        $("#gKumesiBaslik").delay(25000).animate({opacity:"1"},1000).delay(4000).animate({opacity:"0"},1000);
        $("#madde52").delay(26000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde53").delay(27000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);

        Animation.gKumesi.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 30000

        });

        //altıncı küme ve elemanlarıın gösterimi

        Animation.hKumesi.animate({
            style: {
                opacity: 1
            },
            duration: 1000,
            delay: 31000

        });



        $("#hKumesiBaslik").delay(31000).animate({opacity:"1"},1000).delay(4000).animate({opacity:"0"},1000);
        $("#madde62").delay(32000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde63").delay(33000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);

        Animation.hKumesi.animate({
            style: {
                opacity: 0
            },
            duration: 1000,
            delay: 36000

        });

        //yedinci küme ve elemanlarıın gösterimi: A alt küme A

        Animation.aKumesi.animate({
            style: {
                strokeColor: new RgbColor(1,0,0)
            },
            duration: 1000,
            delay: 37000

        });



        $("#aKumeBaslik").delay(37000).animate({color:"#FF0000"},1000).delay(5000).animate({color:"#000000"},1000);
        $("#madde72").delay(38000).animate({opacity:"1"},1000).delay(4000).animate({opacity:"0"},1000);
        $("#madde73").delay(39000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde74").delay(40000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);

        Animation.aKumesi.animate({
            style: {
                strokeColor: new RgbColor(0,0,0)
            },
            duration: 1000,
            delay: 43000

        });

        //sekizinci küme ve elemanlarıın gösterimi: A alt küme A

        $("#madde82").delay(44000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde83").delay(45000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);
        $("#madde84").delay(46000).animate({opacity:"1"},1000).delay(1000).animate({opacity:"0"},1000);


        //dokuzuncu küme ve elemanlarıın gösterimi: Evrensel küme

        Animation.eKumesi.animate({
            style: {
                opacity:1
            },
            duration: 1000,
            delay: 49000

        });



        $("#eKumesiBaslik").delay(50000).animate({opacity:"1"},1000).delay(5000).animate({opacity:"0"},1000);
        $("#madde92").delay(51000).animate({opacity:"1"},1000).delay(4000).animate({opacity:"0"},1000);
        $("#madde93").delay(52000).animate({opacity:"1"},1000).delay(3000).animate({opacity:"0"},1000);
        $("#madde94").delay(53000).animate({opacity:"1"},1000).delay(2000).animate({opacity:"0"},1000);

        Animation.eKumesi.animate({
            style: {
                opacity:0
            },
            duration: 1000,
            delay: 56000

        });

        Main.animationFinished(56000);

    }

}
;
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
            .css("top","100px")
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

        Main.interactionProject.activeLayer.removeChildren();
        Interaction.flushInputs();
        $("#dogruCevap").html("");



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
        Interaction.dogruCevaplar=[]
        for(var i=0; i<Interaction.birinciKume.elemanlar().length;i++){
            Interaction.dogruCevaplar.push(Interaction.birinciKume.elemanlar()[i]);
        }
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
        var inputUzunluk=$(".input").length;
        var girilenDegerler=[];
        for (var i=0; i<inputUzunluk;i++){
            girilenDegerler.push($(".input").get(i).value);
        }
        console.log("girilen Degerler: "+girilenDegerler);
		semaGoster(girilenDegerler);
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
        var kumeAdresArray=Util.getShuffledArray(Interaction.birinciKume.uzunluk());
        Interaction.kumeElemanlar=Interaction.birinciKume.elemanlar();
        console.log(Interaction.kumeElemanlar[kumeAdresArray[i]]);
        Interaction.yeniKume=[];
        $("#dogruCevap").append("<b>A ⊂ B = {</b> ");
        for(var i=0; i<Interaction.inputs.length;i++){
            $("#dogruCevap").append(Interaction.kumeElemanlar[kumeAdresArray[i]]);
            Interaction.yeniKume.push(Interaction.kumeElemanlar[kumeAdresArray[i]]);
            if((i+1)!=Interaction.inputs.length)
                $("#dogruCevap").append(", ");
            else
                $("#dogruCevap").append(" <b>}</b>");
        }


        Interaction.setStatus('Yanlış cevap, doğru cevaplardan biri yukarıda gösterilmiştir.',false);
		$("input:not(.dogru)").css("color","red");
        $(".dogru").css("color","green");

        semaGoster(Interaction.yeniKume);
		}
}
;
var Set = Class.extend({
    init:function(opt){
        this.elements = [];
        switch(opt.type){
            case Set.ELEMENTS:
                this.definition = ""+opt.elements.length+" elemanlı küme";
                this.elements = [];
                for(var i=0;i<opt.elements.length;i++){
                    var isExist;
                    //remove the duplicates
                    for(var j=0;j<this.elements.length;j++)
                        if(opt.elements[i] == this.elements[j])
                            isExist = true;
                    if(isExist)
                        continue;
                    this.elements.push(opt.elements[i])
                }
                this.elements.sort(function(a,b){return a-b});
                break;
            case Set.SMALLER_THAN:
                this.definition = ""+this.getValueStr(opt.value)+" küçük doğal sayılar";
                for(var i = 0; i < opt.value; i++){
                    this.elements.push(i);
                }
                break;

            case Set.SMALLER_THAN_ODD:
                this.definition = ""+this.getValueStr(opt.value)+" küçük tek doğal sayılar";
                for(var i = 0; i < opt.value; i++){
                    if(i % 2 == 1){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.SMALLER_THAN_EVEN:
                this.definition = ""+this.getValueStr(opt.value)+" küçük çift doğal sayılar";
                for(var i = 0; i < opt.value; i++){
                    if(i % 2 == 0){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.SMALLER_THAN_PRIME:
                this.definition = ""+this.getValueStr(opt.value)+" küçük asal sayılar";
                for(var i = 0; i < opt.value; i++){
                    if(Util.isPrimeNumber(i)){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.SMALLER_THAN_GREATER_THAN:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük doğal sayılar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    this.elements.push(i);
                }
                break;
            case Set.SMALLER_THAN_GREATER_THAN_ODD:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük tek doğal sayılar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    if(i % 2 == 1){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.SMALLER_THAN_GREATER_THAN_EVEN:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük çift doğal sayılar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    if(i % 2 == 0){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.SMALLER_THAN_GREATER_THAN_PRIME:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük asal sayılar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    if(Util.isPrimeNumber(i)){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.FACTORS:
                this.definition = ""+this.getValueStr(opt.value, 1)+" çarpanları";
                a = [];
                a = Util.getFactors(opt.value);
                for(var i = 0; i < a.length; i++){
                    this.elements.push(a[i]);
                }
                break;
            case Set.MULTIPLIES:
                this.definition = ""+this.getValueStr(opt.value1,1)+" "+this.getValueStr(opt.value2)+" küçük katları";
                for(var i = 1; i < opt.value2/opt.value1; i++){
                    this.elements.push(opt.value1*i);
                }
                break;
            case Set.DIGIT:
                this.definition = "rakamlar";
                for(var i = 0; i < 10; i++){
                    this.elements.push(i);
                }
                this.type = opt.type;
                break;
            case Set.DIGIT_ODD:
                this.definition = "tek rakamlar";
                for(var i = 0; i < 10; i++){
                    if(i % 2 == 1){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.DIGIT_EVEN:
                this.definition = "çift rakamlar";
                for(var i = 0; i < 10; i++){
                    if(i % 2 == 0){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.SMALLER_THAN_DIGIT:
                this.definition = ""+this.getValueStr(opt.value)+" küçük rakamlar";
                if(opt.value > 10){
                    var limit = 10;
                }
                else{
                    var limit = opt.value;
                }
                for(var i = 0; i < limit; i++){
                    this.elements.push(i);
                }
                break;
            case Set.SMALLER_THAN_DIGIT_ODD:
                this.definition = ""+this.getValueStr(opt.value)+" küçük tek rakamlar";
                if(opt.value > 10){
                    var limit = 10;
                }
                else{
                    var limit = opt.value;
                }
                for(var i = 0; i < limit; i++){
                    if(i % 2 == 1){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.SMALLER_THAN_DIGIT_EVEN:
                this.definition = ""+this.getValueStr(opt.value)+" küçük çift rakamlar";
                if(opt.value > 10){
                    var limit = 10;
                }
                else{
                    var limit = opt.value;
                }
                for(var i = 0; i < limit; i++){
                    if(i % 2 == 0){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.GREATER_THAN_DIGIT:
                this.definition = ""+this.getValueStr(opt.value)+" büyük rakamlar";
                if(opt.value < 0){
                    var limit = 0;
                }
                else{
                    var limit = opt.value;
                }
                for(var i = limit+1; i < 10; i++){
                    this.elements.push(i);
                }
                break;
            case Set.GREATER_THAN_DIGIT_ODD:
                this.definition = ""+this.getValueStr(opt.value)+" büyük tek rakamlar";
                if(opt.value < 0){
                    var limit = 0;
                }
                else{
                    var limit = opt.value;
                }
                for(var i = limit+1; i < 10; i++){
                    if(i % 2 == 1){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.GREATER_THAN_DIGIT_EVEN:
                this.definition = ""+this.getValueStr(opt.value)+" büyük çift rakamlar";
                if(opt.value < 0){
                    var limit = 0;
                }
                else{
                    var limit = opt.value;
                }
                for(var i = limit+1; i < 10; i++){
                    if(i % 2 == 0){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.SMALLER_THAN_GREATER_THAN_DIGIT:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük rakamlar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    this.elements.push(i);
                }
                break;
            case Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük tek rakamlar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    if(i % 2 == 1){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN:
                this.definition = ""+this.getValueStr(opt.value1)+" büyük "+this.getValueStr(opt.value2)+" küçük çift rakamlar";
                for(var i = opt.value1+1; i < opt.value2; i++){
                    if(i % 2 == 0){
                        this.elements.push(i);
                    }
                }
                break;
            case Set.SMALLER_THAN_LETTER:
                this.definition = ""+this.getValueStr(opt.value,2)+" önce gelen harfler";
                var startIndex = 0;
                var endIndex = Set.turkishLetters.indexOf(opt.value);
                for(var i = startIndex; i < endIndex; i++){
                    this.elements.push(Set.turkishLetters[i]);
                }
                break;
            case Set.GREATER_THAN_LETTER:
                this.definition = ""+this.getValueStr(opt.value,2)+" sonra gelen harfler";
                var startIndex = Set.turkishLetters.indexOf(opt.value)+1;
                var endIndex = 29;
                for(var i = startIndex; i < endIndex; i++){
                    this.elements.push(Set.turkishLetters[i]);
                }
                break;
            case Set.SMALLER_THAN_GREATER_THAN_LETTER:
            //    this.definition = ""+this.getValueStr(opt.value1,2)+" sonra "+this.getValueStr(opt.value2,2) +" önce gelen harfler";
                this.definition = ""+opt.value1+" ile "+opt.value2+" arasındaki harfler";
                var startIndex = Set.turkishLetters.indexOf(opt.value1)+1;
                var endIndex = Set.turkishLetters.indexOf(opt.value2);
                for(var i = startIndex; i < endIndex; i++){
                    this.elements.push(Set.turkishLetters[i]);
                }
                break;
            case Set.WORDS:
                var a = Util.randomInteger(0,15);
                var word = Set.wordsArray[a];
                this.definition = "\""+word+"\" sözcüğündeki harfler";
                for(var i = 0; i < word.length; i++){
                    if(this.elements.indexOf(word[i]) == -1){
                        this.elements.push(word[i]);
                    }
                }
                break;
            case Set.SMALLER_THAN_INTEGER:
                this.definition = ""+this.getValueStr(opt.value)+" küçük pozitif tam sayılar";
                for(var i = 1; i < opt.value; i++){
                    this.elements.push(i);
                }
                break;
        }
        this.type = opt.type;
    },

    isEqualSet:function(otherSet){
        if(this.elements.length != otherSet.elements.length){
            return false;
        }
        else{
            var a = [];
            var correctN = 0;
            for(var i = 0; i < this.elements.length; i++){
                a[i] = this.elements[i];
            }
            for(var i = 0; i < this.elements.length; i++){
                for(var j = 0; j < otherSet.elements.length; j++){
                    if(a[i] == otherSet.elements[j]){
                        a[i] = "axxwt";
                    }
                }
            }

            for(var i = 0; i < a.length; i++){
                if(a[i] == "axxwt"){
                    correctN += 1;
                }
            }

            if(correctN == this.elements.length){
                return true;
            }
            else{
                return false;
            }
        }
    },

    isSubsetOf:function(otherSet){
        if(this.elements.length > otherSet.elements.length){
            return false;
        }
        else{
            var a = [];
            var correctN = 0;
            for(var i = 0; i < this.elements.length; i++){
                a[i] = this.elements[i];
            }
            for(var i = 0; i < this.elements.length; i++){
                for(var j = 0; j < otherSet.elements.length; j++){
                    if(a[i] == otherSet.elements[j]){
                        a[i] = "axxwt";
                    }
                }
            }

            for(var i = 0; i < a.length; i++){
                if(a[i] == "axxwt"){
                    correctN += 1;
                }
            }

            if(correctN == this.elements.length){
                return true;
            }
            else{
                return false;
            }
        }
    },

    isDisjointWith:function(otherSet){
        var a = [];
        var correctN = 0;
        for(var i = 0; i < this.elements.length; i++){
            a[i] = this.elements[i];
        }
        for(var i = 0; i < this.elements.length; i++){
            for(var j = 0; j < otherSet.elements.length; j++){
                if(a[i] == otherSet.elements[j]){
                    a[i] = "axxwt";
                }
            }
        }

        for(var i = 0; i < a.length; i++){
            if(a[i] == "axxwt"){
                correctN += 1;
            }
        }

        if(correctN == 0){
            return true;
        }
        else{
            return false;
        }
    },

    isIntersectingWith:function(otherSet){
        var a = [];
        var correctN = 0;
        for(var i = 0; i < this.elements.length; i++){
            a[i] = this.elements[i];
        }
        for(var i = 0; i < this.elements.length; i++){
            for(var j = 0; j < otherSet.elements.length; j++){
                if(a[i] == otherSet.elements[j]){
                    a[i] = "axxwt";
                }
            }
        }

        for(var i = 0; i < a.length; i++){
            if(a[i] == "axxwt"){
                correctN += 1;
            }
        }

        if(correctN != 0){
            return true;
        }
        else{
            return false;
        }
    },

    getIntersection:function(otherSet){
        var intersect = [];
        for(var i = 0; i < this.elements.length; i++){
            for(var j = 0; j < otherSet.elements.length; j++){
                if(this.elements[i] == otherSet.elements[j]){
                    intersect.push(this.elements[i]);
                }
            }
        }
        intersect.sort(function(a,b){return a-b});
        var c = new Set({type:Set.ELEMENTS, elements:intersect});
        var cStr = "";
        if(otherSet.type == Set.ELEMENTS){
            cStr = "'nin";
        }
        else if(otherSet.type == Set.FACTORS || otherSet.type == Set.MULTIPLIES){
            cStr = "'nın";
        }
        else{
            cStr = "'ın"
        }
        c.definition = ""+this.definition+" ile "+otherSet.definition+""+cStr+" kesişimi";

        return c;
    },

    getUnion:function(otherSet){
        var union = [];
        var other = [];
        for(var t = 0; t < otherSet.elements.length; t++){
            other.push(otherSet.elements[t]);
        }

        for(var i = 0; i < this.elements.length; i++){
            union.push(this.elements[i]);
        }

        for(var j = 0; j < other.length; j++){
            for(var k = 0; k < this.elements.length; k++){
                if(other[j] == this.elements[k]){
                    other[j] = "axxwt";
                    break;
                }
            }
        }

        for(var m = 0; m < other.length; m ++){
            if(other[m] != "axxwt"){
                union.push(other[m]);
            }
        }

        union.sort(function(a,b){return a-b});
        var c = new Set({type:Set.ELEMENTS, elements:union});
        var cStr = "";
        if(otherSet.type == Set.ELEMENTS){
            cStr = "'nin";
        }
        else if(otherSet.type == Set.FACTORS || otherSet.type == Set.MULTIPLIES){
            cStr = "'nın";
        }
        else{
            cStr = "'ın"
        }
        c.definition = ""+this.definition+" ile "+otherSet.definition+""+cStr+" birleşimi";
        return c;
    },

    getDifference : function(otherSet){
        var difference = [];
        var th = [];
        var num;

        for(var i = 0; i < this.elements.length; i++){
            th.push(this.elements[i]);
        }

        for(var j = 0; j < th.length; j++){
            for(var k = 0, num = 0; k < otherSet.elements.length; k++){
                if(th[j] != otherSet.elements[k]){
                    num += 1;
                }
            }
            if(num == otherSet.elements.length){
                difference.push(th[j]);
            }
        }




        difference.sort(function(a,b){return a-b});

        var c = new Set({type:Set.ELEMENTS, elements:difference});
        var cStr = "";
        if(otherSet.type == Set.ELEMENTS){
            cStr = "'nin";
        }
        else if(otherSet.type == Set.FACTORS || otherSet.type == Set.MULTIPLIES){
            cStr = "'nın";
        }
        else{
            cStr = "'ın"
        }
        c.definition = ""+this.definition+" ile "+otherSet.definition+""+cStr+" farkı";
        return c;
    },

    getSubSets:function(){

    },

    getComplement : function(universalSet){
        return universalSet.getDifference(this);
    },

    getDefinitionString : function(setLetter){
        if(setLetter == undefined){
            var definitionString = "{ "+this.definition+" }";
        }
        else{
            var definitionString = ""+setLetter+" = { "+this.definition+" }";
        }

        return definitionString;
    },

    getElementsString : function(setLetter){
        if(setLetter == undefined){
            var elementsString = "{ ";
        }
        else{
            var elementsString = ""+setLetter+" = { ";
        }
        for(var i = 0; i < this.elements.length-1; i++){
            elementsString += ""+this.elements[i]+", ";
        }
        elementsString += this.elements[this.elements.length-1]+" }";

        return elementsString;
    },

    getValueStr:function(value,opt){
        if(opt == undefined){
            opt = 0;
        }
        if(opt == 0){
            var a = "";
            if(value % 90 == 0){
                a += value+"'dan";
            }
            else if(value % 80 == 0 || value % 50 == 0 ){
                a += value+"'den";
            }
            else if(value % 70 == 0){
                a += value+"'ten";
            }
            else if(value % 60 == 0 || value % 40 == 0){
                a += value+"'tan";
            }
            else if(value % 30 == 0){
                a += value+"'dan";
            }
            else if(value % 20 == 0){
                a += value+"'den";
            }
            else if(value % 10 == 0){
                a += value+"'dan";
            }
            else if(value % 10 == 1 || value % 10 == 2 || value % 10 == 7 || value % 10 == 8){
                a += value+"'den";
            }
            else if(value % 10 == 3 || value % 10 == 4 || value % 10 == 5){
                a += value+"'ten";
            }
            else if(value % 10 == 6 || value % 10 == 9){
                a += value+"'dan";
            }
        }
        else if(opt == 1){
            var a = "";
            if(value % 90 == 0 || value % 60 == 0){
                a += value+"'ın";
            }
            else if(value % 80 == 0 || value % 70 == 0){
                a += value+"'in";
            }
            else if(value % 50 == 0){
                a += value+"'nin";
            }
            else if(value % 40 == 0){
                a += value+"'ın";
            }
            else if(value % 30 == 0){
                a += value+"'un";
            }
            else if(value % 20 == 0){
                a += value+"'nin";
            }
            else if(value % 10 == 0 || value % 10 == 9){
                a += value+"'un";
            }
            else if(value % 10 == 8 || value % 10 == 1 || value % 10 == 5){
                a += value+"'in";
            }
            else if(value % 10 == 7 || value % 10 == 2){
                a += value+"'nin";
            }
            else if(value % 10 == 6){
                a += value+"'nın";
            }
            else if(value % 10 == 4 || value % 10 == 3){
                a += value+"'ün";
            }
        }
        else if(opt == 2){
            var a = "";
            var d = ["a","ı","o", "u"];
            if(d.indexOf(value) == -1){
                a += value+"'den";
            }
            else{
                a += value+"'dan";
            }
        }

        return a;
    },

    getRandomSubset:function(){
        var set;
        if(this.type == Set.ELEMENTS){
            var index1 = Util.randomInteger(0,5);
            var index2 = Util.randomInteger(index1+1,6);
            set = new Set({
                type:Set.ELEMENTS,
                elements:this.elements.slice(index1,index2)
            });
        }
        else{
            do
                set = Set.randomGenerator();
            while(set == undefined || !set.isSubsetOf(this));
        }
        return set;
    },
    getRandomDisjointSet:function(){
        var set;

        do
            set = Set.randomGenerator();
        while(set == undefined || !set.isDisjointWith(this));
        return set;
    },
    getRandomIntersectingSet:function(){
        var set;
        do
            set = Set.randomGenerator();
        while(set == undefined || !set.isIntersectingWith(this));
        return set;
    },

    removeVennDiagram : function(){
        this.vennDiagram.remove();
    },
    drawVennDiagram : function(container, topLeftPoint, setLetter){
		var noOfElements = this.elements.length;
		this.vennDiagram = new Group();
		
		var vennSize = new Size(this.elements.length*10*1.8 + 110, /*this.elements.length*6 +*/ 128);
		
		var vennBoundingBox = new Rectangle(topLeftPoint, vennSize);
        var letter = new PointText(topLeftPoint.add(5,20));
        letter.content = setLetter;
        letter.set_style({fontSize:13});
        this.letter = letter;
		var oval = Path.Oval(vennBoundingBox);
		oval.strokeColor = 'black';
		oval.fillColor = new RgbColor(1, 1, 1, 0);
		this.oval = oval;
		var elementBoxSize = new Size(vennSize.width/(noOfElements+0.8), vennSize.height/(noOfElements+0.8))

		if (elementBoxSize.width < 44)
			elementBoxSize.width = 44;

		if (elementBoxSize.height < 30)
			elementBoxSize.height = 30;
		
		var elementLocations = [];
		
		var isAvailable = function (point) {
			var point2 = point.add(elementBoxSize.width, -elementBoxSize.height);
			var point3 = point.add(elementBoxSize.width, 0);
			var point4 = point.add(0, -elementBoxSize.height);						
			
			var corners = [
				point,
				point2,
				point3,
				point4
			]
			
			for (var i = 0; i < 4; i++) {
				if (!oval.hitTest(corners[i], { fill: true, stroke: false, segments: true, tolerance: -16 })) {
					return false;
				}
				
				for (var j = 0; j < elementLocations.length; j++) {
					var otherRect = new Rectangle(new Point(elementLocations[j].x, elementLocations[j].y - elementBoxSize.height),
													elementBoxSize);
													
					// console.log(otherRect, corners[i]);
													
					if (otherRect.contains(corners[i])) {
						return false;
					}
				}
			}
			return true;
		}
		
		for (var i = 0; i < noOfElements; i++) {
			var point;
			var trials = 0;
			do {
				point = new Point(Util.randomInteger(topLeftPoint.x/5, (topLeftPoint.x + vennSize.width)/5)*5,
				 				Util.randomInteger(topLeftPoint.y/5, (topLeftPoint.y+ vennSize.height)/5)*5);
				
				trials++;
			} while (!isAvailable(point) && trials < noOfElements*20);
						
			var text = new PointText(point.add(elementBoxSize.width/2 - 10, -elementBoxSize.height/2 + 8));
			text.set_style({
				fontSize: 14
			})
			text.content = "."+this.elements[i];
			this.vennDiagram.addChild(text);
			elementLocations.push(point);
			if (trials == noOfElements*20) {
				this.removeVennDiagram();
				this.vennDiagram = new Group();
				elementLocations = [];
				i = -1;
			}
		}
    }
});


Set.ELEMENTS = 0;
Set.SMALLER_THAN = 1;   // length option
Set.SMALLER_THAN_ODD = 2;   // length option
Set.SMALLER_THAN_EVEN = 3;  // length option
Set.SMALLER_THAN_PRIME = 4;     // length option
Set.SMALLER_THAN_GREATER_THAN = 5;  // length option
Set.SMALLER_THAN_GREATER_THAN_ODD = 6;  // length option
Set.SMALLER_THAN_GREATER_THAN_EVEN = 7;     // length option
Set.SMALLER_THAN_GREATER_THAN_PRIME = 8;    // length option
Set.FACTORS = 9;    // length option
Set.MULTIPLIES = 10;    // length option
Set.DIGIT = 11;
Set.DIGIT_ODD = 12;
Set.DIGIT_EVEN = 13;
Set.SMALLER_THAN_DIGIT = 14;
Set.SMALLER_THAN_DIGIT_ODD = 15;
Set.SMALLER_THAN_DIGIT_EVEN = 16;
Set.GREATER_THAN_DIGIT = 17;
Set.GREATER_THAN_DIGIT_ODD = 18;
Set.GREATER_THAN_DIGIT_EVEN = 19;
Set.SMALLER_THAN_GREATER_THAN_DIGIT = 20;
Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD = 21;
Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN = 22;
Set.SMALLER_THAN_LETTER = 23;   // length option
Set.GREATER_THAN_LETTER = 24;   // length option
Set.SMALLER_THAN_GREATER_THAN_LETTER = 25;  // length option
Set.WORDS = 26;
Set.SMALLER_THAN_INTEGER = 27;

Set.turkishLetters = [];
Set.turkishLetters[0] = "a";
Set.turkishLetters[1] = "b";
Set.turkishLetters[2] = "c";
Set.turkishLetters[3] = "ç";
Set.turkishLetters[4] = "d";
Set.turkishLetters[5] = "e";
Set.turkishLetters[6] = "f";
Set.turkishLetters[7] = "g";
Set.turkishLetters[8] = "ğ";
Set.turkishLetters[9] = "h";
Set.turkishLetters[10] = "ı";
Set.turkishLetters[11] = "i";
Set.turkishLetters[12] = "j";
Set.turkishLetters[13] = "k";
Set.turkishLetters[14] = "l";
Set.turkishLetters[15] = "m";
Set.turkishLetters[16] = "n";
Set.turkishLetters[17] = "o";
Set.turkishLetters[18] = "ö";
Set.turkishLetters[19] = "p";
Set.turkishLetters[20] = "r";
Set.turkishLetters[21] = "s";
Set.turkishLetters[22] = "ş";
Set.turkishLetters[23] = "t";
Set.turkishLetters[24] = "u";
Set.turkishLetters[25] = "ü";
Set.turkishLetters[26] = "v";
Set.turkishLetters[27] = "y";
Set.turkishLetters[28] = "z";

Set.wordsArray = [];

Set.wordsArray[0] = "portakal";
Set.wordsArray[1] = "türkçe";
Set.wordsArray[2] = "bilgisayar";
Set.wordsArray[3] = "okul";
Set.wordsArray[4] = "sınıf";
Set.wordsArray[5] = "aile";
Set.wordsArray[6] = "ahlak";
Set.wordsArray[7] = "küme";
Set.wordsArray[8] = "öğretmen";
Set.wordsArray[9] = "gündüz";
Set.wordsArray[10] = "gece";
Set.wordsArray[11] = "aynalar";
Set.wordsArray[12] = "kütüphane";
Set.wordsArray[13] = "kahverengi";
Set.wordsArray[14] = "mendil";


Set.randomGenerator = function(type, length){

    if(length == undefined || isNaN(length)){
        length = 0;
    }
    var sType,elements,value,value1,value2;
    if(type == undefined || isNaN(type)){
        if(length == 0){
            sType= Util.randomInteger(1,28);
        }
        else{
            sType = Util.randomInteger(1,26,[11,12,13,14,15,16,17,18,19,20,21,22,26,27]);
        }
    }
    else{
        sType = type;
    }
    var set;
    switch(sType){
        case 1:{     // Set.SMALLER_THAN
            if(length == 0){
                var randNum = Util.randomInteger(1,7);
            }
            else{
                var randNum = length;
            }
            set = new Set({type:Set.SMALLER_THAN, value:randNum});
            break;
        }
        case 2:{     // Set.SMALLER_THAN_ODD
            if(length == 0){
                var randNum = Util.randomInteger(2,12);
            }
            else{
                var randNum = 2*length;
            }
            set = new Set({type:Set.SMALLER_THAN_ODD, value:randNum});
            break;
        }
        case 3:{     // Set.SMALLER_THAN_EVEN
            if(length == 0){
                var randNum = Util.randomInteger(1,11);
            }
            else{
                var randNum = 2*length;
            }
            set = new Set({type:Set.SMALLER_THAN_EVEN, value:randNum});
            break;
        }
        case 4:{     // Set.SMALLER_THAN_PRIME
            if(length == 0){
                var randNum = Util.randomInteger(3,14);
            }
            else{
                if(length == 7){
                    var randNum = 18;
                }
                else if(length == 8){
                    var randNum = 20;
                }
                else if(length == 9){
                    var randNum = 24;
                }
                else{
                    var randNum = 30;
                }
            }
            set = new Set({type:Set.SMALLER_THAN_PRIME, value:randNum});
            break;
        }
        case 5:{     // Set.SMALLER_THAN_GREATER_THAN
            if(length == 0){
                var randNum1 = Util.randomInteger(1,90);
                var randNum2 = Util.randomInteger(randNum1+2, randNum1+8);
            }
            else{
                var randNum1 = Util.randomInteger(1, 90);
                var randNum2 = randNum1+length+1;
            }
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN, value1:randNum1, value2:randNum2});
            break;
        }
        case 6:{     // Set.SMALLER_THAN_GREATER_THAN_ODD
            if(length == 0){
                var randNum1 = Util.randomInteger(1,80);
                var randNum2 = randNum1+Util.randomInteger(4,13);
            }
            else{
                var randNum1 = Util.randomInteger(1,78);
                var randNum2 = randNum1+2*length+1;
            }
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_ODD, value1:randNum1, value2:randNum2});
            break;
        }
        case 7:{     // Set.SMALLER_THAN_GREATER_THAN_EVEN
            if(length == 0){
                var randNum1 = Util.randomInteger(1,80);
                var randNum2 = randNum1+Util.randomInteger(4,13);
            }
            else{
                var randNum1 = Util.randomInteger(1,78);
                var randNum2 = randNum1+2*length+1;
            }
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_EVEN, value1:randNum1, value2:randNum2});
            break;
        }
        case 8:{     // Set.SMALLER_THAN_GREATER_THAN_PRIME
            if(length == 0){
                do{
                    var randNum1 = Util.randomInteger(1, 90);
                    var randNum2 = Util.randomInteger(1, 90);
                    var primeNums = [];
                    for(var i = randNum1+1; i < randNum2; i++){
                        if(Util.isPrimeNumber(i)){
                            primeNums.push(i);
                        }
                    }
                } while(primeNums.length == 0 || primeNums.length > 6)
            }
            else{
                do{
                    var randNum1 = Util.randomInteger(1,30);
                    var randNum2 = Util.randomInteger(randNum1+10, 100);
                    var primeNums = [];
                    for(var i = randNum1+1; i < randNum2; i++){
                        if(Util.isPrimeNumber(i)){
                            primeNums.push(i);
                        }
                    }
                } while(primeNums.length != length)
            }
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_PRIME, value1:randNum1, value2:randNum2});
            break;
        }
        case 9:{     // Set.FACTORS
            if(length == 0){
                do{
                    var randNum = Util.randomInteger(1,97);
                    var factors = [];
                    factors = Util.getFactors(randNum);
                }while(factors.length > 6)
            }
            else{
                do{
                    var randNum = Util.randomInteger(1,99);
                    var factors = [];
                    factors = Util.getFactors(randNum);
                } while(factors.length != length)
            }
            set = new Set({type:Set.FACTORS, value:randNum});
            break;
        }
        case 10:{    // Set.MULTIPLIES
            if(length == 0){
                var randNum1 = Util.randomInteger(2,17);
                var randNum2 = randNum1+randNum1*Util.randomInteger(0, 6)+Util.randomInteger(1,randNum1);
            }
            else{
                var randNum1 = Util.randomInteger(2,10);
                var randNum2 = randNum1*length+(Util.randomInteger(1,randNum1));
            }
            set = new Set({type:Set.MULTIPLIES, value1:randNum1, value2:randNum2});
            break;
        }
        case 11:{   // Set.DIGIT
            set = new Set({type:Set.DIGIT});
            break;
        }
        case 12:{   // Set.DIGIT_ODD
            set = new Set({type:Set.DIGIT_ODD});
            break;
        }
        case 13:{   // Set.DIGIT_EVEN
            set = new Set({type:Set.DIGIT_EVEN});
            break;
        }
        case 14:{   // Set.SMALLER_THAN_DIGIT
            var randNum = Util.randomInteger(1,11);
            set = new Set({type:Set.SMALLER_THAN_DIGIT, value:randNum});
            break;
        }
        case 15:{   // Set.SMALLER_THAN_DIGIT_ODD
            var randNum = Util.randomInteger(2,11);
            set = new Set({type:Set.SMALLER_THAN_DIGIT_ODD, value:randNum});
            break;
        }
        case 16:{   // Set.SMALLER_THAN_DIGIT_EVEN
            var randNum = Util.randomInteger(1,11);
            set = new Set({type:Set.SMALLER_THAN_DIGIT_EVEN, value:randNum});
            break;
        }
        case 17:{   // Set.GREATER_THAN_DIGIT
            var randNum = Util.randomInteger(0,9);
            set = new Set({type:Set.GREATER_THAN_DIGIT, value:randNum});
            break;
        }
        case 18:{   // Set.GREATER_THAN_DIGIT_ODD
            var randNum = Util.randomInteger(0,9);
            set = new Set({type:Set.GREATER_THAN_DIGIT_ODD, value:randNum});
            break;
        }
        case 19:{   // Set.GREATER_THAN_DIGIT_EVEN
            var randNum = Util.randomInteger(0,8);
            set = new Set({type:Set.GREATER_THAN_DIGIT_EVEN, value:randNum});
            break;
        }
        case 20:{   // Set.SMALLER_THAN_GREATER_THAN_DIGIT
            var randNum1 = Util.randomInteger(0,8);
            var randNum2 = Util.randomInteger(randNum1+2, 10);
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT, value1:randNum1, value2:randNum2});
            break;
        }
        case 21:{   // Set.SMALLER_THAN_GREATER_THAN_ODD
            var randNum1 = Util.randomInteger(0,7);
            var randNum2 = Util.randomInteger(randNum1+3, 10);
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD, value1:randNum1, value2:randNum2});
            break;
        }
        case 22:{   // Set.SMALLER_THAN_GREATER_THAN_EVEN
            var randNum1 = Util.randomInteger(0,7);
            var randNum2 = Util.randomInteger(randNum1+3, 10);
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN, value1:randNum1, value2:randNum2});
            break;
        }
        case 23:{   // Set.SMALLER_THAN_LETTER
            if(length == 0){
                var randNum = Util.randomInteger(1,29);
            }
            else{
                var randNum = length;
            }
            set = new Set({type:Set.SMALLER_THAN_LETTER, value:Set.turkishLetters[randNum]});
            break;
        }
        case 24:{   // Set.GREATER_THAN_LETTER
            if(length == 0){
                var randNum = Util.randomInteger(0,28);
            }
            else{
                var randNum = 28-length;
            }
            set = new Set({type:Set.GREATER_THAN_LETTER, value:Set.turkishLetters[randNum]});
            break;
        }
        case 25:{   // Set.SMALLER_THAN_GREATER_THAN_LETTER
            if(length == 0){
                var randNum1 = Util.randomInteger(0,27);
                var randNum2 = Util.randomInteger(randNum1+2, 29);
            }
            else{
                var randNum1 = Util.randomInteger(0,18);
                var randNum2 = randNum1+length+1;
            }
            set = new Set({type:Set.SMALLER_THAN_GREATER_THAN_LETTER, value1:Set.turkishLetters[randNum1], value2:Set.turkishLetters[randNum2]});
            break;
        }
        case 26:{
            set = new Set({type:Set.WORDS});
            break;
        }
        case 27:{
            var randNum = Util.randomInteger(2,8);
            set = new Set({type:Set.SMALLER_THAN_INTEGER, value:randNum});
            break;
        }
    }

    return set;
};

Set.animateDifferenceSets = function(opt){
    var sets  = Set.drawSets(opt.container, opt.position, opt.sets, opt.letters);
    var originalPosition1 = sets.set1.position;
    sets.set1.position = sets.set1.position.add(-100,0);

    var originalPosition2 = sets.set2.position;
    sets.set2.position = sets.set2.position.add(100,0);

    sets.set1.animate({
        style: {
            position: originalPosition1
        },
        duration: 1000,
        delay: 1000,
        animationType: 'easeInEaseOut',
        callback:function(){

            sets.set1.children[3].remove();
        }
    });

    sets.set2.animate({
        style: {
            position: originalPosition2
        },
        duration: 1000,
        delay: 1000,
        animationType: 'easeInEaseOut'
    });
    sets.set2.children[0].animate({
        style:{
//            fillColor: new RgbColor(0.5,1,0.5,0)
        },
        duration:1000,
        delay:2000,
        callback:function(){
            sets.set2.animate({
                style:{opacity:0},
                duration:1000,
                update:function(){
//                    sets.intersect.opacity = this.opacity;
//                    sets.intersectClone.opacity = this.opacity;
                },
                callback:function(){
                    sets.set2.remove();
                    sets.intersect.remove()
                    sets.intersectClone.remove();
                    if(opt.callback)
                        opt.callback();
                    sets.set1.children[1].content = opt.letters[0] + " \\ " + opt.letters[1];
                    sets.set1.children[1].position = sets.set1.children[1].position.add(-20,0);
                }
            })

        }
    })

    return sets;
}

Set.animateSets = function(opt){
    var sets  = Set.drawSets(opt.container, opt.position, opt.sets, opt.letters);

    var originalPosition1 = sets.set1.position;
    sets.set1.position = sets.set1.position.add(-100,0);

    var originalPosition2 = sets.set2.position;
    sets.set2.position = sets.set2.position.add(100,0);


    sets.set1.animate({
        style: {
            position: originalPosition1
        },
        duration: 1000,
        delay: 1000,
        animationType: 'easeInEaseOut',
        callback:function(){

//            sets.set2.children[2].remove();
        }
    });

    sets.set2.animate({
        style: {
            position: originalPosition2
        },
        duration: 1000,
        delay: 1000,
        animationType: 'easeInEaseOut',
        callback:function(){
//            sets.set2.remove();
            if(opt.callback)
                opt.callback();
        }

    });

    return sets;
}

Set.animateComplementSets = function(opt){
    var sets  = Set.drawSets(opt.container, opt.position, opt.sets, opt.letters);
    var originalPosition1 = sets.set1.position;
    sets.set1.position = sets.set1.position.add(-100,0);
    var originalPosition2 = sets.set2.position;
    sets.set2.position = sets.set2.position.add(100,0);
    sets.set1.children[0].opacity = 0;
    sets.set1.children[0] = new Path.Rectangle(sets.set1.children[0].bounds).set_style({strokeWidth:1,strokeColor:"#000"});
    sets.set1.children[1].position = sets.set1.children[1].position.add(-15,10);
    sets.set1.children[1].fillColor = "#f00";
    sets.set1.animate({
        style: {
            position: originalPosition1
        },
        duration: 1000,
        delay: 1000,
        animationType: 'easeInEaseOut',
        callback:function(){
            sets.set1.children[1].content = opt.letters[1] + "'";
            sets.set1.children[0].insertBelow(sets.set1.children[1]);
            sets.set2.children[2].remove();
        }
    });
    sets.set2.animate({
        style: {
            position: originalPosition2
        },
        duration: 1000,
        delay: 1000,
        animationType: 'easeInEaseOut'
    });
    sets.set1.children[0].fillColor = new RgbColor(0.8,0.8,0.8,0);
    sets.set1.children[0].animate({
        style:{
            fillColor: new RgbColor(0.8,0.8,0.8,1)
        },
        duration:1000,
        delay:2000,
        init:function(){
            sets.set2.children[0].fillColor = new RgbColor(1,1,1,1);
            sets.set2.children[1].remove();
        },
        callback:function(){
            if(opt.callback)
                opt.callback();
        }
    });
    return sets;
}

Set.animateDisjointSets = function(opt){
    var sets  = Set.drawSets(opt.container, opt.position, opt.sets, opt.letters);
    var originalPosition1 = sets.set1.position;
    sets.set1.position = sets.set1.position.add(-100,0);
    var originalPosition2 = sets.set2.position;
    console.log(originalPosition1);
    console.log(originalPosition2);
    sets.set2.position = sets.set2.position.add(-75,0);
    if(opt.callback)
        opt.callback();
    return sets;
}
Set.animateEqualSets = function(opt){
    var sets  = Set.drawSets(opt.container, opt.position, opt.sets, opt.letters);

    var originalPosition1 = sets.set1.position;
    sets.set1.position = sets.set1.position.add(-100,0);

    var originalPosition2 = sets.set2.position;
    sets.set2.position = sets.set2.position.add(100,0);

    sets.set1.animate({
        style: {
            position: originalPosition1
        },
        duration: 1000,
        delay: 1000,
        animationType: 'easeInEaseOut',
        callback:function(){

            sets.set2.children[2].remove();
        }
    });

    sets.set2.animate({
        style: {
            position: originalPosition2
        },
        duration: 1000,
        delay: 1000,
        animationType: 'easeInEaseOut',
        callback:function(){
            sets.set2.remove();
            if(opt.callback)
                opt.callback();
        }

    });

    return sets;

}


Set.drawSets = function(container, topLeftPoint, sets, letters) {
	if (!sets.length) {
		throw "Usage drawSets: function(container, topLeftPoint, sets, letters)";
	}
	
	if (sets.length > 2) {
		throw "Only one or two sets are supported for drawing sets";
	}

    var singleSet = false;

	if (sets.length == 1) {
        singleSet = true;
		sets[1] = sets[0];
        letters[1] = letters[0];
	}

	var vennDiagram1 = new Group();
	var vennDiagram2 = new Group();
	
	var set1 = sets[0];
	var set2 = sets[1];

    set1.vennDiagram = vennDiagram1;
    if(!singleSet)
        set2.vennDiagram = vennDiagram2;


    var set1DifferenceSet2 = set1.getDifference(set2);
    var set2DifferenceSet1 = set2.getDifference(set1);
    var intersection = set1.getIntersection(set2);

	var noOfElements1 = sets[0].elements.length;
	var noOfElements2 = sets[1].elements.length;

	elementsSize1 = new Size(32, 22);
	elementsSize2 = new Size(32, 22);
	elementsSize3 = new Size(32, 22);

	if (set1DifferenceSet2.elements.length == 0 && set2DifferenceSet1.elements.length == 0) {
		var separation = 0;	
		
		var vennSize1 = new Size(noOfElements1*10*1.8 + 110, 128);
		var vennBoundingBox1 = new Rectangle(topLeftPoint, vennSize1);
		var textPoint1 = new Point(vennBoundingBox1.x+vennBoundingBox1.width*0.1, vennBoundingBox1.y+vennBoundingBox1.height*0.1);
		
		var vennSize2 = new Size(noOfElements2*10*1.8 + 110, 128);
		var vennBoundingBox2 = new Rectangle(topLeftPoint.add(separation, 0), vennSize2);
		var textPoint2 = new Point(vennBoundingBox2.x+vennBoundingBox2.width*0.82, vennBoundingBox2.y+vennBoundingBox2.height*0.1);
		
		var bb1 = new Rectangle();
		intersectionBoundingBox = vennBoundingBox1;
		var bb2 = new Rectangle();
		
		elementsSize2 = new Size(vennSize1.width/(noOfElements1+2.4), vennSize1.height/(noOfElements1+2.4))
		if (elementsSize2.width < 32) {
			elementsSize2.width = 32;
		}

		if (elementsSize2.height < 22) {
			elementsSize2.height = 22;
		}

        console.log(elementsSize2);
	} else if (set1DifferenceSet2.elements.length == 0) {
		var separation = -20;	
		
		var vennSize1 = new Size(noOfElements1*10*2 + 72, 92);	
		var vennBoundingBox1 = new Rectangle(topLeftPoint.add(0,18), vennSize1);
		var textPoint1 = new Point(vennBoundingBox1.x + vennBoundingBox1.width*0.82, vennBoundingBox1.y + vennBoundingBox1.height*0.1);
		
		var vennSize2 = new Size(noOfElements2*10*2 + 160, 128);
		var vennBoundingBox2 = new Rectangle(topLeftPoint.add(separation, 0), vennSize2);
		var textPoint2 = new Point(vennBoundingBox2.x+vennBoundingBox2.width*0.82, vennBoundingBox2.y+vennBoundingBox2.height*0.1);

		var bb1 = new Rectangle();
		intersectionBoundingBox = vennBoundingBox1;
		var bb2 = new Rectangle(new Point(vennBoundingBox2.x + vennBoundingBox1.width - separation, vennBoundingBox2.y), new Size(vennBoundingBox2.width - vennBoundingBox1.width + separation, vennBoundingBox2.height));
		
		elementsSize1 = new Size(vennSize1.width/(noOfElements1+0.8), vennSize1.height/(noOfElements1+0.8))
		if (elementsSize1.width < 32) {
			elementsSize1.width = 32;
		}

		if (elementsSize1.height < 28) {
			elementsSize1.height = 28;
		}
	} else if (set2DifferenceSet1.elements.length == 0) {		
		var vennSize1 = new Size(noOfElements1*10*2 + 110, 128);	
		var vennBoundingBox1 = new Rectangle(topLeftPoint, vennSize1);
		var textPoint1 = new Point(vennBoundingBox1.x+vennBoundingBox1.width*0.1, vennBoundingBox1.y+vennBoundingBox1.height*0.1);
		
		var vennSize2 = new Size(noOfElements2*10*2 + 72, 92);
		var separation = vennSize1.width - vennSize2.width - 20;
		var vennBoundingBox2 = new Rectangle(topLeftPoint.add(separation, 18), vennSize2);
		var textPoint2 = new Point(vennBoundingBox2.x+vennBoundingBox2.width*0.1, vennBoundingBox2.y+vennBoundingBox2.height*0.1);
	
		var bb1 = new Rectangle(new Point(vennBoundingBox1.x, vennBoundingBox1.y), new Size(separation, vennBoundingBox1.height));
		intersectionBoundingBox = vennBoundingBox2;
		var bb2 = new Rectangle();
		
		elementsSize3 = new Size(vennSize2.width/(noOfElements2+0.8), vennSize2.height/(noOfElements2+0.8))
		if (elementsSize3.width < 32) {
			elementsSize3.width = 32;
		}

		if (elementsSize3.height < 24) {
			elementsSize3.height = 24;
		}
	} else if (intersection.elements.length == 0) {
		var separation = (set1DifferenceSet2.elements.length+1)*10*2 + 110;	
		
		var vennSize1 = new Size(noOfElements1*10*1.8 + 110, 128);
		var vennBoundingBox1 = new Rectangle(topLeftPoint, vennSize1);
		var textPoint1 = new Point(vennBoundingBox1.x+vennBoundingBox1.width*0.1, vennBoundingBox1.y+vennBoundingBox1.height*0.1);
		
		var vennSize2 = new Size(noOfElements2*10*1.8 + 110, 128);
		var vennBoundingBox2 = new Rectangle(topLeftPoint.add(separation, 0), vennSize2);
		var textPoint2 = new Point(vennBoundingBox2.x+vennBoundingBox2.width*0.82, vennBoundingBox2.y+vennBoundingBox2.height*0.1);
		
		var bb1 = vennBoundingBox1;
		intersectionBoundingBox = new Rectangle();
		var bb2 = vennBoundingBox2;
		
		elementsSize1 = new Size(vennSize1.width/(noOfElements1+2.4), vennSize1.height/(noOfElements1+2.4))
		if (elementsSize1.width < 32) {
			elementsSize1.width = 32;
		}

		if (elementsSize1.height < 22) {
			elementsSize1.height = 22;
		}		
		
		elementsSize3 = new Size(vennSize2.width/(noOfElements2+2.4), vennSize2.height/(noOfElements2+2.4))
		if (elementsSize3.width < 32) {
			elementsSize3.width = 32;
		}

		if (elementsSize3.height < 22) {
			elementsSize3.height = 22;
		}		
		
	} else {
		var separation = set1DifferenceSet2.elements.length*8*1.8 + 75;
		
		var vennSize1 = new Size(noOfElements1*10*2 + 110, 128);	
		var vennBoundingBox1 = new Rectangle(topLeftPoint, vennSize1);
		var textPoint1 = new Point(vennBoundingBox1.x+vennBoundingBox1.width*0.1, vennBoundingBox1.y+vennBoundingBox1.height*0.1);
		
		var vennSize2 = new Size(noOfElements2*10*2 + 110, 128);
		var vennBoundingBox2 = new Rectangle(topLeftPoint.add(separation, 0), vennSize2);
		var textPoint2 = new Point(vennBoundingBox2.x+vennBoundingBox2.width*0.82, vennBoundingBox2.y+vennBoundingBox2.height*0.1);
		
		var bb1 = new Rectangle(new Point(vennBoundingBox1.x, vennBoundingBox1.y), new Size(separation, vennBoundingBox1.height));
		intersectionBoundingBox = new Rectangle(topLeftPoint.add(separation, 0), new Size(vennSize1.width - separation, vennSize1.height - 0));
		var bb2 = new Rectangle(new Point(vennBoundingBox2.x + vennBoundingBox1.width - separation, vennBoundingBox2.y), new Size(vennBoundingBox2.width - vennBoundingBox1.width + separation, vennBoundingBox2.height));
	}
				
	var oval1 = Path.Oval(vennBoundingBox1);
	oval1.strokeColor = 'black';
	oval1.fillColor = new RgbColor(1, 1, 1, 0);
	vennDiagram1.addChild(oval1)

    var oval2 = Path.Oval(vennBoundingBox2);
    oval2.strokeColor = 'black';
    oval2.fillColor = new RgbColor(1, 1, 1, 0);
    vennDiagram2.addChild(oval2);
    if(singleSet)
        oval2.opacity = 0;

	var text = new PointText(textPoint1);
	text.set_style({
		fontSize: 14
	})
	text.content = letters[0];
	vennDiagram1.addChild(text);

    if (!singleSet) {
        text = new PointText(textPoint2);
        text.set_style({
            fontSize: 14
        })
        text.content = letters[1];
        vennDiagram2.addChild(text);
    }
		
		
	var drawElements = function (elements, boundingBox, elementSize, hitTest, fontSize) {
		if (fontSize == undefined) {
			fontSize = 12;
		}
		
		var granularity = fontSize;
		var elementLocations = [];
		var elementGroup = new Group();
		
		isAvailable = function (point) {
			var point2 = point.add(elementSize.width, -elementSize.height);
			var point3 = point.add(elementSize.width, 0);
			var point4 = point.add(0, -elementSize.height);						
			
			var corners = [
				point,
				point2,
				point3,
				point4
			]
			
			for (var i = 0; i < 4; i++) {
				if (!hitTest(corners[i])) {
					return false;
				}
			}
			
			return true;
		}
		
		var noOfElements = elements.length;
		var topLeftPoint = new Point(boundingBox.x, boundingBox.y);
		var vennSize = boundingBox.size;
		
		
		var excludingArray = [];
		
		
		for (var j = 0; j < vennSize.height/granularity; j++) {
			for (var i = 0; i < vennSize.width/granularity; i++) {
				var tempPoint = new Point(topLeftPoint.x + i*granularity, topLeftPoint.y + j*granularity);


				if (!isAvailable(tempPoint)) {
					excludingArray.push(j * Math.ceil(vennSize.width/granularity) + i);
				}

			}
		}

		for (var i = 0; i < noOfElements; i++) {
			var retry = false;
			try {
				var randomPoint = Util.randomInteger(0, Math.floor(vennSize.width * vennSize.height / granularity / granularity), excludingArray);
			}
			catch (err) {
				retry = true;
			}

			var point = new Point(topLeftPoint.x + (randomPoint % Math.ceil(vennSize.width/granularity)) * granularity, topLeftPoint.y + Math.floor(granularity * randomPoint / vennSize.width) * granularity);

//
//            rect = new Path.Rectangle(point, new Size(elementSize.width,-elementSize.height));
//            rect.strokeColor = 'black';
////            this.vennDiagram.addChild(rect);

            var text = new PointText(point.add(elementSize.width/2 - 6, -elementSize.height/2 + 8));
			text.set_style({
				fontSize: fontSize
			})
			text.content = "."+elements[i];
			
			elementGroup.addChild(text);
			
			var index = Math.floor((point.y - topLeftPoint.y)/granularity);

			elementLocations.push(point);

			var left = point.x - elementSize.width;
			var right = point.x + elementSize.width;
			var top = point.y - elementSize.height;
			var bottom = point.y + elementSize.height;

			left = Math.floor((left - topLeftPoint.x) / granularity);
			right = Math.floor((right - topLeftPoint.x) / granularity);
			top = Math.floor((top - topLeftPoint.y) / granularity);
			bottom = Math.floor((bottom - topLeftPoint.y) / granularity);

			for (x = left; x <= right; x++) {
				for (y = top; y <= bottom; y++) {
					if (x >= 0 && y >= 0) {
						excludingArray.push(y * Math.ceil(vennSize.width/granularity) + x);
					}
				}
			}
		}
		
		return elementGroup;
	}
	
	var start_time = Date.now();
    var hitTestOptions = { fill: true, stroke: false, segments: true, tolerance: -15 }
	var elementsGroup1 = drawElements(set1DifferenceSet2.elements,
		 		bb1,
		 		elementsSize1,
		 function(point) {
			return (oval1.hitTest(point,hitTestOptions) && !oval2.hitTest(point,hitTestOptions));
	});
	var endTime = Date.now();

	var start_time = Date.now();
	var elementsGroup2 = drawElements(intersection.elements,
		 		intersectionBoundingBox,
		 		elementsSize2,
		 function(point) {
			return (oval1.hitTest(point,hitTestOptions) && oval2.hitTest(point,hitTestOptions));
	});
	var endTime = Date.now();


    if (!singleSet) {
	    var start_time = Date.now();
	    var elementsGroup3 = drawElements(set2DifferenceSet1.elements,
		 	    	bb2,
		     		elementsSize3,
	    	 function(point) {
    			return (!oval1.hitTest(point,hitTestOptions) && oval2.hitTest(point,hitTestOptions));
	    });
	    var endTime = Date.now();
    }

	vennDiagram1.addChild(elementsGroup1);
	vennDiagram1.addChild(elementsGroup2);

    if (!singleSet) {
        var elementsGroup2Clone = elementsGroup2.clone();
	    vennDiagram2.addChild(elementsGroup2Clone);
	    vennDiagram2.addChild(elementsGroup3);

        return {
            set1: vennDiagram1,
            set2: vennDiagram2,
            intersect: elementsGroup2,
            intersectClone : elementsGroup2Clone
        }
    } else {
        return {
            set1: vennDiagram1,
            intersect: elementsGroup2
        }
    }




};





