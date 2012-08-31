var Interaction = {
    
	getFramework:function(){
			return 'paper';
		},

    init:function(container){
        Interaction.container = container;
		Main.setObjective('Yandaki cebirsel ifadelerde kutulara uygun sayıları giriniz ve kontrol ediniz.');
		Interaction.paper = {
				width:$(container).width(),
				height:$(container).height()
			}



        $(container).append("<div id='soru'>");
        $("#soru").append("<div id='sol' class='yanlar'>");
        $("#soru").append("<div id='sag' class='yanlar'>");

        for(var i= 0; i<5;i++){
            $("#sol").append("<div id='sol"+i+"' class='madde'>");
            $("#sag").append("<div id='sag"+i+"' class='madde'>");

            if(i>0){
                $("#sol"+i).html(i);
                //$("#sag"+i).html(i);

                Interaction.appendInput({
                    width: '35px',
                    height: '32px',
                    textAlign: 'center',
                    fontSize: '20px'
                },false,true);
                Interaction.inputs[i-1].id="girdi"+i;
                $("#sag"+i).html($("#girdi"+i));
            }
            else{
                $("#sol0").html("x");
            }
        }

        $(".madde").css({
            width:"148px",
            height:"40px",
            position:"relative",
            textAlign:"center",
            fontSize:"20px",
            lineHeight:"40px"

        });

        $(".yanlar").css({
            width:"148px",
            height:"200px",
            position:"relative",
            float:"left"

        });

        $("#soru")
            .css("width","300px")
            .css("height","200px")
            .css("position","absolute")
            .css("margin","auto")
            .css("font-size","16px")
            .css("left","0px")
            .css("right","0px")
            .css("top","10px")
            .css("border","1px solid red");

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

        Interaction.soruSayaci=0;
        Interaction.prepareNextQuestion();
		},
	nextQuestion: function(randomNumber){

        Interaction.random1=Math.floor(Math.random()*9+1);

        Interaction.random2=Math.floor(Math.random()*9+1);

        Interaction.isaret=Interaction.soruSayaci%2==0?"+":"–";

        Interaction.soru=Interaction.random1==1?("x "+Interaction.isaret+" "+Interaction.random2):(Interaction.random1+"x "+Interaction.isaret+" "+Interaction.random2)
        //Interaction.soru2=Interaction.random1==1?("x "+Interaction.isaret+" "+Interaction.random2):(Interaction.random1+"x "+Interaction.isaret+" "+Interaction.random2)
        $("#sag0").html(Interaction.soru);

        Interaction.soruSayaci++;

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