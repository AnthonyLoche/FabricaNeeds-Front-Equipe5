<script setup>
import { ref } from 'vue';
import axios from 'axios';

const colaboradores = ref([]);
const lista = ref([]);
const ordenado = ref([]);

async function carregarColaboradores() {
    try {
        const response = await axios.get('https://webhook.peraza.live/obterPagamentos');
        
        colaboradores.value = response.data;

        const tempRanking = colaboradores.value
            .filter(item => item.status === 'approved')
            .map(item => ({ cliente: item.cliente, valor: item.valor }));

        const clienteMap = new Map();

        tempRanking.forEach(item => {
            const { cliente, valor } = item;
            if (clienteMap.has(cliente)) {
                clienteMap.get(cliente).valor += valor;
            } else {
                clienteMap.set(cliente, { cliente, valor });
            }
        });

        lista.value = Array.from(clienteMap.values());
        ordenado.value = lista.value
            .sort((a, b) => b.valor - a.valor)
            .slice(0, 3);
    } catch (error) {
        console.error('Erro ao carregar colaboradores:', error);
    }
}

carregarColaboradores();

</script>

<template>
    <div id="ranking" class="container">
        <h2>Ranking dos Contribuintes</h2>
        <div  v-for="(item, index) in ordenado" :key="index"  class="classificados">
                <p>{{ index + 1 }}º</p>
                <p id="nomeRanking">Cliente: {{ item.cliente }}</p>
                <p>Valor: R$ {{ item.valor }}</p>
    </div>
    </div>
</template>

<style scoped>
.classificados {
    background-color: transparent;
    color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    width: 90%;
    gap: 20px;
    padding: 1rem;
    margin: 10px auto;
    border: solid #8C52FF;
    border-width: 2px 0 2px 0;
}
.classificados > p{
    color: #8C52FF;
    font-weight: bold;
}
#nomeRanking {
    color: white;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 60%;
    margin: 5% auto;
    padding: 1rem;
    border: 2px solid #8C52FF;
    border-radius: .5rem;
}
h2{
    color: white;
    font-size: 2rem;
    margin: 1rem auto;
    text-align: center;
}
@media screen and (max-width: 1024px) {
    .container{
        width: 85%;
        margin: 10% auto;
    }
    .classificados> p{
        text-align: center;
    }
}
</style>
