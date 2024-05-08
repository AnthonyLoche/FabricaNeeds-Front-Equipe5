<script setup>
import { ref } from 'vue'
let menu = ref(false)
import store from '@/store/index.js'
</script>

<template>
    <header>
        <div id="titulo">
            <h1>Fabrica Needs</h1>
        </div>
        <nav>
            <router-link to="/">Home</router-link>
            <router-link to="/about">Cofre</router-link>
            <router-link to="/about">Estoque</router-link>
            <router-link to="/about">Fábrica</router-link>
        </nav>
        <div id="botoes">
            <router-link id="github" to="/">
                <img src="../../public/github.svg" alt="">
            </router-link>
            <router-link id="singup" to="/singin">Sing Up</router-link>
            <router-link id="login" to="/login">Log in</router-link>
            <button v-if="store.state.isLoged" @click="store.commit('logout')">Logout</button>
        </div>
        <button id="menu" @click="menu = !menu">&#9776;</button>
        <span id="navDois" v-if="menu == true">
            <button id="fechar" @click="menu = !menu">X</button>
            <router-link to="/">Home</router-link>
            <router-link to="/about">Cofre</router-link>
            <router-link to="/contribuir">Contribuir</router-link>
            <router-link to="/about">Estoque</router-link>
            <router-link to="/about">Fábrica</router-link>
            <button v-if="store.state.isLoged" @click="store.commit('logout')">Logout</button>
            <div id="botoesDois">
                <router-link id="singup" to="/singin">Sing Up</router-link>
                <router-link id="singup" to="/login">Log in</router-link>
                <router-link id="github" to="/">
                    <img src="../../public/github.svg" alt="">
                </router-link>
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
    border-bottom: 2px solid #8C52FF;
    background-color: #8C52FF;
    margin-bottom: 3rem;
}

span#navDois>a:hover {
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
    border-bottom: 2px solid #8C52FF;
    transition: 0.5s;
}

nav {
    display: flex;
    gap: 20px;
    align-items: center;
    font-size: 20px;
    color: white;
}

#botoes {
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
    background-color: #8C52FF;
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
    background-color: #8C52FF;
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

    #botoes {
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