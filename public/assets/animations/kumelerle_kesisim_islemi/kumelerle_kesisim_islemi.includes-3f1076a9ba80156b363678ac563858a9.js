function __Styles(){animationVanImagesCSS={position:"absolute",left:"100px",top:"50%",marginTop:"-85px"},animationKumeImagesCSS={position:"absolute",left:"400px",top:"50%",marginTop:"-85px"},setDivCss={position:"absolute",left:"50px",fontSize:"16px",width:"400px",lineHeight:"20px"},answerSetDivCss={position:"absolute",top:"100px",left:"50px",fontSize:"16px"}}var Animation={images:[],init:function(e){Animation.container=e;var t=1e3,n=1e3,r=["/assets/animations/kumelerle_kesisim_islemi/kes_kume_01.png","/assets/animations/kumelerle_kesisim_islemi/kes_kume_02.png","/assets/animations/kumelerle_kesisim_islemi/kes_kume_03.png","/assets/animations/kumelerle_kesisim_islemi/kes_kume_04.png","/assets/animations/kumelerle_kesisim_islemi/kes_kume_05.png","/assets/animations/kumelerle_kesisim_islemi/kes_kume_06.png","/assets/animations/kumelerle_kesisim_islemi/kes_kume_07.png"],i=["kume_siir_sol","kume_siir_sag","kume_bebe_sol","kume_bebe_sag","kume_bos_sol","kume_bos_sag","kume_birlesim"];for(var s=0;s<i.length;s++)$(e).append("<img id='"+i[s]+"' class='ortak' src='"+r[s]+"'>"),$("#"+i[s]).css("opacity","0");$(".ortak").css({position:"absolute",top:"0",bottom:"0",margin:"auto",width:"319px",height:"170px"}),$("#"+i[4]+", #"+i[5]).css("width","480px").css("left","154px"),$("#"+i[0]).css("left","10px"),$("#"+i[1]).css("right","10px"),$("#"+i[2]).css("left","10px"),$("#"+i[3]).css("right","10px"),$("#"+i[0]+", #"+i[1]+", #"+i[2]+", #"+i[3]).delay(t).animate({opacity:"1"},n),$("#"+i[0]+", #"+i[2]).delay(t).animate({left:"154px"},n*3),$("#"+i[1]+", #"+i[3]).delay(t).animate({right:"154px"},n*3),$("#"+i[0]+", #"+i[1]+", #"+i[2]+", #"+i[3]).delay(t).animate({opacity:"0"},n),$("#"+i[4]).delay(t*3+n*4).animate({opacity:"1"},n).delay(t).animate({opacity:"0"},n),$("#"+i[5]).delay(t*4+n*5).animate({opacity:"1"},n,Main.animationFinished)}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yanda verilen kümeler için fark kümesini yazınız ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"00px",right:"40px"}),Interaction.appendStatus({bottom:"10px",right:"150px"}),Interaction.set1Div=Util.dom({tag:"div",parent:e,css:setDivCss}),$(Interaction.set1Div).css({top:"10px"}),Interaction.set2Div=Util.dom({tag:"div",parent:e,css:setDivCss}),$(Interaction.set2Div).css({top:"50px"}),Interaction.prepareNextQuestion()},nextQuestion:function(){Interaction.flushInputs(),Main.interactionProject.activeLayer.removeChildren(),$(Interaction.answerSetDiv).remove(),Interaction.generateSets(),Interaction.answerSetDiv=Util.dom({tag:"div",parent:Interaction.container,css:answerSetDivCss}),$(Interaction.answerSetDiv).append("A ∩ B = { ");var e=Interaction.set1.getIntersection(Interaction.set2).elements.length,t=0;do{t++;var n=Interaction.appendInput({position:"relative",width:"2.5 ex",height:"30px"},!1,e==0);n.maxLength=2,$(Interaction.answerSetDiv).append(t>1?",":"").append(n)}while(t<e);$(Interaction.answerSetDiv).append(" }")},generateSets:function(){var e,t;do Interaction.set1=Set.randomGenerator();while(Interaction.set1.elements.length>10);do Interaction.set2=Interaction.set1.getRandomIntersectingSet();while(Interaction.set1.getDifference(Interaction.set2).elements.length>6||Interaction.set1.getDifference(Interaction.set2).elements.length==0||Interaction.set2.getDifference(Interaction.set1).elements.length==0);var n=Util.rand01()==1,r=Util.rand01()==1;Interaction.set1.isEqualSet(Interaction.set2)&&(n=!r),n?e=Interaction.set1.getDefinitionString():e=Interaction.set1.getElementsString(),r?t=Interaction.set2.getDefinitionString():t=Interaction.set2.getElementsString(),Interaction.set1Div.innerHTML="A = "+e,Interaction.set2Div.innerHTML="B = "+t},preCheck:function(){},isAnswerCorrect:function(e){typeof e=="string"&&(e==""?e=[]:e=[e]);var t=new Set({type:Set.ELEMENTS,elements:e});return console.log(t),t.isEqualSet(Interaction.set1.getIntersection(Interaction.set2))},onCorrectAnswer:function(){Interaction.showCorrectAnswer()},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış, doğru cevabı venn şemasında görebilirsiniz.",!1),Interaction.showCorrectAnswer()},showCorrectAnswer:function(){Interaction.pause(),Interaction._set=Interaction.set1.getDifference(Interaction.set2),Set.animateSets({container:Interaction.container,position:new Point(120,140),sets:[Interaction.set1,Interaction.set2],letters:["A","B"],callback:Interaction.resume})}},Set=Class.extend({init:function(e){this.elements=[];switch(e.type){case Set.ELEMENTS:this.definition=""+e.elements.length+" elemanlı küme",this.elements=[];for(var t=0;t<e.elements.length;t++){var n;for(var r=0;r<this.elements.length;r++)e.elements[t]==this.elements[r]&&(n=!0);if(n)continue;this.elements.push(e.elements[t])}this.elements.sort(function(e,t){return e-t});break;case Set.SMALLER_THAN:this.definition=""+this.getValueStr(e.value)+" küçük doğal sayılar";for(var t=0;t<e.value;t++)this.elements.push(t);break;case Set.SMALLER_THAN_ODD:this.definition=""+this.getValueStr(e.value)+" küçük tek doğal sayılar";for(var t=0;t<e.value;t++)t%2==1&&this.elements.push(t);break;case Set.SMALLER_THAN_EVEN:this.definition=""+this.getValueStr(e.value)+" küçük çift doğal sayılar";for(var t=0;t<e.value;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_PRIME:this.definition=""+this.getValueStr(e.value)+" küçük asal sayılar";for(var t=0;t<e.value;t++)Util.isPrimeNumber(t)&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük doğal sayılar";for(var t=e.value1+1;t<e.value2;t++)this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_ODD:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük tek doğal sayılar";for(var t=e.value1+1;t<e.value2;t++)t%2==1&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_EVEN:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük çift doğal sayılar";for(var t=e.value1+1;t<e.value2;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_PRIME:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük asal sayılar";for(var t=e.value1+1;t<e.value2;t++)Util.isPrimeNumber(t)&&this.elements.push(t);break;case Set.FACTORS:this.definition=""+this.getValueStr(e.value,1)+" çarpanları",u=[],u=Util.getFactors(e.value);for(var t=0;t<u.length;t++)this.elements.push(u[t]);break;case Set.MULTIPLIES:this.definition=""+this.getValueStr(e.value1,1)+" "+this.getValueStr(e.value2)+" küçük katları";for(var t=1;t<e.value2/e.value1;t++)this.elements.push(e.value1*t);break;case Set.DIGIT:this.definition="rakamlar";for(var t=0;t<10;t++)this.elements.push(t);this.type=e.type;break;case Set.DIGIT_ODD:this.definition="tek rakamlar";for(var t=0;t<10;t++)t%2==1&&this.elements.push(t);break;case Set.DIGIT_EVEN:this.definition="çift rakamlar";for(var t=0;t<10;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_DIGIT:this.definition=""+this.getValueStr(e.value)+" küçük rakamlar";if(e.value>10)var i=10;else var i=e.value;for(var t=0;t<i;t++)this.elements.push(t);break;case Set.SMALLER_THAN_DIGIT_ODD:this.definition=""+this.getValueStr(e.value)+" küçük tek rakamlar";if(e.value>10)var i=10;else var i=e.value;for(var t=0;t<i;t++)t%2==1&&this.elements.push(t);break;case Set.SMALLER_THAN_DIGIT_EVEN:this.definition=""+this.getValueStr(e.value)+" küçük çift rakamlar";if(e.value>10)var i=10;else var i=e.value;for(var t=0;t<i;t++)t%2==0&&this.elements.push(t);break;case Set.GREATER_THAN_DIGIT:this.definition=""+this.getValueStr(e.value)+" büyük rakamlar";if(e.value<0)var i=0;else var i=e.value;for(var t=i+1;t<10;t++)this.elements.push(t);break;case Set.GREATER_THAN_DIGIT_ODD:this.definition=""+this.getValueStr(e.value)+" büyük tek rakamlar";if(e.value<0)var i=0;else var i=e.value;for(var t=i+1;t<10;t++)t%2==1&&this.elements.push(t);break;case Set.GREATER_THAN_DIGIT_EVEN:this.definition=""+this.getValueStr(e.value)+" büyük çift rakamlar";if(e.value<0)var i=0;else var i=e.value;for(var t=i+1;t<10;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_DIGIT:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük rakamlar";for(var t=e.value1+1;t<e.value2;t++)this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük tek rakamlar";for(var t=e.value1+1;t<e.value2;t++)t%2==1&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük çift rakamlar";for(var t=e.value1+1;t<e.value2;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_LETTER:this.definition=""+this.getValueStr(e.value,2)+" önce gelen harfler";var s=0,o=Set.turkishLetters.indexOf(e.value);for(var t=s;t<o;t++)this.elements.push(Set.turkishLetters[t]);break;case Set.GREATER_THAN_LETTER:this.definition=""+this.getValueStr(e.value,2)+" sonra gelen harfler";var s=Set.turkishLetters.indexOf(e.value)+1,o=29;for(var t=s;t<o;t++)this.elements.push(Set.turkishLetters[t]);break;case Set.SMALLER_THAN_GREATER_THAN_LETTER:this.definition=""+e.value1+" ile "+e.value2+" arasındaki harfler";var s=Set.turkishLetters.indexOf(e.value1)+1,o=Set.turkishLetters.indexOf(e.value2);for(var t=s;t<o;t++)this.elements.push(Set.turkishLetters[t]);break;case Set.WORDS:var u=Util.randomInteger(0,15),a=Set.wordsArray[u];this.definition='"'+a+'" sözcüğündeki harfler';for(var t=0;t<a.length;t++)this.elements.indexOf(a[t])==-1&&this.elements.push(a[t]);break;case Set.SMALLER_THAN_INTEGER:this.definition=""+this.getValueStr(e.value)+" küçük pozitif tam sayılar";for(var t=1;t<e.value;t++)this.elements.push(t)}this.type=e.type},isEqualSet:function(e){if(this.elements.length!=e.elements.length)return!1;var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n==this.elements.length?!0:!1},isSubsetOf:function(e){if(this.elements.length>e.elements.length)return!1;var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n==this.elements.length?!0:!1},isDisjointWith:function(e){var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n==0?!0:!1},isIntersectingWith:function(e){var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n!=0?!0:!1},getIntersection:function(e){var t=[];for(var n=0;n<this.elements.length;n++)for(var r=0;r<e.elements.length;r++)this.elements[n]==e.elements[r]&&t.push(this.elements[n]);t.sort(function(e,t){return e-t});var i=new Set({type:Set.ELEMENTS,elements:t}),s="";return e.type==Set.ELEMENTS?s="'nin":e.type==Set.FACTORS||e.type==Set.MULTIPLIES?s="'nın":s="'ın",i.definition=""+this.definition+" ile "+e.definition+""+s+" kesişimi",i},getUnion:function(e){var t=[],n=[];for(var r=0;r<e.elements.length;r++)n.push(e.elements[r]);for(var i=0;i<this.elements.length;i++)t.push(this.elements[i]);for(var s=0;s<n.length;s++)for(var o=0;o<this.elements.length;o++)if(n[s]==this.elements[o]){n[s]="axxwt";break}for(var u=0;u<n.length;u++)n[u]!="axxwt"&&t.push(n[u]);t.sort(function(e,t){return e-t});var a=new Set({type:Set.ELEMENTS,elements:t}),f="";return e.type==Set.ELEMENTS?f="'nin":e.type==Set.FACTORS||e.type==Set.MULTIPLIES?f="'nın":f="'ın",a.definition=""+this.definition+" ile "+e.definition+""+f+" birleşimi",a},getDifference:function(e){var t=[],n=[],r;for(var i=0;i<this.elements.length;i++)n.push(this.elements[i]);for(var s=0;s<n.length;s++){for(var o=0,r=0;o<e.elements.length;o++)n[s]!=e.elements[o]&&(r+=1);r==e.elements.length&&t.push(n[s])}t.sort(function(e,t){return e-t});var u=new Set({type:Set.ELEMENTS,elements:t}),a="";return e.type==Set.ELEMENTS?a="'nin":e.type==Set.FACTORS||e.type==Set.MULTIPLIES?a="'nın":a="'ın",u.definition=""+this.definition+" ile "+e.definition+""+a+" farkı",u},getSubSets:function(){},getComplement:function(e){return e.getDifference(this)},getDefinitionString:function(e){if(e==undefined)var t="{ "+this.definition+" }";else var t=""+e+" = { "+this.definition+" }";return t},getElementsString:function(e){if(e==undefined)var t="{ ";else var t=""+e+" = { ";for(var n=0;n<this.elements.length-1;n++)t+=""+this.elements[n]+", ";return t+=this.elements[this.elements.length-1]+" }",t},getValueStr:function(e,t){t==undefined&&(t=0);if(t==0){var n="";if(e%90==0)n+=e+"'dan";else if(e%80==0||e%50==0)n+=e+"'den";else if(e%70==0)n+=e+"'ten";else if(e%60==0||e%40==0)n+=e+"'tan";else if(e%30==0)n+=e+"'dan";else if(e%20==0)n+=e+"'den";else if(e%10==0)n+=e+"'dan";else if(e%10==1||e%10==2||e%10==7||e%10==8)n+=e+"'den";else if(e%10==3||e%10==4||e%10==5)n+=e+"'ten";else if(e%10==6||e%10==9)n+=e+"'dan"}else if(t==1){var n="";if(e%90==0||e%60==0)n+=e+"'ın";else if(e%80==0||e%70==0)n+=e+"'in";else if(e%50==0)n+=e+"'nin";else if(e%40==0)n+=e+"'ın";else if(e%30==0)n+=e+"'un";else if(e%20==0)n+=e+"'nin";else if(e%10==0||e%10==9)n+=e+"'un";else if(e%10==8||e%10==1||e%10==5)n+=e+"'in";else if(e%10==7||e%10==2)n+=e+"'nin";else if(e%10==6)n+=e+"'nın";else if(e%10==4||e%10==3)n+=e+"'ün"}else if(t==2){var n="",r=["a","ı","o","u"];r.indexOf(e)==-1?n+=e+"'den":n+=e+"'dan"}return n},getRandomSubset:function(){var e;if(this.type==Set.ELEMENTS){var t=Util.randomInteger(0,5),n=Util.randomInteger(t+1,6);e=new Set({type:Set.ELEMENTS,elements:this.elements.slice(t,n)})}else do e=Set.randomGenerator();while(e==undefined||!e.isSubsetOf(this));return e},getRandomDisjointSet:function(){var e;do e=Set.randomGenerator();while(e==undefined||!e.isDisjointWith(this));return e},getRandomIntersectingSet:function(){var e;do e=Set.randomGenerator();while(e==undefined||!e.isIntersectingWith(this));return e},removeVennDiagram:function(){this.vennDiagram.remove()},drawVennDiagram:function(e,t,n){var r=this.elements.length;this.vennDiagram=new Group;var i=new Size(this.elements.length*10*1.8+110,128),s=new Rectangle(t,i),o=Path.Oval(s);o.strokeColor="black",o.fillColor=new RgbColor(1,1,1,0);var u=new Size(i.width/(r+.8),i.height/(r+.8));u.width<44&&(u.width=44),u.height<30&&(u.height=30);var a=[];isAvailable=function(e){var t=e.add(u.width,-u.height),n=e.add(u.width,0),r=e.add(0,-u.height),i=[e,t,n,r];for(var s=0;s<4;s++){if(!o.hitTest(i[s],{fill:!0,stroke:!1,segments:!0,tolerance:-16}))return!1;for(var f=0;f<a.length;f++){var l=new Rectangle(new Point(a[f].x,a[f].y-u.height),u);if(l.contains(i[s]))return!1}}return!0};for(var f=0;f<r;f++){var l,c=0;do l=new Point(Util.randomInteger(t.x/5,(t.x+i.width)/5)*5,Util.randomInteger(t.y/5,(t.y+i.height)/5)*5),c++;while(!isAvailable(l)&&c<r*20);var h=new PointText(l.add(u.width/2-10,-u.height/2+8));h.set_style({fontSize:14}),h.content="."+this.elements[f],this.vennDiagram.addChild(h),a.push(l),c==r*20&&(this.removeVennDiagram(),this.vennDiagram=new Group,a=[],f=-1)}}});Set.ELEMENTS=0,Set.SMALLER_THAN=1,Set.SMALLER_THAN_ODD=2,Set.SMALLER_THAN_EVEN=3,Set.SMALLER_THAN_PRIME=4,Set.SMALLER_THAN_GREATER_THAN=5,Set.SMALLER_THAN_GREATER_THAN_ODD=6,Set.SMALLER_THAN_GREATER_THAN_EVEN=7,Set.SMALLER_THAN_GREATER_THAN_PRIME=8,Set.FACTORS=9,Set.MULTIPLIES=10,Set.DIGIT=11,Set.DIGIT_ODD=12,Set.DIGIT_EVEN=13,Set.SMALLER_THAN_DIGIT=14,Set.SMALLER_THAN_DIGIT_ODD=15,Set.SMALLER_THAN_DIGIT_EVEN=16,Set.GREATER_THAN_DIGIT=17,Set.GREATER_THAN_DIGIT_ODD=18,Set.GREATER_THAN_DIGIT_EVEN=19,Set.SMALLER_THAN_GREATER_THAN_DIGIT=20,Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD=21,Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN=22,Set.SMALLER_THAN_LETTER=23,Set.GREATER_THAN_LETTER=24,Set.SMALLER_THAN_GREATER_THAN_LETTER=25,Set.WORDS=26,Set.SMALLER_THAN_INTEGER=27,Set.turkishLetters=[],Set.turkishLetters[0]="a",Set.turkishLetters[1]="b",Set.turkishLetters[2]="c",Set.turkishLetters[3]="ç",Set.turkishLetters[4]="d",Set.turkishLetters[5]="e",Set.turkishLetters[6]="f",Set.turkishLetters[7]="g",Set.turkishLetters[8]="ğ",Set.turkishLetters[9]="h",Set.turkishLetters[10]="ı",Set.turkishLetters[11]="i",Set.turkishLetters[12]="j",Set.turkishLetters[13]="k",Set.turkishLetters[14]="l",Set.turkishLetters[15]="m",Set.turkishLetters[16]="n",Set.turkishLetters[17]="o",Set.turkishLetters[18]="ö",Set.turkishLetters[19]="p",Set.turkishLetters[20]="r",Set.turkishLetters[21]="s",Set.turkishLetters[22]="ş",Set.turkishLetters[23]="t",Set.turkishLetters[24]="u",Set.turkishLetters[25]="ü",Set.turkishLetters[26]="v",Set.turkishLetters[27]="y",Set.turkishLetters[28]="z",Set.wordsArray=[],Set.wordsArray[0]="elma",Set.wordsArray[1]="matematik",Set.wordsArray[2]="bilgisayar",Set.wordsArray[3]="okul",Set.wordsArray[4]="sınıf",Set.wordsArray[5]="aile",Set.wordsArray[6]="ahlak",Set.wordsArray[7]="küme",Set.wordsArray[8]="öğretmen",Set.wordsArray[9]="gündüz",Set.wordsArray[10]="gece",Set.wordsArray[11]="aynalar",Set.wordsArray[12]="kütüphane",Set.wordsArray[13]="kahverengi",Set.wordsArray[14]="mendil",Set.randomGenerator=function(e,t){if(t==undefined||isNaN(t))t=0;var n,r,i,s,o;e==undefined||isNaN(e)?t==0?n=Util.randomInteger(1,28):n=Util.randomInteger(1,26,[11,12,13,14,15,16,17,18,19,20,21,22,26,27]):n=e;var u;switch(n){case 1:if(t==0)var a=Util.randomInteger(1,7);else var a=t;u=new Set({type:Set.SMALLER_THAN,value:a});break;case 2:if(t==0)var a=Util.randomInteger(2,12);else var a=2*t;u=new Set({type:Set.SMALLER_THAN_ODD,value:a});break;case 3:if(t==0)var a=Util.randomInteger(1,11);else var a=2*t;u=new Set({type:Set.SMALLER_THAN_EVEN,value:a});break;case 4:if(t==0)var a=Util.randomInteger(3,14);else if(t==7)var a=18;else if(t==8)var a=20;else if(t==9)var a=24;else var a=30;u=new Set({type:Set.SMALLER_THAN_PRIME,value:a});break;case 5:if(t==0)var f=Util.randomInteger(1,90),l=Util.randomInteger(f+2,f+8);else var f=Util.randomInteger(1,90),l=f+t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN,value1:f,value2:l});break;case 6:if(t==0)var f=Util.randomInteger(1,80),l=f+Util.randomInteger(4,13);else var f=Util.randomInteger(1,78),l=f+2*t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_ODD,value1:f,value2:l});break;case 7:if(t==0)var f=Util.randomInteger(1,80),l=f+Util.randomInteger(4,13);else var f=Util.randomInteger(1,78),l=f+2*t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_EVEN,value1:f,value2:l});break;case 8:if(t==0){do{var f=Util.randomInteger(1,90),l=Util.randomInteger(1,90),c=[];for(var h=f+1;h<l;h++)Util.isPrimeNumber(h)&&c.push(h)}while(c.length==0||c.length>6)}else do{var f=Util.randomInteger(1,30),l=Util.randomInteger(f+10,100),c=[];for(var h=f+1;h<l;h++)Util.isPrimeNumber(h)&&c.push(h)}while(c.length!=t);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_PRIME,value1:f,value2:l});break;case 9:if(t==0){do{var a=Util.randomInteger(1,97),p=[];p=Util.getFactors(a)}while(p.length>6)}else do{var a=Util.randomInteger(1,99),p=[];p=Util.getFactors(a)}while(p.length!=t);u=new Set({type:Set.FACTORS,value:a});break;case 10:if(t==0)var f=Util.randomInteger(2,17),l=f+f*Util.randomInteger(0,6)+Util.randomInteger(1,f);else var f=Util.randomInteger(2,10),l=f*t+Util.randomInteger(1,f);u=new Set({type:Set.MULTIPLIES,value1:f,value2:l});break;case 11:u=new Set({type:Set.DIGIT});break;case 12:u=new Set({type:Set.DIGIT_ODD});break;case 13:u=new Set({type:Set.DIGIT_EVEN});break;case 14:var a=Util.randomInteger(1,11);u=new Set({type:Set.SMALLER_THAN_DIGIT,value:a});break;case 15:var a=Util.randomInteger(2,11);u=new Set({type:Set.SMALLER_THAN_DIGIT_ODD,value:a});break;case 16:var a=Util.randomInteger(1,11);u=new Set({type:Set.SMALLER_THAN_DIGIT_EVEN,value:a});break;case 17:var a=Util.randomInteger(0,9);u=new Set({type:Set.GREATER_THAN_DIGIT,value:a});break;case 18:var a=Util.randomInteger(0,9);u=new Set({type:Set.GREATER_THAN_DIGIT_ODD,value:a});break;case 19:var a=Util.randomInteger(0,8);u=new Set({type:Set.GREATER_THAN_DIGIT_EVEN,value:a});break;case 20:var f=Util.randomInteger(0,8),l=Util.randomInteger(f+2,10);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT,value1:f,value2:l});break;case 21:var f=Util.randomInteger(0,8),l=Util.randomInteger(f+3,10);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD,value1:f,value2:l});break;case 22:var f=Util.randomInteger(0,8),l=Util.randomInteger(f+3,10);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN,value1:f,value2:l});break;case 23:if(t==0)var a=Util.randomInteger(1,29);else var a=t;u=new Set({type:Set.SMALLER_THAN_LETTER,value:Set.turkishLetters[a]});break;case 24:if(t==0)var a=Util.randomInteger(0,28);else var a=28-t;u=new Set({type:Set.GREATER_THAN_LETTER,value:Set.turkishLetters[a]});break;case 25:if(t==0)var f=Util.randomInteger(0,27),l=Util.randomInteger(f+2,29);else var f=Util.randomInteger(0,18),l=f+t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_LETTER,value1:Set.turkishLetters[f],value2:Set.turkishLetters[l]});break;case 26:u=new Set({type:Set.WORDS});break;case 27:var a=Util.randomInteger(2,8);u=new Set({type:Set.SMALLER_THAN_INTEGER,value:a})}return u},Set.animateDifferenceSets=function(e){var t=Set.drawSets(e.container,e.position,e.sets,e.letters),n=t.set1.position;t.set1.position=t.set1.position.add(-100,0);var r=t.set2.position;return t.set2.position=t.set2.position.add(100,0),t.set1.animate({style:{position:n},duration:1e3,delay:1e3,animationType:"easeInEaseOut",callback:function(){t.set1.children[3].remove()}}),t.set2.animate({style:{position:r},duration:1e3,delay:1e3,animationType:"easeInEaseOut"}),t.set2.children[0].animate({style:{},duration:1e3,delay:2e3,callback:function(){t.set2.animate({style:{opacity:0},duration:1e3,update:function(){},callback:function(){t.set2.remove(),t.intersect.remove(),t.intersectClone.remove(),e.callback&&e.callback(),t.set1.children[1].content=e.letters[0]+" \\ "+e.letters[1]}})}}),t},Set.animateSets=function(e){var t=Set.drawSets(e.container,e.position,e.sets,e.letters),n=t.set1.position;t.set1.position=t.set1.position.add(-100,0);var r=t.set2.position;return t.set2.position=t.set2.position.add(100,0),t.set1.animate({style:{position:n},duration:1e3,delay:1e3,animationType:"easeInEaseOut",callback:function(){}}),t.set2.animate({style:{position:r},duration:1e3,delay:1e3,animationType:"easeInEaseOut",callback:function(){e.callback&&e.callback()}}),t},Set.animateComplementSets=function(e){var t=Set.drawSets(e.container,e.position,e.sets,e.letters),n=Date.now(),r=Date.now(),i=t.set1.position;t.set1.position=t.set1.position.add(-100,0);var s=t.set2.position;return t.set2.position=t.set2.position.add(100,0),t.set1.animate({style:{position:i},duration:1e3,delay:1e3,animationType:"easeInEaseOut",callback:function(){t.set2.children[2].remove()}}),t.set2.animate({style:{position:s},duration:1e3,delay:1e3,animationType:"easeInEaseOut"}),t.set2.children[0].animate({style:{fillColor:new RgbColor(.5,1,.5,0)},duration:1e3,delay:2e3,callback:function(){t.set2.animate({style:{opacity:0},duration:1e3,update:function(){t.intersect.opacity=this.opacity,t.intersectClone.opacity=this.opacity},callback:function(){t.set2.remove(),t.intersect.remove(),t.intersectClone.remove(),e.callback&&e.callback(),t.set1.children[1].content=e.letters[0]+" \\ "+e.letters[1]}})}}),t},Set.animateDisjointSets=function(e){var t=Set.drawSets(e.container,e.position,e.sets,e.letters),n=t.set1.position;t.set1.position=t.set1.position.add(-100,0);var r=t.set2.position;return console.log(n),console.log(r),t.set2.position=t.set2.position.add(-75,0),e.callback&&e.callback(),t},Set.animateEqualSets=function(e){var t=Set.drawSets(e.container,e.position,e.sets,e.letters),n=t.set1.position;t.set1.position=t.set1.position.add(-100,0);var r=t.set2.position;return t.set2.position=t.set2.position.add(100,0),t.set1.animate({style:{position:n},duration:1e3,delay:1e3,animationType:"easeInEaseOut",callback:function(){t.set2.children[2].remove()}}),t.set2.animate({style:{position:r},duration:1e3,delay:1e3,animationType:"easeInEaseOut",callback:function(){t.set2.remove(),e.callback&&e.callback()}}),t},Set.drawSets=function(e,t,n,r){if(!n.length)throw"Usage drawSets: function(container, topLeftPoint, sets, letters)";if(n.length>2)throw"Only one or two sets are supported for drawing sets";if(n.length==1)return n[0].drawVennDiagram(e,t,r[0]);var i=new Group,s=new Group,o=n[0],u=n[1],a=o.getDifference(u),f=u.getDifference(o),l=o.getIntersection(u),c=n[0].elements.length,h=n[1].elements.length;elementsSize1=new Size(32,28),elementsSize2=new Size(32,28),elementsSize3=new Size(32,28);if(a.elements.length==0&&f.elements.length==0){var p=0,d=new Size(c*10*1.8+110,128),v=new Rectangle(t,d),m=new Point(v.x+v.width*.1,v.y+v.height*.1),g=new Size(h*10*1.8+110,128),y=new Rectangle(t.add(p,0),g),b=new Point(y.x+y.width*.82,y.y+y.height*.1),w=new Rectangle;intersectionBoundingBox=v;var E=new Rectangle;elementsSize2=new Size(d.width/(c+.8),d.height/(c+.8)),elementsSize2.width<36&&(elementsSize2.width=36),elementsSize2.height<30&&(elementsSize2.height=30)}else if(a.elements.length==0){var p=-20,d=new Size(c*10*2+72,92),v=new Rectangle(t.add(0,18),d),m=new Point(v.x+v.width*.82,v.y+v.height*.1),g=new Size(h*10*2+160,128),y=new Rectangle(t.add(p,0),g),b=new Point(y.x+y.width*.82,y.y+y.height*.1),w=new Rectangle;intersectionBoundingBox=v;var E=new Rectangle(new Point(y.x+v.width-p,y.y),new Size(y.width-v.width+p,y.height));elementsSize1=new Size(d.width/(c+.8),d.height/(c+.8)),elementsSize1.width<32&&(elementsSize1.width=32),elementsSize1.height<28&&(elementsSize1.height=28)}else if(f.elements.length==0){var d=new Size(c*10*2+110,128),v=new Rectangle(t,d),m=new Point(v.x+v.width*.1,v.y+v.height*.1),g=new Size(h*10*2+72,92),p=d.width-g.width-20,y=new Rectangle(t.add(p,18),g),b=new Point(y.x+y.width*.1,y.y+y.height*.1),w=new Rectangle(new Point(v.x,v.y),new Size(p,v.height));intersectionBoundingBox=y;var E=new Rectangle;elementsSize3=new Size(g.width/(h+.8),g.height/(h+.8)),elementsSize3.width<32&&(elementsSize3.width=32),elementsSize3.height<28&&(elementsSize3.height=28)}else if(l.elements.length==0){var p=(a.elements.length+1)*10*2+110,d=new Size(c*10*1.8+110,128),v=new Rectangle(t,d),m=new Point(v.x+v.width*.1,v.y+v.height*.1),g=new Size(h*10*1.8+110,128),y=new Rectangle(t.add(p,0),g),b=new Point(y.x+y.width*.82,y.y+y.height*.1),w=v;intersectionBoundingBox=new Rectangle;var E=y;elementsSize1=new Size(d.width/(c+.8),d.height/(c+.8)),elementsSize1.width<36&&(elementsSize1.width=36),elementsSize1.height<30&&(elementsSize1.height=30),elementsSize3=new Size(g.width/(h+.8),g.height/(h+.8)),elementsSize3.width<36&&(elementsSize3.width=36),elementsSize3.height<30&&(elementsSize3.height=30)}else{var p=a.elements.length*8*1.8+75,d=new Size(c*10*2+110,128),v=new Rectangle(t,d),m=new Point(v.x+v.width*.1,v.y+v.height*.1),g=new Size(h*10*2+110,128),y=new Rectangle(t.add(p,0),g),b=new Point(y.x+y.width*.82,y.y+y.height*.1),w=new Rectangle(new Point(v.x,v.y),new Size(p,v.height));intersectionBoundingBox=new Rectangle(t.add(p,20),new Size(d.width-p,d.height-40));var E=new Rectangle(new Point(y.x+v.width-p,y.y),new Size(y.width-v.width+p,y.height))}var S=Path.Oval(v);S.strokeColor="black",S.fillColor=new RgbColor(1,1,1,0),i.addChild(S);var x=Path.Oval(y);x.strokeColor="black",x.fillColor=new RgbColor(1,1,1,0),s.addChild(x);var T=new PointText(m);T.set_style({fontSize:14}),T.content=r[0],i.addChild(T),T=new PointText(b),T.set_style({fontSize:14}),T.content=r[1],s.addChild(T);var N=function(e,t,n,r){var i=[],s=new Group;isAvailable=function(e){var t=e.add(n.width,-n.height),s=e.add(n.width,0),o=e.add(0,-n.height),u=[e,t,s,o];for(var a=0;a<4;a++){if(!r(u[a]))return!1;for(var f=0;f<i.length;f++){var l=new Rectangle(new Point(i[f].x,i[f].y-n.height),n);if(l.contains(u[a]))return!1}}return!0};var o=e.length,u=new Point(t.x,t.y),a=t.size;for(var f=0;f<o;f++){var l,c=0;do l=new Point(Util.randomInteger(u.x/5,(u.x+a.width)/5)*5,Util.randomInteger(u.y/5,(u.y+a.height)/5)*5),c++;while(!isAvailable(l)&&c<o*50);console.log("trials: "+c);var h=new PointText(l.add(n.width/2-10,-n.height/2+8));h.set_style({fontSize:14}),h.content="."+e[f],s.addChild(h),i.push(l),c==o*50&&(s.remove(),s=new Group,i=[],f=-1)}return s},C=Date.now(),k=N(a.elements,w,elementsSize1,function(e){return S.hitTest(e)&&!x.hitTest(e)}),L=Date.now();console.log("First part: "+(L-C));var C=Date.now(),A=N(l.elements,intersectionBoundingBox,elementsSize2,function(e){return S.hitTest(e)&&x.hitTest(e)}),L=Date.now();console.log("Second part: "+(L-C));var C=Date.now(),O=N(f.elements,E,elementsSize3,function(e){return!S.hitTest(e)&&x.hitTest(e)}),L=Date.now();console.log("Third part: "+(L-C)),i.addChild(k),i.addChild(A);var M=A.clone();return s.addChild(M),s.addChild(O),{set1:i,set2:s,intersect:A,intersectClone:M}};