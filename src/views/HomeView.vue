<script setup>
import { Suspense, onMounted } from 'vue';
import HeaderVue from '@/components/HeaderVue.vue';
import FooterVue from '@/components/FooterVue.vue';
import CofreVue from '@/components/CofreVue.vue';
import ListaRanking from '@/components/ListaRanking.vue';
import loading from 'vue-loading-overlay';

import { PassageUser } from '@passageidentity/passage-elements/passage-user';
import { useAuthStore } from '@/store/auth';

const authStore = useAuthStore();

const getUserInfo = async () => {
  try {
    const authToken = localStorage.getItem('psg_auth_token');
    const passageUser = new PassageUser(authToken);
    const user = await passageUser.userInfo(authToken);
    if (user) {
      await authStore.setToken(authToken);
    } else {
      authStore.unsetToken();
    }
  } catch (error) {
    authStore.unsetToken();
  }
};

onMounted(() => {
  getUserInfo();
});
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
