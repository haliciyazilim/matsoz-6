function __Styles(){}function semaGoster(){Set.animateSets({container:Interaction.container,position:new Point(130,100),sets:[Interaction.birinciKume.kume,Interaction.ikinciKume.kume],letters:["A","B"]})}var sorgular=function(){this.sorguSecici=Math.floor(Math.random()*4+1),console.log("Soru Seçici: "+this.sorguSecici);switch(this.sorguSecici){case 1:this.kume=new Set({type:Set.SMALLER_THAN,value:6}),this.kume;break;case 2:this.kume=new Set({type:Set.GREATER_THAN_DIGIT_EVEN,value:0}),this.kume;break;case 3:this.kume=new Set({type:Set.DIGIT,value:10}),this.kume;break;case 4:this.kume=new Set({type:Set.SMALLER_THAN_PRIME,value:10}),this.kume}this.uzunluk=function(){return this.kume.elements.length},this.yeniSoru=function(e){return this.soruCesidi=Math.floor(Math.random()*2+1),console.log("Soru Seçici: "+this.soruCesidi),this.isim=e,this.soruCesidi==2?this.kume.getDefinitionString(e):this.kume.getElementsString(e)},this.getKume=function(){return this.kume}},Animation={images:[],init:function(e){Animation.container=e;var t=1e3,n=1e3,r=["/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_01.png","/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_02.png","/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_03.png","/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_04.png","/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_05.png","/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_06.png","/assets/animations/kumelerle_birlesim_islemi/ku_birlesim_07.png"],i=["kume_siir_sol","kume_siir_sag","kume_bebe_sol","kume_bebe_sag","kume_bos_sol","kume_bos_sag","kume_birlesim"];for(var s=0;s<i.length;s++)$(e).append("<img id='"+i[s]+"' class='ortak' src='"+r[s]+"'>"),$("#"+i[s]).css("opacity","0");$(".ortak").css({position:"absolute",top:"0",bottom:"0",margin:"auto",width:"319px",height:"170px"}),$("#"+i[6]).css({width:"492px",left:"0px",right:"0px"}),$("#"+i[0]).css("left","10px"),$("#"+i[1]).css("right","10px"),$("#"+i[2]).css("left","10px"),$("#"+i[3]).css("right","10px"),$("#"+i[4]).css("left","150px"),$("#"+i[5]).css("right","150px"),$("#"+i[0]+", #"+i[1]+", #"+i[2]+", #"+i[3]).delay(t).animate({opacity:"1"},n),$("#"+i[0]+", #"+i[2]).delay(t).animate({left:"150px"},n*3),$("#"+i[1]+", #"+i[3]).delay(t).animate({right:"150px"},n*3),$("#"+i[0]+", #"+i[1]+", #"+i[2]+", #"+i[3]).delay(t).animate({opacity:"0"},n),$("#"+i[4]+", #"+i[5]).delay(t*3+n*4).animate({opacity:"1"},n),$("#"+i[4]+", #"+i[5]).delay(t*2).animate({opacity:"0"},n),$("#"+i[6]).delay(t*5+n*5).animate({opacity:"1"},n),Main.animationFinished(1e4)}},Interaction={getFramework:function(){return"paper"},images:[],init:function(e){Interaction.container=e,Main.setObjective("Yanda verilen kümelerin birleşim kümesini yazınız ve kontrol ediniz."),Interaction.paper={width:$(e).width(),height:$(e).height()},$(e).append("<div id='kumeUst' class='soru'>"),$(e).append("<div id='kumeAlt' class='soru'>"),$(e).append("<div id='cevap' class='soru'>"),$(e).append("<div id='dogruCevap' class='soru'>"),$(".soru").css("width","300px").css("height","30px").css("position","absolute").css("margin","auto").css("font-size","16px"),$("#kumeUst").css("left","10px").css("top","10px"),$("#kumeAlt").css("left","300px").css("top","10px"),$("#cevap").css("left","10px").css("top","60px").css("width","100%"),$("#dogruCevap").css("left","10px").css("top","210px").css("width","100%").css("color","green"),Interaction.appendStatus({bottom:"20px",right:"160px",width:"280px",textAlign:"center"}),Interaction.appendButton({bottom:"10px",right:"40px"}),Interaction.prepareNextQuestion()},nextQuestion:function(e){Main.interactionProject.activeLayer.removeChildren(),Interaction.flushInputs(),Interaction.birinciKume=new sorgular,Interaction.ikinciKume=new sorgular,Interaction.soru1=Interaction.birinciKume.yeniSoru("A"),Interaction.soru2=Interaction.ikinciKume.yeniSoru("B"),Interaction.birlesim=Interaction.birinciKume.getKume().getUnion(Interaction.ikinciKume.getKume()),Interaction.birlesimUzunluk=Interaction.birlesim.elements.length,console.log(Interaction.birlesim.elements),console.log(Interaction.birlesimUzunluk);for(var t=0;t<Interaction.birlesimUzunluk;t++)Interaction.appendInput({width:"26px",height:"24px",textAlign:"center",fontSize:"16px",position:"static"}),Interaction.inputs[t].id="girdi"+t;$("#kumeUst").html(Interaction.soru1),$("#kumeAlt").html(Interaction.soru2),$("#cevap").html(""),$("#cevap").append("<b>A</b> U <b>B = {</b> ");for(var t=0;t<Interaction.birlesimUzunluk;t++)$("#cevap").append(Interaction.inputs[t]),t!=Interaction.birlesimUzunluk-1?$("#cevap").append(" , "):t==Interaction.birlesimUzunluk-1&&$("#cevap").append("<b>}</b>")},preCheck:function(){},isAnswerCorrect:function(e){Interaction.girilenler=new Array;for(var t=0;t<e.length;t++)Interaction.girilenler.push(e[t]);Interaction.girilenler=Interaction.girilenler.sort();var n=0;for(var t=0;t<Interaction.birlesimUzunluk;t++)Interaction.birlesim.elements[t]==Interaction.girilenler[t]&&n++;return n==Interaction.birlesimUzunluk?!0:!1},onCorrectAnswer:function(){semaGoster()},onWrongAnswer:function(){},onFail:function(){Interaction.setStatus("Yanlış cevap, doğrusu yukarıda gösterilmiştir.",!1);for(var e=0;e<Interaction.birlesimUzunluk;e++)$("#girdi"+e).val(Interaction.birlesim.elements[e]);$("input").css("color","green"),semaGoster()}},Set=Class.extend({init:function(e){this.elements=[];switch(e.type){case Set.ELEMENTS:this.definition=""+e.elements.length+" elemanlı küme",this.elements=[];for(var t=0;t<e.elements.length;t++){var n;for(var r=0;r<this.elements.length;r++)e.elements[t]==this.elements[r]&&(n=!0);if(n)continue;this.elements.push(e.elements[t])}this.elements.sort(function(e,t){return e-t});break;case Set.SMALLER_THAN:this.definition=""+this.getValueStr(e.value)+" küçük doğal sayılar";for(var t=0;t<e.value;t++)this.elements.push(t);break;case Set.SMALLER_THAN_ODD:this.definition=""+this.getValueStr(e.value)+" küçük tek doğal sayılar";for(var t=0;t<e.value;t++)t%2==1&&this.elements.push(t);break;case Set.SMALLER_THAN_EVEN:this.definition=""+this.getValueStr(e.value)+" küçük çift doğal sayılar";for(var t=0;t<e.value;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_PRIME:this.definition=""+this.getValueStr(e.value)+" küçük asal sayılar";for(var t=0;t<e.value;t++)Util.isPrimeNumber(t)&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük doğal sayılar";for(var t=e.value1+1;t<e.value2;t++)this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_ODD:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük tek doğal sayılar";for(var t=e.value1+1;t<e.value2;t++)t%2==1&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_EVEN:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük çift doğal sayılar";for(var t=e.value1+1;t<e.value2;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_PRIME:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük asal sayılar";for(var t=e.value1+1;t<e.value2;t++)Util.isPrimeNumber(t)&&this.elements.push(t);break;case Set.FACTORS:this.definition=""+this.getValueStr(e.value,1)+" çarpanları",u=[],u=Util.getFactors(e.value);for(var t=0;t<u.length;t++)this.elements.push(u[t]);break;case Set.MULTIPLIES:this.definition=""+this.getValueStr(e.value1,1)+" "+this.getValueStr(e.value2)+" küçük katları";for(var t=1;t<e.value2/e.value1;t++)this.elements.push(e.value1*t);break;case Set.DIGIT:this.definition="rakamlar";for(var t=0;t<10;t++)this.elements.push(t);this.type=e.type;break;case Set.DIGIT_ODD:this.definition="tek rakamlar";for(var t=0;t<10;t++)t%2==1&&this.elements.push(t);break;case Set.DIGIT_EVEN:this.definition="çift rakamlar";for(var t=0;t<10;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_DIGIT:this.definition=""+this.getValueStr(e.value)+" küçük rakamlar";if(e.value>10)var i=10;else var i=e.value;for(var t=0;t<i;t++)this.elements.push(t);break;case Set.SMALLER_THAN_DIGIT_ODD:this.definition=""+this.getValueStr(e.value)+" küçük tek rakamlar";if(e.value>10)var i=10;else var i=e.value;for(var t=0;t<i;t++)t%2==1&&this.elements.push(t);break;case Set.SMALLER_THAN_DIGIT_EVEN:this.definition=""+this.getValueStr(e.value)+" küçük çift rakamlar";if(e.value>10)var i=10;else var i=e.value;for(var t=0;t<i;t++)t%2==0&&this.elements.push(t);break;case Set.GREATER_THAN_DIGIT:this.definition=""+this.getValueStr(e.value)+" büyük rakamlar";if(e.value<0)var i=0;else var i=e.value;for(var t=i+1;t<10;t++)this.elements.push(t);break;case Set.GREATER_THAN_DIGIT_ODD:this.definition=""+this.getValueStr(e.value)+" büyük tek rakamlar";if(e.value<0)var i=0;else var i=e.value;for(var t=i+1;t<10;t++)t%2==1&&this.elements.push(t);break;case Set.GREATER_THAN_DIGIT_EVEN:this.definition=""+this.getValueStr(e.value)+" büyük çift rakamlar";if(e.value<0)var i=0;else var i=e.value;for(var t=i+1;t<10;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_DIGIT:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük rakamlar";for(var t=e.value1+1;t<e.value2;t++)this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük tek rakamlar";for(var t=e.value1+1;t<e.value2;t++)t%2==1&&this.elements.push(t);break;case Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN:this.definition=""+this.getValueStr(e.value1)+" büyük "+this.getValueStr(e.value2)+" küçük çift rakamlar";for(var t=e.value1+1;t<e.value2;t++)t%2==0&&this.elements.push(t);break;case Set.SMALLER_THAN_LETTER:this.definition=""+this.getValueStr(e.value,2)+" önce gelen harfler";var s=0,o=Set.turkishLetters.indexOf(e.value);for(var t=s;t<o;t++)this.elements.push(Set.turkishLetters[t]);break;case Set.GREATER_THAN_LETTER:this.definition=""+this.getValueStr(e.value,2)+" sonra gelen harfler";var s=Set.turkishLetters.indexOf(e.value)+1,o=29;for(var t=s;t<o;t++)this.elements.push(Set.turkishLetters[t]);break;case Set.SMALLER_THAN_GREATER_THAN_LETTER:this.definition=""+e.value1+" ile "+e.value2+" arasındaki harfler";var s=Set.turkishLetters.indexOf(e.value1)+1,o=Set.turkishLetters.indexOf(e.value2);for(var t=s;t<o;t++)this.elements.push(Set.turkishLetters[t]);break;case Set.WORDS:var u=Util.randomInteger(0,15),a=Set.wordsArray[u];this.definition='"'+a+'" sözcüğündeki harfler';for(var t=0;t<a.length;t++)this.elements.indexOf(a[t])==-1&&this.elements.push(a[t]);break;case Set.SMALLER_THAN_INTEGER:this.definition=""+this.getValueStr(e.value)+" küçük pozitif tam sayılar";for(var t=1;t<e.value;t++)this.elements.push(t)}this.type=e.type},isEqualSet:function(e){if(this.elements.length!=e.elements.length)return!1;var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n==this.elements.length?!0:!1},isSubsetOf:function(e){if(this.elements.length>e.elements.length)return!1;var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n==this.elements.length?!0:!1},isDisjointWith:function(e){var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n==0?!0:!1},isIntersectingWith:function(e){var t=[],n=0;for(var r=0;r<this.elements.length;r++)t[r]=this.elements[r];for(var r=0;r<this.elements.length;r++)for(var i=0;i<e.elements.length;i++)t[r]==e.elements[i]&&(t[r]="axxwt");for(var r=0;r<t.length;r++)t[r]=="axxwt"&&(n+=1);return n!=0?!0:!1},getIntersection:function(e){var t=[];for(var n=0;n<this.elements.length;n++)for(var r=0;r<e.elements.length;r++)this.elements[n]==e.elements[r]&&t.push(this.elements[n]);t.sort(function(e,t){return e-t});var i=new Set({type:Set.ELEMENTS,elements:t}),s="";return e.type==Set.ELEMENTS?s="'nin":e.type==Set.FACTORS||e.type==Set.MULTIPLIES?s="'nın":s="'ın",i.definition=""+this.definition+" ile "+e.definition+""+s+" kesişimi",i},getUnion:function(e){var t=[],n=[];for(var r=0;r<e.elements.length;r++)n.push(e.elements[r]);for(var i=0;i<this.elements.length;i++)t.push(this.elements[i]);for(var s=0;s<n.length;s++)for(var o=0;o<this.elements.length;o++)if(n[s]==this.elements[o]){n[s]="axxwt";break}for(var u=0;u<n.length;u++)n[u]!="axxwt"&&t.push(n[u]);t.sort(function(e,t){return e-t});var a=new Set({type:Set.ELEMENTS,elements:t}),f="";return e.type==Set.ELEMENTS?f="'nin":e.type==Set.FACTORS||e.type==Set.MULTIPLIES?f="'nın":f="'ın",a.definition=""+this.definition+" ile "+e.definition+""+f+" birleşimi",a},getDifference:function(e){var t=[],n=[],r;for(var i=0;i<this.elements.length;i++)n.push(this.elements[i]);for(var s=0;s<n.length;s++){for(var o=0,r=0;o<e.elements.length;o++)n[s]!=e.elements[o]&&(r+=1);r==e.elements.length&&t.push(n[s])}t.sort(function(e,t){return e-t});var u=new Set({type:Set.ELEMENTS,elements:t}),a="";return e.type==Set.ELEMENTS?a="'nin":e.type==Set.FACTORS||e.type==Set.MULTIPLIES?a="'nın":a="'ın",u.definition=""+this.definition+" ile "+e.definition+""+a+" farkı",u},getSubSets:function(){},getComplement:function(e){return e.getDifference(this)},getDefinitionString:function(e){if(e==undefined)var t="{ "+this.definition+" }";else var t=""+e+" = { "+this.definition+" }";return t},getElementsString:function(e){if(e==undefined)var t="{ ";else var t=""+e+" = { ";for(var n=0;n<this.elements.length-1;n++)t+=""+this.elements[n]+", ";return t+=this.elements[this.elements.length-1]+" }",t},getValueStr:function(e,t){t==undefined&&(t=0);if(t==0){var n="";if(e%90==0)n+=e+"'dan";else if(e%80==0||e%50==0)n+=e+"'den";else if(e%70==0)n+=e+"'ten";else if(e%60==0||e%40==0)n+=e+"'tan";else if(e%30==0)n+=e+"'dan";else if(e%20==0)n+=e+"'den";else if(e%10==0)n+=e+"'dan";else if(e%10==1||e%10==2||e%10==7||e%10==8)n+=e+"'den";else if(e%10==3||e%10==4||e%10==5)n+=e+"'ten";else if(e%10==6||e%10==9)n+=e+"'dan"}else if(t==1){var n="";if(e%90==0||e%60==0)n+=e+"'ın";else if(e%80==0||e%70==0)n+=e+"'in";else if(e%50==0)n+=e+"'nin";else if(e%40==0)n+=e+"'ın";else if(e%30==0)n+=e+"'un";else if(e%20==0)n+=e+"'nin";else if(e%10==0||e%10==9)n+=e+"'un";else if(e%10==8||e%10==1||e%10==5)n+=e+"'in";else if(e%10==7||e%10==2)n+=e+"'nin";else if(e%10==6)n+=e+"'nın";else if(e%10==4||e%10==3)n+=e+"'ün"}else if(t==2){var n="",r=["a","ı","o","u"];r.indexOf(e)==-1?n+=e+"'den":n+=e+"'dan"}return n},getRandomSubset:function(){var e;if(this.type==Set.ELEMENTS){var t=Util.randomInteger(0,5),n=Util.randomInteger(t+1,6);e=new Set({type:Set.ELEMENTS,elements:this.elements.slice(t,n)})}else do e=Set.randomGenerator();while(e==undefined||!e.isSubsetOf(this));return e},getRandomDisjointSet:function(){var e;do e=Set.randomGenerator();while(e==undefined||!e.isDisjointWith(this));return e},getRandomIntersectingSet:function(){var e;do e=Set.randomGenerator();while(e==undefined||!e.isIntersectingWith(this));return e},removeVennDiagram:function(){this.vennDiagram.remove()},drawVennDiagram:function(e,t,n){var r=this.elements.length;this.vennDiagram=new Group;var i=new Size(this.elements.length*10*1.8+110,128),s=new Rectangle(t,i),o=new PointText(t.add(5,20));o.content=n,o.set_style({fontSize:13}),this.letter=o;var u=Path.Oval(s);u.strokeColor="black",u.fillColor=new RgbColor(1,1,1,0),this.oval=u;var a=new Size(i.width/(r+.8),i.height/(r+.8));a.width<44&&(a.width=44),a.height<30&&(a.height=30);var f=[],l=function(e){var t=e.add(a.width,-a.height),n=e.add(a.width,0),r=e.add(0,-a.height),i=[e,t,n,r];for(var s=0;s<4;s++){if(!u.hitTest(i[s],{fill:!0,stroke:!1,segments:!0,tolerance:-16}))return!1;for(var o=0;o<f.length;o++){var l=new Rectangle(new Point(f[o].x,f[o].y-a.height),a);if(l.contains(i[s]))return!1}}return!0};for(var c=0;c<r;c++){var h,p=0;do h=new Point(Util.randomInteger(t.x/5,(t.x+i.width)/5)*5,Util.randomInteger(t.y/5,(t.y+i.height)/5)*5),p++;while(!l(h)&&p<r*20);var d=new PointText(h.add(a.width/2-10,-a.height/2+8));d.set_style({fontSize:14}),d.content="."+this.elements[c],this.vennDiagram.addChild(d),f.push(h),p==r*20&&(this.removeVennDiagram(),this.vennDiagram=new Group,f=[],c=-1)}}});Set.ELEMENTS=0,Set.SMALLER_THAN=1,Set.SMALLER_THAN_ODD=2,Set.SMALLER_THAN_EVEN=3,Set.SMALLER_THAN_PRIME=4,Set.SMALLER_THAN_GREATER_THAN=5,Set.SMALLER_THAN_GREATER_THAN_ODD=6,Set.SMALLER_THAN_GREATER_THAN_EVEN=7,Set.SMALLER_THAN_GREATER_THAN_PRIME=8,Set.FACTORS=9,Set.MULTIPLIES=10,Set.DIGIT=11,Set.DIGIT_ODD=12,Set.DIGIT_EVEN=13,Set.SMALLER_THAN_DIGIT=14,Set.SMALLER_THAN_DIGIT_ODD=15,Set.SMALLER_THAN_DIGIT_EVEN=16,Set.GREATER_THAN_DIGIT=17,Set.GREATER_THAN_DIGIT_ODD=18,Set.GREATER_THAN_DIGIT_EVEN=19,Set.SMALLER_THAN_GREATER_THAN_DIGIT=20,Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD=21,Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN=22,Set.SMALLER_THAN_LETTER=23,Set.GREATER_THAN_LETTER=24,Set.SMALLER_THAN_GREATER_THAN_LETTER=25,Set.WORDS=26,Set.SMALLER_THAN_INTEGER=27,Set.turkishLetters=[],Set.turkishLetters[0]="a",Set.turkishLetters[1]="b",Set.turkishLetters[2]="c",Set.turkishLetters[3]="ç",Set.turkishLetters[4]="d",Set.turkishLetters[5]="e",Set.turkishLetters[6]="f",Set.turkishLetters[7]="g",Set.turkishLetters[8]="ğ",Set.turkishLetters[9]="h",Set.turkishLetters[10]="ı",Set.turkishLetters[11]="i",Set.turkishLetters[12]="j",Set.turkishLetters[13]="k",Set.turkishLetters[14]="l",Set.turkishLetters[15]="m",Set.turkishLetters[16]="n",Set.turkishLetters[17]="o",Set.turkishLetters[18]="ö",Set.turkishLetters[19]="p",Set.turkishLetters[20]="r",Set.turkishLetters[21]="s",Set.turkishLetters[22]="ş",Set.turkishLetters[23]="t",Set.turkishLetters[24]="u",Set.turkishLetters[25]="ü",Set.turkishLetters[26]="v",Set.turkishLetters[27]="y",Set.turkishLetters[28]="z",Set.wordsArray=[],Set.wordsArray[0]="elma",Set.wordsArray[1]="matematik",Set.wordsArray[2]="bilgisayar",Set.wordsArray[3]="okul",Set.wordsArray[4]="sınıf",Set.wordsArray[5]="aile",Set.wordsArray[6]="ahlak",Set.wordsArray[7]="küme",Set.wordsArray[8]="öğretmen",Set.wordsArray[9]="gündüz",Set.wordsArray[10]="gece",Set.wordsArray[11]="aynalar",Set.wordsArray[12]="kütüphane",Set.wordsArray[13]="kahverengi",Set.wordsArray[14]="mendil",Set.randomGenerator=function(e,t){if(t==undefined||isNaN(t))t=0;var n,r,i,s,o;e==undefined||isNaN(e)?t==0?n=Util.randomInteger(1,28):n=Util.randomInteger(1,26,[11,12,13,14,15,16,17,18,19,20,21,22,26,27]):n=e;var u;switch(n){case 1:if(t==0)var a=Util.randomInteger(1,7);else var a=t;u=new Set({type:Set.SMALLER_THAN,value:a});break;case 2:if(t==0)var a=Util.randomInteger(2,12);else var a=2*t;u=new Set({type:Set.SMALLER_THAN_ODD,value:a});break;case 3:if(t==0)var a=Util.randomInteger(1,11);else var a=2*t;u=new Set({type:Set.SMALLER_THAN_EVEN,value:a});break;case 4:if(t==0)var a=Util.randomInteger(3,14);else if(t==7)var a=18;else if(t==8)var a=20;else if(t==9)var a=24;else var a=30;u=new Set({type:Set.SMALLER_THAN_PRIME,value:a});break;case 5:if(t==0)var f=Util.randomInteger(1,90),l=Util.randomInteger(f+2,f+8);else var f=Util.randomInteger(1,90),l=f+t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN,value1:f,value2:l});break;case 6:if(t==0)var f=Util.randomInteger(1,80),l=f+Util.randomInteger(4,13);else var f=Util.randomInteger(1,78),l=f+2*t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_ODD,value1:f,value2:l});break;case 7:if(t==0)var f=Util.randomInteger(1,80),l=f+Util.randomInteger(4,13);else var f=Util.randomInteger(1,78),l=f+2*t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_EVEN,value1:f,value2:l});break;case 8:if(t==0){do{var f=Util.randomInteger(1,90),l=Util.randomInteger(1,90),c=[];for(var h=f+1;h<l;h++)Util.isPrimeNumber(h)&&c.push(h)}while(c.length==0||c.length>6)}else do{var f=Util.randomInteger(1,30),l=Util.randomInteger(f+10,100),c=[];for(var h=f+1;h<l;h++)Util.isPrimeNumber(h)&&c.push(h)}while(c.length!=t);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_PRIME,value1:f,value2:l});break;case 9:if(t==0){do{var a=Util.randomInteger(1,97),p=[];p=Util.getFactors(a)}while(p.length>6)}else do{var a=Util.randomInteger(1,99),p=[];p=Util.getFactors(a)}while(p.length!=t);u=new Set({type:Set.FACTORS,value:a});break;case 10:if(t==0)var f=Util.randomInteger(2,17),l=f+f*Util.randomInteger(0,6)+Util.randomInteger(1,f);else var f=Util.randomInteger(2,10),l=f*t+Util.randomInteger(1,f);u=new Set({type:Set.MULTIPLIES,value1:f,value2:l});break;case 11:u=new Set({type:Set.DIGIT});break;case 12:u=new Set({type:Set.DIGIT_ODD});break;case 13:u=new Set({type:Set.DIGIT_EVEN});break;case 14:var a=Util.randomInteger(1,11);u=new Set({type:Set.SMALLER_THAN_DIGIT,value:a});break;case 15:var a=Util.randomInteger(2,11);u=new Set({type:Set.SMALLER_THAN_DIGIT_ODD,value:a});break;case 16:var a=Util.randomInteger(1,11);u=new Set({type:Set.SMALLER_THAN_DIGIT_EVEN,value:a});break;case 17:var a=Util.randomInteger(0,9);u=new Set({type:Set.GREATER_THAN_DIGIT,value:a});break;case 18:var a=Util.randomInteger(0,9);u=new Set({type:Set.GREATER_THAN_DIGIT_ODD,value:a});break;case 19:var a=Util.randomInteger(0,8);u=new Set({type:Set.GREATER_THAN_DIGIT_EVEN,value:a});break;case 20:var f=Util.randomInteger(0,8),l=Util.randomInteger(f+2,10);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT,value1:f,value2:l});break;case 21:var f=Util.randomInteger(0,7),l=Util.randomInteger(f+3,10);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT_ODD,value1:f,value2:l});break;case 22:var f=Util.randomInteger(0,7),l=Util.randomInteger(f+3,10);u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_DIGIT_EVEN,value1:f,value2:l});break;case 23:if(t==0)var a=Util.randomInteger(1,29);else var a=t;u=new Set({type:Set.SMALLER_THAN_LETTER,value:Set.turkishLetters[a]});break;case 24:if(t==0)var a=Util.randomInteger(0,28);else var a=28-t;u=new Set({type:Set.GREATER_THAN_LETTER,value:Set.turkishLetters[a]});break;case 25:if(t==0)var f=Util.randomInteger(0,27),l=Util.randomInteger(f+2,29);else var f=Util.randomInteger(0,18),l=f+t+1;u=new Set({type:Set.SMALLER_THAN_GREATER_THAN_LETTER,value1:Set.turkishLetters[f],value2:Set.turkishLetters[l]});break;case 26:u=new Set({type:Set.WORDS});break;case 27:var a=Util.randomInteger(2,8);u=new Set({type:Set.SMALLER_THAN_INTEGER,value:a})}return u},Set.animateDifferenceSets=function(e){var t=Set.drawSets(e.container,e.position,e.sets,e.letters),n=t.set1.position;t.set1.position=t.set1.position.add(-100,0);var r=t.set2.position;return t.set2.position=t.set2.position.add(100,0),t.set1.animate({style:{position:n},duration:1e3,delay:1e3,animationType:"easeInEaseOut",callback:function(){t.set1.children[3].remove()}}),t.set2.animate({style:{position:r},duration:1e3,delay:1e3,animationType:"easeInEaseOut"}),t.set2.children[0].animate({style:{},duration:1e3,delay:2e3,callback:function(){t.set2.animate({style:{opacity:0},duration:1e3,update:function(){},callback:function(){t.set2.remove(),t.intersect.remove(),t.intersectClone.remove(),e.callback&&e.callback(),t.set1.children[1].content=e.letters[0]+" \\ "+e.letters[1],t.set1.children[1].position=t.set1.children[1].position.add(-20,0)}})}}),t},Set.animateSets=function(e){var t=Set.drawSets(e.container,e.position,e.sets,e.letters),n=t.set1.position;t.set1.position=t.set1.position.add(-100,0);var r=t.set2.position;return t.set2.position=t.set2.position.add(100,0),t.set1.animate({style:{position:n},duration:1e3,delay:1e3,animationType:"easeInEaseOut",callback:function(){}}),t.set2.animate({style:{position:r},duration:1e3,delay:1e3,animationType:"easeInEaseOut",callback:function(){e.callback&&e.callback()}}),t},Set.animateComplementSets=function(e){var t=Set.drawSets(e.container,e.position,e.sets,e.letters),n=t.set1.position;t.set1.position=t.set1.position.add(-100,0);var r=t.set2.position;return t.set2.position=t.set2.position.add(100,0),t.set1.children[0].opacity=0,t.set1.children[0]=(new Path.Rectangle(t.set1.children[0].bounds)).set_style({strokeWidth:1,strokeColor:"#000"}),t.set1.children[1].position=t.set1.children[1].position.add(-15,10),t.set1.children[1].fillColor="#f00",t.set1.animate({style:{position:n},duration:1e3,delay:1e3,animationType:"easeInEaseOut",callback:function(){t.set1.children[1].content=e.letters[1]+"'",t.set1.children[0].insertBelow(t.set1.children[1]),t.set2.children[2].remove()}}),t.set2.animate({style:{position:r},duration:1e3,delay:1e3,animationType:"easeInEaseOut"}),t.set1.children[0].fillColor=new RgbColor(.8,.8,.8,0),t.set1.children[0].animate({style:{fillColor:new RgbColor(.8,.8,.8,1)},duration:1e3,delay:2e3,init:function(){t.set2.children[0].fillColor=new RgbColor(1,1,1,1),t.set2.children[1].remove()},callback:function(){e.callback&&e.callback()}}),t},Set.animateDisjointSets=function(e){var t=Set.drawSets(e.container,e.position,e.sets,e.letters),n=t.set1.position;t.set1.position=t.set1.position.add(-100,0);var r=t.set2.position;return console.log(n),console.log(r),t.set2.position=t.set2.position.add(-75,0),e.callback&&e.callback(),t},Set.animateEqualSets=function(e){var t=Set.drawSets(e.container,e.position,e.sets,e.letters),n=t.set1.position;t.set1.position=t.set1.position.add(-100,0);var r=t.set2.position;return t.set2.position=t.set2.position.add(100,0),t.set1.animate({style:{position:n},duration:1e3,delay:1e3,animationType:"easeInEaseOut",callback:function(){t.set2.children[2].remove()}}),t.set2.animate({style:{position:r},duration:1e3,delay:1e3,animationType:"easeInEaseOut",callback:function(){t.set2.remove(),e.callback&&e.callback()}}),t},Set.drawSets=function(e,t,n,r){if(!n.length)throw"Usage drawSets: function(container, topLeftPoint, sets, letters)";if(n.length>2)throw"Only one or two sets are supported for drawing sets";var i=!1;n.length==1&&(i=!0,n[1]=n[0],r[1]=r[0]);var s=new Group,o=new Group,u=n[0],a=n[1];u.vennDiagram=s,i||(a.vennDiagram=o);var f=u.getDifference(a),l=a.getDifference(u),c=u.getIntersection(a),h=n[0].elements.length,p=n[1].elements.length;elementsSize1=new Size(32,22),elementsSize2=new Size(32,22),elementsSize3=new Size(32,22);if(f.elements.length==0&&l.elements.length==0){var d=0,v=new Size(h*10*1.8+110,128),m=new Rectangle(t,v),g=new Point(m.x+m.width*.1,m.y+m.height*.1),b=new Size(p*10*1.8+110,128),w=new Rectangle(t.add(d,0),b),E=new Point(w.x+w.width*.82,w.y+w.height*.1),S=new Rectangle;intersectionBoundingBox=m;var T=new Rectangle;elementsSize2=new Size(v.width/(h+1.8),v.height/(h+1.8)),elementsSize2.width<32&&(elementsSize2.width=32),elementsSize2.height<22&&(elementsSize2.height=22),console.log(elementsSize2)}else if(f.elements.length==0){var d=-20,v=new Size(h*10*2+72,92),m=new Rectangle(t.add(0,18),v),g=new Point(m.x+m.width*.82,m.y+m.height*.1),b=new Size(p*10*2+160,128),w=new Rectangle(t.add(d,0),b),E=new Point(w.x+w.width*.82,w.y+w.height*.1),S=new Rectangle;intersectionBoundingBox=m;var T=new Rectangle(new Point(w.x+m.width-d,w.y),new Size(w.width-m.width+d,w.height));elementsSize1=new Size(v.width/(h+.8),v.height/(h+.8)),elementsSize1.width<32&&(elementsSize1.width=32),elementsSize1.height<28&&(elementsSize1.height=28)}else if(l.elements.length==0){var v=new Size(h*10*2+110,128),m=new Rectangle(t,v),g=new Point(m.x+m.width*.1,m.y+m.height*.1),b=new Size(p*10*2+72,92),d=v.width-b.width-20,w=new Rectangle(t.add(d,18),b),E=new Point(w.x+w.width*.1,w.y+w.height*.1),S=new Rectangle(new Point(m.x,m.y),new Size(d,m.height));intersectionBoundingBox=w;var T=new Rectangle;elementsSize3=new Size(b.width/(p+.8),b.height/(p+.8)),elementsSize3.width<32&&(elementsSize3.width=32),elementsSize3.height<24&&(elementsSize3.height=24)}else if(c.elements.length==0){var d=(f.elements.length+1)*10*2+110,v=new Size(h*10*1.8+110,128),m=new Rectangle(t,v),g=new Point(m.x+m.width*.1,m.y+m.height*.1),b=new Size(p*10*1.8+110,128),w=new Rectangle(t.add(d,0),b),E=new Point(w.x+w.width*.82,w.y+w.height*.1),S=m;intersectionBoundingBox=new Rectangle;var T=w;elementsSize1=new Size(v.width/(h+1.8),v.height/(h+1.8)),elementsSize1.width<32&&(elementsSize1.width=32),elementsSize1.height<22&&(elementsSize1.height=22),elementsSize3=new Size(b.width/(p+1.8),b.height/(p+1.8)),elementsSize3.width<32&&(elementsSize3.width=32),elementsSize3.height<22&&(elementsSize3.height=22)}else{var d=f.elements.length*8*1.8+75,v=new Size(h*10*2+110,128),m=new Rectangle(t,v),g=new Point(m.x+m.width*.1,m.y+m.height*.1),b=new Size(p*10*2+110,128),w=new Rectangle(t.add(d,0),b),E=new Point(w.x+w.width*.82,w.y+w.height*.1),S=new Rectangle(new Point(m.x,m.y),new Size(d,m.height));intersectionBoundingBox=new Rectangle(t.add(d,0),new Size(v.width-d,v.height-0));var T=new Rectangle(new Point(w.x+m.width-d,w.y),new Size(w.width-m.width+d,w.height))}var N=Path.Oval(m);N.strokeColor="black",N.fillColor=new RgbColor(1,1,1,0),s.addChild(N);var C=Path.Oval(w);C.strokeColor="black",C.fillColor=new RgbColor(1,1,1,0),o.addChild(C),i&&(C.opacity=0);var k=new PointText(g);k.set_style({fontSize:14}),k.content=r[0],s.addChild(k),i||(k=new PointText(E),k.set_style({fontSize:14}),k.content=r[1],o.addChild(k));var L=function(e,t,n,r,i){i==undefined&&(i=12);var s=i,o=[],u=new Group;isAvailable=function(e){var t=e.add(n.width,-n.height),i=e.add(n.width,0),s=e.add(0,-n.height),o=[e,t,i,s];for(var u=0;u<4;u++)if(!r(o[u]))return!1;return!0};var a=e.length,f=new Point(t.x,t.y),l=t.size,c=[];for(var h=0;h<l.height/s;h++)for(var p=0;p<l.width/s;p++){var d=new Point(f.x+p*s,f.y+h*s);isAvailable(d)||c.push(h*Math.ceil(l.width/s)+p)}for(var p=0;p<a;p++){var v=!1;try{var m=Util.randomInteger(0,Math.floor(l.width*l.height/s/s),c)}catch(g){v=!0}var b=new Point(f.x+m%Math.ceil(l.width/s)*s,f.y+Math.floor(s*m/l.width)*s),w=new PointText(b.add(n.width/2-6,-n.height/2+8));w.set_style({fontSize:i}),w.content="."+e[p],u.addChild(w);var E=Math.floor((b.y-f.y)/s);o.push(b);var S=b.x-n.width,T=b.x+n.width,N=b.y-n.height,C=b.y+n.height;S=Math.floor((S-f.x)/s),T=Math.floor((T-f.x)/s),N=Math.floor((N-f.y)/s),C=Math.floor((C-f.y)/s);for(x=S;x<=T;x++)for(y=N;y<=C;y++)x>=0&&y>=0&&c.push(y*Math.ceil(l.width/s)+x)}return u},A=Date.now(),O={fill:!0,stroke:!1,segments:!0,tolerance:-15},M=L(f.elements,S,elementsSize1,function(e){return N.hitTest(e,O)&&!C.hitTest(e,O)}),_=Date.now(),A=Date.now(),D=L(c.elements,intersectionBoundingBox,elementsSize2,function(e){return N.hitTest(e,O)&&C.hitTest(e,O)}),_=Date.now();if(!i)var A=Date.now(),P=L(l.elements,T,elementsSize3,function(e){return!N.hitTest(e,O)&&C.hitTest(e,O)}),_=Date.now();s.addChild(M),s.addChild(D);if(!i){var H=D.clone();return o.addChild(H),o.addChild(P),{set1:s,set2:o,intersect:D,intersectClone:H}}return{set1:s,intersect:D}};