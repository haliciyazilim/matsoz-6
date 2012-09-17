var Animation={images:[],init:function(e){Animation.container=e;var t=0,n=t+1e3,r=n+2e3,i=r+1500,s=i+1500,o=s+1500,u=o+2e3,a=t+1e3,f=a+2e3,l=f+1500,c=l+1500,h=c+1500,p=h+2e3,d=new AnimationHelper({APoint:new Point(20.5,30.5),BPoint:new Point(100.5,30.5),CPoint:new Point(100.5,150.5),DPoint:new Point(20.5,150.5),EPoint:new Point(20.5,90.5),FPoint:new Point(100.5,90.5),GPoint:new Point(20.5,50.5),HPoint:new Point(100.5,50.5),rectAngle:0}),v=new AnimationHelper({A2Point:new Point(270.5,30.5),B2Point:new Point(350.5,30.5),C2Point:new Point(350.5,150.5),D2Point:new Point(270.5,150.5),E2Point:new Point(270.5,90.5),F2Point:new Point(350.5,90.5),rect2Angle:0});Animation.rectanglePath=new Path,Animation.rectanglePath.moveTo(d.APoint),Animation.rectanglePath.lineTo(d.BPoint),Animation.rectanglePath.lineTo(d.CPoint),Animation.rectanglePath.lineTo(d.DPoint),Animation.rectanglePath.lineTo(d.APoint),Animation.rectanglePath.strokeColor="black",Animation.rectanglePath.opacity=0,Animation.rectangle2Path=new Path,Animation.rectangle2Path.moveTo(v.A2Point),Animation.rectangle2Path.lineTo(v.B2Point),Animation.rectangle2Path.lineTo(v.C2Point),Animation.rectangle2Path.lineTo(v.D2Point),Animation.rectangle2Path.lineTo(v.A2Point),Animation.rectangle2Path.strokeColor="black",Animation.rectangle2Path.opacity=0;var m=new Path.Line(d.EPoint,d.FPoint);m.strokeColor="black",m.opacity=0;var g=new Path.Line(d.GPoint,d.HPoint);g.strokeColor="black",g.opacity=0;var y=new Path.Line(v.E2Point,v.F2Point);y.strokeColor="black",y.opacity=0;var b=new Path.Line(v.A2Point,v.C2Point);b.strokeColor="black",b.opacity=0;var w=new Path,E=new Path,S=new PointText(new Point(d.EPoint.x-10,d.EPoint.y+4));S.justification="center",S.fillColor="black",S.content="A",S.strokeWidth="1px",S.opacity=0;var x=new PointText(new Point(d.FPoint.x+10,d.FPoint.y+4));x.justification="center",x.fillColor="black",x.content="B",x.strokeWidth="1px",x.opacity=0;var T=new PointText(new Point(d.GPoint.x-10,d.GPoint.y+4));T.justification="center",T.fillColor="black",T.content="C",T.strokeWidth="1px",T.opacity=0;var N=new PointText(new Point(d.HPoint.x+10,d.HPoint.y+4));N.justification="center",N.fillColor="black",N.content="D",N.strokeWidth="1px",N.opacity=0;var C=new PointText(new Point(v.E2Point.x-10,v.E2Point.y+4));C.justification="center",C.fillColor="black",C.content="A",C.strokeWidth="1px",C.opacity=0;var k=new PointText(new Point(v.F2Point.x+10,v.F2Point.y+4));k.justification="center",k.fillColor="black",k.content="B",k.strokeWidth="1px",k.opacity=0;var L=new PointText(new Point(d.FPoint.x+30,d.FPoint.y-10));L.justification="left",L.content="AB ve CD paralel",L.strokeWidth="1px",L.opacity=0;var A=new PointText(new Point(d.FPoint.x+30,d.FPoint.y+20));A.justification="left",A.content="[AB] // [CD]",A.strokeWidth="1px",A.opacity=0,Animation.rectanglePath.animate({style:{opacity:1},duration:1e3,delay:n,animationType:"easeInOutQuad"}),Animation.rectangle2Path.animate({style:{opacity:1},duration:1e3,delay:a,animationType:"easeInOutQuad"}),d.animate({style:{APoint:new Point(20.5,150.5),BPoint:new Point(100.5,150.5),rectAngle:Math.PI},duration:1e3,delay:r,update:function(){Animation.rectanglePath&&Animation.rectanglePath.remove(),Animation.rectanglePath=new Path,Animation.rectanglePath.moveTo(d.APoint.add(-10*Math.sin(this.rectAngle),0)),Animation.rectanglePath.lineTo(d.BPoint.add(10*Math.sin(this.rectAngle),0)),Animation.rectanglePath.lineTo(d.FPoint),Animation.rectanglePath.lineTo(d.CPoint),Animation.rectanglePath.lineTo(d.DPoint),Animation.rectanglePath.lineTo(d.EPoint),Animation.rectanglePath.lineTo(d.APoint.add(-10*Math.sin(this.rectAngle),0)),Animation.rectanglePath.strokeColor="black",this.rectAngle>Math.PI*.5&&(m.opacity=1,w&&w.remove(),w=new Path,w.moveTo(d.EPoint),w.lineTo(d.FPoint),w.lineTo(d.BPoint.add(10*Math.sin(this.rectAngle),0)),w.lineTo(d.APoint.add(-10*Math.sin(this.rectAngle),0)),w.lineTo(d.EPoint),w.strokeColor="black",w.fillColor="white",this.rectAngle<Math.PI*.5&&w&&w.remove())},animationType:"easeInEaseOut"}),d.animate({style:{APoint:new Point(20.5,30.5),BPoint:new Point(100.5,30.5),rectAngle:0},duration:1e3,delay:i,update:function(){this.rectAngle<Math.PI/2&&(m.strokeColor="grey",m.dashArray=[2,3]),Animation.rectanglePath&&Animation.rectanglePath.remove(),Animation.rectanglePath=new Path,Animation.rectanglePath.moveTo(d.APoint.add(-10*Math.sin(this.rectAngle),0)),Animation.rectanglePath.lineTo(d.BPoint.add(10*Math.sin(this.rectAngle),0)),Animation.rectanglePath.lineTo(d.FPoint),Animation.rectanglePath.lineTo(d.CPoint),Animation.rectanglePath.lineTo(d.DPoint),Animation.rectanglePath.lineTo(d.EPoint),Animation.rectanglePath.lineTo(d.APoint.add(-10*Math.sin(this.rectAngle),0)),Animation.rectanglePath.strokeColor="black",this.rectAngle>Math.PI*.5&&(w&&w.remove(),w=new Path,w.moveTo(d.EPoint),w.lineTo(d.FPoint),w.lineTo(d.BPoint.add(10*Math.sin(this.rectAngle),0)),w.lineTo(d.APoint.add(-10*Math.sin(this.rectAngle),0)),w.lineTo(d.EPoint),w.strokeColor="black",w.fillColor="white",this.rectAngle<Math.PI*.5&&w&&w.remove()),this.rectAngle<Math.PI*.5&&w&&w.remove()},animationType:"easeInEaseOut",callback:function(){S.opacity=1,x.opacity=1}}),d.animate({style:{APoint:new Point(20.5,70.5),BPoint:new Point(100.5,70.5),rectAngle:Math.PI},duration:1e3,delay:s,update:function(){this.rectAngle>Math.PI/2&&(g.opacity=1),Animation.rectanglePath&&Animation.rectanglePath.remove(),Animation.rectanglePath=new Path,Animation.rectanglePath.moveTo(d.APoint.add(-10*Math.sin(this.rectAngle),0)),Animation.rectanglePath.lineTo(d.BPoint.add(10*Math.sin(this.rectAngle),0)),Animation.rectanglePath.lineTo(d.HPoint),Animation.rectanglePath.lineTo(d.CPoint),Animation.rectanglePath.lineTo(d.DPoint),Animation.rectanglePath.lineTo(d.GPoint),Animation.rectanglePath.lineTo(d.APoint.add(-10*Math.sin(this.rectAngle),0)),Animation.rectanglePath.strokeColor="black",this.rectAngle>Math.PI*.5&&(g.opacity=1,w&&w.remove(),w=new Path,w.moveTo(d.GPoint),w.lineTo(d.HPoint),w.lineTo(d.BPoint.add(10*Math.sin(this.rectAngle),0)),w.lineTo(d.APoint.add(-10*Math.sin(this.rectAngle),0)),w.lineTo(d.GPoint),w.strokeColor="black",w.fillColor="white",this.rectAngle<Math.PI*.5&&w&&w.remove())},animationType:"easeInEaseOut"}),d.animate({style:{APoint:new Point(20.5,30.5),BPoint:new Point(100.5,30.5),rectAngle:0},duration:1e3,delay:o,update:function(){this.rectAngle<Math.PI/2&&(g.strokeColor="grey",g.dashArray=[2,3]),Animation.rectanglePath&&Animation.rectanglePath.remove(),Animation.rectanglePath=new Path,Animation.rectanglePath.moveTo(d.APoint.add(-10*Math.sin(this.rectAngle),0)),Animation.rectanglePath.lineTo(d.BPoint.add(10*Math.sin(this.rectAngle),0)),Animation.rectanglePath.lineTo(d.HPoint),Animation.rectanglePath.lineTo(d.CPoint),Animation.rectanglePath.lineTo(d.DPoint),Animation.rectanglePath.lineTo(d.GPoint),Animation.rectanglePath.lineTo(d.APoint.add(-10*Math.sin(this.rectAngle),0)),Animation.rectanglePath.strokeColor="black",this.rectAngle>Math.PI*.5&&(w&&w.remove(),w=new Path,w.moveTo(d.GPoint),w.lineTo(d.HPoint),w.lineTo(d.BPoint.add(10*Math.sin(this.rectAngle),0)),w.lineTo(d.APoint.add(-10*Math.sin(this.rectAngle),0)),w.lineTo(d.GPoint),w.strokeColor="black",w.fillColor="white",this.rectAngle<Math.PI*.5&&w&&w.remove()),this.rectAngle<Math.PI*.5&&w&&w.remove()},animationType:"easeInEaseOut",callback:function(){T.opacity=1,N.opacity=1}}),L.animate({style:{opacity:1},duration:1e3,delay:u,animationType:"easeInOutQuad"}),A.animate({style:{opacity:1},duration:1e3,delay:u,animationType:"easeInOutQuad"}),v.animate({style:{A2Point:new Point(270.5,150.5),B2Point:new Point(350.5,150.5),rect2Angle:Math.PI},duration:1e3,delay:f,update:function(){Animation.rectangle2Path&&Animation.rectangle2Path.remove(),Animation.rectangle2Path=new Path,Animation.rectangle2Path.moveTo(v.A2Point.add(-10*Math.sin(this.rect2Angle),0)),Animation.rectangle2Path.lineTo(v.B2Point.add(10*Math.sin(this.rect2Angle),0)),Animation.rectangle2Path.lineTo(v.F2Point),Animation.rectangle2Path.lineTo(v.C2Point),Animation.rectangle2Path.lineTo(v.D2Point),Animation.rectangle2Path.lineTo(v.E2Point),Animation.rectangle2Path.lineTo(v.A2Point.add(-10*Math.sin(this.rect2Angle),0)),Animation.rectangle2Path.strokeColor="black",this.rect2Angle>Math.PI*.5&&(y.opacity=1,E&&E.remove(),E=new Path,E.moveTo(v.E2Point),E.lineTo(v.F2Point),E.lineTo(v.B2Point.add(10*Math.sin(this.rect2Angle),0)),E.lineTo(v.A2Point.add(-10*Math.sin(this.rect2Angle),0)),E.lineTo(v.E2Point),E.strokeColor="black",E.fillColor="white",this.rect2Angle<Math.PI*.5&&E&&E.remove())},animationType:"easeInEaseOut"}),v.animate({style:{A2Point:new Point(270.5,30.5),B2Point:new Point(350.5,30.5),rect2Angle:0},duration:1e3,delay:l,update:function(){this.rect2Angle<Math.PI*.5&&(y.strokeColor="grey",y.dashArray=[2,3]),Animation.rectangle2Path&&Animation.rectangle2Path.remove(),Animation.rectangle2Path=new Path,Animation.rectangle2Path.moveTo(v.A2Point.add(-10*Math.sin(this.rect2Angle),0)),Animation.rectangle2Path.lineTo(v.B2Point.add(10*Math.sin(this.rect2Angle),0)),Animation.rectangle2Path.lineTo(v.F2Point),Animation.rectangle2Path.lineTo(v.C2Point),Animation.rectangle2Path.lineTo(v.D2Point),Animation.rectangle2Path.lineTo(v.E2Point),Animation.rectangle2Path.lineTo(v.A2Point.add(-10*Math.sin(this.rect2Angle),0)),Animation.rectangle2Path.strokeColor="black",this.rect2Angle>Math.PI*.5&&(E&&E.remove(),E=new Path,E.moveTo(v.E2Point),E.lineTo(v.F2Point),E.lineTo(v.B2Point.add(10*Math.sin(this.rect2Angle),0)),E.lineTo(v.A2Point.add(-10*Math.sin(this.rect2Angle),0)),E.lineTo(v.E2Point),E.strokeColor="black",E.fillColor="white"),this.rect2Angle<Math.PI*.5&&E&&E.remove()},animationType:"easeInEaseOut",callback:function(){C.opacity=1,k.opacity=1}}),v.animate({style:{B2Point:new Point(230.5,100.5),rect2Angle:Math.PI},duration:1e3,delay:c,update:function(){Animation.rectangle2Path&&Animation.rectangle2Path.remove(),Animation.rectangle2Path=new Path,Animation.rectangle2Path.moveTo(v.A2Point),Animation.rectangle2Path.lineTo(v.B2Point.add(-10*Math.sin(this.rect2Angle),-10*Math.sin(this.rect2Angle))),Animation.rectangle2Path.lineTo(v.C2Point),Animation.rectangle2Path.lineTo(v.D2Point),Animation.rectangle2Path.lineTo(v.A2Point),Animation.rectangle2Path.strokeColor="black",this.rect2Angle>Math.PI*.5&&(b.opacity=1),E&&E.remove(),E=new Path,E.moveTo(v.A2Point),E.lineTo(v.B2Point.add(-10*Math.sin(this.rect2Angle),-10*Math.sin(this.rect2Angle))),E.lineTo(this.C2Point),E.lineTo(this.A2Point),E.strokeColor="black",E.fillColor="white",this.rect2Angle<Math.PI*.5&&E&&E.remove()},animationType:"easeInEaseOut"})}};