import axios from 'axios';

async function carregar(url, array) {
    const { data } = await axios.get(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}`);
    array.value = data;
}

async function adicionar(url, objeto) {
    try {
        const { data } = await axios.post(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}`, objeto);
        console.log(data);
        alert('Adicionado com sucesso!');
    } catch (error) {
        console.log(error);
    }
}

async function atualizar(id, objeto, url) {
    try{
        const { data } = await axios.patch(`https://fabricaneeds-back-equipe5-3edw.onrender.com/${url}/${id}`, objeto);
        console.log(data);
        window.location.reload();
    }catch(error){
        console.log(error);
    }
}



export { carregar, adicionar, atualizar };