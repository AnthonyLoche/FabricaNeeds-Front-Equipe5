<script setup>
import { useUserStore } from '@/store'
const store = useUserStore()
import axios from 'axios'
import { ref } from 'vue'
import router from '@/router'
import notify from '@/notify/toastify.js';
import VerifyEmailVue from './VerifyEmailVue.vue';

if(store.isLogged == false){
    notify('warning', "Você precisa estar logado para acessar essa página")
    router.push("/singin")
}

const payments = ref([])
const paymentsApproved = ref([])
const paymentsPending = ref([])

async function loadPayments() {
  try {
    const response = await axios.get('https://webhook.peraza.live/getpayments')

    payments.value = response.data

    paymentsApproved.value = payments.value.filter(
      (payment) => payment.status === 'approved' && payment.cliente === store.usuario
    )

    paymentsPending.value = payments.value.filter(
      (payment) => payment.status === 'Pendente' && payment.cliente === store.usuario
    )
  } catch (error) {
    console.error('Error loadItem os payments:', error)
  }
}

loadPayments()

function copyPixCode(text) {
  navigator.clipboard
    .writeText(text)
    .then(() =>
      notify('Código do PIX copiado!', { autoClose: 1000, position: 'top-center' })
    )
    .catch((error) => console.error('Error copiar o código do PIX:', error))
}
</script>

<template>
  <main>
    <section>
      <div class="helloUser">
        <h2>Olá {{ store.usuario }}, Seja Bem Vindo</h2>
        <h2>Veja aqui suas contribuições:</h2>
      </div>
      <div id="contribuicoes">
        <h2 v-if="!paymentsApproved.length == 0">payments Aprovados</h2>
        <div class="payment" v-for="item in paymentsApproved" :key="item.id">
          <p>Valor: R${{ item.valor }}</p>
          <p>Status: <strong style="color: green">Aprovado</strong></p>
          <p>Data do Pagamento: {{ item.data_pagamento }}</p>
          <p>Descrição: {{ item.descricao }}</p>
          <p>Data de Aprovação: {{ item.data_aprovacao }}</p>
          <p>Email: {{ item.email }}</p>
        </div>
        <h2 v-if="!paymentsPending.length == 0">payments Pendentes:</h2>
        <div class="payment" v-for="item in paymentsPending" :key="item.id">
          <p>Valor: R${{ item.valor }}</p>
          <p>Status: <strong style="color: red">Pendente</strong></p>
          <p>Data do Pagamento: {{ item.data_pagamento }}</p>
          <p>Descrição: {{ item.descricao }}</p>
          <p>Data de Aprovação: {{ item.data_aprovacao }}</p>
          <p>Email: {{ item.email }}</p>
          <p>
            Pix Copia e Cola:
            <button @click="copyPixCode(item.pix_copiacola)" class="">
              Copiar PIX Copia e Cola
            </button>
          </p>
        </div>
        <div
          v-if="paymentsApproved.length == 0 && paymentsPending == 0"
          class="semContribuicao"
        >
          <h2>Você não contribuiu nenhuma vez :(</h2>
          <button @click="router.push('/contribuir')">click aqui para contribuir :)</button>
        </div>
      </div>
    </section>
    <div>
      <verify-email-vue />
    </div>
  </main>
</template>

<style scoped>
section {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border-radius: 0.5rem;
  padding: 1rem;
}

.helloUser {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
  margin-top: 1%;
  padding: 1rem;
}

.helloUser > h2 {
  color: white;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

#contribuicoes {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 1rem auto;
  color: white;
}

.payment {
  width: 100%;
  border: 2px solid #8c52ff;
  border-radius: 10px;
  padding: 20px;
  margin: 1rem auto;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 15px;
}

.payment > p {
  width: 50%;
}
button {
  padding: 10px;
  font-size: 18px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #8c52ff;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 0.5rem;
  z-index: 2;
}
.semContribuicao {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin: 3% auto 20% auto;
  color: white;
}
</style>
