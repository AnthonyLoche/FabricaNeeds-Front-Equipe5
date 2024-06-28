import axios from 'axios'
import { ref } from 'vue'
import { loadItem } from '@/api/api.js'

export async function loginService({ name, password }) {
  const response = await axios.post('https://fabricaneeds-back-equipe5-3edw.onrender.com/login', {
    nome: name,
    senha: password
  })
  const contribuintes = []
  await loadItem('clients/', contribuintes)
  console.log(contribuintes)
  const idTeste = contribuintes.value.find((contribuinte) => contribuinte.nome === name).id
  const emailTeste = contribuintes.value.find((contribuinte) => contribuinte.nome === name).email
  const verificado = contribuintes.value.find((contribuinte) => contribuinte.nome === name).verificado
  return {
    response: response,
    usuario: name,
    id: idTeste,
    email: emailTeste,
    verificado: verificado
  }
}
