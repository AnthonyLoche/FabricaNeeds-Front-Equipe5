import axios from 'axios';

export default class AuthService {
  async postUserToken(token) {
    const response = await axios.get('http://localhost:8000/api/usuarios/me/', 
      {
        headers: {
        Authorization: `Bearer ${token}`,
      },
      });
    console.log(response.data)
    return response.data;
  }
}