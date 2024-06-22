import axios from 'axios';

async function carregar(url, array) {
    const { data } = await axios.get(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}`);
    array.value = data;
}

async function adicionar(url, objeto) {
    try {
        const { data } = await axios.post(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}`, objeto);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

async function atualizar(objeto, url) {
    try{
        console.log(objeto);
        const { data } = await axios.put(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}/${objeto.id}/`, objeto);
        console.log(data);
        alert('Atualizado com sucesso!');
    }catch(error){
        console.log(error);
    }
}

async function deletar(objeto, url) {
    try{
        const { data } = await axios.delete(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}/${objeto.id}/`);
        console.log(data);
        alert('Deletado com sucesso!');
        window.location.reload();
    }
    catch(error){
        console.log(error);
    }
}



export { carregar, adicionar, atualizar, deletar };