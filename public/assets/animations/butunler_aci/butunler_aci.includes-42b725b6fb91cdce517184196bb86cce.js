function __Styles(){
	/*
	* write your styles here without using 'var' definer
	*/
}
;
/*
*   new Angle({
*       angle:30,
*       phase:15,
*       complement:angle1
*       center:new Point(100,200)
*   })
*/

function Angle(opt){
    this.animate = Item.prototype.animate;
    this.angle = opt.angle;
    if(opt.phase)
        this.phase = opt.phase;
    else
        this.phase = 0;
    if(opt.comlement)
        this.complement = opt.complement;
    if(opt.suplement)
        this.suplement = opt.suplement;
    this.centerPoint = opt.center;
    if(opt.textPosition)
        this.textPosition = opt.textPosition;
    if(opt.isNeighbour)
        this.isNeighbour = opt.isNeighbour;
    this.elements = {};
    this.radius = Angle.RADIUS;
}
Angle.prototype.setAngle = function(angleValue){
    this.angle = angleValue;
    if(this.suplement)
        this.suplement.setAngle(180-this.angle);
    if(this.complement)
        this.complement.setAngle(90-this.angle);
}
Angle.prototype.setComplement = function(complement){
    this.complement = complement;
    this.complement.setAngle(90 - this.angle);
    this.complement.owner = this;
}

Angle.prototype.setSuplement = function(suplement){
    this.suplement = suplement;
    this.suplement.setAngle(180 - this.angle);
    this.suplement.owner = this;
}

Angle.prototype.redraw = function(pointOrAngle){
    if(this.secondLeg)
        this.secondLeg.remove();
    var angle;
    if(pointOrAngle == undefined)
        angle = this.angle;
    else if(typeof pointOrAngle == "number")
        angle = pointOrAngle;
    else
        angle = 360-Util.radianToDegree(Util.findAngle(this.centerPoint.x,-this.centerPoint.y,pointOrAngle.x,-pointOrAngle.y)) - this.phase;

    if(this.suplement || this.owner && this.owner.suplement){
        if(angle > 180 && angle <= 270)
            angle = 180;
        if(angle > 270)
            angle = 0;
        if(angle < 0)
            angle = 0;
    }
    else if (this.complement || this.owner && this.owner.complement){
//    else{
        if(angle > 90 && angle <= 270)
            angle = 90;
        if(angle > 270)
            angle = 0;
        if(angle < 0)
            angle = 0;
    }

    var snapAngles = [0,30,45,60,90,120,135,150,180];
    var snapTolarence = 3;
    for(var i=0; i < snapAngles.length; i++)
        if(angle - snapAngles[i] > -snapTolarence && angle - snapAngles[i]< snapTolarence){
            angle = snapAngles[i];
            break;
        }
    this.angle = Math.floor(angle);
    if(this.firstLeg)
        this.firstLeg.remove();
    if(this.isNeighbour == true){
        this.phase = this.owner.angle + this.owner.phase;
        this.centerPoint = this.owner.centerPoint;
    }
    if(this.suplement)
        this.suplement.redraw(180 - this.angle);
    if(this.complement)
        this.complement.redraw(90 - this.angle);
    var firstLegPoint = this.firstLegPoint = this.centerPoint.add(this.radius,0).getRotatedPoint(-this.phase,this.centerPoint);
    var secondLegPoint = this.secondLegPoint =  this.centerPoint.add(this.radius,0).getRotatedPoint(-(this.phase + this.angle),this.centerPoint);

//    if(this.isNeighbour == true){
        this.firstLeg = new Path.OneSidedArrow(
            this.centerPoint,
            firstLegPoint,
            Angle.ARROW_HEAD_SIZE,
            Angle.ARROW_HEAD_ANGLE
        );
//    }
    this.secondLeg = new Path.OneSidedArrow(
        this.centerPoint,
        secondLegPoint,
        Angle.ARROW_HEAD_SIZE,
        Angle.ARROW_HEAD_ANGLE
    );
    if(this.isInteractive){
        if(this.interactiveLeg)
            this.interactiveLeg.remove();
        this.secondLeg.set_style({strokeColor:"#900",fillColor:"#900"})
        this.interactiveLeg = new Path.Line(
            this.centerPoint,
            secondLegPoint
        ).set_style({strokeColor:new RgbColor(0,0,0,0),strokeWidth:20,fillColor:new RgbColor(0,0,0,0)})
        this.interactiveLeg.class = "interactive_angle_leg";
        this.interactiveLeg.angleObject = this;
    }
    if(this.arc)
        this.arc.remove();
    if( this.arcCircle )
        this.arcCircle.remove();
    if(this.angle == 90){
        this.arc = new Path();
        this.arc.add(this.centerPoint.findPointTo(firstLegPoint,this.radius*0.2));
        var cornerPoint = this.centerPoint.findPointTo(firstLegPoint,this.radius*0.2*Math.sqrt(2)).getRotatedPoint(-this.angle*0.5, this.centerPoint);
        this.arc.add(cornerPoint);
        this.arc.add(this.centerPoint.findPointTo(secondLegPoint,this.radius*0.2));
        this.arc.set_style(Angle.ARC_STYLE);
        this.arcCircle = new Path.Circle(this.centerPoint.findPointTo(cornerPoint,50,true),3).set_style({fillColor:'#000'});
    }
    else{
        this.arc = new Path.ArcByAngle(this.centerPoint,this.radius*0.2,-(this.angle+this.phase),-this.phase);
        this.arc.set_style(Angle.ARC_STYLE);
    }
    if(this.arcText)
        this.arcText.remove();
    var middlePoint = this.centerPoint.add(this.radius*0.2+22,0).getRotatedPoint(-(this.angle*0.5+this.phase),this.centerPoint);
    this.arcText = new PointText(middlePoint.add(0,7));
    this.arcText.content = this.angle + "°";
    this.arcText.fontSize = 14;
    this.arcText.justification = 'center';

    if(this.textPosition){
        var angleTextString="", typeTextString="";
        if(this.suplement){
            angleTextString =  this.angle + "° + " + (180 - this.angle) + "°" + " = 180°";
            typeTextString = (this.suplement.isNeighbour?"Komşu ":"")+"Bütünler açı";
        }
        if(this.complement){
            angleTextString =  this.angle + "° + " + (90 - this.angle) + "°" + " = 90°";
            typeTextString = (this.complement.isNeighbour?"Komşu ":"")+"Tümler açı";
        }
        if(this.angleText)
            this.angleText.remove();
        if(this.typeText)
            this.typeText.remove();
        this.angleText = new PointText(this.textPosition);
        this.angleText.content = angleTextString;
        this.angleText.set_style(Angle.TEXT_STYLE)
        this.typeText = new PointText(this.textPosition.add(0,25));
        this.typeText.content = typeTextString
        this.typeText.set_style(Angle.TEXT_STYLE)
    }

}

