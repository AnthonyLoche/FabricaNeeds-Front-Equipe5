<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/store/auth.js'
import router from '@/router';

const store = useAuthStore()
</script>
<template>
    <div class="container">
        <button @click="router('/stock')"><img src="../assets/estoque_logo.svg" alt="">Estoque</button>
        <button @click="router('/demands')"><img src="../assets/demandas_logo.svg" alt="">Demandas</button>
        <button class="getout-button" @click="store.unsetToken()"><img src="../assets/sair.svg" alt="">Sair</button>
    </div>
</template>
<style scoped>
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin: 2rem auto;
}

button {
    display: flex;
    align-items: center;
    font-size:16px;
    width: 80%;
    padding: 1rem;
    cursor: pointer;
    margin: 1rem auto;
    border-radius: 1rem;
    border: none;
    margin: auto;
    background-color: #fff;
}

button>img {
    width: 30px;
    height:30px;
    margin: 0 .5rem;
}
.getout-button {
    margin: 25rem auto;
}
</style>