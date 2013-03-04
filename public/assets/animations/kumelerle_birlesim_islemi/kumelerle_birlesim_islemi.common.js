var sorgular = function () {
    this.sorguSecici = Math.floor(Math.random() * 4 + 1);
    console.log("Soru Seçici: " + this.sorguSecici);
    //var sorguSecici=3;
    switch (this.sorguSecici) {
        case 1:
            this.kume = new Set({
                type: Set.SMALLER_THAN,
                value: 6
            });
            this.kume;
            break;
        case 2:
            this.kume = new Set({
                type: Set.GREATER_THAN_DIGIT_EVEN,
                value: 0
            });
            this.kume;
            break;
        case 3:
            this.kume = new Set({
                type: Set.DIGIT,
                value: 10
            });
            this.kume;
            break;
        case 4:
            this.kume = new Set({
                type: Set.SMALLER_THAN_PRIME,
                value: 10
            });
            this.kume;
            break;
    }
    this.uzunluk = function () {
        return this.kume.elements.length;
    }
    this.yeniSoru = function (isim) {
        this.soruCesidi = Math.floor(Math.random() * 2 + 1);
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

function semaGoster(){
    Set.animateSets({
        container:Interaction.container,
        position:new Point(130,100),
        sets:[Interaction.birinciKume.kume , Interaction.ikinciKume.kume],
        letters:['A','B']
    });
}
;
