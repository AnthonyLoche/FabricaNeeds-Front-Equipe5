<script setup>
import store from '@/store/index.js'
import HeaderVue from '@/components/HeaderVue.vue'
import FooterVue from '@/components/FooterVue.vue'
import axios from 'axios';import { ref } from 'vue'
import router from '@/router'

if(store.state.isLoged == 'false'){
    alert("Você precisa estar logado para acessar essa página")
    router.push("/singin")
}

const pagamentos = ref([])
const pagamentosAprovados = ref([])
const pagamentosPendentes = ref([])

async function carregarPagamentos() {
    try {
        const response = await axios.get('https://webhook.peraza.live/obterPagamentos')
        
        pagamentos.value = response.data
        
        pagamentosAprovados.value = pagamentos.value.filter(pagamento => pagamento.status === 'approved' && pagamento.cliente === store.state.usuario)
        
        pagamentosPendentes.value = pagamentos.value.filter(pagamento => pagamento.status === 'Pendente' && pagamento.cliente === store.state.usuario) 

    } catch (error) {
        console.error('Erro ao carregar os pagamentos:', error)
    }
}

carregarPagamentos()

function copyPixCode(text) {
    navigator.clipboard.writeText(text)
    .then(() => alert('Código do PIX copiado!'))
    .catch(err => console.error('Erro ao copiar o código do PIX:', err))
}
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
                    <p>Status: <strong style="color: green;">Aprovado</strong></p>
                    <p>Data do Pagamento: {{ item.data_pagamento }}</p>
                    <p>Descrição: {{ item.descricao }}</p>
                    <p>Data de Aprovação: {{ item.data_aprovacao }}</p>
                    <p>Email: {{ item.email }}</p>
                </div>
                <h2>Pagamentos Pendentes:</h2>
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

</style>
