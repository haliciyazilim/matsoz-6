var Animation={images:[],init:function(e){Animation.container=e;var t={bisiklet:"/assets/animations/oranti/bisiklet.jpg",ok:"/assets/animations/oranti/capraz_ok.png"},n=["Süre (Saat)",1,2,3,4,"Alınan Yol",5,10,15,""];$(e).append("<img id='bisiklet' src='"+t.bisiklet+"'>"),$("#bisiklet").css({width:"247px",height:"170px",position:"absolute",left:"0px",top:"20px",opacity:0}),$(e).append("<div id='tablo'>");for(var r=0;r<10;r++)$("#tablo").append("<div id='sutun"+r+"' class='sutunlar'>"),$("#sutun"+r).html(n[r]),r!=0&&r!=5&&$("#sutun"+r).css({lineHeight:"40px",textAlign:"center"}),r<5?$("#sutun"+r).css({backgroundColor:"#BFE8EF"}):$("#sutun"+r).css({backgroundColor:"#D9F1F5"});$("#tablo").css({width:"225px",height:"82px",position:"absolute",left:"235px",top:"65px",border:"solid 1px white",borderTop:"none",borderRight:"none",opacity:0}),$(".sutunlar").css({width:"40px",height:"40px",borderRight:"solid white 1px",borderTop:"solid white 1px","float":"left"}),$("#sutun0,#sutun5").css({width:"60px",lineHeight:"18px",fontWeight:"bold"}),$(e).append("<div id='islemKesirUst' class='islemKesirler'>"),$("#islemKesirUst").append("<div class='kesirler'><div class='oPay'>1</div><div class='oPayda'>2</div></div>"),$("#islemKesirUst").append("<div class='esitlik'> = </div>"),$("#islemKesirUst").append("<div class='kesirler'><div class='oPay'>5</div><div class='oPayda'>10</div></div>"),$(e).append("<div id='islemKesirAlt' class='islemKesirler'>"),$("#islemKesirAlt").append("<div class='kesirler'><div class='oPay'>1</div><div class='oPayda'>4</div></div>"),$("#islemKesirAlt").append("<div class='esitlik'> = </div>"),$("#islemKesirAlt").append("<div class='kesirler'><div class='oPay'>5</div><div class='oPayda'>?</div></div>"),$(e).append("<div id='islemEsitlikUst' class='islemEsitlik'><div class='ust' id='ustUst'>1.10 = 5.2</div><div class='alt' id='ustAlt'>10 = 10</div></div>"),$(e).append("<div id='islemEsitlikAlt' class='islemEsitlik'><div class='ust'>1.? = 5.4</div><div class='alt' id='altAlt'>? = 20</div></div>"),$(e).append("<img id='okUst' src='"+t.ok+"'>"),$("#okUst").css({width:"30px",height:"30px",position:"absolute",left:"525px",top:"65px",opacity:0}),$(e).append("<img id='okAlt' src='"+t.ok+"'>"),$("#okAlt").css({width:"30px",height:"30px",position:"absolute",left:"525px",top:"140px",opacity:0}),$(e).append("<div id='ucan'>"),$("#ucan").css({width:"22px",height:"20px",position:"absolute",top:"160px",left:"703px",fontSize:"20px",color:"red",opacity:0}).html(20),$(".islemEsitlik").css({width:"200px",height:"50px",position:"absolute",fontSize:"20px",textAlign:"center"}),$("#islemEsitlikUst").css({left:"590px",top:"40px",opacity:0}),$("#islemEsitlikAlt").css({left:"590px",top:"120px",opacity:0}),$(".ust, .alt").css({"float":"left",width:"100%",marginTop:"10px"}),$("#ustAlt, #altAlt").css({paddingLeft:"6px"}),$(".islemKesirler").css({width:"100px",height:"50px",position:"absolute",fontSize:"20px",textAlign:"center"}),$("#islemKesirUst").css({left:"490px",top:"60px",opacity:0}),$("#islemKesirAlt").css({left:"490px",top:"135px",opacity:0}),$(".kesirler").css({width:"40%",height:"100%","float":"left"}),$(".esitlik").css({width:"20%",height:"100%","float":"left",textAlign:"center",lineHeight:"40px"}),$(".oPay").css({width:"100%",height:"40%"}),$(".oPayda").css({width:"100%",height:"40%",borderTop:"1px solid black"}),$("#bisiklet").animate({opacity:1},1e3),$("#tablo").delay(1e3).animate({opacity:1},1e3),$("#islemKesirUst").delay(2e3).animate({opacity:1},1e3),$("#okUst").delay(3e3).animate({opacity:1},1e3),$("#islemEsitlikUst").delay(4e3).animate({opacity:1},1e3),$("#islemKesirAlt").delay(5e3).animate({opacity:1},1e3),$("#okAlt").delay(6e3).animate({opacity:1},1e3),$("#islemEsitlikAlt").delay(7e3).animate({opacity:1},1e3),$("#ucan").delay(8e3).animate({opacity:1},1e3).animate({top:"118px",left:"430px"},3e3),Main.animationFinished(12e3)}};