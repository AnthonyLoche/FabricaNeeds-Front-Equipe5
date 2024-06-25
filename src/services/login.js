import axios from 'axios'
import { ref } from 'vue'
import { carregar } from '@/api/api.js'

export async function loginService({ name, password }) {
    const response = await axios.post('https://fabricaneeds-back-equipe5-3edw.onrender.com/login', { nome: name, senha: password })
    const contribuintes = ref([])
    await carregar('contribuinte/', contribuintes)
    const idTeste = contribuintes.find(contribuinte => contribuinte.nome === name).id
    const emailTeste = contribuintes.find(contribuinte => contribuinte.nome === name).email
    const verificado = contribuintes.find(contribuinte => contribuinte.nome === name).verificado
    return {response:response, usuario: name, id: idTeste, email: emailTeste, verificado: verificado}
}

