import getters from './getters';
import mutations from './mutations';
import actions from './actions';
import json from '../../assets/translations.json';

const supportedLocales = ["kr", "en"]
let locale = "kr"
let storedLocale = window.localStorage.getItem("locale")
if (supportedLocales.indexOf(storedLocale) !== -1) {
    locale = storedLocale
} else {
    window.localStorage.setItem("locale", locale)
}

export default {
    state: {
        translation: {
            locale,
            texts: json
        }
    },
    getters,
    mutations,
    actions
};