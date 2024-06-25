import { defineStore } from 'pinia'
import { computed } from 'vue'
import { useStorage } from '@vueuse/core'
import { loginService } from '@/services/login.js'
import { verifyService } from '@/services/verificar.js'

export const useUserStore = defineStore('counter', () => {
    //State
    const user = {
        isLogged: false,
        usuario: '',
        id: '',
        email: '',
        verificado: false
    }

    //Localstorage 
    const userStorage = useStorage('user', user)

    //Getters
    const isLogged = computed(() => userStorage.value.isLogged)
    const usuario = computed(() => userStorage.value.usuario)
    const id = computed(() => userStorage.value.id)
    const email = computed(() => userStorage.value.email)
    const verificado = computed(() => userStorage.value.verificado)

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
    function setVerificado(novoDado) {
        verificado.value = novoDado
    }

    const loginStore = async ({ name, password }) => {
        ('login', name, password)
        try {
            const response = await loginService({ name, password })
            ('response pinia', response)

             userStorage.value = {
                 isLogged: true,
                 usuario: response.usuario,
                 id: response.id,
                 email: response.email,
                verificado: response.verificado
             }
        return true
        } catch (error) {
            return error
        }
    }

    const enviarToken = async ({token}) => {
        try {
            const result = await verifyService({token})
            return result
        }catch(error){
            return error
        }
    }
    const logout = () => (userStorage.value = {
        isLogged: false,
        usuario: '',
        id: '',
        email: '',
        verificado: false
    })
    return { isLogged, usuario, id, email, setisLogged, setUsuario, setId, setEmail, logout, loginStore, setVerificado, verificado, enviarToken }
})