<script setup>
import EstoqueView from '@/components/Estoque/EstoqueView.vue';
import DemandasView from '@/components/Estoque/DemandasView.vue';
import EntradasView from '@/components/Estoque/EntradasView.vue';
import HeaderVue from '@/components/HeaderVue.vue';
import FooterVue from '@/components/FooterVue.vue';
import { ref } from 'vue';
import { useCounterStore } from '@/store';
const store = useCounterStore()
import router from '@/router';

if(store.isLogged == false){
    document.write('<body style= "background-color: rgb(26 26 26)"><div style= "width: 30%;display: flex;justify-content: center;align-items: center;color: white;margin: 5% auto;height: 110px;background-color: rgb(26 26 26);border: 2px solid red;border-radius: 1rem;font-size: 1.2rem;z-index: 5;"><p>Você precisa estar logado para acessar essa página</p></div><div style="margin: auto;width: 30%;display: flex;justify-content:center "><button style="width: 30%;margin: auto;font-size: 16px;height: 40px;background-color: #8C52FF;color: white;border: none;cursor: pointer;border-radius: 1rem;margin-top: .5rem;z-index: 4;" onclick="window.location.reload(true)">Login</button></div></body>')
    router.push("/singin")
}


const estoqueDiv = ref(true)
const demandasDiv = ref(false)
const entradasDiv = ref(false)

const estoqueFuncao = () => {
    estoqueDiv.value = true
    demandasDiv.value = false
    entradasDiv.value = false
}

const demandasFuncao = () => {
    estoqueDiv.value = false
    demandasDiv.value = true
    entradasDiv.value = false
}

const entradasFuncao = () => {
    estoqueDiv.value = false
    demandasDiv.value = false
    entradasDiv.value = true
}

</script>

<template>
    <HeaderVue />

    <div id="botoes">
        <div class="botao" @click="estoqueFuncao">
            <img src="../../assets/estoque.png" alt="" class="icon">
            <h1>ESTOQUE</h1>
        </div>
        <div class="botao" @click="demandasFuncao">
            <img src="../../assets/ponto.png" alt="" class="icon">
            <h1>DEMANDAS</h1>
        </div>
        <div class="botao" @click="entradasFuncao">
            <img src="../../assets/mais.png" alt="" class="icon">
            <h1>ENTRADAS</h1>
        </div>
    </div>

    <div v-if="estoqueDiv == true">
        <EstoqueView />
    </div>

    <div v-if="demandasDiv == true">
        <DemandasView />
    </div>

    <div v-if="entradasDiv == true">
        <EntradasView />
    </div>

    <FooterVue />
</template>

<style scoped>

#botoes{
    display: flex;
    justify-content: space-around;
    color: white;
    margin: 20px auto;
    gap: 30px;
    width: 90%;
}

#botoes > div {
    border: 2px solid #8C52FF;
    width: 90%;
    padding: 30px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    flex-direction: column;
    gap: 20px;
}

.icon{
    filter: invert(1);
    width: 20%;
}

@media screen and (max-width: 1025px) {
    #botoes{
        flex-direction: column;
        gap: 20px;
        margin: 10px auto;
        width: 80%;
        align-items: center;
        justify-content: center;
    }

    #botoes > div {
        padding: 20px;
    }
    
}
</style>