import Vuex from 'vuex'

let store = new Vuex.Store({
    modules: {}
});

store.registerModule('data', {
    state:     {
        is_loading:              false,                 //显示加载中
        toast:                   {
            show:         false,
            time:         1500,
            type:         'success',
            is_show_mask: false,
            text:         '成功啦~',
            position:     'middle'
        },                                              //toast相关
    },
    mutations: {
        updateIsLoading (state, payload) {
            state.is_loading = payload.is_loading
        },
        updateToast (state, payload) {
            for (let n in payload) {
                state.toast[n] = payload[n]
            }
        },
    },
    actions:   {
        updateIsLoading ({commit}, status) {
            commit('updateIsLoading', {is_loading: status})
        },
        updateToast ({commit}, state) {
            commit('updateToast', state)
        },
    },
    getters:   {
        getIsLoading:            state => state.is_loading,
        getToast:                state => state.toast,
    }

});

export default store