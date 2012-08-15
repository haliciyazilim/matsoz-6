
var semaRengi=["#ffc3c3","#ffeed0","c6f4c3","#c5e9ff","#ecccfd"];
var semaBorderRengi=["#c99999","#c7b188","#90c08e","#97b8c9","#b08bc1"];

var dropableShapeHoverStyle = {fillColor:'#afa'};
var dropableShapeDefaultStyle = {fillColor:'#fff'};

function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}

var Animation = {
    init:function(container){
        Animation.container = container;
        
        
	$(container).append("<img id='ornek' src='/assets/animations/sema/ornek.jpg' />")
	$("#ornek")
		.css("position", "absolute")
		.css("top","20px")
		//.css("opacity","0");
		.hide();

	$(container).append("<div id='ornekBosCerceve'>");
	$("#ornekBosCerceve")
		.css("width","758px")
		.css("height","170px")
		.css("position", "absolute")
		.css("top","20px");
		
	$("#ornekBosCerceve", container).append("<img id='ornekBos1' src='/assets/animations/sema/ornek_bos_1.png' />");
	$("#ornekBos1")
		.css("position", "absolute")
		.css("left","0px");
	$("#ornek").delay(1000).show(1);
	//$("#ornek").animate({"opacity":"100"},"slow");
	$("#ornekBos1").delay(1000).animate({
			"left": "92px"}, 1000
	).animate({"opacity":"0"},"slow");
	
	$("#ornekBosCerceve", container).append("<img id='ornekBos2' src='/assets/animations/sema/ornek_bos_2.png' />");
	$("#ornekBos2")
		.css("position", "absolute")
		.css("left","92px");
	$("#ornekBos2").delay(2000).animate({
			"left": "187px"}, 1000
		).animate({"opacity":"0"},"slow");
	
	$("#ornekBosCerceve", container).append("<img id='ornekBos3' src='/assets/animations/sema/ornek_bos_3.png' />");
	$("#ornekBos3")
		.css("position", "absolute")
		.css("left","187px");
	$("#ornekBos3").delay(3000).animate({
			"left": "452px"}, 2000
		).animate({"opacity":"0"},"slow");
		
	$("#ornekBosCerceve", container).append("<img id='ornekBos4' src='/assets/animations/sema/ornek_bos_4.png' />");
	$("#ornekBos4")
		.css("position", "absolute")
		.css("left","452px");
	
	$("#ornekBos4").delay(5000).animate({
			"opacity":"0"},"slow");
	
        Main.animationFinished(6000);
    }
    
}

