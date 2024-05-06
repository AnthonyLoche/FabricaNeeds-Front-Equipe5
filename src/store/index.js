import { createStore } from "vuex";
import { fetchPessoas } from "./id";

const store = createStore({
    state: {
        isLoged: localStorage.getItem('isLoged'),
        usuario: localStorage.getItem('usuario') || '',
        id: localStorage.getItem('id') || ''
    },
    mutations: {
        setisLoged(state, novoDado) {
            state.isLoged = localStorage.setItem('isLoged', novoDado)
            console.log(novoDado)
        },
        setUsuario(state, novoDado) {
            state.usuario = localStorage.setItem('usuario', novoDado)
            console.log(novoDado)
        },
        setId(state, novoDado) {
            state.id = localStorage.setItem('id', novoDado)
            console.log(novoDado)
        },
        logout(state) {
            state.isLoged = localStorage.setItem('isLoged', false)
            state.usuario = localStorage.setItem('usuario', '')
            state.id = localStorage.setItem('id', '')
        }
    },
    getters: {
        getisLoged() {
            return localStorage.getItem('isLoged') || false
        },
        getUsuario() {
            return localStorage.getItem('usuario') || ''
        },
        getId() {
            return localStorage.getItem('id') || ''
        }
    }
})

fetchPessoas()

export default store;