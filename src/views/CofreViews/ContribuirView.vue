<script setup>
import HeaderVue from '../../components/HeaderVue.vue'
import FooterVue from '../../components/FooterVue.vue'
import { reactive, ref } from 'vue'
import axios from 'axios';

import { useCounterStore } from '@/store';
const store = useCounterStore()


import router from '@/router'

if(store.state.isLoged == 'false'){
    document.write('<body style= "background-color: rgb(26 26 26)"><div style= "width: 30%;display: flex;justify-content: center;align-items: center;color: white;margin: 5% auto;height: 110px;background-color: rgb(26 26 26);border: 2px solid red;border-radius: 1rem;font-size: 1.2rem;z-index: 5;"><p>Você precisa estar logado para acessar essa página</p></div><div style="margin: auto;width: 30%;display: flex;justify-content:center "><button style="width: 30%;margin: auto;font-size: 16px;height: 40px;background-color: #8C52FF;color: white;border: none;cursor: pointer;border-radius: 1rem;margin-top: .5rem;z-index: 4;" onclick="window.location.reload(true)">Login</button></div></body>')
    router.push("/singin")
}

const isOpen = ref(false)
const pagamento = reactive({
    paymentData: {
        transaction_amount: 0,
        description: "",
        paymentMethodId: "pix",
        email: '',
        identificationType: "CPF",
        number: 0
    }
})
let valueErrorMensage = ref(null);
let cpfErrorMensage = ref(null);
let descriptionErrorMensage = ref(null);
let emailErrorMensage = ref(null);
async function testePagar(objeto) {
    if(pagamento.paymentData.transaction_amount <= 0 || pagamento.paymentData.transaction_amount == ""){
        cpfErrorMensage.value.classList.remove('showErroInputs');
        descriptionErrorMensage.value.classList.remove('showErroInputs');
        emailErrorMensage.value.classList.remove('showErroInputs');
        valueErrorMensage.value.classList.add('showErroInputs');
    }
    else if(pagamento.paymentData.number == "" || pagamento.paymentData.number.length != 11){
        valueErrorMensage.value.classList.remove('showErroInputs');
        descriptionErrorMensage.value.classList.remove('showErroInputs');
        emailErrorMensage.value.classList.remove('showErroInputs');
        cpfErrorMensage.value.classList.add('showErroInputs');
    }
    else if(pagamento.paymentData.description == ""){
        valueErrorMensage.value.classList.remove('showErroInputs');
        cpfErrorMensage.value.classList.remove('showErroInputs');
        emailErrorMensage.value.classList.remove('showErroInputs');
        descriptionErrorMensage.value.classList.add('showErroInputs');
    }
    else if(pagamento.paymentData.email == ""){
        valueErrorMensage.value.classList.remove('showErroInputs');
        cpfErrorMensage.value.classList.remove('showErroInputs');
        descriptionErrorMensage.value.classList.remove('showErroInputs');
        emailErrorMensage.value.classList.add('showErroInputs');
    }
    else{
    valueErrorMensage.value.classList.remove('showErroInputs');
    cpfErrorMensage.value.classList.remove('showErroInputs');
    descriptionErrorMensage.value.classList.remove('showErroInputs');
    emailErrorMensage.value.classList.remove('showErroInputs');
    console.log(objeto)
    const { data } = await axios.post("https://webhook.peraza.live/pagamento/", objeto)
    const teste = reactive({
        id: data.result.id,
        cliente: store.state.usuario,
        email: pagamento.paymentData.email,
        cpf: pagamento.paymentData.number,
        valor: pagamento.paymentData.transaction_amount,
        status: "Pendente",
        data_pagamento: new Date(),
        data_aprovacao: "",
        descricao: pagamento.paymentData.description,
        pix_copiacola: data.result.point_of_interaction.transaction_data.qr_code
    })
    const { teste2 } = await axios.post("https://webhook.peraza.live/cadastrarPagamento/", teste)
    console.log(teste2)
    console.log(data)
    isOpen.value = true
    window.open(data.result.point_of_interaction.transaction_data.ticket_url)
}
}
console.log(store.state.email)
</script>
<template>
    <HeaderVue />
    <section>
        <div class="ladoForm">
    <h1>Contribuir</h1>
    <form action="" method="post" @submit.prevent> 
        <div class="input-label">
            <label for="valor">Valor:</label>
            <input type="number" v-model="pagamento.paymentData.transaction_amount" placeholder="Valor" required class="input">
        </div>
        <div class="erroInputs" ref="valueErrorMensage">
                <p>O valor não pode ser 0 ou negativo</p>
        </div>
            <div class="input-label">
            <label for="">CPF:</label>
            <input type="text" v-model="pagamento.paymentData.number" required class="input"></div>
            <div class="erroInputs" ref="cpfErrorMensage">
                    <p>Insira um CPF Válido!</p>
            </div>
            <div class="input-label">
            <label for="">Descrição:</label>
            <input type="text" v-model="pagamento.paymentData.description" class="input"></div>
            <div class="erroInputs" ref="descriptionErrorMensage"><p>Por Favor, Insira uma descrição</p></div>
            <div class="input-label">
            <label for="">Email</label>
            <input type="email" v-model="pagamento.paymentData.email" class="input">
        </div>
        <div class="erroInputs" ref="emailErrorMensage">
                <p>Insira um Email Válido!</p>
        </div>
            <button @click="testePagar(pagamento)">Pagar</button>
    </form>
