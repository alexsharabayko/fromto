var currentLanguage;

//export default (language = 'ru') => {
//    if (currentLanguage !== language) {
//
//    } else {
//
//    }
//
//    var obj = require('./' + language + '.json');
//
//    debugger;
//};

class Language {
    constructor (lang) {
        var obj = require('./' + lang + '.json');

        this.constants = Object.freeze(obj);
    }
}

export default Language;