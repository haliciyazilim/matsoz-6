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
            left:'20px',
            fontSize:'22px',
            fontWeight:'normal'
        })
        Interaction.referencePoint = new Point(0,20);
        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){
        Main.interactionProject.activeLayer.removeChildren();
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

        Interaction.setStatus(Interaction.universalSet.getDefinitionString("E"));


        Interaction.rect = new Path.Rectangle(Interaction.referencePoint.add(20,30),new Size(450,240));
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

        Interaction.rectText = new PointText(Interaction.referencePoint.add(28,55));
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


//        Interaction.set1.drawVennDiagram(Interaction.container,Interaction.referencePoint.add(50,40),"A")
//        Interaction.set2.drawVennDiagram(Interaction.container,Interaction.referencePoint.add(250,40),"B")
//        Interaction.set3.drawVennDiagram(Interaction.container,Interaction.referencePoint.add(145,120))
        Set.drawSets(Interaction,Interaction.referencePoint.add(50,35),[Interaction.set1,Interaction.set2],['A','B']).intersectClone.removeChildren();

        Set.drawSets(Interaction,Interaction.referencePoint.add(145,150),[Interaction.set3],['C'])
        for(var i=1;i<=3;i++){
            Interaction['set'+i].vennDiagram.children[0].set_style({opacity:0});
            Interaction['set'+i].vennDiagram.children[1].set_style({opacity:0});
            Interaction['set'+i].vennDiagram.children[2].set_style({opacity:0});
            Interaction['set'+i].vennDiagram.children[3].set_style({opacity:0});
            if(i!=3){
                Interaction['set'+i].vennDiagram.children[0].animate({
                    style:{opacity:1},
                    duration:1000,
                    delay:3000+1000*i
                });
                Interaction['set'+i].vennDiagram.children[1].animate({
                    style:{opacity:1},
                    duration:1000,
                    delay:3000+1000*i
                });
            }
            Interaction['set'+i].vennDiagram.children[2].animate({
                style:{opacity:1},
                duration:1000,
                delay:2000
            });
            Interaction['set'+i].vennDiagram.children[3].animate({
                style:{opacity:1},
                duration:1000,
                delay:2000
            });


        }
        Interaction.resume(5000);
    },

    generateSets:function(){
        do
            Interaction.universalSet = Set.randomGenerator();
        while(Interaction.universalSet.elements.length < 6 || Interaction.universalSet.elements.length > 10)
        Interaction.set1lastIndex = Util.randomInteger(2,Interaction.universalSet.elements.length-3);
        Interaction.set2lastIndex = Util.randomInteger(Interaction.universalSet.elements.length-3,Interaction.universalSet.elements.length);
        Interaction.set3lastIndex = Interaction.universalSet.elements.length;
        Interaction.set1 = new Set({
            type:Set.ELEMENTS,
            elements:Interaction.universalSet.elements.slice(0,Interaction.set1lastIndex)
        });
        Interaction.set2 = new Set({
            type:Set.ELEMENTS,
            elements:Interaction.universalSet.elements.slice(Util.randomInteger(-2,1) + Interaction.set1lastIndex,Interaction.set2lastIndex)
        });
        Interaction.set3 = new Set({
            type:Set.ELEMENTS,
            elements:Interaction.universalSet.elements.slice(Interaction.set2lastIndex,Interaction.set3lastIndex)
        });

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