function __Styles(){}var RationalNumber=Class.extend({init:function(e){e.integer&&(this.integer=e.integer),this.nominator=e.nominator,this.denominator=e.denominator,e.factor?this.factor=e.factor:this.factor=1,this.determineType(),this.determineDefinition(),this.determineValue()},simplification:function(){var e=Util.gcd(this.nominator,this.denominator);this.nominator=this.nominator/e,this.denominator=this.denominator/e,this.determineDefinition(),this.determineValue()},denomEqualization:function(e){var t=Util.lcm(this.denominator,e.denominator);this.nominator=this.nominator*(t/this.denominator),this.denominator=t,e.nominator=e.nominator*(t/e.denominator),e.denominator=t,this.determineDefinition(),this.determineValue(),e.determineDefinition(),e.determineValue()},addition:function(e){var t,n,r,i,s,o,u;s=0,this.denomEqualization(e),this.integer?(n=this.integer*this.denominator+this.nominator,s=1):n=this.nominator,e.integer?(r=e.integer*e.denominator+e.nominator,s=1):r=e.nominator,o=this.denominator,t=this.factor*n+e.factor*r,s&&(u=Math.floor(Math.abs(t/o)),t%=o,o=o),t<0?(i=-1,t=-1*t):(i=1,t=t);if(s)var a=new RationalNumber({factor:i,integer:u,nominator:t,denominator:o});else var a=new RationalNumber({factor:i,nominator:t,denominator:o});return this.simplification(),e.simplification(),a.simplification(),a},substraction:function(e){var t;return e.additionInvert(),t=this.addition(e),e.additionInvert(),t.simplification(),t},multiplication:function(e){var t,n,r;this.convertToCompoundForm(),e.convertToCompoundForm(),t=this.factor*e.factor,n=this.nominator*e.nominator,r=this.denominator*e.denominator;var i=new RationalNumber({factor:t,nominator:n,denominator:r});return this.convertToComplexForm(),e.convertToComplexForm(),i.simplification(),i},division:function(e){var t;return e.multiplicationInvert(),t=this.multiplication(e),e.multiplicationInvert(),t.simplification(),t},convertToComplexForm:function(){this.integer||(this.integer=Math.floor(this.nominator/this.denominator),this.nominator=this.nominator%this.denominator),this.determineType(),this.determineDefinition(),this.determineValue()},convertToCompoundForm:function(){this.integer&&(this.nominator=this.integer*this.denominator+this.nominator),this.integer=undefined,this.determineType(),this.determineDefinition(),this.determineValue()},additionInvert:function(){this.factor&&(this.factor==1?this.factor=-1:this.factor=1),this.determineType(),this.determineDefinition(),this.determineValue()},multiplicationInvert:function(){this.type==3&&this.convertToCompoundForm();var e=this.nominator;this.nominator=this.denominator,this.denominator=e,this.determineType(),this.determineDefinition(),this.determineValue()},toHTML:function(e){var t=Date.now(),n=e+4,r=2*n+1,i=r+10,s=Math.round(i*.5),o=i-s,u=s,a=2*n,f=""+e+"px",l=""+n+"px",c=""+r+"px",h=""+i+"px",p=""+s+"px",d=""+o+"px",v=""+u+"px",m=""+a+"px",g={position:"absolute",padding:0,margin:0,width:h,height:c,fontSize:f,lineHeight:l},y={width:d,height:c,textAlign:"right",paddingRight:"4px",boxSizing:"border-box","float":"left",lineHeight:m},b={width:p,height:l,textAlign:"center","float":"left",lineHeight:l},w={width:v,height:"1px",padding:0,borderTop:"2px solid","float":"left"},E={width:p,height:l,textAlign:"center","float":"left",lineHeight:l},S=Util.dom({tag:"div",css:g,html:'<div class="frac"><div class="int"></div><div class="nom"></div><div class="line"></div><div class="denom"></div></div>'}),x;return this.integer?x=this.factor*this.integer:this.factor==-1?x="-":x="",$(".int",S).html(x),$(".int",S).css(y),$(".nom",S).html(this.nominator),$(".nom",S).css(b),$(".denom",S).html(this.denominator),$(".denom",S).css(E),$(".line",S).css(w),S},determineType:function(){this.factor==-1?this.type=RationalNumber.RATIONAL:this.integer?this.type=RationalNumber.COMPLEX:this.nominator<this.denominator?this.type=RationalNumber.SIMPLE:this.type=RationalNumber.COMPOUND},determineDefinition:function(){this.factor==-1?this.integer?this.definition="-"+this.integer+" tam "+this.nominator+" bölü "+this.denominator:this.definition="-"+this.nominator+" bölü "+this.denominator:this.integer?this.definition=""+this.integer+" tam "+this.nominator+" bölü "+this.denominator:this.definition=""+this.nominator+" bölü "+this.denominator},determineValue:function(){var e;this.integer?e=this.integer+this.nominator/this.denominator:e=this.nominator/this.denominator,this.value=this.factor*e}});RationalNumber.randomGenerator=function(e,t){if(t==null||t==undefined)t=Util.randomInteger(0,4);if(e==null||e==undefined)t==0?e=-1:e=1;var n,r,i,s;switch(t){case 0:Util.randomDigit()?(i=Util.randomInteger(1,4),n=Util.randomInteger(1,11),r=Util.randomInteger(2,16,[n]),s=new RationalNumber({factor:e,integer:i,nominator:n,denominator:r})):(n=Util.randomInteger(1,11),r=Util.randomInteger(2,16,[n]),s=new RationalNumber({factor:e,nominator:n,denominator:r}));break;case 1:n=Util.randomInteger(1,11),r=Util.randomInteger(n+1,16),s=new RationalNumber({factor:e,nominator:n,denominator:r});break;case 2:do n=Util.randomInteger(3,16),r=Util.randomInteger(2,n);while(n%r==0);s=new RationalNumber({factor:e,nominator:n,denominator:r});break;case 3:i=Util.randomInteger(1,4),n=Util.randomInteger(1,11),r=Util.randomInteger(n+1,16),s=new RationalNumber({factor:e,integer:i,nominator:n,denominator:r})}return s},RationalNumber.RATIONAL=0,RationalNumber.SIMPLE=1,RationalNumber.COMPOUND=2,RationalNumber.COMPLEX=3;var Animation={images:[],init:function(e){Animation.container=e}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("kesir deneme"),Interaction.paper={width:$(e).width(),height:$(e).height()};for(var t=0;t<3;t++)for(var n=0;n<6;n++){var r=RationalNumber.randomGenerator();r.simplification();var i=r.toHTML(24);$(Interaction.container).append(i);var s=20+t*94,o=5+96*n,u=""+s+"px",a=""+o+"px";$(i).css({position:"absolute",top:u,left:a})}Interaction.prepareNextQuestion()},nextQuestion:function(e){},preCheck:function(){},isAnswerCorrect:function(e){},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){}};