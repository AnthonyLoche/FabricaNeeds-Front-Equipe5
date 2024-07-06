<script setup>
import HeaderVue from '@/components/HeaderVue.vue'
import FooterVue from '@/components/FooterVue.vue'
import '@passageidentity/passage-elements/passage-auth';

import { useAuthStore } from '@/store/auth';
import notify from '@/notify/toastify';
import router from '@/router';
const store = useAuthStore();

if(store.isLogged){
  router.push('/')
  notify('Você já está logado', 'info')
  setTimeout(() => {
    router.push('/')
  }, 2000)
}

</script>


<template>
  <HeaderVue />
  <div class="authContainer">
    <passage-auth
      app-id="taS2L6fUxtDiTBazd99yHi2D"
    ></passage-auth>
  </div>
  <FooterVue />
</template>
