function __Styles(){optionsStyle={position:"absolute",fontSize:"16px",fontWeight:"bold",color:"#000",cursor:"pointer",width:"300px"},optionsImageContainer={position:"relative",width:"32px",height:"32px","float":"left",top:"-8px",marginRight:"10px",backgroundImage:"url(/assets/radio_buttons.png)",backgroundPosition:"0px 0px"},selectedOptionStyle={color:"#235394"},trueOptionStyle={color:"#309423"},falseOptionStyle={color:"#942323"},setDivCss={position:"absolute",left:"10px",fontSize:"16px",width:"300px",lineHeight:"20px"}}var Set=Class.extend({init:function(e){this.elements=[];switch(e.type){case Set.ELEMENTS:this.definition=""+e.elements.length+" elemanlı küme",this.elements=[];for(var t=0;t<e.elements.length;t++){var n;for(var r=0;r<this.elements.length;r++)e.elements[t]==this.elements[r]&&(n=!0);if(n)continue;this.elements.push(e.elements[t])}this.elements.sort(function(e,t){return e-t});break;case Set.SMALLER_THAN:this.definition=""+this.getValueStr(e.value)+" küçük doğal sayılar";for(var t=0;t<e.value;t++)this.elements.push(t);break;case Set.SMALLER_THAN_ODD:this.definition=""+this.getValueStr(e.value)+" küçük tek doğal sayılar";for(var t=0;t<e.value;t++)t%2==1&&this.elements.push(t);break;case Set.SMALLER_THAN_EVEN:this.definition=""+this.getValueStr(e.value)+" küçük çift doğal sayılar";for(var t=0;t<e.value;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_PRIME:this.definition=""+this.getValueStr(e.value)+" küçük asal sayılar";for(var t=0;t<e.value;t++)Util.isPrimeNumber(t)&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük doğal sayılar";for(var t=e.value1+1;t<e.value2;t++)this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_ODD:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük tek doğal sayılar";for(var t=e.value1+1;t<e.value2;t++)t%2==1&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_EVEN:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük çift doğal sayılar";for(var t=e.value1+1;t<e.value2;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_PRIME:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük asal sayılar";for(var t=e.value1+1;t<e.value2;t++)Util.isPrimeNumber(t)&&this.elements.push(t);break;case Set.FACTORS:this.definition=""+this.getValueStr(e.value,1)+" çarpanları",u=[],u=Util.getFactors(e.value);for(var t=0;t<u.length;t++)this.elements.push(u[t]);break;case Set.MULTIPLIES:this.definition=""+this.getValueStr(e.value1,1)+" "+this.getValueStr(e.value2)+" küçük katları";for(var t=1;t<e.value2/e.value1;t++)this.elements.push(e.value1*t);break;case Set.DIGIT:this.definition="rakamlar";for(var t=0;t<10;t++)this.elements.push(t);this.type=e.type;break;case Set.DIGIT_ODD:this.definition="tek rakamlar";for(var t=0;t<10;t++)t%2==1&&this.elements.push(t);break;case Set.DIGIT_EVEN:this.definition="çift rakamlar";for(var t=0;t<10;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_DIGIT:this.definition=""+this.getValueStr(e.value)+" küçük rakamlar";if(e.value>10)var i=10;else var i=e.value;for(var t=0;t<i;t++)this.elements.push(t);break;case Set.SMALLER_THAN_DIGIT_ODD:this.definition=""+this.getValueStr(e.value)+" küçük tek rakamlar";if(e.value>10)var i=10;else var i=e.value;for(var t=0;t<i;t++)t%2==1&&this.elements.push(t);break;case Set.SMALLER_THAN_DIGIT_EVEN:this.definition=""+this.getValueStr(e.value)+" küçük çift rakamlar";if(e.value>10)var i=10;else var i=e.value;for(var t=0;t<i;t++)t%2==0&&this.elements.push(t);break;case Set.GREATER_THAN_DIGIT:this.definition=""+this.getValueStr(e.value)+" büyük rakamlar";if(e.value<0)var i=0;else var i=e.value;for(var t=i+1;t<10;t++)this.elements.push(t);break;case Set.GREATER_THAN_DIGIT_ODD:this.definition=""+this.getValueStr(e.value)+" büyük tek rakamlar";if(e.value<0)var i=0;else var i=e.value;for(var t=i+1;t<10;t++)t%2==1&&this.elements.push(t);break;case Set.GREATER_THAN_DIGIT_EVEN:this.definition=""+this.getValueStr(e.value)+" büyük çift rakamlar";if(e.value<0)var i=0;else var i=e.value;for(var t=i+1;t<10;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_DIGIT:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük rakamlar";for(var t=e.value1+1;t<e.value2;t++)this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük tek rakamlar";for(var t=e.value1+1;t<e.value2;t++)t%2==1&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük çift rakamlar";for(var t=e.value1+1;t<e.value2;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_LETTER:this.definition=""+this.getValueStr(e.value,2)+" önce gelen harfler";var s=0,o=Set.turkishLetters.indexOf(e.value);for(var t=s;t<o;t++)this.elements.push(Set.turkishLetters[t]);break;case Set.GREATER_THAN_LETTER:this.definition=""+this.getValueStr(e.value,2)+" sonra gelen harfler";var s=Set.turkishLetters.indexOf(e.value)+1,o=29;for(var t=s;t<o;t++)this.elements.push(Set.turkishLetters[t]);break;case Set.SMALLER_THAN_GREATER_THAN_LETTER:this.definition=""+e.value1+" ile "+e.value2+" arasındaki harfler";var s=Set.turkishLetters.indexOf(e.value1)+1,o=Set.turkishLetters.indexOf(e.value2);for(var t=s;t<o;t++)this.elements.push(Set.turkishLetters[t]);break;case Set.WORDS:var u=Util.randomInteger(0,15),a=Set.wordsArray[u];this.definition='"'+a+'" sözcüğündeki harfler';for(var t=0;t<a.length;t++)this.elements.indexOf(a[t])==-1&&this.elements.push(a[t]);break;case Set.SMALLER_THAN_INTEGER:this.definition=""+this.getValueStr(e.value)+" küçük pozitif tam sayılar";for(var t=1;t<e.value;t++)this.elements.push(t)}this.type=e.type},isEqualSet:function(e){if(this.elements.length!=e.elements.length)return!1;var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n==this.elements.length?!0:!1},isSubsetOf:function(e){if(this.elements.length>e.elements.length)return!1;var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n==this.elements.length?!0:!1},isDisjointWith:function(e){var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n==0?!0:!1},isIntersectingWith:function(e){var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n!=0?!0:!1},getIntersection:function(e){var t=[];for(var n=0;n<this.elements.length;n++)for(var r=0;r<e.elements.length;r++)this.elements[n]==e.elements[r]&&t.push(this.elements[n]);t.sort(function(e,t){return e-t});var i=new Set({type:Set.ELEMENTS,elements:t}),s="";return e.type==Set.ELEMENTS?s="'nin":e.type==Set.FACTORS||e.type==Set.MULTIPLIES?s="'nın":s="'ın",i.definition=""+this.definition+" ile "+e.definition+""+s+" kesişimi",i},getUnion:function(e){var t=[],n=[];for(var r=0;r<e.elements.length;r++)n.push(e.elements[r]);for(var i=0;i<this.elements.length;i++)t.push(this.elements[i]);for(var s=0;s<n.length;s++)for(var o=0;o<this.elements.length;o++)if(n[s]==this.elements[o]){n[s]="axxwt";break}for(var u=0;u<n.length;u++)n[u]!="axxwt"&&t.push(n[u]);t.sort(function(e,t){return e-t});var a=new Set({type:Set.ELEMENTS,elements:t}),f="";return e.type==Set.ELEMENTS?f="'nin":e.type==Set.FACTORS||e.type==Set.MULTIPLIES?f="'nın":f="'ın",a.definition=""+this.definition+" ile "+e.definition+""+f+" birleşimi",a},getDifference:function(e){var t=[],n=[],r;for(var i=0;i<this.elements.length;i++)n.push(this.elements[i]);for(var s=0;s<n.length;s++){for(var o=0,r=0;o<e.elements.length;o++)n[s]!=e.elements[o]&&(r+=1);r==e.elements.length&&t.push(n[s])}t.sort(function(e,t){return e-t});var u=new Set({type:Set.ELEMENTS,elements:t}),a="";return e.type==Set.ELEMENTS?a="'nin":e.type==Set.FACTORS||e.type==Set.MULTIPLIES?a="'nın":a="'ın",u.definition=""+this.definition+" ile "+e.definition+""+a+" farkı",u},getSubSets:function(){},getComplement:function(e){return e.getDifference(this)},getDefinitionString:function(e){if(e==undefined)var t="{ "+this.definition+" }";else var t=""+e+" = { "+this.definition+" }";return t},getElementsString:function(e){if(e==undefined)var t="{ ";else var t=""+e+" = { ";for(var n=0;n<this.elements.length-1;n++)t+=""+this.elements[n]+", ";return t+=this.elements[this.elements.length-1]+" }",t},getValueStr:function(e,t){t==undefined&&(t=0);if(t==0){var n="";if(e%90==0)n+=e+"'dan";else if(e%80==0||e%50==0)n+=e+"'den";else if(e%70==0)n+=e+"'ten";else if(e%60==0||e%40==0)n+=e+"'tan";else if(e%30==0)n+=e+"'dan";else if(e%20==0)n+=e+"'den";else if(e%10==0)n+=e+"'dan";else if(e%10==1||e%10==2||e%10==7||e%10==8)n+=e+"'den";else if(e%10==3||e%10==4||e%10==5)n+=e+"'ten";else if(e%10==6||e%10==9)n+=e+"'dan"}else if(t==1){var n="";if(e%90==0||e%60==0)n+=e+"'ın";else if(e%80==0||e%70==0)n+=e+"'in";else if(e%50==0)n+=e+"'nin";else if(e%40==0)n+=e+"'ın";else if(e%30==0)n+=e+"'un";else if(e%20==0)n+=e+"'nin";else if(e%10==0||e%10==9)n+=e+"'un";else if(e%10==8||e%10==1||e%10==5)n+=e+"'in";else if(e%10==7||e%10==2)n+=e+"'nin";else if(e%10==6)n+=e+"'nın";else if(e%10==4||e%10==3)n+=e+"'ün"}else if(t==2){var n="",r=["a","ı","o","u"];r.indexOf(e)==-1?n+=e+"'den":n+=e+"'dan"}return n},getRandomSubset:function(){var e;if(this.type==Set.ELEMENTS){var t=Util.randomInteger(0,5),n=Util.randomInteger(t+1,6);e=new Set({type:Set.ELEMENTS,elements:this.elements.slice(t,n)})}else do e=Set.randomGenerator();while(e==undefined||!e.isSubsetOf(this));return e},getRandomDisjointSet:function(){var e;do e=Set.randomGenerator();while(e==undefined||!e.isDisjointWith(this));return e},getRandomIntersectingSet:function(){var e;do e=Set.randomGenerator();while(e==undefined||!e.isIntersectingWith(this));return e},removeVennDiagram:function(){this.vennDiagram.remove()},drawVennDiagram:function(e,t,n){var r=this.elements.length;this.vennDiagram=new Group;var i=new Size(this.elements.length*10*1.8+110,128),s=new Rectangle(t,i),o=new PointText(t.add(5,20));o.content=n,o.set_style({fontSize:13}),this.letter=o;var u=Path.Oval(s);u.strokeColor="black",u.fillColor=new RgbColor(1,1,1,0),this.oval=u;var a=new Size(i.width/(r+.8),i.height/(r+.8));a.width<44&&(a.width=44),a.height<30&&(a.height=30);var f=[],l=function(e){var t=e.add(a.width,-a.height),n=e.add(a.width,0),r=e.add(0,-a.height),i=[e,t,n,r];for(var s=0;s<4;s++){if(!u.hitTest(i[s],{fill:!0,stroke:!1,segments:!0,tolerance:-16}))return!1;for(var o=0;o<f.length;o++){var l=new Rectangle(new Point(f[o].x,f[o].y-a.height),a);if(l.contains(i[s]))return!1}}return!0};for(var c=0;c<r;c++){var h,p=0;do h=new Point(Util.randomInteger(t.x/5,(t.x+i.width)/5)*5,Util.randomInteger(t.y/5,(t.y+i.height)/5)*5),p++;while(!l(h)&&p<r*20);var d=new PointText(h.add(a.width/2-10,-a.height/2+8));d.set_style({fontSize:14}),d.content="."+this.elements[c],this.vennDiagram.addChild(d),f.push(h),p==r*20&&(this.removeVennDiagram(),this.vennDiagram=new Group,f=[],c=-1)}}});Set.ELEMENTS=0,Set.SMALLER_THAN=1,Set.SMALLER_THAN_ODD=2,Set.SMALLER_THAN_EVEN=3,Set.SMALLER_THAN_PRIME=4,Set.SMALLER_THAN_GREATER_THAN=5,Set.SMALLER_THAN_GREATER_THAN_ODD=6,Set.SMALLER_THAN_GREATER_THAN_EVEN=7,Set.SMALLER_THAN_GREATER_THAN_PRIME=8,Set.FACTORS=9,Set.MULTIPLIES=10,Set.DIGIT=11,Set.DIGIT_ODD=12,Set.DIGIT_EVEN=13,Set.SMALLER_THAN_DIGIT=14,Set.SMALLER_THAN_DIGIT_ODD=15,Set.SMALLER_THAN_DIGIT_EVEN=16,Set.GREATER_THAN_DIGIT=17,Set.GREATER_THAN_DIGIT_ODD=18,Set.GREATER_THAN_DIGIT_EVEN=19,Set.SMALLER_THAN_GREATER_THAN_DIGIT=20,Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD=21,Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN=22,Set.SMALLER_THAN_LETTER=23,Set.GREATER_THAN_LETTER=24,Set.SMALLER_THAN_GREATER_THAN_LETTER=25,Set.WORDS=26,Set.SMALLER_THAN_INTEGER=27,Set.turkishLetters=[],Set.turkishLetters[0]="a",Set.turkishLetters[1]="b",Set.turkishLetters[2]="c",Set.turkishLetters[3]="ç",Set.turkishLetters[4]="d",Set.turkishLetters[5]="e",Set.turkishLetters[6]="f",Set.turkishLetters[7]="g",Set.turkishLetters[8]="ğ",Set.turkishLetters[9]="h",Set.turkishLetters[10]="ı",Set.turkishLetters[11]="i",Set.turkishLetters[12]="j",Set.turkishLetters[13]="k",Set.turkishLetters[14]="l",Set.turkishLetters[15]="m",Set.turkishLetters[16]="n",Set.turkishLetters[17]="o",Set.turkishLetters[18]="ö",Set.turkishLetters[19]="p",Set.turkishLetters[20]="r",Set.turkishLetters[21]="s",Set.turkishLetters[22]="ş",Set.turkishLetters[23]="t",Set.turkishLetters[24]="u",Set.turkishLetters[25]="ü",Set.turkishLetters[26]="v",Set.turkishLetters[27]="y",Set.turkishLetters[28]="z",Set.wordsArray=[],Set.wordsArray[0]="elma",Set.wordsArray[1]="matematik",Set.wordsArray[2]="bilgisayar",Set.wordsArray[3]="okul",Set.wordsArray[4]="sınıf",Set.wordsArray[5]="aile",Set.wordsArray[6]="ahlak",Set.wordsArray[7]="küme",Set.wordsArray[8]="öğretmen",Set.wordsArray[9]="gündüz",Set.wordsArray[10]="gece",Set.wordsArray[11]="aynalar",Set.wordsArray[12]="kütüphane",Set.wordsArray[13]="kahverengi",Set.wordsArray[14]="mendil",Set.randomGenerator=function(e,t){if(t==undefined||isNaN(t))t=0;var n,r,i,s,o;e==undefined||isNaN(e)?t==0?n=Util.randomInteger(1,28):n=Util.randomInteger(1,26,[11,12,13,14,15,16,17,18,19,20,21,22,26,27]):n=e;var u;switch(n){case 1:if(t==0)var a=Util.randomInteger(1,7);else var a=t;u=new Set({type:Set.SMALLER_THAN,value:a});break;case 2:if(t==0)var a=Util.randomInteger(2,12);else var a=2*t;u=new Set({type:Set.SMALLER_THAN_ODD,value:a});break;case 3:if(t==0)var a=Util.randomInteger(1,11);else var a=2*t;u=new Set({type:Set.SMALLER_THAN_EVEN,value:a});break;case 4:if(t==0)var a=Util.randomInteger(3,14);else if(t==7)var a=18;else if(t==8)var a=20;else if(t==9)var a=24;else var a=30;u=new Set({type:Set.SMALLER_THAN_PRIME,value:a});break;case 5:if(t==0)var f=Util.randomInteger(1,90),l=Util.randomInteger(f+2,f+8);else var f=Util.randomInteger(1,90),l=f+t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN,value1:f,value2:l});break;case 6:if(t==0)var f=Util.randomInteger(1,80),l=f+Util.randomInteger(4,13);else var f=Util.randomInteger(1,78),l=f+2*t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_ODD,value1:f,value2:l});break;case 7:if(t==0)var f=Util.randomInteger(1,80),l=f+Util.randomInteger(4,13);else var f=Util.randomInteger(1,78),l=f+2*t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_EVEN,value1:f,value2:l});break;case 8:if(t==0){do{var f=Util.randomInteger(1,90),l=Util.randomInteger(1,90),c=[];for(var h=f+1;h<l;h++)Util.isPrimeNumber(h)&&c.push(h)}while(c.length==0||c.length>6)}else do{var f=Util.randomInteger(1,30),l=Util.randomInteger(f+10,100),c=[];for(var h=f+1;h<l;h++)Util.isPrimeNumber(h)&&c.push(h)}while(c.length!=t);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_PRIME,value1:f,value2:l});break;case 9:if(t==0){do{var a=Util.randomInteger(1,97),p=[];p=Util.getFactors(a)}while(p.length>6)}else do{var a=Util.randomInteger(1,99),p=[];p=Util.getFactors(a)}while(p.length!=t);u=new Set({type:Set.FACTORS,value:a});break;case 10:if(t==0)var f=Util.randomInteger(2,17),l=f+f*Util.randomInteger(0,6)+Util.randomInteger(1,f);else var f=Util.randomInteger(2,10),l=f*t+Util.randomInteger(1,f);u=new Set({type:Set.MULTIPLIES,value1:f,value2:l});break;case 11:u=new Set({type:Set.DIGIT});break;case 12:u=new Set({type:Set.DIGIT_ODD});break;case 13:u=new Set({type:Set.DIGIT_EVEN});break;case 14:var a=Util.randomInteger(1,11);u=new Set({type:Set.SMALLER_THAN_DIGIT,value:a});break;case 15:var a=Util.randomInteger(2,11);u=new Set({type:Set.SMALLER_THAN_DIGIT_ODD,value:a});break;case 16:var a=Util.randomInteger(1,11);u=new Set({type:Set.SMALLER_THAN_DIGIT_EVEN,value:a});break;case 17:var a=Util.randomInteger(0,9);u=new Set({type:Set.GREATER_THAN_DIGIT,value:a});break;case 18:var a=Util.randomInteger(0,9);u=new Set({type:Set.GREATER_THAN_DIGIT_ODD,value:a});break;case 19:var a=Util.randomInteger(0,8);u=new Set({type:Set.GREATER_THAN_DIGIT_EVEN,value:a});break;case 20:var f=Util.randomInteger(0,8),l=Util.randomInteger(f+2,10);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT,value1:f,value2:l});break;case 21:var f=Util.randomInteger(0,8),l=Util.randomInteger(f+3,10);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD,value1:f,value2:l});break;case 22:var f=Util.randomInteger(0,8),l=Util.randomInteger(f+3,10);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN,value1:f,value2:l});break;case 23:if(t==0)var a=Util.randomInteger(1,29);else var a=t;u=new Set({type:Set.SMALLER_THAN_LETTER,value:Set.turkishLetters[a]});break;case 24:if(t==0)var a=Util.randomInteger(0,28);else var a=28-t;u=new Set({type:Set.GREATER_THAN_LETTER,value:Set.turkishLetters[a]});break;case 25:if(t==0)var f=Util.randomInteger(0,27),l=Util.randomInteger(f+2,29);else var f=Util.randomInteger(0,18),l=f+t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_LETTER,value1:Set.turkishLetters[f],value2:Set.turkishLetters[l]});break;case 26:u=new Set({type:Set.WORDS});break;case 27:var a=Util.randomInteger(2,8);u=new Set({type:Set.SMALLER_THAN_INTEGER,value:a})}return u},Set.animateDifferenceSets=function(e){var t=Set.drawSets(e.container,e.position,e.sets,e.letters),n=t.set1.position;t.set1.position=t.set1.position.add(-100,0);var r=t.set2.position;return t.set2.position=t.set2.position.add(100,0),t.set1.animate({style:{position:n},duration:1e3,delay:1e3,animationType:"easeInEaseOut",callback:function(){t.set1.children[3].remove()}}),t.set2.animate({style:{position:r},duration:1e3,delay:1e3,animationType:"easeInEaseOut"}),t.set2.children[0].animate({style:{},duration:1e3,delay:2e3,callback:function(){t.set2.animate({style:{opacity:0},duration:1e3,update:function(){},callback:function(){t.set2.remove(),t.intersect.remove(),t.intersectClone.remove(),e.callback&&e.callback(),t.set1.children[1].content=e.letters[0]+" \\ "+e.letters[1]}})}}),t},Set.animateSets=function(e){var t=Set.drawSets(e.container,e.position,e.sets,e.letters),n=t.set1.position;t.set1.position=t.set1.position.add(-100,0);var r=t.set2.position;return t.set2.position=t.set2.position.add(100,0),t.set1.animate({style:{position:n},duration:1e3,delay:1e3,animationType:"easeInEaseOut",callback:function(){}}),t.set2.animate({style:{position:r},duration:1e3,delay:1e3,animationType:"easeInEaseOut",callback:function(){e.callback&&e.callback()}}),t},Set.animateComplementSets=function(e){var t=Set.drawSets(e.container,e.position,e.sets,e.letters),n=t.set1.position;t.set1.position=t.set1.position.add(-100,0);var r=t.set2.position;return t.set2.position=t.set2.position.add(100,0),t.set1.children[0].opacity=0,t.set1.children[0]=(new Path.Rectangle(t.set1.children[0].bounds)).set_style({strokeWidth:1,strokeColor:"#000"}),t.set1.children[1].position=t.set1.children[1].position.add(-15,10),t.set1.children[1].fillColor="#f00",t.set1.animate({style:{position:n},duration:1e3,delay:1e3,animationType:"easeInEaseOut",callback:function(){t.set1.children[1].content=e.letters[1]+"'",t.set1.children[0].insertBelow(t.set1.children[1]),t.set2.children[2].remove()}}),t.set2.animate({style:{position:r},duration:1e3,delay:1e3,animationType:"easeInEaseOut"}),t.set1.children[0].fillColor=new RgbColor(.8,.8,.8,0),t.set1.children[0].animate({style:{fillColor:new RgbColor(.8,.8,.8,1)},duration:1e3,delay:2e3,init:function(){t.set2.children[0].fillColor=new RgbColor(1,1,1,1),t.set2.children[1].remove()},callback:function(){e.callback&&e.callback()}}),t},Set.animateDisjointSets=function(e){var t=Set.drawSets(e.container,e.position,e.sets,e.letters),n=t.set1.position;t.set1.position=t.set1.position.add(-100,0);var r=t.set2.position;return console.log(n),console.log(r),t.set2.position=t.set2.position.add(-75,0),e.callback&&e.callback(),t},Set.animateEqualSets=function(e){var t=Set.drawSets(e.container,e.position,e.sets,e.letters),n=t.set1.position;t.set1.position=t.set1.position.add(-100,0);var r=t.set2.position;return t.set2.position=t.set2.position.add(100,0),t.set1.animate({style:{position:n},duration:1e3,delay:1e3,animationType:"easeInEaseOut",callback:function(){t.set2.children[2].remove()}}),t.set2.animate({style:{position:r},duration:1e3,delay:1e3,animationType:"easeInEaseOut",callback:function(){t.set2.remove(),e.callback&&e.callback()}}),t},Set.drawSets=function(e,t,n,r){if(!n.length)throw"Usage drawSets: function(container, topLeftPoint, sets, letters)";if(n.length>2)throw"Only one or two sets are supported for drawing sets";if(n.length==1)return n[0].drawVennDiagram(e,t,r[0]);var i=new Group,s=new Group,o=n[0],u=n[1],a=o.getDifference(u),f=u.getDifference(o),l=o.getIntersection(u),c=n[0].elements.length,h=n[1].elements.length;elementsSize1=new Size(32,22),elementsSize2=new Size(32,22),elementsSize3=new Size(32,22);if(a.elements.length==0&&f.elements.length==0){var p=0,d=new Size(c*10*1.8+110,128),v=new Rectangle(t,d),m=new Point(v.x+v.width*.1,v.y+v.height*.1),g=new Size(h*10*1.8+110,128),b=new Rectangle(t.add(p,0),g),w=new Point(b.x+b.width*.82,b.y+b.height*.1),E=new Rectangle;intersectionBoundingBox=v;var S=new Rectangle;elementsSize2=new Size(d.width/(c+.8),d.height/(c+.8)),elementsSize2.width<36&&(elementsSize2.width=36),elementsSize2.height<30&&(elementsSize2.height=30)}else if(a.elements.length==0){var p=-20,d=new Size(c*10*2+72,92),v=new Rectangle(t.add(0,18),d),m=new Point(v.x+v.width*.82,v.y+v.height*.1),g=new Size(h*10*2+160,128),b=new Rectangle(t.add(p,0),g),w=new Point(b.x+b.width*.82,b.y+b.height*.1),E=new Rectangle;intersectionBoundingBox=v;var S=new Rectangle(new Point(b.x+v.width-p,b.y),new Size(b.width-v.width+p,b.height));elementsSize1=new Size(d.width/(c+.8),d.height/(c+.8)),elementsSize1.width<32&&(elementsSize1.width=32),elementsSize1.height<28&&(elementsSize1.height=28)}else if(f.elements.length==0){var d=new Size(c*10*2+110,128),v=new Rectangle(t,d),m=new Point(v.x+v.width*.1,v.y+v.height*.1),g=new Size(h*10*2+72,92),p=d.width-g.width-20,b=new Rectangle(t.add(p,18),g),w=new Point(b.x+b.width*.1,b.y+b.height*.1),E=new Rectangle(new Point(v.x,v.y),new Size(p,v.height));intersectionBoundingBox=b;var S=new Rectangle;elementsSize3=new Size(g.width/(h+.8),g.height/(h+.8)),elementsSize3.width<32&&(elementsSize3.width=32),elementsSize3.height<24&&(elementsSize3.height=24)}else if(l.elements.length==0){var p=(a.elements.length+1)*10*2+110,d=new Size(c*10*1.8+110,128),v=new Rectangle(t,d),m=new Point(v.x+v.width*.1,v.y+v.height*.1),g=new Size(h*10*1.8+110,128),b=new Rectangle(t.add(p,0),g),w=new Point(b.x+b.width*.82,b.y+b.height*.1),E=v;intersectionBoundingBox=new Rectangle;var S=b;elementsSize1=new Size(d.width/(c+.8),d.height/(c+.8)),elementsSize1.width<36&&(elementsSize1.width=36),elementsSize1.height<24&&(elementsSize1.height=24),elementsSize3=new Size(g.width/(h+.8),g.height/(h+.8)),elementsSize3.width<36&&(elementsSize3.width=36),elementsSize3.height<24&&(elementsSize3.height=24)}else{var p=a.elements.length*8*1.8+75,d=new Size(c*10*2+110,128),v=new Rectangle(t,d),m=new Point(v.x+v.width*.1,v.y+v.height*.1),g=new Size(h*10*2+110,128),b=new Rectangle(t.add(p,0),g),w=new Point(b.x+b.width*.82,b.y+b.height*.1),E=new Rectangle(new Point(v.x,v.y),new Size(p,v.height));intersectionBoundingBox=new Rectangle(t.add(p,0),new Size(d.width-p,d.height-0));var S=new Rectangle(new Point(b.x+v.width-p,b.y),new Size(b.width-v.width+p,b.height))}var T=Path.Oval(v);T.strokeColor="black",T.fillColor=new RgbColor(1,1,1,0),i.addChild(T);var N=Path.Oval(b);N.strokeColor="black",N.fillColor=new RgbColor(1,1,1,0),s.addChild(N);var C=new PointText(m);C.set_style({fontSize:14}),C.content=r[0],i.addChild(C),C=new PointText(w),C.set_style({fontSize:14}),C.content=r[1],s.addChild(C);var k=function(e,t,n,r,i){i==undefined&&(i=12);var s=i,o=[],u=new Group;isAvailable=function(e){var t=e.add(n.width,-n.height),i=e.add(n.width,0),s=e.add(0,-n.height),o=[e,t,i,s];for(var u=0;u<4;u++)if(!r(o[u]))return!1;return!0};var a=e.length,f=new Point(t.x,t.y),l=t.size,c=[];for(var h=0;h<l.height/s;h++)for(var p=0;p<l.width/s;p++){var d=new Point(f.x+p*s,f.y+h*s);isAvailable(d)||c.push(h*Math.ceil(l.width/s)+p)}for(var p=0;p<a;p++){var v=!1;try{var m=Util.randomInteger(0,Math.floor(l.width*l.height/s/s),c)}catch(g){v=!0}var b=new Point(f.x+m%Math.ceil(l.width/s)*s,f.y+Math.floor(s*m/l.width)*s),w=new PointText(b.add(n.width/2-6,-n.height/2+8));w.set_style({fontSize:i}),w.content="."+e[p],u.addChild(w);var E=Math.floor((b.y-f.y)/s);o.push(b);var S=b.x-n.width,T=b.x+n.width,N=b.y-n.height,C=b.y+n.height;S=Math.floor((S-f.x)/s),T=Math.floor((T-f.x)/s),N=Math.floor((N-f.y)/s),C=Math.floor((C-f.y)/s);for(x=S;x<=T;x++)for(y=N;y<=C;y++)x>=0&&y>=0&&c.push(y*Math.ceil(l.width/s)+x);v&&console.log("retry!")}return u},L=Date.now(),A=k(a.elements,E,elementsSize1,function(e){return T.hitTest(e)&&!N.hitTest(e)}),O=Date.now(),L=Date.now(),M=k(l.elements,intersectionBoundingBox,elementsSize2,function(e){return T.hitTest(e)&&N.hitTest(e)}),O=Date.now(),L=Date.now(),_=k(f.elements,S,elementsSize3,function(e){return!T.hitTest(e)&&N.hitTest(e)}),O=Date.now();i.addChild(A),i.addChild(M);var D=M.clone();return s.addChild(D),s.addChild(_),{set1:i,set2:s,intersect:M,intersectClone:D}};var Animation={images:[],init:function(e){Animation.container=e,Animation.referencePoint=new Point(300,50),Animation.showEqualSets()},showEqualSets:function(){var e=new Set({type:Set.ELEMENTS,elements:[1,2,3,4,5]}),t=new Set({type:Set.ELEMENTS,elements:[1,2,3,4,5]});Set.animateEqualSets({container:Animation.container,position:new Point(275,10),sets:[e,t],letters:["A","B"],callback:function(){Animation.showText("A = B <br/> İki küme eşit olabilir"),Main.animationProject.activeLayer.animate({style:{opacity:0},duration:1e3,delay:2e3,callback:function(){this.opacity=1,Main.animationProject.activeLayer.removeChildren(),Animation.showDisjointSets()}})}})},showDisjointSets:function(){var e=new Set({type:Set.ELEMENTS,elements:[1,2,3,4,5]}),t=new Set({type:Set.ELEMENTS,elements:[6,7,8,9]});Set.animateDisjointSets({container:Animation.container,position:new Point(275,10),sets:[e,t],letters:["A","B"],callback:function(){Animation.showText("A = B <br/> İki küme ayrık olabilir"),Main.animationProject.activeLayer.animate({style:{opacity:0},duration:1e3,delay:2e3,callback:function(){this.opacity=1,Main.animationProject.activeLayer.removeChildren(),Animation.showSubsets()}})}})},showSubsets:function(){var e=new Set({type:Set.ELEMENTS,elements:[1,2,3,4,5]}),t=new Set({type:Set.ELEMENTS,elements:[4,5]});Set.animateSets({container:Animation.container,position:new Point(275,10),sets:[e,t],letters:["A","B"],callback:function(){Animation.showText("A &#8834; B <br/> İki kümeden biri diğerinin alt kümesi olabilir"),Main.animationProject.activeLayer.animate({style:{opacity:0},duration:1e3,delay:2e3,callback:function(){this.opacity=1,Main.animationProject.activeLayer.removeChildren(),Animation.showIntersectingSets()}})}})},showIntersectingSets:function(){var e=new Set({type:Set.ELEMENTS,elements:[1,2,3,4,5]}),t=new Set({type:Set.ELEMENTS,elements:[4,5,6,7,8]});Set.animateSets({container:Animation.container,position:new Point(225,10),sets:[e,t],letters:["A","B"],callback:function(){Animation.showText("B &#8745;  A <br/> İki küme kesişebilir",!1),AnimationManager.delay(function(){Main.animationFinished()},4e3)}})},showText:function(e,t){t==undefined&&(t=!0);var n=Util.dom({tag:"div",parent:Animation.container,css:{position:"absolute",width:"100%",textAlign:"center",bottom:"10px",left:"0px",opacity:0},html:e});$(n).animate({opacity:1},1e3).delay(1e3),t&&$(n).animate({opacity:0},1e3,$(n).remove)}},Interaction={getFramework:function(){return"paper"},images:[{id:"radio_buttons",src:"/assets/radio_buttons.png"}],init:function(e){Interaction.container=e,Main.setObjective("Yanda verilen kümelerin birbirine göre durumunu belirtiniz ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()};var t=new Point(100,100);Interaction.createOptions(t.add(250,-50)),Interaction.appendStatus({bottom:"30px",right:"210px"}),Interaction.appendButton({bottom:"20px",right:"100px"}),Interaction.set1Div=Util.dom({tag:"div",parent:e,css:setDivCss}),$(Interaction.set1Div).css({top:"100px"}),Interaction.set2Div=Util.dom({tag:"div",parent:e,css:setDivCss}),$(Interaction.set2Div).css({top:"150px"}),Interaction.setRandomGenerator(4),Interaction.prepareNextQuestion()},nextQuestion:function(e){Interaction.trial++,Interaction.cleanOptions(),Interaction.generateSets(e)},cleanOptions:function(){Interaction.clickedOption=null,$(Interaction.options).each(function(){$(this).css(optionsStyle)}),$(".image-container").css({backgroundPosition:"0px 0px"})},createOptions:function(e){var t=Util.dom({parent:Interaction.container,tag:"div",css:optionsStyle,html:"Eşit kümeler"}),n=Util.dom({parent:Interaction.container,tag:"div",css:optionsStyle,html:"Biri diğerinin alt kümesi"}),r=Util.dom({parent:Interaction.container,tag:"div",css:optionsStyle,html:"Ayrık kümeler"}),i=Util.dom({parent:Interaction.container,tag:"div",css:optionsStyle,html:"Kesişen kümeler"});Interaction.options=[t,n,r,i];for(var s=0;s<Interaction.options.length;s++)$(Interaction.options[s]).css({top:e.y+50*s,left:e.x}).click(function(){Interaction.cleanOptions(),Interaction.clickedOption=this,$(".image-container",this).css({backgroundPosition:"-32px 0px"}),$(Interaction.clickedOption).css(selectedOptionStyle)}).prepend('<div class="image-container"></div>'),$(".image-container",Interaction.options[s]).css(optionsImageContainer)},generateSets:function(e){var t,n;Interaction.set1=Set.randomGenerator();switch(e){case 0:Interaction.set2=Interaction.set1,t=Interaction.set1.getDefinitionString(),n=Interaction.set2.getElementsString();break;case 1:Interaction.set2=Interaction.set1.getRandomSubset();break;case 2:Interaction.set2=Interaction.set1.getRandomDisjointSet();break;case 3:Interaction.set2=Interaction.set1.getRandomIntersectingSet()}if(e!=0){var r=Util.rand01()==1,i=Util.rand01()==1;Interaction.set1.isEqualSet(Interaction.set2)&&(r=!i),r?t=Interaction.set1.getDefinitionString():t=Interaction.set1.getElementsString(),i?n=Interaction.set2.getDefinitionString():n=Interaction.set2.getElementsString()}Interaction.set1Div.innerHTML="A = "+t,Interaction.set2Div.innerHTML="B = "+n},preCheck:function(){if(Interaction.clickedOption==null)return Interaction.setStatus("Lütfen bir şık seçiniz","alert"),!1},isAnswerCorrect:function(){if(Interaction.clickedOption==Interaction.options[0])return Interaction.set1.isEqualSet(Interaction.set2);if(Interaction.clickedOption==Interaction.options[1])return Interaction.set1.isSubsetOf(Interaction.set2)||Interaction.set2.isSubsetOf(Interaction.set1);if(Interaction.clickedOption==Interaction.options[2])return Interaction.set1.isDisjointWith(Interaction.set2);if(Interaction.clickedOption==Interaction.options[3])return Interaction.set1.isIntersectingWith(Interaction.set2)},onCorrectAnswer:function(){$(Interaction.clickedOption).css(trueOptionStyle),$(".image-container",Interaction.clickedOption).css({backgroundPosition:"-64px 0px"})},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış! Doğru cevaplar yeşil renk ile belirtilmiştir.",!1),$(Interaction.clickedOption).css(falseOptionStyle),$(".image-container",Interaction.clickedOption).css({backgroundPosition:"-96px 0px"});var e=[];Interaction.set1.isEqualSet(Interaction.set2)&&e.push(0),(Interaction.set1.isSubsetOf(Interaction.set2)||Interaction.set2.isSubsetOf(Interaction.set1))&&e.push(1),Interaction.set1.isDisjointWith(Interaction.set2)&&e.push(2),Interaction.set1.isIntersectingWith(Interaction.set2)&&e.push(3);for(var t=0;t<e.length;t++)$(".image-container",Interaction.options[e[t]]).css({backgroundPosition:"-64px 0px"}),$(Interaction.options[e[t]]).css(trueOptionStyle)}};