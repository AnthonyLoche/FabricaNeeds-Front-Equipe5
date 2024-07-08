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
}
