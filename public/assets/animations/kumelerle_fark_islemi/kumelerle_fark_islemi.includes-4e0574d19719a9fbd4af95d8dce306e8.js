function __Styles(){animationVanImagesCSS={position:"absolute",left:"100px",top:"50%",marginTop:"-85px"},animationKumeImagesCSS={position:"absolute",left:"400px",top:"50%",marginTop:"-85px"},setDivCss={position:"absolute",left:"50px",fontSize:"16px",width:"400px",lineHeight:"20px"},answerSetDivCss={position:"absolute",top:"100px",left:"50px",fontSize:"16px"}}var Animation={images:[{id:"van_gol",src:"/assets/animations/kumelerle_fark_islemi/van_gol.png"},{id:"van_kara",src:"/assets/animations/kumelerle_fark_islemi/van_kara.png"},{id:"van_kesisim",src:"/assets/animations/kumelerle_fark_islemi/van_kesisim.png"},{id:"van_son",src:"/assets/animations/kumelerle_fark_islemi/van_son.png"},{id:"kume_a",src:"/assets/animations/kumelerle_fark_islemi/kume_a.png"},{id:"kume_b",src:"/assets/animations/kumelerle_fark_islemi/kume_b.png"},{id:"kume_son",src:"/assets/animations/kumelerle_fark_islemi/kume_son.png"},{id:"kume_kesisim",src:"/assets/animations/kumelerle_fark_islemi/kume_kesisim.png"}],init:function(e){Animation.container=e,Animation.animateVan(),Animation.animateKume(),Main.animationFinished(12e3)},animateVan:function(){var e=[];e[0]=$("#van_gol").get(0),e[1]=$("#van_kara").get(0),e[2]=$("#van_kesisim").get(0),e[3]=$("#van_son").get(0),$(e).each(function(){$(Animation.container).append(this),$(this).css(animationVanImagesCSS).css({opacity:0})}),Animation.animateConcept(e,12e3,0)},animateKume:function(){var e=[];e[0]=$("#kume_a").get(0),e[1]=$("#kume_b").get(0),e[2]=$("#kume_kesisim").get(0),e[3]=$("#kume_son").get(0),$(e).each(function(){$(Animation.container).append(this),$(this).css(animationKumeImagesCSS).css({opacity:0})}),Animation.animateConcept(e,12e3,0)},animateConcept:function(e,t,n){$(e[1]).css({zIndex:10}),$(e[0]).css({zIndex:11,left:parseInt($(e[1]).css("left"),10)-50}),$(e[2]).css({zIndex:12}),$(e[3]).css({zIndex:9}),$(e[1]).delay(n).animate({opacity:1},t/6),$(e[0]).delay(n+t/6).animate({opacity:1},t/6).animate({left:parseInt($(e[1]).css("left"),10)},t/12).delay(t/6).animate({opacity:0},t/6),$(e[2]).delay(n+t*3/6).animate({opacity:1},t/6).delay(t/6).animate({opacity:0},t/6),$(e[1]).delay(t*3/6).animate({opacity:0},t/6),$(e[3]).delay(t*3/6).animate({opacity:1},t/6)}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yanda verilen kümeler için fark kümesini yazınız ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},Interaction.appendButton({bottom:"20px",right:"40px"}),Interaction.appendStatus({bottom:"30px",right:"150px"}),Interaction.set1Div=Util.dom({tag:"div",parent:e,css:setDivCss}),$(Interaction.set1Div).css({top:"10px"}),Interaction.set2Div=Util.dom({tag:"div",parent:e,css:setDivCss}),$(Interaction.set2Div).css({top:"50px"}),Interaction.prepareNextQuestion()},nextQuestion:function(){Interaction.flushInputs(),Interaction._set&&Interaction._set.removeVennDiagram(),$(Interaction.answerSetDiv).remove(),Interaction.generateSets(),Interaction.answerSetDiv=Util.dom({tag:"div",parent:Interaction.container,css:answerSetDivCss}),$(Interaction.answerSetDiv).append("A \\ B = { ");var e=Interaction.set1.getDifference(Interaction.set2).elements.length,t=0;do{t++;var n=Interaction.appendInput({position:"relative",width:"2.5 ex",height:"30px"},!1,e==0);n.maxLength=2,$(Interaction.answerSetDiv).append(t>1?",":"").append(n)}while(t<e);$(Interaction.answerSetDiv).append(" }")},generateSets:function(){var e,t;Interaction.set1=Set.randomGenerator();do Interaction.set2=Interaction.set1.getRandomIntersectingSet();while(Interaction.set1.getDifference(Interaction.set2).elements.length>6);var n=Util.rand01()==1,r=Util.rand01()==1;Interaction.set1.isEqualSet(Interaction.set2)&&(n=!r),n?e=Interaction.set1.getDefinitionString():e=Interaction.set1.getElementsString(),r?t=Interaction.set2.getDefinitionString():t=Interaction.set2.getElementsString(),Interaction.set1Div.innerHTML="A = "+e,Interaction.set2Div.innerHTML="B = "+t},preCheck:function(){},isAnswerCorrect:function(e){typeof e=="string"&&(e==""?e=[]:e=[e]);var t=new Set({type:Set.ELEMENTS,elements:e});return console.log(t),t.isEqualSet(Interaction.set1.getDifference(Interaction.set2))},onCorrectAnswer:function(){},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış, doğru cevabı venn şemasında görebilirsiniz.",!1),Interaction.showCorrectAnswer()},showCorrectAnswer:function(){Interaction.pause(),Interaction._set=Interaction.set1.getDifference(Interaction.set2),Interaction._set.drawVennDiagram(Interaction.container,new Point(100,145),"A\\B"),setTimeout(Interaction.resume,2e3)}},Set=Class.extend({init:function(e){this.elements=[];switch(e.type){case Set.ELEMENTS:this.definition=""+e.elements.length+" elemanlı küme",this.elements=[];for(var t=0;t<e.elements.length;t++){var n;for(var r=0;r<this.elements.length;r++)e.elements[t]==this.elements[r]&&(n=!0);if(n)continue;this.elements.push(e.elements[t])}this.elements.sort(function(e,t){return e-t}),this.type=Set.ELEMENTS;break;case Set.SMALLER_THAN:this.definition=""+this.getValueStr(e.value)+" küçük doğal sayılar";for(var t=0;t<e.value;t++)this.elements.push(t);this.type=Set.SMALLER_THAN;break;case Set.SMALLER_THAN_ODD:this.definition=""+this.getValueStr(e.value)+" küçük tek doğal sayılar";for(var t=0;t<e.value;t++)t%2==1&&this.elements.push(t);this.type=Set.SMALLER_THAN_ODD;break;case Set.SMALLER_THAN_EVEN:this.definition=""+this.getValueStr(e.value)+" küçük çift doğal sayılar";for(var t=0;t<e.value;t++)t%2==0&&this.elements.push(t);this.type=Set.SMALLER_THAN_EVEN;break;case Set.SMALLER_THAN_PRIME:this.definition=""+this.getValueStr(e.value)+" küçük asal sayılar";for(var t=0;t<e.value;t++)Util.isPrimeNumber(t)&&this.elements.push(t);this.type=Set.SMALLER_THAN_PRIME;break;case Set.SMALLER_THAN_GREATER_THAN:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük doğal sayılar";for(var t=e.value1+1;t<e.value2;t++)this.elements.push(t);this.type=Set.SMALLER_THAN_GREATER_THAN;break;case Set.SMALLER_THAN_GREATER_THAN_ODD:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük tek doğal sayılar";for(var t=e.value1+1;t<e.value2;t++)t%2==1&&this.elements.push(t);this.type=Set.SMALLER_THAN_GREATER_THAN_ODD;break;case Set.SMALLER_THAN_GREATER_THAN_EVEN:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük çift doğal sayılar";for(var t=e.value1+1;t<e.value2;t++)t%2==0&&this.elements.push(t);this.type=Set.SMALLER_THAN_GREATER_THAN_EVEN;break;case Set.SMALLER_THAN_GREATER_THAN_PRIME:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük asal sayılar";for(var t=e.value1+1;t<e.value2;t++)Util.isPrimeNumber(t)&&this.elements.push(t);this.type=Set.SMALLER_THAN_GREATER_THAN_PRIME;break;case Set.FACTORS:this.definition=""+this.getValueStr(e.value,1)+" çarpanları",a=[],a=Util.getFactors(e.value);for(var t=0;t<a.length;t++)this.elements.push(a[t]);this.type=Set.FACTORS;break;case Set.MULTIPLIES:this.definition=""+this.getValueStr(e.value1,1)+" "+this.getValueStr(e.value2)+" küçük katları";for(var t=1;t<e.value2/e.value1;t++)this.elements.push(e.value1*t);this.type=Set.MULTIPLIES;break;case Set.DIGIT:this.definition="rakamlar";for(var t=0;t<10;t++)this.elements.push(t);this.type=Set.DIGIT;break;case Set.DIGIT_ODD:this.definition="tek rakamlar";for(var t=0;t<10;t++)t%2==1&&this.elements.push(t);this.type=Set.DIGIT_ODD;break;case Set.DIGIT_EVEN:this.definition="çift rakamlar";for(var t=0;t<10;t++)t%2==0&&this.elements.push(t);this.type=Set.DIGIT_EVEN;break;case Set.SMALLER_THAN_DIGIT:this.definition=""+this.getValueStr(e.value)+" küçük rakamlar";if(e.value>10)var i=10;else var i=e.value;for(var t=0;t<i;t++)this.elements.push(t);this.type=Set.SMALLER_THAN_DIGIT;break;case Set.SMALLER_THAN_DIGIT_ODD:this.definition=""+this.getValueStr(e.value)+" küçük tek rakamlar";if(e.value>10)var i=10;else var i=e.value;for(var t=0;t<i;t++)t%2==1&&this.elements.push(t);this.type=Set.SMALLER_THAN_DIGIT_ODD;break;case Set.SMALLER_THAN_DIGIT_EVEN:this.definition=""+this.getValueStr(e.value)+" küçük çift rakamlar";if(e.value>10)var i=10;else var i=e.value;for(var t=0;t<i;t++)t%2==0&&this.elements.push(t);this.type=Set.SMALLER_THAN_DIGIT_EVEN;break;case Set.GREATER_THAN_DIGIT:this.definition=""+this.getValueStr(e.value)+" büyük rakamlar";if(e.value<0)var i=0;else var i=e.value;for(var t=i+1;t<10;t++)this.elements.push(t);this.type=Set.GREATER_THAN_DIGIT;break;case Set.GREATER_THAN_DIGIT_ODD:this.definition=""+this.getValueStr(e.value)+" büyük tek rakamlar";if(e.value<0)var i=0;else var i=e.value;for(var t=i+1;t<10;t++)t%2==1&&this.elements.push(t);this.type=Set.GREATER_THAN_DIGIT_ODD;break;case Set.GREATER_THAN_DIGIT_EVEN:this.definition=""+this.getValueStr(e.value)+" büyük çift rakamlar";if(e.value<0)var i=0;else var i=e.value;for(var t=i+1;t<10;t++)t%2==0&&this.elements.push(t);this.type=Set.GREATER_THAN_DIGIT_EVEN;break;case Set.SMALLER_THAN_GREATER_THAN_DIGIT:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük rakamlar";for(var t=e.value1+1;t<e.value2;t++)this.elements.push(t);this.type=Set.SMALLER_THAN_GREATER_THAN_DIGIT;break;case Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük tek rakamlar";for(var t=e.value1+1;t<e.value2;t++)t%2==1&&this.elements.push(t);this.type=Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD;break;case Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük çift rakamlar";for(var t=e.value1+1;t<e.value2;t++)t%2==0&&this.elements.push(t);this.type=Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN;break;case Set.SMALLER_THAN_LETTER:this.definition=""+this.getValueStr(e.value,2)+" önce gelen harfler";var s=0,o=Set.turkishLetters.indexOf(e.value);for(var t=s;t<o;t++)this.elements.push(Set.turkishLetters[t]);this.type=Set.SMALLER_THAN_LETTER;break;case Set.GREATER_THAN_LETTER:this.definition=""+this.getValueStr(e.value,2)+" sonra gelen harfler";var s=Set.turkishLetters.indexOf(e.value)+1,o=29;for(var t=s;t<o;t++)this.elements.push(Set.turkishLetters[t]);this.type=Set.GREATER_THAN_LETTER;break;case Set.SMALLER_THAN_GREATER_THAN_LETTER:this.definition=""+e.value1+" ile "+e.value2+" arasındaki harfler";var s=Set.turkishLetters.indexOf(e.value1)+1,o=Set.turkishLetters.indexOf(e.value2);for(var t=s;t<o;t++)this.elements.push(Set.turkishLetters[t]);this.type=Set.SMALLER_THAN_GREATER_THAN_LETTER}},isEqualSet:function(e){if(this.elements.length!=e.elements.length)return!1;var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n==this.elements.length?!0:!1},isSubsetOf:function(e){if(this.elements.length>e.elements.length)return!1;var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n==this.elements.length?!0:!1},isDisjointWith:function(e){var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n==0?!0:!1},isIntersectingWith:function(e){var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n!=0?!0:!1},getIntersection:function(e){var t=[];for(var n=0;n<this.elements.length;n++)for(var r=0;r<e.elements.length;r++)this.elements[n]==e.elements[r]&&t.push(this.elements[n]);t.sort(function(e,t){return e-t});var i=new Set({type:Set.ELEMENTS,elements:t}),s="";return e.type==Set.ELEMENTS?s="'nin":e.type==Set.FACTORS||e.type==Set.MULTIPLIES?s="'nın":s="'ın",i.definition=""+this.definition+" ile "+e.definition+""+s+" kesişimi",i},getUnion:function(e){var t=[];for(var n=0;n<this.elements.length;n++)t.push(this.elements[n]);for(var r=0;r<e.elements.length;r++)t.indexOf(e.elements[r])==-1&&t.push(e.elements[r]);t.sort(function(e,t){return e-t});var i=new Set({type:Set.ELEMENTS,elements:t}),s="";return e.type==Set.ELEMENTS?s="'nin":e.type==Set.FACTORS||e.type==Set.MULTIPLIES?s="'nın":s="'ın",i.definition=""+this.definition+" ile "+e.definition+""+s+" birleşimi",i},getDifference:function(e){var t=[];for(var n=0;n<this.elements.length;n++)e.elements.indexOf(this.elements[n])==-1&&t.push(this.elements[n]);t.sort(function(e,t){return e-t});var r=new Set({type:Set.ELEMENTS,elements:t}),i="";return e.type==Set.ELEMENTS?i="'nin":e.type==Set.FACTORS||e.type==Set.MULTIPLIES?i="'nın":i="'ın",r.definition=""+this.definition+" ile "+e.definition+""+i+" farkı",r},getSubSets:function(){},getComplement:function(e){return e.getDifference(this)},getDefinitionString:function(e){if(e==undefined)var t="{ "+this.definition+" }";else var t=""+e+" = { "+this.definition+" }";return t},getElementsString:function(e){if(e==undefined)var t="{ ";else var t=""+e+" = { ";for(var n=0;n<this.elements.length-1;n++)t+=""+this.elements[n]+", ";return t+=this.elements[this.elements.length-1]+" }",t},getValueStr:function(e,t){t==undefined&&(t=0);if(t==0){var n="";if(e%90==0)n+=e+"'dan";else if(e%80==0||e%50==0)n+=e+"'den";else if(e%70==0)n+=e+"'ten";else if(e%60==0||e%40==0)n+=e+"'tan";else if(e%30==0)n+=e+"'dan";else if(e%20==0)n+=e+"'den";else if(e%10==0)n+=e+"'dan";else if(e%10==1||e%10==2||e%10==7||e%10==8)n+=e+"'den";else if(e%10==3||e%10==4||e%10==5)n+=e+"'ten";else if(e%10==6||e%10==9)n+=e+"'dan"}else if(t==1){var n="";if(e%90==0||e%60==0)n+=e+"'ın";else if(e%80==0||e%70==0)n+=e+"'in";else if(e%50==0)n+=e+"'nin";else if(e%40==0)n+=e+"'ın";else if(e%30==0)n+=e+"'un";else if(e%20==0)n+=e+"'nin";else if(e%10==0||e%10==9)n+=e+"'un";else if(e%10==8||e%10==1||e%10==5)n+=e+"'in";else if(e%10==7||e%10==2)n+=e+"'nin";else if(e%10==6)n+=e+"'nın";else if(e%10==4||e%10==3)n+=e+"'ün"}else if(t==2){var n="",r=["a","ı","o","u"];r.indexOf(e)==-1?n+=e+"'den":n+=e+"'dan"}return n},getRandomSubset:function(){var e;if(this.type==Set.ELEMENTS){var t=Util.randomInteger(0,5),n=Util.randomInteger(t+1,6);e=new Set({type:Set.ELEMENTS,elements:this.elements.slice(t,n)})}else do e=Set.randomGenerator();while(e==undefined||!e.isSubsetOf(this));return e},getRandomDisjointSet:function(){var e;do e=Set.randomGenerator();while(e==undefined||!e.isDisjointWith(this));return e},getRandomIntersectingSet:function(){var e;do e=Set.randomGenerator();while(e==undefined||!e.isIntersectingWith(this));return e},removeVennDiagram:function(){$(this.div).remove(),this.vennDiagram.remove()},drawVennDiagram:function(e,t,n){if(this.elements.length<=6){var r=new Size(150,100),i=new Rectangle(t,r);this.vennDiagram=new Path.Oval(i),this.vennDiagram.strokeColor="black",this.div=document.createElement("div"),$(e).append(this.div),$(this.div).append('<div id="vennElements2"><div id="vennLetter2"></div><div id="e12"></div><div id="e22"></div><div id="e32"></div><div id="e42"></div><div id="e52"></div><div id="e62"></div></div>'),$("#vennElements2",this.div).css({position:"absolute",top:t.y+parseInt($(e).css("padding")),left:t.x+parseInt($(e).css("padding")),width:"150px",height:"100px",fontSize:"16px",textAlign:"center",fontWeight:"bold"}),$("#vennLetter2",this.div).css({position:"absolute",top:"0px",left:"0px",width:"18px",height:"18px",fontWeight:"normal"}),$("#vennLetter2",this.div).html(n),$("#e12",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e22",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e32",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e42",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e52",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e62",this.div).css({position:"absolute",width:"24px",height:"20px"});switch(this.elements.length){case 0:break;case 1:$("#e12",this.div).css({top:"42px",left:"62px"});break;case 2:$("#e12",this.div).css({top:"40px",left:"34px"}),$("#e22",this.div).css({top:"40px",left:"96px"});break;case 3:$("#e12",this.div).css({top:"40px",left:"30px"}),$("#e22",this.div).css({top:"15px",left:"67px"}),$("#e32",this.div).css({top:"61px",left:"84px"});break;case 4:$("#e12",this.div).css({top:"22px",left:"34px"}),$("#e22",this.div).css({top:"22px",left:"88px"}),$("#e32",this.div).css({top:"66px",left:"34px"}),$("#e42",this.div).css({top:"66px",left:"88px"});break;case 5:$("#e12",this.div).css({top:"20px",left:"32px"}),$("#e22",this.div).css({top:"20px",left:"90px"}),$("#e32",this.div).css({top:"68px",left:"32px"}),$("#e42",this.div).css({top:"68px",left:"90px"}),$("#e52",this.div).css({top:"42px",left:"62px"});break;case 6:$("#e12",this.div).css({top:"42px",left:"62px"}),$("#e22",this.div).css({top:"12px",left:"70px"}),$("#e32",this.div).css({top:"30px",left:"106px"}),$("#e42",this.div).css({top:"66px",left:"34px"}),$("#e52",this.div).css({top:"18px",left:"24px"}),$("#e62",this.div).css({top:"66px",left:"90px"})}}else{var r=new Size(180,110),i=new Rectangle(t,r);this.vennDiagram=new Path.Oval(i),this.vennDiagram.strokeColor="black",this.div=document.createElement("div"),$(e).append(this.div),$(this.div).append('<div id="vennElements2"><div id="vennLetter2"></div><div id="e12"></div><div id="e22"></div><div id="e32"></div><div id="e42"></div><div id="e52"></div><div id="e62"></div><div id="e72"></div><div id="e82"></div><div id="e92"></div><div id="e102"></div></div>'),$("#vennElements2",this.div).css({position:"absolute",top:t.y+parseInt($(e).css("padding")),left:t.x+parseInt($(e).css("padding")),width:"180px",height:"110px",fontSize:"16px",textAlign:"center",fontWeight:"bold"}),$("#vennLetter2",this.div).css({position:"absolute",top:"0px",left:"0px",width:"18px",height:"18px",fontWeight:"normal"}),$("#vennLetter2",this.div).html(n),$("#e12",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e22",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e32",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e42",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e52",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e62",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e72",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e82",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e92",this.div).css({position:"absolute",width:"24px",height:"20px"}),$("#e102",this.div).css({position:"absolute",width:"24px",height:"20px"});switch(this.elements.length){case 7:$("#e12",this.div).css({top:"48px",left:"76px"}),$("#e22",this.div).css({top:"20px",left:"74px"}),$("#e32",this.div).css({top:"30px",left:"42px"}),$("#e42",this.div).css({top:"80px",left:"76px"}),$("#e52",this.div).css({top:"66px",left:"40px"}),$("#e62",this.div).css({top:"30px",left:"116px"}),$("#e72",this.div).css({top:"64px",left:"120px"});break;case 8:$("#e12",this.div).css({top:"46px",left:"28px"}),$("#e22",this.div).css({top:"16px",left:"78px"}),$("#e32",this.div).css({top:"18px",left:"42px"}),$("#e42",this.div).css({top:"80px",left:"76px"}),$("#e52",this.div).css({top:"74px",left:"36px"}),$("#e62",this.div).css({top:"30px",left:"116px"}),$("#e72",this.div).css({top:"64px",left:"120px"}),$("#e82",this.div).css({top:"46px",left:"76px"});break;case 9:$("#e12",this.div).css({top:"46px",left:"28px"}),$("#e22",this.div).css({top:"16px",left:"76px"}),$("#e32",this.div).css({top:"18px",left:"42px"}),$("#e42",this.div).css({top:"80px",left:"70px"}),$("#e52",this.div).css({top:"74px",left:"36px"}),$("#e62",this.div).css({top:"22px",left:"112px"}),$("#e72",this.div).css({top:"74px",left:"108px"}),$("#e82",this.div).css({top:"46px",left:"78px"}),$("#e92",this.div).css({top:"46px",left:"124px"});break;case 10:$("#e12",this.div).css({top:"46px",left:"64px"}),$("#e22",this.div).css({top:"16px",left:"76px"}),$("#e32",this.div).css({top:"18px",left:"42px"}),$("#e42",this.div).css({top:"80px",left:"70px"}),$("#e52",this.div).css({top:"74px",left:"36px"}),$("#e62",this.div).css({top:"22px",left:"112px"}),$("#e72",this.div).css({top:"72px",left:"106px"}),$("#e82",this.div).css({top:"46px",left:"98px"}),$("#e92",this.div).css({top:"46px",left:"132px"}),$("#e102",this.div).css({top:"44px",left:"24px"})}}for(var s=1;s<=this.elements.length;s++)$("#e"+s+"2",this.div).html("."+this.elements[s-1])},drawIntersectingVennDiagram:function(e,t,n,r,i){}});Set.ELEMENTS=0,Set.SMALLER_THAN=1,Set.SMALLER_THAN_ODD=2,Set.SMALLER_THAN_EVEN=3,Set.SMALLER_THAN_PRIME=4,Set.SMALLER_THAN_GREATER_THAN=5,Set.SMALLER_THAN_GREATER_THAN_ODD=6,Set.SMALLER_THAN_GREATER_THAN_EVEN=7,Set.SMALLER_THAN_GREATER_THAN_PRIME=8,Set.FACTORS=9,Set.MULTIPLIES=10,Set.DIGIT=11,Set.DIGIT_ODD=12,Set.DIGIT_EVEN=13,Set.SMALLER_THAN_DIGIT=14,Set.SMALLER_THAN_DIGIT_ODD=15,Set.SMALLER_THAN_DIGIT_EVEN=16,Set.GREATER_THAN_DIGIT=17,Set.GREATER_THAN_DIGIT_ODD=18,Set.GREATER_THAN_DIGIT_EVEN=19,Set.SMALLER_THAN_GREATER_THAN_DIGIT=20,Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD=21,Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN=22,Set.SMALLER_THAN_LETTER=23,Set.GREATER_THAN_LETTER=24,Set.SMALLER_THAN_GREATER_THAN_LETTER=25,Set.turkishLetters=[],Set.turkishLetters[0]="a",Set.turkishLetters[1]="b",Set.turkishLetters[2]="c",Set.turkishLetters[3]="ç",Set.turkishLetters[4]="d",Set.turkishLetters[5]="e",Set.turkishLetters[6]="f",Set.turkishLetters[7]="g",Set.turkishLetters[8]="ğ",Set.turkishLetters[9]="h",Set.turkishLetters[10]="ı",Set.turkishLetters[11]="i",Set.turkishLetters[12]="j",Set.turkishLetters[13]="k",Set.turkishLetters[14]="l",Set.turkishLetters[15]="m",Set.turkishLetters[16]="n",Set.turkishLetters[17]="o",Set.turkishLetters[18]="ö",Set.turkishLetters[19]="p",Set.turkishLetters[20]="r",Set.turkishLetters[21]="s",Set.turkishLetters[22]="ş",Set.turkishLetters[23]="t",Set.turkishLetters[24]="u",Set.turkishLetters[25]="ü",Set.turkishLetters[26]="v",Set.turkishLetters[27]="y",Set.turkishLetters[28]="z",Set.randomGenerator=function(e,t){if(t==undefined||isNaN(t))t=0;var n,r,i,s,o;e==undefined||isNaN(e)?t==0?n=Util.randomInteger(1,26):n=Util.randomInteger(1,26,[11,12,13,14,15,16,17,18,19,20,21,22]):n=e;var u;switch(n){case 1:if(t==0)var a=Util.randomInteger(1,7);else var a=t;u=new Set({type:Set.SMALLER_THAN,value:a});break;case 2:if(t==0)var a=Util.randomInteger(2,12);else var a=2*t;u=new Set({type:Set.SMALLER_THAN_ODD,value:a});break;case 3:if(t==0)var a=Util.randomInteger(1,11);else var a=2*t;u=new Set({type:Set.SMALLER_THAN_EVEN,value:a});break;case 4:if(t==0)var a=Util.randomInteger(3,14);else if(t==7)var a=18;else if(t==8)var a=20;else if(t==9)var a=24;else var a=30;u=new Set({type:Set.SMALLER_THAN_PRIME,value:a});break;case 5:if(t==0)var f=Util.randomInteger(1,90),l=Util.randomInteger(f+2,f+8);else var f=Util.randomInteger(1,90),l=f+t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN,value1:f,value2:l});break;case 6:if(t==0)var f=Util.randomInteger(1,80),l=f+Util.randomInteger(4,13);else var f=Util.randomInteger(1,78),l=f+2*t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_ODD,value1:f,value2:l});break;case 7:if(t==0)var f=Util.randomInteger(1,80),l=f+Util.randomInteger(4,13);else var f=Util.randomInteger(1,78),l=f+2*t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_EVEN,value1:f,value2:l});break;case 8:if(t==0){do{var f=Util.randomInteger(1,90),l=Util.randomInteger(1,90),c=[];for(var h=f+1;h<l;h++)Util.isPrimeNumber(h)&&c.push(h)}while(c.length==0||c.length>6)}else do{var f=Util.randomInteger(1,30),l=Util.randomInteger(f+10,100),c=[];for(var h=f+1;h<l;h++)Util.isPrimeNumber(h)&&c.push(h)}while(c.length!=t);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_PRIME,value1:f,value2:l});break;case 9:if(t==0){do{var a=Util.randomInteger(1,97),p=[];p=Util.getFactors(a)}while(p.length>6)}else do{var a=Util.randomInteger(1,99),p=[];p=Util.getFactors(a)}while(p.length!=t);u=new Set({type:Set.FACTORS,value:a});break;case 10:if(t==0)var f=Util.randomInteger(2,17),l=f+f*Util.randomInteger(0,6)+Util.randomInteger(1,f);else var f=Util.randomInteger(2,10),l=f*t+Util.randomInteger(1,f);u=new Set({type:Set.MULTIPLIES,value1:f,value2:l});break;case 11:u=new Set({type:Set.DIGIT});break;case 12:u=new Set({type:Set.DIGIT_ODD});break;case 13:u=new Set({type:Set.DIGIT_EVEN});break;case 14:var a=Util.randomInteger(1,11);u=new Set({type:Set.SMALLER_THAN_DIGIT,value:a});break;case 15:var a=Util.randomInteger(2,11);u=new Set({type:Set.SMALLER_THAN_DIGIT_ODD,value:a});break;case 16:var a=Util.randomInteger(1,11);u=new Set({type:Set.SMALLER_THAN_DIGIT_EVEN,value:a});break;case 17:var a=Util.randomInteger(0,9);u=new Set({type:Set.GREATER_THAN_DIGIT,value:a});break;case 18:var a=Util.randomInteger(0,9);u=new Set({type:Set.GREATER_THAN_DIGIT_ODD,value:a});break;case 19:var a=Util.randomInteger(0,8);u=new Set({type:Set.GREATER_THAN_DIGIT_EVEN,value:a});break;case 20:var f=Util.randomInteger(0,8),l=Util.randomInteger(f+2,10);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT,value1:f,value2:l});break;case 21:var f=Util.randomInteger(0,8),l=Util.randomInteger(f+3,10);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD,value1:f,value2:l});break;case 22:var f=Util.randomInteger(0,8),l=Util.randomInteger(f+3,10);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN,value1:f,value2:l});break;case 23:if(t==0)var a=Util.randomInteger(1,29);else var a=t;u=new Set({type:Set.SMALLER_THAN_LETTER,value:Set.turkishLetters[a]});break;case 24:if(t==0)var a=Util.randomInteger(0,28);else var a=28-t;u=new Set({type:Set.GREATER_THAN_LETTER,value:Set.turkishLetters[a]});break;case 25:if(t==0)var f=Util.randomInteger(0,27),l=Util.randomInteger(f+2,29);else var f=Util.randomInteger(0,18),l=f+t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_LETTER,value1:Set.turkishLetters[f],value2:Set.turkishLetters[l]})}return u};