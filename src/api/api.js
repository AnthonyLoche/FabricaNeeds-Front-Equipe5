import axios from 'axios';
import notify from '@/notify/toastify';


async function loadItem(url, array) {
  const { data } = await axios.get(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}`)
  array.value = data
}

async function addItem(url, objeto) {
  try {
    await axios.post(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}`, objeto)
    notify('sucess', 'Cadastrado com sucesso!')
  } catch (error) {
    const key = Object.keys(error.response.data)
    notify('error', error.response.data[key[0]])
  }
}

async function updateItem(objeto, url) {
  try {
    await axios.put(
      `https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}/${objeto.id}/`,
      objeto
    )
    notify('sucess', 'Atualizado com sucesso!')
  } catch (error) {
    notify('error', error.response.data[key[0]])
  }
}

async function deleteItem(objeto, url) {
  try {
    await axios.delete(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}/${objeto.id}/`)
    notify('sucess', 'Deletado com sucesso!')
    setTimeout(() => {
      window.location.reload()
    }, 1500)
  } catch (error) {
    notify('error', error.response.data[key[0]])
  }
}
export { loadItem, addItem, updateItem, deleteItem }
