<script setup>
import { reactive, ref } from 'vue';
const entradas = ref([])
const demandas = ref([])
import { carregar, adicionar } from '@/api/api';

const entrada = reactive({
    quantidade: 0,
    demanda: "",
})

carregar('entradasEstoque/', entradas)
carregar('demandas/', demandas)
const modalAddIten = ref(null)
</script>

<template>
    <main>
        <section> <h2>Entradas Atuais:</h2>
            <div class="rolagemItens">
                <div class="LoadingDiv" v-if="entradas.length <= 0">
                <img src="../../assets/gif_carregando.gif" alt="">
                </div>
            <div class="item" v-for="entrada in entradas" :key="entrada.id">
                        <div>
                            <p class="headerItem">ID:</p>
                            <p>{{ entrada.id }}</p>
                        </div>
                        <div class="teste">
                            <p class="headerItem">DEMANDA:</p>
                            <p>{{ entrada.demanda }}</p>
                        </div>
                        <div class="acoes teste">
                            <p class="headerItem">QUANTIDADE:</p>
                            <p>{{ entrada.quantidade }}</p>
                        </div>
            </div>
        </div>
            <button @click="modalAddIten.showModal()">Adicionar Entrada</button>
        </section>
        <dialog id="modalAddIten" ref="modalAddIten">
            <div class="modalBody">
                <div class="modalHeader">
                    <h2>Adicionar Entrada</h2>
                    <button @click="modalAddIten.close()">X</button>
                </div>
                <form action="" method="post" @submit.prevent>
                    <div class="input-label">
                        <label for="">Demanda:</label>
                        <select name="" id="" v-model="entrada.demanda">
                            <option v-for="item in demandas" :key="item.id" :value="item.id">
                                {{ item.nome_produto }}
                            </option>
                        </select>
                    </div>
                    <div class="input-label">
                        <label for="">Quantidade:</label>
                        <input type="number" placeholder="quantidade" v-model="entrada.quantidade">
                    </div>
                    <button class="acao" @click="adicionar('entradasEstoque/', entrada)">Enviar</button>
                </form>
            </div>
        </dialog>
    </main>
</template>

<style scoped>
* {
    color: white;
}
.item {
    width: 100%;
    display: grid;
    margin: 1rem auto;
    grid-template-columns: 1fr 1fr 1fr;
    border: 2px solid #8C52FF;
    border-radius: 10px;
    padding: 20px;
    gap: 20px;
}
.item > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 12pt;
}
.headerItem{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    flex-wrap: nowrap;
}
p.headerItem {
    margin-bottom: .5rem;
    font-size: 1.2rem;
    text-align: center;
    color: #8C52FF;
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
    text-align: center;
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
    position: absolute;
    top: 60%;
}
.modalBody{
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
}
button.acao {
    width: 100%;
    padding: 0.5rem;
    border-radius: .5rem;
    border: 2px solid #8C52FF;
    background-color: #8C52FF;
    margin-top: .25rem;
    margin-bottom: 1rem;
    font-size: 16px;
    cursor: pointer;
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
.LoadingDiv{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    margin-top: 4%;
    width: 100%;
}
.LoadingDiv > img{
    width: 100px;
    height: 100px;
}
@media screen and (max-width: 1025px) {
    dialog {
        width: 80%;
        scrollbar-width: none;
        /* display: flex; */
        margin: auto;
        position: fixed;
        height: 55%;
        top: 2%;
    }

    .item {
        display: flex;
        flex-direction: column;
        width: 100%;
        margin: auto;
        gap: 20px;
    }
    .item > .teste {
        border-top: 2px solid #8C52FF;
        padding-top: 15px;
        gap: 10px;
    }
    section{
        width: 95%;
    }
    
    .modalBody > form {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }
    .modalBody > .modalHeader {
        display: flex;
        font-size: 10pt;
    }

    .modalBody > form > .input-label {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 10px;
    }

    .modalBody > form > .input-label > label, input {
        width: 80%;
        text-align: center;
    }

}
</style>