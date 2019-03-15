import Vue from 'vue'
import json from '@/assets/translations.json';

export const translate = (key, temporaryLocale) => {
    let locale = "kr";
    if (temporaryLocale) {
        locale = temporaryLocale;
    }
    return (json[key] || {})[locale] || key;
}

export const textToHTML = (text) => {
    if (text) {
        return text.replace(/\n/g, "<br>");
    }
}

export const toCamel = (snake) => {
    if (snake) {
        snake = snake.toLowerCase();
        var result = "";
        var underbarPassed = false;
        snake.split("").forEach(c => {
            if (c !== "_") {
                result += (underbarPassed ? c.toUpperCase() : c);
            }
            underbarPassed = c === "_"
        })
        return result;
    }
}

export const toSnake = (camel) => {
    let uppers = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    if (camel) {
        var result = "";
        camel.split("").forEach(c => {
            result += (uppers.indexOf(c) >= 0 ? "_" + c.toLowerCase() : c);
        })
        return result;
    }
}

export const formatDate = (value, format, showTrimmedTime) => {
    let result = value;
    if (value) {
        let createdAt = Vue.prototype.$moment(String(value));
        let now = Vue.prototype.$moment();

        result = Vue.prototype.$moment(String(value)).format(format || "YYYY-MM-DD HH:mm:ss");
        if (showTrimmedTime) {
            if (createdAt.format("YYYY-MM-DD") === now.format("YYYY-MM-DD")) {
                result = Vue.prototype.$moment(String(value)).format("HH:mm");
            } else if (createdAt.format("YYYY") === now.format("YYYY")) {
                result = Vue.prototype.$moment(String(value)).format("MM-DD");
            } else {
                result = Vue.prototype.$moment(String(value)).format("YYYY-MM-DD");
            }
        }
    }
    return result;
}

export const hideTail = (ip) => {
    if (!ip || ip.length === 0) {
        return;
    }
    let segments = ip.split(".");
    return segments[0] + "." + segments[1];
}

Vue.filter('translate', translate)
Vue.filter('textToHTML', textToHTML)
Vue.filter('toCamel', toCamel)
Vue.filter('toSnake', toSnake)
Vue.filter('formatDate', formatDate)
Vue.filter('hideTail', hideTail)