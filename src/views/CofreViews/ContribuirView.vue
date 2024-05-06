<script setup>
import HeaderVue from '../../components/HeaderVue.vue'
import {reactive, } from 'vue'
import store from '@/store/index.js'
import axios from 'axios'

const contribuicao = reactive({
    contribuicao: 0,
    contribuinte: store().getId,
})



async function contribuir(){
    try {
        const response = await axios.post('http://localhost:8000/contribuicoes/', contribuicao)
        console.log(response.data)
        console.log(contribuicao)
    } catch (error) {
        console.error(error)
        console.log(contribuicao)
    }
}
</script>

<template>
    <HeaderVue />
    <h1>Contribuir</h1>
    <form action="" method="post" @submit.prevent>
        <input type="number" v-model="contribuicao.contribuicao" placeholder="Valor">
        <button @click="contribuir">Contribuir</button>
    </form>
</template>

<style scoped>
</style>