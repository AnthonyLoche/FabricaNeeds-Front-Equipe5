<script setup>
import { reactive, ref } from 'vue';
const demandas = ref([])
const estoque = ref([])
import { carregar } from '@/api/api';
import { adicionar } from '@/api/api';

const demanda = reactive({
    quantidade: 0,
    produto: '',
})

carregar('demandas/', demandas)
carregar('estoque/', estoque)
const modalAddIten = ref(null)
</script>

<template>
    <main>
        <section>
            <h2>Demandas Atuais:</h2>
            <div class="rolagemItens">
    <div class="item" v-for="demanda in demandas" :key="demanda.id">
    <div class="headerItem"><p>ID:</p>
    <p>PRODUTO:</p>
    <p>QUANTIDADE:</p>
<p>DATA:</p></div>
    <div class="bodyItem">
        <p>{{ demanda.id }}</p>
        <p>{{ demanda.produto }}</p>
        <p>{{ demanda.quantidade }}</p>
        <p>{{ demanda.data }}</p>
    </div>
    </div>
</div>
    <button @click="modalAddIten.showModal()">Adicionar Demanda</button>
</section>
<dialog id="modalAddIten" ref="modalAddIten">
        <div class="modalBody">
        <div class="modalHeader"><h2>
            Adicionar Demanda
        </h2>
        <button @click="modalAddIten.close()">X</button>
    </div>
        <form action="" method="post" @submit.prevent>
        <div class="input-label">
            <label for="">Item:</label>
            <select name="" id="" v-model="demanda.produto">
            <option v-for="item in estoque" :key="item.id" :value="item.id">
            {{ item.item }}
            </option>
        </select>
        </div>
        <div class="input-label">
            <label for="">Quantidade:</label>
            <input type="number" placeholder="quantidade" v-model="demanda.quantidade"></div>
            <button @click="adicionar('demandas/', demanda)">Enviar</button>
        </form>
    </div></dialog>
    </main>
</template>

<style scoped>
* {
    color: white;
}
.item{
    width: 80%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: flex;
    border: 2px solid #8C52FF;
    flex-direction: column;
    border-radius: 10px;
    padding: 20px;
    justify-content: space-around;
    align-items: center;
}
.headerItem{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    flex-wrap: nowrap;
}
.headerItem > p{
    font-size: 1.2rem;
    margin-bottom: .5rem;
    margin-top: .5rem;
    text-align: start;
    color: #8C52FF;
    width: 20%;
}
.bodyItem{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    flex-wrap: nowrap;
}
.bodyItem > p{
    font-size: 1.2rem;
    margin-bottom: .5rem;
    margin-top: .5rem;
    text-align: start;
    width: 20%;
}
section {
    width: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border-radius: .5rem;
    padding: 1rem;
}
section > button{
    width: 50%;
    padding: 0.5rem;
    border-radius: .5rem;
    border: 2px solid #8C52FF;
    background-color: #8C52FF;
    margin-top: 2rem;
    font-size: 16px;
    cursor: pointer;
}
section > button:hover{
    background-color: transparent;
    color: #8C52FF;
    transition: 1s;
}
h2 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
dialog{
    width: 40%;
    margin: auto;
    /* display: flex; */
    flex-direction: column;
    align-items: center;
    background-color: rgb(35 35 35);
    border-radius: .5rem;
    border: 2px solid #8C52FF;
    padding: 1rem;
}
.modalBody{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 80%;
    padding: 1rem;
    height: 250px;
}
.input-label{
    display: flex;
    margin-top: 5%;
    margin-bottom: 5%;
    width: 100%;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.input-label > label{
    font-size: 1.2rem;
    margin-bottom: .5rem;
    margin-top: .5rem;
}
.input-label > select{
    background-color: transparent;
    color: white;
    width: 60%;
    height: 40px;
    padding: 10px;
    /* text-align: center; */
    border: 2px solid #8C52FF;
    border-radius: 1rem; 
    /* box-shadow: 3px 3px 2px rgb(249, 255, 85); */
}
select > option{
    background-color: transparent;
    color: black;
    width: 60%;
    height: 40px;
    padding: 10px;
    /* text-align: center; */
    border: 2px solid #8C52FF;
    border-radius: 1rem; 
    /* box-shadow: 3px 3px 2px rgb(249, 255, 85); */
}
input {
  background-color: transparent;
  color: white;
  width: 60%;
  height: 40px;
  padding: 10px;
  /* text-align: center; */
  border: 2px solid #8C52FF;
  border-radius: 1rem; 
  /* box-shadow: 3px 3px 2px rgb(249, 255, 85); */
}
input:focus {
  color:  white;
  background-color: transparent;
  outline-color: #8C52FF;
  box-shadow: -3px -3px 15px #8C52FF;
  transition: .1s;
  transition-property: box-shadow;
}
form > button{
    width: 50%;
    margin: auto;
    font-size: 16px;
    height: 40px;
    background-color: #8C52FF;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    margin-top: 1rem;
}
.modalHeader{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 1rem;
    margin-bottom: 2rem;
}
.modalHeader > h2{
    color: white;
    font-size: 1.8rem;
    margin-top: 2%;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}
.modalHeader > button{
    background-color: transparent;
    color: #8C52FF;
    width: 50px;
    border: 2px solid #8C52FF;
    font-size: 20px;
    height: 50px;
    border-radius: 10px;
    cursor: pointer;
}
.rolagemItens{
    width: 100%;
    max-height: 450px;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
    padding: 1rem;
    border: 2px solid #8C52FF;
    border-radius: 10px;
}
</style>