Angle.prototype.draw = function(isInteractive,duration){
    if(isInteractive == undefined)
        isInteractive = false;
    if(duration == undefined)
        duration = 0 ;
    this.isInteractive = isInteractive;
    this.redraw(this.angle);
    if(isInteractive === true){
        console.log("tool will be created")
        var tool = new Tool();
        tool.onMouseDown = function(event){
            console.log(event);
            if(event.item && event.item.class == "interactive_angle_leg"){
                this.drag = true
                this.angleObject = event.item.angleObject;
            }
            else
                this.drag = false;
        }
        tool.onMouseDrag = function(event){
            if(this.drag){
                this.angleObject.redraw(event.point);
            }
        }
        tool.onMouseUp = function(){
            this.drag = false;
        }
        tool.activate();
        this.tool = tool;

    }

    this.opacity = 0;
    this.setAngleOpacity(0);
    this.animate({
        style:{opacity:1},
        duration:Math.floor(duration/3),
        update:function(){
           this.setAngleOpacity(this.opacity);
        }
    })
    if(this.suplement){
        this.suplement.opacity = 0;

        this.suplement.setAngleOpacity(0);
        this.suplement.animate({
            style:{opacity:1},
            duration:Math.floor(duration/3),
            delay:Math.floor(duration/3),
            update:function(){
                console.log(this.angle,this.opacity);
                this.setAngleOpacity(this.opacity);
            }
        })
    }
    if(this.complement){
        this.complement.opacity = 0;
        this.complement.setAngleOpacity(0);
        this.complement.animate({
            style:{opacity:1},
            duration:Math.floor(duration/3),
            delay:Math.floor(duration/3),
            update:function(){
                this.setAngleOpacity(this.opacity);
            }
        })
    }
    if(this.textPosition){
        if(this.angleText)
            this.angleText.opacity = 0;
        if(this.typeText)
            this.typeText.opacity = 0;
        this.animate({
            style:{textOpacity:1},
            duration:Math.floor(duration/3),
            delay:Math.floor(duration*2/3),
            init:function(){
                this.textOpacity = 0;
            },
            update:function(){
                if(this.angleText)
                    this.angleText.opacity = this.textOpacity;
                if(this.typeText)
                    this.typeText.opacity = this.textOpacity;
            }
        })
    }

};
Angle.prototype.setAngleOpacity = function(opacity){
    if(this.firstLeg)
        this.firstLeg.opacity = opacity;
    if(this.secondLeg)
        this.secondLeg.opacity = opacity;
    if(this.arcText)
        this.arcText.opacity = opacity;
    if(this.arc)
        this.arc.opacity = opacity;
};
Angle.prototype.remove = function(){
    if(this.arc)
        this.arc.remove();
    if(this.suplement)
        this.suplement.remove();
    if(this.complement)
        this.complement.remove();
    if(this.angleText)
        this.angleText.remove();
    if(this.typeText)
        this.typeText.remove();
    if(this.arcText)
        this.arcText.remove();
    if(this.firstLeg)
        this.firstLeg.remove();
    if(this.secondLeg)
        this.secondLeg.remove();
    if(this.interactiveLeg)
        this.interactiveLeg.remove();
    if(this.arcCircle)
        this.arcCircle.remove();

}

