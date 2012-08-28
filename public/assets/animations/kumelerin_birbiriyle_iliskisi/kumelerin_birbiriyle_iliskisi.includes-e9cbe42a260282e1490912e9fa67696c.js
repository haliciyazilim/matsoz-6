function __Styles(){optionsStyle={position:"absolute",fontSize:"16px",fontWeight:"bold",color:"#000",cursor:"pointer",width:"300px"},optionsImageContainer={position:"relative",width:"32px",height:"32px","float":"left",top:"-8px",marginRight:"10px",backgroundImage:"url(/assets/radio_buttons.png)",backgroundPosition:"0px 0px"},selectedOptionStyle={color:"#235394"},trueOptionStyle={color:"#309423"},falseOptionStyle={color:"#942323"},setDivCss={position:"absolute",left:"10px",fontSize:"16px",width:"300px",lineHeight:"20px"}}var Set=Class.extend({init:function(e){this.elements=[];switch(e.type){case Set.ELEMENTS:this.definition=""+e.elements.length+" elemanlı küme",this.elements=[];for(var t=0;t<e.elements.length;t++){var n;for(var r=0;r<this.elements.length;r++)e.elements[t]==this.elements[r]&&(n=!0);if(n)continue;this.elements.push(e.elements[t])}this.elements.sort(function(e,t){return e-t});break;case Set.SMALLER_THAN:this.definition=""+this.getValueStr(e.value)+" küçük doğal sayılar";for(var t=0;t<e.value;t++)this.elements.push(t);break;case Set.SMALLER_THAN_ODD:this.definition=""+this.getValueStr(e.value)+" küçük tek doğal sayılar";for(var t=0;t<e.value;t++)t%2==1&&this.elements.push(t);break;case Set.SMALLER_THAN_EVEN:this.definition=""+this.getValueStr(e.value)+" küçük çift doğal sayılar";for(var t=0;t<e.value;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_PRIME:this.definition=""+this.getValueStr(e.value)+" küçük asal sayılar";for(var t=0;t<e.value;t++)Util.isPrimeNumber(t)&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük doğal sayılar";for(var t=e.value1+1;t<e.value2;t++)this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_ODD:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük tek doğal sayılar";for(var t=e.value1+1;t<e.value2;t++)t%2==1&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_EVEN:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük çift doğal sayılar";for(var t=e.value1+1;t<e.value2;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_PRIME:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük asal sayılar";for(var t=e.value1+1;t<e.value2;t++)Util.isPrimeNumber(t)&&this.elements.push(t);break;case Set.FACTORS:this.definition=""+this.getValueStr(e.value,1)+" çarpanları",u=[],u=Util.getFactors(e.value);for(var t=0;t<u.length;t++)this.elements.push(u[t]);break;case Set.MULTIPLIES:this.definition=""+this.getValueStr(e.value1,1)+" "+this.getValueStr(e.value2)+" küçük katları";for(var t=1;t<e.value2/e.value1;t++)this.elements.push(e.value1*t);break;case Set.DIGIT:this.definition="rakamlar";for(var t=0;t<10;t++)this.elements.push(t);this.type=e.type;break;case Set.DIGIT_ODD:this.definition="tek rakamlar";for(var t=0;t<10;t++)t%2==1&&this.elements.push(t);break;case Set.DIGIT_EVEN:this.definition="çift rakamlar";for(var t=0;t<10;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_DIGIT:this.definition=""+this.getValueStr(e.value)+" küçük rakamlar";if(e.value>10)var i=10;else var i=e.value;for(var t=0;t<i;t++)this.elements.push(t);break;case Set.SMALLER_THAN_DIGIT_ODD:this.definition=""+this.getValueStr(e.value)+" küçük tek rakamlar";if(e.value>10)var i=10;else var i=e.value;for(var t=0;t<i;t++)t%2==1&&this.elements.push(t);break;case Set.SMALLER_THAN_DIGIT_EVEN:this.definition=""+this.getValueStr(e.value)+" küçük çift rakamlar";if(e.value>10)var i=10;else var i=e.value;for(var t=0;t<i;t++)t%2==0&&this.elements.push(t);break;case Set.GREATER_THAN_DIGIT:this.definition=""+this.getValueStr(e.value)+" büyük rakamlar";if(e.value<0)var i=0;else var i=e.value;for(var t=i+1;t<10;t++)this.elements.push(t);break;case Set.GREATER_THAN_DIGIT_ODD:this.definition=""+this.getValueStr(e.value)+" büyük tek rakamlar";if(e.value<0)var i=0;else var i=e.value;for(var t=i+1;t<10;t++)t%2==1&&this.elements.push(t);break;case Set.GREATER_THAN_DIGIT_EVEN:this.definition=""+this.getValueStr(e.value)+" büyük çift rakamlar";if(e.value<0)var i=0;else var i=e.value;for(var t=i+1;t<10;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_DIGIT:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük rakamlar";for(var t=e.value1+1;t<e.value2;t++)this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük tek rakamlar";for(var t=e.value1+1;t<e.value2;t++)t%2==1&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük çift rakamlar";for(var t=e.value1+1;t<e.value2;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_LETTER:this.definition=""+this.getValueStr(e.value,2)+" önce gelen harfler";var s=0,o=Set.turkishLetters.indexOf(e.value);for(var t=s;t<o;t++)this.elements.push(Set.turkishLetters[t]);break;case Set.GREATER_THAN_LETTER:this.definition=""+this.getValueStr(e.value,2)+" sonra gelen harfler";var s=Set.turkishLetters.indexOf(e.value)+1,o=29;for(var t=s;t<o;t++)this.elements.push(Set.turkishLetters[t]);break;case Set.SMALLER_THAN_GREATER_THAN_LETTER:this.definition=""+e.value1+" ile "+e.value2+" arasındaki harfler";var s=Set.turkishLetters.indexOf(e.value1)+1,o=Set.turkishLetters.indexOf(e.value2);for(var t=s;t<o;t++)this.elements.push(Set.turkishLetters[t]);break;case Set.WORDS:var u=Util.randomInteger(0,15),a=Set.wordsArray[u];this.definition='"'+a+'" sözcüğündeki harfler';for(var t=0;t<a.length;t++)this.elements.indexOf(a[t])==-1&&this.elements.push(a[t]);break;case Set.SMALLER_THAN_INTEGER:this.definition=""+this.getValueStr(e.value)+" küçük pozitif tam sayılar";for(var t=1;t<e.value;t++)this.elements.push(t)}this.type=e.type},isEqualSet:function(e){if(this.elements.length!=e.elements.length)return!1;var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n==this.elements.length?!0:!1},isSubsetOf:function(e){if(this.elements.length>e.elements.length)return!1;var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n==this.elements.length?!0:!1},isDisjointWith:function(e){var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n==0?!0:!1},isIntersectingWith:function(e){var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n!=0?!0:!1},getIntersection:function(e){var t=[];for(var n=0;n<this.elements.length;n++)for(var r=0;r<e.elements.length;r++)this.elements[n]==e.elements[r]&&t.push(this.elements[n]);t.sort(function(e,t){return e-t});var i=new Set({type:Set.ELEMENTS,elements:t}),s="";return e.type==Set.ELEMENTS?s="'nin":e.type==Set.FACTORS||e.type==Set.MULTIPLIES?s="'nın":s="'ın",i.definition=""+this.definition+" ile "+e.definition+""+s+" kesişimi",i},getUnion:function(e){var t=[];for(var n=0;n<this.elements.length;n++)t.push(this.elements[n]);for(var r=0;r<e.elements.length;r++)t.indexOf(e.elements[r])==-1&&t.push(e.elements[r]);t.sort(function(e,t){return e-t});var i=new Set({type:Set.ELEMENTS,elements:t}),s="";return e.type==Set.ELEMENTS?s="'nin":e.type==Set.FACTORS||e.type==Set.MULTIPLIES?s="'nın":s="'ın",i.definition=""+this.definition+" ile "+e.definition+""+s+" birleşimi",i},getDifference:function(e){var t=[];for(var n=0;n<this.elements.length;n++)e.elements.indexOf(this.elements[n])==-1&&t.push(this.elements[n]);t.sort(function(e,t){return e-t});var r=new Set({type:Set.ELEMENTS,elements:t}),i="";return e.type==Set.ELEMENTS?i="'nin":e.type==Set.FACTORS||e.type==Set.MULTIPLIES?i="'nın":i="'ın",r.definition=""+this.definition+" ile "+e.definition+""+i+" farkı",r},getSubSets:function(){},getComplement:function(e){return e.getDifference(this)},getDefinitionString:function(e){if(e==undefined)var t="{ "+this.definition+" }";else var t=""+e+" = { "+this.definition+" }";return t},getElementsString:function(e){if(e==undefined)var t="{ ";else var t=""+e+" = { ";for(var n=0;n<this.elements.length-1;n++)t+=""+this.elements[n]+", ";return t+=this.elements[this.elements.length-1]+" }",t},getValueStr:function(e,t){t==undefined&&(t=0);if(t==0){var n="";if(e%90==0)n+=e+"'dan";else if(e%80==0||e%50==0)n+=e+"'den";else if(e%70==0)n+=e+"'ten";else if(e%60==0||e%40==0)n+=e+"'tan";else if(e%30==0)n+=e+"'dan";else if(e%20==0)n+=e+"'den";else if(e%10==0)n+=e+"'dan";else if(e%10==1||e%10==2||e%10==7||e%10==8)n+=e+"'den";else if(e%10==3||e%10==4||e%10==5)n+=e+"'ten";else if(e%10==6||e%10==9)n+=e+"'dan"}else if(t==1){var n="";if(e%90==0||e%60==0)n+=e+"'ın";else if(e%80==0||e%70==0)n+=e+"'in";else if(e%50==0)n+=e+"'nin";else if(e%40==0)n+=e+"'ın";else if(e%30==0)n+=e+"'un";else if(e%20==0)n+=e+"'nin";else if(e%10==0||e%10==9)n+=e+"'un";else if(e%10==8||e%10==1||e%10==5)n+=e+"'in";else if(e%10==7||e%10==2)n+=e+"'nin";else if(e%10==6)n+=e+"'nın";else if(e%10==4||e%10==3)n+=e+"'ün"}else if(t==2){var n="",r=["a","ı","o","u"];r.indexOf(e)==-1?n+=e+"'den":n+=e+"'dan"}return n},getRandomSubset:function(){var e;if(this.type==Set.ELEMENTS){var t=Util.randomInteger(0,5),n=Util.randomInteger(t+1,6);e=new Set({type:Set.ELEMENTS,elements:this.elements.slice(t,n)})}else do e=Set.randomGenerator();while(e==undefined||!e.isSubsetOf(this));return e},getRandomDisjointSet:function(){var e;do e=Set.randomGenerator();while(e==undefined||!e.isDisjointWith(this));return e},getRandomIntersectingSet:function(){var e;do e=Set.randomGenerator();while(e==undefined||!e.isIntersectingWith(this));return e},removeVennDiagram:function(){$(this.div).remove(),this.vennDiagram.remove()},drawVennDiagram:function(e,t,n){if(this.elements.length<=6){var r=new Size(150,100),i=new Rectangle(t,r);this.vennDiagram=new Path.Oval(i),this.vennDiagram.strokeColor="black",this.div=document.createElement("div"),$(e).append(this.div),$(this.div).append('<div id="vennElements2"><div id="vennLetter2"></div><div id="e12"></div><div id="e22"></div><div id="e32"></div><div id="e42"></div><div id="e52"></div><div id="e62"></div></div>'),$("#vennElements2",this.div).css({position:"absolute",top:t.y+parseInt($(e).css("padding")),left:t.x+parseInt($(e).css("padding")),width:"150px",height:"100px",fontSize:"16px",textAlign:"center",fontWeight:"bold"}),$("#vennLetter2",this.div).css({position:"absolute",top:"0px",left:"0px",width:"18px",height:"18px",fontWeight:"normal"}),$("#vennLetter2",this.div).html(n),$("#e12",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e22",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e32",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e42",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e52",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e62",this.div).css({position:"absolute",width:"24px",height:"20px"});switch(this.elements.length){case 0:break;case 1:$("#e12",this.div).css({top:"42px",left:"62px"});break;case 2:$("#e12",this.div).css({top:"40px",left:"34px"}),$("#e22",this.div).css({top:"40px",left:"96px"});break;case 3:$("#e12",this.div).css({top:"40px",left:"30px"}),$("#e22",this.div).css({top:"15px",left:"67px"}),$("#e32",this.div).css({top:"61px",left:"84px"});break;case 4:$("#e12",this.div).css({top:"22px",left:"34px"}),$("#e22",this.div).css({top:"22px",left:"88px"}),$("#e32",this.div).css({top:"66px",left:"34px"}),$("#e42",this.div).css({top:"66px",left:"88px"});break;case 5:$("#e12",this.div).css({top:"20px",left:"32px"}),$("#e22",this.div).css({top:"20px",left:"90px"}),$("#e32",this.div).css({top:"68px",left:"32px"}),$("#e42",this.div).css({top:"68px",left:"90px"}),$("#e52",this.div).css({top:"42px",left:"62px"});break;case 6:$("#e12",this.div).css({top:"42px",left:"62px"}),$("#e22",this.div).css({top:"12px",left:"70px"}),$("#e32",this.div).css({top:"30px",left:"106px"}),$("#e42",this.div).css({top:"66px",left:"34px"}),$("#e52",this.div).css({top:"18px",left:"24px"}),$("#e62",this.div).css({top:"66px",left:"90px"})}}else{var r=new Size(180,100),i=new Rectangle(t,r);this.vennDiagram=new Path.Oval(i),this.vennDiagram.strokeColor="black",this.div=document.createElement("div"),$(e).append(this.div),$(this.div).append('<div id="vennElements2"><div id="vennLetter2"></div><div id="e12"></div><div id="e22"></div><div id="e32"></div><div id="e42"></div><div id="e52"></div><div id="e62"></div><div id="e72"></div><div id="e82"></div><div id="e92"></div><div id="e102"></div></div>'),$("#vennElements2",this.div).css({position:"absolute",top:t.y+parseInt($(e).css("padding")),left:t.x+parseInt($(e).css("padding")),width:"180px",height:"100px",fontSize:"16px",textAlign:"center",fontWeight:"bold"}),$("#vennLetter2",this.div).css({position:"absolute",top:"0px",left:"0px",width:"18px",height:"18px",fontWeight:"normal"}),$("#vennLetter2",this.div).html(n),$("#e12",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e22",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e32",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e42",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e52",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e62",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e72",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e82",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e92",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e102",this.div).css({position:"absolute",width:"24px",height:"20px"});switch(this.elements.length){case 7:$("#e12",this.div).css({top:"44px",left:"76px"}),$("#e22",this.div).css({top:"12px",left:"74px"}),$("#e32",this.div).css({top:"26px",left:"32px"}),$("#e42",this.div).css({top:"76px",left:"76px"}),$("#e52",this.div).css({top:"62px",left:"30px"}),$("#e62",this.div).css({top:"26px",left:"116px"}),$("#e72",this.div).css({top:"60px",left:"120px"});break;case 8:$("#e12",this.div).css({top:"42px",left:"28px"}),$("#e22",this.div).css({top:"12px",left:"78px"}),$("#e32",this.div).css({top:"14px",left:"42px"}),$("#e42",this.div).css({top:"76px",left:"76px"}),$("#e52",this.div).css({top:"70px",left:"36px"}),$("#e62",this.div).css({top:"26px",left:"116px"}),$("#e72",this.div).css({top:"60px",left:"120px"}),$("#e82",this.div).css({top:"42px",left:"76px"});break;case 9:$("#e12",this.div).css({top:"42px",left:"28px"}),$("#e22",this.div).css({top:"12px",left:"76px"}),$("#e32",this.div).css({top:"14px",left:"42px"}),$("#e42",this.div).css({top:"76px",left:"70px"}),$("#e52",this.div).css({top:"70px",left:"36px"}),$("#e62",this.div).css({top:"18px",left:"112px"}),$("#e72",this.div).css({top:"70px",left:"108px"}),$("#e82",this.div).css({top:"42px",left:"78px"}),$("#e92",this.div).css({top:"42px",left:"124px"});break;case 10:$("#e12",this.div).css({top:"42px",left:"64px"}),$("#e22",this.div).css({top:"12px",left:"76px"}),$("#e32",this.div).css({top:"14px",left:"42px"}),$("#e42",this.div).css({top:"76px",left:"70px"}),$("#e52",this.div).css({top:"70px",left:"36px"}),$("#e62",this.div).css({top:"18px",left:"112px"}),$("#e72",this.div).css({top:"68px",left:"106px"}),$("#e82",this.div).css({top:"42px",left:"98px"}),$("#e92",this.div).css({top:"42px",left:"132px"}),$("#e102",this.div).css({top:"40px",left:"24px"})}}for(var s=1;s<=this.elements.length;s++)$("#e"+s+"2",this.div).html("."+this.elements[s-1])},drawIntersectingVennDiagram:function(e,t,n,r,i){var s,o,u,a,f,l=this.elements.length,c=r.elements.length,h=this.getIntersection(r).elements.length,p=this.isEqualSet(r),d=this.getDifference(r),v=r.getDifference(this),m=this.getIntersection(r);l>6?this.isEqualSet(r)?s=new Size(180,100):s=new Size(220,100):s=new Size(150,100),c>6?this.isEqualSet(r)?o=new Size(180,100):o=new Size(220,100):o=new Size(150,100),this.isEqualSet(r)?u=new Point(t):this.isSubsetOf(r)?(u=new Point(t),s.height-=20,t.y+=10,l>6&&c>6?(s.width-=50,o.width+=20):l<6&&c<6&&(s.width-=30,o.width+=30)):r.isSubsetOf(this)?(u=new Point(t),o.height-=20,u.y+=10,l>6&&c>6?(o.width-=50,s.width+=20):l<6&&c<6&&(o.width-=30,s.width+=30),u.x+=s.width-o.width):(u=new Point(t),u.x+=s.width,h!=0&&(h<3?l>6&&c>6?u.x-=90:u.x-=60:h<5?l>6&&c>6?u.x-=110:u.x-=80:h<7?l>6&&c>6?u.x-=130:u.x-=100:u.x-=150)),this.intersectingVennDiagram=new Group,t.x-=100,a=new Rectangle(t,s),this.diagram1=new Path.Oval(a),this.diagram1.strokeColor="black",u.x+=100,f=new Rectangle(u,o),this.diagram2=new Path.Oval(f),this.diagram2.strokeColor="black";if(this.isEqualSet(r)){this.div=document.createElement("div"),$(e).append(this.div),this.div2=document.createElement("div"),$(e).append(this.div2),$(this.div).append('<div id="vennElements2"><div id="vennLetter2"></div><div id="e12" class="elements"></div><div id="e22" class="elements"></div><div id="e32" class="elements"></div><div id="e42" class="elements"></div><div id="e52" class="elements"></div><div id="e62" class="elements"></div><div id="e72" class="elements"></div><div id="e82" class="elements"></div><div id="e92" class="elements"></div><div id="e102" class="elements"></div></div>'),$(this.div2).append('<div id="vennElements2"><div id="vennLetter2"></div><div id="e12" class="elements"></div><div id="e22" class="elements"></div><div id="e32" class="elements"></div><div id="e42" class="elements"></div><div id="e52" class="elements"></div><div id="e62" class="elements"></div><div id="e72" class="elements"></div><div id="e82" class="elements"></div><div id="e92" class="elements"></div><div id="e102" class="elements"></div></div>'),$("#vennElements2",this.div).css({position:"absolute",top:t.y+parseInt($(e).css("padding")),left:t.x+parseInt($(e).css("padding")),width:""+s.width+"px",height:"100px",fontSize:"16px",textAlign:"center",fontWeight:"bold"}),$("#vennElements2",this.div).delay(2e3).animate({left:"+=100px"},2e3,"easeInOutQuad"),$("#vennElements2",this.div2).css({position:"absolute",top:u.y+parseInt($(e).css("padding")),left:u.x+parseInt($(e).css("padding")),width:""+s.width+"px",height:"100px",fontSize:"16px",textAlign:"center",fontWeight:"bold"}),$("#vennElements2",this.div2).delay(2e3).animate({left:"-=100px"},2e3,"easeInOutQuad",function(){$(this).css({opacity:0})}),$("#vennLetter2",this.div).css({position:"absolute",top:"0px",left:"0px",width:"18px",height:"18px",fontWeight:"normal"}),$("#vennLetter2",this.div).html(n),$("#vennLetter2",this.div2).css({position:"absolute",top:"0px",right:"0px",width:"18px",height:"18px",fontWeight:"normal"}),$("#vennLetter2",this.div2).html(i),$(".elements").css({position:"absolute",width:"24px",height:"20px"});switch(this.elements.length){case 0:break;case 1:$("#e12",this.div).css({top:"42px",left:"62px"}),$("#e12",this.div2).css({top:"42px",left:"62px"});break;case 2:$("#e12",this.div).css({top:"40px",left:"34px"}),$("#e22",this.div).css({top:"40px",left:"96px"}),$("#e12",this.div2).css({top:"40px",left:"34px"}),$("#e22",this.div2).css({top:"40px",left:"96px"});break;case 3:$("#e12",this.div).css({top:"40px",left:"30px"}),$("#e22",this.div).css({top:"15px",left:"67px"}),$("#e32",this.div).css({top:"61px",left:"84px"}),$("#e12",this.div2).css({top:"40px",left:"30px"}),$("#e22",this.div2).css({top:"15px",left:"67px"}),$("#e32",this.div2).css({top:"61px",left:"84px"});break;case 4:$("#e12",this.div).css({top:"22px",left:"34px"}),$("#e22",this.div).css({top:"22px",left:"88px"}),$("#e32",this.div).css({top:"66px",left:"34px"}),$("#e42",this.div).css({top:"66px",left:"88px"}),$("#e12",this.div2).css({top:"22px",left:"34px"}),$("#e22",this.div2).css({top:"22px",left:"88px"}),$("#e32",this.div2).css({top:"66px",left:"34px"}),$("#e42",this.div2).css({top:"66px",left:"88px"});break;case 5:$("#e12",this.div).css({top:"20px",left:"32px"}),$("#e22",this.div).css({top:"20px",left:"90px"}),$("#e32",this.div).css({top:"68px",left:"32px"}),$("#e42",this.div).css({top:"68px",left:"90px"}),$("#e52",this.div).css({top:"42px",left:"62px"}),$("#e12",this.div2).css({top:"20px",left:"32px"}),$("#e22",this.div2).css({top:"20px",left:"90px"}),$("#e32",this.div2).css({top:"68px",left:"32px"}),$("#e42",this.div2).css({top:"68px",left:"90px"}),$("#e52",this.div2).css({top:"42px",left:"62px"});break;case 6:$("#e12",this.div).css({top:"42px",left:"62px"}),$("#e22",this.div).css({top:"12px",left:"70px"}),$("#e32",this.div).css({top:"30px",left:"106px"}),$("#e42",this.div).css({top:"66px",left:"34px"}),$("#e52",this.div).css({top:"18px",left:"24px"}),$("#e62",this.div).css({top:"66px",left:"90px"}),$("#e12",this.div2).css({top:"42px",left:"62px"}),$("#e22",this.div2).css({top:"12px",left:"70px"}),$("#e32",this.div2).css({top:"30px",left:"106px"}),$("#e42",this.div2).css({top:"66px",left:"34px"}),$("#e52",this.div2).css({top:"18px",left:"24px"}),$("#e62",this.div2).css({top:"66px",left:"90px"});break;case 7:$("#e12",this.div).css({top:"44px",left:"76px"}),$("#e22",this.div).css({top:"12px",left:"74px"}),$("#e32",this.div).css({top:"26px",left:"32px"}),$("#e42",this.div).css({top:"76px",left:"76px"}),$("#e52",this.div).css({top:"62px",left:"30px"}),$("#e62",this.div).css({top:"26px",left:"116px"}),$("#e72",this.div).css({top:"60px",left:"120px"}),$("#e12",this.div2).css({top:"44px",left:"76px"}),$("#e22",this.div2).css({top:"12px",left:"74px"}),$("#e32",this.div2).css({top:"26px",left:"32px"}),$("#e42",this.div2).css({top:"76px",left:"76px"}),$("#e52",this.div2).css({top:"62px",left:"30px"}),$("#e62",this.div2).css({top:"26px",left:"116px"}),$("#e72",this.div2).css({top:"60px",left:"120px"});break;case 8:$("#e12",this.div).css({top:"42px",left:"28px"}),$("#e22",this.div).css({top:"12px",left:"78px"}),$("#e32",this.div).css({top:"14px",left:"42px"}),$("#e42",this.div).css({top:"76px",left:"76px"}),$("#e52",this.div).css({top:"70px",left:"36px"}),$("#e62",this.div).css({top:"26px",left:"116px"}),$("#e72",this.div).css({top:"60px",left:"120px"}),$("#e82",this.div).css({top:"42px",left:"76px"}),$("#e12",this.div2).css({top:"42px",left:"28px"}),$("#e22",this.div2).css({top:"12px",left:"78px"}),$("#e32",this.div2).css({top:"14px",left:"42px"}),$("#e42",this.div2).css({top:"76px",left:"76px"}),$("#e52",this.div2).css({top:"70px",left:"36px"}),$("#e62",this.div2).css({top:"26px",left:"116px"}),$("#e72",this.div2).css({top:"60px",left:"120px"}),$("#e82",this.div2).css({top:"42px",left:"76px"});break;case 9:$("#e12",this.div).css({top:"42px",left:"28px"}),$("#e22",this.div).css({top:"12px",left:"76px"}),$("#e32",this.div).css({top:"14px",left:"42px"}),$("#e42",this.div).css({top:"76px",left:"70px"}),$("#e52",this.div).css({top:"70px",left:"36px"}),$("#e62",this.div).css({top:"18px",left:"112px"}),$("#e72",this.div).css({top:"70px",left:"108px"}),$("#e82",this.div).css({top:"42px",left:"78px"}),$("#e92",this.div).css({top:"42px",left:"124px"}),$("#e12",this.div2).css({top:"42px",left:"28px"}),$("#e22",this.div2).css({top:"12px",left:"76px"}),$("#e32",this.div2).css({top:"14px",left:"42px"}),$("#e42",this.div2).css({top:"76px",left:"70px"}),$("#e52",this.div2).css({top:"70px",left:"36px"}),$("#e62",this.div2).css({top:"18px",left:"112px"}),$("#e72",this.div2).css({top:"70px",left:"108px"}),$("#e82",this.div2).css({top:"42px",left:"78px"}),$("#e92",this.div2).css({top:"42px",left:"124px"});break;case 10:$("#e12",this.div).css({top:"42px",left:"64px"}),$("#e22",this.div).css({top:"12px",left:"76px"}),$("#e32",this.div).css({top:"14px",left:"42px"}),$("#e42",this.div).css({top:"76px",left:"70px"}),$("#e52",this.div).css({top:"70px",left:"36px"}),$("#e62",this.div).css({top:"18px",left:"112px"}),$("#e72",this.div).css({top:"68px",left:"106px"}),$("#e82",this.div).css({top:"42px",left:"98px"}),$("#e92",this.div).css({top:"42px",left:"132px"}),$("#e102",this.div).css({top:"40px",left:"24px"}),$("#e12",this.div2).css({top:"42px",left:"64px"}),$("#e22",this.div2).css({top:"12px",left:"76px"}),$("#e32",this.div2).css({top:"14px",left:"42px"}),$("#e42",this.div2).css({top:"76px",left:"70px"}),$("#e52",this.div2).css({top:"70px",left:"36px"}),$("#e62",this.div2).css({top:"18px",left:"112px"}),$("#e72",this.div2).css({top:"68px",left:"106px"}),$("#e82",this.div2).css({top:"42px",left:"98px"}),$("#e92",this.div2).css({top:"42px",left:"132px"}),$("#e102",this.div2).css({top:"40px",left:"24px"})}for(var g=1;g<=this.elements.length;g++)$("#e"+g+"2",this.div).html("."+this.elements[g-1]),$("#e"+g+"2",this.div2).html("."+this.elements[g-1])}else if(this.isSubsetOf(r)){this.div=document.createElement("div"),$(e).append(this.div),this.div2=document.createElement("div"),$(e).append(this.div2),$(this.div).append('<div id="vennElements2"><div id="vennLetter2"></div><div id="e12" class="elements"></div><div id="e22" class="elements"></div><div id="e32" class="elements"></div><div id="e42" class="elements"></div><div id="e52" class="elements"></div><div id="e62" class="elements"></div><div id="e72" class="elements"></div><div id="e82" class="elements"></div><div id="e92" class="elements"></div><div id="e102" class="elements"></div></div>'),$(this.div2).append('<div id="vennElements2"><div id="vennLetter2"></div><div id="e12" class="elements"></div><div id="e22" class="elements"></div><div id="e32" class="elements"></div><div id="e42" class="elements"></div><div id="e52" class="elements"></div><div id="e62" class="elements"></div><div id="e72" class="elements"></div><div id="e82" class="elements"></div><div id="e92" class="elements"></div><div id="e102" class="elements"></div></div>'),$("#vennElements2",this.div).css({position:"absolute",top:t.y+parseInt($(e).css("padding")),left:t.x+parseInt($(e).css("padding")),width:""+s.width+"px",height:""+s.height+"px",fontSize:"16px",textAlign:"center",fontWeight:"bold",border:"1px solid",opacity:0}),$("#vennElements2",this.div2).css({position:"absolute",top:u.y+parseInt($(e).css("padding")),left:u.x+parseInt($(e).css("padding")),width:""+o.width+"px",height:""+o.height+"px",fontSize:"16px",textAlign:"center",fontWeight:"bold",border:"1px solid",opacity:0}),$("#vennLetter2",this.div).css({position:"absolute",top:"0px",right:"0px",width:"18px",height:"18px",fontWeight:"normal"}),$("#vennLetter2",this.div).html(n),$("#vennLetter2",this.div2).css({position:"absolute",top:"0px",left:"0px",width:"18px",height:"18px",fontWeight:"normal"}),$("#vennLetter2",this.div2).html(i),$(".elements").css({position:"absolute",width:"24px",height:"20px"});switch(this.elements.length){case 0:break;case 1:break;case 2:break;case 3:break;case 4:break;case 5:break;case 6:break;case 7:break;case 8:break;case 9:break;case 10:}for(var g=1;g<=this.elements.length;g++)$("#e"+g+"2",this.div).html("."+this.elements[g-1]),$("#e"+g+"2",this.div2).html("."+this.elements[g-1])}else r.isSubsetOf(this);this.diagram1.animate({style:{position:new Point(this.diagram1.position.x+100,this.diagram1.position.y)},duration:2e3,delay:2e3,animationType:"easeInOutQuad",callback:function(){p&&(this.fillColor="orange")}}),this.diagram2.animate({style:{position:new Point(this.diagram2.position.x-100,this.diagram2.position.y),opacity:10},duration:2e3,delay:2e3,animationType:"easeInOutQuad",callback:function(){p&&(this.opacity=0)}})}});Set.ELEMENTS=0,Set.SMALLER_THAN=1,Set.SMALLER_THAN_ODD=2,Set.SMALLER_THAN_EVEN=3,Set.SMALLER_THAN_PRIME=4,Set.SMALLER_THAN_GREATER_THAN=5,Set.SMALLER_THAN_GREATER_THAN_ODD=6,Set.SMALLER_THAN_GREATER_THAN_EVEN=7,Set.SMALLER_THAN_GREATER_THAN_PRIME=8,Set.FACTORS=9,Set.MULTIPLIES=10,Set.DIGIT=11,Set.DIGIT_ODD=12,Set.DIGIT_EVEN=13,Set.SMALLER_THAN_DIGIT=14,Set.SMALLER_THAN_DIGIT_ODD=15,Set.SMALLER_THAN_DIGIT_EVEN=16,Set.GREATER_THAN_DIGIT=17,Set.GREATER_THAN_DIGIT_ODD=18,Set.GREATER_THAN_DIGIT_EVEN=19,Set.SMALLER_THAN_GREATER_THAN_DIGIT=20,Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD=21,Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN=22,Set.SMALLER_THAN_LETTER=23,Set.GREATER_THAN_LETTER=24,Set.SMALLER_THAN_GREATER_THAN_LETTER=25,Set.WORDS=26,Set.SMALLER_THAN_INTEGER=27,Set.turkishLetters=[],Set.turkishLetters[0]="a",Set.turkishLetters[1]="b",Set.turkishLetters[2]="c",Set.turkishLetters[3]="ç",Set.turkishLetters[4]="d",Set.turkishLetters[5]="e",Set.turkishLetters[6]="f",Set.turkishLetters[7]="g",Set.turkishLetters[8]="ğ",Set.turkishLetters[9]="h",Set.turkishLetters[10]="ı",Set.turkishLetters[11]="i",Set.turkishLetters[12]="j",Set.turkishLetters[13]="k",Set.turkishLetters[14]="l",Set.turkishLetters[15]="m",Set.turkishLetters[16]="n",Set.turkishLetters[17]="o",Set.turkishLetters[18]="ö",Set.turkishLetters[19]="p",Set.turkishLetters[20]="r",Set.turkishLetters[21]="s",Set.turkishLetters[22]="ş",Set.turkishLetters[23]="t",Set.turkishLetters[24]="u",Set.turkishLetters[25]="ü",Set.turkishLetters[26]="v",Set.turkishLetters[27]="y",Set.turkishLetters[28]="z",Set.wordsArray=[],Set.wordsArray[0]="ANKARA",Set.wordsArray[1]="İSTANBUL",Set.wordsArray[2]="ELMA",Set.wordsArray[3]="ADANA",Set.wordsArray[4]="İZMİR",Set.wordsArray[5]="MATEMATİK",Set.wordsArray[6]="BİLGİSAYAR",Set.wordsArray[7]="OKUL",Set.wordsArray[8]="SINIF",Set.wordsArray[9]="ATATÜRK",Set.wordsArray[10]="TÜRKİYE",Set.wordsArray[11]="AİLE",Set.wordsArray[12]="AHLAK",Set.wordsArray[13]="KÜME",Set.wordsArray[14]="ÖĞRETMEN",Set.randomGenerator=function(e,t){if(t==undefined||isNaN(t))t=0;var n,r,i,s,o;e==undefined||isNaN(e)?t==0?n=Util.randomInteger(1,28):n=Util.randomInteger(1,26,[11,12,13,14,15,16,17,18,19,20,21,22,26,27]):n=e;var u;switch(n){case 1:if(t==0)var a=Util.randomInteger(1,7);else var a=t;u=new Set({type:Set.SMALLER_THAN,value:a});break;case 2:if(t==0)var a=Util.randomInteger(2,12);else var a=2*t;u=new Set({type:Set.SMALLER_THAN_ODD,value:a});break;case 3:if(t==0)var a=Util.randomInteger(1,11);else var a=2*t;u=new Set({type:Set.SMALLER_THAN_EVEN,value:a});break;case 4:if(t==0)var a=Util.randomInteger(3,14);else if(t==7)var a=18;else if(t==8)var a=20;else if(t==9)var a=24;else var a=30;u=new Set({type:Set.SMALLER_THAN_PRIME,value:a});break;case 5:if(t==0)var f=Util.randomInteger(1,90),l=Util.randomInteger(f+2,f+8);else var f=Util.randomInteger(1,90),l=f+t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN,value1:f,value2:l});break;case 6:if(t==0)var f=Util.randomInteger(1,80),l=f+Util.randomInteger(4,13);else var f=Util.randomInteger(1,78),l=f+2*t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_ODD,value1:f,value2:l});break;case 7:if(t==0)var f=Util.randomInteger(1,80),l=f+Util.randomInteger(4,13);else var f=Util.randomInteger(1,78),l=f+2*t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_EVEN,value1:f,value2:l});break;case 8:if(t==0){do{var f=Util.randomInteger(1,90),l=Util.randomInteger(1,90),c=[];for(var h=f+1;h<l;h++)Util.isPrimeNumber(h)&&c.push(h)}while(c.length==0||c.length>6)}else do{var f=Util.randomInteger(1,30),l=Util.randomInteger(f+10,100),c=[];for(var h=f+1;h<l;h++)Util.isPrimeNumber(h)&&c.push(h)}while(c.length!=t);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_PRIME,value1:f,value2:l});break;case 9:if(t==0){do{var a=Util.randomInteger(1,97),p=[];p=Util.getFactors(a)}while(p.length>6)}else do{var a=Util.randomInteger(1,99),p=[];p=Util.getFactors(a)}while(p.length!=t);u=new Set({type:Set.FACTORS,value:a});break;case 10:if(t==0)var f=Util.randomInteger(2,17),l=f+f*Util.randomInteger(0,6)+Util.randomInteger(1,f);else var f=Util.randomInteger(2,10),l=f*t+Util.randomInteger(1,f);u=new Set({type:Set.MULTIPLIES,value1:f,value2:l});break;case 11:u=new Set({type:Set.DIGIT});break;case 12:u=new Set({type:Set.DIGIT_ODD});break;case 13:u=new Set({type:Set.DIGIT_EVEN});break;case 14:var a=Util.randomInteger(1,11);u=new Set({type:Set.SMALLER_THAN_DIGIT,value:a});break;case 15:var a=Util.randomInteger(2,11);u=new Set({type:Set.SMALLER_THAN_DIGIT_ODD,value:a});break;case 16:var a=Util.randomInteger(1,11);u=new Set({type:Set.SMALLER_THAN_DIGIT_EVEN,value:a});break;case 17:var a=Util.randomInteger(0,9);u=new Set({type:Set.GREATER_THAN_DIGIT,value:a});break;case 18:var a=Util.randomInteger(0,9);u=new Set({type:Set.GREATER_THAN_DIGIT_ODD,value:a});break;case 19:var a=Util.randomInteger(0,8);u=new Set({type:Set.GREATER_THAN_DIGIT_EVEN,value:a});break;case 20
:var f=Util.randomInteger(0,8),l=Util.randomInteger(f+2,10);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT,value1:f,value2:l});break;case 21:var f=Util.randomInteger(0,8),l=Util.randomInteger(f+3,10);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD,value1:f,value2:l});break;case 22:var f=Util.randomInteger(0,8),l=Util.randomInteger(f+3,10);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN,value1:f,value2:l});break;case 23:if(t==0)var a=Util.randomInteger(1,29);else var a=t;u=new Set({type:Set.SMALLER_THAN_LETTER,value:Set.turkishLetters[a]});break;case 24:if(t==0)var a=Util.randomInteger(0,28);else var a=28-t;u=new Set({type:Set.GREATER_THAN_LETTER,value:Set.turkishLetters[a]});break;case 25:if(t==0)var f=Util.randomInteger(0,27),l=Util.randomInteger(f+2,29);else var f=Util.randomInteger(0,18),l=f+t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_LETTER,value1:Set.turkishLetters[f],value2:Set.turkishLetters[l]});break;case 26:u=new Set({type:Set.WORDS});break;case 27:var a=Util.randomInteger(2,8);u=new Set({type:Set.SMALLER_THAN_INTEGER,value:a})}return u};var Animation={images:[],init:function(e){Animation.container=e,Animation.referencePoint=new Point(300,50),Animation.showEqualSets()},showEqualSets:function(){var e=new Set({type:Set.ELEMENTS,elements:[1,2,3,4,5]});e.drawVennDiagram(Animation.container,Animation.referencePoint.add(0,0),"A");var t=new Set({type:Set.ELEMENTS,elements:[1,2,3,4,5]});t.drawVennDiagram(Animation.container,Animation.referencePoint.add(0,0),"A")},showDisjointSets:function(){},showSubsets:function(){},showIntersectingSets:function(){}},Interaction={getFramework:function(){return"paper"},images:[{id:"radio_buttons",src:"/assets/radio_buttons.png"}],init:function(e){Interaction.container=e,Main.setObjective("Yanda verilen kümelerin birbirine göre durumunu belirtiniz ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()};var t=new Point(100,100);Interaction.createOptions(t.add(250,-50)),Interaction.appendStatus({bottom:"30px",right:"210px"}),Interaction.appendButton({bottom:"20px",right:"100px"}),Interaction.set1Div=Util.dom({tag:"div",parent:e,css:setDivCss}),$(Interaction.set1Div).css({top:"100px"}),Interaction.set2Div=Util.dom({tag:"div",parent:e,css:setDivCss}),$(Interaction.set2Div).css({top:"150px"}),Interaction.setRandomGenerator(4),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.trial++,Interaction.cleanOptions(),Interaction.generateSets(e)},cleanOptions:function(){Interaction.clickedOption=null,$(Interaction.options).each(function(){$(this).css(optionsStyle)}),$(".image-container").css({backgroundPosition:"0px 0px"})},createOptions:function(e){var t=Util.dom({parent:Interaction.container,tag:"div",css:optionsStyle,html:"Eşit kümeler"}),n=Util.dom({parent:Interaction.container,tag:"div",css:optionsStyle,html:"Biri diğerinin alt kümesi"}),r=Util.dom({parent:Interaction.container,tag:"div",css:optionsStyle,html:"Ayrık kümeler"}),i=Util.dom({parent:Interaction.container,tag:"div",css:optionsStyle,html:"Kesişen kümeler"});Interaction.options=[t,n,r,i];for(var s=0;s<Interaction.options.length;s++)$(Interaction.options[s]).css({top:e.y+50*s,left:e.x}).click(function(){Interaction.cleanOptions(),Interaction.clickedOption=this,$(".image-container",this).css({backgroundPosition:"-32px 0px"}),$(Interaction.clickedOption).css(selectedOptionStyle)}).prepend('<div class="image-container"></div>'),$(".image-container",Interaction.options[s]).css(optionsImageContainer)},generateSets:function(e){var t,n;Interaction.set1=Set.randomGenerator();switch(e){case 0:Interaction.set2=Interaction.set1,t=Interaction.set1.getDefinitionString(),n=Interaction.set2.getElementsString();break;case 1:Interaction.set2=Interaction.set1.getRandomSubset();break;case 2:Interaction.set2=Interaction.set1.getRandomDisjointSet();break;case 3:Interaction.set2=Interaction.set1.getRandomIntersectingSet()}if(e!=0){var r=Util.rand01()==1,i=Util.rand01()==1;Interaction.set1.isEqualSet(Interaction.set2)&&(r=!i),r?t=Interaction.set1.getDefinitionString():t=Interaction.set1.getElementsString(),i?n=Interaction.set2.getDefinitionString():n=Interaction.set2.getElementsString()}Interaction.set1Div.innerHTML="A = "+t,Interaction.set2Div.innerHTML="B = "+n},preCheck:function(){if(Interaction.clickedOption==null)return Interaction.setStatus("Lütfen bir şık seçiniz","alert"),!1},isAnswerCorrect:function(){if(Interaction.clickedOption==Interaction.options[0])return Interaction.set1.isEqualSet(Interaction.set2);if(Interaction.clickedOption==Interaction.options[1])return Interaction.set1.isSubsetOf(Interaction.set2)||Interaction.set2.isSubsetOf(Interaction.set1);if(Interaction.clickedOption==Interaction.options[2])return Interaction.set1.isDisjointWith(Interaction.set2);if(Interaction.clickedOption==Interaction.options[3])return Interaction.set1.isIntersectingWith(Interaction.set2)},onCorrectAnswer:function(){$(Interaction.clickedOption).css(trueOptionStyle),$(".image-container",Interaction.clickedOption).css({backgroundPosition:"-64px 0px"})},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış! Doğru cevaplar yeşil renk ile belirtilmiştir.",!1),$(Interaction.clickedOption).css(falseOptionStyle),$(".image-container",Interaction.clickedOption).css({backgroundPosition:"-96px 0px"});var e=[];Interaction.set1.isEqualSet(Interaction.set2)&&e.push(0),(Interaction.set1.isSubsetOf(Interaction.set2)||Interaction.set2.isSubsetOf(Interaction.set1))&&e.push(1),Interaction.set1.isDisjointWith(Interaction.set2)&&e.push(2),Interaction.set1.isIntersectingWith(Interaction.set2)&&e.push(3);for(var t=0;t<e.length;t++)$(".image-container",Interaction.options[e[t]]).css({backgroundPosition:"-64px 0px"}),$(Interaction.options[e[t]]).css(trueOptionStyle)}};