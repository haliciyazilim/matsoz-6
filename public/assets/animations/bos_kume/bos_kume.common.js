var sorgular = function () {
    //this.sorguSecici = Math.floor(Math.random() * 11 + 1);
    console.log("Soru Seçici: " + Interaction.sorguSecici);
    //var sorguSecici=3;
    switch (Interaction.sorguSecici) {
        case 1:
            this.kume = new Set({
                type: Set.SMALLER_THAN,
                value: 1
            });
            this.kume;
            break;
        case 2:
            this.kume = new Set({
                type: Set.SMALLER_THAN,
                value: 2
            });
            this.kume;
            break;
        case 3:
            this.kume = new Set({
                type: Set.DIGIT

            });
            this.kume;
            break;
        case 4:
            this.kume = new Set({
                type: Set.SMALLER_THAN_PRIME,
                value: 2
            });
            this.kume;
            break;
        case 5:
            this.kume = new Set({
                type: Set.DIGIT_EVEN
            });
            this.kume;
            break;
        case 6:
            this.kume = new Set({
                type: Set.DIGIT_ODD
            });
            this.kume;
            break;
        case 7:
            this.kume = new Set({
                type: Set.SMALLER_THAN_GREATER_THAN_PRIME,
                value1:8,
                value2:10
            });
            this.kume;
            break;
        case 7:
        this.kume = new Set({
            type: Set.SMALLER_THAN_GREATER_THAN,
            value1:9,
            value2:10
        });
        this.kume;
        break;
        case 8:
            this.kume = new Set({
                type: Set.FACTORS,
                value:3

            });
            this.kume;
            break;
        case 9:
            this.kume = new Set({
                type: Set.SMALLER_THAN_PRIME,
                value:15
            });
            this.kume.definition="Asal sayılar";
            this.kume.elements=[2, 3, 5, 7, 11, 13,"..."];
            this.kume;
            break;
        case 10:
            this.kume = {
                definition:'"ANKARA" sözcüğündeki sesli harfler',
                elements:["A"],
                getDefinitionString:function(isim){
                    return isim+" = "+'{ "ANKARA" sözcüğündeki sesli harfler }';
                },

                getElementsString:function(isim){
                    return "{"+this.elements+"}";
                }
            };
            this.kume;
            break;
        case 11:
            this.kume = {
                definition:'{ "TDK" kısaltmasındaki sesli harfler }',
                elements:[],
                getDefinitionString:function(isim){
                    return isim+" = "+this.definition;
                }
            };
            this.kume;
            break;
        case 12:
            this.kume = {
                definition:'{ "TBMM" kısaltmasındaki sesli harfler }',
                elements:[],
                getDefinitionString:function(isim){
                    return isim+" = "+this.definition;
                }
            };
            this.kume;
            break;

    }
    this.uzunluk = function () {
        return this.kume.elements.length;
    }
    this.yeniSoru = function (isim) {

        return this.kume.getDefinitionString(isim);

    }
    this.getKume = function () {
        return this.kume;
    }
}
;
