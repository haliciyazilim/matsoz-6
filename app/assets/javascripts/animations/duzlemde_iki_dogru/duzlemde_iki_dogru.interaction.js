var Interaction = {
    
	getFramework:function(){
        return 'paper';
    },
	images:[
        
    ],
    PARALLEL:"paralel olan",
    ORTHOGONAL:"dik kesişen",
    init:function(container){
        Interaction.container = container;
        Main.setObjective('');
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }

        Interaction.appendButton({
            bottom:"0px",
            right:"10px"
        });
        Interaction.appendStatus({
            bottom:"10px",
            right:"150px",
            lineHeight:'30px',
            backgroundColor:'rgba(255,255,255,0.7)'
        })
        Interaction.createTool();

        Interaction.prepareNextQuestion();
    },
	nextQuestion: function(){
        Interaction.button.style.opacity= 0 ;
        Main.interactionProject.activeLayer.removeChildren();
        Interaction.selectedLine1 = null;
        Interaction.selectedLine2 = null;

        Interaction.questionType = Util.rand01() == 1 ? Interaction.PARALLEL : Interaction.ORTHOGONAL;
        /*<[[TEST*/
//            Interaction.questionType = Interaction.PARALLEL;
        /*TEST]]>*/
        Main.setObjective("Yandaki düzlemde yer alan doğrulardan<br/> <strong>"+Interaction.questionType+"</strong> <br/> iki doğruyu belirleyiniz.");
        Interaction.generateLines();
    },
		
	/*
	*	this function is called inside Interaction.__checkAnswer() function
	*	if this function returns false, check answer operation is cancelled
	*/
    generateLines:function(){
        var position= new Point(0,0);
        var size    = new Point(590,300);
        if(Interaction.rectangle)
            Interaction.rectangle.remove();
        Interaction.rectangle = new Path.Rectangle(position,size);
        Interaction.rectangle.set_style(interactionRectangleStyle);
        var lineCount = 0;
        var lines = [];
        do{
            var randomNumber = Util.randomInteger(0,5);
            /*<[[TEST*/
                randomNumber =  Util.randomInteger(0,3);
            /*TEST]]>*/
            var p1 = position.add(new Point(Util.randomInteger( 1,15)*40,Util.randomInteger(1,10)*30));
            var p2 = new Point(Util.randomInteger(20,40)*10,Util.randomInteger(-30,30)*10).add(p1.x,0);
            /*<[[TEST*/
//                p1 = new Point(200,271);
//                p2 = new Point(500,121);
            /*TEST]]>*/

            if(!Interaction.rectangle.contains(p1) || !Interaction.rectangle.contains(p2))
                continue;
            switch(lineCount%4){
                case 0://generate two parallel lines
                    var diff = Util.randomInteger(20,100);
                    if(!Interaction.rectangle.bounds.contains(p1.add(0,diff))
                        || !Interaction.rectangle.bounds.contains(p2.add(0,diff)))
                        continue;
                    lines.push([p1.add(0,diff),p2.add(0,diff)]);
                    lineCount += 2;
                    lines.push([p1,p2]);
                    break;
                case 1://generate a random line
                    lines.push([p1,p2]);
                    lineCount++;
                    break;
                case 2://generate two orthogonal lines
                    var lineCenter = Util.centerOfPoints([p1,p2]);
                    if(!Interaction.rectangle.bounds.contains(p1.getRotatedPoint(90,lineCenter))
                        || !Interaction.rectangle.bounds.contains(p2.getRotatedPoint(90,lineCenter)))
                        continue;
                    lines.push([p1.getRotatedPoint(90,lineCenter),p2.getRotatedPoint(90,lineCenter)]);
                    lines.push([p1,p2]);
                    lineCount += 2;
                    break;
                case 3:
                default:
                    lineCount++;
            }
        }while(/*<[[TEST*/true && /*TEST]]>*/ lineCount < 10)
        var shuffle = Util.getShuffledArray(lines.length);
        Interaction.lines = [];
        for(var i=0;i<shuffle.length;i++){
            var p1 = lines[shuffle[i]][0];
            var p2 = lines[shuffle[i]][1];
            var path = new Path.Line(p1,p2)
                .set_style(interactionLineStyle)
                .set_style({
                    className:"line"
                });
            Interaction.lines.push(path);
            path.p1 = p1;
            path.p2 = p2;
            switch(i%3){
                case 0:
                    path.strokeColor = new RgbColor(1,0.56,Math.random());
                    break;
                case 1:
                    path.strokeColor = new RgbColor(Math.random(),1,0.56);
                    break;
                case 2:
                    path.strokeColor = new RgbColor(0.56,Math.random(),1);
                    break;
            }
            path.isParallelTo = function(other){
                return Math.abs(Math.round(this.getDotProductWith(other)*1000000)) == 1000000;
            }
            path.isOrthogonalTo = function(other){
                return Math.abs(Math.round(this.getDotProductWith(other)*1000000)) == 0;

            }
            path.getDotProductWith = function(other){
                var v1 = this.p1.subtract(this.p2).normalize();
                var v2 = other.p1.subtract(other.p2).normalize();
                return v1.dot(v2);
            }
            path.highlight = function(){
                var clone = this.clone();
                clone.set_style({
                    strokeWidth:this.strokeWidth*2,
                    strokeColor:"#fff"
                });
                this.originalStrokeColor = this.strokeColor;
                this.insertAbove(clone);
            }
        }
    },
    createTool:function(){
        var tool = new Tool();
        tool.onMouseDown = function(event){
            if(event.item && event.item.className == "line" ){
                var checkAnswer = false;
                if(Interaction.selectedLine1 == null)
                    Interaction.selectedLine1 = event.item;
                else if(Interaction.selectedLine2 == null && Interaction.selectedLine1.id != event.item.id){
                    Interaction.selectedLine2 = event.item;
                    checkAnswer = true;
                }
                else
                    return;
//                event.item.selected = true;
                event.item.highlight();
                event.item.set_style(interactionLineSelectedStyle);
                if(checkAnswer)
                    Interaction.button.click();
            }
        }
    },
	preCheck : function(){

    },
	isAnswerCorrect : function(value){
//        Interaction.questionType = Util.rand01() == 1 ? Interaction.PARALLEL : Interaction.ORTHOGONAL;
        if(Interaction.questionType == Interaction.PARALLEL){
            return Interaction.selectedLine1.isParallelTo(Interaction.selectedLine2);
        }else if(Interaction.questionType == Interaction.ORTHOGONAL){
            return Interaction.selectedLine1.isOrthogonalTo(Interaction.selectedLine2);
        }
    },
	onCorrectAnswer : function(){
		Interaction.selectedLine1.set_style(interactionLineCorrectStyle);
		Interaction.selectedLine2.set_style(interactionLineCorrectStyle);
        Interaction.button.style.opacity = 1;
    },
	onWrongAnswer : function(){
        var line1Color = Interaction.selectedLine1.strokeColor;
        var line2Color = Interaction.selectedLine2.strokeColor;
		Interaction.selectedLine1.set_style(interactionLineWrongStyle);
        Interaction.selectedLine2.set_style(interactionLineWrongStyle);
        console.log(line1Color);
        Interaction.selectedLine1.animate({
            style:{strokeColor:Interaction.selectedLine1.originalStrokeColor},
            duration:1000,
            delay:1000,
            callback:function(){
                Interaction.selectedLine1 = null;
            }
        });
        Interaction.selectedLine2.animate({
            style:{strokeColor:Interaction.selectedLine2.originalStrokeColor},
            duration:1000,
            delay:1000,
            callback:function(){
                Interaction.resume();
                Interaction.selectedLine2 = null;
            }
        });
    },
	onFail : function(){
        Interaction.setStatus("Yanlış cevap doğrusu yeşil renk ile gösterilmiştir.",false);
		Interaction.selectedLine1.set_style(interactionLineWrongStyle);
		Interaction.selectedLine2.set_style(interactionLineWrongStyle);
        Interaction.pause();
        for(var i=0;i<Interaction.lines.length;i++)
            for(var j=0;j<Interaction.lines.length;j++)
                if(i == j) continue;
                else if(Interaction.questionType == Interaction.PARALLEL){
                    if(Interaction.lines[j].isParallelTo(Interaction.lines[i])){
                        Interaction.selectedLine1 = Interaction.lines[j];
                        Interaction.selectedLine2 = Interaction.lines[i];
                    }
                } else {
                    if(Interaction.lines[j].isOrthogonalTo(Interaction.lines[i])){
                        Interaction.selectedLine1 = Interaction.lines[j];
                        Interaction.selectedLine2 = Interaction.lines[i];
                    }
                }
        Interaction.selectedLine1.animate({
            style:{
                strokeColor:interactionLineCorrectStyle.strokeColor,
                strokeWidth:interactionLineStyle.strokeWidth*2
            },
            duration:1000,
            delay:1000,
            update:function(){
                Interaction.selectedLine2.set_style({
                    strokeWidth:this.strokeWidth,
                    strokeColor:this.strokeColor
                })
            },
            callback:function(){
                Interaction.selectedLine1.highlight();
                Interaction.selectedLine2.highlight();
                Interaction.resume();
            }
        });
        Interaction.button.style.opacity = 1;
    }
}