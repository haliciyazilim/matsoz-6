function __Styles(){firstDivStyle={position:"absolute",top:"30px",left:"30px",width:"340px",height:"70px"},secondDivStyle={position:"absolute",top:"120px",left:"30px",width:"340px",height:"70px"},thirdDivStyle={position:"absolute",top:"75px",left:"400px",width:"360px",height:"70px"},questionDivStyle={position:"absolute",top:"60px",left:"120px",width:"340px",height:"100px",fontSize:"24px"}}var Animation={images:[],init:function(e){Animation.container=e;var t=1e3,n=t+6250,r=n+6250;Animation.firstDiv=Util.dom({parent:Animation.container,tag:"div",css:firstDivStyle,html:'<span id="eq1" style="opacity:0;position:absolute;font-size:20px;top:24px;left:46px;"> = </span><div id="frac2" style="opacity:0;position:absolute;top:8px;left:66px;padding:0;margin:0;width:60px;height:51px;font-size:20px;line-height:24px;"><div id="nom2" style="text-align:center;height:25px;">3 x 5</div><div id="line2" style="height:1px;padding:0;border-top:2px solid;"></div><div id="denom2" style="text-align:center;height:25px;">20 x 5</div></div><span id="eq2" style="opacity:0;position:absolute;font-size:20px;top:24px;left:134px;"> = </span><span id="eq3" style="opacity:0;position:absolute;font-size:20px;top:24px;left:196px;"> = </span><span id="a1" style="opacity:0;position:absolute;font-size:20px;top:24px;left:216px;"> 0,15</span><span id="eq4" style="opacity:0;position:absolute;font-size:20px;top:24px;left:262px;"> = </span><span id="b1" style="opacity:0;position:absolute;font-size:20px;top:24px;left:280px;color:red;"> %15</span>'}),Animation.secondDiv=Util.dom({parent:Animation.container,tag:"div",css:secondDivStyle,html:'<span id="eq5" style="opacity:0;position:absolute;font-size:20px;top:24px;left:46px;"> = </span><div id="frac3" style="opacity:0;position:absolute;top:8px;left:66px;padding:0;margin:0;width:60px;height:51px;font-size:20px;line-height:24px;"><div id="nom3" style="text-align:center;height:25px;">25 x 5</div><div id="line3" style="height:1px;padding:0;border-top:2px solid;"></div><div id="denom3" style="text-align:center;height:25px;">20 x 5</div></div><span id="eq6" style="opacity:0;position:absolute;font-size:20px;top:24px;left:134px;"> = </span><span id="eq7" style="opacity:0;position:absolute;font-size:20px;top:24px;left:198px;"> = </span><span id="a2" style="opacity:0;position:absolute;font-size:20px;top:24px;left:218px;"> 1,25</span><span id="eq8" style="opacity:0;position:absolute;font-size:20px;top:24px;left:264px;"> = </span><span id="b2" style="opacity:0;position:absolute;font-size:20px;top:24px;left:282px;color:red;"> %125</span>'}),Animation.thirdDiv=Util.dom({parent:Animation.container,tag:"div",css:thirdDivStyle,html:'<span id="eq9" style="opacity:0;position:absolute;font-size:20px;top:24px;left:52px;"> = </span><div id="frac4" style="opacity:0;position:absolute;top:8px;left:70px;padding:0;margin:0;width:66px;height:51px;font-size:20px;line-height:24px;"><div id="nom4" style="text-align:center;height:25px;">2 : 5</div><div id="line4" style="height:1px;padding:0;border-top:2px solid;"></div><div id="denom4" style="text-align:center;height:25px;">500 : 5</div></div><span id="eq10" style="opacity:0;position:absolute;font-size:20px;top:24px;left:142px;"> = </span><span id="eq11" style="opacity:0;position:absolute;font-size:20px;top:24px;left:202px;"> = </span><span id="a3" style="opacity:0;position:absolute;font-size:20px;top:24px;left:222px;"> 0,004</span><span id="eq12" style="opacity:0;position:absolute;font-size:20px;top:24px;left:276px;"> = </span><span id="b3" style="opacity:0;position:absolute;font-size:20px;top:24px;left:294px;color:red;"> %0,4</span>'});var i=new RationalNumber({factor:1,nominator:3,denominator:20}),s=i.toHTML(20);$(Animation.firstDiv).append(s),$(s).css({position:"absolute",top:"9px",left:"10px",opacity:0});var o=new RationalNumber({factor:1,nominator:15,denominator:100}),u=o.toHTML(20);$(Animation.firstDiv).append(u),$(u).css({position:"absolute",width:"64px",top:"9px",left:"152px",opacity:0}),$(".nom",u).css({width:"34px"}),$(".denom",u).css({width:"34px"}),$(".line",u).css({width:"34px"});var a=new RationalNumber({factor:1,nominator:25,denominator:20}),f=a.toHTML(20);$(Animation.secondDiv).append(f),$(f).css({position:"absolute",top:"9px",left:"10px",opacity:0});var l=new RationalNumber({factor:1,nominator:125,denominator:100}),c=l.toHTML(20);$(Animation.secondDiv).append(c),$(c).css({position:"absolute",width:"66px",top:"9px",left:"152px",opacity:0}),$(".nom",c).css({width:"36px"}),$(".denom",c).css({width:"36px"}),$(".line",c).css({width:"36px"});var h=new RationalNumber({factor:1,nominator:2,denominator:500}),p=h.toHTML(20);$(Animation.thirdDiv).append(p),$(p).css({position:"absolute",width:"66px",top:"9px",left:"10px",opacity:0}),$(".nom",p).css({width:"36px"}),$(".denom",p).css({width:"36px"}),$(".line",p).css({width:"36px"});var d=new RationalNumber({factor:1,nominator:"0,4",denominator:100}),v=d.toHTML(20);$(Animation.thirdDiv).append(v),$(v).css({position:"absolute",width:"66px",top:"9px",left:"158px",opacity:0}),$(".nom",v).css({width:"36px"}),$(".denom",v).css({width:"36px"}),$(".line",v).css({width:"36px"}),$(s).delay(t).animate({opacity:1},500,"easeInOutQuad"),$("#eq1").delay(t+1250).animate({opacity:1},500,"easeInOutQuad"),$("#frac2").delay(t+1250).animate({opacity:1},500,"easeInOutQuad"),$("#eq2").delay(t+2500).animate({opacity:1},500,"easeInOutQuad"),$(u).delay(t+2500).animate({opacity:1},500,"easeInOutQuad"),$("#eq3").delay(t+3750).animate({opacity:1},500,"easeInOutQuad"),$("#a1").delay(t+3750).animate({opacity:1},500,"easeInOutQuad"),$("#eq4").delay(t+5e3).animate({opacity:1},500,"easeInOutQuad"),$("#b1").delay(t+5e3).animate({opacity:1},500,"easeInOutQuad"),$(f).delay(n).animate({opacity:1},500,"easeInOutQuad"),$("#eq5").delay(n+1250).animate({opacity:1},500,"easeInOutQuad"),$("#frac3").delay(n+1250).animate({opacity:1},500,"easeInOutQuad"),$("#eq6").delay(n+2500).animate({opacity:1},500,"easeInOutQuad"),$(c).delay(n+2500).animate({opacity:1},500,"easeInOutQuad"),$("#eq7").delay(n+3750).animate({opacity:1},500,"easeInOutQuad"),$("#a2").delay(n+3750).animate({opacity:1},500,"easeInOutQuad"),$("#eq8").delay(n+5e3).animate({opacity:1},500,"easeInOutQuad"),$("#b2").delay(n+5e3).animate({opacity:1},500,"easeInOutQuad"),$(p).delay(r).animate({opacity:1},500,"easeInOutQuad"),$("#eq9").delay(r+1250).animate({opacity:1},500,"easeInOutQuad"),$("#frac4").delay(r+1250).animate({opacity:1},500,"easeInOutQuad"),$("#eq10").delay(r+2500).animate({opacity:1},500,"easeInOutQuad"),$(v).delay(r+2500).animate({opacity:1},500,"easeInOutQuad"),$("#eq11").delay(r+3750).animate({opacity:1},500,"easeInOutQuad"),$("#a3").delay(r+3750).animate({opacity:1},500,"easeInOutQuad"),$("#eq12").delay(r+5e3).animate({opacity:1},500,"easeInOutQuad"),$("#b3").delay(r+5e3).animate({opacity:1},500,"easeInOutQuad",function(){Main.animationFinished(1e3)})}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yandaki eşitlikte boş kutuları doldurunuz ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"30px",right:"40px"}),Interaction.appendStatus({bottom:"40px",right:"200px"}),Interaction.denomArr=[2,4,5,10,20,25,50],Interaction.denom2Arr=[200,400,500],Interaction.setRandomGenerator(3),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.randomNumber=e,Interaction.flushInputs(),Interaction.myRandom=Util.randomInteger(0,3),Interaction.questionDiv&&$(Interaction.questionDiv).remove();var t,n,r;switch(e){case 0:n=Interaction.denomArr[Util.randomInteger(0,7)],r=100/n,t=Util.randomInteger(1,n),Interaction.rationalNumber=new RationalNumber({factor:1,nominator:t,denominator:n});break;case 1:n=Interaction.denomArr[Util.randomInteger(0,7)],r=100/n,t=Util.randomInteger(n+1,2*n),Interaction.rationalNumber=new RationalNumber({factor:1,nominator:t,denominator:n});break;case 2:n=Interaction.denom2Arr[Util.randomInteger(0,3)],r=100/n,l=n/100;do t=Util.randomInteger(2,4);while(t%l==0);Interaction.rationalNumber=new RationalNumber({factor:1,nominator:t,denominator:n})}Interaction.nom=Interaction.rationalNumber.nominator,Interaction.denom=Interaction.rationalNumber.denominator;var i=Interaction.nom*r/100;i=Math.floor(i*1e4)/1e4;var s=""+i,o=s.split(".");Interaction.d1=o[0],Interaction.d2=o[1];var u=Math.floor(i*1e4)/100,a=""+u,f=a.split(".");Interaction.pp=""+f[0]+","+f[1],Interaction.randomNumber==2?Interaction.e=Interaction.pp:Interaction.e=u,Interaction.questionDiv=Util.dom({parent:Interaction.container,tag:"div",css:questionDivStyle});var l,c=Interaction.nom*r;c=Math.floor(c*1e4)/1e4;var h=c*10;c%10==0?l=1:c%1==0?l=2:h%1==0?l=3:l=4;var p=""+Interaction.d1+","+Interaction.d2;switch(Interaction.myRandom){case 0:Interaction.appendInput({position:"absolute",top:"24px",left:"248px",width:"68px",height:"34px",fontSize:"24px"});var d=Interaction.rationalNumber.toHTML(28);$(Interaction.questionDiv).append(d),$(d).css({position:"absolute",top:"7px",left:"-22px"}),$(Interaction.questionDiv).append('<span id="eqq1" style="position:absolute;top:29px;left:66px;"> = </span><span id="dec" style="position:absolute;top:28px;left:86px;text-align:center;width:100px;"></span><span id="eqq2" style="position:absolute;top:29px;left:190px;"> = </span><span id="decc" style="position:absolute;top:29px;left:214px;"> % </span>'),$("#dec").html(p),$(Interaction.input).attr("maxLength",4),$(Interaction.questionDiv).append(Interaction.input);break;case 1:Interaction.appendInput({position:"absolute",top:"24px",left:"88px",width:"30px",height:"34px",fontSize:"24px"}),Interaction.appendInput({position:"absolute",top:"24px",left:"130px",width:"58px",height:"34px",fontSize:"24px"});var d=Interaction.rationalNumber.toHTML(28);$(Interaction.questionDiv).append(d),$(d).css({position:"absolute",top:"7px",left:"-22px"}),$(Interaction.questionDiv).append('<span id="eqq1" style="position:absolute;top:29px;left:66px;"> = </span><span id="eqq2" style="position:absolute;top:29px;left:196px;"> = </span><span id="comma" style="position:absolute;top:29px;left:120px;">,</span><span id="decc" style="position:absolute;top:29px;left:220px;"></span>'),$("#decc").html(" %"+Interaction.e),$(Interaction.inputs[0]).attr("maxLength",1),$(Interaction.inputs[1]).attr("maxLength",4),$(Interaction.questionDiv).append(Interaction.inputs[0]),$(Interaction.questionDiv).append(Interaction.inputs[1]);break;case 2:Interaction.appendInput({position:"absolute",top:"-1px",left:"-4px",width:"56px",height:"34px",fontSize:"24px"}),Interaction.appendInput({position:"absolute",top:"45px",left:"-4px",width:"56px",height:"34px",fontSize:"24px"}),$(Interaction.questionDiv).append('<span id="eqq1" style="position:absolute;top:29px;left:66px;"> = </span><div id="lline" style="position:absolute;left:-6px;top:39px;width:62px;height:1px;padding:0;border-top:2px solid;"></div><span id="eqq2" style="position:absolute;top:29px;left:190px;"> = </span><span id="dec" style="position:absolute;top:28px;left:86px;text-align:center;width:100px;"></span><span id="decc" style="position:absolute;top:29px;left:214px;"></span>'),$("#dec").html(p),$("#decc").html(" %"+Interaction.e),$(Interaction.inputs[0]).attr("maxLength",4),$(Interaction.inputs[1]).attr("maxLength",4),$(Interaction.questionDiv).append(Interaction.inputs[0]),$(Interaction.questionDiv).append(Interaction.inputs[1])}},preCheck:function(){},isAnswerCorrect:function(e){if(Interaction.myRandom==0)return Interaction.randomNumber==2?e==Interaction.pp||e==Interaction.pp+"0"?!0:!1:e==Interaction.e;if(Interaction.myRandom==1){var t=""+Interaction.d2+"0";return e[0]!=Interaction.d1||e[1]!=Interaction.d2&&e[1]!=t?!1:!0}return e[0]*Interaction.denom==e[1]*Interaction.nom},onCorrectAnswer:function(){for(var e=0;e<Interaction.inputs.length;e++)$(Interaction.inputs[e]).css("color","green")},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir!",!1),Interaction.myRandom==0?Interaction.input.value=Interaction.e:Interaction.myRandom==1?(Interaction.inputs[0].value=Interaction.d1,Interaction.inputs[1].value=Interaction.d2):(Interaction.inputs[0].value=Interaction.nom,Interaction.inputs[1].value=Interaction.denom);for(var e=0;e<Interaction.inputs.length;e++)$(Interaction.inputs[e]).css("color","green")}},RationalNumber=Class.extend({init:function(e){e.integer&&(this.integer=e.integer),this.nominator=e.nominator,this.denominator=e.denominator,e.factor?this.factor=e.factor:this.factor=1,this.determineType(),this.determineDefinition(),this.determineValue()},simplification:function(){var e=Util.gcd(this.nominator,this.denominator);this.nominator=this.nominator/e,this.denominator=this.denominator/e,this.determineDefinition(),this.determineValue()},denomEqualization:function(e){var t=Util.lcm(this.denominator,e.denominator);this.nominator=this.nominator*(t/this.denominator),this.denominator=t,e.nominator=e.nominator*(t/e.denominator),e.denominator=t,this.determineDefinition(),this.determineValue(),e.determineDefinition(),e.determineValue()},addition:function(e){var t,n,r,i,s,o,u;s=0,this.denomEqualization(e),this.integer?(n=this.integer*this.denominator+this.nominator,s=1):n=this.nominator,e.integer?(r=e.integer*e.denominator+e.nominator,s=1):r=e.nominator,o=this.denominator,t=this.factor*n+e.factor*r,s&&(u=Math.floor(Math.abs(t/o)),t%=o,o=o),t<0?(i=-1,t=-1*t):(i=1,t=t);if(s)var a=new RationalNumber({factor:i,integer:u,nominator:t,denominator:o});else var a=new RationalNumber({factor:i,nominator:t,denominator:o});return this.simplification(),e.simplification(),a.simplification(),a},substraction:function(e){var t;return e.additionInvert(),t=this.addition(e),e.additionInvert(),t.simplification(),t},multiplication:function(e){var t,n,r,i=0,s=0;this.type==RationalNumber.COMPLEX&&(this.convertToCompoundForm(),i=1),e.type==RationalNumber.COMPLEX&&(e.convertToCompoundForm(),s=1),t=this.factor*e.factor,n=this.nominator*e.nominator,r=this.denominator*e.denominator;var o=new RationalNumber({factor:t,nominator:n,denominator:r});return i==1&&this.convertToComplexForm(),s==1&&e.convertToComplexForm(),o},division:function(e){var t;return e.multiplicationInvert(),t=this.multiplication(e),e.multiplicationInvert(),t},convertToComplexForm:function(){this.integer||(this.integer=Math.floor(this.nominator/this.denominator),this.nominator=this.nominator%this.denominator),this.determineType(),this.determineDefinition(),this.determineValue()},convertToCompoundForm:function(){this.integer&&(this.nominator=this.integer*this.denominator+this.nominator),this.integer=undefined,this.determineType(),this.determineDefinition(),this.determineValue()},additionInvert:function(){this.factor&&(this.factor==1?this.factor=-1:this.factor=1),this.determineType(),this.determineDefinition(),this.determineValue()},multiplicationInvert:function(){this.type==3&&this.convertToCompoundForm();var e=this.nominator;this.nominator=this.denominator,this.denominator=e,this.determineType(),this.determineDefinition(),this.determineValue()},toHTML:function(e){var t=Date.now(),n=e+4,r=2*n+1,i=r+6,s=Math.round(i*.6),o=i-s,u=s,a=2*n,f=""+e+"px",l=""+n+"px",c=""+r+"px",h=""+i+"px",p=""+s+"px",d=""+o+"px",v=""+u+"px",m=""+a+"px",g={position:"absolute",padding:0,margin:0,width:h,height:c,fontSize:f,lineHeight:l},y={position:"absolute",padding:0,margin:0,width:p,fontSize:f,lineHeight:l},b={width:d,height:c,textAlign:"center",boxSizing:"border-box","float":"left",lineHeight:m},w={width:p,height:l,textAlign:"center","float":"left",lineHeight:l},E={width:v,height:"1px",padding:0,borderTop:"2px solid","float":"left"},S={width:p,height:l,textAlign:"center","float":"left",lineHeight:l};if(this.integer){var x=Util.dom({tag:"div",css:g,html:'<div class="frac"><div class="int"></div><div class="nom"></div><div class="line"></div><div class="denom"></div></div>'}),T;this.integer?T=this.factor*this.integer:this.factor==-1?T="-":T="",$(".int",x).html(T),$(".int",x).css(b),$(".nom",x).html(this.nominator),$(".nom",x).css(w),$(".denom",x).html(this.denominator),$(".denom",x).css(S),$(".line",x).css(E)}else{var x=Util.dom({tag:"div",css:y,html:'<div class="frac"><div class="nom"></div><div class="line"></div><div class="denom"></div></div>'});$(".nom",x).html(this.nominator),$(".nom",x).css(w),$(".denom",x).html(this.denominator),$(".denom",x).css(S),$(".line",x).css(E)}return x},determineType:function(){this.factor==-1?this.type=RationalNumber.RATIONAL:this.integer?this.type=RationalNumber.COMPLEX:this.nominator<this.denominator?this.type=RationalNumber.SIMPLE:this.type=RationalNumber.COMPOUND},determineDefinition:function(){this.factor==-1?this.integer?this.definition="-"+this.integer+" tam "+this.nominator+" bölü "+this.denominator:this.definition="-"+this.nominator+" bölü "+this.denominator:this.integer?this.definition=""+this.integer+" tam "+this.nominator+" bölü "+this.denominator:this.definition=""+this.nominator+" bölü "+this.denominator},determineValue:function(){var e;this.integer?e=this.integer+this.nominator/this.denominator:e=this.nominator/this.denominator,this.value=this.factor*e}});RationalNumber.randomGenerator=function(e,t){if(t==null||t==undefined)t=Util.randomInteger(0,4);if(e==null||e==undefined)t==0?e=-1:e=1;var n,r,i,s;switch(t){case 0:Util.randomDigit()?(i=Util.randomInteger(1,4),n=Util.randomInteger(1,11),r=Util.randomInteger(2,16,[n]),s=new RationalNumber({factor:e,integer:i,nominator:n,denominator:r})):(n=Util.randomInteger(1,11),r=Util.randomInteger(2,16,[n]),s=new RationalNumber({factor:e,nominator:n,denominator:r}));break;case 1:n=Util.randomInteger(1,11),r=Util.randomInteger(n+1,16),s=new RationalNumber({factor:e,nominator:n,denominator:r});break;case 2:do n=Util.randomInteger(3,16),r=Util.randomInteger(2,n);while(n%r==0);s=new RationalNumber({factor:e,nominator:n,denominator:r});break;case 3:i=Util.randomInteger(1,4),n=Util.randomInteger(1,11),r=Util.randomInteger(n+1,16),s=new RationalNumber({factor:e,integer:i,nominator:n,denominator:r})}return s},RationalNumber.RATIONAL=0,RationalNumber.SIMPLE=1,RationalNumber.COMPOUND=2,RationalNumber.COMPLEX=3;