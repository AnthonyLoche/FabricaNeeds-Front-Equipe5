<script setup>
import { reactive, ref } from 'vue';
const demandas = ref([])
const estoque = ref([])
import { carregar } from '@/api/api';
import { adicionar } from '@/api/api';

const demanda = reactive({
    quantidade: 0,
    produto: '',
})

carregar('demandas/', demandas)
carregar('estoque/', estoque)
</script>

<template>
    <main>
        {{ demandas }}
        
    </main>
    <form action="" method="post"  @submit.prevent>
        <select name="" id="" v-model="demanda.produto">
            <option v-for="item in estoque" :key="item.id" :value="item.id">
            {{ item }}
            </option>
        </select>
        <input type="number" placeholder="quantidade" v-model="demanda.quantidade">
        <button @click="adicionar('demandas/', demanda)">Enviar</button>
        {{ demanda }}
    </form>
</template>

<style scoped>
</style>