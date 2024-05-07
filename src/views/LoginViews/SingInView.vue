<script setup>
import HeaderVue from '@/components/HeaderVue.vue';
import {adicionar} from '@/api/api.js'
import {reactive} from 'vue'

const usuario = reactive({
    nome: '',
    email: '',
    senha: ''
})

</script>

<template>
    <HeaderVue />
    <main>
        <h2>Cadastre se</h2>
        <form action="" method="post" @submit.prevent>
        <label for="">Nome</label>
        <input type="text" v-model="usuario.nome" placeholder="Nome">
        <label for="">Email</label>
        <input type="email" v-model="usuario.email" placeholder="Email">
        <label for="">Senha</label>
        <input type="password" v-model="usuario.senha" placeholder="Senha">
        <button @click="adicionar('contribuinte/', usuario)">Cadastrar</button>
        </form>
    </main>

</template>

<style scoped></style>