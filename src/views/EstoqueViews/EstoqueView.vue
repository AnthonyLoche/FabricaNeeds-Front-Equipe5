<script setup>
import HeaderVue from '@/components/HeaderVue.vue';
import FooterVue from '@/components/FooterVue.vue';
import { carregar, adicionar } from '@/api/api.js'
import { ref, reactive } from 'vue'

const itens = ref([])
carregar('estoque/', itens)

const item = reactive({
    item: '',
    quantidade: 0
})
const modalAddIten = ref(null)
</script>

<template>
    <HeaderVue />
    <main>
    <section>
        <h2>Estoque Atual:</h2>
        <div class="estoque">
            <div v-for="item in itens" :key="item.id" class="itensEstoque">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Item</th>
                        <th>Quantidade</th>
                    </tr>
                    <tr>
                        <td>{{ item.id }}</td>
                        <td>{{ item.item }}</td>
                        <td>{{ item.quantidade }}</td>
                    </tr>
                </table>
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
            <input type="number" v-model="item.quantidade" placeholder="Quantidade"></div>
            <button @click="adicionar('estoque/', item)">Adicionar</button>
        </form>
    </div></dialog>
</main>
<FooterVue />
</template>

<style scoped>
* {
    color: white;
}
section {
    width: 60%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    border-radius: .5rem;
    padding: 1rem;
}
section > button{
    width: 20%;
    padding: .5rem;
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
.estoque{
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;
    max-height: 400px;
    overflow-y: scroll;
    border-radius: .5rem;
    margin-bottom: 2rem;
}
.estoque::-webkit-scrollbar{
    width: 12px;
    padding: .5rem;
    border-radius: 10px;
}
.estoque::-webkit-scrollbar-thumb{
    background-color: #8C52FF;
    border: 2px solid rgb(35 35 35);
    border-radius: 10px;
    width: 10px;
}
.estoque::-webkit-scrollbar-track{
    background-color: transparent;
    border: 2px solid rgb(35 35 35);
    border-radius: 10px;
}
.itensEstoque{
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: .5rem;
    border-radius: .5rem;
    margin-bottom: 1.5rem;
    border: 2px solid #8C52FF;
}
.itensEstoque > button{
    width: 20%;
    padding: .5rem;
    border-radius: .5rem;
    border: 2px solid #8C52FF;
    background-color: #8C52FF;
    font-size: 16px;
    cursor: pointer;

}
table {
    width: 100%;
    color: white;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    border-radius: .5rem;
}

th {
    font-size: 1.2rem;
    padding: 1rem;
    color: #8C52FF;
}

td {
    font-size: 1rem;
    padding: 1rem;
    text-align: center;
}

@media screen and (max-width: 1024px) {
    section {
        width: 100%;
    }
    dialog {
        width: 70%;
    }
    .estoque {
        width: 80%;
    }
    .itensEstoque {
        width: 80%;
    }
    
}
</style>