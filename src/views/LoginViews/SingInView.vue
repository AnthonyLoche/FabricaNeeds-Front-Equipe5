<script setup>
import HeaderVue from '@/components/HeaderVue.vue'
import { adicionar } from '@/api/api.js'
import { reactive, ref } from 'vue'
import axios from 'axios';
import store from '@/store/index.js'

const usuario = reactive({
  nome: '',
  email: '',
  senha: ''
})

const login = reactive({
  nome: '',
  senha: ''
})

function salvarDado(dado) {
    store.commit('setisLoged', dado)
}

function salvarUsuario(dado) {
    store.commit('setUsuario', dado)
}

async function logar() {
    try {
        const response = await axios.post('https://fabricaneeds-back-equipe5-3edw.onrender.com/login', login)
        console.log(response.data)
        salvarDado(true)
        salvarUsuario(login.nome)
    } catch (error) {
        console.error(error)
    }
}





const card = ref(null);
const btnSign = ref(null);
const btnLogin = ref(null);
const giraCard1 = () => {
  card.value.classList.remove('rotate2')
  card.value.classList.add('rotate')
  btnSign.value.classList.remove("border-selection")
  btnLogin.value.classList.add("border-selection")
}
const giraCard2 = () => {
  card.value.classList.remove('rotate')
  card.value.classList.add('rotate2')
  btnLogin.value.classList.remove("border-selection")
  btnSign.value.classList.add("border-selection")
}
</script>

<template>
  <HeaderVue />
  <main>
    <div class="container-cadastro-logoFabrica">
    <div class="container">
    <div class="buttons-login-sigin">
        <button @click="giraCard2" ref="btnSign" class="border-selection">Sign In</button><button @click="giraCard1" ref="btnLogin">Login</button>
      </div>
    <section>
      <div id="card" ref="card">
        <div id="signIn">
          <form action="" method="post" @submit.prevent>
            <h2>Cadastre-se:</h2>
            <input type="text" v-model="usuario.nome" placeholder="Nome" class="input" />
            <input type="email" v-model="usuario.email" placeholder="Email" class="input" />
            <input type="password" v-model="usuario.senha" placeholder="Senha" class="input" />
            <button @click="adicionar('contribuinte/', usuario)">Cadastrar</button>
          </form>
        </div>
        <div id="logIn">
          <form action="" method="post" @submit.prevent>
            <h2>Login:</h2>
            <input type="text" v-model="login.nome" placeholder="Email"  class="input" />
            <input type="password" v-model="login.senha" placeholder="Senha"  class="input" />
            <button @click="logar">Login</button>
          </form>
        </div>
      </div>
    </section>
  </div>
  <div class="logo"><img src="../../assets/logo_fabrica.png" alt=""></div>
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
  height: 400px;
}
.buttons-login-sigin{
height: 50px;
background-color: transparent;
margin: auto;
display: flex;
justify-content: space-around;
align-items: center;
width: 100%;
margin-bottom: 0;
}
.buttons-login-sigin > button{
  height: 50px;
  width: 25%;
  font-size: 18px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: rgb(26 26 26);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: .5rem;
  z-index: 2;

}
.border-selection{
  height: 105% !important;
  border-top: 2px solid #8C52FF !important;
  border-left: 2px solid #8C52FF !important;
  border-bottom: none !important;
  border-right: 2px solid #8C52FF !important;
  border-radius: .5rem .5rem 0 0 !important;
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
  border-top: 2px solid  #8C52FF;
  border-right: none;
  border-bottom: none;
  border-left: none;
}
form{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100%;
  width: 90%;
  margin: auto;
}
form > h2{
  color: white;
  font-size: 24px;
  text-align: center;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
form > button{
  width: 80%;
  height: 40px;
  margin: 10px;
  padding: 10px;
  border-radius: 2rem;
  background-color: #8C52FF;
  color: white;
  border: 2px solid #8C52FF;
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
  border-top: 2px solid  #8C52FF;
  border-right: none;
  border-bottom: none;
  border-left: none;
  transform: rotateY(180deg);
}

.rotate {
  transform: rotateY(180deg);
}
.rotate2{
  transform: rotateY(0deg);
}.container{
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30%;
}
.logo{
  width: 30%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo > img{
  height: 100%;
  width: 100%;
  margin-top: 10%;
}
.container-cadastro-logoFabrica{
  display: flex;
  margin: auto;
  justify-content: center;
  width: 80%;
  /* border: 2px solid #8C52FF; */
}
.input {
  background-color: transparent;
  color: white;
  width: 80%;
  height: 40px;
  padding: 10px;
  /* text-align: center; */
  border: 2px solid #8C52FF;
  border-radius: 1rem; 
  /* box-shadow: 3px 3px 2px rgb(249, 255, 85); */
}

.input:focus {
  color:  white;
  background-color: transparent;
  outline-color: #8C52FF;
  box-shadow: -3px -3px 15px #8C52FF;
  transition: .1s;
  transition-property: box-shadow;
}
/* section>form>h2 {
    color: white;
    font-size: 24px;
    text-align: center;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    width: 50%;
    height: 80%;
}

form>input {
    width: 100%;
    height: 40px;
    margin: 10px;
    padding: 10px;
    border-radius: 2rem;
    background-color: transparent;
    color: white;
    border: 2px solid #8C52FF;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

form>button {
    width: 100%;
    height: 40px;
    margin: 10px;
    padding: 10px;
    border-radius: 2rem;
    background-color: #8C52FF;
    color: white;
    border: 2px solid #8C52FF;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.logoCofre {
    width: 30%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}

.logoCofre>img {
    height: 100%;
    width: 100%;
} */
</style>
