function __Styles(){}var Animation={images:[],init:function(e){function p(e,t){Animation.line&&Animation.line.remove();var n=Util.createProjectionMatrixForObjectAt(375,70),r=Util.project(e,n),i=Util.project(t,n),s=h.project(n);s.set_style(surfaceStyle),Animation.line=new Path.Line(r,i),Animation.line.set_style(surfaceStyle);var o=new AnimationHelper({rotation:0}),u=0;o.animate({style:{rotation:Math.PI*2},duration:3e3,delay:u+=2e3,animationType:"easeInEaseOut",init:function(){h.pivotsX[0]=new Point3(0,0,0)},update:function(){Animation.line&&Animation.line.remove();var r=Util.project(e.getRotatedPointByX(this.rotation),n),i=Util.project(t.getRotatedPointByX(this.rotation),n);Animation.line=new Path.Line(r,i),Animation.line.set_style(surfaceStyle),h.rotationsX[0]=this.rotation;var s=h.project(n);s.set_style(surfaceStyle)}})}surfaceStyle={strokeColor:"#4F9C4F",strokeWidth:2},Animation.container=e;var t=100,n=50,r=30,i=new Point3(-70,-r,-50),s=new Point3(60,-r,15),o=new Point3(-30,r*2,-20),u=new Point3(60,-r*2,45),a=new Point3(-10,20+r*2,20),f=new Point3(-10,20-r*2,20),l=new Point3(-60,r,30),c=new Point3(40,r,-30),h=new Surface([new Point3(-t,r,-n),new Point3(t,r,-n),new Point3(t,r,n),new Point3(-t,r,n)]);p(i,s)}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective(""),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"40px",right:"40px"}),Interaction.appendStatus({bottom:"50px",right:"150px"}),Interaction.prepareNextQuestion()},nextQuestion:function(e){},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};