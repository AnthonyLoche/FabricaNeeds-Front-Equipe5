import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'

import AuthService from '@/services/auth';
import { computed } from 'vue';

const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
  const localUser = {
    isLogged: false,
    email: '',
    token: '',
    id: '',
  };

  const userStorageLocal = useStorage('user', localUser)

  async function setToken(token) {
    const dados = await authService.postUserToken(token);
    userStorageLocal.value = {
      isLogged: true,
      email: dados.email,
      token: token,
      id: dados.id,
    };
    
  }

  const isLogged = computed(() => userStorageLocal.value.isLogged);
  const email = computed(() => userStorageLocal.value.email);
  const token = computed(() => userStorageLocal.value.token);
  const id = computed(() => userStorageLocal.value.id);
  
  function setIsLogged(novoDado) {
    isLogged.value = novoDado;
  }

  function setEmail(novoDado) {
    email.value = novoDado;
  }

  function setTokenPinia(novoDado) {
    token.value = novoDado;
  }

  function setId(novoDado) {
    id.value = novoDado;
  }


  function unsetToken() {
    localUser.value = {};
  }


  return { localUser, setToken, unsetToken, isLogged, email, token, id, setIsLogged, setEmail, setId, setTokenPinia, };
});