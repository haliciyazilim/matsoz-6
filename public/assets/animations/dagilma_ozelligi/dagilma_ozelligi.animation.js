var Animation={init:function(e){Animation.container=e;var t=30,n=["3<dfn id='nokta'> • </dfn>(5 + 2)","3<dfn id='nokta'> • </dfn>7","21"],r=["(3<dfn id='nokta'> • </dfn>5) + (3<dfn id='nokta'> • </dfn>2)","15 + 6","21"],i=["4<dfn id='nokta'> • </dfn>(7 &#150; 1)","4<dfn id='nokta'> • </dfn>6","24"],s=["(4<dfn id='nokta'> • </dfn>7) &#150; (4<dfn id='nokta'> • </dfn>1)","28 &#150; 4","24"],o=ornek("Sol",-185,40,t,n,r),u=ornek("Sag",210,40,t,i,s);for(var a=0;a<3;a++)$("#ornekSolSol"+a).delay(a*2500).animate({opacity:"1"},1e3),$("#esittirSol"+a).delay(a*2500+750).animate({opacity:"1"},1e3),$("#ornekSolSag"+a).delay(a*2500+1500).animate({opacity:"1"},1e3);for(var a=0;a<3;a++)$("#ornekSagSol"+a).delay((a+3)*2500).animate({opacity:"1"},1e3),$("#esittirSag"+a).delay((a+3)*2500+750).animate({opacity:"1"},1e3),$("#ornekSagSag"+a).delay((a+3)*2500+1500).animate({opacity:"1"},1e3);Main.animationFinished(15e3)}};