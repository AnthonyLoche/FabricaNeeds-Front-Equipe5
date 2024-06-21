<script setup>
import HeaderVue from '@/components/HeaderVue.vue'
import FooterVue from '@/components/FooterVue.vue';
import NotifyVue from '@/components/NotifyVue.vue';
import { adicionar } from '@/api/api.js'
import { reactive, ref } from 'vue'
import axios from 'axios';
import store from '@/store/index.js'
import router from '@/router'

const erroVisivel = ref('')
const cor = ref('')

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
        console.log(response)
        salvarDado(true)
        salvarUsuario(login.nome)

        cor.value = 'green'
        erroVisivel.value = 'Logado com sucesso!'
        
        setTimeout(() => {
            router.push('/')
        }, 2000)
      }
       catch (error) {
        if (error.response.status === 401) {
          erroVisivel.value = 'Usuário ou senha incorretos!'
        }
        else if (error.response.status === 500) {
          erroVisivel.value = 'Erro no servidor, sentimos muito por isso :('
        }
        else if (error.response.status === 404) {
          erroVisivel.value = 'Usuário não encontrado!'
        }
    }
}
function verificarCadastro(){
    if(usuario.nome == ''){
      erroVisivel.value = 'Insira um nome de usuário válido!'
      cor.value = 'red'
    }
    else if(usuario.email == '' || !usuario.email.includes('@')){
      erroVisivel.value = 'Insira um email válido!'
      cor.value = 'red'
    }
    else if(usuario.senha == ''){
      cor.value = 'red'
      erroVisivel.value = 'Insira uma senha válida!'
    }
    else{
      adicionar('contribuinte/', usuario)
      cor.value = 'green'
      erroVisivel.value = 'Usuário Cadastrado Com Sucesso!'
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
            <input type="text" v-model="usuario.nome" placeholder="Username" class="input" />
            <input type="email" v-model="usuario.email" placeholder="Email" class="input" />
            <input type="password" v-model="usuario.senha" placeholder="Senha" class="input" />
            <button @click="verificarCadastro">Cadastrar</button>
          </form>
        </div>
        <div id="logIn">
          <div class="loadingDiv" ref="loadingDiv">
            <img src="../../assets/gif_carregando.gif" alt="">
          </div>
          <div class="successMensage" ref="successMensage">
            <p>Logado com sucesso!</p>
          </div>
          <form action="" method="post" @submit.prevent>
            <h2>Login:</h2>
            <input type="text" v-model="login.nome" placeholder="Username"  class="input" />
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
  <FooterVue />
  <div v-if="erroVisivel != ''">
  <NotifyVue :erro="erroVisivel" :cor="cor" />
</div>
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
  background-color: rgb(35 35 35);
  color: white;
  border: none;
  cursor: pointer;
  border-radius: .5rem;
  z-index: 2;

}
.border-selection{
  height: 107% !important;
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
.erroInputs{
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
.showErroInputs{
  display: flex ;
}
.loadingDiv{
  display: none;
  height: 60px;
  margin: auto;
  background-color: transparent;
  border: 2px solid #8C52FF;
  border-radius: 1rem;
  width: 80%;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.loadingDiv > img{
  width: 50px;
  height: 50px;
}
.showLoadingDiv{
  display: flex ;
}
.successMensage{
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
.showSuccessMensage{
  display: flex ;
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

@media screen and (max-width: 1024px) {
  .container-cadastro-logoFabrica{
    flex-direction: column;
    margin: auto;
    width: 80%;
  }
  .container{
    width: 80%;
    margin: auto;
  }
  .logo{
    width: 50%;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