</div>
<div class="ladoImg">

    <div class="cofreImg"><img src="../../assets/Cofre.png" alt=""></div>
    
</div>
</section><FooterVue />
</template>

<style scoped>
section{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 60%;
    margin: auto;
    background-color: rgb(35 35 35);
    border-radius: .5rem;
}
.ladoForm{
    width: 50%;
    margin-top: 2rem;
    display: flex;
    flex-direction: column; 
    align-items: center;
}
.ladoForm > h1{
    color: white;
    font-size: 2rem;
    margin-bottom: 1.5rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.input-label{
display: flex;
margin-top: 5%;
margin-bottom: 5%;
width: 100%;
flex-wrap: nowrap;
justify-content: space-between;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    /* align-items: center; */
    width: 80%;
    padding: 1rem;
    height: 440px;
}
.input-label > label{
/* font-size: 1.5rem; */
    color: white;
    margin-left: 3%;
    margin-top: 3%;
    margin-bottom: 2%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
form > button{
    width: 50%;
    margin: auto;
    font-size: 16px;
    height: 40px;
    background-color: #8C52FF;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    margin-top: 1rem;
}
.input {
  background-color: transparent;
  color: white;
  width: 65%;
  height: 40px;
  /* margin: auto; */
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
.ladoImg{
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.moedasImg{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 40%;
    height: 100%;
}
.rotate1{
    transform: rotate(45deg);
}
.rotate2{
    transform: rotate(90deg);
}
.rotate3{
    transform: rotate(135deg);
}
.rotate4{
    transform: rotate(180deg);
}
.moedasImg > img{
    width: 20%;
    margin: 1rem;
    height: 40%;
}
.cofreImg{
    width: 80%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.cofreImg > img{
    width: 80%;
    height: 80%;
    animation: animationPorco 1s infinite;
}
.erroInputs{
  display: none;
  height: 60px;
  background-color: transparent;
  border: 2px solid red;
  border-radius: 1rem;
  width: 80%;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 1rem;
}
.showErroInputs{
  display: flex ;
}
@keyframes animationPorco {
    0%{
        transform: translateY(0);
    }
    50%{
        transform: translateY(-15px);
    }
    100%{
        transform: translateY(0);
    }
}

@media screen and (max-width: 1024px) {
    section{
        flex-direction: column;
        width: 95%;
    }
    .ladoForm{
        width: 100%;
        height: 120%;
        padding: 20px;
    }
    .ladoForm > button {
        padding: 10px;
    }
    .ladoImg{
        width: 80%;
        height: 120%;
        margin: 20px auto;
    }
    form{
        width: 100%;
        height: 100%;   
    }
}
</style>