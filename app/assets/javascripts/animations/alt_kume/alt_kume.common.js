var sorgular = function () {
    this.sorguSecici = Math.floor(Math.random() * 4 + 1);
    console.log("Soru Seçici: " + this.sorguSecici);
    this.sorguSecici=2;
    switch (this.sorguSecici) {
        case 1: // 2'den küçük doğal sayılar
            this.kume = new Set({
                type: Set.SMALLER_THAN,
                value: 2
            });
            break;
        case 2: //10'dan büyük 13'ten küçük doğal sayılar
            this.kume = new Set({
                type: Set.SMALLER_THAN_GREATER_THAN,
                value1: 10,
                value2:13
            });
            break;
        case 3: // Çift rakamlar
            this.kume = new Set({
                type: Set.DIGIT_EVEN,
                value: 10
            });
            break;
        case 4:
            this.kume = new Set({
                type: Set.ELEMENTS,
                elements: 0
            });
            this.kume.definition='"0" rakamından oluşan küme';
            break;

        case 5:
            this.kume = new Set({
                type: Set.ELEMENTS,
                elements:["k","l","m","n"]

            });
            this.kume.definition='"k,l,m,n" harflerinden oluşan küme';
            break;
        case 6:
            this.kume = new Set({
                type: Set.FACTORS,
                value:6

            });
            break;
    }
    this.uzunluk = function () {
        return this.kume.elements.length;
    }
    this.yeniSoru = function (isim) {
        this.soruCesidi = Math.floor(Math.random() * 2 + 1);
        this.soruCesidi=2;
        console.log("Soru Seçici: " + this.soruCesidi);
        this.isim = isim;
        //this.soru=sorgular();
        if (this.soruCesidi == 2) return this.kume.getDefinitionString(isim);
        else return this.kume.getElementsString(isim);
    }
    this.getKume = function () {
        return this.kume;
    }
}