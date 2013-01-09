var Interaction = {
    getFramework:function(){
        return 'paper';
		},
	init:function(container){
			Interaction.container = container;
			Main.setObjective('');
			Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}
    $(".mavikontrol").css("text-align","center");
    
    Interaction.soruSayaci=0;
     var sayiDogrusuTop=130;
     var fontSize=16;
    
    Animation.numericalAxis = new Group();
	var arr = new Group();
        var arrow = new Path.OneSidedArrow(new Point(40, sayiDogrusuTop), new Point(550, sayiDogrusuTop), 10, 30)
	var arrow2 = new Path.OneSidedArrow(new Point(550, sayiDogrusuTop), new Point(551, sayiDogrusuTop), 10, 30);
	arrow.rotate(180);
	arr.addChild(arrow);
	arr.addChild(arrow2);
        arr.strokeWidth=2;
	
        var pieceLength = 455/13;
	
        Interaction.smallDots = new Group();
	for(var i = 0; i < 13; i++){
            var smallDot = new Path.Circle(new Point(50+pieceLength*(i+1), sayiDogrusuTop), 3)
            smallDot.fillColor = "black";
            Interaction.smallDots.addChild(smallDot);
	}
        
        
         $(container).append("<div id=sayilar>");
            $("#sayilar")
                .css("width","500px")
                .css("height","30px")
                .css("position","absolute")
                .css("left","67px")
                .css("top",sayiDogrusuTop+15)
                .css("margin","auto")
                //.css("border","1px solid red");
        $(container).append("<div id='noktalar'>");
            $("#noktalar")
                .css("width","500px")
                .css("height","40px")
                .css("position","absolute")
                .css("left","67px")
                .css("top",sayiDogrusuTop+(-18))
                .css("margin","auto")
                //.css("border","1px solid red");
        
        for(i=-6; i<=6; i++){
            var isaret=i<0?"&#8211;":"";
            var sayi=i<0?i.toString().slice(1): i.toString();

            if(i<0)
                $("#sayilar").append("<div class='sayilar eksiSayilar' id=sayilar"+i+">");
            else
            $("#sayilar").append("<div class='sayilar artiSayilar' id=sayilar"+i+">");

            $("#sayilar"+i)
                .css("margin","auto").html(isaret+""+sayi)
                .css("border","0px solid red");

            if(i<0)
                $("#sayilar"+i).html(isaret+sayi+"&nbsp;&nbsp;&nbsp;")
            else
                $("#sayilar"+i).html(isaret+sayi)

            console.log(isaret+""+i);
            if(i!=0)
                $("#sayilar"+i).css("opacity","0");
            
            $("#noktalar").append("<span class='noktalar' id=noktalar"+i+">");
            
        }

        $(".sayilar")
            .css("width",pieceLength)
            .css("height","10px")
            .css("float","left")
            .css("font-style","bold")
            .css("font-size",fontSize)
        //.css("margin-left","1px")
        //.css("text-align","center")
        //.css("opacity","0");
        $(".eksiSayilar").css("text-align","right");
        $(".artiSayilar").css("text-align","center");
        $(".noktalar")

            .css("width","35")

            .css("height","10px")
            .css("float","left")
            .css("margin","auto")
            .css("font-size","40px")
            .css("color","red")
            .css("text-align","center")
            .css("opacity","1")
            .html("•")
        //.css("border","1px solid red");

      /*  if( navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod' || navigator.platform == 'Linux armv6l' || navigator.platform == 'Linux armv7l') {
            $("#noktalar-6").css({left:"1px",top:"1px"})
            $("#noktalar-5").css({left:"10px",top:"1px"})
            $("#noktalar6").css({left:"25px",top:"1px"})
        }*/


        
    
    Interaction.setRandomGenerator(7,-6);
        
        Main.setObjective("Sayı doğrusunda gösterilen noktanın hangi tam sayıyı gösterdiğini yazınız.");
        Interaction.appendInput({
            width: '40px',
            height: '40px',
            textAlign: 'center',
            fontSize: '20px',
            position:"absolute",
            margin:"auto",
            top:"50px",
            right:"0",
            left:"0"

        }, true,true);
        Interaction.input.id="girdi";
        $("#girdi").attr("maxLength","2");



	Interaction.appendStatus({
            bottom:'100px',
            right:'0',
            left:'0',
            margin:'auto',
            width:"100%",
            textAlign:'center'
            
        });
	
        Interaction.appendButton({
            bottom:'40px',
            right:'0',
            left:'0',
            margin:'auto'
	});
		
        
	Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){
        $("#girdi").get(0).onkeydown = function(event){
            console.log(Interaction.__status.CORRECT);
            console.log(event.keyCode);
            if(event.keyCode==109){
                $("#girdi").val("–")
                return false;
            }
        };

            if(randomNumber==0)
                randomNumber++;
            Interaction.trial=1;
            Interaction.randomNumber = randomNumber;

            Interaction.isaret=Interaction.randomNumber<0?"&#8211;":"";
            Interaction.sayi=Interaction.randomNumber<0?Interaction.randomNumber.toString().slice(1): Interaction.randomNumber.toString();
            $("#girdi").css("opacity","0");
            Interaction.cevap = "";
             $("#girdi").css("color","black");
            $('.noktalar').each(function(){
                $(this).css('opacity',0);
                this.isSelected = false;
            });
            
            for(i=-6; i<=6; i++){
                if(i!=0)
                    $("#sayilar"+i).css("opacity","0");
            }
            
            var tiklamaKontrol=0;
        var tiklanmisNokta="";
        if(Interaction.soruSayaci%2!=0){
            
            console.log("ifte");
            $(".noktalar").mouseover(
                function(){
                        $(this).css("opacity","1").css("cursor","pointer");
            });


                $(".noktalar").mouseout(
                    function(){
                    if(!this.isSelected)
                        $(this).css("opacity","0");
                });


            $(".noktalar").click(
                function(){
                    $('.noktalar').each(function(){
                        $(this).css('opacity',0);
                        this.isSelected = false;
                    });
                    this.isSelected = true;
                    tiklanmisNokta=this.id;
                    console.log(tiklanmisNokta);
                    $(this).css("opacity","1");
                    Interaction.cevap=tiklanmisNokta.substring(8);
                    console.log(Interaction.cevap);
            });
        }
        else{
            $(".noktalar").unbind('mouseover').unbind('mouseout').unbind('click');

           
        }
            
            
            Interaction.soruSayaci++;
            Interaction.soruTipi=Interaction.soruSayaci%2==0?soruTip1():soruTipi2();
            
            
        },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
            if(Interaction.soruSayaci%2==0){
                if(Interaction.cevap=="" || Interaction.cevap==null){
                 Interaction.setStatus('Lütfen sayı doğrusunda bir noktayı seçin.', false);
                 return false;
            }
            else
                return true;
            }
		
		},
	isAnswerCorrect : function(value){
		
                if(Interaction.soruSayaci%2==0){
                    if(Interaction.cevap==Interaction.randomNumber.toString())
                        return true;
                }
                else{
                    if(value==Interaction.randomNumber.toString())
                        return true;
                }
		},
	onCorrectAnswer : function(){
		
		},
	onWrongAnswer : function(){
		
		},
	onFail : function(){
            if(Interaction.soruSayaci%2==0){
                Interaction.setStatus("Cevabınız yanlış; doğru cevap yukarıda  <b style='color:green'>yeşil</b> renkle gösterilmiştir.", false);
                $("#noktalar"+Interaction.randomNumber).css("opacity","1").css("color","green");
                console.log("noktalar"+Interaction.randomNumber);
                $(".sayilar").css("opacity","1");
            }
            else{

                Interaction.setStatus("Cevabınız yanlış; doğru cevap: <b style='color:green'>"+Interaction.isaret +Interaction.sayi+"</b>", false);
                $("#girdi").css("color","red");
                $(".sayilar").css("opacity","1");
            }
		
	}
}