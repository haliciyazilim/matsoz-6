var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yanda verilen evrensel kümeleri inceleyiniz.');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }
        Interaction.appendButton({
            bottom:'30px',
            right:'10px'
        })
        Interaction.appendStatus({
            top:'20px',
            left:'50px',
            fontSize:'22px',
            fontWeight:'normal'
        })
        Interaction.referencePoint = new Point(0,30);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Interaction.button.className = "next_button";
        Interaction.pause();
        if(Interaction.set1){
            Interaction.set1.removeVennDiagram()
            Interaction.set2.removeVennDiagram()
            Interaction.set3.removeVennDiagram()
            Interaction.rect.remove();
            Interaction.rectText.remove();
        }
        Interaction.generateSets();

        Interaction.setStatus(Interaction.universalSet.getDefinitionString("E"))

        Interaction.set1.drawVennDiagram(Interaction.container,Interaction.referencePoint.add(90,50),"A")
        Interaction.set2.drawVennDiagram(Interaction.container,Interaction.referencePoint.add(260,70),"B")
        Interaction.set3.drawVennDiagram(Interaction.container,Interaction.referencePoint.add(175,140))


        Interaction.rect = new Path.Rectangle(Interaction.referencePoint.add(50,30),new Size(400,220));
        Interaction.rect.set_style({
            strokeColor:'#000',
            strokeWidth:2,
            opacity:0
        });
        Interaction.rect.animate({
            style:{opacity:1},
            duration:1000,
            delay:1000
        });

        Interaction.rectText = new PointText(Interaction.referencePoint.add(58,55));
        Interaction.rectText.content = "E";
        Interaction.rectText.set_style({
            fontSize:15,
            fillColor:'#000',
            opacity:0
        })
        Interaction.rectText.animate({
            style:{opacity:1},
            duration:1000,
            delay:1500
        });
        for(var i=1;i<=3;i++){
            $(Interaction["set"+i].div)
                .css({opacity:0})
                .delay(2000)
                .animate({opacity:1},1000);
            $('#vennLetter2',Interaction["set"+i].div)
                .css({opacity:0})
                .delay(1500+1000*i)
                .animate({opacity:1},1000)

            Interaction["set"+i].vennDiagram.opacity = 0;
            if(i==3)
                continue;
            Interaction["set"+i].vennDiagram.animate({
                style:{opacity:1},
                duration:1000,
                delay:1000+1000*i
            });
            Interaction.resume(5000);
        }
    },

    generateSets:function(){
        do
            Interaction.universalSet = Set.randomGenerator();
        while(Interaction.universalSet.elements.length < 6 || Interaction.universalSet.elements.length > 10)
        Interaction.set1lastIndex = Util.randomInteger(2,Interaction.universalSet.elements.length-3);
        Interaction.set2lastIndex = Util.randomInteger(Interaction.set1lastIndex+1,Interaction.universalSet.elements.length);
        Interaction.set3lastIndex = Interaction.universalSet.elements.length;
        console.log(Interaction.universalSet.elements.length,Interaction.set1lastIndex,Interaction.set2lastIndex,Interaction.set3lastIndex);
        Interaction.set1 = new Set({
            type:Set.ELEMENTS,
            elements:Interaction.universalSet.elements.slice(0,Interaction.set1lastIndex)
        });
        Interaction.set2 = new Set({
            type:Set.ELEMENTS,
            elements:Interaction.universalSet.elements.slice(Interaction.set1lastIndex,Interaction.set2lastIndex)
        });
        Interaction.set3 = new Set({
            type:Set.ELEMENTS,
            elements:Interaction.universalSet.elements.slice(Interaction.set2lastIndex,Interaction.set3lastIndex)
        });
        console.log(
            Interaction.universalSet.elements)
        console.log(
            Interaction.set1.elements,
            Interaction.set2.elements,
            Interaction.set3.elements)
    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
	preCheck : function(){
        Interaction.prepareNextQuestion();
        return false;
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