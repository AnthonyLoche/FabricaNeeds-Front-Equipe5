<script setup>
import { reactive, ref } from 'vue'
import loading from 'vue-loading-overlay'
import { useUserStore } from '@/store'
import { registerService } from '@/services'

const store = useUserStore()

import notify from '@/notify/toastify.js';
import router from '@/router';
 

const usuario = reactive({
  nome: '',
  email: '',
  senha: ''
})

const nameInput = ref('')
const passwordInput = ref('')

const loginView = async (name, password) => {
  try {
    const loginFuncao = await store.loginStore({ name, password })
    if (loginFuncao == true) {
      notify('sucess', 'Logado com Sucesso')
      setTimeout(() => {
        router.push('/')
      }, 1500)
    }
  } catch (error) {
    toast.error(error.message, { autoClose: 1000 })
  }
}

let loadingDiv = ref(null)
const card = ref(null)
const btnSign = ref(null)
const btnLogin = ref(null)
const giraCard1 = () => {
  card.value.classList.remove('rotate2')
  card.value.classList.add('rotate')
  btnSign.value.classList.remove('border-selection')
  btnLogin.value.classList.add('border-selection')
}
const giraCard2 = () => {
  card.value.classList.remove('rotate')
  card.value.classList.add('rotate2')
  btnLogin.value.classList.remove('border-selection')
  btnSign.value.classList.add('border-selection')
}
</script>

<template>
  <main>
    <div class="container-cadastro-logoFabrica">
      <div class="container">
        <div class="buttons-login-sigin">
          <button @click="giraCard2" ref="btnSign" class="border-selection">Sign In</button
          ><button @click="giraCard1" ref="btnLogin">Login</button>
        </div>
        <section>
          <div id="card" ref="card">
            <div id="signIn">
              <form action="" method="post" @submit.prevent>
                <h2>Cadastre-se:</h2>
                <input type="text" v-model="usuario.nome" placeholder="Username" class="input" />
                <input type="email" v-model="usuario.email" placeholder="Email" class="input" />
                <input type="password" v-model="usuario.senha" placeholder="Senha" class="input" />
                <button @click="registerService(usuario)">Cadastrar</button>
              </form>
            </div>
            <div id="logIn">
              <div class="loadingDiv" ref="loadingDiv">
                <loading
                  :active="true"
                  is-full-page
                  style="justify-content: center; display: flex; margin: auto"
                />
              </div>
              <form action="" method="post" @submit.prevent>
                <h2>Login:</h2>
                <input type="text" v-model="nameInput" placeholder="Username" class="input" />
                <input type="password" v-model="passwordInput" placeholder="Senha" class="input" />
                <button @click="loginView(nameInput, passwordInput)">Login</button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <div class="logo"><img src="../assets/logo_fabrica.png" alt="" /></div>
    </div>
  </main>
</template>

<style scoped>
section {
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: auto;
  height: 450px;
}

.buttons-login-sigin {
  height: 50px;
  background-color: transparent;
  margin: auto;
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  margin-bottom: 0;
}

.buttons-login-sigin > button {
  height: 50px;
  width: 25%;
  font-size: 18px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: rgb(35 35 35);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  z-index: 2;
}

.border-selection {
  height: 107% !important;
  border-top: 2px solid #8c52ff !important;
  border-left: 2px solid #8c52ff !important;
  border-bottom: none !important;
  border-right: 2px solid #8c52ff !important;
  border-radius: 0.5rem 0.5rem 0 0 !important;
  transition: 100ms;
}

#card {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  transition: all 0.5s ease;
  border-radius: 10px;
}

#signIn {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  backface-visibility: hidden;
  background: transparent;
  color: white;
  border-top: 2px solid #8c52ff;
  border-right: none;
  border-bottom: none;
  border-left: none;
}

form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 90%;
  margin: auto;
}

form > h2 {
  color: white;
  font-size: 24px;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

form > button {
  width: 80%;
  height: 40px;
  margin: 10px;
  padding: 10px;
  border-radius: 2rem;
  background-color: #8c52ff;
  color: white;
  border: 2px solid #8c52ff;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

#logIn {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  backface-visibility: hidden;
  background: transparent;
  color: #fff;
  border-top: 2px solid #8c52ff;
  border-right: none;
  border-bottom: none;
  border-left: none;
  transform: rotateY(180deg);
}

.rotate {
  transform: rotateY(180deg);
}

.rotate2 {
  transform: rotateY(0deg);
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
}

.logo {
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.logo > img {
  height: 100%;
  width: 100%;
  margin-top: 10%;
}

.container-cadastro-logoFabrica {
  display: flex;
  margin: auto;
  justify-content: center;
  width: 80%;
  background-color: rgb(35 35 35);
  padding: 15px;
  border-radius: 10px;
}

.input {
  background-color: transparent;
  color: white;
  width: 80%;
  height: 40px;
  padding: 10px;
  /* text-align: center; */
  border: 2px solid #8c52ff;
  border-radius: 1rem;
  /* box-shadow: 3px 3px 2px rgb(249, 255, 85); */
}

.input:focus {
  color: white;
  background-color: transparent;
  outline-color: #8c52ff;
  box-shadow: -3px -3px 15px #8c52ff;
  transition: 0.1s;
  transition-property: box-shadow;
}

.erroInputs {
  display: none;
  height: 60px;
  background-color: transparent;
  border: 2px solid red;
  border-radius: 1rem;
  width: 80%;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.showErroInputs {
  display: flex;
}

.loadingDiv {
  display: none;
  height: 60px;
  margin: auto;
  background-color: transparent;
  border: 2px solid #8c52ff;
  border-radius: 1rem;
  width: 80%;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.loadingDiv > img {
  width: 50px;
  height: 50px;
}

.showLoadingDiv {
  display: flex;
}

.successMensage {
  display: none;
  height: 60px;
  background-color: transparent;
  border: 2px solid green;
  border-radius: 1rem;
  width: 80%;
  margin: auto;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}

.showSuccessMensage {
  display: flex;
}
@media screen and (max-width: 1024px) {
  .container-cadastro-logoFabrica {
    flex-direction: column;
    margin: auto;
    width: 80%;
  }

  .container {
    width: 80%;
    margin: auto;
  }

  .logo {
    width: 50%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
