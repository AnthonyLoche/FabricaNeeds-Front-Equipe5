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
    verificado: false,
  };

  const userStorageLocal = useStorage('user', localUser)

  async function setToken(token) {
    const dados = await authService.postUserToken(token);
    userStorageLocal.value = {
      isLogged: true,
      email: dados.email,
      token: token,
      id: dados.id,
      verificado: false,
    };
  }

  async function setVerify(data){
    const result = await authService.verifyService(data)
    userStorageLocal.value.verificado = result
  }

  const isLogged = computed(() => userStorageLocal.value.isLogged);
  const email = computed(() => userStorageLocal.value.email);
  const token = computed(() => userStorageLocal.value.token);
  const id = computed(() => userStorageLocal.value.id);
  const verificado = computed(() => userStorageLocal.value.verificado);
  
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
  function setVerficado(novoDado) {
    verificado.value = novoDado;
  }


  return { localUser, setToken, unsetToken, isLogged, email, token, id, setIsLogged, setEmail, setId, setTokenPinia, setVerify, verificado, setVerficado };
});