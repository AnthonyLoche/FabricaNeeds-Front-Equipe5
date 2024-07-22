<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { useAuthStore } from '@/store/auth.js'
import AsideButtons from './AsideButtons.vue';

const store = useAuthStore()
</script>
<template>
    <aside>
        <div class="logo">
            <img src="../assets/new_logo_fabrica.svg" alt="logo" />
        </div>
        <AsideButtons />
    </aside>
</template>
<style scoped>
aside {
    background-color: #fff;
    width: 18%;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    border-radius: 0 1rem 1rem 0;
    padding: 1rem;
    display: flex;
    flex-direction: column;
}
.logo {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    }
.logo > img{
    width: 80%;
    height: 3rem;
}
</style>