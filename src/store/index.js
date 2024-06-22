import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'
import { loginService } from '@/services/login.js'

export const useCounterStore = defineStore('counter', () => {
    //State
    const user = {
        isLogged: false,
        usuario: '',
        id: '',
        email: ''
    }

    //Localstorage 
    const userStorage = useStorage('user', user)

    //Getters
    const isLogged = computed(() => userStorage.value.isLogged)
    const usuario = computed(() => userStorage.value.usuario)
    const id = computed(() => userStorage.value.id)
    const email = computed(() => userStorage.value.email)

    //Actions
    function setisLogged(novoDado) {
        isLogged.value = novoDado
    }
    function setUsuario(novoDado) {
        usuario.value = novoDado
    }
    function setId(novoDado) {
        id.value = novoDado
    }
    function setEmail(novoDado) {
        email.value = novoDado
    }

    const loginStore = async ({ name, password }) => {
        console.log('login', name, password)
        try {
            const response = await loginService({ name, password })

            console.log('response pinia', response)

             userStorage.value = {
                 isLogged: true,
                 usuario: response.usuario,
                 id: response.id,
                 email: response.email
             }
            
        return true
        } catch (error) {
            console.log(error)
            return error
        }
    }

    const logout = () => (userStorage.value = {
        isLogged: false,
        usuario: '',
        id: '',
        email: ''
    })

    return { isLogged, usuario, id, email, setisLogged, setUsuario, setId, setEmail, logout, loginStore }
})