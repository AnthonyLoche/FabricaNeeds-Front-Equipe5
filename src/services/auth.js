import axios from 'axios'
import { ref } from 'vue'

export default class AuthService {
  async postUserToken(token) {
    const response = await axios.get('http://localhost:8000/api/usuarios/me/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  }
  async verifyService(data) { 
    const membrosFabrica = ref([])
    const usernames = ref([])
    membrosFabrica.value = (await axios.get(
      'https://api.github.com/orgs/fabricadesoftware-ifc/members'
    )).data
    membrosFabrica.value.forEach((membro) => usernames.value.push((membro.login).toLowerCase()))

    if (usernames.value.includes(data.toLowerCase())) {
      return true
    } else {
      return false
    }
  }
}
