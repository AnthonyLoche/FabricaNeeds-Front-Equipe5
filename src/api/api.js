import axios from 'axios';

async function carregar(url, array) {
    const { data } = await axios.get(`http://localhost:8000/${url}`);
    array.value = data;
}

async function adicionar(url, objeto) {
    try {
        const { data } = await axios.post(`http://localhost:8000/${url}`, objeto);
        console.log(data);
        window.location.reload();
    } catch (error) {
        console.log(error);
    }
}

async function atualizar(id, objeto, url) {
    try{
        const { data } = await axios.patch(`http://localhost:8000/${url}/${id}`, objeto);
        console.log(data);
        window.location.reload();
    }catch(error){
        console.log(error);
    }
}



export { carregar, adicionar, atualizar };