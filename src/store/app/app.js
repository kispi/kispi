// initial state
const state = {
    toast: {
        message: null,
        type: null,
        show: false,
    },
    loading: false,
    background: window.localStorage.getItem('background') || 'show',
    chat: window.localStorage.getItem('chat') || 'show',
    selectedArcaneRiverArea: window.localStorage.getItem('selectedArcaneRiverArea') || 'vanishing_road',
    users: [],
    userWhisperedToMe: null
}

// getters
const getters = {
    toast(state) {
        return state.toast
    },
    loading(state) {
        return state.loading
    },
    selectedArcaneRiverArea(state) {
        return state.selectedArcaneRiverArea
    },
    chat(state) {
        return state.chat
    },
    background(state) {
        return state.background
    },
    users(state) {
        return state.users
    },
    userWhisperedToMe(state) {
        return state.userWhisperedToMe
    }
}

// actions
const actions = {
    async setToast({
        commit,
    }, payload) {
        payload.show = true;
        return commit('setToast', payload)
    },
    async removeToast({
        commit,
    }) {
        return commit('setToast', {
            show: false
        })
    },
    async setLoading({
        commit,
    }, payload) {
        return commit('setLoading', payload)
    }
}

// mutations
const mutations = {
    setChat(state, payload) {
        if (["show", "hide"].indexOf(payload) === -1) {
            return
        }
        state.chat = payload
        window.localStorage.setItem('chat', state.chat)
    },
    background(state, payload) {
        if (["show", "hide"].indexOf(payload) === -1) {
            return
        }
        state.background = payload
        window.localStorage.setItem('background', state.background)
    },
    updateUsersList(state, payload) {
        if (!payload) {
            return
        }
        state.users = payload
    },
    setUserWhisperedToMe(state, payload) {
        if (!payload) {
            return
        }
        state.userWhisperedToMe = payload
    },
    setToast(state, payload) {
        if (!payload) {
            state = {
                toast: {
                    message: null,
                    type: null,
                    show: false,
                },
            }
            return
        }

        if (payload.type !== undefined) {
            state.toast.type = payload.type
        }

        if (payload.message !== undefined) {
            state.toast.message = payload.message
        }

        if (payload.show !== undefined) {
            state.toast.show = payload.show
        }
    },
    setArcaneRiverArea(state, payload) {
        if (payload === undefined) {
            return
        }
        state.selectedArcaneRiverArea = payload.value
        window.localStorage.setItem('selectedArcaneRiverArea', state.selectedArcaneRiverArea)
    },
    setLoading(state, payload) {
        if (payload !== undefined) {
            state.loading = payload;
        }
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}