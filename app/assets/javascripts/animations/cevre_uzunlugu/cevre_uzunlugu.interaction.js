var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    init:function(container){
        Interaction.container = container;
        Main.setObjective('Yandaki şeklin, bir köşesinden tutarak büyütüp ya da küçültüp benzerini elde edebilirsiniz.');
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
        });


        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(randomNumber){

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
		
    },
    generateShape: function(type){
        var vertexes = [];
        var edges = [];
        switch(type){
            case 0:
                vertexes.push( new Point(0,0));
                vertexes.push( new Point(0,4));
                vertexes.push( new Point(3,4));
                vertexes.push( new Point(3,3));
                vertexes.push( new Point(6,3));
                vertexes.push( new Point(6,0));
                edges.push(4);
                edges.push(3);
                edges.push(1);
                edges.push(1);
                break;
        }
        return {
            vertexes:vertexes,
            edges:edges
        };

    }
}