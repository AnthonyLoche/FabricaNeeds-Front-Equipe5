<script setup>
import EstoqueView from '@/components/Estoque/EstoqueView.vue'
import DemandasView from '@/components/Estoque/DemandasView.vue'
import EntradasView from '@/components/Estoque/EntradasView.vue'

import { ref } from 'vue'
import { useUserStore } from '@/store'
const store = useUserStore()
import router from '@/router'
import notify from '@/notify/toastify'

if (store.isLogged == false) {
  router.push('/')
  setTimeout(() => {
    notify('Você precisa estar logado para acessar estoque', { autoClose: 1000 })
  }, 300)
  setTimeout(() => {
    router.push('/singin')
  }, 2500)
}

const tipoDiv = ref('stock')
const setTipoDiv = (valor) => {
  tipoDiv.value = valor
}
</script>
<template>
  <div id="buttons">
    <div class="botao" @click="setTipoDiv('stock')">
      <img src="../assets/estoque.png" alt="" class="icon" />
      <h1>ESTOQUE</h1>
    </div>
    <div class="botao" @click="setTipoDiv('requests')">
      <img src="../assets/ponto.png" alt="" class="icon" />
      <h1>DEMANDAS</h1>
    </div>
    <div class="botao" @click="setTipoDiv('enterups')">
      <img src="../assets/mais.png" alt="" class="icon" />
      <h1>ENTRADAS</h1>
    </div>
  </div>
  <div v-if="tipoDiv == 'stock'">
    <EstoqueView />
  </div>
  <div v-else-if="tipoDiv == 'requests'">
    <DemandasView />
  </div>
  <div v-else>
    <EntradasView />
  </div>
</template>

<style scoped>
#buttons {
  display: flex;
  justify-content: space-around;
  color: white;
  margin: 20px auto;
  gap: 30px;
  width: 90%;
}

#buttons > div {
  border: 2px solid #8c52ff;
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

.icon {
  filter: invert(1);
  width: 20%;
}

@media screen and (max-width: 1025px) {
  #buttons {
    flex-direction: column;
    gap: 20px;
    margin: 10px auto;
    width: 80%;
    align-items: center;
    justify-content: center;
  }

  #buttons > div {
    padding: 20px;
  }
}
</style>
