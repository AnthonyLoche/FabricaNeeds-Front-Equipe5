<script setup>
import HeaderVue from '../components/HeaderVue.vue'
import axios  from 'axios';
import { reactive } from 'vue'



const usuario = reactive({
    nome: '',
    senha: ''
})

async function logar(){
    try {
        const response = await axios.post('http://localhost:8000/login', usuario)
        console.log(response.data)
    } catch (error) {
        console.error(error)
    }
}

</script>

<template>
    <HeaderVue />
    <form action="" method="post" @submit.prevent>
        <input type="text" v-model="usuario.nome" placeholder="Nome">
        <input type="password" v-model="usuario.senha" placeholder="Senha">
        <button @click="logar">Logar</button>
    </form>
</template>

<style scoped>
</style>