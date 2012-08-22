var Animation = {
    init:function(container){
        Animation.container = container;
         var fontSize=30;
        
        var icerikSolSol=["3<dfn id='nokta'> • </dfn>(5 + 2)","3<dfn id='nokta'> • </dfn>7","21"];
        var icerikSolSag=["3<dfn id='nokta'> • </dfn>5 + 3<dfn id='nokta'> • </dfn>2","15 + 6","21"];
        
        var icerikSagSol=["4<dfn id='nokta'> • </dfn>(7 &#150; 1)","4<dfn id='nokta'> • </dfn>6","24"];
        var icerikSagSag=["4<dfn id='nokta'> • </dfn>7 &#150; 4<dfn id='nokta'> • </dfn>1","28 &#150; 4","24"];
        
        var ornekSol=ornek("Sol",-165,40,fontSize, icerikSolSol, icerikSolSag);
        var ornekSag=ornek("Sag",240,40,fontSize, icerikSagSol, icerikSagSag);
        
        for(var i=0;i<3;i++){
            $("#ornekSolSol"+i).delay(i*2500).animate({opacity:"1"},1000);
            $("#esittirSol"+i).delay(i*2500+750).animate({opacity:"1"},1000);
            $("#ornekSolSag"+i).delay(i*2500+1500).animate({opacity:"1"},1000);
        }
        for(var i=0;i<3;i++){
            $("#ornekSagSol"+i).delay((i+3)*2500).animate({opacity:"1"},1000);
            $("#esittirSag"+i).delay((i+3)*2500+750).animate({opacity:"1"},1000);
            $("#ornekSagSag"+i).delay((i+3)*2500+1500).animate({opacity:"1"},1000);
        }
        
        Main.animationFinished(15000);
        
    }
}