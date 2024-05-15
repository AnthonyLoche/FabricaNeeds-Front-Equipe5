import { createStore } from "vuex";
import { fetchPessoas } from "./id";

const store = createStore({
    state: {
        isLoged: localStorage.getItem('isLoged'),
        usuario: localStorage.getItem('usuario') || '',
        id: localStorage.getItem('id') || '',
        email: localStorage.getItem('email') || '',
    },
    mutations: {
        setisLoged(state, novoDado) {
            state.isLoged = localStorage.setItem('isLoged', novoDado)
        },
        setUsuario(state, novoDado) {
            state.usuario = localStorage.setItem('usuario', novoDado)
        },
        setId(state, novoDado) {
            state.id = localStorage.setItem('id', novoDado)
        },
        setEmail(state, novoDado) {
            state.email = localStorage.setItem('email', novoDado)
        },
        logout(state) {
            state.isLoged = localStorage.setItem('isLoged', false)
            state.usuario = localStorage.setItem('usuario', '')
            state.id = localStorage.setItem('id', '')
            state.email = localStorage.setItem('email', '')
            window.location.href = '/'
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
        },
        getEmail() {
            return localStorage.getItem('email') || ''
        }
    }
})

fetchPessoas()

export default store;