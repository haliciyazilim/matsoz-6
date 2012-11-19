dogrular=function(){
    //xxx.class mavi duvarın özelliği

    dogrularArray=[];
    var k="kesişen";
    var p="paralel";
    var pk=dogru;
    //cati
    catiAY=new Point(164,122)
    catiAX=new Point(212,35)
    catiA=new Path.Line(catiAX,catiAY);
    catiA.style=dogruStyle;
    catiA.class=k;
    catiA.cati=pk;
    catiA.sari=k;
    catiA.name="catiA";
    dogrularArray.push(catiA);

    catiBY=new Point(318,35)
    catiBX=new Point(212,35)
    catiB=new Path.Line(catiBX,catiBY);
    catiB.style=dogruStyle;
    catiB.class=p;
    catiB.cati=pk;
    catiB.sari=k;
    catiB.name="catiB";
    dogrularArray.push(catiB);

    catiCY=new Point(305,122)
    catiCX=new Point(318,35)
    catiC=new Path.Line(catiCX,catiCY);
    catiC.style=dogruStyle;
    catiC.class=k;
    catiC.cati=pk;
    catiC.sari=k;
    catiC.name="catiC";
    dogrularArray.push(catiC);

    catiDY=new Point(305,122)
    catiDX=new Point(164,122)
    catiD=new Path.Line(catiDX,catiDY);
    catiD.style=dogruStyle;
    catiD.class=p;
    catiD.cati=pk;
    catiD.sari=k;
    catiD.name="catiD";
    dogrularArray.push(catiD);

    arkaCatiY=new Point(317,35)
    arkaCatiX=new Point(402,98)
    arkaCati=new Path.Line(arkaCatiX,arkaCatiY);
    arkaCati.style=dogruStyle;
    arkaCati.class=k;
    arkaCati.cati=k;
    arkaCati.sari=k;
    arkaCati.name="arkaCati";
    dogrularArray.push(arkaCati);

    // mavi duvarın solu ve altı
    maviDuvarSolY=new Point(170,122)
    maviDuvarSolX=new Point(170,213)
    maviDuvarSol=new Path.Line(maviDuvarSolX,maviDuvarSolY);
    maviDuvarSol.style=dogruStyle;
    maviDuvarSol.class=pk;
    maviDuvarSol.cati=k;
    maviDuvarSol.sari=p;
    maviDuvarSol.name="maviDuvarSol";
    dogrularArray.push(maviDuvarSol);

    maviDuvarSagY=new Point(170,211)
    maviDuvarSagX=new Point(304,211)
    maviDuvarSag=new Path.Line(maviDuvarSagX,maviDuvarSagY);
    maviDuvarSag.style=dogruStyle;
    maviDuvarSag.class=pk;
    maviDuvarSag.cati=p;
    maviDuvarSag.sari=k;
    maviDuvarSag.name="maviDuvarSag";
    dogrularArray.push(maviDuvarSag);




    // agaç
    agacY=new Point(109,235)
    agacX=new Point(109,152)
    agac=new Path.Line(agacX,agacY);
    agac.style=dogruStyle;
    agac.class=p;
    agac.cati=k;
    agac.sari=p;
    agac.name="agac";
    dogrularArray.push(agac);



    //merdiven
    merdivenSolY=new Point(180,139)
    merdivenSolX=new Point(152,229)
    merdivenSol=new Path.Line(merdivenSolX,merdivenSolY);
    merdivenSol.style=dogruStyle;
    merdivenSol.class=k;
    merdivenSol.cati=k;
    merdivenSol.sari=p;
    merdivenSol.name="merdivenSol";
    dogrularArray.push(merdivenSol);

    merdivenSagY=new Point(205,139)
    merdivenSagX=new Point(178,229)
    merdivenSag=new Path.Line(merdivenSagX,merdivenSagY);
    merdivenSag.style=dogruStyle;
    merdivenSag.class=k;
    merdivenSag.cati=k
    merdivenSag.sari=p;
    merdivenSag.name="merdivenSag";
    dogrularArray.push(merdivenSag);


    //basamaklar
    basamak1Y=new Point(176,153)
    basamak1X=new Point(200,153)
    basamak1=new Path.Line(basamak1X,basamak1Y);
    basamak1.style=dogruStyle;
    basamak1.class=p;
    basamak1.cati=p;
    basamak1.sari=k;
    basamak1.name="basamak1";
    dogrularArray.push(basamak1);

    basamak2Y=new Point(170,175)
    basamak2X=new Point(194,175)
    basamak2=new Path.Line(basamak2X,basamak2Y);
    basamak2.style=dogruStyle;
    basamak2.class=p;
    basamak2.cati=p;
    basamak2.sari=k;
    basamak2.name="basamak2";
    dogrularArray.push(basamak2);

    basamak3Y=new Point(162,195)
    basamak3X=new Point(187,195)
    basamak3=new Path.Line(basamak3X,basamak3Y);
    basamak3.style=dogruStyle;
    basamak3.class=p;
    basamak3.cati=p;
    basamak3.sari=k;
    basamak3.name="basamak3";
    dogrularArray.push(basamak3);

    basamak4Y=new Point(156,216)
    basamak4X=new Point(180,216)
    basamak4=new Path.Line(basamak4X,basamak4Y);
    basamak4.style=dogruStyle;
    basamak4.class=p;
    basamak4.cati=p;
    basamak4.sari=k;
    basamak4.name="basamak4";
    dogrularArray.push(basamak4);

    //pencereler
    pencere1AY=new Point(221,142)
    pencere1AX=new Point(249,142)
    pencere1A=new Path.Line(pencere1AX,pencere1AY);
    pencere1A.style=dogruStyle;
    pencere1A.class=pk;
    pencere1A.cati=p;
    pencere1A.sari=k;
    pencere1A.name="pencere1A";
    dogrularArray.push(pencere1A);

    pencere1BY=new Point(247,142)
    pencere1BX=new Point(247,194)
    pencere1B=new Path.Line(pencere1BX,pencere1BY);
    pencere1B.style=dogruStyle;
    pencere1B.class=pk;
    pencere1B.cati=k;
    pencere1B.sari=p;
    pencere1B.name="pencere1B";
    dogrularArray.push(pencere1B);

    pencere1CY=new Point(221,193)
    pencere1CX=new Point(248,193)
    pencere1C=new Path.Line(pencere1CX,pencere1CY);
    pencere1C.style=dogruStyle;
    pencere1C.class=pk;
    pencere1C.name="pencere1C";
    pencere1C.cati=p;
    pencere1C.sari=k;
    dogrularArray.push(pencere1C);

    pencere1DY=new Point(223,142)
    pencere1DX=new Point(223,193)
    pencere1D=new Path.Line(pencere1DX,pencere1DY);
    pencere1D.style=dogruStyle;
    pencere1D.class=pk;
    pencere1D.cati=k;
    pencere1D.sari=p;
    pencere1D.name="pencere1D";
    dogrularArray.push(pencere1D);

    pencere2AY=new Point(260,142)
    pencere2AX=new Point(286,142)
    pencere2A=new Path.Line(pencere2AX,pencere2AY);
    pencere2A.style=dogruStyle;
    pencere2A.class=pk;
    pencere2A.cati=p;
    pencere2A.sari=k;
    pencere2A.name="pencere2A";
    dogrularArray.push(pencere2A);

    pencere2BY=new Point(284,142)
    pencere2BX=new Point(284,192)
    pencere2B=new Path.Line(pencere2BX,pencere2BY);
    pencere2B.style=dogruStyle;
    pencere2B.class=pk;
    pencere2B.cati=k;
    pencere2B.sari=p;
    pencere2B.name="pencere2B";
    dogrularArray.push(pencere2B);

    pencere2CY=new Point(286,192)
    pencere2CX=new Point(260,192)
    pencere2C=new Path.Line(pencere2CX,pencere2CY);
    pencere2C.style=dogruStyle;
    pencere2C.class=pk;
    pencere2C.cati=p;
    pencere2C.sari=k;
    pencere2C.name="pencere2C";
    dogrularArray.push(pencere2C);

    pencere2DY=new Point(261,142)
    pencere2DX=new Point(261,192)
    pencere2D=new Path.Line(pencere2DX,pencere2DY);
    pencere2D.style=dogruStyle;
    pencere2D.class=pk;
    pencere2D.cati=k;
    pencere2D.sari=p;
    pencere2D.name="pencere2D";
    dogrularArray.push(pencere2D);


    pencere3AY=new Point(322,136)
    pencere3AX=new Point(345,130)
    pencere3A=new Path.Line(pencere3AX,pencere3AY);
    pencere3A.style=dogruStyle;
    pencere3A.class=k;
    pencere3A.cati=k;
    pencere3A.sari=pk;
    pencere3A.name="pencere3A";
    dogrularArray.push(pencere3A);

    pencere3BY=new Point(343,130)
    pencere3BX=new Point(343,181)
    pencere3B=new Path.Line(pencere3BX,pencere3BY);
    pencere3B.style=dogruStyle;
    pencere3B.class=p;
    pencere3B.cati=k;
    pencere3B.sari=pk;
    pencere3B.name="pencere3B";
    dogrularArray.push(pencere3B);

    pencere3CY=new Point(345,181)
    pencere3CX=new Point(322,186)
    pencere3C=new Path.Line(pencere3CX,pencere3CY);
    pencere3C.style=dogruStyle;
    pencere3C.class=k;
    pencere3C.cati=k;
    pencere3C.sari=pk;
    pencere3C.name="pencere3C";
    dogrularArray.push(pencere3C);

    pencere3DY=new Point(322,136)
    pencere3DX=new Point(322,187)
    pencere3D=new Path.Line(pencere3DX,pencere3DY);
    pencere3D.style=dogruStyle;
    pencere3D.class="paralel";
    pencere3D.cati=k;
    pencere3D.sari=pk;
    pencere3D.name="pencere3D";
    dogrularArray.push(pencere3D);




    //sarı duvar
    sariDuvarAY=new Point(305,122)
    sariDuvarAX=new Point(304,211)
    sariDuvarA=new Path.Line(sariDuvarAX,sariDuvarAY);
    sariDuvarA.style=dogruStyle;
    sariDuvarA.class=pk;
    sariDuvarA.cati=k;
    sariDuvarA.sari=pk;
    sariDuvarA.name="sariDuvarA";
    dogrularArray.push(sariDuvarA);

    sariDuvarBY=new Point(304,122)
    sariDuvarBX=new Point(394,95)
    sariDuvarB=new Path.Line(sariDuvarBX,sariDuvarBY);
    sariDuvarB.style=dogruStyle;
    sariDuvarB.class=k;
    sariDuvarB.cati=k;
    sariDuvarB.sari=pk;
    sariDuvarB.name="sariDuvarB";
    dogrularArray.push(sariDuvarB);

    sariDuvarCY=new Point(394,95)
    sariDuvarCX=new Point(394,181)
    sariDuvarC=new Path.Line(sariDuvarCX,sariDuvarCY);
    sariDuvarC.style=dogruStyle;
    sariDuvarC.class=p;
    sariDuvarC.cati=k;
    sariDuvarC.sari=pk;
    sariDuvarC.name="sariDuvarC";
    dogrularArray.push(sariDuvarC);

    sariDuvarDY=new Point(304,211)
    sariDuvarDX=new Point(394,181)
    sariDuvarD=new Path.Line(sariDuvarDX,sariDuvarDY);
    sariDuvarD.style=dogruStyle;
    sariDuvarD.class=k;
    sariDuvarD.cati=k;
    sariDuvarD.sari=pk;
    sariDuvarD.name="sariDuvarD";
    dogrularArray.push(sariDuvarD);

    //lamba direği
    lambaY=new Point(377,142);
    lambaX=new Point(377,232);
    lamba=new Path.Line(lambaX,lambaY);
    lamba.style=dogruStyle;
    lamba.class=p;
    lamba.cati=k;
    lamba.sari=p;
    lamba.name="lamba";
    dogrularArray.push(lamba);

    paralel=0;
    kesisen=0;
    ikisi=0;

    switch (soruDuzlem){
        case 0:
            //mavi renkli duvarı
           // zaten class bilgisi içinde
            break;
        case 1:
            //çatısı
            for(i=0; i<dogrularArray.length;i++){
                dogrularArray[i].class=dogrularArray[i].cati;
            }
            break;
        case 2:
            //sarı renkli duvarı
            for(i=0; i<dogrularArray.length;i++){
                dogrularArray[i].class=dogrularArray[i].sari;
            }

            break;
    }

    for(i=0; i<dogrularArray.length;i++){
        if(dogrularArray[i].class=="paralel")
            paralel++;
        if(dogrularArray[i].class=="kesişen")
            kesisen++;

    }


    tool=new Tool();
    tool.distanceThreshold = 200;
    tool.onMouseDown=onMouseDown;
    tool.onMouseUp=onMouseUp;

    if( navigator.platform.indexOf("Win") >-1 || navigator.platform.indexOf("Mac") >-1 || navigator.platform.indexOf("Linux") >-1){
        if( navigator.platform != 'Linux armv6l' && navigator.platform != 'Linux armv7l')
            tool.onMouseMove=onMouseMove;
    }


    var hitOptions = {
        segments: true,
        stroke: true,
        fill: true,
        tolerance: 10

    };

    Interaction.seciliId=[];
    Interaction.seciliClass=[];
    sayac=dogru=="paralel"?paralel:kesisen;
    console.log("SAYAÇ: "+sayac);

    function onMouseDown(event) {



       var hitResult = project.hitTest(event.point, hitOptions);





        if(hitResult){
            console.log("ÇAtı: "+event.item.cati);
            if(event.item.class=="paralel" || event.item.class=="kesişen"){
                if(event.item.strokeWidth==2 & dogru==event.item.class){
                    console.log("IF: "+event.item.name+","+event.item.opacity)
                    //event.item.opacity=0.5;
                    event.item.style=seciliStyle;
                    //console.log(hitResult.item);
                    console.log(event.item.name);
                    console.log(event.item.class);

                    Interaction.seciliId.push(event.item)
                    Interaction.seciliClass.push(event.item.class)
                    console.log(Interaction.seciliId);
                    console.log(Interaction.seciliClass);

                    sayac--;
                    $("#sayac").html(sayac);
                    Interaction.setStatus('',false);

                    if(sayac==0)
                    {
                        Interaction.__checkAnswer();
                    }
                }
                else if(event.item.strokeWidth==4 & dogru==event.item.class){
                    console.log("IF ELSE: "+event.item.name+","+event.item.opacity)
                    //event.item.opacity=1;
                    //console.log(hitResult.item);
                    event.item.style=dogruStyle;
                    console.log(event.item.name);
                    console.log(event.item.class);


                    var yer=Interaction.seciliId.indexOf(event.item);
                    //console.log("seçili id NO: "+yer)
                    Interaction.seciliId.splice(yer,1);
                    Interaction.seciliClass.splice(yer,1);
                    console.log(Interaction.seciliId);
                    console.log(Interaction.seciliClass);
                    sayac++;
                    $("#sayac").html(sayac);
                    Interaction.setStatus('',false);
                }


                else{
                    console.log("yanlış");
                    console.log("ELSE: "+event.item.name+","+event.item.opacity);

                    Interaction.setStatus('Seçtiğiniz doğru parçası yanlış.',false);
                    yanlisSecim(event.item);

                }

            }
        }
    }

    function onMouseUp(){


    }



    function onMouseMove(event) {

        var hitResult = project.hitTest(event.point, hitOptions);

        if (hitResult && hitResult.item){
            if(event.item){
                if(event.item.class=="paralel" || event.item.class=="kesişen"){
                    //hitResult.item.selected = true;
                    console.log(hitResult.item);
                    $(Interaction.container).css("cursor","pointer");
                }
                else{
                    $(Interaction.container).css("cursor","default");
                }

            }
            else{
                $(Interaction.container).css("cursor","default");
            }


        }


    }


}

yanlisSecim=function(sekil){
    bekleme=1000;
    islem=500;
    sekil.strokeColor="red";
    sekil.animate({
        style:{
            strokeColor:new RgbColor(1,0.5,0,0)
        },
        delay:bekleme,
        duration:islem
    });
    $(Interaction.status).delay(bekleme).animate({opacity:0},islem,function(){$(Interaction.status).html("").css("opacity","1")});
}