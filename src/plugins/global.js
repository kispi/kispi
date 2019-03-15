import Vue from 'vue'
import * as $http from 'axios'

export const Shake = {
    install(Vue) {
        Vue.prototype.$shake = function(elem) {
            if (elem) {
                elem.classList.add("shake")
                setTimeout(() => {
                    elem.classList.remove("shake")
                }, 500)
            }
        }
    }
}

export const Loading = {
    install(Vue) {
        Vue.prototype.$loading = function(show) {
            $nuxt.$emit('onSetLoading', show)
        }
    }
}

export const Toast = {
    install(Vue) {
        let emitToast = function(msg, bgClass) {
            $nuxt.$emit('onToast', {
                message: msg,
                class: bgClass
            })
        }
        Vue.prototype.$toast = {
            success(msg) {
                emitToast(msg, "bg-success")
            },
            error(msg) {
                emitToast(msg, "bg-danger")
            },
            warning(msg) {
                emitToast(msg, "bg-warning")
            }
        }
    }
}

export const Copy = {
    install(Vue) {
        Vue.prototype.$copy = function(obj) {
            return JSON.parse(JSON.stringify(obj));
        }
    }
}

export const Download = {
    install(Vue) {
        Vue.prototype.$download = async function(url, params, filename) {
            return await $http({
                url: url,
                method: 'GET',
                params: params,
                responseType: 'blob'
            }).then(response => {
                const url = window.URL.createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', filename || this.$moment().format("YYYY_MM_DD_hh_mm_ss")); //or any other extension
                document.body.appendChild(link);
                link.click();
            })
        }
    }
}

Vue.use(Shake)
Vue.use(Loading)
Vue.use(Toast)
Vue.use(Copy)
Vue.use(Download)