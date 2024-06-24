<script setup>
import { useCounterStore } from '@/store';
const store = useCounterStore()
import axios from 'axios';
import { ref } from 'vue'
import router from '@/router'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';
import VerifyEmailVue from './VerifyEmailVue.vue';

if(store.isLogged == false){
    toast.warning("Você precisa estar logado para acessar essa página", {autoClose: 1000, position: 'top-center'})
    router.push("/singin")
}

const pagamentos = ref([])
const pagamentosAprovados = ref([])
const pagamentosPendentes = ref([])

async function carregarPagamentos() {
    try {
        const response = await axios.get('https://webhook.peraza.live/obterPagamentos')
        
        pagamentos.value = response.data
        
        pagamentosAprovados.value = pagamentos.value.filter(pagamento => pagamento.status === 'approved' && pagamento.cliente === store.usuario)
        
        pagamentosPendentes.value = pagamentos.value.filter(pagamento => pagamento.status === 'Pendente' && pagamento.cliente === store.usuario) 

    } catch (error) {
        console.error('Erro ao carregar os pagamentos:', error)
    }
}

carregarPagamentos()

function copyPixCode(text) {
    navigator.clipboard.writeText(text)
    .then(() => toast.success("Código do PIX copiado!", {autoClose: 1000, position: 'top-center'}))
    .catch(err => console.error('Erro ao copiar o código do PIX:', err))
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
                <h2 v-if="!pagamentosAprovados.length == 0">Pagamentos Aprovados</h2>
                <div class="pagamento" v-for="item in pagamentosAprovados" :key="item.id">
                    <p>Valor: R${{ item.valor }}</p>
                    <p>Status: <strong style="color: green;">Aprovado</strong></p>
                    <p>Data do Pagamento: {{ item.data_pagamento }}</p>
                    <p>Descrição: {{ item.descricao }}</p>
                    <p>Data de Aprovação: {{ item.data_aprovacao }}</p>
                    <p>Email: {{ item.email }}</p>
                </div>
                <h2 v-if="!pagamentosPendentes.length == 0">Pagamentos Pendentes:</h2>
                <div class="pagamento" v-for="item in pagamentosPendentes" :key="item.id" >
                
                    <p>Valor: R${{ item.valor }}</p>
                    <p>Status: <strong style="color: red;">Pendente</strong></p>
                    <p>Data do Pagamento: {{ item.data_pagamento }}</p>
                    <p>Descrição: {{ item.descricao }}</p>
                    <p>Data de Aprovação: {{ item.data_aprovacao }}</p>
                    <p>Email: {{ item.email }}</p>
                    <p>Pix Copia e Cola: 
                        <button @click="copyPixCode(item.pix_copiacola)" class="">Copiar PIX Copia e Cola</button>
                    </p>
                </div>
            <div v-if="pagamentosAprovados.length == 0 && pagamentosPendentes == 0" class="semContribuicao">
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
    margin: 1rem auto;
    color: white;
}


.pagamento{
    width: 100%;
    border: 2px solid #8C52FF;
    border-radius: 10px ;
    padding: 20px;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;   
    gap: 15px;
}

.pagamento>p{
    width: 50%;
}
button{
padding: 10px;
  font-size: 18px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  background-color: #8C52FF;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: .5rem;
  z-index: 2;
}
.semContribuicao{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin: 3% auto 20% auto;
    color: white;
}


</style>