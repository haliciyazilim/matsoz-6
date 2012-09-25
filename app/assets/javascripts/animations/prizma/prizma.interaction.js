var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:"40px",
            right:"40px"
        });
        Interaction.appendStatus({
            bottom:"50px",
            right:"150px"
        })

        $(container).append("<div id='tiklama'>")
        $("#tiklama").css({
            position:"absolute",
            width:"100px",
            height:"20px",
            right:"50px",
            top:"100px"


        });

        var tik;
        var tiklama=0;
        var tool=new Tool();
        //tool.distanceThreshold = 100;
        tool.onMouseDown=onMouseUp;

        var birinciTiklama="";

        function onMouseUp(event) {



            //alert(event.item.position);
            if(event.item){
                if(event.item.class=="nokta"){
                    tiklama++;

                    if(tiklama==1){
                        event.item.fillColor="white";
                        tik = new Path(event.item.position);
                        birinciTiklama=event.item.myId;
                        console.log("birinci tıklama "+tiklama+" . "+birinciTiklama);
                        console.log("ID: "+event.item.myId);
                        $("#tiklama").html("Birinci Tıklama: "+tiklama+" . "+birinciTiklama);

                    }
                    else if(tiklama==2){
                        if(birinciTiklama!=event.item.myId){


                            event.item.fillColor="white";
                            tik.add(event.item.position)
                            tik.strokeColor = 'red';

                            console.log("ikinci tıklama "+tiklama+" . "+birinciTiklama)
                            console.log("ok");

                            $("#tiklama").html("İkinci Tıklama: "+tiklama+" . "+birinciTiklama);
                            tiklama=0;
                        }
                        else{
                            $("#tiklama").html("else İkinci Tıklama: "+tiklama+" . "+birinciTiklama);
                            tiklama=0;
                        }
                    }
                    else{

                        console.log("sıfırladı. "+tiklama)
                        $("#tiklama").html("Sıfırlandı: "+tiklama);
                        tiklama=0;

                    }
                }



            }
        }



        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        ciz();
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