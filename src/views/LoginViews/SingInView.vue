<script setup>
import HeaderVue from '@/components/HeaderVue.vue'
import FooterVue from '@/components/FooterVue.vue'
import '@passageidentity/passage-elements/passage-auth';
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
