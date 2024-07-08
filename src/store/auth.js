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
    picture: '',
    username: ''
  };

  const userStorageLocal = useStorage('user', localUser)

  async function setToken(token) {
    const dados = await authService.postUserToken(token);
    setIsLogged(true);
    setEmail(dados.email);
    setTokenPinia(token);
    setId(dados.id);
    setVerficado(dados.verified);
    setPicture(dados.picture);
    setUsername(dados.github_username);
  }

  const isLogged = computed(() => userStorageLocal.value.isLogged);
  const email = computed(() => userStorageLocal.value.email);
  const token = computed(() => userStorageLocal.value.token);
  const id = computed(() => userStorageLocal.value.id);
  const verificado = computed(() => userStorageLocal.value.verificado);
  const picture = computed(() => userStorageLocal.value.picture);
  const username = computed(() => userStorageLocal.value.username)
  
  function setIsLogged(novoDado) {
    userStorageLocal.value.isLogged = novoDado;
  }

  function setEmail(novoDado) {
    userStorageLocal.value.email = novoDado;
  }

  function setTokenPinia(novoDado) {
    userStorageLocal.value.token = novoDado;
  }

  function setId(novoDado) {
    userStorageLocal.value.id = novoDado;
  }

  function setPicture(novoDado) {

    userStorageLocal.value.picture = novoDado;
  }

  function setUsername(novoDado) {
    userStorageLocal.value.username = novoDado;
  }

  function setVerficado(novoDado) {
    userStorageLocal.value.verificado = novoDado;
  }


  function unsetToken() {
    setIsLogged(false);
    setEmail(null);
    setTokenPinia(null);
    setId(null);
    setPicture('');
    setUsername('');
    setVerficado(false);
  }

  

  return { localUser, setToken, unsetToken, isLogged, email, token, id, setIsLogged, setEmail, setId, setTokenPinia, verificado, setVerficado, picture, setPicture, username, setUsername};
});