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
    setIsLogged(true);
    setEmail(dados.email);
    setToken(token);
    setId(dados.id);
    setVerficado(dados.verified == true? true : false);

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

  

  return { localUser, setToken, unsetToken, isLogged, email, token, id, setIsLogged, setEmail, setId, setTokenPinia, setVerify, verificado, setVerficado, picture, setPicture, username, setUsername};
});