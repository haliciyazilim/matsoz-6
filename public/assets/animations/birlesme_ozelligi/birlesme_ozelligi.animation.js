var Animation = {
    init:function(container){
        Animation.container = container;
         var fontSize=30;
        
        var icerikSolSol=["3<dfn id='nokta'> • </dfn>(5<dfn id='nokta'> • </dfn>2)","3<dfn id='nokta'> • </dfn>10","30"];
        var icerikSolSag=["(3<dfn id='nokta'> • </dfn>5)<dfn id='nokta'> • </dfn>2","15<dfn id='nokta'> • </dfn>2","30"];
        
        var icerikSagSol=["4+(7+1)","4+8","12"];
        var icerikSagSag=["(4+7)+1","11+1","12"];
        
        var ornekSol=ornek("Sol",-20,40,fontSize, icerikSolSol, icerikSolSag);
        var ornekSag=ornek("Sag",340,40,fontSize, icerikSagSol, icerikSagSag);
        
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
;
