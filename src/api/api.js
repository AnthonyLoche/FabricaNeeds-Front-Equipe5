import axios from 'axios';
import notify from '@/notify/toastify';

async function carregar(url, array) {
    const { data } = await axios.get(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}`);
    array.value = data;
}

async function adicionar(url, objeto) {
    try {
        const { data } = await axios.post(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}`, objeto);
        console.log(data);
        notify('success', 'Cadastrado com sucesso!');
    } catch (error) {
        const key = Object.keys(error.response.data)
        console.log(error)
        notify('error', error.response.data[key[0]]);   
    }
    
}

async function atualizar(objeto, url) {
    try{
        console.log(objeto);
        const { data } = await axios.put(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}/${objeto.id}/`, objeto);
        console.log(data);
        notify('success', 'Atualizado com sucesso!');
    }catch(error){
        const key = Object.keys(error.response.data)
        console.log(error);
        notify('error', error.response.data[key[0]]);
    }
}

async function deletar(objeto, url) {
    try{
        const { data } = await axios.delete(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}/${objeto.id}/`);
        console.log(data);
        notify('success', 'Deletado com sucesso!');
        setTimeout(() => {
            window.location.reload()
        }, 1500); 
        ;
    }
    catch(error){
        const key = Object.keys(error.response.data)
        console.log(error);
        notify('error', error.response.data[key[0]]);
    }
}
export { carregar, adicionar, atualizar, deletar };