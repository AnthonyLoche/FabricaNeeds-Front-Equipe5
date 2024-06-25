import axios from 'axios'


async function loadItem(url, array) {
  const { data } = await axios.get(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}`)
  array.value = data
}

async function addItem(url, objeto) {
  try {
    await axios.post(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}`, objeto)
    toast.success('Cadastrado com sucesso!', { autoClose: 1000 })
  } catch (error) {
    const key = Object.keys(error.response.data)
    toast.error(error.response.data[key[0]], { autoClose: 1000 })
  }
}

async function updateItem(objeto, url) {
  try {
    await axios.put(
      `https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}/${objeto.id}/`,
      objeto
    )
    toast.success('Atualizado com sucesso!', { autoClose: 1000 })
  } catch (error) {
    toast.error(error.response.data.error, { autoClose: 100 })
  }
}

async function deleteItem(objeto, url) {
  try {
    await axios.deleteItem(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}/${objeto.id}/`)
    toast.success('Deletado com sucesso!', { autoClose: 1000 })
    setTimeout(() => {
      window.location.reload()
    }, 1500)
  } catch (error) {
    toast.error(error.response.data.error, { autoClose: 100 })
  }
}
export { loadItem, addItem, updateItem, deleteItem }
