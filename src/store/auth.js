import { defineStore } from 'pinia';
import { useStorage } from '@vueuse/core'
import axios from 'axios';
import AuthService from '@/services/auth';

import { computed } from 'vue';
import router from '@/router';

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

  console.log(localUser)

  const userStorageLocal = useStorage('user', localUser)

  async function setToken(token) {
    const dados = await authService.postUserToken(token);
    console.log(dados)
    userStorageLocal.value = {
      isLogged: true,
      email: dados.email,
      token: token,
      id: dados.id,
      verificado: dados.verified == true ? true : false,
      picture: dados.picture,
      username: dados.github_username
    };

    if(verificado.value == false){
      router.push('/dados')
    }
  }

  async function setVerify(data){
    const result = await authService.verifyService(data)
    userStorageLocal.value.verificado = result
    console.log("verificar",result)
  }

  const isLogged = computed(() => userStorageLocal.value.isLogged);
  const email = computed(() => userStorageLocal.value.email);
  const token = computed(() => userStorageLocal.value.token);
  const id = computed(() => userStorageLocal.value.id);
  const verificado = computed(() => userStorageLocal.value.verificado);
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
      verificado: false,
      picture: '',
      username: ''
    };
  }

  function setVerficado(novoDado) {
    verificado.value = novoDado;
  }

  return { localUser, setToken, unsetToken, isLogged, email, token, id, setIsLogged, setEmail, setId, setTokenPinia, setVerify, verificado, setVerficado, picture, setPicture, username, setUsername};
});