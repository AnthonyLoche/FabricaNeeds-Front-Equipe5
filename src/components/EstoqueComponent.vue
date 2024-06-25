<script setup>
import EstoqueView from '@/components/Estoque/EstoqueView.vue'
import DemandasView from '@/components/Estoque/DemandasView.vue'
import EntradasView from '@/components/Estoque/EntradasView.vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { ref } from 'vue'
import { useCounterStore } from '@/store'
const store = useCounterStore()
import router from '@/router'

if (store.isLogged == false) {
  router.push('/')
  setTimeout(() => {
    toast.warning('Você precisa estar logado para acessar estoque', { autoClose: 1000 })
  }, 300)
  setTimeout(() => {
    router.push('/singin')
  }, 2500)
}

const tipoDiv = ref('estoque')
const setTipoDiv = (valor) => {
  tipoDiv.value = valor
}
</script>
<template>
  <div id="botoes">
    <div class="botao" @click="setTipoDiv('estoque')">
      <img src="../assets/estoque.png" alt="" class="icon" />
      <h1>ESTOQUE</h1>
    </div>
    <div class="botao" @click="setTipoDiv('demandas')">
      <img src="../assets/ponto.png" alt="" class="icon" />
      <h1>DEMANDAS</h1>
    </div>
    <div class="botao" @click="setTipoDiv('entradas')">
      <img src="../assets/mais.png" alt="" class="icon" />
      <h1>ENTRADAS</h1>
    </div>
  </div>
  <div v-if="tipoDiv == 'estoque'">
    <EstoqueView />
  </div>
  <div v-else-if="tipoDiv == 'demandas'">
    <DemandasView />
  </div>
  <div v-else>
    <EntradasView />
  </div>
</template>

<style scoped>
#botoes {
  display: flex;
  justify-content: space-around;
  color: white;
  margin: 20px auto;
  gap: 30px;
  width: 90%;
}

#botoes > div {
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
  #botoes {
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
