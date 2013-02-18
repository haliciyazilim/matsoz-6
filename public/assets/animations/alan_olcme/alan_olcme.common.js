function convertUnits(e,t,n){var r,i;switch(t){case"kilometersquare":r=e*1e6;break;case"hectometersquare":r=e*1e4;break;case"decametersquare":r=e*100;break;case"metersquare":r=e;break;case"decimetersquare":r=e*.01;break;case"centimetersquare":r=e*1e-4;break;case"millimetersquare":r=e*1e-6;break;case"ar":r=e*100;break;case"dekar":r=e*1e3;break;case"hektar":r=e*1e4;break;default:throw"unsupported initial unit type"}switch(n){case"kilometersquare":i=r*1e-6;break;case"hectometersquare":i=r*1e-4;break;case"decametersquare":i=r*.01;break;case"metersquare":i=r;break;case"decimetersquare":i=r*100;break;case"centimetersquare":i=r*1e4;break;case"millimetersquare":i=r*1e6;break;default:throw"unsupported converted unit type"}return i}function generateQuestion(){var e,t,n,r,i,s;n=Util.randomInteger(0,13);switch(n){case 0:s=Util.randomInteger(0,4),i=Util.randomInteger(1,100),i/=Math.pow(10,s),r=Util.randomInteger(1,5),e=questionUnitsArray[n],t=answerUnitsArray[r];break;case 1:s=Util.randomInteger(0,4),i=Util.randomInteger(1,100),i/=Math.pow(10,s),r=Util.randomInteger(0,5,[1]),e=questionUnitsArray[n],t=answerUnitsArray[r];break;case 2:s=Util.randomInteger(0,4),i=Util.randomInteger(1,100),i/=Math.pow(10,s),r=Util.randomInteger(0,6,[2]),e=questionUnitsArray[n],t=answerUnitsArray[r];break;case 3:s=Util.randomInteger(0,4),i=Util.randomInteger(1,100),i/=Math.pow(10,s),r=Util.randomInteger(0,7,[3]),e=questionUnitsArray[n],t=answerUnitsArray[r];break;case 4:i=Util.randomInteger(1,100),r=Util.randomInteger(1,7,[4]),e=questionUnitsArray[n],t=answerUnitsArray[r];break;case 5:i=Util.randomInteger(1,100),r=Util.randomInteger(2,7,[5]),e=questionUnitsArray[n],t=answerUnitsArray[r];break;case 6:i=Util.randomInteger(1,100),r=Util.randomInteger(3,7,[6]),e=questionUnitsArray[n],t=answerUnitsArray[r];break;case 7:i=Util.randomInteger(1,100),r=3,e=questionUnitsArray[n],t=answerUnitsArray[r];break;case 8:i=Util.randomInteger(1,100),r=3,e=questionUnitsArray[n],t=answerUnitsArray[r];break;case 9:i=Util.randomInteger(1,100),r=3,e=questionUnitsArray[n],t=answerUnitsArray[r];break;case 10:i=Util.randomInteger(1,100),r=3,e=questionUnitsArray[0],t=answerUnitsArray[r];break;case 11:i=Util.randomInteger(1,100),r=5,e=questionUnitsArray[3],t=answerUnitsArray[r];break;case 12:i=Util.randomInteger(1,100),r=6,e=questionUnitsArray[5],t=answerUnitsArray[r]}Interaction.question=i,Interaction.questionUnit=e,Interaction.answerUnit=t}function convertInitials(e){var t;switch(e){case"km":t="kilometersquare";break;case"hm":t="hectometersquare";break;case"dam":t="decametersquare";break;case"m":t="metersquare";break;case"dm":t="decimetersquare";break;case"cm":t="centimetersquare";break;case"mm":t="millimetersquare";break;case"a":t="ar";break;case"daa":t="dekar";break;case"ha":t="hektar"}return t}questionUnitsArray=["km","hm","dam","m","dm","cm","mm","a","daa","ha"],answerUnitsArray=["km","hm","dam","m","dm","cm","mm"];