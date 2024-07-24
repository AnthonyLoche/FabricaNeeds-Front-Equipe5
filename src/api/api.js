import notify from '@/notify/toastify';
import { useAuthStore } from '@/store/auth';
import { api } from '@/plugins/api';

const store = useAuthStore();

async function loadItem(url, array) {
    const response = await api.get(url,
    {
      headers: {
          Authorization: `Bearer ${store.token}`
    }})
  array.value = response.data
 
}

async function addItem(url, objeto) {
  try {
    await api.post(url, objeto,
      {
        headers: {
            Authorization: `Bearer ${store.token}`
        }
    }
    )
    notify('success', 'Adicionado com sucesso!')
  } catch (error) {
    const key = Object.keys(error.response.data)
    notify('error', error.response.data[key])
  }
}

async function updateItem(objeto, url) {
  try {
    await api.put(url,
      objeto,
      {
        headers: {
            Authorization: `Bearer ${store.token}`
        }
    }
    )
    notify('success', 'Atualizado com sucesso!')
  } catch (error) {
    const key = Object.keys(error.response.data)
    notify('error', error.response.data[key])
  }
}

async function deleteItem(objeto, url) {
  try {
    await api.delete(url,
      {
        headers: {
            Authorization: `Bearer ${store.token}`
        }
    }
    )
    notify('success', 'Deletado com sucesso!')
    setTimeout(() => {
      window.location.reload()
    }, 1500)
  } catch (error) {
    const key = Object.keys(error.response.data)
    notify('error', error.response.data[key])
  }
}
export { loadItem, addItem, updateItem, deleteItem }
