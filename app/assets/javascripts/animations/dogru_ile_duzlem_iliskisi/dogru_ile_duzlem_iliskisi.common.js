dogrular=function(){

    dogruStyle={
        strokeColor:"black",
        strokeWidth:2
    }



    dogrularArray=[];
    onDuvarAY=new Point(100,100)
    onDuvarAX=new Point(100,200)
    onDuvarA=new Path.Line(onDuvarAX,onDuvarAY);
    onDuvarA.style=dogruStyle;
    onDuvarA.class="paralel";
    onDuvarA.name="onDuvarA";
    dogrularArray.push(onDuvarA);

    onDuvarBY=new Point(100,200)
    onDuvarBX=new Point(200,200)
    onDuvarB=new Path.Line(onDuvarBX,onDuvarBY);
    onDuvarB.style=dogruStyle;
    onDuvarB.class="paralel";
    onDuvarB.name="onDuvarB";
    dogrularArray.push(onDuvarB);

    onDuvarCY=new Point(200,100)
    onDuvarCX=new Point(200,200)
    onDuvarC=new Path.Line(onDuvarCX,onDuvarCY);
    onDuvarC.style=dogruStyle;
    onDuvarC.class="paralel";
    onDuvarC.name="onDuvarC";
    dogrularArray.push(onDuvarC);

    onDuvarDY=new Point(100,100)
    onDuvarDX=new Point(200,100)
    onDuvarD=new Path.Line(onDuvarDX,onDuvarDY);
    onDuvarD.style=dogruStyle;
    onDuvarD.class="paralel";
    onDuvarD.name="onDuvarD";
    dogrularArray.push(onDuvarD);


    catiAY=new Point(100,100)
    catiAX=new Point(120,50)
    catiA=new Path.Line(catiAX,catiAY);
    catiA.style=dogruStyle;
    catiA.class="kesisen";
    catiA.name="catiA";
    dogrularArray.push(catiA);

    catiBY=new Point(120,50)
    catiBX=new Point(180,50)
    catiB=new Path.Line(catiBX,catiBY);
    catiB.style=dogruStyle;
    catiB.class="paralel";
    catiB.name="catiB";
    dogrularArray.push(catiB);

    catiCY=new Point(180,50)
    catiCX=new Point(200,100)
    catiC=new Path.Line(catiCX,catiCY);
    catiC.style=dogruStyle;
    catiC.class="kesisen";
    catiC.name="catiC";
    dogrularArray.push(catiC);

    paralel=5;
    kesisen=2;

    tool=new Tool();
    tool.distanceThreshold = 200;
    Interaction.tiklama=onMouseDown;
    tool.onMouseDown=Interaction.tiklama;
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

    function onMouseDown(event) {



        var hitResult = project.hitTest(event.point, hitOptions);


        if(hitResult){
            if(event.item.class=="paralel" || event.item.class=="kesisen"){
                if(event.item.opacity==1){
                    event.item.opacity=0.5;
                    //console.log(hitResult.item);
                    console.log(event.item.name);
                    console.log(event.item.class);
                    Interaction.seciliId.push(event.item)
                    Interaction.seciliClass.push(event.item.class)
                    console.log(Interaction.seciliId);
                    console.log(Interaction.seciliClass);
                }
                else if(event.item.opacity==0.5){
                    event.item.opacity=1;
                    //console.log(hitResult.item);

                    console.log(event.item.name);
                    console.log(event.item.class);


                    var yer=Interaction.seciliId.indexOf(event.item);
                    console.log("seçili id NO: "+yer)
                    Interaction.seciliId.splice(yer,1);
                    Interaction.seciliClass.splice(yer,1);
                    console.log(Interaction.seciliId);
                    console.log(Interaction.seciliClass);
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
                if(event.item.class=="paralel" || event.item.class=="kesisen"){
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