function random1(){for(i=0;i<3;i++)Interaction.random.push(Math.floor(Math.random()*19+1))}function random2(){for(i=0;i<3;i++)Interaction.random.push(Math.floor(Math.random()*99+1))}function esitliklerGosterim(){var e=Interaction.isaretSayaci%2==0?Interaction.random[1]*Interaction.random[2]:Interaction.random[1]+Interaction.random[2],t=Interaction.isaretSayaci%2==0?Interaction.random[0]*e:Interaction.random[0]+e,n=[Interaction.random[0]+Interaction.isaret+"("+Interaction.random[1]+Interaction.isaret+Interaction.random[2]+")",Interaction.random[0]+Interaction.isaret+e,t],r=Interaction.isaretSayaci%2==0?Interaction.random[0]*Interaction.random[1]:Interaction.random[0]+Interaction.random[1],i=Interaction.isaretSayaci%2==0?Interaction.random[2]*r:Interaction.random[2]+r,s=["("+Interaction.random[0]+Interaction.isaret+Interaction.random[1]+")"+Interaction.isaret+Interaction.random[2],r+Interaction.isaret+Interaction.random[2],i],o=ornek("Alt",30,80,30,n,s);for(var u=0;u<3;u++)$("#ornekAltSol"+u).delay(u*2500).animate({opacity:"1"},1e3),$("#esittirAlt"+u).delay(u*2500+750).animate({opacity:"1"},1e3),$("#ornekAltSag"+u).delay(u*2500+1500).animate({opacity:"1"},1e3)}function ornek(e,t,n,r,i,s){this.isim=e,this.left=t,this.topDegeri=n,this.fontSize=r,this.icerikSol=i,this.icerikSag=s,this.isim=="Alt"?$(Interaction.container).append("<div id='ornek"+this.isim+"'>"):$(Animation.container).append("<div id='ornek"+this.isim+"'>"),$("#ornek"+this.isim+"").append("<div id='icerikS"+this.isim+"'>");for(var o=0;o<3;o++)$("#ornek"+this.isim).append("<div class='ornekIcerik' id='ornek"+this.isim+"Sol"+o+"'>"),$("#ornek"+this.isim).append("<div class='ornekEsittir' id='esittir"+this.isim+o+"'>"),$("#ornek"+this.isim).append("<div class='ornekIcerik' id='ornek"+this.isim+"Sag"+o+"'>");$("#ornek"+this.isim).css("width","495px").css("height","140px").css("position","absolute").css("left",this.left).css("top",this.topDegeri).css("margin","auto").css("font-size",this.fontSize),$(".ornekIcerik").css("width","220px").css("height","30px").css("float","left").css("margin-bottom","20px"),$(".ornekEsittir").css("width","20px").css("height","30px").css("float","left").css("margin-left","10px").css("margin-right","10px").html("="),$("#nokta").css("line-height","30px");if(this.isim=="Alt")for(var o=0;o<3;o++)$("#ornek"+this.isim+"Sol"+o).html(this.icerikSol[o]).css("text-align","right").css("opacity","0"),$("#ornek"+this.isim+"Sag"+o).html(this.icerikSag[o]).css("opacity","0"),$("#esittir"+this.isim+o).css("opacity","0");else for(var o=0;o<3;o++)$("#ornek"+this.isim+"Sol"+o).html(this.icerikSol[o]).css("text-align","right").css("opacity","0"),$("#ornek"+this.isim+"Sag"+o).html(this.icerikSag[o]).css("opacity","0"),$("#esittir"+this.isim+o).css("opacity","0")};