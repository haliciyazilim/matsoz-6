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
    setText: function(node){
        if(node instanceof Array){
            for(var i=0;i<node.length;i++){
                __convertNodeToLanguage(node[i]);
            }
        }else{
            __convertNodeToLanguage(node);
        }

        function __convertNodeToLanguage(node){
            for(var i=0;i < node.texts.length;i++){
                Language[node.texts[i].language][node.phrase] = node.texts[i].meaning;
            }
        }
    }

}


