import axios from 'axios'

export default class AuthService {
  async postUserToken(token) {
    console.log(token)
    const response = await axios.get('http://localhost:8000/api/usuarios/me/', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    return response.data
  }
}
