<script setup>
import { reactive } from 'vue'
import { cpf } from 'cpf-cnpj-validator'; 
import axios from 'axios';
import notify from '@/notify/toastify.js';
import { useUserStore } from '@/store';
const store = useUserStore()


const payment = reactive({
    paymentData: {
        transaction_amount: 0,
        description: "",
        paymentMethodId: "pix",
        email: store.email,
        identificationType: "CPF",
        number: 0
    }
})

async function pay(objeto) {
  if (
    payment.paymentData.transaction_amount <= 0 ||
    payment.paymentData.transaction_amount == ''
  ) {
    notify('O valor não pode ser 0 ou negativo', { autoClose: 1000 })
  } else if (
    payment.paymentData.number == '' ||
    payment.paymentData.number.length != 11 ||
    !cpf.isValid(payment.paymentData.number)
  ) {
    notify('Insira um CPF Válido!', { autoClose: 1000 })
  } else if (payment.paymentData.description == '') {
    notify('Insira uma descrição', { autoClose: 1000 })
  } else {
    notify('Pagamento gerado com sucesso', { autoClose: 1000 })
    const { data } = await axios.post('https://webhook.peraza.live/payment/', objeto)

    const gerarPagamento = reactive({
      id: data.result.id,
      cliente: store.usuario,
      email: payment.paymentData.email,
      cpf: payment.paymentData.number,
      valor: payment.paymentData.transaction_amount,
      status: 'Pendente',
      data_pagamento: new Date(),
      data_aprovacao: '',
      descricao: payment.paymentData.description,
      pix_copiacola: data.result.point_of_interaction.transaction_data.qr_code
    })
    await axios.post('https://webhook.peraza.live/cadastrarPagamento/', gerarPagamento)
    window.open(data.result.point_of_interaction.transaction_data.ticket_url)
  }
}

</script>

<template>
  <section>
    <div class="ladoForm">
      <h1>Contribuir</h1>
      <form action="" method="post" @submit.prevent>
        <div class="input-label">
          <label for="valor">Valor:</label>
          <input
            type="number"
            v-model="payment.paymentData.transaction_amount"
            placeholder="Valor"
            required
            class="input"
          />
        </div>
        <div class="input-label">
          <label for="">CPF:</label>
          <input type="text" v-model="payment.paymentData.number" required class="input" />
        </div>
        <div class="input-label">
          <label for="">Descrição:</label>
          <input type="text" v-model="payment.paymentData.description" class="input" />
        </div>
        <div class="input-label"></div>
        <button @click="pay(payment)">Pagar</button>
      </form>
    </div>
    <div class="ladoImg">
      <div class="cofreImg"><img src="../assets/Cofre.png" alt="" /></div>
    </div>
  </section>
</template>

<style scoped>
section {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  margin: auto;
  background-color: rgb(35 35 35);
  border-radius: 0.5rem;
}
.ladoForm {
  width: 50%;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.ladoForm > h1 {
  color: white;
  font-size: 2rem;
  margin-bottom: 1.5rem;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.input-label {
  display: flex;
  margin-top: 5%;
  margin-bottom: 5%;
  width: 100%;
  flex-wrap: nowrap;
  justify-content: space-between;
}
form {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  /* align-items: center; */
  width: 80%;
  padding: 1rem;
  height: 440px;
}
.input-label > label {
  /* font-size: 1.5rem; */
  color: white;
  margin-left: 3%;
  margin-top: 3%;
  margin-bottom: 2%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
form > button {
  width: 50%;
  margin: auto;
  font-size: 16px;
  height: 40px;
  background-color: #8c52ff;
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
.ladoImg {
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cofreImg {
  width: 80%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cofreImg > img {
  width: 80%;
  height: 80%;
  animation: animationPorco 1s infinite;
}
@keyframes animationPorco {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
}

@media screen and (max-width: 1024px) {
  section {
    flex-direction: column;
    width: 95%;
  }
  .ladoForm {
    width: 100%;
    height: 120%;
    padding: 20px;
  }
  .ladoForm > button {
    padding: 10px;
  }
  .ladoImg {
    width: 80%;
    height: 120%;
    margin: 20px auto;
  }
  form {
    width: 100%;
    height: 100%;
  }
}
</style>
