<script setup>
import { reactive, ref } from 'vue';
import axios from 'axios';

const colaboradores = ref([]);
const ranking = ref([]);
const lista = ref([]);
const ordenado = ref([]);

async function carregarColaboradores() {
    const response = await axios.get('https://webhook.peraza.live/obterPagamentos');
    console.log(response.data);
    
    colaboradores.value = response.data;

    const tempRanking = [];

    for (const item of colaboradores.value) {
        if (item.status === 'approved') {
            tempRanking.push({
                cliente: item.cliente,
                valor: item.valor
            });
        }
    }

    const clienteMap = new Map();

    for (const item of tempRanking) {
        if (clienteMap.has(item.cliente)) {
            clienteMap.get(item.cliente).valor += item.valor;
        } else {
            clienteMap.set(item.cliente, { cliente: item.cliente, valor: item.valor });
        }
    }

    lista.value = Array.from(clienteMap.values());
    ordenado.value = lista.value.sort((a, b) => b.valor - a.valor);
}

carregarColaboradores();
</script>

<template>
    <div id="ranking" class="container">
        <div v-for="(item, index) in ordenado" :key="index" class="classificados">
            <p>Cliente: {{ item.cliente }}</p>
            <p>Valor: R$ {{ item.valor }}</p>
        </div>
    </div>
</template>

<style scoped>
.classificados {
    background-color: #8C52FF;
    color: white;
    padding: 10px;
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 20px;
    width: 100%;
    gap: 20px;
    margin: 10px auto;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 80%;
    margin: auto;
}
</style>
