function dondurKus(){var e=kusDondurmeSayisi%2==0?-1:1;$("#kus").css("-webkit-transform","scaleX("+e+")").css("-moz-transform","scaleX("+e+")").css("-ms-transform","scaleX("+e+")").css("transform","scaleX("+e+")").css("-o-transform","scaleX("+e+")"),kusDondurmeSayisi++}function dondurBalik(){var e=balikDondurmeSayisi%2==0?-1:1;$("#balik").css("-webkit-transform","scaleX("+e+")").css("-moz-transform","scaleX("+e+")").css("-ms-transform","scaleX("+e+")").css("transform","scaleX("+e+")").css("-o-transform","scaleX("+e+")"),balikDondurmeSayisi++}function soruTip1(){Interaction.randomNumber==0&&Interaction.prepareNextQuestion(),Main.setObjective(Interaction.isaret+Interaction.sayi+"<br/>tam sayısını sayı doğrusunda gösteriniz.")}function soruTipi2(){Main.setObjective("Sayı doğrusunda gösterilen noktanın hangi tam sayıyı gösterdiğini yazınız."),$("#girdi").css("opacity","1"),$("#noktalar"+Interaction.randomNumber).css("opacity","1")}var kusDondurmeSayisi=0,balikDondurmeSayisi=0;