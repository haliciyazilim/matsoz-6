var sil=function(e,t){this.secilen=e,this.parent=t;if($(this.secilen).hasClass("tisortler")==1){$(".tisortler").css("opacity","1");var n=$(".tisortler");for(var r=0;r<n.length;r++){console.log($(this.secilen).get(0).className);if($(this.secilen).get(0).className=="giydirilmis")continue;for(var i=1;i<=5;i++)if(n[r].id=="tisort"+i+"A"&&$(this.secilen).get(0).id+"A"!=n[r].id){console.log("İf: #"+n[r].id+", "+$(this.secilen).get(0).id),$("#"+n[r].id).remove();break}}}else if($(this.secilen).hasClass("pantolonlar")==1){$(".pantolonlar").css("opacity","1");var s=$(".pantolonlar");for(var r=0;r<s.length;r++){if($(this.secilen).get(0).className=="giydirilmis")continue;for(var i=1;i<=4;i++){console.log(s[r].id+", pantolon"+i+"A");if(s[r].id=="pantolon"+i+"A"&&$(this.secilen).get(0).id+"A"!=s[r].id){$("#"+s[r].id).remove();break}}}}else if($(this.secilen).hasClass("ayakkabilar")==1){$(".ayakkabilar").css("opacity","1");var o=$("#ayakkabiCerceve").children();for(var r=0;r<o.length;r++){if($(this.secilen).get(0).className=="giydirilmis")continue;for(var i=1;i<=3;i++){console.log(o[r].id+", ayakkabi"+i+"A");if(o[r].id=="ayakkabi"+i+"A"&&$(this.secilen).get(0).id+"A"!=o[r].id){$("#"+o[r].id).remove();break}}}}},kombinasyonKontrol=function(e){this.grup=e,this.eslesme=0,this.genelSayac=0;if(Interaction.kombinasyonlar.length>0)for(var t=0;t<Interaction.kombinasyonlar.length;t++){for(var n=0;n<this.grup.length;n++)Interaction.kombinasyonlar[t][n]==this.grup[n]&&this.eslesme++;if(this.eslesme==3){Interaction.setStatus("Daha önce bu kıyafet üçlüsünü seçtin.",!1),this.genelSayac=1;break}this.eslesme=0}if(this.genelSayac==0)return Interaction.kombinasyonlar.push(this.grup),Interaction.kombinasyonlar.length==24?(Interaction.setStatus("Tebrikler",!0),Interaction.kombinasyonlar=[],!0):!0};