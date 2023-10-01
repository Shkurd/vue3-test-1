import {createStore} from 'vuex'

export default createStore({
    state: {
        likes: 0,
        isAuth: false
    },

    getters: { // Это по сути аналог computed свойств в компоненте
        doLikes(state) {
            state.likes * 2
        }
    },

    mutations: { // тут функции, через которые мы меняем стостояние стейта, т.к. напрямую его менять нельзя
        increaseLikes(state) {
            state.likes++   
        },

        decrementLikes(state) {
            if (state.likes > 0) {
                state.likes-- 
            } 
        }
    },

    actions: { // тут функции, которые внутри себя используют мутации. Тут можно делать какие-то сторонние эффекты. Например получить что-то с сервера и запустить мутацию.

    },

})