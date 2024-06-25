import axios from 'axios';
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

async function carregar(url, array) {
    const { data } = await axios.get(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}`);
    array.value = data;
}

async function adicionar(url, objeto) {
    try {
        await axios.post(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}`, objeto);
        toast.success('Cadastrado com sucesso!', {autoClose: 1000});
    } catch (error) {
        const key = Object.keys(error.response.data)
        toast.error(error.response.data[key[0]], {autoClose:1000})
    }
    
}

async function atualizar(objeto, url) {
    try{
        await axios.put(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}/${objeto.id}/`, objeto);
        toast.success('Atualizado com sucesso!', {autoClose: 1000});
    }catch(error){
        toast.error(error.response.data.error, {autoClose:100})
    }
}

async function deletar(objeto, url) {
    try{
        await axios.delete(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}/${objeto.id}/`);
        toast.success('Deletado com sucesso!', {autoClose: 1000});
        setTimeout(() => {
            window.location.reload()
        }, 1500); 
    }
    catch(error){
        toast.error(error.response.data.error, {autoClose:100})
    }
}
export { carregar, adicionar, atualizar, deletar };