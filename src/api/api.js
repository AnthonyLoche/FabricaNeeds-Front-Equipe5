import axios from 'axios';
import notify from '@/notify/toastify';
import { useAuthStore } from '@/store/auth';
const store = useAuthStore();

async function loadItem(url, array) {
    const response = await axios.get(`http://localhost:8000/${url}`,
    {
      headers: {
          Authorization: `Bearer ${store.token}`
    }})
  array.value = response.data
 
}

async function addItem(url, objeto) {
  try {
    await axios.post(`http://localhost:8000/${url}`, objeto,
      {
        headers: {
            Authorization: `Bearer ${store.token}`
        }
    }
    )
    notify('sucess', 'Adicionado com sucesso!')
  } catch (error) {
    const key = Object.keys(error.response.data)
    notify('error', error.response.data[key[0]])
  }
}

async function updateItem(objeto, url) {
  try {
    await axios.put(
      `http://localhost:8000/${url}/${objeto.id}/`,
      objeto,
      {
        headers: {
            Authorization: `Bearer ${store.token}`
        }
    }
    )
    notify('sucess', 'Atualizado com sucesso!')
  } catch (error) {
    notify('error', error.response.data[key[0]])
  }
}

async function deleteItem(objeto, url) {
  try {
    await axios.delete(`http://localhost:8000/${url}/${objeto.id}/`,
      {
        headers: {
            Authorization: `Bearer ${store.token}`
        }
    }
    )
    notify('sucess', 'Deletado com sucesso!')
    setTimeout(() => {
      window.location.reload()
    }, 1500)
  } catch (error) {
    notify('error', error.response.data[key[0]])
  }
}
export { loadItem, addItem, updateItem, deleteItem }
