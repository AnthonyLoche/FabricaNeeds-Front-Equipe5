<script setup>
import { ref } from 'vue'
let menu = ref(false)

import { useAuthStore } from '@/store/auth.js'
const store = useAuthStore()
</script>

<template>
  <header>
    <div id="titulo">
      <h1>Fabrica Needs</h1>
    </div>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/stock">Estoque</router-link>
      <router-link v-if="store.isLogged == true" to="/user">Usuário</router-link>
    </nav>
    <div id="buttons">
      <a id="github" href="https://github.com/AnthonyLoche/FabricaNeeds-Front-Equipe5" target="_blank">
        <img src="../assets/github.svg" alt="" />
      </a>
      <router-link id="singup" to="/singin" v-if="!store.isLogged">Sing Up / Log In</router-link>
      <button v-if="store.isLogged == true" @click="store.logout()" id="btnLogout">Logout</button>
    </div>
    <button id="menu" @click="menu = !menu">&#9776;</button>
    <span id="navDois" v-if="menu == true">
      <button id="fechar" @click="menu = !menu">X</button>
      <router-link to="/">Home</router-link>
      <router-link to="/stock">Estoque</router-link>
      <router-link v-if="store.isLogged == true" to="/user">Usuário</router-link>
      <button v-if="store.isLogged == true" @click="store.logout()" id="btnLogout">Logout</button>
      <div id="botoesDois">
        <router-link id="singup" to="/singin">Sing Up / Log In</router-link>
        <a id="github" href="https://github.com/AnthonyLoche/FabricaNeeds-Front-Equipe5" target="_blank">
        <img src="../assets/github.svg" alt="" />
      </a>
      </div>
    </span>
  </header>
</template>

<style scoped>
header {
  width: 100%;
  display: flex;
  justify-content: space-around;
  color: white;
  align-items: center;
  padding: 30px;
  border-bottom: 2px solid #8c52ff;
  background-color: #8c52ff;
  margin-bottom: 3rem;
}

span#navDois > a:hover {
  opacity: 1;
  border-bottom: 2px solid white;
  transition: 0.5s;
  color: white;
}

button#menu {
  display: none;
}

#navDois {
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    gap: 20px;
    z-index: 10;
    top: 0;
    left: 0;
    width: 150px;
    background-color: #8C52FF;
    height: 100%;
}

#titulo {
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

a {
  color: white;
  text-decoration: none;
  border-bottom: 2px solid white;
  opacity: 1;
}

a:hover {
  opacity: 1;
  border-bottom: 2px solid #8c52ff;
  transition: 0.5s;
}

nav {
  display: flex;
  gap: 20px;
  align-items: center;
  font-size: 20px;
  color: white;
}
#btnLogout {
  color: white;
  padding: 10px;
  background-color: #8c52ff;
  border: 2px solid rgb(46 46 46);
  border-radius: 10px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  justify-content: center;
  cursor: pointer;
}
#buttons {
  display: flex;
  gap: 20px;
}

#botoesDois {
  display: none;
  gap: 20px;
}

a#github {
  color: white;
  padding: 10px;
  background-color: #8c52ff;
  border: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

a#singup {
  color: white;
  padding: 10px;
  background-color: rgb(46 46 46);
  border: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button#fechar {
  color: white;
  background-color: transparent;
  font-size: 20pt;
  padding: 10px;
  border: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

a#login {
  color: white;
  padding: 10px;
  background-color: #8c52ff;
  border: 0;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

a#github img {
  width: 30px;
  height: 30px;
}

@media screen and (max-width: 1024px) {
  nav {
    display: none;
  }

  header {
    justify-content: space-between;
  }

  #buttons {
    display: none;
  }

  #botoesDois {
    display: flex;
    flex-direction: column;
  }

  button#menu {
    color: white;
    padding: 10px;
    background-color: transparent;
    border: 0;
    font-size: 25pt;
    display: flex;
    cursor: pointer;
  }
}
</style>
