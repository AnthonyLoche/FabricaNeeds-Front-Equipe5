<script setup>
import HeaderVue from '../../components/HeaderVue.vue'
import { reactive, ref } from 'vue'
import axios from 'axios';

const isOpen= ref(false)
const qrcode = ref("")

async function testePagar(objeto){
    const {data} = await axios.post("http://localhost:3000/pagamento/", objeto)
    console.log(data)
    isOpen.value = true
    qrcode.value = data.point_of_interaction.transaction_data.qr_code_base64
    console.log(qrcode.value)
}

const pagamento = reactive({
    paymentData: {
        transaction_amount: 0,
        description: "",
        paymentMethodId: "pix",
        email: "",
        identificationType: "CPF",
        number: ""
    }
})



</script>

<template>
    <HeaderVue />
    <h1>Contribuir</h1>
    <form action="" method="post" @submit.prevent> 
            <label for="valor">Valor</label>
            <input type="number" v-model="pagamento.paymentData.transaction_amount" placeholder="Valor" required>
            <label for="email">Email</label>
            <input type="email" v-model="pagamento.paymentData.email" placeholder="Email" required>
            <label for="cpf">CPF</label>
            <input type="text" v-model="pagamento.paymentData.number" placeholder="CPF" required>
            <label for="description">Descrição</label>
            <input type="text" v-model="pagamento.paymentData.description" placeholder="Descrição" required>


            <button @click="testePagar(pagamento)">Pagar</button>
    </form>
    <img v-if="isOpen == true" :src="'data:image/jpeg;base64,' + qrcode" alt="" width="40%">

</template>

<style scoped></style>