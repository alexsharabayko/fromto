import config from 'config';

var langCodes = ['en', 'ru'];
var constants = {};

langCodes.forEach(lang => {
    var obj = require('./' + lang + '.json');

    constants[lang] = Object.freeze(obj);
});

export default {
    translate (key, ...values) {
        var str = constants[config.lang][key] || key;

        values.forEach((value, i) => {
            str = str.replace(new RegExp(`\\{${i}\\}`, 'g'), value);
        });

        return str;
    }
};