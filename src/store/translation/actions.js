var localeLoaded = false;

export default {
    async setLocale({
        commit,
        dispatch
    }, payload) {
        window.localStorage.setItem("locale", payload)
        return commit('setTranslation', {
            locale: payload
        })
    },

    async loadLocale({
        commit,
        dispatch
    }, locale) {
        if (localeLoaded) {
            return;
        }
        localeLoaded = true;
        if (!locale) {
            locale = window.localStorage.getItem("locale") || "id"
        }
        return commit('setTranslation', {
            locale
        })
    },
}