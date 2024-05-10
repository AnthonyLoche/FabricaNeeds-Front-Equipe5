<script setup>
import HeaderVue from '../../components/HeaderVue.vue'
import { reactive, ref } from 'vue'
import axios from 'axios';
import store from '@/store/index.js'

const isOpen = ref(false)
const qrcode = ref("")


const pagamento = reactive({
    paymentData: {
        transaction_amount: 0,
        description: "",
        paymentMethodId: "pix",
        email: "",
        identificationType: "CPF",
        number: 0
    }
})



async function testePagar(objeto) {
    const { data } = await axios.post("https://webhook.peraza.live/pagamento/", objeto)
    const teste = reactive({
        id: data.result.id,
        cliente: store.state.usuario,
        email: pagamento.paymentData.email,
        cpf: pagamento.paymentData.number,
        valor: pagamento.paymentData.transaction_amount,
        status: "pendent",
    })
    const { teste2 } = await axios.post("https://webhook.peraza.live/cadastrarPagamento/", teste)
    isOpen.value = true
    window.open(data.result.point_of_interaction.transaction_data.ticket_url)
}


</script>

<template>
    <HeaderVue />
    <p style="color: white;">{{ store.state.usuario }}</p>
    <h1>Contribuir</h1>
    <form action="" method="post" @submit.prevent>
        <label for="valor">Valor</label>
        <input type="number" v-model="pagamento.paymentData.transaction_amount" placeholder="Valor" required>
        <label for="email">Email</label>
        <input type="email" v-model="pagamento.paymentData.email" placeholder="Email" required>
        <label for="cpf">CPF</label>
        <input type="number" v-model="pagamento.paymentData.number" placeholder="CPF" required>
        <label for="description">Descrição</label>
        <input type="text" v-model="pagamento.paymentData.description" placeholder="Descrição" required>
        <button @click="testePagar(pagamento)">Pagar</button>
    </form>
    
</template>

<style scoped></style>