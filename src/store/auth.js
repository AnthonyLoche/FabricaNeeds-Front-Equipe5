import { computed } from 'vue';
import router from '@/router';
import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'
import AuthService from '@/services/auth';

const authService = new AuthService();

export const useAuthStore = defineStore('auth', () => {
  const localUser = {
    isLogged: false,
    email: '',
    token: '',
    id: '',
    picture: '',
    username: ''
  };

  const userStorageLocal = useStorage('user', localUser)

  async function setToken(token) {
    const dados = await authService.postUserToken(token);
    userStorageLocal.value = {
      isLogged: true,
      email: dados.email,
      token: token,
      id: dados.id,
      picture: dados.picture,
      username: dados.username
    };
  }

  const isLogged = computed(() => userStorageLocal.value.isLogged);
  const email = computed(() => userStorageLocal.value.email);
  const token = computed(() => userStorageLocal.value.token);
  const id = computed(() => userStorageLocal.value.id);
  const picture = computed(() => userStorageLocal.value.picture);
  const username = computed(() => userStorageLocal.value.username)
  
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

  function setPicture(novoDado) {
    picture.value = novoDado;
  }

  function setUsername(novoDado) {
    username.value = novoDado;
  }

  function unsetToken() {
    userStorageLocal.value = {
      isLogged: false,
      email: null,
      token: null,
      id: null,
      picture: '',
      username: '',
    };
    localStorage.clear();
    router.push('/')
  }

  return { localUser, setToken, unsetToken, isLogged, email, token, id, setIsLogged, setEmail, setId, setTokenPinia, picture, setPicture, username, setUsername};
});