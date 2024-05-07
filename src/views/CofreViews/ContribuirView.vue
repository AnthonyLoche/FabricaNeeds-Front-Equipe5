<script setup>
import HeaderVue from '../../components/HeaderVue.vue'
import {reactive, } from 'vue'
import store from '@/store/index.js'
import { adicionar } from '@/api/api.js'

const contribuicao = reactive({
    contribuicao: 0,
    contribuinte: store.state.id,
})
</script>

<template>
    <HeaderVue />
    <h1>Contribuir</h1>
    <form action="" method="post" @submit.prevent>
        <input type="number" v-model="contribuicao.contribuicao" placeholder="Valor">
        <button @click="adicionar('contribuicoes/', contribuicao)">Contribuir</button>
    </form>
</template>

<style scoped>
</style>