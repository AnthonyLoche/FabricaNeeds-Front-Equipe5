<script setup>
import { useCounterStore } from '@/store';
import { ref } from 'vue'
const store = useCounterStore()

const token = ref("")
</script>
<template>
    <div class="container" v-if="!store.verificado">
        <h2>Insira o token de verificação</h2>
        <p>Foi enviado um token de verificação para o seu email</p>
        <span></span>
        <form @submit.prevent>
            <div>
            <label for="">Token:</label>
            <input type="text" v-model="token" placeholder="Token de verificação" class="input" maxlength="6"></div>
            <button @click="store.enviarToken({token})">Enviar token</button>
        </form>
    </div>
</template>
<style scoped>
.container{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    margin: 1rem auto;
    max-width: 400px;   
    background-color: transparent;
    border: 2px solid #8C52FF;
    border-radius: .5rem;
    color: white;
    height: 300px;
}
h2{
    margin-bottom: 1rem;
    text-align: center;
}
label{
    margin-bottom: .5rem;
    width: 20%;
}
p{
    margin-bottom: 1rem;
    width: 90%;
}
span{
    width: 95%;
    height: 1px;
    border: 1px solid #8C52FF;
}
.input {
    background-color: transparent;
    color: white;
    width: 70%;
    height: 40px;
    padding: 10px;
    /* text-align: center; */
    border: 2px solid #8C52FF;
    border-radius: 1rem;
    /* box-shadow: 3px 3px 2px rgb(249, 255, 85); */
}
form{
    display: flex;
    width: 90%;
    margin-top: 2rem;
    align-items: center;
    flex-direction: column;
}
form>div{
    margin-bottom: 1rem;
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.input:focus {
    color: white;
    background-color: transparent;
    outline-color: #8C52FF;
    box-shadow: -3px -3px 15px #8C52FF;
    transition: .1s;
    transition-property: box-shadow;
}
button{
    background-color: #8C52FF;
    color: white;
    border: none;
    padding: 10px 20px; 
    border-radius: 1rem;
    margin: 1rem auto;
}
@media screen and (max-width: 1024px) {
    .container{
        width: 80%;
    }
}
</style>