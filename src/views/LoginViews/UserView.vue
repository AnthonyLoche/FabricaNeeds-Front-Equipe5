<script setup>
import HeaderVue from '@/components/HeaderVue.vue'
import FooterVue from '@/components/FooterVue.vue'
import { useAuthStore } from '@/store/auth';
const store = useAuthStore();
</script>

<template>
    <HeaderVue />
    <h1>Pagina de Usuario</h1>
    <p>Nome: {{ store.username }}</p>
    <img :src="store.picture" alt="">
    <FooterVue />
</template>