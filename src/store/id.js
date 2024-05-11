
import { ref } from 'vue'
import axios from 'axios'
const pessoas = ref([])
import store from '.'

async function fetchPessoas() {
    const { data } = await axios.get('https://fabricaneeds-back-equipe5-3edw.onrender.com/contribuinte')
    pessoas.value = data
    for (const item of pessoas.value) {
        const user = store.state.usuario
        if (user == item.nome) {
            store.commit('setId', item.id)
        }
    }

}
fetchPessoas()

export { pessoas, fetchPessoas }