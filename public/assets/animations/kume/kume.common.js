var Set=Class.extend({init:function(e){this.elements=[];switch(e.type){case Set.ELEMENTS:this.definition=""+e.elements.length+" elemanlı küme",this.elements=[];for(var t=0;t<e.elements.length;t++){var n;for(var r=0;r<this.elements.length;r++)e.elements[t]==this.elements[r]&&(n=!0);if(n)continue;this.elements.push(e.elements[t])}this.elements.sort(function(e,t){return e-t}),this.type=Set.ELEMENTS;break;case Set.SMALLER_THAN:this.definition=""+this.getValueStr(e.value)+" küçük doğal sayılar";for(var t=0;t<e.value;t++)this.elements.push(t);this.type=Set.SMALLER_THAN;break;case Set.SMALLER_THAN_ODD:this.definition=""+this.getValueStr(e.value)+" küçük tek doğal sayılar";for(var t=0;t<e.value;t++)t%2==1&&this.elements.push(t);this.type=Set.SMALLER_THAN_ODD;break;case Set.SMALLER_THAN_EVEN:this.definition=""+this.getValueStr(e.value)+" küçük çift doğal sayılar";for(var t=0;t<e.value;t++)t%2==0&&this.elements.push(t);this.type=Set.SMALLER_THAN_EVEN;break;case Set.SMALLER_THAN_PRIME:this.definition=""+this.getValueStr(e.value)+" küçük asal sayılar";for(var t=0;t<e.value;t++)Util.isPrimeNumber(t)&&this.elements.push(t);this.type=Set.SMALLER_THAN_PRIME;break;case Set.SMALLER_THAN_GREATER_THAN:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük doğal sayılar";for(var t=e.value1+1;t<e.value2;t++)this.elements.push(t);this.type=Set.SMALLER_THAN_GREATER_THAN;break;case Set.SMALLER_THAN_GREATER_THAN_ODD:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük tek doğal sayılar";for(var t=e.value1+1;t<e.value2;t++)t%2==1&&this.elements.push(t);this.type=Set.SMALLER_THAN_GREATER_THAN_ODD;break;case Set.SMALLER_THAN_GREATER_THAN_EVEN:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük çift doğal sayılar";for(var t=e.value1+1;t<e.value2;t++)t%2==0&&this.elements.push(t);this.type=Set.SMALLER_THAN_GREATER_THAN_EVEN;break;case Set.SMALLER_THAN_GREATER_THAN_PRIME:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük asal sayılar";for(var t=e.value1+1;t<e.value2;t++)Util.isPrimeNumber(t)&&this.elements.push(t);this.type=Set.SMALLER_THAN_GREATER_THAN_PRIME;break;case Set.FACTORS:this.definition=""+this.getValueStr(e.value,1)+" çarpanları",a=[],a=Util.getFactors(e.value);for(var t=0;t<a.length;t++)this.elements.push(a[t]);this.type=Set.FACTORS;break;case Set.MULTIPLIES:this.definition=""+this.getValueStr(e.value1,1)+" "+this.getValueStr(e.value2)+" küçük katları";for(var t=1;t<e.value2/e.value1;t++)this.elements.push(e.value1*t);this.type=Set.MULTIPLIES;break;case Set.DIGIT:this.definition="rakamlar";for(var t=0;t<10;t++)this.elements.push(t);this.type=Set.DIGIT;break;case Set.DIGIT_ODD:this.definition="tek rakamlar";for(var t=0;t<10;t++)t%2==1&&this.elements.push(t);this.type=Set.DIGIT_ODD;break;case Set.DIGIT_EVEN:this.definition="çift rakamlar";for(var t=0;t<10;t++)t%2==0&&this.elements.push(t);this.type=Set.DIGIT_EVEN;break;case Set.SMALLER_THAN_DIGIT:this.definition=""+this.getValueStr(e.value)+" küçük rakamlar";if(e.value>10)var i=10;else var i=e.value;for(var t=0;t<i;t++)this.elements.push(t);this.type=Set.SMALLER_THAN_DIGIT;break;case Set.SMALLER_THAN_DIGIT_ODD:this.definition=""+this.getValueStr(e.value)+" küçük tek rakamlar";if(e.value>10)var i=10;else var i=e.value;for(var t=0;t<i;t++)t%2==1&&this.elements.push(t);this.type=Set.SMALLER_THAN_DIGIT_ODD;break;case Set.SMALLER_THAN_DIGIT_EVEN:this.definition=""+this.getValueStr(e.value)+" küçük çift rakamlar";if(e.value>10)var i=10;else var i=e.value;for(var t=0;t<i;t++)t%2==0&&this.elements.push(t);this.type=Set.SMALLER_THAN_DIGIT_EVEN;break;case Set.GREATER_THAN_DIGIT:this.definition=""+this.getValueStr(e.value)+" büyük rakamlar";if(e.value<0)var i=0;else var i=e.value;for(var t=i+1;t<10;t++)this.elements.push(t);this.type=Set.GREATER_THAN_DIGIT;break;case Set.GREATER_THAN_DIGIT_ODD:this.definition=""+this.getValueStr(e.value)+" büyük tek rakamlar";if(e.value<0)var i=0;else var i=e.value;for(var t=i+1;t<10;t++)t%2==1&&this.elements.push(t);this.type=Set.GREATER_THAN_DIGIT_ODD;break;case Set.GREATER_THAN_DIGIT_EVEN:this.definition=""+this.getValueStr(e.value)+" büyük çift rakamlar";if(e.value<0)var i=0;else var i=e.value;for(var t=i+1;t<10;t++)t%2==0&&this.elements.push(t);this.type=Set.GREATER_THAN_DIGIT_EVEN;break;case Set.SMALLER_THAN_GREATER_THAN_DIGIT:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük rakamlar";for(var t=e.value1+1;t<e.value2;t++)this.elements.push(t);this.type=Set.SMALLER_THAN_GREATER_THAN_DIGIT;break;case Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük tek rakamlar";for(var t=e.value1+1;t<e.value2;t++)t%2==1&&this.elements.push(t);this.type=Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD;break;case Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük çift rakamlar";for(var t=e.value1+1;t<e.value2;t++)t%2==0&&this.elements.push(t);this.type=Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN}},isEqualSet:function(e){if(this.elements.length!=e.elements.length)return!1;var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n==this.elements.length?!0:!1},isSubsetOf:function(e){if(this.elements.length>e.elements.length)return!1;var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n==this.elements.length?!0:!1},isDisjointWith:function(e){var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n==0?!0:!1},isIntersectingWith:function(e){var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n!=0?!0:!1},getIntersection:function(e){var t=[];for(var n=0;n<this.elements.length;n++)for(var r=0;r<e.elements.length;r++)this.elements[n]==e.elements[r]&&t.push(this.elements[n]);t.sort(function(e,t){return e-t});var i=new Set({type:Set.ELEMENTS,elements:t}),s="";return e.type==Set.ELEMENTS?s="'nin":e.type==Set.FACTORS||e.type==Set.MULTIPLIES?s="'nın":s="'ın",i.definition=""+this.definition+" ile "+e.definition+""+s+" kesişimi",i},getUnion:function(e){var t=[];for(var n=0;n<this.elements.length;n++)t.push(this.elements[n]);for(var r=0;r<e.elements.length;r++)t.indexOf(e.elements[r])==-1&&t.push(e.elements[r]);t.sort(function(e,t){return e-t});var i=new Set({type:Set.ELEMENTS,elements:t}),s="";return e.type==Set.ELEMENTS?s="'nin":e.type==Set.FACTORS||e.type==Set.MULTIPLIES?s="'nın":s="'ın",i.definition=""+this.definition+" ile "+e.definition+""+s+" birleşimi",i},getDifference:function(e){var t=[];for(var n=0;n<this.elements.length;n++)e.elements.indexOf(this.elements[n])==-1&&t.push(this.elements[n]);t.sort(function(e,t){return e-t});var r=new Set({type:Set.ELEMENTS,elements:t}),i="";return e.type==Set.ELEMENTS?i="'nin":e.type==Set.FACTORS||e.type==Set.MULTIPLIES?i="'nın":i="'ın",r.definition=""+this.definition+" ile "+e.definition+""+i+" farkı",r},getSubSets:function(){},getComplement:function(e){return e.getDifference(this)},getDefinitionString:function(e){if(e==undefined)var t="{ "+this.definition+" }";else var t=""+e+" = { "+this.definition+" }";return t},getElementsString:function(e){if(e==undefined)var t="{ ";else var t=""+e+" = { ";for(var n=0;n<this.elements.length-1;n++)t+=""+this.elements[n]+", ";return t+=this.elements[this.elements.length-1]+" }",t},getValueStr:function(e,t){t==undefined&&(t=0);if(t==0){var n="";if(e%90==0)n+=e+"'dan";else if(e%80==0||e%50==0)n+=e+"'den";else if(e%70==0)n+=e+"'ten";else if(e%60==0||e%40==0)n+=e+"'tan";else if(e%30==0)n+=e+"'dan";else if(e%20==0)n+=e+"'den";else if(e%10==0)n+=e+"'dan";else if(e%10==1||e%10==2||e%10==7||e%10==8)n+=e+"'den";else if(e%10==3||e%10==4||e%10==5)n+=e+"'ten";else if(e%10==6||e%10==9)n+=e+"'dan"}else if(t==1){var n="";if(e%90==0||e%60==0)n+=e+"'ın";else if(e%80==0||e%70==0)n+=e+"'in";else if(e%50==0)n+=e+"'nin";else if(e%40==0)n+=e+"'ın";else if(e%30==0)n+=e+"'un";else if(e%20==0)n+=e+"'nin";else if(e%10==0||e%10==9)n+=e+"'un";else if(e%10==8||e%10==1||e%10==5)n+=e+"'in";else if(e%10==7||e%10==2)n+=e+"'nin";else if(e%10==6)n+=e+"'nın";else if(e%10==4||e%10==3)n+=e+"'ün"}return n},getRandomSubset:function(){var e;if(this.type==Set.ELEMENTS){var t=Util.randomInteger(0,5),n=Util.randomInteger(t+1,6);e=new Set({type:Set.ELEMENTS,elements:this.elements.slice(t,n)})}else do e=Set.randomGenerator();while(e==undefined||!e.isSubsetOf(this));return e},getRandomDisjointSet:function(){var e;do e=Set.randomGenerator();while(e==undefined||!e.isDisjointWith(this));return e},getRandomIntersectingSet:function(){var e;do e=Set.randomGenerator();while(e==undefined||!e.isIntersectingWith(this));return e},drawVennDiagram:function(e,t,n){var r=new Size(150,100),i=new Rectangle(t,r);this.vennDiagram=new Path.Oval(i),this.vennDiagram.strokeColor="black",$(e).append('<div id="vennElements2"><div id="vennLetter2"></div><div id="e12"></div><div id="e22"></div><div id="e32"></div><div id="e42"></div><div id="e52"></div><div id="e62"></div></div>'),$("#vennElements2").css({position:"absolute",top:t.y+parseInt($(e).css("padding")),left:t.x+parseInt($(e).css("padding")),width:"150px",height:"100px",fontSize:"16px",textAlign:"center",fontWeight:"bold"}),$("#vennLetter2").css({position:"absolute",top:"0px",left:"0px",width:"18px",height:"18px",fontWeight:"normal"}),$("#vennLetter2").html(n),$("#e12").css({position:"absolute",width:"24px",height:"20px"}),$("#e22").css({position:"absolute",width:"24px",height:"20px"}),$("#e32").css({position:"absolute",width:"24px",height:"20px"}),$("#e42").css({position:"absolute",width:"24px",height:"20px"}),$("#e52").css({position:"absolute",width:"24px",height:"20px"}),$("#e62").css({position:"absolute",width:"24px",height:"20px"});switch(this.elements.length){case 0:break;case 1:$("#e12").css({top:"42px",left:"62px"});break;case 2:$("#e12").css({top:"40px",left:"34px"}),$("#e22").css({top:"40px",left:"96px"});break;case 3:$("#e12").css({top:"40px",left:"30px"}),$("#e22").css({top:"15px",left:"67px"}),$("#e32").css({top:"61px",left:"84px"});break;case 4:$("#e12").css({top:"22px",left:"34px"}),$("#e22").css({top:"22px",left:"88px"}),$("#e32").css({top:"66px",left:"34px"}),$("#e42").css({top:"66px",left:"88px"});break;case 5:$("#e12").css({top:"20px",left:"32px"}),$("#e22").css({top:"20px",left:"90px"}),$("#e32").css({top:"68px",left:"32px"}),$("#e42").css({top:"68px",left:"90px"}),$("#e52").css({top:"42px",left:"62px"});break;case 6:$("#e12").css({top:"42px",left:"62px"}),$("#e22").css({top:"12px",left:"70px"}),$("#e32").css({top:"30px",left:"106px"}),$("#e42").css({top:"66px",left:"34px"}),$("#e52").css({top:"18px",left:"24px"}),$("#e62").css({top:"66px",left:"90px"})}for(var s=1;s<=this.elements.length;s++)$("#e"+s+"2").html("."+this.elements[s-1])}});Set.ELEMENTS=0,Set.SMALLER_THAN=1,Set.SMALLER_THAN_ODD=2,Set.SMALLER_THAN_EVEN=3,Set.SMALLER_THAN_PRIME=4,Set.SMALLER_THAN_GREATER_THAN=5,Set.SMALLER_THAN_GREATER_THAN_ODD=6,Set.SMALLER_THAN_GREATER_THAN_EVEN=7,Set.SMALLER_THAN_GREATER_THAN_PRIME=8,Set.FACTORS=9,Set.MULTIPLIES=10,Set.DIGIT=11,Set.DIGIT_ODD=12,Set.DIGIT_EVEN=13,Set.SMALLER_THAN_DIGIT=14,Set.SMALLER_THAN_DIGIT_ODD=15,Set.SMALLER_THAN_DIGIT_EVEN=16,Set.GREATER_THAN_DIGIT=17,Set.GREATER_THAN_DIGIT_ODD=18,Set.GREATER_THAN_DIGIT_EVEN=19,Set.SMALLER_THAN_GREATER_THAN_DIGIT=20,Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD=21,Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN=22,Set.randomGenerator=function(e){var t,n,r,i,s;e==undefined||!isNaN(e)?t=Util.randomInteger(1,11):t=e;var o;switch(t){case 1:var u=Util.randomInteger(1,7);o=new Set({type:Set.SMALLER_THAN,value:u});break;case 2:var u=Util.randomInteger(2,12);o=new Set({type:Set.SMALLER_THAN_ODD,value:u});break;case 3:var u=Util.randomInteger(1,11);o=new Set({type:Set.SMALLER_THAN_EVEN,value:u});break;case 4:var u=Util.randomInteger(3,14);o=new Set({type:Set.SMALLER_THAN_PRIME,value:u});break;case 5:var a=Util.randomInteger(1,90),f=Util.randomInteger(a+2,a+8);o=new Set({type:Set.SMALLER_THAN_GREATER_THAN,value1:a,value2:f});break;case 6:var a=Util.randomInteger(1,80),f=a+Util.randomInteger(4,13);o=new Set({type:Set.SMALLER_THAN_GREATER_THAN_ODD,value1:a,value2:f});break;case 7:var a=Util.randomInteger(1,80),f=a+Util.randomInteger(4,13);o=new Set({type:Set.SMALLER_THAN_GREATER_THAN_EVEN,value1:a,value2:f});break;case 8:do{var a=Util.randomInteger(1,90),f=Util.randomInteger(1,90),l=[];for(var c=a+1;c<f;c++)Util.isPrimeNumber(c)&&l.push(c)}while(l.length==0||l.length>6);o=new Set({type:Set.SMALLER_THAN_GREATER_THAN_PRIME,value1:a,value2:f});break;case 9:do{var u=Util.randomInteger(1,97),h=[];h=Util.getFactors(u)}while(h.length>6);o=new Set({type:Set.FACTORS,value:u});break;case 10:var a=Util.randomInteger(2,17),f=a+a*Util.randomInteger(0,6)+Util.randomInteger(1,a);o=new Set({type:Set.MULTIPLIES,value1:a,value2:f})}return o};