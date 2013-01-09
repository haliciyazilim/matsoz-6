var getNumericalAxis = function(startPoint, endPoint, piece){

    Interaction.numericalAxis = new Group();

    // numericalAxis
    var arr = new Group();
    var arrow = new Path.OneSidedArrow(new Point(10, 180), new Point(570, 180), 10, 30);
    var arrow2 = new Path.OneSidedArrow(new Point(570, 180), new Point(571, 180), 10, 30);
    arrow.rotate(180);
    arr.addChild(arrow);
    arr.addChild(arrow2);

    var iter = endPoint - startPoint;
    var pieceLength = 500/iter;

    // bigDots
    var bigDots = new Group();
    for(i = 0; i < iter + 1; i++){
        var dot = new Path.Circle(new Point(40+(pieceLength*i), 180), 3);
        dot.fillColor = "black";
        bigDots.addChild(dot);
    }

    Interaction.numericalAxis.addChild(arr);
    Interaction.numericalAxis.addChild(bigDots);

    var pointDiv = document.createElement('div');
    pointDiv.id = 'pointDiv'
    $(Interaction.container).append(pointDiv);
//    $(pointDiv).html('<span id="s0">-12</span> <span id="s1">-11</span> <span id="s2">-10</span>&nbsp; <span id="s3">-9 </span>&nbsp; <span id="s4">-8 </span>&nbsp;&nbsp;' +
//        '<span id="s5">-7</span>&nbsp;&nbsp; <span id="s6">-6 </span>&nbsp;&nbsp; <span id="s7">-5</span>&nbsp;&nbsp; <span id="s8">-4 </span> &nbsp;&nbsp;<span id="s9">-3 </span>&nbsp;&nbsp;&nbsp;' +
//        '<span id="s10">-2</span>&nbsp;&nbsp; <span id="s11">-1 </span>&nbsp;&nbsp;&nbsp; <span id="s12">0</span> &nbsp;&nbsp;&nbsp;<span id="s13">1</span> &nbsp;&nbsp;&nbsp;&nbsp;<span id="s14">2 </span>&nbsp;&nbsp;&nbsp;&nbsp;' +
//        '<span id="s15">3</span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="s16">4</span>&nbsp;&nbsp;&nbsp;&nbsp; <span id="s17">5</span>&nbsp;&nbsp;&nbsp;&nbsp; <span id="s18">6</span>&nbsp;&nbsp;&nbsp; <span id="s19">7</span>&nbsp;&nbsp;&nbsp;&nbsp;' +
//        '<span id="s20">8</span> &nbsp;&nbsp;&nbsp;&nbsp;<span id="s21">9</span> &nbsp;&nbsp;<span id="s22">10</span> &nbsp;&nbsp;<span id="s23">11</span> &nbsp;&nbsp;<span id="s24">12</span>');
    $(pointDiv).css({
        position:'absolute',
        top:'190px',
        left:'28px',
        width:'530px',
        height:'30px',
//        border:'1px solid',
        fontSize:'12px',
        padding:'0px',
        margin:'0px',
        textAlign:'center'
    });
    for(var i = -12; i < 13; i++){
        $(pointDiv).append("<div style='float:left;width:21px;padding:0px;margin:0px;'>"+i+"</div>");

    }
    var d = Interaction.wh1+12;
    var e = Interaction.wh2+12;


    bigDots.children[d].fillColor = "red";
    bigDots.children[e].fillColor = "red";
    $('#s'+d).css("color","red");
    $('#s'+e).css("color","red");
};