var Interaction = {
    images: [
            {
                id:'resim2main',
                src:'/assets/animations/sema/sema_etkilesim_2main.jpg'
            },
            {
                id:'resim3main',
                src:'/assets/animations/sema/sema_etkilesim_3main.jpg'
            },
            {
                id:'resim2sub',
                src:'/assets/animations/sema/sema_etkilesim_2sub.jpg'
            },
            {
                id:'resim3sub',
                src:'/assets/animations/sema/sema_etkilesim_3sub.jpg'
            }
        ],
    getFramework:function(){
        return 'paper';
    },
    init:function(container){
        Interaction.container = container;
	Main.setObjective("Yandaki sözcükleri şemada uygun yerlere sürükleyerek yerleştirip kontrol ediniz.");
	Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
	}
	
       
        
        sayi=0;
	soruSirasi=0;
	//var sozcuk;
		
	function Node(name) {
		this.name = name;
		this.parent = null;
		this.children = [];
		this.getTreeSize = function(){
			var result = 1;
			for(var i=0; i < this.children.length; i++)
				result += this.children[i].getTreeSize();
				return result;
			}
			
		this.yazdir=function(){
			var sonuc=Array();
			console.log("this.children.name"+this.name);
			console.log("this.children.length"+this.children.length);
			console.log("this.children[j].children[i].length"+this.children[1].children.length)
			for (var j=0; j<this.children.length; j++){
				console.log("ilk for içindeyim");
				sonuc.push(this.children[j].name);
				for(var i=0; i<this.children[j].children.length;i++){
					console.log("yazdır(): "+this.children[j].children[i].name);
					sonuc.push(this.children[j].children[i].name);
				}
			}
			return sonuc;
		}
			
		this.addChild = function(child) {
			this.children.push(child);
			child.parent = this;
				
			return this;
		}
	}
		
	kitaplar = new Node("Kitaplar")
		.addChild(
			new Node("Edebiyat")
				.addChild(new Node("Roman"))
				.addChild(new Node("Hikâye"))
				.addChild(new Node("Şiir"))
		)
		.addChild(
			new Node("Diğer")
				.addChild(new Node("Ansiklopedi"))
				.addChild(new Node("Sözlük"))
		);
	icecekler = new Node("İçecekler")
		.addChild(
			new Node("Sıcak")
				.addChild(new Node("Çay"))
				.addChild(new Node("Kahve"))
				.addChild(new Node("Ihlamur"))
		)
		.addChild(
			new Node("Soğuk")
					.addChild(new Node("Ayran"))
					.addChild(new Node("Meyve Suyu"))
					.addChild(new Node("Kola"))
			);
			
	spor= new Node("Spor")
		.addChild(
			new Node("Bireysel")
				.addChild(new Node("Güreş"))
				.addChild(new Node("Halter"))
				.addChild(new Node("Yüzme"))
		)
		.addChild(
			new Node("Takım")
				.addChild(new Node("Futbol"))
				.addChild(new Node("Voleybol"))
				.addChild(new Node("Basketbol"))
		);
			
	kaplar= new Node("Kaplar")
		.addChild(
			new Node("Porselen")
			.addChild(new Node("Tabak"))
			.addChild(new Node("Çaydanlık"))
		)
		.addChild(
			new Node("Cam")
			.addChild(new Node("Bardak"))
			.addChild(new Node("Kâse"))
		)
		.addChild(
			new Node("Metal")
			.addChild(new Node("Tencere"))
			.addChild(new Node("Tava"))
		);
         
        for(var i=0; i<kitaplar.children[0].children.length;i++)
		console.log("Edebiyatın bebeleri: "+kitaplar.children[0].children[i].name);
	
	dropableShapes = new Array();
	
        dizi=Array();
        dizi= Util.getShuffledArray(4);
        
    
    $(container).append("<button id='kontrolBtn' class='next_button'>");
	$("#kontrolBtn")
		.css("position","absolute")
		.css("right","10px")
		.css("bottom","10px")
		.click(function(){
			project.activeLayer.remove();
			var layer = new Layer();
			console.log("sayi: "+sayi);
			//semaGroup.remove();
                        $(".silincekResim").remove();
			soruSirasi++;
                        if(soruSirasi==4)
                            soruSirasi=0;
			console.log("xxxxxxxxxxxxxxxxxxxxxxxsoruSirais: "+soruSirasi);
			console.log("xxxxxxxxxxxxxxxxxxxxxxxsozcuk: "+sozcuk.name);
			soruGetir();
			//window.location.reload()
			$("#kontrolBtn").hide();
			}).hide();
                        
    Interaction.appendStatus({
				bottom:'30px',
				right:'160px'
			});
                        
    Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){
            soruGetir();
		},
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
		
		},
	isAnswerCorrect : function(value){
		
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
		
		}
}



