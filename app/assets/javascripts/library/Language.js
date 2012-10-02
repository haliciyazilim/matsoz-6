/**
 * Created with JetBrains WebStorm.
 * User: yunus_work
 * Date: 13.09.2012
 * Time: 09:47
 * To change this template use File | Settings | File Templates.
 */

var Language = {

    ENGLISH:"_ENGLISH",
    TURKISH:"_TURKISH",
    GERMAN:"_GERMAN",
    phrases:null,
    selectedLanguage:null,
    init:function(language){
//        console.log("I'm here");
        Language.phrases = Language[language];
        if(Language.phrases == undefined)
            throw "Specified language `" + language + "` is not supported";
        Language.selectedLanguage = language;
    },
    _ENGLISH:{},
    _TURKISH:{},
    _GERMAN:{},
    getText: function(phrase){
        Language.phrases = Language[Language.selectedLanguage];
        var result =  Language.phrases[phrase];
        if(result == undefined)
            throw  Language.selectedLanguage + " (selected language) does not support this phrase `"+phrase+"`";
        return result;
    },

    /*
    * example call
    *   Language.setText({
            text:"",
            meanings:[
                {
                    language:Language.ENGLISH,

                }
            ]
        })
    *
    */
    setText: function(nodes){
        for (var phrase in nodes) {
            if (nodes.hasOwnProperty(phrase)) {
                __convertNodeToLanguage(phrase,nodes[phrase]);
            }
        }
        function __convertNodeToLanguage(phrase,meanings){
            for (var lang in meanings) {
                if(meanings.hasOwnProperty(lang)) {
                    if(Language[lang] == undefined)
                        throw lang + " language is not supported";
                    Language[Language[lang]][phrase] = meanings[lang];
                }
            }
        }
    }

}


