/*var sorular={
    // [soru,ilk bağımsız birim,ilk bağımlı birim, ikinci bağımsız brim, ikinci bağımlı birim]
    soru1:["2 dakikada 1 sayfa okuyan Metin 120 sayfalık bir kitabı kaç dakikada okur?",2,1,0,120],
    soru2:["Bir matbaada 10 dakikada 40 kitap basıldığına göre 1 saatte kaç kitap basılır?",10,40,60,0],
    soru3:["Kilosu 2 lira olan domatesten 10 liraya kaç kilo domates alınır?",1,2,0,10],
    soru4:["Günde 20 ton eşya gönderen kargo firması ayda kaç ton eşya gönderir?",1,20,30,0],
    soru5:["3 dakikada 1 çiçek diken bahçıvan 12 çiçeği kaç dakikada diker?",3,1,0,12],
    soru6:["3 dakikada 1 çiçek diken bahçıvan 36 dakikada kaç çiçek diker?",3,1,36,0],
    soru7:["60 km’lik yolu 1 saatte giden bir otomobil 120 km lik yolu kaç saatte gider?",1,60,0,120],
    soru8:["120 km’lik yolu 2 saatte giden bir otomobil 60 km lik yolu kaç saatte gider?",2,120,0,60],
    soru9:["60 km’lik yolu 1 saatte giden bir otomobil 2 saatte kaç km gider?",1,60,2,0],
    soru10:["120 km’lik yolu 2 saatte giden bir otomobil 1 saatte kaç km gider?",2,120,1,0]



}*/
// [soru,ilk bağımsız birim,ilk bağımlı birim, ikinci bağımsız brim, ikinci bağımlı birim,sonuc birimi,donüştürelecek birim, dönüşecek birim, dönüştürme değeri, dönüşecek değerin dizi id'si]
sorular=[["ilkBagimsiz dakikada ilkBagimli sayfa okuyan Metin ikinciBagimli sayfalık bir kitabı kaç dakikada okur?","dakika",2,1,0,120],["Bir matbaada ilkBagimsiz dakikada ilkBagimli kitap basıldığına göre ikinciBagimsiz saatte kaç kitap basılır?","kitap",10,40,1,0,"saat","dakika",60,3],["ilkBagimsiz kilosu ilkBagimli lira olan domatesten ikinciBagimli liraya kaç kilo domates alınır?","kilo",1,2,0,10],["ilkBagimsiz günde ilkBagimli ton eşya gönderen kargo firması ikinciBagimsiz ayda kaç ton eşya gönderir?","ton",1,20,1,0,"ay","gün",30,3],["ilkBagimsiz dakikada ilkBagimli çiçek diken bahçıvan ikinciBagimli çiçeği kaç dakikada diker?","dakika",3,1,0,12],["ilkBagimsiz dakikada ilkBagimli çiçek diken bahçıvan ikinciBagimsiz dakikada kaç çiçek diker?","çiçek",3,1,36,0],["ilkBagimsiz km'lik yolu ilkBagimli saatte giden bir otomobil ikinciBagimsiz km'lik yolu kaç saatte gider?","saat",60,1,120,0],["ilkBagimsiz km'lik yolu ilkBagimli saatte giden bir otomobil ikinciBagimsiz km'lik yolu kaç saatte gider?","saat",120,2,60,0],["ilkBagimsiz km'lik yolu ilkBagimli saatte giden bir otomobil ikinciBagimli saatte kaç km gider?","km",60,1,0,2],["ilkBagimsiz km'lik yolu ilkBagimli saatte giden bir otomobil ikinciBagimli saatte kaç km gider?","km",120,2,0,1]];