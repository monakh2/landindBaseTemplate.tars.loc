'use strict';

const Handlebars = tars.packages.handlebars;
/* TODO: I am added handlebars-helpers support (ПРИ ЭТОМ ПЕРЕСТАЮТ РАБОТАТЬ ХЕРПЕРЫ РЕАЛИЗОВАННЫЕ ЧЕРЕЗ TARS)
   Хелпер для контроля пространства имен ({{pref}}) добавил в C:\OSPanel\domains\kiddos-master.tars.loc\node_modules\handlebars-helpers\lib\string.js*/
const hb_hepl = require('handlebars-helpers')();

/**
 * You can add your own helpers to handlebarsHelpers Object
 * All helpers from that object will be available in templates
 * @type {Object}
 */
const handlebarsHelpers = {

    /**
     * This is an example of handlebars-helper
     * This helper gets string and returns it
     * @param  {String} str Source string
     * @return {String}     Result string
     */
    exampleHelper: function (str) {
        return str;
    }
};

module.exports = handlebarsHelpers;
module.exports = hb_hepl;
// TODO: I add handlebars-helpers support