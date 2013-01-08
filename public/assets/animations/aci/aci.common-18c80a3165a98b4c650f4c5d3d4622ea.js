function initCompass(compassPoint){
    Interaction.compass = new Compass(compassPoint.x+20,compassPoint.y);
    Interaction.compass.right.class = "right_leg";
    drawCompass(Interaction.br*3.5);

    var tool = new Tool();
    tool.drag = false;
    tool.onMouseDown = function(event){
        if(Interaction.compass.group.bounds.contains(event.point)){
            this.drag = true;
        }
    };
    tool.onMouseDrag = function(event){
        if(this.drag === true && Interaction.step2 == false){
            drawCompass(event.delta.x);
        }
    };
    tool.onMouseUp = function(event){
        this.drag = false;
    };
    tool.activate;
    Interaction.tool = tool;
}

function drawCompass(dx){
    if(dx == null || dx == undefined){
        dx = 0;
    }
    if(Interaction.compass.d + dx > Interaction.br*7 ||
        Interaction.compass.d + dx < Interaction.br*2) {
        return;
    }
    Interaction.compass.changeDelta(dx);
}
function drawRuler(rulerPoint){
    Interaction.ruler = new Raster('ruler');
    Interaction.ruler.position = new Point(rulerPoint.x,rulerPoint.y+20);
}
;
