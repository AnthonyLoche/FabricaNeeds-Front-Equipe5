<script setup>
import { carregar, adicionar, atualizar, deletar } from '@/api/api.js'
import { ref, reactive } from 'vue'

const itens = ref([])
carregar('estoque/', itens)

const item = reactive({
    item: '',
    quantidade: 0
})
const modalAddIten = ref(null)
const inputPesquisa = ref("")
function filteredList() {
    return itens.value.filter((itemf) =>
        itemf.item.toLowerCase().includes(inputPesquisa.value.toLowerCase())
    );
}

</script>

<template>
   
    <main>
    <section>
        <h2>Estoque Atual:</h2>
        <input class="input-pesquisa" type="text" v-model="inputPesquisa" placeholder="Procurar itens..." />
        <div class="rolagemItens">
        <div id="estoque">
            <div class="item" v-for="item in filteredList()" :key="item.id">
                <div class="headerItem"><p>ID:</p>
                <p class="center">ITEM:</p>
                <p>QUANTIDADE:</p>
                <p>Ações:</p></div>
                <div class="bodyItem"><p>{{ item.id }}</p>
                <p>{{ item.item }}</p>
                <input type="number" v-model="item.quantidade" placeholder="Quantidade" class="inputAtualizar">
                <span><button @click="atualizar(item, 'estoque')">Atualizar</button>
                <button @click="deletar(item, 'estoque')">EXCLUIR ITEM</button></span>
            </div>
            </div>
            <div class="item error" v-if="inputPesquisa && !filteredList().length">
                                <p>No results found!</p>
            </div>

            
        </div>
    </div>
        <button @click="modalAddIten.showModal()">Adicionar Item</button>
    </section>
    <dialog id="modalAddIten" ref="modalAddIten">
        <div class="modalBody">
        <div class="modalHeader"><h2>
            Adicionar Item
        </h2>
        <button @click="modalAddIten.close()">X</button>
    </div>
        <form action="" method="post" @submit.prevent>
        <div class="input-label">
            <label for="">Item:</label>
            <input type="text" v-model="item.item">
        </div>
        <div class="input-label">
            <label for="">Quantidade:</label>
            <input type="number" v-model="item.quantidade" placeholder="Quantidade" >
            <button @click="adicionar('estoque/', item)">Adicionar</button>
        </div>
        </form>
    </div></dialog></main>

</template>

<style scoped>
* {
    color: white;
}

input.inputAtualizar{
    width: 10%;
    border: 0;
}

.item{
    width: 100%;
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
    justify-content: space-evenly;
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
.bodyItem > p, span{
    font-size: 1.2rem;
    margin-bottom: .5rem;
    margin-top: .5rem;
    text-align: start;
    width: 20%;
}
p.center{
    text-align: center;
}

span > button{
    width: 100%;
    padding: 0.5rem;
    border-radius: .5rem;
    border: 2px solid #8C52FF;
    background-color: #8C52FF;
    margin-top: .25rem;
    font-size: 16px;
    cursor: pointer;

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

#estoque{
    width: 80%;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 30px;
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
.input-pesquisa{
    margin: 1rem auto;
}
@media screen and (max-width: 1025px){
    dialog{
        width: 80%;
    }
    .item{
        flex-direction: column;
        gap: 10px;
    }
}
</style>