function soruGetir(){
    
    Interaction.setStatus("");
            console.log("139"+dizi);
            switch (dizi[soruSirasi]){
                case 0:
                    sozcuk=kitaplar;
                    break;
                case 1:
                    sozcuk=icecekler;
                    break;		
                case 2:
                    sozcuk=kaplar;
                    break;		
                case 3:
                    sozcuk=spor;
                    break;		
            }
            renkRandom=Math.floor(Math.random()*4);
            semaOlustur(semaRengi[renkRandom],semaBorderRengi[renkRandom],sozcuk);
}
function semaOlustur(renk,border,sozcuk){
    
    var tane=sozcuk.getTreeSize()-1;
    var ebat;
    switch (tane){
        case 7:
            ebat=73;
            break;
	case 8:
            ebat=62.5;
            break;		
	case 9:
            ebat=54.44;
            break;		
    }
    // baslik yazılıyor.
    var ortaNokta=(590/2-50+0.5);
    var semaBaslikSekil=new Path.Rectangle(ortaNokta,60.5,100,40);
        semaBaslikSekil.strokeColor="black";
    var semaBaslikYazi= new PointText(ortaNokta+50, 85);
        semaBaslikYazi.content=sozcuk.name;
	semaBaslikYazi.paragraphStyle.justification = 'center';

    var altSemaSayisi=sozcuk.children.length;
                        
    var raster;
    if(altSemaSayisi==2){
        raster=new Raster('resim2main');
        raster.position.x=ortaNokta+50;
        raster.position.y=116;
        raster.visible=true;
    }
    else if(altSemaSayisi==3){
        raster=new Raster('resim3main');
        raster.position.x=ortaNokta+50;
        raster.position.y=116;
        raster.visible=true;
                           
    }
    
    console.log("Alt Şema Sayısı: "+altSemaSayisi);
    var altOrtaNokta=(490/altSemaSayisi)/2;
    var sonrakiKoordinatlar=2*altOrtaNokta;
    var altSemaToplamIcerik= new Array();

    for(var i=0; i<altSemaSayisi;i++)
        altSemaToplamIcerik[i]=sozcuk[sozcuk[1]+2+i];
					
    for(var i=0;i<altSemaSayisi;i++){
        var altSemaGroup=new Group();
	var altSemaKoordinat=altOrtaNokta+i*sonrakiKoordinatlar;
	console.log("koor"+altSemaKoordinat);
	var altSemaSekil=new Path.Rectangle(altSemaKoordinat,131.5,100,40);
            altSemaSekil.strokeColor="black";
            altSemaSekil.class = "dropable";
	var icerik=sozcuk[1]+2;
            altSemaSekil.icerik=sozcuk.children[i].name;
            altSemaSekil.ebeveyn=sozcuk;
            altSemaSekil.name=null;
            altSemaSekil.bebeSayisi=sozcuk.children[i].children.length;
        console.log("dropableShapes: ")
       
        dropableShapes.push(altSemaSekil);
        console.log(dropableShapes);
        var altSemaBaslikYazi= new PointText(altSemaKoordinat+50, 160);
            altSemaBaslikYazi.content="";
            altSemaBaslikYazi.paragraphStyle.justification = 'center';
            altSemaGroup.addChild(altSemaSekil);
            altSemaGroup.addChild(altSemaBaslikYazi);
	
        // alt semaların elemanları çiziliyor.
	var altSemalarElemanSayisi=sozcuk.children[i].children.length;
	console.log("alt eleman sayisi "+i+": "+altSemalarElemanSayisi);
	console.log("alt şema koordinat: "+altSemaSekil.position);
	
        var raster2;
        if(altSemalarElemanSayisi==2){
            raster2=new Raster('resim2sub');
            raster2.position.x=altSemaSekil.position.x;
            raster2.position.y=187;
            raster2.visible=true;
        }
        else if(altSemalarElemanSayisi==3){
            raster2=new Raster('resim3sub');
            raster2.position.x=altSemaSekil.position.x;
            raster2.position.y=187;
            raster2.visible=true;
        }
                                
                                
	for(var j=0; j<altSemalarElemanSayisi; j++){
            var altSemaElemanKoordinat=j*(ebat+10)+altSemaSekil.position.x-((ebat*altSemalarElemanSayisi+10*(altSemalarElemanSayisi-1))/2);
            console.log("alt eleman koordinat değişkeni: "+altSemaElemanKoordinat);
            var altSemalarElemanSekil=new Path.Rectangle(altSemaElemanKoordinat, (altSemaSekil.position.y+50), ebat, 30);
            var altSemalarGroup=new Group();
                altSemalarElemanSekil.bebeSayisi=0;
                altSemalarElemanSekil.ebeveyn  = altSemaSekil;
		altSemalarElemanSekil.class = "dropable";
            dropableShapes.push(altSemalarElemanSekil);
            console.log("elemanlar çiziliyhor");
            altSemalarElemanSekil.strokeColor="black";
            console.log("Alt eleman şekil koordinat: "+altSemalarElemanSekil.position);
            altSemalarGroup.addChild(altSemalarElemanSekil);
        }
    }
    
    var sonuc="";
    for(var i=0; i<sozcuk.children[i].length; i++){
        sonuc+=sozcuk.children[i].name;
    for(var j=0; i<sozcuk.children[i].children[j].length; i++){
        sonuc+=sozcuk.children[i].children[j].name;		
	}			
    }

    console.log("satir 228: "+sonuc);
    
    var move = function(event){
        this.translate(event.delta.x,event.delta.y);
	for (i = 0; i < dropableShapes.length; i++) {
            dropableShapes[i].set_style(dropableShapeDefaultStyle);
            console.log("I'm here")
        }
        var hitResult = project.activeLayer.hitTest([event.point.x,event.point.y],{fill: true, stroke: true, segments: true, tolerance: 2, class: "dropable"});
	if(hitResult){
            this.inDropableShape = true;
            this.hitShape = hitResult.item;
            console.log(dropableShapes)
            console.log(this.hitShape);
            this.hitShape.set_style(dropableShapeHoverStyle);
	}
        else{
        this.inDropableShape = false;
	this.hitShape = null;
        }
    },
    start = function(event){
        console.log("Starta girdim")
	this.ox = this.position.x;
	this.oy = this.position.y;
    },
    up = function(event){
        var konulan;
	var tetkik=false;
        
        for (i = 0; i < dropableShapes.length; i++) {
            dropableShapes[i].set_style(dropableShapeDefaultStyle);
            console.log("I'm here")
        }
        
	if(this.inDropableShape==true){
            var tutulan=this.children[1].content;
            var alttakiEbeveyn=this.hitShape.ebeveyn.name;
            var alttakiBebeSayisi=this.hitShape.bebeSayisi;
            var tutulanEbeveyn=this.ebeveyn.name;
            var tutulanBebeSayisi=this.bebeSayisi;
            console.log("tutulan evebeyn "+tutulanEbeveyn);
            console.log("tutulan bebesayisi "+tutulanBebeSayisi);
            console.log("alttaki ebeveyn (content): "+this.hitShape.ebeveyn.content);
            console.log("alttaki ebeveyn (name): "+this.hitShape.ebeveyn.name);
            console.log("alttaki bebesayisi "+alttakiBebeSayisi);
            console.log("tutalan name "+this.name);
            console.log("alttaki name "+this.hitShape.name);
            
            if((tutulanEbeveyn==alttakiEbeveyn && alttakiBebeSayisi==tutulanBebeSayisi) )
                tetkik=true;
            }
            if(tetkik==true){
                sayi++;
		console.log("tetkik  true if"+tetkik);
		this.class=null;
		this.opacity=0;
		this.hitShape.name = this.name;
		console.log("asdads"+this.hitShape.name);
		this.hitShape.content=this.name;
		console.log("asdadasd: "+this.hitShape.content);
		var yazi= new PointText(this.hitShape.position);
                    yazi.content=this.children[1].content;
                    yazi.paragraphStyle.justification = 'center';
                    yazi.fontSize=8;
		this.hitShape.class=null;
		this.hitShape.setStyle(dropableShapeDefaultStyle);
		
                tetkik=false;
		if(sayi==tane){
                    
                    Interaction.setStatus('Tebrikler', true);
                    $("#kontrolBtn").show();
                    sayi=0;
                }
            }
            else{
                console.log("tetkik false if"+tetkik);
		this.animate({
                    style:{
                        position:new Point(this.ox,this.oy)
                    },
                    duration: 500
                    });
            }
    };
    
    
    // Elemanlar tek tek yazdırılıyor.
			
    console.log("elemanlar: "+sozcuk.yazdir());
    //var elemanlar=sozcuk.yazdir();
    var konum=0;
    var konumSirasi=0;
    var konumListe=Util.getShuffledArray(tane);
    console.log(konumListe);
    for (var j=0; j<sozcuk.children.length; j++){
        konum=konumListe[konumSirasi];
	console.log("semalar 1:");
	console.log(sozcuk.children[j].name);
	var semaGroup = new Group();
	var sema = new Path.Rectangle(((konum*(ebat+10))+10),10,ebat,30); //x,y,width,height
            sema.fillColor=renk;
            sema.strokeColor=border;
	var semaIsim= new PointText(((konum*(ebat+10))+10+ebat/2),30);
            semaIsim.content=sozcuk.children[j].name;
            semaIsim.paragraphStyle.justification = 'center';
            semaIsim.fontSize=8;
            semaGroup.ebeveyn=sozcuk;
            semaGroup.bebeSayisi=sozcuk.children[j].children.length;
            semaGroup.name=sozcuk.children[j].name;
            semaGroup.class = "sema";
            semaGroup.addChild(sema);
            semaGroup.addChild(semaIsim);
            semaGroup.move = move;
            semaGroup.up = up;
            semaGroup.start = start;
	for(var i=0; i<sozcuk.children[j].children.length;i++){
            konumSirasi++;
            konum=konumListe[konumSirasi];
            console.log("337: "+sozcuk.children[j].children[i].name);
            var semaGroup = new Group();
            var sema = new Path.Rectangle(((konum*(ebat+10))+10),10,ebat,30); //x,y,width,height
                sema.fillColor=renk;
                sema.strokeColor=border;
            var semaIsim= new PointText(((konum*(ebat+10))+10+ebat/2),30);
                semaIsim.content=sozcuk.children[j].children[i].name;
		semaIsim.paragraphStyle.justification = 'center';
		semaIsim.fontSize=8;
		semaGroup.ebeveyn=sozcuk.children[j];
		semaGroup.name = sozcuk.children[j].children[i].name;
		semaGroup.bebeSayisi=sozcuk.children[j].children[i].children.length ||0;
		semaGroup.class = "sema";
		semaGroup.addChild(sema);
		semaGroup.addChild(semaIsim);
		semaGroup.move = move;
		semaGroup.up = up;
		semaGroup.start = start;
	}
	konumSirasi++;
    }
    
    toolum  = new Tool();
//    toolum.onMouseMove = function(event){
//        //console.log("event.item"+event.item);
//        if(this.item)
//            this.item.move(event);
//        else{
//            for (i = 0; i < dropableShapes.length; i++) {
//            dropableShapes[i].set_style(dropableShapeDefaultStyle);
//            }
//        }
//    };
    
    toolum.onMouseDrag=function (event){
        if(this.item)
            this.item.move(event);
        else{
            for (i = 0; i < dropableShapes.length; i++) {
            dropableShapes[i].set_style(dropableShapeDefaultStyle);
            }
        }
         
    }
    
    toolum.onMouseUp = function(event){
        if(this.item){
            this.item.up(event);
            this.item = null;
        }
        else{
            for (i = 0; i < dropableShapes.length; i++) {
            dropableShapes[i].set_style(dropableShapeDefaultStyle);
            }
        }
        
        
    };
    
    toolum.onMouseDown = function(event){
        if(event.item && event.item.class && event.item.class == "sema"){
            this.item = event.item;
            this.item.start(event);
        }
        else{
            for (i = 0; i < dropableShapes.length; i++) {
            dropableShapes[i].set_style(dropableShapeDefaultStyle);
            }
        }
   };
    
  //toolum.activate();
    
}