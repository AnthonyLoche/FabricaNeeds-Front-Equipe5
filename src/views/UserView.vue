<script setup>
import HeaderVue from '../components/HeaderVue.vue'
import store from '@/store/index.js'
</script>

<template>
    <HeaderVue />
<h2>    {{ store().getUsuario }}</h2>
<h2>{{ store().getPessoas }}</h2>
<h2>
    {{ store().getId }}
</h2>
</template>

<style scoped>
h2{
    color: white;
    font-size: 30px;
    margin-top: 100px;
    text-align: center;
}
</style>