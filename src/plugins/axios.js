import axios from 'axios'

const api = axios.create({
    baseURL: 'https://fabricaneeds-back-equipe5-3edw.onrender.com/'
}) 

export default api