function initCompass(e){Interaction.compass=new Compass(e.x+20,e.y),Interaction.compass.right.class="right_leg",drawCompass(Interaction.br*3.5);var t=new Tool;t.drag=!1,t.onMouseDown=function(e){Interaction.compass.group.bounds.contains(e.point)&&(this.drag=!0)},t.onMouseDrag=function(e){this.drag===!0&&Interaction.step2==0&&drawCompass(e.delta.x)},t.onMouseUp=function(e){this.drag=!1},t.activate,Interaction.tool=t}function drawCompass(e){if(e==null||e==undefined)e=0;if(Interaction.compass.d+e>Interaction.br*7||Interaction.compass.d+e<Interaction.br*2)return;Interaction.compass.changeDelta(e)}function drawRuler(e){Interaction.ruler=new Raster("ruler"),Interaction.ruler.position=new Point(e.x,e.y+20)};