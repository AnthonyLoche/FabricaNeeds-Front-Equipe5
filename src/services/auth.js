import axios from 'axios'
import { ref } from 'vue'
import { useAuthStore } from '@/store/auth'

export default class AuthService {
  async postUserToken(token) {
    const response = await axios.get('https://fabricaneeds-back-equipe5-3edw.onrender.com/api/usuarios/me/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  }
  async verifyService(data) {
    const store = useAuthStore()
    const membrosFabrica = ref([])
    const usernames = ref([])
    membrosFabrica.value = (await axios.get(
      'https://api.github.com/orgs/fabricadesoftware-ifc/members'
    )).data
    for (let i = 0; i < membrosFabrica.value.length; i++) {
      usernames.value.push({nome: membrosFabrica.value[i].login.toLowerCase(), index: i});
    }
    for (let i = 0; i < usernames.value.length; i++) {
      if (usernames.value[i].nome == data.toLowerCase()) {
        console.log(membrosFabrica.value[usernames.value[i].index].login)
        store.setUsername(membrosFabrica.value[usernames.value[i].index].login)
        console.log("setou na store", store.username, membrosFabrica.value[usernames.value[i].index].login)
        return true
      }
    }
    return false
  }
}
