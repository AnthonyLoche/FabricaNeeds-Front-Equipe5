<script setup>
import store from '@/store/index.js'
import HeaderVue from '@/components/HeaderVue.vue'
import FooterVue from '@/components/FooterVue.vue'
import axios from 'axios';import { ref } from 'vue'

const email = store.state.email
const pagamentos = ref([])
const pagamentosAprovados = ref([])
const pagamentosPendentes = ref([])

async function carregarPagamentos() {
    try {
        const response = await axios.get('https://webhook.peraza.live/obterPagamentos')
        pagamentos.value = response.data
        pagamentosAprovados.value = pagamentos.value.filter(pagamento => pagamento.status === 'Aprovado' && pagamento.email === email)
        pagamentosPendentes.value = pagamentos.value.filter(pagamento => pagamento.status === 'Pendente' && pagamento.email === email) 
    } catch (error) {
        console.error('Erro ao carregar os pagamentos:', error)
    }
}

carregarPagamentos()
</script>

<template>
    <HeaderVue />
    <main>
        <section>
            <div class="helloUser">
                <h2>Olá {{ store.state.usuario }}, Seja Bem Vindo</h2>
                <h2>Veja aqui suas contribuições:</h2>
            </div>
            <div id="contribuicoes">
                <h2>Pagamentos Aprovados</h2>
                <div class="pagamento" v-for="item in pagamentosAprovados" :key="item.id">
                    <p>Valor: R${{ item.valor }}</p>
                    <p>Status: {{ item.status }}</p>
                    <p>Data do Pagamento: {{ item.data_pagamento }}</p>
                    <p>Descrição: {{ item.descricao }}</p>
                    <p>Data de Aprovação: {{ item.data_aprovacao }}</p>
                    <p>CPF: {{ item.cpf }}</p>
                    <p>Email: {{ item.email }}</p>
                </div>
                <h2>Pagamentos Pendentes:</h2>
                <div class="pagamento" v-for="item in pagamentosPendentes" :key="item.id" >
                <div>
                    <p>Valor: R${{ item.valor }}</p>
                    <p>Status: {{ item.status }}</p>
                    <p>Data do Pagamento: {{ item.data_pagamento }}</p>
                    <p>Descrição: {{ item.descricao }}</p>
                    <p>Data de Aprovação: {{ item.data_aprovacao }}</p>
                    <p>CPF: {{ item.cpf }}</p>
                    <p>Email: {{ item.email }}</p>
                </div>
                </div>
            </div>
        </section>
    </main>
    <FooterVue />
</template>

<style scoped>
section {
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border-radius: .5rem;
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

.helloUser>h2 {
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
    margin: 10px auto;
    color: white;
}

.pagamento{
    width: 100%;
    border: 2px solid #8C52FF;
    border-radius: 10px ;
    padding: 20px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;   
    gap: 15px;
}

.pagamento>p{
    width: 50%;
}

</style>