Angle.RADIUS = 100;
Angle.ARROW_HEAD_SIZE = 10;
Angle.ARROW_HEAD_ANGLE = 18;
Angle.TEXT_STYLE= {
    justification:'center',
    fontSize:15
}
Angle.ARC_STYLE = {
    strokeColor:'#000',
    strokeWidth:2
}
;
var Animation = {
    images:[],
	init:function(container){
        Animation.container = container;
        Animation.angle1 = new Angle({
            angle:70,
            phase:0,
            center:new Point(200,100),
            textPosition:new Point(350,140)
        });
        Animation.suplementAngle1 = new Angle({
            angle:0,
            phase:45,
            center:new Point(500,100)
        });
        Animation.angle1.setSuplement(Animation.suplementAngle1);
        Animation.angle1.draw(false,5000);

        var animHelper = new AnimationHelper({
            point1:Animation.angle1.centerPoint,
            point2:Animation.suplementAngle1.centerPoint,
            point3:Animation.angle1.textPosition
        });
        animHelper.animate({
            style:{
                point1:new Point(50,100),
                point2:new Point(250,100),
                point3:new Point(200,140)
            },
            duration:1000,
            delay:5000,
            update:function(){
                Animation.angle1.centerPoint = this.point1;
                Animation.angle1.textPosition = this.point3;
                Animation.suplementAngle1.centerPoint = this.point2;
                Animation.angle1.redraw();
            },
            callback:function(){
                var angle = new Angle({
                    angle:70,
                    phase:0,
                    center:new Point(550,100),
                    textPosition:new Point(550,140)
                });

                var suplementAngle  = new Angle({
                    angle:120,
                    phase: 15,
                    center:new Point(550,100),
                    isNeighbour:true
                });
                angle.setSuplement(suplementAngle)
                angle.draw(false,5000);
                Main.animationFinished(5000);
            }

        })
    }
}
;
var Interaction = {

    getFramework:function(){
        return 'paper';
    },
    images:[

    ],
    objective1:'Yandaki ilk açının kırmızı kolunu hareket ettirerek bütünleri olan açının ölçüsündeki değişimi görebilirsiniz.',
    objective2:'Yandaki açının bütünleyen açısını bulunuz.',
    init:function(container){
        Interaction.container = container;
        Main.setObjective(Interaction.objective1);
        Interaction.paper = {
            width:$(container).width(),
            height:$(container).height()
        }
        Interaction.appendButton({
            bottom:'60px',
            right:'10px'
        });
        Interaction.appendStatus({
            bottom:'60px',
            right:'150px'
        });
        Interaction.alterLevelButton = Util.dom({
            tag:'button',
            parent:Interaction.container,
            css:{
                position:'absolute',
                bottom:'10px',
                right:'10px',
                width:'105px',
                height:'42px',
                border:0,
                backgroundColor:'none',
                backgroundImage:"url(/assets/animations/butunler_aci/seviye_2.png)"
            }
        });
        Interaction.setRandomGenerator(2);
        Interaction.alterLevelButton.onclick = Interaction.enterLevel2;
        Interaction.level = 1;
//        /*<[[TEST*/Interaction.level = 2;/*TEST]]>*/
        Interaction.firstAnglePosition = new Point(130,150);
        Interaction.secondAnglePosition = new Point(370,150);
        Interaction.textPosition = new Point(270,220);
        Interaction.prepareNextQuestion();
    },
    nextQuestion: function(randomNumber){
        $(Interaction.questionDiv).remove();

        Main.interactionProject.activeLayer.removeChildren();
        switch(Interaction.level){
            case 1:
                Interaction.button.className = "next_button";

                var angle = new Angle({
                    angle:Util.randomInteger(20,70),
                    phase:0,
                    center:Interaction.firstAnglePosition,
                    textPosition:Interaction.textPosition
                });
                Interaction.angle = angle;
                var suplementAngle  = new Angle({
                    angle:120,
                    phase: 15,
                    center:Interaction.secondAnglePosition

                });
                if(randomNumber == 1){
                    suplementAngle.isNeighbour = true;
                    angle.centerPoint = new Point(270,150)
                }
                angle.setSuplement(suplementAngle);
                angle.draw(true);
                angle.redraw();
                break;

            case 2:
                Interaction.angle = new Angle({
                    angle:Util.randomInteger(10,80),
                    phase:Util.randomInteger(0,60)-30,
                    center:Interaction.firstAnglePosition
                });
                Interaction.angle.draw(false);
                var input = Interaction.addInput({
                    isNumber:true,
                    maxLength:3,
                    reverseText:false,
                    css:{
                    },
                    correctAnswer:180 - Interaction.angle.angle
                });
                Interaction.questionDiv = Util.dom({
                    tag:'div',
                    parent:Interaction.container,
                    html:'Bütünleyen açı ölçüsü = ',
                    css:{
                        position:'absolute',
                        top:'70px',
                        right:'50px'
                    }
                });
                $(Interaction.questionDiv)
                    .append(input)
                    .append("°");

                break;
        }

    },

    enterLevel1: function(){
        Interaction.level = 1;
        Interaction.alterLevelButton.style.backgroundImage ="url(/assets/animations/butunler_aci/seviye_2.png)"
        Interaction.alterLevelButton.onclick = Interaction.enterLevel2;
        $(Interaction.questionDiv).remove();
        Main.setObjective(Interaction.objective1);
        Interaction.prepareNextQuestion();
    },

    enterLevel2: function(){
        Interaction.level = 2;
        Interaction.alterLevelButton.style.backgroundImage ="url(/assets/animations/butunler_aci/seviye_1.png)"
        Interaction.alterLevelButton.onclick = Interaction.enterLevel1;
        Main.setObjective(Interaction.objective2);
        Interaction.prepareNextQuestion();

    },


    /*
     *	this function is called inside Interaction.__checkAnswer() function
     *	if this function returns false, check answer operation is cancelled
     */
    preCheck : function(){
        if(Interaction.level == 1){
            Interaction.prepareNextQuestion();
            return false;
        }
    },
    isAnswerCorrect : function(value){

    },
    onCorrectAnswer : function(){
        if(Interaction.level = 2){
            Interaction.showAnswer();
        }
    },
    onWrongAnswer : function(){

    },
    onFail : function(){
        if(Interaction.level == 2){
            Interaction.showAnswer();
        }
    },
    showAnswer : function(){
        Interaction.pause();
        $(Interaction.questionDiv).fadeOut(1000,function(){
            $(this).remove();
            Interaction.suplementAngle = new Angle({
                angle:10,
                phase:10,
                center:Interaction.secondAnglePosition
            });
            Interaction.angle.setSuplement(Interaction.suplementAngle);
            Interaction.angle.redraw();
            Interaction.resume(1000);
        });


    }
}
;




