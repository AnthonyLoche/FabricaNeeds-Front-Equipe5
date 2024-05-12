<script setup>
import { reactive, ref } from 'vue';
const entradas = ref([])
const demandas = ref([])
import { carregar, adicionar } from '@/api/api';

const entrada = reactive({
    quantidade: 0,
    demanda: 0,
})

carregar('entradasEstoque/', entradas)
carregar('demandas/', demandas)
</script>

<template>
    <main>
        {{ entradas }}
    </main>
    <form action="" method="post" @submit.prevent> 
        <select name="" id="" v-model="entrada.demanda">
            <option v-for="item in demandas" :key="item.id" :value="item.id">
                {{ item }}
            </option>
        </select>
        <input type="number" placeholder="quantidade" v-model="entrada.quantidade">
        <button @click="adicionar('entradasEstoque/', entrada)">Enviar</button>
    </form>
</template>

<style scoped>
</style>