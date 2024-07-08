<script setup>
import { Suspense } from 'vue';
import HeaderVue from '@/components/HeaderVue.vue';
import FooterVue from '@/components/FooterVue.vue';
import CofreVue from '@/components/CofreVue.vue';
import ListaRanking from '@/components/ListaRanking.vue';
import loading from 'vue-loading-overlay';
import { getUserInfoComposable } from '@/composables/user.js';
getUserInfoComposable();

</script>

<template>
  <HeaderVue />
  <Suspense>
    <template #default>
      <CofreVue />
    </template>
    <template #fallback>
      <loading :active="true" is-full-page style="justify-content: center; display: flex; margin:auto" />
    </template>
  </Suspense>
  <ListaRanking />
  <FooterVue />
</template>
